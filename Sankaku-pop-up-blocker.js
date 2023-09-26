// ==UserScript==
// @name         adblock pop-up removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chan.sankakucomplex.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sankakucomplex.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the parent div that contains style, two divs, and a script tag
let possibleModals = [...document.querySelectorAll('div')].filter(el => {
    let children = el.children;
    return children.length === 4 &&
           children[0].tagName === 'STYLE' &&
           children[1].tagName === 'DIV' &&
           children[2].tagName === 'DIV' &&
           children[3].tagName === 'SCRIPT';
});

// Hide the possible modal if found
if (possibleModals.length) {
    possibleModals[0].style.display = 'none';
}

})();
