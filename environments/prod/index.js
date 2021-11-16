const API = require('./api.js')

async function newVisit(timestamp, lang) {
  try {
    const res = await API.post(
      'https://www.fantozziefigli.com/services/new-visit',
      { timestamp, lang }
    )
    console.log('res.success', res.success)
    return res.success
  } catch (e) {
    console.error(e)
  }
}

module.exports = subtraction