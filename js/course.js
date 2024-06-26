$(document).ready(function () {
    var height_courses_list = $("#courses-list").height();
    var height_course_content = $("#course-content").height();
    var c_height = Math.max(height_courses_list, height_course_content);
    $("#course-page").height(c_height + 100);
});