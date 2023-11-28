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
exports.ArtesanosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ArtesanosController {
    //* DI
    constructor() {
        this.getartesanos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const artesano = yield postgres_1.prisma.artesano.findMany();
            return res.json(artesano);
        });
        this.getArtesanoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_artesano = +req.params.id_artesano;
            //    localhost:3000/producto/1
            if (isNaN(id_artesano))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const artesa = yield postgres_1.prisma.artesano.findFirst({
                where: { id_artesano }
            });
            (artesa)
                ? res.json(artesa)
                : res.status(404).json({ error: `artesano with id ${id_artesano} not found` });
        });
        this.createArtesano = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createArtesanoDto] = dtos_1.CreateArtesanoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const artesa = yield postgres_1.prisma.artesano.create({
                data: createArtesanoDto
            });
            res.json(artesa);
        });
        this.updateArtesano = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_artesano = +req.params.id_artesano;
            const [error, updateArtesanoDto] = dtos_1.UpdateArtesanoDto.create(Object.assign(Object.assign({}, req.body), { id_artesano }));
            if (error)
                return res.status(400).json({ error });
            const artesa = yield postgres_1.prisma.artesano.findFirst({
                where: { id_artesano }
            });
            if (!artesa)
                return res.status(404).json({ error: `artesano with id ${id_artesano} not found` });
            const updatedArtesano = yield postgres_1.prisma.artesano.update({
                where: { id_artesano },
                data: updateArtesanoDto.values
            });
            res.json(updatedArtesano);
        });
        this.deleteArtesano = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_artesano = +req.params.id_artesano;
            const artesa = yield postgres_1.prisma.artesano.findFirst({
                where: { id_artesano }
            });
            if (!artesa)
                return res.status(404).json({ error: `artesano with id ${id_artesano} not found` });
            const deleted = yield postgres_1.prisma.artesano.delete({
                where: { id_artesano }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `artesano with id ${id_artesano} not found` });
        });
    }
}
exports.ArtesanosController = ArtesanosController;
