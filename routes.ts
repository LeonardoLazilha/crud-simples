import express, { Request, Response }  from 'express';
import GuitarraModel from  './schemas/guitarras.schemas';

const router = express.Router()

//CREATE
router.post('/guitarra',async (req: Request, res: Response) => {
  const guitarra = await GuitarraModel.create(req.body);
  res.status(201).json(guitarra);
})

//READ
router.get('/guitarra/:id',async (req: Request, res: Response) => {
  const guitarra = await GuitarraModel.findById(req.params.id);
  res.send(guitarra);
})

//UPDATE
router.put('/guitarra/:id',async (req: Request, res: Response) => {
  const guitarra = await GuitarraModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(guitarra);
})

//DELETE
router.delete('/guitarra/:id',async (req: Request, res: Response) => {
  const guitarra = await GuitarraModel.findByIdAndDelete(req.params.id);
  res.send(guitarra);
})



export default router;