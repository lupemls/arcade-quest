module.exports = function(sequelize, DataTypes) {
    const Business = sequelize.define('Business', {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        type: DataTypes.STRING,
        lat: DataTypes.DECIMAL,
        long: DataTypes.DECIMAL,
        payment: DataTypes.STRING
    });

    return Business;
}