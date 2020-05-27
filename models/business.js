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
                type: DataTypes.DECIMAL(10,8),
                allowNull: false
            },
        long: 
            {
                type: DataTypes.DECIMAL(11,8),
                allowNull: false
            },
        payment: DataTypes.STRING,
        photoRef:             
            {
                type: DataTypes.STRING,
                allowNull: false
            },    
        url:             
            {
                type: DataTypes.STRING,
                allowNull: false
            },
    }); //,{timestamps: false} //Uncomment if we want to remove createdAt and updatedAt

    Business.associate = (models) => {
        Business.belongsToMany(models.Arcade, {through : models.BusinessArcade});
    }

    return Business;
}