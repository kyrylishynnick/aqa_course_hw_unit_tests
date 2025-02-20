/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsAndConsonantsResult = '';
let vowels = 'aeiou';
let consonants = 'bcdfghjklmnpqrstvwxyz';
let numberOfVowels = 0;
let numberOfConsonants = 0;

for (let i = 0; i <= word.length; i++) {
    if (vowels.includes(word[i])){
        numberOfVowels = numberOfVowels + 1;
    }
    else if (consonants.includes(word[i])){
        numberOfConsonants = numberOfConsonants + 1;
    }
}
vowelsAndConsonantsResult = `hello contains ${numberOfVowels} vowels and ${numberOfConsonants} consonants`;
console.log (vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };
