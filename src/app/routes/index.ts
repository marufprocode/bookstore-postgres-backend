import express from 'express';
import authRoutes from '../Modules/auth/auth.routes';
import bookRoutes from '../Modules/book/book.routes';
import categoryRoutes from '../Modules/category/category.routes';
import orderRoutes from '../Modules/order/order.routes';
import userRoutes from '../Modules/user/user.routes';
import profileRoutes from '../Modules/profile/profile.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/books',
    route: bookRoutes,
  },
  {
    path: '/categories',
    route: categoryRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
