import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from 'src/product/product.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CartController],
  providers: [CartService, ...productProviders],
})
export class CartModule {}
