'use strict';

// 愛のあるsetInterval
setInterval(function() {
    var btns = document.getElementsByName('adminflg');
    for (var i = 0; i < btns.length; i++) {
        btns[i].checked = true;
    }
}, 1000);
