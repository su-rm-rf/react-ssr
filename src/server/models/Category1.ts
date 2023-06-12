import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

import { Category2 } from './Category2'

@Entity()
export class Category1 {
  
  // @Column()
  // @PrimaryColumn()
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  // @OneToOne(type => Category2)
  id?: number

  @Column()
  name?: string

  @OneToMany(type => Category2, category2 => category2.fkid)
  category2s?: Category2[]

}