import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';

const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/keystone_urbanstyles';

const sessionConfig = {
  // How long should they stay signed in
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    // TODO: Add seeding here
  },
  lists: createSchema({
    User,
  }),
  ui: {
    // Add access control
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
