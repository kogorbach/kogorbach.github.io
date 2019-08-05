$('#code').keydown(function (event) {
    if(event.which==13){
        event.preventDefault();//prevents form submission
        location.href = "hoodies/hoodie.hmtl";
    }
});
