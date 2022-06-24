import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne } from '@mikro-orm/core';

import { BaseEntity } from './BaseEntity';

@Entity()
export class Author extends BaseEntity {

  @Property({ type: 'text' })
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

}
