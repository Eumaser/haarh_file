$(document).ready(function () {

    if( $('.qtyValues').length ) {
        $('.qtyValues').each(function(){

            $(this).change(function(){
                var qtyValueId = $(this).attr('id');
                var qtyValue = $(this).val();

                $('.qtyStocks').each(function(){
                    if( $(this).attr('id') === qtyValueId ) {                     
                        var qtySvalue = $(this).val();
                        var total = parseInt(qtySvalue) + parseInt(qtyValue);
                        
                        return $(this).val(parseInt(total));                         
                
                    }
                });    

            });

        });
    }
    
});