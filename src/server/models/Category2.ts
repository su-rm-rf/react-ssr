import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

import { Category1 } from './Category1'

@Entity()
export class Category2 {
  
  // @Column()
  // @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ nullable: true })
  name?: string

  // @Column({
  //   name: "id_1"
  // })
  // @Column()
  // @OneToOne(type => Category1, category1 => category1.id)
  // @OneToOne(type => Category1)
  // @JoinColumn()
  @ManyToOne(type => Category1, category1 => category1.category2s)
  // id_1?: number
  fkid?: Category1

}