const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Appointments', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        dateAndTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
        { timestamps: false }
    );
};