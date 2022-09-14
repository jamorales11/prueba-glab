export class CreateOrderDto {
  address: string;
  time: string;
  items: any[];
  deliveryCost: number;
  total: number;
  personNumber: number;
}
