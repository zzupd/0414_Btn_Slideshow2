$(function(){

    $("#btnArea").mouseover(function(){
        var srcValue = "images/control_play.png";
        $("#pauseBtn").attr("src", srcValue);
    });
    $("#btnArea").mouseout(function(){
        var srcValue = "images/control_pause.png";
        $("#pauseBtn").attr("src", srcValue);
    });

});
