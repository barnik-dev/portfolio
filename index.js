var form = $(".form-input");

form.focusout(function () {
    if (this.value.length > 0) {
        $(this).addClass("has-value");
    } else {
        $(this).removeClass("has-value");
    }
    
});

