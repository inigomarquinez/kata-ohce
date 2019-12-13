const assert = require('assert');
const {
  createOutputInterceptor,
} = require('output-interceptor');

const welcome = require('../lib/welcome');

describe('welcome', () => {
  it(`should say '¡Buenos días + name'! if it's between 6 in the morning and 12 at noon,
    should say '¡Buenas tardes + name'! if it's between 12 at noon and 8 in the afternoon,
    should say '¡Buenas noches + name'! if it's between 8 in the afternoon and 6 in the morning
    `, async () => {
    const intercept = createOutputInterceptor();

    await intercept(() => {
      welcome('Ruben');
    });

    const actual = intercept.output;
    const now = new Date().getHours();
    if (now > 20 && now < 6) {
      assert.equal(actual, '¡Buenas noches Ruben!\n');
    } else if (now > 6 && now < 12) {
      assert.equal(actual, '¡Buenos días Ruben!\n');
    } else {
      assert.equal(actual, '¡Buenas tardes Ruben!\n');
    }
  });
});
