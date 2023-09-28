// ==UserScript==
// @name         adblock pop-up removal
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Having friends must be nice
// @author       You
// @match        https://chan.sankakucomplex.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sankakucomplex.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const targetNode = document.documentElement;
    const config = { childList: true, subtree: true };

    const callback = function(mutationsList, observer) {

        console.log("Initializing MutationObserver");
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                let possibleModals = [...document.querySelectorAll('div')].filter(el => {
                    let children = el.children;
                    return children.length === 4 &&
                           children[0].tagName === 'STYLE' &&
                           children[1].tagName === 'DIV' &&
                           children[2].tagName === 'DIV' &&
                           children[3].tagName === 'SCRIPT';
                });

                if (possibleModals.length) {
                    //console.log("Found a mutation with the crap you want removed");
                    possibleModals[0].remove();
                    observer.disconnect(); // disconnect observer after deleting the div
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
