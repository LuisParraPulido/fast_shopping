require('dotenv').config();

module.exports = {
    api: {
        host: process.env.HOST,
        port: process.env.PORT,
    },
    mysql: {
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || '',
    },
    url: process.env.API_URL || 'http://localhost:3000/',
}