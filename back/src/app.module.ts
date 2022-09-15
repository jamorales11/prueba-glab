import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    OrdersModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "",
      port: ,
      username: "",
      password: "",
      database: "",
      entities: [Order, Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
