

function add_buttons(){

    var blogs = document.createElement("span");
    blogs.setAttribute('class','part')
    blogs.setAttribute('onclick',"open_url('/index.html',false)")
    blogs.innerHTML = '博客'
    document.getElementsByClassName("buttons")[0].appendChild(blogs);

    var strategy = document.createElement("span");
    strategy.setAttribute('class','part')
    strategy.setAttribute('onclick',"open_url('/strategy.html',false)")
    strategy.innerHTML = '策略'
    document.getElementsByClassName("buttons")[0].appendChild(strategy);

}


function open_url(url, ex = true) {
    if (ex) {
        console.log(this)
        window.open(url, '_blank')
    }
    else {
        window.open(url, '_self')
    }
}


function copy_and_open_url(element, url) {
    navigator.clipboard.writeText(element.innerHTML).then(()=>{
        window.open(url, '_blank')
    }, ()=>{});
}


function copy(element){
    navigator.clipboard.writeText(element.innerHTML);
}

function code_copy(element){
    navigator.clipboard.writeText(element.parentElement.firstChild.nodeValue);
}

function code_feedback(element){
}



add_buttons()


