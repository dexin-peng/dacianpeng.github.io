

function add_buttons(){

    var blogs = document.createElement("span");
    blogs.setAttribute('class','part')
    blogs.setAttribute('onclick',"open_url('/index.html',false)")
    blogs.innerHTML = 'Home Page'
    document.getElementsByClassName("buttons")[0].appendChild(blogs);
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
    const codeText = element.parentElement.firstChild.nodeValue;
    navigator.clipboard.writeText(codeText).then(() => {
        const originalText = element.textContent;
        element.textContent = '✓';
        element.style.color = 'var(--standard-characters)';
        element.setAttribute('message', 'Copied');
        showMessage('Copied');
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
            element.setAttribute('message', 'Copy');
        }, 2000);
    }).catch(() => {
        showMessage('Copy failed');
    });
}

function code_feedback(element){
}

function copyEmail() {
    const email = 'dpeng965@connect.hkust-gz.edu.cn';
    navigator.clipboard.writeText(email).then(() => {
        const button = event.target.closest('.copy-button');
        const originalIcon = button.querySelector('.copy-icon');
        const originalText = originalIcon.textContent;
        
        originalIcon.textContent = '✓';
        button.style.color = 'var(--standard-characters)';
        
        showMessage('Copied');
        
        setTimeout(() => {
            originalIcon.textContent = originalText;
            button.style.color = '';
        }, 2000);
    }).catch(() => {
        showMessage('Copy failed');
    });
}

function showMessage(text) {
    const messageNode = document.getElementsByClassName('message')[0];
    if (messageNode) {

        if (sessionStorage.getItem('color-mode') == 'dark') {
            messageNode.style.borderColor = '#fff';
            messageNode.style.background = '#1a202c';
            messageNode.style.color = '#fff';
        } else {
            messageNode.style.borderColor = '#000';
            messageNode.style.background = '#fff';
            messageNode.style.color = '#000';
        }
        
        messageNode.textContent = text;
        messageNode.removeAttribute('hidden');
        
        setTimeout(() => {
            messageNode.setAttribute('hidden', '');
        }, 2000);
    }
}



add_buttons()


