function colorParagraphs(){
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(paragraph){
        paragraph.style.color = "red";
    })
}

colorParagraphs();


