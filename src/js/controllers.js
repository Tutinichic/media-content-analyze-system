const User = require('./model');

class Controllers {
  static resHandler = (res, data) => {
    if (data) {
      res.send(data);
    } else {
      res.sendStatus(404);
    }
  };
  static getUser = async (req, res) => {
    await User.getUserById(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };
  static getUsers = async (req, res) => {
    await User.getAllUsers().then((result) => {
      this.resHandler(res, result);
    });
  };
  static createUser = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const id = Math.ceil(Math.random() * (100 - 1) * Math.random() * (100 - 1));
    const date = Date.now();
    await User.postUser({ id, date, ...req.body })
      .then(() => User.getUserById({ id }))
      .then((result) => {
        this.resHandler(res, result);
      });
  };
  static deleteUser = async (req, res) => {
    await User.deleteUserById(req.params)
      .then(() => `User(id: ${req.params.id}) was deleted!`)
      .then((result) => {
        this.resHandler(res, result);
      });
  };
  static updateUser = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const date = Date.now();
    await User.updateUserById(req.params, { date, ...req.body })
      .then(() => User.getUserById(req.params))
      .then((result) => {
        this.resHandler(res, result);
      });
  };
}

module.exports = Controllers;
