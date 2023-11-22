const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
        { timestamps: false }
    );
};