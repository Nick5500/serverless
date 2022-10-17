import { DataTypes, Sequelize } from 'sequelize';
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    schema: 'public',
    dialectModule: pg,
    logging: false,
  }
);

export const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
await sequelize.sync({ alter: true })