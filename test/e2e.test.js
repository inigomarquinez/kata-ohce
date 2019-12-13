const assert = require('assert');
const { EOL } = require('os');
const pkg = require('../package')

const { execute, ENTER } = require('../lib/cmd');

describe('e2e', () => {
  describe('exec ohce', () => {

    it('should be exec ohce return help info and error of its necessary name like parameter', async () => {
      try {
        await execute('ohce');
      } catch (e) {
        assert.equal('ohce <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', e)
      }
    });

    it('should be exec ohce --version and return help version', async () => {
      let response;
      try {
        response = await execute('ohce', ['pepe', '--version']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal(pkg.version, response.replace(EOL, ''))
    });

    it('should be exec ohce --help and return help info', async () => {
      let response;
      try {
        response = await execute('ohce', ['pepe', '--help']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal('ohce <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', response)

    });

    it('should be exec ohce, input a palindromo and return this message ¡Bonita palabra!', async () => {
      let response, objetiveLine;
      try {
        response = await execute('ohce', ['pepe'], [
          'Arriba birra',
          ENTER,
          'Stop!',
          ENTER
        ]);
        objetiveLine = response
          .trim()
          .split(EOL)

      } catch (e) {
        console.log('error',e)
      }
      assert.equal('¡Bonita palabra!', objetiveLine[objetiveLine.length - 2])

    });

    it('should be exec ohce and stop ohce', async () => {
      let response, lastLine;
      try {
        response = await execute('ohce', ['pepe'], [
          'Arriba birra',
          ENTER,
          'Stop!',
          ENTER
        ]);
        lastLine = response
          .trim()
          .split(EOL)
          .pop()

        console.log('response', response)
        console.log('lastLine', lastLine)
      } catch (e) {
        console.log('error',e)
      }
      assert.equal('ohce > Adios pepe', lastLine)

    });

  })

  describe('exec ohce-power', () => {

    it('should be exec ohce-power return help info and error of its necessary name like parameter', async () => {
      try {
        await execute('ohce-power');
      } catch (e) {
        assert.equal('ohce-power <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', e)
      }
    });

    it('should be exec ohce-power --version and return help version', async () => {
      let response;
      try {
        response = await execute('ohce-power', ['pepe', '--version']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal(pkg.version, response.replace(EOL, ''))
    });

    it('should be exec ohce-power --help and return help info', async () => {
      let response;
      try {
        response = await execute('ohce-power', ['pepe', '--help']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal('ohce-power <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', response)

    });

  })
})
