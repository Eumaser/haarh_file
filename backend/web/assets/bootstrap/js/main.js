$(function() 
{
 $( "#coding_language" ).autocomplete({
  source: '?r=site/auto-complete'
 });
});

// function logout() {
	
// 	$.post("site/logout", {

// 	});

// }

function ShowLoader()
{	
	$("#loader").show();
}

function HideLoader()
{		
	$("#loader").hide();
}

function sendForm(){
	
}

