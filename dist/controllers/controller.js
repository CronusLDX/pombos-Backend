"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../models/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class Controllers {
    static async getRequisition(req, res) {
        try {
            const user = await User.find();
            user
                ? res.status(200).json(user)
                : res.status(404).json({ message: 'Usuário(s) não encontrado(s)' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async getRequisitionByUsername(req, res) {
        try {
            const user = await User.findOne({ username: req.params.username });
            user
                ? res.status(200).json(user)
                : res.status(404).json({ message: 'Usuário não encontrado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async postRequisition(req, res) {
        try {
            const { _id, username, password, ...rest } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                id: _id,
                username,
                password: hashedPassword,
                ...rest,
            });
            user
                ? res.status(201).json({ message: 'Usuário criado com sucesso', user })
                : res.status(400).json({ message: 'Usuário não cadastrado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async putRequisition(req, res) {
        try {
            const user = await User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true });
            user
                ? res.status(200).json(user)
                : res.status(404).json({ message: 'Usuário nao encontrado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async deleteRequisition(req, res) {
        try {
            const user = await User.findOneAndDelete({
                username: req.params.username,
            });
            user
                ? res.status(200).json(user)
                : res.status(404).json({ message: 'Usuário nao encontrado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async deleteAllRequisition(req, res) {
        try {
            const user = await User.deleteMany();
            user
                ? res.status(200).json(user)
                : res.status(404).json({ message: 'Usuário nao encontrado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
    static async Login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                res.status(404).json({ message: 'Usuário nao encontrado' });
                return;
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                res.status(401).json({ message: 'Senha incorreta' });
                return;
            }
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            res.status(200).json({ message: 'Login bem-sucedido', token });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}
module.exports = Controllers;
