const submit = document.getElementById("submit");
const clean_cookies = document.getElementById("delete");
const list = document.getElementById("list");
const todo_item = document.getElementById("todo-item");
const listTodo = [ ]

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function getCookie(name) {
    const values = `; ${document.cookie}`;
    const parts = values.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
if(getCookie("list") === undefined){
    list.innerHTML = ""
}else{
    list.innerHTML = getCookie("list")
}
submit.addEventListener('click', function(){
    const item = todo_item.value
    const newlistTodo = [listTodo + item ]
    list.innerHTML = list.innerHTML + "<li>" + newlistTodo + "</li>"
    const newlist = list.innerHTML
    document.cookie = "list=" + [newlist];
})
clean_cookies.addEventListener('click', function(){
    deleteAllCookies()
    window.location.reload()
})