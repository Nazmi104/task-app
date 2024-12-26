import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    const newTask = await prisma.task.create({
        data: { title, description },
    });
    res.json(newTask);
});

router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTask = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title, description, completed },
    });
    res.json(updatedTask);
});

router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.task.delete({
        where: { id: parseInt(id) },
    });
    res.sendStatus(204);
});

export default router;
