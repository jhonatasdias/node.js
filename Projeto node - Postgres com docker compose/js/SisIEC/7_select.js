const db = require ('../_database');

async function listDate(){
    await db.connect();
    var result
    
    result = await db.query("SELECT * FROM curso")
    console.log('curso')
    console.log('res')
}