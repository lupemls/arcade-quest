module.exports = function(sequelize, DataTypes) {
    const Arcade = sequelize.define('Arcade', {
        game: DataTypes.STRING,
        type: DataTypes.STRING
    });
    return Arcade; 
}; 