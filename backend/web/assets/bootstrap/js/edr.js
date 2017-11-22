$(document).ready(function () {

});


function getdate(){
  $('.dates').datepicker({
      autoclose : true,
      format: 'dd-mm-yyyy',
      startDate: '+1d',
  });
}
