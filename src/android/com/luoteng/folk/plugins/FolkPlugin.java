/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package com.luoteng.folk.plugins;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;

/**
 * 跳转的plugin
 * @author mengxiangcheng
 *
 */
public class FolkPlugin extends CordovaPlugin {

    static String TAG = "FolkPlugin";

    public boolean execute(String action, CordovaArgs args, final CallbackContext callbackContext) throws JSONException {

        if (action.equals("topicDetail")) { //跳转点师详情
            String topicId = args.getString(0);
            callbackContext.success();
            return true;
        }else if(action.equals("articleId")) { //获取资讯详情id
            callbackContext.success("80A90D09-4984-4BFD-92FA-612C0AA197E7");
            return true;
        }else if(action.equals("imageShow")){ //图片轮播
            String params = args.getString(0);
            callbackContext.success(params);
            return true;
        }else if(action.equals("isDebug")){ //是否生产环境
            callbackContext.success("true");
            return true;
        }else if(action.equals("focusWeChat")){ //关注微信公众号
            callbackContext.success("success");
            return true;
        }else if(action.equals("getPostUrl")){ //获取服务器的域名端口
            callbackContext.success("http://test.zhid58.com:8080");
            return true;
        }else if(action.equals("doShare"){ //第三方分享
            String type = args.getString(0);
            callbackContext.success(type);
            return true;
        }else if(action.equals("commentsList"){ //跳转评论列表
            String articleId = args.getString(0);
            callbackContext.success(articleId);
            return true;
        }
        return false;
    }


}
