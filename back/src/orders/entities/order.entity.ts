import { Product } from "src/products/entities/product.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  time: string;

  @Column()
  deliveryCost: number;

  @Column()
  total: number;

  @Column()
  personNumber: number;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
