import { Sequelize } from "sequelize";

export const board_model = {
    username: {
        type: Sequelize.STRING(30),
    },
    content: {
        type: Sequelize.STRING,
    },
}