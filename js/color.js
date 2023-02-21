



var Sun = '#cbd5e0'
var BackGroundDark = '#1a202c'
var LineDark = '#2d3748'
var SmallCharacterDark = '#7f8ea3'
var MediumCharacterDark = '#cbd5e0'
var StandardCharacterDark = '#fff'

var Moon = '#2d3748'
var BackGroundLight = '#fff'
var LineLight = '#cbd5e0'
var SmallCharacterLight = '#9da3ac'
var MediumCharacterLight = '#2d3748'
var StandardCharacterLight = '#000'



if (sessionStorage.getItem('color-mode') == null) {
  if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
    document.documentElement.setAttribute("Theme", "dark")
    sessionStorage.setItem('color-mode', 'dark')
  }
  else {
    document.documentElement.setAttribute("Theme", "light")
    sessionStorage.setItem('color-mode', 'light')
  }
}
else if (sessionStorage.getItem('color-mode') == 'dark') {
  document.documentElement.setAttribute("Theme", "dark")
}
else {
  document.documentElement.setAttribute("Theme", "light")
}