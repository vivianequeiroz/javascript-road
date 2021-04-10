const phrase = 'JavaScript';

const newPhrase = phrase.replace(/a/, 'b');

console.log(newPhrase);

// Reges types - good reference: https://regexr.com

// Literal - performa a search for the specific character defined
// Flag:g - returns all results that are in the pattern defined. g means global and perform a search at the entire field anaalyzed 
// Flag: i - does not distinguish upper and lowercase - case insensitive
// Character Class /[ab]/ - select separately each character informed
// /\./ - to escape the character
// One or another - searchs and consider variations of a word as /Bra[sz]il/g
// /0-9/ - the hypen "-" indicates a seach from the first element to the second declared following the unicode table 
// Deny ^:  /[^.]/ - ignores each characters inside the regex
// Dot (.): selects all characters except line breaks
// /\w/: selects alphanumeric characters and the /\d/: select all digits -- \W and \D selects their opposite
// \s/: selects all white spaces
// Quantifier: /i{2, 3}/ - search for the total character(s) incidence 