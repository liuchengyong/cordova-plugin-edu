#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface EduPlugin : CDVPlugin <UIAlertViewDelegate>{}

  // 公共的方法
  -(void)getPageInit:(CDVInvokedUrlCommand *)command;//获取页面初始化数据
  -(void)imageShow:(CDVInvokedUrlCommand *)command;//图片轮播
  -(void)goLogin:(CDVInvokedUrlCommand *)command; //去登录页面
  -(void)showToast:(CDVInvokedUrlCommand *)command;//客户端的Toast 
  -(void)doShare:(CDVInvokedUrlCommand *)command;//set share

 //  资讯详情页
  -(void)commentsList:(CDVInvokedUrlCommand *)command; //跳转资讯评论列表
  -(void)jumpToApp:(CDVInvokedUrlCommand *)command; //跳转点师详情
  -(void)refreshCommentNum:(CDVInvokedUrlCommand *)command; //通知移动端跟新评论数量

@end
