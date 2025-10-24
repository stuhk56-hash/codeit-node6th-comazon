import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// users - POST
app.post('/users', async (req, res) => {
  try {
    const data = req.body;
    const user = await prisma.user.create({
      data,
    });
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

// users - GET
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch users' });
  }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
``
