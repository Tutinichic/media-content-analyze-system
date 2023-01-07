const { pool } = require('./pool');

class User {
  static connectionHandler = (sql) => {
    return new Promise((resolve) => {
      pool.connect(function (err) {
        if (err) throw err;
        return pool.query(sql, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      });
    });
  };
  static sqlHandler = {
    user: ({ id }) =>
      `SELECT * FROM mediacontentanalyzesystem.user WHERE id = ${id}`,
    allUsers: () => `SELECT * from mediacontentanalyzesystem.user`,
    newUser: ({ id, name, login, email, password, role }) =>
      `INSERT INTO mediacontentanalyzesystem.user (id, name, login, email, password, role) VALUES (${id},\"${name}\", \"${login}\", \"${email}\", \"${password}\", \"${role}\")`,
    deleteUser: ({ id }) =>
      `DELETE FROM mediacontentanalyzesystem.user WHERE id = ${id}`,
    updateUser: ({ id }, { name, login, password, role }) =>
      `UPDATE mediacontentanalyzesystem.user SET name = \"${name}\", login = \"${login}\", password = \"${password}\", role = \"${role}\" WHERE id = ${id} `,
  };
  static getUserById = (data) => {
    return this.connectionHandler(this.sqlHandler.user(data));
  };
  static getAllUsers = () => {
    return this.connectionHandler(this.sqlHandler.allUsers());
  };
  static postUser = (data) => {
    return this.connectionHandler(this.sqlHandler.newUser(data));
  };
  static deleteUserById = (data) => {
    return this.connectionHandler(this.sqlHandler.deleteUser(data));
  };
  static updateUserById = (params, data) => {
    return this.connectionHandler(this.sqlHandler.updateUser(params, data));
  };
}

module.exports = User;
