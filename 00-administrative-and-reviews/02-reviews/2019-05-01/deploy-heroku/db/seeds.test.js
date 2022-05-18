var db = require("../models");
var seeds = require('./seeds.js');
test('Seeds - the message is Everything is good after completing', () => {
    return db.sequelize.sync({ force: true }).then(function() {
      return seeds().then(function (results) {
        expect(results.message).toEqual("Everything is good!");
        db.sequelize.close();
      })
    });
});
