import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  qualification: number;

  @Column()
  time: string;

  @Column()
  price: number;

  @Column()
  image: string;
}
