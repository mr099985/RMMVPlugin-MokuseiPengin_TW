//=============================================================================
// MPP_CallEventPage.js
//=============================================================================
// Copyright (c) 2015 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.1】添加插件命令以直接使用指定事件頁面的內容。
 * @author 木星ペンギン( 翻譯 : ReIris )
 *
 * @help 插件命令 :
 *   CallEventPage n           # 呼叫第 n 頁上的事件內容。
 *   CallEventPage n id        # 當指定事件 ID 時，將為該事件的第 n 頁。
 * 
 * ● 使用事件指定頁上的執行內容與使用 [ 一般劇情 ] 的執行過程相同。
 * 
 * ● 如果您指定事件 ID 並使用另一個事件的執行內容，
 *   則[自主移動]中的[該事件]等將被調用。
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 */

(function() {

//1722
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'CallEventPage') {
        var eventId = Number(args[1]) || this._eventId;
        if (this.isOnCurrentMap() && eventId > 0) {
            var event = $dataMap.events[eventId];
            var index = Number(args[0]) - 1;
            var page = event && index >= 0 ? event.pages[index] : null;
            if (page) this.setupChild(page.list, eventId);
        }
    }
};


})();
