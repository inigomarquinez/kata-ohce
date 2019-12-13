const assert = require('assert');
const { EOL } = require('os');
const pkg = require('../package')

const cmd = require('../lib/cmd');

describe('e2e', () => {
  describe('exec ohce', () => {

    it('should be exec ohce return help info and error of its necessary name like parameter', async () => {
      try {
        await cmd.execute('ohce');
      } catch (e) {
        assert.equal('ohce <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', e)
      }
    });

    it('should be exec ohce --version and return help version', async () => {
      let response;
      try {
        response = await cmd.execute('ohce', ['pepe', '--version']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal(pkg.version, response.replace(EOL, ''))
    });

    it('should be exec ohce --help and return help info', async () => {
      let response;
      try {
        response = await cmd.execute('ohce', ['pepe', '--help']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal('ohce <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', response)

    });

  })

  describe('exec ohce-power', () => {

    it('should be exec ohce-power return help info and error of its necessary name like parameter', async () => {
      try {
        await cmd.execute('ohce-power');
      } catch (e) {
        assert.equal('ohce-power <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', e)
      }
    });

    it('should be exec ohce-power --version and return help version', async () => {
      let response;
      try {
        response = await cmd.execute('ohce-power', ['pepe', '--version']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal(pkg.version, response.replace(EOL, ''))
    });

    it('should be exec ohce-power --help and return help info', async () => {
      let response;
      try {
        response = await cmd.execute('ohce-power', ['pepe', '--help']);
      } catch (e) {
        console.log('error',e)
      }
      assert.equal('ohce-power <name>\n\nohce is a console application that echoes the reverse of what you input through\nthe console\n\n _______         __   __                     __\n|       |.-----.|  |_|__|.-----.-----.-----.|__|\n|   -   ||  _  ||   _|  ||  _  |     |__ --| __\n|_______||   __||____|__||_____|__|__|_____||__|\n         |__|\n  --version     Show version number                                    [boolean]\n  -c, --colour  CLI add colours                                        [boolean]\n  --help        Show help                                              [boolean]\n', response)

    });

  })
})
