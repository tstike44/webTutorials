var omdb = new (require('omdbapi'))('trilogy');

var movieName = process.argv[2];

omdb.search({
    search: movieName,  // required
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);