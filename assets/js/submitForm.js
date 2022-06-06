function submitForm(form, msg_subject) {
    var name = $(form).find(".name").val();
    var email = $(form).find(".email").val();
    var message = $(form).find(".message").val();

    $.ajax({
        type: "POST",
        url: "assets/php/form-processGeneral.php",
        data: "name=" +
            name +
            "&email=" +
            email +
            "&ciudad=" +
            ciudad +
            "&direccion=" +
            direccion +
            "&telefono=" +
            telefono +
            "&nit=" +
            nit +
            "&nombreChico=" +
            nombreChico +
            "&msg_subject=" +
            msg_subject +
            "&message=" +
            message,
        success: function(text) {
            if (text == "success") {
                formSuccess(form);
            } else {
                formError(form);
                submitMSG(form, false, text);
            }
        },
    });
}

function formSuccess(form) {
    //   $("#contactFormBoom")[0].reset();
    $("#overlay").fadeOut(300);
    submitMSG(form, true, "¡Su pedido se ha enviado con exito!");
}

function formError(form) {
    $(form)
        .removeClass()
        .addClass("shake animated")
        .one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function() {
                $(this).removeClass();
            }
        );
}

function submitMSG(form, valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $(form).removeClass().addClass(msgClasses).text(msg);
}



jQuery(function($) {
    $(document).ajaxSend(function() {
        $("#overlay").fadeIn(300);　
    });

    $('submit').click(function() {
        $.ajax({
            type: 'POST',
            success: function(data) {
                console.log(data);
            }
        }).done(function() {
            setTimeout(function() {
                $("#overlay").fadeOut(300);
            }, 500);
        });
    });
});