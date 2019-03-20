console.log(process.env)
export const SERVER_URL = process.env.NODE_ENV === 'production' ? 'https://superduperubercool.herokuapp.com/api' : 'http://localhost:5000/api'
// if(process.env.production) {
//   export const SERVER_URL = 'https://superduperubercool.herokuapp.com/api'
// } else {
//   export const SERVER_URL = 'https://localhost:5000/api'
// }