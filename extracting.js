/*
  * Site address: https://unicode.org/emoji/charts/full-emoji-list.html
  * 
  * Run the following code in the console.
*/
var saveData = (function () {
    var a = document.createElement("a");
    return function (data) {
        var blob = new Blob([data], {type: "octet/stream"}), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = document.title + ".txt";
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
var elm = document.querySelectorAll("td[class=code]");
var es = [];
var str = ""
elm.forEach(function (e) {
    var us = e.firstElementChild.textContent.split(" ");
    Array.from(us).forEach(function (u) {
        if (u.substr(0, 2) == "U+"){
            u = u.substr(2);
            u = "0".repeat(8 - u.length) + u;
            u = 'u"\\U'+u+'"'
            if (es.indexOf(u) === -1) es.push(u);
        }
    })
});
Array.from(es).forEach(function (e) {
    str += e
});
saveData(str)
