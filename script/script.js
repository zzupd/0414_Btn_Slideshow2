$(function(){



/*//////////자동 슬라이드 구현 ///////////*/
    var slideGo = setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate({
                "margin-left": "-370px"
                },
                800,
                function(){
                    $("#shuttleFrame>span:first")
                        .insertAfter("#shuttleFrame>span:last");
                    $("#shuttleFrame")
                        .css("margin-left", "0");
                }
            );
    }


/*//////////자동 슬라이드 구현 ///////////*/


/*//////////일시정지&시작 버튼 전환///////////*/
    $("#btnArea").mouseover(function(){
        var srcValue = "images/control_play.png";
        $("#pauseBtn").attr("src", srcValue);

        clearInterval(slideGo);

    });

    $("#btnArea").mouseout(function(){
        var srcValue = "images/control_pause.png";
        $("#pauseBtn").attr("src", srcValue);

        slideGo = setInterval(fnSlide, 3000);

    });
/*//////////일시정지&시작 버튼 전환///////////*/

});
