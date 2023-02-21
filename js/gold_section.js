
document.getElementsByClassName("page")[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        change_width()
    }
});
function change_width() {
    var width = document.getElementsByClassName("input")[0].value;
    document.getElementsByClassName("page")[0].style.width = width;
}
function change_fast_animation() {
    var time = document.getElementsByClassName("input")[1].value;
    document.getElementsByTagName("body")[0].style.transition = time;
    for (icon of document.getElementsByClassName("icon")) {
        icon.style.transition = time;
    }
    for (icon of document.getElementsByClassName("icon-wrapper")) {
        icon.style.transition = time;
    }
    for (icon of document.getElementsByClassName("icon-inside")) {
        icon.style.transition = time;
    }
    for (icon of document.getElementsByClassName("blog")) {
        icon.style.transition = time;
    }
    for (p of document.getElementsByTagName("p")) {
        p.style.transition = time;
    }
    for (copy of document.getElementsByTagName("copy_button")) {
        copy.style.transition = time;
    }
    for (button of document.getElementsByTagName("button")) {
        button.style.transition = time;
    }
    for (input of document.getElementsByTagName("input")) {
        input.style.transition = time;
    }
    toggle_theme()
}
function change_slow_animation() {
    var time = document.getElementsByClassName("input")[2].value;
    for (code of document.getElementsByTagName("inline_code")) {
        code.style.transition = time;
    }
    for (code of document.getElementsByTagName("code")) {
        code.style.transition = time;
    }
    toggle_theme()
}



function theme_hover(element){
    element.style.opacity = '100%'
}
function theme_leave(element){
    var opacity = document.getElementsByClassName("input")[3].value;
    element.style.opacity = opacity
}
function copy_hover(element){
    element.style.opacity = '100%'
    document.getElementsByClassName('message')[0].textContent = '点击复制';
    document.getElementsByClassName('message')[0].removeAttribute('hidden');
}
function copy_leave(element){
    var opacity = document.getElementsByClassName("input")[3].value;
    element.style.opacity = opacity
    document.getElementsByClassName('message')[0].setAttribute('hidden', '');
}
function change_opacity() {
    var opacity = document.getElementsByClassName("input")[3].value;
    for (icon of document.getElementsByClassName("icon")) {
        icon.style.opacity = opacity;
        icon.setAttribute("onmouseover", "theme_hover(this)")
        icon.setAttribute("onmouseleave", "theme_leave(this)")
    }
    for (copy of document.getElementsByTagName("copy_button")) {
        copy.style.opacity = opacity;
        copy.setAttribute("onmouseover", "copy_hover(this)")
        copy.setAttribute("onmouseleave", "copy_leave(this)")
    }
}


function change_radius() {
    var radius = document.getElementsByClassName("input")[4].value;

    for (code of document.getElementsByTagName("code")) {
        code.style.borderRadius = radius;
    }
}
