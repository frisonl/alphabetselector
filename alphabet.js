function divAlphabet() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var zeroletters = [];
    var oneletters = [];
    var twoletters = [];

    for (i = 0; i = Math.ceil(alphabet.length / 3); i++) {
        for (n = 0; n < 3; n++) {

            switch (n) {
                case 0:
                    var tempLetter = alphabet.substring(n, n + 1);
                    zeroletters.push(tempLetter);
                    break;
                case 1:
                    var tempLetter = alphabet.substring(n, n + 1);
                    oneletters.push(tempLetter);
                    break;
                case 2:
                    var tempLetter = alphabet.substring(n, n + 1);
                    twoletters.push(tempLetter);
                    break;
            }


        }
        alphabet = alphabet.substring(3);
        console.log(alphabet);
    }

    tempArray = [];

    for (let i of twoletters)
        i && tempArray.push(i); // copy each non-empty value to the 'temp' array

    twoletters = tempArray;
    delete tempArray;




    console.log(zeroletters);
    console.log(oneletters);
    console.log(twoletters);
};

divAlphabet();
