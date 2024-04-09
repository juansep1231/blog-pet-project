import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { registerSchema } from '../validators/validationSchemas';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    //validate schema
    const validateBody = await registerSchema.validateAsync(req.body);

    //hash password
    const encryptedPassword = await bcrypt.hash(validateBody.password, 10);

    //create user
    const user = await prisma.user.create({
      data: {
        firstName: validateBody.firstName,
        lastName: validateBody.lastName,
        email: validateBody.email,
        password: encryptedPassword,
      },
    });
    const { password, ...userData } = user;
    res.json(userData);
  } catch (error) {
    if (error.isJoi) {
      res
        .status(400)
        .json({ errors: error.details.map((detail) => detail.message) });
    } else {
      console.error(error);
      res.status(500).json({ message: 'An unexpected error occurred.' });
    }
  }
});

export { router };
