import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  private readonly orders: any[] = [];

  createOrder(orden: any) {
    this.orders.push(orden);
    console.log(this.orders);
  }
}
