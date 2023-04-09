export const DATA_SOURCES = {
    mySqlDataSource: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PWD,
        DB_PORT: process.env.DB_PORT,
        DB_DATABASE: process.env.DB_NAME,
        DB_CONNECTION_LIMIT: 4,
    }
}
