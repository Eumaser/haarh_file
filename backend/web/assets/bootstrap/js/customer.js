$('#chkAll').click(function(){
	alert(1);
	// $('.chkUser').prop('checked',true);
});

//invoice view

        $(document).on('click', '.print-invoice-nopay', function(e){
        	var redeempoints = $('#redeempoints-before-payment').val();
        	if (redeempoints > 0) {
	        	e.preventDefault();
	            var url = $(this).attr('href');

	            location.href = url + "&points=" + redeempoints;
        	}

        });

        $('#redeem-points-checkbox-view').click(function(){
		    if ($('#redeem-points-checkbox-view').prop('checked')) {
		        $('#redeempoints-before-payment').slideDown();
		    } else {
		        $('#redeempoints-before-payment').slideUp();
		    }
		});
// end invoice view

$('#passwordContainer').hide();

$('.showPassword').click(function(){

	if( $(this).prop('checked') == true ) {
        $('#passwordContainer').show('fast');

    }else{
        $('#passwordContainer').hide('fast');

    }

});

function blockCustomer()
{
	return confirm('Are you sure you want to block this customer?');
}

function unblockCustomer()
{
	return confirm('Are you sure you want to remove for the block this customer?');
}

// =============== CREATE CUSTOMER =============== //

$('#companyInformation').hide();
$('#customerInformation').hide();

$('#forType').change(function(){
	var type = $(this).val();

	if( type == 1 ){

		$('#companyInformation').show('fast');
		$('#customerInformation').hide('fast');

	}else if( type == 2 ){

		$('#customerInformation').show('fast');
		$('#companyInformation').hide('fast');

	}else{

		$('#companyInformation').hide('fast');
		$('#customerInformation').hide('fast');
	}

});

$('#btnAddCar').click(function(){

	var car_plate = $('#carPlate').val();
	var car_model = $('#carModel').val();
	var car_make = $('#carMake').val();
	var chasis = $('#chasis').val();
	var engine_no = $('#engineNo').val();
	var year_mfg = $('#yearMfg').val();
	var reward_points = $('#rewardPoints').val();
	var join_date = $('#joinDate').val();
	var expire_date = $('#expirationDate').val();
	var member =  $('#isMember').val();

	if( car_plate == '' || car_model == '' || car_make == '' || chasis == '' || engine_no == '' || year_mfg == '' ){
		if(!Number.isInteger(reward_points)){
			alert('Reward points must be an integer and please key all car informations first.');
			return false;
		} else {
			alert('Please key all car informations first.');
			return false;
		}
	}else{

		if(reward_points == ''){
			reward_points = 0;
		}

		var n = $('#n').val();

		n++;

		$.post("?r=customer/insert-item-in-list",{
			car_plate : car_plate,
			car_model : car_model,
			car_make : car_make,
			chasis : chasis,
			engine_no : engine_no,
			year_mfg : year_mfg,
			reward_points : reward_points,
			join_date :join_date,
			expire_date: expire_date,
			member: member,
			n : n,

		},function(data){
			$('#insert-item-in-list').append(data).find('.datepickers').datepicker({
				autoclose : true,
		 		format: 'dd-mm-yyyy',
		 		startDate: '+1d',
			});

			$('#carPlate').val('');
			$('#carModel').val('');
			$('#carMake').val('');
			$('#chasis').val('');
			$('#engineNo').val('');
			$('#yearMfg').val('');
			$('#rewardPoints').val('');
		  $('#joinDate').val('');
			$('#expirationDate').val('');
			$('#member').val('');
			$('#n').val(n);

		});
	}

});

function editSelectedCarItem(n)
{

	$('.edit-car-button-'+n).addClass('hidden');
	$('.save-car-button-'+n).removeClass('hidden');
	$('#car-item-carplate-'+n).removeAttr('readonly');
	$('#car-item-carmodel-'+n).removeAttr('readonly');
	$('#car-item-carmake-'+n).removeAttr('readonly');
	$('#car-item-chasis-'+n).removeAttr('readonly');
	$('#car-item-engineno-'+n).removeAttr('readonly');
	$('#car-item-yearmfg-'+n).removeAttr('readonly');
	$('#car-item-rewardpoints-'+n).removeAttr('readonly');
	$('#car-item-joindate-'+n).removeAttr('readonly');
	$('#car-item-expiredate-'+n).removeAttr('readonly');
	//$('#car-item-member-'+n).removeAttr('readonly');
	//$('#car-item-member-'+n).prop("disabled", false);
	$('#car-item-joindate-'+n).attr("style", "pointer-events: auto;");
	$('#car-item-expiredate-'+n).attr("style", "pointer-events: auto;");
	//$('#car-item-member-'+n).attr("style", "pointer-events: auto;width:100%; height:30px");
	$('.member').attr("style", "pointer-events: auto;width:100%; height:30px");
}

function saveSelectedCarItem(n)
{
	$('.edit-car-button-'+n).removeClass('hidden');
	$('.save-car-button-'+n).addClass('hidden');
	$('#car-item-carplate-'+n).attr('readonly',true);
	$('#car-item-carmodel-'+n).attr('readonly',true);
	$('#car-item-carmake-'+n).attr('readonly',true);
	$('#car-item-chasis-'+n).attr('readonly',true);
	$('#car-item-engineno-'+n).attr('readonly',true);
	$('#car-item-yearmfg-'+n).attr('readonly',true);
	$('#car-item-rewardpoints-'+n).attr('readonly',true);
	$('#car-item-joindate-'+n).attr('readonly',true);
	$('#car-item-expiredate-'+n).attr('readonly',true);
	//$('#car-item-member-'+n).prop( "disabled", true );
	$('#car-item-joindate-'+n).attr("style", "pointer-events: none;");
	$('#car-item-expiredate-'+n).attr("style", "pointer-events: none;");
	$('#car-item-member-'+n).attr("style", "pointer-events: none;width:100%; height:30px");
	$('.member').attr("style", "pointer-events:none;width:100%; height:30px");
}

function removeSelectedCarItem(n)
{
	$('.car-item-'+n).remove();
}

$('#updateForType').change(function(){
	var type = $(this).val();

	if( type == 1 ){

		$('#update_companyInformation').show('fast');
		$('#update_customerInformation').hide('fast');

	}else if( type == 2 ){

		$('#update_customerInformation').show('fast');
		$('#update_companyInformation').hide('fast');

	}else{

		$('#update_companyInformation').hide('fast');
		$('#update_customerInformation').hide('fast');
	}

});

$('#isMember').change(function(){
	var isMember = $('#isMember').val();

	if(isMember == 0){

		$('#joinDate').val('');
		$('#expirationDate').val('');
		$('#memberJoinDate').val('');
		$('#memberExpiryDate').val('');
		$('#joinDate').attr('disabled', true);
		$('#expirationDate').attr('disabled', true);

	}else{

		$('#joinDate').removeAttr('disabled');
		$('#expirationDate').removeAttr('disabled');

	}

});
