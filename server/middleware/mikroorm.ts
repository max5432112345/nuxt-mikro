import { RequestContext } from '@mikro-orm/core'

import { DI } from '../data-source'

export default defineEventHandler(async (event) => {
  RequestContext.create(DI.orm.em)
})
