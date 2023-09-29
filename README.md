# E-commerce Back End Starter Code
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
## Description

This is a back-end application that represents an e-commerce site. This application is built using the Express.js API and utilizes Sequelize to interact with the MySQL database. This project uses API routes that enable RESTful CRUD operations. Please see User Story and Acceptance Criteria below:

User Story: 

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

Acceptance Criteria:

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


## Installation

Please download Git BASH at https://gitforwindows.org/ if you are a Windows user. If you are a Mac user, please pull up the terminal on your Mac by pressing Command Spacebar and searching for terminal. 

Please also install the following programs: 

     - Node.js at https://nodejs.dev/en/download/
     - VScode at https://code.visualstudio.com/download
     - MySQL at https://dev.mysql.com/downloads/mysql/
     - mysql2 at https://www.npmjs.com/package/mysql2
     - sequelize at https://www.npmjs.com/package/sequelize
     - express at https://www.npmjs.com/package/express
     - Insomnia at https://docs.insomnia.rest/insomnia/install


## Usage

In order to use this application, open up your terminal (on Mac) or Git Bash (on Windows). CD into the folder that contains the E-Commerce code. Once in the folder, type 'npm i' (without the single quotations) in order to install the dependencies listed in the package.json. Once everything is installed, CD into the db folder that has the sql files. Type in 'mysql -uroot' (without the single quotations) if you don't have a password for mysql and 'mysql -uroot -p' if you have a password. Once mysql is running, type in 'SOURCE schema.sql;' (without the single quotations) into the command line. This will create your database.

While mysql is running, open another terminal and once again, CD into the folder that conatins the E-commerce code. Once in the folder, type 'npm run seed' into your terminal, this will fill your database with the initial e-commerce product, category and tag information. Once your tables have been seeded, type ‘npm run start’ into your terminal (without the single quotations). This will turn your server on.

Once your server is on, open up insomnia. Inside of insomnia, you can make get, post, put or delete requests to http://localhost:3001/api/categories, http://localhost:3001/api/products, and http://localhost:3001/api/tags. Please refer to the route files to see which endpoints and routes are possible with the provided code. 

## Demo

E-Commerce Back End Starter Code from github user: Xandromus in Repository: fantastic-umbrella. See below for link to repository: https://github.com/coding-boot-camp/fantastic-umbrella

Please see a demo of my application [here](https://drive.google.com/file/d/1xtjHCSkmAgMp34sdl9qraC-nvX4w9Tj2/view?usp=sharing).


## Credits

Badge for MIT License was made with [Shields.io](http://shields.io/) and taken from GitHub user: lukas-h. See below for the link to the license badge collection: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


## License

MIT License, please refer to the LICENSE in the repo.

## Contributing

N/A

## Tests

N/A

## Questions

Please refer to my profile for additional projects: https://github.com/Vannasaur

If you have any questions please email me at: vannaluciano@gmail.com