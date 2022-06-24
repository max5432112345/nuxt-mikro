import 'reflect-metadata'
import {
  EntityManager,
  // EntityRepository,
  MikroORM
} from '@mikro-orm/core'

import { Author } from './entities';

export const DI = {} as {
  orm: MikroORM,
  em: EntityManager,
  // authorRepository: EntityRepository<Author>
}

DI.orm = MikroORM.init({
  type: 'mariadb',
  entities: [Author],
  dbName: 'nuxt',
  password: '123456',
  user: 'admin',
  debug: true
})
DI.em = DI.orm.em
// DI.authorRepository = DI.orm.em.getRepository(Author)

