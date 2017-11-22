// $(document).ready(function() {

//   $(".add-more").click(function(){ 

//       var html = $(".copy").html();

//       $(".after-add-more").after(html);

//   });


//   $(".remove").each(function(){
//     $(this).click(function(){

//         alert(2);
//       // $(this).parents(".control-group").remove();

//     });

//   });


// });

function newProduct() {

    var inventorySupplier = $('#inventorySupplier').val();
    var inventoryProduct = $('#inventoryProduct').val();
    var inventoryQty = $('#inventoryQty').val();
    var inventoryCost = $('#inventoryCost').val();
    var inventorySelling = $('#inventorySelling').val();

    var n = $('#n').val();

    if( inventoryProduct == "" || inventoryQty == "" || inventoryCost == "" || inventorySelling == "") {
        alert('Fill all the fields first.')
        return false;

    }else{
    
        n++;

         $.post("?r=inventory/insert-in-inventory", {
          inventorySupplier : inventorySupplier,
          inventoryProduct : inventoryProduct,
          inventoryQty : inventoryQty,
          inventoryCost : inventoryCost,
          inventorySelling : inventorySelling,
          n : n
        },
        function(data, status){
          $('.selected-product-list').append(data);
        });

        $('#inventorySupplier').val('0'); 
        $('#inventoryProduct').val('0');
        $('#inventoryQty').val('');
        $('#inventoryCost').val('');
        $('#inventorySelling').val('');
        $('#n').val(n);
    }

}

function removeProduct(n) {
    $('.product-'+n).remove();
}