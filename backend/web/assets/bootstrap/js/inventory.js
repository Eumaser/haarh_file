var domain ="http://"+document.domain;

$('#btnChkBox').click(function(){
	$('#btnUnChkBox').removeClass('hidden');
	$('.partsChkbox').prop('checked',true);
	$('#btnChkBox').addClass('hidden');
});

$('#btnUnChkBox').click(function(){
	$('#btnChkBox').removeClass('hidden');
	$('.partsChkbox').prop('checked',false);
	$('#btnUnChkBox').addClass('hidden');
});

function partsQtyValue(n)
{
	var qtyValueId = $('.partsAddStock-'+n).attr('id');
    var qtyValue = $('.partsAddStock-'+n).val();
    var qtyOldStock = $('.partsOldQuantity-'+n).val();

    if(!onlyNumber(qtyValue)){
    	alert('Invalid add stock value.');
    	$('.partsAddStock-'+n).val('');
    	$('.partsNewQuantity-'+n).val(parseInt(qtyOldStock));
    	qtyValue.focus();
    	return false;
    }

    var qtyNewStock = $('.partsNewQuantity-'+n).val();

    if( qtyValue == null || qtyValue == '' ){
    	$('.partsNewQuantity-'+n).val(parseInt(qtyOldStock));
    	return true;
    
    }else{
    	$('.partsNewQuantity-'+n).val(parseInt(qtyValue) + parseInt(qtyNewStock));
    	return true;

    }

}

if( $('.deductStocksQty').length ){

$('.deductStocksQty').each(function(){
	$(this).click(function(){
		
		$('#modal-launcher-inventory').modal({
            backdrop: 'static',
            keyboard: true,
        })

        var productId = $(this).attr('id');

        $.get("?r=product/get-product-information",{
        	productId : productId,

        },function(data){
        	var data = jQuery.parseJSON(data);		
        	var html = '<table class="table table-hover table-striped viewTableContent">'+
						'<tr>'+
							'<td><b>ID</b></td>' +
							'<td>'+data.id+'</td>'
						+'</tr>'+
						'<tr>'+
							'<td><b>SUPPLIER NAME</b></td>' +
							'<td>'+data.supplier_name.toUpperCase()+'</td>'
						+'</tr>'+
						'<tr>'+
							'<td><b>PRODUCT CODE</b></td>' +
							'<td>'+data.product_code.toUpperCase()+'</td>'
						+'</tr>'+
						'<tr>'+
							'<td><b>PRODUCT NAME</b></td>' +
							'<td>'+data.product_name.toUpperCase()+'</td>'
						+'</tr>'+
							'<td><b>QUANTITY</b></td>' +
							'<td>'+'<button type="button" class="btn btn-info btn-xs" onclick="addQty('+productId+')" ><i class="fa fa-plus-circle"></i></button>'+'<label style="font-size:22px; font-weight: 600;" id="productQty" >'+data.quantity+'</label>'+' '+	'<button type="button" class="btn btn-info btn-xs" onclick="deductQty('+productId+')" ><i class="fa fa-minus-circle"></i></button>'+'</td>'
						+'</tr>'
				+'</table>';

				$('#i-modal-form').find('input:hidden[id=productId]').val(productId);
				$('#i-modal-form').find('input:hidden[id=oldQty]').val(parseInt(data.quantity));
				$('#i-modal-form').find('input:hidden[id=newQty]').val(parseInt(data.quantity));
				$('#product_information').html(html);

        });

	});
});

}

function addQty()
{
	var oldQty = $('#oldQty').val();
	var newQty = $('#newQty').val();
	var totalQty = parseInt(newQty) + parseInt(1);
	
	$('#newQty').val(parseInt(totalQty));
	$('#productQty').html(parseInt(totalQty));
	return true;
}

function deductQty(id)
{
	var oldQty = $('#oldQty').val();
	var newQty = $('#newQty').val();
	var totalQty = parseInt(newQty) - parseInt(1);
	
	$('#newQty').val(parseInt(totalQty));
	$('#productQty').html(parseInt(totalQty));
	return true;
}

$('#modal-submit-i').click(function(){
	var productId = $('#productId').val();
	var oldQty = $('#oldQty').val();
	var newQty = $('#newQty').val();

	$.post('?r=product/update-stock-quantity',{
		productId: productId,
		oldQty: oldQty,
		newQty: newQty

	},function(data){
		$('#productId').val('');
		$('#oldQty').val('');
		$('#newQty').val('');

		alert('Product quantity was successfully updated.');
		$('#modal-launcher-inventory').toggle();
		window.location.reload();
	});

});

$('#productName').change(function(){
	var productId = $('#productName').val()

	if(productId == ''){
		alert('Please key Product name first.');
		return false;

	}else{

		$.get('?r=inventory/get-product-quantity',{
		productId : productId,

		},function(data){
			var data = jQuery.parseJSON(data);
			var result = data.result;
			
			$('#newQty').val(result.quantity);
			$('#oldQty').val(result.quantity);
		});
	}

});

$('#addQty').change(function(){
	var addToQty = $('#addQty').val();
	var newQty = $('#newQty').val();
	var oldQty = $('#oldQty').val();

	if(addToQty == ''){
		alert('Please key to Add Product Qty first.');
		$('#newQty').val(parseInt(oldQty));
		return false;

	}else{

		if( !onlyNumber(addToQty) ) {
            alert('Invalid Add Product Qty format.');
            $('#addQty').val('');
            addToQty.focus();
        }

		$('#newQty').val(parseInt(addToQty) + parseInt(newQty));
		return true;

	}

});

function newProduct()
{
	var productId = $('#productName').val();
	var newQty = $('#newQty').val();
	var oldQty = $('#oldQty').val();

	if(productId == '0' || productId == '' || newQty == ''){
		alert('Please key product information first.');
		return false;

	}else{

		var n = $('#n').val();

		n++;

		$.post('?r=inventory/insert-in-list',{
			productId : productId,
			newQty : newQty,
			oldQty : oldQty,
			n : n

		},function(data){
			$('#selected-product-list').append(data);

			$('#n').val(n);
			$('#productName').val(0).change();
			$('#addQty').val('');
			$('#newQty').val('');
			$('#oldQty').val('');
		});
	}
}

function removeProductInList(n)
{
	$('.product-'+n).remove();
}

function onlyNumber(element)
{
    var num = /^[0-9]*$/;
    
    if(element.match(num)) {
        return true;
    }else{
        return false;
    }
}
