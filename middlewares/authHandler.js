const boom = require('@hapi/boom');
const { config } = require('../congif/config');

function checkApliKey(req, res, next) {
  const api = req.headers['api'];
  if (api === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

const checkAdminRole = (req, res, next) => {
  const { user } = req;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
};

const checkRoles = (...roles) => {
  return (req, res, next) => {
    const { user } = req;
    if (roles.includes(user.role)) {
      next(); 
    } else {
      next(boom.unauthorized());
    }
  };
};

module.exports = { checkApliKey, checkAdminRole, checkRoles };
