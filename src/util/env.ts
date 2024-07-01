import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

const validEnvironments = ['development', 'production', 'test'] as const;
type Environment = (typeof validEnvironments)[number];

export const NODE_ENV = env
  .get('NODE_ENV')
  .required()
  .asEnum(validEnvironments) as Environment;

export const PORT = env.get('PORT').required().asPortNumber();
