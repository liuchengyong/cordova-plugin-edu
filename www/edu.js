module.exports = {

    // 公共的方法
    imageShow: function(name, successCallback, errorCallback, isDebug) { //图片轮播
        cordova.exec(successCallback, errorCallback, "Edu", "imageShow", [name]);
    },
    goLogin: function(successCallback, errorCallback) { //去登录页面
        cordova.exec(successCallback, errorCallback, "Edu", "goLogin", []);
    },
    showToast: function(msg, successCallback, errorCallback, isDebug) { //show tooltip
        cordova.exec(successCallback, errorCallback, "Edu", "showToast", [msg]);
    },

    //  资讯详情页
    getArticleDetail: function(msg,successCallback,errorCallback) { //获取资讯详情id和token
        cordova.exec(successCallback, errorCallback, "Edu", "getArticleDetail", [msg]);
    },
    commentsList: function(articleId, successCallback, errorCallback) { //跳转资讯评论列表
        cordova.exec(successCallback, errorCallback, "Edu", "commentsList", [articleId]);
    },
    topicDetail: function(name, successCallback, errorCallback) { //跳转话题详情页面
        cordova.exec(successCallback, errorCallback, "Edu", "topicDetail", [name]);
    },
    refreshCommentNum: function(articleId, successCallback, errorCallback) { //通知移动端跟新评论数量
        cordova.exec(successCallback, errorCallback, "Edu", "refreshCommentNum", [articleId]);
    }
};
