// Tranform alert, confirm and prompt into console.log()
function main() {
    var patch = {
        "alert": function (msg) {
            console.log("alert: " + msg);
        },
        "prompt": function (msg, value) {
            console.log("prompt: " + msg + " , " + value);
            return value || "";
        },
        "confirm": function confirm(msg) {
            console.log("confirm: " + msg);
            return true;
        }
    };
    for(var i in patch) {
        if (!window[i].disabled) {
            window[i] = patch[i];
            window[i].disabled = true;
        }
    }
}

// Inject code in window
if (!document.xmlVersion) {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('('+ main +')();'));
    document.documentElement.appendChild(script);
}
