var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    /**
     * Prints the info inside of my object
     * @param {number} a This is used to return a value
     * @returns {number} This is the value of a + 10
     */
    printInfo: function(a) {
      console.log("inside printInfo()");

      // What will this print?
      console.log(this);

      // What will this print?
      console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);

      var nestedFunction = function() {
        console.log("inside nestedFunction()");

        // What will this print?
        console.log(this);

        // What will this print?
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
      };

      nestedFunction();
      return a + 10;
    }
  };

  // calls the printInfo function. Which subsequently calls the nestedFunction()
  cat.printInfo();