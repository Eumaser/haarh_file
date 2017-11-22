$(document).ready(function () {
    $.listen('parsley:field:validate', function () {
        validateFront();
    });
    $('#arh-forms .btn').on('click', function () {
        $('#arh-forms').parsley().validate();
        validateFront();
    });
    var validateFront = function () {
        if (true === $('#arh-forms').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
        } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
        }
    };
});
try {
    hljs.initHighlightingOnLoad();
} catch (err) {}
    