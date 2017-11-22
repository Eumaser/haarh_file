// ------------ QUOTATION ------------- //

$('.getCustomerInfo').change(function(){
    ShowLoader();

    var car_id = $('#getCustomerInfo').val();

    $.get("?r=quotation/get-customer-information",{
        car_id : car_id,

    },function(data){

        var data = jQuery.parseJSON(data);
        var customerinfo = data.customer_information;
        var carinfo = data.car_information;

        if(customerinfo.remarks!=null)
            $('textarea[id=message]').val(customerinfo.remarks.toUpperCase());
        else
            HideLoader();
        
        if( customerinfo.type == 1 ){
            
            var html = '<table style="width: 100%;box-shadow: 1px 1px 1px 1px;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>COMPANY NAME</b></td>' +
                                    '<td>'+customerinfo.company_name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>UEN NUMBER</b></td>' +
                                    '<td>'+customerinfo.uen_no.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CONTACT PERSON</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';

        }else{

            var html = '<table style="width: 100%;box-shadow: 1px 1px 1px 1px;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>CUSTOMER FULLNAME</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>NRIC NUMBER</b></td>' +
                                    '<td>'+customerinfo.nric.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>RACE</b></td>' +
                                    '<td>'+customerinfo.name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';
        }
        HideLoader();
        $('#customer-information').html(html);

        $('#points').val(carinfo.points);
        $('#points_redeem').removeAttr('data-point');
        $('#points_redeem').addAttr('data-point', carinfo.points);
        $('#points_redeem').Attr('placeholder', carinfo.points);

    });
});

$('.getUpdateCustomerInfo').change(function(){
    var car_id = $('#getUpdateCustomerInfo').val();

    $.get("?r=quotation/get-customer-information",{
        car_id : car_id,

    },function(data){

        var data = jQuery.parseJSON(data);
        var customerinfo = data.customer_information;
        var carinfo = data.car_information;

        $('textarea[id=message]').val(customerinfo.remarks.toUpperCase());

        $('.companyInformation').remove();
        $('#carInformation').remove();

        if( customerinfo.type == 1 ){
            
            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>COMPANY NAME</b></td>' +
                                    '<td>'+customerinfo.company_name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>UEN NUMBER</b></td>' +
                                    '<td>'+customerinfo.uen_no.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CONTACT PERSON</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';

        }else{

            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>CUSTOMER FULLNAME</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>NRIC NUMBER</b></td>' +
                                    '<td>'+customerinfo.nric.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>RACE</b></td>' +
                                    '<td>'+customerinfo.name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';
        }

        $('#customer-information').html(html);

    });

});


$('#branch_id').change(function(){
    var gst = $('#branch_id option:selected').attr('data-gst');
    $('#gst_charges').val(gst);
    calculateAddedList();
});

pendingService();
// -------- PARTS in quotation ----------- //
function quoGetPartsList()
{

    var partsCategory = $('#partsCategory').val();
    clearProductField();
    if( partsCategory == '0' ) {
        $('#services_parts').html('<option value="0">NOT RESULTS FOUND</option>')
    }else{
        $.get("?r=quotation/parts-by-category", {
            partsCategory : partsCategory,

        },function(data){
            $('#services_parts option:not(:selected)').remove();
            var data = jQuery.parseJSON(data);
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#services_parts').val()) == '-1' ) {
                    $('#services_parts').append('<option value="' + data[i].id + '" data-price="'+data[i].selling_price+'" data-total-quantity="'+data[i].quantity+'" data-product-name="'+data[i].product_name+'">' + '[ ' + data[i].supplier_name + ' ]' + ' ' + data[i].product_name + '</option>');    
                }
            }

        });

    }

}

function quoSelectParts() 
{
    var services_parts = $('#services_parts').val();
    var unit_price = $('#services_parts option:selected').attr('data-price');
    var total_quantity = $('#services_parts option:selected').attr('data-total-quantity');

    $('#quantity').val(1);
    $('#unit_price').val(unit_price);
    $('#line_total').val(unit_price);
    $( "#available_quantity" ).html( '* Current Quantity: '+ total_quantity );
}

$('#otherParts').click(function(){

    $('#modal-launcher-part').modal({
        backdrop: 'static',
        keyboard: true,
    })

    $('#modal-submit-p').click(function(){
    
        var partsDescription = $('.p-modal-form').find('textarea[name=partsDescription]').val();
        var partsPrice = $('.p-modal-form').find('input:text[name=partsPrice]').val();

        if( partsDescription == '' || partsPrice == '' ) {
            alert('Please! fill-up all the fields in form.');
            return false;
        
        }else{

            var n = $('#n').val();

            n ++ ;

            $.post("?r=quotation/insert-other-part",{
                partsDescription : partsDescription,
                partsPrice : partsPrice,
                n : n
            },
            function(data, status){
                $('.selected-item-list').append(data);
            });

            $('#n').val(n);
            $('.p-modal-form').find('textarea[name=partsDescription]').val('');
            $('.p-modal-form').find('input:text[name=partsPrice]').val('');
            $('#modal-launcher-part').modal('toggle');
            $('#services_parts option[value='+ 'otherParts' +']').prop('selected',false).change();

            setTimeout(function() {
                getQuoteGrandTotal();
            }, 500);

        }

    });

});

function quoUpdatePartsSubTotal() 
{
    if(CheckDecimal('unit_price')==false)
        $('#unit_price').val('0.00');

    var services_parts = $('#services_parts').val();
    var unit_price = $('#unit_price').val();
    var total_quantity = $('#services_parts option:selected').attr('data-total-quantity');
    var quantity = $('#quantity').val();

    //show alert if is not numeric and set 1 quantity
    if( !onlyNumber( quantity ) )
    {
        alert('Invalid quantity');
        quantity = 1;
        $('#quantity').val(quantity);
    }

    if(isNaN(parseFloat(quantity)))
        var qty = 0;
    else
        var qty = parseFloat(quantity);

    if(isNaN(parseFloat(total_quantity)))
        total_quantity = 0;
    else
        total_quantity = parseFloat(total_quantity);

    //do nothing when product is not selected
    if(services_parts==0)
        return false;
    
    //show alert when choosen quantity > total available quantity
    if(qty > total_quantity)
    {
        alert('Insuficient quantity');
        qty = total_quantity;
        $('#quantity').val(total_quantity);
    }

    var line_total = unit_price * qty;
    $('#line_total').val(line_total.toFixed(2));
}

function quoAddPartsToSelectedItem(n)
{
    var len = $('input:hidden.parts-item-Products').length;
    var products = $('input:hidden.parts-item-Products').serializeArray();

    for(var x = 0; x <= len; x++ ) {
        
        var n = products[x]['value'];
        var itemProductId = $('#parts-item-productId-'+n).val();
        var itemProductName = $('#parts-item-productName-'+n).val();
        var itemQty = $('#parts-item-qty-'+n).val();
        var itemUnitPrice = $('#parts-item-unitPrice-'+n).val();
        var itemSubTotal = $('#parts-item-subTotal-'+n).val();

        var ctr = $('#n').val();

        ctr ++ ;

        $.post("?r=quotation/insert-parts-in-list",{
            itemProductId : itemProductId,
            itemProductName : itemProductName,
            itemQty : itemQty,
            itemUnitPrice : parseFloat(itemUnitPrice).toFixed(2),
            itemSubTotal : parseFloat(itemSubTotal).toFixed(2),
            n : ctr,
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });
     
        $('#n').val(ctr);
        $('.parts-item-'+n).remove();
        $('#services_parts option[value='+ itemProductId +']').prop('selected',false).change();

        setTimeout(function() {
            getQuoteGrandTotal();
        }, 500);
    }

}

// ------------ Add Product ------------- //
function addProductRow(){

    if(!validateProduct())
        return false;

    if($('#line_total').val()=='0.00'){
        alert('Unit Price cannot be zero');
        return false;
    }

    var services_parts = $('#services_parts').val();

    if($('.product_'+services_parts).length){
        alert('this product already added to list');
        return false;
    }
    
    var unit_price = $('#unit_price').val();
    var total_quantity = $('#services_parts option:selected').attr('data-total-quantity');
    var product_name = $('#services_parts option:selected').attr('data-product-name');
    var quantity = $('#quantity').val();
    var line_total = $('#line_total').val();

    var html = '<div class="col-md-12 col-xs-12 row_list">'+
                    '<div class="col-md-3 col-xs-3">'+product_name+'</div>'+
                    '<div class="col-md-2 col-xs-2">'+quantity+'</div>'+
                    '<div class="col-md-2 col-xs-2">'+unit_price+'</div>'+
                    '<div class="col-md-2 col-xs-2">'+line_total+'</div>'+
                    '<div class="col-md-3 col-xs-3">'+
                        '<span class="remove-button">'+
                            '<a href="javascript:void(0)" onclick="removeRowList(this)">&nbsp;&nbsp;<i class="fa fa-trash"></i> Remove</a>'+
                        '</span>'+
                        '<input type="hidden" name="service_part_id[]" class="item product_'+services_parts+'" value="'+services_parts+'" data-line-total="'+line_total+'" data-plus-minus="+"/>'+
                        '<input type="hidden" name="type[]" value="1"/>'+
                        '<input type="hidden" name="quantity[]" value="'+quantity+'"/>'+
                        '<input type="hidden" name="price[]" value="'+unit_price+'"/>'+
                        '<input type="hidden" name="task[]" class="pending_task" value="0"/>'+
                        '<input type="hidden" name="item_id[]" value="0"/>'+

                    '</div><br/><br/></div>'+
                '';

    $('#added_list').append(html);
    alert('Product added successfully');
    calculateAddedList();
    clearProductField(false);
}

function validateProduct(){
    var services_parts = $('#services_parts').val();
    var unit_price = $('#services_parts option:selected').attr('data-price');
    var total_quantity = $('#services_parts option:selected').attr('data-total-quantity');
    var product_name = $('#services_parts option:selected').attr('data-product-name');
    var quantity = $('#quantity').val();
    var line_total = $('#line_total').val();

    if(isNaN(parseFloat(quantity)))
        var qty = 0;
    else
        var qty = parseFloat(quantity);

    if(isNaN(parseFloat(total_quantity)))
        total_quantity = 0;
    else
        total_quantity = parseFloat(total_quantity);

    if(isEmpty(services_parts))
    {
        alert('Please select a product');
        return false;
    }
    else if(isEmpty(quantity))
    {
        alert('Please key in quantity');
        return false;
    }
    else if(quantity > total_quantity)
     {
        alert('Invalid Quantity');
            return false;
     }   
    return true;
}

// ------------ Add Product End ------------- //


// ------------ Add Service Begin ------------- //

function addServiceRow(){
    var service_price = $('#service_price').val();
    var service_description = $('#service_description').val();

    if(validate_service_discount('service')==false)
        return false;

     var html = '<div class="col-md-12 col-xs-12 row_list">'+
                    '<div class="col-md-3 col-xs-3">'+service_description+'</div>'+
                    '<div class="col-md-2 col-xs-2">1</div>'+
                    '<div class="col-md-2 col-xs-2">'+service_price+'</div>'+
                    '<div class="col-md-2 col-xs-2">'+service_price+'</div>'+
                    '<div class="col-md-3 col-xs-3">'+
                        '<b> <input type="checkbox" name="QuotationDetail[task][]" id="task" class="task" value=""> Pending Service ?&nbsp;&nbsp;|</b>'+
                        '<span class="remove-button">'+
                            '<a href="javascript:void(0)" onclick="removeRowList(this)">&nbsp;&nbsp;<i class="fa fa-trash"></i> Remove</a>'+
                        '</span>'+
                        '<input type="hidden" name="service_part_id[]" class="item" value="'+service_description+'" data-line-total="'+service_price+'" data-plus-minus="+"/>'+
                        '<input type="hidden" name="type[]" value="0"/>'+
                        '<input type="hidden" name="quantity[]" value="1"/>'+
                        '<input type="hidden" name="price[]" value="'+service_price+'"/>'+
                        '<input type="hidden" name="task[]" class="pending_task" value="0"/>'+
                        '<input type="hidden" name="item_id[]" value="0"/>'+
                    '</div>'+
                '<br/><br/></div>';

    $('#added_list').append(html);
    alert('Service added successfully');
    calculateAddedList();
    clearServiceField();
    pendingService();
}

function pendingService(){
    $('.task').click(function(){
        var task = $(this).closest('.row_list').find('.pending_task').val();

        if($(this).prop('checked') == true){
            $(this).prop('checked', true);  
            $(this).closest('.row_list').find('.pending_task').val(1);      
        }
        else{
            $(this).prop('checked', false);
            $(this).closest('.row_list').find('.pending_task').val(0);
        }
    });
}

// ------------ Add Service End ------------- //

// ------------ Add Discount Begin ------------- //

function addDiscountRow(){
    var discount_price = $('#discount_price').val();
    var discount_description = $('#discount_description').val();

    if(validate_service_discount('discount')==false)
        return false;

     var html = '<div class="col-md-12 col-xs-12 row_list">'+
                    '<div class="col-md-3 col-xs-3">'+discount_description+'</div>'+
                    '<div class="col-md-2 col-xs-2">1</div>'+
                    '<div class="col-md-2 col-xs-2">('+discount_price+')</div>'+
                    '<div class="col-md-2 col-xs-2">('+discount_price+')</div>'+
                    '<div class="col-md-3 col-xs-3">'+
                        '<span class="remove-button">'+
                            '<a href="javascript:void(0)" onclick="removeRowList(this)">&nbsp;&nbsp;<i class="fa fa-trash"></i> Remove</a>'+
                        '</span>'+
                        '<input type="hidden" name="service_part_id[]" class="item" value="'+discount_description+'" data-line-total="'+discount_price+'" data-plus-minus="-"/>'+
                        '<input type="hidden" name="type[]" value="2"/>'+
                        '<input type="hidden" name="quantity[]" value="1"/>'+
                        '<input type="hidden" name="price[]" value="'+discount_price+'"/>'+
                        '<input type="hidden" name="task[]" class="pending_task" value="0"/>'+
                        '<input type="hidden" name="item_id[]" value="0"/>'+
                    '</div>'+
                '<br/><br/></div>';

    $('#added_list').append(html);
    alert('Discount added successfully');
    calculateAddedList();
    clearDiscountField();
}

// ------------ Add Service End ------------- //

function validate_service_discount(type)
{
    if(type=='service')
    {
        var price = $('#service_price').val();
        var description = $('#service_description').val();
        if(CheckDecimal('service_price')==false){
            alert('Invalid Price');
            return false;
        }
    }  
    else
    {
        var price = $('#discount_price').val();
        var description = $('#discount_description').val();
        if(CheckDecimal('discount_price')==false){
            alert('Invalid Price');
            return false;
        }
    } 

    if(description==''){
        alert('please key in '+type+' description');
        return false;
    }
}


function isEmpty(value)
{
    if(value == null || value.length === 0 || typeof(value) == undefined || value == 0)
        return true;

    return false;
}

function removeRowList(selector)
{
    if(confirm('Are you confirm, you want to remove this row ?'))
    {
        selector.closest('.row_list').remove();
        calculateAddedList();
        alert('row removed successfully');
    }
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function CheckDecimal(selector)   
{   
    var numbersOnly = /^\d+$/;
    var decimalOnly = /^\s*-?[0-9]\d*(\.\d{1,3})?\s*$/;
    var price = $('#'+selector).val();

    if(numbersOnly.test(price)==true || decimalOnly.test(price)==true )
    {
        $('#'+selector).val(parseFloat(price).toFixed(2));
        return true;
    }

    $('#'+selector).val('');

    return false;
}

function clearProductField(clearProduct=true){
    if(clearProduct==true)
    {
        $('#services_parts').html('<option value="0">SELECT PRODUCT</option>');
        $('#services_parts').val(0).trigger("change");
    }
    else
        $('#services_parts').val(0).trigger("change");

    $('#quantity').val('');
    $('#available_quantity').html('');
    $('#unit_price').val('');
    $('#line_total').val('');
}

function clearServiceField(){
    $('#service_price').val('');
    $('#service_description').val('');
}

function clearDiscountField(){
    $('#discount_price').val('');
    $('#discount_description').val('');
}

function calculateAddedList(){
    var gst_charge = parseInt($('#gst_charges').val());
    var point_to_price = parseFloat($('#point_to_price').val());
    var subtotal = parseFloat('0.00');
    var gst = parseFloat('0.00');
    var net = parseFloat('0.00');

    if(isNaN(point_to_price))
        point_to_price = parseFloat('0.00');

    $( ".row_list" ).each(function() {
        var line_total = parseFloat($(this).find( ".item" ).attr('data-line-total'));
        var plus_minus = $(this).find( ".item" ).attr('data-plus-minus');


        if(plus_minus=='-')
            subtotal -= line_total;
        else
            subtotal += line_total;
    });
    subtotal = parseFloat(subtotal);
    $('#grandTotal').val(subtotal.toFixed(2));
    subtotal -= point_to_price;

    if(gst_charges!=0){
        gst = parseFloat((subtotal * gst_charge) / 100);
        gst = gst.toFixed(2);

    }
    
    gst = parseFloat(gst);
    net = parseFloat(net);
    net = subtotal + gst;
    
    $('#gstResult').val(gst.toFixed(2));
    $('#netTotal').val(net.toFixed(2));
}

// -------- SERVICE in quotation ----------- //
function quoGetServiceList()
{
    var serviceCategory = $('#serviceCategory').val();
   
    if( serviceCategory == '0' ) {
        $.get("?r=quotation/service-list", {
            serviceCategory : serviceCategory,

        },function(data){ 

            var data = jQuery.parseJSON(data);
            
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#parts_services').val()) == '-1' ) {
                     $('#parts_services').append('<option value="' + data[i].id + '">' + '[ ' + data[i].service_category + ' ]' + ' ' + data[i].service_name + '</option>');            
                }
            }
           
        });

    }else{
        $.get("?r=quotation/service-by-category", {
            serviceCategory : serviceCategory,

        },function(data){
            $('#parts_services option:not(:selected)').remove();

            var data = jQuery.parseJSON(data);
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#parts_services').val()) == '-1' ) {
                    $('#parts_services').append('<option value="' + data[i].id + '">' + '[ ' + data[i].service_category + ' ]' + ' ' + data[i].service_name + '</option>');    
                }
            }
        });
    }

}

function quoSelectService() 
{
    var parts_services = $('#parts_services').val();
    var serviceCtr = $('#serviceCtr').val();

    serviceCtr++;

    $.post("?r=quotation/insert-service-in-item-list", {
        parts_services : parts_services,
        serviceCtr: serviceCtr

    },
    function(data, status) {
        $('#service-item-list').html(data);

    });

    $('#serviceCtr').val(partsCtr);
    setTimeout(function(){
        quoUpdateServiceSubTotal(partsCtr);
    });
}

$('#otherServices').click(function(){

    $('#serviceDescription').removeAttr('readonly');
    $('#servicePrice').removeAttr('readonly');
    $('#otherServices').addClass('hidden');
    $('.submitServices').removeClass('hidden');
    $('.clearServices').removeClass('hidden');

});

$('#submitAddedService').click(function(){
    var serviceDescription = $('textarea[id=serviceDescription]').val();
    var servicePrice = $('input:text[id=servicePrice]').val();

    if( serviceDescription == '' || servicePrice == '' ) {
        alert('Please key the services fields first.');
        return false;
    
    }else{

        if( !onlyNumber(servicePrice) ) {
            alert('Invalid service price format.');
            servicePrice.focus();
        }

        if( !onlyLetterAndNumber(serviceDescription) ) {
            alert('Invalid service remarks format.');
            serviceDescription.focus();
        }

        var n = $('#n').val();

        n ++ ;

        $.post("?r=quotation/insert-other-service",{
            serviceDescription : serviceDescription,
            servicePrice : parseFloat(servicePrice).toFixed(2),
            n : n
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });

        $('#n').val(n);
        $('textarea[id=serviceDescription]').val('');
        $('input:text[id=servicePrice]').val('');
        
        $('#serviceDescription').attr('readonly', true);
        $('#servicePrice').attr('readonly', true);
        $('#otherServices').removeClass('hidden');
        $('.submitServices').addClass('hidden');
        $('.clearServices').addClass('hidden');

        // $('#modal-launcher-service').modal('toggle');
        // $('#parts_services option[value='+ 'otherServices' +']').prop('selected',false).change();

        setTimeout(function() {
            getQuoteGrandTotal();
        }, 500);

    }

});

$('#cancelAddedService').click(function(){

    $('#serviceDescription').val('');
    $('#servicePrice').val('');    
    $('#serviceDescription').attr('readonly', true);
    $('#servicePrice').attr('readonly', true);
    $('#otherServices').removeClass('hidden');
    $('.submitServices').addClass('hidden');
    $('.clearServices').addClass('hidden');
        
});

function quoUpdateServiceSubTotal(n) 
{
    var serviceItemQty = $('#service-item-qty-'+n).val();
    var serviceItemUnitPrice = $('#service-item-unitPrice-'+n).val();
    var serviceItemSubTotal = serviceItemQty * serviceItemUnitPrice;

    $('#service-item-subTotal-'+n).val(parseFloat(serviceItemSubTotal).toFixed(2));

}

function quoAddServiceToSelectedItem(n)
{
    var len = $('input:hidden.service-item-Services').length;
    var services = $('input:hidden.service-item-Services').serializeArray();

    for(var i = 0; i <= len; i++ ) {
        
        var n = services[i]['value'];
        var itemServiceId = $('#service-item-serviceId-'+n).val();
        var itemServiceName = $('#service-item-serviceName-'+n).val();
        var itemQty = $('#service-item-qty-'+n).val();
        var itemUnitPrice = $('#service-item-unitPrice-'+n).val();
        var itemSubTotal = $('#service-item-subTotal-'+n).val();

        var ctr = $('#n').val();

        ctr ++ ;

        $.post("?r=quotation/insert-service-in-list",{
            itemServiceId : itemServiceId,
            itemServiceName : itemServiceName,
            itemQty : itemQty,
            itemUnitPrice : itemUnitPrice,
            itemSubTotal : itemSubTotal,
            n : ctr,
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });
     
        $('#n').val(ctr);
        $('.service-item-'+n).remove();
        $('#parts_services option[value='+ itemServiceId +']').prop('selected',false).change();

        setTimeout(function() {
            getQuoteGrandTotal();
        }, 500);
    }

}

// ------ Get GST for quotation ------ //

$('.getBranchGst').change(function(){
    var branchId = $(this).val();

    $.get("?r=quotation/get-branch-gst-by-id", {
        branchId : branchId
    }, function(data){
        $('#gst').val(data);
    });
    setTimeout(function() {
        getQuoteGrandTotal();
    }, 500);

});

//-------------------Selected items function in quotation -----------------------------//

function updateSelectedItemSubtotal(n) 
{
    var selectedQty = $('#selected-'+n+'-itemQty').val();
    var selectedPrice = $('#selected-'+n+'-itemPrice').val();
    var selectedSubTotal = selectedQty * selectedPrice;

    $('#selected-'+n+'-subTotal').val(parseFloat(selectedSubTotal).toFixed(2));
    getQuoteGrandTotal();
}

function removeSelectedItem(n) 
{
    $('.item-'+n).remove();
    setTimeout(function() {
        getQuoteGrandTotal();
    }, 500);
}

function getQuoteGrandTotal() 
{
    var total = 0;
    var discountPrice = $('input:text[id=discountAmount]').val();

    $('.subTotalGroup').each(function(){
        total += parseFloat($(this).val());
    })

    $('#grandTotal').val(total.toFixed(2));

    var grandTotal =  $('#grandTotal').val();
    var gst = $('#gst').val();
    var totalWithGst = total * $('#gst').val();

    totalWithGst /= 100;
    $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

    var net = parseFloat(grandTotal) + parseFloat(totalWithGst);

    if(discountPrice == ''){
       var discount = 0; 
    
    }else{
        var discount = discountPrice;

    }

    var net_with_disc = parseFloat(net) - parseFloat(discount);
    $('#netTotal').val(parseFloat(net_with_disc).toFixed(2));

}

// ---------------- quotation discount --------------------- //

$('#btnDiscount').click(function(){

    $('#discountRemarks').removeAttr('readonly');
    $('#discountAmount').removeAttr('readonly');
    $('#btnDiscount').addClass('hidden');
    $('.submitDiscount').removeClass('hidden');
    $('.clearDiscount').removeClass('hidden');

});

$('#submitDiscount').click(function(){
    var discountDescription = $('textarea[id=discountRemarks]').val();
    var discountPrice = $('input:text[id=discountAmount]').val();
    var branchSelected = $('#quoBranch').val();
    var grand_total =  $('#grandTotal').val();

    if( discountDescription == '' || discountPrice == '' ) {
        alert('Please key the discount fields first.');
        return false;
    
    }else if(branchSelected == 0){
        alert('Please key branch first.');
        $('#discountAmount').val('');   
        $('#discountRemarks').val('');
        return false;

    }else if(grand_total == '0.00'){
        alert('Please key product or services first.');
        $('#discountAmount').val('');   
        $('#discountRemarks').val('');
        return false;

    }else{

        if( !onlyNumber(discountPrice) ) {
            alert('Invalid discount amount format.');
            discountPrice.focus();
        }

        if( !onlyLetterAndNumber(discountDescription) ) {
            alert('Invalid discount remarks format.');
            discountDescription.focus();
        }

        var total = 0;

        $('.subTotalGroup').each(function(){
            total += parseFloat($(this).val());
        })

        $('#grandTotal').val(total.toFixed(2));

        var grandTotal =  $('#grandTotal').val();
        var gst = $('#gst').val();
        var totalWithGst = total * $('#gst').val();

        totalWithGst /= 100;
        $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

        var net = parseFloat(grandTotal) + parseFloat(totalWithGst);
        var net_with_disc = parseFloat(net) - parseFloat(discountPrice);

        $('#netTotal').val(parseFloat(net_with_disc).toFixed(2));

        $('#discountRemarks').attr('readonly', true);
        $('#discountAmount').attr('readonly', true);
        $('#btnDiscount').removeClass('hidden');
        $('.submitDiscount').addClass('hidden');
        $('.clearDiscount').addClass('hidden');
    }

});

$('#clearDiscount').click(function(){

    $('#discountRemarks').val('');
    $('#discountAmount').val('');    
    $('#discountRemarks').attr('readonly', true);
    $('#discountAmount').attr('readonly', true);
    $('#btnDiscount').removeClass('hidden');
    $('.submitDiscount').addClass('hidden');
    $('.clearDiscount').addClass('hidden');
        
});

// ---------------- quotation update discount --------------------- //

$('#btnUpdateDiscount').click(function(){

    $('#discountUpdateRemarks').removeAttr('readonly');
    $('#discountAmount').removeAttr('readonly');
    $('#btnUpdateDiscount').addClass('hidden');
    $('.submitUpdateDiscount').removeClass('hidden');
    $('.clearUpdateDiscount').removeClass('hidden');

});

$('#submitUpdateDiscount').click(function(){
    var discountDescription = $('textarea[id=discountUpdateRemarks]').val();
    var discountPrice = $('input:text[id=discountAmount]').val();

    if( discountDescription == '' || discountPrice == '' ) {
        alert('Please key the discount fields first.');
        return false;

    }else{

        if( !onlyNumber(discountPrice) ) {
            alert('Invalid discount amount format.');
            discountPrice.focus();
        }

        if( !onlyLetterAndNumber(discountDescription) ) {
            alert('Invalid discount remarks format.');
            discountDescription.focus();
        }

        var total = 0;

        $('.subTotalGroup').each(function(){
            total += parseFloat($(this).val());
        })

        $('#grandTotal').val(total.toFixed(2));

        var grandTotal =  $('#grandTotal').val();
        var gst = $('#gst').val();
        var totalWithGst = total * $('#gst').val();

        totalWithGst /= 100;
        $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

        var net = parseFloat(grandTotal) + parseFloat(totalWithGst);
        var net_with_disc = parseFloat(net) - parseFloat(discountPrice);

        $('#netTotal').val(parseFloat(net_with_disc).toFixed(2));

        $('#discountUpdateRemarks').attr('readonly', true);
        $('#discountAmount').attr('readonly', true);
        $('#btnUpdateDiscount').removeClass('hidden');
        $('.submitUpdateDiscount').addClass('hidden');
        $('.clearUpdateDiscount').addClass('hidden');
    }

});

$('#discountAmount').change(function(){
    var discountCopyPrice = $('input:hidden[id=discountAmountCopy]').val();

    if( parseFloat($(this).val()) < parseFloat(discountCopyPrice)){
        alert('Discount can not decrease.');
        return false;
    }

});

$('#clearUpdateDiscount').click(function(){

    $('#discountUpdateRemarks').attr('readonly', true);
    $('#discountAmount').attr('readonly', true);
    $('#btnUpdateDiscount').removeClass('hidden');
    $('.submitUpdateDiscount').addClass('hidden');
    $('.clearUpdateDiscount').addClass('hidden');
        
});

// ---------------- quotation print ------------------------ //

$('.showPrices').click(function()
{
    var chkboxVal = $(this).val();

    if( $(this).prop('checked') == true ) {
        $('.quoSubtotalHeader').hide('slow');
        $('.quoServiceSubtotal').hide('slow');
        $('.quoPartsSubtotal').hide('slow');

    }else{
        $('.quoSubtotalHeader').show('slow');
        $('.quoServiceSubtotal').show('slow');
        $('.quoPartsSubtotal').show('slow');

    }

});


function quotationPrint() 
{
    $('#print_quotation').css('visibility', 'hidden'); 
    $('#showPrices').css('visibility', 'hidden');
    $('#hidePriceLabel').css('visibility', 'hidden');
    $('#closeQuotePrint').css('visibility', 'hidden');

    window.print();  

    $('#print_quotation').css('visibility', 'visible'); 
    $('#showPrices').css('visibility', 'visible');
    $('#hidePriceLabel').css('visibility', 'visible');
    $('#closeQuotePrint').css('visibility', 'visible');
}

// ------------------------- INVOICE ------------------------- //

$('.getInvCustomerInfo').change(function(){

    ShowLoader();
    var car_id = $('#getInvCustomerInfo').val();

    if(car_id==0)
    {
        HideLoader();
        $('#customer-invoice-information').html('');
    }

    $.get("?r=invoice/get-customer-information",{
        car_id : car_id,
    },function(data){

        var data = jQuery.parseJSON(data);
        var customerinfo = data.customer_information;
        var carinfo = data.car_information;

        if(customerinfo.remarks!=null)
            $('textarea[id=message]').val(customerinfo.remarks.toUpperCase());
        else
        {
            HideLoader();
            $('#customer-invoice-information').html('');
            $('#points_redeem').attr('data-point', 0);
            $('#points_redeem').attr('placeholder', "No Points Available");
        }
        // alert(customerinfo.type);
        if( customerinfo.type == 1 ){
            
            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>COMPANY NAME</b></td>' +
                                    '<td>'+customerinfo.company_name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>UEN NUMBER</b></td>' +
                                    '<td>'+customerinfo.uen_no.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CONTACT PERSON</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';

        }else{

            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>CUSTOMER FULLNAME</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>NRIC NUMBER</b></td>' +
                                    '<td>'+customerinfo.nric.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>RACE</b></td>' +
                                    '<td>'+customerinfo.name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';
        }

        HideLoader();

        $('#customer-invoice-information').html(html);
        $('#points').val(carinfo.points);
        // $('#points_redeem').removeAttr('data-point');
        $('#points_redeem').attr('data-point', carinfo.points);
        if(carinfo.points!=0)
            $('#points_redeem').attr('placeholder', carinfo.points+ " Points Remaining");
        else
            $('#points_redeem').attr('placeholder', "No Points Available");
    });

});

$('.getUpdateInvCustomerInfo').change(function(){
    var car_id = $('#getUpdateInvCustomerInfo').val();

    $.get("?r=invoice/get-customer-information",{
        car_id : car_id,

    },function(data){

        var data = jQuery.parseJSON(data);
        var customerinfo = data.customer_information;
        var carinfo = data.car_information;

        $('textarea[id=invMessage]').val(customerinfo.remarks.toUpperCase());

        $('.invoiceCompanyInformation').remove();
        $('#invoiceCarInformation').remove();

        if( customerinfo.type == 1 ){
            
            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>COMPANY NAME</b></td>' +
                                    '<td>'+customerinfo.company_name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>UEN NUMBER</b></td>' +
                                    '<td>'+customerinfo.uen_no.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CONTACT PERSON</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';

        }else{

            var html = '<table style="width: 100%;">'+
                        '<tr>'+
                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>CUSTOMER FULLNAME</b></td>' +
                                    '<td>'+customerinfo.fullname.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>NRIC NUMBER</b></td>' +
                                    '<td>'+customerinfo.nric.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>RACE</b></td>' +
                                    '<td>'+customerinfo.name.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ADDRESS</b></td>' +
                                    '<td>'+customerinfo.address.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>PHONE NUMBER</b></td>' +
                                    '<td>'+customerinfo.hanphone_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>OFFICE NUMBER</b></td>' +
                                    '<td>'+customerinfo.office_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>EMAIL</b></td>' +
                                    '<td>'+customerinfo.email.toUpperCase()+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+

                        '<td>'+
                            '<table class="table table-hover table-striped viewTableContent">'+
                                '<tr>'+
                                    '<td><b>VEHICLE NUMBER</b></td>' +
                                    '<td>'+carinfo.carplate.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MAKE</b></td>' +
                                    '<td>'+carinfo.make.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CAR MODEL</b></td>' +
                                    '<td>'+carinfo.model.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>ENGINE NUMBER</b></td>' +
                                    '<td>'+carinfo.engine_no+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>YEAR MFG</b></td>' +
                                    '<td>'+carinfo.year_mfg+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>CHASIS</b></td>' +
                                    '<td>'+carinfo.chasis.toUpperCase()+'</td>'
                                +'</tr>'+
                                '<tr>'+
                                    '<td><b>REWARD POINTS</b></td>' +
                                    '<td>'+carinfo.points+'</td>'
                                +'</tr>'+
                            '</table>'+
                        '</td>'+
                        '</tr>'
                        +'</table>';
        }

        $('#customer-invoice-information').html(html);

    });

});

$('#points_redeem').on('change', function(e){

    


    var total_point = parseInt($(this).attr('data-point'));

    if (!(/^\d+$/.test($(this).val())))
    {
        alert('Invalid Point Redeem');
        $('#points_redeem').val('');
        $('#point_to_price').val('0.00');

        calculateAddedList();
        return false;
    }

    var point_to_redeem = parseInt($(this).val());

    if(point_to_redeem > total_point)
    {
        alert('Insufficient Point Redeem');
        $(this).val(total_point);
        calculateAddedList();
    }

    // if(point_to_redeem==0)
        // return false;

    //price per one point
    var price_per_point = parseFloat((1/20));
    var point_to_price = parseFloat(point_to_redeem * price_per_point).toFixed(2);
    $('#point_to_price').val(point_to_price);
    calculateAddedList();
});

$('#create_quotation_form').on('submit', function(e){

    $.ajax({
      url: $(this).attr('action'),
      async: true,
      cache: false,
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: "json",
      success: function(response){
        HideLoader();

        if (response.status == "failed"){
            $('#result_message').html("<div class='alert alert-danger'>"+response.message+"</div>");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
        else if(response.redirect!='')
            window.location.href = response.redirect;
        else 
            $('#result_message').html("<div class='alert alert-success'>"+response.message+"</div>");
      },
      error: function(data, status){
            HideLoader();
            alert("Ajax error occured: \nPage Status: " + data.status +"\nStatus Text: "+data.statusText);
        },
    });
    e.stopImmediatePropagation();
    return false;
});


var $edit_quotation_form = $('#edit_quotation_form');
var $edit_invoice_form = $('#edit_invoice_form');

if($edit_quotation_form.size())
{
    var customer_id = $('#getCustomerInfo').val();
    $('#getCustomerInfo').val(customer_id);
    $('#getCustomerInfo').change();
}

if( $edit_invoice_form.size())
{
    var customer_id = $('#getInvCustomerInfo').val();
    $('#getInvCustomerInfo').val(customer_id);
    $('#getInvCustomerInfo').change();   
}

$('#edit_quotation_form').on('submit', function(e){
    $.ajax({
      url: $(this).attr('action'),
      async: true,
      cache: false,
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: "json",
      success: function(response){
        HideLoader();

        if (response.status == "failed"){
            $('#result_message').html("<div class='alert alert-danger'>"+response.message+"</div>");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
        else if(response.redirect!='')
            window.location.href = response.redirect;
        else 
            $('#result_message').html("<div class='alert alert-success'>"+response.message+"</div>");
      },
      error: function(data, status){
            HideLoader();
            alert("Ajax error occured: \nPage Status: " + data.status +"\nStatus Text: "+data.statusText);
        },
    });
    e.stopImmediatePropagation();
    return false;
});

// -------- PARTS in invoice ----------- //
$('#create_invoice_form').on('submit', function(e){

    $.ajax({
      url: $(this).attr('action'),
      async: true,
      cache: false,
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: "json",
      success: function(response){
        HideLoader();

        if (response.status == "failed"){
            $('#result_message').html("<div class='alert alert-danger'>"+response.message+"</div>");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
        else if(response.redirect!='')
            window.location.href = response.redirect;
        else 
            $('#result_message').html("<div class='alert alert-success'>"+response.message+"</div>");
      },
      error: function(data, status){
            HideLoader();
            alert("Ajax error occured: \nPage Status: " + data.status +"\nStatus Text: "+data.statusText);
        },
    });
    e.stopImmediatePropagation();
    return false;
});

$('#edit_invoice_form').on('submit', function(e){
    $.ajax({
      url: $(this).attr('action'),
      async: true,
      cache: false,
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: "json",
      success: function(response){
        HideLoader();

        if (response.status == "failed"){
            $('#result_message').html("<div class='alert alert-danger'>"+response.message+"</div>");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
        else if(response.redirect!='')
            window.location.href = response.redirect;
        else 
            $('#result_message').html("<div class='alert alert-success'>"+response.message+"</div>");
      },
      error: function(data, status){
            HideLoader();
            alert("Ajax error occured: \nPage Status: " + data.status +"\nStatus Text: "+data.statusText);
        },
    });
    e.stopImmediatePropagation();
    return false;
});

function invGetPartsList()
{
    var partsCategory = $('#partsCategory').val();
   
    if( partsCategory == '0' ) {
        $.get("?r=invoice/parts-list", {
            partsCategory : partsCategory,

        },function(data){ 

            var data = jQuery.parseJSON(data);
            
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#services_parts').val()) == '-1' ) {
                     $('#services_parts').append('<option value="' + data[i].id + '">' + '[ ' + data[i].supplier_name + ' ]' + ' ' + data[i].product_name + '</option>');            
                }
            }
           
        });

    }else{
        $.get("?r=quotation/parts-by-category", {
            partsCategory : partsCategory,

        },function(data){
            $('#services_parts option:not(:selected)').remove();

            var data = jQuery.parseJSON(data);
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#services_parts').val()) == '-1' ) {
                    $('#services_parts').append('<option value="' + data[i].id + '">' + '[ ' + data[i].supplier_name + ' ]' + ' ' + data[i].product_name + '</option>');    
                }
            }

        });

    }

}

function invSelectParts() 
{
    var services_parts = $('#services_parts').val();
    var partsCtr = $('#partsCtr').val();

    partsCtr++;

    $.post("?r=invoice/insert-parts-in-item-list", {
        services_parts : services_parts,
        partsCtr: partsCtr

    },
    function(data, status) {
        $('#parts-item-list').html(data);

    });

    $('#partsCtr').val(partsCtr);
    setTimeout(function(){
        invUpdatePartsSubTotal(partsCtr);
    });
}

$('#otherInvoiceParts').click(function(){
    $('#modal-launcher-part').modal({
        backdrop: 'static',
        keyboard: true,
    })

    $('#modal-submit-p').click(function(){
    
        var partsDescription = $('.p-modal-form').find('textarea[name=partsDescription]').val();
        var partsPrice = $('.p-modal-form').find('input:text[name=partsPrice]').val();

        if( partsDescription == '' || partsPrice == '' ) {
            alert('Please! fill-up all the fields in form.');
            return false;
        
        }else{

            var n = $('#n').val();

            n ++ ;

            $.post("?r=invoice/insert-other-part",{
                partsDescription : partsDescription,
                partsPrice : partsPrice,
                n : n
            },
            function(data, status){
                $('.selected-item-list').append(data);
            });

            $('#n').val(n);
            $('.p-modal-form').find('textarea[name=partsDescription]').val('');
            $('.p-modal-form').find('input:text[name=partsPrice]').val('');
            $('#modal-launcher-part').modal('toggle');
            $('#services_parts option[value='+ 'otherParts' +']').prop('selected',false).change();

            setTimeout(function() {
                getInvoiceGrandTotal();
            }, 500);

        }

    });
});

function invUpdatePartsSubTotal(n) 
{
    var partsItemQty = $('#parts-item-qty-'+n).val();
    var partsItemUnitPrice = $('#parts-item-unitPrice-'+n).val();
    var partsItemSubTotal = partsItemQty * partsItemUnitPrice;

    $('#parts-item-subTotal-'+n).val(parseFloat(partsItemSubTotal).toFixed(2));

}

function invAddPartsToSelectedItem(n)
{
    var len = $('input:hidden.parts-item-Products').length;
    var products = $('input:hidden.parts-item-Products').serializeArray();

    for(var x = 0; x <= len; x++ ) {
        
        var n = products[x]['value'];
        var itemProductId = $('#parts-item-productId-'+n).val();
        var itemProductName = $('#parts-item-productName-'+n).val();
        var itemQty = $('#parts-item-qty-'+n).val();
        var itemUnitPrice = $('#parts-item-unitPrice-'+n).val();
        var itemSubTotal = $('#parts-item-subTotal-'+n).val();

        var ctr = $('#n').val();

        ctr ++ ;

        $.post("?r=invoice/insert-parts-in-list",{
            itemProductId : itemProductId,
            itemProductName : itemProductName,
            itemQty : itemQty,
            itemUnitPrice : itemUnitPrice,
            itemSubTotal : itemSubTotal,
            n : ctr,
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });
     
        $('#n').val(ctr);
        $('.parts-item-'+n).remove();
        $('#services_parts option[value='+ itemProductId +']').prop('selected',false).change();

        setTimeout(function() {
            getInvoiceGrandTotal();
        }, 500);
    }

}

// -------- SERVICE in invoice ----------- //
function invGetServiceList()
{
    var serviceCategory = $('#serviceCategory').val();
   
    if( serviceCategory == '0' ) {
        $.get("?r=invoice/service-list", {
            serviceCategory : serviceCategory,

        },function(data){ 

            var data = jQuery.parseJSON(data);
            
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#parts_services').val()) == '-1' ) {
                     $('#parts_services').append('<option value="' + data[i].id + '">' + '[ ' + data[i].service_category + ' ]' + ' ' + data[i].service_name + '</option>');            
                }
            }
           
        });

    }else{
        $.get("?r=invoice/service-by-category", {
            serviceCategory : serviceCategory,

        },function(data){
            $('#parts_services option:not(:selected)').remove();

            var data = jQuery.parseJSON(data);
            for(var i = 0; i <= data.length; i++) {
                if( $.inArray(data[i].id, $('#parts_services').val()) == '-1' ) {
                    $('#parts_services').append('<option value="' + data[i].id + '">' + '[ ' + data[i].service_category + ' ]' + ' ' + data[i].service_name + '</option>');    
                }
            }
        });
    }

}

function invSelectService() 
{
    var parts_services = $('#parts_services').val();
    var serviceCtr = $('#serviceCtr').val();

    serviceCtr++;

    $.post("?r=invoice/insert-service-in-item-list", {
        parts_services : parts_services,
        serviceCtr: serviceCtr

    },
    function(data, status) {
        $('#service-item-list').html(data);

    });

    $('#serviceCtr').val(partsCtr);
    setTimeout(function(){
        quoUpdateServiceSubTotal(partsCtr);
    });
}

$('#otherInvServices').click(function(){

    $('#serviceInvDescription').removeAttr('readonly');
    $('#serviceInvPrice').removeAttr('readonly');
    $('#otherInvServices').addClass('hidden');
    $('.submitInvServices').removeClass('hidden');
    $('.clearInvServices').removeClass('hidden');

});

$('#submitAddedInvService').click(function(){
    var serviceDescription = $('textarea[id=serviceInvDescription]').val();
    var servicePrice = $('input:text[id=serviceInvPrice]').val();

    if( serviceDescription == '' || servicePrice == '' ) {
        alert('Please key the services fields first.');
        return false;
    
    }else{

        if( !onlyNumber(servicePrice) ) {
            alert('Invalid service price format.');
            servicePrice.focus();
        }

        if( !onlyLetterAndNumber(serviceDescription) ) {
            alert('Invalid service remarks format.');
            serviceDescription.focus();
        }

        var n = $('#n').val();

        n ++ ;

        $.post("?r=invoice/insert-other-service",{
            serviceDescription : serviceDescription,
            servicePrice : parseFloat(servicePrice).toFixed(2),
            n : n
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });

        $('#n').val(n);
        $('textarea[id=serviceInvDescription]').val('');
        $('input:text[id=serviceInvPrice]').val('');
        
        $('#serviceInvDescription').attr('readonly', true);
        $('#serviceInvPrice').attr('readonly', true);
        $('#otherInvServices').removeClass('hidden');
        $('.submitInvServices').addClass('hidden');
        $('.clearInvServices').addClass('hidden');

        // $('#modal-launcher-service').modal('toggle');
        // $('#parts_services option[value='+ 'otherServices' +']').prop('selected',false).change();

        setTimeout(function() {
            getInvoiceGrandTotal();
        }, 500);

    }

});

$('#cancelAddedInvService').click(function(){

    $('#serviceInvDescription').val('');
    $('#serviceInvPrice').val('');    
    $('#serviceInvDescription').attr('readonly', true);
    $('#serviceInvPrice').attr('readonly', true);
    $('#otherInvServices').removeClass('hidden');
    $('.submitInvServices').addClass('hidden');
    $('.clearInvServices').addClass('hidden');
        
});


function invUpdateServiceSubTotal(n) 
{
    var serviceItemQty = $('#service-item-qty-'+n).val();
    var serviceItemUnitPrice = $('#service-item-unitPrice-'+n).val();
    var serviceItemSubTotal = serviceItemQty * serviceItemUnitPrice;

    $('#service-item-subTotal-'+n).val(parseFloat(serviceItemSubTotal).toFixed(2));

}

function invAddServiceToSelectedItem(n)
{
    var len = $('input:hidden.service-item-Services').length;
    var services = $('input:hidden.service-item-Services').serializeArray();

    for(var i = 0; i <= len; i++ ) {
        
        var n = services[i]['value'];
        var itemServiceId = $('#service-item-serviceId-'+n).val();
        var itemServiceName = $('#service-item-serviceName-'+n).val();
        var itemQty = $('#service-item-qty-'+n).val();
        var itemUnitPrice = $('#service-item-unitPrice-'+n).val();
        var itemSubTotal = $('#service-item-subTotal-'+n).val();

        var ctr = $('#n').val();

        ctr ++ ;

        $.post("?r=invoice/insert-service-in-list",{
            itemServiceId : itemServiceId,
            itemServiceName : itemServiceName,
            itemQty : itemQty,
            itemUnitPrice : itemUnitPrice,
            itemSubTotal : itemSubTotal,
            n : ctr,
        },
        function(data, status){
            $('.selected-item-list').append(data);
        });
     
        $('#n').val(ctr);
        $('.service-item-'+n).remove();
        $('#parts_services option[value='+ itemServiceId +']').prop('selected',false).change();

        setTimeout(function() {
            getInvoiceGrandTotal();
        }, 500);
    }

}

// ------------------ Get GST for invoice -------------------- //

$('.getBranchGstForInvoice').change(function(){
    var branchId = $(this).val();

    $.get("?r=invoice/get-branch-gst-by-id", {
        branchId : branchId
    }, function(data){
        $('#gst').val(data);
    });
    setTimeout(function() {
        getInvoiceGrandTotal();
    }, 500);

});

//-------------------Selected items function in invoice -----------------------------//

function updateInvoiceSelectedItemSubtotal(n) 
{
    var selectedQty = $('#selected-'+n+'-itemQty').val();
    var selectedPrice = $('#selected-'+n+'-itemPrice').val();
    var selectedSubTotal = selectedQty * selectedPrice;

    $('#selected-'+n+'-subTotal').val(parseFloat(selectedSubTotal).toFixed(2));
    getQuoteGrandTotal();
}

function removeInvoiceSelectedItem(n) 
{
    $('.item-'+n).remove();
    setTimeout(function() {
        getInvoiceGrandTotal();
    }, 500);
}

function getInvoiceGrandTotal() 
{
    var total = 0;
    var discountPrice = $('input:text[id=discountInvAmount]').val();

    $('.subTotalGroup').each(function(){
        total += parseFloat($(this).val());
    })

    $('#grandTotal').val(total.toFixed(2));

    var grandTotal =  $('#grandTotal').val();
    var gst = $('#gst').val();
    var totalWithGst = total * $('#gst').val();

    totalWithGst /= 100;
    $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

    var net = parseFloat(grandTotal) + parseFloat(totalWithGst);

    if(discountPrice == ''){
       var discount = 0; 
    
    }else{
        var discount = discountPrice;

    }

    var net_with_disc = parseFloat(net) - parseFloat(discount);
    $('#netTotal').val(parseFloat(net_with_disc).toFixed(2));

}

// ---------------- invoice discount --------------------- //

$('#btnInvDiscount').click(function(){

    $('#discountInvRemarks').removeAttr('readonly');
    $('#discountInvAmount').removeAttr('readonly');
    $('#btnInvDiscount').addClass('hidden');
    $('.submitInvDiscount').removeClass('hidden');
    $('.clearInvDiscount').removeClass('hidden');

});

$('#submitInvDiscount').click(function(){
    var discountDescription = $('textarea[id=discountInvRemarks]').val();
    var discountPrice = $('input:text[id=discountInvAmount]').val();
    var branchSelected = $('#invBranch').val();
    var grand_total =  $('#grandTotal').val();

    if( discountDescription == '' || discountPrice == '' ) {
        alert('Please key the discount fields first.');
        return false;
    
    }else if(branchSelected == 0){
        alert('Please key branch first.');
        $('#discountInvAmount').val('');
        $('#discountInvRemarks').val('');
        return false;

    }else if(grand_total == '0.00'){
        alert('Please key product or services first.');
        $('#discountInvAmount').val('');
        $('#discountInvRemarks').val('');
        return false;

    }else{

        if( !onlyNumber(discountPrice) ) {
            alert('Invalid discount amount format.');
            discountPrice.focus();
        }

        if( !onlyLetterAndNumber(discountDescription) ) {
            alert('Invalid discount remarks format.');
            discountDescription.focus();
        }

        var total = 0;

        $('.subTotalGroup').each(function(){
            total += parseFloat($(this).val());
        })

        $('#grandTotal').val(total.toFixed(2));

        var grandTotal =  $('#grandTotal').val();

        var total = parseFloat(grandTotal) - parseFloat(discountPrice);

        $('#grandTotal').val(total.toFixed(2));
        
        var gst = $('#gst').val();
        var totalWithGst = total * ($('#gst').val()/100);

        $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

        var net = parseFloat(total) + parseFloat(totalWithGst);

        $('#netTotal').val(parseFloat(net).toFixed(2));

        $('#discountInvRemarks').attr('readonly', true);
        $('#discountInvAmount').attr('readonly', true);
        $('#btnInvDiscount').removeClass('hidden');
        $('.submitInvDiscount').addClass('hidden');
        $('.clearInvDiscount').addClass('hidden');
    }

});

$('#clearInvDiscount').click(function(){

    $('#discountInvRemarks').val('');
    $('#discountInvAmount').val('');    
    $('#discountInvRemarks').attr('readonly', true);
    $('#discountInvAmount').attr('readonly', true);
    $('#btnInvDiscount').removeClass('hidden');
    $('.submitInvDiscount').addClass('hidden');
    $('.clearInvDiscount').addClass('hidden');
        
});

// ---------------- invoice update discount --------------------- //

$('#btnUpdateDiscount').click(function(){

    $('#discountUpdateRemarks').removeAttr('readonly');
    $('#discountAmount').removeAttr('readonly');
    $('#btnUpdateDiscount').addClass('hidden');
    $('.submitUpdateDiscount').removeClass('hidden');
    $('.clearUpdateDiscount').removeClass('hidden');

});

$('#submitUpdateDiscount').click(function(){
    var discountDescription = $('textarea[id=discountUpdateRemarks]').val();
    var discountPrice = $('input:text[id=discountAmount]').val();

    if( discountDescription == '' || discountPrice == '' ) {
        alert('Please key the discount fields first.');
        return false;

    }else{

        if( !onlyNumber(discountPrice) ) {
            alert('Invalid discount amount format.');
            discountPrice.focus();
        }

        if( !onlyLetterAndNumber(discountDescription) ) {
            alert('Invalid discount remarks format.');
            discountDescription.focus();
        }

        var total = 0;

        $('.subTotalGroup').each(function(){
            total += parseFloat($(this).val());
        })

        $('#grandTotal').val(total.toFixed(2));

        var grandTotal =  $('#grandTotal').val();
        var gst = $('#gst').val();
        var totalWithGst = total * $('#gst').val();

        totalWithGst /= 100;
        $('#gstResult').val(parseFloat(totalWithGst).toFixed(2));

        var net = parseFloat(grandTotal) + parseFloat(totalWithGst);
        var net_with_disc = parseFloat(net) - parseFloat(discountPrice);

        $('#netTotal').val(parseFloat(net_with_disc).toFixed(2));

        $('#discountUpdateRemarks').attr('readonly', true);
        $('#discountAmount').attr('readonly', true);
        $('#btnUpdateDiscount').removeClass('hidden');
        $('.submitUpdateDiscount').addClass('hidden');
        $('.clearUpdateDiscount').addClass('hidden');
    }

});

$('#discountAmount').change(function(){
    var discountCopyPrice = $('input:hidden[id=discountAmountCopy]').val();

    if( parseFloat($(this).val()) < parseFloat(discountCopyPrice)){
        alert('Discount can not decrease.');
        return false;
    }

});

$('#clearUpdateDiscount').click(function(){

    $('#discountUpdateRemarks').attr('readonly', true);
    $('#discountAmount').attr('readonly', true);
    $('#btnUpdateDiscount').removeClass('hidden');
    $('.submitUpdateDiscount').addClass('hidden');
    $('.clearUpdateDiscount').addClass('hidden');
        
});

// ------------ invoice print ------------- //

function invoicePrint() 
{
    $('#print_invoice').css('visibility', 'hidden'); 
    $('#close_invoice_print').css('visibility', 'hidden');

    window.print();  

    $('#print_invoice').css('visibility', 'visible'); 
    $('#close_invoice_print').css('visibility', 'visible');

}

function multipleInvoicePrint() 
{
    $('#print_invoice').css('visibility', 'hidden'); 
    $('#close_invoice_print').css('visibility', 'hidden');

    window.print();  

    $('#print_invoice').css('visibility', 'visible'); 
    $('#close_invoice_print').css('visibility', 'visible');

}

$('#closeQuotePrint').click(function(){
    var domain ="http://"+document.domain;
    window.location = domain + '/system?r=quotation';
});

$('.close_invoice_print').click(function(){
    var domain ="http://"+document.domain;
    window.location = domain + '/system?r=invoice';
});

// ============= Validation ============== //

function onlyLetterAndNumber(element)
{
    var alphanum = /^[a-zA-Z0-9\s\.\,\+]*$/;
    
    if(element.match(alphanum)) {
        return true;
    }else{
        return false;
    }
}

function onlyNumber(element)
{
    var num = /^[0-9\s\.\,]*$/;
    
    if(element.match(num)) {
        return true;
    }else{
        return false;
    }
}


// ============= Auto fill in invoices for debug purpose ============== //

$('#create_invoice_form #mileage').dblclick(function() {
  
    var mileage = $(this).val();

    if(mileage!='``')
    return false;

    $('#partsCategory').val(4);
    $('#partsCategory').trigger('change');
    $('#branch_id').val(3).trigger('change');
    $('#mileage').val('294872');
    $('#branch_id').val(3).trigger('change');  
    $('#getInvCustomerInfo').val(13);
    $('#getInvCustomerInfo').trigger('change');
    $('#datetimepicker_comein').val('14-08-2017 10:48:02');
    $('#datetimepicker_comeout').val('15-08-2017 10:48:02');

    setTimeout(function () {
        $('#services_parts').val(163);
        $('#services_parts').trigger('change');
        $('#quantity').val(8);
        $('#quantity').trigger('change');
        addProductRow();

        $('#service_price').val('103.89');
        $('#service_description').val('service 1');
        addServiceRow();

        $('#service_price').val('56.84');
        $('#service_description').val('service 2');
        addServiceRow();

        $('#service_price').val('23.57');
        $('#service_description').val('service 3');
        addServiceRow();

        $('#service_price').val('102.57');
        $('#service_description').val('service 4');
        addServiceRow();

        $('#service_price').val('45.21');
        $('#service_description').val('service 5');
        addServiceRow();

        $('#discount_price').val('56.87');
        $('#discount_description').val('discount 1');
        addDiscountRow();

        $('#discount_price').val('204.84');
        $('#discount_description').val('discount 2');
        addDiscountRow();

        $('#points_redeem').val('650');
        $('#points_redeem').trigger('change');
        $( "textarea[name='Invoice[remarks]']" ).val('test added remarks');
    }, 500);
    
});

$('#create_quotation_form #mileage').dblclick(function() {
  
    var mileage = $(this).val();

    if(mileage!='``')
    return false;

    $('#partsCategory').val(4);
    $('#partsCategory').trigger('change');
    $('#branch_id').val(3).trigger('change');
    $('#mileage').val('294872');
    $('#branch_id').val(3).trigger('change');  
    $('#getCustomerInfo').val(13);
    $('#getCustomerInfo').trigger('change');
    $('#datetimepicker_comein').val('14-08-2017 10:48:02');
    $('#datetimepicker_comeout').val('15-08-2017 10:48:02');

    setTimeout(function () {
        $('#services_parts').val(163);
        $('#services_parts').trigger('change');
        $('#quantity').val(8);
        $('#quantity').trigger('change');
        addProductRow();

        $('#service_price').val('103.89');
        $('#service_description').val('service 1');
        addServiceRow();

        $('#service_price').val('56.84');
        $('#service_description').val('service 2');
        addServiceRow();

        $('#service_price').val('23.57');
        $('#service_description').val('service 3');
        addServiceRow();

        $('#service_price').val('102.57');
        $('#service_description').val('service 4');
        addServiceRow();

        $('#service_price').val('45.21');
        $('#service_description').val('service 5');
        addServiceRow();

        $('#discount_price').val('56.87');
        $('#discount_description').val('discount 1');
        addDiscountRow();

        $('#discount_price').val('204.84');
        $('#discount_description').val('discount 2');
        addDiscountRow();

        // $('#points_redeem').val('650');
        // $('#points_redeem').trigger('change');
        $( "textarea[name='Quotation[remarks]']" ).val('test added remarks');
    }, 500);
    
});