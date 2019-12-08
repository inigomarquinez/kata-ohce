const welcome = name => {
  const welcomeMessage = `Hello, ${name}!`;
  console.log(welcomeMessage);

  const now = new Date().getHours();
  let prefix = '';
  if (now > 20 && now < 6) {
    prefix = 'Buenas noches';
  } else if (now > 6 && now < 12) {
    prefix = 'Buenos días';
  } else {
    prefix = 'Buenas tardes';
  }

  console.log(`¡${prefix} ${name}!`);

};

module.exports = welcome;
