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
exports.CompradoresController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CompradoresController {
    //* DI
    constructor() {
        this.getCompradores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const comprador = yield postgres_1.prisma.comprador.findMany();
            return res.json(comprador);
        });
        this.getCompradorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_comprador = +req.params.id_comprador;
            //    localhost:3000/producto/1
            if (isNaN(id_comprador))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const Comprad = yield postgres_1.prisma.comprador.findFirst({
                where: { id_comprador }
            });
            (Comprad)
                ? res.json(Comprad)
                : res.status(404).json({ error: `Comprador with id ${id_comprador} not found` });
        });
        this.createComprador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCompradorDto] = dtos_1.CreateCompradorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const Comprad = yield postgres_1.prisma.comprador.create({
                data: createCompradorDto
            });
            res.json(Comprad);
        });
        this.updateComprador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_comprador = +req.params.id_comprador;
            const [error, updateCompradorDto] = dtos_1.UpdateCompradorDto.create(Object.assign(Object.assign({}, req.body), { id_comprador }));
            if (error)
                return res.status(400).json({ error });
            const Comprad = yield postgres_1.prisma.comprador.findFirst({
                where: { id_comprador }
            });
            if (!Comprad)
                return res.status(404).json({ error: `Comprador with id ${id_comprador} not found` });
            const updatedComprador = yield postgres_1.prisma.comprador.update({
                where: { id_comprador },
                data: updateCompradorDto.values
            });
            res.json(updatedComprador);
        });
        this.deleteComprador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_comprador = +req.params.id_comprador;
            const Comprad = yield postgres_1.prisma.comprador.findFirst({
                where: { id_comprador }
            });
            if (!Comprad)
                return res.status(404).json({ error: `Comprador with id ${id_comprador} not found` });
            const deleted = yield postgres_1.prisma.comprador.delete({
                where: { id_comprador }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Comprador with id ${id_comprador} not found` });
        });
    }
}
exports.CompradoresController = CompradoresController;
