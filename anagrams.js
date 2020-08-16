// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

function anagrams(word, words) {
    let results = [];
    const rea = word.split('').sort((a,b)=> a < b ? -1 : 1).join('');
    for(let a of words) {
        if(rea === a.split('').sort((a,b) => a< b ? -1 : 1).join(''))
            results.push(a);
    }
    console.log(results);
}