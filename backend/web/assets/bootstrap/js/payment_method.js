var domain ="http://"+document.domain;

$('#singleMethod').hide();
$('#multipleMethod').hide();

$('#sRedeemPoints').hide();
$('#mRedeemPoints').hide();
// $('.s_point_to_price_row').hide();

// ---------- Redeem Points ------------- //
$('#getpaymentMethod').change(function(){

	if( $(this).val() == 1 ) {
		$('#multipleMethod').hide('fast');
		$('#singleMethod').show('fast');
		resetSinglePayment();
	
	}else if( $(this).val() == 2 ) {
		$('#singleMethod').hide('fast');
		$('#multipleMethod').show('fast');
	
	}else{
		$('#singleMethod').hide('fast');
		$('#multipleMethod').hide('fast');

	}

});

// ---------- Single Payment ------------- //

$('.chkboxRedeemPoints').click(function(){
	
	if( $('#chkboxRedeemPoints').prop('checked') == true ) {
		$('#sRedeemPoints').show('fast');
		// $('.s_point_to_price_row').show('fast');

	} else {
		$('#sRedeemPoints').hide('fast');
		// $('.s_point_to_price_row').hide('fast');
		resetSinglePayment(false);
	}

});


$('#payment_form').on('submit', function(e){
	var payment_method = $('#getpaymentMethod').val();
	var mode_payment = $('#sModePayment').val();
	var date_time = $('#sDateTime').val();
	var amount = $('#sAmount').val();
	var redeem_points = $('#sRedeemPoints').val();
	var remarks = $('#sRemarks').val();
	var invoice_id = $('#sInvoiceId').val();
	var invoice_no = $('#sInvoiceNo').val();
	var customer_id = $('#sCustomerId').val();
	var payment_date = $('#sPaymentDate').val();
	var payment_time = $('#sPaymentTime').val();
	var grand_total = $('#sGrandTotal').val();
	var gst = $('#sGst').val();
	var net = $('#sNet').val();
	var balance_amount = $('#sBalance_amount').val();


	if(payment_method== 1)
	{
		if($('#sModePayment').val()=='0')
			alert('Please select mode of payment');
		else if($('#sAmount').val()=='')
			alert('Please key in an amount');	
		else if($('#sRemarks').val()=='')
			alert('Please key remarks');	
		else{
			if(confirm('Are you sure, you want to submit payment?'))
			{
				$.ajax({
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
			}
		    
		    e.stopImmediatePropagation();
		    return false;
	    }
	}
	else if(payment_method==2){
		if(confirm('Are you sure, you want to submit payment?'))
			{
				$.ajax({
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
			}
	}
	else{
		alert('please select a payment method');
	}
	return false;
});

// ---------- Multiple Payment ------------- //

$('.mChkboxRedeemPoints').click(function(){
	
	if( $('#mChkboxRedeemPoints').prop('checked') == true ) {
		$('#mRedeemPoints').show('slow');

	} else {
		$('#mRedeemPoints').hide('slow');
		
	}

});

$('#sModePayment').on('change', function() {
    	var interest = $('option:selected', this).attr('data-interest');

    	if(interest==undefined)
    		return false;

    	var default_amount = parseFloat($('#sAmount').attr('data-amount'));

    	if(interest==0){
    		$('#sInterestAmount').val('0');
    		$('#sInterestCharge').val('0.00');
    	}
    	else{
    		var interest_charge = (default_amount * interest / 100);
    		var total = (default_amount * interest / 100) + default_amount;
    		
    		$('#sInterestAmount').val(interest);
    		$('#sInterestCharge').val(interest_charge.toFixed(2));
    		$('#sTotalAmount').val(total.toFixed(2));
    	}
    	$('#sInterest').val(interest);
    	$('#sAmount').val(default_amount.toFixed(2));
    	// $('#sInterest').val(interest);

    	if( $('#chkboxRedeemPoints').prop('checked') == true )
			$('#chkboxRedeemPoints').trigger('click');

		// $('#sRedeemPoints').val('0');
    	// $('#sPoint_to_price').val('0.00');

	});

function newPayment() {

	var mPayment_type = $('#mPayment_type').val();
	var mTotalAmount = $('#mTotalAmount').val();
	var mPoints_redeem = $('#mRedeemPoints').val();
	var mRemarks = $('#mRemarks').val();
	var mInterestCharge = $('#mInterestCharge').val();
	var mPayment_type_name = $('#mPayment_type option:selected').html();
	var mInterest = $('#mInterest').val();

	var n = $('#n').val();

	if(mPayment_type==0 || mPayment_type=='')
	{
		alert('Please choose mode of payment.')
		return false;
	}
	else if(mAmount=='' || mAmount=='0.00')
	{
		alert('Please key in Amount');
		return false;
	}
	else if(mRemarks=='')
	{
		alert('Please key in remarks');
		return false;
	}

	n ++ ;

    if( mPoints_redeem == "") {
    	mPoints_redeem = 0;
    }

	data = "<tr class='payment-"+n+"'>"+
				"<td class='servicespartsContainerHeader'>"+mPayment_type_name+"</td>"+
				// "<td class='servicespartsContainerHeader'>"+mPoints_redeem+"</td>"+
				"<td class='servicespartsContainerHeader'>"+mTotalAmount+"</td>"+
				"<td class='servicespartsContainerHeader'>"+mRemarks+"</td>"+
				"<td class='servicespartsContainerHeader'><a href='javascript:removePayment("+n+")'>&nbsp;&nbsp;<i class='fa fa-trash'></i> Remove</a></td>"+
			"</tr>"+
			"<input type='hidden' name='payment_type[]' value='"+mPayment_type+"'/>"+
			"<input type='hidden' name='interest_amount[]' value='"+mInterestCharge+"'/>"+
			"<input type='hidden' name='total_amount[]' value='"+mTotalAmount+"'/>"+
			"<input type='hidden' name='remarks[]' value='"+mRemarks+"'/>"+
			"<input type='hidden' name='interests[]' value='"+mInterest+"'/>";
	$('.added-payment-lists').append(data);
	$('#n').val(n);
	alert('Successfully added payment row');
	resetMultiPayment();
}

function removePayment(n) {
	if(confirm('Are you sure, you want to remove this payment record?')){
    	$('.payment-'+n).remove();
    	alert('Successfully remove payment record');
	}
}

	$('#mPayment_type').on('change', function() {
    	var interest = $('option:selected', this).attr('data-interest');

    	if(interest==undefined)
    		return false;

    	$('#mInterest').val(interest);
    	$('#mInterestAmount').val(interest);
    	$('#mInterestCharge').val('0.00');
    	$('#mAmount').val('0.00');
    	$('#mTotalAmount').val('0.00');

    	if( $('#chkboxRedeemPoints').prop('checked') == true )
			$('#chkboxRedeemPoints').trigger('click');

	});

	$('#mAmount').on('change', function() {
    	var amount = $(this).val();
    	var interest = $('#mPayment_type option:selected').attr('data-interest');


    	if(interest==undefined)
    		interest = 0;

    	if(CheckDecimal('mAmount')==false){
            alert('Invalid Amount');
            $('#mAmount').val('0.00');
            return false;
        }
        amount = parseFloat(amount);

    	var default_amount = parseFloat($('#mAmount').attr('data-amount'));

    	if(interest==0){
    		$('#mTotalAmount').val(amount.toFixed(2));
    		$('#mInterestCharge').val('0.00');
    	}
    	else{
    		var interest_charge = (amount * interest / 100);
    		var total = (amount * interest / 100) + amount;
    		
    		$('#mInterestCharge').val(interest_charge.toFixed(2));
    		$('#mTotalAmount').val(total.toFixed(2));
    	}
    	$('#mInterest').val(interest);

    	if( $('#chkboxRedeemPoints').prop('checked') == true )
			$('#chkboxRedeemPoints').trigger('click');
	});

    function calSinglePayment(){
    	 // var point_to_redeem = parseInt($('#sRedeemPoints').val());
    	 // var balance_amount = parseFloat($('#sAmount').val());

    	 // if(isNaN(point_to_redeem))
	    	// point_to_redeem = 0;

    	//price per one point
    	// var price_per_point = parseFloat((1/20));
	    // var point_to_price = parseFloat(point_to_redeem * price_per_point).toFixed(2);
	    // $('#sPoint_to_price').val(point_to_price);

	    // var balance = balance_amount-point_to_price;
		// $('#sAmount').val(balance.toFixed(2));	    
    }

    function resetSinglePayment(resetPoint=true){

    	if(resetPoint==true)
    	{
    		// if( $('#chkboxRedeemPoints').prop('checked') == true ) {
				// $('#chkboxRedeemPoints').trigger('click');

			// } 
	    	$('#sModePayment').val(0).trigger("change")
    	}
    	
    	$('#sRedeemPoints').val('0');
    	// $('#sPoint_to_price').val('0.00');

    	if($('#sModePayment').val()!=0){
    		var interest = $('option:selected', $('#sModePayment')).attr('data-interest');

    		if(interest==0){
    			var balance_amount = $('#sAmount').attr('data-amount');
		    	$('#sAmount').val(balance_amount);
    		}
    		else{
    			var balance_amount = parseFloat($('#sAmount').attr('data-amount'));
    			balance_amount = (balance_amount * interest / 100) + balance_amount;

		    	$('#sAmount').val(balance_amount.toFixed(2));
    		}
		}
    	$('#sRemarks').val();
    }

    function resetMultiPayment(){
    	
    	$('#mPayment_type').val(0).trigger("change")
    	$('#mInterestAmount').val('0');
    	$('#mAmount').val('0.00');
    	$('#mInterestCharge').val('0.00');
    	$('#mTotalAmount').val('0.00');
    	$('#mRemarks').val('');
    }

    $('#mRedeemPoints').on('input', function() {
    	$('#mAmount').val('');
		var points = $('#mRedeemPoints').val();
    	if ( points % 400 == 0 )  {
			var dollar = points/20;
			var subtotal = $('#whteSub').val();
			subtotal -= dollar;
			$('#mAmount').val(subtotal);
		}
    });
// ---------------------------------------- //