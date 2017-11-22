$(document).ready(function () {

	var date = new Date();
    var currentMonth = date.getMonth();
    var currentDate = date.getDate();
    var currentYear = date.getFullYear();
        $('#expiry_date').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'DD-MM-YYYY',
            changeYear: true,
            minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#date_start').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'YYYY-MM-DD',
            minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#date_end').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'YYYY-MM-DD',
            minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#datestart').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'YYYY-MM-DD',
            // minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#dateend').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'YYYY-MM-DD',
            minDate: $('#datestart').val(),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#joinDate').datepicker({
            autoclose : true,
            format : 'dd-mm-yyyy',
            startDate : '+1d',
            minDate: 0,

        }).on('changeDate', function(e) {
            $('#memberJoinDate').val($('#joinDate').val());
            var joinDate = $('#joinDate').val().split('-');
            var getExpiryDate = new Date(++joinDate[2], joinDate[1], joinDate[0]);

            getExpiryDate.setDate(getExpiryDate.getDate() - 1); // minus the date

            var getExpiryDate = new Date(getExpiryDate);

            if( getExpiryDate.getMonth() < 10 ){
                var expiryMonth = '0' + getExpiryDate.getMonth();

            }else{
                var expiryMonth = getExpiryDate.getMonth();
            }

            if( getExpiryDate.getDate() < 10 ){
                var expiryDate = '0' + getExpiryDate.getDate();

            }else{
                var expiryDate = getExpiryDate.getDate();
            }


            var ExpiryDate = expiryDate + '-' + expiryMonth + '-' + getExpiryDate.getFullYear();

            $('#expirationDate').val(ExpiryDate).datepicker('update');
            $('#memberExpiryDate').val(ExpiryDate).datepicker('update');

        });

        $('#expirationDate').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

        $('#comeIn').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'DD-MM-YYYY',
            changeYear: true,
            minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#comeOut').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4",
            format: 'DD-MM-YYYY',
            changeYear: true,
            minDate: new Date(currentYear, currentMonth, currentDate),
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

        $('#payslipDate').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

        $('#payslipCutoffDate').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

        $('#staffBirthday').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

        $('#staffJoinDate').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

        $('#staffRTReason').datepicker({
            autoclose : true,
            format: 'dd-mm-yyyy',
            startDate: '+1d',
        });

				$('.datepickers').datepicker({
        //    autoclose : true,
        //    format: 'dd-mm-yyyy',
						  format: 'dd-mm-yyyy',
        //    startDate: '+1d',
        });

});
