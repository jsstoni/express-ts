import { app, logger } from '@/server';

app.listen(8000, () => {
  logger.info('Server start');
});
