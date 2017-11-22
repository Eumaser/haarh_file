$('#userRole').change(function(){
    if( $(this).val() == "" || $('#controllerName').val() == "" || $('#controllerName').val() == "" || $('#controllerName').val() == "0" || $('#controllerName').val() == "CHOOSE CONTROLLER HERE" ) {
        alert('Choose Controller first');
    }else {
        $('#w0').submit();
    }
});

$('#controllerName').change(function(){
    if( $('#controllerName').val() == "" || $('#controllerName').val() == "0" || $('#controllerName').val() == "CHOOSE CONTROLLER HERE" ) {
        alert('Choose Controller in List.');
    }else {
        $('#w0').submit();
    }
});

$('#select-all').click(function(event) {   
    $('.actionChkbox').each(function() {
        this.checked = true;
    
    });
});

$('#checkAllParts').click(function(event) {   
    $('.updateQty').each(function() {
        this.checked = true;
    
    });
});