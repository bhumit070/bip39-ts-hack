
const wordlists = {} as any;
export let _default: any;
import czech from './wordlists/czech.json';
import chinese_simplified from './wordlists/chinese_simplified.json'
import chinese_traditional from './wordlists/chinese_traditional.json'
import english from './wordlists/english.json'
try {
    wordlists.czech = czech;
}
catch (err) { }
try {
    wordlists.chinese_simplified = chinese_simplified;
}
catch (err) { }
try {
    wordlists.chinese_traditional = chinese_traditional;
}
catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/korean.json');
//    wordlists.korean = _default;
//}
//catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/french.json');
//    wordlists.french = _default;
//}
//catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/italian.json');
//    wordlists.italian = _default;
//}
//catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/spanish.json');
//    wordlists.spanish = _default;
//}
//catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/japanese.json');
//    wordlists.japanese = _default;
//    wordlists.JA = _default;
//}
//catch (err) { }
//try {
//    exports._default = _default = require('./wordlists/portuguese.json');
//    wordlists.portuguese = _default;
//}
//catch (err) { }
try {
    wordlists.EN = english;
}
catch (err) { }

export default wordlists;