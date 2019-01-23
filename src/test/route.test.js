import chai from 'chai';
import server from '../server/server';


const request = require('supertest');

const expect  = chai.expect;


describe('Random number generator', () => {
  let token;
  before((done) => {
    request(server)
      .get('/api/v1/token?admin=admin')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });
  it('should respond with a 404', (done) => {
    request(server)
      .get('/dummy/path')
      .expect(404);
    done();
  });

  it('should respond with a welcome page', (done) => {
    request(server)
      .get('/')
      .expect(200);
    done();
  });

  it('should allow admin to get token', (done) => {
    request(server)
      .get('/api/v1/token?admin=admin')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(200);
        expect(res.body).to.have.a.property('success');
        expect(res.body).to.have.a.property('token');
        done();
      });
  });
  it('should return an error if no valid token is passed', (done) => {
    request(server)
      .get('/api/v1/numbers')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('should return the number count if token is passed', (done) => {
    request(server)
      .get('/api/v1/numbers')
      .set('Content-Type', 'application/json')
      .set('x-access-token', token)
      .end((err, res) => {
        expect(200);
        expect(res.body).to.have.a.property('msg').to.equal('success');
        done();
      });
  });

});
