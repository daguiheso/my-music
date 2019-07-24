import configService from './config'

const musicService = {}

musicService.search = function (q) {
  const type = 'track'

  return fetch(`${configService.apiUrl}/search?q=${q}&type=${type}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => {
      console.log(error)
      debugger
    })
}

export default musicService
