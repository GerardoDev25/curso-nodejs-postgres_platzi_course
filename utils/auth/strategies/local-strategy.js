const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const { Strategy } = require('passport-local');

const UserService = require('../../../services/user.service');

const service = new UserService();
const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
        return;
      }

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        done(boom.unauthorized(), false);
        return;
      }

      delete user.dataValues.password
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = { localStrategy };
