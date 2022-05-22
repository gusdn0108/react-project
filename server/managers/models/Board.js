import { Sequelize } from "sequelize";

export const board_model = {
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contentHtml: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING
    },
    userid: {
        type: Sequelize.STRING
    }
}