var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y;
if(ba){x=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",z);t=function(a){process.exit(a)};
f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ka=!1;function assert(a,b){a||z("Assertion failed: "+b)}function la(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function ma(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=na(c);D(a,E,b,c)}return b},array:function(a){var b=na(a.length);F.set(a,b);return b}},g=la(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var r=e[c[m]];r?(0===a&&(a=oa()),l[m]=r(d[m])):l[m]=d[m]}c=g.apply(null,l);c=function(a){return"string"===b?G(a):"boolean"===b?!!a:a}(c);0!==a&&pa(a);return c}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ra(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ta(a){var b=sa(a)+1,c=na(b);D(a,F,c,b);return c}function ua(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,F,E,va,wa,H,xa,I,J;
function ya(){f.HEAP8=F=new Int8Array(buffer);f.HEAP16=va=new Int16Array(buffer);f.HEAP32=H=new Int32Array(buffer);f.HEAPU8=E=new Uint8Array(buffer);f.HEAPU16=wa=new Uint16Array(buffer);f.HEAPU32=xa=new Uint32Array(buffer);f.HEAPF32=I=new Float32Array(buffer);f.HEAPF64=J=new Float64Array(buffer)}var za=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:za/65536});C&&(buffer=C.buffer);za=buffer.byteLength;ya();H[1709668]=12081568;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.$b;"number"===typeof c?void 0===b.Sb?f.dynCall_v(c):f.dynCall_vi(c,b.Sb):c(void 0===b.Sb?null:b.Sb)}}}var Ba=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=f.preRun.shift();Ba.unshift(a)}var Ia=Math.abs,Ja=Math.sqrt,Ka=Math.floor,K=0,La=null,Ma=null;f.preloadedImages={};f.preloadedAudios={};
function Na(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="atom-ui.wasm";if(!Na()){var Oa=L;L=f.locateFile?f.locateFile(Oa,x):x+Oa}function Pa(){try{if(B)return new Uint8Array(B);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Qa(){return B||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Pa())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Pa()})}
function Ra(a){function b(a){f.asm=a.exports;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==La&&(clearInterval(La),La=null),Ma&&(a=Ma,Ma=null,a()))}function c(a){b(a.instance)}function d(a){return Qa().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var e={env:a};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(g){return A("Module.instantiateWasm callback failed with error: "+
g),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Na()||"function"!==typeof fetch)return d(c);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:62,maximum:62,element:"anyfunc"});return Ra(b)};Da.push({$b:function(){Sa()}});
var Ta=[null,[],[]],M=0;function N(){M+=4;return H[M-4>>2]}var Ua={};function Va(){f.___errno_location&&(H[f.___errno_location()>>2]=12)}var Wa=0,Xa=0,O=0,Ya=0,Za=0,$a=null,ab=null,bb=!1;function cb(){for(var a=P.length-1;0<=a;--a)db(a);P=[];eb=[]}var eb=[];function fb(){if(gb&&hb.Jb)for(var a=0;a<eb.length;++a){var b=eb[a];eb.splice(a,1);--a;b.mc.apply(this,b.ec)}}var gb=0,hb=null,P=[];function ib(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function db(a){var b=P[a];b.target.removeEventListener(b.Ib,b.Yb,b.Kb);P.splice(a,1)}function Q(a){function b(b){++gb;hb=a;fb();a.Mb(b);fb();--gb}if(a.Lb)a.Yb=b,a.target.addEventListener(a.Ib,b,a.Kb),P.push(a),bb||(Fa.push(cb),bb=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Ib==a.Ib&&db(c--)}var jb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){try{if(!a)return window;"number"===typeof a&&(a=jb[a]||G(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function kb(a){"number"===typeof a&&(a=G(a));return a&&"#canvas"!==a?"undefined"!==typeof lb&&mb[a]?mb[a]:R(a):"undefined"!==typeof lb&&mb.canvas?mb.canvas:f.canvas}
function nb(a,b,c,d,e,g){Wa||(Wa=S(164));a={target:R(a),Jb:ib()?!1:!0,Ib:g,Lb:d,Mb:function(a){a=a||event;var c=Wa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Kb:c};Q(a)}
function ob(a,b,c){J[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();H[a+8>>2]=b.screenX;H[a+12>>2]=b.screenY;H[a+16>>2]=b.clientX;H[a+20>>2]=b.clientY;H[a+24>>2]=b.ctrlKey;H[a+28>>2]=b.shiftKey;H[a+32>>2]=b.altKey;H[a+36>>2]=b.metaKey;va[a+40>>1]=b.button;va[a+42>>1]=b.buttons;H[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-$a;H[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-ab;if(f.canvas){var d=f.canvas.getBoundingClientRect();
H[a+60>>2]=b.clientX-d.left;H[a+64>>2]=b.clientY-d.top}else H[a+60>>2]=0,H[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},H[a+52>>2]=b.clientX-d.left,H[a+56>>2]=b.clientY-d.top):(H[a+52>>2]=0,H[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&($a=b.screenX,ab=b.screenY)}
function pb(a,b,c,d,e,g){Xa||(Xa=S(72));a=R(a);c={target:a,Jb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Ib:g,Lb:d,Mb:function(c){c=c||event;ob(Xa,c,a);T(d,e,Xa,b)&&c.preventDefault()},Kb:c};ib()&&"mousedown"==g&&(c.Jb=!1);Q(c)}
function sb(a,b,c,d){Ya||(Ya=S(36));a=R(a);Q({target:a,Jb:!1,Ib:"resize",Lb:d,Mb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ya;H[l>>2]=c.detail;H[l+4>>2]=document.body.clientWidth;H[l+8>>2]=document.body.clientHeight;
H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=e[0];H[l+32>>2]=e[1];T(d,10,l,b)&&c.preventDefault()}},Kb:c})}
function tb(a,b,c,d,e,g){Za||(Za=S(1684));a=R(a);Q({target:a,Jb:"touchstart"==g||"touchend"==g,Ib:g,Lb:d,Mb:function(c){c=c||event;for(var g={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Ub=!1;g[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],g[p.identifier]=p,p.Ub=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],g[p.identifier].cc=!0;var q=p=Za;H[q+4>>2]=c.ctrlKey;H[q+8>>2]=c.shiftKey;H[q+12>>2]=c.altKey;H[q+16>>2]=c.metaKey;q+=20;var Ca=f.canvas?f.canvas.getBoundingClientRect():
void 0,qb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},rb=0;for(l in g){var w=g[l];H[q>>2]=w.identifier;H[q+4>>2]=w.screenX;H[q+8>>2]=w.screenY;H[q+12>>2]=w.clientX;H[q+16>>2]=w.clientY;H[q+20>>2]=w.pageX;H[q+24>>2]=w.pageY;H[q+28>>2]=w.Ub;H[q+32>>2]=w.cc;Ca?(H[q+44>>2]=w.clientX-Ca.left,H[q+48>>2]=w.clientY-Ca.top):(H[q+44>>2]=0,H[q+48>>2]=0);H[q+36>>2]=w.clientX-qb.left;H[q+40>>2]=w.clientY-qb.top;q+=52;if(32<=++rb)break}H[p>>2]=rb;T(d,e,p,b)&&c.preventDefault()},Kb:c})}
function ub(a,b,c,d,e,g){a||(a=f.canvas);a={target:R(a),Jb:!1,Ib:g,Lb:d,Mb:function(a){a=a||event;T(d,e,0,b)&&a.preventDefault()},Kb:c};Q(a)}
function vb(a,b,c,d,e){function g(c){c=c||event;ob(O,c,a);J[O+72>>3]=c.wheelDeltaX||0;J[O+80>>3]=-(c.wheelDeltaY||c.wheelDelta);J[O+88>>3]=0;H[O+96>>2]=0;T(d,9,O,b)&&c.preventDefault()}function l(c){c=c||event;var e=O;ob(e,c,a);J[e+72>>3]=c.deltaX;J[e+80>>3]=c.deltaY;J[e+88>>3]=c.deltaZ;H[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}O||(O=S(104));Q({target:a,Jb:!0,Ib:e,Lb:d,Mb:"wheel"==e?l:g,Kb:c})}var wb=1,xb=0,yb=[],U=[],zb=[],Ab=[],Bb=[],V=[],W=[],Cb={},Db=null,mb={},Eb={},Fb={};
function X(a){xb||(xb=a)}function Gb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}var Hb=null,Y=[0];function Ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,g){b.drawArraysInstancedANGLE(a,d,e,g)},a.drawElementsInstanced=function(a,d,e,g,l){b.drawElementsInstancedANGLE(a,d,e,g,l)})}
function Jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Lb(a){a||(a=Db);if(!a.ac){a.ac=!0;var b=a.Rb;2>a.version&&(Ib(b),Jb(b),Kb(b));b.hc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var lb={},Mb,Nb,Ob=["default","low-power","high-performance"];function Pb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&Gb(d);g?(g.name=l,d[l]=g):X(1282);H[b+4*e>>2]=l}}
function Qb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else X(1281)}function Rb(a){var b=sa(a)+1,c=S(b);D(a,E,c,b);return c}
var Sb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Tb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Ub(a,b,c,d,e){if(b=Sb[b]*Tb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return E.subarray(e,c);case 5126:return I.subarray(e>>2,c>>2);case 5125:case 34042:return xa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return wa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Vb(a){a=ua(a);var b=buffer.byteLength;try{return-1!==C.grow((a-b)/65536)?(buffer=C.buffer,!0):!1}catch(c){return!1}}var Z;Hb=new Float32Array(256);for(var Wb=0;256>Wb;Wb++)Y[Wb]=Hb.subarray(0,Wb+1);
var ac=f.asm({},{fb:function(){},hb:function(a,b){M=b;try{return Ua.Wb(),N(),N(),N(),N(),0}catch(c){return z(c),-c.Qb}},gb:function(a,b){M=b;try{var c=Ua.Wb(),d=N(),e=N();return Ua.ic(c,d,e)}catch(g){return z(g),-g.Qb}},ba:function(a,b){M=b;try{var c=N(),d=N(),e=N();for(b=a=0;b<e;b++){for(var g=H[d+8*b>>2],l=H[d+(8*b+4)>>2],m=0;m<l;m++){var r=E[g+m],p=Ta[c];0===r||10===r?((1===c?ja:A)(ra(p,0)),p.length=0):p.push(r)}a+=l}return a}catch(q){return z(q),-q.Qb}},u:function(a,b){M=b;return 0},jb:function(a,
b){M=b;try{var c=G(N()),d=N(),e=N();return(void 0).open(c,d,e).fd}catch(g){return z(g),-g.Qb}},ca:function(a,b){M=b;return 0},aa:function(a,b){M=b;try{return Ua.Wb(),0}catch(c){return z(c),-c.Qb}},D:function(){},pb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=ma},qb:function(a){var b=G(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);ma("emsc_load_data","int",["string","array","number"],[b,a,a.length])};
c.send()},V:function(){return devicePixelRatio||1},_:function(a,b,c){a=a?R(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),J[b>>3]=a.right-a.left,J[c>>3]=a.bottom-a.top):(J[b>>3]=a.clientWidth,J[c>>3]=a.clientHeight);return 0},_a:function(a,b,c){E.set(E.subarray(b,b+c),a)},Na:function(a,b){function c(d){Xb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},R:function(a,b,c){a=kb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Wa:function(a,b,c,d){nb(a,
b,c,d,2,"keydown");return 0},Ua:function(a,b,c,d){nb(a,b,c,d,1,"keypress");return 0},Va:function(a,b,c,d){nb(a,b,c,d,3,"keyup");return 0},ob:function(a,b,c,d){pb(a,b,c,d,5,"mousedown");return 0},Za:function(a,b,c,d){pb(a,b,c,d,33,"mouseenter");return 0},Ya:function(a,b,c,d){pb(a,b,c,d,34,"mouseleave");return 0},cb:function(a,b,c,d){pb(a,b,c,d,8,"mousemove");return 0},ib:function(a,b,c,d){pb(a,b,c,d,6,"mouseup");return 0},Ja:function(a,b,c,d){sb(a,b,c,d);return 0},Qa:function(a,b,c,d){tb(a,b,c,d,25,
"touchcancel");return 0},Ra:function(a,b,c,d){tb(a,b,c,d,23,"touchend");return 0},Sa:function(a,b,c,d){tb(a,b,c,d,24,"touchmove");return 0},Ta:function(a,b,c,d){tb(a,b,c,d,22,"touchstart");return 0},Pa:function(a,b,c,d){ub(a,b,c,d,31,"webglcontextlost");return 0},Oa:function(a,b,c,d){ub(a,b,c,d,32,"webglcontextrestored");return 0},Xa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(vb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(vb(a,b,c,d,"mousewheel"),0):-1},N:function(a,
b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Ob[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.bc=H[b+8];c.jc=H[b+9];c.Vb=H[b+10];c.Zb=H[b+11];c.kc=H[b+12];c.lc=H[b+13];a=kb(a);if(!a||c.Zb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.bc,Rb:a};a.canvas&&(a.canvas.dc=d);Cb[b]=d;("undefined"===typeof c.Vb||
c.Vb)&&Lb(d);c=b}else c=0;return c},ma:function(a,b){a=Cb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Ib(Z):"OES_vertex_array_object"==b?Jb(Z):"WEBGL_draw_buffers"==b&&Kb(Z);return!!a.Rb.getExtension(b)},Aa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},va:function(a){Db=Cb[a];f.fc=Z=Db&&Db.Rb;return!a||Z?0:-5},$:Ia,bb:Ia,eb:Ka,i:function(a){Z.activeTexture(a)},S:function(a,b){Z.attachShader(U[a],W[b])},c:function(a,b){Z.bindBuffer(a,
yb[b])},h:function(a,b){Z.bindFramebuffer(a,zb[b])},Ha:function(a,b){Z.bindRenderbuffer(a,Ab[b])},b:function(a,b){Z.bindTexture(a,Bb[b])},I:function(a,b,c,d){Z.blendColor(a,b,c,d)},J:function(a,b){Z.blendEquationSeparate(a,b)},K:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},W:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},s:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},o:function(a){return Z.checkFramebufferStatus(a)},wa:function(a){Z.clear(a)},za:function(a,b,c,d){Z.clearColor(a,
b,c,d)},ya:function(a){Z.clearDepth(a)},xa:function(a){Z.clearStencil(a)},B:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},lb:function(a){Z.compileShader(W[a])},U:function(a,b,c,d,e,g,l,m){Z.compressedTexImage2D(a,b,c,d,e,g,m?E.subarray(m,m+l):null)},Ea:function(){var a=Gb(U),b=Z.createProgram();b.name=a;U[a]=b;return a},nb:function(a){var b=Gb(W);W[b]=Z.createShader(a);return b},H:function(a){Z.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=yb[d];e&&(Z.deleteBuffer(e),e.name=
0,yb[d]=null,d==Mb&&(Mb=0),d==Nb&&(Nb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=zb[d];e&&(Z.deleteFramebuffer(e),e.name=0,zb[d]=null)}},Y:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,Eb[a]=null):X(1281)}},t:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=Ab[d];e&&(Z.deleteRenderbuffer(e),e.name=0,Ab[d]=null)}},C:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Z:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=Bb[d];
e&&(Z.deleteTexture(e),e.name=0,Bb[d]=null)}},z:function(a){Z.depthFunc(a)},A:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},ka:function(a,b,c){Z.drawArrays(a,b,c)},la:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},sa:function(a){Z.enableVertexAttribArray(a)},l:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,Ab[d])},d:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,Bb[d],e)},G:function(a){Z.frontFace(a)},X:function(a,
b){Pb(a,b,"createBuffer",yb)},p:function(a,b){Pb(a,b,"createFramebuffer",zb)},Ia:function(a,b){Pb(a,b,"createRenderbuffer",Ab)},Fa:function(a,b){Pb(a,b,"createTexture",Bb)},Ba:function(a,b){return Z.getAttribLocation(U[a],G(b))},n:function(a,b){Qb(a,b)},Ca:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},Q:function(a,b,c){if(c)if(a>=wb)X(1281);else{var d=Eb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),
H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Tb;else if(35722==b){if(-1==d.Ob){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Ob=0;b<e;++b)d.Ob=Math.max(d.Ob,Z.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Ob}else if(35381==b){if(-1==d.Pb)for(a=U[a],e=Z.getProgramParameter(a,35382),b=d.Pb=0;b<e;++b)d.Pb=Math.max(d.Pb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Pb}else H[c>>2]=Z.getProgramParameter(U[a],b);else X(1282)}else X(1281)},kb:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===
a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},da:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},La:function(a){if(Fb[a])return Fb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Rb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||X(1280);b=Rb(b);break;case 7938:b=Rb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Rb(b);break;default:return X(1280),0}return Fb[a]=b},m:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=
Eb[a]&&Eb[a].Xb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Da:function(a){Z.linkProgram(U[a]);var b=U[a];a=Eb[a]={Xb:{},Tb:0,Ob:-1,Pb:-1};for(var c=a.Xb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Tb=Math.max(a.Tb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var r=Gb(V);c[l]=[g.size,r];V[r]=m;for(var p=1;p<g.size;++p)m=Z.getUniformLocation(b,l+"["+p+"]"),r=Gb(V),V[r]=m}}},F:function(a,b){Z.polygonOffset(a,b)},Ga:function(a,
b,c,d){Z.renderbufferStorage(a,b,c,d)},O:function(a,b,c,d){Z.scissor(a,b,c,d)},mb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?H[d+4*g>>2]:-1;e+=G(H[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},ja:function(a,b,c){Z.stencilFunc(a,b,c)},M:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},y:function(a){Z.stencilMask(a)},ia:function(a,b,c){Z.stencilOp(a,b,c)},L:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},T:function(a,b,c,d,e,g,l,m,r){Z.texImage2D(a,b,c,d,e,g,l,m,r?Ub(m,l,d,e,r):null)},j:function(a,
b,c){Z.texParameteri(a,b,c)},r:function(a,b,c,d,e,g,l,m,r){var p=null;r&&(p=Ub(m,l,e,g,r));Z.texSubImage2D(a,b,c,d,e,g,l,m,p)},ra:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},E:function(a,b){Z.uniform1i(V[a],b)},qa:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},pa:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-
1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},oa:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2],d[e+3]=I[c+(4*e+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},na:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=I[d+4*g>>2],e[g+1]=I[d+(4*g+4)>>2],e[g+2]=I[d+(4*g+8)>>2],e[g+3]=I[d+(4*g+12)>>2],
e[g+4]=I[d+(4*g+16)>>2],e[g+5]=I[d+(4*g+20)>>2],e[g+6]=I[d+(4*g+24)>>2],e[g+7]=I[d+(4*g+28)>>2],e[g+8]=I[d+(4*g+32)>>2],e[g+9]=I[d+(4*g+36)>>2],e[g+10]=I[d+(4*g+40)>>2],e[g+11]=I[d+(4*g+44)>>2],e[g+12]=I[d+(4*g+48)>>2],e[g+13]=I[d+(4*g+52)>>2],e[g+14]=I[d+(4*g+56)>>2],e[g+15]=I[d+(4*g+60)>>2];else e=I.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},ua:function(a){Z.useProgram(U[a])},$a:function(a,b){Z.vertexAttribDivisor(a,b)},ta:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},
P:function(a,b,c,d){Z.viewport(a,b,c,d)},x:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Yb()});document.body.append(a)},w:function(){document.getElementById("_sokol_app_input_element").focus()},Ma:function(){window.addEventListener("beforeunload",function(a){0!=Zb()&&(a.preventDefault(),a.returnValue=" ")})},v:function(){document.getElementById("_sokol_app_input_element").blur()},ea:function(){for(var a=
(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())ma("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},fa:function(){return f.Nb?f.Nb.bufferSize:0},ha:function(a,b,c){f.Hb=null;f.Nb=null;"undefined"!==typeof AudioContext?(f.Hb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(f.Hb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),
console.log("sokol_audio.h: created webkitAudioContext")):(f.Hb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Hb?(console.log("sokol_audio.h: sample rate ",f.Hb.sampleRate),f.Nb=f.Hb.createScriptProcessor(c,0,b),f.Nb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=$b(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var r=a.outputBuffer.getChannelData(m),p=0;p<b;p++)r[p]=I[(c>>2)+(d*p+m)]},f.Nb.connect(f.Hb.destination),a=function(){f.Hb&&"suspended"===
f.Hb.state&&f.Hb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ga:function(){return f.Hb?f.Hb.sampleRate:0},f:function(a){a|=0;var b=F.length|0;var c=H[1709668]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,Va(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(F.length,16777216);b<a;)536870912>=b?b=ua(2*b):b=Math.min(ua((3*b+2147483648)/4),2147418112);
Vb(b)?(ya(),a=!0):a=!1}a=!(a|0)}if(a)return Va(),-1;H[1709668]=d|0;return c|0},ab:Ja,db:Ja,q:function(){return performance.now()}},buffer);f.asm=ac;var Sa=f.___wasm_call_ctors=function(){return f.asm.rb.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.sb.apply(null,arguments)};var Yb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.tb.apply(null,arguments)},Zb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.ub.apply(null,arguments)};
f._main=function(){return f.asm.vb.apply(null,arguments)};var S=f._malloc=function(){return f.asm.wb.apply(null,arguments)};f._free=function(){return f.asm.xb.apply(null,arguments)};var $b=f.__saudio_emsc_pull=function(){return f.asm.yb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.zb.apply(null,arguments)};
var oa=f.stackSave=function(){return f.asm.Ab.apply(null,arguments)},na=f.stackAlloc=function(){return f.asm.Bb.apply(null,arguments)},pa=f.stackRestore=function(){return f.asm.Cb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Db.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Eb.apply(null,arguments)};var T=f.dynCall_iiii=function(){return f.asm.Fb.apply(null,arguments)},Xb=f.dynCall_idi=function(){return f.asm.Gb.apply(null,arguments)};f.asm=ac;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ma=function bc(){f.calledRun||cc();f.calledRun||(Ma=bc)};
function cc(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ka)){Aa(Da);Aa(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(dc){var b=a;b=b||[];var d=b.length+1,e=na(4*(d+1));H[e>>2]=ta(aa);for(var g=1;g<d;g++)H[(e>>2)+g]=ta(b[g-1]);H[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ka=!0,f.onExit))f.onExit(l);t(l,new ia(l))}}catch(m){m instanceof ia||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),
A("exception thrown: "+b),t(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ga.unshift(b);Aa(Ga)}}a=a||n;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Aa(Ba);0<K||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=cc;
function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=z;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var dc=!0;f.noInitialRun&&(dc=!1);f.noExitRuntime=!0;cc();
