function add_seven (number){
    return number + 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function capitalize (word) {
    if(word[0] === word[0].toUpperCase()){
        return word;
    }
    else{
        return word[0].toUpperCase() + word.slice(1);
    }
}

function last_letter(word){
    return word[word.length - 1]
}