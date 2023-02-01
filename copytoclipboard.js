function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        if (e.clipboardData.getData('Text') != "") {
            var element = document.getElementById("greatsuccess");
            element.classList.add("yesz");
        }
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};