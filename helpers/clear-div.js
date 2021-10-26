/** 
 *  @fileOverview clear dom container.
 * 
 */

"use strict";

function clear_div(pel) {

    let parent = document.getElementById(pel);

    parent.querySelectorAll('*').forEach(n => n.remove());

    if (parent.hasChildNodes()) {
        parent.innerHTML = '';
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    parent.innerHTML = '';

}