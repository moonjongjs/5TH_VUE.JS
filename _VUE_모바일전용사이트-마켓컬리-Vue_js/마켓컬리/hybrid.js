var appWebCheck=null;var deviceCheck=null;var Hybrid=new function(){this.platform='';function _exe(){console.log('hybrid function is called : '+arguments[0]);try{console.log('hybrid platform _exe : '+this.platform);if(this.platform==='ios'){var param=arguments[1];if(param===undefined||null===param){param={}}
    window.location='hybrid://'+arguments[0]+'?'+encodeURIComponent(JSON.stringify(param))}else if(this.platform==='android'){var functionCall=arguments[0];if(arguments[1]===undefined||null==arguments[1]){functionCall=functionCall+'()'}else{functionCall=functionCall+'(\''+JSON.stringify(arguments[1])+'\')'}
    console.log('hybrid android : '+functionCall);eval(functionCall)}else{console.log('no suport platform')}}catch(e){console.error('hybrid function error : '+e)}}
    function _init(){console.log('hybrid init userAgent : '+navigator.userAgent.toLowerCase());try{if(navigator.userAgent.indexOf('APP_AUTOBUILDER_IOS')!=-1&&(navigator.userAgent.toLowerCase().indexOf('iphone')!=-1||navigator.userAgent.toLowerCase().indexOf('ipad')!=-1)){this.platform='ios'}else if(navigator.userAgent.indexOf('APP_AUTOBUILDER_ANDROID')!=-1&&navigator.userAgent.toLowerCase().indexOf('android')!=-1){this.platform='android'}
        console.log('hybrid platform : '+this.platform)
        appWebCheck=this.platform;if(navigator.userAgent.toLowerCase().indexOf('iphone')!=-1||navigator.userAgent.toLowerCase().indexOf('ipad')!=-1){deviceCheck='ios'}else if(navigator.userAgent.toLowerCase().indexOf('android')!=-1){deviceCheck='android'}}catch(e){console.error('hybrid function error : '+e)}}
    return{exe:_exe,init:_init}};Hybrid.init()

// 커스텀 앱전용 
$(document).ready(function () {
     if(appWebCheck === undefined && deviceCheck === "ios"){
        if ($(location).attr('href').indexOf("/goods/view.php") !== -1) {
            var windowPos = 0;
            var target = $("input[type='text'],input[type='number'],select");
            target.bind("focus",function(){
                windowPos = $(window).scrollTop();
                $("body").css({
                    "position":"fixed",
                    top:-windowPos
                });
            });
            target.bind('blur', function () {
                $("body").removeAttr("style");
                $("html,body").scrollTop(windowPos);
            });
        }
    }
});