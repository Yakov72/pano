function ALXErrorSendClass()
{
        function strip_tags(str){
                return str.replace(/<\/?[^>]+>/gi,'');
        }

        var errSendMsg = ALXerrorSendMessages;

        var ErrorText = {'start':'','body':'','end':''};
        var BeforeChars = 50;
        var AfterChars = 50;
        var _select;

        function getSelectedText(){
                var str_select,text_end,_end,_start,text_start;
                if(window.getSelection){
                        str_select=window.getSelection();
                }
                else if (document.getSelection){
                        str_select=document.getSelection();
                }
                else if(document.selection){
                        str_select=document.selection;
                }

                if(str_select.getRangeAt){
                        if(document.getSelection()){
                                _select=document.getSelection();
                        }
                        else if (window.getSelection()){
                                _select=window.getSelection();
                        }
                        _select=_select.toString();
                        _start=document.createRange();
                        _start.setStartBefore(str_select.getRangeAt(0).startContainer);
                        _start.setEnd(str_select.getRangeAt(0).startContainer,str_select.getRangeAt(0).startOffset);
                        text_start=_start.toString();

                        //end text
                        _end=str_select.getRangeAt(0).cloneRange();
                        _end.setStart(str_select.getRangeAt(0).endContainer,str_select.getRangeAt(0).endOffset);
                        _end.setEndAfter(str_select.getRangeAt(0).endContainer);
                        text_end=_end.toString();
                        text_start=text_start.substr(text_start.length-BeforeChars,text_start.length);
                        text_end=text_end.substr(0,AfterChars);
                        //start text
                }

                if(str_select.createRange){
                        _select=str_select.createRange().text;
                        //start text
                        _start=str_select.createRange();
                        _start.moveStart("character",-BeforeChars);
                        _start.moveEnd("character",-_select.length);
                        text_start=_start.text;

                        //end test
                        _end=str_select.createRange();
                        _end.moveStart("character",_select.length);
                        _end.moveEnd("character",AfterChars);
                        text_end=_end.text;
                        document.selection.empty();
                }

                if(!_select.length){
                        return false;
                }
                if(_select.length>250){

                        var content_LongText='\
                                <div id="altasib_SendError_LongText">\
                                                <div style="color: red; font-size: 20px"><b>'+errSendMsg.LongText+'</b></div><br /><br />'+errSendMsg.LongText2+'\
                                </div>';

        BX.AlxErrDialog_DLongTxt = new BX.PopupWindow("altasib_ErrorWindow_glngtxt", window.body, {
                         content: content_LongText,
                         closeIcon: {right: "20px", top: "10px"},
                         titleBar: "",
                         zIndex: 0,
                         offsetLeft: 0,
                         offsetTop: 0,
                         draggable: {restrict: false},
                         overlay: {backgroundColor: 'black', opacity: '80' },
                         height:'130',
                         width:'350',
                         buttons: [
                          new BX.PopupWindowButton({
                                  text: errSendMsg.close,
                                  className: "webform-button-link-cancel",
                                  events: {click: function(){
                                   this.popupWindow.close();
                                  }}
                          })
                         ]
                        });

                        BX.AlxErrDialog_DLongTxt.show();
                        return false;
                }
                ErrorText.start=text_start;
                ErrorText.body=_select;
                ErrorText.end=text_end;

        }
        function trimLeft(str){
                var firstSimb;
                str.substring(0 ,1)==" "?firstSimb=" ":firstSimb="";
                return firstSimb+str.replace(/^\s+/,'');
        }

        function trimRight(str){
                var lastSimb;
                str.substring(str.length-1,str.length)==" "?lastSimb=" ":lastSimb="";
                return str.replace(/\s+$/,'')+lastSimb;
        }

        function trimBoth(str){
                return trimRight(trimLeft(str));
        }

        function trimSpaces(str){
                return str.replace(/\s{2,}/g,' ');
        }

        function esErrorSend(){

                var new_href=window.location.href;
                var hashpos=new_href.indexOf('#'),hash='';
                if(hashpos!=-1){
                        hash=new_href.substr(hashpos);
                        new_href=new_href.substr(0,hashpos);
                }
                var url=new_href;

                var oData={"AJAX_CALL":"Y","ERROR_SEND":"Y","ERROR_TEXT_START":trimBoth(ErrorText.start),"ERROR_TEXT_BODY":document.getElementById('error_body').innerHTML,"ERROR_TEXT_END":trimBoth(ErrorText.end),"COMMENT":document.getElementById("error-comment").value,"ERROR_URL":window.location.href};
                BX.ajax.post(url,oData,function(res){

                        BX.AlxErrDialog.close();
                        if(trim(res)!="OK!")
                                document.getElementById('popup-window-content-altasib_ErrorWindow').innerHTML = content_no.replace("#ERROR#",res);
                        else
                                document.getElementById('popup-window-content-altasib_ErrorWindow').innerHTML = content_ok.replace("#ERROR#",content_ok);
                        BX.AlxErrDialog_ok.show();
                });
        }
        function trim(string){
                return string.replace(/(^\s+)|(\s+$)/g,"");
        }

        var content_no='<div id="altasib_SendErrorOk"><div style="color: red; font-size: 20px"><b>'+errSendMsg.senderror+'</b></div><span style="font-size:12px;color:#7d7d7d"><br />#ERROR#</span></div>';
        var content_ok='\
        <div id="altasib_SendErrorOk">\
                <div width="100%" class="no-bootom-border" style="padding-top:8px !important;"><span style="color:green;font-size:20px"><b>\
                '+errSendMsg.text_ok+'</b></span><span style="font-size:12px;color:#7d7d7d"><br /><br />'+errSendMsg.text_ok2+'</span></div>\
        </div>';

BX.AlxErrDialog_ok = new BX.PopupWindow("altasib_ErrorWindow_ok", window.body, {
                 content: content_ok,
                 closeIcon: {right: "20px", top: "10px"},
                 titleBar: "",
                 zIndex: 0,
                 offsetLeft: 0,
                 offsetTop: 0,
                 draggable: {restrict: false},
                 overlay: {backgroundColor: 'black', opacity: '80' },
                 height:'130',
                 width:'350',
                 buttons: [
                  new BX.PopupWindowButton({
                          text: errSendMsg.close,
                          className: "webform-button-link-cancel",
                          events: {click: function(){
                           this.popupWindow.close();
                          }}
                  })
                 ]
                });


        var contentErr='\
<div id="send-error">\
        <br /><span style="font-size:13px;color: #777"><b>'+errSendMsg.head+':</b></span>\
        <div style="border:1px solid #d1d1d1;background-color:#fafafa;width:470px;max-width: 100%;padding:8px;margin:7px 0px 13px 0px;min-height:55px;color:#7d7d7d;font-size:12px;box-sizing:content-box;">\
        <span id="error_start"></span><font color="red" id="error_body"></font><span id="error_end"></span>\
        </div>\
        <small style="color:#7d7d7d">'+errSendMsg.comment+':</small>\
        <div style="width:470px;max-width: 100%;min-height:55px;padding:8px;border:1px solid #4b4b4b;margin:3px 0px 3px 0px;box-sizing:content-box;"><textarea name="comment" id="error-comment" rows=3 cols=5 style="width:100%;border:0px;min-height:55px;padding:0px;min-height:55px;"></textarea></div>\
</div>';

         BX.AlxErrDialog = new BX.PopupWindow("altasib_ErrorWindow", window.body, {
                 content: contentErr,
                 closeIcon: {right: "20px", top: "10px"},
                 titleBar: {content: BX.create("div", {html: errSendMsg.footer, 'props': {'className': 'altasib_ErrorTitleBar'}})},
                 //'<div class="altasib_ErrorTitleBar"><span style="font-size:16px;color:#143f6d">'+errSendMsg.footer+'</span></div>',

                 zIndex: 0,
                 offsetLeft: 0,
                 offsetTop: 0,
                 draggable: {restrict: false},
                 overlay: {backgroundColor: 'black', opacity: '80' },
                 buttons: [
                  new BX.PopupWindowButton({
                          text: errSendMsg.ButtonSend,
                          className: "popup-window-button-accept",
                          events: {click: function(){
                        esErrorSend();
                          }}
                  }),
                  new BX.PopupWindowButtonLink({
                          text: errSendMsg.cancel,
                          className: "webform-button-link-cancel",
                          events: {click: function(){
                          this.popupWindow.close();
                          }}
                  })
                 ]
                });




        BX.bind(document,'keydown',altasib_error);

        function altasib_error(event){
                var kCode=window.event?window.event.keyCode : (event.keyCode?event.keyCode : (event.which?event.which : null));
                var fCode=window.event?window.event.ctrlKey : event.ctrlKey;

                if(kCode==13 && fCode){
                        if(BX.AlxErrDialog.isOpen){
                                esErrorSend();
                        }
                        else{
                                if(getSelectedText() !== false){
                                        BX.AlxErrDialog.show();

                                        document.getElementById('error_start').innerHTML = ErrorText.start;
                                        document.getElementById('error_body').innerHTML=ErrorText.body;
                                        document.getElementById('error_end').innerHTML=ErrorText.end;
                                }
                        }
                        return false;
                }
        }
}
BX.ready(function(){
        if(typeof ALXErrorSendClass=='function')ALXErrorSend=new ALXErrorSendClass();
});
