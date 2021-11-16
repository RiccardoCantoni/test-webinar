jest.mock('./api.js')

const newVisit = require('./index')
it('test newVisit API call', () => {
   expect.assertions(1)
   return newVisit(new Date(), 'en').then(res => expect(res).toEqual(true))
})