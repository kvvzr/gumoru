'use strict';

// 愛のあるsetInterval
setInterval(function() {
    var chks = document.getElementsByName('adminflg');
    for (var i = 0; i < chks.length; i++) {
        chks[i].checked = true;
    }
    var comment_list = document.getElementsByClassName('comment_list');
    for (var i = 0; i < comment_list.length; i++) {
        var comments = comment_list[i].childNodes;
        for (var j = 0; j < comments.length; j++) {
            if (comments[j].textContent.indexOf('[このコメントはメッセージ管理者のみが確認できます]') >= 0) {
                comment_list[i].removeChild(comments[j]);
            }
        }
    }
}, 1000);
