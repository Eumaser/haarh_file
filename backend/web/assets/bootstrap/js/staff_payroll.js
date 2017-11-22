$('#citizenship').change(function(){

	if( $(this).val() == 2 ){
		$('#levySupplement').removeAttr('readonly');
	
	}else{
		$('#levySupplement').val('');
		$('#levySupplement').attr('readonly',true);
	}

});

function getStaffCitizenship()
{
	var staffId = $('#staffId').val();

	if(staffId == 0){
		alert('Key staff fullname first.');

		$('#employerCpf').val('');
		$('#employeeCpf').val('');
		$('#monthlyLevyCharge').val('');

		$('#employerCpf').attr('readonly',true);
		$('#employeeCpf').attr('readonly',true);
		$('#monthlyLevyCharge').attr('readonly',true);
				
		return false;

	}else{

		$.get("?r=payroll/get-staff-citizenship",{
			staffId : staffId

		},function(data){

			if(data == 1){
				$('#employerCpf').removeAttr('readonly');
				$('#employeeCpf').removeAttr('readonly');

				$('#monthlyLevyCharge').val('');
				$('#monthlyLevyCharge').attr('readonly',true);

			}else if(data == 2){
				$('#monthlyLevyCharge').removeAttr('readonly');

				$('#employerCpf').val('');
				$('#employeeCpf').val('');

				$('#employerCpf').attr('readonly',true);
				$('#employeeCpf').attr('readonly',true);

			}else{
				$('#employerCpf').val('');
				$('#employeeCpf').val('');
				$('#monthlyLevyCharge').val('');

				$('#employerCpf').attr('readonly',true);
				$('#employeeCpf').attr('readonly',true);
				$('#monthlyLevyCharge').attr('readonly',true);

			}

		});

	}

}

function getOtPay()
{	
	var otHour = $('#psOtHour').val();
	var otRatePerHour = $('#psOtRateHour').val();

	if(otHour == ''){
		otHour = 0;
	
	}else{
		otHour = otHour;

	}

	if(otRatePerHour == ''){
		otRatePerHour = 0;
	
	}else{
		otRatePerHour = otRatePerHour;

	}

	var totalOtPay = parseFloat(otHour) * parseFloat(otRatePerHour);
		$('#psOtPay').val(parseFloat(totalOtPay).toFixed(2));

}

function payslipLocalPrint() 
{ 
	$('#printLocalPayslip').css('visibility', 'hidden');
	$('#closeLocalPrint').css('visibility', 'hidden');

	window.print();  

	$('#printLocalPayslip').css('visibility', 'visible'); 
	$('#closeLocalPrint').css('visibility', 'visible');
}

function payslipForeignPrint() 
{ 
	$('#payslipForeignPrint').css('visibility', 'hidden');
	$('#closeForeignPrint').css('visibility', 'hidden');

	window.print();  

	$('#payslipForeignPrint').css('visibility', 'visible'); 
	$('#closeForeignPrint').css('visibility', 'visible');
}

$('.closeLocalPrint').click(function(){
    var domain ="http://"+document.domain;
    window.location = domain + '/system?r=payroll';
});

$('.closeForeignPrint').click(function(){
    var domain ="http://"+document.domain;
    window.location = domain + '/system?r=payroll';
});