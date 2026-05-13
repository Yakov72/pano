// Garden Gnome Software - Skin
// Pano2VR 5.0beta4/11987
// Filename: swed-flat-38.ggsk
// Generated Пн сен 19 09:32:35 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
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
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
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
	
	parameterToTransform=function(p) {
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
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/hide__o.png';
		preLoadImg.src=basePath + 'images/hide__a.png';
		preLoadImg.src=basePath + 'images/show__o.png';
		preLoadImg.src=basePath + 'images/show__a.png';
		preLoadImg.src=basePath + 'images/info__a.png';
		preLoadImg.src=basePath + 'images/fullscreen_collapce__a.png';
		preLoadImg.src=basePath + 'images/fullscreen__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loader=document.createElement('div');
		this._loader.ggId="loader";
		this._loader.ggLeft=-120;
		this._loader.ggTop=-120;
		this._loader.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader.ggVisible=true;
		this._loader.className='ggskin ggskin_container ';
		this._loader.ggType='container';
		hs ='';
		hs+='height : 74px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -120px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		this._loader.setAttribute('style',hs);
		this._loader.style[domTransform + 'Origin']='50% 50%';
		me._loader.ggIsActive=function() {
			return false;
		}
		me._loader.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loader.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loader_image=document.createElement('div');
		this._loader_image__img=document.createElement('img');
		this._loader_image__img.className='ggskin ggskin_image';
		this._loader_image__img.setAttribute('src',basePath + 'images/loader_image.png');
		this._loader_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loader_image__img.className='ggskin ggskin_image';
		this._loader_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loader_image__img);
		this._loader_image.appendChild(this._loader_image__img);
		this._loader_image.ggId="loader_image";
		this._loader_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader_image.ggVisible=true;
		this._loader_image.className='ggskin ggskin_image ';
		this._loader_image.ggType='image';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 217px;';
		this._loader_image.setAttribute('style',hs);
		this._loader_image.style[domTransform + 'Origin']='50% 50%';
		me._loader_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loader_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loader_image.ggUpdatePosition=function () {
		}
		this._loader.appendChild(this._loader_image);
		this._bar=document.createElement('div');
		this._bar__img=document.createElement('img');
		this._bar__img.className='ggskin ggskin_image';
		this._bar__img.setAttribute('src',basePath + 'images/bar.png');
		this._bar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._bar__img.className='ggskin ggskin_image';
		this._bar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._bar__img);
		this._bar.appendChild(this._bar__img);
		this._bar.ggId="bar";
		this._bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bar.ggVisible=true;
		this._bar.className='ggskin ggskin_image ';
		this._bar.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		this._bar.setAttribute('style',hs);
		this._bar.style[domTransform + 'Origin']='0% 50%';
		me._bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._bar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._bar.ggUpdatePosition=function () {
		}
		this._loader.appendChild(this._bar);
		this._tip=document.createElement('div');
		this._tip__img=document.createElement('img');
		this._tip__img.className='ggskin ggskin_image';
		this._tip__img.setAttribute('src',basePath + 'images/tip.png');
		this._tip__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tip__img.className='ggskin ggskin_image';
		this._tip__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tip__img);
		this._tip.appendChild(this._tip__img);
		this._tip.ggId="tip";
		this._tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tip.ggVisible=true;
		this._tip.className='ggskin ggskin_image ';
		this._tip.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		this._tip.setAttribute('style',hs);
		this._tip.style[domTransform + 'Origin']='50% 50%';
		me._tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tip.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tip.ggUpdatePosition=function () {
		}
		this._loader.appendChild(this._tip);
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		this._text_3.className='ggskin ggskin_text ';
		this._text_3.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		this._text_3.setAttribute('style',hs);
		this._text_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 182px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(15,15,15,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3.ggUpdateText=function() {
			var hs="<font face=\"Tahoma\"><b>Loading  "+(me.player.getPercentLoaded()*100.0).toFixed(0)+" % \/ "+(100.0).toFixed(1)+" kB<\/b><\/font>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		this._text_3.appendChild(this._text_3__text);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.ggUpdatePosition=function () {
		}
		this._loader.appendChild(this._text_3);
		this.divSkin.appendChild(this._loader);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggLeft=-183;
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=false;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 182px;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggLeft=-184;
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:2.2,sy:2.2 };
		this._image_2.ggVisible=false;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='height : 166px;';
		hs+='left : -184px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : hidden;';
		hs+='width : 182px;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='100% 0%';
		this._image_2.style[domTransform]=parameterToTransform(this._image_2.ggParameter);
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._mh_radar=document.createElement('div');
		this._mh_radar.ggId="mh_radar";
		this._mh_radar.ggLeft=-181;
		this._mh_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mh_radar.ggVisible=true;
		this._mh_radar.className='ggskin ggskin_container ';
		this._mh_radar.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -181px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._mh_radar.setAttribute('style',hs);
		this._mh_radar.style[domTransform + 'Origin']='50% 50%';
		me._mh_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mh_radar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mh_radar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._radar_ring=document.createElement('div');
		this._radar_ring.ggId="radar_ring";
		this._radar_ring.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_ring.ggVisible=false;
		this._radar_ring.className='ggskin ggskin_rectangle ';
		this._radar_ring.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #0000ff;';
		hs+='height : 38px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		this._radar_ring.setAttribute('style',hs);
		this._radar_ring.style[domTransform + 'Origin']='50% 50%';
		me._radar_ring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_ring.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_ring.ggUpdatePosition=function () {
		}
		this._mh_radar.appendChild(this._radar_ring);
		this._radar_dot=document.createElement('div');
		this._radar_dot.ggId="radar_dot";
		this._radar_dot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_dot.ggVisible=false;
		this._radar_dot.className='ggskin ggskin_rectangle ';
		this._radar_dot.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ff0000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 6px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 6px;';
		this._radar_dot.setAttribute('style',hs);
		this._radar_dot.style[domTransform + 'Origin']='50% 50%';
		me._radar_dot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_dot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_dot.ggUpdatePosition=function () {
		}
		this._mh_radar.appendChild(this._radar_dot);
		this._image_5=document.createElement('div');
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.ggId="Image 5";
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_image ';
		this._image_5.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		this._image_5.setAttribute('style',hs);
		this._image_5.style[domTransform + 'Origin']='0% 0%';
		this._image_5.style[domTransform]=parameterToTransform(this._image_5.ggParameter);
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_5.ggUpdatePosition=function () {
		}
		this._mh_radar.appendChild(this._image_5);
		this._image_2.appendChild(this._mh_radar);
		this._marker_node1=document.createElement('div');
		this._marker_node1.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_node1);
		this._marker_node1.ggId="marker_node1";
		this._marker_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node1.ggVisible=true;
		this._marker_node1.className='ggskin ggskin_mark ';
		this._marker_node1.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node1.setAttribute('style',hs);
		this._marker_node1.style[domTransform + 'Origin']='50% 50%';
		me._marker_node1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node1.onclick=function () {
			me.player.openNext('{node7}');
		}
		this._marker_node1.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=75;me._mh_radar.ggParameter.ry=50;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			me._image_2.style[domTransition]='none';
			me._image_2.style.visibility='inherit';
			me._image_2.ggVisible=true;
		}
		this._marker_node1.ggUpdateConditionNodeChange=function () {
				me._marker_node1__normal.ggNodeChangeMain();
				me._marker_node1__active.ggNodeChangeMain();
		}
		this._marker_node1.ggUpdatePosition=function () {
		}
		this._marker_node1.ggNodeChange=function () {
			me._marker_node1.ggUpdateConditionNodeChange();
		}
		this._image_2.appendChild(this._marker_node1);
		this._marker_node2=document.createElement('div');
		this._marker_node2.ggMarkerNodeId='{node8}';
		nodeMarker.push(this._marker_node2);
		this._marker_node2.ggId="marker_node2";
		this._marker_node2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node2.ggVisible=true;
		this._marker_node2.className='ggskin ggskin_mark ';
		this._marker_node2.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node2.setAttribute('style',hs);
		this._marker_node2.style[domTransform + 'Origin']='50% 50%';
		me._marker_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node2.onclick=function () {
			me.player.openNext('{node8}');
		}
		this._marker_node2.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=127;me._mh_radar.ggParameter.ry=51;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			me._image_2.style[domTransition]='none';
			me._image_2.style.visibility='inherit';
			me._image_2.ggVisible=true;
		}
		this._marker_node2.ggUpdateConditionNodeChange=function () {
				me._marker_node2__normal.ggNodeChangeMain();
				me._marker_node2__active.ggNodeChangeMain();
		}
		this._marker_node2.ggUpdatePosition=function () {
		}
		this._marker_node2.ggNodeChange=function () {
			me._marker_node2.ggUpdateConditionNodeChange();
		}
		this._image_2.appendChild(this._marker_node2);
		this._marker_node3=document.createElement('div');
		this._marker_node3.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._marker_node3);
		this._marker_node3.ggId="marker_node3";
		this._marker_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node3.ggVisible=true;
		this._marker_node3.className='ggskin ggskin_mark ';
		this._marker_node3.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 68px;';
		hs+='position : absolute;';
		hs+='top : 89px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node3.setAttribute('style',hs);
		this._marker_node3.style[domTransform + 'Origin']='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node3.onclick=function () {
			me.player.openNext('{node9}');
		}
		this._marker_node3.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=68;me._mh_radar.ggParameter.ry=89;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
			me._image_2.style[domTransition]='none';
			me._image_2.style.visibility='inherit';
			me._image_2.ggVisible=true;
		}
		this._marker_node3.ggUpdateConditionNodeChange=function () {
				me._marker_node3__normal.ggNodeChangeMain();
				me._marker_node3__active.ggNodeChangeMain();
		}
		this._marker_node3.ggUpdatePosition=function () {
		}
		this._marker_node3.ggNodeChange=function () {
			me._marker_node3.ggUpdateConditionNodeChange();
		}
		this._image_2.appendChild(this._marker_node3);
		this._container_1.appendChild(this._image_2);
		this.divSkin.appendChild(this._container_1);
		this._hide=document.createElement('div');
		this._hide__img=document.createElement('img');
		this._hide__img.className='ggskin ggskin_button';
		this._hide__img.setAttribute('src',basePath + 'images/hide.png');
		this._hide__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hide__img.className='ggskin ggskin_button';
		this._hide__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._hide__img);
		this._hide.appendChild(this._hide__img);
		this._hide.ggId="hide";
		this._hide.ggLeft=-13;
		this._hide.ggTop=-17;
		this._hide.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		this._hide.ggVisible=true;
		this._hide.className='ggskin ggskin_button ';
		this._hide.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		this._hide.setAttribute('style',hs);
		this._hide.style[domTransform + 'Origin']='50% 50%';
		this._hide.style[domTransform]=parameterToTransform(this._hide.ggParameter);
		me._hide.ggIsActive=function() {
			return false;
		}
		me._hide.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide.onclick=function () {
			me._image_1compas.style[domTransition]='none';
			me._image_1compas.style.opacity='0';
			me._image_1compas.style.visibility='hidden';
			me._info.style[domTransition]='none';
			me._info.style.opacity='0';
			me._info.style.visibility='hidden';
			var list=me.findElements("ht_node",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='0';
				e.style.visibility='hidden';
			}
			me._show.style[domTransition]='none';
			me._show.style.opacity='1';
			me._show.style.visibility=me._show.ggVisible?'inherit':'hidden';
			me._hide.style[domTransition]='none';
			me._hide.style.opacity='0';
			me._hide.style.visibility='hidden';
			me._fsmode.style[domTransition]='none';
			me._fsmode.style.opacity='0';
			me._fsmode.style.visibility='hidden';
		}
		this._hide.onmouseover=function () {
			me._hide__img.src=basePath + 'images/hide__o.png';
		}
		this._hide.onmouseout=function () {
			me._hide__img.src=basePath + 'images/hide.png';
		}
		this._hide.onmousedown=function () {
			me._hide__img.src=basePath + 'images/hide__a.png';
		}
		this._hide.onmouseup=function () {
			me._hide__img.src=basePath + 'images/hide.png';
		}
		this._hide.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._hide);
		this._show=document.createElement('div');
		this._show__img=document.createElement('img');
		this._show__img.className='ggskin ggskin_button';
		this._show__img.setAttribute('src',basePath + 'images/show.png');
		this._show__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._show__img.className='ggskin ggskin_button';
		this._show__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._show__img);
		this._show.appendChild(this._show__img);
		this._show.ggId="show";
		this._show.ggLeft=-13;
		this._show.ggTop=-20;
		this._show.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		this._show.ggVisible=true;
		this._show.className='ggskin ggskin_button ';
		this._show.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -13px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		this._show.setAttribute('style',hs);
		this._show.style[domTransform + 'Origin']='50% 50%';
		this._show.style[domTransform]=parameterToTransform(this._show.ggParameter);
		me._show.ggIsActive=function() {
			return false;
		}
		me._show.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._show.onclick=function () {
			me._show.style[domTransition]='none';
			me._show.style.opacity='0';
			me._show.style.visibility='hidden';
			me._hide.style[domTransition]='none';
			me._hide.style.opacity='1';
			me._hide.style.visibility=me._hide.ggVisible?'inherit':'hidden';
			var list=me.findElements("ht_node",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
			me._info.style[domTransition]='none';
			me._info.style.opacity='1';
			me._info.style.visibility=me._info.ggVisible?'inherit':'hidden';
			me._image_1compas.style[domTransition]='none';
			me._image_1compas.style.opacity='1';
			me._image_1compas.style.visibility=me._image_1compas.ggVisible?'inherit':'hidden';
			me._fsmode.style[domTransition]='none';
			me._fsmode.style.opacity='1';
			me._fsmode.style.visibility=me._fsmode.ggVisible?'inherit':'hidden';
		}
		this._show.onmouseover=function () {
			me._show__img.src=basePath + 'images/show__o.png';
		}
		this._show.onmouseout=function () {
			me._show__img.src=basePath + 'images/show.png';
		}
		this._show.onmousedown=function () {
			me._show__img.src=basePath + 'images/show__a.png';
		}
		this._show.onmouseup=function () {
			me._show__img.src=basePath + 'images/show.png';
		}
		this._show.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._show);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_button';
		this._info__img.setAttribute('src',basePath + 'images/info.png');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img.className='ggskin ggskin_button';
		this._info__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._info__img);
		this._info.appendChild(this._info__img);
		this._info.ggId="info";
		this._info.ggLeft=-25;
		this._info.ggTop=-33;
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_button ';
		this._info.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -33px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		me._info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._info.onclick=function () {
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='inherit';
			me._text_1.ggVisible=true;
		}
		this._info.onmouseover=function () {
			me._info.style[domTransition]='none';
			me._info.ggParameter.sx=1.2;me._info.ggParameter.sy=1.2;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
		}
		this._info.onmouseout=function () {
			me._info.style[domTransition]='none';
			me._info.ggParameter.sx=1;me._info.ggParameter.sy=1;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
		}
		this._info.onmousedown=function () {
			me._info__img.src=basePath + 'images/info__a.png';
		}
		this._info.onmouseup=function () {
			me._info__img.src=basePath + 'images/info.png';
		}
		this._info.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._info);
		this._image_1compas=document.createElement('div');
		this._image_1compas__img=document.createElement('img');
		this._image_1compas__img.className='ggskin ggskin_image';
		this._image_1compas__img.setAttribute('src',basePath + 'images/image_1compas.png');
		this._image_1compas__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1compas__img.className='ggskin ggskin_image';
		this._image_1compas__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1compas__img);
		this._image_1compas.appendChild(this._image_1compas__img);
		this._image_1compas.ggId="Image 1-compas";
		this._image_1compas.ggLeft=-40;
		this._image_1compas.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
		this._image_1compas.ggVisible=true;
		this._image_1compas.className='ggskin ggskin_image ';
		this._image_1compas.ggType='image';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		this._image_1compas.setAttribute('style',hs);
		this._image_1compas.style[domTransform + 'Origin']='50% 50%';
		this._image_1compas.style[domTransform]=parameterToTransform(this._image_1compas.ggParameter);
		me._image_1compas.ggIsActive=function() {
			return false;
		}
		me._image_1compas.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1compas.ggActivate=function () {
			me._image_1compas.style[domTransition]='none';
			me._image_1compas.ggParameter.a=me.player.getPanNorth().toFixed(1);
			me._image_1compas.style[domTransform]=parameterToTransform(me._image_1compas.ggParameter);
		}
		this._image_1compas.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_1compas);
		this._image_3of=document.createElement('div');
		this._image_3of__img=document.createElement('img');
		this._image_3of__img.className='ggskin ggskin_image';
		this._image_3of__img.setAttribute('src',basePath + 'images/image_3of.png');
		this._image_3of__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3of__img.className='ggskin ggskin_image';
		this._image_3of__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3of__img);
		this._image_3of.appendChild(this._image_3of__img);
		this._image_3of.ggId="Image 3-of";
		this._image_3of.ggLeft=-41;
		this._image_3of.ggTop=-98;
		this._image_3of.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3of.ggVisible=false;
		this._image_3of.className='ggskin ggskin_image ';
		this._image_3of.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -41px;';
		hs+='position : absolute;';
		hs+='top : -98px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		this._image_3of.setAttribute('style',hs);
		this._image_3of.style[domTransform + 'Origin']='50% 50%';
		me._image_3of.ggIsActive=function() {
			return false;
		}
		me._image_3of.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_3of.onclick=function () {
			me.player.startAutorotate(0.05);
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._image_3of.style[domTransition]='none';
			me._image_3of.style.visibility='hidden';
			me._image_3of.ggVisible=false;
			me._image_3on.style[domTransition]='none';
			me._image_3on.style.visibility='inherit';
			me._image_3on.ggVisible=true;
		}
		this._image_3of.onmouseover=function () {
			me._image_3of.style[domTransition]='none';
			me._image_3of.ggParameter.sx=1.2;me._image_3of.ggParameter.sy=1.2;
			me._image_3of.style[domTransform]=parameterToTransform(me._image_3of.ggParameter);
		}
		this._image_3of.onmouseout=function () {
			me._image_3of.style[domTransition]='none';
			me._image_3of.ggParameter.sx=1;me._image_3of.ggParameter.sy=1;
			me._image_3of.style[domTransform]=parameterToTransform(me._image_3of.ggParameter);
		}
		this._image_3of.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_3of);
		this._image_3on=document.createElement('div');
		this._image_3on__img=document.createElement('img');
		this._image_3on__img.className='ggskin ggskin_image';
		this._image_3on__img.setAttribute('src',basePath + 'images/image_3on.png');
		this._image_3on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3on__img.className='ggskin ggskin_image';
		this._image_3on__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3on__img);
		this._image_3on.appendChild(this._image_3on__img);
		this._image_3on.ggId="Image 3-on";
		this._image_3on.ggLeft=-41;
		this._image_3on.ggTop=-98;
		this._image_3on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3on.ggVisible=true;
		this._image_3on.className='ggskin ggskin_image ';
		this._image_3on.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -41px;';
		hs+='position : absolute;';
		hs+='top : -98px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		this._image_3on.setAttribute('style',hs);
		this._image_3on.style[domTransform + 'Origin']='50% 50%';
		me._image_3on.ggIsActive=function() {
			return false;
		}
		me._image_3on.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_3on.onclick=function () {
			me.player.stopAutorotate();
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='inherit';
			me._container_1.ggVisible=true;
			me._image_3of.style[domTransition]='none';
			me._image_3of.style.visibility='inherit';
			me._image_3of.ggVisible=true;
			me._image_3on.style[domTransition]='none';
			me._image_3on.style.visibility='hidden';
			me._image_3on.ggVisible=false;
		}
		this._image_3on.onmouseover=function () {
			me._image_3on.style[domTransition]='none';
			me._image_3on.ggParameter.sx=1.2;me._image_3on.ggParameter.sy=1.2;
			me._image_3on.style[domTransform]=parameterToTransform(me._image_3on.ggParameter);
		}
		this._image_3on.onmouseout=function () {
			me._image_3on.style[domTransition]='none';
			me._image_3on.ggParameter.sx=1;me._image_3on.ggParameter.sy=1;
			me._image_3on.style[domTransform]=parameterToTransform(me._image_3on.ggParameter);
		}
		this._image_3on.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_3on);
		this._hide_mh=document.createElement('div');
		this._hide_mh.ggId="hide_mh";
		this._hide_mh.ggLeft=-127;
		this._hide_mh.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_mh.ggVisible=false;
		this._hide_mh.className='ggskin ggskin_container ';
		this._hide_mh.ggType='container';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		this._hide_mh.setAttribute('style',hs);
		this._hide_mh.style[domTransform + 'Origin']='50% 50%';
		me._hide_mh.ggIsActive=function() {
			return false;
		}
		me._hide_mh.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_mh.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.ggActivate=function () {
			me._mh_radar.style[domTransition]='none';
			me._mh_radar.ggParameter.rx=0;me._mh_radar.ggParameter.ry=0;
			me._mh_radar.style[domTransform]=parameterToTransform(me._mh_radar.ggParameter);
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function () {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._hide_mh.appendChild(this._markertemplate);
		this.divSkin.appendChild(this._hide_mh);
		this._ground_floor_trigger=document.createElement('div');
		this._ground_floor_trigger.ggMarkerNodeId='gf';
		nodeMarker.push(this._ground_floor_trigger);
		this._ground_floor_trigger.ggId="ground floor trigger";
		this._ground_floor_trigger.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ground_floor_trigger.ggVisible=true;
		this._ground_floor_trigger.className='ggskin ggskin_mark ';
		this._ground_floor_trigger.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 158px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._ground_floor_trigger.setAttribute('style',hs);
		this._ground_floor_trigger.style[domTransform + 'Origin']='50% 50%';
		me._ground_floor_trigger.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._ground_floor_trigger.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._ground_floor_trigger.onclick=function () {
			me.player.openNext('gf');
		}
		this._ground_floor_trigger.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._ground_floor_trigger);
		this._first_floor_trigger=document.createElement('div');
		this._first_floor_trigger.ggMarkerNodeId='ff';
		nodeMarker.push(this._first_floor_trigger);
		this._first_floor_trigger.ggId="first floor trigger";
		this._first_floor_trigger.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._first_floor_trigger.ggVisible=true;
		this._first_floor_trigger.className='ggskin ggskin_mark ';
		this._first_floor_trigger.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._first_floor_trigger.setAttribute('style',hs);
		this._first_floor_trigger.style[domTransform + 'Origin']='50% 50%';
		me._first_floor_trigger.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._first_floor_trigger.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._first_floor_trigger.onclick=function () {
			me.player.openNext('ff');
		}
		this._first_floor_trigger.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._first_floor_trigger);
		this._second_floor_trigger=document.createElement('div');
		this._second_floor_trigger.ggMarkerNodeId='sf';
		nodeMarker.push(this._second_floor_trigger);
		this._second_floor_trigger.ggId="second floor trigger";
		this._second_floor_trigger.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor_trigger.ggVisible=true;
		this._second_floor_trigger.className='ggskin ggskin_mark ';
		this._second_floor_trigger.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._second_floor_trigger.setAttribute('style',hs);
		this._second_floor_trigger.style[domTransform + 'Origin']='50% 50%';
		me._second_floor_trigger.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._second_floor_trigger.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._second_floor_trigger.onclick=function () {
			me.player.openNext('sf');
		}
		this._second_floor_trigger.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._second_floor_trigger);
		this._fsmode=document.createElement('div');
		this._fsmode.ggId="fs-mode";
		this._fsmode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fsmode.ggVisible=true;
		this._fsmode.className='ggskin ggskin_container ';
		this._fsmode.ggType='container';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		this._fsmode.setAttribute('style',hs);
		this._fsmode.style[domTransform + 'Origin']='50% 50%';
		me._fsmode.ggIsActive=function() {
			return false;
		}
		me._fsmode.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fsmode.ggUpdatePosition=function () {
		}
		this._fullscreen_collapce=document.createElement('div');
		this._fullscreen_collapce__img=document.createElement('img');
		this._fullscreen_collapce__img.className='ggskin ggskin_button';
		this._fullscreen_collapce__img.setAttribute('src',basePath + 'images/fullscreen_collapce.png');
		this._fullscreen_collapce__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_collapce__img.className='ggskin ggskin_button';
		this._fullscreen_collapce__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen_collapce__img);
		this._fullscreen_collapce.appendChild(this._fullscreen_collapce__img);
		this._fullscreen_collapce.ggId="fullscreen_collapce";
		this._fullscreen_collapce.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_collapce.ggVisible=true;
		this._fullscreen_collapce.className='ggskin ggskin_button ';
		this._fullscreen_collapce.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		this._fullscreen_collapce.setAttribute('style',hs);
		this._fullscreen_collapce.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_collapce.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_collapce.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_collapce.onclick=function () {
			me.player.exitFullscreen();
		}
		this._fullscreen_collapce.onmouseover=function () {
			me._fullscreen_collapce.style[domTransition]='none';
			me._fullscreen_collapce.ggParameter.sx=1.2;me._fullscreen_collapce.ggParameter.sy=1.2;
			me._fullscreen_collapce.style[domTransform]=parameterToTransform(me._fullscreen_collapce.ggParameter);
		}
		this._fullscreen_collapce.onmouseout=function () {
			me._fullscreen_collapce.style[domTransition]='none';
			me._fullscreen_collapce.ggParameter.sx=1;me._fullscreen_collapce.ggParameter.sy=1;
			me._fullscreen_collapce.style[domTransform]=parameterToTransform(me._fullscreen_collapce.ggParameter);
		}
		this._fullscreen_collapce.onmousedown=function () {
			me._fullscreen_collapce__img.src=basePath + 'images/fullscreen_collapce__a.png';
		}
		this._fullscreen_collapce.onmouseup=function () {
			me._fullscreen_collapce__img.src=basePath + 'images/fullscreen_collapce.png';
		}
		this._fullscreen_collapce.ggUpdatePosition=function () {
		}
		this._fsmode.appendChild(this._fullscreen_collapce);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button ';
		this._fullscreen.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function () {
			me.player.enterFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.ggParameter.sx=1.2;me._fullscreen.ggParameter.sy=1.2;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.ggParameter.sx=1;me._fullscreen.ggParameter.sy=1;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
		}
		this._fullscreen.onmousedown=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__a.png';
		}
		this._fullscreen.onmouseup=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._fullscreen.ggUpdatePosition=function () {
		}
		this._fsmode.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._fsmode);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggLeft=-259;
		this._text_1.ggTop=-127;
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		this._text_1.ggVisible=false;
		this._text_1.className='ggskin ggskin_text ';
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 95px;';
		hs+='left : -259px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -127px;';
		hs+='visibility : hidden;';
		hs+='width : 235px;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='100% 100%';
		this._text_1.style[domTransform]=parameterToTransform(this._text_1.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 235px;';
		hs+='height: 95px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<br><b>Detta \xe4r visualiseringar.<br>  Avvikelser kan f\xf6rekomma.  <br><br\/>Powered by<a target=\"blank\" href=\"http:\/\/www.studio3d.se\"> Studio3D<\/a>";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._text_1.onclick=function () {
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='hidden';
			me._text_1.ggVisible=false;
		}
		this._text_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._text_1);
		if (me.player.transitionsDisabled) {
			me._image_3on.style[domTransition]='none';
		} else {
			me._image_3on.style[domTransition]='all 500ms ease-out 0ms';
		}
		me._image_3on.ggParameter.sx=1;me._image_3on.ggParameter.sy=1;
		me._image_3on.style[domTransform]=parameterToTransform(me._image_3on.ggParameter);
		this._marker_node1__normal=new SkinElement_mhn_Class(this,this._marker_node1);
		this._marker_node1__normal.style.visibility='inherit';
		this._marker_node1__normal.style.left='0px';
		this._marker_node1__normal.style.top='0px';
		this._marker_node1.ggMarkerNormal=this._marker_node1__normal;
		this._marker_node1__active=new SkinElement_mha_Class(this,this._marker_node1);
		this._marker_node1__active.style.visibility='hidden';
		this._marker_node1__active.style.left='0px';
		this._marker_node1__active.style.top='0px';
		this._marker_node1.ggMarkerActive=this._marker_node1__active;
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__active,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__active);
		}
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__normal,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__normal);
		}
		this._marker_node2__normal=new SkinElement_mhn_Class(this,this._marker_node2);
		this._marker_node2__normal.style.visibility='inherit';
		this._marker_node2__normal.style.left='0px';
		this._marker_node2__normal.style.top='0px';
		this._marker_node2.ggMarkerNormal=this._marker_node2__normal;
		this._marker_node2__active=new SkinElement_mha_Class(this,this._marker_node2);
		this._marker_node2__active.style.visibility='hidden';
		this._marker_node2__active.style.left='0px';
		this._marker_node2__active.style.top='0px';
		this._marker_node2.ggMarkerActive=this._marker_node2__active;
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__active,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__active);
		}
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__normal,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__normal);
		}
		this._marker_node3__normal=new SkinElement_mhn_Class(this,this._marker_node3);
		this._marker_node3__normal.style.visibility='inherit';
		this._marker_node3__normal.style.left='0px';
		this._marker_node3__normal.style.top='0px';
		this._marker_node3.ggMarkerNormal=this._marker_node3__normal;
		this._marker_node3__active=new SkinElement_mha_Class(this,this._marker_node3);
		this._marker_node3__active.style.visibility='hidden';
		this._marker_node3__active.style.left='0px';
		this._marker_node3__active.style.top='0px';
		this._marker_node3.ggMarkerActive=this._marker_node3__active;
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__active,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__active);
		}
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__normal,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__normal);
		}
		this._markertemplate__normal=new SkinElement_mhn_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_mha_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._ground_floor_trigger.ggMarkerNormal=null;
		this._ground_floor_trigger.ggMarkerActive=null;
		this._first_floor_trigger.ggMarkerNormal=null;
		this._first_floor_trigger.ggMarkerActive=null;
		this._second_floor_trigger.ggMarkerNormal=null;
		this._second_floor_trigger.ggMarkerActive=null;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loader.style[domTransition]='none';
			} else {
				me._loader.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loader.style.opacity='0';
			me._loader.style.visibility='hidden';
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
			if (me.player.transitionsDisabled) {
				me._fullscreen_collapce.style[domTransition]='none';
			} else {
				me._fullscreen_collapce.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._fullscreen_collapce.style.opacity='1';
			me._fullscreen_collapce.style.visibility=me._fullscreen_collapce.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._fullscreen.style.opacity='0';
			me._fullscreen.style.visibility='hidden';
		}
		this.divSkin.ggExitFullscreen=function() {
			me._fullscreen_collapce.style[domTransition]='none';
			me._fullscreen_collapce.style.opacity='0';
			me._fullscreen_collapce.style.visibility='hidden';
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.opacity='1';
			me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._marker_node1.ggNodeChange();
		me._marker_node2.ggNodeChange();
		me._marker_node3.ggNodeChange();
		me._markertemplate.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._bar.ggParameter) {
			hs+=parameterToTransform(me._bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._bar.style[domTransform]=hs;
		var hs='';
		if (me._tip.ggParameter) {
			hs+=parameterToTransform(me._tip.ggParameter) + ' ';
		}
		hs+='translate(' + (168 * me.player.getPercentLoaded() + 0) + 'px,0px) ';
		me._tip.style[domTransform]=hs;
		me._text_3.ggUpdateText();
		var hs='';
		if (me._mh_radar.ggParameter) {
			hs+=parameterToTransform(me._mh_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._mh_radar.style[domTransform]=hs;
		var hs='';
		if (me._image_1compas.ggParameter) {
			hs+=parameterToTransform(me._image_1compas.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._image_1compas.style[domTransform]=hs;
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 285px;';
			hs+='position : absolute;';
			hs+='top : 458px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggLeft=-76;
			this._hotspot_preview.ggTop=-152;
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -76px;';
			hs+='position : absolute;';
			hs+='top : -152px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 100%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility="inherit";
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage=document.createElement('div');
			this._preview_nodeimage__img=document.createElement('img');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
			this._preview_nodeimage.ggNodeId=nodeId;
			this._preview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img['ondragstart']=function() { return false; };
			this._preview_nodeimage.appendChild(this._preview_nodeimage__img);
			this._preview_nodeimage.ggId="Preview NodeImage";
			this._preview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage.ggVisible=true;
			this._preview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='opacity : 0.8;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage.setAttribute('style',hs);
			this._preview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage);
			this._tooltip_bg=document.createElement('div');
			this._tooltip_bg.ggId="tooltip_bg";
			this._tooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg.ggVisible=true;
			this._tooltip_bg.className='ggskin ggskin_rectangle ';
			this._tooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._tooltip_bg.setAttribute('style',hs);
			this._tooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_bg);
			this._tooltip_drop_shadow=document.createElement('div');
			this._tooltip_drop_shadow__text=document.createElement('div');
			this._tooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow.ggTextDiv=this._tooltip_drop_shadow__text;
			this._tooltip_drop_shadow.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow.ggVisible=true;
			this._tooltip_drop_shadow.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip_drop_shadow.setAttribute('style',hs);
			this._tooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow__text.setAttribute('style',hs);
			this._tooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow.appendChild(this._tooltip_drop_shadow__text);
			me._tooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_drop_shadow);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this.__div.appendChild(this._hotspot_preview);
			this._image_6=document.createElement('div');
			this._image_6__img=document.createElement('img');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
			this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_6__img);
			this._image_6.appendChild(this._image_6__img);
			this._image_6.ggId="Image 6";
			this._image_6.ggLeft=-17;
			this._image_6.ggTop=-33;
			this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_6.ggVisible=true;
			this._image_6.className='ggskin ggskin_image ';
			this._image_6.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -17px;';
			hs+='opacity : 0.5;';
			hs+='position : absolute;';
			hs+='top : -33px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._image_6.setAttribute('style',hs);
			this._image_6.style[domTransform + 'Origin']='50% 50%';
			me._image_6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_6.onclick=function () {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
			}
			this._image_6.onmouseover=function () {
				me._image_6.style[domTransition]='none';
				me._image_6.style.opacity='1';
				me._image_6.style.visibility=me._image_6.ggVisible?'inherit':'hidden';
				me._hotspot_preview.style[domTransition]='none';
				me._hotspot_preview.style.visibility='inherit';
				me._hotspot_preview.ggVisible=true;
			}
			this._image_6.onmouseout=function () {
				me._image_6.style[domTransition]='none';
				me._image_6.style.opacity='0.5';
				me._image_6.style.visibility=me._image_6.ggVisible?'inherit':'hidden';
				me._hotspot_preview.style[domTransition]='none';
				me._hotspot_preview.style.visibility='hidden';
				me._hotspot_preview.ggVisible=false;
			}
			this._image_6.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._image_6);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_mhn_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._mhn=document.createElement('div');
		this._mhn.ggId="mhn";
		this._mhn.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mhn.ggVisible=true;
		this._mhn.className='ggskin ggskin_container ';
		this._mhn.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 41px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._mhn.setAttribute('style',hs);
		this._mhn.style[domTransform + 'Origin']='50% 50%';
		me._mhn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mhn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._mhn.ggUpdatePosition=function () {
		}
		this._mhn_image=document.createElement('div');
		this._mhn_image.ggId="mhn_image";
		this._mhn_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mhn_image.ggVisible=false;
		this._mhn_image.className='ggskin ggskin_rectangle ';
		this._mhn_image.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #0000ff;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		this._mhn_image.setAttribute('style',hs);
		this._mhn_image.style[domTransform + 'Origin']='50% 50%';
		me._mhn_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mhn_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._mhn_image.ggUpdatePosition=function () {
		}
		this._mhn.appendChild(this._mhn_image);
		this._image_7=document.createElement('div');
		this._image_7__img=document.createElement('img');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
		this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_7__img);
		this._image_7.appendChild(this._image_7__img);
		this._image_7.ggId="Image 7";
		this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._image_7.ggVisible=true;
		this._image_7.className='ggskin ggskin_image ';
		this._image_7.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		this._image_7.setAttribute('style',hs);
		this._image_7.style[domTransform + 'Origin']='50% 50%';
		this._image_7.style[domTransform]=parameterToTransform(this._image_7.ggParameter);
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_7.ggUpdatePosition=function () {
		}
		this._mhn.appendChild(this._image_7);
		this._mhn.ggNodeChangeMain=function() {
		}
		return this._mhn;
	};
	function SkinElement_mha_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._mha=document.createElement('div');
		this._mha.ggId="mha";
		this._mha.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mha.ggVisible=true;
		this._mha.className='ggskin ggskin_container ';
		this._mha.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 69px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._mha.setAttribute('style',hs);
		this._mha.style[domTransform + 'Origin']='50% 50%';
		me._mha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mha.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._mha.ggUpdatePosition=function () {
		}
		this._mha_image=document.createElement('div');
		this._mha_image.ggId="mha_image";
		this._mha_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mha_image.ggVisible=false;
		this._mha_image.className='ggskin ggskin_rectangle ';
		this._mha_image.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #ff0000;';
		hs+='height : 18px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		this._mha_image.setAttribute('style',hs);
		this._mha_image.style[domTransform + 'Origin']='50% 50%';
		me._mha_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mha_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._mha_image.ggUpdatePosition=function () {
		}
		this._mha.appendChild(this._mha_image);
		this._mha.ggNodeChangeMain=function() {
		}
		return this._mha;
	};
	this.addSkin();
};