/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let mergedWord = "";
    longestWordLen = 0;

    if ( word1.length >= word2.length){
        longestWordLen = word1.length;
    }
    else longestWordLen = word2.length;
    
    for (let i  = 0; i < longestWordLen; i++ ){
        if( word1[i]){
            mergedWord += word1[i]
        }
        if( word2[i]){
            mergedWord += word2[i]
        }
    }
    return(mergedWord);
    
};

