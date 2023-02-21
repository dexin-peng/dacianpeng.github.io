

var node = document.getElementsByClassName('message')[0];

var StandardCharacterDark = '#fff'
var StandardCharacterLight = '#000'
var BackGroundDark = '#1a202c'
var BackGroundLight = '#fff'



var message = new (function () {
    this.follow = function (event) {
        node.style.left = event.clientX + window.scrollX + 20 + 'px';
        node.style.top = event.clientY + window.scrollY + 10 + 'px';
    };

    this.show = function (event) {
        if (event.target.getAttribute('message') == '点击复制') {
            window.addEventListener("click", function (event) {
                if (event.target.getAttribute('message') == '点击复制'){
                event.target.setAttribute('message', '已复制')
                node.textContent = '已复制'}
            });
        }
        if (sessionStorage.getItem('color-mode') == 'dark') {
            node.style.borderColor = StandardCharacterDark
            node.style.background = BackGroundDark
            node.style.color = StandardCharacterDark
        }
        else {
            node.style.borderColor = StandardCharacterLight
            node.style.background = StandardCharacterDark
            node.style.color = StandardCharacterLight
        }
        node.textContent = event.target.getAttribute('message');
        node.removeAttribute('hidden');
    };

    this.hide = function (event) {
        if (event.target.getAttribute('message') == '已复制'){
            event.target.setAttribute('message', '点击复制')
        } 
        node.setAttribute('hidden', '');
    };
})();



var links = document.querySelectorAll('[message]');

links.forEach(link => {
    link.onmouseover = message.show;
    link.onmousemove = message.follow;
    link.onmouseout = message.hide;
});

