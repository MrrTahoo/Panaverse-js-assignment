var PersonName = 'Muhammad Taha Siddiqi';


// toUpperCase function converts my string to upper case
console.log(PersonName.toUpperCase());
console.log(PersonName.toLowerCase());


var PersonNameNotTitleCase = 'muhammad Taha SIDDIqi'
console.log(sentenceCase(PersonNameNotTitleCase));



// this fucntion takes a string as argument and returns the title case of that string
function sentenceCase(str) {
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}