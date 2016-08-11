/*
	By:HNZ
	Date:2015-8-16 
*/
// (function(win,doc){
// 	//自定义相对设计稿文字大小100px,方便计算
// 	var dSize = 100;
// 	//自定义设计稿宽度
// 	var dWidth = 1080;
// 	var docEl = doc.documentElement;
// 	//计算根文字大小,添加到html上,页面布局相采用rem单位
// 	var reFont = function (){
// 		var clientWidth = docEl.clientWidth>414?414:docEl.clientWidth;
// 		var scale = clientWidth/dWidth;
// 		scale = scale>0.5?0.5:scale;
// 		var size = dSize * scale;
// 		doc.querySelector('html').style['fontSize'] = size + "px";
// 		console.log(size)
// 	}
// 	var rotateScreen=function (){
// 		reFont();
// 		// if(win.orientation==180||win.orientation==0){
// 		// 	rfont();
// 		// }else if(win.orientation==90||win.orientation==-90){
// 		// 	rfont();
// 		// }
// 	}
// 	var loading=function(){
// 		reFont();
// 	}
// 	}(window,document))
	// win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize",rotateScreen, false);
	// document.addEventListener('DOMContentLoaded',loading, false);


// 	(function(){
//         // return;
//         var dpr = scale =1;
//         var isIPhone = win.navigator.appVersion.match(/iphone/gi);
//         var devicePixelRatio = win.devicePixelRatio;
//         if (isIPhone) {
//             // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
//             if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
//                 dpr = 3;
//             } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
//                 dpr = 2;
//             } else {
//                 dpr = 1;
//             }
//         } else {
//             // 其他设备下，仍旧使用1倍的方案
//             dpr = 1;
//         }
//            scale = 1 / dpr;
           
//            // 
//         var metaEl = "";
//         //<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1,minimum-scale=1, width=device-width">
//         metaEl = doc.createElement('meta');
//         metaEl.setAttribute('name', 'viewport');
//         metaEl.setAttribute('content','user-scalable=no,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ',width=device-width');
//         if (docEl.firstElementChild) {
//             docEl.querySelector('head').appendChild(metaEl);
//         }
//     })()
// }(window,document))


(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * ( clientWidth/320 ) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
