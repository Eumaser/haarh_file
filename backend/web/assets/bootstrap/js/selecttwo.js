$(document).ready(function () {
    $('.select2_single').select2({
        placeholder: "Choose here",
        allowClear: true
    });

    $(".select3_single").select2({
        placeholder: "Choose here",
        allowClear: true
    });

    $(".select2_group").select2({});
    $(".select2_multiple").select2({
        maximumSelectionLength: 10,
        placeholder: "SELECT SERVICE OR PARTS HERE",
        allowClear: true
    });
});