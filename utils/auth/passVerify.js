const bcryptjs = require('bcryptjs');

const verifyPassword = async () => {
  const password = '123 123';
  const hash = '$2a$10$2nHXyxYRNQv1/le/HfTfuOG3eUGbjEq4dC81nnxhoxVWtCFaR7Rga';
  const isMatch = await bcryptjs.compare(password, hash) 
  console.log(isMatch);
};

verifyPassword();
