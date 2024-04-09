import data from '../cmudict/cmudict-0.7b';

let dictionary;

function loadDictionary() {
    const lines = data.split('\n');
    dictionary = {};

    for (let line of lines) {
        const trimmedLine = line;
        if (trimmedLine.startsWith(';;;')) {
            continue;
        }
        const [key, arpabet] = trimmedLine.split('  ');
        if (arpabet) {
            dictionary[key] = arpabet.trim();
        }
    }
}

export function cmuDictionaryLookup(word) {
    if (!dictionary) {
        loadDictionary();
    }
    return dictionary[word.toUpperCase()];
}
