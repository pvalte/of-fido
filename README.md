# ok-fido

  ![License](https://img.shields.io/badge/license-MIT-blue)
  
  ## Description
  OK-Fido is a full-stack, content management system-style application designed to be an easy to use and efficient way to browse adoptable pets and save favorites for quick reference. In this application, user's are able to view currently available pets that are up for adoption and save pets of interest to their user dashboard by 'liking' individual pets. This application was created using node.js & Express.js for RESTful API, Handlebars.js as the template engine, mySQL & Sequelize for the database, and Heroku for deployment.

   ![Screenshot]()

  ***************************************************************
  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***************************************************************
## Installation
Clone this repository to your local machine and install NPM & dependencies. 

## Usage
For local usage:
Create a .env file at the project root and paste the following into the file: 

<br>DB_NAME='okFido'<br>
<br>DB_USER='your mysql username'<br>
<br>DB_PW='your mysql password'<br>

Navigate to the project path folder in the terminal, initialize MySql shell, and then run 'source db/schema.sql'. Exit MySql shell and populate the database using the seed files by entering 'npm run seed'. With all prior steps completed, in the command line enter 'npm start' to start the app. The application can be accessed at the host port.

For other usage, visit the [deployed application](Heroku link)
  
## License
  This project is covered under the MIT license. 
      For details, visit: https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt
  
## Contributing
  Please contact the current contributors for more information (see Questions section).

## Tests
  There are not currently any tests for this project.

## Questions
  For any questions regarding this project, please contact the project owners:
  Ben Rowen: Benrowentv@gmail.com
  Chanel Mitchell: chanelmitchell2006@hotmail.com
  Paige Altemare: pvaltemare@gmail.com
  Jake Caswell: jakecaswell88@gmail.com

