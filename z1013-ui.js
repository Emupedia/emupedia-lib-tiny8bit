var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var m=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y,fa,ha;
if(ba)x=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),m=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),t=function(a){process.exit(a)},
f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var B;f.noExitRuntime&&(B=f.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:50,maximum:50,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},h=na(a),l=[];a=0;if(d)for(var n=0;n<d.length;n++){var p=e[c[n]];p?(0===a&&(a=ra()),l[n]=p(d[n])):l[n]=d[n]}c=h.apply(null,l);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var n=a.charCodeAt(++h);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=pa(b);D(a,qa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,xa,ya,G,za,H,I;
function Aa(a){buffer=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var Ca=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:Ca/65536});C&&(buffer=C.buffer);Ca=buffer.byteLength;Aa(buffer);G[1691252]=12008048;
function Da(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Xb;"number"===typeof c?void 0===b.Qb?f.dynCall_v(c):f.dynCall_vi(c,b.Qb):c(void 0===b.Qb?null:b.Qb)}}}var Ea=[],Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=f.preRun.shift();Ea.unshift(a)}var J=0,Ka=null,K=null;f.preloadedImages={};f.preloadedAudios={};function ja(a){if(f.onAbort)f.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function La(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="z1013-ui.wasm";if(!La()){var Ma=L;L=f.locateFile?f.locateFile(Ma,x):x+Ma}function Na(){try{if(A)return new Uint8Array(A);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Oa(){return A||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Na())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Na()})}Fa.push({Xb:function(){Pa()}});var Qa=0,Ra=0,M=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=N.length-1;0<=a;--a)Ya(a);N=[];Za=[]}var Za=[];
function $a(){if(ab&&bb.Jb)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.ic.apply(this,b.bc)}}var ab=0,bb=null,N=[];function cb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ya(a){var b=N[a];b.target.removeEventListener(b.Ib,b.Vb,b.Kb);N.splice(a,1)}
function O(a){function b(b){++ab;bb=a;$a();a.Mb(b);$a();--ab}if(a.Lb)a.Vb=b,a.target.addEventListener(a.Ib,b,a.Kb),N.push(a),Wa||(Ha.push(Xa),Wa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Ib==a.Ib&&Ya(c--)}var db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=db[a]||F(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function eb(a){"number"===typeof a&&(a=F(a));return a&&"#canvas"!==a?"undefined"!==typeof fb&&gb[a]?gb[a]:P(a):"undefined"!==typeof fb&&gb.canvas?gb.canvas:f.canvas}
function hb(a,b,c,d,e,h){Qa||(Qa=Q(164));a={target:P(a),Jb:cb()?!1:!0,Ib:h,Lb:d,Mb:function(a){a=a||event;var c=Qa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Kb:c};O(a)}
function ib(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;xa[a+40>>1]=b.button;xa[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ua;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Va;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function S(a,b,c,d,e,h){Ra||(Ra=Q(72));a=P(a);c={target:a,Jb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ib:h,Lb:d,Mb:function(c){c=c||event;ib(Ra,c,a);R(d,e,Ra,b)&&c.preventDefault()},Kb:c};cb()&&"mousedown"==h&&(c.Jb=!1);O(c)}
function jb(a,b,c,d){Sa||(Sa=Q(36));a=P(a);O({target:a,Jb:!1,Ib:"resize",Lb:d,Mb:function(c){c=c||event;if(c.target==a){var e=Sa,l=document.body;G[e>>2]=c.detail;G[e+4>>2]=l.clientWidth;G[e+8>>2]=l.clientHeight;G[e+12>>2]=innerWidth;G[e+16>>2]=innerHeight;G[e+20>>2]=outerWidth;G[e+24>>2]=outerHeight;G[e+28>>2]=pageXOffset;G[e+32>>2]=pageYOffset;R(d,10,e,b)&&c.preventDefault()}},Kb:c})}
function mb(a,b,c,d,e,h){Ta||(Ta=Q(1684));a=P(a);O({target:a,Jb:"touchstart"==h||"touchend"==h,Ib:h,Lb:d,Mb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.Sb=!1;h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Sb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].$b=!0;var q=r=Ta;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var Ba=f.canvas?f.canvas.getBoundingClientRect():
void 0,kb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},lb=0;for(l in h){var w=h[l];G[q>>2]=w.identifier;G[q+4>>2]=w.screenX;G[q+8>>2]=w.screenY;G[q+12>>2]=w.clientX;G[q+16>>2]=w.clientY;G[q+20>>2]=w.pageX;G[q+24>>2]=w.pageY;G[q+28>>2]=w.Sb;G[q+32>>2]=w.$b;Ba?(G[q+44>>2]=w.clientX-Ba.left,G[q+48>>2]=w.clientY-Ba.top):(G[q+44>>2]=0,G[q+48>>2]=0);G[q+36>>2]=w.clientX-kb.left;G[q+40>>2]=w.clientY-kb.top;q+=52;if(32<=++lb)break}G[r>>2]=lb;R(d,e,r,b)&&c.preventDefault()},Kb:c})}
function nb(a,b,c,d,e,h){a||(a=f.canvas);a={target:P(a),Jb:!1,Ib:h,Lb:d,Mb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},Kb:c};O(a)}
function ob(a,b,c,d,e){function h(c){c=c||event;ib(M,c,a);I[M+72>>3]=c.wheelDeltaX||0;I[M+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[M+88>>3]=0;G[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;ib(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Jb:!0,Ib:e,Lb:d,Mb:"wheel"==e?l:h,Kb:c})}
var pb=["default","low-power","high-performance"],qb=1,rb=0,sb=[],T=[],tb=[],U=[],ub=[],V=[],W=[],vb={},wb=null,gb={},xb={},yb={};function X(a){rb||(rb=a)}function zb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}var Ab=null,Y=[0];
function Bb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Cb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Db(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Eb(a){a||(a=wb);if(!a.Yb){a.Yb=!0;var b=a.Pb;2>a.version&&(Bb(b),Cb(b),Db(b));b.dc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var fb={},Fb,Gb;function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&zb(d);h?(h.name=l,d[l]=h):X(1282);G[b+4*e>>2]=l}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}function Jb(a){var b=ua(a)+1,c=Q(b);D(a,E,c,b);return c}
function Kb(a,b,c,d,e){a-=5120;a=1==a?E:4==a?G:6==a?H:5==a||28922==a?za:ya;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}var Z;Ab=new Float32Array(256);for(var Lb=0;256>Lb;Lb++)Y[Lb]=Ab.subarray(0,Lb+1);
var Pb={bb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=oa},cb:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},P:function(){return devicePixelRatio||1},X:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):
(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},Ua:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ea:function(a,b){function c(d){Mb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Aa(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},N:function(a,b,c){a=eb(a);if(!a)return-4;
a.width=b;a.height=c;return 0},Oa:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},Ma:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},Va:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Qa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},Ta:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},ya:function(a,b,c,d){jb(a,
b,c,d);return 0},Ha:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},Ga:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(ob(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?
(ob(a,b,c,d,"mousewheel"),0):-1},E:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=pb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Zb=G[b+8];c.ec=G[b+9];c.Tb=G[b+10];c.Wb=G[b+11];c.fc=G[b+12];c.hc=G[b+13];a=eb(a);if(!a||c.Wb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.Zb,Pb:a};a.canvas&&
(a.canvas.ac=d);vb[b]=d;("undefined"===typeof c.Tb||c.Tb)&&Eb(d);c=b}else c=0;return c},ab:function(a,b){a=vb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Bb(Z):"OES_vertex_array_object"==b?Cb(Z):"WEBGL_draw_buffers"==b&&Db(Z);return!!a.Pb.getExtension(b)},oa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},fa:function(a){wb=vb[a];f.cc=Z=wb&&wb.Pb;return!a||Z?0:-5},g:function(a){Z.activeTexture(a)},Q:function(a,b){Z.attachShader(T[a],
W[b])},b:function(a,b){Z.bindBuffer(a,sb[b])},f:function(a,b){Z.bindFramebuffer(a,tb[b])},xa:function(a,b){Z.bindRenderbuffer(a,U[b])},a:function(a,b){Z.bindTexture(a,ub[b])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},T:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},r:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},ma:function(a){Z.clear(a)},
qa:function(a,b,c,d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},y:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Za:function(a){Z.compileShader(W[a])},S:function(a,b,c,d,e,h,l,n){Z.compressedTexImage2D(a,b,c,d,e,h,n?E.subarray(n,n+l):null)},ua:function(){var a=zb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},$a:function(a){var b=zb(W);W[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},Aa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>
2],e=sb[d];e&&(Z.deleteBuffer(e),e.name=0,sb[d]=null,d==Fb&&(Fb=0),d==Gb&&(Gb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=tb[d];e&&(Z.deleteFramebuffer(e),e.name=0,tb[d]=null)}},V:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,xb[a]=null):X(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=U[d];e&&(Z.deleteRenderbuffer(e),e.name=0,U[d]=null)}},z:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},W:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],e=ub[d];e&&(Z.deleteTexture(e),e.name=0,ub[d]=null)}},w:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},A:function(a){Z.disableVertexAttribArray(a)},ba:function(a,b,c){Z.drawArrays(a,b,c)},ca:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ja:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,U[d])},c:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,ub[d],e)},D:function(a){Z.frontFace(a)},
U:function(a,b){Hb(a,b,"createBuffer",sb)},n:function(a,b){Hb(a,b,"createFramebuffer",tb)},za:function(a,b){Hb(a,b,"createRenderbuffer",U)},va:function(a,b){Hb(a,b,"createTexture",ub)},ra:function(a,b){return Z.getAttribLocation(T[a],F(b))},i:function(a,b){Ib(a,b)},sa:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},O:function(a,b,c){if(c)if(a>=qb)X(1281);else{var d=xb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),
G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Rb;else if(35722==b){if(-1==d.Nb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Nb=0;b<e;++b)d.Nb=Math.max(d.Nb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Nb}else if(35381==b){if(-1==d.Ob)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Ob=0;b<e;++b)d.Ob=Math.max(d.Ob,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Ob}else G[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},Ya:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===
a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},Z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Ba:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||X(1280);b=Jb(b);break;case 7938:b=Jb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return X(1280),0}return yb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=
xb[a]&&xb[a].Ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},ta:function(a){Z.linkProgram(T[a]);var b=T[a];a=xb[a]={Ub:{},Rb:0,Nb:-1,Ob:-1};for(var c=a.Ub,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Rb=Math.max(a.Rb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var p=zb(V);c[l]=[h.size,p];V[p]=n;for(var r=1;r<h.size;++r)n=Z.getUniformLocation(b,l+"["+r+"]"),p=zb(V),V[p]=n}}},C:function(a,b){Z.polygonOffset(a,b)},wa:function(a,
b,c,d){Z.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d){Z.scissor(a,b,c,d)},_a:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?G[d+4*h>>2]:-1;e+=F(G[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},aa:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},v:function(a){Z.stencilMask(a)},$:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},R:function(a,b,c,d,e,h,l,n,p){Z.texImage2D(a,b,c,d,e,h,l,n,p?Kb(n,l,d,e,p):null)},h:function(a,
b,c){Z.texParameteri(a,b,c)},q:function(a,b,c,d,e,h,l,n,p){var r=null;p&&(r=Kb(n,l,e,h,p));Z.texSubImage2D(a,b,c,d,e,h,l,n,r)},ia:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},B:function(a,b){Z.uniform1i(V[a],b)},ha:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ga:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-
1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},ea:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},da:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=H[d+4*h>>2],e[h+1]=H[d+(4*h+4)>>2],e[h+2]=H[d+(4*h+8)>>2],e[h+3]=H[d+(4*h+12)>>2],
e[h+4]=H[d+(4*h+16)>>2],e[h+5]=H[d+(4*h+20)>>2],e[h+6]=H[d+(4*h+24)>>2],e[h+7]=H[d+(4*h+28)>>2],e[h+8]=H[d+(4*h+32)>>2],e[h+9]=H[d+(4*h+36)>>2],e[h+10]=H[d+(4*h+40)>>2],e[h+11]=H[d+(4*h+44)>>2],e[h+12]=H[d+(4*h+48)>>2],e[h+13]=H[d+(4*h+52)>>2],e[h+14]=H[d+(4*h+56)>>2],e[h+15]=H[d+(4*h+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},la:function(a){Z.useProgram(T[a])},Xa:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},
M:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Da:function(){window.addEventListener("beforeunload",function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")})},La:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");
oa("_sapp_emsc_onpaste","void",["string"],[a])})},t:function(){document.getElementById("_sokol_app_input_element").blur()},Ca:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},
_:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},Y:function(){return navigator.userAgent.includes("Macintosh")?1:0},p:function(){return performance.now()},table:la},Qb=function(){function a(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ka&&(clearInterval(Ka),Ka=null),K&&(a=K,K=null,a()))}function b(b){a(b.instance)}function c(a){return Oa().then(function(a){return WebAssembly.instantiate(a,
d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);ja(a)})}var d={env:Pb,wasi_unstable:Pb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||La()||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,
d).then(b,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Qb;var Pa=f.___wasm_call_ctors=function(){return f.asm.db.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.eb.apply(null,arguments)};f.___em_js__emsc_fs_init=function(){return f.asm.fb.apply(null,arguments)};f.___em_js__emsc_load_file=function(){return f.asm.gb.apply(null,arguments)};
var Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.hb.apply(null,arguments)};f.___em_js__sapp_js_create_textfield=function(){return f.asm.ib.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.jb.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.kb.apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return f.asm.lb.apply(null,arguments)};
var Ob=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.mb.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm.nb.apply(null,arguments)};f.___em_js__sapp_js_init_clipboard=function(){return f.asm.ob.apply(null,arguments)};f.___em_js__sapp_js_write_clipboard=function(){return f.asm.pb.apply(null,arguments)};f._main=function(){return f.asm.qb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.rb.apply(null,arguments)};
f._free=function(){return f.asm.sb.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.tb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.ub.apply(null,arguments)};f.___em_js__saudio_js_init=function(){return f.asm.vb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.wb.apply(null,arguments)};f.___em_js__saudio_js_buffer_frames=function(){return f.asm.xb.apply(null,arguments)};
f.__sargs_add_kvp=function(){return f.asm.yb.apply(null,arguments)};f.___em_js__sargs_js_parse_url=function(){return f.asm.zb.apply(null,arguments)};f.___em_js__simgui_js_is_osx=function(){return f.asm.Ab.apply(null,arguments)};var ra=f.stackSave=function(){return f.asm.Bb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.Cb.apply(null,arguments)},sa=f.stackRestore=function(){return f.asm.Db.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Eb.apply(null,arguments)};
f.dynCall_v=function(){return f.asm.Fb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.Gb.apply(null,arguments)},Mb=f.dynCall_idi=function(){return f.asm.Hb.apply(null,arguments)};f.asm=Qb;var Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Sb(){Rb||Tb();Rb||(K=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,!ma)){Da(Fa);Da(Ga);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var b=a,d=f._main;b=b||[];var e=b.length+1,h=pa(4*(e+1));G[h>>2]=va(aa);for(var l=1;l<e;l++)G[(h>>2)+l]=va(b[l-1]);G[(h>>2)+e]=0;try{var n=d(e,h);if(!B||0!==n){if(!B&&(ma=!0,f.onExit))f.onExit(n);t(n,new ia(n))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?B=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+b),t(1,p)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ia.unshift(b);Da(Ia)}}a=a||m;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ja();Da(Ea);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);B=!0;Tb();
