import Sequelize from "sequelize";
import env from "dotenv";

env.config();
const db = {};
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    timezone:"+09:00",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.queryInterface  =  sequelize.getQueryInterface();
module.exports = db;
