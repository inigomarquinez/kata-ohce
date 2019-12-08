const assert = require('assert');
const {
  createOutputInterceptor
} = require('output-interceptor');

const welcome = require('../bin/welcome');

describe('welcome', () => {

  it(`should say Hello, + name! Buenos días + name if it\'s between 6 in the morning and 12 at noon,
    should say Hello, + name! Buenas tardes + name if it\'s between 12 at noon and 8 in the afternoon,
    should say Hello, + name! Buenas noches + name if it\'s between 8 in the afternoon and 6 in the morning
    `, async () => {
    const intercept = createOutputInterceptor();

    await intercept(() => {
      welcome('Ruben');
    });

    const actual = intercept.output;
    const now = new Date().getHours();
    if (now > 20 && now < 6) {
      assert.equal(actual, 'Hello, Ruben!\n¡Buenas noches Ruben!\n');
    } else if (now > 6 && now < 12) {
      assert.equal(actual, 'Hello, Ruben!\n¡Buenas días Ruben!\n');
    } else {
      assert.equal(actual, 'Hello, Ruben!\n¡Buenas tardes Ruben!\n');
    }

  });
});
