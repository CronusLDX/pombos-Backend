import type { Request, Response } from 'express';
const MailModel = require('../models/mail.model');

class Controllers {
  static async getRequisition(req: Request, res: Response): Promise<void> {
    try {
      const user = await MailModel.find();
      user
        ? res.status(200).json(user)
        : res.status(404).json({ message: 'Usuário(s) não encontrado(s)' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async postRequisition(req: Request, res: Response): Promise<void> {
    try {
      const user = await MailModel.create(req.body);
      user
        ? res.status(201).json({ message: 'Usuário criado com sucesso', user })
        : res.status(400).json({ message: 'Usuário não cadastrado' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async putRequisition(req: Request, res: Response): Promise<void> {
    try {
      const user = await MailModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      user
        ? res.status(200).json(user)
        : res.status(404).json({ message: 'Usuário nao encontrado' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async deleteRequisition(req: Request, res: Response): Promise<void> {
    try {
      const user = await MailModel.findOneAndDelete(req.params.id);
      user
        ? res.status(200).json(user)
        : res.status(404).json({ message: 'Usuário nao encontrado' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}
module.exports = Controllers;
