import { Sequelize } from "sequelize";
export const user_model = {
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  profilePicture: {
    type: Sequelize.STRING,
  },
  coverPicture: {
    type: Sequelize.STRING,
  },
  followers: {
    type: Sequelize.JSON,
  },
  followings: {
    type: Sequelize.JSON,

  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  desc: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,

  },
  from: {
    type: Sequelize.STRING,

  },
  date: {
    type: Sequelize.DATE,
  },

  relationship: {
    type: Sequelize.INTEGER,
  }
}