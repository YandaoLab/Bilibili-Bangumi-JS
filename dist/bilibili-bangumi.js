/*! Bilibili-Bangumi-API v1.0.0 | Hans362 (https://hans362.cn) | https://bilibili-bangumi-api.vercel.app | MIT License */"use strict";var bangumiJson=(apiUrl||"https://bilibili-bangumi-api.vercel.app/api")+"?vmid="+userId+"&token="+(new Date).getTime()+Math.random();$.getJSON(bangumiJson,function(t){$.each(t.data.list,function(t,a){var i=a.follow_status/a.formal_ep_count*100;$("#bgm-collection").append('\n        <a class="bgm-item" href="'+a.url+'" target="_blank">\n            <div class="bgm-item-thumb"\n                style="background-image:url('+a.cover+')"></div>\n            <div class="bgm-item-info">\n                <span class="bgm-item-title main">'+a.title+'</span>\n                <span class="bgm-item-title">'+a.title+'</span>\n                <div class="bgm-item-statusBar-container">\n                    <div class="bgm-item-statusBar" style="width:'+i+'%"></div>\n                    进度：'+a.follow_status+" / "+a.formal_ep_count+"\n                </div>\n            </div>\n        </a>\n        ")})});