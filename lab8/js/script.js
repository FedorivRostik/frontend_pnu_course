// The array of names
(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    // Iterating over the array and greeting each person
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    // Selecting names based on the last letter
    console.log("Names ending with 'a':");
    for (var i = 0; i < names.length; i++) {
        var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
        if (lastLetter === "a") {
            console.log(names[i]);
        }
    }

    // Selecting names based on the sum of ASCII codes
    console.log("Names with sum of ASCII codes greater than 600:");
    for (var i = 0; i < names.length; i++) {
        var asciiSum = 0;
        for (var j = 0; j < names[i].length; j++) {
            asciiSum += names[i].charCodeAt(j);
        }
        if (asciiSum > 600) {
            console.log(names[i]);
        }
    }
}) ();