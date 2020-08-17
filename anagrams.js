// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

function anagrams(word, words) {
    const rea = word.split('').sort((a,b)=> a < b ? -1 : 1).join('');
    return words.filter(a => rea === a.split('').sort((a,b) => a< b ? -1 : 1).join(''));
}