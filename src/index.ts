import { app, logger } from '@/server';
import { PORT } from '@/util/env';

app.listen(PORT, () => {
  logger.info(`Server started on port: ${PORT}`);
});
