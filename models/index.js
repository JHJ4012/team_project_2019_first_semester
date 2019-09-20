const Sequelize = require('sequelize'); //sequelize 은 ORM 중 하나.
                                        //ORM(Object Relational Mapping)은 application과 Database사이를 맵핑시켜주는 도구
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];  //development로 디비를 정보를 가져옴.
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize; //Sequelize의 인스턴스
db.Sequelize = Sequelize; //Sequelize의 생성자
// db ==> {sequelize : sequelize, Sequelize : Sequelize}
//        {sequelize, Sequelize}
// db['sequelize']=sequelize; db['Sequelize']=Sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Introduce = require('./introduce')(sequelize, Sequelize);
db.QnA = require('./QnA')(sequelize, Sequelize);
db.answerQnA = require('./answerQnA')(sequelize, Sequelize);

module.exports = db;