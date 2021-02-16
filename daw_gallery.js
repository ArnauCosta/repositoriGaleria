$(document).ready(function () {


    $('.img200').hover(function () {
        $('.img200').removeClass('thumb-rollover');
        $(this).addClass('thumb-rollover');
    });


    $('.img200').click(function () {
        $('.img200').removeClass('border');
        $(this).addClass('border');
    });

    /*
    
    $('.img200').click(function () {
        var nomSplit = $(this).attr("src").split("/");
        $('#image-title').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
    });
    
    

    $(window).resize(function () {
        var amplada = $('#detall').width();
        var numAmplada;
        if (amplada <= 500) {
            numAmplada = 500;
        } else if (amplada <= 800) {
            numAmplada = 800;
        } else {
            numAmplada = 1000;
        }
        $('#main-image').attr("src", "imatges/img" + numAmplada + "/baobabs-2708289-1.jpg");
        $('#main-image').css("display", "unset")
    });

    */


    $('.img200').click(function () {

        $("#detall").addClass('modal');
        $("#detall").css('display', "unset");
        var nomSplit = $(this).attr("src").split("/");
        $('#main-image').attr("src", "imatges/img1000/" + nomSplit[nomSplit.length - 1]);
        $('#titol').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
        $("#main-image").addClass('center');
        $("#modal-controller").addClass('center');

    });

    $('#close').click(function () {
        $("#detall").removeClass('modal');
        $("#detall").css('display', "none");
        $("#main-image").removeClass('center');
        $("#modal-controller").removeClass('center');
    });

    $('#next').click(function () {
        var posibleSeguent = $(".border").next();
        if (posibleSeguent.length == 0) {
            posibleSeguent = $(".border").siblings('img').first();
            var nomSplit = $(posibleSeguent).attr("src").split("/");
            $('#main-image').attr("src", "imatges/img1000/" + nomSplit[nomSplit.length - 1]);
            $('#titol').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
            $('.img200').removeClass('border');
            posibleSeguent.addClass("border");
        } else {
            var nomSplit = $(posibleSeguent).attr("src").split("/");
            $('#main-image').attr("src", "imatges/img1000/" + nomSplit[nomSplit.length - 1]);
            $('#titol').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
            $('.img200').removeClass('border');
            posibleSeguent.addClass("border");
        }
    });

    $('#prev').click(function () {
        var posibleSeguent = $(".border").prev();
        if (posibleSeguent.length == 0) {
            posibleSeguent = $(".border").siblings('img').last();
            var nomSplit = $(posibleSeguent).attr("src").split("/");
            $('#main-image').attr("src", "imatges/img1000/" + nomSplit[nomSplit.length - 1]);
            $('#titol').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
            $('.img200').removeClass('border');
            posibleSeguent.addClass("border");
        } else {
            var nomSplit = $(posibleSeguent).attr("src").split("/");
            $('#main-image').attr("src", "imatges/img1000/" + nomSplit[nomSplit.length - 1]);
            $('#titol').text((nomSplit[nomSplit.length - 1]).split('.')[0]);
            $('.img200').removeClass('border');
            posibleSeguent.addClass("border");
        }
    });

});

