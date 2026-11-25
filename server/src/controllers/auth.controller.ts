import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {User} from '../../prisma/seedUser';

export const login = (req: Request, res: Response) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Proszę podać email i hasło',
    });
  }

  if (email === User.email && password === User.password) {
    const token = jwt.sign({login}, 'secret_key', {expiresIn: '1h'});

    return res.json({
      message: 'Zalogowano pomyślnie',
      token,
      userData: {
        email: login,
      },
    });
  }

  return res.status(401).json({
    message: 'Nieprawidłowe dane logowania',
  });
};
