function post(url, body) {
  return new Promise(function (resolve, reject) {
    if (!body.timestamp || !body.lang) reject(new Error('missing parameters'))
    resolve({ success: true })
  })
}

module.exports = {
  post
}