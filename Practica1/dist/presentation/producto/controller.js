"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ProductosController {
    //* DI
    constructor() {
        this.getProductos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const producto = yield postgres_1.prisma.producto.findMany();
            return res.json(producto);
        });
        this.getProductoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_producto = +req.params.id_producto;
            //    localhost:3000/producto/1
            if (isNaN(id_producto))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const Product = yield postgres_1.prisma.producto.findFirst({
                where: { id_producto }
            });
            (Product)
                ? res.json(Product)
                : res.status(404).json({ error: `Producto with id ${id_producto} not found` });
        });
        this.createProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createProductoDto] = dtos_1.CreateProductoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const Product = yield postgres_1.prisma.producto.create({
                data: createProductoDto
            });
            res.json(Product);
        });
        this.updateProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_producto = +req.params.id_producto;
            const [error, updateProductoDto] = dtos_1.UpdateProductoDto.create(Object.assign(Object.assign({}, req.body), { id_producto }));
            if (error)
                return res.status(400).json({ error });
            const Product = yield postgres_1.prisma.producto.findFirst({
                where: { id_producto }
            });
            if (!Product)
                return res.status(404).json({ error: `Producto with id ${id_producto} not found` });
            const updatedProducto = yield postgres_1.prisma.producto.update({
                where: { id_producto },
                data: updateProductoDto.values
            });
            res.json(updatedProducto);
        });
        this.deleteProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_producto = +req.params.id_producto;
            const Product = yield postgres_1.prisma.producto.findFirst({
                where: { id_producto }
            });
            if (!Product)
                return res.status(404).json({ error: `Producto with id ${id_producto} not found` });
            const deleted = yield postgres_1.prisma.producto.delete({
                where: { id_producto }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Producto with id ${id_producto} not found` });
        });
    }
}
exports.ProductosController = ProductosController;
