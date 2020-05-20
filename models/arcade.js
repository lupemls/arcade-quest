module.exports = (sequelize, DataTypes) => {
    const Arcade = sequelize.define('Arcade', {
        game: 
            {                
                type: DataTypes.STRING,
                allowNull: false
            },
        type: 
            {                
                type: DataTypes.STRING,
                allowNull: false
            }
    });

    Arcade.associate = (models) => {
        Arcade.belongsToMany(models.Business, {through : models.BusinessArcade});
    }
    return Arcade; 
}; 