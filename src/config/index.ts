import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const database_url = process.env.DATABASE_URL;
export const default_student_pass = process.env.DEFAULT_STUDENT_PASS;
export const default_faculty_pass = process.env.DEFAULT_FACULTY_PASS;
export const default_admin_pass = process.env.DEFAULT_ADMIN_PASS;
export const bycrypt_salt_rounds = process.env.BCRYPT_SALT_ROUNDS;

export const jwt_secret = process.env.JWT_SECRET_KEY;
export const jwt_refresh_secret = process.env.JWT_REFRESH_SECRET;
export const jwt_expires_in = process.env.JWT_EXPIRES_IN;
export const jwt_refresh_expires_in = process.env.JWT_REFRESH_EXPIRES_IN;
