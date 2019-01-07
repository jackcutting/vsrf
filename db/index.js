const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: process.env.IS_LOCAL ? false : true,
});

module.exports = {
	query: (text, params, callback) => pool.query(text, params, callback)
}
