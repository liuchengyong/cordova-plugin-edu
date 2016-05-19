#import "EduPlugin.h"
@implementation EduPlugin

/**
* 
*  公用方法
*
*/
-(void)getPageInit:(CDVInvokedUrlCommand *)command  //获取页面初始化数据
{
   NSArray *arguments = command.arguments;
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}


-(void)imageShow:(CDVInvokedUrlCommand *)command  // 图片轮播
{
   NSArray *arguments = command.arguments;
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

-(void)goLogin:(CDVInvokedUrlCommand *)command //去登录页面
{
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"login"];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}


-(void)showToast:(CDVInvokedUrlCommand *)command //客户端的Toast 
{
   NSArray *arguments = command.arguments;
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

/**
* 
*资讯详情页
*
*/

-(void)commentsList:(CDVInvokedUrlCommand *)command // 跳转资讯评论列表
{
   NSArray *arguments = command.arguments;
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

-(void)jumpToApp:(CDVInvokedUrlCommand *)command // 跳转点师详情
{
    NSArray *arguments = command.arguments;
    CDVPluginResult* result;
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

-(void)refreshCommentNum:(CDVInvokedUrlCommand *)command //  通知移动端跟新评论数量
{
   NSArray *arguments = command.arguments;
   CDVPluginResult* result;
   result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:arguments.firstObject];
   [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
