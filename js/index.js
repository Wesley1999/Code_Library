layui.use(['element', 'layer']);

function adjustWindow() {
    let windowHeight = document.documentElement.clientHeight;
    let windowWidth = document.documentElement.clientWidth;
    $("#navigation").css("height", windowHeight - 136 + "px");
    $("#main_content").css("height", windowHeight - 136 + "px");

    if (windowWidth >= 1600) {
        $("#main_content").css("width", 1300 + "px");
    } else if (windowWidth >= 900) {
        $("#main_content").css("width", windowWidth - 306 + "px");
    }

}

adjustWindow();

$(window).resize(function(){
    adjustWindow();
});

$(function () {
    $("#front_title").click(function () {
        $(this).next().empty();
        if (!$(this).next().hasClass("layui-show")) {
            $(this).next().append('<div></div>');
            $(this).next().children().load("front.html");
        }
    });
    $("#java_title").click(function () {
        $(this).next().empty();
        if (!$(this).next().hasClass("layui-show")) {
            $(this).next().append('<div></div>');
            $(this).next().children().load("java.html");
        }
    });
    $("#sql_title").click(function () {
        $(this).next().empty();
        if (!$(this).next().hasClass("layui-show")) {
            $(this).next().append('<div></div>');
            $(this).next().children().load("sql.html");
        }
    });
    $("#command_title").click(function () {
        $(this).next().empty();
        if (!$(this).next().hasClass("layui-show")) {
            $(this).next().append('<div></div>');
            $(this).next().children().load("command.html");
        }
    });
    $("#regex_title").click(function () {
        $(this).next().empty();
        if (!$(this).next().hasClass("layui-show")) {
            $(this).next().append('<div></div>');
            $(this).next().children().load("regex.html");
        }
    })
});