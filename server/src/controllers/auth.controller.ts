import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {User} from '../../prisma/seedUser';

export const login = (req: Request, res: Response) => {
  const {login, password} = req.body;

  if (!login || !password) {
    return res.status(400).json({
      message: 'Proszę podać login i hasło',
    });
  }

  if (login === User.login && password === User.password) {
    // const token = jwt.sign({login}, 'secret_key', {expiresIn: '1h'});

    return res.json({
      message: 'Zalogowano pomyślnie',
      // token,
      userData: {
        login: login,
      },
    });
  }

  return res.status(401).json({
    message: 'Nieprawidłowe dane logowania',
  });
};
