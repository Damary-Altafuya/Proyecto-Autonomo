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
exports.CategoriesController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CategoriesController {
    //* DI
    constructor() {
        this.getcategorias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const categoria = yield postgres_1.prisma.categoria.findMany();
            return res.json(categoria);
        });
        this.getCategoriaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_categoria = +req.params.id_categoria;
            //    localhost:3000/producto/1
            if (isNaN(id_categoria))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const categ = yield postgres_1.prisma.categoria.findFirst({
                where: { id_categoria }
            });
            (categ)
                ? res.json(categ)
                : res.status(404).json({ error: `categoria with id ${id_categoria} not found` });
        });
        this.createCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCategoriaDto] = dtos_1.CreateCategoriaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const categ = yield postgres_1.prisma.categoria.create({
                data: createCategoriaDto
            });
            res.json(categ);
        });
        this.updateCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_categoria = +req.params.id_categoria;
            const [error, updateCategoriaDto] = dtos_1.UpdateCategoriaDto.create(Object.assign(Object.assign({}, req.body), { id_categoria }));
            if (error)
                return res.status(400).json({ error });
            const categ = yield postgres_1.prisma.categoria.findFirst({
                where: { id_categoria }
            });
            if (!categ)
                return res.status(404).json({ error: `categoria with id ${id_categoria} not found` });
            const updateCategoria = yield postgres_1.prisma.categoria.update({
                where: { id_categoria },
                data: updateCategoriaDto.values
            });
            res.json(updateCategoria);
        });
        this.deleteCategoria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_categoria = +req.params.id_categoria;
            const categ = yield postgres_1.prisma.categoria.findFirst({
                where: { id_categoria }
            });
            if (!categ)
                return res.status(404).json({ error: `categoria with id ${id_categoria} not found` });
            const deleted = yield postgres_1.prisma.categoria.delete({
                where: { id_categoria }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `categoria with id ${id_categoria} not found` });
        });
    }
}
exports.CategoriesController = CategoriesController;
