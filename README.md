# Vegan Sausage Roll Finder

## Example

To view an example of the application, simply go to: INSERT HEROKU URL

## Getting Started

This application was built using the latest version of NodeJS LTS and PostgreSQL at the time. These were as follows: 

* NodeJS v10.15.0
* PostgreSQL 11.0

1. Get VSRF code

  ```
  git clone https://github.com/jackcutting/vsrf.git
  ```

2. Install dependencies

  ```
  cd vsrf
  npm install
  cd client
  npm install
  cd ../
  ```

3. Init the database

  Rename `.env.sample` to `.env` and enter your database connection details. Then run:

  ```
  npm run migrate
  ```

4. Start the server

  ```
  npm start
  ```

4. Start the client

  ```
  cd client
  npm start
  ```

5. Open in browser (if it doesn't automatically)

  ```
  open http://localhost:3000
  ```