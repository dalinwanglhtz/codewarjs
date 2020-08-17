// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

function anagrams(word, words) {
    const rea = reorder(word);
    return words.filter(a => rea === reorder(a));
}

function reorder(word) {
    // My solution
    return word.split('').sort((a,b) => a < b ? -1 : 1).join('');

    // Other solution
    //return word.split('').sort().join('');
}