module.exports = (sequelize, DataTypes) => {

    const alias = 'Movie';
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        awards: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: 'movies',
        timestamps: false
    }
    const Movie = sequelize.define(alias, columns, config);
    return Movie




    // return Modelo

}