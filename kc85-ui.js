var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y;
if(ba){x=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",z);t=function(a){process.exit(a)};
f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var ka;f.noExitRuntime&&(ka=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,la=new WebAssembly.Table({initial:57,maximum:57,element:"anyfunc"}),ma=!1;function assert(a,b){a||z("Assertion failed: "+b)}
function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},g=na(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var r=e[c[m]];r?(0===a&&(a=ra()),l[m]=r(d[m])):l[m]=d[m]}c=g.apply(null,l);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function F(a,b){return a?ua(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function wa(a){var b=va(a)+1,c=pa(b);D(a,qa,c,b);return c}function xa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,ya,za,G,Aa,H,I;
function Ba(a){buffer=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var Ca=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:Ca/65536});C&&(buffer=C.buffer);Ca=buffer.byteLength;Ba(buffer);G[1753688]=12257824;
function Da(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ub;"number"===typeof c?void 0===b.Mb?f.dynCall_v(c):f.dynCall_vi(c,b.Mb):c(void 0===b.Mb?null:b.Mb)}}}var Ea=[],Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=f.preRun.shift();Ea.unshift(a)}var J=0,Ka=null,La=null;f.preloadedImages={};f.preloadedAudios={};function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);ma=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}
function Ma(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="kc85-ui.wasm";if(!Ma()){var Na=K;K=f.locateFile?f.locateFile(Na,x):x+Na}function Oa(){try{if(B)return new Uint8Array(B);if(y)return y(K);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Pa(){return B||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Oa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}Fa.push({Ub:function(){Qa()}});var Ra=[null,[],[]],L=0;function M(){L+=4;return G[L-4>>2]}var Sa={},Ta=0,Ua=0,N=0,Va=0,Wa=0,Xa=null,Ya=null,Za=!1;function $a(){for(var a=O.length-1;0<=a;--a)ab(a);O=[];bb=[]}var bb=[];
function cb(){if(db&&eb.Eb)for(var a=0;a<bb.length;++a){var b=bb[a];bb.splice(a,1);--a;b.hc.apply(this,b.$b)}}var db=0,eb=null,O=[];function fb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function ab(a){var b=O[a];b.target.removeEventListener(b.Db,b.Sb,b.Fb);O.splice(a,1)}
function P(a){function b(b){++db;eb=a;cb();a.Hb(b);cb();--db}if(a.Gb)a.Sb=b,a.target.addEventListener(a.Db,b,a.Fb),O.push(a),Za||(Ha.push($a),Za=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Db==a.Db&&ab(c--)}var gb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=gb[a]||F(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function hb(a){"number"===typeof a&&(a=F(a));return a&&"#canvas"!==a?"undefined"!==typeof ib&&jb[a]?jb[a]:Q(a):"undefined"!==typeof ib&&jb.canvas?jb.canvas:f.canvas}
function kb(a,b,c,d,e,g){Ta||(Ta=S(164));a={target:Q(a),Eb:fb()?!1:!0,Db:g,Gb:d,Hb:function(a){a=a||event;var c=Ta;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Fb:c};P(a)}
function lb(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;ya[a+40>>1]=b.button;ya[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Xa;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ya;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Xa=b.screenX,Ya=b.screenY)}
function mb(a,b,c,d,e,g){Ua||(Ua=S(72));a=Q(a);c={target:a,Eb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Db:g,Gb:d,Hb:function(c){c=c||event;lb(Ua,c,a);T(d,e,Ua,b)&&c.preventDefault()},Fb:c};fb()&&"mousedown"==g&&(c.Eb=!1);P(c)}
function nb(a,b,c,d){Va||(Va=S(36));a=Q(a);P({target:a,Eb:!1,Db:"resize",Gb:d,Hb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Va;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;G[l+8>>2]=document.body.clientHeight;
G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=e[0];G[l+32>>2]=e[1];T(d,10,l,b)&&c.preventDefault()}},Fb:c})}
function ob(a,b,c,d,e,g){Wa||(Wa=S(1684));a=Q(a);P({target:a,Eb:"touchstart"==g||"touchend"==g,Db:g,Gb:d,Hb:function(c){c=c||event;for(var g={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Pb=!1;g[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],g[p.identifier]=p,p.Pb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],g[p.identifier].Yb=!0;var q=p=Wa;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var R=f.canvas?f.canvas.getBoundingClientRect():
void 0,pb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},qb=0;for(l in g){var w=g[l];G[q>>2]=w.identifier;G[q+4>>2]=w.screenX;G[q+8>>2]=w.screenY;G[q+12>>2]=w.clientX;G[q+16>>2]=w.clientY;G[q+20>>2]=w.pageX;G[q+24>>2]=w.pageY;G[q+28>>2]=w.Pb;G[q+32>>2]=w.Yb;R?(G[q+44>>2]=w.clientX-R.left,G[q+48>>2]=w.clientY-R.top):(G[q+44>>2]=0,G[q+48>>2]=0);G[q+36>>2]=w.clientX-pb.left;G[q+40>>2]=w.clientY-pb.top;q+=52;if(32<=++qb)break}G[p>>2]=qb;T(d,e,p,b)&&c.preventDefault()},Fb:c})}
function rb(a,b,c,d,e,g){a||(a=f.canvas);a={target:Q(a),Eb:!1,Db:g,Gb:d,Hb:function(a){a=a||event;T(d,e,0,b)&&a.preventDefault()},Fb:c};P(a)}
function sb(a,b,c,d,e){function g(c){c=c||event;lb(N,c,a);I[N+72>>3]=c.wheelDeltaX||0;I[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[N+88>>3]=0;G[N+96>>2]=0;T(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;lb(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}N||(N=S(104));P({target:a,Eb:!0,Db:e,Gb:d,Hb:"wheel"==e?l:g,Fb:c})}var tb=1,ub=0,vb=[],U=[],wb=[],xb=[],yb=[],V=[],W=[],zb={},Ab=null,jb={},Bb={},Cb={};
function X(a){ub||(ub=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}var Eb=null,Y=[0];function Fb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,g){b.drawArraysInstancedANGLE(a,d,e,g)},a.drawElementsInstanced=function(a,d,e,g,l){b.drawElementsInstancedANGLE(a,d,e,g,l)})}
function Gb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Hb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ib(a){a||(a=Ab);if(!a.Wb){a.Wb=!0;var b=a.Lb;2>a.version&&(Fb(b),Gb(b),Hb(b));b.bc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var ib={},Jb,Kb,Lb=["default","low-power","high-performance"];function Mb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&Db(d);g?(g.name=l,d[l]=g):X(1282);G[b+4*e>>2]=l}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}function Ob(a){var b=va(a)+1,c=S(b);D(a,E,c,b);return c}
var Pb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Qb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Rb(a,b,c,d,e){if(b=Pb[b]*Qb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return E.subarray(e,c);case 5126:return H.subarray(e>>2,c>>2);case 5125:case 34042:return Aa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return za.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}var Z;Eb=new Float32Array(256);
for(var Sb=0;256>Sb;Sb++)Y[Sb]=Eb.subarray(0,Sb+1);
var Xb={_a:function(){},bb:function(a,b){L=b;try{return Sa.Vb(),M(),M(),M(),M(),0}catch(c){return z(c),-c.Nb}},$a:function(a,b){L=b;try{var c=Sa.Vb(),d=M(),e=M();return Sa.cc(c,d,e)}catch(g){return z(g),-g.Nb}},s:function(a,b){L=b;return 0},eb:function(a,b){L=b;try{var c=F(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(g){return z(g),-g.Nb}},cb:function(a,b){L=b;return 0},B:function(){},kb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=oa},lb:function(a){var b=F(a),c=new XMLHttpRequest;
c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},U:function(){return devicePixelRatio||1},Z:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},Xa:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ja:function(a,b){function c(d){Tb(a,
d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=xa(2*b):b=Math.min(xa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Ba(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},Q:function(a,b,c){a=hb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Sa:function(a,b,c,d){kb(a,b,c,d,2,"keydown");return 0},Qa:function(a,b,c,d){kb(a,b,c,d,1,"keypress");return 0},
Ra:function(a,b,c,d){kb(a,b,c,d,3,"keyup");return 0},jb:function(a,b,c,d){mb(a,b,c,d,5,"mousedown");return 0},Va:function(a,b,c,d){mb(a,b,c,d,33,"mouseenter");return 0},Ua:function(a,b,c,d){mb(a,b,c,d,34,"mouseleave");return 0},Wa:function(a,b,c,d){mb(a,b,c,d,8,"mousemove");return 0},db:function(a,b,c,d){mb(a,b,c,d,6,"mouseup");return 0},Fa:function(a,b,c,d){nb(a,b,c,d);return 0},Ma:function(a,b,c,d){ob(a,b,c,d,25,"touchcancel");return 0},Na:function(a,b,c,d){ob(a,b,c,d,23,"touchend");return 0},Oa:function(a,
b,c,d){ob(a,b,c,d,24,"touchmove");return 0},Pa:function(a,b,c,d){ob(a,b,c,d,22,"touchstart");return 0},La:function(a,b,c,d){rb(a,b,c,d,31,"webglcontextlost");return 0},Ka:function(a,b,c,d){rb(a,b,c,d,32,"webglcontextrestored");return 0},Ta:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(sb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(sb(a,b,c,d,"mousewheel"),0):-1},M:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=
!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Lb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Xb=G[b+8];c.dc=G[b+9];c.Qb=G[b+10];c.Tb=G[b+11];c.ec=G[b+12];c.fc=G[b+13];a=hb(a);if(!a||c.Tb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.Xb,Lb:a};a.canvas&&(a.canvas.Zb=d);zb[b]=d;("undefined"===typeof c.Qb||c.Qb)&&Ib(d);c=b}else c=0;return c},ia:function(a,b){a=zb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));
"ANGLE_instanced_arrays"==b?Fb(Z):"OES_vertex_array_object"==b?Gb(Z):"WEBGL_draw_buffers"==b&&Hb(Z);return!!a.Lb.getExtension(b)},wa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ra:function(a){Ab=zb[a];f.ac=Z=Ab&&Ab.Lb;return!a||Z?0:-5},_:function(){return 0},ab:function(a,b,c,d){try{for(var e=0,g=0;g<c;g++){for(var l=G[b+8*g>>2],m=G[b+(8*g+4)>>2],r=0;r<m;r++){var p=E[l+r],q=Ra[a];0===p||10===p?((1===a?ja:A)(ua(q,0)),q.length=0):q.push(p)}e+=m}G[d>>2]=
e;return 0}catch(R){return z(R),R.Nb}},g:function(a){Z.activeTexture(a)},R:function(a,b){Z.attachShader(U[a],W[b])},b:function(a,b){Z.bindBuffer(a,vb[b])},f:function(a,b){Z.bindFramebuffer(a,wb[b])},Da:function(a,b){Z.bindRenderbuffer(a,xb[b])},a:function(a,b){Z.bindTexture(a,yb[b])},H:function(a,b,c,d){Z.blendColor(a,b,c,d)},I:function(a,b){Z.blendEquationSeparate(a,b)},J:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},V:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},q:function(a,b,c,
d){Z.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},sa:function(a){Z.clear(a)},va:function(a,b,c,d){Z.clearColor(a,b,c,d)},ua:function(a){Z.clearDepth(a)},ta:function(a){Z.clearStencil(a)},z:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},gb:function(a){Z.compileShader(W[a])},T:function(a,b,c,d,e,g,l,m){Z.compressedTexImage2D(a,b,c,d,e,g,m?E.subarray(m,m+l):null)},Aa:function(){var a=Db(U),b=Z.createProgram();b.name=a;U[a]=b;return a},ib:function(a){var b=
Db(W);W[b]=Z.createShader(a);return b},G:function(a){Z.cullFace(a)},Ga:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=vb[d];e&&(Z.deleteBuffer(e),e.name=0,vb[d]=null,d==Jb&&(Jb=0),d==Kb&&(Kb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=wb[d];e&&(Z.deleteFramebuffer(e),e.name=0,wb[d]=null)}},X:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,Bb[a]=null):X(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=xb[d];e&&(Z.deleteRenderbuffer(e),
e.name=0,xb[d]=null)}},A:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=yb[d];e&&(Z.deleteTexture(e),e.name=0,yb[d]=null)}},x:function(a){Z.depthFunc(a)},y:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},C:function(a){Z.disableVertexAttribArray(a)},ga:function(a,b,c){Z.drawArrays(a,b,c)},ha:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},oa:function(a){Z.enableVertexAttribArray(a)},k:function(a,
b,c,d){Z.framebufferRenderbuffer(a,b,c,xb[d])},c:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,yb[d],e)},F:function(a){Z.frontFace(a)},W:function(a,b){Mb(a,b,"createBuffer",vb)},n:function(a,b){Mb(a,b,"createFramebuffer",wb)},Ea:function(a,b){Mb(a,b,"createRenderbuffer",xb)},Ba:function(a,b){Mb(a,b,"createTexture",yb)},xa:function(a,b){return Z.getAttribLocation(U[a],F(b))},i:function(a,b){Nb(a,b)},ya:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,
d,b):0;c&&(G[c>>2]=b)},P:function(a,b,c){if(c)if(a>=tb)X(1281);else{var d=Bb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Ob;else if(35722==b){if(-1==d.Jb){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=U[a],e=Z.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=Math.max(d.Kb,Z.getActiveUniformBlockName(a,
b).length+1);G[c>>2]=d.Kb}else G[c>>2]=Z.getProgramParameter(U[a],b);else X(1282)}else X(1281)},fb:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},$:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Ha:function(a){if(Cb[a])return Cb[a];switch(a){case 7939:var b=
Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ob(b);break;case 7938:b=Ob("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:return X(1280),0}return Cb[a]=
b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Bb[a]&&Bb[a].Rb[b])&&0<=c&&c<a[0]?a[1]+c:-1},za:function(a){Z.linkProgram(U[a]);var b=U[a];a=Bb[a]={Rb:{},Ob:0,Jb:-1,Kb:-1};for(var c=a.Rb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Ob=Math.max(a.Ob,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var r=Db(V);
c[l]=[g.size,r];V[r]=m;for(var p=1;p<g.size;++p)m=Z.getUniformLocation(b,l+"["+p+"]"),r=Db(V),V[r]=m}}},E:function(a,b){Z.polygonOffset(a,b)},Ca:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},N:function(a,b,c,d){Z.scissor(a,b,c,d)},hb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?G[d+4*g>>2]:-1;e+=F(G[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},fa:function(a,b,c){Z.stencilFunc(a,b,c)},L:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},ea:function(a,b,
c){Z.stencilOp(a,b,c)},K:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},S:function(a,b,c,d,e,g,l,m,r){Z.texImage2D(a,b,c,d,e,g,l,m,r?Rb(m,l,d,e,r):null)},h:function(a,b,c){Z.texParameteri(a,b,c)},p:function(a,b,c,d,e,g,l,m,r){var p=null;r&&(p=Rb(m,l,e,g,r));Z.texSubImage2D(a,b,c,d,e,g,l,m,p)},na:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},D:function(a,b){Z.uniform1i(V[a],b)},ma:function(a,b,c){if(256>=2*b)for(var d=
Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},la:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},ka:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],
d)},ja:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=H[d+4*g>>2],e[g+1]=H[d+(4*g+4)>>2],e[g+2]=H[d+(4*g+8)>>2],e[g+3]=H[d+(4*g+12)>>2],e[g+4]=H[d+(4*g+16)>>2],e[g+5]=H[d+(4*g+20)>>2],e[g+6]=H[d+(4*g+24)>>2],e[g+7]=H[d+(4*g+28)>>2],e[g+8]=H[d+(4*g+32)>>2],e[g+9]=H[d+(4*g+36)>>2],e[g+10]=H[d+(4*g+40)>>2],e[g+11]=H[d+(4*g+44)>>2],e[g+12]=H[d+(4*g+48)>>2],e[g+13]=H[d+(4*g+52)>>2],e[g+14]=H[d+(4*g+56)>>2],e[g+15]=H[d+(4*g+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],
!!c,e)},qa:function(a){Z.useProgram(U[a])},Za:function(a,b){Z.vertexAttribDivisor(a,b)},pa:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},O:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Ia:function(){window.addEventListener("beforeunload",
function(a){0!=Vb()&&(a.preventDefault(),a.returnValue=" ")})},t:function(){document.getElementById("_sokol_app_input_element").blur()},aa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},ba:function(){return f.Ib?f.Ib.bufferSize:0},da:function(a,b,c){f.Cb=null;f.Ib=null;"undefined"!==typeof AudioContext?(f.Cb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),
console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(f.Cb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(f.Cb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Cb?(console.log("sokol_audio.h: sample rate ",f.Cb.sampleRate),f.Ib=f.Cb.createScriptProcessor(c,0,b),f.Ib.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Wb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,
m=0;m<d;m++)for(var r=a.outputBuffer.getChannelData(m),p=0;p<b;p++)r[p]=H[(c>>2)+(d*p+m)]},f.Ib.connect(f.Cb.destination),a=function(){f.Cb&&"suspended"===f.Cb.state&&f.Cb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ca:function(){return f.Cb?f.Cb.sampleRate:0},o:function(){return performance.now()},table:la},Yb=function(){function a(a){f.asm=a.exports;J--;f.monitorRunDependencies&&
f.monitorRunDependencies(J);0==J&&(null!==Ka&&(clearInterval(Ka),Ka=null),La&&(a=La,La=null,a()))}function b(b){a(b.instance)}function c(a){return Pa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Xb,wasi_unstable:Xb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(B||
"function"!==typeof WebAssembly.instantiateStreaming||Ma()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Yb;var Qa=f.___wasm_call_ctors=function(){return f.asm.mb.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.nb.apply(null,arguments)};
var Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.ob.apply(null,arguments)},Vb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.pb.apply(null,arguments)};f._main=function(){return f.asm.qb.apply(null,arguments)};var S=f._malloc=function(){return f.asm.rb.apply(null,arguments)};f._free=function(){return f.asm.sb.apply(null,arguments)};var Wb=f.__saudio_emsc_pull=function(){return f.asm.tb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.ub.apply(null,arguments)};
var ra=f.stackSave=function(){return f.asm.vb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.wb.apply(null,arguments)},sa=f.stackRestore=function(){return f.asm.xb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.yb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.zb.apply(null,arguments)};var T=f.dynCall_iiii=function(){return f.asm.Ab.apply(null,arguments)},Tb=f.dynCall_idi=function(){return f.asm.Bb.apply(null,arguments)};f.asm=Yb;var Zb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}La=function $b(){Zb||ac();Zb||(La=$b)};
function ac(a){function b(){if(!Zb&&(Zb=!0,!ma)){Da(Fa);Da(Ga);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(bc){var b=a;b=b||[];var d=b.length+1,e=pa(4*(d+1));G[e>>2]=wa(aa);for(var g=1;g<d;g++)G[(e>>2)+g]=wa(b[g-1]);G[(e>>2)+d]=0;try{var l=f._main(d,e);if(!ka||0!==l){if(!ka&&(ma=!0,f.onExit))f.onExit(l);t(l,new ia(l))}}catch(m){m instanceof ia||("SimulateInfiniteLoop"==m?ka=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),A("exception thrown: "+b),t(1,m)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ia.unshift(b);Da(Ia)}}a=a||n;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ja();Da(Ea);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ac;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);ka=!0;ac();
