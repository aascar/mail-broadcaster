/**
 * Created by jyothi on 10/2/17.
 */
import http from 'http';
import assert from 'assert';

import '../lib/bin/www';

/**
 * Index Test
 */
describe('Running Node Server', () => {
    it('should return 200', done => {
        http.get('http://127.0.0.1:3000', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});



