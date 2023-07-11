var btn = document.getElementById('btn')
btn.onclick= ()=>{
var inp = document.getElementById('inp').value.toString()
const utterance =
new SpeechSynthesisUtterance(inp)
window.speechSynthesis.speak(utterance)
}