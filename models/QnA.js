module.exports = (sequelize, DataTypes) => (
    sequelize.define('qna', {
        q_title: {
            type: DataTypes.STRING(100),
            allowNull: true,    //false로 해야됨.
        },
        q_body: {
            type: DataTypes.STRING(1000),
            allowNull: true,    //false로 해야됨.
        },
        q_nick: {
            type: DataTypes.STRING(20),
            allowNull: true,    //false로 해야됨.
        },
    }, {
        timestamps: true,
        paranoid: true,
    })
);