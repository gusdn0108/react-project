import db from '../managers/dbManager/db'
import mysql from 'mysql'
import bcrypt from 'bcrypt'
import { boardInit, configInit, initDataTables, usersInit } from './init';

const dbCheck = async () => {
    try {
        await db.sequelize.authenticate();
        return true
    } catch (error) {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`);
        await makeTable()
        return false
    }
}


const table = (tableName, model) => {
    const tableModel = db.sequelize.define(tableName,
        model,
        {
            freezeTableName: true,
            timestemps: false,
        }
    )
    return tableModel
}

//테이블 생성 함수
const makeTable = async () => {
    console.log('make Tables')
    for (let i = 0; i < initDataTables.length; i++) {
        const tableop = initDataTables[i];
        table(tableop.tableName, tableop.model).sync().then(async () => {
            if(tableop.tableName==='user'){
                for (let ii = 0; ii < usersInit.length; ii++) {
                    bcrypt.hash(usersInit[ii].password, 10, async (err, hash) => {
                        await table(tableop.tableName, tableop.model).create({ ...usersInit[ii], password: hash })
                    })
                }
            }
           
        })
    }
}
const install = (callback) => {
    try {
        dbCheck().then((result) => {
            callback(result)
        })
    } catch (error) {
        console.log(error)
    }
}
export default install