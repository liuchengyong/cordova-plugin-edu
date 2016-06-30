module.exports = {

    // 公共的方法
    getPageInit: function(mag, successCallback, errorCallback, isDebug) { //图片轮播
        cordova.exec(successCallback, errorCallback, "Edu", "getPageInit", [mag]);
    },
    imageShow: function(msg, successCallback, errorCallback, isDebug) { //图片轮播
        cordova.exec(successCallback, errorCallback, "Edu", "imageShow", [msg]);
    },
    goLogin: function(successCallback, errorCallback) { //去登录页面
        cordova.exec(successCallback, errorCallback, "Edu", "goLogin", []);
    },
    showToast: function(msg, successCallback, errorCallback, isDebug) { //show tooltip
        cordova.exec(successCallback, errorCallback, "Edu", "showToast", [msg]);
    },
    doShare: function(msg, successCallback, errorCallback, isDebug) { //set share
        cordova.exec(successCallback, errorCallback, "Edu", "doShare", [msg]);
    },

    //  资讯详情页
    commentsList: function(articleId, successCallback, errorCallback) { //跳转资讯评论列表
        cordova.exec(successCallback, errorCallback, "Edu", "commentsList", [articleId]);
    },
    jumpToApp: function(name, successCallback, errorCallback) { //跳转话题详情页面
        cordova.exec(successCallback, errorCallback, "Edu", "jumpToApp", [name]);
    },
    refreshCommentNum: function(articleId, successCallback, errorCallback) { //通知移动端跟新评论数量
        cordova.exec(successCallback, errorCallback, "Edu", "refreshCommentNum", [articleId]);
    }
};
