$(document).ready(function () {
    $('input.tableflat').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
});

var asInitVals = new Array();
$(document).ready(function () {
 
 //all tables 
    var oTable = $('#tbldesign').dataTable({
        "oLanguage": {
            "sSearch": "Filter by:"
        },
        "aoColumnDefs": [
            {
                'bSort': false,
                'aTargets': [0],
            } //disables sorting for column one
    ],
        'iDisplayLength': 20,
        "aaSorting": [[ 0, "desc" ]],
        "sPaginationType": "full_numbers",
        "dom": 'T<"clear">lfrtip',
    });
    $("tfoot input").keyup(function () {
        /* Filter on the column based on the index of this element's parent <th> */
        oTable.fnFilter(this.value, $("tfoot th").index($(this).parent()));
    });
    $("tfoot input").each(function (i) {
        asInitVals[i] = this.value;
    });
    $("tfoot input").focus(function () {
        if (this.className == "search_init") {
            this.className = "";
            this.value = "";
        }
    });
    $("tfoot input").blur(function (i) {
        if (this.value == "") {
            this.className = "search_init";
            this.value = asInitVals[$("tfoot input").index(this)];
        }
    });

});

//$(document).ready(function () {
 
 //all tables 
    // var oTable = $('#tblinventory').dataTable({
    //     "oLanguage": {
    //         "sSearch": "Filter by:"
    //     },
    //     "aoColumnDefs": [
    //         {
    //             'bSortable': false,
    //             'aTargets': [0]
            //} //disables sorting for column one
    // ],
    //     'iDisplayLength': 25,
    //     "sPaginationType": "full_numbers",
    //     "dom": 'T<"clear">lfrtip',
    // });
    // $("tfoot input").keyup(function () {
        /* Filter on the column based on the index of this element's parent <th> */
//         oTable.fnFilter(this.value, $("tfoot th").index($(this).parent()));
//     });
//     $("tfoot input").each(function (i) {
//         asInitVals[i] = this.value;
//     });
//     $("tfoot input").focus(function () {
//         if (this.className == "search_init") {
//             this.className = "";
//             this.value = "";
//         }
//     });
//     $("tfoot input").blur(function (i) {
//         if (this.value == "") {
//             this.className = "search_init";
//             this.value = asInitVals[$("tfoot input").index(this)];
//         }
//     });

// });

