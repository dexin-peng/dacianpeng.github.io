var codes = document.getElementsByTagName('code')

for (element of codes) {
    var copy_button = document.createElement("copy_button");
    copy_button.innerHTML = '📋'
    element.appendChild(copy_button)
    copy_button.setAttribute('onclick', 'code_copy(this)')
    copy_button.setAttribute('message', 'Copy')
}

