import { pathOr, propOr, head, pipe, when, always, equals } from 'ramda'

function testPipe(argument) {
  const request = {
    userList: [{ name: 'John', age: 13 }, { name: 'Alex', age: 20 }],
  }

  console.log(
    '>> testPipe() -',
    pipe(
      pathOr('', ['userList']),
      head,
      propOr('', 'name'),
      when(equals('John'), always('Hello John')),
    )(request),
  )
}

testPipe()
