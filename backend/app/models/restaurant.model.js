module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define("restaurant", {
        name: {
            type: Sequelize.STRING
        },
        anschrift: { type: Sequelize.STRING},
        telefonnummer: {type: Sequelize.STRING},
        tags: {type: Sequelize.STRING}
    });

    return Restaurant;
}