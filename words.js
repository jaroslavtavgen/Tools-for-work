function splitIntoSentences(text) {
    // Trim whitespace and split the text using regex for punctuation marks followed by whitespace or end of line
    const sentences = text.match(/[^.!?]*[.!?]/g);
    // Return an array of trimmed sentences, filtering out any empty ones
    return sentences ? sentences.map(sentence => sentence.trim()) : [];
}

let text = "Что это? Это автомобиль. Какой этот автомобиль? Он слишком маленький и довольно плохой. Какой тот автомобиль? Тот автомобиль новый и хороший, но слишком большой. Какой этот ковер? Он большой и очень красивый. Но ковер ли это? Разве это не картина? Да, это большая и довольно красивая картина. Маленькая кошка - белая, а большая кошка - черная. Эта маленькая кошка тоже черная. Что это? Это дом. Какой он? Он большой. Он новый? Нет, он довольно старый";

let sentences = splitIntoSentences(text);
for(let i=0;i<sentences.length;i++){
	let sentence = sentences[i];
}