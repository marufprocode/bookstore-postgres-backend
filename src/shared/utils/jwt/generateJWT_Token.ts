import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const generateJWT_Token = (
  dbUser: Partial<User>,
  secret_key: string,
  expire_time: string
) => {
  const token = jwt.sign(
    {
      id: dbUser?.id,
      role: dbUser?.role,
    },
    secret_key,
    {
      expiresIn: expire_time,
    }
  );
  return token;
};
