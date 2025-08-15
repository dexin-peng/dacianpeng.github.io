
document.getElementsByClassName('input')[0].innerHTML='<!-- Hope you like it! -->\n\n<html>\n<head>\n  <style>\n\n  body{\n\n  transition: background 0.382s;\n\n  }\n\n.wrapper{\n\n  cursor: pointer\n\n}\n\n.moon{\n\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  background: grey;\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  box-shadow: inset  12px -16px grey;\n  transform: scale(1.5);\n  transition: all 0.382s;\n\n  }\n  .sun{\n\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  background: none;\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  box-shadow: 0 -130px 0  grey, 0 130px 0  grey, 130px 0 0  grey, -130px 0 0  grey, 92px 92px 0 grey, -92px 92px 0 grey, 92px -92px 0  grey, -92px -92px 0  grey;\n  transform: scale(0.5);\n  transition: 0.382s;\n\n  }\n  </style>\n</head>\n<html>\n\n<body>\n\n  <div class="wrapper" onclick="Trigger()">\n    <div class="moon"></div>\n    <div class="sun"></div>\n  </div>\n\n</body>\n\n<script>\nvar Status=2\nfunction Trigger(){\n\n     if (Status == 1) {\n      document.getElementsByClassName("moon")[0].style["background"] = "grey";\n      document.getElementsByClassName("sun")[0].style.boxShadow = "0 -130px 0  grey, 0 130px 0  grey, 130px 0 0  grey, -130px 0 0  grey, 92px 92px 0 grey, -92px 92px 0 grey, 92px -92px 0  grey, -92px -92px 0  grey";\n      document.getElementsByClassName("moon")[0].style.transform = "scale(" + 1.5 + ")"\n      document.body.style.setProperty("background","#1a202c")\n      Status = 2\n    }\n    else {\n      document.getElementsByClassName("moon")[0].style["background"] = "none";\n      document.getElementsByClassName("sun")[0].style.boxShadow = "none";\n      document.getElementsByClassName("moon")[0].style.transform = "scale(" + 2.5 + ")"\n      document.body.style.setProperty("background","#fff")\n      Status = 1\n    }\n\n}\n</script>\n\n</html>'

$("textarea").on('keydown', function (e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        var indent = '  ';
        var start = this.selectionStart;
        var end = this.selectionEnd;
        var selected = window.getSelection().toString();
        selected = indent + selected.replace(/\n/g, '\n' + indent);
        this.value = this.value.substring(0, start) + selected + this.value.substring(end);
        this.setSelectionRange(start + indent.length, start + selected.length);
    }
})

function go_back() {
    window.open("javascript:history.go(-1)",target="_parent")
}


function escape2Html(str) {
    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
}


function run() {
    var text = document.getElementsByClassName("input")[0].value
    var ifr = document.createElement("iframe");
    document.getElementsByClassName("iframewrapper")[0].innerHTML = "";
    document.getElementsByClassName("iframewrapper")[0].appendChild(ifr);
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    var Html_text = escape2Html(text)
    ifrw.document.write(Html_text);
    ifrw.document.close();
}


run();