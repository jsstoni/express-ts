import { Request } from 'express';
import { rateLimit } from 'express-rate-limit';

export default rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  keyGenerator: (req: Request) => req.ip as string,
  message: { error: 'Too many requests, please try again later.' },
});
