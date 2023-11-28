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
exports.TransaccionesController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TransaccionesController {
    //* DI
    constructor() {
        this.getTransacciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const transaccion = yield postgres_1.prisma.transaccion.findMany();
            return res.json(transaccion);
        });
        this.getTransaccionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_transaccion = +req.params.id_transaccion;
            //    localhost:3000/producto/1
            if (isNaN(id_transaccion))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const transac = yield postgres_1.prisma.transaccion.findFirst({
                where: { id_transaccion }
            });
            (transac)
                ? res.json(transac)
                : res.status(404).json({ error: `Transaccion with id ${id_transaccion} not found` });
        });
        this.createTransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createTransaccionDto] = dtos_1.CreateTransaccionDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const transac = yield postgres_1.prisma.transaccion.create({
                data: createTransaccionDto
            });
            res.json(transac);
        });
        this.updateTransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_transaccion = +req.params.id_transaccion;
            const [error, updateTransaccionDto] = dtos_1.UpdateTransaccionDto.create(Object.assign(Object.assign({}, req.body), { id_transaccion }));
            if (error)
                return res.status(400).json({ error });
            const transac = yield postgres_1.prisma.transaccion.findFirst({
                where: { id_transaccion }
            });
            if (!transac)
                return res.status(404).json({ error: `Transaccion with id ${id_transaccion} not found` });
            const updatedTransaccion = yield postgres_1.prisma.transaccion.update({
                where: { id_transaccion },
                data: updateTransaccionDto.values
            });
            res.json(updatedTransaccion);
        });
        this.deleteTransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_transaccion = +req.params.id_transaccion;
            const transac = yield postgres_1.prisma.transaccion.findFirst({
                where: { id_transaccion }
            });
            if (!transac)
                return res.status(404).json({ error: `Transaccion with id ${id_transaccion} not found` });
            const deleted = yield postgres_1.prisma.transaccion.delete({
                where: { id_transaccion }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Comprador with id ${id_transaccion} not found` });
        });
    }
}
exports.TransaccionesController = TransaccionesController;
