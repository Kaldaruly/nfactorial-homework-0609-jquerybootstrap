$(function () {
    $('.calculatesize').on('click', (e) => {
        e.preventDefault();

        let width = $('.width').first().val()
        let heigth = $('.height').first().val()
        let colors = $('.colors').first().val()
        $('.res').animate({
            opacity: 1,
        })
        if (width === "" || heigth === "" || colors === "") {
            $('.result').css("display", "none")
            $('.error').text('We need to fill out everything')
        } else {
            var bits = Number(colors).toString(2);
            var bit = bits.length;
            var size = Math.floor(parseInt(width) * parseInt(heigth) * parseInt(bit) / 1024 / 8);
            console.log(size);
            $('.answertom').text(size)
        }
    })
})