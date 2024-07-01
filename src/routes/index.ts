import { Router } from 'express';
import web from '@/api/web';

const router = Router();

const defaultRoutes = [
  {
    path: '/',
    route: web,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
