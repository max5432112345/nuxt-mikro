export default defineEventHandler (async (event) => {
  return { test: 'ok '}

  // const id = Date.now() / 1000
  // const dataSource = event.context.db
  // const repository = dataSource.getRepository('user')
  // const users = await repository.findOneBy({ id })

  // return {
  //   api: id,
  //   users
  // }
})
