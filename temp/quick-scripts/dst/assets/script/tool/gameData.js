
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/gameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7487f4XLFFFn6UYutYNkRUg', 'gameData');
// script/tool/gameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.gameData = void 0;
var StorageUtils_1 = require("./StorageUtils");
var onCloseFinishCb = null;
var onClosefailCb = null;
var GameDataClass = /** @class */ (function () {
    function GameDataClass() {
        this.levelAll = 30;
        this.userData = {
            isClause: false,
            tishiNum: 1,
            level: 1,
            isHall: false,
            isGudie: false,
            finishLevel5: false,
        };
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }
    GameDataClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameDataClass();
        }
        return this._instance;
    };
    GameDataClass.prototype.storageData = function () {
        StorageUtils_1.StorageUtils.setStorageJSON(storage.gamedata, this.userData);
    };
    GameDataClass.prototype.setVideoFailCb = function (cb) {
        onClosefailCb = null;
        onClosefailCb = cb;
    };
    //看广告
    GameDataClass.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            jsb.reflection.callStaticMethod("UnityMgr", "loadReward"); //全屏视频;
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    GameDataClass.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //关闭banner
    GameDataClass.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //打开插屏
    GameDataClass.prototype.showInterst = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //打开评分
    GameDataClass.prototype.showPingFen = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    GameDataClass._instance = null;
    return GameDataClass;
}());
exports.gameData = GameDataClass.getInstance();
var storage;
(function (storage) {
    storage["gamedata"] = "gamedata";
})(storage = exports.storage || (exports.storage = {}));
var sound;
(function (sound) {
    sound["bgm"] = "bgm";
    sound["click"] = "click";
    sound["correct"] = "correct";
    sound["err"] = "err";
    sound["fail"] = "fail";
    sound["win"] = "win";
})(sound = exports.sound || (exports.sound = {}));
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieo----------------------------");
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb");
    onClosefailCb();
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFFOUMsSUFBSSxlQUFlLEdBQWUsSUFBSSxDQUFDO0FBQ3ZDLElBQUksYUFBYSxHQUFlLElBQUksQ0FBQztBQUNyQztJQVlJO1FBTUEsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVE7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQztRQWJFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBWmEseUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBbUJELG1DQUFXLEdBQVg7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLEVBQWM7UUFDekIsYUFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxLQUFLO0lBQ0wsaUNBQVMsR0FBVCxVQUFVLFFBQW9CO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdC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LENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtTQUV4RDtJQUNMLENBQUM7SUExRmMsdUJBQVMsR0FBa0IsSUFBSSxDQUFDO0lBNkZuRCxvQkFBQztDQS9GRCxBQStGQyxJQUFBO0FBRVUsUUFBQSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRWxELElBQVksT0FFWDtBQUZELFdBQVksT0FBTztJQUNmLGdDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFFbEI7QUFFRCxJQUFZLEtBT1g7QUFQRCxXQUFZLEtBQUs7SUFDYixvQkFBVyxDQUFBO0lBQ1gsd0JBQWUsQ0FBQTtJQUNmLDRCQUFtQixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0lBQ3ZELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUE7QUFDL0IsQ0FBQyxDQUFBO0FBR0QsMEJBQTBCO0FBQzFCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHO0lBQzNCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsSUFBSTtJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQTtJQUNyRSxhQUFhLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9nbG9iYWxcIjtcbmltcG9ydCB7IFN0b3JhZ2VVdGlscyB9IGZyb20gXCIuL1N0b3JhZ2VVdGlsc1wiO1xuXG5sZXQgb25DbG9zZUZpbmlzaENiOiAoKSA9PiB2b2lkID0gbnVsbDtcbmxldCBvbkNsb3NlZmFpbENiOiAoKSA9PiB2b2lkID0gbnVsbDtcbmNsYXNzIEdhbWVEYXRhQ2xhc3Mge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lRGF0YUNsYXNzID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZURhdGFDbGFzcyB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lRGF0YUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGxldmVsQWxsOiBudW1iZXIgPSAzMDtcbiAgICB1c2VyRGF0YTogYW55ID0ge1xuICAgICAgICBpc0NsYXVzZTogZmFsc2UsICAgIC8v5piv5ZCm5omT5byA6L+H6ZqQ56eB5Y2P6K6uICAgIFxuICAgICAgICB0aXNoaU51bTogMSwgICAgICAgIC8v5o+Q56S65qyh5pWwXG4gICAgICAgIGxldmVsOiAxLCAgICAgICAgICAgLy/lvZPliY3lhbPljaFcbiAgICAgICAgaXNIYWxsOiBmYWxzZSwgICAgICAvL+aYr+WQpui/lOWbnui/h+Wkp+WOhVxuICAgICAgICBpc0d1ZGllOiBmYWxzZSwgICAgICAvL+aYr+WQpuaJk+W8gOi/h+aWsOaJi+W8leWvvFxuICAgICAgICBmaW5pc2hMZXZlbDU6IGZhbHNlLCAgLy/mmK/lkKblrozmiJDov4fnrKw15YWzXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBTdG9yYWdlVXRpbHMuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICBvbkNsb3NlZmFpbENiID0gbnVsbDtcbiAgICAgICAgb25DbG9zZWZhaWxDYiA9IGNiO1xuICAgIH1cblxuIFxuICAgIC8v55yL5bm/5ZGKXG4gICAgc2hvd1ZpZGVvKGZpbmlzaENiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLeeci+W5v+WRilwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd1NoaVBpbmdcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBudWxsO1xuICAgICAgICAgICAgb25DbG9zZUZpbmlzaENiID0gZmluaXNoQ2I7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJVbml0eU1nclwiLCBcImxvYWRSZXdhcmRcIik7Ly/lhajlsY/op4bpopE7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ109IGZpbmlzaENiO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5pc2hDYigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL+aJk+W8gGJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93YmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfSU9TID09IGNjLnN5cy5vcykge1xuXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLy/miZPlvIDmj5LlsY9cbiAgICBzaG93SW50ZXJzdCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dDaGFwaW5nXCIsIFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAvL+aJk+W8gOivhOWIhlxuICAgIHNob3dQaW5nRmVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwib3BlblBpbmdGZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICB9IFxuICAgIH1cblxuICBcbn1cblxuZXhwb3J0IGxldCBnYW1lRGF0YSA9IEdhbWVEYXRhQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gc3RvcmFnZSB7XG4gICAgZ2FtZWRhdGEgPSBcImdhbWVkYXRhXCIsXG59XG5cbmV4cG9ydCBlbnVtIHNvdW5kIHtcbiAgICBiZ20gPSBcImJnbVwiLFxuICAgIGNsaWNrID0gXCJjbGlja1wiLFxuICAgIGNvcnJlY3QgPSBcImNvcnJlY3RcIixcbiAgICBlcnIgPSBcImVyclwiLFxuICAgIGZhaWwgPSBcImZhaWxcIixcbiAgICB3aW4gPSBcIndpblwiLFxufVxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VWZGllby0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddKClcbn1cblxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9mYWlsQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coXCJvbkNsb3NlVmRpZW9mYWlsQ2JvbkNsb3NlVmRpZW9mYWlsQ2JvbkNsb3NlVmRpZW9mYWlsQ2JcIilcbiAgICBvbkNsb3NlZmFpbENiKCk7XG59Il19