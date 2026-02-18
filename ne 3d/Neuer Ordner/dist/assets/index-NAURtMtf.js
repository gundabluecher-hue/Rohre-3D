(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="160",oc=0,_o=1,ac=2,lc=0,hl=1,cc=2,dn=3,Cn=0,Ce=1,Ke=2,wn=0,Si=1,vo=2,xo=3,So=4,hc=5,kn=100,uc=101,dc=102,yo=103,Mo=104,fc=200,pc=201,mc=202,gc=203,kr=204,Vr=205,_c=206,vc=207,xc=208,Sc=209,yc=210,Mc=211,Ec=212,Tc=213,Ac=214,bc=0,wc=1,Rc=2,Bs=3,Pc=4,Cc=5,Lc=6,Ic=7,ul=0,Dc=1,Nc=2,mn=0,Oc=1,Uc=2,Bc=3,Gr=4,Fc=5,zc=6,dl=300,Ei=301,Ti=302,Hr=303,Wr=304,qs=306,Wi=1e3,$e=1001,Xr=1002,Me=1003,Eo=1004,Ns=1005,ze=1006,kc=1007,Xi=1008,Rn=1009,Vc=1010,Gc=1011,to=1012,fl=1013,Tn=1014,An=1015,Yi=1016,pl=1017,ml=1018,Gn=1020,Hc=1021,Ze=1023,Wc=1024,Xc=1025,Hn=1026,Ai=1027,Yc=1028,gl=1029,qc=1030,_l=1031,vl=1033,nr=33776,ir=33777,sr=33778,rr=33779,To=35840,Ao=35841,bo=35842,wo=35843,xl=36196,Ro=37492,Po=37496,Co=37808,Lo=37809,Io=37810,Do=37811,No=37812,Oo=37813,Uo=37814,Bo=37815,Fo=37816,zo=37817,ko=37818,Vo=37819,Go=37820,Ho=37821,or=36492,Wo=36494,Xo=36495,Kc=36283,Yo=36284,qo=36285,Ko=36286,Sl=3e3,Wn=3001,$c=3200,Zc=3201,yl=0,jc=1,Ge="",_e="srgb",gn="srgb-linear",eo="display-p3",Ks="display-p3-linear",Fs="linear",ee="srgb",zs="rec709",ks="p3",jn=7680,$o=519,Jc=512,Qc=513,th=514,Ml=515,eh=516,nh=517,ih=518,sh=519,Zo=35044,El=35048,jo="300 es",Yr=1035,fn=2e3,Vs=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const yi=Math.PI/180,qi=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function no(s,t){return(s%t+t)%t}function rh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function oh(s,t,e){return s!==t?(e-s)/(t-s):0}function Fi(s,t,e){return(1-e)*s+e*t}function ah(s,t,e,n){return Fi(s,t,1-Math.exp(-e*n))}function lh(s,t=1){return t-Math.abs(no(s,t*2)-t)}function ch(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function uh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function dh(s,t){return s+Math.random()*(t-s)}function fh(s){return s*(.5-Math.random())}function ph(s){s!==void 0&&(Jo=s);let t=Jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mh(s){return s*yi}function gh(s){return s*qi}function qr(s){return(s&s-1)===0&&s!==0}function _h(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pn={DEG2RAD:yi,RAD2DEG:qi,generateUUID:$n,clamp:ve,euclideanModulo:no,mapLinear:rh,inverseLerp:oh,lerp:Fi,damp:ah,pingpong:lh,smoothstep:ch,smootherstep:hh,randInt:uh,randFloat:dh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:gh,isPowerOfTwo:qr,ceilPowerOfTwo:_h,floorPowerOfTwo:Gs,setQuaternionFromProperEuler:vh,normalize:be,denormalize:gi};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],M=i[1],v=i[4],S=i[7],P=i[2],w=i[5],b=i[8];return r[0]=o*_+a*M+l*P,r[3]=o*f+a*v+l*w,r[6]=o*p+a*S+l*b,r[1]=c*_+h*M+u*P,r[4]=c*f+h*v+u*w,r[7]=c*p+h*S+u*b,r[2]=d*_+m*M+g*P,r[5]=d*f+m*v+g*w,r[8]=d*p+m*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ar.makeScale(t,e)),this}rotate(t){return this.premultiply(ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new Ht;function Tl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xh(){const s=Hs("canvas");return s.style.display="block",s}const Qo={};function zi(s){s in Qo||(Qo[s]=!0,console.warn(s))}const ta=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ea=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[gn]:{transfer:Fs,primaries:zs,toReference:s=>s,fromReference:s=>s},[_e]:{transfer:ee,primaries:zs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ks]:{transfer:Fs,primaries:ks,toReference:s=>s.applyMatrix3(ea),fromReference:s=>s.applyMatrix3(ta)},[eo]:{transfer:ee,primaries:ks,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ea),fromReference:s=>s.applyMatrix3(ta).convertLinearToSRGB()}},Sh=new Set([gn,Ks]),Zt={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Sh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Qi[t].toReference,i=Qi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Qi[s].primaries},getTransfer:function(s){return s===Ge?Fs:Qi[s].transfer}};function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Jn;class Al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Hs("canvas")),Jn.width=t.width,Jn.height=t.height;const n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yh=0;class bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=$n(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cr(i[o].image)):r.push(cr(i[o]))}else r=cr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Le extends wi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=$e,i=$e,r=ze,o=Xi,a=Ze,l=Rn,c=Le.DEFAULT_ANISOTROPY,h=Ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=$n(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?_e:Ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?Wn:Sl}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wn?_e:Ge}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=dl;Le.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(p+1)/2,w=(h+d)/4,b=(u+_)/4,F=(g+f)/4;return v>S&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=b/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=F/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=b/r,i=F/r),this.set(n,i,r,e),this}let M=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?_e:Ge),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wl extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-a;const p=l*d+c*m+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),w=Math.atan2(P,p*M);f=Math.sin(f*w)/P,a=Math.sin(a*w)/P}const S=a*M;if(l=l*f+d*S,c=c*f+m*S,h=h*f+g*S,u=u*f+_*S,f===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new R,na=new Yn;class nn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),es.subVectors(this.max,Li),Qn.subVectors(t.a,Li),ti.subVectors(t.b,Li),ei.subVectors(t.c,Li),vn.subVectors(ti,Qn),xn.subVectors(ei,ti),Nn.subVectors(Qn,ei);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Nn.z,Nn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Nn.z,0,-Nn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Nn.y,Nn.x,0];return!ur(e,Qn,ti,ei,es)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,Qn,ti,ei,es))?!1:(ns.crossVectors(vn,xn),e=[ns.x,ns.y,ns.z],ur(e,Qn,ti,ei,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new R,new R,new R,new R,new R,new R,new R,new R],We=new R,ts=new nn,Qn=new R,ti=new R,ei=new R,vn=new R,xn=new R,Nn=new R,Li=new R,es=new R,ns=new R,On=new R;function ur(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){On.fromArray(s,r);const a=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ah=new nn,Ii=new R,dr=new R;class _n{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(dr)),this.expandByPoint(Ii.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new R,fr=new R,is=new R,Sn=new R,pr=new R,ss=new R,mr=new R;class io{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fr.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(is),a=Sn.dot(this.direction),l=-Sn.dot(is),c=Sn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fr).addScaledVector(is,d),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){pr.subVectors(e,t),ss.subVectors(n,t),mr.crossVectors(pr,ss);let o=this.direction.dot(mr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(ss.crossVectors(Sn,ss));if(l<0)return null;const c=a*this.direction.dot(pr.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(mr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,f)}set(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,wh)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),yn.crossVectors(n,De),yn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),yn.crossVectors(n,De)),yn.normalize(),rs.crossVectors(De,yn),i[0]=yn.x,i[4]=rs.x,i[8]=De.x,i[1]=yn.y,i[5]=rs.y,i[9]=De.y,i[2]=yn.z,i[6]=rs.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],M=n[3],v=n[7],S=n[11],P=n[15],w=i[0],b=i[4],F=i[8],y=i[12],A=i[1],B=i[5],H=i[9],J=i[13],L=i[2],U=i[6],V=i[10],$=i[14],q=i[3],K=i[7],j=i[11],it=i[15];return r[0]=o*w+a*A+l*L+c*q,r[4]=o*b+a*B+l*U+c*K,r[8]=o*F+a*H+l*V+c*j,r[12]=o*y+a*J+l*$+c*it,r[1]=h*w+u*A+d*L+m*q,r[5]=h*b+u*B+d*U+m*K,r[9]=h*F+u*H+d*V+m*j,r[13]=h*y+u*J+d*$+m*it,r[2]=g*w+_*A+f*L+p*q,r[6]=g*b+_*B+f*U+p*K,r[10]=g*F+_*H+f*V+p*j,r[14]=g*y+_*J+f*$+p*it,r[3]=M*w+v*A+S*L+P*q,r[7]=M*b+v*B+S*U+P*K,r[11]=M*F+v*H+S*V+P*j,r[15]=M*y+v*J+S*$+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+_*(+e*l*m-e*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+f*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],M=u*f*c-_*d*c+_*l*m-a*f*m-u*l*p+a*d*p,v=g*d*c-h*f*c-g*l*m+o*f*m+h*l*p-o*d*p,S=h*_*c-g*u*c+g*a*m-o*_*m-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*f-o*u*f,w=e*M+n*v+i*S+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=M*b,t[1]=(_*d*r-u*f*r-_*i*m+n*f*m+u*i*p-n*d*p)*b,t[2]=(a*f*r-_*l*r+_*i*c-n*f*c-a*i*p+n*l*p)*b,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*b,t[4]=v*b,t[5]=(h*f*r-g*d*r+g*i*m-e*f*m-h*i*p+e*d*p)*b,t[6]=(g*l*r-o*f*r-g*i*c+e*f*c+o*i*p-e*l*p)*b,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*m+e*l*m)*b,t[8]=S*b,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*b,t[12]=P*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*f+e*u*f)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*f-e*a*f)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,M=l*c,v=l*h,S=l*u,P=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*P,i[1]=(m+S)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(d+p))*w,i[6]=(f+M)*w,i[7]=0,i[8]=(g+v)*b,i[9]=(f-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ni.set(i[0],i[1],i[2]).length();const o=ni.set(i[4],i[5],i[6]).length(),a=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,h=1/o,u=1/a;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===fn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,m=(n+i)*h;let g,_;if(a===fn)g=(o+r)*u,_=-2*u;else if(a===Vs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new R,Xe=new ne,bh=new R(0,0,0),wh=new R(1,1,1),yn=new R,rs=new R,De=new R,ia=new ne,sa=new Yn;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sa.setFromEuler(this),this.setFromQuaternion(sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const ra=new R,ii=new Yn,ln=new ne,os=new R,Di=new R,Ph=new R,Ch=new Yn,oa=new R(1,0,0),aa=new R(0,1,0),la=new R(0,0,1),Lh={type:"added"},Ih={type:"removed"};class ce extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new R,e=new Ln,n=new Yn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ht}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(aa,t)}rotateZ(t){return this.rotateOnAxis(la,t)}translateOnAxis(t,e){return ra.copy(t).applyQuaternion(this.quaternion),this.position.add(ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(aa,t)}translateZ(t){return this.translateOnAxis(la,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Di,os,this.up):ln.lookAt(os,Di,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(ln),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ih)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,Ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new R(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new R,cn=new R,gr=new R,hn=new R,si=new R,ri=new R,ca=new R,_r=new R,vr=new R,xr=new R;let as=!1;class ke{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),cn.subVectors(n,e),gr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(cn),l=Ye.dot(gr),c=cn.dot(cn),h=cn.dot(gr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,n,i,r,o,a,l){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),cn.subVectors(t,e),Ye.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ye.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;si.subVectors(i,n),ri.subVectors(r,n),_r.subVectors(t,n);const l=si.dot(_r),c=ri.dot(_r);if(l<=0&&c<=0)return e.copy(n);vr.subVectors(t,i);const h=si.dot(vr),u=ri.dot(vr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(si,o);xr.subVectors(t,r);const m=si.dot(xr),g=ri.dot(xr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ri,a);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return ca.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(ca,a);const p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(si,o).addScaledVector(ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Sr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=no(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sr(o,r,t+1/3),this.g=Sr(o,r,t),this.b=Sr(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Zt.fromWorkingColorSpace(ye.copy(this),t),Math.round(ve(ye.r*255,0,255))*65536+Math.round(ve(ye.g*255,0,255))*256+Math.round(ve(ye.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=_e){Zt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(ls);const n=Fi(Mn.h,ls.h,e),i=Fi(Mn.s,ls.s,e),r=Fi(Mn.l,ls.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Xt;Xt.NAMES=Pl;let Dh=0;class Zn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Si,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kr,this.blendDst=Vr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class je extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new R,cs=new ht;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class Cl extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ll extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nh=0;const Ue=new ne,yr=new ce,oi=new R,Ne=new nn,Ni=new nn,me=new R;class Ee extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Ll:Cl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Ne.min,Ni.min),Ne.expandByPoint(me),me.addVectors(Ne.max,Ni.max),Ne.expandByPoint(me)):(Ne.expandByPoint(Ni.min),Ne.expandByPoint(Ni.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)me.fromBufferAttribute(a,c),l&&(oi.fromBufferAttribute(t,c),me.add(oi)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new R,h[A]=new R;const u=new R,d=new R,m=new R,g=new ht,_=new ht,f=new ht,p=new R,M=new R;function v(A,B,H){u.fromArray(i,A*3),d.fromArray(i,B*3),m.fromArray(i,H*3),g.fromArray(o,A*2),_.fromArray(o,B*2),f.fromArray(o,H*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);const J=1/(_.x*f.y-f.x*_.y);isFinite(J)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(J),M.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(J),c[A].add(p),c[B].add(p),c[H].add(p),h[A].add(M),h[B].add(M),h[H].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,B=S.length;A<B;++A){const H=S[A],J=H.start,L=H.count;for(let U=J,V=J+L;U<V;U+=3)v(n[U+0],n[U+1],n[U+2])}const P=new R,w=new R,b=new R,F=new R;function y(A){b.fromArray(r,A*3),F.copy(b);const B=c[A];P.copy(B),P.sub(b.multiplyScalar(b.dot(B))).normalize(),w.crossVectors(F,B);const J=w.dot(h[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=J}for(let A=0,B=S.length;A<B;++A){const H=S[A],J=H.start,L=H.count;for(let U=J,V=J+L;U<V;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new ne,Un=new io,hs=new _n,ua=new R,ai=new R,li=new R,ci=new R,Mr=new R,us=new R,ds=new ht,fs=new ht,ps=new ht,da=new R,fa=new R,pa=new R,ms=new R,gs=new R;class Yt extends ce{constructor(t=new Ee,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Mr.fromBufferAttribute(u,t),o?us.addScaledVector(Mr,h):us.addScaledVector(Mr.sub(e),h))}e.add(us)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(hs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(hs,ua)===null||Un.origin.distanceToSquared(ua)>(t.far-t.near)**2))&&(ha.copy(r).invert(),Un.copy(t.ray).applyMatrix4(ha),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,P=v;S<P;S+=3){const w=a.getX(S),b=a.getX(S+1),F=a.getX(S+2);i=_s(this,p,t,n,c,h,u,w,b,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);i=_s(this,o,t,n,c,h,u,M,v,S),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,P=v;S<P;S+=3){const w=S,b=S+1,F=S+2;i=_s(this,p,t,n,c,h,u,w,b,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=f,v=f+1,S=f+2;i=_s(this,o,t,n,c,h,u,M,v,S),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Oh(s,t,e,n,i,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Cn,a),l===null)return null;gs.copy(a),gs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(gs);return c<e.near||c>e.far?null:{distance:c,point:gs.clone(),object:s}}function _s(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ai),s.getVertexPosition(l,li),s.getVertexPosition(c,ci);const h=Oh(s,t,e,n,ai,li,ci,ms);if(h){i&&(ds.fromBufferAttribute(i,a),fs.fromBufferAttribute(i,l),ps.fromBufferAttribute(i,c),h.uv=ke.getInterpolation(ms,ai,li,ci,ds,fs,ps,new ht)),r&&(ds.fromBufferAttribute(r,a),fs.fromBufferAttribute(r,l),ps.fromBufferAttribute(r,c),h.uv1=ke.getInterpolation(ms,ai,li,ci,ds,fs,ps,new ht),h.uv2=h.uv1),o&&(da.fromBufferAttribute(o,a),fa.fromBufferAttribute(o,l),pa.fromBufferAttribute(o,c),h.normal=ke.getInterpolation(ms,ai,li,ci,da,fa,pa,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};ke.getNormal(ai,li,ci,u.normal),h.face=u}return h}class Je extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,f,p,M,v,S,P,w,b,F,y){const A=S/b,B=P/F,H=S/2,J=P/2,L=w/2,U=b+1,V=F+1;let $=0,q=0;const K=new R;for(let j=0;j<V;j++){const it=j*B-J;for(let rt=0;rt<U;rt++){const W=rt*A-H;K[_]=W*M,K[f]=it*v,K[p]=L,c.push(K.x,K.y,K.z),K[_]=0,K[f]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(rt/b),u.push(1-j/F),$+=1}}for(let j=0;j<F;j++)for(let it=0;it<b;it++){const rt=d+it+U*j,W=d+it+U*(j+1),Z=d+(it+1)+U*(j+1),ft=d+(it+1)+U*j;l.push(rt,W,ft),l.push(W,Z,ft),q+=6}a.addGroup(m,q,y),m+=q,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=bi(s[e]);for(const i in n)t[i]=n[i]}return t}function Uh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Il(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}const Bh={clone:bi,merge:we};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends Dl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,ui=1;class kh extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(hi,ui,t,e);i.layers=this.layers,this.add(i);const r=new Ve(hi,ui,t,e);r.layers=this.layers,this.add(r);const o=new Ve(hi,ui,t,e);o.layers=this.layers,this.add(o);const a=new Ve(hi,ui,t,e);a.layers=this.layers,this.add(a);const l=new Ve(hi,ui,t,e);l.layers=this.layers,this.add(l);const c=new Ve(hi,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Le{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wn?_e:Ge),this.texture=new Nl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Je(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:wn});r.uniforms.tEquirect.value=e;const o=new Yt(i,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=ze),new kh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Er=new R,Gh=new R,Hh=new Ht;class Fn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Er.subVectors(n,e).cross(Gh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hh.getNormalMatrix(t),i=this.coplanarPoint(Er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new _n,vs=new R;class so{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,f-m,S-p).normalize(),n[1].setComponents(l+r,d+c,f+m,S+p).normalize(),n[2].setComponents(l+o,d+h,f+g,S+M).normalize(),n[3].setComponents(l-o,d-h,f-g,S-M).normalize(),n[4].setComponents(l-a,d-u,f-_,S-v).normalize(),e===fn)n[5].setComponents(l+a,d+u,f+_,S+v).normalize();else if(e===Vs)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vs.x=i.normal.x>0?t.max.x:t.min.x,vs.y=i.normal.y>0?t.max.y:t.min.y,vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ol(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class $s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-M,0),_.push(0,0,1),f.push(v/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,S=M+c*(p+1),P=M+1+c*(p+1),w=M+1+c*p;m.push(v,S,w),m.push(S,P,w)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Xh,alphahash_pars_fragment:Yh,alphamap_fragment:qh,alphamap_pars_fragment:Kh,alphatest_fragment:$h,alphatest_pars_fragment:Zh,aomap_fragment:jh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:ou,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Su,colorspace_fragment:yu,colorspace_pars_fragment:Mu,envmap_fragment:Eu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Fu,envmap_vertex:wu,fog_vertex:Ru,fog_pars_vertex:Pu,fog_fragment:Cu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Iu,lightmap_fragment:Du,lightmap_pars_fragment:Nu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Uu,lights_pars_begin:Bu,lights_toon_fragment:zu,lights_toon_pars_fragment:ku,lights_phong_fragment:Vu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:Yu,lights_fragment_end:qu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:ju,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:td,map_particle_pars_fragment:ed,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:od,morphtarget_vertex:ad,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:dd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,opaque_fragment:vd,packing:xd,premultiplied_alpha_fragment:Sd,project_vertex:yd,dithering_fragment:Md,dithering_pars_fragment:Ed,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Cd,skinning_pars_vertex:Ld,skinning_vertex:Id,skinnormal_vertex:Dd,specularmap_fragment:Nd,specularmap_pars_fragment:Od,tonemapping_fragment:Ud,tonemapping_pars_fragment:Bd,transmission_fragment:Fd,transmission_pars_fragment:zd,uv_pars_fragment:kd,uv_pars_vertex:Vd,uv_vertex:Gd,worldpos_vertex:Hd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:Yd,backgroundCube_frag:qd,cube_vert:Kd,cube_frag:$d,depth_vert:Zd,depth_frag:jd,distanceRGBA_vert:Jd,distanceRGBA_frag:Qd,equirect_vert:tf,equirect_frag:ef,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:of,meshlambert_vert:af,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:vf,points_vert:xf,points_frag:Sf,shadow_vert:yf,shadow_frag:Mf,sprite_vert:Ef,sprite_frag:Tf},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},en={basic:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:we([lt.common,lt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:we([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};en.physical={uniforms:we([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const xs={r:0,b:0,g:0};function Af(s,t,e,n,i,r,o){const a=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),M=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qs)?(h===void 0&&(h=new Yt(new Je(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:bi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Yt(new $s(2,2),new qn({name:"BackgroundMaterial",uniforms:bi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(xs,Il(s)),n.buffers.color.setClear(xs.r,xs.g,xs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:g}}function bf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,h=!1;function u(L,U,V,$,q){let K=!1;if(o){const j=_($,V,U);c!==j&&(c=j,m(c.object)),K=p(L,$,V,q),K&&M(L,$,V,q)}else{const j=U.wireframe===!0;(c.geometry!==$.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=V.id,c.wireframe=j,K=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,F(L,U,V,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,V){const $=V.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let j=K[$];return j===void 0&&(j=f(d()),K[$]=j),j}function f(L){const U=[],V=[],$=[];for(let q=0;q<i;q++)U[q]=0,V[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,U,V,$){const q=c.attributes,K=U.attributes;let j=0;const it=V.getAttributes();for(const rt in it)if(it[rt].location>=0){const Z=q[rt];let ft=K[rt];if(ft===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),Z===void 0||Z.attribute!==ft||ft&&Z.data!==ft.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function M(L,U,V,$){const q={},K=U.attributes;let j=0;const it=V.getAttributes();for(const rt in it)if(it[rt].location>=0){let Z=K[rt];Z===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ft={};ft.attribute=Z,Z&&Z.data&&(ft.data=Z.data),q[rt]=ft,j++}c.attributes=q,c.attributesNum=j,c.index=$}function v(){const L=c.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function S(L){P(L,0)}function P(L,U){const V=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;V[L]=1,$[L]===0&&(s.enableVertexAttribArray(L),$[L]=1),q[L]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function w(){const L=c.newAttributes,U=c.enabledAttributes;for(let V=0,$=U.length;V<$;V++)U[V]!==L[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function b(L,U,V,$,q,K,j){j===!0?s.vertexAttribIPointer(L,U,V,q,K):s.vertexAttribPointer(L,U,V,$,q,K)}function F(L,U,V,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=$.attributes,K=V.getAttributes(),j=U.defaultAttributeValues;for(const it in K){const rt=K[it];if(rt.location>=0){let W=q[it];if(W===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const Z=W.normalized,ft=W.itemSize,St=e.get(W);if(St===void 0)continue;const gt=St.buffer,At=St.type,Pt=St.bytesPerElement,xt=n.isWebGL2===!0&&(At===s.INT||At===s.UNSIGNED_INT||W.gpuType===fl);if(W.isInterleavedBufferAttribute){const Ct=W.data,C=Ct.stride,ot=W.offset;if(Ct.isInstancedInterleavedBuffer){for(let Y=0;Y<rt.locationSize;Y++)P(rt.location+Y,Ct.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Y=0;Y<rt.locationSize;Y++)S(rt.location+Y);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Y=0;Y<rt.locationSize;Y++)b(rt.location+Y,ft/rt.locationSize,At,Z,C*Pt,(ot+ft/rt.locationSize*Y)*Pt,xt)}else{if(W.isInstancedBufferAttribute){for(let Ct=0;Ct<rt.locationSize;Ct++)P(rt.location+Ct,W.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)S(rt.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ct=0;Ct<rt.locationSize;Ct++)b(rt.location+Ct,ft/rt.locationSize,At,Z,ft*Pt,ft/rt.locationSize*Ct*Pt,xt)}}else if(j!==void 0){const Z=j[it];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(rt.location,Z);break;case 3:s.vertexAttrib3fv(rt.location,Z);break;case 4:s.vertexAttrib4fv(rt.location,Z);break;default:s.vertexAttrib1fv(rt.location,Z)}}}}w()}function y(){H();for(const L in a){const U=a[L];for(const V in U){const $=U[V];for(const q in $)g($[q].object),delete $[q];delete U[V]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const V in U){const $=U[V];for(const q in $)g($[q].object),delete $[q];delete U[V]}delete a[L.id]}function B(L){for(const U in a){const V=a[U];if(V[L.id]===void 0)continue;const $=V[L.id];for(const q in $)g($[q].object),delete $[q];delete V[L.id]}}function H(){J(),h=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:J,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function wf(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Rf(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),P=v&&S,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:w}}function Pf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Fn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const M=r?0:n,v=M*4;let S=p.clippingState||null;l.value=S,S=h(g,d,v,m);for(let P=0;P!==v;++P)S[P]=e[P];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Cf(s){let t=new WeakMap;function e(o,a){return a===Hr?o.mapping=Ei:a===Wr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hr||a===Wr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vh(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ul extends Dl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,ma=[.125,.215,.35,.446,.526,.582],Vn=20,Tr=new Ul,ga=new Xt;let Ar=null,br=0,wr=0;const zn=(1+Math.sqrt(5))/2,di=1/zn,_a=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,zn,di),new R(0,zn,-di),new R(di,0,zn),new R(-di,0,zn),new R(zn,di,0),new R(-zn,di,0)];class va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ar,br,wr),t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ar=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Yi,format:Ze,colorSpace:gn,depthBuffer:!1},i=xa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(r)),this._blurMaterial=If(r,t,e)}return i}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Tr)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ga),h.toneMapping=mn,h.autoClear=!1;const m=new je({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new Yt(new Je,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(ga),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ss(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_a[(i-1)%_a.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Vn;f>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vn}`);const p=[];let M=0;for(let b=0;b<Vn;++b){const F=b/_,y=Math.exp(-F*F/2);p.push(y),b===0?M+=y:b<f&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],P=3*S*(i>v-_i?i-v+_i:0),w=4*(this._cubeSize-S);Ss(e,P,w,3*S,2*S),l.setRenderTarget(e),l.render(u,Tr)}}function Lf(s){const t=[],e=[],n=[];let i=s;const r=s-_i+1+ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-_i?l=ma[o-s+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,M=new Float32Array(_*g*m),v=new Float32Array(f*g*m),S=new Float32Array(p*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,F=w>2?0:-1,y=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];M.set(y,_*g*w),v.set(d,f*g*w);const A=[w,w,w,w,w,w];S.set(A,p*g*w)}const P=new Ee;P.setAttribute("position",new He(M,_)),P.setAttribute("uv",new He(v,f)),P.setAttribute("faceIndex",new He(S,p)),t.push(P),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xa(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function If(s,t,e){const n=new Float32Array(Vn),i=new R(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Sa(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ya(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hr||l===Wr,h=l===Ei||l===Ti;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new va(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new va(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Of(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let v=0,S=M.length;v<S;v+=3){const P=M[v+0],w=M[v+1],b=M[v+2];d.push(P,w,w,b,b,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const P=v+0,w=v+1,b=v+2;d.push(P,w,w,b,b,P)}}else return;const f=new(Tl(d)?Ll:Cl)(d,1);f.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Uf(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Bf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ff(s,t){return s[0]-t[0]}function zf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function kf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=r.get(h);if(f===void 0||f.count!==_){let U=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),P===!0&&(y=3);let A=h.attributes.position.count*y,B=1;A>t.maxTextureSize&&(B=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const H=new Float32Array(A*B*4*_),J=new wl(H,A,B,_);J.type=An,J.needsUpdate=!0;const L=y*4;for(let V=0;V<_;V++){const $=w[V],q=b[V],K=F[V],j=A*B*4*V;for(let it=0;it<$.count;it++){const rt=it*L;v===!0&&(o.fromBufferAttribute($,it),H[j+rt+0]=o.x,H[j+rt+1]=o.y,H[j+rt+2]=o.z,H[j+rt+3]=0),S===!0&&(o.fromBufferAttribute(q,it),H[j+rt+4]=o.x,H[j+rt+5]=o.y,H[j+rt+6]=o.z,H[j+rt+7]=0),P===!0&&(o.fromBufferAttribute(K,it),H[j+rt+8]=o.x,H[j+rt+9]=o.y,H[j+rt+10]=o.z,H[j+rt+11]=K.itemSize===4?o.w:1)}}f={count:_,texture:J,size:new ht(A,B)},r.set(h,f),h.addEventListener("dispose",U)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const P=_[S];P[0]=S,P[1]=d[S]}_.sort(zf);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ff);const f=h.morphAttributes.position,p=h.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const P=a[S],w=P[0],b=P[1];w!==Number.MAX_SAFE_INTEGER&&b?(f&&h.getAttribute("morphTarget"+S)!==f[w]&&h.setAttribute("morphTarget"+S,f[w]),p&&h.getAttribute("morphNormal"+S)!==p[w]&&h.setAttribute("morphNormal"+S,p[w]),i[S]=b,M+=b):(f&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),p&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bl extends Le{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=Tn),n===void 0&&h===Ai&&(n=Gn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fl=new Le,zl=new Bl(1,1);zl.compareFunction=Ml;const kl=new wl,Vl=new Th,Gl=new Nl,Ma=[],Ea=[],Ta=new Float32Array(16),Aa=new Float32Array(9),ba=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ma[i];if(r===void 0&&(r=new Float32Array(i),Ma[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zs(s,t){let e=Ea[t];e===void 0&&(e=new Int32Array(t),Ea[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function Yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ba.set(n),s.uniformMatrix2fv(this.addr,!1,ba),de(e,n)}}function qf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Aa.set(n),s.uniformMatrix3fv(this.addr,!1,Aa),de(e,n)}}function Kf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ta.set(n),s.uniformMatrix4fv(this.addr,!1,Ta),de(e,n)}}function $f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function ip(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?zl:Fl;e.setTexture2D(t||r,i)}function sp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vl,i)}function rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gl,i)}function op(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kl,i)}function ap(s){switch(s){case 5126:return Gf;case 35664:return Hf;case 35665:return Wf;case 35666:return Xf;case 35674:return Yf;case 35675:return qf;case 35676:return Kf;case 5124:case 35670:return $f;case 35667:case 35671:return Zf;case 35668:case 35672:return jf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return op}}function lp(s,t){s.uniform1fv(this.addr,t)}function cp(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function hp(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function up(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function dp(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fp(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pp(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function mp(s,t){s.uniform1iv(this.addr,t)}function gp(s,t){s.uniform2iv(this.addr,t)}function _p(s,t){s.uniform3iv(this.addr,t)}function vp(s,t){s.uniform4iv(this.addr,t)}function xp(s,t){s.uniform1uiv(this.addr,t)}function Sp(s,t){s.uniform2uiv(this.addr,t)}function yp(s,t){s.uniform3uiv(this.addr,t)}function Mp(s,t){s.uniform4uiv(this.addr,t)}function Ep(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fl,r[o])}function Tp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vl,r[o])}function Ap(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gl,r[o])}function bp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||kl,r[o])}function wp(s){switch(s){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Sp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return bp}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wp(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function wa(s,t){s.seq.push(t),s.map[t.id]=t}function Lp(s,t,e){const n=s.name,i=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),o=Rr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){wa(e,c===void 0?new Rp(a,s,t):new Pp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Cp(a),wa(e,u)),e=u}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Lp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ra(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ip=37297;let Dp=0;function Np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Op(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let n;switch(t===e?n="":t===ks&&e===zs?n="LinearDisplayP3ToLinearSRGB":t===zs&&e===ks&&(n="LinearSRGBToLinearDisplayP3"),s){case gn:case Ks:return[n,"LinearTransferOETF"];case _e:case eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Np(s.getShaderSource(t),o)}else return i}function Up(s,t){const e=Op(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bp(s,t){let e;switch(t){case Oc:e="Linear";break;case Uc:e="Reinhard";break;case Bc:e="OptimizedCineon";break;case Gr:e="ACESFilmic";break;case zc:e="AgX";break;case Fc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function kp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function vi(s){return s!==""}function Ca(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function La(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(s){return s.replace(Gp,Wp)}const Hp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wp(s,t){let e=Ft[t];if(e===void 0){const n=Hp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kr(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(s){return s.replace(Xp,Yp)}function Yp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Da(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Zp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Dc:t="ENVMAP_BLENDING_MIX";break;case Nc:t="ENVMAP_BLENDING_ADD";break}return t}function jp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qp(e),c=Kp(e),h=$p(e),u=Zp(e),d=jp(e),m=e.isWebGL2?"":Fp(e),g=zp(e),_=kp(r),f=i.createProgram();let p,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),p.length>0&&(p+=`
`),M=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),M.length>0&&(M+=`
`)):(p=[Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),M=[m,Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==mn?Bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Up("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vi).join(`
`)),o=Kr(o),o=Ca(o,e),o=La(o,e),a=Kr(a),a=Ca(a,e),a=La(a,e),o=Ia(o),a=Ia(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+p+o,P=v+M+a,w=Ra(i,i.VERTEX_SHADER,S),b=Ra(i,i.FRAGMENT_SHADER,P);i.attachShader(f,w),i.attachShader(f,b),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function F(H){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(b).trim();let V=!0,$=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,w,b);else{const q=Pa(i,w,"vertex"),K=Pa(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+K)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||U==="")&&($=!1);$&&(H.diagnostics={runnable:V,programLog:J,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:M}})}i.deleteShader(w),i.deleteShader(b),y=new Os(i,f),A=Vp(i,f)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(f,Ip)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=b,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new em(t),e.set(t,n)),n}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function nm(s,t,e,n,i,r,o){const a=new Rl,l=new tm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function f(y,A,B,H,J){const L=H.fog,U=J.geometry,V=y.isMeshStandardMaterial?H.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),q=$&&$.mapping===qs?$.image.height:null,K=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=j!==void 0?j.length:0;let rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let W,Z,ft,St;if(K){const Te=en[K];W=Te.vertexShader,Z=Te.fragmentShader}else W=y.vertexShader,Z=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const gt=s.getRenderTarget(),At=J.isInstancedMesh===!0,Pt=J.isBatchedMesh===!0,xt=!!y.map,Ct=!!y.matcap,C=!!$,ot=!!y.aoMap,Y=!!y.lightMap,st=!!y.bumpMap,X=!!y.normalMap,Et=!!y.displacementMap,pt=!!y.emissiveMap,E=!!y.metalnessMap,x=!!y.roughnessMap,O=y.anisotropy>0,nt=y.clearcoat>0,tt=y.iridescence>0,Q=y.sheen>0,yt=y.transmission>0,ct=O&&!!y.anisotropyMap,_t=nt&&!!y.clearcoatMap,bt=nt&&!!y.clearcoatNormalMap,Ot=nt&&!!y.clearcoatRoughnessMap,et=tt&&!!y.iridescenceMap,qt=tt&&!!y.iridescenceThicknessMap,Wt=Q&&!!y.sheenColorMap,Dt=Q&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,vt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,$t=yt&&!!y.transmissionMap,oe=yt&&!!y.thicknessMap,Vt=!!y.gradientMap,at=!!y.alphaMap,I=y.alphaTest>0,ut=!!y.alphaHash,dt=!!y.extensions,Lt=!!U.attributes.uv1,wt=!!U.attributes.uv2,jt=!!U.attributes.uv3;let Jt=mn;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Jt=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Z,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pt,instancing:At,instancingColor:At&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:gn,map:xt,matcap:Ct,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:Y,bumpMap:st,normalMap:X,displacementMap:d&&Et,emissiveMap:pt,normalMapObjectSpace:X&&y.normalMapType===jc,normalMapTangentSpace:X&&y.normalMapType===yl,metalnessMap:E,roughnessMap:x,anisotropy:O,anisotropyMap:ct,clearcoat:nt,clearcoatMap:_t,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ot,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:qt,sheen:Q,sheenColorMap:Wt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:vt,specularIntensityMap:Bt,transmission:yt,transmissionMap:$t,thicknessMap:oe,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===Si,alphaMap:at,alphaTest:I,alphaHash:ut,combine:y.combine,mapUv:xt&&_(y.map.channel),aoMapUv:ot&&_(y.aoMap.channel),lightMapUv:Y&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:Et&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Tt&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:Bt&&_(y.specularIntensityMap.channel),transmissionMapUv:$t&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(X||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:wt,vertexUv3s:jt,pointsUvs:J.isPoints===!0&&!!U.attributes.uv&&(xt||at),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:dt&&y.extensions.derivatives===!0,extensionFragDepth:dt&&y.extensions.fragDepth===!0,extensionDrawBuffers:dt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)A.push(B),A.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(M(A,y),v(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function M(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const A=g[y.type];let B;if(A){const H=en[A];B=Bh.clone(H.uniforms)}else B=y.uniforms;return B}function P(y,A){let B;for(let H=0,J=c.length;H<J;H++){const L=c[H];if(L.cacheKey===A){B=L,++B.usedTimes;break}}return B===void 0&&(B=new Jp(s,A,y,r),c.push(B)),B}function w(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:F}}function im(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Na(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Oa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,f){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||sm),n.length>1&&n.sort(d||Na),i.length>1&&i.sort(d||Na)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function rm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Oa,s.set(n,[o])):i>=r.length?(o=new Oa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Xt};break;case"SpotLight":e={position:new R,direction:new R,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lm=0;function cm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hm(s,t){const e=new om,n=am(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new ne,a=new ne;function l(h,u){let d=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,f=0,p=0,M=0,v=0,S=0,P=0,w=0,b=0,F=0,y=0;h.sort(cm);const A=u===!0?Math.PI:1;for(let H=0,J=h.length;H<J;H++){const L=h[H],U=L.color,V=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*V*A,m+=U.g*V*A,g+=U.b*V*A;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],V);y++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const j=L.shadow,it=n.get(L);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=K,_++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(U).multiplyScalar(V*A),K.distance=$,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[p]=K;const j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&F++),i.spotLightMatrix[p]=j.matrix,L.castShadow){const it=n.get(L);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[p]=it,i.spotShadowMap[p]=q,w++}p++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(U).multiplyScalar(V),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=K,M++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*A),K.distance=L.distance,K.decay=L.decay,L.castShadow){const j=L.shadow,it=n.get(L);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=q,i.pointShadowMatrix[f]=L.shadow.matrix,P++}i.point[f]=K,f++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(V*A),K.groundColor.copy(L.groundColor).multiplyScalar(V*A),i.hemi[v]=K,v++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==f||B.spotLength!==p||B.rectAreaLength!==M||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==P||B.numSpotShadows!==w||B.numSpotMaps!==b||B.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=y,B.directionalLength=_,B.pointLength=f,B.spotLength=p,B.rectAreaLength=M,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=P,B.numSpotShadows=w,B.numSpotMaps=b,B.numLightProbes=y,i.version=lm++)}function c(h,u){let d=0,m=0,g=0,_=0,f=0;const p=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const S=h[M];if(S.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),d++}else if(S.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const P=i.hemi[f];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Ua(s,t){const e=new hm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function um(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Ua(s,t),e.set(r,[l])):o>=a.length?(l=new Ua(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class dm extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gm(s,t,e){let n=new so;const i=new ht,r=new ht,o=new ge,a=new dm({depthPacking:Zc}),l=new fm,c={},h=e.maxTextureSize,u={[Cn]:Ce,[Ce]:Cn,[Ke]:Ke},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let p=this.type;this.render=function(w,b,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),H=s.state;H.setBlending(wn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const J=p!==dn&&this.type===dn,L=p===dn&&this.type!==dn;for(let U=0,V=w.length;U<V;U++){const $=w[U],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const K=q.getFrameExtents();if(i.multiply(K),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,q.mapSize.y=r.y)),q.map===null||J===!0||L===!0){const it=this.type!==dn?{minFilter:Me,magFilter:Me}:{};q.map!==null&&q.map.dispose(),q.map=new Xn(i.x,i.y,it),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const j=q.getViewportCount();for(let it=0;it<j;it++){const rt=q.getViewport(it);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),H.viewport(o),q.updateMatrices($,it),n=q.getFrustum(),S(b,F,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===dn&&M(q,F),q.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(y,A,B)};function M(w,b){const F=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,F,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,F,m,_,null)}function v(w,b,F,y){let A=null;const B=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)A=B;else if(A=F.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=A.uuid,J=b.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let U=L[J];U===void 0&&(U=A.clone(),L[J]=U,b.addEventListener("dispose",P)),A=U}if(A.visible=b.visible,A.wireframe=b.wireframe,y===dn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const H=s.properties.get(A);H.light=F}return A}function S(w,b,F,y,A){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===dn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const J=t.update(w),L=w.material;if(Array.isArray(L)){const U=J.groups;for(let V=0,$=U.length;V<$;V++){const q=U[V],K=L[q.materialIndex];if(K&&K.visible){const j=v(w,K,y,A);w.onBeforeShadow(s,w,b,F,J,j,q),s.renderBufferDirect(F,null,J,j,w,q),w.onAfterShadow(s,w,b,F,J,j,q)}}}else if(L.visible){const U=v(w,L,y,A);w.onBeforeShadow(s,w,b,F,J,U,null),s.renderBufferDirect(F,null,J,U,w,null),w.onAfterShadow(s,w,b,F,J,U,null)}}const H=w.children;for(let J=0,L=H.length;J<L;J++)S(H[J],b,F,y,A)}function P(w){w.target.removeEventListener("dispose",P);for(const F in c){const y=c[F],A=w.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function _m(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ut=new ge;let dt=null;const Lt=new ge(0,0,0,0);return{setMask:function(wt){dt!==wt&&!I&&(s.colorMask(wt,wt,wt,wt),dt=wt)},setLocked:function(wt){I=wt},setClear:function(wt,jt,Jt,fe,Te){Te===!0&&(wt*=fe,jt*=fe,Jt*=fe),ut.set(wt,jt,Jt,fe),Lt.equals(ut)===!1&&(s.clearColor(wt,jt,Jt,fe),Lt.copy(ut))},reset:function(){I=!1,dt=null,Lt.set(-1,0,0,0)}}}function r(){let I=!1,ut=null,dt=null,Lt=null;return{setTest:function(wt){wt?Pt(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(wt){ut!==wt&&!I&&(s.depthMask(wt),ut=wt)},setFunc:function(wt){if(dt!==wt){switch(wt){case bc:s.depthFunc(s.NEVER);break;case wc:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Pc:s.depthFunc(s.EQUAL);break;case Cc:s.depthFunc(s.GEQUAL);break;case Lc:s.depthFunc(s.GREATER);break;case Ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=wt}},setLocked:function(wt){I=wt},setClear:function(wt){Lt!==wt&&(s.clearDepth(wt),Lt=wt)},reset:function(){I=!1,ut=null,dt=null,Lt=null}}}function o(){let I=!1,ut=null,dt=null,Lt=null,wt=null,jt=null,Jt=null,fe=null,Te=null;return{setTest:function(Qt){I||(Qt?Pt(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!I&&(s.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,Ae,Qe){(dt!==Qt||Lt!==Ae||wt!==Qe)&&(s.stencilFunc(Qt,Ae,Qe),dt=Qt,Lt=Ae,wt=Qe)},setOp:function(Qt,Ae,Qe){(jt!==Qt||Jt!==Ae||fe!==Qe)&&(s.stencilOp(Qt,Ae,Qe),jt=Qt,Jt=Ae,fe=Qe)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Te!==Qt&&(s.clearStencil(Qt),Te=Qt)},reset:function(){I=!1,ut=null,dt=null,Lt=null,wt=null,jt=null,Jt=null,fe=null,Te=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,M=null,v=null,S=null,P=null,w=null,b=null,F=null,y=new Xt(0,0,0),A=0,B=!1,H=null,J=null,L=null,U=null,V=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=K>=2);let it=null,rt={};const W=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ft=new ge().fromArray(W),St=new ge().fromArray(Z);function gt(I,ut,dt,Lt){const wt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(I,jt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<dt;Jt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(ut+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return jt}const At={};At[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(s.DEPTH_TEST),l.setFunc(Bs),pt(!1),E(_o),Pt(s.CULL_FACE),X(wn);function Pt(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function xt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ct(I,ut){return m[I]!==ut?(s.bindFramebuffer(I,ut),m[I]=ut,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ut),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function C(I,ut){let dt=_,Lt=!1;if(I)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),I.isWebGLMultipleRenderTargets){const wt=I.texture;if(dt.length!==wt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Jt=wt.length;jt<Jt;jt++)dt[jt]=s.COLOR_ATTACHMENT0+jt;dt.length=wt.length,Lt=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const Y={[kn]:s.FUNC_ADD,[uc]:s.FUNC_SUBTRACT,[dc]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[yo]=s.MIN,Y[Mo]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Y[yo]=I.MIN_EXT,Y[Mo]=I.MAX_EXT)}const st={[fc]:s.ZERO,[pc]:s.ONE,[mc]:s.SRC_COLOR,[kr]:s.SRC_ALPHA,[yc]:s.SRC_ALPHA_SATURATE,[xc]:s.DST_COLOR,[_c]:s.DST_ALPHA,[gc]:s.ONE_MINUS_SRC_COLOR,[Vr]:s.ONE_MINUS_SRC_ALPHA,[Sc]:s.ONE_MINUS_DST_COLOR,[vc]:s.ONE_MINUS_DST_ALPHA,[Mc]:s.CONSTANT_COLOR,[Ec]:s.ONE_MINUS_CONSTANT_COLOR,[Tc]:s.CONSTANT_ALPHA,[Ac]:s.ONE_MINUS_CONSTANT_ALPHA};function X(I,ut,dt,Lt,wt,jt,Jt,fe,Te,Qt){if(I===wn){p===!0&&(xt(s.BLEND),p=!1);return}if(p===!1&&(Pt(s.BLEND),p=!0),I!==hc){if(I!==M||Qt!==B){if((v!==kn||w!==kn)&&(s.blendEquation(s.FUNC_ADD),v=kn,w=kn),Qt)switch(I){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vo:s.blendFunc(s.ONE,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case So:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,P=null,b=null,F=null,y.set(0,0,0),A=0,M=I,B=Qt}return}wt=wt||ut,jt=jt||dt,Jt=Jt||Lt,(ut!==v||wt!==w)&&(s.blendEquationSeparate(Y[ut],Y[wt]),v=ut,w=wt),(dt!==S||Lt!==P||jt!==b||Jt!==F)&&(s.blendFuncSeparate(st[dt],st[Lt],st[jt],st[Jt]),S=dt,P=Lt,b=jt,F=Jt),(fe.equals(y)===!1||Te!==A)&&(s.blendColor(fe.r,fe.g,fe.b,Te),y.copy(fe),A=Te),M=I,B=!1}function Et(I,ut){I.side===Ke?xt(s.CULL_FACE):Pt(s.CULL_FACE);let dt=I.side===Ce;ut&&(dt=!dt),pt(dt),I.blending===Si&&I.transparent===!1?X(wn):X(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Lt=I.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(I){H!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),H=I)}function E(I){I!==oc?(Pt(s.CULL_FACE),I!==J&&(I===_o?s.cullFace(s.BACK):I===ac?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),J=I}function x(I){I!==L&&(q&&s.lineWidth(I),L=I)}function O(I,ut,dt){I?(Pt(s.POLYGON_OFFSET_FILL),(U!==ut||V!==dt)&&(s.polygonOffset(ut,dt),U=ut,V=dt)):xt(s.POLYGON_OFFSET_FILL)}function nt(I){I?Pt(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function tt(I){I===void 0&&(I=s.TEXTURE0+$-1),it!==I&&(s.activeTexture(I),it=I)}function Q(I,ut,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+$-1:dt=it);let Lt=rt[dt];Lt===void 0&&(Lt={type:void 0,texture:void 0},rt[dt]=Lt),(Lt.type!==I||Lt.texture!==ut)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(I,ut||At[I]),Lt.type=I,Lt.texture=ut)}function yt(){const I=rt[it];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ft.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function $t(I){St.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),St.copy(I))}function oe(I,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Lt=dt.get(I);Lt===void 0&&(Lt=s.getUniformBlockIndex(ut,I.name),dt.set(I,Lt))}function Vt(I,ut){const Lt=u.get(ut).get(I);h.get(ut)!==Lt&&(s.uniformBlockBinding(ut,Lt,I.__bindingPointIndex),h.set(ut,Lt))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,rt={},m={},g=new WeakMap,_=[],f=null,p=!1,M=null,v=null,S=null,P=null,w=null,b=null,F=null,y=new Xt(0,0,0),A=0,B=!1,H=null,J=null,L=null,U=null,V=null,ft.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:xt,bindFramebuffer:Ct,drawBuffers:C,useProgram:ot,setBlending:X,setMaterial:Et,setFlipSided:pt,setCullFace:E,setLineWidth:x,setPolygonOffset:O,setScissorTest:nt,activeTexture:tt,bindTexture:Q,unbindTexture:yt,compressedTexImage2D:ct,compressedTexImage3D:_t,texImage2D:Tt,texImage3D:vt,updateUBOMapping:oe,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:Dt,texSubImage2D:bt,texSubImage3D:Ot,compressedTexSubImage2D:et,compressedTexSubImage3D:qt,scissor:Bt,viewport:$t,reset:at}}function vm(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Hs("canvas")}function _(E,x,O,nt){let tt=1;if((E.width>nt||E.height>nt)&&(tt=nt/Math.max(E.width,E.height)),tt<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=x?Gs:Math.floor,yt=Q(tt*E.width),ct=Q(tt*E.height);u===void 0&&(u=g(yt,ct));const _t=O?g(yt,ct):u;return _t.width=yt,_t.height=ct,_t.getContext("2d").drawImage(E,0,0,yt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+yt+"x"+ct+")."),_t}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return qr(E.width)&&qr(E.height)}function p(E){return a?!1:E.wrapS!==$e||E.wrapT!==$e||E.minFilter!==Me&&E.minFilter!==ze}function M(E,x){return E.generateMipmaps&&x&&E.minFilter!==Me&&E.minFilter!==ze}function v(E){s.generateMipmap(E)}function S(E,x,O,nt,tt=!1){if(a===!1)return x;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=x;if(x===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8)),x===s.RGBA){const yt=tt?Fs:Zt.getTransfer(nt);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=yt===ee?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function P(E,x,O){return M(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Me&&E.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===Me||E===Eo||E===Ns?s.NEAREST:s.LINEAR}function b(E){const x=E.target;x.removeEventListener("dispose",b),y(x),x.isVideoTexture&&h.delete(x)}function F(E){const x=E.target;x.removeEventListener("dispose",F),B(x)}function y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,nt=d.get(O);if(nt){const tt=nt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(E),Object.keys(nt).length===0&&d.delete(O)}n.remove(E)}function A(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const O=E.source,nt=d.get(O);delete nt[x.__cacheKey],o.memory.textures--}function B(E){const x=E.texture,O=n.get(E),nt=n.get(x);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(O.__webglFramebuffer[tt]))for(let Q=0;Q<O.__webglFramebuffer[tt].length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[tt][Q]);else s.deleteFramebuffer(O.__webglFramebuffer[tt]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[tt])}else{if(Array.isArray(O.__webglFramebuffer))for(let tt=0;tt<O.__webglFramebuffer.length;tt++)s.deleteFramebuffer(O.__webglFramebuffer[tt]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let tt=0;tt<O.__webglColorRenderbuffer.length;tt++)O.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[tt]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let tt=0,Q=x.length;tt<Q;tt++){const yt=n.get(x[tt]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(x[tt])}n.remove(x),n.remove(E)}let H=0;function J(){H=0}function L(){const E=H;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),H+=1,E}function U(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){const O=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const nt=E.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,E,x);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function $(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){ft(O,E,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function q(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){ft(O,E,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function K(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){St(O,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const j={[Wi]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},it={[Me]:s.NEAREST,[Eo]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},rt={[Jc]:s.NEVER,[sh]:s.ALWAYS,[Qc]:s.LESS,[Ml]:s.LEQUAL,[th]:s.EQUAL,[ih]:s.GEQUAL,[eh]:s.GREATER,[nh]:s.NOTEQUAL};function W(E,x,O){if(O?(s.texParameteri(E,s.TEXTURE_WRAP_S,j[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,j[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,it[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,it[x.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==$e||x.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,w(x.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Me&&x.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Me||x.minFilter!==Ns&&x.minFilter!==Xi||x.type===An&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(E,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",b));const nt=x.source;let tt=d.get(nt);tt===void 0&&(tt={},d.set(nt,tt));const Q=U(x);if(Q!==E.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[Q].usedTimes++;const yt=tt[E.__cacheKey];yt!==void 0&&(tt[E.__cacheKey].usedTimes--,yt.usedTimes===0&&A(x)),E.__cacheKey=Q,E.__webglTexture=tt[Q].texture}return O}function ft(E,x,O){let nt=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=s.TEXTURE_3D);const tt=Z(E,x),Q=x.source;e.bindTexture(nt,E.__webglTexture,s.TEXTURE0+O);const yt=n.get(Q);if(Q.version!==yt.__version||tt===!0){e.activeTexture(s.TEXTURE0+O);const ct=Zt.getPrimaries(Zt.workingColorSpace),_t=x.colorSpace===Ge?null:Zt.getPrimaries(x.colorSpace),bt=x.colorSpace===Ge||ct===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ot=p(x)&&f(x.image)===!1;let et=_(x.image,Ot,!1,i.maxTextureSize);et=pt(x,et);const qt=f(et)||a,Wt=r.convert(x.format,x.colorSpace);let Dt=r.convert(x.type),Tt=S(x.internalFormat,Wt,Dt,x.colorSpace,x.isVideoTexture);W(nt,x,qt);let vt;const Bt=x.mipmaps,$t=a&&x.isVideoTexture!==!0&&Tt!==xl,oe=yt.__version===void 0||tt===!0,Vt=P(x,et,qt);if(x.isDepthTexture)Tt=s.DEPTH_COMPONENT,a?x.type===An?Tt=s.DEPTH_COMPONENT32F:x.type===Tn?Tt=s.DEPTH_COMPONENT24:x.type===Gn?Tt=s.DEPTH24_STENCIL8:Tt=s.DEPTH_COMPONENT16:x.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Hn&&Tt===s.DEPTH_COMPONENT&&x.type!==to&&x.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Tn,Dt=r.convert(x.type)),x.format===Ai&&Tt===s.DEPTH_COMPONENT&&(Tt=s.DEPTH_STENCIL,x.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Gn,Dt=r.convert(x.type))),oe&&($t?e.texStorage2D(s.TEXTURE_2D,1,Tt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Tt,et.width,et.height,0,Wt,Dt,null));else if(x.isDataTexture)if(Bt.length>0&&qt){$t&&oe&&e.texStorage2D(s.TEXTURE_2D,Vt,Tt,Bt[0].width,Bt[0].height);for(let at=0,I=Bt.length;at<I;at++)vt=Bt[at],$t?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Wt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,at,Tt,vt.width,vt.height,0,Wt,Dt,vt.data);x.generateMipmaps=!1}else $t?(oe&&e.texStorage2D(s.TEXTURE_2D,Vt,Tt,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,Wt,Dt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,et.width,et.height,0,Wt,Dt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Tt,Bt[0].width,Bt[0].height,et.depth);for(let at=0,I=Bt.length;at<I;at++)vt=Bt[at],x.format!==Ze?Wt!==null?$t?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,et.depth,Wt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Tt,vt.width,vt.height,et.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,et.depth,Wt,Dt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Tt,vt.width,vt.height,et.depth,0,Wt,Dt,vt.data)}else{$t&&oe&&e.texStorage2D(s.TEXTURE_2D,Vt,Tt,Bt[0].width,Bt[0].height);for(let at=0,I=Bt.length;at<I;at++)vt=Bt[at],x.format!==Ze?Wt!==null?$t?e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Wt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Wt,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,at,Tt,vt.width,vt.height,0,Wt,Dt,vt.data)}else if(x.isDataArrayTexture)$t?(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,Tt,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Wt,Dt,et.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,et.width,et.height,et.depth,0,Wt,Dt,et.data);else if(x.isData3DTexture)$t?(oe&&e.texStorage3D(s.TEXTURE_3D,Vt,Tt,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Wt,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,et.width,et.height,et.depth,0,Wt,Dt,et.data);else if(x.isFramebufferTexture){if(oe)if($t)e.texStorage2D(s.TEXTURE_2D,Vt,Tt,et.width,et.height);else{let at=et.width,I=et.height;for(let ut=0;ut<Vt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Tt,at,I,0,Wt,Dt,null),at>>=1,I>>=1}}else if(Bt.length>0&&qt){$t&&oe&&e.texStorage2D(s.TEXTURE_2D,Vt,Tt,Bt[0].width,Bt[0].height);for(let at=0,I=Bt.length;at<I;at++)vt=Bt[at],$t?e.texSubImage2D(s.TEXTURE_2D,at,0,0,Wt,Dt,vt):e.texImage2D(s.TEXTURE_2D,at,Tt,Wt,Dt,vt);x.generateMipmaps=!1}else $t?(oe&&e.texStorage2D(s.TEXTURE_2D,Vt,Tt,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Dt,et)):e.texImage2D(s.TEXTURE_2D,0,Tt,Wt,Dt,et);M(x,qt)&&v(nt),yt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function St(E,x,O){if(x.image.length!==6)return;const nt=Z(E,x),tt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const Q=n.get(tt);if(tt.version!==Q.__version||nt===!0){e.activeTexture(s.TEXTURE0+O);const yt=Zt.getPrimaries(Zt.workingColorSpace),ct=x.colorSpace===Ge?null:Zt.getPrimaries(x.colorSpace),_t=x.colorSpace===Ge||yt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!bt&&!Ot?et[at]=_(x.image[at],!1,!0,i.maxCubemapSize):et[at]=Ot?x.image[at].image:x.image[at],et[at]=pt(x,et[at]);const qt=et[0],Wt=f(qt)||a,Dt=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),vt=S(x.internalFormat,Dt,Tt,x.colorSpace),Bt=a&&x.isVideoTexture!==!0,$t=Q.__version===void 0||nt===!0;let oe=P(x,qt,Wt);W(s.TEXTURE_CUBE_MAP,x,Wt);let Vt;if(bt){Bt&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,vt,qt.width,qt.height);for(let at=0;at<6;at++){Vt=et[at].mipmaps;for(let I=0;I<Vt.length;I++){const ut=Vt[I];x.format!==Ze?Dt!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ut.width,ut.height,Dt,Tt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,vt,ut.width,ut.height,0,Dt,Tt,ut.data)}}}else{Vt=x.mipmaps,Bt&&$t&&(Vt.length>0&&oe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,vt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(Ot){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et[at].width,et[at].height,Dt,Tt,et[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,et[at].width,et[at].height,0,Dt,Tt,et[at].data);for(let I=0;I<Vt.length;I++){const dt=Vt[I].image[at].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,dt.width,dt.height,Dt,Tt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,vt,dt.width,dt.height,0,Dt,Tt,dt.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt,Tt,et[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,Dt,Tt,et[at]);for(let I=0;I<Vt.length;I++){const ut=Vt[I];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,Dt,Tt,ut.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,vt,Dt,Tt,ut.image[at])}}}M(x,Wt)&&v(s.TEXTURE_CUBE_MAP),Q.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function gt(E,x,O,nt,tt,Q){const yt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),_t=S(O.internalFormat,yt,ct,O.colorSpace);if(!n.get(x).__hasExternalTextures){const Ot=Math.max(1,x.width>>Q),et=Math.max(1,x.height>>Q);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,Q,_t,Ot,et,x.depth,0,yt,ct,null):e.texImage2D(tt,Q,_t,Ot,et,0,yt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,n.get(O).__webglTexture,0,st(x)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,n.get(O).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(E,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let nt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||X(x)){const tt=x.depthTexture;tt&&tt.isDepthTexture&&(tt.type===An?nt=s.DEPTH_COMPONENT32F:tt.type===Tn&&(nt=s.DEPTH_COMPONENT24));const Q=st(x);X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,nt,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,nt,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const nt=st(x);O&&X(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const nt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let tt=0;tt<nt.length;tt++){const Q=nt[tt],yt=r.convert(Q.format,Q.colorSpace),ct=r.convert(Q.type),_t=S(Q.internalFormat,yt,ct,Q.colorSpace),bt=st(x);O&&X(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,_t,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,_t,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,_t,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const nt=n.get(x.depthTexture).__webglTexture,tt=st(x);if(x.depthTexture.format===Hn)X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Ai)X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function xt(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]=s.createRenderbuffer(),At(x.__webglDepthbuffer[nt],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),At(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(E,x,O){const nt=n.get(E);x!==void 0&&gt(nt.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&xt(E)}function C(E){const x=E.texture,O=n.get(E),nt=n.get(x);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=x.version,o.memory.textures++);const tt=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,yt=f(E)||a;if(tt){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let _t=0;_t<x.mipmaps.length;_t++)O.__webglFramebuffer[ct][_t]=s.createFramebuffer()}else O.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)O.__webglFramebuffer[ct]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const ct=E.texture;for(let _t=0,bt=ct.length;_t<bt;_t++){const Ot=n.get(ct[_t]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&X(E)===!1){const ct=Q?x:[x];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const bt=ct[_t];O.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);const Ot=r.convert(bt.format,bt.colorSpace),et=r.convert(bt.type),qt=S(bt.internalFormat,Ot,et,bt.colorSpace,E.isXRRenderTarget===!0),Wt=st(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,qt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),At(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),W(s.TEXTURE_CUBE_MAP,x,yt);for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(O.__webglFramebuffer[ct][_t],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else gt(O.__webglFramebuffer[ct],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);M(x,yt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const ct=E.texture;for(let _t=0,bt=ct.length;_t<bt;_t++){const Ot=ct[_t],et=n.get(Ot);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),W(s.TEXTURE_2D,Ot,yt),gt(O.__webglFramebuffer,E,Ot,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),M(Ot,yt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),W(ct,x,yt),a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(O.__webglFramebuffer[_t],E,x,s.COLOR_ATTACHMENT0,ct,_t);else gt(O.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,ct,0);M(x,yt)&&v(ct),e.unbindTexture()}E.depthBuffer&&xt(E)}function ot(E){const x=f(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let nt=0,tt=O.length;nt<tt;nt++){const Q=O[nt];if(M(Q,x)){const yt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(Q).__webglTexture;e.bindTexture(yt,ct),v(yt),e.unbindTexture()}}}function Y(E){if(a&&E.samples>0&&X(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,nt=E.height;let tt=s.COLOR_BUFFER_BIT;const Q=[],yt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(E),_t=E.isWebGLMultipleRenderTargets===!0;if(_t)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){Q.push(s.COLOR_ATTACHMENT0+bt),E.depthBuffer&&Q.push(yt);const Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(E.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),_t){const et=n.get(x[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,O,nt,0,0,O,nt,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]);const Ot=n.get(x[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function st(E){return Math.min(i.maxSamples,E.samples)}function X(E){const x=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function pt(E,x){const O=E.colorSpace,nt=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Yr||O!==gn&&O!==Ge&&(Zt.getTransfer(O)===ee?a===!1?t.has("EXT_sRGB")===!0&&nt===Ze?(E.format=Yr,E.minFilter=ze,E.generateMipmaps=!1):x=Al.sRGBToLinear(x):(nt!==Ze||tt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ct,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=X}function xm(s,t,e){const n=e.isWebGL2;function i(r,o=Ge){let a;const l=Zt.getTransfer(o);if(r===Rn)return s.UNSIGNED_BYTE;if(r===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vc)return s.BYTE;if(r===Gc)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===fl)return s.INT;if(r===Tn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===Yi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hc)return s.ALPHA;if(r===Ze)return s.RGBA;if(r===Wc)return s.LUMINANCE;if(r===Xc)return s.LUMINANCE_ALPHA;if(r===Hn)return s.DEPTH_COMPONENT;if(r===Ai)return s.DEPTH_STENCIL;if(r===Yr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Yc)return s.RED;if(r===gl)return s.RED_INTEGER;if(r===qc)return s.RG;if(r===_l)return s.RG_INTEGER;if(r===vl)return s.RGBA_INTEGER;if(r===nr||r===ir||r===sr||r===rr)if(l===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ir)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===To||r===Ao||r===bo||r===wo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===To)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ro||r===Po)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ro)return l===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Po)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Co||r===Lo||r===Io||r===Do||r===No||r===Oo||r===Uo||r===Bo||r===Fo||r===zo||r===ko||r===Vo||r===Go||r===Ho)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Co)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Io)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Do)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===No)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ko)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Go)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ho)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===or||r===Wo||r===Xo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===or)return l===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kc||r===Yo||r===qo||r===Ko)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===or)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Sm extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bn extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mm extends wi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let f=null,p=null;const M=[],v=[],S=new ht;let P=null;const w=new Ve;w.layers.enable(1),w.viewport=new ge;const b=new Ve;b.layers.enable(2),b.viewport=new ge;const F=[w,b],y=new Sm;y.layers.enable(1),y.layers.enable(2);let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getHandSpace()};function H(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ft=M[Z];ft!==void 0&&(ft.update(W.inputSource,W.frame,c||o),ft.dispatchEvent({type:W.type,data:W.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",L);for(let W=0;W<M.length;W++){const Z=v[W];Z!==null&&(v[W]=null,M[W].disconnect(Z))}A=null,B=null,t.setRenderTarget(f),m=null,d=null,u=null,i=null,p=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Xn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ft=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Ai:Hn,ft=_.stencil?Gn:Tn);const gt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Xn(d.textureWidth,d.textureHeight,{format:Ze,type:Rn,depthTexture:new Bl(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const At=t.properties.get(p);At.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(W){for(let Z=0;Z<W.removed.length;Z++){const ft=W.removed[Z],St=v.indexOf(ft);St>=0&&(v[St]=null,M[St].disconnect(ft))}for(let Z=0;Z<W.added.length;Z++){const ft=W.added[Z];let St=v.indexOf(ft);if(St===-1){for(let At=0;At<M.length;At++)if(At>=v.length){v.push(ft),St=At;break}else if(v[At]===null){v[At]=ft,St=At;break}if(St===-1)break}const gt=M[St];gt&&gt.connect(ft)}}const U=new R,V=new R;function $(W,Z,ft){U.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(ft.matrixWorld);const St=U.distanceTo(V),gt=Z.projectionMatrix.elements,At=ft.projectionMatrix.elements,Pt=gt[14]/(gt[10]-1),xt=gt[14]/(gt[10]+1),Ct=(gt[9]+1)/gt[5],C=(gt[9]-1)/gt[5],ot=(gt[8]-1)/gt[0],Y=(At[8]+1)/At[0],st=Pt*ot,X=Pt*Y,Et=St/(-ot+Y),pt=Et*-ot;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(pt),W.translateZ(Et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=Pt+Et,x=xt+Et,O=st-pt,nt=X+(St-pt),tt=Ct*xt/x*E,Q=C*xt/x*E;W.projectionMatrix.makePerspective(O,nt,tt,Q,E,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=b.near=w.near=W.near,y.far=b.far=w.far=W.far,(A!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,B=y.far);const Z=W.parent,ft=y.cameras;q(y,Z);for(let St=0;St<ft.length;St++)q(ft[St],Z);ft.length===2?$(y,w,b):y.projectionMatrix.copy(w.projectionMatrix),K(W,y,Z)};function K(W,Z,ft){ft===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ft.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let j=null;function it(W,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let St=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let gt=0;gt<ft.length;gt++){const At=ft[gt];let Pt=null;if(m!==null)Pt=m.getViewport(At);else{const Ct=u.getViewSubImage(d,At);Pt=Ct.viewport,gt===0&&(t.setRenderTargetTextures(p,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(p))}let xt=F[gt];xt===void 0&&(xt=new Ve,xt.layers.enable(gt),xt.viewport=new ge,F[gt]=xt),xt.matrix.fromArray(At.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(At.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),gt===0&&(y.matrix.copy(xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(xt)}}for(let ft=0;ft<M.length;ft++){const St=v[ft],gt=M[ft];St!==null&&gt!==void 0&&gt.update(St,Z,c||o)}j&&j(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const rt=new Ol;rt.setAnimationLoop(it),this.setAnimationLoop=function(W){j=W},this.dispose=function(){}}}function Em(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Il(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,M,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ce&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ce&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=t.get(p).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",f));const P=v.program;n.updateUBOMapping(M,P);const w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){const v=u();M.__bindingPointIndex=v;const S=s.createBuffer(),P=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],S=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,b=S.length;w<b;w++){const F=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,A=F.length;y<A;y++){const B=F[y];if(m(B,w,y,P)===!0){const H=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let U=0;U<J.length;U++){const V=J[U],$=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+L,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,v,S,P){const w=M.value,b=v+"_"+S;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:P[b]=w.clone(),!0;{const F=P[b];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return P[b]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function g(M){const v=M.uniforms;let S=0;const P=16;for(let b=0,F=v.length;b<F;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,B=y.length;A<B;A++){const H=y[A],J=Array.isArray(H.value)?H.value:[H.value];for(let L=0,U=J.length;L<U;L++){const V=J[L],$=_(V),q=S%P;q!==0&&P-q<$.boundary&&(S+=P-q),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=$.storage}}}const w=S%P;return w>0&&(S+=P-w),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Hl{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,w=0,b=null,F=-1,y=null;const A=new ge,B=new ge;let H=null;const J=new Xt(0);let L=0,U=e.width,V=e.height,$=1,q=null,K=null;const j=new ge(0,0,U,V),it=new ge(0,0,U,V);let rt=!1;const W=new so;let Z=!1,ft=!1,St=null;const gt=new ne,At=new ht,Pt=new R,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return b===null?$:1}let C=n;function ot(T,N){for(let k=0;k<T.length;k++){const G=T[k],z=e.getContext(G,N);if(z!==null)return z}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qr}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),C=ot(N,T),C===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,st,X,Et,pt,E,x,O,nt,tt,Q,yt,ct,_t,bt,Ot,et,qt,Wt,Dt,Tt,vt,Bt,$t;function oe(){Y=new Nf(C),st=new Rf(C,Y,t),Y.init(st),vt=new xm(C,Y,st),X=new _m(C,Y,st),Et=new Bf(C),pt=new im,E=new vm(C,Y,X,pt,st,vt,Et),x=new Cf(v),O=new Df(v),nt=new Wh(C,st),Bt=new bf(C,Y,nt,st),tt=new Of(C,nt,Et,Bt),Q=new Vf(C,tt,nt,Et),Wt=new kf(C,st,E),Ot=new Pf(pt),yt=new nm(v,x,O,Y,st,Bt,Ot),ct=new Em(v,pt),_t=new rm,bt=new um(Y,st),qt=new Af(v,x,O,X,Q,d,l),et=new gm(v,Q,st),$t=new Tm(C,Et,st,X),Dt=new wf(C,Y,Et,st),Tt=new Uf(C,Y,Et,st),Et.programs=yt.programs,v.capabilities=st,v.extensions=Y,v.properties=pt,v.renderLists=_t,v.shadowMap=et,v.state=X,v.info=Et}oe();const Vt=new Mm(v,C);this.xr=Vt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(U,V,!1))},this.getSize=function(T){return T.set(U,V)},this.setSize=function(T,N,k=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,V=N,e.width=Math.floor(T*$),e.height=Math.floor(N*$),k===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(U*$,V*$).floor()},this.setDrawingBufferSize=function(T,N,k){U=T,V=N,$=k,e.width=Math.floor(T*k),e.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,N,k,G){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,N,k,G),X.viewport(A.copy(j).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,N,k,G){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,N,k,G),X.scissor(B.copy(it).multiplyScalar($).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){X.setScissorTest(rt=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(T=!0,N=!0,k=!0){let G=0;if(T){let z=!1;if(b!==null){const mt=b.texture.format;z=mt===vl||mt===_l||mt===gl}if(z){const mt=b.texture.type,Mt=mt===Rn||mt===Tn||mt===to||mt===Gn||mt===pl||mt===ml,Rt=qt.getClearColor(),It=qt.getClearAlpha(),zt=Rt.r,Nt=Rt.g,Ut=Rt.b;Mt?(m[0]=zt,m[1]=Nt,m[2]=Ut,m[3]=It,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=zt,g[1]=Nt,g[2]=Ut,g[3]=It,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}N&&(G|=C.DEPTH_BUFFER_BIT),k&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),bt.dispose(),pt.dispose(),x.dispose(),O.dispose(),Q.dispose(),Bt.dispose(),$t.dispose(),yt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Te),Vt.removeEventListener("sessionend",Qt),St&&(St.dispose(),St=null),Ae.stop()};function at(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Et.autoReset,N=et.enabled,k=et.autoUpdate,G=et.needsUpdate,z=et.type;oe(),Et.autoReset=T,et.enabled=N,et.autoUpdate=k,et.needsUpdate=G,et.type=z}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const N=T.target;N.removeEventListener("dispose",dt),Lt(N)}function Lt(T){wt(T),pt.remove(T)}function wt(T){const N=pt.get(T).programs;N!==void 0&&(N.forEach(function(k){yt.releaseProgram(k)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,G,z,mt){N===null&&(N=xt);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=nc(T,N,k,G,z);X.setMaterial(G,Mt);let It=k.index,zt=1;if(G.wireframe===!0){if(It=tt.getWireframeAttribute(k),It===void 0)return;zt=2}const Nt=k.drawRange,Ut=k.attributes.position;let le=Nt.start*zt,Ie=(Nt.start+Nt.count)*zt;mt!==null&&(le=Math.max(le,mt.start*zt),Ie=Math.min(Ie,(mt.start+mt.count)*zt)),It!==null?(le=Math.max(le,0),Ie=Math.min(Ie,It.count)):Ut!=null&&(le=Math.max(le,0),Ie=Math.min(Ie,Ut.count));const pe=Ie-le;if(pe<0||pe===1/0)return;Bt.setup(z,G,Rt,k,It);let rn,se=Dt;if(It!==null&&(rn=nt.get(It),se=Tt,se.setIndex(rn)),z.isMesh)G.wireframe===!0?(X.setLineWidth(G.wireframeLinewidth*Ct()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(z.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),X.setLineWidth(Gt*Ct()),z.isLineSegments?se.setMode(C.LINES):z.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else z.isPoints?se.setMode(C.POINTS):z.isSprite&&se.setMode(C.TRIANGLES);if(z.isBatchedMesh)se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)se.renderInstances(le,pe,z.count);else if(k.isInstancedBufferGeometry){const Gt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Js=Math.min(k.instanceCount,Gt);se.renderInstances(le,pe,Js)}else se.render(le,pe)};function jt(T,N,k){T.transparent===!0&&T.side===Ke&&T.forceSinglePass===!1?(T.side=Ce,T.needsUpdate=!0,Ji(T,N,k),T.side=Cn,T.needsUpdate=!0,Ji(T,N,k),T.side=Ke):Ji(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),f=bt.get(k),f.init(),M.push(f),k.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==k&&T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(v._useLegacyLights);const G=new Set;return T.traverse(function(z){const mt=z.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){const Rt=mt[Mt];jt(Rt,k,z),G.add(Rt)}else jt(mt,k,z),G.add(mt)}),M.pop(),f=null,G},this.compileAsync=function(T,N,k=null){const G=this.compile(T,N,k);return new Promise(z=>{function mt(){if(G.forEach(function(Mt){pt.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){z(T);return}setTimeout(mt,10)}Y.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Jt=null;function fe(T){Jt&&Jt(T)}function Te(){Ae.stop()}function Qt(){Ae.start()}const Ae=new Ol;Ae.setAnimationLoop(fe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){Jt=T,Vt.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},Vt.addEventListener("sessionstart",Te),Vt.addEventListener("sessionend",Qt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(N),N=Vt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,b),f=bt.get(T,M.length),f.init(),M.push(f),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(gt),ft=this.localClippingEnabled,Z=Ot.init(this.clippingPlanes,ft),_=_t.get(T,p.length),_.init(),p.push(_),Qe(T,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,K),this.info.render.frame++,Z===!0&&Ot.beginShadows();const k=f.state.shadowsArray;if(et.render(k,T,N),Z===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(_,T),f.setupLights(v._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let z=0,mt=G.length;z<mt;z++){const Mt=G[z];ho(_,T,Mt,Mt.viewport)}}else ho(_,T,N);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,N),Bt.resetDefaultState(),F=-1,y=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qe(T,N,k,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){G&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const Mt=Q.update(T),Rt=T.material;Rt.visible&&_.push(T,Mt,Rt,k,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Mt=Q.update(T),Rt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Pt.copy(Mt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Rt)){const It=Mt.groups;for(let zt=0,Nt=It.length;zt<Nt;zt++){const Ut=It[zt],le=Rt[Ut.materialIndex];le&&le.visible&&_.push(T,Mt,le,k,Pt.z,Ut)}}else Rt.visible&&_.push(T,Mt,Rt,k,Pt.z,null)}}const mt=T.children;for(let Mt=0,Rt=mt.length;Mt<Rt;Mt++)Qe(mt[Mt],N,k,G)}function ho(T,N,k,G){const z=T.opaque,mt=T.transmissive,Mt=T.transparent;f.setupLightsView(k),Z===!0&&Ot.setGlobalState(v.clippingPlanes,k),mt.length>0&&ec(z,mt,N,k),G&&X.viewport(A.copy(G)),z.length>0&&ji(z,N,k),mt.length>0&&ji(mt,N,k),Mt.length>0&&ji(Mt,N,k),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function ec(T,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const mt=st.isWebGL2;St===null&&(St=new Xn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Yi:Rn,minFilter:Xi,samples:mt?4:0})),v.getDrawingBufferSize(At),mt?St.setSize(At.x,At.y):St.setSize(Gs(At.x),Gs(At.y));const Mt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Rt=v.toneMapping;v.toneMapping=mn,ji(T,k,G),E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St);let It=!1;for(let zt=0,Nt=N.length;zt<Nt;zt++){const Ut=N[zt],le=Ut.object,Ie=Ut.geometry,pe=Ut.material,rn=Ut.group;if(pe.side===Ke&&le.layers.test(G.layers)){const se=pe.side;pe.side=Ce,pe.needsUpdate=!0,uo(le,k,G,Ie,pe,rn),pe.side=se,pe.needsUpdate=!0,It=!0}}It===!0&&(E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St)),v.setRenderTarget(Mt),v.setClearColor(J,L),v.toneMapping=Rt}function ji(T,N,k){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,mt=T.length;z<mt;z++){const Mt=T[z],Rt=Mt.object,It=Mt.geometry,zt=G===null?Mt.material:G,Nt=Mt.group;Rt.layers.test(k.layers)&&uo(Rt,N,k,It,zt,Nt)}}function uo(T,N,k,G,z,mt){T.onBeforeRender(v,N,k,G,z,mt),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,N,k,G,T,mt),z.transparent===!0&&z.side===Ke&&z.forceSinglePass===!1?(z.side=Ce,z.needsUpdate=!0,v.renderBufferDirect(k,N,G,z,T,mt),z.side=Cn,z.needsUpdate=!0,v.renderBufferDirect(k,N,G,z,T,mt),z.side=Ke):v.renderBufferDirect(k,N,G,z,T,mt),T.onAfterRender(v,N,k,G,z,mt)}function Ji(T,N,k){N.isScene!==!0&&(N=xt);const G=pt.get(T),z=f.state.lights,mt=f.state.shadowsArray,Mt=z.state.version,Rt=yt.getParameters(T,z.state,mt,N,k),It=yt.getProgramCacheKey(Rt);let zt=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?O:x).get(T.envMap||G.environment),zt===void 0&&(T.addEventListener("dispose",dt),zt=new Map,G.programs=zt);let Nt=zt.get(It);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===Mt)return po(T,Rt),Nt}else Rt.uniforms=yt.getUniforms(T),T.onBuild(k,Rt,v),T.onBeforeCompile(Rt,v),Nt=yt.acquireProgram(Rt,It),zt.set(It,Nt),G.uniforms=Rt.uniforms;const Ut=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=Ot.uniform),po(T,Rt),G.needsLights=sc(T),G.lightsStateVersion=Mt,G.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function fo(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Os.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function po(T,N){const k=pt.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function nc(T,N,k,G,z){N.isScene!==!0&&(N=xt),E.resetTextureUnits();const mt=N.fog,Mt=G.isMeshStandardMaterial?N.environment:null,Rt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gn,It=(G.isMeshStandardMaterial?O:x).get(G.envMap||Mt),zt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!k.morphAttributes.position,le=!!k.morphAttributes.normal,Ie=!!k.morphAttributes.color;let pe=mn;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pe=v.toneMapping);const rn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=rn!==void 0?rn.length:0,Gt=pt.get(G),Js=f.state.lights;if(Z===!0&&(ft===!0||T!==y)){const Oe=T===y&&G.id===F;Ot.setState(G,T,Oe)}let ae=!1;G.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Js.state.version||Gt.outputColorSpace!==Rt||z.isBatchedMesh&&Gt.batching===!1||!z.isBatchedMesh&&Gt.batching===!0||z.isInstancedMesh&&Gt.instancing===!1||!z.isInstancedMesh&&Gt.instancing===!0||z.isSkinnedMesh&&Gt.skinning===!1||!z.isSkinnedMesh&&Gt.skinning===!0||z.isInstancedMesh&&Gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Gt.instancingColor===!1&&z.instanceColor!==null||Gt.envMap!==It||G.fog===!0&&Gt.fog!==mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==zt||Gt.vertexTangents!==Nt||Gt.morphTargets!==Ut||Gt.morphNormals!==le||Gt.morphColors!==Ie||Gt.toneMapping!==pe||st.isWebGL2===!0&&Gt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,Gt.__version=G.version);let In=Gt.currentProgram;ae===!0&&(In=Ji(G,N,z));let mo=!1,Ci=!1,Qs=!1;const xe=In.getUniforms(),Dn=Gt.uniforms;if(X.useProgram(In.program)&&(mo=!0,Ci=!0,Qs=!0),G.id!==F&&(F=G.id,Ci=!0),mo||y!==T){xe.setValue(C,"projectionMatrix",T.projectionMatrix),xe.setValue(C,"viewMatrix",T.matrixWorldInverse);const Oe=xe.map.cameraPosition;Oe!==void 0&&Oe.setValue(C,Pt.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Ci=!0,Qs=!0)}if(z.isSkinnedMesh){xe.setOptional(C,z,"bindMatrix"),xe.setOptional(C,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(st.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(C,"boneTexture",Oe.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(xe.setOptional(C,z,"batchingTexture"),xe.setValue(C,"batchingTexture",z._matricesTexture,E));const tr=k.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&st.isWebGL2===!0)&&Wt.update(z,k,In),(Ci||Gt.receiveShadow!==z.receiveShadow)&&(Gt.receiveShadow=z.receiveShadow,xe.setValue(C,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Dn.envMap.value=It,Dn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Ci&&(xe.setValue(C,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&ic(Dn,Qs),mt&&G.fog===!0&&ct.refreshFogUniforms(Dn,mt),ct.refreshMaterialUniforms(Dn,G,$,V,St),Os.upload(C,fo(Gt),Dn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(C,fo(Gt),Dn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(C,"center",z.center),xe.setValue(C,"modelViewMatrix",z.modelViewMatrix),xe.setValue(C,"normalMatrix",z.normalMatrix),xe.setValue(C,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Oe=G.uniformsGroups;for(let er=0,rc=Oe.length;er<rc;er++)if(st.isWebGL2){const go=Oe[er];$t.update(go,In),$t.bind(go,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function ic(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function sc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,k){pt.get(T.texture).__webglTexture=N,pt.get(T.depthTexture).__webglTexture=k;const G=pt.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const k=pt.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){b=T,P=N,w=k;let G=!0,z=null,mt=!1,Mt=!1;if(T){const It=pt.get(T);It.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(C.FRAMEBUFFER,null),G=!1):It.__webglFramebuffer===void 0?E.setupRenderTarget(T):It.__hasExternalTextures&&E.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Nt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?z=Nt[N][k]:z=Nt[N],mt=!0):st.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?z=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?z=Nt[k]:z=Nt,A.copy(T.viewport),B.copy(T.scissor),H=T.scissorTest}else A.copy(j).multiplyScalar($).floor(),B.copy(it).multiplyScalar($).floor(),H=rt;if(X.bindFramebuffer(C.FRAMEBUFFER,z)&&st.drawBuffers&&G&&X.drawBuffers(T,z),X.viewport(A),X.scissor(B),X.setScissorTest(H),mt){const It=pt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,k)}else if(Mt){const It=pt.get(T.texture),zt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,k||0,zt)}F=-1},this.readRenderTargetPixels=function(T,N,k,G,z,mt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){X.bindFramebuffer(C.FRAMEBUFFER,Rt);try{const It=T.texture,zt=It.format,Nt=It.type;if(zt!==Ze&&vt.convert(zt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Nt===Yi&&(Y.has("EXT_color_buffer_half_float")||st.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Nt!==Rn&&vt.convert(Nt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===An&&(st.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&k>=0&&k<=T.height-z&&C.readPixels(N,k,G,z,vt.convert(zt),vt.convert(Nt),mt)}finally{const It=b!==null?pt.get(b).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(T,N,k=0){const G=Math.pow(2,-k),z=Math.floor(N.image.width*G),mt=Math.floor(N.image.height*G);E.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,T.x,T.y,z,mt),X.unbindTexture()},this.copyTextureToTexture=function(T,N,k,G=0){const z=N.image.width,mt=N.image.height,Mt=vt.convert(k.format),Rt=vt.convert(k.type);E.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,T.x,T.y,z,mt,Mt,Rt,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,G,T.x,T.y,Mt,Rt,N.image),G===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k,G,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=T.max.x-T.min.x+1,Mt=T.max.y-T.min.y+1,Rt=T.max.z-T.min.z+1,It=vt.convert(G.format),zt=vt.convert(G.type);let Nt;if(G.isData3DTexture)E.setTexture3D(G,0),Nt=C.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Nt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ie=C.getParameter(C.UNPACK_SKIP_PIXELS),pe=C.getParameter(C.UNPACK_SKIP_ROWS),rn=C.getParameter(C.UNPACK_SKIP_IMAGES),se=k.isCompressedTexture?k.mipmaps[z]:k.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,T.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,T.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?C.texSubImage3D(Nt,z,N.x,N.y,N.z,mt,Mt,Rt,It,zt,se.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Nt,z,N.x,N.y,N.z,mt,Mt,Rt,It,se.data)):C.texSubImage3D(Nt,z,N.x,N.y,N.z,mt,Mt,Rt,It,zt,se),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rn),z===0&&G.generateMipmaps&&C.generateMipmap(Nt),X.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){P=0,w=0,b=null,X.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===eo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?Wn:Sl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wn?_e:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Am extends Hl{}Am.prototype.isWebGL1Renderer=!0;class oo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bm extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ba extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fi=new ne,Fa=new ne,ys=[],za=new nn,wm=new ne,Oi=new Yt,Ui=new _n;class Wl extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ba(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fi),za.copy(t.boundingBox).applyMatrix4(fi),this.boundingBox.union(za)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fi),Ui.copy(t.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Ui)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),t.ray.intersectsSphere(Ui)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fi),Fa.multiplyMatrices(n,fi),Oi.matrixWorld=Fa,Oi.raycast(t,ys);for(let o=0,a=ys.length;o<a;o++){const l=ys[o];l.instanceId=r,l.object=this,e.push(l)}ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ba(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xl extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ka=new R,Va=new R,Ga=new ne,Cr=new io,Ms=new _n;class Rm extends ce{constructor(t=new Ee,e=new Xl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ka.fromBufferAttribute(e,i-1),Va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ka.distanceTo(Va);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=r,t.ray.intersectsSphere(Ms)===!1)return;Ga.copy(i).invert(),Cr.copy(t.ray).applyMatrix4(Ga);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=p,S=M-1;v<S;v+=m){const P=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(f,P),h.fromBufferAttribute(f,w),Cr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let v=p,S=M-1;v<S;v+=m){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),Cr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ha=new R,Wa=new R;class Pm extends Rm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ha.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ha.distanceTo(Wa);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yl extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xa=new ne,$r=new io,Es=new _n,Ts=new R;class Cm extends ce{constructor(t=new Ee,e=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;Xa.copy(i).invert(),$r.copy(t.ray).applyMatrix4(Xa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);Ts.fromBufferAttribute(u,f),Ya(Ts,f,l,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Ts.fromBufferAttribute(u,g),Ya(Ts,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ya(s,t,e,n,i,r,o){const a=$r.distanceSqToPoint(s);if(a<e){const l=new R;$r.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Lm extends Le{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ht:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,l=new ne;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ve(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ao extends sn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Im extends ao{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const As=new R,Lr=new lo,Ir=new lo,Dr=new lo;class Dm extends sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(As.subVectors(i[0],i[1]).add(i[0]),c=As);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(As.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=As),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Lr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,f),Ir.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,f),Dr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ir.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lr.calc(l),Ir.calc(l),Dr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qa(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Nm(s,t){const e=1-s;return e*e*t}function Om(s,t){return 2*(1-s)*s*t}function Um(s,t){return s*s*t}function ki(s,t,e,n){return Nm(s,t)+Om(s,e)+Um(s,n)}function Bm(s,t){const e=1-s;return e*e*e*t}function Fm(s,t){const e=1-s;return 3*e*e*s*t}function zm(s,t){return 3*(1-s)*s*s*t}function km(s,t){return s*s*s*t}function Vi(s,t,e,n,i){return Bm(s,t)+Fm(s,e)+zm(s,n)+km(s,i)}class ql extends sn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(t,i.x,r.x,o.x,a.x),Vi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vm extends sn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(t,i.x,r.x,o.x,a.x),Vi(t,i.y,r.y,o.y,a.y),Vi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kl extends sn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gm extends sn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends sn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ki(t,i.x,r.x,o.x),ki(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hm extends sn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ki(t,i.x,r.x,o.x),ki(t,i.y,r.y,o.y),ki(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qa(a,l.x,c.x,h.x,u.x),qa(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Zr=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Dm,CubicBezierCurve:ql,CubicBezierCurve3:Vm,EllipseCurve:ao,LineCurve:Kl,LineCurve3:Gm,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Hm,SplineCurve:Zl});class Wm extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zr[i.type]().fromJSON(i))}return this}}class Ka extends Wm{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Kl(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new $l(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new ql(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new ao(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class co extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pi extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],f=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(m,2));function M(){const S=new R,P=new R;let w=0;const b=(e-t)/n;for(let F=0;F<=r;F++){const y=[],A=F/r,B=A*(e-t)+t;for(let H=0;H<=i;H++){const J=H/i,L=J*l+a,U=Math.sin(L),V=Math.cos(L);P.x=B*U,P.y=-A*n+f,P.z=B*V,u.push(P.x,P.y,P.z),S.set(U,b,V).normalize(),d.push(S.x,S.y,S.z),m.push(J,1-A),y.push(g++)}_.push(y)}for(let F=0;F<i;F++)for(let y=0;y<r;y++){const A=_[y][F],B=_[y+1][F],H=_[y+1][F+1],J=_[y][F+1];h.push(A,B,J),h.push(B,H,J),w+=6}c.addGroup(p,w,0),p+=w}function v(S){const P=g,w=new ht,b=new R;let F=0;const y=S===!0?t:e,A=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,f*A,0),d.push(0,A,0),m.push(.5,.5),g++;const B=g;for(let H=0;H<=i;H++){const L=H/i*l+a,U=Math.cos(L),V=Math.sin(L);b.x=y*V,b.y=f*A,b.z=y*U,u.push(b.x,b.y,b.z),d.push(0,A,0),w.x=U*.5+.5,w.y=V*.5*A+.5,m.push(w.x,w.y),g++}for(let H=0;H<i;H++){const J=P+H,L=B+H;S===!0?h.push(L,L+1,J):h.push(L+1,L,J),F+=3}c.addGroup(p,F,S===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends Pi{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const bs=new R,ws=new R,Nr=new R,Rs=new ke;class Xm extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(yi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:f,c:p}=Rs;if(_.fromBufferAttribute(a,c[0]),f.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Rs.getNormal(Nr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const v=(M+1)%3,S=u[M],P=u[v],w=Rs[h[M]],b=Rs[h[v]],F=`${S}_${P}`,y=`${P}_${S}`;y in d&&d[y]?(Nr.dot(d[y].normal)<=r&&(m.push(w.x,w.y,w.z),m.push(b.x,b.y,b.z)),d[y]=null):F in d||(d[F]={index0:c[M],index1:c[v],normal:Nr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:f}=d[g];bs.fromBufferAttribute(a,_),ws.fromBufferAttribute(a,f),m.push(bs.x,bs.y,bs.z),m.push(ws.x,ws.y,ws.z)}this.setAttribute("position",new ie(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Us extends Ka{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ka().fromJSON(i))}return this}}const Ym={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=jl(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=jm(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Ki(r,o,e,a,l,m,0),o}};function jl(s,t,e,n,i){let r,o;if(i===lg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=$a(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=$a(r,s[r],s[r+1],o);return o&&js(o,o.next)&&(Zi(o),o=o.next),o}function Kn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(js(e,e.next)||re(e.prev,e,e.next)===0)){if(Zi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ki(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ng(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Km(s,n,i,r):qm(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Zi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$m(Kn(s),t,e),Ki(s,t,e,n,i,r,2)):o===2&&Zm(s,t,e,n,i,r):Ki(Kn(s),t,e,n,i,r,1);break}}}function qm(s){const t=s.prev,e=s,n=s.next;if(re(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&xi(i,a,r,l,o,c,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Km(s,t,e,n){const i=s.prev,r=s,o=s.next;if(re(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,p=jr(m,g,t,e,n),M=jr(_,f,t,e,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=p&&S&&S.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==o&&xi(a,h,l,u,c,d,v.x,v.y)&&re(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=_&&S.y>=g&&S.y<=f&&S!==i&&S!==o&&xi(a,h,l,u,c,d,S.x,S.y)&&re(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==o&&xi(a,h,l,u,c,d,v.x,v.y)&&re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=f&&S!==i&&S!==o&&xi(a,h,l,u,c,d,S.x,S.y)&&re(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function $m(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!js(i,r)&&Jl(i,n,n.next,r)&&$i(i,r)&&$i(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zi(n),Zi(n.next),n=s=r),n=n.next}while(n!==s);return Kn(n)}function Zm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rg(o,a)){let l=Ql(o,a);o=Kn(o,o.next),l=Kn(l,l.next),Ki(o,t,e,n,i,r,0),Ki(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jm(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=jl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(sg(c));for(i.sort(Jm),r=0;r<i.length;r++)e=Qm(i[r],e);return e}function Jm(s,t){return s.x-t.x}function Qm(s,t){const e=tg(s,t);if(!e)return t;const n=Ql(e,s);return Kn(n,n.next),Kn(e,e.next)}function tg(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&xi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),$i(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&eg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function eg(s,t){return re(s.prev,s,t.prev)<0&&re(t.next,s,s.next)<0}function ng(s,t,e,n){let i=s;do i.z===0&&(i.z=jr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ig(i)}function ig(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function jr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function rg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!og(s,t)&&($i(s,t)&&$i(t,s)&&ag(s,t)&&(re(s.prev,s,t.prev)||re(s,t.prev,t))||js(s,t)&&re(s.prev,s,s.next)>0&&re(t.prev,t,t.next)>0)}function re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function js(s,t){return s.x===t.x&&s.y===t.y}function Jl(s,t,e,n){const i=Cs(re(s,t,e)),r=Cs(re(s,t,n)),o=Cs(re(e,n,s)),a=Cs(re(e,n,t));return!!(i!==r&&o!==a||i===0&&Ps(s,e,t)||r===0&&Ps(s,n,t)||o===0&&Ps(e,s,n)||a===0&&Ps(e,t,n))}function Ps(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Cs(s){return s>0?1:s<0?-1:0}function og(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Jl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function $i(s,t){return re(s.prev,s,s.next)<0?re(s,t,s.next)>=0&&re(s,s.prev,t)>=0:re(s,t,s.prev)<0||re(s,s.next,t)<0}function ag(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ql(s,t){const e=new Jr(s.i,s.x,s.y),n=new Jr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $a(s,t,e,n){const i=new Jr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Gi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Gi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Za(t),ja(n,t);let o=t.length;e.forEach(Za);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ja(n,e[l]);const a=Ym.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Za(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ja(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Hi extends Ee{constructor(t=new Us([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:cg;let v,S=!1,P,w,b,F;p&&(v=p.getSpacedPoints(h),S=!0,d=!1,P=p.computeFrenetFrames(h,!1),w=new R,b=new R,F=new R),d||(f=0,m=0,g=0,_=0);const y=a.extractPoints(c);let A=y.shape;const B=y.holes;if(!Gi.isClockWise(A)){A=A.reverse();for(let C=0,ot=B.length;C<ot;C++){const Y=B[C];Gi.isClockWise(Y)&&(B[C]=Y.reverse())}}const J=Gi.triangulateShape(A,B),L=A;for(let C=0,ot=B.length;C<ot;C++){const Y=B[C];A=A.concat(Y)}function U(C,ot,Y){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ot,Y)}const V=A.length,$=J.length;function q(C,ot,Y){let st,X,Et;const pt=C.x-ot.x,E=C.y-ot.y,x=Y.x-C.x,O=Y.y-C.y,nt=pt*pt+E*E,tt=pt*O-E*x;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(nt),yt=Math.sqrt(x*x+O*O),ct=ot.x-E/Q,_t=ot.y+pt/Q,bt=Y.x-O/yt,Ot=Y.y+x/yt,et=((bt-ct)*O-(Ot-_t)*x)/(pt*O-E*x);st=ct+pt*et-C.x,X=_t+E*et-C.y;const qt=st*st+X*X;if(qt<=2)return new ht(st,X);Et=Math.sqrt(qt/2)}else{let Q=!1;pt>Number.EPSILON?x>Number.EPSILON&&(Q=!0):pt<-Number.EPSILON?x<-Number.EPSILON&&(Q=!0):Math.sign(E)===Math.sign(O)&&(Q=!0),Q?(st=-E,X=pt,Et=Math.sqrt(nt)):(st=pt,X=E,Et=Math.sqrt(nt/2))}return new ht(st/Et,X/Et)}const K=[];for(let C=0,ot=L.length,Y=ot-1,st=C+1;C<ot;C++,Y++,st++)Y===ot&&(Y=0),st===ot&&(st=0),K[C]=q(L[C],L[Y],L[st]);const j=[];let it,rt=K.concat();for(let C=0,ot=B.length;C<ot;C++){const Y=B[C];it=[];for(let st=0,X=Y.length,Et=X-1,pt=st+1;st<X;st++,Et++,pt++)Et===X&&(Et=0),pt===X&&(pt=0),it[st]=q(Y[st],Y[Et],Y[pt]);j.push(it),rt=rt.concat(it)}for(let C=0;C<f;C++){const ot=C/f,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=L.length;X<Et;X++){const pt=U(L[X],K[X],st);gt(pt.x,pt.y,-Y)}for(let X=0,Et=B.length;X<Et;X++){const pt=B[X];it=j[X];for(let E=0,x=pt.length;E<x;E++){const O=U(pt[E],it[E],st);gt(O.x,O.y,-Y)}}}const W=g+_;for(let C=0;C<V;C++){const ot=d?U(A[C],rt[C],W):A[C];S?(b.copy(P.normals[0]).multiplyScalar(ot.x),w.copy(P.binormals[0]).multiplyScalar(ot.y),F.copy(v[0]).add(b).add(w),gt(F.x,F.y,F.z)):gt(ot.x,ot.y,0)}for(let C=1;C<=h;C++)for(let ot=0;ot<V;ot++){const Y=d?U(A[ot],rt[ot],W):A[ot];S?(b.copy(P.normals[C]).multiplyScalar(Y.x),w.copy(P.binormals[C]).multiplyScalar(Y.y),F.copy(v[C]).add(b).add(w),gt(F.x,F.y,F.z)):gt(Y.x,Y.y,u/h*C)}for(let C=f-1;C>=0;C--){const ot=C/f,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=L.length;X<Et;X++){const pt=U(L[X],K[X],st);gt(pt.x,pt.y,u+Y)}for(let X=0,Et=B.length;X<Et;X++){const pt=B[X];it=j[X];for(let E=0,x=pt.length;E<x;E++){const O=U(pt[E],it[E],st);S?gt(O.x,O.y+v[h-1].y,v[h-1].x+Y):gt(O.x,O.y,u+Y)}}}Z(),ft();function Z(){const C=i.length/3;if(d){let ot=0,Y=V*ot;for(let st=0;st<$;st++){const X=J[st];At(X[2]+Y,X[1]+Y,X[0]+Y)}ot=h+f*2,Y=V*ot;for(let st=0;st<$;st++){const X=J[st];At(X[0]+Y,X[1]+Y,X[2]+Y)}}else{for(let ot=0;ot<$;ot++){const Y=J[ot];At(Y[2],Y[1],Y[0])}for(let ot=0;ot<$;ot++){const Y=J[ot];At(Y[0]+V*h,Y[1]+V*h,Y[2]+V*h)}}n.addGroup(C,i.length/3-C,0)}function ft(){const C=i.length/3;let ot=0;St(L,ot),ot+=L.length;for(let Y=0,st=B.length;Y<st;Y++){const X=B[Y];St(X,ot),ot+=X.length}n.addGroup(C,i.length/3-C,1)}function St(C,ot){let Y=C.length;for(;--Y>=0;){const st=Y;let X=Y-1;X<0&&(X=C.length-1);for(let Et=0,pt=h+f*2;Et<pt;Et++){const E=V*Et,x=V*(Et+1),O=ot+st+E,nt=ot+X+E,tt=ot+X+x,Q=ot+st+x;Pt(O,nt,tt,Q)}}}function gt(C,ot,Y){l.push(C),l.push(ot),l.push(Y)}function At(C,ot,Y){xt(C),xt(ot),xt(Y);const st=i.length/3,X=M.generateTopUV(n,i,st-3,st-2,st-1);Ct(X[0]),Ct(X[1]),Ct(X[2])}function Pt(C,ot,Y,st){xt(C),xt(ot),xt(st),xt(ot),xt(Y),xt(st);const X=i.length/3,Et=M.generateSideWallUV(n,i,X-6,X-3,X-2,X-1);Ct(Et[0]),Ct(Et[1]),Ct(Et[3]),Ct(Et[1]),Ct(Et[2]),Ct(Et[3])}function xt(C){i.push(l[C*3+0]),i.push(l[C*3+1]),i.push(l[C*3+2])}function Ct(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return hg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Zr[i.type]().fromJSON(i)),new Hi(n,t.options)}}const cg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[r*3],f=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-g),new ht(_,1-p)]:[new ht(a,1-l),new ht(h,1-u),new ht(m,1-g),new ht(f,1-p)]}};function hg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ws extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const w=P/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(w+S,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=h[p][M+1],S=h[p][M],P=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&m.push(v,S,w),(p!==n-1||l<Math.PI)&&m.push(S,P,w)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xs extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,M=(i+1)*m+g;o.push(_,f,M),o.push(f,p,M)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pe extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tc extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Or=new ne,Ja=new R,Qa=new R;class ug{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dg extends ug{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tl extends tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fg extends tc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const D={ARENA:{WALL_THICKNESS:2,MAP_SCALE:3,CHECKER_LIGHT_COLOR:14277081,CHECKER_DARK_COLOR:5921370,CHECKER_WORLD_SIZE:18},PLAYER:{SPEED:18,TURN_SPEED:2.2,ROLL_SPEED:2,BOOST_MULTIPLIER:1.8,BOOST_DURATION:2,BOOST_COOLDOWN:5,SPAWN_PROTECTION:1,HITBOX_RADIUS:.8,MODEL_SCALE:1,NOSE_CAMERA_LOCAL_Y:.05,NOSE_CAMERA_LOCAL_Z:-1.95,START_Y:10,AUTO_ROLL:!0,AUTO_ROLL_SPEED:1.5},GAMEPLAY:{PLANAR_MODE:!1,PORTAL_COUNT:0,PLANAR_LEVEL_COUNT:5,PORTAL_BEAMS:!1,PLANAR_AIM_INPUT_SPEED:1.5},TRAIL:{WIDTH:.6,UPDATE_INTERVAL:.07,GAP_CHANCE:.02,GAP_DURATION:.3,MAX_SEGMENTS:5e3},RENDER:{MAX_PIXEL_RATIO:1.35,SHADOW_MAP_SIZE:512},POWERUP:{SPAWN_INTERVAL:3,MAX_ON_FIELD:8,PICKUP_RADIUS:2.5,SIZE:1.5,ROTATION_SPEED:2,BOUNCE_SPEED:1.5,BOUNCE_HEIGHT:.5,MAX_INVENTORY:5,TYPES:{SPEED_UP:{name:"Schneller",color:65382,icon:"⚡",duration:4,multiplier:1.6},SLOW_DOWN:{name:"Langsamer",color:16724787,icon:"🐢",duration:4,multiplier:.5},THICK:{name:"Dick",color:16763904,icon:"🧱",duration:5,trailWidth:1.8},THIN:{name:"Dünn",color:11158783,icon:"✂",duration:5,trailWidth:.2},SHIELD:{name:"Schild",color:4491519,icon:"🛡",duration:3},SLOW_TIME:{name:"Zeitlupe",color:4521864,icon:"🕙",duration:4,timeScale:.4},GHOST:{name:"Geist",color:16737996,icon:"👻",duration:3},INVERT:{name:"Invertieren",color:16711935,icon:"🔀",duration:4}}},BOT:{DEFAULT_DIFFICULTY:"NORMAL",ACTIVE_DIFFICULTY:"NORMAL",REACTION_TIME:.13,LOOK_AHEAD:13,AGGRESSION:.58,LEARNING:{ENABLED:!1,STORAGE_KEY:"mini-curve-fever-3d.bot-learning.v1",STORAGE_KEY_3D:"mini-curve-fever-3d.bot-learning.v1.3d",STORAGE_KEY_PLANAR:"mini-curve-fever-3d.bot-learning.v1.planar",ALPHA:.16,GAMMA:.92,EPSILON_START:.35,EPSILON_MIN:.04,EPSILON_DECAY:.9995,MAX_STATES:2500,SAVE_EVERY_UPDATES:200,MIN_SAVE_INTERVAL_MS:4e3,REWARD:{SURVIVAL_PER_SEC:.03,BOUNCE_WALL:-.35,BOUNCE_TRAIL:-.55,KILL:2.2,DEATH:-2.8,ROUND_WIN:1.4,ROUND_LOSS:-.8,ROUND_DRAW:-.25}},DIFFICULTY_PROFILES:{EASY:{reactionTime:.24,lookAhead:11,aggression:.36,errorRate:.24,probeSpread:.62,probeStep:2.3,turnCommitTime:.14,stuckCheckInterval:.45,stuckTriggerTime:1.7,minProgressDistance:.85,minForwardProgress:.35,recoveryDuration:.95,recoveryCooldown:1.9,itemUseCooldown:1.25,itemShootCooldown:.8,targetRefreshInterval:.28,portalInterest:.35,portalSeekDistance:60,portalEntryDotMin:.22,portalIntentThreshold:.25,portalIntentDuration:.9,boostChance:.0025,probeCount:7,projectileAwareness:0,pursuitEnabled:!1,pursuitRadius:0,pursuitAimTolerance:.95,heightBias:0,spacingWeight:0,itemContextWeight:.2},NORMAL:{reactionTime:.14,lookAhead:13,aggression:.58,errorRate:.11,probeSpread:.74,probeStep:1.6,turnCommitTime:.18,stuckCheckInterval:.4,stuckTriggerTime:1.2,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1.3,recoveryCooldown:1.55,itemUseCooldown:.95,itemShootCooldown:.62,targetRefreshInterval:.2,portalInterest:.56,portalSeekDistance:72,portalEntryDotMin:.28,portalIntentThreshold:.2,portalIntentDuration:1.15,boostChance:.0045,probeCount:10,projectileAwareness:.6,pursuitEnabled:!0,pursuitRadius:35,pursuitAimTolerance:.85,heightBias:.15,spacingWeight:.3,itemContextWeight:.7},HARD:{reactionTime:.08,lookAhead:16,aggression:.74,errorRate:.04,probeSpread:.9,probeStep:1.4,turnCommitTime:.24,stuckCheckInterval:.35,stuckTriggerTime:1,minProgressDistance:1,minForwardProgress:.5,recoveryDuration:1.25,recoveryCooldown:1.2,itemUseCooldown:.78,itemShootCooldown:.48,targetRefreshInterval:.12,portalInterest:.74,portalSeekDistance:84,portalEntryDotMin:.35,portalIntentThreshold:.14,portalIntentDuration:1.35,boostChance:.0065,probeCount:12,projectileAwareness:.95,pursuitEnabled:!0,pursuitRadius:50,pursuitAimTolerance:.75,heightBias:.25,spacingWeight:.5,itemContextWeight:1}}},PROJECTILE:{SPEED:45,RADIUS:.7,LIFE_TIME:3,MAX_DISTANCE:140,COOLDOWN:.45,PLANAR_AIM_MAX_ANGLE_DEG:18},PORTAL:{RADIUS:3.5,COOLDOWN:1.2,RING_SIZE:4,ROTATION_SPEED:2,MIN_PAIR_DISTANCE:15,MIN_PAIR_DISTANCE_PLANAR:4},HOMING:{LOCK_ON_ANGLE:15,TURN_RATE:3,MAX_LOCK_RANGE:100},COLORS:{PLAYER_1:43775,PLAYER_2:16746496,BOT_COLORS:[16729156,4521796,16777028,16729343,4521983],BACKGROUND:526354,AMBIENT_LIGHT:3359846},CAMERA:{FOV:75,NEAR:.1,FAR:200,FOLLOW_DISTANCE:12,FOLLOW_HEIGHT:6,LOOK_AHEAD:5,SMOOTHING:.08,MODES:["THIRD_PERSON","FIRST_PERSON","TOP_DOWN"],FIRST_PERSON_NOSE_CLEARANCE:.3,FIRST_PERSON_OFFSET:4,FIRST_PERSON_BOOST_OFFSET:1.45,FIRST_PERSON_BOOST_BLEND_SPEED:8.5,COLLISION_RADIUS:.45,COLLISION_BACKOFF:.04,COLLISION_STEPS:8},MAPS:{standard:{name:"Standard Arena",size:[80,30,80],obstacles:[{pos:[0,5,0],size:[4,10,4]},{pos:[20,5,20],size:[3,10,3]},{pos:[-20,5,-20],size:[3,10,3]},{pos:[20,5,-20],size:[3,10,3]},{pos:[-20,5,20],size:[3,10,3]}],portals:[{a:[-30,12,0],b:[30,12,0],color:65484}]},empty:{name:"Leer",size:[50,25,50],obstacles:[],portals:[]},maze:{name:"Labyrinth",size:[80,25,80],obstacles:[{pos:[-20,5,-20],size:[20,10,2]},{pos:[20,5,-20],size:[20,10,2]},{pos:[0,5,0],size:[30,10,2]},{pos:[-20,5,20],size:[20,10,2]},{pos:[20,5,20],size:[20,10,2]},{pos:[-20,5,0],size:[2,10,20]},{pos:[20,5,0],size:[2,10,20]},{pos:[0,5,-20],size:[2,10,15]},{pos:[0,5,20],size:[2,10,15]}],portals:[{a:[-30,10,-30],b:[30,10,30],color:16738047},{a:[30,10,-30],b:[-30,10,30],color:6737151}]},complex:{name:"Komplex",size:[90,30,90],obstacles:[{pos:[0,5,0],size:[6,12,6]},{pos:[-25,5,-25],size:[10,8,2]},{pos:[25,5,-25],size:[2,8,10]},{pos:[-25,5,25],size:[2,8,10]},{pos:[25,5,25],size:[10,8,2]},{pos:[-15,5,0],size:[2,15,15]},{pos:[15,5,0],size:[2,15,15]},{pos:[0,5,-15],size:[15,15,2]},{pos:[0,5,15],size:[15,15,2]},{pos:[-30,3,0],size:[5,6,5]},{pos:[30,3,0],size:[5,6,5]}],portals:[{a:[-35,12,-35],b:[35,12,35],color:16755200},{a:[35,12,-35],b:[-35,12,35],color:43775}]},pyramid:{name:"Pyramide",size:[80,35,80],obstacles:[{pos:[0,2,0],size:[20,4,20]},{pos:[0,6,0],size:[15,4,15]},{pos:[0,10,0],size:[10,4,10]},{pos:[0,14,0],size:[5,4,5]},{pos:[-30,5,-30],size:[3,10,3]},{pos:[30,5,-30],size:[3,10,3]},{pos:[-30,5,30],size:[3,10,3]},{pos:[30,5,30],size:[3,10,3]}],portals:[{a:[0,25,-30],b:[0,25,30],color:16729343}]}},KEYS:{PLAYER_1:{UP:"KeyW",DOWN:"KeyS",LEFT:"KeyA",RIGHT:"KeyD",ROLL_LEFT:"KeyQ",ROLL_RIGHT:"KeyE",BOOST:"ShiftLeft",SHOOT:"KeyF",NEXT_ITEM:"KeyR",DROP:"KeyG",CAMERA:"KeyC"},PLAYER_2:{UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",ROLL_LEFT:"KeyN",ROLL_RIGHT:"KeyM",BOOST:"ShiftRight",SHOOT:"KeyJ",NEXT_ITEM:"KeyL",DROP:"KeyH",CAMERA:"KeyV"}}};class pg{constructor(t){this.canvas=t,this.renderer=new Hl({canvas:this.canvas,antialias:window.devicePixelRatio<=1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.setSize(window.innerWidth,window.innerHeight),this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.renderer.toneMapping=Gr,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(D.COLORS.BACKGROUND),this.scene=new bm,this.scene.fog=new oo(D.COLORS.BACKGROUND,50,200),this._setupLights(),this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[],this.splitScreen=!1,window.addEventListener("resize",()=>this._onResize()),this._tmpVec=new R,this._tmpVec2=new R,this._tmpLookAt=new R,this._tmpCamDir=new R,this._tmpCamProbe=new R}_setupLights(){const t=new fg(D.COLORS.AMBIENT_LIGHT,.8);this.scene.add(t);const e=new tl(16777215,.8);e.position.set(30,50,30),e.castShadow=!0,e.shadow.mapSize.set(D.RENDER.SHADOW_MAP_SIZE,D.RENDER.SHADOW_MAP_SIZE),e.shadow.camera.near=1,e.shadow.camera.far=150,e.shadow.camera.left=-60,e.shadow.camera.right=60,e.shadow.camera.top=60,e.shadow.camera.bottom=-60,this.scene.add(e);const n=new tl(4482730,.3);n.position.set(-20,30,-10),this.scene.add(n)}createCamera(t){const e=new Ve(D.CAMERA.FOV,this._getAspect(),D.CAMERA.NEAR,D.CAMERA.FAR);return e.position.set(0,15,20),this.cameras.push(e),this.cameraTargets.push({position:new R,lookAt:new R}),this.cameraModes.push(0),this.cameraBoostBlend.push(0),e}setSplitScreen(t){this.splitScreen=t,this._updateCameraAspects()}cycleCamera(t){t<this.cameraModes.length&&(this.cameraModes[t]=(this.cameraModes[t]+1)%D.CAMERA.MODES.length)}getCameraMode(t){return D.CAMERA.MODES[this.cameraModes[t]||0]}updateCamera(t,e,n,i,r=null,o=!1,a=!1,l=null,c=null){if(t>=this.cameras.length)return;const h=this.cameras[t],u=this.cameraTargets[t],d=this.getCameraMode(t),m=D.CAMERA.SMOOTHING,g=d==="FIRST_PERSON"&&!0&&!!c,_=D.CAMERA.FIRST_PERSON_NOSE_CLEARANCE,f=g&&d==="FIRST_PERSON",p=d==="FIRST_PERSON"&&a?1:0,M=Math.max(.001,D.CAMERA.FIRST_PERSON_BOOST_BLEND_SPEED),v=1-Math.exp(-M*Math.max(0,i)),S=this.cameraBoostBlend[t]||0,P=Pn.clamp(Pn.lerp(S,p,v),0,1);this.cameraBoostBlend[t]=P;const w=Pn.lerp(D.CAMERA.FIRST_PERSON_OFFSET,D.CAMERA.FIRST_PERSON_BOOST_OFFSET,P);if(o&&r){d==="THIRD_PERSON"?(this._tmpVec.set(0,D.CAMERA.FOLLOW_HEIGHT,D.CAMERA.FOLLOW_DISTANCE),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_)):(this._tmpVec.set(0,0,-w),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l)):d==="TOP_DOWN"&&(this._tmpVec.set(0,40,5),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec));const b=f?1:1-Math.pow(1-m,i*60);h.position.lerp(u.position,b),f?h.quaternion.copy(r):h.quaternion.slerp(r,b)}else{if(d==="THIRD_PERSON"?(this._tmpVec.copy(n).multiplyScalar(-12),this._tmpVec.y+=D.CAMERA.FOLLOW_HEIGHT,u.position.copy(e).add(this._tmpVec),this._tmpVec2.copy(n).multiplyScalar(D.CAMERA.LOOK_AHEAD),u.lookAt.copy(e).add(this._tmpVec2)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(u.position).add(this._tmpVec2)):(this._tmpVec.copy(n).multiplyScalar(w),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(e).add(this._tmpVec2)):d==="TOP_DOWN"&&(u.position.set(e.x,e.y+40,e.z+5),u.lookAt.copy(e)),f){h.position.copy(u.position),h.lookAt(u.lookAt);return}const b=1-Math.pow(1-m,i*60);h.position.lerp(u.position,b),h.getWorldDirection(this._tmpLookAt),this._tmpLookAt.multiplyScalar(10).add(h.position),this._tmpLookAt.lerp(u.lookAt,b),h.lookAt(this._tmpLookAt)}}_resolveCameraCollision(t,e,n){if(!n||typeof n.checkCollision!="function")return;const i=Math.max(.05,D.CAMERA.COLLISION_RADIUS);if(!n.checkCollision(e,i)||(this._tmpCamDir.copy(e).sub(t),this._tmpCamDir.lengthSq()<1e-6))return;let r=0,o=1,a=0;const l=Math.max(4,Math.floor(D.CAMERA.COLLISION_STEPS));for(let u=0;u<l;u++){const d=(r+o)*.5;this._tmpCamProbe.copy(t).addScaledVector(this._tmpCamDir,d),n.checkCollision(this._tmpCamProbe,i)?o=d:(a=d,r=d)}const c=Math.max(0,D.CAMERA.COLLISION_BACKOFF),h=Math.max(0,a-c);e.copy(t).addScaledVector(this._tmpCamDir,h)}render(){const t=this._width,e=this._height;this.splitScreen&&this.cameras.length>=2?(this.renderer.setViewport(0,0,t/2,e),this.renderer.setScissor(0,0,t/2,e),this.renderer.setScissorTest(!0),this.renderer.render(this.scene,this.cameras[0]),this.renderer.setViewport(t/2,0,t/2,e),this.renderer.setScissor(t/2,0,t/2,e),this.renderer.render(this.scene,this.cameras[1]),this.renderer.setScissorTest(!1)):this.cameras.length>0&&(this.renderer.setViewport(0,0,t,e),this.renderer.render(this.scene,this.cameras[0]))}_getAspect(){return this.splitScreen?this._width/2/this._height:this._width/this._height}_updateCameraAspects(){const t=this._getAspect();for(const e of this.cameras)e.aspect=t,e.updateProjectionMatrix()}_onResize(){this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.setSize(this._width,this._height),this._updateCameraAspects()}addToScene(t){this.scene.add(t)}removeFromScene(t){this.scene.remove(t)}clearScene(){const t=[];this.scene.traverse(e=>{!e.isLight&&e!==this.scene&&t.push(e)});for(const e of t)e.parent===this.scene&&this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose());this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[]}setQuality(t){t==="LOW"?(this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,.8)),this.renderer.toneMapping=mn,this.scene.fog.near=30,this.scene.fog.far=120):(this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.toneMapping=Gr,this.scene.fog.near=50,this.scene.fog.far=200),this.scene.traverse(e=>{e.isMesh&&e.material&&(e.material.needsUpdate=!0)})}}class mg{constructor(t,e){this.updateFn=t,this.renderFn=e,this.running=!1,this.lastTime=0,this.timeScale=1,this._boundLoop=this._loop.bind(this),this.frameId=null,this._errorShown=!1,this.accumulator=0,this.fixedStep=1/60}start(){this.running=!0,this.lastTime=performance.now(),this._errorShown=!1,this.frameId=requestAnimationFrame(this._boundLoop)}stop(){this.running=!1,this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null)}setTimeScale(t){this.timeScale=t}_loop(t){if(!this.running)return;const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.05);this.accumulator+=n*this.timeScale;const i=this.fixedStep*3;this.accumulator>i&&(this.accumulator=i);try{let r=!1;for(;this.accumulator>=this.fixedStep;)this.updateFn(this.fixedStep),this.accumulator-=this.fixedStep,r=!0;!r&&n>0&&this.updateFn(n*this.timeScale),this.renderFn()}catch(r){if(!this._errorShown){this._errorShown=!0,console.error("GameLoop error:",r);const o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;width:100%;padding:20px;background:#c00;color:#fff;font:16px monospace;z-index:99999;white-space:pre-wrap;",o.textContent="FEHLER: "+r.message+`

`+r.stack,document.body.appendChild(o)}}this.frameId=requestAnimationFrame(this._boundLoop)}}const gg=["UP","DOWN","LEFT","RIGHT","ROLL_LEFT","ROLL_RIGHT","BOOST","SHOOT","NEXT_ITEM","DROP","CAMERA"];function el(s){return JSON.parse(JSON.stringify(s))}class _g{constructor(){this.keys={},this.justPressed={},this.bindings=el(D.KEYS),this._reuseInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,nextItem:!1},window.addEventListener("keydown",t=>{this.keys[t.code]||(this.justPressed[t.code]=!0),this.keys[t.code]=!0,t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.preventDefault()})}setBindings(t){this.bindings={PLAYER_1:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_1,D.KEYS.PLAYER_1),PLAYER_2:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_2,D.KEYS.PLAYER_2)}}getBindings(){return el(this.bindings)}_normalizePlayerBindings(t,e){const n=t||{},i={};for(const r of gg)i[r]=n[r]||e[r];return i}isDown(t){return!!this.keys[t]}wasPressed(t){return this.justPressed[t]?(this.justPressed[t]=!1,!0):!1}clearJustPressed(){this.justPressed={}}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.nextItem=!1}_isActionDown(t,e=""){return this.isDown(t)?!0:!!e&&this.isDown(e)}_wasActionPressed(t,e=""){let n=this.wasPressed(t);return e&&e!==t&&(n=this.wasPressed(e)||n),n}getPlayerInput(t,e={}){const n=!!e.includeSecondaryBindings&&t===0,i=t===0?this.bindings.PLAYER_1:this.bindings.PLAYER_2,r=n?this.bindings.PLAYER_2:null;return this._resetInput(this._reuseInput),this._reuseInput.pitchUp=this._isActionDown(i.UP,(r==null?void 0:r.UP)||""),this._reuseInput.pitchDown=this._isActionDown(i.DOWN,(r==null?void 0:r.DOWN)||""),this._reuseInput.yawLeft=this._isActionDown(i.LEFT,(r==null?void 0:r.LEFT)||""),this._reuseInput.yawRight=this._isActionDown(i.RIGHT,(r==null?void 0:r.RIGHT)||""),this._reuseInput.rollLeft=this._isActionDown(i.ROLL_LEFT,(r==null?void 0:r.ROLL_LEFT)||""),this._reuseInput.rollRight=this._isActionDown(i.ROLL_RIGHT,(r==null?void 0:r.ROLL_RIGHT)||""),this._reuseInput.boost=this._isActionDown(i.BOOST,(r==null?void 0:r.BOOST)||""),this._reuseInput.cameraSwitch=this._wasActionPressed(i.CAMERA,(r==null?void 0:r.CAMERA)||""),this._reuseInput.dropItem=this._wasActionPressed(i.DROP,(r==null?void 0:r.DROP)||""),this._reuseInput.shootItem=this._wasActionPressed(i.SHOOT,(r==null?void 0:r.SHOOT)||""),this._reuseInput.nextItem=this._wasActionPressed(i.NEXT_ITEM,(r==null?void 0:r.NEXT_ITEM)||""),this._reuseInput}}class vg{constructor(t){this.renderer=t,this.obstacles=[],this.portals=[],this.portalsEnabled=!0,this.bounds={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},this._tmpSphere=new _n}build(t){const e=D.MAPS[t]||D.MAPS.standard;this.currentMapKey=t;const n=D.ARENA.MAP_SCALE,[i,r,o]=e.size,a=i*n,l=r*n,c=o*n,h=a/2,u=l/2,d=c/2;this.bounds={minX:-h,maxX:h,minY:0,maxY:l,minZ:-d,maxZ:d};const m=this._createCheckerTexture(D.ARENA.CHECKER_LIGHT_COLOR,D.ARENA.CHECKER_DARK_COLOR),g=Math.max(1,D.ARENA.CHECKER_WORLD_SIZE),_=m.clone();_.needsUpdate=!0,_.repeat.set(Math.max(1,a/g),Math.max(1,c/g));const f=m.clone();f.needsUpdate=!0,f.repeat.set(Math.max(1,a/g),Math.max(1,l/g));const p=new Pe({color:16777215,map:f,transparent:!0,opacity:.9,roughness:.75,metalness:.1,side:Ke}),M=new Pe({color:16777215,map:_,roughness:.9,metalness:.05}),v=new Pe({color:2763338,roughness:.4,metalness:.5,transparent:!0,opacity:.6}),S=new Yt(new $s(a,c),M);S.rotation.x=-Math.PI/2,S.receiveShadow=!0,S.matrixAutoUpdate=!1,S.updateMatrix(),this.renderer.addToScene(S);const P=D.ARENA.WALL_THICKNESS*n;this._addWall(0,u,d+P/2,a+2*P,l,P,p),this._addWall(0,u,-d-P/2,a+2*P,l,P,p),this._addWall(-h-P/2,u,0,P,l,c,p),this._addWall(h+P/2,u,0,P,l,c,p),this._addWall(0,l,0,a,P,c,p);for(const w of e.obstacles){const[b,F,y]=w.pos,[A,B,H]=w.size;this._addObstacle(b*n,F*n,y*n,A*n,B*n,H*n,v)}this._buildPortals(e,n),this._addParticles(a,l,c)}_buildPortals(t,e){if(this.portals=[],!this.portalsEnabled)return;const n=Math.max(0,Math.floor(D.GAMEPLAY.PORTAL_COUNT||0));if(n>0){this._buildFixedDynamicPortals(n);return}if(Array.isArray(t.portals))for(const i of t.portals)this._createPortalFromDef(i,e);this._validatePortalPlacements()}_createPortalFromDef(t,e){const n=this._resolvePortalPosition(new R(t.a[0]*e,t.a[1]*e,t.a[2]*e),11),i=this._resolvePortalPosition(new R(t.b[0]*e,t.b[1]*e,t.b[2]*e),29),r=t.color||65484;this._addPortalInstance(n,i,r,"NEUTRAL","NEUTRAL")}_buildFixedDynamicPortals(t){D.GAMEPLAY.PLANAR_MODE?this._buildFixedPlanarPortals(t):this._buildFixed3DPortals(t)}_buildFixed3DPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPortalSlots3D();if(!(n.length<2))for(let i=0;i<t;i++){const r=n[i*2%n.length],o=n[(i*2+5)%n.length],a=n[(i*2+7)%n.length],l=this._portalPositionFromSlot(r,i*13+5);let c=this._portalPositionFromSlot(o,i*17+9);l.distanceToSquared(c)<64&&(c=this._portalPositionFromSlot(a,i*23+3)),this._addPortalInstance(l,c,e[i%e.length],"NEUTRAL","NEUTRAL")}}_buildFixedPlanarPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPlanarAnchors(),i=this.getPortalLevelsFallback();if(n.length===0||i.length<2)return;const r=i.length-1;for(let o=0;o<t;o++){const a=n[o%n.length],l=(o+Math.floor(o/Math.max(1,n.length)))%r,c=i[l],h=i[l+1],u=this._resolvePlanarElevatorPair(a[0],a[1],c,h,o*29+7);u&&this._addPortalInstance(u.low,u.high,e[o%e.length],"UP","DOWN")}}_getMapPortalSlots3D(){const t={standard:[[-.75,.18,-.75],[.75,.18,.75],[.75,.35,-.75],[-.75,.35,.75],[-.2,.52,-.82],[.2,.52,.82],[-.82,.62,.2],[.82,.62,-.2],[0,.26,-.35],[0,.58,.35],[-.45,.72,0],[.45,.72,0]],empty:[[-.78,.2,-.78],[.78,.2,.78],[.78,.2,-.78],[-.78,.2,.78],[0,.45,-.82],[0,.45,.82],[-.82,.45,0],[.82,.45,0],[-.35,.72,-.35],[.35,.72,.35],[.35,.72,-.35],[-.35,.72,.35]],maze:[[-.8,.22,-.6],[.8,.22,.6],[-.8,.22,.6],[.8,.22,-.6],[-.25,.5,-.8],[.25,.5,.8],[-.6,.62,0],[.6,.62,0],[0,.35,-.2],[0,.35,.2],[-.4,.75,-.35],[.4,.75,.35]],complex:[[-.82,.2,-.82],[.82,.2,.82],[.82,.2,-.82],[-.82,.2,.82],[-.5,.42,-.1],[.5,.42,.1],[-.1,.55,.5],[.1,.55,-.5],[0,.72,-.72],[0,.72,.72],[-.72,.72,0],[.72,.72,0]],pyramid:[[-.78,.18,-.78],[.78,.18,.78],[.78,.18,-.78],[-.78,.18,.78],[-.45,.38,-.45],[.45,.38,.45],[0,.58,-.78],[0,.58,.78],[-.78,.58,0],[.78,.58,0],[-.2,.78,0],[.2,.78,0]]};return t[this.currentMapKey]||t.standard}_getMapPlanarAnchors(){const t={standard:[[-.7,-.7],[.7,-.7],[.7,.7],[-.7,.7],[0,-.45],[0,.45],[-.45,0],[.45,0]],empty:[[-.75,-.75],[.75,-.75],[.75,.75],[-.75,.75],[0,-.55],[0,.55],[-.55,0],[.55,0]],maze:[[-.78,-.62],[.78,-.62],[.78,.62],[-.78,.62],[0,-.72],[0,.72],[-.52,0],[.52,0]],complex:[[-.82,-.82],[.82,-.82],[.82,.82],[-.82,.82],[-.55,0],[.55,0],[0,-.55],[0,.55]],pyramid:[[-.78,-.78],[.78,-.78],[.78,.78],[-.78,.78],[-.48,0],[.48,0],[0,-.48],[0,.48]]};return t[this.currentMapKey]||t.standard}_portalPositionFromSlot(t,e){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,r=(t[0]+1)*.5,o=t[1],a=(t[2]+1)*.5,l=new R(n.minX+i+r*(n.maxX-n.minX-2*i),n.minY+i+o*(n.maxY-n.minY-2*i),n.minZ+i+a*(n.maxZ-n.minZ-2*i));return this._resolvePortalPosition(l,e)}_portalPositionFromXZLevel(t,e,n,i){const r=this.bounds,o=D.PORTAL.RING_SIZE+2.5,a=new R(r.minX+o+(t+1)*.5*(r.maxX-r.minX-2*o),n,r.minZ+o+(e+1)*.5*(r.maxZ-r.minZ-2*o));return this._resolvePortalPosition(a,i)}_resolvePlanarElevatorPair(t,e,n,i,r=0){const o=Math.min(n,i),a=Math.max(n,i),l=this.bounds,c=D.PORTAL.RING_SIZE+2.5,h=D.PORTAL.RADIUS*.75,u=l.minX+c+(t+1)*.5*(l.maxX-l.minX-2*c),d=l.minZ+c+(e+1)*.5*(l.maxZ-l.minZ-2*c),m=new R,g=new R;for(let v=0;v<28;v++){const S=(r+v*41)%360*Math.PI/180,P=v===0?0:2.2+(v-1)*1.2,w=Math.max(l.minX+c,Math.min(l.maxX-c,u+Math.cos(S)*P)),b=Math.max(l.minZ+c,Math.min(l.maxZ-c,d+Math.sin(S)*P));if(m.set(w,o,b),g.set(w,a,b),!this.checkCollision(m,h)&&!this.checkCollision(g,h))return{low:m.clone(),high:g.clone()}}const _=this._resolvePortalPosition(new R(u,o,d),r),f=new R(_.x,a,_.z);if(!this.checkCollision(f,h))return{low:_,high:f};const p=this._resolvePortalPosition(new R(u,a,d),r+17),M=new R(p.x,o,p.z);return this.checkCollision(M,h)?null:{low:M,high:p}}_resolvePortalPosition(t,e=0){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,r=D.PORTAL.RADIUS*.75;if(!this.checkCollision(t,r))return t;const o=new R;for(let a=0;a<20;a++){const l=(e+a*37)%360*Math.PI/180,c=2.5+a*1.3,h=(a%5-2)*1.1;if(o.set(t.x+Math.cos(l)*c,t.y+h,t.z+Math.sin(l)*c),o.x=Math.max(n.minX+i,Math.min(n.maxX-i,o.x)),o.y=Math.max(n.minY+i,Math.min(n.maxY-i,o.y)),o.z=Math.max(n.minZ+i,Math.min(n.maxZ-i,o.z)),!this.checkCollision(o,r))return o.clone()}return t}_addPortalInstance(t,e,n,i="NEUTRAL",r="NEUTRAL"){const o=this._createPortalMesh(t,n,i),a=this._createPortalMesh(e,n,r);this.portals.push({posA:t,posB:e,meshA:o,meshB:a,color:n,cooldowns:new Map})}_createPortalMesh(t,e,n="NEUTRAL"){const i=new bn,r=D.PORTAL.RING_SIZE;let o=e;n==="UP"&&(o=65280),n==="DOWN"&&(o=16711680);const a=new Xs(r,.3,16,32),l=new Pe({color:o,emissive:o,emissiveIntensity:1.2,roughness:.2,metalness:.8}),c=new Yt(a,l);i.add(c);const h=new co(r*.85,32),u=new je({color:o,transparent:!0,opacity:.15,side:Ke}),d=new Yt(h,u);i.add(d);const m=new Xs(r*.6,.15,12,24),g=new Pe({color:16777215,emissive:o,emissiveIntensity:.5,transparent:!0,opacity:.6}),_=new Yt(m,g);if(i.add(_),n!=="NEUTRAL"){const f=new pn(.8,2.5,8),p=new je({color:o,transparent:!0,opacity:.8}),M=new Yt(f,p);n==="UP"?M.position.y=0:n==="DOWN"&&(M.rotation.x=Math.PI,M.position.y=0),i.add(M),i.userData.arrow=M,i.userData.direction=n}return i.position.copy(t),this.renderer.addToScene(i),i}toggleBeams(){}checkPortal(t,e,n){if(!this.portalsEnabled)return null;const i=D.PORTAL.RADIUS,r=(i+e)*(i+e);for(const o of this.portals){if(o.cooldowns.has(n)&&o.cooldowns.get(n)>0)continue;const a=t.distanceToSquared(o.posA),l=t.distanceToSquared(o.posB);if(a<r){const c=o.posA.distanceTo(o.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return o.cooldowns.set(n,h),{target:o.posB,portal:o}}if(l<r){const c=o.posA.distanceTo(o.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return o.cooldowns.set(n,h),{target:o.posA,portal:o}}}return null}_createCheckerTexture(t,e){const r=document.createElement("canvas");r.width=128,r.height=128;const o=r.getContext("2d"),a=`#${t.toString(16).padStart(6,"0")}`,l=`#${e.toString(16).padStart(6,"0")}`;o.fillStyle=a,o.fillRect(0,0,64,64),o.fillRect(64,64,64,64),o.fillStyle=l,o.fillRect(64,0,64,64),o.fillRect(0,64,64,64);const c=new Lm(r);return c.wrapS=Wi,c.wrapT=Wi,c.magFilter=Me,c.minFilter=Ns,c}_addWall(t,e,n,i,r,o,a){const l=new Je(i,r,o),c=new Yt(l,a);c.position.set(t,e,n),c.matrixAutoUpdate=!1,c.updateMatrix(),this.renderer.addToScene(c);const h=new nn().setFromObject(c);this.obstacles.push({mesh:c,box:h,isWall:!0})}_addObstacle(t,e,n,i,r,o,a){const l=new Je(i,r,o),c=new Xm(l),h=new Xl({color:4482730,transparent:!0,opacity:.5}),u=new Yt(l,a.clone());u.position.set(t,e,n),u.castShadow=!1,u.receiveShadow=!1,u.matrixAutoUpdate=!1,u.updateMatrix(),this.renderer.addToScene(u);const d=new Pm(c,h);d.position.copy(u.position),d.matrixAutoUpdate=!1,d.updateMatrix(),this.renderer.addToScene(d);const m=new nn().setFromObject(u);this.obstacles.push({mesh:u,box:m,isWall:!1})}_addParticles(t,e,n){const r=new Ee,o=new Float32Array(200*3);for(let l=0;l<200;l++)o[l*3]=(Math.random()-.5)*t,o[l*3+1]=Math.random()*e,o[l*3+2]=(Math.random()-.5)*n;r.setAttribute("position",new He(o,3));const a=new Yl({color:4491519,size:.15,transparent:!0,opacity:.4,sizeAttenuation:!0,sizeAttenuation:!0});this.particles=new Cm(r,a),this.renderer.addToScene(this.particles)}checkCollision(t,e){const n=this.bounds;if(t.x-e<n.minX||t.x+e>n.maxX||t.y-e<n.minY||t.y+e>n.maxY||t.z-e<n.minZ||t.z+e>n.maxZ)return!0;this._tmpSphere.center.copy(t),this._tmpSphere.radius=e;for(const i of this.obstacles)if(i.box.intersectsSphere(this._tmpSphere))return!0;return!1}getRandomPosition(t=5){const e=this.bounds;for(let n=0;n<50;n++){const i=e.minX+t+Math.random()*(e.maxX-e.minX-2*t),r=3+Math.random()*(e.maxY-6),o=e.minZ+t+Math.random()*(e.maxZ-e.minZ-2*t),a=new R(i,r,o);if(!this.checkCollision(a,3))return a}return new R(0,D.PLAYER.START_Y,0)}getRandomPositionOnLevel(t,e=5){const n=this.bounds,i=Math.max(n.minY+3,Math.min(n.maxY-3,t));for(let r=0;r<50;r++){const o=n.minX+e+Math.random()*(n.maxX-n.minX-2*e),a=n.minZ+e+Math.random()*(n.maxZ-n.minZ-2*e),l=new R(o,i,a);if(!this.checkCollision(l,3))return l}return new R(0,i,0)}getPortalLevelsFallback(){const t=this.bounds,e=Math.max(1,t.maxY-t.minY),n=Math.max(2,Math.floor(D.GAMEPLAY.PLANAR_LEVEL_COUNT||5)),i=.18,r=.82,o=[];for(let a=0;a<n;a++){const l=n<=1?.5:a/(n-1),c=i+(r-i)*l;o.push(t.minY+e*c)}return o}getPortalLevels(){const t=[];for(const n of this.portals)for(const i of[n.posA.y,n.posB.y]){let r=!1;for(const o of t)if(Math.abs(o-i)<=.35){r=!0;break}r||t.push(i)}return t.length===0?this.getPortalLevelsFallback():(t.sort((n,i)=>n-i),t)}update(t){this.particles&&(this.particles.rotation.y+=t*.02);const e=D.PORTAL.ROTATION_SPEED;for(const n of this.portals){n.meshA&&(n.meshA.rotation.z+=t*e,n.meshA.rotation.y+=t*e*.3),n.meshB&&(n.meshB.rotation.z-=t*e,n.meshB.rotation.y-=t*e*.3);const i=[];for(const[r,o]of n.cooldowns){const a=o-t;a<=0?i.push(r):n.cooldowns.set(r,a)}for(let r=0;r<i.length;r++)n.cooldowns.delete(i[r])}}_validatePortalPlacements(){if(!this.portals||this.portals.length===0)return;const t=D.GAMEPLAY.PLANAR_MODE?D.PORTAL.MIN_PAIR_DISTANCE_PLANAR:D.PORTAL.MIN_PAIR_DISTANCE,e=t*t;for(let n=this.portals.length-1;n>=0;n--){const i=this.portals[n];i.posA.distanceToSquared(i.posB)<e&&(console.warn(`[Arena] Portal pair ${n} too close together! Removing.`),this.portals.splice(n,1))}}}const xg=new Pi(1,1,1,4),Sg=new R(0,1,0),qe=new ce,Ls=10;class yg{constructor(t,e){this.renderer=t,this.color=e,this.maxSegments=D.TRAIL.MAX_SEGMENTS,this.writeIndex=0,this.segmentCount=0,this._dirty=!1,this.timeSinceUpdate=0,this.hasLastPosition=!1,this.lastX=0,this.lastY=0,this.lastZ=0,this.inGap=!1,this.gapTimer=0,this.width=D.TRAIL.WIDTH,this._tmpDir=new R,this.material=new Pe({color:e,emissive:e,emissiveIntensity:.3,roughness:.3,metalness:.6}),this.mesh=new Wl(xg,this.material,this.maxSegments),this.mesh.instanceMatrix.setUsage(El),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,qe.scale.set(0,0,0),qe.updateMatrix();for(let n=0;n<this.maxSegments;n++)this.mesh.setMatrixAt(n,qe.matrix);this.renderer.addToScene(this.mesh),this.segmentsData=new Float32Array(this.maxSegments*7),this.grid=new Map,this.segmentCells=new Int32Array(this.maxSegments),this._tmpCollisionNormal=new R,this._collisionResult={hit:!0,normal:this._tmpCollisionNormal}}setWidth(t){this.width=t}resetWidth(){this.width=D.TRAIL.WIDTH}forceGap(t=.5){this.inGap=!0,this.gapTimer=t,this.hasLastPosition=!1}update(t,e,n){if(this.inGap){this.gapTimer-=t,this.gapTimer<=0&&(this.inGap=!1),this._setLastPosition(e);return}if(this.timeSinceUpdate+=t,this.timeSinceUpdate>=D.TRAIL.UPDATE_INTERVAL){if(this.timeSinceUpdate-=D.TRAIL.UPDATE_INTERVAL,Math.random()<D.TRAIL.GAP_CHANCE){this.inGap=!0,this.gapTimer=D.TRAIL.GAP_DURATION,this._setLastPosition(e);return}this.hasLastPosition&&this._addSegment(this.lastX,this.lastY,this.lastZ,e.x,e.y,e.z),this._setLastPosition(e)}this._dirty&&(this.mesh.count=Math.min(this.segmentCount,this.maxSegments),this.mesh.instanceMatrix.needsUpdate=!0,this._dirty=!1)}_setLastPosition(t){this.hasLastPosition=!0,this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z}_getKey(t,e){const n=Math.floor(t/Ls),i=Math.floor(e/Ls);return(n+1e3)*2e3+(i+1e3)}_addSegment(t,e,n,i,r,o){const a=i-t,l=r-e,c=o-n,h=Math.sqrt(a*a+l*l+c*c);if(h<.01)return;if(this.segmentCount>=this.maxSegments){const p=this.segmentCells[this.writeIndex];if(this.grid.has(p)){const M=this.grid.get(p),v=M.indexOf(this.writeIndex);if(v!==-1){const S=M[M.length-1];M[v]=S,M.pop()}M.length===0&&this.grid.delete(p)}}const u=this.width*.5,d=(t+i)*.5,m=(e+r)*.5,g=(n+o)*.5;qe.position.set(d,m,g),this._tmpDir.set(a/h,l/h,c/h),qe.quaternion.setFromUnitVectors(Sg,this._tmpDir),qe.scale.set(u,h,u),qe.updateMatrix(),this.mesh.setMatrixAt(this.writeIndex,qe.matrix),this._dirty=!0;const _=this.writeIndex*7;this.segmentsData[_]=t,this.segmentsData[_+1]=e,this.segmentsData[_+2]=n,this.segmentsData[_+3]=i,this.segmentsData[_+4]=r,this.segmentsData[_+5]=o,this.segmentsData[_+6]=u;const f=this._getKey(d,g);this.grid.has(f)||this.grid.set(f,[]),this.grid.get(f).push(this.writeIndex),this.segmentCells[this.writeIndex]=f,this.writeIndex=(this.writeIndex+1)%this.maxSegments,this.segmentCount<this.maxSegments&&this.segmentCount++}_checkCollisionInternal(t,e,n,i=null){if(this.segmentCount===0)return!1;const r=Math.floor(t.x/Ls),o=Math.floor(t.z/Ls);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=r+a,h=o+l,u=(c+1e3)*2e3+(h+1e3),d=this.grid.get(u);if(d)for(let m=0;m<d.length;m++){const g=d[m];if((this.writeIndex-1-g+this.maxSegments)%this.maxSegments<n)continue;const f=g*7,p=this.segmentsData[f+6],M=e+p,v=this.segmentsData[f],S=this.segmentsData[f+3],P=(v<S?v:S)-p,w=(v>S?v:S)+p;if(t.x<P||t.x>w)continue;const b=this.segmentsData[f+2],F=this.segmentsData[f+5],y=(b<F?b:F)-p,A=(b>F?b:F)+p;if(t.z<y||t.z>A)continue;const B=this.segmentsData[f],H=this.segmentsData[f+1],J=this.segmentsData[f+2],L=this.segmentsData[f+3],U=this.segmentsData[f+4],V=this.segmentsData[f+5],$=L-B,q=U-H,K=V-J,j=t.x-B,it=t.y-H,rt=t.z-J,W=$*$+q*q+K*K;let Z=0;W>1e-6&&(Z=(j*$+it*q+rt*K)/W,Z<0?Z=0:Z>1&&(Z=1));const ft=B+Z*$,St=H+Z*q,gt=J+Z*K,At=t.x-ft,Pt=t.y-St,xt=t.z-gt,Ct=At*At+Pt*Pt+xt*xt;if(Ct<=M*M){if(i){const C=Math.sqrt(Ct)||.001;i.set(At/C,Pt/C,xt/C)}return!0}}}return!1}checkCollisionFast(t,e,n=20){return this._checkCollisionInternal(t,e,n,null)}checkCollision(t,e,n=20){return this._checkCollisionInternal(t,e,n,this._tmpCollisionNormal)?this._collisionResult:!1}_distanceSqPointToSegment(t,e,n,i,r,o,a,l,c){const h=a-i,u=l-r,d=c-o,m=t-i,g=e-r,_=n-o,f=h*h+u*u+d*d;if(f<=1e-6)return m*m+g*g+_*_;let p=(m*h+g*u+_*d)/f;p<0?p=0:p>1&&(p=1);const M=i+p*h,v=r+p*u,S=o+p*d,P=t-M,w=e-v,b=n-S;return P*P+w*w+b*b}clear(){qe.scale.set(0,0,0),qe.updateMatrix();for(let t=0;t<this.maxSegments;t++)this.mesh.setMatrixAt(t,qe.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.count=0,this.writeIndex=0,this.segmentCount=0,this.hasLastPosition=!1,this.timeSinceUpdate=0,this.inGap=!1,this.grid.clear(),this.segmentCells.fill(0)}dispose(){this.renderer.removeFromScene(this.mesh),this.mesh.dispose(),this.material.dispose()}}const te={};function Mg(){if(te.body)return;te.body=new pn(.35,3.2,8),te.body.rotateX(Math.PI/2),te.cockpit=new Ws(.28,10,10,0,Math.PI*2,0,Math.PI/2),te.nozzle=new Pi(.2,.25,.4,8),te.nozzle.rotateX(Math.PI/2),te.flameInner=new pn(.15,1,8),te.flameInner.rotateX(-Math.PI/2),te.flameMid=new pn(.22,1.4,8),te.flameMid.rotateX(-Math.PI/2),te.flameOuter=new pn(.28,1.8,8),te.flameOuter.rotateX(-Math.PI/2),te.shield=new Ws(1.5,8,8);const s=new Us;s.moveTo(0,0),s.lineTo(-1.8,.6),s.lineTo(-.3,.8),s.lineTo(0,0),te.wingL=new Hi(s,{depth:.06,bevelEnabled:!1});const t=new Us;t.moveTo(0,0),t.lineTo(1.8,.6),t.lineTo(.3,.8),t.lineTo(0,0),te.wingR=new Hi(t,{depth:.06,bevelEnabled:!1});const e=new Us;e.moveTo(0,0),e.lineTo(0,.8),e.lineTo(.4,.1),e.lineTo(0,0),te.fin=new Hi(e,{depth:.04,bevelEnabled:!1})}class nl{constructor(t,e,n,i=!1){this.renderer=t,this.index=e,this.color=n,this.isBot=i,this.alive=!0,this.score=0,this.position=new R,this.velocity=new R(0,0,-1),this.quaternion=new Yn,this.speed=D.PLAYER.SPEED,this.baseSpeed=D.PLAYER.SPEED,this._tmpEuler=new Ln(0,0,0,"YXZ"),this._tmpEuler2=new Ln(0,0,0,"YXZ"),this._tmpQuat=new Yn,this._tmpVec=new R,this._tmpDir=new R,this._tmpAimRight=new R,this._tmpAimUp=new R,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.inventory=[],this.selectedItemIndex=0,this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.invertPitchBase=!1,this.modelScale=D.PLAYER.MODEL_SCALE||1,this.cockpitCamera=!1,this.spawnProtectionTimer=0,this.planarAimOffset=0,this.forcePlanarMode=!1,this.cameraMode=0,this._createModel(),this.trail=new yg(t,n)}_createModel(){Mg(),this.group=new bn;const t=new Pe({color:this.color,emissive:this.color,emissiveIntensity:.2,roughness:.3,metalness:.7}),e=new Pe({color:this.color,emissive:this.color,emissiveIntensity:.1,roughness:.4,metalness:.8}),n=new Yt(te.body,t);n.castShadow=!1,this.group.add(n);const i=new Pe({color:8965375,emissive:2254506,emissiveIntensity:.3,transparent:!0,opacity:.7,roughness:.1,metalness:.9}),r=new Yt(te.cockpit,i);r.rotation.x=-Math.PI/2,r.position.set(0,.2,-.7),this.group.add(r),this.firstPersonAnchor=new ce,this.firstPersonAnchor.position.set(0,D.PLAYER.NOSE_CAMERA_LOCAL_Y,D.PLAYER.NOSE_CAMERA_LOCAL_Z),this.group.add(this.firstPersonAnchor);const o=new Yt(te.wingL,e);o.position.set(0,-.02,.1),o.castShadow=!1,this.group.add(o);const a=new Yt(te.wingR,e);a.position.set(0,-.02,.1),a.castShadow=!1,this.group.add(a);const l=new Yt(te.fin,t);l.position.set(-.02,.15,1),l.castShadow=!1,this.group.add(l);const c=new Pe({color:3355443,roughness:.6,metalness:.9}),h=new Yt(te.nozzle,c);h.position.z=1.5,this.group.add(h),this.flameGroup=new bn,this.flameGroup.position.z=1.9,this.flames=[];const u=new je({color:16777130,transparent:!0,opacity:.9}),d=new Yt(te.flameInner,u);this.flameGroup.add(d),this.flames.push(d);const m=new je({color:16746496,transparent:!0,opacity:.6}),g=new Yt(te.flameMid,m);this.flameGroup.add(g),this.flames.push(g);const _=new je({color:16724736,transparent:!0,opacity:.35}),f=new Yt(te.flameOuter,_);this.flameGroup.add(f),this.flames.push(f),this.group.add(this.flameGroup);const p=new je({color:4491519,transparent:!0,opacity:0,wireframe:!0});this.shieldMesh=new Yt(te.shield,p),this.group.add(this.shieldMesh),this.renderer.addToScene(this.group),this._applyModelScale()}spawn(t,e=null){this.position.copy(t),this.alive=!0,this.speed=this.baseSpeed,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.spawnProtectionTimer=D.PLAYER.SPAWN_PROTECTION,this.planarAimOffset=0;const n=D.PLAYER.START_Y,i=Number.isFinite(t==null?void 0:t.y)?t.y:n;if(this.currentPlanarY=this.isPlanarMode()?i:n,this.trail.clear(),this.trail.resetWidth(),this.group.visible=!0,e&&e.lengthSq()>1e-4)this._tmpVec.copy(e).normalize(),this.quaternion.setFromUnitVectors(this._tmpDir.set(0,0,-1),this._tmpVec);else{const r=Math.random()*Math.PI*2;this._tmpEuler.set(0,r,0,"YXZ"),this.quaternion.setFromEuler(this._tmpEuler)}this._updateModel()}update(t,e){if(!this.alive)return;this.spawnProtectionTimer=Math.max(0,this.spawnProtectionTimer-t);const n=this.isPlanarMode();this._updateEffects(t);const i=D.PLAYER.TURN_SPEED*t,r=D.PLAYER.ROLL_SPEED*t;let o=0,a=0,l=0;e&&(o=(e.pitchUp?1:0)-(e.pitchDown?1:0),a=(e.yawLeft?1:0)-(e.yawRight?1:0),l=(e.rollLeft?1:0)-(e.rollRight?1:0),this.invertPitchBase&&(o*=-1),this.invertControls&&(o*=-1,a*=-1),n&&(o=0),e.boost&&this.boostCooldown<=0&&!this.isBoosting&&(this.isBoosting=!0,this.boostTimer=D.PLAYER.BOOST_DURATION)),this._tmpEuler.set(o*i,a*i,l*r,"YXZ"),this._tmpQuat.setFromEuler(this._tmpEuler),this.quaternion.multiply(this._tmpQuat),D.PLAYER.AUTO_ROLL&&l===0?(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.z*=1-D.PLAYER.AUTO_ROLL_SPEED*t,n&&(this._tmpEuler2.x=0),this.quaternion.setFromEuler(this._tmpEuler2)):n&&(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.x=0,this.quaternion.setFromEuler(this._tmpEuler2)),this.isBoosting&&(this.boostTimer-=t,this.speed=this.baseSpeed*D.PLAYER.BOOST_MULTIPLIER,this.boostTimer<=0&&(this.isBoosting=!1,this.boostCooldown=D.PLAYER.BOOST_COOLDOWN,this.speed=this.baseSpeed)),this.boostCooldown>0&&(this.boostCooldown-=t),this._tmpVec.set(0,0,-1).applyQuaternion(this.quaternion),this.velocity.copy(this._tmpVec).multiplyScalar(this.speed),n&&(this.velocity.y=0,this.position.y=this.currentPlanarY),this.position.x+=this.velocity.x*t,n||(this.position.y+=this.velocity.y*t),this.position.z+=this.velocity.z*t,this.trail.update(t,this.position,this._tmpVec),this._updateModel()}_updateModel(){this.group.position.copy(this.position),this.group.quaternion.copy(this.quaternion);const t=performance.now()*.001;if(this.flames&&this.flames.length>0){const e=this.isBoosting?3:1,n=Math.sin(t*25)*.15+Math.sin(t*37)*.1,i=(.4+n*.3)*e;this.flames[0].scale.set(1,1,i),this.flames[0].material.opacity=this.isBoosting?1:.7;const r=(.35+n*.2)*e;this.flames[1].scale.set(1,1,r),this.flames[1].material.opacity=this.isBoosting?.8:.45;const o=(.3+n*.15)*e;this.flames[2].scale.set(1,1,o),this.flames[2].material.opacity=this.isBoosting?.6:.2,this.isBoosting?(this.flames[0].material.color.setHex(16777215),this.flames[1].material.color.setHex(16755251),this.flames[2].material.color.setHex(16729088)):(this.flames[0].material.color.setHex(16777130),this.flames[1].material.color.setHex(16746496),this.flames[2].material.color.setHex(16724736))}this.shieldMesh&&(this.shieldMesh.material.opacity=this.hasShield?.25+Math.sin(t*5)*.1:0)}_updateEffects(t){for(let e=this.activeEffects.length-1;e>=0;e--){const n=this.activeEffects[e];n.remaining-=t,n.remaining<=0&&(this._removeEffect(n),this.activeEffects.splice(e,1))}}_applyModelScale(){this.group&&this.group.scale.setScalar(this.modelScale)}setControlOptions(t={}){typeof t.invertPitch=="boolean"&&(this.invertPitchBase=t.invertPitch),typeof t.modelScale=="number"&&(this.modelScale=t.modelScale,this._applyModelScale()),typeof t.cockpitCamera=="boolean"&&(this.cockpitCamera=t.cockpitCamera),typeof t.forcePlanarMode=="boolean"&&(this.forcePlanarMode=t.forcePlanarMode)}applyPowerup(t){const e=D.POWERUP.TYPES[t];if(!e)return;this.activeEffects=this.activeEffects.filter(i=>i.type===t?(this._removeEffect(i),!1):!0);const n={type:t,remaining:e.duration};switch(this.activeEffects.push(n),t){case"SPEED_UP":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"THICK":this.trail.setWidth(e.trailWidth);break;case"THIN":this.trail.setWidth(e.trailWidth);break;case"SHIELD":this.hasShield=!0;break;case"GHOST":this.isGhost=!0;break;case"INVERT":this.invertControls=!0;break}}_removeEffect(t){switch(t.type){case"SPEED_UP":case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED,this.speed=this.baseSpeed;break;case"THICK":case"THIN":this.trail.resetWidth();break;case"SHIELD":this.hasShield=!1;break;case"GHOST":this.isGhost=!1;break;case"INVERT":this.invertControls=!1;break}}addToInventory(t){return this.inventory.length<D.POWERUP.MAX_INVENTORY?(this.inventory.push(t),!0):!1}cycleItem(){this.inventory.length>0?this.selectedItemIndex=(this.selectedItemIndex+1)%this.inventory.length:this.selectedItemIndex=0}useItem(){if(this.inventory.length>0&&this.selectedItemIndex<this.inventory.length){const t=this.inventory.splice(this.selectedItemIndex,1)[0];return this.selectedItemIndex>=this.inventory.length&&this.inventory.length>0&&(this.selectedItemIndex=0),this.applyPowerup(t),t}return null}dropItem(){return this.inventory.length>0?this.inventory.pop():null}kill(){this.alive=!1,this.group.visible=!1}isPlanarMode(){return!!(D.GAMEPLAY.PLANAR_MODE||this.forcePlanarMode)}getDirection(t=null){return t?t.set(0,0,-1).applyQuaternion(this.quaternion):new R(0,0,-1).applyQuaternion(this.quaternion)}getFirstPersonCameraAnchor(t=null){const e=t||new R;return this.firstPersonAnchor?(this.firstPersonAnchor.getWorldPosition(e),e):(this.getDirection(this._tmpDir),e.copy(this.position).add(this._tmpDir))}getAimDirection(t=null){const e=t||new R;if(this.getDirection(e).normalize(),!this.isPlanarMode())return e;const n=Math.min(1,Math.max(-1,this.planarAimOffset||0));if(Math.abs(n)<1e-4)return e;this._tmpAimRight.crossVectors(this._tmpDir.set(0,1,0),e),this._tmpAimRight.lengthSq()<1e-6?this._tmpAimRight.set(1,0,0):this._tmpAimRight.normalize(),this._tmpAimUp.crossVectors(e,this._tmpAimRight).normalize();const i=Pn.degToRad(D.PROJECTILE.PLANAR_AIM_MAX_ANGLE_DEG)*n,r=Math.cos(i),o=Math.sin(i);return e.multiplyScalar(r).addScaledVector(this._tmpAimUp,o).normalize(),e}dispose(){this.trail.dispose(),this.renderer.removeFromScene(this.group)}}const Eg=Object.freeze(["NO_OP","YAW_LEFT","YAW_RIGHT","PITCH_UP","PITCH_DOWN","BOOST","USE_ITEM","SHOOT_ITEM"]),il=1,Tg="mini-curve-fever-3d.bot-learning.v1";function Is(s,t,e){return Math.min(Math.max(s,t),e)}function Bi(s,t){if(!Number.isFinite(s))return t.length;for(let e=0;e<t.length;e++)if(s<t[e])return e;return t.length}function Kt(s,t=0){return Number.isFinite(s)?s:t}function Ag(s){return!s||s.length===0?0:s[Math.floor(Math.random()*s.length)]}class Ys{constructor(t={}){var n;const e=((n=D.BOT)==null?void 0:n.LEARNING)||{};this.storageKey=t.storageKey||e.STORAGE_KEY||Tg,this.alpha=Kt(t.alpha,Kt(e.ALPHA,.16)),this.gamma=Kt(t.gamma,Kt(e.GAMMA,.92)),this.epsilonStart=Is(Kt(t.epsilonStart,Kt(e.EPSILON_START,.35)),0,1),this.epsilonMin=Is(Kt(t.epsilonMin,Kt(e.EPSILON_MIN,.04)),0,1),this.epsilonDecay=Is(Kt(t.epsilonDecay,Kt(e.EPSILON_DECAY,.9995)),.9,1),this.maxStates=Math.max(200,Math.floor(Kt(t.maxStates,Kt(e.MAX_STATES,2500)))),this.saveEveryUpdates=Math.max(1,Math.floor(Kt(t.saveEveryUpdates,Kt(e.SAVE_EVERY_UPDATES,200)))),this.minSaveIntervalMs=Math.max(0,Math.floor(Kt(t.minSaveIntervalMs,Kt(e.MIN_SAVE_INTERVAL_MS,4e3)))),this.actions=Eg.slice(),this.trainingEnabled=!!(t.trainingEnabled??e.ENABLED??!1),this.enabled=!0,this.epsilon=this.epsilonStart,this.totalUpdates=0,this.totalReward=0,this.updatesSinceSave=0,this.lastSaveAt=0,this.lastLoadedAt=0,this.qTable=new Map,this.stateMeta=new Map,this._loaded=this.load()}setEnabled(t){this.enabled=!!t}setTrainingEnabled(t){this.trainingEnabled=!!t}getActionName(t){return!Number.isInteger(t)||t<0||t>=this.actions.length?this.actions[0]:this.actions[t]}getActionCount(){return this.actions.length}encodeState({player:t,sense:e,arena:n,planarMode:i}){const r=e||{},o=Math.max(1,Kt(r.lookAhead,1)),a=Kt(r.localOpenness,0)/o,l=Number.isFinite(r.targetDistanceSq)?Math.sqrt(Math.max(0,r.targetDistanceSq)):1/0,c=t&&t.baseSpeed>0?Kt(t.speed/t.baseSpeed,1):1;let h=1;if(!i&&t&&(n!=null&&n.bounds)){const S=(n.bounds.minY+n.bounds.maxY)*.5;t.position.y<S-5?h=0:t.position.y>S+5&&(h=2)}const u=Bi(Kt(r.forwardRisk,0),[.2,.4,.6,.85]),d=Bi(Kt(r.pressure,0),[.25,.5,.9,1.2]),m=Bi(a,[.25,.45,.65,.85]),g=Bi(l,[8,16,30,55]),_=Bi(c,[.9,1.1,1.4,1.8]),f=r.targetInFront?1:0,p=r.immediateDanger?1:0,M=r.projectileThreat?1:0;return`f${u}|p${d}|o${m}|d${g}|s${_}|t${f}|i${p}|j${M}|h${h}|m${i?1:0}`}selectAction(t,e={}){if(!this.enabled||!t)return 0;const n=e.training!==!1,i=Array.isArray(e.allowedActions)?e.allowedActions:null,r=[];for(let h=0;h<this.actions.length;h++)(!i||i[h])&&r.push(h);if(r.length===0)return 0;const o=this._ensureState(t);if(n&&this.trainingEnabled&&Math.random()<this.epsilon)return Ag(r);let l=r[0],c=o[l];for(let h=1;h<r.length;h++){const u=r[h],d=o[u];d>c&&(c=d,l=u)}return l}updateTransition(t={}){const e=typeof t.stateKey=="string"?t.stateKey:"",n=typeof t.nextStateKey=="string"?t.nextStateKey:"",i=Number.isInteger(t.actionIndex)?t.actionIndex:0,r=Kt(t.reward,0),o=!!t.terminal,a=t.training!==!1;if(!e||i<0||i>=this.actions.length)return null;const l=this._ensureState(e),c=l[i];let h=0;if(!o&&n){const g=this._ensureState(n);h=g[0];for(let _=1;_<g.length;_++)g[_]>h&&(h=g[_])}const d=r+(o?0:this.gamma*h)-c,m=a&&this.trainingEnabled;return m&&(l[i]=c+this.alpha*d,this.totalUpdates++,this.totalReward+=r,this.updatesSinceSave++,this.epsilon=Math.max(this.epsilonMin,this.epsilon*this.epsilonDecay),this._touchState(e),n&&this._touchState(n),this._pruneStatesIfNeeded(),this.save(!1)),{updated:m,tdError:d,qValue:l[i],epsilon:this.epsilon}}reset(t=!0){this.qTable.clear(),this.stateMeta.clear(),this.totalUpdates=0,this.totalReward=0,this.updatesSinceSave=0,this.epsilon=this.epsilonStart,t&&this.save(!0)}getStats(){return{loaded:this._loaded,enabled:this.enabled,trainingEnabled:this.trainingEnabled,states:this.qTable.size,epsilon:this.epsilon,totalUpdates:this.totalUpdates,totalReward:this.totalReward,storageKey:this.storageKey,lastSaveAt:this.lastSaveAt,lastLoadedAt:this.lastLoadedAt}}save(t=!1){if(typeof localStorage>"u")return!1;const e=Date.now();if(!t&&(this.updatesSinceSave<this.saveEveryUpdates||e-this.lastSaveAt<this.minSaveIntervalMs))return!1;const n=[];for(const[r,o]of this.qTable.entries()){const a=this.stateMeta.get(r)||{visits:1,lastSeen:e};n.push([r,Array.from(o),Math.max(1,Math.floor(a.visits||1)),Math.max(0,Math.floor(a.lastSeen||e))])}const i={version:il,savedAt:e,epsilon:this.epsilon,totalUpdates:this.totalUpdates,totalReward:this.totalReward,states:n};try{return localStorage.setItem(this.storageKey,JSON.stringify(i)),this.lastSaveAt=e,this.updatesSinceSave=0,!0}catch{return!1}}load(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem(this.storageKey);if(!t)return!1;const e=JSON.parse(t);if(!e||e.version!==il||!Array.isArray(e.states))return!1;this.qTable.clear(),this.stateMeta.clear();const n=this.actions.length;for(let i=0;i<e.states.length;i++){const r=e.states[i];if(!Array.isArray(r)||r.length<2)continue;const o=r[0],a=r[1],l=Kt(r[2],1),c=Kt(r[3],Date.now());if(typeof o!="string"||!Array.isArray(a))continue;const h=new Float64Array(n);for(let u=0;u<n;u++)h[u]=Kt(a[u],0);this.qTable.set(o,h),this.stateMeta.set(o,{visits:Math.max(1,Math.floor(l)),lastSeen:Math.max(0,Math.floor(c))})}return this.epsilon=Is(Kt(e.epsilon,this.epsilonStart),this.epsilonMin,this.epsilonStart),this.totalUpdates=Math.max(0,Math.floor(Kt(e.totalUpdates,0))),this.totalReward=Kt(e.totalReward,0),this.lastLoadedAt=Date.now(),this._pruneStatesIfNeeded(),!0}catch{return!1}}_ensureState(t){return this.qTable.has(t)||(this.qTable.set(t,new Float64Array(this.actions.length)),this.stateMeta.set(t,{visits:1,lastSeen:Date.now()})),this.qTable.get(t)}_touchState(t){const e=Date.now(),n=this.stateMeta.get(t);if(!n){this.stateMeta.set(t,{visits:1,lastSeen:e});return}n.visits=Math.max(1,n.visits+1),n.lastSeen=e}_pruneStatesIfNeeded(){if(this.qTable.size<=this.maxStates)return;const t=this.qTable.size-this.maxStates,e=[];for(const[n,i]of this.stateMeta.entries())e.push({key:n,visits:Kt(i==null?void 0:i.visits,1),lastSeen:Kt(i==null?void 0:i.lastSeen,0)});e.sort((n,i)=>n.visits!==i.visits?n.visits-i.visits:n.lastSeen-i.lastSeen);for(let n=0;n<t&&n<e.length;n++)this.qTable.delete(e[n].key),this.stateMeta.delete(e[n].key)}}const sl=new R(0,1,0),rl={standard:{caution:0,portalBias:0,aggressionBias:0},empty:{caution:-.12,portalBias:-.08,aggressionBias:.16},maze:{caution:.22,portalBias:.06,aggressionBias:-.1},complex:{caution:.16,portalBias:.08,aggressionBias:-.04},pyramid:{caution:.08,portalBias:.12,aggressionBias:.03}},bg={SPEED_UP:{self:.8,offense:.2,defensiveScale:.5,emergencyScale:.1,combatSelf:.2},SLOW_DOWN:{self:-.8,offense:.9,defensiveScale:.1,emergencyScale:0,combatSelf:-.3},THICK:{self:.9,offense:.1,defensiveScale:.8,emergencyScale:.2,combatSelf:.4},THIN:{self:-.6,offense:.7,defensiveScale:.2,emergencyScale:0,combatSelf:-.2},SHIELD:{self:.5,offense:0,defensiveScale:1.2,emergencyScale:2.5,combatSelf:.8},SLOW_TIME:{self:.7,offense:.35,defensiveScale:.6,emergencyScale:.4,combatSelf:.3},GHOST:{self:.95,offense:.1,defensiveScale:1,emergencyScale:2,combatSelf:.5},INVERT:{self:-.7,offense:.85,defensiveScale:.15,emergencyScale:0,combatSelf:-.4}},Be=Object.freeze({NO_OP:0,YAW_LEFT:1,YAW_RIGHT:2,PITCH_UP:3,PITCH_DOWN:4,BOOST:5,USE_ITEM:6,SHOOT_ITEM:7});function Fe(s,t,e,n=0){return{name:s,yaw:t,pitch:e,weight:n,dir:new R,risk:999,wallDist:0,trailDist:0,clearance:0,immediateDanger:!1}}class wg{constructor(t={}){var e,n,i,r,o,a,l,c,h,u,d,m,g,_,f,p;this.recorder=t.recorder||null,this.learningEngine=t.learning instanceof Ys?t.learning:null,this.botId=t.botId||`bot-${Math.random().toString(36).slice(2,8)}`,this.learningEnabled=!!t.learningEnabled,this.learningTraining=!!t.learningTraining,this.forcePlanarMode=!!t.forcePlanarMode,this._learningReward={survivalPerSec:(n=(e=D.BOT.LEARNING)==null?void 0:e.REWARD)==null?void 0:n.SURVIVAL_PER_SEC,bounceWall:(r=(i=D.BOT.LEARNING)==null?void 0:i.REWARD)==null?void 0:r.BOUNCE_WALL,bounceTrail:(a=(o=D.BOT.LEARNING)==null?void 0:o.REWARD)==null?void 0:a.BOUNCE_TRAIL,kill:(c=(l=D.BOT.LEARNING)==null?void 0:l.REWARD)==null?void 0:c.KILL,death:(u=(h=D.BOT.LEARNING)==null?void 0:h.REWARD)==null?void 0:u.DEATH,roundWin:(m=(d=D.BOT.LEARNING)==null?void 0:d.REWARD)==null?void 0:m.ROUND_WIN,roundLoss:(_=(g=D.BOT.LEARNING)==null?void 0:g.REWARD)==null?void 0:_.ROUND_LOSS,roundDraw:(p=(f=D.BOT.LEARNING)==null?void 0:f.REWARD)==null?void 0:p.ROUND_DRAW},this._learning={lastStateKey:"",lastActionIndex:-1,rewardBuffer:0,roundReward:0,decisionCount:0,updateCount:0},this.currentInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1},this.reactionTimer=0,this._profileName="NORMAL",this.profile=null,this._decision={yaw:0,pitch:0,boost:!1,useItem:-1,shootItem:!1,shootItemIndex:-1},this.state={turnCommitTimer:0,committedYaw:0,committedPitch:0,recoveryActive:!1,recoveryTimer:0,recoveryCooldown:0,recoveryYaw:0,recoveryPitch:0,targetPlayer:null,targetRefreshTimer:0,itemUseCooldown:0,itemShootCooldown:0,portalIntentActive:!1,portalIntentTimer:0,portalIntentScore:0,portalEntryDistanceSq:1/0},this.sense={lookAhead:0,forwardRisk:1,bestProbe:null,targetDistanceSq:1/0,targetInFront:!1,immediateDanger:!1,pressure:0,localOpenness:0,mapCaution:0,mapPortalBias:0,mapAggressionBias:0,projectileThreat:!1,projectileEvadeYaw:0,projectileEvadePitch:0,heightBias:0,botRepulsionYaw:0,botRepulsionPitch:0,pursuitActive:!1,pursuitYaw:0,pursuitPitch:0,pursuitAimDot:0},this._checkStuckTimer=0,this._stuckScore=0,this._recentBouncePressure=0,this._hasPositionSample=!1,this._lastPos=new R,this._lastCollisionNormal=new R,this._hasCollisionNormal=!1,this._portalEntry=new R,this._portalExit=new R,this._portalTarget=null,this._tmpForward=new R,this._tmpRight=new R,this._tmpUp=new R,this._tmpVec=new R,this._tmpVec2=new R,this._tmpVec3=new R,this._probes=[Fe("forward",0,0,0),Fe("left",-1,0,.02),Fe("right",1,0,.02),Fe("leftWide",-1.8,0,.07),Fe("rightWide",1.8,0,.07),Fe("up",0,.9,.08),Fe("down",0,-.9,.08),Fe("upLeft",-.7,.7,.1),Fe("upRight",.7,.7,.1),Fe("downLeft",-.7,-.7,.1),Fe("downRight",.7,-.7,.1),Fe("backward",3.14,0,.25)],this._setDifficulty(t.difficulty||D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY),this._checkStuckTimer=this.profile.stuckCheckInterval}_setDifficulty(t){const e=D.BOT.DIFFICULTY_PROFILES||{},n=typeof t=="string"?t.toUpperCase():"NORMAL";this._profileName=e[n]?n:"NORMAL";const i={reactionTime:D.BOT.REACTION_TIME,lookAhead:D.BOT.LOOK_AHEAD,aggression:D.BOT.AGGRESSION,errorRate:0,probeSpread:.7,probeStep:2,turnCommitTime:.25,stuckCheckInterval:.4,stuckTriggerTime:1.6,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1,recoveryCooldown:1.5,itemUseCooldown:1,itemShootCooldown:.6,targetRefreshInterval:.2,portalInterest:.5,portalSeekDistance:70,portalEntryDotMin:.3,portalIntentThreshold:.2,portalIntentDuration:1,boostChance:.004};this.profile={...i,...e[this._profileName]||{}}}setDifficulty(t){this._setDifficulty(t),this.reactionTimer=0,this.state.turnCommitTimer=0,this.state.recoveryActive=!1}setLearningOptions(t={}){Object.prototype.hasOwnProperty.call(t,"learningEngine")&&(this.learningEngine=t.learningEngine instanceof Ys?t.learningEngine:this.learningEngine),Object.prototype.hasOwnProperty.call(t,"enabled")&&(this.learningEnabled=!!t.enabled),Object.prototype.hasOwnProperty.call(t,"training")&&(this.learningTraining=!!t.training),Object.prototype.hasOwnProperty.call(t,"forcePlanarMode")&&(this.forcePlanarMode=!!t.forcePlanarMode),this._isLearningActive()||this._clearLearningTransition()}onBounce(t,e=null){const n=t==="TRAIL"?1.3:.9;this._recentBouncePressure=Math.min(4,this._recentBouncePressure+n),e&&(this._lastCollisionNormal.copy(e).normalize(),this._hasCollisionNormal=!0),this._isLearningActive()&&this._addLearningReward(t==="TRAIL"?this._learningReward.bounceTrail:this._learningReward.bounceWall)}onKill(t=null,e="UNKNOWN"){var n;if(this._isLearningActive()&&(this._addLearningReward(this._learningReward.kill),(n=this.recorder)!=null&&n.logEvent)){const i=t?`victim=${t.index}`:"victim=-1";this.recorder.logEvent("LEARN_KILL",Number.isFinite(t==null?void 0:t.index)?t.index:-1,`killer=${this.botId} cause=${e} ${i}`)}}onDeath(t="UNKNOWN"){this._isLearningActive()&&(this._addLearningReward(this._learningReward.death),this._finalizeLearningTransition(!0,`death:${t}`))}onRoundEnd(t="draw"){this._isLearningActive()&&(t==="win"?this._addLearningReward(this._learningReward.roundWin):t==="loss"?this._addLearningReward(this._learningReward.roundLoss):this._addLearningReward(this._learningReward.roundDraw),this._finalizeLearningTransition(!0,`round:${t}`))}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.shootItemIndex=-1,t.nextItem=!1,t.useItem=-1}_resetDecision(){this._decision.yaw=0,this._decision.pitch=0,this._decision.boost=!1,this._decision.useItem=-1,this._decision.shootItem=!1,this._decision.shootItemIndex=-1}_buildBasis(t){this._tmpRight.crossVectors(sl,t),this._tmpRight.lengthSq()<1e-6?this._tmpRight.set(1,0,0):this._tmpRight.normalize(),this._tmpUp.crossVectors(t,this._tmpRight).normalize()}_updateTimers(t){this.reactionTimer-=t,this._checkStuckTimer-=t,this._recentBouncePressure=Math.max(0,this._recentBouncePressure-t*1.35),this.state.turnCommitTimer=Math.max(0,this.state.turnCommitTimer-t),this.state.recoveryCooldown=Math.max(0,this.state.recoveryCooldown-t),this.state.targetRefreshTimer=Math.max(0,this.state.targetRefreshTimer-t),this.state.itemUseCooldown=Math.max(0,this.state.itemUseCooldown-t),this.state.itemShootCooldown=Math.max(0,this.state.itemShootCooldown-t),this.state.portalIntentTimer=Math.max(0,this.state.portalIntentTimer-t),this.state.portalIntentTimer===0&&(this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null)}_updateStuckState(t,e,n){if(!this._hasPositionSample){this._lastPos.copy(t.position),this._hasPositionSample=!0;return}if(this._checkStuckTimer>0)return;this._checkStuckTimer=this.profile.stuckCheckInterval,t.getDirection(this._tmpForward).normalize(),this._tmpVec.subVectors(t.position,this._lastPos);const i=this._tmpVec.length(),r=this._tmpVec.dot(this._tmpForward),o=i<this.profile.minProgressDistance,a=r<this.profile.minForwardProgress;o||a?this._stuckScore+=this.profile.stuckCheckInterval:this._stuckScore=Math.max(0,this._stuckScore-this.profile.stuckCheckInterval*.8),this._stuckScore+=this._recentBouncePressure*.06,this._lastPos.copy(t.position),!this.state.recoveryActive&&this.state.recoveryCooldown<=0&&this._stuckScore>=this.profile.stuckTriggerTime&&this._enterRecovery(t,e,n,"low-progress")}_selectRecoveryManeuver(t,e,n){t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const i=this._isPlanarMode()?[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:0,weight:.12,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.12,biasAwayFromNormal:!0}]:[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:1,weight:.1},{yaw:1,pitch:1,weight:.1},{yaw:-1,pitch:-1,weight:.1},{yaw:1,pitch:-1,weight:.1},{yaw:-1,pitch:0,weight:.14,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.14,biasAwayFromNormal:!0}],r=[3,5.5,8.5,12];let o=null,a=1/0;for(let l=0;l<i.length;l++){const c=i[l];this._tmpVec.copy(this._tmpForward).addScaledVector(this._tmpRight,c.yaw*.95),!this._isPlanarMode()&&c.pitch!==0&&this._tmpVec.addScaledVector(this._tmpUp,c.pitch*.75),this._tmpVec.normalize();let h=c.weight;if(c.biasAwayFromNormal&&this._hasCollisionNormal){const u=this._tmpRight.dot(this._lastCollisionNormal);(c.yaw>0&&u>0||c.yaw<0&&u<0)&&(h+=.65)}for(let u=0;u<r.length;u++){const d=r[u];this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,d);const m=e.checkCollision(this._tmpVec2,1.35),g=this._checkTrailHit(this._tmpVec2,t,n);if(m||g){h+=3.2+u*.8+(g?.9:.5);break}h+=this._estimateEnemyPressure(this._tmpVec2,t,n)*.35}if(this._hasCollisionNormal){const u=this._tmpVec.dot(this._lastCollisionNormal);h-=u*.65}if(!this._isPlanarMode()){const d=t.position.y+this._tmpVec.y*9;(d<e.bounds.minY+7||d>e.bounds.maxY-7)&&(h+=.85)}h<a&&(a=h,o=c)}return o}_enterRecovery(t,e,n,i){this.state.recoveryActive=!0,this.state.recoveryTimer=this.profile.recoveryDuration,this.state.recoveryCooldown=this.profile.recoveryCooldown,this._stuckScore=0;const r=this._selectRecoveryManeuver(t,e,n);this.state.recoveryYaw=(r==null?void 0:r.yaw)||(Math.random()>.5?1:-1),this.state.recoveryPitch=this._isPlanarMode()?0:(r==null?void 0:r.pitch)||0,this._isPlanarMode()||(t.position.y<e.bounds.minY+8?this.state.recoveryPitch=1:t.position.y>e.bounds.maxY-8&&(this.state.recoveryPitch=-1)),this.recorder&&this.recorder.logEvent("STUCK",t.index,`reason=${i} yaw=${this.state.recoveryYaw} pitch=${this.state.recoveryPitch}`)}_shouldBoostRecovery(t,e,n){if(this._recentBouncePressure>1.2||this.sense.forwardRisk>.62)return!1;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.copy(this._tmpForward),this._tmpVec.addScaledVector(this._tmpRight,this.state.recoveryYaw*.22),this._isPlanarMode()||this._tmpVec.addScaledVector(this._tmpUp,this.state.recoveryPitch*.2),this._tmpVec.normalize();const i=[3,5,7];for(let r=0;r<i.length;r++)if(this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,i[r]),e.checkCollision(this._tmpVec2,1.35)||this._checkTrailHit(this._tmpVec2,t,n))return!1;return!0}_updateRecovery(t,e,n,i){return this.state.recoveryTimer-=t,this.state.recoveryTimer<=0?(this.state.recoveryActive=!1,this.state.recoveryYaw=0,this.state.recoveryPitch=0,!1):(this._resetInput(this.currentInput),this.currentInput.boost=this._shouldBoostRecovery(e,n,i),this.state.recoveryYaw>0?this.currentInput.yawRight=!0:this.state.recoveryYaw<0&&(this.currentInput.yawLeft=!0),this._isPlanarMode()||(this.state.recoveryPitch>0?this.currentInput.pitchUp=!0:this.state.recoveryPitch<0&&(this.currentInput.pitchDown=!0)),!0)}_computeDynamicLookAhead(t){const e=this.profile.lookAhead,n=t.baseSpeed>0?t.speed/t.baseSpeed:1;let i=e*(1+(n-1)*.75);return t.isBoosting&&(i*=1.2),Math.max(8,i)}_mapBehavior(t){const e=t.currentMapKey||"standard";return rl[e]||rl.standard}_composeProbeDirection(t,e,n,i){const r=i.yaw*this.profile.probeSpread,o=i.pitch*this.profile.probeSpread;i.dir.copy(t),r!==0&&i.dir.addScaledVector(e,r),!this._isPlanarMode()&&o!==0&&i.dir.addScaledVector(n,o),i.dir.normalize()}_checkTrailHit(t,e,n){const i=this.state.recoveryActive?6:this._recentBouncePressure>1.4?8:12;for(let r=0;r<n.length;r++){const o=n[r];if(!o||!o.alive)continue;const a=o===e?i:0;if(o.trail.checkCollisionFast){if(o.trail.checkCollisionFast(t,1.35,a))return!0}else{const l=o.trail.checkCollision(t,1.35,a);if(l&&l.hit)return!0}}return!1}_scoreProbe(t,e,n,i,r){const o=this.profile.probeStep;let a=r;const l=Math.abs(i.yaw);l>2.5?a=r*.4:l>1.2&&(a=r*.7);let c=a,h=a,u=!1;for(let p=o;p<=a;p+=o){if(this._tmpVec.copy(t.position).addScaledVector(i.dir,p),e.checkCollision(this._tmpVec,1.35)){c=p,p<=o*1.5&&(u=!0);break}if(this._checkTrailHit(this._tmpVec,t,n)){h=p,p<=o*1.5&&(u=!0);break}}const d=t.baseSpeed>0?t.speed/t.baseSpeed:1,m=Math.max(0,d-1)*.3,g=1-Math.min(1,c/a),_=1-Math.min(1,h/a);let f=g*(1.1+this.sense.mapCaution+m)+_*(1.45+this.sense.mapCaution*.5+m*.7);f+=i.weight,u&&(f+=2.2),this.profile.errorRate>0&&Math.random()<this.profile.errorRate&&(f+=(Math.random()-.2)*.65),i.wallDist=c,i.trailDist=h,i.clearance=Math.min(c,h),i.immediateDanger=u,i.risk=f}_selectTarget(t,e){let n=null,i=-1/0,r=1/0;t.getDirection(this._tmpForward).normalize();for(let o=0;o<e.length;o++){const a=e[o];if(!a||a===t||!a.alive)continue;this._tmpVec.subVectors(a.position,t.position);const l=this._tmpVec.lengthSq();if(l<1e-4)continue;const c=1/Math.max(4,Math.sqrt(l)),h=this._tmpVec.normalize().dot(this._tmpForward);a.getDirection(this._tmpVec2).normalize(),this._tmpVec3.subVectors(t.position,a.position).normalize();const u=this._tmpVec2.dot(this._tmpVec3),d=c*.9+h*.55+u*.35;d>i&&(i=d,n=a,r=l)}this.state.targetPlayer=n,this.sense.targetDistanceSq=n?r:1/0,n?(this._tmpVec.subVectors(n.position,t.position).normalize(),this.sense.targetInFront=this._tmpVec.dot(this._tmpForward)>.52):this.sense.targetInFront=!1}_estimateEnemyPressure(t,e,n){let i=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(!a||a===e||!a.alive)continue;const l=a.position.distanceToSquared(t);l<i&&(i=l)}if(!isFinite(i))return 0;const r=Math.sqrt(i);return r>=40?0:1-r/40}_estimatePointRisk(t,e,n,i){const r=n.checkCollision(t,1.6)?1:0,o=this._checkTrailHit(t,e,i)?1:0,a=this._estimateEnemyPressure(t,e,i);return r*1.2+o*1.5+a*.6}_estimateExitSafety(t,e,n,i){const o=[{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}];let a=0;for(let l=0;l<o.length;l++)this._tmpVec3.set(t.x+o[l].x*5,t.y+o[l].y*5,t.z+o[l].z*5),(e.checkCollision(this._tmpVec3,1.6)||this._checkTrailHit(this._tmpVec3,n,i))&&a++;return a/o.length}_senseProjectiles(t,e){this.sense.projectileThreat=!1,this.sense.projectileEvadeYaw=0,this.sense.projectileEvadePitch=0;const n=this.profile.projectileAwareness||0;if(n<=0||!e||e.length===0)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let i=1/0,r=0,o=0;for(let a=0;a<e.length;a++){const l=e[a];if(l.owner===t)continue;this._tmpVec.subVectors(l.position,t.position);const c=this._tmpVec.length();if(c>25||c<.5||(this._tmpVec.normalize(),this._tmpVec2.copy(l.velocity).normalize(),-this._tmpVec2.dot(this._tmpVec)<.4))continue;const u=l.velocity.length(),d=u>1?c/u:999;if(!(d>.8)&&!(Math.random()>n)&&d<i&&(i=d,this._tmpVec3.crossVectors(this._tmpVec2,sl).normalize(),r=this._tmpRight.dot(this._tmpVec3)>0?-1:1,!this._isPlanarMode())){const g=this._tmpVec.y;o=g>.2?-1:g<-.2?1:0}}i<1/0&&(this.sense.projectileThreat=!0,this.sense.projectileEvadeYaw=r,this.sense.projectileEvadePitch=o)}_senseHeight(t,e){if(this.sense.heightBias=0,this._isPlanarMode())return;const n=this.profile.heightBias||0;if(n<=0)return;const i=e.bounds,r=(i.minY+i.maxY)*.5,o=t.position.y-r,a=(i.maxY-i.minY)*.5;if(a<=0)return;const l=o/a;this.sense.heightBias=-l*n}_senseBotSpacing(t,e){this.sense.botRepulsionYaw=0,this.sense.botRepulsionPitch=0;const n=this.profile.spacingWeight||0;if(n<=0)return;const i=12;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let r=0,o=0;for(let a=0;a<e.length;a++){const l=e[a];if(!l||l===t||!l.alive||!l.isBot)continue;this._tmpVec.subVectors(t.position,l.position);const c=this._tmpVec.length();if(c>=i||c<.1)continue;const h=n*(1-c/i);this._tmpVec.normalize(),r+=this._tmpRight.dot(this._tmpVec)*h,o+=this._tmpUp.dot(this._tmpVec)*h}Math.abs(r)>.05&&(this.sense.botRepulsionYaw=r>0?1:-1),!this._isPlanarMode()&&Math.abs(o)>.05&&(this.sense.botRepulsionPitch=o>0?1:-1)}_evaluatePursuit(t){if(this.sense.pursuitActive=!1,this.sense.pursuitYaw=0,this.sense.pursuitPitch=0,this.sense.pursuitAimDot=0,!this.profile.pursuitEnabled||this.sense.immediateDanger||this.sense.forwardRisk>.3)return;const e=this.state.targetPlayer;if(!e||!e.alive)return;const n=this.profile.pursuitRadius||35;if(this.sense.targetDistanceSq>n*n||!this.sense.targetInFront)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.subVectors(e.position,t.position).normalize();const i=this._tmpVec.dot(this._tmpForward),r=this._tmpRight.dot(this._tmpVec),o=this._tmpUp.dot(this._tmpVec);this.sense.pursuitActive=!0,this.sense.pursuitAimDot=i,this.sense.pursuitYaw=Math.abs(r)>.05?r>0?1:-1:0,this._isPlanarMode()||(this.sense.pursuitPitch=Math.abs(o)>.08?o>0?1:-1:0)}_evaluatePortalIntent(t,e,n){if(!e.portalsEnabled||!e.portals||e.portals.length===0){this.state.portalIntentActive=!1,this._portalTarget=null;return}if(this.profile.portalInterest<=0){this.state.portalIntentActive=!1,this._portalTarget=null;return}const i=this.profile.portalSeekDistance,r=i*i;t.getDirection(this._tmpForward).normalize();let o=-1/0,a=null,l=null,c=1/0;for(let h=0;h<e.portals.length;h++){const u=e.portals[h],d=[{entry:u.posA,exit:u.posB},{entry:u.posB,exit:u.posA}];for(let m=0;m<d.length;m++){const{entry:g,exit:_}=d[m],f=t.position.distanceToSquared(g);if(f>r||(this._tmpVec.subVectors(g,t.position).normalize(),this._tmpVec.dot(this._tmpForward)<this.profile.portalEntryDotMin))continue;const M=this._estimatePointRisk(g,t,e,n),v=this._estimateExitSafety(_,e,t,n),S=v;if(v>=.75)continue;const P=this.sense.forwardRisk-S,w=f/r,b=P*(.8+this.profile.portalInterest)+this.sense.mapPortalBias*.5-M*.6-w*.4;b>o&&(o=b,a=g,l=_,c=f)}}if(a&&o>=this.profile.portalIntentThreshold){this.state.portalIntentActive=!0,this.state.portalIntentTimer=this.profile.portalIntentDuration,this.state.portalIntentScore=o,this.state.portalEntryDistanceSq=c,this._portalEntry.copy(a),this._portalExit.copy(l),this._portalTarget=this._portalEntry;return}this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null}_senseEnvironment(t,e,n,i){const r=this._mapBehavior(e);this.sense.mapCaution=r.caution,this.sense.mapPortalBias=r.portalBias,this.sense.mapAggressionBias=r.aggressionBias,this.sense.lookAhead=this._computeDynamicLookAhead(t),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const o=this.profile.probeCount||this._probes.length;let a=null,l=1/0,c=null,h=0,u=0;for(let g=0;g<this._probes.length&&!(g>=o);g++){const _=this._probes[g],f=Math.abs(_.pitch)>.001;this._isPlanarMode()&&f||(this._composeProbeDirection(this._tmpForward,this._tmpRight,this._tmpUp,_),this._scoreProbe(t,e,n,_,this.sense.lookAhead),h+=_.clearance,u++,_.name==="forward"&&(c=_),_.risk<l&&(l=_.risk,a=_))}this.sense.bestProbe=a,this.sense.forwardRisk=c?c.risk:1,this.sense.immediateDanger=!!(c&&c.immediateDanger),this.sense.localOpenness=u>0?h/u:this.sense.lookAhead*.4;const d=this._estimateEnemyPressure(t.position,t,n),m=1-Math.min(1,this.sense.localOpenness/this.sense.lookAhead);this.sense.pressure=Math.min(1.6,d*.8+m*.9+this._recentBouncePressure*.2),(this.state.targetRefreshTimer<=0||!this.state.targetPlayer||!this.state.targetPlayer.alive)&&(this._selectTarget(t,n),this.state.targetRefreshTimer=this.profile.targetRefreshInterval),this._senseProjectiles(t,i),this._evaluatePursuit(t),this._senseHeight(t,e),this._senseBotSpacing(t,n),this._evaluatePortalIntent(t,e,n)}_applyPortalSteering(t){if(!this.state.portalIntentActive||!this._portalTarget)return!1;this._tmpVec.subVectors(this._portalTarget,t.position);const e=this._tmpVec.lengthSq();if(e<9)return this.state.portalIntentActive=!1,this._portalTarget=null,!1;this._tmpVec.normalize(),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(this._tmpVec),i=this._tmpUp.dot(this._tmpVec);return this._decision.yaw=Math.abs(n)>.08?n>0?1:-1:0,this._isPlanarMode()||(this._decision.pitch=Math.abs(i)>.08?i>0?1:-1:0),e<196&&this.sense.forwardRisk<.75&&(this._decision.boost=!0),!0}_decideSteering(t){const e=this.sense.bestProbe;if(!e){this._decision.yaw=Math.random()>.5?1:-1,this._decision.pitch=0;return}t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(e.dir),i=this._tmpUp.dot(e.dir);let r=Math.abs(n)>.06?n>0?1:-1:0,o=0;!this._isPlanarMode()&&Math.abs(i)>.08&&(o=i>0?1:-1),!this._isPlanarMode()&&o===0&&Math.abs(this.sense.heightBias)>.15&&(o=this.sense.heightBias>0?1:-1),r===0&&this.sense.botRepulsionYaw!==0&&(r=this.sense.botRepulsionYaw),!this._isPlanarMode()&&o===0&&this.sense.botRepulsionPitch!==0&&(o=this.sense.botRepulsionPitch);const a=this.sense.lookAhead>0?this.sense.localOpenness/this.sense.lookAhead:.5,l=this.sense.immediateDanger?.45:this.sense.forwardRisk>.72||a<.55||this._recentBouncePressure>1.2?.65:1,c=Math.max(.08,this.profile.turnCommitTime*l);(this.state.turnCommitTimer<=0||this.sense.immediateDanger)&&(this.state.committedYaw=r,this.state.committedPitch=o,(r!==0||o!==0)&&(this.state.turnCommitTimer=c)),this.state.turnCommitTimer>0&&(r=this.state.committedYaw,o=this.state.committedPitch),this._decision.yaw=r,this._decision.pitch=o;const h=this.profile.aggression+this.sense.mapAggressionBias;!this.sense.immediateDanger&&this.sense.forwardRisk<.45&&Math.random()<this.profile.boostChance*(.8+Math.max(0,h))&&(this._decision.boost=!0),this._profileName==="EASY"&&Math.random()<.08&&(this._decision.yaw=Math.random()>.5?1:-1)}_decideItemUsage(t){if(!t.inventory||t.inventory.length===0)return;let e=-1/0,n=-1,i=-1/0,r=-1;const o=this.sense.pressure,a=Math.max(0,this.profile.aggression+this.sense.mapAggressionBias),l=this.sense.targetInFront?1.1:.5,c=this.sense.immediateDanger?1:this.sense.forwardRisk>.6?.5:0,h=this.sense.targetDistanceSq<100,u=this.profile.itemContextWeight||.5;for(let d=0;d<t.inventory.length;d++){const m=t.inventory[d],g=bg[m]||{self:0,offense:0,defensiveScale:0,emergencyScale:0,combatSelf:0},_=g.self+o*g.defensiveScale+c*(g.emergencyScale||0)*u+(h?(g.combatSelf||0)*u:0),f=g.offense*(.55+a)*l;_>e&&(e=_,n=d),f>i&&(i=f,r=d)}if(n>=0&&e>.72&&this.state.itemUseCooldown<=0){this._decision.useItem=n,this.state.itemUseCooldown=this.profile.itemUseCooldown;return}r>=0&&i>.45&&this.state.itemShootCooldown<=0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=r,this.state.itemShootCooldown=this.profile.itemShootCooldown)}_applyDecisionToInput(){const t=this.currentInput;return this._resetInput(t),this._decision.yaw>0?t.yawRight=!0:this._decision.yaw<0&&(t.yawLeft=!0),this._decision.pitch>0?t.pitchUp=!0:this._decision.pitch<0&&(t.pitchDown=!0),t.boost=this._decision.boost,t.useItem=this._decision.useItem,t.shootItem=this._decision.shootItem,t.shootItemIndex=this._decision.shootItemIndex,t}_isLearningActive(){return!!(this.learningEnabled&&this.learningEngine&&this.learningEngine.enabled!==!1)}_isPlanarMode(){return!!(D.GAMEPLAY.PLANAR_MODE||this.forcePlanarMode)}_canTrainLearning(){return!!(this._isLearningActive()&&this.learningTraining)}_addLearningReward(t){this._isLearningActive()&&Number.isFinite(t)&&(this._learning.rewardBuffer+=t,this._learning.roundReward+=t)}_clearLearningTransition(){this._learning.lastStateKey="",this._learning.lastActionIndex=-1,this._learning.rewardBuffer=0}_getLearningStateKey(t,e){return this._isLearningActive()?this.learningEngine.encodeState({player:t,sense:this.sense,arena:e,planarMode:this._isPlanarMode()}):""}_getLearningAllowedActions(t){if(!this._isLearningActive())return null;const e=this.learningEngine.getActionCount(),n=new Array(e).fill(!0);this._isPlanarMode()&&(n[Be.PITCH_UP]=!1,n[Be.PITCH_DOWN]=!1);const r=!!(t.inventory&&t.inventory.length>0);return(!r||this.state.itemUseCooldown>0)&&(n[Be.USE_ITEM]=!1),(!r||this.state.itemShootCooldown>0)&&(n[Be.SHOOT_ITEM]=!1),(this.sense.immediateDanger||this.sense.forwardRisk>.82)&&(n[Be.USE_ITEM]=!1),n}_flushLearningTransition(t){var i;if(!this._isLearningActive()||this._learning.lastActionIndex<0||!this._learning.lastStateKey)return;const e=this._learning.rewardBuffer,n=this.learningEngine.updateTransition({stateKey:this._learning.lastStateKey,actionIndex:this._learning.lastActionIndex,reward:e,nextStateKey:t,terminal:!1,training:this._canTrainLearning()});this._learning.rewardBuffer=0,n!=null&&n.updated&&(this._learning.updateCount++,(i=this.recorder)!=null&&i.recordLearningStep&&this.recorder.recordLearningStep(e,n.tdError,n.epsilon,this.learningEngine.getActionName(this._learning.lastActionIndex)))}_finalizeLearningTransition(t=!0,e=""){var r,o;if(!this._isLearningActive())return;if(this._learning.lastActionIndex<0||!this._learning.lastStateKey){this._learning.rewardBuffer=0;return}const n=this._learning.rewardBuffer,i=this.learningEngine.updateTransition({stateKey:this._learning.lastStateKey,actionIndex:this._learning.lastActionIndex,reward:n,nextStateKey:"",terminal:!!t,training:this._canTrainLearning()});i!=null&&i.updated&&((r=this.recorder)!=null&&r.recordLearningStep)&&this.recorder.recordLearningStep(n,i.tdError,i.epsilon,this.learningEngine.getActionName(this._learning.lastActionIndex)),(o=this.recorder)!=null&&o.logEvent&&this.recorder.logEvent("LEARN_EPISODE_END",-1,`bot=${this.botId} reason=${e||"terminal"} reward=${n.toFixed(3)}`),this._clearLearningTransition()}_applyLearningAction(t,e){if(!this._isLearningActive()||!e)return;const n=this.learningEngine.selectAction(e,{training:this._canTrainLearning(),allowedActions:this._getLearningAllowedActions(t)});switch(this._learning.lastStateKey=e,this._learning.lastActionIndex=n,this._learning.decisionCount++,n){case Be.YAW_LEFT:this._decision.yaw=-1;break;case Be.YAW_RIGHT:this._decision.yaw=1;break;case Be.PITCH_UP:this._isPlanarMode()||(this._decision.pitch=1);break;case Be.PITCH_DOWN:this._isPlanarMode()||(this._decision.pitch=-1);break;case Be.BOOST:this._decision.boost=!0;break;case Be.USE_ITEM:if(t.inventory&&t.inventory.length>0&&this.state.itemUseCooldown<=0){const i=Math.min(t.selectedItemIndex||0,t.inventory.length-1);this._decision.useItem=i,this._decision.shootItem=!1,this._decision.shootItemIndex=-1,this.state.itemUseCooldown=this.profile.itemUseCooldown}break;case Be.SHOOT_ITEM:if(t.inventory&&t.inventory.length>0&&this.state.itemShootCooldown<=0){const i=Math.min(t.selectedItemIndex||0,t.inventory.length-1);this._decision.shootItem=!0,this._decision.shootItemIndex=i,this._decision.useItem=-1,this.state.itemShootCooldown=this.profile.itemShootCooldown}break}}update(t,e,n,i,r){const o=D.BOT.ACTIVE_DIFFICULTY||this._profileName;if(o!==this._profileName&&this._setDifficulty(o),this._isLearningActive()&&this._addLearningReward((this._learningReward.survivalPerSec||0)*t),this._updateTimers(t),this._updateStuckState(e,n,i),this.state.recoveryActive&&this._updateRecovery(t,e,n,i))return this.currentInput;if(this.reactionTimer>0)return this.currentInput;const a=1+(Math.random()*2-1)*this.profile.errorRate*.2;this.reactionTimer=Math.max(.02,this.profile.reactionTime*a),this._resetDecision(),this._senseEnvironment(e,n,i,r);const l=this._getLearningStateKey(e,n);if(this._flushLearningTransition(l),this.sense.immediateDanger&&this.state.recoveryCooldown<=0&&this._recentBouncePressure>2.3&&(this._enterRecovery(e,n,i,"collision-pressure"),this._updateRecovery(t,e,n,i)))return this.currentInput;if(this.sense.projectileThreat&&this.sense.forwardRisk<.6)this._decision.yaw=this.sense.projectileEvadeYaw,this._decision.pitch=this.sense.projectileEvadePitch,this._decision.boost=!0;else if(!this._applyPortalSteering(e))if(this.sense.pursuitActive){this._decision.yaw=this.sense.pursuitYaw,this._decision.pitch=this.sense.pursuitPitch,this.sense.targetDistanceSq>400&&(this._decision.boost=!0);const h=this.profile.pursuitAimTolerance||.85;this.sense.pursuitAimDot>h&&e.inventory&&e.inventory.length>0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=0,this.state.itemShootCooldown=this.profile.itemShootCooldown)}else this._decideSteering(e);return this._decideItemUsage(e),this._applyLearningAction(e,l),this._applyDecisionToInput()}}const Re={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1};function Rg(){return Re.pitchUp=!1,Re.pitchDown=!1,Re.yawLeft=!1,Re.yawRight=!1,Re.rollLeft=!1,Re.rollRight=!1,Re.boost=!1,Re.cameraSwitch=!1,Re.dropItem=!1,Re.shootItem=!1,Re.shootItemIndex=-1,Re.nextItem=!1,Re.useItem=-1,Re}class Pg{constructor(t,e,n,i,r,o,a=null){this.renderer=t,this.arena=e,this.powerupManager=n,this.particles=i,this.audio=r,this.recorder=o,this.learningEngines=this._normalizeLearningEngines(a),this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer=new Map,this.projectiles=[],this._projectileAssets=new Map,this._projectilePools=new Map,this.onPlayerDied=null,this.onRoundEnd=null,this.onPlayerFeedback=null,this._tmpVec=new R,this._tmpVec2=new R,this._tmpDir=new R,this._tmpDir2=new R,this._tmpCamAnchor=new R,this._tmpBoundaryNormal=new R,this._lockOnCache=new Map,this.botDifficulty=D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY,this.trainingEnabled=!1,this.mortalBots=!1,this.botOnlyRoundEnd=!1,this.dualWorlds=!1,this.worldCount=1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache=new Map}_isLearningEngineLike(t){return!!(t&&typeof t.selectAction=="function"&&typeof t.updateTransition=="function"&&typeof t.getStats=="function")}_normalizeLearningEngines(t){const e={mode3d:null,planar:null};return this._isLearningEngineLike(t)?(e.mode3d=t,e.planar=t,e):(t&&typeof t=="object"&&(this._isLearningEngineLike(t.mode3d)?e.mode3d=t.mode3d:this._isLearningEngineLike(t.mode3D)&&(e.mode3d=t.mode3D),this._isLearningEngineLike(t.planar)?e.planar=t.planar:this._isLearningEngineLike(t.planarMode)&&(e.planar=t.planarMode)),!e.mode3d&&e.planar&&(e.mode3d=e.planar),!e.planar&&e.mode3d&&(e.planar=e.mode3d),e)}_resolveLearningEngine(t=!1){return t||D.GAMEPLAY.PLANAR_MODE?this.learningEngines.planar||this.learningEngines.mode3d||null:this.learningEngines.mode3d||this.learningEngines.planar||null}setup(t,e,n={}){var l,c;console.log(`[EntityManager] Setup: Humans=${t}, Bots=${e}`),this.clear();const i=Array.isArray(n.humanConfigs)?n.humanConfigs:[],r=typeof n.modelScale=="number"?n.modelScale:D.PLAYER.MODEL_SCALE||1;this.botDifficulty=n.botDifficulty||D.BOT.ACTIVE_DIFFICULTY||this.botDifficulty;const o=n.training&&typeof n.training=="object"?n.training:{};this.trainingEnabled=!!o.enabled,this.mortalBots=!!o.mortalBots,this.botOnlyRoundEnd=!!o.botVsBotOnly,this.dualWorlds=!!(this.botOnlyRoundEnd&&o.dualWorlds),this.worldCount=this.dualWorlds?2:1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear(),this.humanPlayers=[],this.botByPlayer.clear();const a=[D.COLORS.PLAYER_1,D.COLORS.PLAYER_2];for(let h=0;h<t;h++){const u=new nl(this.renderer,h,a[h],!1);u.setControlOptions({invertPitch:!!((l=i[h])!=null&&l.invertPitch),cockpitCamera:!!((c=i[h])!=null&&c.cockpitCamera),modelScale:r,forcePlanarMode:!1}),u.worldId=0,this.players.push(u),this.humanPlayers.push(u)}for(let h=0;h<e;h++){const u=D.COLORS.BOT_COLORS[h%D.COLORS.BOT_COLORS.length],d=new nl(this.renderer,t+h,u,!0),m=this.dualWorlds?Math.floor(h/2)%this.worldCount:0,g=this.dualWorlds&&m===1,_=this._resolveLearningEngine(g);d.setControlOptions({modelScale:r,invertPitch:!1,forcePlanarMode:g}),d.worldId=m;const f=new wg({difficulty:this.botDifficulty,recorder:this.recorder,learning:_,learningEnabled:this.trainingEnabled,learningTraining:this.trainingEnabled,botId:`bot-w${m}-${t+h}`,forcePlanarMode:g});this.players.push(d),this.bots.push({player:d,ai:f,worldId:m}),this.botByPlayer.set(d,f)}}setBotDifficulty(t){var e;this.botDifficulty=t||this.botDifficulty;for(let n=0;n<this.bots.length;n++){const i=this.bots[n];(e=i==null?void 0:i.ai)!=null&&e.setDifficulty&&i.ai.setDifficulty(this.botDifficulty)}}setTrainingOptions(t={}){var e,n;this.trainingEnabled=!!t.enabled,this.mortalBots=!!t.mortalBots,this.botOnlyRoundEnd=!!t.botVsBotOnly,this.dualWorlds=!!(this.botOnlyRoundEnd&&t.dualWorlds),this.worldCount=this.dualWorlds?2:1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear();for(let i=0;i<this.bots.length;i++){const r=this.bots[i],o=this.dualWorlds?Math.floor(i/2)%this.worldCount:0;r!=null&&r.player&&(r.player.worldId=o),r&&(r.worldId=o);const a=this.dualWorlds&&o===1;if((e=r==null?void 0:r.player)!=null&&e.setControlOptions&&r.player.setControlOptions({forcePlanarMode:a}),(n=r==null?void 0:r.ai)!=null&&n.setLearningOptions){const l=this._resolveLearningEngine(a);r.ai.setLearningOptions({learningEngine:l,enabled:this.trainingEnabled,training:this.trainingEnabled,forcePlanarMode:a})}}}_isDualWorldsActive(){return!!(this.dualWorlds&&this.worldCount>=2)}_getWorldIdForPlayer(t){return t&&Number.isInteger(t.worldId)?Math.max(0,Math.min(this.worldCount-1,t.worldId)):0}_areInSameWorld(t,e){return this._isDualWorldsActive()?this._getWorldIdForPlayer(t)===this._getWorldIdForPlayer(e):!0}_buildWorldZones(){var o;const t=(o=this.arena)==null?void 0:o.bounds;if(!t){this._worldZones=[];return}if(!this._isDualWorldsActive()){this._worldZones=[{...t,worldId:0}];return}const e=(t.minX+t.maxX)*.5,n=Math.max(2.5,(t.maxX-t.minX)*.05),i=e-n*.5,r=e+n*.5;this._worldZones=[{worldId:0,minX:t.minX,maxX:i,minY:t.minY,maxY:t.maxY,minZ:t.minZ,maxZ:t.maxZ},{worldId:1,minX:r,maxX:t.maxX,minY:t.minY,maxY:t.maxY,minZ:t.minZ,maxZ:t.maxZ}]}_getWorldBounds(t=0){var n;if(this._worldZones.length===0&&this._buildWorldZones(),this._worldZones.length===0)return((n=this.arena)==null?void 0:n.bounds)||null;if(!this._isDualWorldsActive())return this._worldZones[0];const e=Math.max(0,Math.min(this._worldZones.length-1,t));return this._worldZones[e]||this._worldZones[0]}_resetWorldRoundState(){const t=this._isDualWorldsActive()?this.worldCount:1;this._worldRoundState=[];for(let e=0;e<t;e++)this._worldRoundState.push({resolved:!1,winner:null})}_getPlayersInWorld(t){if(!this._isDualWorldsActive())return this.players;const e=[];for(let n=0;n<this.players.length;n++){const i=this.players[n];this._getWorldIdForPlayer(i)===t&&e.push(i)}return e}_getProjectilesInWorld(t){if(!this._isDualWorldsActive())return this.projectiles;const e=[];for(let n=0;n<this.projectiles.length;n++){const i=this.projectiles[n];(Number.isInteger(i==null?void 0:i.worldId)?i.worldId:0)===t&&e.push(i)}return e}_getArenaViewForWorld(t){var r,o,a,l;if(!this._isDualWorldsActive())return this.arena;let e=this._arenaViewCache.get(t);e||(e={bounds:{minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},currentMapKey:"standard",portalsEnabled:!1,portals:[],checkCollision:(c,h=0)=>this.arena.checkCollision(c,h)||this._isPositionOutOfWorldBounds(c,t,h)},this._arenaViewCache.set(t,e));const n=(r=this.arena)==null?void 0:r.bounds,i=this._getWorldBounds(t);return n&&(e.bounds.minY=n.minY,e.bounds.maxY=n.maxY,e.bounds.minZ=n.minZ,e.bounds.maxZ=n.maxZ),i?(e.bounds.minX=i.minX,e.bounds.maxX=i.maxX):n&&(e.bounds.minX=n.minX,e.bounds.maxX=n.maxX),e.currentMapKey=((o=this.arena)==null?void 0:o.currentMapKey)||"standard",e.portalsEnabled=!!((a=this.arena)!=null&&a.portalsEnabled),e.portals=Array.isArray((l=this.arena)==null?void 0:l.portals)?this.arena.portals:[],e}_getRandomPositionInWorld(t=0,e=12,n=null){const i=this._getWorldBounds(t);if(!i)return this.arena.getRandomPosition(e);const r=i.minX+e,o=i.maxX-e,a=i.minY+e,l=i.maxY-e,c=i.minZ+e,h=i.maxZ-e,u=Math.min(r,o),d=Math.max(r,o),m=Math.min(c,h),g=Math.max(c,h),_=u+Math.random()*(d-u),f=m+Math.random()*(g-m);let p=a+Math.random()*Math.max(1e-4,l-a);return Number.isFinite(n)&&(p=n),new R(_,p,f)}_isPositionOutOfWorldBounds(t,e=0,n=0){if(!this._isDualWorldsActive())return!1;const i=this._getWorldBounds(e);if(!i)return!1;const r=Math.max(0,n);return t.x-r<i.minX||t.x+r>i.maxX}_getWorldBoundaryNormal(t,e=0,n=0){if(!this._isDualWorldsActive())return null;const i=this._getWorldBounds(e);if(!i)return null;const r=Math.max(0,n);return t.x-r<i.minX?this._tmpBoundaryNormal.set(1,0,0):t.x+r>i.maxX?this._tmpBoundaryNormal.set(-1,0,0):null}_constrainPlayerToWorld(t){if(!this._isDualWorldsActive()||!t)return;const e=this._getWorldBounds(this._getWorldIdForPlayer(t));if(!e)return;const n=D.PLAYER.HITBOX_RADIUS+.3;t.position.x=Math.max(e.minX+n,Math.min(e.maxX-n,t.position.x))}_getSpectatorFocusForWorld(t){if(!this._isDualWorldsActive())return null;let e=null;for(let n=0;n<this.players.length;n++){const i=this.players[n];if(this._getWorldIdForPlayer(i)===t&&(e||(e=i),i.alive))return i}return e}spawnAll(){this._roundEnded=!1,this._buildWorldZones(),this._resetWorldRoundState();const e=!!D.GAMEPLAY.PLANAR_MODE?this._getPlanarSpawnLevel():null;for(const n of this.players){const i=this._getWorldIdForPlayer(n),o=!!(n!=null&&n.isPlanarMode&&n.isPlanarMode())?this._getPlanarSpawnLevel():e,a=this._findSpawnPosition(12,12,o,i),l=this._findSafeSpawnDirection(a,i);n.spawn(a,l),n.worldId=i,n.shootCooldown=0,this.recorder&&(this.recorder.markPlayerSpawn(n),this.recorder.logEvent("SPAWN",n.index,`bot=${n.isBot?1:0} world=${i}`))}}_getPlanarSpawnLevel(){var a,l,c;const t=((a=this.arena)==null?void 0:a.bounds)||null,e=t?(t.minY+t.maxY)*.5:D.PLAYER.START_Y;if(!(Array.isArray((l=this.arena)==null?void 0:l.portals)&&this.arena.portals.length>0)||!((c=this.arena)!=null&&c.getPortalLevels))return e;const i=this.arena.getPortalLevels();if(!Array.isArray(i)||i.length===0)return e;let r=e,o=1/0;for(let h=0;h<i.length;h++){const u=i[h];if(!Number.isFinite(u))continue;const d=Math.abs(u-e);d<o&&(o=d,r=u)}return r}_findSpawnPosition(t=12,e=12,n=null,i=0){var a;const r=Number.isFinite(n)&&!!((a=this.arena)!=null&&a.getRandomPositionOnLevel),o=()=>this._isDualWorldsActive()?this._getRandomPositionInWorld(i,e,r?n:null):r?this.arena.getRandomPositionOnLevel(n,e):this.arena.getRandomPosition(e);for(let l=0;l<100;l++){const c=o();let h=!1;for(const u of this.players)if(u.alive&&!(this._isDualWorldsActive()&&this._getWorldIdForPlayer(u)!==i)&&u.position.distanceToSquared(c)<t*t){h=!0;break}if(!h)return c}return o()}_findSafeSpawnDirection(t,e=0){let i=new R(0,0,-1),r=-1;for(let o=0;o<20;o++){const a=Math.PI*2*o/20;this._tmpDir.set(Math.sin(a),0,-Math.cos(a));const l=this._traceFreeDistance(t,this._tmpDir,36,2.2,e);l>r&&(r=l,i.copy(this._tmpDir))}return i}_traceFreeDistance(t,e,n,i,r=0){const o=Math.max(.5,i);let a=0;for(;a<n;)if(a+=o,this._tmpVec.set(t.x+e.x*a,t.y+e.y*a,t.z+e.z*a),this.arena.checkCollision(this._tmpVec,D.PLAYER.HITBOX_RADIUS)||this._isPositionOutOfWorldBounds(this._tmpVec,r,D.PLAYER.HITBOX_RADIUS))return a-o;return n}update(t,e){var l,c,h,u,d,m,g,_;this._lockOnCache.clear(),this._updateProjectiles(t);for(const f of this.players){if(!f.alive)continue;f.shootCooldown=Math.max(0,(f.shootCooldown||0)-t);let p=Rg();if(f.isBot){const P=this.botByPlayer.get(f);if(P){const w=this._getWorldIdForPlayer(f),b=this._isDualWorldsActive()?this._getArenaViewForWorld(w):this.arena,F=this._isDualWorldsActive()?this._getPlayersInWorld(w):this.players,y=this._isDualWorldsActive()?this._getProjectilesInWorld(w):this.projectiles;p=P.update(t,f,b,F,y)}}else{const P=this.humanPlayers.length===1&&f.index===0;p=e.getPlayerInput(f.index,{includeSecondaryBindings:P}),p.cameraSwitch&&(this.renderer.cycleCamera(f.index),f.cameraMode=this.renderer.cameraModes[f.index]||0)}if(p.nextItem&&f.cycleItem(),p.dropItem&&f.dropItem(),p.useItem>=0){const P=this._useInventoryItem(f,p.useItem);P.ok?this.recorder&&this.recorder.logEvent("ITEM_USE",f.index,`mode=use type=${P.type}`):f.isBot||this._notifyPlayerFeedback(f,P.reason)}if(p.shootItem){const P=this._shootItemProjectile(f,p.shootItemIndex);!P.ok&&!f.isBot?this._notifyPlayerFeedback(f,P.reason):P.ok&&this.recorder&&this.recorder.logEvent("ITEM_USE",f.index,`mode=shoot type=${P.type}`)}f.update(t,p),this._constrainPlayerToWorld(f);const M=(f.spawnProtectionTimer||0)>0;if(!f.isGhost&&!M){const P=this._getWorldIdForPlayer(f),w=this.arena.checkCollision(f.position,D.PLAYER.HITBOX_RADIUS),b=this._isPositionOutOfWorldBounds(f.position,P,D.PLAYER.HITBOX_RADIUS);if(w||b)if(f.hasShield)f.hasShield=!1,f.getDirection(this._tmpDir).multiplyScalar(2),f.position.sub(this._tmpDir),this._constrainPlayerToWorld(f);else if(f.isBot&&!this.mortalBots){const F=!w&&b?this._getWorldBoundaryNormal(f.position,P,D.PLAYER.HITBOX_RADIUS):null;this._bounceBot(f,F,"WALL")}else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(f.position,f.color),this._killPlayer(f,"WALL");continue}for(const F of this.players){if(!F.alive||!this._areInSameWorld(f,F))continue;const y=F===f?15:0,A=F.trail.checkCollision(f.position,D.PLAYER.HITBOX_RADIUS,y);if(A&&A.hit)if(f.hasShield)f.hasShield=!1;else if(f.isBot&&!this.mortalBots){if(A&&A.hit){this._bounceBot(f,A.normal,"TRAIL");break}}else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(f.position,f.color);const B=F===f?"TRAIL_SELF":"TRAIL_OTHER",H=F!==f?F:null;this._killPlayer(f,B,H);break}}}if(!f.alive)continue;const v=this._isDualWorldsActive()?null:this.arena.checkPortal(f.position,D.PLAYER.HITBOX_RADIUS,f.index);v&&(f.position.copy(v.target),f.getDirection(this._tmpVec).normalize().multiplyScalar(2),f.position.add(this._tmpVec),f!=null&&f.isPlanarMode&&f.isPlanarMode()&&(f.currentPlanarY=v.target.y),f.trail.forceGap(.5),this._constrainPlayerToWorld(f));const S=this.powerupManager.checkPickup(f.position,D.PLAYER.HITBOX_RADIUS);S&&(f.addToInventory(S),this.audio&&this.audio.play("POWERUP"),this.particles&&this.particles.spawnHit(f.position,65280))}if(this._roundEnded)return;let n=0,i=null;for(const f of this.humanPlayers)f.alive&&(n++,i=f);let r=!1,o=null,a=!1;if(this.humanPlayers.length===1){if(n===0){console.log("[EntityManager] Round End: Singleplayer Died"),r=!0,o=null;for(let f=0;f<this.bots.length;f++){const p=this.bots[f].player;if(p&&p.alive){o=p;break}}}}else if(this.humanPlayers.length>=2)n<=1&&this.humanPlayers.length>1&&(console.log(`[EntityManager] Round End: Multiplayer Survivor. HumansAlive=${n}, TotalHumans=${this.humanPlayers.length}, Winner=P${o?o.index:"None"}`),r=!0,o=i);else if(this.botOnlyRoundEnd)if(this._isDualWorldsActive()){let f=!0;for(let p=0;p<this.worldCount;p++){const M=this._worldRoundState[p];if(!M||M.resolved)continue;let v=0,S=null,P=0;for(let w=0;w<this.bots.length;w++){const b=(l=this.bots[w])==null?void 0:l.player;b&&this._getWorldIdForPlayer(b)===p&&(P++,b.alive&&(v++,S=b))}if(P>0&&v<=1){M.resolved=!0,M.winner=S||null;for(let w=0;w<this.bots.length;w++){const b=this.bots[w];if(!((c=b==null?void 0:b.player)!=null&&c.alive)||!((h=b==null?void 0:b.ai)!=null&&h.onRoundEnd)||this._getWorldIdForPlayer(b.player)!==p)continue;const F=M.winner?b.player===M.winner?"win":"loss":"draw";b.ai.onRoundEnd(F)}}else f=!1}a=!0,f&&(r=!0,o=((u=this._worldRoundState[0])==null?void 0:u.winner)||((d=this._worldRoundState[1])==null?void 0:d.winner)||null)}else{let f=0,p=null;for(let M=0;M<this.bots.length;M++){const v=(m=this.bots[M])==null?void 0:m.player;v!=null&&v.alive&&(f++,p=v)}f<=1&&this.bots.length>0&&(r=!0,o=p)}if(r){if(this._roundEnded=!0,!a)for(let f=0;f<this.bots.length;f++){const p=this.bots[f];if(!((g=p==null?void 0:p.player)!=null&&g.alive)||!((_=p==null?void 0:p.ai)!=null&&_.onRoundEnd))continue;const M=o?p.player===o?"win":"loss":"draw";p.ai.onRoundEnd(M)}this.onRoundEnd&&this.onRoundEnd(o)}}_takeInventoryItem(t,e=-1){if(!t.inventory||t.inventory.length===0)return{ok:!1,reason:"Kein Item verfuegbar",type:null};const n=Number.isInteger(e)&&e>=0?Math.min(e,t.inventory.length-1):Math.min(t.selectedItemIndex||0,t.inventory.length-1),i=t.inventory.splice(n,1)[0];return(t.inventory.length===0||t.selectedItemIndex>=t.inventory.length)&&(t.selectedItemIndex=0),{ok:!0,type:i}}_useInventoryItem(t,e=-1){const n=this._takeInventoryItem(t,e);return!n.ok||!n.type?{ok:!1,reason:"Kein Item zum Nutzen"}:(t.applyPowerup(n.type),{ok:!0,type:n.type})}_shootItemProjectile(t,e=-1){if((t.shootCooldown||0)>0)return{ok:!1,reason:`Schuss bereit in ${t.shootCooldown.toFixed(1)}s`};const n=this._takeInventoryItem(t,e);if(!n.ok||!n.type)return{ok:!1,reason:"Kein Item zum Schiessen",type:null};const i=n.type,r=D.POWERUP.TYPES[i];if(!r)return{ok:!1,reason:"Item ungueltig"};t.getAimDirection(this._tmpDir).normalize(),this._tmpVec.copy(t.position).addScaledVector(this._tmpDir,2.2);const o=D.PROJECTILE.SPEED,a=D.PROJECTILE.RADIUS,l=this._acquireProjectileMesh(i,r.color);return l.position.copy(this._tmpVec),this._tmpVec2.copy(this._tmpVec).add(this._tmpDir),l.lookAt(this._tmpVec2),this.projectiles.push({mesh:l,flame:l.userData.flame||null,poolKey:i,owner:t,worldId:this._getWorldIdForPlayer(t),type:i,position:this._tmpVec.clone(),velocity:this._tmpDir.clone().multiplyScalar(o),radius:a,ttl:D.PROJECTILE.LIFE_TIME,traveled:0,target:this._checkLockOn(t)}),t.shootCooldown=D.PROJECTILE.COOLDOWN,this.audio&&this.audio.play("SHOOT"),{ok:!0,type:i}}_acquireProjectileMesh(t,e){let i=this._getProjectilePool(t).pop();if(!i){const r=this._getProjectileAssets(t,e);i=new bn;const o=new Yt(r.bodyGeo,r.bodyMat);i.add(o);const a=new Yt(r.tipGeo,r.tipMat);a.position.z=-.8,i.add(a);for(let c=0;c<4;c++){const h=new Yt(r.finGeo,r.finMat);h.position.z=.5;const u=Math.PI/2*c;c%2===0?h.position.x=Math.cos(u)*.2:(h.position.y=Math.sin(u)*.2,h.rotation.z=Math.PI/2),i.add(h)}const l=new Yt(r.flameGeo,r.flameMat);l.position.z=.85,i.add(l),i.userData.flame=l}return i.visible=!0,i.userData.flame&&i.userData.flame.scale.set(1,1,1),this.renderer.addToScene(i),i}_getProjectilePool(t){return this._projectilePools.has(t)||this._projectilePools.set(t,[]),this._projectilePools.get(t)}_getProjectileAssets(t,e){if(this._projectileAssets.has(t))return this._projectileAssets.get(t);const n=new Pi(.15,.15,1.2,8);n.rotateX(Math.PI/2);const i=new pn(.15,.4,8);i.rotateX(Math.PI/2);const r=new Je(.02,.25,.3),o=new pn(.1,.5,6);o.rotateX(-Math.PI/2);const a=new Pe({color:e,emissive:e,emissiveIntensity:.4,roughness:.3,metalness:.6}),l=new Pe({color:13421772,emissive:e,emissiveIntensity:.2,roughness:.2,metalness:.8}),c=new Pe({color:e,emissive:e,emissiveIntensity:.3,roughness:.4,metalness:.5}),h=new je({color:16737792,transparent:!0,opacity:.8}),u={bodyGeo:n,tipGeo:i,finGeo:r,flameGeo:o,bodyMat:a,tipMat:l,finMat:c,flameMat:h};return this._projectileAssets.set(t,u),u}_checkLockOn(t){if(this._lockOnCache.has(t.index))return this._lockOnCache.get(t.index);t.getDirection(this._tmpDir).normalize();const e=D.HOMING.LOCK_ON_ANGLE*Math.PI/180,n=D.HOMING.MAX_LOCK_RANGE,i=n*n;let r=null,o=1/0;for(const a of this.players){if(a===t||!a.alive||!this._areInSameWorld(t,a))continue;this._tmpVec.subVectors(a.position,t.position);const l=this._tmpVec.lengthSq();if(l>i||l<1)continue;this._tmpDir.angleTo(this._tmpVec.normalize())<=e&&l<o&&(r=a,o=l)}return this._lockOnCache.set(t.index,r),r}getLockOnTarget(t){if(this._lockOnCache.has(t))return this._lockOnCache.get(t);const e=this.players[t];return!e||!e.alive?null:this._checkLockOn(e)}_updateProjectiles(t){const e=performance.now()*.001;for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n],r=i.velocity.x*t,o=i.velocity.y*t,a=i.velocity.z*t;i.position.x+=r,i.position.y+=o,i.position.z+=a,i.traveled+=Math.sqrt(r*r+o*o+a*a),i.ttl-=t,i.mesh.position.copy(i.position),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec);const l=this._isDualWorldsActive()?null:this.arena.checkPortal(i.position,i.radius,1e3+n);if(l&&(i.position.copy(l.target),this._tmpVec.copy(i.velocity).normalize().multiplyScalar(1.5),i.position.add(this._tmpVec),i.mesh.position.copy(i.position)),i.target&&i.target.alive){this._tmpVec.subVectors(i.target.position,i.position).normalize(),this._tmpVec2.copy(i.velocity);const h=this._tmpVec2.length();this._tmpVec2.normalize();const u=D.HOMING.TURN_RATE*t;this._tmpVec2.lerp(this._tmpVec,Math.min(u,1)).normalize(),i.velocity.copy(this._tmpVec2.multiplyScalar(h)),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec)}if(i.flame){const h=.7+Math.sin(e*30+n*7)*.3;i.flame.scale.set(1,1,h)}if(i.ttl<=0||i.traveled>=D.PROJECTILE.MAX_DISTANCE||this.arena.checkCollision(i.position,i.radius)||this._isPositionOutOfWorldBounds(i.position,Number.isInteger(i.worldId)?i.worldId:0,i.radius)){this.particles&&this.particles.spawnHit(i.position,16776960),this.audio&&!i.owner.isBot&&this.audio.play("HIT"),this._removeProjectileAt(n);continue}let c=!1;for(const h of this.players){if(!h.alive||h===i.owner||!this._areInSameWorld(i.owner,h))continue;const u=D.PLAYER.HITBOX_RADIUS+i.radius;if(h.position.distanceToSquared(i.position)<=u*u){h.hasShield?(h.hasShield=!1,i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer geblockt")):(h.applyPowerup(i.type),this.particles&&this.particles.spawnExplosion(h.position,i.poolKey?16711680:16776960),this.audio&&this.audio.play("POWERUP"),i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer!")),c=!0;break}}c&&this._removeProjectileAt(n)}}_removeProjectileAt(t){const e=this.projectiles[t];e&&(this._releaseProjectileMesh(e),this.projectiles.splice(t,1))}_releaseProjectileMesh(t){this.renderer.removeFromScene(t.mesh),t.mesh.visible=!1,this._getProjectilePool(t.poolKey||t.type).push(t.mesh)}_notifyPlayerFeedback(t,e){this.onPlayerFeedback&&this.onPlayerFeedback(t,e)}_killPlayer(t,e="UNKNOWN",n=null){if(!(!t||!t.alive)){if(t.kill(),this.particles&&this.particles.spawnExplosion(t.position,t.color),this.audio&&this.audio.play("EXPLOSION"),t.isBot){const i=this.botByPlayer.get(t);i!=null&&i.onDeath&&i.onDeath(e)}if(n&&n.isBot){const i=this.botByPlayer.get(n);i!=null&&i.onKill&&i.onKill(t,e)}if(this.recorder){this.recorder.markPlayerDeath(t,e);const i=Number.isFinite(n==null?void 0:n.index)?n.index:-1,r=this._getWorldIdForPlayer(t);this.recorder.logEvent("KILL",t.index,`cause=${e} killer=${i} world=${r}`)}this.onPlayerDied&&this.onPlayerDied(t)}}_isBotPositionSafe(t,e){const n=D.PLAYER.HITBOX_RADIUS;if(this.arena.checkCollision(e,n)||this._isPositionOutOfWorldBounds(e,this._getWorldIdForPlayer(t),n))return!1;for(let i=0;i<this.players.length;i++){const r=this.players[i];if(!r||!r.alive||!this._areInSameWorld(t,r))continue;const o=r===t?20:0;if(r.trail.checkCollisionFast){if(r.trail.checkCollisionFast(e,n,o))return!1}else{const a=r.trail.checkCollision(e,n,o);if(a&&a.hit)return!1}}return!0}_clampBotPosition(t,e=0){const n=this.arena.bounds,i=D.PLAYER.HITBOX_RADIUS+.5;if(t.x=Math.max(n.minX+i,Math.min(n.maxX-i,t.x)),t.y=Math.max(n.minY+i,Math.min(n.maxY-i,t.y)),t.z=Math.max(n.minZ+i,Math.min(n.maxZ-i,t.z)),this._isDualWorldsActive()){const r=this._getWorldBounds(e);r&&(t.x=Math.max(r.minX+i,Math.min(r.maxX-i,t.x)))}}_findSafeBouncePosition(t,e,n=null){const i=t.position.x,r=t.position.y,o=t.position.z,a=this._getWorldIdForPlayer(t),l=[2.5,4,6,8],c=[{x:e.x,y:e.y,z:e.z}];n&&(c.push({x:e.x+n.x*.35,y:e.y+n.y*.35,z:e.z+n.z*.35}),c.push({x:e.x-n.x*.22,y:e.y-n.y*.22,z:e.z-n.z*.22}));for(let h=0;h<c.length;h++){let u=c[h].x,d=c[h].y,m=c[h].z;const g=Math.hypot(u,d,m);if(!(g<1e-4)){u/=g,d/=g,m/=g;for(let _=0;_<l.length;_++){const f=l[_];if(this._tmpVec.set(i+u*f,r+d*f,o+m*f),this._clampBotPosition(this._tmpVec,a),this._isBotPositionSafe(t,this._tmpVec))return t.position.copy(this._tmpVec),!0}}}return this._tmpVec.set(i+e.x*2,r+e.y*2,o+e.z*2),this._clampBotPosition(this._tmpVec,a),t.position.copy(this._tmpVec),!1}_bounceBot(t,e=null,n="WALL"){t.getDirection(this._tmpDir);const i=t.position,r=this.arena.bounds;let o=this._tmpVec2;if(e)o.copy(e).normalize();else{const h=i.x-r.minX,u=r.maxX-i.x,d=i.y-r.minY,m=r.maxY-i.y,g=i.z-r.minZ,_=r.maxZ-i.z;let f=h;this._tmpVec2.set(1,0,0),u<f&&(f=u,this._tmpVec2.set(-1,0,0)),d<f&&(f=d,this._tmpVec2.set(0,1,0)),m<f&&(f=m,this._tmpVec2.set(0,-1,0)),g<f&&(f=g,this._tmpVec2.set(0,0,1)),_<f&&(f=_,this._tmpVec2.set(0,0,-1)),o=this._tmpVec2}const a=this._tmpDir.dot(o);this._tmpDir.x-=2*a*o.x,this._tmpDir.y-=2*a*o.y,this._tmpDir.z-=2*a*o.z,this._tmpDir.normalize(),this._tmpDir.addScaledVector(o,.25);const l=n==="TRAIL"?.35:.24;this._tmpDir.x+=(Math.random()-.5)*l,this._tmpDir.y+=(Math.random()-.5)*l,this._tmpDir.z+=(Math.random()-.5)*l,t!=null&&t.isPlanarMode&&t.isPlanarMode()&&(this._tmpDir.y=0),this._tmpDir.normalize(),this._tmpVec.copy(i).add(this._tmpDir),t.group.lookAt(this._tmpVec),t.quaternion.copy(t.group.quaternion),this._findSafeBouncePosition(t,this._tmpDir,o),t.trail.forceGap(.3);const c=this.botByPlayer.get(t);if(c!=null&&c.onBounce&&c.onBounce(n,o),this.recorder){const h=n==="TRAIL"?"BOUNCE_TRAIL":"BOUNCE_WALL";this.recorder.logEvent(h,t.index)}}updateCameras(t){let e=!1;for(const n of this.players)if(!n.isBot&&n.index<this.renderer.cameras.length){const i=n.position,r=n.alive?n.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),o=n.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(n.index,i,r,t,n.quaternion,n.cockpitCamera,n.isBoosting,this.arena,o),n.cameraMode=this.renderer.cameraModes[n.index]||0,e=!0}if(!e&&this.humanPlayers.length===0&&this.renderer.cameras.length>0){let n=null,i=null;if(this._isDualWorldsActive())n=this._getSpectatorFocusForWorld(0),i=this._getSpectatorFocusForWorld(1),!n&&this.players.length>0&&(n=this.players[0]),i||(i=n);else{for(let r=0;r<this.players.length;r++){const o=this.players[r];o!=null&&o.alive&&(n?!i&&o!==n&&(i=o):n=o)}if(!n&&this.players.length>0&&(n=this.players[0]),!i)for(let r=0;r<this.players.length;r++){const o=this.players[r];if(o&&o!==n){i=o;break}}i||(i=n)}if(n){const r=n.position,o=n.alive?n.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),a=n.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(0,r,o,t,n.quaternion,!1,n.isBoosting,this.arena,a)}if(i&&this.renderer.cameras.length>1){const r=i.position,o=i.alive?i.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),a=i.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(1,r,o,t,i.quaternion,!1,i.isBoosting,this.arena,a)}}}getHumanPlayers(){return this.humanPlayers}clear(){for(let t=this.projectiles.length-1;t>=0;t--)this._removeProjectileAt(t);for(const t of this._projectilePools.values())for(const e of t)this.renderer.removeFromScene(e);this._projectilePools.clear();for(const t of this._projectileAssets.values())t.bodyGeo.dispose(),t.tipGeo.dispose(),t.finGeo.dispose(),t.flameGeo.dispose(),t.bodyMat.dispose(),t.tipMat.dispose(),t.finMat.dispose(),t.flameMat.dispose();this._projectileAssets.clear();for(const t of this.players)t.dispose();this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer.clear(),this.projectiles=[],this._lockOnCache.clear(),this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear(),this.dualWorlds=!1,this.worldCount=1}}class Cg{constructor(t,e){this.renderer=t,this.arena=e,this.items=[],this.spawnTimer=0,this.typeKeys=Object.keys(D.POWERUP.TYPES),this._pickupBoxSize=new R,this._pickupSphere=new _n;const n=D.POWERUP.SIZE;this._sharedGeo=new Je(n,n,n),this._sharedWireGeo=new Je(n*1.15,n*1.15,n*1.15)}update(t){this.spawnTimer+=t,this.spawnTimer>=D.POWERUP.SPAWN_INTERVAL&&this.items.length<D.POWERUP.MAX_ON_FIELD&&(this.spawnTimer=0,this._spawnRandom());const e=performance.now()*.001,n=D.POWERUP.PICKUP_RADIUS*2;this._pickupBoxSize.set(n,n,n);for(const i of this.items)i.mesh.rotation.y+=D.POWERUP.ROTATION_SPEED*t,i.mesh.position.y=i.baseY+Math.sin(e*D.POWERUP.BOUNCE_SPEED+i.phase)*D.POWERUP.BOUNCE_HEIGHT,i.box.setFromCenterAndSize(i.mesh.position,this._pickupBoxSize)}_spawnRandom(){var u;const t=this.typeKeys[Math.floor(Math.random()*this.typeKeys.length)],e=D.POWERUP.TYPES[t];let n=null;if(D.GAMEPLAY.PLANAR_MODE&&((u=this.arena)!=null&&u.getPortalLevels)){const d=this.arena.getPortalLevels();if(d.length>0){const m=d[Math.floor(Math.random()*d.length)];n=this.arena.getRandomPositionOnLevel(m,8)}}n||(n=this.arena.getRandomPosition(8));const i=this._sharedGeo,r=new Pe({color:e.color,emissive:e.color,emissiveIntensity:.5,roughness:.2,metalness:.8,transparent:!0,opacity:.85}),o=new Yt(i,r);o.position.copy(n),o.castShadow=!1;const a=this._sharedWireGeo,l=new je({color:e.color,wireframe:!0,transparent:!0,opacity:.3}),c=new Yt(a,l);o.add(c),this.renderer.addToScene(o);const h=new nn().setFromCenterAndSize(n,new R(D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2));this.items.push({mesh:o,type:t,box:h,baseY:n.y,phase:Math.random()*Math.PI*2})}checkPickup(t,e){this._pickupSphere.center.copy(t),this._pickupSphere.radius=e+D.POWERUP.PICKUP_RADIUS;for(let n=this.items.length-1;n>=0;n--)if(this.items[n].box.intersectsSphere(this._pickupSphere)){const i=this.items.splice(n,1)[0];return this.renderer.removeFromScene(i.mesh),i.mesh.material.dispose(),i.type}return null}clear(){for(const t of this.items)this.renderer.removeFromScene(t.mesh),t.mesh.material.dispose();this.items=[],this.spawnTimer=0}}const un=1e3,tn=new ce;class Lg{constructor(t){this.renderer=t,this.count=0,this.positions=new Float32Array(un*3),this.velocities=new Float32Array(un*3),this.lifetimes=new Float32Array(un),this.maxLifetimes=new Float32Array(un),this.gravities=new Float32Array(un),this.scales=new Float32Array(un),this.colors=new Float32Array(un*3);const e=new Je(.8,.8,.8),n=new je({color:16777215,transparent:!0,opacity:1});this.mesh=new Wl(e,n,un),this.mesh.instanceMatrix.setUsage(El),this.mesh.count=0,this.renderer.addToScene(this.mesh),this._tmpColor=new Xt}spawn(t,e,n,i=1,r=.5,o=1){this._tmpColor.setHex(n);for(let a=0;a<e;a++){if(this.count>=un)return;const l=this.count;this.count++,this.positions[l*3]=t.x,this.positions[l*3+1]=t.y,this.positions[l*3+2]=t.z;const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),u=i*(.5+Math.random()*.5);this.velocities[l*3]=u*Math.sin(h)*Math.cos(c),this.velocities[l*3+1]=u*Math.sin(h)*Math.sin(c),this.velocities[l*3+2]=u*Math.cos(h),this.lifetimes[l]=o*(.8+Math.random()*.4),this.maxLifetimes[l]=this.lifetimes[l],this.gravities[l]=-5,this.scales[l]=r*(.5+Math.random()*.5),this.colors[l*3]=this._tmpColor.r,this.colors[l*3+1]=this._tmpColor.g,this.colors[l*3+2]=this._tmpColor.b,this.mesh.setColorAt(l,this._tmpColor),tn.position.set(this.positions[l*3],this.positions[l*3+1],this.positions[l*3+2]),tn.scale.setScalar(this.scales[l]),tn.updateMatrix(),this.mesh.setMatrixAt(l,tn.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawnExplosion(t,e){this.spawn(t,30,e,12,.7,.6)}spawnHit(t,e){this.spawn(t,10,e,6,.4,.3)}update(t){if(this.count===0){this.mesh.count=0;return}let e=0,n=!1;for(let i=0;i<this.count;i++)if(this.lifetimes[i]-=t,this.lifetimes[i]>0){const r=i*3,o=e*3;this.velocities[r+1]+=this.gravities[i]*t,this.positions[r]+=this.velocities[r]*t,this.positions[r+1]+=this.velocities[r+1]*t,this.positions[r+2]+=this.velocities[r+2]*t,i!==e&&(this.positions[o]=this.positions[r],this.positions[o+1]=this.positions[r+1],this.positions[o+2]=this.positions[r+2],this.velocities[o]=this.velocities[r],this.velocities[o+1]=this.velocities[r+1],this.velocities[o+2]=this.velocities[r+2],this.lifetimes[e]=this.lifetimes[i],this.maxLifetimes[e]=this.maxLifetimes[i],this.gravities[e]=this.gravities[i],this.scales[e]=this.scales[i],this.colors[o]=this.colors[r],this.colors[o+1]=this.colors[r+1],this.colors[o+2]=this.colors[r+2],this._tmpColor.setRGB(this.colors[o],this.colors[o+1],this.colors[o+2]),this.mesh.setColorAt(e,this._tmpColor),n=!0),tn.position.set(this.positions[o],this.positions[o+1],this.positions[o+2]),tn.rotation.x+=this.velocities[o+2]*t,tn.rotation.y+=this.velocities[o]*t;const a=this.scales[e]*(this.lifetimes[e]/this.maxLifetimes[e]);tn.scale.setScalar(a),tn.updateMatrix(),this.mesh.setMatrixAt(e,tn.matrix),e++}this.count=e,this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,n&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.count=0,this.mesh.count=0}}class Ig{constructor(){this.ctx=null,this.enabled=!0,this.volume=.15,this.buffers={},this.lastPlayTime={},this.cooldowns={SHOOT:100,EXPLOSION:200,HIT:100,POWERUP:500,BOOST:200};const t=()=>this._init();window.addEventListener("keydown",t,{once:!0}),window.addEventListener("mousedown",t,{once:!0}),window.addEventListener("keydown",e=>{e.code==="KeyM"&&(this.enabled=!this.enabled,console.log(`Audio ${this.enabled?"ENABLED":"DISABLED"}`))})}_init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this._generateBuffers())}_generateBuffers(){const e=this.ctx.sampleRate*.3,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.buffers.explosion=n}play(t){if(!this.enabled||!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=performance.now(),n=this.lastPlayTime[t]||0,i=this.cooldowns[t]||50;if(!(e-n<i))switch(this.lastPlayTime[t]=e,t){case"SHOOT":this._playShoot();break;case"EXPLOSION":this._playExplosion();break;case"HIT":this._playHit();break;case"POWERUP":this._playPowerup();break;case"BOOST":this._playBoost();break}}_playShoot(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.5,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playExplosion(){if(!this.buffers.explosion)return;const t=this.ctx.createBufferSource();t.buffer=this.buffers.explosion;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1e3,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(100,this.ctx.currentTime+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(this.volume,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(n),n.connect(this.ctx.destination),t.start()}_playHit(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.8,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playPowerup(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.2),e.gain.setValueAtTime(this.volume*.6,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.2)}_playBoost(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(300,this.ctx.currentTime+.3),e.gain.setValueAtTime(this.volume*.4,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.3)}}class ol{constructor(t,e){this.container=document.getElementById(t),this.playerIndex=e,this.horizon=this.container.querySelector(".hud-horizon"),this.pitchLadder=this.container.querySelector(".hud-pitch-ladder"),this.centerCrosshair=this.container.querySelector(".hud-center-crosshair"),this.bankLine=this.container.querySelector(".hud-bank-line"),this.bankAngle=this.container.querySelector(".hud-bank-angle"),this.speedValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed"),this.altValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt"),this.headingValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading"),this.lockReticle=this.container.querySelector(".hud-lock-reticle"),this.lockDist=this.lockReticle.querySelector(".lock-dist"),this.speedScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed-scale"),this.altScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt-scale"),this.headingScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading-scale"),this._createPitchLadder(),this._createTapeScales(),this.visible=!1,this._vec=new R}_createPitchLadder(){for(let t=-18;t<=18;t++){if(t===0)continue;const e=t*5,n=document.createElement("div");n.className="pitch-line",n.dataset.deg=e,n.style.top=`${-e*8}px`,n.style.width=`${120-Math.abs(e)*.5}px`,e<0&&(n.style.borderTopStyle="dashed"),this.pitchLadder.appendChild(n)}}_createTapeScales(){this._fillScale(this.speedScale,0,100,10,"px",20),this._fillScale(this.altScale,0,200,10,"px",20);const t=["N","NE","E","SE","S","SW","W","NW"];for(let e=0;e<=360;e+=15){const n=document.createElement("div");if(n.style.position="absolute",n.style.left=`${e*4}px`,n.style.height=e%90===0?"10px":"5px",n.style.borderLeft="1px solid #0f0",n.style.bottom="0",e%45===0){const i=document.createElement("div");i.textContent=t[e/45%8],i.style.position="absolute",i.style.left="-10px",i.style.top="-15px",i.style.fontSize="10px",n.appendChild(i)}this.headingScale.appendChild(n)}}_fillScale(t,e,n,i,r,o){for(let a=e;a<=n;a+=i){const l=document.createElement("div");if(l.style.position="absolute",l.style.top=`${-(a*(o/i))}px`,l.style.right="0",l.style.width="8px",l.style.borderTop="1px solid #0f0",a%(i*2)===0){const c=document.createElement("div");c.textContent=a,c.style.position="absolute",c.style.right="12px",c.style.top="-6px",c.style.fontSize="9px",l.appendChild(c)}t.appendChild(l)}}setVisibility(t){this.visible!==t&&(this.visible=t,t?this.container.classList.remove("hidden"):this.container.classList.add("hidden"))}update(t,e,n){if(!t||!t.alive){this.setVisibility(!1);return}if(D.CAMERA.MODES[t.cameraMode]!=="FIRST_PERSON"){this.setVisibility(!1);return}this.setVisibility(!0);const r=new Ln().setFromQuaternion(t.quaternion,"YXZ"),o=Pn.radToDeg(r.x),a=Pn.radToDeg(r.y),l=Pn.radToDeg(r.z),c=!!D.GAMEPLAY.PLANAR_MODE;if(this.horizon.style.transform="translate(-50%, -50%)",this.pitchLadder.style.transform=`translate(-50%, -50%) translateY(${o*8}px)`,this.bankLine&&(this.bankLine.style.transform=`translate(-50%, -50%) rotate(${l}deg)`),this.bankAngle){const _=Math.round(l),f=_>0?"+":"";this.bankAngle.textContent=`${f}${_}°`}this.centerCrosshair&&this.centerCrosshair.classList.toggle("hidden",c);const h=Math.round(t.speed*10),u=Math.round(t.position.y);this.speedValue.textContent=h,this.altValue.textContent=u,this.speedScale.style.transform=`translateY(0) translateY(${h*2}px)`,this.altScale.style.transform=`translateY(0) translateY(${u*2}px)`;let d=-a;d<0&&(d+=360),d=d%360;const m=Math.round(d);this.headingValue.textContent=m.toString().padStart(3,"0"),this.headingScale.style.transform=`translateX(-50%) translateX(${-d*4}px)`;const g=n.getLockOnTarget(t.index);if(g&&g.alive){this.lockReticle.classList.remove("hidden");const _=Math.round(t.position.distanceTo(g.position));this.lockDist.textContent=_+"m";const f=n.renderer.cameras[t.index];if(f){this._vec.copy(g.position),this._vec.project(f);const p=(this._vec.x*.5+.5)*this.container.clientWidth,M=(-(this._vec.y*.5)+.5)*this.container.clientHeight;this._vec.z<1?(this.lockReticle.style.left=`${p}px`,this.lockReticle.style.top=`${M}px`):this.lockReticle.classList.add("hidden")}}else this.lockReticle.classList.add("hidden")}}const pi=800,mi=900,Ds=120,En=16;function Dg(){return{roundId:0,duration:0,winnerIndex:-1,winnerIsBot:!1,botCount:0,humanCount:0,botSurvivalAverage:0,selfCollisions:0,stuckEvents:0,bounceWallEvents:0,bounceTrailEvents:0,itemUseEvents:0,stuckPerMinute:0,learningUpdates:0,learningRewardSum:0,learningTdAbsSum:0}}function Ng(){return{rounds:0,totalDuration:0,totalBotLives:0,totalBotSurvival:0,totalSelfCollisions:0,totalStuckEvents:0,totalBounceWallEvents:0,totalBounceTrailEvents:0,totalItemUseEvents:0,botWins:0,totalLearningUpdates:0,totalLearningReward:0,totalLearningTdAbs:0}}class Og{constructor(){this.events=new Array(pi);for(let t=0;t<pi;t++)this.events[t]={time:0,type:"",player:-1,data:""};this.eventIndex=0,this.eventCount=0,this.snapshots=new Array(mi);for(let t=0;t<mi;t++)this.snapshots[t]={time:0,players:[]};this.snapshotIndex=0,this.snapshotCount=0,this.roundSummaries=new Array(Ds);for(let t=0;t<Ds;t++)this.roundSummaries[t]=Dg();this.roundSummaryIndex=0,this.roundSummaryCount=0,this._roundIdCounter=0,this.playerSpawnTime=new Float32Array(En),this.playerDeathTime=new Float32Array(En),this.playerIsBot=new Uint8Array(En),this.playerSeen=new Uint8Array(En),this._frameCounter=0,this._snapshotInterval=10,this.roundStartTime=0,this._enabled=!0,this._aggregate=Ng(),this._baselines=new Map,this._lastRoundSummary=null,this._resetRoundState()}_resetRoundState(){this._roundSelfCollisions=0,this._roundStuckEvents=0,this._roundBounceWallEvents=0,this._roundBounceTrailEvents=0,this._roundItemUseEvents=0,this._roundLearningUpdates=0,this._roundLearningRewardSum=0,this._roundLearningTdAbsSum=0;for(let t=0;t<En;t++)this.playerSpawnTime[t]=-1,this.playerDeathTime[t]=-1,this.playerIsBot[t]=0,this.playerSeen[t]=0}_elapsedSeconds(){return this.roundStartTime>0?(performance.now()-this.roundStartTime)/1e3:0}_trackPlayer(t,e=!1){if(!t||t.index<0||t.index>=En)return;const n=t.index;this.playerSeen[n]=1,this.playerIsBot[n]=t.isBot?1:0,this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=this._elapsedSeconds()),e&&(this.playerDeathTime[n]=-1)}startRound(t=[]){if(this.eventIndex=0,this.eventCount=0,this.snapshotIndex=0,this.snapshotCount=0,this._frameCounter=0,this.roundStartTime=performance.now(),this._resetRoundState(),this._lastRoundSummary=null,Array.isArray(t))for(let e=0;e<t.length;e++)this._trackPlayer(t[e],!0)}logEvent(t,e,n=""){if(!this._enabled)return;const i=this.events[this.eventIndex];i.time=this._elapsedSeconds(),i.type=t,i.player=e,i.data=n,this.eventIndex=(this.eventIndex+1)%pi,this.eventCount<pi&&this.eventCount++,t==="STUCK"&&this._roundStuckEvents++,t==="BOUNCE_WALL"&&this._roundBounceWallEvents++,t==="BOUNCE_TRAIL"&&this._roundBounceTrailEvents++,t==="ITEM_USE"&&this._roundItemUseEvents++}markPlayerSpawn(t){this._enabled&&this._trackPlayer(t,!0)}markPlayerDeath(t,e=""){if(!this._enabled||!t||t.index<0||t.index>=En)return;const n=t.index;this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=0),this.playerDeathTime[n]<0&&(this.playerDeathTime[n]=this._elapsedSeconds()),e==="TRAIL_SELF"&&this._roundSelfCollisions++}recordLearningStep(t=0,e=0,n=0,i=""){if(!this._enabled)return;const r=Number.isFinite(t)?t:0,o=Number.isFinite(e)?e:0,a=Number.isFinite(n)?n:0;this._roundLearningUpdates++,this._roundLearningRewardSum+=r,this._roundLearningTdAbsSum+=Math.abs(o),this._roundLearningUpdates%8===0&&this.logEvent("LEARN_STEP",-1,`a=${i||"NO_OP"} r=${r.toFixed(3)} td=${o.toFixed(3)} e=${a.toFixed(3)}`)}finalizeRound(t,e=[]){if(!this._enabled)return null;const n=Math.max(0,this._elapsedSeconds());let i=0,r=0,o=0;if(Array.isArray(e))for(let l=0;l<e.length;l++){const c=e[l];if(!c||c.index<0||c.index>=En)continue;this._trackPlayer(c,!1);const h=c.index;this.playerDeathTime[h]<0&&(this.playerDeathTime[h]=n);const u=this.playerSpawnTime[h]>=0?this.playerSpawnTime[h]:0,d=Math.max(0,this.playerDeathTime[h]-u);c.isBot?(i++,o+=d):r++}const a=this.roundSummaries[this.roundSummaryIndex];return this._roundIdCounter++,a.roundId=this._roundIdCounter,a.duration=n,a.winnerIndex=t?t.index:-1,a.winnerIsBot=!!(t!=null&&t.isBot),a.botCount=i,a.humanCount=r,a.botSurvivalAverage=i>0?o/i:0,a.selfCollisions=this._roundSelfCollisions,a.stuckEvents=this._roundStuckEvents,a.bounceWallEvents=this._roundBounceWallEvents,a.bounceTrailEvents=this._roundBounceTrailEvents,a.itemUseEvents=this._roundItemUseEvents,a.stuckPerMinute=n>0?this._roundStuckEvents/(n/60):0,a.learningUpdates=this._roundLearningUpdates,a.learningRewardSum=this._roundLearningRewardSum,a.learningTdAbsSum=this._roundLearningTdAbsSum,this.roundSummaryIndex=(this.roundSummaryIndex+1)%Ds,this.roundSummaryCount<Ds&&this.roundSummaryCount++,this._aggregate.rounds+=1,this._aggregate.totalDuration+=n,this._aggregate.totalBotLives+=i,this._aggregate.totalBotSurvival+=o,this._aggregate.totalSelfCollisions+=this._roundSelfCollisions,this._aggregate.totalStuckEvents+=this._roundStuckEvents,this._aggregate.totalBounceWallEvents+=this._roundBounceWallEvents,this._aggregate.totalBounceTrailEvents+=this._roundBounceTrailEvents,this._aggregate.totalItemUseEvents+=this._roundItemUseEvents,this._aggregate.totalLearningUpdates+=this._roundLearningUpdates,this._aggregate.totalLearningReward+=this._roundLearningRewardSum,this._aggregate.totalLearningTdAbs+=this._roundLearningTdAbsSum,t!=null&&t.isBot&&(this._aggregate.botWins+=1),this._lastRoundSummary={roundId:a.roundId,duration:a.duration,winnerIndex:a.winnerIndex,winnerIsBot:a.winnerIsBot,botCount:a.botCount,humanCount:a.humanCount,botSurvivalAverage:a.botSurvivalAverage,selfCollisions:a.selfCollisions,stuckEvents:a.stuckEvents,bounceWallEvents:a.bounceWallEvents,bounceTrailEvents:a.bounceTrailEvents,itemUseEvents:a.itemUseEvents,stuckPerMinute:a.stuckPerMinute,learningUpdates:a.learningUpdates,learningRewardSum:a.learningRewardSum,learningTdAbsSum:a.learningTdAbsSum},this.logEvent("ROUND_END",a.winnerIndex,`duration=${a.duration.toFixed(2)}`),this._lastRoundSummary}getLastRoundMetrics(){return this._lastRoundSummary?{...this._lastRoundSummary}:null}getAggregateMetrics(){const t=this._aggregate.rounds,e=this._aggregate.totalDuration;return{rounds:t,botWinRate:t>0?this._aggregate.botWins/t:0,averageBotSurvival:this._aggregate.totalBotLives>0?this._aggregate.totalBotSurvival/this._aggregate.totalBotLives:0,selfCollisionsPerRound:t>0?this._aggregate.totalSelfCollisions/t:0,stuckEventsPerMinute:e>0?this._aggregate.totalStuckEvents/(e/60):0,bounceWallPerRound:t>0?this._aggregate.totalBounceWallEvents/t:0,bounceTrailPerRound:t>0?this._aggregate.totalBounceTrailEvents/t:0,itemUsePerRound:t>0?this._aggregate.totalItemUseEvents/t:0,learningUpdatesPerRound:t>0?this._aggregate.totalLearningUpdates/t:0,learningRewardPerRound:t>0?this._aggregate.totalLearningReward/t:0,learningTdAbsMean:this._aggregate.totalLearningUpdates>0?this._aggregate.totalLearningTdAbs/this._aggregate.totalLearningUpdates:0}}captureBaseline(t="BASELINE"){const e=this.getAggregateMetrics();return this._baselines.set(t,e),{label:t,...e}}compareWithBaseline(t="BASELINE"){if(!this._baselines.has(t))return null;const e=this._baselines.get(t),n=this.getAggregateMetrics(),i=e||{};return{label:t,baseline:e,current:n,delta:{botWinRate:n.botWinRate-(i.botWinRate||0),averageBotSurvival:n.averageBotSurvival-(i.averageBotSurvival||0),selfCollisionsPerRound:n.selfCollisionsPerRound-(i.selfCollisionsPerRound||0),stuckEventsPerMinute:n.stuckEventsPerMinute-(i.stuckEventsPerMinute||0),bounceWallPerRound:n.bounceWallPerRound-(i.bounceWallPerRound||0),bounceTrailPerRound:n.bounceTrailPerRound-(i.bounceTrailPerRound||0),itemUsePerRound:n.itemUsePerRound-(i.itemUsePerRound||0),learningUpdatesPerRound:n.learningUpdatesPerRound-(i.learningUpdatesPerRound||0),learningRewardPerRound:n.learningRewardPerRound-(i.learningRewardPerRound||0),learningTdAbsMean:n.learningTdAbsMean-(i.learningTdAbsMean||0)}}}getValidationMatrix(){return[{id:"V1",mode:"1p",bots:1,mapKey:"standard",planarMode:!1,portalCount:0,rounds:10},{id:"V2",mode:"1p",bots:3,mapKey:"maze",planarMode:!1,portalCount:0,rounds:10},{id:"V3",mode:"1p",bots:3,mapKey:"complex",planarMode:!0,portalCount:4,rounds:10},{id:"V4",mode:"2p",bots:2,mapKey:"standard",planarMode:!0,portalCount:6,rounds:10}]}recordFrame(t){if(!this._enabled||(this._frameCounter++,this._frameCounter%this._snapshotInterval!==0))return;const e=this.snapshots[this.snapshotIndex];for(e.time=this._elapsedSeconds();e.players.length<t.length;)e.players.push({idx:0,alive:!1,x:0,y:0,z:0,bot:!1});for(let n=0;n<t.length;n++){const i=t[n],r=e.players[n];r.idx=i.index,r.alive=i.alive,r.x=+i.position.x.toFixed(1),r.y=+i.position.y.toFixed(1),r.z=+i.position.z.toFixed(1),r.bot=i.isBot}this.snapshotIndex=(this.snapshotIndex+1)%mi,this.snapshotCount<mi&&this.snapshotCount++}dump(){const t=[],e=this.eventCount>=pi?this.eventIndex:0;for(let h=0;h<this.eventCount;h++){const u=(e+h)%pi,d=this.events[u];t.push(`[${d.time.toFixed(2)}s] ${d.type} P${d.player} ${d.data}`)}const n=this.getLastRoundMetrics(),i=this.getAggregateMetrics(),r=this.compareWithBaseline("BASELINE");console.group("%cROUND LOG","color: #0af; font-size: 14px; font-weight: bold;"),console.log(`Duration: ${this._elapsedSeconds().toFixed(1)}s`),console.log(`Events: ${this.eventCount}`),console.table(t.map(h=>({log:h}))),n&&console.log("Round KPI:",n),console.log("Aggregate KPI:",i),r&&console.log("Baseline delta (BASELINE):",r.delta);const o=[],a=this.snapshotCount>=mi?this.snapshotIndex:0,l=Math.min(this.snapshotCount,20),c=Math.max(0,this.snapshotCount-l);for(let h=0;h<l;h++){const u=(a+c+h)%mi,d=this.snapshots[u],m=d.players.filter(g=>g.idx!==void 0).map(g=>`${g.bot?"Bot":"P"}${g.idx}:${g.alive?"alive":"dead"}(${g.x},${g.y},${g.z})`).join(" | ");o.push({time:d.time.toFixed(2)+"s",players:m})}return o.length>0&&(console.log("Recent positions:"),console.table(o)),console.groupEnd(),{events:t,snapshots:o,lastRound:n,aggregate:i,baselineDelta:r?r.delta:null}}}const al="mini-curve-fever-3d.settings.v4",Ug=["mini-curve-fever-3d.settings.v3"],ll="mini-curve-fever-3d.settings-profiles.v1",Ur="0.9.0",Br="2026-02-18T04:12:42.293Z",Fr="MLRINNAU";function kt(s,t,e){return Math.min(Math.max(s,t),e)}function zr(s){return JSON.parse(JSON.stringify(s))}const cl=[{label:"Pitch Hoch",key:"UP"},{label:"Pitch Runter",key:"DOWN"},{label:"Links (Gier)",key:"LEFT"},{label:"Rechts (Gier)",key:"RIGHT"},{label:"Rollen Links",key:"ROLL_LEFT"},{label:"Rollen Rechts",key:"ROLL_RIGHT"},{label:"Boost",key:"BOOST"},{label:"Schiessen",key:"SHOOT"},{label:"Item Abwerfen",key:"DROP"},{label:"Item Wechseln",key:"NEXT_ITEM"},{label:"Kamera",key:"CAMERA"}];class Bg{constructor(){var r,o,a;this.settings=this._loadSettings(),this.settingsProfiles=this._loadProfiles(),this.activeProfileName="",this.settingsDirty=!1,this.state="MENU",this.roundPause=0,this._hudTimer=0,this._adaptiveTimer=0,this._statsTimer=0,this.keyCapture=null,this.isLowQuality=!1,this._tmpAimVec=new R,this._tmpAimDir=new R,this._tmpRollEuler=new Ln(0,0,0,"YXZ");const t=document.getElementById("game-canvas");this.renderer=new pg(t),this.input=new _g,this.audio=new Ig,this.hudP1=new ol("p1-fighter-hud",0),this.hudP2=new ol("p2-fighter-hud",1),this.recorder=new Og;const e=(r=D.BOT.LEARNING)==null?void 0:r.STORAGE_KEY,n=(o=D.BOT.LEARNING)==null?void 0:o.STORAGE_KEY_3D,i=(a=D.BOT.LEARNING)==null?void 0:a.STORAGE_KEY_PLANAR;if(typeof localStorage<"u")try{if(n!==e){const l=localStorage.getItem(e),c=!!localStorage.getItem(n);l&&!c&&localStorage.setItem(n,l)}}catch{}this.botLearning3D=new Ys({storageKey:n}),this.botLearningPlanar=new Ys({storageKey:i}),this.botLearning=this.botLearning3D,this._applySettingsToRuntime(),this.input.setBindings(this.settings.controls),this.arena=null,this.entityManager=null,this.powerupManager=null,this.particles=new Lg(this.renderer),this.gameLoop=new mg(l=>this.update(l),()=>this.render()),this.ui={mainMenu:document.getElementById("main-menu"),hud:document.getElementById("hud"),p1Hud:document.getElementById("p1-hud"),p2Hud:document.getElementById("p2-hud"),p1Score:document.querySelector("#p1-hud .player-score"),p2Score:document.querySelector("#p2-hud .player-score"),p1Items:document.getElementById("p1-items"),p2Items:document.getElementById("p2-items"),messageOverlay:document.getElementById("message-overlay"),messageText:document.getElementById("message-text"),messageSub:document.getElementById("message-sub"),statusToast:document.getElementById("status-toast"),keybindWarning:document.getElementById("keybind-warning"),menuContext:document.getElementById("menu-context"),buildInfo:document.getElementById("build-info"),buildInfoDetail:document.getElementById("build-info-detail"),copyBuildButton:document.getElementById("btn-copy-build"),modeButtons:Array.from(document.querySelectorAll(".mode-btn")),mapSelect:document.getElementById("map-select"),botSlider:document.getElementById("bot-count"),botLabel:document.getElementById("bot-count-label"),botDifficultySelect:document.getElementById("bot-difficulty"),winSlider:document.getElementById("win-count"),winLabel:document.getElementById("win-count-label"),autoRollToggle:document.getElementById("auto-roll-toggle"),invertP1:document.getElementById("invert-p1"),invertP2:document.getElementById("invert-p2"),cockpitCamP1:document.getElementById("cockpit-cam-p1"),cockpitCamP2:document.getElementById("cockpit-cam-p2"),portalsToggle:document.getElementById("portals-toggle"),speedSlider:document.getElementById("speed-slider"),speedLabel:document.getElementById("speed-label"),turnSlider:document.getElementById("turn-slider"),turnLabel:document.getElementById("turn-label"),planeSizeSlider:document.getElementById("plane-size-slider"),planeSizeLabel:document.getElementById("plane-size-label"),trailWidthSlider:document.getElementById("trail-width-slider"),trailWidthLabel:document.getElementById("trail-width-label"),gapSizeSlider:document.getElementById("gap-size-slider"),gapSizeLabel:document.getElementById("gap-size-label"),gapFrequencySlider:document.getElementById("gap-frequency-slider"),gapFrequencyLabel:document.getElementById("gap-frequency-label"),itemAmountSlider:document.getElementById("item-amount-slider"),itemAmountLabel:document.getElementById("item-amount-label"),fireRateSlider:document.getElementById("fire-rate-slider"),fireRateLabel:document.getElementById("fire-rate-label"),lockOnSlider:document.getElementById("lockon-slider"),lockOnLabel:document.getElementById("lockon-label"),crosshairP1:document.getElementById("crosshair-p1"),crosshairP2:document.getElementById("crosshair-p2"),keybindP1:document.getElementById("keybind-p1"),keybindP2:document.getElementById("keybind-p2"),resetKeysButton:document.getElementById("btn-reset-keys"),saveKeysButton:document.getElementById("btn-save-keys"),profileNameInput:document.getElementById("profile-name"),profileSelect:document.getElementById("profile-select"),profileSaveButton:document.getElementById("btn-profile-save"),profileLoadButton:document.getElementById("btn-profile-load"),profileDeleteButton:document.getElementById("btn-profile-delete"),startButton:document.getElementById("btn-start"),trainingEnabledToggle:document.getElementById("training-enabled-toggle"),trainingBotOnlyToggle:document.getElementById("training-bot-only-toggle"),trainingMortalBotsToggle:document.getElementById("training-mortal-bots-toggle"),trainingAutoRestartToggle:document.getElementById("training-auto-restart-toggle"),trainingSpectatorSplitToggle:document.getElementById("training-spectator-split-toggle"),trainingDualWorldsToggle:document.getElementById("training-dual-worlds-toggle"),trainingTimeScaleSlider:document.getElementById("training-time-scale-slider"),trainingTimeScaleLabel:document.getElementById("training-time-scale-label"),trainingAutoSaveSlider:document.getElementById("training-autosave-rounds-slider"),trainingAutoSaveLabel:document.getElementById("training-autosave-rounds-label"),trainingStartButton:document.getElementById("btn-training-start"),trainingSaveButton:document.getElementById("btn-training-save"),trainingResetButton:document.getElementById("btn-training-reset"),trainingStatus:document.getElementById("training-status")},this._navButtons=[],this._menuButtonByPanel=new Map,this._lastMenuTrigger=null,this._buildInfoClipboardText="",this._setupMenuListeners(),this._setupMenuNavigation(),this._syncMenuControls(),this._markSettingsDirty(!1),this._renderBuildInfo(),this.gameLoop.start(),window.addEventListener("keydown",l=>this._handleKeyCapture(l),!0),this._fpsTracker={samples:[],avg:60,update(l){l>0&&this.samples.push(1/l),this.samples.length>60&&this.samples.shift(),this.avg=this.samples.length>0?this.samples.reduce((c,h)=>c+h,0)/this.samples.length:60}},window.addEventListener("keydown",l=>{if(l.code==="KeyP"&&!this.keyCapture){this.isLowQuality=!this.isLowQuality;const c=this.isLowQuality?"LOW":"HIGH";this.renderer.setQuality(c),this._showStatusToast(`Grafik: ${c==="LOW"?"Niedrig (Schnell)":"Hoch (Schön)"}`)}l.code==="KeyF"&&!this.keyCapture&&(this.stats?(this.stats.remove(),this.stats=null):(this.stats=document.createElement("div"),this.stats.style.cssText="position:fixed;top:10px;left:10px;color:#0f0;font:13px/1.5 monospace;z-index:1000;pointer-events:none;background:rgba(0,0,0,0.6);padding:8px 12px;border-radius:6px;min-width:200px;white-space:pre-wrap;",document.body.appendChild(this.stats),this._statsTimer=0))}),window.addEventListener("beforeunload",()=>{this._saveLearningData(!1,!0)})}_formatBuildTime(){const t=new Date(Br),e=Number.isNaN(t.getTime())?Br:t.toISOString(),n=Number.isNaN(t.getTime())?Br:t.toLocaleString("de-DE",{hour12:!1});return{short:e.slice(0,16).replace("T"," "),iso:e,local:n}}_renderBuildInfo(){const t=this._formatBuildTime(),e=`v${Ur} · Build ${Fr} · ${t.short}`,n=[`Version: v${Ur}`,`Build-ID: ${Fr}`,`Zeit (UTC): ${t.iso}`,`Zeit (lokal): ${t.local}`].join(`
`);this.ui.buildInfo&&(this.ui.buildInfo.textContent=e),this.ui.buildInfoDetail&&(this.ui.buildInfoDetail.textContent=n),this._buildInfoClipboardText=n}_copyBuildInfoToClipboard(){const t=this._buildInfoClipboardText||`v${Ur} · Build ${Fr}`,e=()=>{const n=document.createElement("textarea");n.value=t,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.top="-9999px",document.body.appendChild(n),n.select();const i=document.execCommand("copy");document.body.removeChild(n),this._showStatusToast(i?"Build-Info kopiert":"Kopieren nicht moeglich",1400,i?"success":"error")};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(()=>this._showStatusToast("Build-Info kopiert",1400,"success")).catch(()=>e());return}e()}_getMenuSectionLabel(t){if(!t)return"Hauptmenue";const e=this._menuButtonByPanel.get(t);if(e)return(e.textContent||"").replace(/\s+/g," ").trim();const n=document.querySelector(`#${t} .submenu-title`);return((n==null?void 0:n.textContent)||"Untermenue").replace(/\s+/g," ").trim()}_updateMenuContext(){var i;if(!this.ui.menuContext)return;const t=this._getMenuSectionLabel(this._activeSubmenu),e=this.activeProfileName||this._normalizeProfileName(((i=this.ui.profileNameInput)==null?void 0:i.value)||"")||"kein Profil",n=this.settingsDirty?"ungespeicherte Aenderungen":"alles gespeichert";this.ui.menuContext.textContent=`${t} · Profil: ${e} · ${n}`}_createDefaultSettings(){return{mode:"1p",mapKey:"standard",numBots:1,botDifficulty:"NORMAL",winsNeeded:5,autoRoll:!0,invertPitch:{PLAYER_1:!1,PLAYER_2:!1},cockpitCamera:{PLAYER_1:!1,PLAYER_2:!1},portalsEnabled:!0,gameplay:{speed:18,turnSensitivity:2.2,planeScale:1,trailWidth:.6,gapSize:.3,gapFrequency:.02,itemAmount:8,fireRate:.45,lockOnAngle:15,planarMode:!1,portalCount:0,planarLevelCount:5,portalBeams:!1},training:{enabled:!1,botVsBotOnly:!1,mortalBots:!1,autoRestart:!0,spectatorSplit:!1,dualWorlds:!1,timeScale:1,autoSaveRounds:5},controls:this._cloneDefaultControls()}}_cloneDefaultControls(){const t=zr(D.KEYS);return{PLAYER_1:{...t.PLAYER_1},PLAYER_2:{...t.PLAYER_2}}}_normalizePlayerControls(t,e){const n=t||{};return{UP:n.UP||e.UP,DOWN:n.DOWN||e.DOWN,LEFT:n.LEFT||e.LEFT,RIGHT:n.RIGHT||e.RIGHT,ROLL_LEFT:n.ROLL_LEFT||e.ROLL_LEFT,ROLL_RIGHT:n.ROLL_RIGHT||e.ROLL_RIGHT,BOOST:n.BOOST||e.BOOST,SHOOT:n.SHOOT||e.SHOOT,NEXT_ITEM:n.NEXT_ITEM||e.NEXT_ITEM,DROP:n.DROP||e.DROP,CAMERA:n.CAMERA||e.CAMERA}}_sanitizeSettings(t){var a,l,c,h,u,d,m,g,_,f,p,M,v,S,P,w,b,F,y,A,B,H,J,L,U,V;const e=this._createDefaultSettings(),n=t&&typeof t=="object"?t:{},i=zr(e);i.mode=n.mode==="2p"?"2p":"1p",i.mapKey=D.MAPS[n.mapKey]?n.mapKey:e.mapKey,i.numBots=kt(parseInt(n.numBots??e.numBots,10),0,8),i.botDifficulty=["EASY","NORMAL","HARD"].includes(n.botDifficulty)?n.botDifficulty:e.botDifficulty,i.winsNeeded=kt(parseInt(n.winsNeeded??e.winsNeeded,10),1,15),i.autoRoll=typeof n.autoRoll=="boolean"?n.autoRoll:e.autoRoll,i.invertPitch.PLAYER_1=!!((a=n==null?void 0:n.invertPitch)!=null&&a.PLAYER_1),i.invertPitch.PLAYER_2=!!((l=n==null?void 0:n.invertPitch)!=null&&l.PLAYER_2),i.cockpitCamera.PLAYER_1=!!((c=n==null?void 0:n.cockpitCamera)!=null&&c.PLAYER_1),i.cockpitCamera.PLAYER_2=!!((h=n==null?void 0:n.cockpitCamera)!=null&&h.PLAYER_2),i.portalsEnabled=(n==null?void 0:n.portalsEnabled)!==void 0?!!n.portalsEnabled:e.portalsEnabled,i.gameplay.speed=kt(parseFloat(((u=n==null?void 0:n.gameplay)==null?void 0:u.speed)??e.gameplay.speed),8,40),i.gameplay.turnSensitivity=kt(parseFloat(((d=n==null?void 0:n.gameplay)==null?void 0:d.turnSensitivity)??e.gameplay.turnSensitivity),.8,5),i.gameplay.planeScale=kt(parseFloat(((m=n==null?void 0:n.gameplay)==null?void 0:m.planeScale)??e.gameplay.planeScale),.6,2),i.gameplay.trailWidth=kt(parseFloat(((g=n==null?void 0:n.gameplay)==null?void 0:g.trailWidth)??e.gameplay.trailWidth),.2,2.5),i.gameplay.gapSize=kt(parseFloat(((_=n==null?void 0:n.gameplay)==null?void 0:_.gapSize)??e.gameplay.gapSize),.05,1.5),i.gameplay.gapFrequency=kt(parseFloat(((f=n==null?void 0:n.gameplay)==null?void 0:f.gapFrequency)??e.gameplay.gapFrequency),0,.25),i.gameplay.itemAmount=kt(parseInt(((p=n==null?void 0:n.gameplay)==null?void 0:p.itemAmount)??e.gameplay.itemAmount,10),1,20),i.gameplay.fireRate=kt(parseFloat(((M=n==null?void 0:n.gameplay)==null?void 0:M.fireRate)??e.gameplay.fireRate),.1,2),i.gameplay.lockOnAngle=kt(parseInt(((v=n==null?void 0:n.gameplay)==null?void 0:v.lockOnAngle)??e.gameplay.lockOnAngle,10),5,45),i.gameplay.planarMode=!!(((S=n==null?void 0:n.gameplay)==null?void 0:S.planarMode)??e.gameplay.planarMode),i.gameplay.portalCount=kt(parseInt(((P=n==null?void 0:n.gameplay)==null?void 0:P.portalCount)??e.gameplay.portalCount,10),0,20),i.gameplay.planarLevelCount=kt(parseInt(((w=n==null?void 0:n.gameplay)==null?void 0:w.planarLevelCount)??e.gameplay.planarLevelCount,10),2,10),i.gameplay.portalBeams=!1,i.training.enabled=!!(((b=n==null?void 0:n.training)==null?void 0:b.enabled)??e.training.enabled),i.training.botVsBotOnly=!!(((F=n==null?void 0:n.training)==null?void 0:F.botVsBotOnly)??e.training.botVsBotOnly),i.training.mortalBots=!!(((y=n==null?void 0:n.training)==null?void 0:y.mortalBots)??e.training.mortalBots),i.training.autoRestart=((A=n==null?void 0:n.training)==null?void 0:A.autoRestart)!==void 0?!!n.training.autoRestart:e.training.autoRestart,i.training.spectatorSplit=!!(((B=n==null?void 0:n.training)==null?void 0:B.spectatorSplit)??e.training.spectatorSplit),i.training.dualWorlds=!!(((H=n==null?void 0:n.training)==null?void 0:H.dualWorlds)??e.training.dualWorlds);const r=parseFloat(((J=n==null?void 0:n.training)==null?void 0:J.timeScale)??e.training.timeScale);i.training.timeScale=kt(Number.isFinite(r)?r:e.training.timeScale,.5,8);const o=parseInt(((L=n==null?void 0:n.training)==null?void 0:L.autoSaveRounds)??e.training.autoSaveRounds,10);return i.training.autoSaveRounds=kt(Number.isFinite(o)?o:e.training.autoSaveRounds,1,50),i.controls.PLAYER_1=this._normalizePlayerControls((U=n==null?void 0:n.controls)==null?void 0:U.PLAYER_1,e.controls.PLAYER_1),i.controls.PLAYER_2=this._normalizePlayerControls((V=n==null?void 0:n.controls)==null?void 0:V.PLAYER_2,e.controls.PLAYER_2),i}_loadSettings(){try{const t=[al,...Ug];for(const e of t){const n=localStorage.getItem(e);if(!n)continue;const i=JSON.parse(n);return this._sanitizeSettings(i)}}catch{}return this._createDefaultSettings()}_saveSettings(){try{localStorage.setItem(al,JSON.stringify(this.settings)),this._markSettingsDirty(!1)}catch{}}_loadProfiles(){try{const t=localStorage.getItem(ll);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return[];const n=[],i=new Set;for(const r of e){const o=this._normalizeProfileName((r==null?void 0:r.name)||""),a=this._getProfileNameKey(o);!o||i.has(a)||(i.add(a),n.push({name:o,updatedAt:Number((r==null?void 0:r.updatedAt)||Date.now()),settings:this._sanitizeSettings((r==null?void 0:r.settings)||{})}))}return n.sort((r,o)=>o.updatedAt-r.updatedAt),n}catch{return[]}}_saveProfiles(){try{return localStorage.setItem(ll,JSON.stringify(this.settingsProfiles)),!0}catch{return!1}}_normalizeProfileName(t){return String(t||"").trim().replace(/\s+/g," ").slice(0,32)}_getProfileNameKey(t){return this._normalizeProfileName(t).toLocaleLowerCase()}_findProfileIndexByName(t){const e=this._getProfileNameKey(t);return e?this.settingsProfiles.findIndex(n=>this._getProfileNameKey(n.name)===e):-1}_findProfileByName(t){const e=this._findProfileIndexByName(t);return e>=0?this.settingsProfiles[e]:null}_applySettingsToRuntime(){var o,a,l,c;const t=!!((o=this.settings.training)!=null&&o.enabled&&((a=this.settings.training)!=null&&a.botVsBotOnly)),e=!!(t&&((l=this.settings.training)!=null&&l.dualWorlds));this.numHumans=t?0:this.settings.mode==="2p"?2:1;const n=e?4:t?2:0,i=e?4:8,r=parseInt(this.settings.numBots,10);this.numBots=kt(Number.isFinite(r)?r:n,n,i),this.settings.numBots=this.numBots,this.mapKey=this.settings.mapKey,this.winsNeeded=this.settings.winsNeeded,D.PLAYER.SPEED=this.settings.gameplay.speed,D.PLAYER.TURN_SPEED=this.settings.gameplay.turnSensitivity,D.PLAYER.MODEL_SCALE=this.settings.gameplay.planeScale,D.PLAYER.HITBOX_RADIUS=.8*this.settings.gameplay.planeScale,D.PLAYER.AUTO_ROLL=this.settings.autoRoll,this.settings.gameplay&&(D.GAMEPLAY.PLANAR_MODE=!!this.settings.gameplay.planarMode,D.GAMEPLAY.PORTAL_COUNT=this.settings.gameplay.portalCount||0,D.GAMEPLAY.PLANAR_LEVEL_COUNT=kt(parseInt(this.settings.gameplay.planarLevelCount??5,10),2,10)),D.TRAIL.WIDTH=this.settings.gameplay.trailWidth,D.TRAIL.GAP_DURATION=this.settings.gameplay.gapSize,D.TRAIL.GAP_CHANCE=this.settings.gameplay.gapFrequency,D.POWERUP.MAX_ON_FIELD=Math.round(this.settings.gameplay.itemAmount),D.PROJECTILE.COOLDOWN=this.settings.gameplay.fireRate,this.settings.gameplay&&(D.GAMEPLAY.PORTAL_BEAMS=!1),D.BOT.ACTIVE_DIFFICULTY=this.settings.botDifficulty||D.BOT.DEFAULT_DIFFICULTY,this._setLearningEnginesEnabled(!!((c=this.settings.training)!=null&&c.enabled)),this.arena&&this.arena.toggleBeams&&this.arena.toggleBeams(D.GAMEPLAY.PORTAL_BEAMS),this.entityManager&&this.entityManager.setBotDifficulty&&this.entityManager.setBotDifficulty(D.BOT.ACTIVE_DIFFICULTY),this.entityManager&&this.entityManager.setTrainingOptions&&this.entityManager.setTrainingOptions(this.settings.training),this.input.setBindings(this.settings.controls),D.HOMING.LOCK_ON_ANGLE=this.settings.gameplay.lockOnAngle,this.gameLoop&&this.gameLoop.setTimeScale(this._getTrainingBaseTimeScale())}_setupMenuListeners(){this.ui.modeButtons.forEach(o=>{o.addEventListener("click",()=>{this.settings.mode=o.dataset.mode==="2p"?"2p":"1p",this._onSettingsChanged()})}),this.ui.mapSelect.addEventListener("change",o=>{this.settings.mapKey=D.MAPS[o.target.value]?o.target.value:"standard",this._onSettingsChanged()}),this.ui.botSlider.addEventListener("input",()=>{this.settings.numBots=kt(parseInt(this.ui.botSlider.value,10),0,8),this._onSettingsChanged()}),this.ui.botDifficultySelect&&this.ui.botDifficultySelect.addEventListener("change",()=>{const o=String(this.ui.botDifficultySelect.value||"").toUpperCase();this.settings.botDifficulty=["EASY","NORMAL","HARD"].includes(o)?o:"NORMAL",this._onSettingsChanged()}),this.ui.winSlider.addEventListener("input",()=>{this.settings.winsNeeded=kt(parseInt(this.ui.winSlider.value,10),1,15),this._onSettingsChanged()}),this.ui.autoRollToggle.addEventListener("change",()=>{this.settings.autoRoll=!!this.ui.autoRollToggle.checked,this._onSettingsChanged()}),this.ui.invertP1.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_1=!!this.ui.invertP1.checked,this._onSettingsChanged()}),this.ui.invertP2.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_2=!!this.ui.invertP2.checked,this._onSettingsChanged()}),this.ui.cockpitCamP1.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_1=!!this.ui.cockpitCamP1.checked,this._onSettingsChanged()}),this.ui.cockpitCamP2.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_2=!!this.ui.cockpitCamP2.checked,this._onSettingsChanged()});const t=document.getElementById("planar-mode-toggle");t&&t.addEventListener("change",o=>{this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarMode=o.target.checked,this.settings.gameplay.planarMode&&(this.settings.gameplay.portalCount||0)===0&&(this.settings.gameplay.portalCount=4,this._showStatusToast("Ebenen-Modus: 4 Portale aktiviert")),this._onSettingsChanged()}),this.ui.portalsToggle.addEventListener("change",()=>{this.settings.portalsEnabled=!!this.ui.portalsToggle.checked,this._onSettingsChanged()}),this.ui.speedSlider.addEventListener("input",()=>{this.settings.gameplay.speed=kt(parseFloat(this.ui.speedSlider.value),8,40),this._onSettingsChanged()}),this.ui.turnSlider.addEventListener("input",()=>{this.settings.gameplay.turnSensitivity=kt(parseFloat(this.ui.turnSlider.value),.8,5),this._onSettingsChanged()}),this.ui.planeSizeSlider.addEventListener("input",()=>{this.settings.gameplay.planeScale=kt(parseFloat(this.ui.planeSizeSlider.value),.6,2),this._onSettingsChanged()}),this.ui.trailWidthSlider.addEventListener("input",()=>{this.settings.gameplay.trailWidth=kt(parseFloat(this.ui.trailWidthSlider.value),.2,2.5),this._onSettingsChanged()}),this.ui.gapSizeSlider.addEventListener("input",()=>{this.settings.gameplay.gapSize=kt(parseFloat(this.ui.gapSizeSlider.value),.05,1.5),this._onSettingsChanged()}),this.ui.gapFrequencySlider.addEventListener("input",()=>{this.settings.gameplay.gapFrequency=kt(parseFloat(this.ui.gapFrequencySlider.value),0,.25),this._onSettingsChanged()}),this.ui.itemAmountSlider.addEventListener("input",()=>{this.settings.gameplay.itemAmount=kt(parseInt(this.ui.itemAmountSlider.value,10),1,20),this._onSettingsChanged()}),this.ui.fireRateSlider.addEventListener("input",()=>{this.settings.gameplay.fireRate=kt(parseFloat(this.ui.fireRateSlider.value),.1,2),this._onSettingsChanged()}),this.ui.lockOnSlider.addEventListener("input",()=>{this.settings.gameplay.lockOnAngle=kt(parseInt(this.ui.lockOnSlider.value,10),5,45),this._onSettingsChanged()}),this.ui.keybindP1.addEventListener("click",o=>{const a=o.target.closest("button.keybind-btn");a&&this._startKeyCapture("PLAYER_1",a.dataset.action)}),this.ui.keybindP2.addEventListener("click",o=>{const a=o.target.closest("button.keybind-btn");a&&this._startKeyCapture("PLAYER_2",a.dataset.action)}),this.ui.resetKeysButton.addEventListener("click",()=>{this.settings.controls=this._cloneDefaultControls(),this._onSettingsChanged(),this._showStatusToast("✅ Standard-Tasten wiederhergestellt")}),this.ui.saveKeysButton.addEventListener("click",()=>{this._saveSettings(),this._showStatusToast("Einstellungen gespeichert")}),this.ui.startButton.addEventListener("click",()=>{this.startMatch()}),this.ui.profileSaveButton&&this.ui.profileSaveButton.addEventListener("click",()=>{var o;this._saveProfile(((o=this.ui.profileNameInput)==null?void 0:o.value)||"")}),this.ui.profileLoadButton&&this.ui.profileLoadButton.addEventListener("click",()=>{var a;const o=this._normalizeProfileName(((a=this.ui.profileSelect)==null?void 0:a.value)||"");if(!o){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._loadProfile(o)}),this.ui.profileDeleteButton&&this.ui.profileDeleteButton.addEventListener("click",()=>{var a;const o=this._normalizeProfileName(((a=this.ui.profileSelect)==null?void 0:a.value)||"");if(!o){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._deleteProfile(o)}),this.ui.profileSelect&&this.ui.profileSelect.addEventListener("change",()=>{const o=this._normalizeProfileName(this.ui.profileSelect.value||""),a=this._findProfileByName(o);this.activeProfileName=a?a.name:"",this.ui.profileNameInput&&(this.ui.profileNameInput.value=this.activeProfileName),this._syncProfileActionState()}),this.ui.profileNameInput&&(this.ui.profileNameInput.addEventListener("input",()=>{this._syncProfileActionState()}),this.ui.profileNameInput.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),this._saveProfile(this.ui.profileNameInput.value||""))}));const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");e&&n&&e.addEventListener("input",o=>{const a=parseInt(o.target.value,10);n.textContent=a,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.portalCount=a,this._onSettingsChanged()});const i=document.getElementById("planar-level-count-slider"),r=document.getElementById("planar-level-count-label");i&&r&&i.addEventListener("input",o=>{const a=kt(parseInt(o.target.value,10),2,10);r.textContent=a,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarLevelCount=a,this._onSettingsChanged()}),this.ui.copyBuildButton&&this.ui.copyBuildButton.addEventListener("click",()=>{this._copyBuildInfoToClipboard()}),this.ui.trainingEnabledToggle&&this.ui.trainingEnabledToggle.addEventListener("change",()=>{this.settings.training.enabled=!!this.ui.trainingEnabledToggle.checked,this._onSettingsChanged()}),this.ui.trainingBotOnlyToggle&&this.ui.trainingBotOnlyToggle.addEventListener("change",()=>{if(this.settings.training.botVsBotOnly=!!this.ui.trainingBotOnlyToggle.checked,this.settings.training.botVsBotOnly){const o=this.settings.training.dualWorlds?4:2;this.settings.numBots=Math.max(o,this.settings.numBots||o),this.settings.training.mortalBots=!0}this._onSettingsChanged()}),this.ui.trainingMortalBotsToggle&&this.ui.trainingMortalBotsToggle.addEventListener("change",()=>{this.settings.training.mortalBots=!!this.ui.trainingMortalBotsToggle.checked,this._onSettingsChanged()}),this.ui.trainingAutoRestartToggle&&this.ui.trainingAutoRestartToggle.addEventListener("change",()=>{this.settings.training.autoRestart=!!this.ui.trainingAutoRestartToggle.checked,this._onSettingsChanged()}),this.ui.trainingSpectatorSplitToggle&&this.ui.trainingSpectatorSplitToggle.addEventListener("change",()=>{this.settings.training.spectatorSplit=!!this.ui.trainingSpectatorSplitToggle.checked,this._onSettingsChanged()}),this.ui.trainingDualWorldsToggle&&this.ui.trainingDualWorldsToggle.addEventListener("change",()=>{this.settings.training.dualWorlds=!!this.ui.trainingDualWorldsToggle.checked,this.settings.training.dualWorlds&&(this.settings.training.enabled=!0,this.settings.training.botVsBotOnly=!0,this.settings.training.mortalBots=!0,this.settings.training.spectatorSplit=!0,this.settings.numBots=4),this._onSettingsChanged()}),this.ui.trainingTimeScaleSlider&&this.ui.trainingTimeScaleSlider.addEventListener("input",()=>{this.settings.training.timeScale=kt(parseFloat(this.ui.trainingTimeScaleSlider.value),.5,8),this._onSettingsChanged()}),this.ui.trainingAutoSaveSlider&&this.ui.trainingAutoSaveSlider.addEventListener("input",()=>{this.settings.training.autoSaveRounds=kt(parseInt(this.ui.trainingAutoSaveSlider.value,10),1,50),this._onSettingsChanged()}),this.ui.trainingStartButton&&this.ui.trainingStartButton.addEventListener("click",()=>{this._startDeveloperTraining()}),this.ui.trainingSaveButton&&this.ui.trainingSaveButton.addEventListener("click",()=>{this._saveLearningData(!0)}),this.ui.trainingResetButton&&this.ui.trainingResetButton.addEventListener("click",()=>{this._resetLearningData()})}_setupMenuNavigation(){this._menuNav=document.getElementById("menu-nav"),this._submenuPanels=Array.from(document.querySelectorAll(".submenu-panel")),this._activeSubmenu=null,this._navButtons=Array.from(document.querySelectorAll(".nav-btn[data-submenu]")),this._menuButtonByPanel.clear();for(const e of this._submenuPanels)e.setAttribute("aria-hidden",e.classList.contains("hidden")?"true":"false");for(const e of this._navButtons){const n=e.dataset.submenu;n&&this._menuButtonByPanel.set(n,e),e.setAttribute("aria-expanded","false"),e.addEventListener("click",()=>{this._lastMenuTrigger=e,this._showSubmenu(n)})}this._menuNav&&this._menuNav.addEventListener("keydown",e=>{var o,a;if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const i=this._navButtons.indexOf(document.activeElement);if(i<0)return;if(e.preventDefault(),e.key==="Home"){(o=this._navButtons[0])==null||o.focus();return}if(e.key==="End"){(a=this._navButtons[this._navButtons.length-1])==null||a.focus();return}const r=e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1;this._focusNextNavButton(i,r)});const t=document.querySelectorAll(".back-btn[data-back]");for(const e of t)e.addEventListener("click",()=>{this._showMainNav()});window.addEventListener("keydown",e=>{e.code==="Escape"&&this.state==="MENU"&&this._activeSubmenu&&(e.preventDefault(),this._showMainNav())}),this._updateMenuNavState(),this._updateMenuContext()}_focusNextNavButton(t,e){var r;if(!this._navButtons.length)return;const n=this._navButtons.length,i=(t+e+n)%n;(r=this._navButtons[i])==null||r.focus()}_updateMenuNavState(){for(const t of this._navButtons){const e=t.dataset.submenu,n=!!this._activeSubmenu&&e===this._activeSubmenu;t.classList.toggle("active",n),t.setAttribute("aria-expanded",n?"true":"false")}}_focusFirstInSubmenu(t){if(!t)return;const e=t.querySelector('button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');e&&e.focus()}_showSubmenu(t){if(!t)return;this._menuNav&&(this._menuNav.classList.add("hidden"),this._menuNav.setAttribute("aria-hidden","true"));for(const n of this._submenuPanels)n.classList.add("hidden"),n.setAttribute("aria-hidden","true");const e=document.getElementById(t);e&&(e.classList.remove("hidden"),e.setAttribute("aria-hidden","false"),this._activeSubmenu=t,this._updateMenuNavState(),this._focusFirstInSubmenu(e),this._updateMenuContext())}_showMainNav(){for(const e of this._submenuPanels)e.classList.add("hidden"),e.setAttribute("aria-hidden","true");this._menuNav&&(this._menuNav.classList.remove("hidden"),this._menuNav.setAttribute("aria-hidden","false")),this._activeSubmenu=null,this._updateMenuNavState(),this._updateMenuContext();const t=this._lastMenuTrigger||this._navButtons[0];t&&this.state==="MENU"&&t.focus()}_onSettingsChanged(){this._applySettingsToRuntime(),this._markSettingsDirty(!0),this._syncMenuControls()}_syncMenuControls(){var o,a,l,c,h,u,d,m,g,_,f;this.ui.modeButtons.forEach(p=>{p.classList.toggle("active",p.dataset.mode===this.settings.mode)}),this.ui.mapSelect.value=this.settings.mapKey,this.ui.botSlider.value=String(this.settings.numBots),this.ui.botLabel.textContent=String(this.settings.numBots),this.ui.botDifficultySelect&&(this.ui.botDifficultySelect.value=this.settings.botDifficulty||"NORMAL"),this.ui.winSlider.value=String(this.settings.winsNeeded),this.ui.winLabel.textContent=String(this.settings.winsNeeded),this.ui.autoRollToggle.checked=this.settings.autoRoll,this.ui.invertP1.checked=this.settings.invertPitch.PLAYER_1,this.ui.invertP2.checked=this.settings.invertPitch.PLAYER_2,this.ui.cockpitCamP1.checked=this.settings.cockpitCamera.PLAYER_1,this.ui.cockpitCamP2.checked=this.settings.cockpitCamera.PLAYER_2;const t=document.getElementById("planar-mode-toggle");t&&(t.checked=((o=this.settings.gameplay)==null?void 0:o.planarMode)||!1),this.ui.portalsToggle.checked=this.settings.portalsEnabled;const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");if(e&&n){const p=((a=this.settings.gameplay)==null?void 0:a.portalCount)||0;e.value=p,n.textContent=p}const i=document.getElementById("planar-level-count-slider"),r=document.getElementById("planar-level-count-label");if(i&&r){const p=kt(parseInt(((l=this.settings.gameplay)==null?void 0:l.planarLevelCount)??5,10),2,10);i.value=p,r.textContent=p}if(this.ui.speedSlider.value=String(this.settings.gameplay.speed),this.ui.speedLabel.textContent=this.settings.gameplay.speed.toFixed(1),this.ui.turnSlider.value=String(this.settings.gameplay.turnSensitivity),this.ui.turnLabel.textContent=this.settings.gameplay.turnSensitivity.toFixed(1),this.ui.planeSizeSlider.value=String(this.settings.gameplay.planeScale),this.ui.planeSizeLabel.textContent=this.settings.gameplay.planeScale.toFixed(1),this.ui.trailWidthSlider.value=String(this.settings.gameplay.trailWidth),this.ui.trailWidthLabel.textContent=this.settings.gameplay.trailWidth.toFixed(2),this.ui.gapSizeSlider.value=String(this.settings.gameplay.gapSize),this.ui.gapSizeLabel.textContent=this.settings.gameplay.gapSize.toFixed(2),this.ui.gapFrequencySlider.value=String(this.settings.gameplay.gapFrequency),this.ui.gapFrequencyLabel.textContent=this.settings.gameplay.gapFrequency.toFixed(3),this.ui.itemAmountSlider.value=String(this.settings.gameplay.itemAmount),this.ui.itemAmountLabel.textContent=String(this.settings.gameplay.itemAmount),this.ui.fireRateSlider.value=String(this.settings.gameplay.fireRate),this.ui.fireRateLabel.textContent=this.settings.gameplay.fireRate.toFixed(2),this.ui.lockOnSlider.value=String(this.settings.gameplay.lockOnAngle),this.ui.lockOnLabel.textContent=String(this.settings.gameplay.lockOnAngle),this.ui.trainingEnabledToggle&&(this.ui.trainingEnabledToggle.checked=!!((c=this.settings.training)!=null&&c.enabled)),this.ui.trainingBotOnlyToggle&&(this.ui.trainingBotOnlyToggle.checked=!!((h=this.settings.training)!=null&&h.botVsBotOnly)),this.ui.trainingMortalBotsToggle&&(this.ui.trainingMortalBotsToggle.checked=!!((u=this.settings.training)!=null&&u.mortalBots)),this.ui.trainingAutoRestartToggle&&(this.ui.trainingAutoRestartToggle.checked=!!((d=this.settings.training)!=null&&d.autoRestart)),this.ui.trainingSpectatorSplitToggle&&(this.ui.trainingSpectatorSplitToggle.checked=!!((m=this.settings.training)!=null&&m.spectatorSplit)),this.ui.trainingDualWorldsToggle&&(this.ui.trainingDualWorldsToggle.checked=!!((g=this.settings.training)!=null&&g.dualWorlds)),this.ui.trainingTimeScaleSlider&&this.ui.trainingTimeScaleLabel){const p=kt(parseFloat(((_=this.settings.training)==null?void 0:_.timeScale)??1),.5,8);this.ui.trainingTimeScaleSlider.value=p.toFixed(1),this.ui.trainingTimeScaleLabel.textContent=p.toFixed(1)}if(this.ui.trainingAutoSaveSlider&&this.ui.trainingAutoSaveLabel){const p=kt(parseInt(((f=this.settings.training)==null?void 0:f.autoSaveRounds)??5,10),1,50);this.ui.trainingAutoSaveSlider.value=String(p),this.ui.trainingAutoSaveLabel.textContent=String(p)}this._renderKeybindEditor(),this._syncP2HudVisibility(),this._syncProfileControls(),this._updateSaveButtonState(),this._updateTrainingStatus()}_markSettingsDirty(t){this.settingsDirty=!!t,this._updateSaveButtonState()}_updateSaveButtonState(){var t;(t=this.ui)!=null&&t.saveKeysButton&&(this.ui.saveKeysButton.classList.toggle("unsaved",this.settingsDirty),this.ui.saveKeysButton.textContent=this.settingsDirty?"💾 Einstellungen explizit speichern *":"💾 Einstellungen explizit speichern",this._updateMenuContext())}_syncProfileControls(){var o;if(!this.ui.profileSelect)return;const t=this._normalizeProfileName(this.activeProfileName||this.ui.profileSelect.value||""),e=[...this.settingsProfiles].sort((a,l)=>l.updatedAt-a.updatedAt);this.ui.profileSelect.innerHTML="";const n=document.createElement("option");n.value="",n.textContent="Kein Profil gewaehlt",this.ui.profileSelect.appendChild(n);for(const a of e){const l=document.createElement("option");l.value=a.name,l.textContent=a.name,this.ui.profileSelect.appendChild(l)}const i=this._findProfileByName(t),r=i?i.name:"";this.activeProfileName=r,this.ui.profileSelect.value=r,this.ui.profileNameInput&&!((o=document.activeElement)!=null&&o.isSameNode(this.ui.profileNameInput))&&(this.ui.profileNameInput.value=r),this._syncProfileActionState()}_syncProfileActionState(){var o,a;const t=this._findProfileByName(((o=this.ui.profileSelect)==null?void 0:o.value)||this.activeProfileName||""),e=this._normalizeProfileName(((a=this.ui.profileNameInput)==null?void 0:a.value)||""),n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),r=e&&n>=0&&n===i;this.ui.profileLoadButton&&(this.ui.profileLoadButton.disabled=!t),this.ui.profileDeleteButton&&(this.ui.profileDeleteButton.disabled=!t),this.ui.profileSaveButton&&(this.ui.profileSaveButton.disabled=!e,e?r?this.ui.profileSaveButton.textContent="Aktives Profil aktualisieren":n>=0?this.ui.profileSaveButton.textContent="Name bereits vergeben":this.ui.profileSaveButton.textContent="Neues Profil speichern":this.ui.profileSaveButton.textContent="Profil unter Namen speichern"),this._updateMenuContext()}_saveProfile(t){const e=this._normalizeProfileName(t);if(!e)return this._showStatusToast("Profilname fehlt",1400,"error"),!1;const n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),r=n>=0&&n===i;if(n>=0&&!r)return this._showStatusToast("Name existiert bereits",1500,"error"),!1;const o=n>=0,a={name:e,updatedAt:Date.now(),settings:zr(this.settings)};n>=0?this.settingsProfiles[n]=a:this.settingsProfiles.push(a),this.activeProfileName=e;const l=this._saveProfiles();return this._syncProfileControls(),l?(this._showStatusToast(o?`Profil aktualisiert: ${e}`:`Profil gespeichert: ${e}`,1500,"success"),!0):(this._showStatusToast("Profil konnte nicht gespeichert werden",1700,"error"),!1)}_loadProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileByName(e);return n?(this.settings=this._sanitizeSettings(n.settings),this.activeProfileName=n.name,this._onSettingsChanged(),this._markSettingsDirty(!1),this._showStatusToast(`Profil geladen: ${n.name}`,1400,"success"),!0):(this._showStatusToast("Profil nicht gefunden",1500,"error"),!1)}_deleteProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileIndexByName(e);if(n<0)return this._showStatusToast("Profil nicht gefunden",1500,"error"),!1;const i=this.settingsProfiles[n].name;this.settingsProfiles.splice(n,1),this._findProfileIndexByName(this.activeProfileName)<0&&(this.activeProfileName="");const r=this._saveProfiles();return this._syncProfileControls(),r?(this._showStatusToast(`Profil geloescht: ${i}`,1400,"success"),!0):(this._showStatusToast("Profil konnte nicht geloescht werden",1700,"error"),!1)}_renderKeybindEditor(){const t=this._collectKeyConflicts();this._renderKeybindRows("PLAYER_1",this.ui.keybindP1,t),this._renderKeybindRows("PLAYER_2",this.ui.keybindP2,t),this._updateKeyConflictWarning(t)}_renderKeybindRows(t,e,n){e.innerHTML="";for(const i of cl){const r=document.createElement("div");r.className="key-row";const o=document.createElement("div");o.className="key-action",o.textContent=i.label;const a=this._getControlValue(t,i.key),l=document.createElement("button");l.type="button",l.className="keybind-btn",l.dataset.action=i.key;const c=!!a&&(n.get(a)||0)>1;l.textContent=this._formatKeyCode(a)+(c?"  (Konflikt)":""),c&&(r.classList.add("conflict"),l.classList.add("conflict")),this.keyCapture&&this.keyCapture.playerKey===t&&this.keyCapture.actionKey===i.key&&(l.classList.add("listening"),l.textContent="Taste druecken..."),r.appendChild(o),r.appendChild(l),e.appendChild(r)}}_startKeyCapture(t,e){this.keyCapture={playerKey:t,actionKey:e},this._renderKeybindEditor()}_handleKeyCapture(t){if(!(!this.keyCapture||this.ui.mainMenu.classList.contains("hidden"))){if(t.preventDefault(),t.stopPropagation(),t.code==="Escape"){this.keyCapture=null,this._renderKeybindEditor();return}this._setControlValue(this.keyCapture.playerKey,this.keyCapture.actionKey,t.code),this.keyCapture=null,this._onSettingsChanged(),this._showStatusToast("✅ Taste gespeichert!")}}_getControlValue(t,e){return this.settings.controls[t][e]||""}_setControlValue(t,e,n){this.settings.controls[t][e]=n}_collectKeyConflicts(){const t=new Map;for(const e of["PLAYER_1","PLAYER_2"])for(const n of cl){const i=this._getControlValue(e,n.key);i&&t.set(i,(t.get(i)||0)+1)}return t}_updateKeyConflictWarning(t){const e=Array.from(t.entries()).filter(([,n])=>n>1).map(([n])=>this._formatKeyCode(n));if(e.length===0){this.ui.keybindWarning.classList.add("hidden"),this.ui.keybindWarning.textContent="";return}this.ui.keybindWarning.classList.remove("hidden"),this.ui.keybindWarning.textContent=`Achtung: Mehrfachbelegte Tasten: ${e.join(", ")}`}_formatKeyCode(t){if(!t)return"-";const e={ArrowUp:"Arrow Up",ArrowDown:"Arrow Down",ArrowLeft:"Arrow Left",ArrowRight:"Arrow Right",ShiftLeft:"Shift Left",ShiftRight:"Shift Right",Space:"Space",Enter:"Enter",Escape:"Escape",ControlLeft:"Ctrl Left",ControlRight:"Ctrl Right",AltLeft:"Alt Left",AltRight:"Alt Right"};return e[t]?e[t]:t.startsWith("Key")?t.slice(3):t.startsWith("Digit")?t.slice(5):t.startsWith("Numpad")?`Num ${t.slice(6)}`:t}_showStatusToast(t,e=1200,n="info"){if(!this.ui.statusToast)return;const i=n==="success"||n==="error"?n:"info";this.ui.statusToast.textContent=t,this.ui.statusToast.classList.remove("hidden","show","toast-info","toast-success","toast-error"),this.ui.statusToast.classList.add(`toast-${i}`),this.ui.statusToast.offsetWidth,this.ui.statusToast.classList.add("show"),this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.ui.statusToast.classList.remove("show"),this.ui.statusToast.classList.add("hidden")},e)}_showPlayerFeedback(t,e){if(!t)return;const n=t.isBot?`Bot ${t.index+1}`:`P${t.index+1}`;this._showStatusToast(`${n}: ${e}`)}_syncP2HudVisibility(){this.ui.p1Hud&&this.ui.p1Hud.classList.toggle("hidden",this.numHumans<1),this.ui.p2Hud&&this.ui.p2Hud.classList.toggle("hidden",this.numHumans!==2)}_getTrainingBaseTimeScale(){var n,i;if(!!!((i=(n=this.settings)==null?void 0:n.training)!=null&&i.enabled))return 1;const e=parseFloat(this.settings.training.timeScale??1);return kt(Number.isFinite(e)?e:1,.5,8)}_isTrainingBotOnlyMode(){var t,e,n,i;return!!((e=(t=this.settings)==null?void 0:t.training)!=null&&e.enabled&&((i=(n=this.settings)==null?void 0:n.training)!=null&&i.botVsBotOnly))}_isTrainingDualWorldsMode(){var t,e;return!!(this._isTrainingBotOnlyMode()&&((e=(t=this.settings)==null?void 0:t.training)!=null&&e.dualWorlds)&&(this.numBots||0)>=4)}_isTrainingSpectatorSplitMode(){var t,e;return this._isTrainingDualWorldsMode()?!0:!!(this._isTrainingBotOnlyMode()&&((e=(t=this.settings)==null?void 0:t.training)!=null&&e.spectatorSplit)&&(this.numBots||0)>=2)}_getLearningEngines(){const t=[];return this.botLearning3D&&t.push(this.botLearning3D),this.botLearningPlanar&&this.botLearningPlanar!==this.botLearning3D&&t.push(this.botLearningPlanar),t}_getLearningEngineMap(){return{mode3d:this.botLearning3D||null,planar:this.botLearningPlanar||this.botLearning3D||null}}_setLearningEnginesEnabled(t){const e=!!t,n=this._getLearningEngines();for(let i=0;i<n.length;i++)n[i].setEnabled(e),n[i].setTrainingEnabled(e)}_updateTrainingStatus(){var h;if(!this.ui.trainingStatus)return;const t=this.botLearning3D?this.botLearning3D.getStats():null,e=this.botLearningPlanar?this.botLearningPlanar.getStats():null,n=((h=this.settings)==null?void 0:h.training)||{};if(!t&&!e){this.ui.trainingStatus.textContent="Learning engine nicht verfuegbar.";return}const i=((t==null?void 0:t.states)||0)+((e==null?void 0:e.states)||0),r=((t==null?void 0:t.totalUpdates)||0)+((e==null?void 0:e.totalUpdates)||0),o=((t==null?void 0:t.totalReward)||0)+((e==null?void 0:e.totalReward)||0),a=Number.isFinite(t==null?void 0:t.epsilon)?t.epsilon.toFixed(3):"n/a",l=Number.isFinite(e==null?void 0:e.epsilon)?e.epsilon.toFixed(3):"n/a",c=[`Learning: ${n.enabled?"AN":"AUS"} | BotOnly: ${n.botVsBotOnly?"JA":"NEIN"} | Mortal: ${n.mortalBots?"JA":"NEIN"}`,`Split: ${this._isTrainingSpectatorSplitMode()?"JA":"NEIN"} | Dual-Welten: ${this._isTrainingDualWorldsMode()?"JA":"NEIN"} | Auto-Restart: ${n.autoRestart?"JA":"NEIN"}`,`States(3D/Planar/Total): ${(t==null?void 0:t.states)||0}/${(e==null?void 0:e.states)||0}/${i} | Updates: ${r}`,`Epsilon(3D/Planar): ${a}/${l} | RewardSum: ${o.toFixed(2)} | TimeScale: ${this._getTrainingBaseTimeScale().toFixed(1)}x`];this.ui.trainingStatus.textContent=c.join(`
`)}_saveLearningData(t=!1,e=!0){const n=this._getLearningEngines();if(n.length===0)return!1;let i=!0;for(let r=0;r<n.length;r++)i=n[r].save(e)&&i;return this._updateTrainingStatus(),t&&this._showStatusToast(i?"Lerndaten gespeichert":"Lerndaten konnten nicht gespeichert werden",1400,i?"success":"error"),i}_resetLearningData(){const t=this._getLearningEngines();if(t.length!==0){for(let e=0;e<t.length;e++)t[e].reset(!0);this._updateTrainingStatus(),this._showStatusToast("Lerndaten zurueckgesetzt",1500,"success")}}_startDeveloperTraining(){this.settings.training.enabled=!0,this.settings.training.botVsBotOnly=!0,this.settings.training.mortalBots=!0,this.settings.training.autoRestart=!0,this.settings.training.spectatorSplit=!0,this.settings.training.dualWorlds=!0,this.settings.numBots=4,this._onSettingsChanged(),this._showStatusToast("Developer-Training gestartet",1200,"success"),this.startMatch()}startMatch(){this.keyCapture=null,this._applySettingsToRuntime(),this.ui.mainMenu.classList.add("hidden"),this.ui.hud.classList.remove("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden");const t=this._isTrainingSpectatorSplitMode();this.renderer.setSplitScreen(this.numHumans===2||t),this._syncP2HudVisibility(),this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.particles.clear(),this.renderer.clearScene(),this.arena=new vg(this.renderer),this.arena.portalsEnabled=this.settings.portalsEnabled,this.arena.build(this.mapKey),this.powerupManager=new Cg(this.renderer,this.arena),this.entityManager=new Pg(this.renderer,this.arena,this.powerupManager,this.particles,this.audio,this.recorder,this._getLearningEngineMap()),this.entityManager.setup(this.numHumans,this.numBots,{modelScale:this.settings.gameplay.planeScale,botDifficulty:this.settings.botDifficulty||"NORMAL",training:this.settings.training,humanConfigs:[{invertPitch:this.settings.invertPitch.PLAYER_1,cockpitCamera:this.settings.cockpitCamera.PLAYER_1},{invertPitch:this.settings.invertPitch.PLAYER_2,cockpitCamera:this.settings.cockpitCamera.PLAYER_2}]}),this.entityManager.onPlayerFeedback=(e,n)=>{this._showPlayerFeedback(e,n)};for(let e=0;e<this.numHumans;e++)this.renderer.createCamera(e);this.numHumans===0&&(this.renderer.createCamera(0),t&&this.renderer.createCamera(1));for(const e of this.entityManager.players)e.score=0;this.entityManager.onPlayerDied=()=>{},this.entityManager.onRoundEnd=e=>{this._onRoundEnd(e)},this._startRound()}_startRound(){this.state="PLAYING",this._hudTimer=0,this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none"),this.roundPause=0;for(const t of this.entityManager.players)t.trail.clear();this.powerupManager.clear(),this.recorder.startRound(this.entityManager.players),this.entityManager.spawnAll();for(const t of this.entityManager.getHumanPlayers())t.planarAimOffset=0;this.gameLoop.setTimeScale(this._getTrainingBaseTimeScale()),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this._updateHUD()}_onRoundEnd(t){var c,h,u;this.state="ROUND_END",this.roundPause=3,console.log("--- ROUND END ---");let e=null;try{e=this.recorder.finalizeRound(t,this.entityManager.players),e&&console.log("[Recorder] Round KPI:",e),this.recorder.dump()}catch(d){console.error("Recorder Dump Failed:",d)}if(!!((c=this.settings.training)!=null&&c.enabled)&&this._getLearningEngines().length>0){const d=this.recorder.getAggregateMetrics().rounds,m=kt(parseInt(((h=this.settings.training)==null?void 0:h.autoSaveRounds)??5,10),1,50);d>0&&d%m===0&&this._saveLearningData(!1,!0),this._updateTrainingStatus()}if(this._isTrainingBotOnlyMode()&&!!((u=this.settings.training)!=null&&u.autoRestart)){this.ui.messageOverlay.classList.add("hidden"),this.roundPause=.35;return}t&&t.score++,this._updateHUD();const r=parseInt(this.numBots)||0,o=this.entityManager.getHumanPlayers().length>1||r>0,a=Math.max(5,this.winsNeeded),l=o?this.entityManager.players.find(d=>d.score>=a):null;if(l){this.state="MATCH_END";const d=l.isBot?`Bot ${l.index+1}`:`Spieler ${l.index+1}`;this.ui.messageText.textContent=`Sieg: ${d} (Score: ${l.score})`,this.ui.messageSub.textContent="ENTER fuer neues Match oder ESC fuer Menue",this.ui.messageOverlay.classList.remove("hidden")}else if(t){const d=t.isBot?`Bot ${t.index+1}`:`Spieler ${t.index+1}`;this.ui.messageText.textContent=`${d} gewinnt die Runde`,this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}else this.ui.messageText.textContent="Unentschieden",this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}_updateHUD(){const t=this.entityManager.getHumanPlayers();if(t.length>0){const e=String(t[0].score);this.ui.p1Score.textContent!==e&&(this.ui.p1Score.textContent=e),this._updateItemBar(this.ui.p1Items,t[0])}if(t.length>1){const e=String(t[1].score);this.ui.p2Score.textContent!==e&&(this.ui.p2Score.textContent=e),this._updateItemBar(this.ui.p2Items,t[1])}}_updateItemBar(t,e){this._ensureItemSlots(t);for(let n=0;n<D.POWERUP.MAX_INVENTORY;n++){const i=t.children[n],r=n<e.inventory.length?e.inventory[n]:"";if(i.dataset.type!==r)if(i.dataset.type=r,r){const o=D.POWERUP.TYPES[r];i.textContent=o.icon,i.classList.add("active"),i.style.borderColor="#"+o.color.toString(16).padStart(6,"0")}else i.textContent="",i.classList.remove("active"),i.style.borderColor=""}}_ensureItemSlots(t){const e=D.POWERUP.MAX_INVENTORY;for(;t.children.length<e;){const n=document.createElement("div");n.className="item-slot",n.dataset.type="",t.appendChild(n)}for(;t.children.length>e;)t.removeChild(t.lastChild)}_getPlanarAimAxis(t){const e=this.settings.controls,n=e.PLAYER_1,i=e.PLAYER_2;let r=!1,o=!1;if(this.numHumans===1&&t===0)r=this.input.isDown(n.UP)||this.input.isDown(i.UP),o=this.input.isDown(n.DOWN)||this.input.isDown(i.DOWN);else{const a=t===0?n:i;r=this.input.isDown(a.UP),o=this.input.isDown(a.DOWN)}return(o?1:0)-(r?1:0)}_updatePlanarAimAssist(t){if(!this.entityManager)return;const e=D.GAMEPLAY.PLANAR_AIM_INPUT_SPEED,n=!!D.GAMEPLAY.PLANAR_MODE;for(const i of this.entityManager.getHumanPlayers()){const r=n?this._getPlanarAimAxis(i.index):0;let o=i.planarAimOffset||0;if(r!==0)o+=r*e*t;else{const a=1-Math.exp(-.6*t);o+=(0-o)*a}i.planarAimOffset=kt(o,-1,1)}}_updateCrosshairPosition(t,e){if(!t||!t.alive||!e){e&&(e.style.display="none");return}const n=this.renderer.cameras[t.index];if(!n){e.style.display="none";return}e.style.display="block";const i=window.innerWidth,r=window.innerHeight,o=this.numHumans===2,a=o?i*.5:i,l=o?t.index===0?0:a:0;t.getAimDirection(this._tmpAimDir),this._tmpAimVec.copy(t.position).addScaledVector(this._tmpAimDir,80).project(n);const c=kt(this._tmpAimVec.x,-1.05,1.05),h=kt(this._tmpAimVec.y,-1.05,1.05),u=l+(c*.5+.5)*a,d=(-(h*.5)+.5)*r;this._tmpRollEuler.setFromQuaternion(t.quaternion,"YXZ");const m=Pn.radToDeg(this._tmpRollEuler.z);e.style.left=`${u}px`,e.style.top=`${d}px`,e.style.transform=`translate(-50%, -50%) rotate(${m.toFixed(2)}deg)`}_updateCrosshairs(){if(!this.entityManager)return;const t=this.entityManager.players[0],e=this.entityManager.players[1],n=!!D.GAMEPLAY.PLANAR_MODE,i=r=>r?n?!0:(D.CAMERA.MODES[r.cameraMode]||"THIRD_PERSON")!=="FIRST_PERSON":!1;this.ui.crosshairP1&&(i(t)?this._updateCrosshairPosition(t,this.ui.crosshairP1):this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.numHumans===2?i(e)?this._updateCrosshairPosition(e,this.ui.crosshairP2):this.ui.crosshairP2.style.display="none":this.ui.crosshairP2.style.display="none")}update(t){if(this._fpsTracker.update(t),this.state==="PLAYING"&&this.entityManager&&this.recorder.recordFrame(this.entityManager.players),this.stats&&(this._statsTimer=(this._statsTimer||0)+t,this._statsTimer>=.25)){this._statsTimer=0;const e=this.renderer.renderer.info,n=Math.round(this._fpsTracker.avg),i=e.render.calls||0,r=e.render.triangles||0,o=e.memory.geometries||0,a=e.memory.textures||0,l=this.entityManager?this.entityManager.players.filter(h=>h.alive).length:0,c=this.isLowQuality?"LOW":"HIGH";this.stats.innerHTML=`<b style="color:${n<30?"#f44":n<50?"#fa0":"#0f0"}">FPS: ${n}</b>
Draw Calls: ${i}
Dreiecke: ${(r/1e3).toFixed(1)}k
Geometrien: ${o}
Texturen: ${a}
Spieler: ${l}
Qualität: ${c}`}if(this._adaptiveTimer=(this._adaptiveTimer||0)+t,this._adaptiveTimer>=3&&(this._adaptiveTimer=0,this._fpsTracker.avg<30&&!this.isLowQuality&&this.state==="PLAYING"&&(this.isLowQuality=!0,this.renderer.setQuality("LOW"),this._showStatusToast("⚡ Grafik automatisch reduziert"))),this.state==="PLAYING"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this._updatePlanarAimAssist(t),this.entityManager.update(t,this.input),this.powerupManager.update(t),this.particles.update(t),this.arena.update(t),this.entityManager.updateCameras(t),this._updateCrosshairs(),this._hudTimer+=t,this._hudTimer>=.2&&(this._hudTimer=0,this._updateHUD());const e=this.entityManager.players[0];if(e&&this.hudP1.update(e,t,this.entityManager),this.ui.crosshairP1&&(this.entityManager.getLockOnTarget(0)?this.ui.crosshairP1.classList.add("locked"):this.ui.crosshairP1.classList.remove("locked")),this.ui.crosshairP2&&this.numHumans===2){this.entityManager.getLockOnTarget(1)?this.ui.crosshairP2.classList.add("locked"):this.ui.crosshairP2.classList.remove("locked");const o=this.entityManager.players[1];o&&this.hudP2.update(o,t,this.entityManager)}else this.hudP2.setVisibility(!1);const n=this._getTrainingBaseTimeScale();let i=1;for(const r of this.entityManager.players)for(const o of r.activeEffects)o.type==="SLOW_TIME"&&(i=Math.min(i,D.POWERUP.TYPES.SLOW_TIME.timeScale));this.gameLoop.setTimeScale(n*i)}else if(this.state==="ROUND_END"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this.input.wasPressed("Enter")&&(this.roundPause=0),this.roundPause-=t;const e=Math.ceil(this.roundPause);e>0&&(this.ui.messageSub.textContent=`Naechste Runde in ${e}...`),this.entityManager.updateCameras(t),this.roundPause<=0&&this._startRound()}else this.state==="MATCH_END"&&(this.input.wasPressed("Enter")?this.startMatch():this.input.wasPressed("Escape")&&this._returnToMenu(),this.entityManager.updateCameras(t))}render(){this.renderer.render()}_returnToMenu(){this.state="MENU",this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.renderer.clearScene(),this.arena=null,this.entityManager=null,this.powerupManager=null,this.ui.mainMenu.classList.remove("hidden"),this._showMainNav(),this.ui.hud.classList.add("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none",this.ui.crosshairP1.style.left="50%",this.ui.crosshairP1.style.top="50%",this.ui.crosshairP1.style.transform="translate(-50%, -50%) rotate(0deg)"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none",this.ui.crosshairP2.style.left="50%",this.ui.crosshairP2.style.top="50%",this.ui.crosshairP2.style.transform="translate(-50%, -50%) rotate(0deg)"),this._saveLearningData(!1,!0),this._syncMenuControls()}_showDebugLog(t){}captureBotBaseline(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.captureBaseline(e);return this._showStatusToast(`Bot-Baseline gespeichert: ${e}`),console.log(`[Recorder] Baseline gespeichert (${e}):`,n),n}printBotValidationReport(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.getAggregateMetrics(),i=this.recorder.compareWithBaseline(e),r=this.recorder.getValidationMatrix(),o={label:e,aggregate:n,comparison:i,matrix:r};return console.log("[Recorder] Validation report:",o),o}getBotValidationMatrix(){return this.recorder.getValidationMatrix()}printBotTestProtocol(){const t=this.getBotValidationMatrix(),e={steps:["1) applyBotValidationScenario(0) und 10 Runden spielen.",'2) captureBotBaseline("BASELINE") ausfuehren.',"3) Weitere Szenarien aus der Matrix durchspielen.",'4) printBotValidationReport("BASELINE") fuer KPI-Vergleich ausfuehren.'],matrix:t};return console.log("[Recorder] Bot-Testprotokoll:",e),e}applyBotValidationScenario(t=0){const e=this.getBotValidationMatrix();if(!e||e.length===0)return null;let n=null;return typeof t=="number"?n=e[Math.max(0,Math.min(e.length-1,t))]:n=e.find(i=>i.id===t)||e[0],n?(this.settings.mode=n.mode==="2p"?"2p":"1p",this.settings.numBots=n.bots,this.settings.mapKey=n.mapKey,this.settings.gameplay.planarMode=!!n.planarMode,this.settings.gameplay.portalCount=n.portalCount,this.settings.portalsEnabled=n.portalCount>0||this.settings.portalsEnabled,this.settings.winsNeeded=Math.max(1,this.settings.winsNeeded),this._onSettingsChanged(),this._showStatusToast(`Szenario ${n.id} geladen`),console.log("[Recorder] Validation scenario loaded:",n),n):null}}window.onerror=function(s,t,e,n,i){const r=document.createElement("div");return r.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",r.innerHTML=`<h1>CRITICAL ERROR</h1><p>${s}</p><p>${t}:${e}:${n}</p><pre>${i?i.stack:"No stack trace"}</pre>`,document.body.appendChild(r),!1};window.addEventListener("DOMContentLoaded",()=>{try{console.log("DOM ready, initializing Game...");const s=new Bg;new URLSearchParams(window.location.search).get("autotrain")==="1"&&s._startDeveloperTraining(),window.GAME_INSTANCE=s}catch(s){console.error("Fatal Game Init Error:",s);const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",t.innerHTML=`<h1>INIT ERROR</h1><p>${s.message}</p><pre>${s.stack}</pre>`,document.body.appendChild(t)}});
