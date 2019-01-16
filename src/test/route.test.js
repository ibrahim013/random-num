const request = require('supertest');
const  server = 'parseInt(process.env.PORT, 10) || 8000';
const should = require("should");

describe('Random number generator', () => {
  describe('/GET', () => {
    it('should respond with a 404',(done) => {
      request(server)
      .get('/dummy/path')
      .expect(404)
        done();
      })
    })
})