# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `login` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `role` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`help`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`help` ;

CREATE TABLE IF NOT EXISTS `mydb`.`help` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`filter` ;

CREATE TABLE IF NOT EXISTS `mydb`.`filter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_from` DATETIME NOT NULL,
  `date_to` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `filter_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_request_filter1_idx` (`filter_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_filter1`
    FOREIGN KEY (`filter_id`)
    REFERENCES `mydb`.`filter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` TEXT NOT NULL,
  `user_id` INT NOT NULL,
  `help_id` INT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_User_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_Access_Help1_idx` (`help_id` ASC) VISIBLE,
  INDEX `fk_access_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_User`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Help1`
    FOREIGN KEY (`help_id`)
    REFERENCES `mydb`.`help` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` TEXT NOT NULL,
  `request_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_source_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_source_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'John', 'JohnRoth', 'passw123', 'j@email.com', 'public');
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'Kate', 'KateDotson', 'passw124', 'k@email.com', 'public');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`request`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Text search query ', 'breaking news around the world', '2022-12-02', NULL);
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Photo search query', 'find similar images', '2022-11-20', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://www.nytimes.com/', NULL);
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://images.google.com/', NULL);

COMMIT;
```

## RESTfull сервіс для управління даними

## server.js 
```
const express = require('express');
const router = require('./routings');

const app = express();

app.use('/api', router);

app.listen(2222);
```
## pool.js 
```
const mysql = require("mysql2");

const connectionOptions = {
  host: "localhost",
  user: "root",
  password: "Qwerty123",
  database: "mediacontentanalyzesystem",
};

const pool = mysql.createConnection(connectionOptions);

module.exports = { pool };
```

## routings.js
```
const { Router } = require('express');
const express = require('express');
const jsonParse = express.json();
const Controllers = require('./controllers');

const router = Router();

router.get('/user/:id', Controllers.getUser);

router.get('/users/', Controllers.getUsers);

router.post('/user/', jsonParse, Controllers.createUser);

router.delete('/user/:id', Controllers.deleteUser);

router.put('/user/:id', jsonParse, Controllers.updateUser);

module.exports = router;
```

## controllers.js
```
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
```

## model.js
```
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
```