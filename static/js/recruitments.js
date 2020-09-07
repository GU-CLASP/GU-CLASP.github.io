$(document).ready(function () {
    var height_reqruitment_nav = $("#recruitment-nav").height();
    var height_reqruitment_content = $("#recruitments-content").height();
    var c_height = Math.max(height_reqruitment_nav, height_reqruitment_content);
    $("#recruitments-page").height(c_height + 100);
});