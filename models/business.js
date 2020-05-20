module.exports = function(sequelize, DataTypes) {
    const Business = sequelize.define('Business', {
        name: 
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        address:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        city: 
            {   
                type: DataTypes.STRING,
                allowNull: false
            },
        state: 
            {                
                type: DataTypes.STRING,
                allowNull: false
            },
        zip: 
            {                
                type: DataTypes.INTEGER,
                allowNull: false
            },
        type: 
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        lat: 
            {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
        long: 
            {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
        payment: DataTypes.STRING,
        placeId: DataTypes.STRING
    });

    Business.associate = (models) => {
        Business.belongsToMany(models.Arcade, {through : models.BusinessArcade});
    }

    return Business;
}