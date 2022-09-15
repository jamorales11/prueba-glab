import { Product } from "src/products/entities/product.entity";

export class CreateOrderDto {
  address: string;
  time: string;
  products: Product[];
  deliveryCost: number;
  total: number;
  personNumber: number;
}
