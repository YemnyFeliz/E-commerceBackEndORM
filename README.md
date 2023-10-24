# E-commerceBackEndORM
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
   

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Test](#tests)
  - [Questions](#questions)

  ## Description
  - This project serves as backend connection for a ecommerce application.
  - It has routes for categories, products, and tags.
  - It uses sequelize to connect to database.
  - Routes can be tested using Insomnia.
  - [ Video link](https://drive.google.com/file/d/1qStcMHXPSBWTRVhX7DrpjGRQI-gxP7Fk/view)

  ## Installation
  - node js
  - mysql
  - git clone https://github.com/YemnyFeliz/E-commerceBackEndORM.git
  - npm i
  - create env file in project's directory:
    - DB_NAME = "ecommerce_db"
    - DB_USER = "your mysql username"
    - DB_PASSWOR = "your mysql password"
  - cd to db and type in terminal:
    - mysql -u root -p
    (p is your mysql password)
    - SOURCE schema.sql;
    - exit
    - cd ..
  - npm run seed
  - nodemon server.js or node server.js


  ## Credits
  The starter code was provided by Xander Rapstine.

  ## License
  This project is licensed under [MIT](https://opensource.org/licenses/MIT) license


  ## Tests
  Test api routes with insomnia!

  ## Questions
  If you have any questions about this project please contact me:
  - GitHub: [@YemnyFeliz](https://github.com/YemnyFeliz)
  - Email: y.feliz1296@gmail.com