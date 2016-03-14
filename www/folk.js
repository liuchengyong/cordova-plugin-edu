module.exports = {
    topicDetail: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Folk", "topicDetail", [name]);
    },
    articleId:function(successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, "Folk", "articleId", []);
    },
    imageShow:function(name,successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, "Folk", "imageShow", [name]);
    },
    test:function(successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, "Folk", "test", []);
    }
};