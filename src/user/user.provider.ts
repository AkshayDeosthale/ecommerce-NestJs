import { Connection } from 'mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { ProductSchema } from '../schemas/product.schema';

export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('user', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
