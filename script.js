$('#code').keydown(function (event) {
    if(event.which==13){
        event.preventDefault();//prevents form submission
        window.location.href = window.document.codeform.code.value + '.html';        
    }
});
