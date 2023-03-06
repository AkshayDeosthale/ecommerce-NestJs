import { Connection } from 'mongoose';
import { CategorySchema } from 'src/schemas/category.schema';

export const categoryProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('category', CategorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
