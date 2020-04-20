"use strict";

function change(form) {

 
    let wid = form.width.value;
    
    let hei = form.height.value;
    let bor = form.border.value;
    let col = form.border_color.value;
    let alt = form.alt_text.value;

   
    img.style.width = wid + 'px';

    img.style.height = hei + 'px';

    img.style.border = bor + 'px' + ' solid';

    img.style.color = col;
    let str = /^[a-zA-Z]$/;

    if (document.getElementById('alt_text').value.search(str) == 0) {
        img.alt=alt;
    }
    else {
        return false;
    }



}

