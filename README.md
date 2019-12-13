# kata-ohce

**ohce kata at GuideSmiths for Xmas 2019**

## How to install the CLI to be recognized by the console

```bash
npm install -g ohce-power
```

## How to run the CLI

The command to trigger the CLI is called `ohce`.

```bash
ohce <name> [--color]
```

where:

  - `<name>` is a required argument to tell the CLI your name.
  - `--color` is an option to configure the CLI to print messages with colours.

## How does this CLI work?

ohce is a console application that echoes the reverse of what you input through the console.

When you start oche, it greets you differently depending on the current time, but only in Spanish:
  - Between 20 and 6 hours, ohce will greet you saying: `¡Buenas noches <name>!`
  - Between 6 and 12 hours, ohce will greet you saying: `¡Buenos días <name>!`
  - Between 12 and 20 hours, ohce will greet you saying: `¡Buenas tardes <name>!`

When you introduce a **palindrome**, ohce likes it and after reverse-echoing it, it adds `¡Bonita palabra!`.

ohce knows when to stop, you just have to write `Stop!` and it'll answer `Adios <name>` and end.

## How to uninstall the CLI

If you don't want to continue using our CLI, just uninstall it running:

```bash
npm uninstall -g ohce-power
```

## How to run the tests

```bash
git clone https://github.com/inigomarquinez/kata-ohce.git
cd kata-ohce
npm run test
```

## Links

[ohce kata](https://kata-log.rocks/ohce-kata)

[Definition and examples of palindromes (Spanish)](https://es.wikipedia.org/wiki/Pal%C3%ADndromo)
