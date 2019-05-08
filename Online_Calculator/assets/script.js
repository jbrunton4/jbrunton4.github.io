function add(num) {
    document.getElementById('textview').value += num;
}
function clean() {
    document.getElementById('textview').value = '';
}
function back() {
    // Need to code
}
function calc() {
    document.getElementById('textview').value = eval(document.getElementById('textview').value);
}