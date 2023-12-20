const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const charactercount = document.querySelector("[data-character-count]") ;
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

input.addEventListener("input", function(){
    if(input.value){
        //count word
        // const wordsArray = input.value.split(" ").filter((word)=> !== "" ) ;
        const wordsArray = input.value.split(" ").filter((word) => word !== "");

        wordCount.innerText = wordsArray.length;
        // count character
        charactercount.innerText = input.value.length;
        // count sentences
        const sentenceArray = input.value.split(/[.!]/);
        sentenceCount.innerText = sentenceArray.length - 1 ;
        //count paragraph 
        const paragraphArray = input.value
        .split("\n")
        .filter((p)=> p.trim() !==  "");
        paragraphCount.innerText = paragraphArray.length;

    }else{
        wordCount.innerText = 
        charactercount.innerText = 
        sentenceCount.innerText = 
        paragraphCount.innerText =
        0;
    }
});
