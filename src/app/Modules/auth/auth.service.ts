import bcrypt from 'bcrypt'
import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import prisma from '../../../shared/prisma'
import { User } from '@prisma/client'
import { generateJWT_Token } from '../../../shared/utils/jwt/generateJWT_Token';
import {
  bycrypt_salt_rounds,
  jwt_expires_in,
  jwt_secret,
} from '../../../config'

const signUp = async (userData: User): Promise<User> => {
  const hashedPassword = await bcrypt.hash(
    userData.password,
    Number(bycrypt_salt_rounds)
  )

  const newUser = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  })

  return newUser
}

const signIn = async (data: {
  email: string
  password: string
}): Promise<string> => {
  const { email, password } = data

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  if (user.password && !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const tokenData = {
    role: user.role,
    id: user.id,
  }

  const token = generateJWT_Token(
    tokenData,
    jwt_secret as string,
    jwt_expires_in as string
  )

  return token
}

export const AuthService = { signUp, signIn }
