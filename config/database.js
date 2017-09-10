export default {
    connectionString() {
        const host = process.env.DB_HOST;
        const user = process.env.DB_USER;
        const password = process.env.DB_PASS;
        const database = process.env.DB_DATABASE;

        return `mongodb://${host}/${database}`;
    },
}