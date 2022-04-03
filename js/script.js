

$(window).load(function () {

    //contentsの横サイズ
    var cont = $('#contents');
    var contW = ($('.section01').outerWidth(true) + $('.section02').outerWidth(true) + $('.section03').outerWidth(true) + $('.section04').outerWidth(true) + $('.section05').outerWidth(true) + $('.section06').outerWidth(true) + $('.section07').outerWidth(true) + $('.section08').outerWidth(true) + $('.section09').outerWidth(true) + $('.section10').outerWidth(true) + $('.section11').outerWidth(true) + $('.section12').outerWidth(true) + $('.section13').outerWidth(true) + $('.section14').outerWidth(true) + $('.section15').outerWidth(true) + $('.section16').outerWidth(true) + $('.section17').outerWidth(true) + $('.section18').outerWidth(true) + $('.section19').outerWidth(true) + $('.section20').outerWidth(true) + $('.section21').outerWidth(true) + $('.section22').outerWidth(true) + $('.section23').outerWidth(true) + $('.section24').outerWidth(true)) / 2;
    cont.css('width', contW);

    //スクロールスピード
    var speed = 50;
    //マウスホイールで横移動
    $('html').mousewheel(function (event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
        return false; //縦スクロール不可
    });


    // スクロールのオフセット値
    var offsetX = window.innerWidth;
    // スクロールにかかる時間
    var time = 3000;

    // ページ内リンクのみを取得
    $('a[href^=#]').click(function () {
        // 移動先となる要素を取得
        var target = $(this.hash);
        if (!target.length) return;
        // 移動先となる値
        var targetX = target.offset().left - offsetX;
        // スクロールアニメーション
        $('html,body').animate({
            scrollLeft: targetX
        }, time, 'swing');
        // ハッシュ書き換えとく
        window.history.pushState(null, null, this.hash);
        // デフォルトの処理はキャンセル
        return false;
    });



    // ルーペ（elevateZoom）
    $(".mainimage").elevateZoom({
        zoomType: "lens",
        lensShape: "round",
        lensSize: 400,
        scrollZoom: true
    });
    $('.image2-container').hide();

    $(".section").click(function () {
        $('.image1-container, .image2-container').toggle();
    });

    //    slidebar
    $('#slideR').hover(
        function () {
            $(this).animate({
                'marginRight': '140px'
            }, 500);
        },
        function () {
            $(this).animate({
                'marginRight': '0'
            }, 500);
        }
    );



    $('#ekotoba').on('click', function () {
        if ($('#slideB').hasClass('off')) {
            $('#slideB').removeClass('off');
            $('#slideB').animate({
                'bottom': '0%'
            }, 300, 'swing').addClass('on');

            $("#contents").animate({
                'height': '70%'
            }, 300, 'swing');
        } else {
            $('#slideB').addClass('off');
            $('#slideB').animate({
                'bottom': '-30%'
            }, 300, 'swing');

            $("#contents").animate({
                "height": "100%"
            }, 300, 'swing');


        }
    });


    $(document).ready(function () {
        fit();
        $(window).resize(function () {
            fit();
        })

        function fit() {
            var w = $(window).width();
            $('.slide-innerB').css("width", w);
        }
    });

    let d = new Date();
    let year = d.getFullYear();
    document.getElementById("year").textContent = year;
});
