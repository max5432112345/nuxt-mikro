import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

export abstract class BaseEntity {

  @PrimaryKey({ type: 'number' })
  id!: number;

}
