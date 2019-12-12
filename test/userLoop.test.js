const assert = require('assert');
const sinon = require('sinon');
const mockStdin = require('mock-stdin').stdin();

const userLoop = require('../lib/userLoop');

describe('userLoop', () => {
  let consoleLogStub;
  let processExitStub;

  before(() => {
    userLoop('user name');
    consoleLogStub = sinon.stub(console, 'log');
    processExitStub = sinon.stub(process, 'exit');
    processExitStub.throws('exit', 'process.exit() was called.');
  });

  after(() => {
    mockStdin.restore();
    consoleLogStub.restore();
    processExitStub.restore();
  });

  afterEach(() => {
    consoleLogStub.resetHistory();
  });

  it('should echo the reverse of user\'s input through the console when the input is NOT a palindrome', () => {
    mockStdin.send('Hola\n');
    assert(consoleLogStub.calledOnce);
    assert.strictEqual(consoleLogStub.getCall(0).lastArg, 'aloH');
  });

  it('should echo the reverse of user\'s input and add \'¡Bonita palabra!\' through the console when the input is a palindrome', () => {
    mockStdin.send('Arriba birra\n');
    assert(consoleLogStub.calledTwice);
    assert.strictEqual(consoleLogStub.getCall(0).lastArg, 'arrib abirrA');
    assert.strictEqual(consoleLogStub.getCall(1).lastArg, '¡Bonita palabra!');
  });

  it('should show the prompt again if the user presses ENTER without introducing any input', () => {
    mockStdin.send('\n');
    assert(consoleLogStub.notCalled);
  });

  it('should echo \'Adios user name\' and exit when the user dispatches an end event', () => {
    assert.throws(
      () => {
        mockStdin.send(null);
      },
      {
        name: 'exit',
        message: 'process.exit() was called.',
      },
    );
    assert(consoleLogStub.calledOnce);
    assert.strictEqual(consoleLogStub.getCall(0).lastArg, 'Adios user name');
  });
});
