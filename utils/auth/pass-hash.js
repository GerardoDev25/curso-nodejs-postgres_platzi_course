const bcryptjs = require('bcryptjs');

const hashPassword = async () => {
  const password = '123 123';
  const hash = await bcryptjs.hash(password, 10);
  console.log(hash);
};

hashPassword()