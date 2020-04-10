
/**
 *
 * A simple method for injecting script in head of document without interrupting of main load process page;
 * @param {*} url path to script source...
 * @param {*} callback use callback for successful loading script.
 */
function loadScript(url, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { // IE support
        script.onreadystatechange = function() {
            if(script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                callback();
             }
        }
    } else { // other browsers
        script.onload = function() {
            callback();
        }
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

loadScript('./scripts/main.js', () => {
    loadScript('./scripts/main2.js', () => {
        loadScript('./scripts/main3.js', () => {
            console.log('Three scripts were loaded!');
        })
    })
})