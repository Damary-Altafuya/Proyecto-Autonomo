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
exports.UsersController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class UsersController {
    //* DI
    constructor() {
        this.getusuarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const usuario = yield postgres_1.prisma.usuario.findMany();
            return res.json(usuario);
        });
        this.getUsuarioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_usuario = +req.params.id_usuario;
            //    localhost:3000/producto/1
            if (isNaN(id_usuario))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const user = yield postgres_1.prisma.usuario.findFirst({
                where: { id_usuario }
            });
            (user)
                ? res.json(user)
                : res.status(404).json({ error: `usuario with id ${id_usuario} not found` });
        });
        this.createUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createUsuarioDto] = dtos_1.CreateUsuarioDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const user = yield postgres_1.prisma.usuario.create({
                data: createUsuarioDto
            });
            res.json(user);
        });
        this.updateUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_usuario = +req.params.id_usuario;
            const [error, updateUsuarioDto] = dtos_1.UpdateUsuarioDto.create(Object.assign(Object.assign({}, req.body), { id_usuario }));
            if (error)
                return res.status(400).json({ error });
            const user = yield postgres_1.prisma.usuario.findFirst({
                where: { id_usuario }
            });
            if (!user)
                return res.status(404).json({ error: `usuario with id ${id_usuario} not found` });
            const updatedUsuario = yield postgres_1.prisma.usuario.update({
                where: { id_usuario },
                data: updateUsuarioDto.values
            });
            res.json(updatedUsuario);
        });
        this.deleteUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_usuario = +req.params.id_usuario;
            const user = yield postgres_1.prisma.usuario.findFirst({
                where: { id_usuario }
            });
            if (!user)
                return res.status(404).json({ error: `usuario with id ${id_usuario} not found` });
            const deleted = yield postgres_1.prisma.usuario.delete({
                where: { id_usuario }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `usuario with id ${id_usuario} not found` });
        });
    }
}
exports.UsersController = UsersController;
