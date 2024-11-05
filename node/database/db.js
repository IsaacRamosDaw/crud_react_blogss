import { Sequelize } from "sequelize";

const db = new Sequelize("blog_app", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
