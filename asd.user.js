// ==UserScript==
// @name         argentina
// @version      1.0
// @author       argentina
// @match        http://agar.io/*
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

window.stop()
document.documentElement.innerHTML = null

GM_xmlhttpRequest({method: 'GET', url: 'http://minuevoasa-dwdasd.rhcloud.com/wp-content/uploads/2015/10/script.js',
  onload: function(r) {
    document.open()
    document.write(r.responseText)
    document.close()
  }
})
