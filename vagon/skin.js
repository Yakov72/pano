// Garden Gnome Software - Skin
// Pano2VR 6.1.6/17950
// Filename: mag6.ggsk
// Generated 2026-03-20T05:42:14

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_main_control=document.createElement('div');
		el.ggId="Container main control";
		el.ggDx=-2.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -2px;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 379px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_main_control.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_main_control.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.style.opacity='1';
			me._container_main_control.style.visibility=me._container_main_control.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._glow.style[domTransition]='none';
			} else {
				me._glow.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._glow.style.opacity='1';
			me._glow.style.visibility=me._glow.ggVisible?'inherit':'hidden';
		}
		me._container_main_control.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.style.opacity='0.5';
			me._container_main_control.style.visibility=me._container_main_control.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._glow.style[domTransition]='none';
			} else {
				me._glow.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._glow.style.opacity='0';
			me._glow.style.visibility='hidden';
		}
		me._container_main_control.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._glow=document.createElement('div');
		els=me._glow__img=document.createElement('img');
		els.className='ggskin ggskin_glow';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="glow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : hidden;';
		hs+='width : 378px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._glow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._glow.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._glow);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_info';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAGZklEQVRIibWXX2gU2x3Hv+fMv92dnbu7WZPszdLoPkSR1hTjzSYiKtsHSVMvF0K5BC4l+CKU+lDkCoLghdIHH1uf8l6h1mqlFhQKVbxUpA2RmEQjbRENEtbs/5md4zozO6cP7oyzk10tF3rgy5kZzp7P73fO+f1+ewg+3Eif3nvmgXfep//o5B+C9hLOnDkzsGfPni9EUTxGCPk+pfR7lNKkKIp1WZY3FUVZkyTpW1VVb8zOzlb/V3gYRDvynsmlS5d+IQjCT9Pp9GcDAwNIpVLQNA3RaBQAYNs2GGMwDAO6rv8jGo1enZ2d/c2H4EFvaUgCAHr69OmxXC73NaX0y/HxcWIYBp4/f46trS0Ui0WYpglN0zAyMoJcLoeDBw8im81ieXmZq6r6u0gk8u'+
			'tCofDvfnASAoqdXlhYWBjbt2/fN7lcbiYWi+Hx48d4+vQpIpEIFEVBu93u8spxHNi2jcnJSZw8eRKO4+Dly5d/lmX5nGeA2AMsBMC+xsbGvs7lcjOUUty7dw+6rmN4eNiHnThxArOzs7hx4wbu378PQRDAOcfa2hpKpRLm5+cxOjr6xYsXLxoAFhDYy7DHUkcyAOXChQs/lyRpTlVVPHz4EKZpIplMQhAEX/l8HpVKBfl8HpRSAIAgCEgkEtje3sbVq1ehKAoYYz+7ffv2Lz14cJ+DHssA5MnJySFN0z4fHx8nKysr0HUdmqaFzw6ePHmC7e1tLC0t+WCvaZqGYrGIW7duYWJigjDG5u/cuTMghjz3wL7nhULhx8PDwz80DAMbGxsYGhraAW6327h+/XrXN1mWAQCcc9+ApaUlTE9PI5FITOm6PufBw4fMg4vJZHIq'+
			'lUrh2bNnUBSlyyMAoJSCUopTp06BkHfnd3FxEaZpwnEcOI4Dzjk45zBNEw8ePMCRI0dQLpePB+O350GTZXlvKpXC1tYWIpHIuz0iBJRSSJK0YxUAoFKpQNd1MMbw9u1bWJYFy7JACMH6+jpisRhardaB8LILIVFRFDOapqFcLmNwcBCEEIiiCEopLMtCvV4HANTrdSiKAgCQJAmSJPlL7nkejUZRLBYhSRIsyxoNL7ufUDoikiRpsVgMjDFIkgRRFOE4DhqNBt68eePHN2MMjuMAgG9cEMw5hyRJYIyBEALbtpNBz8NGEACEUmpwzj+Jx+PgnIMxhkajAc45BEHwIc1m0z9kXvgF4a7rwrZtaJoGxhg45/VwkukqHu+2lxRt2/5kaGgIpVLJhwbBAGBZFmzb9uFhzwkhaLVayGQyMAwDnPPN979+b0TXs+u6/zFNE9'+
			'lsFvV63Z84LEVR/L0OJp/gGMuysHfvXtRqNRBC1sLwHfW5Wq0+ajabmJ6ehuu64Jz3hMdiMaiqClVVQSn1wZ4RnHNYloX9+/ejVqvBdd1vaQAUFgDwmzdv/q1YLK6PjIzg6NGjYIyBUuqHmxfbo6OjyGQyyGQy/qELem4YBvL5PERRRKVS+We73f4TDQHdgDgAvry8rFer1b8+evSIz8/PI5vNwjRNH+yFU6PRgGmaYIyhs12+54ZhIJ1OY2pqCqurq1wQhD+cPXu2StDJZOgUkYBkvC+p5MqVK786dOjQTwRBwOLiIorFIuLxOIB3SSXcdu/eDdd1UavVkEwmMTMzg3q9jlevXl05d+7cAgAejOl+IgCILMvP0+n0p4ODg3sKhQKazSY2NjYAAIlEAslkEul0GpqmQVVVGIaBarWKiYkJHDt2DNVqFZubm3+xbfvi'+
			'3bt3Kx48HOfB3tf6+rouCMIzTdPir1+/Hjt+/Dg5fPgwIpEIDMNAuVxGuVwG5xwDAwM4cOAACoUCdu3ahZWVFa7r+u8ZY99cvHjxX96ZCiaWrmoWkJfnfYMuX778VSqVmslkMj+Ix+NQVdVPMN5/t1qthlqthlKptOy67h/Pnz//WwBO8Dz1yutBA/zqhvdplwBAPp9Pzs3N/SiZTH5GCBlzXfdT13W1drutO46z5bru01ar9ffV1dWb165d2wbQ7siD90ytYgDYC+4b0GnBKGl3vLM7cgJ9VxShM6kX026nbwcm5YFJ/UrXB+555oTkedsF9uDATgPCse/BuyIAO/NDG91G9AUH4WEvgu/9wMExYQNc7ExYO9p3urF8AB40ole6/ig8+L3vXS3UetWGj14Y+8F7GREe/3+7pX7XsR8FBtt/AU+J3uK1FB/rAAAAAE'+
			'lFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._info__img.ggDownSrc=hs;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			me._screen.ggVisible = !me._screen.ggVisible;
			var flag=me._screen.ggVisible;
			me._screen.style[domTransition]='none';
			me._screen.style.visibility=((flag)&&(Number(me._screen.style.opacity)>0||!me._screen.style.opacity))?'inherit':'hidden';
			me._screen.style[domTransition]='none';
			me._screen.ggParameter.sx=1;me._screen.ggParameter.sy=1;
			me._screen.style[domTransform]=parameterToTransform(me._screen.ggParameter);
			me._screen.style[domTransition]='none';
			me._screen.ggParameter.a="0";
			me._screen.style[domTransform]=parameterToTransform(me._screen.ggParameter);
		}
		me._info.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=-4;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			me._txt_info.style[domTransition]='none';
			me._txt_info.style.opacity='1';
			me._txt_info.style.visibility=me._txt_info.ggVisible?'inherit':'hidden';
		}
		me._info.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=0;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_info.style[domTransition]='none';
			} else {
				me._txt_info.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_info.style.opacity='0';
			me._txt_info.style.visibility='hidden';
		}
		me._info.onmousedown=function (e) {
			me._info__img.src=me._info__img.ggDownSrc;
		}
		me._info.onmouseup=function (e) {
			me._info__img.src=me._info__img.ggNormalSrc;
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._info);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_in';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgCAYAAADjaQM7AAAFXUlEQVRIia2XX0xTVxzHP71txdJaBKGOMhiE0HQhAWaIEeIwKpl/Eo0snVlNFhcryfbgiCMh2Z6NG8ZEQ3xhk8R/JMbERsIrBH3BMI242MbESgppKayLtlQs1paePXAvu14psukv+eX8Hu79fc73d37nnHt1rM10OWLFRI44Z5LVntFpYvV7wm63f242m792Op1liUQiXlNT8/vFixfvrCH3WxAJ0ANGIA9YD5gUt1qt52Q1wmg0ioqKCtHa2ircbve1tSpTK5FUQCWWJEmSstnsc4Dy8nIOHDiAzWbjxYsXjI+Po9fr2bFjB2azecPJkyfnAQzvUKZA9PKzSixls9m/AE6fPk1nZyc6nY5oNIrNZiMWi3H9+nWePHlCY2Pji1VELUMMctnMQAGwCd'+
			'gMlDU0NIQAceHCBSGEELFYTDx48EAcOXJE3L9/X0SjURGPx0V/f7+4du2aOHXqlH+lMqobQFFjVLvJZNqwsLDg27lzJ4ODg8TjcSRJYmpqiqamJkZHR7Hb7SwsLDAzM0MgEODYsWNs3bp1R64yastnBNYBRqfT+e34+Djt7e3EYjGCwSDZbJZIJALA48ePmZmZ4dWrV9hsNoxGI3NzczQ0NOxZCabuQoNGncFqtX5qMpmwWq1EIhHOnz+P1+tdftnj8QDQ1tZGR0cHJpOJmzdvkslk6rQwNUhSAZdVVldXJ/1+P8lkEpPJhMfj4ejRo0SjUdrb2+nv76esrAydTkdpaSnPnj0jGo2STCanVlOmbXs9IAWDwcHKysqvAoEADoeDoqIi8vPzsVgsANTU1FBRUUEmk8FsNhMKhZibmyMcDo9JOdZMC132kZER365du3j4'+
			'8CGRSASLxYLBYCAvLw+3243BYECSJEpKSgiHw/j9fmZnZxkbG7uqXwGgVqKs1bIyQDcxMTGyfft2VzAYZNOmTdjtdgoKCmhqaqK0tJTi4mLC4TDd3d1YLBaGhob2xOPxCYMGtNIoVKMAxOzsrLWwsBCn00kgEGB6ehqHw7HcNF6vl9u3b7Nx40aGh4f7gsHgEPJMtQDtQauACgsKCnqAto6Ojt/cbjcnTpzosdlsHD9+nM2bNzM6OorX68Xn82EymXj06NFBn8/3nTJhdWJ1M6g38jqHw1GUTqcfTk5Ozt+4ccNSVVVFY2PjEeBPIFtdXV1XX19/cH5+vvjly5eJeDze6/f77wIZYBHIKkA1YD1gATYCxcBHdXV19Z2dncLlconh4WEhhBA9PT1i3759vwA1QDVQCZQBNqBQzpHH0raRFEEGTVMYVK5va2v7ora29n'+
			'IwGOTq1atIksSdO3e4dOkSr1+/vguk5FkvyioyQFoeFTWKvwFRl85w+PDhH7Zs2XL5+fPn9PX1kUgkuHfvHmfPnqW8vPyMz+f7A3glA1PAaxXojdIpplVkBIwtLS3f7N69++dUKsW5c+eIx+M8ffqUM2fOIElS98DAwK85QGkNSGiBG4Aiud5ltbW1P125ckX09vaKZDIppqenxeTkpHC5XGL//v0ueT3MQD7/3th5LB3UytG2vE5aK1RAQMXAwEDo1q1bIhaLiVAoJNLptPB4PKK1tXWrJvE6ddk1kJyXZTFQCpQDlc3Nzd/7/X6RSCREKpUSXV1doqWlpVkGaWeveK79+ZaVAHYZ9glQsW3bti8HBwf/7urqEnv37v1RBinH1jtn/y5YKUtl/FgG24CiQ4cOfVZVVbVBVrTqWqzFdCx9WyiJBEudlFH5ouwrdtd/'+
			'MYOcUJ1gcQV/b5AatsiSSkWZcirk3C/vA1NfJ4p/UJACW5RjRZk6+QcDKQDtp8Ga/kj+L0w9fnCA2v4BUXQfSLL/ku0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgCAYAAADjaQM7AAAFfElEQVRIia2XeUxUVxSHv9mAYRkYHBbZBBVxRTGpsRDsFjUm1aqBgFhNa5dotFbaYmIb26hRqzZdbGyjaBtjtabutVvUgrZaXHEFjYgIiMJYYGRxG2ZO/5j3yHMEJNaTnNz7x33nu79z7z33Ph3dM10nfdWkk36nQboao/Pqa7+TyNjo9GCzObt//6TopqYmR9/EpPz8/PWHuhH7EYgeMAAmwBfwA8yqBwdbvtB51IivySAJvWJkzOiXJOvVqT90V5lWiV4DVPt6vV6vd7vdDQCxcbG8PP4VbJERNDW0Unq6CLO/i5FpYzH7Bwbl5ua2ABgfo0yFGJSxal/vdrvrABatXMX83FwM4sZutxMeHk5lg4td2zZSd+EEyc+mNXchqh1iVNIWAAQDPYAIID'+
			'pl2LBqQD5bs0FERBobG6W4uFhycnLkRHGx1DQ2StUDkXWb98j2bRtk8ZLlJY9T4wP4KyAb0BOIM5vNgwB54fkXxS4iV+12qbbb5cixYwLI4aPH5GKVXQ6WN0j+4Sr5dv06aXM+kOHDU0Z1lkbv9JkUuGnggKTXThWfYerMudTVt1Jddh29OKm9cR2Ak5er8K1x0uxqIzA6gfsmG62N9aSkDB3bEUy7C40amAkw+gdYB1h8jfiF2KipvMmazz/j1x1b2j+eNz0TgHGTpzB93iL+9Qli9+6faHM6k71hWpBeA2xX2a9f/J3yklO03r1HaICNrLfeZdKMOTTab5D3egbfbd1BVEwMLp0Ja2wYdx3V2K/Yabp3r7IrZd7b3gDoKyqu7Y1PSsisuXgGa+80AkJ7EhVgIizAAEByQgzRCQncdYM+JJgjly/R6Gihtrr6mL6T'+
			'NfOGtntBQeGFUaNGU37qb27XluEbbMXHoMfsZyI7Jwe9yYQBiA/0x152lYpLJ6m5dYuiouObDB0AtErUtWpXBujKrlQUpo9Ky2itOI5fWBxhcb2ICPIlfeQz9IyMxGazUVFbx5crFhNoCeD3PwvG3m5wlBu9QB21omkFkLq6mxaLtQcD+idRf/4AxZWlJAwYjLWHmQe1tezctZO/DhYQag3mj4LCDZVXKg6gzNQb4F1oAUSnw2qxhKwGJs2dN29dZsZ03pw1f3VgeG9mz5hGUrAP5wv38cuurVwsOYe/v5lz5y5MKD1bMlOdsDawdjOYNO6T2K9/qNPlPFN1tbzl2r68wJCo4VgGTckBzgLuvn37JA8bmjyhpaXZ1tp6p8nhcKw9f6G0CGgDXIBbBWoBfkAgEIKnakQOSR46dGHeLFkxJV6k+CMRETn9faYsmBi1HE'+
			'gE+gDxQDQQDliVGL54jo1eFWT02hRGjRvenpw+JiU5caPpxh7e2FLqGXJqMd+s2UaV01oE3Fdm7VJUtAFOpVXVqP7wgdWC8qaNfGdkSuyH7rqjZKy9iNNxE9Otn1m26mt6JUatzP/xxnFNQJfGH0md1sxAkCI/HIjKei4x7+im2VK4IlVEmsXpKBEpWyVLsyNkaXbEp8rYEDxF2qKkzV9JnXpU2tOntSAgVAFFJw0etuCf7Z9I2eYskbYGcdafEbl9SFZMj5ePMyIylMABSnD1xvbFU6iNXYHQKIoG4n7bvaO6fv/7Iq0V4qw9ISL3ZO2sIfLBeNsIr8A+aAq0F6TTy1K9q2KB+LTUtFlSvk3kbo2INMvexakyZ5w1VQF5z171zs7nIxYGRCmwXkDcmNSBk0v3f3Vr95J0WTjR9p4C8l6L7rzMOoT1xJPGGAUcDoQu'+
			'y45KGdE3MEhR1OVadMd0eN4WaiDBs2XbNK5u6YfOzJOYUQmoDeDqwP83SAtz4VGpKlOrwiNV4GnAtNeJ6k8VpMJcSl9Vpg3+1EAqwPtp0K0/kieFadunDtDafwFsJy0vZxR1AAAAAElFTkSuQmCC';
		me._zoom_in__img.ggDownSrc=hs;
		el.ggId="zoom in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._zoom_in.style[domTransition]='none';
			} else {
				me._zoom_in.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_in.ggParameter.rx=0;me._zoom_in.ggParameter.ry=-4;
			me._zoom_in.style[domTransform]=parameterToTransform(me._zoom_in.ggParameter);
			me._txt_zoom_in.style[domTransition]='none';
			me._txt_zoom_in.style.opacity='1';
			me._txt_zoom_in.style.visibility=me._txt_zoom_in.ggVisible?'inherit':'hidden';
		}
		me._zoom_in.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._zoom_in.style[domTransition]='none';
			} else {
				me._zoom_in.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_in.ggParameter.rx=0;me._zoom_in.ggParameter.ry=0;
			me._zoom_in.style[domTransform]=parameterToTransform(me._zoom_in.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_zoom_in.style[domTransition]='none';
			} else {
				me._txt_zoom_in.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_zoom_in.style.opacity='0';
			me._txt_zoom_in.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmousedown=function (e) {
			me._zoom_in__img.src=me._zoom_in__img.ggDownSrc;
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me._zoom_in__img.src=me._zoom_in__img.ggNormalSrc;
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_out';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAFPklEQVRIia2WbWhTVxjHf/cmNzZNTRuNUavpWmpLRqHtpBQprEUt8wUqdhSxg8HwBTbEKSsUNr+7rQiF4peuFLQdIoLFUvwYtB/Ubn6ww2RoIyQ1fVtWaprGdGnanH3w3ngaW/eiBx7uvST3/zvP/3nOOVcRQrDeUBRFkR/X+EvmZfEWIWW933SAIaxIkdEtLCz82GazHfd4PDtisVi0rKysp6enZ/jNqQixKiQxFTABGrAByAGsRtjt9k49E6FpmigqKhKNjY2itbX152zNVZlI9hgQA2Tcq6qqqul0eg7A7XbT1NSEy+ViYWGBR48eYTKZaGhowGazbTx//nwcwLyWU5K4Sf+Pca+m0+k/AC5evEhbWxsWiyXzYiQS4fr164yNjVFTU7Ng2JvJRK'+
			'qBKomviurq6pHR0dGdly9f5syZM0SjUVKpFADpdBpVVbFYLNy+fRshBKFQ6PcLFy5UKEIIGaBIAE0Oq9W6cXFx0bd3716GhoaIRqOoqorcgMlkksXFRaanpwkEApw4cYLa2toGNcuqbJs0wAJYPB7PFwCnT58mHo8zOzvL0tISsViMJ0+eMD09TSQSYWxsDEVR0DSN+fl5qqurD8g1ke0yszobs91u/9BqtWK325mdnaWpqYlwOPxGQd1uNwMDA1itVm7evMny8nKleQ2AKoEyWZWWlib8fj+JRAKTycS1a9ew2WysrKwQj8fZvn07OTk5RKNR8vPzef78OZFIhEQiMS7bpawBy3RVMBgcKi4uJhAIkEwmMZvNmEwmHA4Hu3btYvPmzeTk5OB0OikoKCAcDjM/P8/ExMQv2TXJhmXizp07vn379jE6OsrU1BR5eXkZ'+
			'kKZpCCFQVZUtW7YwMTGB3+9nZmaGkZGR/mxI9jayavT19R13u914vV7C4TC5ublYLBaePn2Kpmk4nU6mpqbo7OwkNzeXe/fuHVAURTFnrXL5KqSrAMTMzIzd4XDg8XgIBAJMTk5SXl6O3W5nfHyckZER7t69S0FBAV6vtzcYDHoBRZWE15q9ABz5+fldQPO5c+d+am1t5ezZs10ul4tTp06xdetW7t+/z8DAAD6fD6vVyuPHj4/4fL4v9fcVY/HJm6ERlvLy8k2pVGo0FArFb9y4kVdSUkJNTc1nwG9AurS0tLKqqupIPB53vnz5MhaNRrv9fv8DYBlYkZ3ReLXD5gEFgBPYVllZWdXW1iZaWlqE1+sVQgjR1dUlDh069D1QBpQCxcAOwAU4dI0NZLW/8SDvUabm5uZPKioqrgaDQfr7+1FVleHhYa5cucLS0tIDIA'+
			'mk9dku65HSr2mpjgCqmmWR+dixY1/v3r376tzcHL29vcRiMR4+fMilS5dwu90dPp/vV+AvHZQEliTAigTJ1NVY2Rqg1dfXf75///7vkskknZ2dRKNRnj17RkdHB6qq/jg4OPjDOoBUFkAIIdJyB7mAHRUVFd/29fWJ7u5ukUgkxOTkpAiFQqKlpUUcPny4RffbBuTy+oTcwKsN1LBdRT8+pFPWhF64osHBwfCtW7fEixcvRDgcFqlUSpw8eVI0NjbWZglaZHtlcRkgQVQAN1BcV1f3ld/vF7FYTCSTSdHe3i7q6+vrdED2bFVZOFt8DRBu4AOgaM+ePZ8ODQ392d7eLg4ePPiNDtDeNtt/E4ZdO4FCvT6bjh49+lFJSclGPYM3vP6voQDb9I5ISz1vtOOK1C3rfwX+wzDzqg2RROV4Z4ABSfE6E2MVy/3+ToBsiBHv'+
			'FWBAMrYgnSHvCwD6aswCvPUL/f+MzEH1voXl8Te2SbpsnOcEBgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAFYUlEQVRIia2Wa2wUZRSGn5nu7I1224W1bVoKi1LaIhTqD9AioBIgGkUkEIoIElEDwZCiQmIMGiGoiIkKAQVCkCBGAQMEY5BbQZNyk3tbCgVK2xTarW3XXujSbff4ozPrMBS88SVnZyb7zfue857znTOKiHC3pSiKYn7sZkv0ZbkHkHK3/3QCA1gxWRQ3OS11ZLzLlZeZmZHa1NQU7J+esX7duvWH73RF5DYzgalADKABDsAJuAyLj/d8pnRFIg4tRvr17S3jxo6RqS9N/8aKeVskJnkMEoPIuFdVVVUjkUgDQFqfNJ597nl8yUk0NbRScvoILncnj44Yj8sdG5efn98CYOtOKRN4jL7HuFcjkUgtwAefrGDRggU4bTHRFy/XhtixbRO1RSfIfmxEc1'+
			'Rei0yqDuoAegDxQC8gCUjNGTq0CpBPV28QEZHGxkYJBAISCATkRiAg1Y2NUtkusm7LLtm+bYMsWfpRcVQuU5IVk/ea2VwuV1xbW1vRk088xfcFB2ipq0PTvRK6fppvQW3YRtmNFjpK9/Day7MYNnz4aNUilVUmDbAD9oFZGbMAps+ZT31TO9cDzTS3w+8tIS6WlFJad5OLNe0UXaogotkIaT5aG+vJyRky3pwTc1XZLNHY3D28WR6HDWeCj7rrDUx7ZgzVldfuSGhKmp81Owqpssexc+dWOsLhbFs3BKqJKBrVgAH+m1eKT9LaFiKkxbHquz044zzQGcYRrMDb24/T6aQ+2Iyjl4eG6yqBywGaQqEKs1xKN2TRqiovv7bbn9GP6gtnCLbGIDY3dlUhOd6FPyuTvh4nXjuk+uJI9Lqpv1RKY7CFmqqqY9acWMmidvBg'+
			'QdGoUWO5cvJX/qgpwxHvxR6jYtfApUCn7o0/1k2g7Crlpb9RXVdHYeGxzVYSaxu5bW38ekteqt9P5f6v+L3qIraEBBx2jUulpWiahs/no7y+gbWfL8MZ14NDhUfGK4qi2Cyn3HwV01UAqa294fF4e5GVmUH9+f2cqiihX9YgvEkPUF5VxfGt3/PLoYP09Maz52DBhorL5QcARTUBd+e9KApejydhJfDC/Pz8dVMmz+TVuYtWxiY+yLxXZpARb+d8wV5+3PEdF4rP4Xa7OHeuaELJ2eI5unOKcfjMzdAwe/qAzJ7hzvCZyqtXWq7tXRibkPIInoenvQicBSL9+z+UPXRI9oSWlmZfa+vNpmAwuPZ8UckRoIOuNEWV0ejqsLFAAuADkgdnDxmyeOFcWT7NL3LqXREROb1xirwzMeUjIB14CPADqUAi4NUxHFjK33iwmS'+
			'zm9Ukjx+Vkp2/Sru9i9rclXVtOLmHN6m1Uhr1HgFtARPe2Q7ewfo2Y8gigqhaJbAtnPDp//ONpm3xtR5m99gLhYA2UfcmHK1bRNz3lk5/PNh4HQjrRLaDdRNBpIonmFT3MRCBl6uj0hUc3z5OC5bki0izhYLFI2QpZlpcky/KSPtb3JtDVnT26PG5dIs2UX2NOGZ2DRCA1Y9DQdwq3vy9lW6aKdDRIuP6MyB+HZflMv7w3OWmyDthDBzUmpIOuBmqzEpjGRwx64vr8tPOHqvp9b4m0lku45oSIhGTt3MHy9nO+YRZAu1leM7iZwDKjSAP8I3JHzJUr20TaqkWkWXYvyZU3nvbm6gRWb1UzsBW8GyLSgL5An3G5AyeV7PuibufSkbJ4ou9NnUC7l7f/xAy5egMpen56fpiXkjOsf2ycHsEdWv9bU4Bkvcwippo3yrHT'+
			'qPl7fbz93bLRVeeYQM32vwkMkjB/RWKc4uip/b8EVhLD7iuBQRKVBdMMuV8EoJ9GC8E9v9D/y4oOqvsNbF5/AsV3wzy+MubaAAAAAElFTkSuQmCC';
		me._zoom_out__img.ggDownSrc=hs;
		el.ggId="zoom out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=0;me._zoom_out.ggParameter.ry=-4;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			me._txt_zoom_out.style[domTransition]='none';
			me._txt_zoom_out.style.opacity='1';
			me._txt_zoom_out.style.visibility=me._txt_zoom_out.ggVisible?'inherit':'hidden';
		}
		me._zoom_out.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=0;me._zoom_out.ggParameter.ry=0;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_zoom_out.style[domTransition]='none';
			} else {
				me._txt_zoom_out.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_zoom_out.style.opacity='0';
			me._txt_zoom_out.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmousedown=function (e) {
			me._zoom_out__img.src=me._zoom_out__img.ggDownSrc;
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me._zoom_out__img.src=me._zoom_out__img.ggNormalSrc;
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._zoom_out);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAFB0lEQVRIibWWTWgbRxTH/zO7snb1uWvFq8ZOKXEa2SgRaa1AE4xjGeI25JhbSQ8Jpj2UltBDaAIJueTihoqeTGlPpZceevOtF5MPEtexi1ERwbWiOiDsOFZC7F2tVrvSTg/RquuNZFFKFh4zOwzvN+/NvA/CGMOb/ugbJwDg/8tmQghpt866uIN0c5dLsXcEAHbz5s1YOBy+KMvy5xzHvVOpVLC9vf1HtVqdun79+jLQxV1NAGnuowA4t1y+fFmJRCLfy7I87QBs20YoFBqxLOsLR09Hd7kAbgh1LLlw4UJsYGDgu2g0ei6VSqG/vx/r6+tYXFzEzs4OGo1G3dHTFtLGArcVZGpq6u2hoaFbsVhsMplMIpFIIBAIgFKKR48e4fnz57bf71/paEkHF/'+
			'FN4dLpdPjgwYPTkiR9lEgkSDKZhCAIME0Tz549g67rME3zPqX0x7aQNgDeJb6TJ0/Gz5w5842iKB+m0+kWoFaroVgs4uHDhyiXy0s+n+/TK1euaI5avhugp6enxzRN/vTp0wMnTpz4dv/+/eOOiwRBQLVaRT6fx8rKCl68ePHAMIyPb9y48WTX4RljXQHpdPqts2fPZhVFmRgZGcGxY8cgiiIMw0ChUMD8/Dy2trZ+X19fPzczM/OUMWa7Dk95D8C5XB6AzzRNXyqV2jc2NvbTgQMHkkePHsXQ0BACgQBUVUUul0Mul7PL5fKCYRhfzszMbALwBh7j2wB8bslkMrnBwUEcOXIEw8PDCIfDePnyJUqlEorFIlRVnd/e3r6YzWb/bgNoXbz3FbUAV69efWJZFg4fPoxEIgFJkkAIgaZpKBQK0DStYRjGL9lsdi0ejzNK'+
			'KdnY2HgN5ASX2wo3CBzHQRCEVhwAgGVZ2NnZgSAIXCgUUjKZDKWUso2NDdubxxhjzB1svAvgzGHbNkzTrFerVdj2q/vkeR6RSASxWAySJH0yOTn59aVLl+KdEiXnUeqGcPfu3ZtJpVL9giBEfD5fNBwOg+d5EEJAKcXm5iYIIZJt2+9pmmbNzc39mclkqu0gPHZHtfPPASC6ri/LsmwTQt7lOC4YCoUgyzIEQYCqqtjc3IQkSQIhZIwQUh4dHX2wF8Q9pwAopZRubW1VVldXlxOJRFTTtPdFUSS9vb0IBoNQFAU+nw/FYhGKotBgMDg8Nzcn3r59+6/R0dGKG8Lh9WRI4ao11Wq1QSldlSRJsyxrEEAwFoshEAggEomAEAJd1yGKYrRWq2VUVdXu3LmzcOrUqTpcpyYegXdcW1tT7969e//48eMh0zTToihykiRBFE'+
			'X09fWh0Wjg8ePHiEaj1LbtD3RdXx4fH19xQ+BR7Mxfg1cqlbyiKKRSqST9fn9Pb28v/H4/JEkCz/MoFAqo1+s+VVXnJiYm/nDqiZNnGt4Lw6sIZm6XLiwsaPF4/GdRFK18Pn+e47h9hw4dgiAI6OvrAyEEhmGAUtrSxzeV2G0A3o9zLJydnX06Ozt7a3p6WgTwGaUUsiyjVCqhVqvBNM1Fnud/a0EYY6zZK3QDMXhcm8vlfvD7/ebS0tJ5xpisaRp0Xf+VMfbVtWvXSq2NzgvqkI3dydLJc6R5oAYAC4DZHOtN2ZVadtX4LhY5LnUeCmtCbPx7bx17q13ldw+QF+Ls8YK6QzqAHAWOUuJad9Yae4HatkQdQDZcfZcHvqc1e7apngbPmxGYa2wdpl26/9+9sHvsVE/+AabNJRTV7DqbAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAFN0lEQVRIibWWW2wUVRjH/+fMmWlnr2Xv29JuqYUiEKqQ2lJsCwo0UcGAykVIhKo8GH3wjcRHX0Ri4hMxkGgI3gB9AIkiICIiYKGwXgmF9KIFSm9Lu/edmT0+sFOnw+42xjDJlzNz8uX7fZdzvvkI5xwP+qEPnACA/RdlQgjJt8+nSQeZLl0Gw+YVAPi2I+vdFpe8zWPxv8YoC00odzGcunM5psRePrT8WBiYJl05AMnpUQCCUdZ/+IzP4pY/8Fr9O3WAxjWUSa5FaS31um6nYLoMACOE6pGservV7a51ve+Wveta/U+i1j4HN6LdOHbzK4xkhqByVdXt5I3EFIHuOQMgAhDb32mrqWwu3xOwlT/b4n8CDZ4mVNqqUed8GA7JibSWzsqC5VrBSAqkiO'+
			'VEqG0P2X31rp0z7K72Bm8Tafa1wsKsSGkp9MZ7EVUmkNZS5wQi7M0LyQNgBhFr11X7Gzvq3w24g6tWVjxNlvraYGFWJLUEwmNdODZwBAPxv7okWvLqJ22HY7pZNh1AkAVJS2psQcecirlrHnqvwlPZ1uR7HA2eJliYFVElip+GTuPSyHncid8+r8TUTQeeOtpvdJ4VAzBZkNSkxkKrg4H5q2fv8vi8bUuCrVgeWAWHaMeEMo4roxdx8tbXuBn9++eh/uHnT3V0Dh4w3QpWrMhqUhMrVno985+r2xcKVs9rDrahwd0Mu2RHJD2G04Mn8MPgd9lb0YFONaa9caqj8w4A88XjLA9ANEpz+5JfgyE/GoMteMyzFK5SN4aTQ7g+/id+Hw3jbiJyQbmZ3XZ468nePAAAU8//lGMKQNzx1o7+rFtB/cyFWOxthNfig0RFjGlD'+
			'uBzpRCQd0dIx9fPDW0/0OWvs3Flny9t29MtljMIIgupIwSbY4ZTsYGDgAFIkjuHMEGRmFcqsDt+CjXMpRM7Hr8Wy5j7GOefMXGwDiAGAGJORyCbVCSXK7IITFBQl3AKP5IXIJFCOLQu3z1YXYd7efcu/vJUvEsFk1AgRzv54dnfFCl85dVCHyESnW/JAFEpAsxQiRPTGewDKyzRoj0TUUeXT3o9+2zjrpWQ+CMPUW61/CwBIIpEIS1U0q8rpWkZFa5nkht8SgFW0IZIZRV+sBz45UAqQFgIysja04XwxiPGdAqCUERrtScQHL46EPS1O5xBuP2oTbSQgV8ApOVFlrYEklCAc6UKVLUSdYtncz3r3yQf79nevDW2IGyEC7u+0FADh2XtK6WhGy5ao10sqxFiCxms44dZyy0zYJQdcpV5QQhDNTMAm2pxxLbZsLD0SO9'+
			'T3cecL1VtUGLwmJoF5HfklEr164Ma56jVBW5SOL7aJDsEnB2AX7ai0hqBmVXRFOuEt8VGNa40xZSK8ftaWa0YITIb19/vgqWj6j9I6Rkb58LxSJksBuRwys8An+yFSCeGxS1A1RRxNj3z/Ys3Wy4QQwgDkkgLNXDDcu8HcmNLuo70xV1XZfusau3KOndksEdFT71oMK7MhZK0GBUVMjUIgwqQ9ljOSzQMwP4Ie4YXdVwYv7L6y65Xjm2QQvp0SAT45gO7xq0iocaS05CVJkI5PQjjnPDcrTAfiMKW250z/ntIVpZlvs0c3c/AZdzNjiCrjX3DwNw8u+2ZgUlHvAgW6sbFZ6t2B5BzSACgAMrlVzcmU1qLX5J6bxSPSU6ofFJ6DZPFv3QrOVlN+v0VAZoiuYwZNDykA0g3oRolhX9/TioHyzl0FQFkY5i4TvGg0RcdU'+
			'04Bn7gjcsE46k28u/t+zsHEtNHj/A355GcQX6038AAAAAElFTkSuQmCC';
		me._left__img.ggDownSrc=hs;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._left.style[domTransition]='none';
			} else {
				me._left.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left.ggParameter.rx=0;me._left.ggParameter.ry=-4;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			me._txt_left.style[domTransition]='none';
			me._txt_left.style.opacity='1';
			me._txt_left.style.visibility=me._txt_left.ggVisible?'inherit':'hidden';
		}
		me._left.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._left.style[domTransition]='none';
			} else {
				me._left.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left.ggParameter.rx=0;me._left.ggParameter.ry=0;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_left.style[domTransition]='none';
			} else {
				me._txt_left.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_left.style.opacity='0';
			me._txt_left.style.visibility='hidden';
			me.elementMouseDown['left']=false;
		}
		me._left.onmousedown=function (e) {
			me._left__img.src=me._left__img.ggDownSrc;
			me.elementMouseDown['left']=true;
		}
		me._left.onmouseup=function (e) {
			me._left__img.src=me._left__img.ggNormalSrc;
			me.elementMouseDown['left']=false;
		}
		me._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAAFCElEQVRIibWWXWgUVxTH//fOZJ2PnZ3d7ORrd2FTg8lCs9sSEqSKkaoIfWuR9qXFZyl56INQSJV+gAT6UAja0qLYipS+SN6KDylRbPFFKxqjrtksskVXXbPZrHGyszszd/rgTpgdE2MLXjjce4fhd86ce85/LnEcB69r0NdGBsB7N4QQst5Lzv/8POI4jhfaMh85cuQtRVFOhsPhIVmWwRgrVKvV7wGcHhsbK28Gp00wwfMUUQCca7Ztj8myPMQYw+rqKjiOS6qq+i2An06cOBHdFN4Eu3AXzAPg6/U6q9Vq4HkeIyMj2LdvH9LpNEKh0AFCyI/Hjx/XNoO7aXDhba45jpNvNBpMlmUkEgl0dnaiv78fg4ODUFX1A8dxTk9OTiY3gnPrRdy0tpWVlf'+
			'm+vr53gsFgor29HaqqQhAERCIRWJZFl5aW+g3D6L18+fLvO3bsaKwH9zrgPZHzT548saPR6N/BYHBI1/VuSZIQCoUgCAKi0Sh4niflcjnVaDTenJmZmRkdHdXXi3yj6LlsNrssCMIFTdPe1nU9bts2IpEIRFGEoihgjJFnz54NGIaRuXTp0oVdu3atjI+Pk71797bAWyrFhQOgCwsL+vLy8nR7e/uwrusxSZKgKApEUYSmabBtm5TL5T7btlPnz5//49ixY/r4+DjhNqgW6jNSLBYNTdNmA4HAwNLSUo/jOCQSiSAYDEKWZQQCAaLr+huVSmXP9PT0uYmJiZoXTnyOiN/BnTt3FhVF+bOjoyPNGEuIoohAIABFURAKhQCAW11djZfL5c/379//tQuHB4z1HFFKKSGEzs/Pr6RSKV5RlHctyyKapiEcDkMQBEiShHq9'+
			'jnv37uHixYtf8QBc3WAA7I3gjDFQSqksy0IgEOimlNKnT5/CNE0AAKUUkiRhy5Yt4DgOAMA7juM0pYV5qsibEts9j0wm0zk0NPShpmnvh8NhSJIEnn+ufYwx1Go1mKZpMcZ4SunzDm2qnmvM8xV2c+1s27YtlE6nP4rFYgfD4XCCEIKtW7dCURRYloVqtYpcLodCofCPaZpnJiYmuBbJ9Th4wUZHRw/EYrFDPT09HCEEsVgMyWQSqqqiUqkgl8shm80+KhaLP9u2fRLw6fl6lbNz505teHj4k3g8/rGqqpxt2xgZGUEqlYIoijAMA/l8HteuXbOr1epvN27c+G5qaspIJpOUB9Z+Ei9Ib29vr5ROpw92d3d/1tXVxYmiiEQigYGBAciyjFqthps3b2Jubq5ULpdPP378+NTU1FQDACkUCozfQM95ANzu3bv3xOPxTz'+
			'VN40zTRCaTQSqVgiAIaDQayOfzuH37tlkqlc4cPXr0GwCWJ5VraSE+MA+gjTHWRQgRLcvC9u3b18CmaeLu3bu4evWq/vDhw1PZbHayefhrYBfub39XGXnbtmEYBiil6OjogCAIqNfryOfzuHXr1mKlUvmlVCqdOnv27KKnylw48cIJWoWLy+Vyf8Xj8bl6vT54//59tLW1oVKpYHZ2Fg8ePDh3+PDhL/0l6/7MCSHEnxavI1y5cuWRKIqHZFn+4vr16+8tLCyAEFJZXFz8tVgs/rAR2C1rN9q1PAMINGdXHd3GsgCYHnsZuCVyf4e6GuPtVsvj4KVgNB/64X4w0CoF1quA3eGqouOBumvi2fu1ZlOwH+5G6qBV271i5q43BbtwF+B41vDBW+xV744vvSv6nDnAf7uU/guuv04X+IUPzgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAAFGUlEQVRIibWWa2wUVRTH/3fmzuzs7uwu+5ztdksLJbZEASU8KqhRIGhJDFVSvhQhxpgQoonf/GDiKzEhhpgYg2hAGqIEY/jio4kCARFsK6+iAUkwBUtp2ba7293ue3dmrh/caWaHlqIJNzmZeyczv3Puuef+7yWMMTyoxj0wMgBqHhBCyEwfsf85PcIYM0Nrnh0965d5ZM/+oKQsd4teaEwdSpTG9wI4+Elbd2IuOFcFE/ybIg4Ab1gZ5dc81Ltch4aMmgLlaGNACn0I4PPX+1/2zwmvgg24AaYAaLlU1qfUKVBORHv9ZuxofhVPKevhswW2AOSzXX07AnPBjTQYcMEwWhQHS2pRd4setHgWo0FuwspAG55U1iEoKS8w6Ad39m5rnA3OzxRx1YRivH'+
			'w9uMr7uNvhjoYcEYQkBQ7qRNgeQUUvc6OFkYfyarbp21vf9Gye31meCW52QE2R06mhrOYOuy6SiL58UkuEXYILASkIB3Wi3tEAgRPJaOF2a1ErPPzVze6TnU1duZkiny16frRvLCXK4ilno+3RlJaor7AKFHsEsiDDb/ND1TUyWUq2FNTc0q///vJUZ1NXpv3YWrKt+ZUaeE2lGHAAXOzCRC6VSh3nW/QVSX0i4hbc8Nn8cAseRBzzoTKVjOSHm5mmtX7x194TPRvP5tqPrSX8LNXCWYykrmeKrvmOP1R/qWW0PFynQyNhewQe2zx4qBcSlUhanVwwGU+v6x7ae/THZ/sKZjixOCJWByNnx+Kyx3nG0WRfopFKVBZckHgHfJIfPjEAnTA+XUnV46rw5ourt75nwGECYyZHhCcc4Qg3em4sE22ro5JXeqbEFUjEFYFi'+
			'q4NdcEAW3ciRNK7FrmLg6JV3KQBDN3QA2mxwpjEQnnA2j02y8/awyERuojSOIsmBAaCg8IguyESG6i4BAChjjFWlRTdVkTklmrEeTU9HQwvao50hf7BDsdVBtFHYmAMEgAYVU5UM8qygClmJovqToXqG6aZZaNU+U1b73fUbg1vDUWW7KyBHNVsFj81bCT8fQlmvIF6I49LEeVxL/Hkrj/yh3R/s5msk1+TgLlvS2bpFaVB2RoNRXnWUsHDeIiz2LkFACiGWj+FS4jdcmOiNDSUHuwtiZj9g0fOZKqd1S3OgdcOibQ1KY5fH5+IzUhqboh1oCz4BWZCRrWRxOXkex0d7tMlc8sjwiTsf9e4ZKPqXeTgKTB8Sd0lvcKnPEd2gbA/UB9+o89XxoixghW81VgbXwC16kK1kcGbsJH69c3p8fGrsYPx24kDvnoEyAJL4Pa'+
			'3TWfScAuBbX1q4rj7csCvsVfiUlMBzoeexKrgGTiqjqBVxOXkRfeOnK3fSw4eObPz+fQCqKZXTaSEWMAUgqKSiMKrbs0IGmyId0+CSVsK5eC+O3f4hN5S8eWCkP/ZxdfGnwUa1WLe/oYyUlYG8lgXP8Wh0NsFJZRTUPAYS59Ab+yUen4rvy94o7Dv1dn/cVGU1kZvzbRYufqI/eTawyHslr+YeuZ6+BpGzYbwQw8+xE7iRGDy6f/3hd6wlaxzmhBBiTYvZEQa/G44JLmGns8vx1kn+p/ZLifMgIJPj6djhxI3kp7OBjbI2op3OMwCx+jTU0dhYKoCKye4FroncukMNjTHvVtXk4J5gVF9a4VYwUCsF6v2AjWaoIjNBjT4xja1aMyfYCjciZajVdrOYGf05wQbcADBTHxZ4jd3v3fGed0WLMwb8t0vpP4TTSSngUKn4'+
			'AAAAAElFTkSuQmCC';
		me._right__img.ggDownSrc=hs;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 149px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._right.style[domTransition]='none';
			} else {
				me._right.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right.ggParameter.rx=0;me._right.ggParameter.ry=-4;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			me._txt_right.style[domTransition]='none';
			me._txt_right.style.opacity='1';
			me._txt_right.style.visibility=me._txt_right.ggVisible?'inherit':'hidden';
		}
		me._right.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._right.style[domTransition]='none';
			} else {
				me._right.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right.ggParameter.rx=0;me._right.ggParameter.ry=0;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_right.style[domTransition]='none';
			} else {
				me._txt_right.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_right.style.opacity='0';
			me._txt_right.style.visibility='hidden';
			me.elementMouseDown['right']=false;
		}
		me._right.onmousedown=function (e) {
			me._right__img.src=me._right__img.ggDownSrc;
			me.elementMouseDown['right']=true;
		}
		me._right.onmouseup=function (e) {
			me._right__img.src=me._right__img.ggNormalSrc;
			me.elementMouseDown['right']=false;
		}
		me._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._right);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAFGklEQVRIie2XTWgbRxTH/zO7q42+4lgbyaGsP9Qm8pccGXJqS6Ie0hIbWpoSQikE95YUQygFH+qQxq7TuIeiQ+++hEKh9NC0EAotPRhTSEhMPhT1YCeR4wgHRVKitdB+yLvTQ7VmKstOHSg5tAOPHY3ee799b96MnghjDC9q0BdG/h/+ooa4HWVCCGm2zp6zav8RnINugI+NjdFr167tME0z4PV62a5duyrBYFAPh8POM/0+66Xr4EYBACQSCWFwcNDr9/tLsiwvEEKoYRivHDx4cA+ltHT8+PHac8M5MOWeFACCwSAZHh5u2bt374ft7e0jALoJIY5lWWvZbNYTCAQ6GGMrk5OTa5v53hTeAKYABO5JOjo6xJMnT44oinJmcHCwRVEUAQCKxSJu3L'+
			'hhl8vlS5ZlnbJtu3Du3DnWzHfTPW8AC3UR3bkkScKJEydSu3fvfi8ej3u6urpoKBRCPSNwHEdIp9NHHz9+vMfn870BoFn6yYajtgVYAuABII+Pj7+vquqxeDy+o7e3lyqKAkmSIEkSFEVBT08P+vv7iaIorwH4ZWpqqrFQN0a+SaolTsSJiYlP29raPjpw4AB6enrAGINpmrAsCwDAGIMgCBgYGIAkSbh+/XpSFMVLAN7hGPgbvAlY5MGHDh2KJJPJU52dnR/E43Hs27cPgUAAmqYhm82iWCwCABRFgaqqCAaDiMViIITgzp07b6dSqd937tz5NoCSyxQmJia2BHs8Ho9t29LIyMhb0Wj0s0QiIScSCfh8PhQKBSwuLmJpaQnZbBb5fJ4ZhkFqtRpkWUYoFEIkEgEAlMvldsuyYkeOHPm1WCwauVyOiJuA1+GO40jT'+
			'09Nfqap6bP/+/SwWixFKKRzHwf3793HlyhW0trZibW3tST6fL2ma5s/lcnvcLFBK0dfXB1EUcevWrXfL5XKLZVlvdnV1rR8fwhUWX1zS+fPnR6PR6NF4PO7r7e0lsixjdXUV6XQat2/fhuM4ePDggbO4uPj55cuXLxiG8UNLS0tnpVJ5mRCCYDAIv9+PUCgEQRBQrVaj/f39w7OzszNCk4g9HFwcGhr6LpFI+Pr6+uBGvLCwgKtXr8K2bRQKBW15efmb+fn5H7PZbOXevXuruq7PhsPh1zVNiwQCASiKAgBobW2FaZq4e/fuS4cPH9Ybby6REwEAtSwLhmHANE3Yto1MJoN0Oo22tjaUSiX26NGjn2ZmZr6cn5/PV6tVR9d1zM3NPZmcnBx6+vTpXDqdRiaTgW3bME0ThmHAsixUKpUL/K0lNqRdAECTyeQwISRUrV'+
			'aRz+eRyWSg6zo0TWOlUunjVCr1tVu9jDEwxtbP9M2bN7/v7u5+Vdd11TRN5HI5LC8vo1arwTRNEPf8cqn2cHAiyzLGx8czADyUUqiqCl3XnaWlpW8vXrz4ycrKCuN8uMEwADaAWiQScUZHR3+mlCYcx0EgEEA4HMbDhw//aAZ3P7u3n+P1eu3Tp0//RintFkWRAfhiampquslWSbwdgDX8dbVaZ8+eHRNF8QxjjAiCkCGEDLhw/iZzI3DTZ9eduGLXHWOTLRPcXeBsa3Wx68IYY0ysK7mKLtCpzx0uAps35vRce1fXLV7WYOvqrXc+IqfkDsa9BO/U5uYunNdzdWnDus3ZMs62KdxBc6cbjLnv3HUXvJX9+hCxMYWNP3+Ml8Zmkespt21PGGNbNoicg0271Oe139BGNbbH222Lt2P/zO713xz/3b9LfwIRRVPVhCDO'+
			'9wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAFPklEQVRIie2X/W9TVRjHv+e+9G1zbbeytVu3sQ2YTIElTt0csE22yYsQQCQGNEgkEUOMhIQfkIQQE9EQ4l8g4RcTI2EyJMpwgKswQoQAMtkAHa8DRrfesq7tbdd77vEHeuex64YjMfygJzm5554+3+dzXp775ClhjOFpNeGpkf+HP60mTcaYEELSzbMnjNp/BOegY+BbPt4snLzis8RpJNNiszBHpivssNlVb0ax/li/j1t0EpzaAQBFzW6x5LV8a15kqhKeqvxOCBEybjjLql6f7YZElK2zdiSeGM6BBe4pAIAlx0wqPyy3u+d43i1zl64zU6mcCdAjmqrd7/Gb9NJIEQW7f7DxuDae73HhKWABgMg9SW5FjrRkz6vrnNk52+u9TXavzSsCQF+kD7'+
			'577TQQCRxSyfDGEaoNfrugnaXznfbOU8BiskvGWLKIYs3uyi9cLtfK2rwG0/P2SsGT6QYAOGQXmK6Lp/wnVtwJR93ZFns9gHTHP3bnE4Dl5FNa/83qVY5i5+46zwJTtWs+sm0OyDADABKIQ4kO4cygD77+4wiNPPQFE8GGloajjGMIAARpArABl7kurW1dvs3hcXzQlL8YL0+ZCx0UakJFWA4DAMSECFEkmJe3ACbBjPZ739eZRNMhAMs4Bv527GnAEg+uXPlcbvnbJRtLvWVrat31eCHnJTjN2VDifnQFf8X9xA0AgEcuwbP2mXCas/GiqxoCEdDp71i6ofOt0zlm11IAisEUd+7cOSFYtsgmXdPlJduamwunF+6o8zSaGzzNeEbOQl/kFi4EzuGq0oVL/su4OXSbxekwUWkcFtEKj60AxZklYGAYjPsLVU2dUfNO'+
			'1bHhu+HYwPUAkcYBj8J1XZfXt63eU5TnXVXvbmJVrmoiEhE609EVvIAf7rSimE6DLWwO9ob7leHQcMaV0BU3A0OBrRAiEVGbWwezYEZHf/vyAea3x2isKX+me/TzIVxgGWATAHlDy9pN07wzVsx119uqp8wjVskKZSSAkw9O4GT/TxBUCb3+a3pvz61Pzu49vysRTrSKhaRYoQOlIEC22QW7yQG3tQCSICGUGCopqMtdfPHg5b1imh2bOLg0e1P5/gZPo60mdz5EIoIyinOBMzjSdwiICQgMBkK3793+6mZb33f9vw2E+y/5h2mQ/WyqQO2g5s91mJ3It3oBAHlWD1QtivPKufyaN6rU1MwlcV0EIMSoiqgWgUqjoEzD6QEfOh90YLpUASWosLuBvsMdH/3y+R/HbvrjoRE9PjyCywevBg8sOrpoKDh0qvNBB04P+E'+
			'CZBpVGEdUiiFEVgURglxHt/AL4bEZYQu/tHuoq05gGi2jFBeUs4rERhNUISwS1zT++f6rFWCyjjPE5ouW9I2sW7Zu/P67Hqx/Gg4hRFddCPciSsxBKhEC45GEctXHsIgAiZ0hY3trYTUVqEomICtssRGJR/epg99edWy9uUa4HGefDWDQDQAEknEV2vfHLV9ogszmUUThN2fDainEt1N2TDm68G4WGbsqS6cJ9804wmZVLksRETfz0wLK2z9JclczrAGh4lFpH3jy8cKtuYdt1gRKZyN0gmGXA+Uxm7MDIRDTpxOg06RjcFaXGCrjdGwtIJN8pHtUfTEoaGYYGUE+OdW4HlBdzdobesDXihqVoDbvRykfijIxmBA1SnFJubMB5O8NWSJmnnJZx2rRwHemdjhFzvxnzBngi/WiTMPYIU+s0xvfUYpGrKSetJ4yxCQtE'+
			'zsG4VeqT6scrJv5STbIsnoz+sdXrv9n+u3+X/gQzxmk8JOzQ+AAAAABJRU5ErkJggg==';
		me._up__img.ggDownSrc=hs;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=-4;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			me._txt_up.style[domTransition]='none';
			me._txt_up.style.opacity='1';
			me._txt_up.style.visibility=me._txt_up.ggVisible?'inherit':'hidden';
		}
		me._up.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=0;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_up.style[domTransition]='none';
			} else {
				me._txt_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_up.style.opacity='0';
			me._txt_up.style.visibility='hidden';
			me.elementMouseDown['up']=false;
		}
		me._up.onmousedown=function (e) {
			me._up__img.src=me._up__img.ggDownSrc;
			me.elementMouseDown['up']=true;
		}
		me._up.onmouseup=function (e) {
			me._up__img.src=me._up__img.ggNormalSrc;
			me.elementMouseDown['up']=false;
		}
		me._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._up);
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAYAAADud3N8AAAFG0lEQVRIie2XTWgbRxiG35lZrVayNkYJkiw7ln9wiWUiO0I4qaFO2cQNuBDIMYG2hx5NjyG1cYNNg5IeCr0UWugthOBCb/WhB5ME0kOhSYWFUOyAjDCxjZJobf3E1nqlmR4iqWvZTpxSUigdeBlmh9ln3m++nZklQgi87ULfOvF/6H8SKlkbhBBibYs3TO2DjidVwVIDADRNo2fOnJnnnPdRSoUkSdPj4+NfvgJEGvui0ehVzvkU55wwxpIAQpOTk5zgZYgJdk4A165di7e3t/dms1kUi0VQSsEYizU3N58cGxsrW4CNgqZp0unTp78LBAIfK4pCl5aWwDkHY8wA4KwBKQBWlQRAEkL06roOj8eD4eFhaJqG1tbWcKFQuDs+Pm5rAO4Yf/78+Y86Oz'+
			's/IYRQ0zShaRqGh4cRCATslNKEVB1gHUQAgDGGUqmEQCCAgYEBKIoCl8uFRCLxnsPh+AXABwCoy+Vi5XKZlUolAoBOTEx8Qwj51OfzEV3Xcfz4cRw7dgylUgmUUjx58iTIANgsDm01p5qmbSmK8n53dzfa2togSRI8Hg8IIVhbW+saGhq6cOLEiZ+Xl5fLTqdTHhkZ8Y+Ojk54vd5Lhw4dUtbX1xGJRNDX1wdKKSilyGazWFlZAbOA6kAA7P79+3+cO3fubLlcbmGMwePxwGazwel0wm63I5fLtXDO+7xe7++GYZBQKPSh2+2+euTIEYckSQiHw+jp6YHT6QTnHIuLi0ilUhkhRLTRaV2UUjY3N3f71KlTJ4vFYoAxhubmZjgcDvj9fggh8Pz58x5VVS90dHRcbG9vH21paXHm83mEw2FEIhHIsgzDMLC4uCji8Th5'+
			'9uzZT7Ozs59boVYw45xTxhjVdX2ura2tM5/P9zDG4PV6wRiDLMtoamoCY0zlnLsJIU63241gMIiuri64XC5UKhUkEgnEYjFimualsbGxG6FQqA6yJlJNlHNOVlZWDMMwfvX5fINbW1utnHM0NTXB7XZDVVXIsgxVVYnH48HRo0fR3d0Nt9uNfD6PZDKJRCKxkclkvl1fX7997969zYWFBUEA2KtguSqbxT0FIABwADwajf5w+PDhs5FIBL29vRBCgDGG2v4ghEClUgEhBAsLC3j48CEKhcLXV65c+QJABQAXQnDSkEA1qFwLs2XDEIwxTE5O3vL7/Sf7+/sRDAahqiok6eVuWi6XUSgU8OjRI8Tj8e0XL158dvny5VsAyrWJCyGE9aXWbaxxl6EAqBCCxmKx2WAwOGQYRgullCiKArvdDs45dF3H48ePeSKRMFZXV3'+
			'+8fv36V6Zp1oACAKanp3c6aYCiAUoAUNM08fTp07s+n6/DMIwORVGoaZrI5XJYW1vj8/PzuWw2Oz0zMxNdXV3dtgDFzZs3xcDAACTLmqEahkbXOybBOcfy8nLhzp07NwYHB0cMw9hWFMVW7Uul0+lbS0tLM5lMxqiFFICYmpqqm5KEEKKaCI3g/QrZ3NyspFKpjKqq7wL4TZbltBCCm6b5Tjqd/j6dThd0Xa/UgI1HnITq0wOABf76vKDr+vaDBw+KjLGe/v5+WVXVcrFY3NjY2Cgkk8n6Ou51phLrM8vJ0XjqWDPcmgPlqsxqXalqX2Ddad3KbsfWwqsvpA3typsAd0H3AYuqKsCubK9BavVrgXtCXwGm2B2BOuigQKBhTXd17nMdsc7PqoNe5F4JtYCxB9AKfqOb42uhe8B3Ev/GH9iBof9k+Vdu+H8C255enH7x'+
			'eDEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAYAAADud3N8AAAFQ0lEQVRIie2Xa0wcVRTH/3funWV3loXdhS2vFpSutECIpaZQS7UEJGgfUVMbJNFUq/FT/apfrNYmTb+YNCaNz2qiIaRt1NgYSW3pg5ZW+wAsNvQhtJT3Akt3WR77mDvXD86uwwItNaYmxpv8c3Nn5s7vnjPnnnuGCCHwoJv0wIn/Q/+TUGYcEEKIcSzuM7QXOp/ogqEHABRsdUuFW92XueAFlFBhoqaddU8e3nUXEIm/V3ti4w4V6ntccMIk1gGg6GB5g0bwp4sJZi4ANcc2tC9z5C/vn+7FncgYKKFghLW5zGklH5buVw3AeGFFTSHL3Zb18XJnwcsKs0qXfS3ggoMRFgKgEABUBxvh2HJ0/ZRdSUaWdQnykvJhpha0jl3ArUBXM7+FigOvHFYNz8'+
			'+Y/+ZPr7/ktDs+ValKJElCsXMVgnwaN8av4rq/4yozTKC6CACYRAICagAFyUUoz6iClSXCnuDAWenU2oG8viMAqgBIZqeJ8ohGIwGVAJCe/65qryar23ISc0l/pAdlaeUoTS3DpDoBRhiu+TvymQHIdEkAiGXCsktV2LsKs8JCFVDCsMa1DgDwQ8+3FTUn1rdGOrGped8Fv6ZqbHm125W0yrI9Q8l8IdliJ79NtGFT9ubYHAtVoDArzNQCCkDWYbIBTC9/39H6eO1jlUESTKcSxWJrDhJoApLkZFiYgpGgJ31KmShwZaReDE9HSG5Z9npHin1HarLLQkwEFZnVWJlSApucBC44Lo6eQ9vYJQ+E2B2FGi1lABilEm2pb6/P3by4ZIyPZsuSDJc5DTY5CUttedDA0Td92212WJ5zFaS+uGyR+5ns5FxlCP2ozHwa1Vmb'+
			'YKEWTPMpXBw9J5qGGknfZM83P++/9LYRagRTjQtJolSaHJhqtBfaHhoU/W5KKHISHwaTGMzUArvJAZNMbEEWdERkTUlLSkHJojIUOYphNzmgChVnPCdwfPAIUUNq7d41n+3JK3XHQMZAikrSuEZGOr0hPsmbzflslV+7k8nBYTfZka5kwZnghMwscNpsZIk9C25bIR51FiPNkgVvcBjnhk/jrOeUr8d/e9/0QLC+7ZsrU92XegUBkKCDTbpkg/USAAFAA6C92rDlc3uKo7IqcwNKXWuhgcMkyeAyBwDQCEVYi0ACxfmRZhwb+BH+Sf8HX1YcfAcAB6AJITQSF0BRqCnqZkPCEBKTUHNoY116ZkbJuoxKrE5dB6eSDBkJAIAIQvBO+XB+9DSaBo+HQ/7g9o+qv6oDoEYXLoQQTB9w/eURHWBMabHkoakaDr9x9LXqL5'+
			'74mkpkBRGEFKWsREZiOgBgcGII7d4W7ezwyXC37+ahhtqm+qiFusdiL4xZYgAZ86kxVUo8zOHvDpy0LbXm+GRvjmJSpDAPYTQ4jM7ADa1psNE/5vXubH6/ZfdYpy9sAIqdbW+J8vQqMMM3g+6GeEtnLEJTBUav+AKtB9v3hMv5U+HihrDNpMgQhIRIpOv33q46zxXPgbFeXyjqUgDi2caKmFFMCCH0gyIePF8j4fEw954f9wzJI6vNE9ZfurJvdgNCs/WkPNI32vuJ59c7gcn+qZhb4484Bv3qAsACf20v+D3j4WuNnROJU3Z3YbjAZEtKVCdDQV9v20Bg4Mz1aODMAgIAMV4zHFXGfRufIo0xoOqK6D2HIXDmO8RnVA5zWGxs0SiX4sb8foCzoPOAhS6O2dEehUT7ewLnhN4FLGG2B2KghQKBuG866+Y85YhxfUYt'+
			'tJC7K9QAxhxAI/i+Ksd7QueAzyT+jT+wBUP/yfavVPh/ABhIXOyseOTSAAAAAElFTkSuQmCC';
		me._down__img.ggDownSrc=hs;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 203px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=-4;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me._txt_down.style[domTransition]='none';
			me._txt_down.style.opacity='1';
			me._txt_down.style.visibility=me._txt_down.ggVisible?'inherit':'hidden';
		}
		me._down.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=0;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_down.style[domTransition]='none';
			} else {
				me._txt_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_down.style.opacity='0';
			me._txt_down.style.visibility='hidden';
			me.elementMouseDown['down']=false;
		}
		me._down.onmousedown=function (e) {
			me._down__img.src=me._down__img.ggDownSrc;
			me.elementMouseDown['down']=true;
		}
		me._down.onmouseup=function (e) {
			me._down__img.src=me._down__img.ggNormalSrc;
			me.elementMouseDown['down']=false;
		}
		me._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._down);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_autorotate';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._autorotate__img.ggDownSrc=hs;
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 234px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._autorotate.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._autorotate.style[domTransition]='none';
			} else {
				me._autorotate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._autorotate.ggParameter.rx=0;me._autorotate.ggParameter.ry=-4;
			me._autorotate.style[domTransform]=parameterToTransform(me._autorotate.ggParameter);
			me._txt_autorotate.style[domTransition]='none';
			me._txt_autorotate.style.opacity='1';
			me._txt_autorotate.style.visibility=me._txt_autorotate.ggVisible?'inherit':'hidden';
		}
		me._autorotate.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._autorotate.style[domTransition]='none';
			} else {
				me._autorotate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._autorotate.ggParameter.rx=0;me._autorotate.ggParameter.ry=0;
			me._autorotate.style[domTransform]=parameterToTransform(me._autorotate.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_autorotate.style[domTransition]='none';
			} else {
				me._txt_autorotate.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_autorotate.style.opacity='0';
			me._txt_autorotate.style.visibility='hidden';
		}
		me._autorotate.onmousedown=function (e) {
			me._autorotate__img.src=me._autorotate__img.ggDownSrc;
		}
		me._autorotate.onmouseup=function (e) {
			me._autorotate__img.src=me._autorotate__img.ggNormalSrc;
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._autorotate);
		el=me._reset_view=document.createElement('div');
		els=me._reset_view__img=document.createElement('img');
		els.className='ggskin ggskin_reset_view';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAYAAADud3N8AAAFqUlEQVRIiZWXXWsTWRjH/2fOTCYpbdNJE2rTprZmDdY2KqISFMFFvFTxaqUX4gfQK/cD+CmEhQUvvNkrr1x0YS9cWBYKZbcgxYgpUikJIW2SppnMy5k5Zy+aM06n6YsHHs7M4czze/7PnPOcGYKTN3LIuPgOH0c6GjQn2kehUfihwRwFDUOiBgC4fft2VgixUqlUxoUQyGazPBaLPaSU/v7+/XvrMPhhUDmu9K+VkBEAuHHjRlbX9X82NjbSQ0NDAIBut4tsNsuFEEtLS0u/maYJALAsa/358+c/HAUNA6XRvikAlCtXrkymUqm/qtVq2nVd3LlzB4wxfPjwAe12G6dPn7ar1WpciD2RlNKN1dXVWQlQjwHS/pygLxaL2YmJiT+3t7fHfd/HzZs3hW'+
			'EYjq7r6Ha7+tevX0m1Wo1fvnwZruuCEIJOp4PV1VUMgh4G1Pq9Oj8/Pz03N/fONM2UZVkolUoilUrZhmFwADhz5owthNCr1apSqVQwMjICxhg45/veKz0BUAMQKxQKMwsLC39wzo2trS2cP39e5PN52zAMcfbsWWIYBgghYnR0lHc6Heo4DkkkEuh0OrBtu3316tVfyuWyJ6EnAl66dOkdpXSsVqthbm5OLCwsOPF4XOTzeaiqing8Tggh8H1fGIbBm80mNU2TnDp1CplMZrTT6ZSLxeLncrnsSeggYKwPzF27du3t8PBwcn19HVNTU2JxcdHRNI3n83lQSjEzM4NkMgnXdYmiKCCEiEwm49frddpqtUgikSBDQ0MPWq1WeXZ29nN4VUaBWqFQyF2/fv1tKpVKrq2tIZPJiGKxGAAVRUEul4Ou61AUBcPDw9jZ2SEb'+
			'GxtYWVlBvV73Nzc3abPZJCMjI0TTtAe7u7tlCT2gEIB269atvxcXF5PLy8tIp9Pi4sWLjqqqgcLZ2VnEYjEAgNweo6OjME0TmqaBc45EIuE1Gg1qmqZSKBSI53kPBkEDK5VKP9frddi2LZ49e+bUajU+MzMDTdOQTCbhOA4cx0Gj0UCz2US73cbu7i4opaCUQlVVNJtNPHnyxHvz5g1tNBqCMeaqOFgAVLknX758+RMA+ujRo19LpRK+fPkCSilyuRx6vR6mp6fjGNDW1tbsCxcuCEVR0Gw2QSkV9+7ds168ePEjAF/u02ipk1YGoGQymb1JhGBqagqUUnDOAQBPnz61ZbnzPA+vXr2Ku64LzjnOnTuHzc1NTE5OIp1OA8C/AISK/UV8YGH/9OkTAGBsbAyUUvi+j06nAwAwTROe5wEAGGMQQsCyLLTbbaKqKnK5HN'+
			'LptNja2goyoWLvFDjseAIANBqNQKnruqCUotVqBYsHACil8DwPQgj0er0956qKXq+H8fFxGaSQSuUNDwWwD76zsxOkTzqUve/7oJRC13XYtg0hBBzHAWMMlFL0ej3heV4QeFTpIAMA2LYNAHAcB4QQ2LZNJMDzPLiui263i7t378LzPDDG4HlekBnGGNne3g78KcdAhVQohABjjFiWRbrdLlzXDQKZmJjA9PQ0Xr9+DUIIGGOwLCtQzBgLpzdQiigo3HzfD9Lmui5arRbkCpWKFEUJFpLv+4FazjkYY0GQEgocA+acw/f9IM2maYIxtveAEFBVFaqqghASLC65peS1XOFhaBgchQtCCDRNiz9+/BgAUKlUwDmHEAKxWAwfP34EIQScc8Tjcdy/fz9wRAg5EATBtwok667eN3l4K5OTk8vRlB/TogIAALVabURCo3VX'+
			'78M1fCuN88dA5HbzAXgAWMjkmADwXxh64FgLZSD4AhygIjzGI1C333v9cRnYvn0afoiEIo9CBzX5fNhHGLQv0GhF8kPA8HfuSaBR8D51UaicHG4c306ek/x6SMcSIsEcA9RGt4ycEIadBBoGR+v4gTbo5yiazu+FyutDT6+jnJ8UdhR80D3+B9p3/OKiSYa5AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._reset_view__img.ggDownSrc=hs;
		el.ggId="reset view";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 272px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._reset_view.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reset_view.onclick=function (e) {
			player.moveToDefaultViewEx(3,0);
		}
		me._reset_view.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._reset_view.style[domTransition]='none';
			} else {
				me._reset_view.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._reset_view.ggParameter.rx=0;me._reset_view.ggParameter.ry=-4;
			me._reset_view.style[domTransform]=parameterToTransform(me._reset_view.ggParameter);
			me._txt_reset_view.style[domTransition]='none';
			me._txt_reset_view.style.opacity='1';
			me._txt_reset_view.style.visibility=me._txt_reset_view.ggVisible?'inherit':'hidden';
		}
		me._reset_view.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._reset_view.style[domTransition]='none';
			} else {
				me._reset_view.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._reset_view.ggParameter.rx=0;me._reset_view.ggParameter.ry=0;
			me._reset_view.style[domTransform]=parameterToTransform(me._reset_view.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_reset_view.style[domTransition]='none';
			} else {
				me._txt_reset_view.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_reset_view.style.opacity='0';
			me._txt_reset_view.style.visibility='hidden';
		}
		me._reset_view.onmousedown=function (e) {
			me._reset_view__img.src=me._reset_view__img.ggDownSrc;
		}
		me._reset_view.onmouseup=function (e) {
			me._reset_view__img.src=me._reset_view__img.ggNormalSrc;
		}
		me._reset_view.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._reset_view);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._fullscreen__img.ggDownSrc=hs;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 303px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.rx=0;me._fullscreen.ggParameter.ry=-4;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._txt_fullscreen.style[domTransition]='none';
			me._txt_fullscreen.style.opacity='1';
			me._txt_fullscreen.style.visibility=me._txt_fullscreen.ggVisible?'inherit':'hidden';
		}
		me._fullscreen.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.rx=0;me._fullscreen.ggParameter.ry=0;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			if (player.transitionsDisabled) {
				me._txt_fullscreen.style[domTransition]='none';
			} else {
				me._txt_fullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_fullscreen.style.opacity='0';
			me._txt_fullscreen.style.visibility='hidden';
		}
		me._fullscreen.onmousedown=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggDownSrc;
		}
		me._fullscreen.onmouseup=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggNormalSrc;
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._fullscreen);
		el=me._txt_autorotate=document.createElement('div');
		els=me._txt_autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_txt_autorotate';
		hs='data:image/png;base64,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'+
			'jYuPTpp58uePPNN9+rrKxMtrW13R4Egbt9+/Y3HcfxlFIBAIRhGNq2HRqGQX/605+2P/rooy2PPPLIN9vb29/o7+8famtra5oyZUoDMBKKlFI+splwJpMJKaXk+eef71yyZMnce++9d82sWbN+09PTc7S2tnZGY2PjKqXU2Zdffnl1KpWSYRheseL1x2CsCc41AFBSSqG1dlpbW+c6jjP4k5/85LDWGlJKACCMMWUYhm5vb//5ihUr/mrZsmVTd+7c+cGsWbNebW1t/fP7779/JgCcPHly/1NPPbVHSqm01j4hRAIgtm27hmGQ/fv3f/LDH/7wmY0bN963fPnyr+Um1N3d/d+bNm36D6VUoJQSAEAICTKZjKu1pr7vswceeGDHs88+m2lpaVlZV1c3FwBc1x187rnnfvDee++dUUoJQogLAFprP5PJ+IwxumfPnlM3'+
			'3XTTy3fcccealStXrgGAjz766OCRI0feaG5uXimEsKWUglIqsmOmGWM8DEOycePGf37uuee+Pm/evFvnzZt3KwD4vn/86NGj37dtO6isrJTDw8PXnEEDY1eqJMgWNgBEo9FoQUFBQZwxFo+MwDRNkwOA7/tKKcUAMK01MQyDMMZMxphpGIYyDENalsVqamoK29raKnt7e892dHR87LouzcoKACQIAkMpxRljFACJxWKMMWbcddddU0pLS639+/d/dOrUqWHf93XWA4XWWjuOQ4UQHABjjBmMMSMSidD6+vqitra2SalUKrV79+7jUkrpeZ5WSgWEEKm1po7jGFprDoCZpskNw6DTpk2LL168eMqJEycGOzs7zyqlAiklgiBA9ll7nhcJgiAipTRM06SmabJIJCKXLl2aaGpqil24cOGj3/72tx/GYrGLhYWFdklJiV'+
			'NZWSnuvvtuda0heiwJNjBCsAUgUlRUVKC1tgoKCng0GjUAECEEwjBUQgiqteaGYTDDMFiWXNMwDHDOFecc2VJhYBiGp5QKfd8nnudJKWWotSZKKdP3fSM3BuecmKZpcM4J51xSSkUQBCIIAq21DqSUgdYavu8z3/e51tpgjHHDMFg0OpL/RCIRZD1OSClD13W1lDIEoIQQ1Pd9Q2vNs3I8EolQwzCIZVmMEKIopR6AIAgCLYSA1joIggCe55lCCItSahJCqGVZzDRNWVBQ4MdisXQ8HrcTiYQdjUbtZDLpJpNJ74knnghyR7svyh6cq7wEGPEwWJYVAKCO4xAyYorwPE9rranWmodhSAkhlHPODcPgAMA516ZpAgAsywoNwwiklKHv+wiCQAkhZDarNnzfZ5xzxjlnQRDQMAwJ55wwxkJCSO5crYMgCMMwDAFASmlI'+
			'KbkQgvARGAAoIQRhGCrGWEgpDTOZTJglShJCtFKKSSkNIQTjnBucc0MIQS3Lgu/7lFIqDcMQhBAphNDZhDD0fR9KKe55Huecc601BcCUUopSKgghnmmaGd/3HUqpl0qlRDKZVJdd4c+B60EwAQDHcRRjTKTT6fw+BIC2bZsAMGKxmKG1pkIIZlkWBwDP83QkEgEA7bquNAwjIIQo13U1IUQ7jqOyBsK01rlFZgCIZVmEEKJzJFFKpeu6mlIqHcdRAKCUYlprIyvLLMtirusiEonAdV1FCAkZY6Hv+zL3HQAwSiezLMvQWpMgCEAIASFEZhPHMHuzpSmlKpPJICvHgyBgAKhSikQiEe37fhiGochkMm5xcbGIRCICQDhp0qSr3o3/MRjLEP2ZO+Bsy12Sj1aSu05keX3ZqP4aI6W60SU7nSdj5OnJlx1d6ss1gsvrzo'+
			'2tRski793l5Mgo2fAyOjFKLn+uuYgXZltO72c8+IsQovM/MkfM7/yTIQ+jDYLk/eZkcuPkfkdjtCHlzyW3SKMXGvisvivpHG1Q+SeEfLnRBF9NZ75e5MnkG9SYZM75GOsQnf97NYJz78llni833tWM5HJVn8stcr7c1XSO/o4ryY3+vqvNd7QMGdV/tEGNGcb6skFf4fn39b1W/D5jul6ynxef+X/XdVU0Fnvwl/jiYixvk77EFxBfEvwnjv8DawijpnMiQvcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_autorotate);
		el=me._txt_reset_view=document.createElement('div');
		els=me._txt_reset_view__img=document.createElement('img');
		els.className='ggskin ggskin_txt_reset_view';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt reset view";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_reset_view.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_reset_view.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_reset_view);
		el=me._txt_down=document.createElement('div');
		els=me._txt_down__img=document.createElement('img');
		els.className='ggskin ggskin_txt_down';
		hs='data:image/png;base64,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'+
			'nVIyctmdAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_down.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_down);
		el=me._txt_fullscreen=document.createElement('div');
		els=me._txt_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_txt_fullscreen';
		hs='data:image/png;base64,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'+
			'/3vP89TEiRPXHj169O7XXnttJ2OMzZ8//+pJkybdtH79+jtqm7zWWqRpWmCMQQ3wSqXSOHny5LbLL7/8p5TSIgDAokWLvrF69eov79u3L1qyZMkN3d3dd9X0lctlmDdv3lIAIJMnT/73o0aN+nV7e/vCNE33pGnaRyml999//3fK5fKcWp/W1tYlXV1dL69YsWKl1powxug999zz7XK5/IUaz6hRo+7o7u7+zapVqx5K09RdeOGFyzjnDRdeeCEAQMXzvJ6urq5bwzCcv2fPnr1JkjitNVNKNQghAmNMcMkllyyTUnbMmjWLKKWOFYvFC6677roFhBC01lZ93x+/cOHC67dt2/ZlRCSUUvKd73znrvb29oU1O1paWr4xduzYf1y+fPm/kVIKa6385je/OW/GjBl/X+M5//zzb9i1a9fTAADVarUpiqJRY8eO9b/+9a'+
			'8v932/u8bX1NT0vXK5vGz37t3rfN+3HzkmISJDRIGIXGvNnHMkjuPBvXv3/hcpZcYYM4QQ+/bbbw/29PSUAQDiOG7gnDcjIrHWermeoBZSrbVMKeXnYRbSNPUqlUrj1KlTr8qyrP973/veoilTprSPGTNm9N69e9m8efMu6+7uvuvYsWO//dnPfrb28OHD8ZIlS+YcPHgQWlpaGgAASqXS3/7kJz/5xvbt2wedc6OWLVt2Q7lcnvPWW2+tf/zxxzcKIexXvvKVv5s0adLiO+64I/zRj3707D333HNduVz+wptvvvmrxx9//GXOuVm0aNGcSZMmLf7a175WXbNmzRPWWt7Q0DB+y5Yt97/22mvb5s6d2zlt2rRHx4wZ8+UkSX6klHJ5SG7IsqyUJEnBWss9z2t/9NFHH9i+ffuH999//+0dHR2X79q169F169Y9c/31'+
			'11988cUXL5s7d+7nn3322Xfuvvvum9rb2xfu2bNnfV9f3wuUUrdw4cKrxo4de/Ndd91VWbFixVNTp049+6KLLrqtUqkcfPrpp/teeumlfVdfffW4q6+++voc4GIcx+Wbb775HiFExyuvvLJi+/btO7q7u8m8efNuKZVKK8aPH7/vwIEDr9QAroHMEJEZY2gtxIZhOLh8+fIXKaUVQkiWrwbd3t5+DgBAkiRFQkgLItoawJRSHwB0DWCttVdLlJRSXhzHjTt27Nh/7rnn3njffffd19fX92xfX98hSmnL5MmT56ZpeuK73/3uf9RaM0JIceXKldsIIfilL32pDACwdevW51599VWFiC2IKHp6euYODw8fRsS2r371qzcTQpxzzlWr1UPnnHPOLKXUfx0/fvyVlUrlMACMWrRo0U2UUgcAtlqtHhozZsysJEleNsbwMA'+
			'wP9PX17SsUCsGmTZsOTJs2DYwxrFKp+FmWOWutb4xpEkI0pmla0Frz48eP79m4cWNVStnU399f7ejogFWrVr0mhGg+duwY5KA0pmnaevbZZ39hcHDwvR/84Acb82Ol/eEPf/iPDzzwwJjOzs451trNM2bM+BznvPDQQw+t2rlzZ4UQ0tDX13f4xIkTTy1dunRpFEWNkydPntzS0jLh8OHD75x11llTxo4de76UMouiaKBQKFSLxeIN1trNvC7yIpyqLBkA0IQQlzdI01QBgM0TA8EY42EYBjnADcaYBs65cc5xAABEZNZakwNMlFKUEMLzkE3DMJRPP/30wSzL/sOVV145d+nSpf/uvffe27Jy5cpf+b7fHkXRoDHGV0ppxhgYYygAYJqmHgBAf3+/CcPQR0RJKZVCiIBznrW3t/dSSk8faeI4Voio0zRt5JwHjDHV'+
			'0dExnhACOcCYpmmGiFmSJD4iEqVUUq1WPUQUQRBwAABjDIvjWOQAC6WUpJT6nufJPE8haZpKRCRaa5YvjIBSyuI4lrmfgizLGnzfH/Xuu+9uy7KsgVJKcjvciRMnKp2dnaOyLCt4nlcEAHj77bdD55xEREEIYVu2bBlaunQpxHEcCCEkAEChUGjzPC+glDohhGGMaaXUHmttmKYpqQFcA1cTQjJKKQMAYIzZHKQoy7I0TVNI01RIKXkcxwIAwPf9Ruech4ggpSzk/BYRbS7bKaVcbRZZa0mWZRwR4amnnvrwqaee+unMmTPHLF269B+mTZv2T2EYDnR2dk4pl8vFgwcPDhtj0BhDnXPWuVNilFIQRRG31vJ8sp0cHh6u3Hvvvb/inDsA0NZa19jY2HDkyBENACIMw+FKpTJ87733PskYM4yxzDmXtrW1BceOHYvyiQ'+
			'mICHk2j57nYc3mNE2ptRaccxQRmXOOGWNIrU+apmCMcc45zFcs5ZyzJElqySVLkoQNDw8fGjdu3IVa698AAMlzFdvT0zNjeHj4UJZl7NixYycBAG699da/Xbt27Z+stUgppXPmzBmXj5/v3bv3JADA7t27P/j5z3/+m2KxWG1oaBhsbm4eGD9+fBaG4YFyuex4DVwAsACgnXNpPmsdIcQSQqBSqYRxHKssy0SWZVZKSX/xi1+8u2jRonjOnDlznXO0paWF9/b2XrR///63tdaKUprBqREYrXUGeXkSETFJErdgwYKeOXPmXLx58+bXe3t7O/PVjevWrXth2bJlFy5fvvwfNm3a9DSlFC644IJpv/vd7151ztUmnA3D0CAip5TiY489tuHOO++8adWqVTdt3rx5WxiG0ezZs/9m4sSJU1euXPnYiy++eOCJJ5545bbb'+
			'bvvSqlWrbty0adO2OI4rV1xxxd/09PRMX7t27U+ff/75nYiIhBCsVCrKWqs55zq32VUqFZcnWQ4RUSllOeeGEOIQkYRhmAkhspqNURQZxpjVWte2JhfHsdu4ceNLN9544+2rV6++a/Pmza8SQnD27NmfLxQKrevXr/9lHMe2r6/vT7Nmzfq7uXPnXtXa2tryxz/+8eCUKVO6pk6dOi33k33rrbdOvvHGG6/PmDHj821tbQ07duz4fUdHxznTp0//QqFQGLdhw4aZURQN8jpwDSFEWWtjpZSx1jrGmMlnXxTHsUnT1GmtJSLSOI7pww8//NPbb7/9rhtvvPFWAIDh4eGDDzzwwCNZlkUAkAAAUEpVlmWRUsrmgOs0TdOBgYHhcePGnd/b23sRAMDOnTs3b9iw4b8hol29evW/XbJkyd3XXnvtt2or/8UXX3y+paUlyG'+
			'VkSZJEiGgppW7NmjXbW1pa+LXXXnvV4sWLT2enr7766m+efPLJd5xz5JFHHtleKpXgmmuumV/Ps23bthefeOKJPwFAQim1AIBRFCWImHHOs1oUqlarRmuN1lqTZVlGKRVCCEspdfkKjrTWCaVUAQDEcZxSSrVzTuULRoVhqNasWbMNEc3111//tZtuuunW/F38wgsvrFu9evXriEjee++99Mc//vGab33rW//qsssum3PZZZfB4ODg4V//+tfP3XLLLf/SOZfGcRzed999z6xatSqbOnXq53p7e6cBADjnwr179/7rXbt2nWhvbzcEAIoA4J+Ktn6hWCw2FAoF1tbW5jzPOx0Sh4aGXJqm0hjTxBjzi8WiaGxs9D3P82677bYJURQNPv/88/uiKKLOOe2cyxhjRCklCCFICHGUUp4kCUdE5vs+E0KwW265ZcK77747'+
			'sG3btuP5FuHyIxXeeeedExhj9pe//OXbWmvlnLNKKVKpVFgURdI5FzDGfCmlkFKyIAjYokWLzqWU2scee2x3FEVUa82NMSCEAM/zKOecLl68uNvzPLV+/fo3lVJojLGImOSAWGutKxQKcbFYjDzPM3k1ylarVTcwMCC11k2+7xeCIGC+73NCiI+IlHOecs7ROecppXgeAR0hRBpjOGOMeJ7n8poAvfXWWycRQty6devezrIMtNbUGAOcc8I5B8YYW7x48eTBwcFsw4YN+7XWxBgjjDEMAIBzbnzfd+eeey6dN29eGQCOvvLKK28UCoXhUqlUKZfLEYFTRxoJAF6hUPA9z5O+79NCoaBbWloAAODkyZOYJAlVSgVpmhY550EQBLxYLEopJRdCOCllaq11cRwTa62pzVxrrZfvM8gY40opDgCMc06klCzfIggAoHNOAw'+
			'ByzonneUgpNVJKY4xxiKiccyaKIkiShKdp6mutpXNOSimF7/vM932SryqjtXbGGJYkCdNaE845CCGo53lUCGHyKlBmjHHGGKu1TimlJrcHpJRpoVBIhBB2eHjYISIMDQ05rbWnlCoioud5HgmCgDHGZH7rluXnX6GUYoQQxzknNcA559TzPJRSUgAgvu/nxTdrkyTBNE2Jc44SQojv+5QxRjnnFE6dcJzWGowxXGvNEBEopdb3fed5ngqCIGpubq4Wi8VqEASVhoaGqKOjI6uFaA2nsk5HCNGe5xFKqQ3D0OUhkRpjaBRFxjnnCCGpUoonScKNMTRXpPK9B3OHGc/ziHOOK6UQANDzPOac44jIgiCgxhhCCMH8dgWNMRYAQAhBpJRIKTXGGEcpdVmWKWOMSdMUkiRhxhiZJ2uec47nJUjwPM/VgMqyjKZpShGRGmOI'+
			'tZYYY4iU0nDOlZTSxnFstdbWGKONMaevMRsaGrRzLhNCuDRNMS9tQrVa1cYYJ6X08joB5GOijDENACiE4Gma1iYvICJHRC6EYMYY0FoTQghorbGWRUdRhEopkmUZ9TyPKqWoEIJ4nkdyDFBrjVmWMURkpx4RZ6111lpNCMnCMIwIIRFjLA2CQCOiIXCqmsXqW3NzM2GM2dqRwzlHnHN0aGhIAIAMgsBDRCqlZFJKQim1jDFNCME4joFS6pIksfngWM1pvu+zvJhCpZS18/dpStMU63iBUmoLhYJVSlkhhKnJrFarNHeqQDxVT88vJ4BS6mp7aZIkxDnH4FQRh+QrkzDGbBAExhijAQCSJHGUUluTDwBAKTWcc8MYc/U2Hj9+nAKAVywWa0dCgog0d7glhGAQBCyKotMX9/mYT9tZNz6X1wdckpxKWZIkoXlkgxpvHg'+
			'Fd7qPT+gAAfd9HSqkpFou6oaEhZYxlQRBkWZaZq666ytbKlKerWXkD+OhFcg0MDqcuJhj8+VIa4FSSZuv46z/NqecjI/5D3XM4w3MLf04C6+XX7K61ms01R9Rsrx9fvex6mfX21t9W1XSPvKKkI3QCfNRnNfvqx1Tjrx/7SFsBPooBqXte/5kUGfG+JkfDqZNKrZ362qPOmPpWP+h6g+sHN9JhI7+3Qvi4zPr/Ix13JpBrckc6YuSEHGnzmfTX6z2TzJEAnwn0et1kxDMYwVv/fuTiqZfvRvQ5/TXHCP0jJ89IP9UmratreCannsnYMwmu73MmR+An8I7s92nv/5Kj/9KkPBNvvc4zATqSPulLjk+KQJ82aUf2wxG/I/078v2Z5I4czyf56/8a+tje/M/U539F7l+D/jnt+FRZ5K/5PdRn9H+e6KezfEb/L9NnAP9/'+
			'Tv8DlFPX1eaXRKEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_fullscreen);
		el=me._txt_info=document.createElement('div');
		els=me._txt_info__img=document.createElement('img');
		els.className='ggskin ggskin_txt_info';
		hs='data:image/png;base64,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'+
			'WutbaykA2Pfffz8o6pMUdQ+ccx5FEQUAyxgr6RsppbAxxgIAWGtNHMeGEKKVUr1HuZIH95bOoHhQVkqBUqr3cxzHpc8gpbRCCMM5V3AyYwMpZSyljK21GgAgiiIThqGNogiy2eyRESNGTBBCsFKL45iOHTt2ciaTaQMA67quCwC2ra0tiuMYOOf46aef3r5nz54/VVdXn8E577zzzjtXFedlH3jggVeiKNo/ffr0H1944YVjGGNOMpl00+m0l0qlfM/zPIyx8/rrrx8HAJg0adKEOI5pMTI5jY2Ng+rq6ka2tbW1FY8mpK6ubuTo0aMHGmOoUopIKenkyZNnAAC0trYGYRg6URS5d99990u5XO5IKpUacujQoTc+/vjjghDCCiGMtdYUDVhHUaTjODaccygWN0BKSZRS9MSJEz0AANdee+10a61jrXUwxuy6666bDA'+
			'CAMbbGmN7SZBRFmnNuCoWCKTlUoVCQxhhdBEmFYaiFEKYIcG+ho0QGigdkY4wyxkgpZan8Y8MwFFprWZy8LBQKMWMsRgjJomVGjDGBEFIAAPl8PgYATAhBL7744rqvfvWrS37xi1/cuGHDhtcAAGbPnj0zmUxWr169+hnOuXjllVfeuvbaa69csWLFl9544433pJTB+eefP2HkyJGTOOddnucNuPvuu//phhtueEgppbXW9sc//vGtP/rRj+694IILnhg/fvzL+/bte6uzszOilFadccYZ0w8fPnz0zjvv/NP777+/4ayzzpq9fPny5B//+MetDQ0N1XPmzJkrpYxWrlz5thACF49vsHTp0kWbN2/e1N7e3jF9+vTJw4cPn7Zv37633njjjU6MMdFaG9d10dGjR/dWVFSc/swzz6wWQsRRFBl1shITF/UpOecijmNr'+
			'rcVaawMAoJSyURTBQw899O7MmTO/MHfu3C9VV1fX79y58/D48eOHjBs3bkIxyihjjEAIGWstiqJIWGslpVQX+1eFQoEbY0SRX3LOY2utKi/o0CLSpVKiQghJpZQQQjDGmMIYG2MMcM4LCCFRtBbOOQ+11jHGWAIACCECY0xMCImLHsyttYQQglesWPGOtdZcccUV11511VXXFi05ev75559+7LHHtmmt0aOPPvpuKpUil1122SUjR44cXeLZvn37C/fff//qJUuWTJkxY8aSe+6559iNN974DOfcvPPOO+Htt9++7Oabb/7GgAEDZkydOnVeaWFRFHVs2bJlhxBCffvb3/718uXLC1OmTLl49OjRkwEAwjDMLF++/Jfbtm3LOI5jS3XMtWvX/tvVV199LWPMBwDo7Ozc3dLSsiqOY4VOkiWEmFGjRk1pa2vb+vbbbx'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_info.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_info);
		el=me._txt_left=document.createElement('div');
		els=me._txt_left__img=document.createElement('img');
		els.className='ggskin ggskin_txt_left';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_left.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_left);
		el=me._txt_right=document.createElement('div');
		els=me._txt_right__img=document.createElement('img');
		els.className='ggskin ggskin_txt_right';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_right.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_right);
		el=me._txt_up=document.createElement('div');
		els=me._txt_up__img=document.createElement('img');
		els.className='ggskin ggskin_txt_up';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_up.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_up);
		el=me._txt_zoom_in=document.createElement('div');
		els=me._txt_zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_txt_zoom_in';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAaCAYAAAB8WJiDAAANf0lEQVRoge1afYxVZXr/vV/nnvs1d/i4IwIOqKCOoysRUMKyYdUKiptQuotNQ2oNacsfxgQkrW2y2bgqSavbTdtErdnVIqkiTUzUSKRUaU0VWJBIadOhWxiCMOIwMMydc88957xfT/+Ye+kwouu25k5j/CVvzj3nPu/HeX7v87zP+7yHERHaBcbYJbcA8Nhjj7He3l5WrVbZ0NAQ7+3tBQAEQcC01gQAPT09HoAHQM122jfoy4CI2OWef9lxtVXnk0Awa5WbbrpJVCoVUS6XeVdXl+ju7haVSoV3dHSgWq1SZ2enC8PQh2HowjC0PT09DmMkU5tJvjgZAaA1IcvlMouiiJYvX06/zrjaqXPZtp7G0CKXAxDnzp2TQRCoIAjUhQsXZBiGylrLGWNMCO'+
			'Gdc65arRoAWinF+vr6MI7kdo6XAcBbb73Fu7q6eBRF/KqrrsL8+fPZtGnTqK+vz7W8DBFNuocZj3YTDIwjOMsypbXOx3GcW758eXXlypU3SSllEATI5/M+DEMbhqEOw1AnSfKhMeYsxlz1ZzzPRKX+Kjf6ef9PkB0/Xj44OMhnzJiharUanzJlCoaHhyGl9EEQsOPHj7trr70WaJL8RWNrJ9rtojnGlCUBqCuvvDJfKBSKHR0dhS1btiy79957/+Zy9Yjo9MGDBxcyxtKuri7daDT8+P+TJKEoimhoaIgAoOU+8/k8myjTuh8aGuIAUCqV2Jw5cz6jhCRJ6NChQ3j99dd5X18fS5JElEolOXfuXDVr1ixx//33V1asWPFXRPTxnj17/mTOnDmmXC670dFRlyQJ5fN51rTqz7jvr7OLBprWAEDWajXlvQ8B5Ldv3346'+
			'iqJHlVKyUCigVCrZG2644bZp06Z9/+OPP/7h0aNHQyJi+/fvl2EYUj6fpyAImJTSa61pYGCAkiShRqPBOOe8s7OTVyoVBEHAhBAeAAYHBwkA0jRlAHgul2NBELAzZ84AAIrFosvn8zR9+nQXhqFjjKGrq4udOnWK1Wo1wTnPJUmSazQa8pprrlkopbwHAE6ePPnE4OCgKRQKznvvpJS+VCqRc86Vy2XXaDR8T0+PIyLfbmuejDUYaLpoIgqSJFFSysIHH3zg+vr6jk+fPj2YOnUqVatV/fTTTz+SJMnhV1555Yj3PsyyTGitXRiGKJfLLAxDKKVckiS+Vquh0WjAWsuEEBwA11rzQqFAzjmy1lKSJEjTFNZalsvlRKPR4GEYIk1TFAoFyrLMFYtF672306ZNsx0dHa5cLuOKK64Q586d40mS5KIoyp8/fz544okn/v'+
			'2pp576SaPRGPj000/LpVLJFotFZ611SiknhLBnzpxxxhgNwKAZNxDRxd1AO9BugmnclQAQEbFGo0FKKWGM4Wmacq01W79+/T1KqSsOHDjw5yMjI6HWGtZaK6Vk8+bNq6xYseKOYrF4ZZqmA++///6758+fH3XOwTnHlVK8u7v7okySJJ/s2bPnn/r6+upaa8yfP7+yaNGinkOHDh1btGjRdXPmzFkwODh4aM+ePb9YuHBhtbe393vW2n87efLkzmYEz8vlsoyiKJemaSFNU1Wv1/mhQ4f+QynFarVaZ3d3d7h48eJ5fX19R2fOnJm/5ZZbvue9//jIkSN/VygUMDAwQLNmzTJt1vekuOiL5CZJ4nO5nJdSXgx8rLXo6urK9/b2/mB4eHj/tm3bjlhrlTGGSSnZmjVrrr/nnnu2KKVmtBpcu3bto1OnTt309ttvH+Oc'+
			'44477rju7rvv/vF4mQceeOCPdu3a9cfvvvvu8Z6enltuu+22p26++eZ+AJBSFru6un5/9uzZu8vl8rcA1AqFwsP33XffoydOnNhRKBQ8EXHvveScB8aYnLVWfve7393IGGO7d+9+dP78+b29vb1Pz5w58x/K5fK3iChSSl23ePHinsOHD/9pM25wGLefbwd4uzpqgiaUS54xxryUEhs2bFgphChu27bt5yMjI7JWq+XiOC5Vq9UZq1at+mtjTLJr164fbdy48bfeeeedH2ZZNnTnnXf+ZbVa7Z4xY0b3ypUrf6q1Tnfu3Pnjhx56aO2uXbt+lKbpuZUrV/6kUqnMrdfrnQAQRdHI5s2bH9+6deufAUCxWFzw0ksvPfziiy/+obX2l8Vi8QdCiEAppUqlkpJSBlmWBd77YpqmRe+9sNbKKIo6oygqAYCUctaTTz65/r'+
			'nnnvuDNE3/OQiC9SMjI0prLZv6/pXR+1eJdhM8Hiyfz/MgCHihUBClUkl0dHSI5cuXd9144433nj59+r0DBw5caK69xTRNy6tWrfoNIUTxzTff/Pvt27d/Mjo6OuXVV18deP75558TQhSXLVt257Jly+4QQhR37tz52o4dOz6JomjK9u3bP3nmmWd+JoQoLFu2bHmj0SgDwO7du38RRVHn/v37UwDo7+/fe/z4cVar1ULnXExELI5jqZSSQgjpvZfW2nyapnljTNFaK621Msuyznq9XgSAgwcPvlur1Uq1Wi2s1+v9AGCMkWmatp1cYHJcNDD2ooKIRBAEMpfLBWEYqnw+rx588MHvA8Czzz673XsvnXOiqVhZLpevBIDXXnvtFOe8xBgjIQR9+OGHKQAUi8UZrSj1jTfeOGWtLQEAY8x99NFHGQCUy+WuU6dOjQJA'+
			'lmVBlmU5YwwBgDFGRFGkcrmcbO6TmXNOJklC3nsuhFBEpLz3OWNM4L3nRMS11nmtdQAA586dM1EUqUKhIJxzHABGR0dFpVJh4969bZgMC76YOADAlVJSKSWCIBBLliyZPnfu3G8fPXr0H8+ePZtIKSUASUTSe6+OHTt2BgDWrl17q9Zaaq1zWZapdevWfRsA+vv7B/v7+z8FgNWrVy9oykhjjFq3bt3tAHD8+PFBay0DAGMMxXHsG40GAYBzDvV6HVEUERGBiJAkCbX2rdZaEBF3zrEmuSAiaK0xbpKg0WggiiLy3hMAxHFMzrlJSXZMVqpSAJBBECghhOKcK2st37Bhw+8CQBiGhU2bNv0mAO+9hzFG7NixY/8LL7zwrytWrDi9Zs2a3+nu7v6Xw4cP9y9YsOCahQsXfufChQufbN269Qjn3N91110Da9as+e3Zs2'+
			'e/f/jw4f5bb7316oULF35neHj4zMsvv3xk9erVswHAWmvq9bpWSmVodlar1YxSyqAZDEVR5JxzXmsNAN41obW2+J9g0TjnbLMNU6/XjVLKNLdEqNVqfnh4eGLs0RZMZqqSA+DGGG6M4evXr79p5syZtwLAvHnz7p5Y6eDBg7/ct2/fuYcffvgvtmzZ8uCSJUtWLFmyBAAwODj4X5s3b/55FEUZY8xt3Ljxp48//vjvLV269O6lS5delHnkkUf+No7jOhElzWaTNE1j730GAIwxE8dxGgRBiibBaZq6kZERW6/XubXWAjBpmmoppWeM+aaVx4yxFACIKI3jOM3n8xkACwC1Ws3EcXzJiVi7MBmpygBAAUApl8t1FAqFKYVCoVIqlfIdHR2iVCqxXC5HnHPnvTdpmqLRaEhrrSQiLoTgUkpx++23X3H99ddPP3bs2ODe'+
			'vXuHjDFMa01CCJJSQgghmzJTT5w48em+ffuGrLXce58RUQoAWmvlnLNCiEwpRYwxklKmnZ2do9OnT28QkR4eHnZnz551IyMjcmhoqCSE6JRS5ovFoszn8yoIglBKaYUQGefcOuc8EWWVSiWaMmVKWiqVknK53Lj66qvjTZs2ZRgj2X+Bmr5STFYmizD2ks4Yo7Msy6SUjDHGrLUIw5A455aIjLWW4jgWxhgBgDUJ5u+9915t7969/+mcs8YYstbyNE0JAKSUkFLKpownooyIYK1Fk2DNGKM0TZW11gkhtFIKAJDP500cx3UhRJokiUmShKy1FEWR01oLpZRkjJkkSRhjTHrvc5xzK6XMOOfOGEOMMcc5rxNRZozRaZpm1Wq17XtgYHIyWYQx16U55wnnXGRZZoUQAWOMe+9hrfWcc8s5d1prStNUaK05ETGlFGOMMa'+
			'UUS9PUc85dlmWktebGGABgUkompRTOOZamqRNCGABkjKEkSQzn3AJAkiSCMeY557b1gYHW2hpjEmutDoLAZ1lGcRyT1poLIWCtJc55IKVkcRwzrbXknDvGmOWce621D8OQGGMJAMMYswDMwMCAQ/PA4et+2NDK6OgkSRjG0pU6SRLhvWeNRoM4554x5sMw9FmWkfdeNGUZAORyOcYYI875RXeXJAkjoot7zSAIRLMt1ySU0jQlzrlLksRirGOBZoKlWCyi0WhQHMdOKaWDILBCiItMjIyMMIxNTsc5l82ImuXz+dYkcYwxiuOYoijySiktpXS5XM5VKhWXy+XaftAAtH8NbgVYEmORtBpXWlu2lpWPX6ta9dhlZOgyMq1CGJtM4z8SaLXLxrU3fk30l6nTar81bj7uWauf8WOZ2O8lAdbX3YJbL0/jfmtcqqzLbSkm'+
			'7tm/iODxmBi90oQ6wKX9TGz3cmO/XLJi4ngvOQu+jHxbMFnfZLWuE0sLNOH6edmfiWR9GcVPtMqJzy53P1H+8/r5vPuJX5t8TvNfPSbLgsdff120rPz/KvO/wf+bb62+LNpqwd+g/ZjM06Rv0AZ8Q/DXHP8NTEOvAtQFLXYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt zoom in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_zoom_in);
		el=me._txt_zoom_out=document.createElement('div');
		els=me._txt_zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_txt_zoom_out';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAaCAYAAAB8WJiDAAAPOElEQVRoge1ae5CW1Xn/ndt7+a7LwrcBIYAgkmWxAZYimI3XCIg4lhCMLdPgWKc6Y52ITpuZNJMmTOm0pmZ6iWmcJsTLmFUbJ4MTJgyJdDSKKDigMcGJsMnIRdbdZflu7+Vc+8d+3/qxrqad9rOhzW/mzHt7znOe9/zOec45zznEOYd2gBByziMAfOUrXyE9PT2kVCqRoaEh2tPTAwDwPI9IKR0AdHd3WwAWgGvoaY+Bv2VoGw9tJpg00+LFi1mxWGT5fJ52dXWx2bNns2KxSAuFAkqlkuvo6DBBENggCEwQBLq7u9tgjGT3/4HkdvHA26J1DE1yKQA2PDzMPc8TnueJ0dFRHgSB0FpTQghhjFljjCmVSgqAFEKQI0eOoIXk8xbOuVZX1rwf/6d2N9'+
			'529uBxcgHwKVOmeDNnzgwzmYy/bt260po1axZzzrnneQjD0AZBoIMgkEEQyDiODyql3pk5c6ZCi7tu0X3O84RKfI/c+33/IJ2T4TeV03xsXm+66SbS09NDZsyYQaZMmUJyuRyZM2eOi+PYLVu2rPlfjhDizkcXTTFGMAcgZsyYEWYymWyhUMhs376977rrrvvWZPmccycOHDjQSwhJurq6ZBRFtvV7HMeuWq26oaEhBwClUonk83kShiGZKNN8HhoaogDQrOCJZTbGfYdzh4T3zBs+qJymPb/4xS/Iz3/+c1qr1UhzOOrq6qIXXHABufDCC9EchgqFgpk/f74BYAkh9nx00cAYwRQAL5fLwlobAAj7+/tPVKvVLwgheCaTQS6X0x/72MdWTJ06deNbb731pTfeeCNwzpH9+/fzIAhcGIbO8zzCObdSSnfy5EkXx7GL'+
			'oohQSmlHRwctFovwPI8wxiwADA4OOgBIkoQAoL7vE8/zyNtvvw0AyGazJgxDN23aNHPo0CFTKBRMuVy2AwMD9qabbsKTTz6JxYsXs2effZb++te/Zh0dHWzmzJmsWCyiWCyCc25zuZyr1Wo2SRIXRZGrVqtkeHiYUEqZEIIyxni9Xuflcpnl83lcfPHFi4IgMK+//vrhMAxTNBpUwzO0heF2j8FAw00757w4jgXnPPPCCy+YI0eOHJs2bZrX2dnpSqWS/NrXvnZPHMeHv/e9771mrQ3SNGVSShMEAfL5PAmCAEIIE8exLZfLiKIIWmvCGKMAqJSSZjIZZ4xxWmsXxzGSJIHWmvi+z6IookEQIEkSZDIZl6apyWaz2lqrp06dqrXW0lqroihytVrNffSjH6XGGK6UEtVqVQgh+PDwMDPGUCmlE0KYkZERSwixhBAbRZ'+
			'GN45imaUqllIxSyimlHqXUs9ZSrbXr6ur6a0qpTdN0IwB3+vRpO336dPv+VfjfRzsJdi3X8ZYaRZETQjClFE2ShEopya233rpWCPGRl19++e/Onj0bSCmhtdacc3LRRRcVV69efVU2m52RJMnJ559//pmRkZGKMQbGGCqEoLNnzx6XieP41N69e//9yJEjNSklFixYUFy+fHn3K6+8cnT58uUXz5kzZ8ng4OAre/fufam3t7fU09OzXmv9s0OHDj1dqVTo0NCQ8X0fnZ2dHIBnjPEBBM45MXfu3M61a9denc/np6dpevLgwYM/PnbsWMU5p+fPn59dtGhRz549e3753HPPxVprdvnll184f/782Tt37nz1yiuv/DiADuecXbp06RVxHB/knJ/Cux2hLWi3ix4nN45j6/u+5ZyPT3y01ujq6gp7eno+c+bMmf2PPPLI'+
			'a1proZQinHOyYcOGhWvXrt0uhJjeVLhp06YvdHZ2bv3Rj350lFKKq6666uJrr732q60yn/vc5/589+7df/HMM88c6+7u/viKFSvuu+SSSwYAgHOe7erqum3WrFl78vn87wEoZzKZu5YuXdrxwx/+8NE0TTUAGGOEcy7knGeMMeH111+/+Prrr/+b1nLWr1//hX379t31wgsvHJk3b97HFyxY8ODg4OCfPffcc68JIfiVV175mQULFmz+wQ9+8One3t5/bOYrlUqP1Wq1TcPDw4PTpk1rK8G0jbrdhHTOO0KI5Zzj9ttvX8MYyz7yyCPfPnv2LC+Xy369Xs+VSqXp69at+yelVLx79+4v33333Z/+yU9+8qU0TYeuvvrqfyiVSrOnT58+e82aNV+XUia7du366p133rlp9+7dX06SZHjNmjV/XywW59ZqtQ4AqFarZ+'+
			'+9995tDz300N8CQDabXfLwww/ftWPHjj/VWv8yDMPPVCqV4MyZM97IyIhvjMn4vl+w1hbmzZs364YbbvhnpVS8a9euv/r85z+/ce/evX8ppXxn1apV3+jo6JhVq9UKAFCr1QqEkKlKqSlJkoQAEMdx/otf/OJnoyj6WZIkhx999NFLXnrppf0tddI2tJPgVpAwDKnneTSTybBcLscKhQK74ooruhYtWnTdiRMnnn355ZdHG2NvNkmS/Lp16z7FGMs+/fTTT/b395+qVCpTHn/88ZMPPvjgvzDGsn19fVf39fVdxRjL7tq166knnnjiVLVandLf33/qgQce+FfGWKavr++KKIryALBnz56XqtVqx/79+xMAGBgY2Hfs2DFSLpcDY0zdOUdHRka8er0eAshYa3Npmuacc1PWr1//KcZYdufOnf/W39/fLOf4jh07vsEY'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="txt zoom out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 130px;';
		hs+='opacity : 1.38778e-16;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txt_zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._container_main_control.appendChild(me._txt_zoom_out);
		me.divSkin.appendChild(me._container_main_control);
		el=me._hide=document.createElement('div');
		els=me._hide__img=document.createElement('img');
		els.className='ggskin ggskin_hide';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABH0lEQVRIie2VMU4DMRBFfxDl9LTU0CK55AApfACfKlfZdncskbRIqWi2ooRqG5RyH02yWiUbxQFSRGIkS5bt+W/8LY1ngC4ZNxdV/weUxO2R9XtJz5JM0qukN0lfe2dM0qOkp+3ei6T3AyVgaswlIYmmaT6ACNho34BY1/XH7hwwn9I6BghN0wzJOeduBDEg5py7vSLCOYAHYNG27SaEgJnh7h2QgOTunZkRQqBt2w2w2OYUA8YW9TFGzIzlcslqtcLMiDFS13X/VxYNkJ14zrn/jUUHPrt7n1IipYS790fepxgwCdlZVCp+CjBA3H2AjG50UrwEMAkpqfwcwACpqmpdVdW6VBzQjPL/wCTdbeefE61jMs4B/Ciuv11fP+AbXISd5LdjwlcAAAAASU'+
			'VORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAACvElEQVRIibWWTY8UVRSGn+qPzCg1yoeDiIkfhBCWsyFFiJnMuHA1Sf+AXhlWbIyEn+HfcGvckvR0T6rajZGFS5OWoERZjGNkjKAwdD8s+lRzKZr4kXiSk1u36j3ve8+91W91pvJ/RqcxzxpZh0k2ccswi1WnAq2Yd4BujBkwA55ETgPbTrCtIHwCHCXYWVOgDawArwI5cCzuTYG/gIfAo8DWuNUE8wD4I3A2BerVvwKcBE4DbwTJNAoPYyQW8HqM7SA9APaTbqbALO2gC6wBbwIF8AFwHPgF+BG4FyIE+VngXWAduA98BXwNPI6OH6UdZInAW0CRZdkOQFmW083NzZ+BO7FCosP3y7J8e2trqw2gHgF3Q+w+9QugonbUdbVQr6mDqqqm0a5VVRnxON'+
			'KqqkyeT9VB1BbB1VGfEzitXlE/VSvVyWRiURTmeW5ZlrWIZVma57lFUTiZTOrbVdReCa4XBNbVy+on6q16dbu7u/Z6PfM8t6oqx+OxeZ7b6/UcDAaLLtRbUXt5WQdt9aS6oX6s3qyqalYXj0ajhUhNPhqN0i2aqTejdiO42qlAS11Tz6s76mfq7XSfh8Oh/X7ffr/vcDi0cT63o2YnONaCcyGQqavqGfWSelX9XD1oHKbj8bhJfhDYq1F7JriyVAC1q76mnlM/VK+rX6qHZVk2faY+9MPAXI+ac8HRrXlTgZa6op5QL6gfqTfUL9T9VCRWvh/PbgT2QtSu1NujMm/jWbTiB3csrOI94CKwAVza29s7D7C9vf098A3wLfAd8ENYxQPmhjerCZsCTZFTYQnvhNjZwNwL0rtx/esycnjxe0AAjqLAuP4d+Im5GQL8ydwO'+
			'fmPuTw+Xkb+sg7STDnNrXo3sxrMj5oZWm9rC//+NQC1SZ5tnXzAJO05yafydwHPYxvwfFS47g5fFf/p38BTwbqakVldxfAAAAABJRU5ErkJggg==';
		me._hide__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAC7ElEQVRIibXWwU9cVRQG8N8bILQwI40FjRWZKdAENtqNARJjoysXLvwDjEbCvknXTRqTrk1cS2lB/ggXjSbGhY0btGk0KSMzVbsQGmrLtCKdGRdzHl5GiNbEm5y8uTPf+b5zzj33vMna7bb/c/V27bMuy1c7sW7cYZj9qFOBQux70RfPDC08CWsGtifBFoLwCfYSbKtboAf9GEARg/FdE7/jEXYDm+OOJZgGdgLX7hbIoz+OZ/EchoOkGY6/xVMEMBTPniDdwq9JNk200gz6UMLzmMFrOIFN1HE3RAT5KZQxgvv4CjfwR2S8m2aQJQIvYObi2qW3YWFyvlkpln/BRkQoMjxd26m/uLi+1AOXz364hzshdj84FRKBQtT2BEoLk/MtWFxf6qk16mM4h3'+
			'fCztUa9bGcPLCl8O0PrgMCuUh+0P2VYrlwYfq80YFRK9VVtUY9L2NfrVG3Ul01OjDqwvR5lWI5D64/OPbbNz2D/ORbGLi4dgl8MPG+r7duWKmuem/iXZnMSnXVRGnc7PCMj77/WJRoIPHfvweFhDxvx4fYWpicb8PV6rK5kVkTpXEr1VXL1U9NlMbNjcy6Wl0WJWrrdNHD4GjmIqnAnk4bbuJmpVjeWDgzD5bWr5kbmTU9NGV6aMrcyKyl9Wsd8jPzKsXyBm6G705wtSGLWZQlB/wSXsYbeKvWqJ9cvL20T5bJfHL7yl/kg+V7+Axf4Dv8pNNFu2hnybDr07low6jgFbyON2uN+jO5SL6C/AE+x5f4FrUo1ePI4kAXNUN1Gz/jls7luV4ZLG/m5UrIN3E9MLfCZzs48pkl6xrXhchkMMlkCmfx6o87G5MwXjy9jm+w'+
			'hh+SyBsReesogW6RkzojYSzETgXmbpDeic/3DiPn7+8DAdgLh7y7HkQJjgfmsc5BbuvMp0eHkR+VQZpJr053HQvri9/2dPo9H2r78/9pBHKR3NIRkF/MVmKHrn8SOIDt2v8rx8PO4Kj1n/4d/AkwhhNvYjdmJwAAAABJRU5ErkJggg==';
		me._hide__img.ggDownSrc=hs;
		el.ggId="hide";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : -5px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.sx=0;me._container_main_control.ggParameter.sy=0;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.rx=0;me._container_main_control.ggParameter.ry=80;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			me._hide.style[domTransition]='none';
			me._hide.style.opacity='0';
			me._hide.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._show.style[domTransition]='none';
			} else {
				me._show.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show.style.opacity='1';
			me._show.style.visibility=me._show.ggVisible?'inherit':'hidden';
			var list=me.findElements("1",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='0';
				e.style.visibility='hidden';
			}
		}
		me._hide.onmouseover=function (e) {
			me._hide__img.src=me._hide__img.ggOverSrc;
		}
		me._hide.onmouseout=function (e) {
			me._hide__img.src=me._hide__img.ggNormalSrc;
		}
		me._hide.onmousedown=function (e) {
			me._hide__img.src=me._hide__img.ggDownSrc;
		}
		me._hide.onmouseup=function (e) {
			if (skin.player.getIsMobile()) {
				me._hide__img.src = me._hide__img.ggNormalSrc;
			} else {
				me._hide__img.src = me._hide__img.ggOverSrc;
			}
		}
		me._hide.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._hide);
		el=me._show=document.createElement('div');
		els=me._show__img=document.createElement('img');
		els.className='ggskin ggskin_show';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABHUlEQVRIie2VIW/DMBCFX6fB46PDG51kOFBY4B/gX9X/UWZon6UldHQkaDBFIVNh3ogTRWu7ONsKKu2kkyzb9z75nWyvSOKScXNR9X9ASdwu2CsA7vJ4D+CjpKj0BAJg7b3fee93ANZ5bj5IzqWQtKraASAAppQ6kjavfVu/WHxIVS2CzIqnlEbxqqpY1zWXnKRYXFV75xydc1TVvhRyDmBijO1EpLfWUkQoIrTWMqU0QmKMLUmzBLCZFI/ig0UDJIQwQkhulgAeSG6bpjkYYygiQ1MdSaeqnYjQGMOmaQ4kt7nmxxZNfT7qz28tak80UUjaEEI7Z9GKp/+DewDP+ba+AnjD8dMgAB4BPOW1FwDvX4XOAf4srv+5vn7AJ4UdW9BVNQhmAAAAAElFTk'+
			'SuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAACrElEQVRIibWUPW8cVRSGn931yiaMCRAcokh8KEpBAZKbaCILF3YdaWu0FUpFg5Lfwd+goghtpPWud65pECnol0gYJAowEAsnTsJ6H4o5s7qsbUEkGOloZ3bO+z4z5859Wyr/57H0Ar2thet/9WT/BGhn1ckgAifALKsXBrTj/jKwEtWNe38CT6OeAdPzIOcB2mF2AbgIvAa8CrwU94+BR8DvwCHwJKCnIGcBGvOXgUvAVeBt4N04B/gJ+B74Ic5/BR6fBVkE5OZvhOl7wDpwY3d39zrA1tbWd8A3wLfUI2zW5hQkB+Rjacw/ADaAzZTS2vb2NgAppfc3NzffpB5fN/OQxXGpTXXVV9Rr6rZ6V/1SPayqyhDPq6oq1cPouRuaa+HRbXwb85a6ol5Rb6'+
			'i31c/Vg5TS3DSl5N7e3t+u1YPovR3aK+HVygFtdVW9rt5SP1Mf5ubD4dB+v2+/33c4HC5CHobmVnishucc0FFfV9fVj9X7KaVZYzIajez1ehZFYVEU9no9R6NRDpmp90O7Hl6dHLCkrqk31U/VB414Z2dnbt6MqIEMBoM5RH0Q2pvhtbQIuKxuqHfUpDqZTCzL0qIomkVVtaoqi6KwLEsnk0nzdwrtRnidAqyppfqJOkgpnSzMWfV5lAuLf6IOQlue9QYd9VLM7yP1XvY5TtV9dax+ETVW98fj8TQb0b3QrodXR6X+lOpNVgBrwFtACXxInT+/APvUkXAYG+oidWy8E5pHwFfA18CPoTkCZjlgGVilzp/LsZsvUMfyUZgfBaAISEEd40+AA+Bn6lz6gzplZ01UzKgj9xj4DXhOnZSdADwNk2fRvxzwlazncTzAMVl8'+
			'N2/QvMVSVDd+Wxl8GkaEadPbjnWYUmfQ9DwAYZhXc+Q5tNh3Vs/cdBHwnx9/AYLTmuMGnwBpAAAAAElFTkSuQmCC';
		me._show__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAACx0lEQVRIibWVTWsTYRDHf9kkJDaxb2laEDWJSUGoBUFUKvbWT6DgqfYlxq9T6D0EEU+C4lcoComtB28pNK27NXhoam3IbtqYNOth5ymP6YsWdGFgwzPz/80zM5n1ua7L/3wCF/D19fz+q8z+BDA082sQFzgCuppdGGDIeQgIiwXlrA0cirWAzlmQswCGiPUBA8AQMAhckvMDYB/4AdSBpkBPQE4DKPEIEAOuANeBpLwDfANMYFvevwPOaZBegC4+IqI3gdvA3S37SwbgRjRVAdaAz3glVL05AdEBelmU+CTwAJg2HSteqLwAIDeevZWMJMbwyhfUNFx6ymVoh37JZgi4CkwAD4EZ07Hi+Y3CsWN+o4DpWHFgRnwmJGZINPx61sgV/ZJ9DEgBdyTzfi'+
			'WeG8/yfPyZDukHpsU3JbF9aCOtA4JAFBiTuk+ZjhVT4tnMAmu7n1jdXSObWdAhMWBKYsZEI3geIA5MmraV0sWLtRLl+jrl+jrFWul3iG2lpF/x8wB+vD/TZWAkXyn4ABbT8xRrJTYbW8ylZ5lPP2WzsUWxVmIxPe9BPN8RiQ3rJfLJsgsAw0AGuAc8Aqb3Wnu8tt6wc7jDXHqWZCQBgOlYvNx8xWh4lCeJxwyHhgHeA2+BVaAC7AEdfYrUfmkBLdO2ukvlZarNqi7eBtrJSIK59CzVZpWl8jKmbXVVnGgcL0JDE1dO+0AjXykYALlM9igZSWwDK8A7sZVkJLGdy2SPpEQG0JDYlmi5eokMrcHXgPt48z0I1AALbyXUJaEBvLWRkJh94APwEfgqMTbQ1QEhaVIMGJWm9cmVbRG3BRAVSFQa2gR2gR28vdRQN1Groou3'+
			'cg+kOT/xNqVfAIci0hL/kMDDmo8jCRygrW+f9slU+z+AN8cBvFFT8I4IIaLK15B6d/CGoHMWABHUTT2uZr1+p/kci/YC/vnzC6XMF0A9++qbAAAAAElFTkSuQmCC';
		me._show__img.ggDownSrc=hs;
		el.ggId="show";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : -5px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.rx=0;me._container_main_control.ggParameter.ry=0;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			if (player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.sx=1;me._container_main_control.ggParameter.sy=1;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			me._show.style[domTransition]='none';
			me._show.style.opacity='0';
			me._show.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._hide.style[domTransition]='none';
			} else {
				me._hide.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide.style.opacity='1';
			me._hide.style.visibility=me._hide.ggVisible?'inherit':'hidden';
			var list=me.findElements("1",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
		}
		me._show.onmouseover=function (e) {
			me._show__img.src=me._show__img.ggOverSrc;
		}
		me._show.onmouseout=function (e) {
			me._show__img.src=me._show__img.ggNormalSrc;
		}
		me._show.onmousedown=function (e) {
			me._show__img.src=me._show__img.ggDownSrc;
		}
		me._show.onmouseup=function (e) {
			if (skin.player.getIsMobile()) {
				me._show__img.src = me._show__img.ggNormalSrc;
			} else {
				me._show__img.src = me._show__img.ggOverSrc;
			}
		}
		me._show.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._show);
		el=me._loader=document.createElement('div');
		el.ggId="loader";
		el.ggDx=-8;
		el.ggDy=-83;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 74px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loader.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loader.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loader_image=document.createElement('div');
		els=me._loader_image__img=document.createElement('img');
		els.className='ggskin ggskin_loader_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loader_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 217px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loader_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loader_image.ggUpdatePosition=function (useTransition) {
		}
		me._loader.appendChild(me._loader_image);
		el=me._bar=document.createElement('div');
		els=me._bar__img=document.createElement('img');
		els.className='ggskin ggskin_bar';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAAMCAYAAAAgYywpAAABO0lEQVRoge3ZzUqbURCH8V/iaSqmDdSvTQV33kRX3Te32k1X3ejFSPETazQRm7xJupikBnEjFMOBeWA4HN7NWTwM/3mn9e14soHWC5UkNTF/XgUdFLxbnAVtKXhSD3PM0CxqgqbgA7or56YQvr2edybJq5lhjEeMMMSoYAf72MMnIfkmNtbzziR5NVMh9hC/cYXLggMc4jN20cN7EU+SpAYa/MEdrvELnSLEPhKS74jO3ZGdO6mHqYglQ+Fwlxe684+v5cvbvitJ/g/9k+bn6r2IfNITnXrSP2m+y8yd1MUyc9+LWHKOq4JTkVkG2MZHIXdm7qQWGk9y3wi5zwouFh9uhNhbYqDMX4FJLczEQPkgBB9gUMSE+YhbMUgulzm5xElqYe5peTMWoo+LEH'+
			'ssrG/L7WRSJ8st5b/6C991UoJ0YeLwAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bar.ggUpdatePosition=function (useTransition) {
		}
		me._loader.appendChild(me._bar);
		el=me._tip=document.createElement('div');
		els=me._tip__img=document.createElement('img');
		els.className='ggskin ggskin_tip';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAbCAYAAADlJ3ZtAAAFWklEQVRYhe2YX3IbNxKHv+4GZoZDiaJkxrK8edm3vUYOkAPsOXOAHGZT2Y1sxfpHcjgDoPNAjjxSZMVZe2trq7arulAznAI+NH5ANyjuzv+K6X8b4M9YmD58/2P62v3LpJVnfi+H9sXl/eG7PWZ46aN/w2Ti+uQZHgP7xMvEP2lfC1YnLk+ep/4A2gbYJNIBME/azCci/SWwI5hNYOzQpwGhMiKF4LL/JggKuAhFnFwZg8KgQr9JDEA69DnCfxHsuKQjoB08ArEyKndqE2ov1Aq1KxUQohLdEROKQHboDLYubA22xdh0mW4yxsCTCH8u7HQpHwECdVRm7jTA3IS5wFyNuQktMBOnMiUYiB5ABdYOt8CNw03l3FSBu+xs1vlBy8Pnwo7am0YxPAGcqX'+
			'KkcIywEDhRWKpyAiyCcqxOa0oVTIJAUWEA1gI37lw5XDpcCh7zfqtNN5wykcOnYKcRnEaxAZogHIlzrHAicAqcGqxMWKlwZsKZqSyCchSEJgrBBFUhi9AjrIEPpXBZnNPizBRhV8jZPc2MYZsfNt+LsFPQh0iOkKp7SBVeibNS5XVQ3gQ4jyYrg7OoLKLSVkqsjFAJogIquAi5OF0uvOqdk+Q0OSOHSXTFWbuzDZH+bnjYcP4SrAI2N2KGupT9cgfhJAhnwCoor03kbVTeBuW8El43xmllHDVGVZtoG6BVSnsYJRWsQBgKcVuo7gcPXcIHYZczH7JzVZm0Gb/rE8bHzfYsrACyqtFdwQxipTQBWoHjYLKMsDLlTVS+rZS3lXHRKOdtkOU80s6NuAj4LEo5CuTG8FrBQXaZsknoOmO3vdfB5fgOll3x076wTMJ8gMYg'+
			'lMdJ5ZMykL+dSHW5JYhQNYG2EZZ14JvW5ELgXJWLIFxE4U1UvqmNxcyYHQUJ8wjHAZ8pzIJobaAKXqArcD84NwMOokPxODhNhllUmkFptGBBRZvgus2PU/TvYH/4LvRA/8wkANikl/P4wabZKguIC5jgQRATCHv9uiquCZdD6tUDnvjvx3kK69//mMLhfZgZdYamEebAUW2cViZ/r5SLxvjLquavy1q+VXhlwjII7bKiPqtF5wGvDY+Cq+BRkN5hk5DbAVknz31mSIUuwaY42+J0OCkVz12h8BlJYTwu8jYzANIDUfFdxoN6CUKKRnfdy8bu/SoqF5Vy3hqrWWB5HGkXgXBcoUEwAep9rCWBbxJpk+g2iZtt9quhcFWca3fuC2xNJIn7CPsA/BLso4gP+5mmXWaojF3Xszbz2wC/RuV9UPllrZyHgVXV+WllHNVG2y'+
			'gxKFapiCmukLLTpey3vfNucP4xFH7aFX5JzvVQWHfJdyYPBc0fJoXE/pwdZ5YP7wZg5862wF3KXBflfZ/5l2U/DcoqCK+CylnMLINyEpVZUOqAm+0l0Yuwcecmw7tc+Dk7P/WZf+4KH3bJ1wP0k4rsRRmMlieuB9Ae6IbCFrgDrtVp3bkscOTCIjuLofhJbyw0cVyZHOk+i1UmoEpW6IC7Ar+6874473aFd7vsHwpsN4meZyqvzylkprIY64X+EPnNULgHKqDywsyEVmCW076QcbwVqJNKVEFDoYiQxNkC6wK3BW767HepcJ/3Exl4Ro5/tkQcJTFGewTv2GemezOqoFSlUPVOJU7lTgSPDpIEEZGMe28q/VB8687OoSvO7m5f146ye2RfUnyPMx+L5QRol+m6/Ki2CF4wF8x9f8iLuIuTpXgenEEh33+EfBb0S2FH'+
			'm0b76ZVGurxvd8NDohDAFwFwfJMetDm93jxrX/vC+BR8enkcQQG4/ZgJx/P0xcsigPz/T47/kP0G1FmOvBNKL5oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tip.ggUpdatePosition=function (useTransition) {
		}
		me._loader.appendChild(me._tip);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 184px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 184px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(15,15,15,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var hs="<font face=\"Tahoma\"><b>Loading  "+(player.getPercentLoaded()*100.0).toFixed(0)+" % \/ "+(100.0).toFixed(1)+" kB<\/b><\/font>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._text_3.ggUpdateText();
		});
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._loader.appendChild(me._text_3);
		me.divSkin.appendChild(me._loader);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 234px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 234px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._html_box=document.createElement('div');
		els=me._html_box__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="html_box";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 750px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 740px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 746px;';
		hs+='height: auto;';
		hs+='background: #eeeeee;';
		hs+='border: 3px solid #787878;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 3px 1px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._html_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._html_box.ondblclick=function (e) {
			me._html_box.style[domTransition]='none';
			me._html_box.style.visibility='hidden';
			me._html_box.ggVisible=false;
		}
		me._html_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #d1d1d1;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0425";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.onclick=function (e) {
			me._html_box.style[domTransition]='none';
			me._html_box.style.visibility='hidden';
			me._html_box.ggVisible=false;
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((85-this.ggTextDiv.offsetWidth)) + 'px';
		}
		me._html_box.appendChild(me._text_2);
		me.divSkin.appendChild(me._html_box);
		el=me._screen=document.createElement('div');
		els=me._screen__img=document.createElement('img');
		els.className='ggskin ggskin_screen';
		hs=basePath + 'images/screen.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="screen";
		el.ggDx=0;
		el.ggDy=36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 238px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 403px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen.onclick=function (e) {
			me._screen.style[domTransition]='none';
			me._screen.style.visibility='hidden';
			me._screen.ggVisible=false;
		}
		me._screen.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._screen.style[domTransition]='none';
			} else {
				me._screen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen.style.opacity='1';
			me._screen.style.visibility=me._screen.ggVisible?'inherit':'hidden';
		}
		me._screen.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._screen.style[domTransition]='none';
			} else {
				me._screen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen.style.opacity='0.7';
			me._screen.style.visibility=me._screen.ggVisible?'inherit':'hidden';
		}
		me._screen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_close';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAE1ElEQVRIiY1WXWxTZRh+Ts8562nXtQzBuDE2M/eTzh8IjIQlJoSAmEwTdzGRSNTE3cyLxUiM88I0XpAsRme8Ao0yvViz3TguHBpCSMi4YSOIIlxAxIWUMUgnXbu1lJ6ePl6c93Tfyga+yZf2e7/3e5/3/3waSR9WSMPatB5fJT6ObzxGWeXePHz4sC+RSJjhcNiZnJx8CCAsitIV8iqoBqDszZNAEIvFtGvXroXv3bsXTiaTgatXrwKAD0BwDS8e1UdSr1iGskxv7du3b2Nra2vTpUuXhjOZTI7ktyS3kGxQ5Srul/Uaj7FEA6APDw9rZ86csdLpdMAwDF9NTY0WCoUCAKolRFkAfrhpyANwlNBpeEKOtJGRET0ej4cXFhYs27Z1kpphGE5tba2taW'+
			'XRpb6+Pl8qlao6cOBAvr+/3y/8XCWYsRZILBYzT506tTGVSoVKpZLv0KFDG3p6erZPT0+fjkQieeWOPTg42Hfu3LnpycnJ2fb29uzevXsDcIskswqsIi/miRMnrM7Ozi1NTU0dW7dufXFqauqjXC53my51k4zJ/59I7rdtm+l0+u7c3NzA8ePHgySrSW4muUHNGSqSF+jq6trc3Nzc3tjY+ML169ePcYVmSb5N8gvZj5F8l+TfiswQyQjJTSTrSQY83aua9ciRI76lpaVgqVTyTUxMvNbW1vaBnP0G4EMAF5S8BgHcAjAAYFR4nwLoB2DCLf1NXlpUIFy5csVv27YxODjYsHPnzo+FPQHgKwBzEveicsUHYBHAEIBjwvsMwEtwK1FXBcuUy+V0TdPY3d29R6y5BeBHUb4It5rUJi/JWR7AlwD+BBAC8B6AgHj2KJDj'+
			'OFpVVVWxrq7uVSVkWQAPRJkllnpABGCLzDyA7+SsU+TWBtJ1nZZlFU3TjAprShTl4eZmg1gM2XtA+YGBgcD9+/d/B7AM4GkBKffpKqBgMOiEQqEiVmK7COChhMcQj8YBvCPWFwDkE4lE4ebNm/4bN24UBMinrLJVZWpoaLAzmYxqgCPeFOHmxwSQFANKEtLlo0ePBpPJpLW8vFythNYHZRCs8ujgwYOF5uZmG268AaAFKzkqALgL4A7cCrwN4M74+Hj28uXL1dls1l9fX78FQETxamXiVEzqGpJVJL+XBjwrzReWRqwlaXlrbGwstGvXrsaWlpbno9FoW6FQiMu98yT3kNzuTYfK6e2V5C8A3gfwMoDXh4aGfp6dndUBwO/3W5FIBDMzM9b8/Hwom80GNU3j6Ohop2mab4qeX+EWiuMp1kiqYM+IgAa3Sd8CkE2lUv'+
			'29vb1nFxcX/YVCwbBt27Bt23QcR9d13YnH49t27979DYCnAJwH8Lnk9F8As17o1KFaTbKJ5HMku0j+JaEo5vP5kYsXL/bs2LHj2Y6OjtZoNNp28uTJNzKZzA8kH4jcPyR7JWzbJBUGSUMjqWP1Z2Iz3I+aBaAOwCcA9stZEcCChMQnHlTJ2QUAX8v5khTOXTV0Xs94YDqAegEKyu8rArZdjPAoD+APCddpMSALIAUgoeSIKpAK5hPPInALxBLLV7WDQg7cCZETj5JYGb6s9KgSDOJRHdwm9N4Fan+UFJA83P7KKvfLzy6N7gPyic+tdXiPKFyPZyjMygdgpeL1XqL/B5j/AZRX0u+adxcFAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._close__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._close__img.ggDownSrc=hs;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 191px;';
		hs+='position : absolute;';
		hs+='top : 212px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._screen.style[domTransition]='none';
			} else {
				me._screen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen.ggParameter.sx=0;me._screen.ggParameter.sy=0;
			me._screen.style[domTransform]=parameterToTransform(me._screen.ggParameter);
			if (player.transitionsDisabled) {
				me._screen.style[domTransition]='none';
			} else {
				me._screen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._screen.ggParameter.a="360.0000";
			me._screen.style[domTransform]=parameterToTransform(me._screen.ggParameter);
			me._screen.style[domTransition]='none';
			me._screen.style.visibility='hidden';
			me._screen.ggVisible=false;
		}
		me._close.onmouseover=function (e) {
			me._close__img.src=me._close__img.ggOverSrc;
		}
		me._close.onmouseout=function (e) {
			me._close__img.src=me._close__img.ggNormalSrc;
		}
		me._close.onmousedown=function (e) {
			me._close__img.src=me._close__img.ggDownSrc;
		}
		me._close.onmouseup=function (e) {
			if (skin.player.getIsMobile()) {
				me._close__img.src = me._close__img.ggNormalSrc;
			} else {
				me._close__img.src = me._close__img.ggOverSrc;
			}
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._close);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 56px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 366px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 366px;';
		hs+='height: 56px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"2\"  ><b><i>\u0421\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435, \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u044b, \u0421\u0430\u0439\u0442\u044b, \u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0443\u0440\u044b,360\xb0 \u0432\u0438\u0434\u0435\u043e, \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f.<br\/><\/b><\/font>";
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._title);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 59px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 366px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 366px;';
		hs+='height: 59px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"2\"  ><b>\xab\u0412 \u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a(\u0443\u042e) \u0432\u043e\u043a\u0440\u0443\u0433 \u043c\u0430\u0440\u0448!\xbb  \u0421\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u044b\u0432 \u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430 \u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 2010-2026 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435.<\/font >";
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._description);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 133px;';
		hs+='visibility : inherit;';
		hs+='width : 365px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 365px;';
		hs+='height: 22px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(230,230,230,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"4\" ><a href=\"https:\/\/yakov72.github.io\/pano\/\" target=\"_blank\"><u><b>https:\/\/yakov72.github.io\/pano\/<\/a><\/font>";
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._copyright);
		el=me._copyright1=document.createElement('div');
		els=me._copyright1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 359px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 359px;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(230,230,230,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"2\" ><\/u>\u0424\u043e\u0442\u043e\u0441\u044a\u0435\u043c\u043a\u0430 \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0430\u043d\u043e\u0440\u0430\u043c<br\/>\u0427\u0443\u0440\u0431\u0430\u043d\u043e\u0432 \u042f\u043a\u043e\u0432,<a href=\"mailto:CHYL@MAIL.RU?subject=\u0412\u043e\u043f\u0440\u043e\u0441 \u043f\u043e 3D \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0430\u043c\"> <ins>CHYL@MAIL.RU<\/ins>, <\/a>+7-963-2009759<br\/><\/font><br\/>";
		el.appendChild(els);
		me._copyright1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright1.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._copyright1);
		el=me._copyright2=document.createElement('div');
		els=me._copyright2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 360px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(230,230,230,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"2\" ><a href=\"https:\/\/vk.com\/yakov.churbanov\" target=\"_blank\"><u><b>https:\/\/vk.com\/yakov.churbanov<\/a><\/font>";
		el.appendChild(els);
		me._copyright2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright2.ggUpdatePosition=function (useTransition) {
		}
		me._screen.appendChild(me._copyright2);
		me.divSkin.appendChild(me._screen);
		el=me._image_1mag=document.createElement('div');
		els=me._image_1mag__img=document.createElement('img');
		els.className='ggskin ggskin_image_1mag';
		hs=basePath + 'images/image_1mag.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1-mag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1mag.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1mag.onclick=function (e) {
			player.openUrl("https:\/\/vk.com\/yandexmappanorama","");
		}
		me._image_1mag.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1mag);
		el=me._text_6helptext0=document.createElement('div');
		els=me._text_6helptext0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-help-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 279px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 555px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 555px;';
		hs+='height: auto;';
		hs+='background: #c6c6c6;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 14px;';
		hs+=cssPrefix + 'border-radius: 14px;';
		hs+='color: #000000;';
		hs+='text-align: right;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"1.8\"><b><i>\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430\u0448\u0438\u043c \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u043c ? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br\/>\u041f\u043e\u0433\u0443\u043b\u044f\u0439\u0442\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435\u0441\u044c. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0448\u0438 \u0442\u043e\u0432\u0430\u0440\u044b, \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0430\u044f \u0438\u0445 \u043a\u043e\u043b\u0435\u0441\u0438\u043a\u043e\u043c \u043c\u044b\u0448\u043a\u0438.  \u041d\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u043a  (\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u043e\u0437\u043e\u0432\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u0432 \u043a\u0440\u0430\u0441\u043d\u043e\u0439 \u0440\u0430\u043c\u043a\u0435) \u043d\u0430 \u0442\u043e , \u0447\u0442\u043e \u0432\u0430\u0441 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043b\u043e. \u041f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 : <br\/><img src=\"images\/clip.png\"  width=\"18\" height=\"18\" alt=\"clip111.png\"> \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0442\u043e \u0431\u044b \u043f\u043e\u0441\u043b\u0430\u0442\u044c \u0435\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c, \u0438\u043b\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0435 \u0443 \u0441\u0435\u0431\u044f, \u0447\u0442\u043e \u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432)  \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u0431\u043b\u043e\u043a\u043d\u043e\u0442\u0430 \u0432 \u043b\u0435\u0432\u043e\u043c \u043d\u0438\u0436\u043d\u0435\u043c \u0443\u0433\u043b\u0443. <br\/><img src=\"images\/mail.png\"  width=\"18\" height=\"18\" alt=\"clip111.png\"> \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c \u043f\u0438\u0441\u044c\u043c\u043e, \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440 \u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u0442\u043e\u0447\u043d\u043e\u0439 \u0446\u0435\u043d\u0435, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435 \u0438 \u043f\u0440\u043e\u0447\u0435\u043c, \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u043f\u0438\u0441\u044c\u043c\u0430 \u0432 \u043f\u0440\u0430\u0432\u043e\u043c \u043d\u0438\u0436\u043d\u0435\u043c \u0443\u0433\u043b\u0443. <br\/>\u041c\u044b \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u0432\u0435\u0442\u0438\u043c \u043d\u0430 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b.<\/font><br\/><font size=\"1.7\">\xab\u041f\u0442\u0438\u0446\u0430 \u0441\u0447\u0430\u0441\u0442\u044c\u044f\xbb \u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a, \u043f\u0440. \u0427\u0443\u043c\u0431\u0430\u0440\u043e\u0432\u0430-\u041b\u0443\u0447\u0438\u043d\u0441\u043a\u043e\u0433\u043e 29<u><b><br\/><a href=\"https:\/\/vk.link\/arhpticas\" target=\"_blank\"> https:\/\/vk.link\/arhpticas  <\/a><\/u><\/b> <a href=\"mailto:arhpticas@yandex.ru?subject=\u0412\u043e\u043f\u0440\u043e\u0441 \u043f\u043e ..............\"><u>arhpticas@yandex.ru<\/u><\/a><\/font><br\/><font size=\"1.7\"><b><i><\/u> \u0424\u043e\u0442\u043e \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0443\u0440\u0430 - \u042f\u043a\u043e\u0432 \u0427\u0443\u0440\u0431\u0430\u043d\u043e\u0432 <a href=\"https:\/\/www.churbanov.net\" target=\"_blank\">www.churbanov.net<\/a> <a href=\"mailto:chyl@mail.ru?subject=\u0412\u043e\u043f\u0440\u043e\u0441 \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443\">chyl@mail.ru<\/a><\/u><\/font>";
		el.appendChild(els);
		me._text_6helptext0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_6helptext0.onclick=function (e) {
			me._text_6helptext0.style[domTransition]='none';
			me._text_6helptext0.style.visibility='hidden';
			me._text_6helptext0.ggVisible=false;
		}
		me._text_6helptext0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_6helptext0);
		el=me._text_6helptext=document.createElement('div');
		els=me._text_6helptext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="=Text 6-help-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 145px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 620px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 620px;';
		hs+='height: auto;';
		hs+='background: #c6c6c6;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 14px;';
		hs+=cssPrefix + 'border-radius: 14px;';
		hs+='color: #000000;';
		hs+='text-align: right;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"1.8\"><b><i>\u041f\u0430\u0441\u0430\u0436\u0438\u0440\u0441\u043a\u0438\u0439 \u0432\u0430\u0433\u043e\u043d \u0444\u0438\u0440\u043c\u044b \"\u041f\u0418\u041a\u041e\". \u041c\u0430\u0441\u0448\u0442\u0430\u0431 1:87.\u0413\u0414\u0420&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br\/>\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 18000*13000 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 . 203 \u041c\u0435\u0433\u043f\u041f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br\/>\u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043f\u043e\u043b\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0443 \u043f\u0435\u0447\u0430\u0442\u0438 \u0432 300 DPI, \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0432 \u0444\u043e\u0442\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u0440 150*100 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u043e\u0432. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u043c\u043e\u0434\u0435\u043b\u044c, \u0434\u0432\u0438\u0433\u0430\u044f \u0438 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0430\u044f \u0435\u0435 \u043a\u043e\u043b\u0435\u0441\u0438\u043a\u043e\u043c \u043c\u044b\u0448\u043a\u0438. <\/font><br\/><font size=\"1.7\"><b><i><\/u> \u0424\u043e\u0442\u043e \u0438 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0432\u0435\u0431 - \u042f\u043a\u043e\u0432 \u0427\u0443\u0440\u0431\u0430\u043d\u043e\u0432 <a href=\"https:\/\/vk.com\/yakov.churbanov\" target=\"_blank\">https:\/\/vk.com\/yakov.churbanov<\/a> <a href=\"mailto:chyl@mail.ru?subject=\u0412\u043e\u043f\u0440\u043e\u0441 \u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0443\">chyl@mail.ru<\/a><\/u><\/font><br><font size=\"1.7\">\u041a\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u0430 \u043f\u043e\u0434\u043e\u0431\u043d\u0430\u044f \u0441\u044a\u0435\u043c\u043a\u0430 - \u043f\u0438\u0448\u0438\u0442\u0435<u><b><\/font>";
		el.appendChild(els);
		me._text_6helptext.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_6helptext.onclick=function (e) {
			me._text_6helptext.style[domTransition]='none';
			me._text_6helptext.style.visibility='hidden';
			me._text_6helptext.ggVisible=false;
		}
		me._text_6helptext.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_6helptext);
		el=me._text_4help0=document.createElement('div');
		els=me._text_4help0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='opacity : 0.70001;';
		hs+='position : absolute;';
		hs+='right : 12px;';
		hs+='top : 11px;';
		hs+='visibility : hidden;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 7px;';
		hs+=cssPrefix + 'border-radius: 7px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u043e\u043c\u043e\u0449\u044c";
		el.appendChild(els);
		me._text_4help0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_4help0.onclick=function (e) {
			me._text_6helptext0.ggVisible = !me._text_6helptext0.ggVisible;
			var flag=me._text_6helptext0.ggVisible;
			me._text_6helptext0.style[domTransition]='none';
			me._text_6helptext0.style.visibility=((flag)&&(Number(me._text_6helptext0.style.opacity)>0||!me._text_6helptext0.style.opacity))?'inherit':'hidden';
		}
		me._text_4help0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_4help0);
		el=me._text_4help=document.createElement('div');
		els=me._text_4help__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="=Text 4-help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='opacity : 0.70001;';
		hs+='position : absolute;';
		hs+='right : 12px;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 7px;';
		hs+=cssPrefix + 'border-radius: 7px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u0440\u043e \u0444\u043e\u0442\u043e";
		el.appendChild(els);
		me._text_4help.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_4help.onclick=function (e) {
			me._text_6helptext0.ggVisible = !me._text_6helptext0.ggVisible;
			var flag=me._text_6helptext0.ggVisible;
			me._text_6helptext0.style[domTransition]='none';
			me._text_6helptext0.style.visibility=((flag)&&(Number(me._text_6helptext0.style.opacity)>0||!me._text_6helptext0.style.opacity))?'inherit':'hidden';
		}
		me._text_4help.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_4help);
		me._screen.style[domTransition]='none';
		me._screen.style.visibility='hidden';
		me._screen.ggVisible=false;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			if (player.transitionsDisabled) {
				me._loader.style[domTransition]='none';
			} else {
				me._loader.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loader.style.opacity='0';
			me._loader.style.visibility='hidden';
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['left']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			player.changeTiltLog(-1,true);
		}
		var hs='';
		if (me._bar.ggParameter) {
			hs+=parameterToTransform(me._bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._bar.style[domTransform]=hs;
		var hs='';
		if (me._tip.ggParameter) {
			hs+=parameterToTransform(me._tip.ggParameter) + ' ';
		}
		hs+='translate(' + (168 * player.getPercentLoaded() + 0) + 'px,0px) ';
		me._tip.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hsu(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsu=document.createElement('div');
		el.ggId="hsu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 129px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsu.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsu.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsu.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsu.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsu.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsu.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_56=document.createElement('div');
		els=me._svg_56__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIGhlaWdodD0iMjk3bW0iIHdpZHRoPSIyMTBtbSIgdmlld0JveD0iMCAwIDc0NC4wOTQ0ODgxOSAxMDUyLjM2MjIwNDciIGlkPSJzdm'+
			'cyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiBzb2RpcG9kaTpkb2NuYW1lPSJzdmdfNTYuc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1Ij4KIDxkZWZzIGlkPSJkZWZzNCI+CiAgPHN0eWxlIGlkPSJzdHlsZTMzNDAiIHR5cGU9InRleHQvY3Nz'+
			'Ij4KICAgIC5zdHIwIHtzdHJva2U6IzlEOUU5RTtzdHJva2Utd2lkdGg6ODk1LjE3O3N0cm9rZS1saW5lam9pbjpiZXZlbH0KICAgIC5maWwwIHtmaWxsOndoaXRlfQogICA8L3N0eWxlPgogIDxtYXNrIGlkPSJpZDAiPgogICA8bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSIyNzE0IiB4MT0iMzY0NC45IiBpZD0iaWQxIiB5Mj0iMjM4NDAuMSIgeDI9IjE3MjQxLjUiPgogICAgPHN0b3AgaWQ9InN0b3AzMzQ0IiBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTsgc3RvcC1jb2xvcjp3aGl0ZSIvPgogICAgPHN0b3AgaWQ9InN0b3AzMzQ2IiBvZm'+
			'ZzZXQ9IjEiIHN0eWxlPSJzdG9wLW9wYWNpdHk6MDsgc3RvcC1jb2xvcjp3aGl0ZSIvPgogICA8L2xpbmVhckdyYWRpZW50PgogICA8cmVjdCB5PSI0NTI4IiBoZWlnaHQ9IjE3NDk4IiB3aWR0aD0iMjE1MjAiIGlkPSJyZWN0MzM0OCIgeD0iLTMxNyIgc3R5bGU9ImZpbGw6dXJsKCNpZDEpIi8+CiAgPC9tYXNrPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnpvb209IjAuNyIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpbmtz'+
			'Y2FwZTpjeD0iMjg5LjA1NDA1IiBpZD0iYmFzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy15PSI2MCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ0IiBpbmtzY2FwZTp3aW5kb3cteD0iMTE5IiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE1NjYiIGlua3NjYXBlOmN5PSI1ODYuNjM2OTgiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE3Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PS'+
			'IiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiBpZD0ibGF5ZXIxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIj4KICA8ZyBpZD0i0KHQu9C+0LlfeDAwMjBfMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzU0MzMwNywwLDAsMC4wMzU0MzMwNyw1Ljc5MTEzLDQxLjA4ODUzMikiIHN0eWxlPSJj'+
			'bGlwLXJ1bGU6ZXZlbm9kZDtmaWxsLXJ1bGU6ZXZlbm9kZDtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5O3NoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247dGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uIj4KICAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4KICAgPHNvZGlwb2RpOm5hbWVkdmlldyBzaG93Z3VpZGVzPSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgZ3JpZHRvbGVyYW5jZT0iMTAuMCIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgcGFnZWNvbG9yPSIjZmZmZmZmIi'+
			'BpbmtzY2FwZTpjeD0iNzcuNzMwNjE4IiBpbmtzY2FwZTpjeT0iMy4xNTgyMjA4IiBpZD0iYmFzZS02IiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk3OCIgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBndWlkZXRvbGVyYW5jZT0iMTAwMDAiIGlua3NjYXBlOnpvb209IjMuMTIyMDUwNCIgaW5rc2NhcGU6d2luZG93LXg9Ii00IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyMjE4IiBpbmtzY2FwZTp3aW5kb3cteT0iLTQiIG9iamVjdHRvbGVyYW5jZT0iMTAuMCIvPgogICA8ZyBpZD0iZzcxMjYiPgog'+
			'ICAgPHBhdGggbWFzaz0idXJsKCNpZDApIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2Njc2NjY2NjY2NjY2NjY2NjIiBpZD0icGF0aDIyNDUiIGNsYXNzPSJmaWwwIHN0cjAiIGQ9Im0gMTMxLDEwMDE1IGMgMTUxOCwyIDMwNDYsNCA0NTcxLDYgLTIwNSw1ODcgLTQyNywxMjE4IC02NjYsMTkwMiAtMjQ5LDcxNCAtNTE1LDE0OTAgLTgwNywyMzMyIC0zMzEsOTUyIC03MDIsMTk5OCAtMTEwNCwzMTYyIC00MzAsMTI0MyAtOTEyLDI2MjkgLTE0NDgsNDE2MSAxNjY1LC0yIDMzMzQsLTggNDk5NiwtMTMgMTY2MiwtNiAzMzIyLC0xNSA0OTgxLC0yMyAxNjU2LC04IDMzMTIsLTE0IDQ5NjEsLTIwID'+
			'E2NTIsLTYgMzMwNywtMTUgNDk1MywtMjEgLTU4NSwtMTUyNyAtMTExMSwtMjg5NCAtMTU4MSwtNDEyNyAtNDM4LC0xMTUxIC04MzYsLTIxOTUgLTExOTYsLTMxMzggLTMxOSwtODM3IC02MTYsLTE2MTAgLTg4NSwtMjMxOCAtMjU3LC02NzYgLTUwMSwtMTMwNCAtNzI0LC0xODg5IDE1MjUsLTEgMzA0OCwxIDQ1NzMsLTMgQyAxOTU0OSw5NDQyIDE4NDMwLDg5MDAgMTczOTMsODM5NiAxNjM5MCw3OTA5IDE1NDUyLDc0NTUgMTQ1NzcsNzAyOCAxMzAxMCw2MjY0IDExNjE3LDU1ODkgMTAzNzAsNDk3NyA5MTUwLDU1ODQgNzc3OCw2MjU2IDYyMzQsNzAxNCA1MzY5LDc0MzkgNDQ0Myw3ODk1IDM0NTAs'+
			'ODM4MSAyNDIyLDg4ODQgMTMxOCw5NDI3IDEzMCwxMDAxNiBsIC0yODIuMjIyMjMsNDAuMzE3IHoiIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiM5ZDllOWU7c3Ryb2tlLXdpZHRoOjg5NS4xNjk5ODI5MTtzdHJva2UtbGluZWpvaW46YmV2ZWwiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_56__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 56";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 196px;';
		hs+='left : -58px;';
		hs+='opacity : 0.98;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_56.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
		}
		me._svg_56.onmouseover=function (e) {
			me._svg_56.style[domTransition]='none';
			me._svg_56.style.opacity='1';
			me._svg_56.style.visibility=me._svg_56.ggVisible?'inherit':'hidden';
			me._svg_56.style[domTransition]='none';
			me._svg_56.ggParameter.sx=1;me._svg_56.ggParameter.sy=1;
			me._svg_56.style[domTransform]=parameterToTransform(me._svg_56.ggParameter);
		}
		me._svg_56.onmouseout=function (e) {
			me._svg_56.style[domTransition]='none';
			me._svg_56.style.opacity='0.98';
			me._svg_56.style.visibility=me._svg_56.ggVisible?'inherit':'hidden';
			me._svg_56.style[domTransition]='none';
			me._svg_56.ggParameter.sx=0.8;me._svg_56.ggParameter.sy=0.8;
			me._svg_56.style[domTransform]=parameterToTransform(me._svg_56.ggParameter);
		}
		me._svg_56.ggUpdatePosition=function (useTransition) {
		}
		me._hsu.appendChild(me._svg_56);
		el=me.__23w2=document.createElement('div');
		els=me.__23w2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0422\u0435\u043a\u0441\u0442 23w";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -121px;';
		hs+='opacity : 0.95;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0223ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b><i>"+me.hotspot.title+"<\/i><\/b>";
		el.appendChild(els);
		me.__23w2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23w2.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
		}
		me.__23w2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((175-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hsu.appendChild(me.__23w2);
		me._svg_56.style[domTransition]='none';
		me._svg_56.style.opacity='0.98';
		me._svg_56.style.visibility=me._svg_56.ggVisible?'inherit':'hidden';
		me.__div = me._hsu;
	};
	function SkinHotspotClass_hsl(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsl=document.createElement('div');
		el.ggId="hsl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsl.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsl.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsl.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsl.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.__456.style[domTransition]='none';
			me.__456.ggParameter.sx=1.35;me.__456.ggParameter.sy=1.35;
			me.__456.style[domTransform]=parameterToTransform(me.__456.ggParameter);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsl.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.__456.style[domTransition]='none';
			me.__456.ggParameter.sx=1;me.__456.ggParameter.sy=1;
			me.__456.style[domTransform]=parameterToTransform(me.__456.ggParameter);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsl.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23w1=document.createElement('div');
		els=me.__23w1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0422\u0435\u043a\u0441\u0442 23w";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -82px;';
		hs+='opacity : 0.95;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0223ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b><i>"+me.hotspot.title+"<\/i><\/b>";
		el.appendChild(els);
		me.__23w1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23w1.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
		}
		me.__23w1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((175-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hsl.appendChild(me.__23w1);
		el=me.__456=document.createElement('div');
		els=me.__456__img=document.createElement('img');
		els.className='ggskin ggskin__456';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAFC0lEQVRIibWW+28UVRTHv3fm7ux0393dbku720JbkLYGWAkFWh4l8lSoBg0B8RdiNJFHjP4J/CQQjb9IePyiEYVErQSECIYoQSglUEspYJFSSrVvut3HbPc51x92p06H2W6MYZKTO3tz93zOOXfu9x7CGMPzfrjnTgBA/8tiQgjRm2d5ykHylUvlWDsCANuy65LL6vbtshdV7TYYuAop9BThp73t8cmxd04f29gB5ClXFkCy6zgAvNqamo97bJ7yI47iuQcUgMzSKLCXvpRMhPcqfnKWSwVQQzglk4XL9rlKqho/szortjY3ALVzgHu9Lnz78wSikQHI6VhK8aML0clAnQXxN37kq/LvOFQ4q2bd5gZgxULAbAJ4Hjjf5kBgOCwLorM7ZyY5SkSzxr'+
			'vcc63lNa8esLpnb9iwBKRpMWASgUQC6OkHopEg0knpGiH0uC5EB0BVZvCU1BXXbzx40OldsP7Nte4pQCwO3LoPnLgYx/hg5y3eYHr3+89XRRS3NB+AEE5gTKa+2Y1ldQ0ffOIur1+9dpkbjQszACkKXLoJXGoHgiMPWuNSYMePXzT3TQueMZYX4CqqLqlff+BTp3fRms0vV2LTcsBmzgBau4Bvzo8gMHi7beTJb1tbL+wfYozJquA5qgEom0sBGBiTDQ5nubt26ftfllStrl2/woVVizKAiRBwvhW4eKVfDgx33ohL4/taL+wfBqA9eIzqAAxqe8G/t9M7rxlrG1xo8gMuOzA6DtztBa52yggHHl8PjfbtunxmT68OAMCznyhVAxrX/dQnmm2oX1KNVX7A4wQoBSYk4ModQAoOpONS4NTlM3seC0YzE0WLruwoh0ud'+
			'hRoEg0hhNwMOM8Bl9SGRAgZHExAKHLzFXuEp9dVzHCEsFovIWh1jjDGq3WwViAJAKs4gxZEKRUHNpswfKQeUuATwnIA+VL29dPPHKYAebzm8ckAvE17jVA3h+x+dOOzxLihN0hdtQoHZ7nEARkMmdYEC9x8DMhEccjq9KC4NJr/+oevOW6/VTOpBKKafauU3D4BEAj0dRtEuB1ldtWg0ml12oNid+cICIaCnbwyuIq+YkulKEG5s2yZv60wQ9TsHgCOEcLFYWBro/bWjqNhv7x+3+G1WO/F5AJsFmOcDRNGE9q4BlHnLOdHmnX+i5UHByTPdD7a94pPUEB7PiuGU2gKALKfSk8HeP02WWZHhWGUl5QVzeTFgMQPFToBQKyYigN0Ce1BiTdHQk8ipsw9vbN9SnYIqaqIxaMdw8O9wT1fLtdKKlZaRmG+xw0r5MndGfS'+
			'tLATkNXO0Iw+Uu5BIJfmkiOtaxfUt1txoCjWPl/Rl4YOD3u9bCOeRJsKLWbqFCmRsQjUBpEWAWjbhxewjpVMwgBft+2fl6Xbtynyg6k9ZuGDInmKlLOjpyL3L/+tGvhAJ38uzV5TsFCvfimoxYVnozccejT8FxdMofzTqRdQDah1cyfNR9buhR97lDb+xuK2jh6t8jBPB6gM6HQDI+gVQydJM3mC5OQRhjLNsr5AMxaEr7R9uRYwajLXEyOX8ngMJIcAiT4aHvmCx/eProhr+mFioqkEON1WKpqAPJBpQGkASQyI6prE2Tlml3fJ6MlJIqHwrLQmT8u285e6tp1+8MIC1EWaMF5YfkACkOFKdENa/MpWcC6bZEOUAypiuBGj5jNjO2qZoGT6sITDVOBaPXF//vXlg95mq8/wF4bwHE4IGHeQAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45-";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__456.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__456.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
		}
		me.__456.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me.__456.style[domTransition]='none';
			} else {
				me.__456.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__456.ggParameter.sx=1.5;me.__456.ggParameter.sy=1.5;
			me.__456.style[domTransform]=parameterToTransform(me.__456.ggParameter);
		}
		me.__456.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me.__456.style[domTransition]='none';
			} else {
				me.__456.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__456.ggParameter.sx=1;me.__456.ggParameter.sy=1;
			me.__456.style[domTransform]=parameterToTransform(me.__456.ggParameter);
		}
		me.__456.ggUpdatePosition=function (useTransition) {
		}
		me._hsl.appendChild(me.__456);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me.__23w1.ggParameter) {
					hs+=parameterToTransform(me.__23w1.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me.__23w1.style[domTransform]=hs;
			}
			me.hotspotTimerEvent();
		me.__div = me._hsl;
	};
	function SkinHotspotClass_hsr(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsr=document.createElement('div');
		el.ggId="hsr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsr.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsr.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsr.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsr.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsr.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsr.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23w0=document.createElement('div');
		els=me.__23w0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0422\u0435\u043a\u0441\u0442 23w";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -82px;';
		hs+='opacity : 0.95;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0223ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b><i>"+me.hotspot.title+"<\/i><\/b>";
		el.appendChild(els);
		me.__23w0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23w0.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
		}
		me.__23w0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((175-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hsr.appendChild(me.__23w0);
		el=me.__455=document.createElement('div');
		els=me.__455__img=document.createElement('img');
		els.className='ggskin ggskin__455';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAAE+UlEQVRIibWWW2wUVRjH/2dmtnvtzl66F9jdlm2FImBLGxIDlRBQQhoiXipChDb6RowPxgeN+uDlwQcfTDTRqMVyiY0Qa4AgEQNClAZSEDS9WFoutTQt23a3u7Dd7m1mjg87p84OLUUTJvkyZ05mft93vvm+/zmEUoqHdXEPjQxA0D4QQshcL9H/uTxCKdVCi+6NzYdrrY7y1lJXVb3o9CAnKcPJ2PDnANoOfhSOLQTnVDBBIUUcAJ6ZomRfM1l99aAKppNTKBG4CntZ+GMAX7W8M+ReEK6CGZyBBQBCLnNHyc5EwRuM2P6UC2/sBLatA2zOYBOAL5vfvla2EJylgcENzGRJviFlk4qt1IFVVUDIBzTUAk83GODwhp+jVGnb9WZ/xXxwfq6IVTMkxn'+
			'sH/eEn1prt5cFynxF+N2A2AUEPABnczQi/LDszteSHn2+feGHLotxccK0DQRO5kM3clYmUv2wu9dYPJcr9HlGAx1lwUO4HzCYzuREpWZ7PTK9sP9Z7ZsfWytRckc8XPT81OZDIJsfPiq7q1aPToQBVgKAXsJgBnxOQFDMZnTJW59J3ag4dHzy7Y2tlsrG5nex+vqYIXlQpDA6AS0zdTE3e6jxlsoXWjMRdi52iFV4HYLMCFX5AgYkMjUpVspRdvv9w5+mfDr6UamxuJ/w81cLpjMykYhlOkboNRmv1tTHbIplzkJAXEG2Ayw4YLU5yOyGG45HBTe1HLnec/LYlrYUTnSOidxCb6I8qmeQ5h/fRxxLSkqDbTmA1A24R8LkAECM/FhcD0b+vvfXKrvoPGBwaMOZ2RDiAcPHY9aTDWSVY7IGNabhJVQDwOAGLCXDbgZQk'+
			'4q++3/FNW+x9DgBVTQEgA5AA5NW7pM7RwivgOE4wlZS4/Bxv4sYms8hLhWg4DhCtBScGYwkAQKCUUlVaFE0VaVMis//hcld6wyu2bXf4ap91ekIocwECX/iAUuDuDJDOQZJysgD1I6Z62hWwVcjqmNpKvfbQsidfdAcaWkRfZVAQgHUrAWcpIEnAZBzo7Aau9CVuyXLyQOepLXyR5Goc3GPVq3c3lQXX7/GUP84bjBxqHgFqlxbyPR4DLvQAZy6lIxPD5/eBZFoBnZ7PVTm+xbVlS2te3u0JbdglepfwFNNo2hzChrpCI6XSQFcvcPT0iDwdH/luoGvfJwM9HRmLxckJwOwmcY/0WiwuS3jFMy3u4JrX/ZV1vGgH6qqdaKgtNFAqDfxyEfixMzWRmBhoi4507R3o6cgBIDMzcUWYR88FAHx13c5NZYH1r7oW1/CSfB'+
			'cb6+1Yv7qgLbkccKkPONmVzU+NdR841rr5Q7W6WCpn00J0YAGAgVLJRzhipkoKTZsWFYHPdwOHTmdS40Pn997489Cn/5YsZrdEAfe2P1NGQZZyyOfiILyAcKAAzmSBK1eB4xcQjY8P7o/e6t7bc7E1qqkyBidaOEGxcPGR4a5OT2htbz6bWNVz3QOTARidBI6cA0au/9Hx/Wf17+lLlm3mhBCiT4vWESbH+yNXu77eY7UH3j3xm73x124fAMSjIwPtkZsXvpgPzMqaRTubZwAl6p2pI2ssJgvM7gcuilzfobI6r+1WpjULgqFO6uF6MFAsBRIeAMwuQQNmUDYmmme91iwI1sNZpBTF2q4VMzZeEMzgDEA1Y+jgRfagZ8f7nhV1zijw3w6l/wBJvS1FKR2pGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__455.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__455.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
		}
		me.__455.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me.__455.style[domTransition]='none';
			} else {
				me.__455.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__455.ggParameter.sx=1.5;me.__455.ggParameter.sy=1.5;
			me.__455.style[domTransform]=parameterToTransform(me.__455.ggParameter);
		}
		me.__455.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me.__455.style[domTransition]='none';
			} else {
				me.__455.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__455.ggParameter.sx=1;me.__455.ggParameter.sy=1;
			me.__455.style[domTransform]=parameterToTransform(me.__455.ggParameter);
		}
		me.__455.ggUpdatePosition=function (useTransition) {
		}
		me._hsr.appendChild(me.__455);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me.__23w0.ggParameter) {
					hs+=parameterToTransform(me.__23w0.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me.__23w0.style[domTransform]=hs;
			}
			me.hotspotTimerEvent();
		me.__div = me._hsr;
	};
	function SkinHotspotClass_hsd(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsd=document.createElement('div');
		el.ggId="hsd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsd.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsd.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsd.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsd.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsd.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsd.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23w=document.createElement('div');
		els=me.__23w__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0422\u0435\u043a\u0441\u0442 23w";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -81px;';
		hs+='opacity : 0.95;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0223ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b><i>"+me.hotspot.title+"<\/i><\/b>";
		el.appendChild(els);
		me.__23w.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23w.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
		}
		me.__23w.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((175-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hsd.appendChild(me.__23w);
		el=me.__454=document.createElement('div');
		els=me.__454__img=document.createElement('img');
		els.className='ggskin ggskin__454';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAgCAYAAADud3N8AAAFE0lEQVRIie2XW2xURRjHf3PO2bO77W4v2/uNAgXSAkWsLVClgXIRghCqgpGoMSlBE6/PJhKRgLxofBC8xBeMSHgoFxMVCkJbqEDkUoGkELAI1ba0pdvWXre7e8aH3VNOtwWKMZgYJ/kyM+ecmd983/z3m1khpeRhF+WhE/+H/iehmrUjhBDWvnxAaY93vAgblhqAzOx5SuGy9y9IGZguhCZVW9Smiu3zN98DJCLfPf3q0Y1SBt6TMiAUTa8H8vd9usQQhEIsGLkAVm+ovJg+pTS381Y9A71NCEVDUfU6d3zOnJ1bsgIWYKSRnjlPK1j6zmfpUxe/5HBGK41XDiONAIqm+4AoAahhsBXOqvLv+12eLDxp+Tw2FRx2qPnFx+3GM7Xe5uuLqva/HLB8P2'+
			'L8c2/VvxiflvMFGEJRFUoe0Rn0wblr0NJQfVmzDFDDJgAU1Y6vv4O5ubC8GFxOSI6z892p+fOd7pRDwFJAUVVNlVKqhhEUgPLkum8+VlRZnjtBFzfbYWUxPD4LegdAU+FAA3lWoAbYAB2wG36xWdNjiHJAlANUBUpmhyax2WMWlb1y5HzJyh1pdkes3e5wO6bNXJu5sGzHBzGevDWuuExx8WorK4tDY1SF4Xk0PQY1DNIstQao1y58fT6/+M3FXf7kVIcNslNB1yHeDdFRLm60R6eCf7rTkXpmsK9NTJrx/IrYhKkb49PynKpuY/XCeObOBFcUBIPw00WovUSrP6BtFYDT4qEJVkIiEcbat+t2J2XNeuKZEijOD+0twLc1sLfyGv3dnS2DvR19SZlzPbEJHo/3dgPPLsth9YLQd4M+OHUJue8Eoqvt6s7aitfWm56q'+
			'lhBrpriEEErr9eM/JiQXTrzR6Zni0G1MzgBFgWgneOISCDoy3IMBPV5RiZqQ6aa0yENBHsS6wDDg6FnYVz0g/AMD677akrEtKbVgGGQVkmkKSNHf1+7rbKmrjUvMLWrqyUgXQiMpFlITIdkDLjskp8SJnGw3syZB0QxISQBvFxw7Bz+cCna1NZ7d7m1u2P3rpV393tuXpQDsYbBuCbHtDhgJGIBRtqH6y/j03MVlpSmUPBoKn00FVQ21g0HwB0PtE3VwoKqVHm/jhxWfzHkXCAKGlNIQEQIyobolzGbCkEIIlr9wYFfKxKI5yxekUVoAiXGhcEMonO2dUF0Hh2pahno7296o2DF7FxAwFy6llEq4Ewyb32KB8DMZBqtSSvXInjXrW65X11XWtsmq83DzVsjDYDDUrq7DOHyyY7Dtj9N79n9euNv0MDwPRHrCnWLNp9'+
			'ZUqUgpaWs8WeVyT8pu70vOdrvdii8ArV64/BvGweOt3Z3N9Ztq9q7fOjjQPWQBytc/knJFcSiE5p4R9s4KHbUIKSW9Pe09F45v3dbrbVzi618z5HAl2gBhBH0Nv185uKuloXLPQL/XZ4YUkKvK9w87JaSU1sRtZigzWUTacGRsNoeWlFroSp/41GlnrH4DpDHQ7Z/sbTuW0tFa39Pd1eQ3gZFHnEb4afiEivTYWiR3fl74/YNDrc0/9yIdU7KnletOd1bArzV1/en19nR3NZnCGQUc9nS4M9Jja8KwKtyqgUDYrMIbFs7dDvERN4cxPLYWU+VKRD/4IMBR0LuAZdiCjFa7CTHr+wLHhN4DrDA6AsOg8QIhYk9HvbzLdcS6PquN9yJ3T6gFzBhAK/iBbo73hY4BH0n8G//Axg39J8u/csP/C65tMPcr5RhIAAAAAElF'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__454.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__454.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
		}
		me.__454.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me.__454.style[domTransition]='none';
			} else {
				me.__454.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__454.ggParameter.sx=1.5;me.__454.ggParameter.sy=1.5;
			me.__454.style[domTransform]=parameterToTransform(me.__454.ggParameter);
		}
		me.__454.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me.__454.style[domTransition]='none';
			} else {
				me.__454.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__454.ggParameter.sx=1;me.__454.ggParameter.sy=1;
			me.__454.style[domTransform]=parameterToTransform(me.__454.ggParameter);
		}
		me.__454.ggUpdatePosition=function (useTransition) {
		}
		me._hsd.appendChild(me.__454);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me.__23w.ggParameter) {
					hs+=parameterToTransform(me.__23w.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me.__23w.style[domTransform]=hs;
			}
			me.hotspotTimerEvent();
		me.__div = me._hsd;
	};
	function SkinHotspotClass_hsp(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsp=document.createElement('div');
		el.ggId="hsp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsp.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsp.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsp.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsp.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsp.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsp.ggUpdatePosition=function (useTransition) {
		}
		me.__div = me._hsp;
	};
	function SkinHotspotClass_hsn(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hsn=document.createElement('div');
		el.ggId="hsn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsn.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hsn.onclick=function (e) {
			player.openUrl(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsn.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hsn.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hsn.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hsn.ggUpdatePosition=function (useTransition) {
		}
		me.__div = me._hsn;
	};
	function SkinHotspotClass_m41(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._m41=document.createElement('div');
		el.ggId="m41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 348px;';
		hs+='position : absolute;';
		hs+='top : 258px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._m41.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._m41.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._m41.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._m41.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._m41.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._m41.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage_q=document.createElement('div');
		els=me._hsimage_q__img=document.createElement('img');
		els.className='ggskin ggskin_hsimage_q';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage_q";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -18px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage_q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage_q.onmouseover=function (e) {
			me.elementMouseOver['hsimage_q']=true;
		}
		me._hsimage_q.onmouseout=function (e) {
			me._hsimage_q.style[domTransition]='none';
			me._hsimage_q.ggParameter.sx=1;me._hsimage_q.ggParameter.sy=1;
			me._hsimage_q.style[domTransform]=parameterToTransform(me._hsimage_q.ggParameter);
			me.elementMouseOver['hsimage_q']=false;
		}
		me._hsimage_q.ontouchend=function (e) {
			me.elementMouseOver['hsimage_q']=false;
		}
		me._hsimage_q.ggUpdatePosition=function (useTransition) {
		}
		me._m41.appendChild(me._hsimage_q);
		el=me.__=document.createElement('div');
		els=me.____text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u0422\u0435\u043a\u0441\u0442-\u0432\u043e\u043f\u0440\u043e\u0441\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 135px;';
		hs+='left : -146px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 258px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 260px;';
		hs+='height: auto;';
		hs+='background: #003f00;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.hotspot.title+"<\/b>";
		el.appendChild(els);
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__.onclick=function (e) {
			me.__.style[domTransition]='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me._m41.appendChild(me.__);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['hsimage_q']) {
					me.__.style[domTransition]='none';
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
					me._hsimage_q.style[domTransition]='none';
					me._hsimage_q.ggParameter.sx=1.5;me._hsimage_q.ggParameter.sy=1.5;
					me._hsimage_q.style[domTransform]=parameterToTransform(me._hsimage_q.ggParameter);
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._m41;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__1=document.createElement('div');
		el.ggId="1";
		el.ggDx=318;
		el.ggDy=-72;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt45=document.createElement('div');
		els=me._txt45__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt45";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : -51px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 104px;';
		hs+='height: auto;';
		hs+='background: #444444;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.hotspot.title+"<\/b>";
		el.appendChild(els);
		me._txt45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txt45.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._txt45);
		el=me.__453=document.createElement('div');
		els=me.__453__img=document.createElement('img');
		els.className='ggskin ggskin__453';
		hs=basePath + 'images/_453.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -62px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__453.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__453.onclick=function (e) {
			var newWin = window.open('$hu', 'okno', 'width=1000,height=700,status=no,toolbar=no, menubar=no,scrollbars=yes,resizable=yes');newWin.focus()
		}
		me.__453.onmouseover=function (e) {
			me.__453.style[domTransition]='none';
			me.__453.ggParameter.sx=0.4;me.__453.ggParameter.sy=0.4;
			me.__453.style[domTransform]=parameterToTransform(me.__453.ggParameter);
			me.__453.style[domTransition]='none';
			me.__453.style.opacity='1';
			me.__453.style.visibility=me.__453.ggVisible?'inherit':'hidden';
			me._txt45.style[domTransition]='none';
			me._txt45.style.visibility='hidden';
			me._txt45.ggVisible=false;
		}
		me.__453.onmouseout=function (e) {
			me.__453.style[domTransition]='none';
			me.__453.ggParameter.sx=0.3;me.__453.ggParameter.sy=0.3;
			me.__453.style[domTransform]=parameterToTransform(me.__453.ggParameter);
			me.__453.style[domTransition]='none';
			me.__453.style.opacity='0.9';
			me.__453.style.visibility=me.__453.ggVisible?'inherit':'hidden';
			me._txt45.style[domTransition]='none';
			me._txt45.style.visibility='hidden';
			me._txt45.ggVisible=false;
		}
		me.__453.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__453);
		me.__453.style[domTransition]='none';
		me.__453.style.opacity='0.9';
		me.__453.style.visibility=me.__453.ggVisible?'inherit':'hidden';
		me.__div = me.__1;
	};
	function SkinHotspotClass_sd(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._sd=document.createElement('div');
		el.ggId="sd";
		el.ggDx=-295;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._sd.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._sd.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._sd.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._sd.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._sd.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._sd.ggUpdatePosition=function (useTransition) {
		}
		el=me.__452=document.createElement('div');
		els=me.__452__img=document.createElement('img');
		els.className='ggskin ggskin__452';
		hs=basePath + 'images/_452.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggDx=1;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.60001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__452.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__452.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me.__452.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sd.appendChild(me.__452);
		el=me._text_sd=document.createElement('div');
		els=me._text_sd__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text sd";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -126px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 200px;';
		hs+='height: auto;';
		hs+='background: #505050;';
		hs+='background: rgba(80,80,80,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._text_sd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sd.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me._text_sd.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._sd.appendChild(me._text_sd);
		me.__div = me._sd;
	};
	function SkinHotspotClass_su(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._su=document.createElement('div');
		el.ggId="su";
		el.ggDx=-342;
		el.ggDy=201;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._su.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._su.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._su.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._su.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._su.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._su.ggUpdatePosition=function (useTransition) {
		}
		el=me.__451=document.createElement('div');
		els=me.__451__img=document.createElement('img');
		els.className='ggskin ggskin__451';
		hs=basePath + 'images/_451.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggDx=3;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.60001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__451.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__451.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me.__451.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._su.appendChild(me.__451);
		el=me._text_su1=document.createElement('div');
		els=me._text_su1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text su";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: auto;';
		hs+='background: #505050;';
		hs+='background: rgba(80,80,80,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._text_su1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_su1.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me._text_su1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._su.appendChild(me._text_su1);
		me.__div = me._su;
	};
	function SkinHotspotClass_sr(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._sr=document.createElement('div');
		el.ggId="sr";
		el.ggDx=-91;
		el.ggDy=138;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._sr.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._sr.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._sr.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._sr.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._sr.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._sr.ggUpdatePosition=function (useTransition) {
		}
		el=me.__450=document.createElement('div');
		els=me.__450__img=document.createElement('img');
		els.className='ggskin ggskin__450';
		hs=basePath + 'images/_450.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggDx=3;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.60001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__450.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__450.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me.__450.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sr.appendChild(me.__450);
		el=me._text_su0=document.createElement('div');
		els=me._text_su0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text su";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: auto;';
		hs+='background: #505050;';
		hs+='background: rgba(80,80,80,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._text_su0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_su0.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me._text_su0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._sr.appendChild(me._text_su0);
		me.__div = me._sr;
	};
	function SkinHotspotClass_sl(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._sl=document.createElement('div');
		el.ggId="sl";
		el.ggDx=36;
		el.ggDy=107;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._sl.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._sl.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._sl.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._sl.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._sl.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._sl.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		els=me.__45__img=document.createElement('img');
		els.className='ggskin ggskin__45';
		hs=basePath + 'images/_45.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 45";
		el.ggDx=3;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.55,sy:0.55 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.60001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__45.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me.__45.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sl.appendChild(me.__45);
		el=me._text_su=document.createElement('div');
		els=me._text_su__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text su";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: auto;';
		hs+='background: #505050;';
		hs+='background: rgba(80,80,80,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._text_su.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_su.onclick=function (e) {
			skin._html_box.ggText="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
			skin._html_box.ggTextDiv.innerHTML=skin._html_box.ggText;
			if (skin._html_box.ggUpdateText) {
				skin._html_box.ggUpdateText=function() {
					var hs="<br><iframe width=\"735\" height=\"700\" src=\""+me.hotspot.title+"\" frameborder=\"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._html_box.ggUpdatePosition) {
				skin._html_box.ggUpdatePosition();
			}
			skin._html_box.ggTextDiv.scrollTop = 0;
			skin._html_box.style[domTransition]='none';
			skin._html_box.style.visibility=(Number(skin._html_box.style.opacity)>0||!skin._html_box.style.opacity)?'inherit':'hidden';
			skin._html_box.ggVisible=true;
		}
		me._text_su.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._sl.appendChild(me._text_su);
		me.__div = me._sl;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='hsu') {
			hotspot.skinid = 'hsu';
			hsinst = new SkinHotspotClass_hsu(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='hsl') {
			hotspot.skinid = 'hsl';
			hsinst = new SkinHotspotClass_hsl(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='hsr') {
			hotspot.skinid = 'hsr';
			hsinst = new SkinHotspotClass_hsr(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='hsd') {
			hotspot.skinid = 'hsd';
			hsinst = new SkinHotspotClass_hsd(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='hsp') {
			hotspot.skinid = 'hsp';
			hsinst = new SkinHotspotClass_hsp(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='hsn') {
			hotspot.skinid = 'hsn';
			hsinst = new SkinHotspotClass_hsn(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='m41') {
			hotspot.skinid = 'm41';
			hsinst = new SkinHotspotClass_m41(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='1') {
			hotspot.skinid = '1';
			hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='sd') {
			hotspot.skinid = 'sd';
			hsinst = new SkinHotspotClass_sd(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='su') {
			hotspot.skinid = 'su';
			hsinst = new SkinHotspotClass_su(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='sr') {
			hotspot.skinid = 'sr';
			hsinst = new SkinHotspotClass_sr(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'sl';
			hsinst = new SkinHotspotClass_sl(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['hsu']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsu'].length; i++) {
				hotspotTemplates['hsu'][i] = null;
			}
		}
		if(hotspotTemplates['hsl']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsl'].length; i++) {
				hotspotTemplates['hsl'][i] = null;
			}
		}
		if(hotspotTemplates['hsr']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsr'].length; i++) {
				hotspotTemplates['hsr'][i] = null;
			}
		}
		if(hotspotTemplates['hsd']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsd'].length; i++) {
				hotspotTemplates['hsd'][i] = null;
			}
		}
		if(hotspotTemplates['hsp']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsp'].length; i++) {
				hotspotTemplates['hsp'][i] = null;
			}
		}
		if(hotspotTemplates['hsn']) {
			var i;
			for(i = 0; i < hotspotTemplates['hsn'].length; i++) {
				hotspotTemplates['hsn'][i] = null;
			}
		}
		if(hotspotTemplates['m41']) {
			var i;
			for(i = 0; i < hotspotTemplates['m41'].length; i++) {
				hotspotTemplates['m41'][i] = null;
			}
		}
		if(hotspotTemplates['1']) {
			var i;
			for(i = 0; i < hotspotTemplates['1'].length; i++) {
				hotspotTemplates['1'][i] = null;
			}
		}
		if(hotspotTemplates['sd']) {
			var i;
			for(i = 0; i < hotspotTemplates['sd'].length; i++) {
				hotspotTemplates['sd'][i] = null;
			}
		}
		if(hotspotTemplates['su']) {
			var i;
			for(i = 0; i < hotspotTemplates['su'].length; i++) {
				hotspotTemplates['su'][i] = null;
			}
		}
		if(hotspotTemplates['sr']) {
			var i;
			for(i = 0; i < hotspotTemplates['sr'].length; i++) {
				hotspotTemplates['sr'][i] = null;
			}
		}
		if(hotspotTemplates['sl']) {
			var i;
			for(i = 0; i < hotspotTemplates['sl'].length; i++) {
				hotspotTemplates['sl'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};