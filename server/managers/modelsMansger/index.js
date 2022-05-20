import db from '../dbManager/db'
import { user_model } from '../models/User';
import { board_model } from '../models/Board';
/**
 * Types....
 * INTEGER,
 * BOOLEAN,
 * JSON,
 * DATE,
 * TEXT,
 * TEXT('long')
 */

const model = (table) => {
    switch (table) {
        case 'user':
            return user_model;
        case 'board':
            return board_model;
        default: break;
    }
}

export const Table = (table) => {
    const result = db.sequelize.define(table, model(table), {
        freezeTableName: true,
        timestemps: false,
    })
    return result
}
