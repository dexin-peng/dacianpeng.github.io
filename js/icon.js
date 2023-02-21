

if (sessionStorage.getItem('color-mode') == null) {
  if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
    document.documentElement.setAttribute("Theme", "dark")
    sessionStorage.setItem('color-mode', 'dark')
    darken()
  }
  else {
    document.documentElement.setAttribute("Theme", "light")
    sessionStorage.setItem('color-mode', 'light')
    light_up()
  }
}
else if (sessionStorage.getItem('color-mode') == 'dark') {
  document.documentElement.setAttribute("Theme", "dark")
  darken()
}
else {
  document.documentElement.setAttribute("Theme", "light")
  light_up()
}



function icon_light_up() {
  for (IconInside of document.getElementsByClassName('icon-inside')) {
  IconInside.style['background'] = 'none';
  IconInside.style['transform'] = "scale(" + 5 + ")"
  IconInside.style['box-shadow'] = 'inset  6px -8px ' + Moon;
}
  for (IconWrapper of document.getElementsByClassName('icon-wrapper')) {
  IconWrapper.style['box-shadow'] = 'none';
}
}


function icon_darken() {
  for (IconInside of document.getElementsByClassName('icon-inside')) {
  IconInside.style['background'] = Sun;
  IconInside.style['transform'] = "scale(" + 3 + ")"
  IconInside.style['box-shadow'] = 'inset  6px -8px ' + Sun
  }
  var p1 = '0 -65px 0 ' + Sun + ', '
  var p2 = '0 65px 0 ' + Sun + ', '
  var p3 = '65px 0 0 ' + Sun + ', '
  var p4 = '-65px 0 0 ' + Sun + ', '
  var p5 = '46px 46px 0 ' + Sun + ', '
  var p6 = '-46px 46px 0 ' + Sun + ', '
  var p7 = '46px -46px 0 ' + Sun + ', '
  var p8 = '-46px -46px 0 ' + Sun
  for (IconWrapper of document.getElementsByClassName('icon-wrapper')) {
  IconWrapper.style['box-shadow'] = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
  }
}



function light_up() {
  icon_light_up()
}

function darken() {
  icon_darken()
}


function toggle_theme() {
  if (sessionStorage.getItem('color-mode') == 'dark') {
    document.documentElement.setAttribute("Theme", "light")
    sessionStorage.setItem('color-mode', 'light')
    light_up()
  }
  else {
    document.documentElement.setAttribute("Theme", "dark")
    sessionStorage.setItem('color-mode', 'dark')
    darken()
  }
}

function fast_change(){
  
}
