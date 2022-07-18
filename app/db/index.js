const Sequelize = require('sequelize');

const dbConfig = {
  username: 'root',
  password: 'root',
  port: 3306,
  database: 'my-db',
  host: 'localhost',
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('连接已创建成功。');
  })
  .catch(error => {
    console.error('连接数据库失败：', error);
  });

module.exports = sequelize;
