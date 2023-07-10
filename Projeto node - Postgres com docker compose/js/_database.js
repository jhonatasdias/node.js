const pg = require('pg');

class dbConnection {
    client = null;
    constructor() {
        this.client = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: '1234',
            port: 5432
        });
        this.client.connect()
    }

    get client () {
        return this.client
    }

}

class db {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }
    static getInstance() {
        if (!db.instance) {
            db.instance = new dbConnection();
        }
        return db.instance;
    }
}

module.exports = db;


/* 
module.exports = {
    client,
    query: (text, params) => client.query(text, params),
}; */