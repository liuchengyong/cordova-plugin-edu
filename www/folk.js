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
    testFolk:function(message, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Folk", "testFolk", [message]);
    },
    isDebug:function(successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, "Folk", "isDebug", []);
    }
};