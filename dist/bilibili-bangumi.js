/*! Bilibili-Bangumi-API v1.0.0 | Hans362 (https://hans362.cn) | https://bilibili-bangumi-api.vercel.app | MIT License */"use strict";var bangumiJson=(apiUrl||"https://bilibili-bangumi-js.vercel.app/api")+"?vmid="+userId+"&token="+(new Date).getTime()+Math.random();$.getJSON(bangumiJson,function(i){$.each(i.data.list,function(i,s){var t=0;s.is_finish?t=s.total_count:s.is_started&&"即将开播"!=s.new_ep.index_show?(t=s.new_ep.title,$.isNumeric(t)||(t=s.total_count)):t=0,t<0&&(t=0);var e=0;s.is_started?0<=s.progress.indexOf("已看完")?e=t:void 0!==s.progress&&-1==s.progress.indexOf("PV")?(e=s.progress.substring(s.progress.indexOf("第")+1,s.progress.indexOf("话")),$.isNumeric(e)||(e=t)):e=0:e=0;var n=e/t*100,a=s.cover.replace("http","https");$("#bgm-collection").append('\n        <a class="bgm-item" href="'+s.url+'" target="_blank">\n            <div class="bgm-item-thumb"\n                style="background-image:url('+a+')"></div>\n            <div class="bgm-item-info">\n                <span class="bgm-item-title main">'+s.title+'</span>\n                <span class="bgm-item-title">'+s.evaluate+'</span>\n                <div class="bgm-item-statusBar-container">\n                    <div class="bgm-item-statusBar" style="width:'+n+'%"></div>\n                    进度：'+e+" / "+t+"\n                </div>\n            </div>\n        </a>\n        ")})});