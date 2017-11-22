	// =============== Add Branch =============== //



	$('#submitBranchForm').click(function(){
	var code = $('#branchCode').val();
	var name = $('#branchName').val();
	var address = $('#branchAddress').val();
	var contactNo = $('#branchContactNo').val();
	var fax = $('#branchFaxNo').val();
	var email = $('#branchEmail').val();
	var uen_no = $('#branchUen_no').val();
	var gst_no = $('#branchGst_no').val();
	var branchType = $('#branchType').val();

	$('form input, textarea').removeClass('inputTxtError');
	$('label.error').remove();

	if( !onlyLetterAndNumber(name) ){
		alert('Invalid branch name format.');
		name.focus();
		return false;
	}

	// if( !onlyLetterAndNumber(address) ){
		// alert('Invalid branch address format.');
		// address.focus();
		// return false;
	// }

	if( !onlyForEmail(contactNo) ){
		alert('Invalid branch contact number format.');
		contactNo.focus();
		return false;
	}

	$.post('?r=branch/new',{
		code: code,
		name: name,
		address: address,
		contactNo: contactNo,
		email: email,
		fax: fax,
		uen_no: uen_no,
		gst_no:gst_no,
		branchType: branchType,

	},function(data){
		var data = jQuery.parseJSON(data);
		if( data.status == 'Success') {

			$('form input, textarea').removeClass('inputTxtError');
		    $('label.error').remove();	
		    
		    $('#branchCode').val('');
		    $('#branchName').val('');
		    $('#branchAddress').val('');
		    $('#branchContactNo').val('');	

			alert(data.message);
			window.location = domain + '/system2/?r=branch/';

		} else {

			$('form input, textarea').removeClass('inputTxtError');
		    $('label.error').remove();

			$.each(data.message, function(field, message) {
	    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';
	            $('input[name="' + 'Branch[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);
	            $('textarea[name="' + 'Branch[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);
	        });
	      
	      	var keys = Object.keys(data.message);
	      	$('input[name="'+ 'Branch[' + keys[0] + ']' +'"]').focus();
	      	$('textarea[name="'+ 'Branch[' + keys[0] + ']' +'"]').focus();	
	      	return false;

		} 

	});

});

// =============== Edit Branch =============== //

$('#saveBranchForm').click(function(){		
	var id = $('#id').val();
	var code = $('#branchCode').val();
	var name = $('#branchName').val();
	var address = $('#branchAddress').val();
	var contactNo = $('#branchContactNo').val();
	var fax = $('#branchFaxNo').val();
	var email = $('#branchEmail').val();
	var uen_no = $('#branchUen_no').val();
	var gst_no = $('#branchGst_no').val();
	var branchType = $('#branchType').val();
	$('form input, textarea').removeClass('inputTxtError');
	$('label.error').remove();

	if( !onlyLetterAndNumber(name) ){
		alert('Invalid branch name format.');
		name.focus();
		return false;
	}

	// if( !onlyLetterAndNumber(address) ){
	// 	alert('Invalid branch address format.');
	// 	address.focus();
	// 	return false;
	// }

	if( !onlyForEmail(contactNo) ){
		alert('Invalid branch contact number format.');
		contactNo.focus();
		return false;
	}

	$.post('?r=branch/edit',{
		id : id,
		code: code,
		name: name,
		address: address,
		contactNo: contactNo,
		email: email,
		branchType: branchType,
		fax: fax,
		uen_no: uen_no,
		gst_no: gst_no,

	},function(data){
		var data = jQuery.parseJSON(data);
		if( data.status == 'Success') {

			$('form input, textarea').removeClass('inputTxtError');
		    $('label.error').remove();
		    
		    $('#branchCode').val('');
		    $('#branchName').val('');
		    $('#branchAddress').val('');
		    $('#branchContactNo').val('');	

            alert(data.message);
			window.location = domain + '/system2/?r=branch/';

		} else {

			$('form input, textarea').removeClass('inputTxtError');
		    $('label.error').remove();

			$.each(data.message, function(field, message) {
	    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';
	            $('input[name="' + 'Branch[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);
	            $('textarea[name="' + 'Branch[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);
	        });
	      
	      	var keys = Object.keys(data.message);
	      	$('input[name="'+ 'Branch[' + keys[0] + ']' +'"]').focus();	
	      	$('textarea[name="'+ 'Branch[' + keys[0] + ']' +'"]').focus();
	      	return false;

		} 

	});


});



	// =============== Add Role =============== //



	$('#submitRoleForm').click(function(){

		var name = $('#roleName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid role name format.');

			name.focus();

			return false;

		}



		$.post('?r=role/new',{

			name: name,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#roleName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=role/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Role[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Role[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Role =============== //



	$('#saveRoleForm').click(function(){

		var id = $('#id').val();

		var name = $('#roleName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid role name format.');

			name.focus();

			return false;

		}



		$.post('?r=role/edit',{

			id : id,

			name: name,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#roleName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=role/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Role[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Role[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Module =============== //



	$('#submitModuleForm').click(function(){

		var name = $('#moduleName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid module name format.');

			name.focus();

			return false;

		}



		$.post('?r=modules/new',{

			name: name,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#moduleName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=modules/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Modules[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Modules[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Module =============== //



	$('#saveModuleForm').click(function(){

		var id = $('#id').val();

		var name = $('#moduleName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid module name format.');

			name.focus();

			return false;

		}



		$.post('?r=modules/edit',{

			id : id,

			name: name,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#moduleName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=modules/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Modules[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Modules[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add User =============== //



	$('#submitUserForm').click(function(){

		var role = $('#userRole').val();

		var branch = $('#userBranch').val();

		var fullname = $('#userFullname').val();

		var email = $('#userEmail').val();

		var username = $('#userName').val();

		var password = $('#userPassword').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( role == 0 ){

			alert('Invalid user-role selected.');

			role.focus();

			return false;

		}



		if( branch == 0 ){

			alert('Invalid branch selected.');

			branch.focus();

			return false;

		}



		if( !onlyLetterAndNumber(fullname) ){

			alert('Invalid fullname format.');

			fullname.focus();

			return false;

		}



		if( !onlyForEmail(email) ){

			alert('Invalid email format.');

			email.focus();

			return false;

		}



		if( !onlyLetterAndNumber(username) ){

			alert('Invalid username format.');

			username.focus();

			return false;

		}



		if( !onlyLetterAndNumber(password) ){

			alert('Invalid password format.');

			password.focus();

			return false;

		}



		$.post('?r=user/new',{

			role: role,

			branch: branch,

			fullname: fullname,

			email: email,

			username: username,

			password: password



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#userRole').val(0).change();	

			    $('#branch').val(0).change();

			    $('#fullname').val('');	

			    $('#email').val('');	

			    $('#username').val('');	

			    $('#password').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=user/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'User[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'User[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit User =============== //



	$('#saveUserForm').click(function(){

		var id = $('#id').val();

		var role = $('#userRole').val();

		var branch = $('#userBranch').val();

		var fullname = $('#userFullname').val();

		var email = $('#userEmail').val();

		var username = $('#userName').val();

		var password = $('#userPassword').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( role == 0 ){

			alert('Invalid user-role selected.');

			role.focus();

			return false;

		}



		if( branch == 0 ){

			alert('Invalid branch selected.');

			branch.focus();

			return false;

		}



		if( !onlyLetterAndNumber(fullname) ){

			alert('Invalid fullname format.');

			fullname.focus();

			return false;

		}



		if( !onlyForEmail(email) ){

			alert('Invalid email format.');

			email.focus();

			return false;

		}



		if( !onlyLetterAndNumber(username) ){

			alert('Invalid username format.');

			username.focus();

			return false;

		}



		if( !onlyLetterAndNumber(password) ){

			alert('Invalid password format.');

			password.focus();

			return false;

		}



		$.post('?r=user/edit',{

			id : id,

			role: role,

			branch: branch,

			fullname: fullname,

			email: email,

			username: username,

			password: password



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#userRole').val(0).change();	

			    $('#branch').val(0).change();

			    $('#fullname').val('');	

			    $('#email').val('');	

			    $('#username').val('');	

			    $('#password').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=user/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'User[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'User[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Designated Postion =============== //



	$('#submitPositionForm').click(function(){

		var name = $('#dpName').val();

		var description = $('#dpDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid designated position name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid designated position description format.');

			description.focus();

			return false;

		}



		$.post('?r=designated-position/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#dpName').val('');	

			    $('#dpDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=designated-position/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'DesignatedPosition[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'DesignatedPosition[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'DesignatedPosition[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'DesignatedPosition[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Designated Position =============== //



	$('#savePositionForm').click(function(){

		var id = $('#id').val();

		var name = $('#dpName').val();

		var description = $('#dpDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid designated position name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid designated position description format.');

			description.focus();

			return false;

		}



		$.post('?r=designated-position/edit',{

			id : id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#staffgroupName').val('');	

			    $('#staffgroupDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=designated-position/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'DesignatedPosition[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'DesignatedPosition[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'DesignatedPosition[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'DesignatedPosition[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Staff Group =============== //



	$('#submitStaffGroupForm').click(function(){

		var name = $('#staffgroupName').val();

		var description = $('#staffgroupDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid staff-group name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid staff-group description format.');

			description.focus();

			return false;

		}



		$.post('?r=staff-group/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#staffgroupName').val('');	

			    $('#staffgroupDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=staff-group/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'StaffGroup[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'StaffGroup[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'StaffGroup[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'StaffGroup[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Staff Group =============== //



	$('#saveStaffGroupForm').click(function(){

		var id = $('#id').val();

		var name = $('#staffgroupName').val();

		var description = $('#staffgroupDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid staff-group name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid staff-group description format.');

			description.focus();

			return false;

		}



		$.post('?r=staff-group/edit',{

			id : id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#staffgroupName').val('');	

			    $('#staffgroupDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=staff-group/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'StaffGroup[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'StaffGroup[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'StaffGroup[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'StaffGroup[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Staff =============== //



	$('#submitStaffForm').click(function(){

		var code = $('#staffCode').val();

		var citizenship = $('#citizenship').val();

		var staff_group = $('#staffGroup').val();

		var position = $('#staffPosition').val();

		var fullname = $('#staffFullname').val();

		var address = $('#staffAddress').val();

		var nric = $('#staffNric').val();

		var birthday = $('#staffBirthday').val();

		var email = $('#staffEmail').val();

		var mobileNumber = $('#staffMobileNumber').val();

		var phoneNumber = $('#staffPhoneNumber').val();

		var preferredLanguages = $('#staffPreferredLanguage').val();

		var gender = $('#staffGender').val();

		var nationality = $('#staffNationality').val();

		var maritalStatus = $('#staffMaritalStatus').val();

		var race = $('#staffRace').val();

		var religion = $('#staffReligion').val();

		var remarks = $('#staffRemarks').val();

		var contactPerson = $('#staffContactPerson').val();

		var contact_no = $('#staffContactNo').val();

		var relationship = $('#staffRelationship').val();

		var contactAddress = $('#staffContactAddress').val();

		var worktimeStart = $('#work_time_start').val();

		var joinDate = $('#staffJoinDate').val();

		var worktimeEnd = $('#work_time_end').val();

		var rtDate = $('#staffRTDate').val();

		var rtReason = $('#staffRTReason').val();

		var rate = $('#staffRate').val();

		var basic = $('#staffBasic').val();

		var allowance = $('#staffAllowance').val();

		var nontax_allowance = $('#staffNonTaxAllowance').val();

		var levy_supplement = $('#levySupplement').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		// if( citizenship == 0 ){

		// 	alert('Invalid citizenship selected.');

		// 	citizenship.focus();

		// 	return false;

		// }



		// if( staff_group == 0 ){

		// 	alert('Invalid department selected.');

		// 	staff_group.focus();

		// 	return false;

		// }



		// if( position == 0 ){

		// 	alert('Invalid designated position selected.');

		// 	position.focus();

		// 	return false;

		// }



		// if( !onlyLetterAndNumber(fullname) ){

		// 	alert('Invalid fullname format.');

		// 	fullname.focus();

		// 	return false;

		// }



		// if( !onlyLetterAndNumber(address) ){

		// 	alert('Invalid address format.');

		// 	address.focus();

		// 	return false;

		// }



		// if( !onlyLetterAndNumber(address) ){

		// 	alert('Invalid address format.');

		// 	address.focus();

		// 	return false;

		// }



		// if( race == 0 ){

		// 	alert('Invalid race selected.');

		// 	race.focus();

		// 	return false;

		// }



		// if( gender == 0 ){

		// 	alert('Invalid gender selected.');

		// 	gender.focus();

		// 	return false;

		// }



		// if( !onlyForEmail(email) ){

		// 	alert('Invalid email format.');

		// 	email.focus();

		// 	return false;

		// }



		// if( !onlyNumber(contact_no) ){

		// 	alert('Invalid contact number format.');

		// 	contact_no.focus();

		// 	return false;

		// }



		$.post('?r=staff/new',{

			code: code,

			citizenship: citizenship,

			staff_group: staff_group,

			position: position,

			fullname: fullname,

			address: address,

			nric: nric,

			birthday : birthday,

			email: email,

			mobileNumber : mobileNumber,

			phoneNumber : phoneNumber,

			preferredLanguages : preferredLanguages,

			gender: gender,

			nationality : nationality,

			maritalStatus : maritalStatus,

			race: race,

			religion : religion,

			remarks : remarks,

			contactPerson : contactPerson,

			contact_no : contact_no,

			relationship : relationship,

			contactAddress : contactAddress,

			worktimeStart : worktimeStart,

			joinDate : joinDate,

			worktimeEnd : worktimeEnd,

			rtDate : rtDate,

			rtReason : rtReason,

			rate: rate,

			basic: basic,

			allowance: allowance,

			nontax_allowance: nontax_allowance,

			levy_supplement: levy_supplement



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#staffCode').val('');

				$('#citizenship').val(0).change();

				$('#staffGroup').val(0).change();

				$('#staffPosition').val('');

				$('#staffFullname').val('');

				$('#staffAddress').val('');

				$('#staffNric').val('');

				$('#staffBirthday').val('');

				$('#staffEmail').val('');

				$('#staffMobileNumber').val('');

				$('#staffPhoneNumber').val('');

				$('#staffPreferredLanguage').val(0).change();

				$('#staffGender').val(0).change();

				$('#staffNationality').val(0).change();

				$('#staffMaritalStatus').val(0).change();

				$('#staffRace').val(0).change();

				$('#staffReligion').val(0).change();

				$('#staffRemarks').val('');

				$('#staffContactPerson').val('');

				$('#staffContactNo').val('');

				$('#staffRelationship').val('');

				$('#staffContactAddress').val('');

				$('#work_time_start').val('');

				$('#staffJoinDate').val('');

				$('#work_time_end').val('');

				$('#staffRTDate').val('');

				$('#staffRTReason').val('');

				$('#staffRate').val('');

				$('#staffBasic').val('');

				$('#staffAllowance').val('');

				$('#staffNonTaxAllowance').val('');

				$('#levySupplement').val('');



				alert(data.message);

				window.location = domain + '/arh/system?r=staff/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Staff[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Staff[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Staff[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Staff[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Staff =============== //



	$('#saveStaffForm').click(function(){

		var id = $('#id').val();

		var code = $('#staffCode').val();

		var staff_group = $('#staffGroup').val();

		var position = $('#staffPosition').val();

		var fullname = $('#staffFullname').val();

		var address = $('#staffAddress').val();

		var citizenship = $('#citizenship').val();

		var race = $('#staffRace').val();

		var gender = $('#staffGender').val();

		var email = $('#staffEmail').val();

		var contact_no = $('#staffContactNo').val();

		var nric = $('#staffNric').val();

		var rate = $('#staffRate').val();

		var basic = $('#staffBasic').val();

		var allowance = $('#staffAllowance').val();

		var nontax_allowance = $('#staffNonTaxAllowance').val();

		var levy_supplement = $('#levySupplement').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();

		

		if( citizenship == 0 ){

			alert('Invalid citizenship selected.');

			citizenship.focus();

			return false;

		}



		if( staff_group == 0 ){

			alert('Invalid staff-group selected.');

			staff_group.focus();

			return false;

		}



		if( position == 0 ){

			alert('Invalid designated position selected.');

			position.focus();

			return false;

		}



		if( !onlyLetterAndNumber(fullname) ){

			alert('Invalid fullname format.');

			fullname.focus();

			return false;

		}



		// if( !onlyLetterAndNumber(address) ){

		// 	alert('Invalid address format.');

		// 	address.focus();

		// 	return false;

		// }



		// if( !onlyLetterAndNumber(address) ){

		// 	alert('Invalid address format.');

		// 	address.focus();

		// 	return false;

		// }



		if( race == 0 ){

			alert('Invalid race selected.');

			race.focus();

			return false;

		}



		if( gender == 0 ){

			alert('Invalid gender selected.');

			gender.focus();

			return false;

		}



		if( !onlyForEmail(email) ){

			alert('Invalid email format.');

			email.focus();

			return false;

		}



		if( !onlyNumber(contact_no) ){

			alert('Invalid contact number format.');

			contact_no.focus();

			return false;

		}



		$.post('?r=staff/edit',{

			id: id,

			code: code,

			staff_group: staff_group,

			position: position,

			fullname: fullname,

			address: address,

			citizenship: citizenship,

			race: race,

			gender: gender,

			email: email,

			contact_no: contact_no,

			nric: nric,

			rate: rate,

			basic: basic,

			allowance: allowance,

			nontax_allowance: nontax_allowance,

			levy_supplement: levy_supplement



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#staffCode').val('');

				$('#staffGroup').val(0).change();

				$('#staffPosition').val(0).change();

				$('#staffFullname').val('');

				$('#staffAddress').val('');

				$('#citizenship').val(0).change();

				$('#staffRace').val(0).change();

				$('#staffGender').val(0).change();

				$('#staffEmail').val('');

				$('#staffContactNo').val('');

				$('#staffNric').val('');

				$('#staffRate').val('');

				$('#staffBasic').val('');

				$('#staffAllowance').val('');

				$('#staffNonTaxAllowance').val('');

				$('#levySupplement').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=staff/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Staff[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Staff[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Staff[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Staff[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Add Additional Type =============== //



	$('#submitATForm').click(function(){

		var name = $('#atName').val();

		var description = $('#atDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid additional type name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid additional type description format.');

			description.focus();

			return false;

		}



		$.post('?r=additional-type/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#atName').val('');	

			    $('#atDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=additional-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'AdditionalType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'AdditionalType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'AdditionalType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'AdditionalType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Additional Type =============== //



	$('#saveATForm').click(function(){

		var id = $('#id').val();

		var name = $('#atName').val();

		var description = $('#atDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid additional type name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid additional type description format.');

			description.focus();

			return false;

		}



		$.post('?r=additional-type/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#atName').val('');	

			    $('#atDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=additional-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'AdditionalType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'AdditionalType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'AdditionalType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'AdditionalType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Claims Type =============== //



	$('#submitCTForm').click(function(){

		var name = $('#ctName').val();

		var amount = $('#ctAmount').val();

		var description = $('#ctDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid claims type name format.');

			name.focus();

			return false;

		}



		if( !onlyNumber(amount) ){

			alert('Invalid claims type limit format.');

			amount.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid claims type description format.');

			description.focus();

			return false;

		}



		$.post('?r=claims-type/new',{

			name: name,

			amount : amount,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ctName').val('');

			    $('#ctAmount').val('');	

			    $('#ctDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=claims-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'ClaimsType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'ClaimsType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'ClaimsType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'ClaimsType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Claims Type =============== //



	$('#saveCTForm').click(function(){

		var id = $('#id').val();

		var name = $('#ctName').val();

		var amount = $('#ctAmount').val();

		var description = $('#ctDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid claims type name format.');

			name.focus();

			return false;

		}



		if( !onlyNumber(amount) ){

			alert('Invalid claims type limit format.');

			amount.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid claims type description format.');

			description.focus();

			return false;

		}



		$.post('?r=claims-type/edit',{

			id: id,

			name: name,

			amount : amount,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ctName').val('');

			    $('#ctAmount').val('');	

			    $('#ctDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=claims-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'ClaimsType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'ClaimsType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'ClaimsType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'ClaimsType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Cpf =============== //



	$('#submitCPFForm').click(function(){

		var fromAge = $('#cpfAgeFrom').val();

		var toAge = $('#cpfAgeTo').val();

		var employeeCpf = $('#cpfEmployee').val();

		var employerCpf = $('#cpfEmployer').val();

		var description = $('#cpfDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyNumber(fromAge) ){

			alert('Invalid cpf age-from format.');

			fromAge.focus();

			return false;

		}



		if( !onlyNumber(toAge) ){

			alert('Invalid cpf age-to format.');

			toAge.focus();

			return false;

		}



		if( !onlyNumber(employeeCpf) ){

			alert('Invalid cpf employee format.');

			employeeCpf.focus();

			return false;

		}



		if( !onlyNumber(employerCpf) ){

			alert('Invalid cpf employer format.');

			employerCpf.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid claims type description format.');

			description.focus();

			return false;

		}



		$.post('?r=cpf/new',{

			fromAge : fromAge,

			toAge : toAge,

			employeeCpf : employeeCpf,

			employerCpf : employerCpf,

			description : description,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#cpfAgeFrom').val();

				$('#cpfAgeTo').val();

				$('#cpfEmployee').val();

				$('#cpfEmployer').val();

				$('#cpfDescription').val();



				alert(data.message);

				window.location = domain + '/arh/system?r=cpf/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Cpf[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Cpf[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Cpf[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Cpf[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Cpf =============== //



	$('#saveCPFForm').click(function(){

		var id = $('#id').val();

		var fromAge = $('#cpfAgeFrom').val();

		var toAge = $('#cpfAgeTo').val();

		var employeeCpf = $('#cpfEmployee').val();

		var employerCpf = $('#cpfEmployer').val();

		var description = $('#cpfDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyNumber(fromAge) ){

			alert('Invalid cpf age-from format.');

			fromAge.focus();

			return false;

		}



		if( !onlyNumber(toAge) ){

			alert('Invalid cpf age-to format.');

			toAge.focus();

			return false;

		}



		if( !onlyNumber(employeeCpf) ){

			alert('Invalid cpf employee format.');

			employeeCpf.focus();

			return false;

		}



		if( !onlyNumber(employerCpf) ){

			alert('Invalid cpf employer format.');

			employerCpf.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid claims type description format.');

			description.focus();

			return false;

		}



		$.post('?r=cpf/edit',{

			id: id,

			fromAge : fromAge,

			toAge : toAge,

			employeeCpf : employeeCpf,

			employerCpf : employerCpf,

			description : description,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#cpfAgeFrom').val();

				$('#cpfAgeTo').val();

				$('#cpfEmployee').val();

				$('#cpfEmployer').val();

				$('#cpfDescription').val();



				alert(data.message);

				window.location = domain + '/arh/system?r=cpf/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Cpf[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Cpf[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Cpf[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Cpf[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Expenses =============== //



	$('#submitEXPForm').click(function(){

		var name = $('#expName').val();

		var description = $('#expDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid expenses name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid expenses description format.');

			description.focus();

			return false;

		}



		$.post('?r=expenses/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#atName').val('');	

			    $('#atDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=expenses/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Expenses[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Expenses[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Expenses[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Expenses[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Expenses =============== //



	$('#saveEXPForm').click(function(){

		var id = $('#id').val();

		var name = $('#expName').val();

		var description = $('#expDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid expenses name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid expenses description format.');

			description.focus();

			return false;

		}



		$.post('?r=expenses/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#expName').val('');	

			    $('#expDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=expenses/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Expenses[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Expenses[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Expenses[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Expenses[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Leave Type =============== //



	$('#submitLTForm').click(function(){

		var name = $('#ltName').val();

		var description = $('#ltDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid expenses name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid expenses description format.');

			description.focus();

			return false;

		}



		$.post('?r=leave-type/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ltName').val('');	

			    $('#ltDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=leave-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'LeaveType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'LeaveType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'LeaveType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'LeaveType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Leave Type =============== //



	$('#saveLTForm').click(function(){

		var id = $('#id').val();

		var name = $('#ltName').val();

		var description = $('#ltDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid expenses name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid expenses description format.');

			description.focus();

			return false;

		}



		$.post('?r=leave-type/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ltName').val('');	

			    $('#ltDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=leave-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'LeaveType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'LeaveType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'LeaveType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'LeaveType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Payroll =============== //



	$('#submitPayrollForm').click(function(){

		var date_issue = $('#payslipDate').val();

		var cutoff = $('#payslipCutoffDate').val();

		var staff_name = $('#staffId').val();

		var ot_hour = $('#psOtHour').val();

		var ot_ratehour = $('#psOtRateHour').val();

		var ot_pay = $('#psOtPay').val();

		var employer_cpf = $('#employerCpf').val();

		var employee_cpf = $('#employeeCpf').val();

		var cash_advance = $('#psCashAdvance').val();

		var other_deduction = $('#psOtherDeduction').val();

		var monthly_levycharge = $('#monthlyLevyCharge').val();

		var prepared_by = $('#psPreparedBy').val();

		var approved_by = $('#psApprovedBy').val();

		var notes = $('#psNotes').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( staff_name == 0 ){

			alert('Invalid staff fullname selected.');

			staff_name.focus();

			return false;

		}



		$.post('?r=payroll/new',{

			date_issue: date_issue,

			cutoff: cutoff,

			staff_name: staff_name,

			ot_hour: ot_hour,

			ot_ratehour: ot_ratehour,

			ot_pay: ot_pay,

			employer_cpf: employer_cpf,

			employee_cpf: employee_cpf,

			cash_advance: cash_advance,

			other_deduction: other_deduction,

			monthly_levycharge: monthly_levycharge,

			prepared_by: prepared_by,

			approved_by: approved_by,

			notes: notes,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#payslipDate').val('');

				$('#payslipCutoffDate').val('');

				$('#psOtHour').val('');

				$('#psOtRateHour').val('');

				$('#psOtPay').val('');

				$('#employerCpf').val('');

				$('#employeeCpf').val('');

				$('#psCashAdvance').val('');

				$('#psOtherDeduction').val('');

				$('#monthlyLevyCharge').val('');

				$('#psPreparedBy').val('');

				$('#psApprovedBy').val('');

				$('#psNotes').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=payroll/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Payroll[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Payroll[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Payroll[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Payroll[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Payroll =============== //



	$('#savePayrollForm').click(function(){

		var id = $('#id').val();

		var date_issue = $('#payslipDate').val();

		var cutoff = $('#payslipCutoffDate').val();

		var staff_name = $('#staffId').val();

		var ot_hour = $('#psOtHour').val();

		var ot_ratehour = $('#psOtRateHour').val();

		var ot_pay = $('#psOtPay').val();

		var employer_cpf = $('#employerCpf').val();

		var employee_cpf = $('#employeeCpf').val();

		var cash_advance = $('#psCashAdvance').val();

		var other_deduction = $('#psOtherDeduction').val();

		var monthly_levycharge = $('#monthlyLevyCharge').val();

		var prepared_by = $('#psPreparedBy').val();

		var approved_by = $('#psApprovedBy').val();

		var notes = $('#psNotes').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( staff_name == 0 ){

			alert('Invalid staff fullname selected.');

			staff_name.focus();

			return false;

		}



		$.post('?r=payroll/edit',{

			id: id,

			date_issue: date_issue,

			cutoff: cutoff,

			staff_name: staff_name,

			ot_hour: ot_hour,

			ot_ratehour: ot_ratehour,

			ot_pay: ot_pay,

			employer_cpf: employer_cpf,

			employee_cpf: employee_cpf,

			cash_advance: cash_advance,

			other_deduction: other_deduction,

			monthly_levycharge: monthly_levycharge,

			prepared_by: prepared_by,

			approved_by: approved_by,

			notes: notes,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#payslipDate').val('');

				$('#payslipCutoffDate').val('');

				$('#psOtHour').val('');

				$('#psOtRateHour').val('');

				$('#psOtPay').val('');

				$('#employerCpf').val('');

				$('#employeeCpf').val('');

				$('#psCashAdvance').val('');

				$('#psOtherDeduction').val('');

				$('#monthlyLevyCharge').val('');

				$('#psPreparedBy').val('');

				$('#psApprovedBy').val('');

				$('#psNotes').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=payroll/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Payroll[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Payroll[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Payroll[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Payroll[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Add Customer =============== //



	$('#submitCustomerForm').click(function(){



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		var type = $('#forType').val();

		

		if( type == 0 ){

			alert('Invalid customer type selected.');

			type.focus();

			return false;

		

		}else if( type == 1 ){//edr type company



			$('#companyInformation').show('fast');



			var type = $('#forType').val();



			var companyName = $('#companyName').val();

			var address = $('#companyAddress').val();

			var uenno = $('#companyUenNo').val();

			var contactPerson = $('#companyContactPerson').val();

			var email = $('#companyEmail').val();

			var phoneNumber = $('#companyPhoneNumber').val();

			var officeNumber = $('#companyOfficeNumber').val();

			var faxNumber = $('#companyFaxNumber').val();

			var vehicleNumber = $('input.vehicleNumber').serializeArray();

			var carModel = $('input.carModel').serializeArray();

			var carMake = $('input.carMake').serializeArray();

			var chasis = $('input.chasis').serializeArray();

			var engineNo = $('input.engineNo').serializeArray();

			var yearMfg = $('input.yearMfg').serializeArray();

			var rewardPoints = $('input.rewardPoints').serializeArray();


			var isMember = $('select.member').serializeArray();

			var memberJoinDate = $('input.joindate').serializeArray();

			var memberExpiryDate = $('input.expiredate').serializeArray();



			//var isMember = $('#isMember').val();

		//	var memberJoinDate = $('#memberJoinDate').val();

			//var memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(companyName == '' || address == '' || uenno == ''){

				alert('Please key company information first.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$.post('?r=customer/new-company',{

				type: type,

				companyName: companyName,

				address: address,

				uenno: uenno,

				contactPerson: contactPerson,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,

				faxNumber: faxNumber,



			},function(data){

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					alert(data.message);

					window.location = domain + '/arh/system?r=customer/';



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});



		}else{//edr customer type



			$('#customerInformation').show('fast');



			var type = $('#forType').val();



			var customerName = $('#customerName').val();

			var address = $('#customerAddress').val();

			var race = $('#customerRace').val();

			var nric = $('#customerNric').val();

			var email = $('#customerEmail').val();

			var phoneNumber = $('#customerPhoneNumber').val();

			var officeNumber = $('#customerOficeNumber').val();

			var customerFaxNumber = $('#companyFaxNumberCustomer').val();



			var vehicleNumber = $('input.vehicleNumber').serializeArray();

			var carModel = $('input.carModel').serializeArray();

			var carMake = $('input.carMake').serializeArray();

			var chasis = $('input.chasis').serializeArray();

			var engineNo = $('input.engineNo').serializeArray();

			var yearMfg = $('input.yearMfg').serializeArray();

			var rewardPoints = $('input.rewardPoints').serializeArray();

			//var isMember = $('input.member').serializeArray();

			var isMember = $('select.member').serializeArray();
			//console.log(isMember);
			//console.log(isMember);

			var memberJoinDate = $('input.joindate').serializeArray();

			var memberExpiryDate = $('input.expiredate').serializeArray();


		//	var isMember = $('#isMember').val();

		//	var memberJoinDate = $('#memberJoinDate').val();

		//	edrvar memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(customerName == '' || address == '' || nric == ''){

				alert('Please key customer personal information first.');

				return false;

			}



			if(race == 0){

				alert('Invalid race selected.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$.post('?r=customer/new-customer',{

				type: type,

				customerName: customerName,

				address: address,

				race: race,

				nric: nric,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,

				customerFaxNumber: customerFaxNumber,


			},function(data){

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					alert(data.message);

					window.location = domain + '/system?r=customer/';



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});

		}



	});



	// =============== Edit Customer =============== //
//edr update part


	$('#saveCustomerForm').click(function(){
			//$(".member").prop( "disabled", false );
		var type = $('#updateForType').val();

		if( type == 0 ){

			alert('Invalid customer type selected.');

			type.focus();

			return false;

		

		}else if( type == 1 ){//type company



			$('#update_companyInformation').show('fast');



			var id = $('#id').val();	

			var companyName = $('#companyName').val();

			var address = $('#companyAddress').val();

			var uenno = $('#companyUenNo').val();

			var contactPerson = $('#companyContactPerson').val();

			var email = $('#companyEmail').val();

			var phoneNumber = $('#companyPhoneNumber').val();

			var officeNumber = $('#companyOfficeNumber').val();

			var companyFaxNumber = $('#companyFaxNumber').val();



			var vehicleNumber = $('input:text.vehicleNumber').serializeArray();

			var carModel = $('input:text.carModel').serializeArray();

			var carMake = $('input:text.carMake').serializeArray();

			var chasis = $('input:text.chasis').serializeArray();

			var engineNo = $('input:text.engineNo').serializeArray();

			var yearMfg = $('input:text.yearMfg').serializeArray();

			var rewardPoints = $('input:text.rewardPoints').serializeArray();

			var carId = $('input:hidden.carId').serializeArray();

			var carInfoId = $('#carInfoId').serializeArray();

      //      console.log(carInfoId);

			var isMember = $('select.member').serializeArray();

			var memberJoinDate = $('input:text.joindate').serializeArray();

			var memberExpiryDate = $('input:text.expiredate').serializeArray();

			console.log(memberExpiryDate);
	//		var isMember = $('#isMember').val();

		//	var memberJoinDate = $('#memberJoinDate').val();

			//var memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(companyName == '' || address == '' || uenno == ''){

				alert('Please key company information first.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$('form input, textarea').removeClass('inputTxtError');

			$('label.error').remove();

			

			$.post('?r=customer/edit-company',{

				id: id,

				carInfoId: carInfoId,

				type: type,

				companyName: companyName,

				address: address,

				uenno: uenno,

				contactPerson: contactPerson,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				companyFaxNumber: companyFaxNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				carId: carId,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,



			},function(data){

				console.log(data);

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



				    alert(data.message);

					window.location = domain + '/system?r=customer/';



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});



		}else{//edr edit person



			$('#update_customerInformation').show('fast');

			

			var id = $('#id').val();



			var customerName = $('#customerName').val();

			var address = $('#customerAddress').val();

			var race = $('#customerRace').val();

			var nric = $('#customerNric').val();

			var email = $('#customerEmail').val();

			var phoneNumber = $('#customerPhoneNumber').val();

			var officeNumber = $('#customerOficeNumber').val();

			var customerFaxNumber = $('#customerFaxNumber').val();



			var vehicleNumber = $('input:text.vehicleNumber').serializeArray();

			var carModel = $('input:text.carModel').serializeArray();

			var carMake = $('input:text.carMake').serializeArray();

			var chasis = $('input:text.chasis').serializeArray();

			var engineNo = $('input:text.engineNo').serializeArray();

			var yearMfg = $('input:text.yearMfg').serializeArray();

			var rewardPoints = $('input:text.rewardPoints').serializeArray();

			var carInfoId = $('#carInfoId').serializeArray();

			var isMember = $('select.member').serializeArray();

			var memberJoinDate = $('input:text.joindate').serializeArray();

			var memberExpiryDate = $('input:text.expiredate').serializeArray();

	//		var isMember = $('#isMember').val();

//			var memberJoinDate = $('#memberJoinDate').val();

	//		var memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(customerName == '' || address == '' || nric == ''){

				alert('Please key customer personal information first.');

				return false;

			}



			if(race == 0){

				alert('Invalid race selected.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$('form input, textarea').removeClass('inputTxtError');

			$('label.error').remove();



			$.post('?r=customer/edit-customer',{

				id: id,

				carInfoId: carInfoId,

				type: type,

				customerName: customerName,

				address: address,

				race: race,

				nric: nric,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				customerFaxNumber: customerFaxNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,



			},function(data){

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					alert(data.message);

					window.location = domain + '/system?r=customer/';



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});

		}



	});



	// =============== Add Category =============== //



	$('#submitCategoryForm').click(function(){

		var categoryName = $('#categoryName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(categoryName) ){

			alert('Invalid category name format.');

			categoryName.focus();

			return false;

		}



		$.post('?r=category/new',{

			categoryName: categoryName,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#categoryName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=category/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Category[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Category[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Role =============== //



	$('#saveCategoryForm').click(function(){

		var id = $('#id').val();

		var categoryName = $('#categoryName').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(categoryName) ){

			alert('Invalid category name format.');

			categoryName.focus();

			return false;

		}



		$.post('?r=category/edit',{

			id : id,

			categoryName: categoryName,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#categoryName').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=category/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Category[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Category[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Supplier =============== //



	$('#submitSupplierForm').click(function(){

		var supplierCode = $('#supplierCode').val();

		var supplierName = $('#supplierName').val();

		var supplierAddress = $('#supplierAddress').val();

		var supplierContactNo = $('#supplierContactNo').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(supplierName) ){

			alert('Invalid supplier name format.');

			supplierName.focus();

			return false;

		}



		// if( !onlyLetterAndNumber(supplierAddress) ){

		// 	alert('Invalid supplier address format.');

		// 	supplierAddress.focus();

		// 	return false;

		// }



		if( !onlyNumber(supplierContactNo) ){

			alert('Invalid supplier contact number format.');

			supplierContactNo.focus();

			return false;

		}



		$.post('?r=supplier/new',{

			supplierCode: supplierCode,

			supplierName: supplierName,

			supplierAddress: supplierAddress,

			supplierContactNo: supplierContactNo



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#supplierCode').val('');

				$('#supplierName').val('');

				$('#supplierAddress').val('');

				$('#supplierContactNo').val('');



				alert(data.message);

				window.location = domain + '/arh/system?r=supplier/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Supplier[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Supplier[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Supplier[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Supplier[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Supplier =============== //



	$('#saveSupplierForm').click(function(){

		var id = $('#id').val();

		var supplierCode = $('#supplierCode').val();

		var supplierName = $('#supplierName').val();

		var supplierAddress = $('#supplierAddress').val();

		var supplierContactNo = $('#supplierContactNo').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(supplierName) ){

			alert('Invalid supplier name format.');

			supplierName.focus();

			return false;

		}



		// if( !onlyLetterAndNumber(supplierAddress) ){

		// 	alert('Invalid supplier address format.');

		// 	supplierAddress.focus();

		// 	return false;

		// }



		if( !onlyNumber(supplierContactNo) ){

			alert('Invalid supplier contact number format.');

			supplierContactNo.focus();

			return false;

		}



		$.post('?r=supplier/edit',{

			id: id,

			supplierCode: supplierCode,

			supplierName: supplierName,

			supplierAddress: supplierAddress,

			supplierContactNo: supplierContactNo



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#supplierCode').val('');

				$('#supplierName').val('');

				$('#supplierAddress').val('');

				$('#supplierContactNo').val('');



				alert(data.message);

				window.location = domain + '/arh/system?r=supplier/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Supplier[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Supplier[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Supplier[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Supplier[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Quotation =============== //



	$('#submitQuotationForm').click(function(){

		var quotationCode = $('#quotationCode').val();

		var quoBranch = $('#quoBranch').val();

		var salesPerson = $('#salesPerson').val();

		var mileage = $('#mileage').val();

		var remarks = $('#message').val();

		var dateIssue = $('input:text.dateIssue').val();

		var comein = $('#datetimepicker_comein').val();

		var comeout = $('#datetimepicker_comeout').val();

		var customerId = $('#getCustomerInfo').val();

		

		var discountAmount = $('#discountAmount').val();	

		var discountRemarks = $('#discountRemarks').val();



		var servicePartId = $('input:hidden.servicePartId').serializeArray();

		var itemQty = $('input:hidden.itemQty').serializeArray();

		var itemPriceValue = $('input:hidden.itemPriceValue').serializeArray();

		var itemSubTotal = $('input:hidden.itemSubTotal').serializeArray();

		var task = $('input.task').serializeArray();



		var grandTotal = $('#grandTotal').val();

		var gstResult = $('#gstResult').val();

		var netTotal = $('#netTotal').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();	



		if(quoBranch == 0){

			alert('Invalid branch selected.');

			return false;

		}



		if(salesPerson == 0){

			alert('Invalid sales person selected.');

			return false;

		}



		if(comein == '' || comeout == ''){

			alert('Please choose customer date-time of come-in and come-out.');

			return false;

		}



		if(customerId == 0){

			alert('Invalid customer selected.');

			return false;

		}



		if( !onlyLetterAndNumber(remarks) ){

			alert('Invalid remarks format.');

			remarks.focus();

			return false;

		}



		if(itemQty.length == 0){

			alert('Please key products or services first.');

			return false;

		}



		$.post('?r=quotation/create',{

			quotationCode: quotationCode,

			quoBranch: quoBranch,

			salesPerson: salesPerson,

			mileage: mileage,

			remarks: remarks,

			dateIssue: dateIssue,

			comein: comein,

			comeout: comeout,

			customerId: customerId,

			discountAmount: discountAmount,

			discountRemarks: discountRemarks,

			grandTotal: grandTotal,

			gstResult: gstResult,

			netTotal: netTotal,

			servicePartId: servicePartId,

			itemQty: itemQty,

			itemPriceValue: itemPriceValue,

			itemSubTotal: itemSubTotal,

			task: task,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=quotation/view&id='+data.id;



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Quotation =============== //



	$('#saveQuotationForm').click(function(){

		var id = $('#id').val();

		var quotationCode = $('#quotationCode').val();

		var quoBranch = $('#quoBranch').val();

		var salesPerson = $('#salesPerson').val();

		var mileage = $('#mileage').val();

		var remarks = $('#message').val();

		var dateIssue = $('input:text.dateIssue').val();

		var comein = $('#update_datetimepicker_comein').val();

		var comeout = $('#update_datetimepicker_comeout').val();

		var customerId = $('#getUpdateCustomerInfo').val();

		

		var discountAmount = $('#discountAmount').val();	

		var discountRemarks = $('#discountUpdateRemarks').val();



		var servicePartId = $('input:hidden.servicePartId').serializeArray();

		var itemQty = $('input:hidden.itemQty').serializeArray();

		var itemPriceValue = $('input:hidden.itemPriceValue').serializeArray();

		var itemSubTotal = $('input:hidden.itemSubTotal').serializeArray();

		var task = $('input.task').serializeArray();



		var grandTotal = $('#grandTotal').val();

		var gstResult = $('#gstResult').val();

		var netTotal = $('#netTotal').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();	



		if(quoBranch == 0){

			alert('Invalid branch selected.');

			return false;

		}



		if(salesPerson == 0){

			alert('Invalid sales person selected.');

			return false;

		}



		if(comein == '' || comeout == ''){

			alert('Please choose customer date-time of come-in and come-out.');

			return false;

		}



		if(customerId == 0){

			alert('Invalid customer selected.');

			return false;

		}



		if( !onlyLetterAndNumber(remarks) ){

			alert('Invalid remarks format.');

			remarks.focus();

			return false;

		}



		if(itemQty.length == 0){

			alert('Please key products or services first.');

			return false;

		}



		$.post('?r=quotation/update/&id='+id,{

			id: id,

			quotationCode: quotationCode,

			quoBranch: quoBranch,

			salesPerson: salesPerson,

			mileage: mileage,

			remarks: remarks,

			dateIssue: dateIssue,

			comein: comein,

			comeout: comeout,

			customerId: customerId,

			discountAmount: discountAmount,

			discountRemarks: discountRemarks,

			grandTotal: grandTotal,

			gstResult: gstResult,

			netTotal: netTotal,

			servicePartId: servicePartId,

			itemQty: itemQty,

			itemPriceValue: itemPriceValue,

			itemSubTotal: itemSubTotal,

			task: task,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=quotation/view&id='+data.id;



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Add Customer By Quotation =============== //



	$('#submitCustomerByQuoteForm').click(function(){

		var type = $('#forType').val();

		

		if( type == 0 ){

			alert('Invalid customer type selected.');

			type.focus();

			return false;

		

		}else if( type == 1 ){



			$('#companyInformation').show('fast');



			var companyName = $('#companyName').val();

			var address = $('#companyAddress').val();

			var uenno = $('#companyUenNo').val();

			var contactPerson = $('#companyContactPerson').val();

			var email = $('#companyEmail').val();

			var phoneNumber = $('#companyPhoneNumber').val();

			var officeNumber = $('#companyOfficeNumber').val();



			var vehicleNumber = $('input:text.vehicleNumber').serializeArray();

			var carModel = $('input:text.carModel').serializeArray();

			var carMake = $('input:text.carMake').serializeArray();

			var chasis = $('input:text.chasis').serializeArray();

			var engineNo = $('input:text.engineNo').serializeArray();

			var yearMfg = $('input:text.yearMfg').serializeArray();

			var rewardPoints = $('input:text.rewardPoints').serializeArray();



			var isMember = $('#isMember').val();

			var memberJoinDate = $('#memberJoinDate').val();

			var memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(companyName == '' || address == '' || uenno == ''){

				alert('Please key company information first.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$('form input, textarea').removeClass('inputTxtError');

			$('label.error').remove();



			$.post('?r=quotation/new-company',{

				type: type,

				companyName: companyName,

				address: address,

				uenno: uenno,

				contactPerson: contactPerson,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,



			},function(data){

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					alert(data.message);

					window.location = domain + '/arh/system?r=quotation/create-quotation&id='+ data.id;



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});



		}else{



			$('#customerInformation').show('fast');



			var customerName = $('#customerName').val();

			var address = $('#customerAddress').val();

			var race = $('#customerRace').val();

			var nric = $('#customerNric').val();

			var email = $('#customerEmail').val();

			var phoneNumber = $('#customerPhoneNumber').val();

			var officeNumber = $('#customerOficeNumber').val();



			var vehicleNumber = $('input:text.vehicleNumber').serializeArray();

			var carModel = $('input:text.carModel').serializeArray();

			var carMake = $('input:text.carMake').serializeArray();

			var chasis = $('input:text.chasis').serializeArray();

			var engineNo = $('input:text.engineNo').serializeArray();

			var yearMfg = $('input:text.yearMfg').serializeArray();

			var rewardPoints = $('input:text.rewardPoints').serializeArray();



			var isMember = $('#isMember').val();

			var memberJoinDate = $('#memberJoinDate').val();

			var memberExpiryDate = $('#memberExpiryDate').val();

			var message = $('#message').val();

			var password = $('#password').val();



			if(customerName == '' || address == '' || nric == ''){

				alert('Please key customer personal information first.');

				return false;

			}



			if(race == 0){

				alert('Invalid race selected.');

				return false;

			}



			if(vehicleNumber.length == 0){

				alert('Please key car information first.');

				return false;

			}



			if(isMember == 3){

				alert('Please key customer member type first.');

				return false;

			}



			$('form input, textarea').removeClass('inputTxtError');

			$('label.error').remove();



			$.post('?r=quotation/new-customer',{

				type: type,

				customerName: customerName,

				address: address,

				race: race,

				nric: nric,

				email: email,

				phoneNumber: phoneNumber,

				officeNumber: officeNumber,

				vehicleNumber: vehicleNumber,

				carModel: carModel,

				carMake: carMake,

				chasis: chasis,

				engineNo: engineNo,

				yearMfg: yearMfg,

				rewardPoints: rewardPoints,

				isMember: isMember,

				memberJoinDate: memberJoinDate,

				memberExpiryDate: memberExpiryDate,

				message: message,

				password: password,



			},function(data){

				var data = jQuery.parseJSON(data);

				if( data.status == 'Success') {



					$('form input textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					alert(data.message);

					window.location = domain + '/arh/system?r=create-quotation/';



				} else {



					$('form input, textarea').removeClass('inputTxtError');

				    $('label.error').remove();



					$.each(data.message, function(field, message) {

			    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

			            $('input[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			            $('textarea[name="' + 'Customer[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

			        });

			      

			      	var keys = Object.keys(data.message);

			      	$('input[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	$('textarea[name="'+ 'Customer[' + keys[0] + ']' +'"]').focus();	

			      	return false;



				} 



			});

		}



	});



	// =============== Add Quotation From Customer =============== //



	$('#submitQuoteByCustomerForm').click(function(){

		var id = $('#id').val();

		var quotationCode = $('#quotationCode').val();

		var quoBranch = $('#quoBranch').val();

		var salesPerson = $('#salesPerson').val();

		var mileage = $('#mileage').val();

		var remarks = $('#message').val();

		var dateIssue = $('input:text.dateIssue').val();

		var comein = $('#datetimepicker_comein').val();

		var comeout = $('#datetimepicker_comeout').val();

		var customerId = $('#getCustomerInfo').val();

		

		var discountAmount = $('#discountAmount').val();	

		var discountRemarks = $('#discountRemarks').val();



		var servicePartId = $('input:hidden.servicePartId').serializeArray();

		var itemQty = $('input:hidden.itemQty').serializeArray();

		var itemPriceValue = $('input:hidden.itemPriceValue').serializeArray();

		var itemSubTotal = $('input:hidden.itemSubTotal').serializeArray();

		var task = $('input.task').serializeArray();



		var grandTotal = $('#grandTotal').val();

		var gstResult = $('#gstResult').val();

		var netTotal = $('#netTotal').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();	



		if(quoBranch == 0){

			alert('Invalid branch selected.');

			return false;

		}



		if(salesPerson == 0){

			alert('Invalid sales person selected.');

			return false;

		}



		if(comein == '' || comeout == ''){

			alert('Please choose customer date-time of come-in and come-out.');

			return false;

		}



		if(customerId == 0){

			alert('Invalid customer selected.');

			return false;

		}



		if( !onlyLetterAndNumber(remarks) ){

			alert('Invalid remarks format.');

			remarks.focus();

			return false;

		}



		if(itemQty.length == 0){

			alert('Please key products or services first.');

			return false;

		}



		$.post('?r=quotation/create-quotation&id='+id,{

			quotationCode: quotationCode,

			quoBranch: quoBranch,

			salesPerson: salesPerson,

			mileage: mileage,

			remarks: remarks,

			dateIssue: dateIssue,

			comein: comein,

			comeout: comeout,

			customerId: customerId,

			discountAmount: discountAmount,

			discountRemarks: discountRemarks,

			grandTotal: grandTotal,

			gstResult: gstResult,

			netTotal: netTotal,

			servicePartId: servicePartId,

			itemQty: itemQty,

			itemPriceValue: itemPriceValue,

			itemSubTotal: itemSubTotal,

			task: task,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=quotation/view&id='+data.id;



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Quotation[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Quotation[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Add Invoice =============== //



	$('#submitInvoiceForm').click(function(){

		var invoiceCode = $('#invoiceCode').val();

		var invBranch = $('#invBranch').val();

		var salesPerson = $('#salesPerson').val();

		var mileage = $('#mileage').val();

		var remarks = $('#invMessage').val();

		var dateIssue = $('input:text.dateIssue').val();

		var comein = $('#datetimepicker_comein').val();

		var comeout = $('#datetimepicker_comeout').val();

		var customerId = $('#getInvCustomerInfo').val();

		

		var discountAmount = $('#discountInvAmount').val();	

		var discountRemarks = $('#discountInvRemarks').val();



		var servicePartId = $('input:hidden.servicePartId').serializeArray();

		var itemQty = $('input:hidden.itemQty').serializeArray();

		var itemPriceValue = $('input:hidden.itemPriceValue').serializeArray();

		var itemSubTotal = $('input:hidden.itemSubTotal').serializeArray();

		var task = $('input.task').serializeArray();



		var grandTotal = $('#grandTotal').val();

		var gstResult = $('#gstResult').val();

		var netTotal = $('#netTotal').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();	



		if(invBranch == 0){

			alert('Invalid branch selected.');

			return false;

		}



		if(salesPerson == 0){

			alert('Invalid sales person selected.');

			return false;

		}



		if(comein == '' || comeout == ''){

			alert('Please choose customer date-time of come-in and come-out.');

			return false;

		}



		if(customerId == 0){

			alert('Invalid customer selected.');

			return false;

		}



		if( !onlyLetterAndNumber(remarks) ){

			alert('Invalid remarks format.');

			remarks.focus();

			return false;

		}



		if(itemQty.length == 0){

			alert('Please key products or services first.');

			return false;

		}



		$.post('?r=invoice/create',{

			invoiceCode: invoiceCode,

			invBranch: invBranch,

			salesPerson: salesPerson,

			mileage: mileage,

			remarks: remarks,

			dateIssue: dateIssue,

			comein: comein,

			comeout: comeout,

			customerId: customerId,

			discountAmount: discountAmount,

			discountRemarks: discountRemarks,

			grandTotal: grandTotal,

			gstResult: gstResult,

			netTotal: netTotal,

			servicePartId: servicePartId,

			itemQty: itemQty,

			itemPriceValue: itemPriceValue,

			itemSubTotal: itemSubTotal,

			task: task,



		},function(data){

			console.log(data);

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=invoice/view&id='+data.id;



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Invoice[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Invoice[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Invoice[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Invoice[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Edit Invoice =============== //



	$('#saveInvoiceForm').click(function(){

		var id = $('#id').val();

		var quotationCode = $('#quotationCode').val();

		var invoiceCode = $('#invoiceCode').val();

		var invBranch = $('#invBranch').val();

		var salesPerson = $('#salesPerson').val();

		var mileage = $('#mileage').val();

		var remarks = $('#invMessage').val();

		var dateIssue = $('input:text.dateIssue').val();

		var comein = $('#update_datetimepicker_comein').val();

		var comeout = $('#update_datetimepicker_comeout').val();

		var customerId = $('#getUpdateInvCustomerInfo').val();

		

		var discountAmount = $('#discountInvAmount').val();	

		var discountRemarks = $('#discountInvRemarks').val();



		var servicePartId = $('input:hidden.servicePartId').serializeArray();

		var itemQty = $('input:hidden.itemQty').serializeArray();

		var itemPriceValue = $('input:hidden.itemPriceValue').serializeArray();

		var itemSubTotal = $('input:hidden.itemSubTotal').serializeArray();

		var task = $('input.task').serializeArray();



		var grandTotal = $('#grandTotal').val();

		var gstResult = $('#gstResult').val();

		var netTotal = $('#netTotal').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();	



		if(invBranch == 0){

			alert('Invalid branch selected.');

			return false;

		}



		if(salesPerson == 0){

			alert('Invalid sales person selected.');

			return false;

		}



		if(comein == '' || comeout == ''){

			alert('Please choose customer date-time of come-in and come-out.');

			return false;

		}



		if(customerId == 0){

			alert('Invalid customer selected.');

			return false;

		}



		if( !onlyLetterAndNumber(remarks) ){

			alert('Invalid remarks format.');

			remarks.focus();

			return false;

		}



		if(itemQty.length == 0){

			alert('Please key products or services first.');

			return false;

		}



		$.post('?r=invoice/update&id='+id, {

			id: id,

			quotationCode: quotationCode,

			invoiceCode: invoiceCode,

			invBranch: invBranch,

			salesPerson: salesPerson,

			mileage: mileage,

			remarks: remarks,

			dateIssue: dateIssue,

			comein: comein,

			comeout: comeout,

			customerId: customerId,

			discountAmount: discountAmount,

			discountRemarks: discountRemarks,

			grandTotal: grandTotal,

			gstResult: gstResult,

			netTotal: netTotal,

			servicePartId: servicePartId,

			itemQty: itemQty,

			itemPriceValue: itemPriceValue,

			itemSubTotal: itemSubTotal,

			task: task,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=invoice/view&id='+data.id;



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Invoice[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Invoice[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Invoice[' + keys[0] + ']' +'"]').focus();

		      	$('textarea[name="'+ 'Invoice[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});



	});



	// =============== Add Gst =============== //



	$('#submitGstForm').click(function(){

		var branchId = $('#branchId').val();

		var gst = $('#gst').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyNumber(gst) ){

			alert('Invalid gst format.');

			gst.focus();

			return false;

		}



		$.post('?r=gst/new',{

			branchId: branchId,

			gst: gst,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=gst/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Gst[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Gst[' + keys[0] + ']' +'"]').focus();

		      	return false;



			} 



		});



	});



	// =============== Edit Product Level =============== //



	$('#saveProductLvlForm').click(function(){

		var id = $('#id').val();

		var criticalLvl = $('#criticalLvl').val();

		var minimumLvl = $('#minimumLvl').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyNumber(minimumLvl) ){

			alert('Invalid minimum level format.');

			minimumLvl.focus();

			return false;

		}



		if( !onlyNumber(criticalLvl) ){

			alert('Invalid critical level format.');

			criticalLvl.focus();

			return false;

		}



		$.post('?r=product-level/edit',{

			id: id,

			criticalLvl: criticalLvl,

			minimumLvl: minimumLvl,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				alert(data.message);

				window.location = domain + '/arh/system?r=product-level/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'ProductLevel[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'ProductLevel[' + keys[0] + ']' +'"]').focus();

		      	return false;



			} 



		});



	});



	// =============== Add Payment Type =============== //



	$('#submitPaymentTypeForm').click(function(){

		var name = $('#ptName').val();

		var interest = $('#ptInterest').val();

		var description = $('#ptDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid payment type name format.');

			name.focus();

			return false;

		}



		if( !onlyNumber(interest) ){

			alert('Invalid payment type interest format.');

			interest.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid payment type description format.');

			description.focus();

			return false;

		}



		$.post('?r=payment-type/new',{

			name: name,

			interest: interest,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ptName').val('');	

			    $('#ptInterest').val('');	

			    $('#ptDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=payment-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'PaymentType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'PaymentType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'PaymentType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'PaymentType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Payment Type =============== //



	$('#savePaymentTypeForm').click(function(){

		var id = $('#id').val();

		var name = $('#ptName').val();

		var interest = $('#ptInterest').val();

		var description = $('#ptDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid payment type name format.');

			name.focus();

			return false;

		}



		if( !onlyNumber(interest) ){

			alert('Invalid payment type interest format.');

			interest.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid payment type description format.');

			description.focus();

			return false;

		}



		$.post('?r=payment-type/edit',{

			id: id,

			name: name,

			interest: interest,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#ptName').val('');	

			    $('#ptInterest').val('');	

			    $('#ptDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=payment-type/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'PaymentType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'PaymentType[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'PaymentType[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'PaymentType[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Terms and Conditions =============== //



	$('#submitTermsConditionForm').click(function(){

		var descriptions = $('#descriptions').val();



		$('form textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(descriptions) ){

			alert('Invalid descriptions format.');

			descriptions.focus();

			return false;

		}



		$.post('?r=terms-and-conditions/new',{

			descriptions: descriptions,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#descriptions').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=terms-and-conditions/';



			} else {



				$('form textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('textarea[name="' + 'TermsAndConditions[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('textarea[name="'+ 'TermsAndConditions[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Terms and Conditions =============== //



	$('#saveTermsConditionForm').click(function(){

		var id = $('#id').val();

		var descriptions = $('#descriptions').val();



		$('form textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(descriptions) ){

			alert('Invalid descriptions format.');

			descriptions.focus();

			return false;

		}



		$.post('?r=terms-and-conditions/edit',{

			id: id,

			descriptions: descriptions,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#descriptions').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=terms-and-conditions/';



			} else {



				$('form textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('textarea[name="' + 'TermsAndConditions[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('textarea[name="'+ 'TermsAndConditions[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Race =============== //



	$('#submitRaceForm').click(function(){

		var name = $('#raceName').val();

		var description = $('#raceDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid race name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid race description format.');

			description.focus();

			return false;

		}



		$.post('?r=race/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#raceName').val('');	

			    $('#raceDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=race/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Race[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Race[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Race[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Race[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Race =============== //



	$('#saveRaceForm').click(function(){

		var id = $('#id').val();

		var name = $('#raceName').val();

		var description = $('#raceDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid race name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid race description format.');

			description.focus();

			return false;

		}



		$.post('?r=race/edit',{

			id : id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#raceName').val('');	

			    $('#raceDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=race/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Race[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Race[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Race[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Race[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Product Email Recipient =============== //



	$('#submitProductEmailRecipient').click(function(){

		var email = $('#email').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyForEmail(email) ){

			alert('Invalid email addres format.');

			email.focus();

			return false;

		}



		$.post('?r=product-notification-recipient/new',{

			email: email,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#email').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=product-notification-recipient/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'ProductNotificationRecipient[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'ProductNotificationRecipient[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Product Email Recipient =============== //



	$('#saveProductEmailRecipient').click(function(){

		var id = $('#id').val();

		var email = $('#email').val();



		$('form input').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyForEmail(email) ){

			alert('Invalid email address format.');

			email.focus();

			return false;

		}



		$.post('?r=product-notification-recipient/edit',{

			id: id,

			email: email,



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#descriptions').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=product-notification-recipient/';



			} else {



				$('form input').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'ProductNotificationRecipient[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'ProductNotificationRecipient[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Religion =============== //



	$('#submitReligionForm').click(function(){

		var name = $('#religionName').val();

		var description = $('#religionDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid religion name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid religion description format.');

			description.focus();

			return false;

		}



		$.post('?r=religion/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#religionName').val('');	

			    $('#religionDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=religion/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Religion[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Religion[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Religion[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Religion[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Religion =============== //



	$('#saveReligionForm').click(function(){

		var id = $('#id').val();

		var name = $('#religionName').val();

		var description = $('#religionDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid religion name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid religion description format.');

			description.focus();

			return false;

		}



		$.post('?r=religion/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#religionName').val('');	

			    $('#religionDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=religion/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Religion[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Religion[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Religion[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Religion[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Marital Status =============== //



	$('#submitMSForm').click(function(){

		var name = $('#msName').val();

		var description = $('#msDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid marital-status name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid marital-status description format.');

			description.focus();

			return false;

		}



		$.post('?r=marital-status/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#msName').val('');	

			    $('#msDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=marital-status/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'MaritalStatus[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'MaritalStatus[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'MaritalStatus[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'MaritalStatus[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Marital Status =============== //



	$('#saveMSForm').click(function(){

		var id = $('#id').val();

		var name = $('#msName').val();

		var description = $('#msDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid marital-status name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid marital-status description format.');

			description.focus();

			return false;

		}



		$.post('?r=marital-status/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#msName').val('');	

			    $('#msDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=marital-status/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'MaritalStatus[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'MaritalStatus[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'MaritalStatus[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'MaritalStatus[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Add Nationality =============== //



	$('#submitNationalityForm').click(function(){

		var name = $('#nationalityName').val();

		var description = $('#nationalityDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid nationality name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid nationality description format.');

			description.focus();

			return false;

		}



		$.post('?r=nationality/new',{

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#nationalityName').val('');	

			    $('#nationalityDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=nationality/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Nationality[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Nationality[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Nationality[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Nationality[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// =============== Edit Nationality =============== //



	$('#saveNationalityForm').click(function(){

		var id = $('#id').val();

		var name = $('#nationalityName').val();

		var description = $('#nationalityDescription').val();



		$('form input, textarea').removeClass('inputTxtError');

		$('label.error').remove();



		if( !onlyLetterAndNumber(name) ){

			alert('Invalid nationality name format.');

			name.focus();

			return false;

		}



		if( !onlyLetterAndNumber(description) ){

			alert('Invalid nationality description format.');

			description.focus();

			return false;

		}



		$.post('?r=nationality/edit',{

			id: id,

			name: name,

			description: description



		},function(data){

			var data = jQuery.parseJSON(data);

			if( data.status == 'Success') {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();

			    

			    $('#nationalityName').val('');	

			    $('#nationalityDescription').val('');	



				alert(data.message);

				window.location = domain + '/arh/system?r=nationality/';



			} else {



				$('form input, textarea').removeClass('inputTxtError');

			    $('label.error').remove();



				$.each(data.message, function(field, message) {

		    		var errMsg = '<label class="error" for="'+ field + '">'+ message +'</label>';

		            $('input[name="' + 'Nationality[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		            $('textarea[name="' + 'Nationality[' + field + ']' + '"]').addClass('inputTxtError').after(errMsg);

		        });

		      

		      	var keys = Object.keys(data.message);

		      	$('input[name="'+ 'Nationality[' + keys[0] + ']' +'"]').focus();	

		      	$('textarea[name="'+ 'Nationality[' + keys[0] + ']' +'"]').focus();	

		      	return false;



			} 



		});





	});



	// ============= Validation ============== //



	function onlyLetterAndNumber(element)

	{

		var alphanum = /^[a-zA-Z0-9\s\.\#\-]*$/;

		

		if(element.match(alphanum)) {

			return true;

		}else{

			return false;

		}

	}



	function onlyNumber(element)

	{

		var num = /^[0-9\s\.]*$/;

		

		if(element.match(num)) {

			return true;

		}else{

			return false;

		}

	}



	function onlyForEmail(element)

	{

		var email = /^[a-zA-Z0-9\s\@\_\.\-]*$/;

		

		if(element.match(email)) {

			return true;

		}else{

			return false;

		}

	}

