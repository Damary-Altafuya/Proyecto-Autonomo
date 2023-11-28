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
exports.CarritousController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CarritousController {
    //* DI
    constructor() {
        this.getcarritos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const carrito = yield postgres_1.prisma.carrito.findMany();
            return res.json(carrito);
        });
        this.getCarritoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_carrito = +req.params.id_carrito;
            //    localhost:3000/producto/1
            if (isNaN(id_carrito))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const car = yield postgres_1.prisma.carrito.findFirst({
                where: { id_carrito }
            });
            (car)
                ? res.json(car)
                : res.status(404).json({ error: `Comprador with id ${id_carrito} not found` });
        });
        this.createCarrito = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCarritoDto] = dtos_1.CreateCarritoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const car = yield postgres_1.prisma.carrito.create({
                data: createCarritoDto
            });
            res.json(car);
        });
        this.updateCarrito = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_carrito = +req.params.id_carrito;
            const [error, updateCarritoDto] = dtos_1.UpdateCarritoDto.create(Object.assign(Object.assign({}, req.body), { id_carrito }));
            if (error)
                return res.status(400).json({ error });
            const car = yield postgres_1.prisma.carrito.findFirst({
                where: { id_carrito }
            });
            if (!car)
                return res.status(404).json({ error: `carrito with id ${id_carrito} not found` });
            const updatedCarrito = yield postgres_1.prisma.carrito.update({
                where: { id_carrito },
                data: updateCarritoDto.values
            });
            res.json(updatedCarrito);
        });
        this.deleteCarrito = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_carrito = +req.params.id_carrito;
            const car = yield postgres_1.prisma.carrito.findFirst({
                where: { id_carrito }
            });
            if (!car)
                return res.status(404).json({ error: `carrito with id ${id_carrito} not found` });
            const deleted = yield postgres_1.prisma.carrito.delete({
                where: { id_carrito }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `carrito with id ${id_carrito} not found` });
        });
    }
}
exports.CarritousController = CarritousController;
