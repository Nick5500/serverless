import { User } from "./models/user.model";
import { Sequelize } from "sequelize-typescript";

export function loadSequelize() {
  return new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    schema: 'public',
    models: [User],
    logging: false,
  })
}

// const sequelize = loadSequelize();
//
// const doSequelizeSync = true;
//
// if (doSequelizeSync) {
//   (async () => {
//     try {
//       await sequelize.sync({
//         force: true,
//       });
//     } catch (e) {
//       console.error(e);
//       process.exit(1);
//     }
//   })();
// }
//
// export default sequelize;