package com.luoteng.edu;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;


public class EduPlugin extends CordovaPlugin {
    public boolean execute(String action, CordovaArgs args, final CallbackContext callbackContext) throws JSONException {

        //common function
        if(action.equals("getPageInit")){
            String params = args.getString(0);
            callbackContext.success(params);
            return true;
        }else if(action.equals("imageShow")){ //图片轮播
            String params = args.getString(0);
            callbackContext.success(params);
            return true;
        }else if(action.equals("goLogin")){ //native skip loginActivity
            callbackContext.success("login");
            return true;
        }else if(action.equals("showToast")){ //show tooltip
            callbackContext.success("toast");
            return true;
        }

        // news detail page 
        if (action.equals("topicDetail")) { //跳转点师详情
            callbackContext.success(args.getString(0));
            return true;
        }else if(action.equals("getArticleDetail")) { //获取资讯详情id
            callbackContext.success(args.getString(0));
            return true;
        }else if(action.equals("commentsList")){ //跳转资讯详情评论列表
            String articleId = args.getString(0);
            callbackContext.success(articleId);
            return true;
        }else if(action.equals("refreshCommentNum")){ //通知移动端跟新评论数量
            String articleId = args.getString(0);
            callbackContext.success(articleId);
            return true;
        }
        return false;
    }

    

}
