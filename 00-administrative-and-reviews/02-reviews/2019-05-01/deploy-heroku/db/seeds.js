var db = require('../models');

var authorSeeds = [{
    id: 1,
    name: "Taylor"
}, {
    id: 2,
    name: "Archie"
}, {
    id: 3,
    name: "Nick"
}];

var postSeeds = [{
    title: "Post 1",
    body: "Body 1",
    AuthorId: 1
}, {
    title: "Post 2",
    body: "Body 2",
    AuthorId: 1
}, {
    title: "Post 3",
    body: "Body 3",
    AuthorId: 2
}, {
    title: "Post 4",
    body: "Body 4",
    AuthorId: 2
}, {
    title: "Post 5",
    body: "Body 5",
    AuthorId: 3
}, {
    title: "Post 6",
    body: "Body 6",
    AuthorId: 3
}];

function createData(seeds, Model) {
    var creationPromises = [];
    seeds.forEach(function (seed) {
        creationPromises.push(Model.create(seed));
    });
    return Promise.all(creationPromises)
}

module.exports = function () {
    // create seed data in our database
    var allPromises = [];
    allPromises.push(createData(authorSeeds, db.Author));
    allPromises.push(createData(postSeeds, db.Post));
    return Promise.all(allPromises).then(function () {
        console.log("All data complete.");
        return {
            message: "Everything is good!"
        }
    });
}