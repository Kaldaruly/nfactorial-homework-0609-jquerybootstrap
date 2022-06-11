$(function () {
    $('.telstory').on('click', (e) => {
        e.preventDefault();

        let person = $('#person').first().val()
        let char = $('.char').first().val()
        let adverb = $('.adverb').first().val()
        let adjective = $('.adjective').first().val()

        $('.res').animate({
            opacity: 1,
        })
        if (person === "" || char === "" || adverb === "" || adjective === "") {
            $('.title_res').css("display", "none")
            $('.result').css("display", "none")
            $('.error').text('We need to fill out everything')
        } else {
            $('.personres1').text(" " + person)

            $('.personres2').text(" " + char)

            $('.personres3').text(" " + adverb)

            $('.personres4').text(" " + adjective)
        }

    })
})