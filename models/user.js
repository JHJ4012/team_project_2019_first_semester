module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        u_id: {
            type: DataTypes.STRING(20),
            allowNull: true,    //이거 잘못한 거임. false 되야됨.
            unique: true,
        },
        u_passwd: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        u_nickName: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: true,   //createtime, updatetime 디비에 자동으로 넣어주는거
        paranoid: true,     //deletetime 디비에 넣어주는 것. 삭제해도 디비에서 select 하면 목록에 나옴(deletetime이 기록된 채로). 실제로 없는 값으로 취급.
    })
);