import { Sequelize } from 'sequelize'
import pg from 'pg';
import { User } from "./models/user.model.js";

export function loadSequelize() {
  return new Sequelize({
    dialectModule: pg,
    dialect: 'postgres',
    schema: 'public',
    models: [User],
  })
}

const sequelize = loadSequelize();

export default sequelize;