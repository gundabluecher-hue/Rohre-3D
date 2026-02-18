(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="160",tc=0,uo=1,ec=2,nc=0,sl=1,ic=2,hn=3,Rn=0,Pe=1,Ye=2,Tn=0,vi=1,fo=2,po=3,mo=4,sc=5,Bn=100,rc=101,oc=102,go=103,_o=104,ac=200,lc=201,cc=202,hc=203,Ur=204,Or=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=211,_c=212,vc=213,xc=214,Sc=0,yc=1,Mc=2,Ds=3,Ec=4,Ac=5,Tc=6,bc=7,rl=0,wc=1,Rc=2,fn=0,Pc=1,Cc=2,Lc=3,Fr=4,Ic=5,Dc=6,ol=300,yi=301,Mi=302,Br=303,zr=304,Vs=306,Gi=1e3,qe=1001,kr=1002,ye=1003,vo=1004,Cs=1005,Fe=1006,Nc=1007,Vi=1008,bn=1009,Uc=1010,Oc=1011,$r=1012,al=1013,Mn=1014,En=1015,Hi=1016,ll=1017,cl=1018,kn=1020,Fc=1021,Ke=1023,Bc=1024,zc=1025,Gn=1026,Ei=1027,kc=1028,hl=1029,Gc=1030,ul=1031,dl=1033,js=33776,Js=33777,Qs=33778,tr=33779,xo=35840,So=35841,yo=35842,Mo=35843,fl=36196,Eo=37492,Ao=37496,To=37808,bo=37809,wo=37810,Ro=37811,Po=37812,Co=37813,Lo=37814,Io=37815,Do=37816,No=37817,Uo=37818,Oo=37819,Fo=37820,Bo=37821,er=36492,zo=36494,ko=36495,Vc=36283,Go=36284,Vo=36285,Ho=36286,pl=3e3,Vn=3001,Hc=3200,Wc=3201,ml=0,Xc=1,ke="",ge="srgb",pn="srgb-linear",Zr="display-p3",Hs="display-p3-linear",Ns="linear",te="srgb",Us="rec709",Os="p3",$n=7680,Wo=519,Yc=512,qc=513,Kc=514,gl=515,$c=516,Zc=517,jc=518,Jc=519,Xo=35044,_l=35048,Yo="300 es",Gr=1035,un=2e3,Fs=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const xi=Math.PI/180,Wi=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function jr(s,t){return(s%t+t)%t}function Qc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function th(s,t,e){return s!==t?(e-s)/(t-s):0}function Ui(s,t,e){return(1-e)*s+e*t}function eh(s,t,e,n){return Ui(s,t,1-Math.exp(-e*n))}function nh(s,t=1){return t-Math.abs(jr(s,t*2)-t)}function ih(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function sh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function rh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function oh(s,t){return s+Math.random()*(t-s)}function ah(s){return s*(.5-Math.random())}function lh(s){s!==void 0&&(qo=s);let t=qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ch(s){return s*xi}function hh(s){return s*Wi}function Vr(s){return(s&s-1)===0&&s!==0}function uh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wn={DEG2RAD:xi,RAD2DEG:Wi,generateUUID:qn,clamp:_e,euclideanModulo:jr,mapLinear:Qc,inverseLerp:th,lerp:Ui,damp:eh,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:oh,randFloatSpread:ah,seededRandom:lh,degToRad:ch,radToDeg:hh,isPowerOfTwo:Vr,ceilPowerOfTwo:uh,floorPowerOfTwo:Bs,setQuaternionFromProperEuler:dh,normalize:Te,denormalize:pi};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],A=i[1],v=i[4],S=i[7],C=i[2],R=i[5],w=i[8];return r[0]=o*_+a*A+l*C,r[3]=o*p+a*v+l*R,r[6]=o*f+a*S+l*w,r[1]=c*_+h*A+u*C,r[4]=c*p+h*v+u*R,r[7]=c*f+h*S+u*w,r[2]=d*_+m*A+g*C,r[5]=d*p+m*v+g*R,r[8]=d*f+m*S+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nr.makeScale(t,e)),this}rotate(t){return this.premultiply(nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new Vt;function vl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fh(){const s=zs("canvas");return s.style.display="block",s}const Ko={};function Oi(s){s in Ko||(Ko[s]=!0,console.warn(s))}const $o=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zo=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[pn]:{transfer:Ns,primaries:Us,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:te,primaries:Us,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hs]:{transfer:Ns,primaries:Os,toReference:s=>s.applyMatrix3(Zo),fromReference:s=>s.applyMatrix3($o)},[Zr]:{transfer:te,primaries:Os,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zo),fromReference:s=>s.applyMatrix3($o).convertLinearToSRGB()}},ph=new Set([pn,Hs]),$t={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ph.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Zi[t].toReference,i=Zi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Zi[s].primaries},getTransfer:function(s){return s===ke?Ns:Zi[s].transfer}};function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zn;class xl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=zs("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mh=0;class Sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sr(i[o].image)):r.push(sr(i[o]))}else r=sr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class Ce extends Ti{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=qe,i=qe,r=Fe,o=Vi,a=Ke,l=bn,c=Ce.DEFAULT_ANISOTROPY,h=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=qn(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?ge:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case qe:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case qe:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Vn:pl}set encoding(t){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vn?ge:ke}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=ol;Ce.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,C=(f+1)/2,R=(h+d)/4,w=(u+_)/4,V=(g+p)/4;return v>S&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=w/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=V/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=V/r),this.set(n,i,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(u-_)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?ge:ke),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends _h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yl extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*_,A=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,f*A);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const S=a*A;if(l=l*p+d*S,c=c*p+m*S,h=h*p+g*S,u=u*p+_*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rr.copy(this).projectOnVector(t),this.sub(rr)}reflect(t){return this.sub(rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new b,jo=new Wn;class tn{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(r,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),Ji.subVectors(this.max,Pi),jn.subVectors(t.a,Pi),Jn.subVectors(t.b,Pi),Qn.subVectors(t.c,Pi),gn.subVectors(Jn,jn),_n.subVectors(Qn,Jn),In.subVectors(jn,Qn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-In.z,In.y,gn.z,0,-gn.x,_n.z,0,-_n.x,In.z,0,-In.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!or(e,jn,Jn,Qn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!or(e,jn,Jn,Qn,Ji))?!1:(Qi.crossVectors(gn,_n),e=[Qi.x,Qi.y,Qi.z],or(e,jn,Jn,Qn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sn=[new b,new b,new b,new b,new b,new b,new b,new b],Ve=new b,ji=new tn,jn=new b,Jn=new b,Qn=new b,gn=new b,_n=new b,In=new b,Pi=new b,Ji=new b,Qi=new b,Dn=new b;function or(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Dn.fromArray(s,r);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xh=new tn,Ci=new b,ar=new b;class mn{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(ar)),this.expandByPoint(Ci.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new b,lr=new b,ts=new b,vn=new b,cr=new b,es=new b,hr=new b;class Jr{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){lr.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ts),a=vn.dot(this.direction),l=-vn.dot(ts),c=vn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(lr).addScaledVector(ts,d),m}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,i,r){cr.subVectors(e,t),es.subVectors(n,t),hr.crossVectors(cr,es);let o=this.direction.dot(hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,t);const l=a*this.direction.dot(es.crossVectors(vn,es));if(l<0)return null;const c=a*this.direction.dot(cr.cross(vn));if(c<0||l+c>o)return null;const h=-a*vn.dot(hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sh,t,yh)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),xn.crossVectors(n,Ie),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),xn.crossVectors(n,Ie)),xn.normalize(),ns.crossVectors(Ie,xn),i[0]=xn.x,i[4]=ns.x,i[8]=Ie.x,i[1]=xn.y,i[5]=ns.y,i[9]=Ie.y,i[2]=xn.z,i[6]=ns.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],A=n[3],v=n[7],S=n[11],C=n[15],R=i[0],w=i[4],V=i[8],y=i[12],T=i[1],F=i[5],W=i[9],Q=i[13],I=i[2],O=i[6],k=i[10],$=i[14],q=i[3],K=i[7],j=i[11],it=i[15];return r[0]=o*R+a*T+l*I+c*q,r[4]=o*w+a*F+l*O+c*K,r[8]=o*V+a*W+l*k+c*j,r[12]=o*y+a*Q+l*$+c*it,r[1]=h*R+u*T+d*I+m*q,r[5]=h*w+u*F+d*O+m*K,r[9]=h*V+u*W+d*k+m*j,r[13]=h*y+u*Q+d*$+m*it,r[2]=g*R+_*T+p*I+f*q,r[6]=g*w+_*F+p*O+f*K,r[10]=g*V+_*W+p*k+f*j,r[14]=g*y+_*Q+p*$+f*it,r[3]=A*R+v*T+S*I+C*q,r[7]=A*w+v*F+S*O+C*K,r[11]=A*V+v*W+S*k+C*j,r[15]=A*y+v*Q+S*$+C*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+_*(+e*l*m-e*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],A=u*p*c-_*d*c+_*l*m-a*p*m-u*l*f+a*d*f,v=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*m-o*_*m-h*a*f+o*u*f,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,R=e*A+n*v+i*S+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=A*w,t[1]=(_*d*r-u*p*r-_*i*m+n*p*m+u*i*f-n*d*f)*w,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*f+n*l*f)*w,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*w,t[4]=v*w,t[5]=(h*p*r-g*d*r+g*i*m-e*p*m-h*i*f+e*d*f)*w,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*f-e*l*f)*w,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*m+e*l*m)*w,t[8]=S*w,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*w,t[12]=C*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,p=o*u,f=a*u,A=l*c,v=l*h,S=l*u,C=n.x,R=n.y,w=n.z;return i[0]=(1-(_+f))*C,i[1]=(m+S)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(m-S)*R,i[5]=(1-(d+f))*R,i[6]=(p+A)*R,i[7]=0,i[8]=(g+v)*w,i[9]=(p-A)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const o=ti.set(i[4],i[5],i[6]).length(),a=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const c=1/r,h=1/o,u=1/a;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=un){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===un)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=un){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,m=(n+i)*h;let g,_;if(a===un)g=(o+r)*u,_=-2*u;else if(a===Fs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new b,He=new ee,Sh=new b(0,0,0),yh=new b(1,1,1),xn=new b,ns=new b,Ie=new b,Jo=new ee,Qo=new Wn;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mh=0;const ta=new b,ei=new Wn,on=new ee,is=new b,Li=new b,Eh=new b,Ah=new Wn,ea=new b(1,0,0),na=new b(0,1,0),ia=new b(0,0,1),Th={type:"added"},bh={type:"removed"};class le extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new b,e=new Pn,n=new Wn,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Vt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(ea,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(ia,t)}translateOnAxis(t,e){return ta.copy(t).applyQuaternion(this.quaternion),this.position.add(ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ea,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Li,is,this.up):on.lookAt(is,Li,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(on),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Ah,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}le.DEFAULT_UP=new b(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new b,an=new b,ur=new b,ln=new b,ni=new b,ii=new b,sa=new b,dr=new b,fr=new b,pr=new b;let ss=!1;class Be{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){We.subVectors(i,e),an.subVectors(n,e),ur.subVectors(t,e);const o=We.dot(We),a=We.dot(an),l=We.dot(ur),c=an.dot(an),h=an.dot(ur),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,i,r,o,a,l){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l)}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),an.subVectors(t,e),We.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),an.subVectors(this.a,this.b),We.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),Be.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ni.subVectors(i,n),ii.subVectors(r,n),dr.subVectors(t,n);const l=ni.dot(dr),c=ii.dot(dr);if(l<=0&&c<=0)return e.copy(n);fr.subVectors(t,i);const h=ni.dot(fr),u=ii.dot(fr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ni,o);pr.subVectors(t,r);const m=ni.dot(pr),g=ii.dot(pr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ii,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return sa.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(sa,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function mr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=jr(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mr(o,r,t+1/3),this.g=mr(o,r,t),this.b=mr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=El[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return $t.fromWorkingColorSpace(Se.copy(this),t),Math.round(_e(Se.r*255,0,255))*65536+Math.round(_e(Se.g*255,0,255))*256+Math.round(_e(Se.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,i=Se.g,r=Se.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=ge){$t.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,i=Se.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(rs);const n=Ui(Sn.h,rs.h,e),i=Ui(Sn.s,rs.s,e),r=Ui(Sn.l,rs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Wt;Wt.NAMES=El;let wh=0;class Kn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=vi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Or,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $e extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new b,os=new ht;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}}class Al extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tl extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rh=0;const Ue=new ee,gr=new le,si=new b,De=new tn,Ii=new tn,pe=new b;class Me extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?Tl:Al)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return gr.lookAt(t),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(De.min,Ii.min),De.expandByPoint(pe),pe.addVectors(De.max,Ii.max),De.expandByPoint(pe)):(De.expandByPoint(Ii.min),De.expandByPoint(Ii.max))}De.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pe.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(t,c),pe.add(si)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new b,h[T]=new b;const u=new b,d=new b,m=new b,g=new ht,_=new ht,p=new ht,f=new b,A=new b;function v(T,F,W){u.fromArray(i,T*3),d.fromArray(i,F*3),m.fromArray(i,W*3),g.fromArray(o,T*2),_.fromArray(o,F*2),p.fromArray(o,W*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),A.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Q),c[T].add(f),c[F].add(f),c[W].add(f),h[T].add(A),h[F].add(A),h[W].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,F=S.length;T<F;++T){const W=S[T],Q=W.start,I=W.count;for(let O=Q,k=Q+I;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}const C=new b,R=new b,w=new b,V=new b;function y(T){w.fromArray(r,T*3),V.copy(w);const F=c[T];C.copy(F),C.sub(w.multiplyScalar(w.dot(F))).normalize(),R.crossVectors(V,F);const Q=R.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=Q}for(let T=0,F=S.length;T<F;++T){const W=S[T],Q=W.start,I=W.count;for(let O=Q,k=Q+I;O<k;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ra=new ee,Nn=new Jr,as=new mn,oa=new b,ri=new b,oi=new b,ai=new b,_r=new b,ls=new b,cs=new ht,hs=new ht,us=new ht,aa=new b,la=new b,ca=new b,ds=new b,fs=new b;class Xt extends le{constructor(t=new Me,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(_r.fromBufferAttribute(u,t),o?ls.addScaledVector(_r,h):ls.addScaledVector(_r.sub(e),h))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(as.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(as,oa)===null||Nn.origin.distanceToSquared(oa)>(t.far-t.near)**2))&&(ra.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(ra),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,C=v;S<C;S+=3){const R=a.getX(S),w=a.getX(S+1),V=a.getX(S+2);i=ps(this,f,t,n,c,h,u,R,w,V),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const A=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=ps(this,o,t,n,c,h,u,A,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,C=v;S<C;S+=3){const R=S,w=S+1,V=S+2;i=ps(this,f,t,n,c,h,u,R,w,V),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const A=p,v=p+1,S=p+2;i=ps(this,o,t,n,c,h,u,A,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ph(s,t,e,n,i,r,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Rn,a),l===null)return null;fs.copy(a),fs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:s}}function ps(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ri),s.getVertexPosition(l,oi),s.getVertexPosition(c,ai);const h=Ph(s,t,e,n,ri,oi,ai,ds);if(h){i&&(cs.fromBufferAttribute(i,a),hs.fromBufferAttribute(i,l),us.fromBufferAttribute(i,c),h.uv=Be.getInterpolation(ds,ri,oi,ai,cs,hs,us,new ht)),r&&(cs.fromBufferAttribute(r,a),hs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,c),h.uv1=Be.getInterpolation(ds,ri,oi,ai,cs,hs,us,new ht),h.uv2=h.uv1),o&&(aa.fromBufferAttribute(o,a),la.fromBufferAttribute(o,l),ca.fromBufferAttribute(o,c),h.normal=Be.getInterpolation(ds,ri,oi,ai,aa,la,ca,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new b,materialIndex:0};Be.getNormal(ri,oi,ai,u.normal),h.face=u}return h}class Ze extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,p,f,A,v,S,C,R,w,V,y){const T=S/w,F=C/V,W=S/2,Q=C/2,I=R/2,O=w+1,k=V+1;let $=0,q=0;const K=new b;for(let j=0;j<k;j++){const it=j*F-Q;for(let rt=0;rt<O;rt++){const H=rt*T-W;K[_]=H*A,K[p]=it*v,K[f]=I,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[f]=R>0?1:-1,h.push(K.x,K.y,K.z),u.push(rt/w),u.push(1-j/V),$+=1}}for(let j=0;j<V;j++)for(let it=0;it<w;it++){const rt=d+it+O*j,H=d+it+O*(j+1),Z=d+(it+1)+O*(j+1),ft=d+(it+1)+O*j;l.push(rt,H,ft),l.push(H,Z,ft),q+=6}a.addGroup(m,q,y),m+=q,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const n=Ai(s[e]);for(const i in n)t[i]=n[i]}return t}function Ch(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bl(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}const Lh={clone:Ai,merge:be};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wl extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ze extends wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class Nh extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(li,ci,t,e);i.layers=this.layers,this.add(i);const r=new ze(li,ci,t,e);r.layers=this.layers,this.add(r);const o=new ze(li,ci,t,e);o.layers=this.layers,this.add(o);const a=new ze(li,ci,t,e);a.layers=this.layers,this.add(a);const l=new ze(li,ci,t,e);l.layers=this.layers,this.add(l);const c=new ze(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rl extends Ce{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uh extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vn?ge:ke),this.texture=new Rl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ze(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Tn});r.uniforms.tEquirect.value=e;const o=new Xt(i,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Fe),new Nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const vr=new b,Oh=new b,Fh=new Vt;class On{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vr.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fh.getNormalMatrix(t),i=this.coplanarPoint(vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new mn,ms=new b;class Qr{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],A=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,p-m,S-f).normalize(),n[1].setComponents(l+r,d+c,p+m,S+f).normalize(),n[2].setComponents(l+o,d+h,p+g,S+A).normalize(),n[3].setComponents(l-o,d-h,p-g,S-A).normalize(),n[4].setComponents(l-a,d-u,p-_,S-v).normalize(),e===un)n[5].setComponents(l+a,d+u,p+_,S+v).normalize();else if(e===Fs)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Bh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ws extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const A=f*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-A,0),_.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const v=A+c*f,S=A+c*(f+1),C=A+1+c*(f+1),R=A+1+c*f;m.push(v,S,R),m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
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
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lu=`#define PI 3.141592653589793
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
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`
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
}`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
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
}`,wu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
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
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
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
#endif`,Bu=`struct PhysicalMaterial {
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
}`,zu=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`#if defined( USE_POINTS_UV )
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
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ed=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
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
}`,Xd=`#if DEPTH_PACKING == 3200
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
}`,Yd=`#define DISTANCE
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
}`,qd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,Qd=`uniform vec3 diffuse;
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
}`,tf=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,nf=`#define MATCAP
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
}`,sf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,of=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,lf=`#define PHONG
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
}`,cf=`#define STANDARD
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
}`,hf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,df=`#define TOON
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
}`,ff=`uniform float size;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 color;
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
}`,_f=`uniform float rotation;
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
}`,vf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:zh,alphahash_pars_fragment:kh,alphamap_fragment:Gh,alphamap_pars_fragment:Vh,alphatest_fragment:Hh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:Yh,batching_pars_vertex:qh,batching_vertex:Kh,begin_vertex:$h,beginnormal_vertex:Zh,bsdfs:jh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:ou,color_vertex:au,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:vu,envmap_pars_fragment:xu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Iu,envmap_vertex:yu,fog_vertex:Mu,fog_pars_vertex:Eu,fog_fragment:Au,fog_pars_fragment:Tu,gradientmap_pars_fragment:bu,lightmap_fragment:wu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Cu,lights_pars_begin:Lu,lights_toon_fragment:Du,lights_toon_pars_fragment:Nu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Ou,lights_physical_fragment:Fu,lights_physical_pars_fragment:Bu,lights_fragment_begin:zu,lights_fragment_maps:ku,lights_fragment_end:Gu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:Yu,map_pars_fragment:qu,map_particle_fragment:Ku,map_particle_pars_fragment:$u,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:ju,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:td,morphtarget_vertex:ed,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:od,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,opaque_fragment:dd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:vd,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:yd,shadowmap_vertex:Md,shadowmask_pars_fragment:Ed,skinbase_vertex:Ad,skinning_pars_vertex:Td,skinning_vertex:bd,skinnormal_vertex:wd,specularmap_fragment:Rd,specularmap_pars_fragment:Pd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Ld,transmission_fragment:Id,transmission_pars_fragment:Dd,uv_pars_fragment:Nd,uv_pars_vertex:Ud,uv_vertex:Od,worldpos_vertex:Fd,background_vert:Bd,background_frag:zd,backgroundCube_vert:kd,backgroundCube_frag:Gd,cube_vert:Vd,cube_frag:Hd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:Yd,distanceRGBA_frag:qd,equirect_vert:Kd,equirect_frag:$d,linedashed_vert:Zd,linedashed_frag:jd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:tf,meshlambert_frag:ef,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:of,meshphong_vert:af,meshphong_frag:lf,meshphysical_vert:cf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:ff,points_frag:pf,shadow_vert:mf,shadow_frag:gf,sprite_vert:_f,sprite_frag:vf},lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Qe={basic:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:be([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:be([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:be([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:be([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:be([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:be([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:be([lt.common,lt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:be([lt.lights,lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Qe.physical={uniforms:be([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const gs={r:0,b:0,g:0};function xf(s,t,e,n,i,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let A=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),A=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Vs)?(h===void 0&&(h=new Xt(new Ze(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ai(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new Ws(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ai(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(gs,bl(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Sf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(I,O,k,$,q){let K=!1;if(o){const j=_($,k,O);c!==j&&(c=j,m(c.object)),K=f(I,$,k,q),K&&A(I,$,k,q)}else{const j=O.wireframe===!0;(c.geometry!==$.id||c.program!==k.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=k.id,c.wireframe=j,K=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,V(I,O,k,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,O,k){const $=k.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let K=q[O.id];K===void 0&&(K={},q[O.id]=K);let j=K[$];return j===void 0&&(j=p(d()),K[$]=j),j}function p(I){const O=[],k=[],$=[];for(let q=0;q<i;q++)O[q]=0,k[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,O,k,$){const q=c.attributes,K=O.attributes;let j=0;const it=k.getAttributes();for(const rt in it)if(it[rt].location>=0){const Z=q[rt];let ft=K[rt];if(ft===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),Z===void 0||Z.attribute!==ft||ft&&Z.data!==ft.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function A(I,O,k,$){const q={},K=O.attributes;let j=0;const it=k.getAttributes();for(const rt in it)if(it[rt].location>=0){let Z=K[rt];Z===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ft={};ft.attribute=Z,Z&&Z.data&&(ft.data=Z.data),q[rt]=ft,j++}c.attributes=q,c.attributesNum=j,c.index=$}function v(){const I=c.newAttributes;for(let O=0,k=I.length;O<k;O++)I[O]=0}function S(I){C(I,0)}function C(I,O){const k=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;k[I]=1,$[I]===0&&(s.enableVertexAttribArray(I),$[I]=1),q[I]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),q[I]=O)}function R(){const I=c.newAttributes,O=c.enabledAttributes;for(let k=0,$=O.length;k<$;k++)O[k]!==I[k]&&(s.disableVertexAttribArray(k),O[k]=0)}function w(I,O,k,$,q,K,j){j===!0?s.vertexAttribIPointer(I,O,k,q,K):s.vertexAttribPointer(I,O,k,$,q,K)}function V(I,O,k,$){if(n.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=$.attributes,K=k.getAttributes(),j=O.defaultAttributeValues;for(const it in K){const rt=K[it];if(rt.location>=0){let H=q[it];if(H===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const Z=H.normalized,ft=H.itemSize,St=e.get(H);if(St===void 0)continue;const gt=St.buffer,Tt=St.type,Pt=St.bytesPerElement,xt=n.isWebGL2===!0&&(Tt===s.INT||Tt===s.UNSIGNED_INT||H.gpuType===al);if(H.isInterleavedBufferAttribute){const Ct=H.data,P=Ct.stride,ot=H.offset;if(Ct.isInstancedInterleavedBuffer){for(let Y=0;Y<rt.locationSize;Y++)C(rt.location+Y,Ct.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Y=0;Y<rt.locationSize;Y++)S(rt.location+Y);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Y=0;Y<rt.locationSize;Y++)w(rt.location+Y,ft/rt.locationSize,Tt,Z,P*Pt,(ot+ft/rt.locationSize*Y)*Pt,xt)}else{if(H.isInstancedBufferAttribute){for(let Ct=0;Ct<rt.locationSize;Ct++)C(rt.location+Ct,H.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)S(rt.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ct=0;Ct<rt.locationSize;Ct++)w(rt.location+Ct,ft/rt.locationSize,Tt,Z,ft*Pt,ft/rt.locationSize*Ct*Pt,xt)}}else if(j!==void 0){const Z=j[it];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(rt.location,Z);break;case 3:s.vertexAttrib3fv(rt.location,Z);break;case 4:s.vertexAttrib4fv(rt.location,Z);break;default:s.vertexAttrib1fv(rt.location,Z)}}}}R()}function y(){W();for(const I in a){const O=a[I];for(const k in O){const $=O[k];for(const q in $)g($[q].object),delete $[q];delete O[k]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const O=a[I.id];for(const k in O){const $=O[k];for(const q in $)g($[q].object),delete $[q];delete O[k]}delete a[I.id]}function F(I){for(const O in a){const k=a[O];if(k[I.id]===void 0)continue;const $=k[I.id];for(const q in $)g($[q].object),delete $[q];delete k[I.id]}}function W(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function yf(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Mf(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),C=v&&S,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:R}}function Ef(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new On,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const A=r?0:n,v=A*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,m);for(let C=0;C!==v;++C)S[C]=e[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(A,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Af(s){let t=new WeakMap;function e(o,a){return a===Br?o.mapping=yi:a===zr&&(o.mapping=Mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Br||a===zr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Uh(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cl extends wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,ha=[.125,.215,.35,.446,.526,.582],zn=20,xr=new Cl,ua=new Wt;let Sr=null,yr=0,Mr=0;const Fn=(1+Math.sqrt(5))/2,hi=1/Fn,da=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Fn,hi),new b(0,Fn,-hi),new b(hi,0,Fn),new b(-hi,0,Fn),new b(Fn,hi,0),new b(-Fn,hi,0)];class fa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sr,yr,Mr),t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Hi,format:Ke,colorSpace:pn,depthBuffer:!1},i=pa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(r)),this._blurMaterial=bf(r,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ua),h.toneMapping=fn,h.autoClear=!1;const m=new $e({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Xt(new Ze,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ua),_=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;_s(i,A*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yi||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ma());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=da[(i-1)%da.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const f=[];let A=0;for(let w=0;w<zn;++w){const V=w/_,y=Math.exp(-V*V/2);f.push(y),w===0?A+=y:w<p&&(A+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],C=3*S*(i>v-mi?i-v+mi:0),R=4*(this._cubeSize-S);_s(e,C,R,3*S,2*S),l.setRenderTarget(e),l.render(u,xr)}}function Tf(s){const t=[],e=[],n=[];let i=s;const r=s-mi+1+ha.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-mi?l=ha[o-s+mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,A=new Float32Array(_*g*m),v=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,V=R>2?0:-1,y=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];A.set(y,_*g*R),v.set(d,p*g*R);const T=[R,R,R,R,R,R];S.set(T,f*g*R)}const C=new Me;C.setAttribute("position",new Ge(A,_)),C.setAttribute("uv",new Ge(v,p)),C.setAttribute("faceIndex",new Ge(S,f)),t.push(C),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pa(s,t,e){const n=new Hn(s,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bf(s,t,e){const n=new Float32Array(zn),i=new b(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ma(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ga(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function wf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Br||l===zr,h=l===yi||l===Mi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new fa(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new fa(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pf(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const A=m.array;_=m.version;for(let v=0,S=A.length;v<S;v+=3){const C=A[v+0],R=A[v+1],w=A[v+2];d.push(C,R,R,w,w,C)}}else if(g!==void 0){const A=g.array;_=g.version;for(let v=0,S=A.length/3-1;v<S;v+=3){const C=v+0,R=v+1,w=v+2;d.push(C,R,R,w,w,C)}}else return;const p=new(vl(d)?Tl:Al)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cf(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let f=0;for(let A=0;A<_;A++)f+=g[A];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function If(s,t){return s[0]-t[0]}function Df(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Nf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let O=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),C===!0&&(y=3);let T=h.attributes.position.count*y,F=1;T>t.maxTextureSize&&(F=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const W=new Float32Array(T*F*4*_),Q=new yl(W,T,F,_);Q.type=En,Q.needsUpdate=!0;const I=y*4;for(let k=0;k<_;k++){const $=R[k],q=w[k],K=V[k],j=T*F*4*k;for(let it=0;it<$.count;it++){const rt=it*I;v===!0&&(o.fromBufferAttribute($,it),W[j+rt+0]=o.x,W[j+rt+1]=o.y,W[j+rt+2]=o.z,W[j+rt+3]=0),S===!0&&(o.fromBufferAttribute(q,it),W[j+rt+4]=o.x,W[j+rt+5]=o.y,W[j+rt+6]=o.z,W[j+rt+7]=0),C===!0&&(o.fromBufferAttribute(K,it),W[j+rt+8]=o.x,W[j+rt+9]=o.y,W[j+rt+10]=o.z,W[j+rt+11]=K.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new ht(T,F)},r.set(h,p),h.addEventListener("dispose",O)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const A=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",A),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(Df);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(If);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const C=a[S],R=C[0],w=C[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+S)!==p[R]&&h.setAttribute("morphTarget"+S,p[R]),f&&h.getAttribute("morphNormal"+S)!==f[R]&&h.setAttribute("morphNormal"+S,f[R]),i[S]=w,A+=w):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Uf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ll extends Ce{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=Mn),n===void 0&&h===Ei&&(n=kn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Il=new Ce,Dl=new Ll(1,1);Dl.compareFunction=gl;const Nl=new yl,Ul=new vh,Ol=new Rl,_a=[],va=[],xa=new Float32Array(16),Sa=new Float32Array(9),ya=new Float32Array(4);function bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_a[i];if(r===void 0&&(r=new Float32Array(i),_a[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xs(s,t){let e=va[t];e===void 0&&(e=new Int32Array(t),va[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function kf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ya.set(n),s.uniformMatrix2fv(this.addr,!1,ya),ue(e,n)}}function Gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Sa.set(n),s.uniformMatrix3fv(this.addr,!1,Sa),ue(e,n)}}function Vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;xa.set(n),s.uniformMatrix4fv(this.addr,!1,xa),ue(e,n)}}function Hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Dl:Il;e.setTexture2D(t||r,i)}function Jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ul,i)}function Qf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ol,i)}function tp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nl,i)}function ep(s){switch(s){case 5126:return Of;case 35664:return Ff;case 35665:return Bf;case 35666:return zf;case 35674:return kf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Hf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return Yf;case 5125:return qf;case 36294:return Kf;case 36295:return $f;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return tp}}function np(s,t){s.uniform1fv(this.addr,t)}function ip(s,t){const e=bi(t,this.size,2);s.uniform2fv(this.addr,e)}function sp(s,t){const e=bi(t,this.size,3);s.uniform3fv(this.addr,e)}function rp(s,t){const e=bi(t,this.size,4);s.uniform4fv(this.addr,e)}function op(s,t){const e=bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ap(s,t){const e=bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function lp(s,t){const e=bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function cp(s,t){s.uniform1iv(this.addr,t)}function hp(s,t){s.uniform2iv(this.addr,t)}function up(s,t){s.uniform3iv(this.addr,t)}function dp(s,t){s.uniform4iv(this.addr,t)}function fp(s,t){s.uniform1uiv(this.addr,t)}function pp(s,t){s.uniform2uiv(this.addr,t)}function mp(s,t){s.uniform3uiv(this.addr,t)}function gp(s,t){s.uniform4uiv(this.addr,t)}function _p(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Il,r[o])}function vp(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ul,r[o])}function xp(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ol,r[o])}function Sp(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nl,r[o])}function yp(s){switch(s){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return op;case 35675:return ap;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Sp}}class Mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ep(e.type)}}class Ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yp(e.type)}}class Ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function Ma(s,t){s.seq.push(t),s.map[t.id]=t}function Tp(s,t,e){const n=s.name,i=n.length;for(Er.lastIndex=0;;){const r=Er.exec(n),o=Er.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ma(e,c===void 0?new Mp(a,s,t):new Ep(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ap(a),Ma(e,u)),e=u}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Tp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ea(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const bp=37297;let wp=0;function Rp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Pp(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===Os&&e===Us?n="LinearDisplayP3ToLinearSRGB":t===Us&&e===Os&&(n="LinearSRGBToLinearDisplayP3"),s){case pn:case Hs:return[n,"LinearTransferOETF"];case ge:case Zr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Aa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Rp(s.getShaderSource(t),o)}else return i}function Cp(s,t){const e=Pp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lp(s,t){let e;switch(t){case Pc:e="Linear";break;case Cc:e="Reinhard";break;case Lc:e="OptimizedCineon";break;case Fr:e="ACESFilmic";break;case Dc:e="AgX";break;case Ic:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ip(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Dp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gi).join(`
`)}function Np(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Up(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function gi(s){return s!==""}function Ta(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ba(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(s){return s.replace(Op,Bp)}const Fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bp(s,t){let e=Bt[t];if(e===void 0){const n=Fp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hr(e)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(s){return s.replace(zp,kp)}function kp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ra(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ic?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rl:t="ENVMAP_BLENDING_MULTIPLY";break;case wc:t="ENVMAP_BLENDING_MIX";break;case Rc:t="ENVMAP_BLENDING_ADD";break}return t}function Xp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gp(e),c=Vp(e),h=Hp(e),u=Wp(e),d=Xp(e),m=e.isWebGL2?"":Ip(e),g=Dp(e),_=Np(r),p=i.createProgram();let f,A,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gi).join(`
`),f.length>0&&(f+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gi).join(`
`),A.length>0&&(A+=`
`)):(f=[Ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),A=[m,Ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Cp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),o=Hr(o),o=Ta(o,e),o=ba(o,e),a=Hr(a),a=Ta(a,e),a=ba(a,e),o=wa(o),a=wa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const S=v+f+o,C=v+A+a,R=Ea(i,i.VERTEX_SHADER,S),w=Ea(i,i.FRAGMENT_SHADER,C);i.attachShader(p,R),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function V(W){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(w).trim();let k=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,R,w);else{const q=Aa(i,R,"vertex"),K=Aa(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+q+`
`+K)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||O==="")&&($=!1);$&&(W.diagnostics={runnable:k,programLog:Q,vertexShader:{log:I,prefix:f},fragmentShader:{log:O,prefix:A}})}i.deleteShader(R),i.deleteShader(w),y=new Ls(i,p),T=Up(i,p)}let y;this.getUniforms=function(){return y===void 0&&V(this),y};let T;this.getAttributes=function(){return T===void 0&&V(this),T};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,bp)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let qp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $p(t),e.set(t,n)),n}}class $p{constructor(t){this.id=qp++,this.code=t,this.usedTimes=0}}function Zp(s,t,e,n,i,r,o){const a=new Ml,l=new Kp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,T,F,W,Q){const I=W.fog,O=Q.geometry,k=y.isMeshStandardMaterial?W.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),q=$&&$.mapping===Vs?$.image.height:null,K=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=j!==void 0?j.length:0;let rt=0;O.morphAttributes.position!==void 0&&(rt=1),O.morphAttributes.normal!==void 0&&(rt=2),O.morphAttributes.color!==void 0&&(rt=3);let H,Z,ft,St;if(K){const Ee=Qe[K];H=Ee.vertexShader,Z=Ee.fragmentShader}else H=y.vertexShader,Z=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const gt=s.getRenderTarget(),Tt=Q.isInstancedMesh===!0,Pt=Q.isBatchedMesh===!0,xt=!!y.map,Ct=!!y.matcap,P=!!$,ot=!!y.aoMap,Y=!!y.lightMap,st=!!y.bumpMap,X=!!y.normalMap,Et=!!y.displacementMap,pt=!!y.emissiveMap,M=!!y.metalnessMap,x=!!y.roughnessMap,U=y.anisotropy>0,nt=y.clearcoat>0,tt=y.iridescence>0,J=y.sheen>0,yt=y.transmission>0,ct=U&&!!y.anisotropyMap,_t=nt&&!!y.clearcoatMap,bt=nt&&!!y.clearcoatNormalMap,Ut=nt&&!!y.clearcoatRoughnessMap,et=tt&&!!y.iridescenceMap,Yt=tt&&!!y.iridescenceThicknessMap,Ht=J&&!!y.sheenColorMap,Dt=J&&!!y.sheenRoughnessMap,At=!!y.specularMap,vt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,Kt=yt&&!!y.transmissionMap,re=yt&&!!y.thicknessMap,kt=!!y.gradientMap,at=!!y.alphaMap,L=y.alphaTest>0,ut=!!y.alphaHash,dt=!!y.extensions,Lt=!!O.attributes.uv1,wt=!!O.attributes.uv2,Zt=!!O.attributes.uv3;let jt=fn;return y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:Z,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pt,instancing:Tt,instancingColor:Tt&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:pn,map:xt,matcap:Ct,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:Y,bumpMap:st,normalMap:X,displacementMap:d&&Et,emissiveMap:pt,normalMapObjectSpace:X&&y.normalMapType===Xc,normalMapTangentSpace:X&&y.normalMapType===ml,metalnessMap:M,roughnessMap:x,anisotropy:U,anisotropyMap:ct,clearcoat:nt,clearcoatMap:_t,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ut,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:Yt,sheen:J,sheenColorMap:Ht,sheenRoughnessMap:Dt,specularMap:At,specularColorMap:vt,specularIntensityMap:Ft,transmission:yt,transmissionMap:Kt,thicknessMap:re,gradientMap:kt,opaque:y.transparent===!1&&y.blending===vi,alphaMap:at,alphaTest:L,alphaHash:ut,combine:y.combine,mapUv:xt&&_(y.map.channel),aoMapUv:ot&&_(y.aoMap.channel),lightMapUv:Y&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:Et&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:M&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:At&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ft&&_(y.specularIntensityMap.channel),transmissionMapUv:Kt&&_(y.transmissionMap.channel),thicknessMapUv:re&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(X||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:wt,vertexUv3s:Zt,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(xt||at),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ye,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:dt&&y.extensions.derivatives===!0,extensionFragDepth:dt&&y.extensions.fragDepth===!0,extensionDrawBuffers:dt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(A(T,y),v(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function A(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const T=g[y.type];let F;if(T){const W=Qe[T];F=Lh.clone(W.uniforms)}else F=y.uniforms;return F}function C(y,T){let F;for(let W=0,Q=c.length;W<Q;W++){const I=c[W];if(I.cacheKey===T){F=I,++F.usedTimes;break}}return F===void 0&&(F=new Yp(s,T,y,r),c.push(F)),F}function R(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:V}}function jp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ca(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Jp),n.length>1&&n.sort(d||Pa),i.length>1&&i.sort(d||Pa)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Qp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ca,s.set(n,[o])):i>=r.length?(o=new Ca,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function tm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Wt};break;case"SpotLight":e={position:new b,direction:new b,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function em(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let nm=0;function im(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sm(s,t){const e=new tm,n=em(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new b);const r=new b,o=new ee,a=new ee;function l(h,u){let d=0,m=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,p=0,f=0,A=0,v=0,S=0,C=0,R=0,w=0,V=0,y=0;h.sort(im);const T=u===!0?Math.PI:1;for(let W=0,Q=h.length;W<Q;W++){const I=h[W],O=I.color,k=I.intensity,$=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*k*T,m+=O.g*k*T,g+=O.b*k*T;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],k);y++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const j=I.shadow,it=n.get(I);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=K,_++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(O).multiplyScalar(k*T),K.distance=$,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[f]=K;const j=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,j.updateMatrices(I),I.castShadow&&V++),i.spotLightMatrix[f]=j.matrix,I.castShadow){const it=n.get(I);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[f]=it,i.spotShadowMap[f]=q,R++}f++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(O).multiplyScalar(k),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=K,A++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*T),K.distance=I.distance,K.decay=I.decay,I.castShadow){const j=I.shadow,it=n.get(I);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=I.shadow.matrix,C++}i.point[p]=K,p++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(k*T),K.groundColor.copy(I.groundColor).multiplyScalar(k*T),i.hemi[v]=K,v++}}A>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==f||F.rectAreaLength!==A||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==C||F.numSpotShadows!==R||F.numSpotMaps!==w||F.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+w-V,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=y,F.directionalLength=_,F.pointLength=p,F.spotLength=f,F.rectAreaLength=A,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=C,F.numSpotShadows=R,F.numSpotMaps=w,F.numLightProbes=y,i.version=nm++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let A=0,v=h.length;A<v;A++){const S=h[A];if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function La(s,t){const e=new sm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rm(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new La(s,t),e.set(r,[l])):o>=a.length?(l=new La(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class om extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class am extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`;function hm(s,t,e){let n=new Qr;const i=new ht,r=new ht,o=new me,a=new om({depthPacking:Wc}),l=new am,c={},h=e.maxTextureSize,u={[Rn]:Pe,[Pe]:Rn,[Ye]:Ye},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let f=this.type;this.render=function(R,w,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Tn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=f!==hn&&this.type===hn,I=f===hn&&this.type!==hn;for(let O=0,k=R.length;O<k;O++){const $=R[O],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const K=q.getFrameExtents();if(i.multiply(K),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,q.mapSize.y=r.y)),q.map===null||Q===!0||I===!0){const it=this.type!==hn?{minFilter:ye,magFilter:ye}:{};q.map!==null&&q.map.dispose(),q.map=new Hn(i.x,i.y,it),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const j=q.getViewportCount();for(let it=0;it<j;it++){const rt=q.getViewport(it);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),W.viewport(o),q.updateMatrices($,it),n=q.getFrustum(),S(w,V,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===hn&&A(q,V),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(y,T,F)};function A(R,w){const V=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,V,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,V,m,_,null)}function v(R,w,V,y){let T=null;const F=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)T=F;else if(T=V.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=T.uuid,Q=w.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let O=I[Q];O===void 0&&(O=T.clone(),I[Q]=O,w.addEventListener("dispose",C)),T=O}if(T.visible=w.visible,T.wireframe=w.wireframe,y===hn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=s.properties.get(T);W.light=V}return T}function S(R,w,V,y,T){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===hn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);const Q=t.update(R),I=R.material;if(Array.isArray(I)){const O=Q.groups;for(let k=0,$=O.length;k<$;k++){const q=O[k],K=I[q.materialIndex];if(K&&K.visible){const j=v(R,K,y,T);R.onBeforeShadow(s,R,w,V,Q,j,q),s.renderBufferDirect(V,null,Q,j,R,q),R.onAfterShadow(s,R,w,V,Q,j,q)}}}else if(I.visible){const O=v(R,I,y,T);R.onBeforeShadow(s,R,w,V,Q,O,null),s.renderBufferDirect(V,null,Q,O,R,null),R.onAfterShadow(s,R,w,V,Q,O,null)}}const W=R.children;for(let Q=0,I=W.length;Q<I;Q++)S(W[Q],w,V,y,T)}function C(R){R.target.removeEventListener("dispose",C);for(const V in c){const y=c[V],T=R.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function um(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const ut=new me;let dt=null;const Lt=new me(0,0,0,0);return{setMask:function(wt){dt!==wt&&!L&&(s.colorMask(wt,wt,wt,wt),dt=wt)},setLocked:function(wt){L=wt},setClear:function(wt,Zt,jt,de,Ee){Ee===!0&&(wt*=de,Zt*=de,jt*=de),ut.set(wt,Zt,jt,de),Lt.equals(ut)===!1&&(s.clearColor(wt,Zt,jt,de),Lt.copy(ut))},reset:function(){L=!1,dt=null,Lt.set(-1,0,0,0)}}}function r(){let L=!1,ut=null,dt=null,Lt=null;return{setTest:function(wt){wt?Pt(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(wt){ut!==wt&&!L&&(s.depthMask(wt),ut=wt)},setFunc:function(wt){if(dt!==wt){switch(wt){case Sc:s.depthFunc(s.NEVER);break;case yc:s.depthFunc(s.ALWAYS);break;case Mc:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Ec:s.depthFunc(s.EQUAL);break;case Ac:s.depthFunc(s.GEQUAL);break;case Tc:s.depthFunc(s.GREATER);break;case bc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=wt}},setLocked:function(wt){L=wt},setClear:function(wt){Lt!==wt&&(s.clearDepth(wt),Lt=wt)},reset:function(){L=!1,ut=null,dt=null,Lt=null}}}function o(){let L=!1,ut=null,dt=null,Lt=null,wt=null,Zt=null,jt=null,de=null,Ee=null;return{setTest:function(Jt){L||(Jt?Pt(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!L&&(s.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,Ae,je){(dt!==Jt||Lt!==Ae||wt!==je)&&(s.stencilFunc(Jt,Ae,je),dt=Jt,Lt=Ae,wt=je)},setOp:function(Jt,Ae,je){(Zt!==Jt||jt!==Ae||de!==je)&&(s.stencilOp(Jt,Ae,je),Zt=Jt,jt=Ae,de=je)},setLocked:function(Jt){L=Jt},setClear:function(Jt){Ee!==Jt&&(s.clearStencil(Jt),Ee=Jt)},reset:function(){L=!1,ut=null,dt=null,Lt=null,wt=null,Zt=null,jt=null,de=null,Ee=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,A=null,v=null,S=null,C=null,R=null,w=null,V=null,y=new Wt(0,0,0),T=0,F=!1,W=null,Q=null,I=null,O=null,k=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=K>=2);let it=null,rt={};const H=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ft=new me().fromArray(H),St=new me().fromArray(Z);function gt(L,ut,dt,Lt){const wt=new Uint8Array(4),Zt=s.createTexture();s.bindTexture(L,Zt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<dt;jt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(ut+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Zt}const Tt={};Tt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(s.DEPTH_TEST),l.setFunc(Ds),pt(!1),M(uo),Pt(s.CULL_FACE),X(Tn);function Pt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function xt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ct(L,ut){return m[L]!==ut?(s.bindFramebuffer(L,ut),m[L]=ut,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ut),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function P(L,ut){let dt=_,Lt=!1;if(L)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),L.isWebGLMultipleRenderTargets){const wt=L.texture;if(dt.length!==wt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Zt=0,jt=wt.length;Zt<jt;Zt++)dt[Zt]=s.COLOR_ATTACHMENT0+Zt;dt.length=wt.length,Lt=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Y={[Bn]:s.FUNC_ADD,[rc]:s.FUNC_SUBTRACT,[oc]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[go]=s.MIN,Y[_o]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Y[go]=L.MIN_EXT,Y[_o]=L.MAX_EXT)}const st={[ac]:s.ZERO,[lc]:s.ONE,[cc]:s.SRC_COLOR,[Ur]:s.SRC_ALPHA,[mc]:s.SRC_ALPHA_SATURATE,[fc]:s.DST_COLOR,[uc]:s.DST_ALPHA,[hc]:s.ONE_MINUS_SRC_COLOR,[Or]:s.ONE_MINUS_SRC_ALPHA,[pc]:s.ONE_MINUS_DST_COLOR,[dc]:s.ONE_MINUS_DST_ALPHA,[gc]:s.CONSTANT_COLOR,[_c]:s.ONE_MINUS_CONSTANT_COLOR,[vc]:s.CONSTANT_ALPHA,[xc]:s.ONE_MINUS_CONSTANT_ALPHA};function X(L,ut,dt,Lt,wt,Zt,jt,de,Ee,Jt){if(L===Tn){f===!0&&(xt(s.BLEND),f=!1);return}if(f===!1&&(Pt(s.BLEND),f=!0),L!==sc){if(L!==A||Jt!==F){if((v!==Bn||R!==Bn)&&(s.blendEquation(s.FUNC_ADD),v=Bn,R=Bn),Jt)switch(L){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fo:s.blendFunc(s.ONE,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,w=null,V=null,y.set(0,0,0),T=0,A=L,F=Jt}return}wt=wt||ut,Zt=Zt||dt,jt=jt||Lt,(ut!==v||wt!==R)&&(s.blendEquationSeparate(Y[ut],Y[wt]),v=ut,R=wt),(dt!==S||Lt!==C||Zt!==w||jt!==V)&&(s.blendFuncSeparate(st[dt],st[Lt],st[Zt],st[jt]),S=dt,C=Lt,w=Zt,V=jt),(de.equals(y)===!1||Ee!==T)&&(s.blendColor(de.r,de.g,de.b,Ee),y.copy(de),T=Ee),A=L,F=!1}function Et(L,ut){L.side===Ye?xt(s.CULL_FACE):Pt(s.CULL_FACE);let dt=L.side===Pe;ut&&(dt=!dt),pt(dt),L.blending===vi&&L.transparent===!1?X(Tn):X(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Lt=L.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){W!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),W=L)}function M(L){L!==tc?(Pt(s.CULL_FACE),L!==Q&&(L===uo?s.cullFace(s.BACK):L===ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),Q=L}function x(L){L!==I&&(q&&s.lineWidth(L),I=L)}function U(L,ut,dt){L?(Pt(s.POLYGON_OFFSET_FILL),(O!==ut||k!==dt)&&(s.polygonOffset(ut,dt),O=ut,k=dt)):xt(s.POLYGON_OFFSET_FILL)}function nt(L){L?Pt(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function tt(L){L===void 0&&(L=s.TEXTURE0+$-1),it!==L&&(s.activeTexture(L),it=L)}function J(L,ut,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+$-1:dt=it);let Lt=rt[dt];Lt===void 0&&(Lt={type:void 0,texture:void 0},rt[dt]=Lt),(Lt.type!==L||Lt.texture!==ut)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(L,ut||Tt[L]),Lt.type=L,Lt.texture=ut)}function yt(){const L=rt[it];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){ft.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function Kt(L){St.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),St.copy(L))}function re(L,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Lt=dt.get(L);Lt===void 0&&(Lt=s.getUniformBlockIndex(ut,L.name),dt.set(L,Lt))}function kt(L,ut){const Lt=u.get(ut).get(L);h.get(ut)!==Lt&&(s.uniformBlockBinding(ut,Lt,L.__bindingPointIndex),h.set(ut,Lt))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,rt={},m={},g=new WeakMap,_=[],p=null,f=!1,A=null,v=null,S=null,C=null,R=null,w=null,V=null,y=new Wt(0,0,0),T=0,F=!1,W=null,Q=null,I=null,O=null,k=null,ft.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:xt,bindFramebuffer:Ct,drawBuffers:P,useProgram:ot,setBlending:X,setMaterial:Et,setFlipSided:pt,setCullFace:M,setLineWidth:x,setPolygonOffset:U,setScissorTest:nt,activeTexture:tt,bindTexture:J,unbindTexture:yt,compressedTexImage2D:ct,compressedTexImage3D:_t,texImage2D:At,texImage3D:vt,updateUBOMapping:re,uniformBlockBinding:kt,texStorage2D:Ht,texStorage3D:Dt,texSubImage2D:bt,texSubImage3D:Ut,compressedTexSubImage2D:et,compressedTexSubImage3D:Yt,scissor:Ft,viewport:Kt,reset:at}}function dm(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):zs("canvas")}function _(M,x,U,nt){let tt=1;if((M.width>nt||M.height>nt)&&(tt=nt/Math.max(M.width,M.height)),tt<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const J=x?Bs:Math.floor,yt=J(tt*M.width),ct=J(tt*M.height);u===void 0&&(u=g(yt,ct));const _t=U?g(yt,ct):u;return _t.width=yt,_t.height=ct,_t.getContext("2d").drawImage(M,0,0,yt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+yt+"x"+ct+")."),_t}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Vr(M.width)&&Vr(M.height)}function f(M){return a?!1:M.wrapS!==qe||M.wrapT!==qe||M.minFilter!==ye&&M.minFilter!==Fe}function A(M,x){return M.generateMipmaps&&x&&M.minFilter!==ye&&M.minFilter!==Fe}function v(M){s.generateMipmap(M)}function S(M,x,U,nt,tt=!1){if(a===!1)return x;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=x;if(x===s.RED&&(U===s.FLOAT&&(J=s.R32F),U===s.HALF_FLOAT&&(J=s.R16F),U===s.UNSIGNED_BYTE&&(J=s.R8)),x===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(J=s.R8UI),U===s.UNSIGNED_SHORT&&(J=s.R16UI),U===s.UNSIGNED_INT&&(J=s.R32UI),U===s.BYTE&&(J=s.R8I),U===s.SHORT&&(J=s.R16I),U===s.INT&&(J=s.R32I)),x===s.RG&&(U===s.FLOAT&&(J=s.RG32F),U===s.HALF_FLOAT&&(J=s.RG16F),U===s.UNSIGNED_BYTE&&(J=s.RG8)),x===s.RGBA){const yt=tt?Ns:$t.getTransfer(nt);U===s.FLOAT&&(J=s.RGBA32F),U===s.HALF_FLOAT&&(J=s.RGBA16F),U===s.UNSIGNED_BYTE&&(J=yt===te?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function C(M,x,U){return A(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==ye&&M.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===ye||M===vo||M===Cs?s.NEAREST:s.LINEAR}function w(M){const x=M.target;x.removeEventListener("dispose",w),y(x),x.isVideoTexture&&h.delete(x)}function V(M){const x=M.target;x.removeEventListener("dispose",V),F(x)}function y(M){const x=n.get(M);if(x.__webglInit===void 0)return;const U=M.source,nt=d.get(U);if(nt){const tt=nt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(M),Object.keys(nt).length===0&&d.delete(U)}n.remove(M)}function T(M){const x=n.get(M);s.deleteTexture(x.__webglTexture);const U=M.source,nt=d.get(U);delete nt[x.__cacheKey],o.memory.textures--}function F(M){const x=M.texture,U=n.get(M),nt=n.get(x);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(U.__webglFramebuffer[tt]))for(let J=0;J<U.__webglFramebuffer[tt].length;J++)s.deleteFramebuffer(U.__webglFramebuffer[tt][J]);else s.deleteFramebuffer(U.__webglFramebuffer[tt]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[tt])}else{if(Array.isArray(U.__webglFramebuffer))for(let tt=0;tt<U.__webglFramebuffer.length;tt++)s.deleteFramebuffer(U.__webglFramebuffer[tt]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let tt=0;tt<U.__webglColorRenderbuffer.length;tt++)U.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[tt]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let tt=0,J=x.length;tt<J;tt++){const yt=n.get(x[tt]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(x[tt])}n.remove(x),n.remove(M)}let W=0;function Q(){W=0}function I(){const M=W;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),W+=1,M}function O(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function k(M,x){const U=n.get(M);if(M.isVideoTexture&&Et(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const nt=M.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(U,M,x);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+x)}function $(M,x){const U=n.get(M);if(M.version>0&&U.__version!==M.version){ft(U,M,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+x)}function q(M,x){const U=n.get(M);if(M.version>0&&U.__version!==M.version){ft(U,M,x);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+x)}function K(M,x){const U=n.get(M);if(M.version>0&&U.__version!==M.version){St(U,M,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+x)}const j={[Gi]:s.REPEAT,[qe]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},it={[ye]:s.NEAREST,[vo]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},rt={[Yc]:s.NEVER,[Jc]:s.ALWAYS,[qc]:s.LESS,[gl]:s.LEQUAL,[Kc]:s.EQUAL,[jc]:s.GEQUAL,[$c]:s.GREATER,[Zc]:s.NOTEQUAL};function H(M,x,U){if(U?(s.texParameteri(M,s.TEXTURE_WRAP_S,j[x.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,j[x.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,j[x.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,it[x.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,it[x.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==qe||x.wrapT!==qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,R(x.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==ye&&x.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ye||x.minFilter!==Cs&&x.minFilter!==Vi||x.type===En&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(M,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(M,x){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",w));const nt=x.source;let tt=d.get(nt);tt===void 0&&(tt={},d.set(nt,tt));const J=O(x);if(J!==M.__cacheKey){tt[J]===void 0&&(tt[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),tt[J].usedTimes++;const yt=tt[M.__cacheKey];yt!==void 0&&(tt[M.__cacheKey].usedTimes--,yt.usedTimes===0&&T(x)),M.__cacheKey=J,M.__webglTexture=tt[J].texture}return U}function ft(M,x,U){let nt=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=s.TEXTURE_3D);const tt=Z(M,x),J=x.source;e.bindTexture(nt,M.__webglTexture,s.TEXTURE0+U);const yt=n.get(J);if(J.version!==yt.__version||tt===!0){e.activeTexture(s.TEXTURE0+U);const ct=$t.getPrimaries($t.workingColorSpace),_t=x.colorSpace===ke?null:$t.getPrimaries(x.colorSpace),bt=x.colorSpace===ke||ct===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ut=f(x)&&p(x.image)===!1;let et=_(x.image,Ut,!1,i.maxTextureSize);et=pt(x,et);const Yt=p(et)||a,Ht=r.convert(x.format,x.colorSpace);let Dt=r.convert(x.type),At=S(x.internalFormat,Ht,Dt,x.colorSpace,x.isVideoTexture);H(nt,x,Yt);let vt;const Ft=x.mipmaps,Kt=a&&x.isVideoTexture!==!0&&At!==fl,re=yt.__version===void 0||tt===!0,kt=C(x,et,Yt);if(x.isDepthTexture)At=s.DEPTH_COMPONENT,a?x.type===En?At=s.DEPTH_COMPONENT32F:x.type===Mn?At=s.DEPTH_COMPONENT24:x.type===kn?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:x.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Gn&&At===s.DEPTH_COMPONENT&&x.type!==$r&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Dt=r.convert(x.type)),x.format===Ei&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,x.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=kn,Dt=r.convert(x.type))),re&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,At,et.width,et.height,0,Ht,Dt,null));else if(x.isDataTexture)if(Ft.length>0&&Yt){Kt&&re&&e.texStorage2D(s.TEXTURE_2D,kt,At,Ft[0].width,Ft[0].height);for(let at=0,L=Ft.length;at<L;at++)vt=Ft[at],Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Ht,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,at,At,vt.width,vt.height,0,Ht,Dt,vt.data);x.generateMipmaps=!1}else Kt?(re&&e.texStorage2D(s.TEXTURE_2D,kt,At,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,Ht,Dt,et.data)):e.texImage2D(s.TEXTURE_2D,0,At,et.width,et.height,0,Ht,Dt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,At,Ft[0].width,Ft[0].height,et.depth);for(let at=0,L=Ft.length;at<L;at++)vt=Ft[at],x.format!==Ke?Ht!==null?Kt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,et.depth,Ht,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,At,vt.width,vt.height,et.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,et.depth,Ht,Dt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,At,vt.width,vt.height,et.depth,0,Ht,Dt,vt.data)}else{Kt&&re&&e.texStorage2D(s.TEXTURE_2D,kt,At,Ft[0].width,Ft[0].height);for(let at=0,L=Ft.length;at<L;at++)vt=Ft[at],x.format!==Ke?Ht!==null?Kt?e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Ht,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,At,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Ht,Dt,vt.data):e.texImage2D(s.TEXTURE_2D,at,At,vt.width,vt.height,0,Ht,Dt,vt.data)}else if(x.isDataArrayTexture)Kt?(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,At,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Ht,Dt,et.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,Ht,Dt,et.data);else if(x.isData3DTexture)Kt?(re&&e.texStorage3D(s.TEXTURE_3D,kt,At,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Ht,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,Ht,Dt,et.data);else if(x.isFramebufferTexture){if(re)if(Kt)e.texStorage2D(s.TEXTURE_2D,kt,At,et.width,et.height);else{let at=et.width,L=et.height;for(let ut=0;ut<kt;ut++)e.texImage2D(s.TEXTURE_2D,ut,At,at,L,0,Ht,Dt,null),at>>=1,L>>=1}}else if(Ft.length>0&&Yt){Kt&&re&&e.texStorage2D(s.TEXTURE_2D,kt,At,Ft[0].width,Ft[0].height);for(let at=0,L=Ft.length;at<L;at++)vt=Ft[at],Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,Ht,Dt,vt):e.texImage2D(s.TEXTURE_2D,at,At,Ht,Dt,vt);x.generateMipmaps=!1}else Kt?(re&&e.texStorage2D(s.TEXTURE_2D,kt,At,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Dt,et)):e.texImage2D(s.TEXTURE_2D,0,At,Ht,Dt,et);A(x,Yt)&&v(nt),yt.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function St(M,x,U){if(x.image.length!==6)return;const nt=Z(M,x),tt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+U);const J=n.get(tt);if(tt.version!==J.__version||nt===!0){e.activeTexture(s.TEXTURE0+U);const yt=$t.getPrimaries($t.workingColorSpace),ct=x.colorSpace===ke?null:$t.getPrimaries(x.colorSpace),_t=x.colorSpace===ke||yt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ut=x.image[0]&&x.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!bt&&!Ut?et[at]=_(x.image[at],!1,!0,i.maxCubemapSize):et[at]=Ut?x.image[at].image:x.image[at],et[at]=pt(x,et[at]);const Yt=et[0],Ht=p(Yt)||a,Dt=r.convert(x.format,x.colorSpace),At=r.convert(x.type),vt=S(x.internalFormat,Dt,At,x.colorSpace),Ft=a&&x.isVideoTexture!==!0,Kt=J.__version===void 0||nt===!0;let re=C(x,Yt,Ht);H(s.TEXTURE_CUBE_MAP,x,Ht);let kt;if(bt){Ft&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,re,vt,Yt.width,Yt.height);for(let at=0;at<6;at++){kt=et[at].mipmaps;for(let L=0;L<kt.length;L++){const ut=kt[L];x.format!==Ke?Dt!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ut.width,ut.height,Dt,At,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,vt,ut.width,ut.height,0,Dt,At,ut.data)}}}else{kt=x.mipmaps,Ft&&Kt&&(kt.length>0&&re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,re,vt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(Ut){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et[at].width,et[at].height,Dt,At,et[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,et[at].width,et[at].height,0,Dt,At,et[at].data);for(let L=0;L<kt.length;L++){const dt=kt[L].image[at].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,dt.width,dt.height,Dt,At,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,vt,dt.width,dt.height,0,Dt,At,dt.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt,At,et[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,Dt,At,et[at]);for(let L=0;L<kt.length;L++){const ut=kt[L];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,Dt,At,ut.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,vt,Dt,At,ut.image[at])}}}A(x,Ht)&&v(s.TEXTURE_CUBE_MAP),J.__version=tt.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function gt(M,x,U,nt,tt,J){const yt=r.convert(U.format,U.colorSpace),ct=r.convert(U.type),_t=S(U.internalFormat,yt,ct,U.colorSpace);if(!n.get(x).__hasExternalTextures){const Ut=Math.max(1,x.width>>J),et=Math.max(1,x.height>>J);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,_t,Ut,et,x.depth,0,yt,ct,null):e.texImage2D(tt,J,_t,Ut,et,0,yt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,M),X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,n.get(U).__webglTexture,0,st(x)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,n.get(U).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(M,x,U){if(s.bindRenderbuffer(s.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let nt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||X(x)){const tt=x.depthTexture;tt&&tt.isDepthTexture&&(tt.type===En?nt=s.DEPTH_COMPONENT32F:tt.type===Mn&&(nt=s.DEPTH_COMPONENT24));const J=st(x);X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,nt,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,nt,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const nt=st(x);U&&X(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{const nt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let tt=0;tt<nt.length;tt++){const J=nt[tt],yt=r.convert(J.format,J.colorSpace),ct=r.convert(J.type),_t=S(J.internalFormat,yt,ct,J.colorSpace),bt=st(x);U&&X(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,_t,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,_t,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,_t,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const nt=n.get(x.depthTexture).__webglTexture,tt=st(x);if(x.depthTexture.format===Gn)X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Ei)X(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function xt(M){const x=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,M)}else if(U){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]=s.createRenderbuffer(),Tt(x.__webglDepthbuffer[nt],M,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Tt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(M,x,U){const nt=n.get(M);x!==void 0&&gt(nt.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&xt(M)}function P(M){const x=M.texture,U=n.get(M),nt=n.get(x);M.addEventListener("dispose",V),M.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=x.version,o.memory.textures++);const tt=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,yt=p(M)||a;if(tt){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let _t=0;_t<x.mipmaps.length;_t++)U.__webglFramebuffer[ct][_t]=s.createFramebuffer()}else U.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)U.__webglFramebuffer[ct]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(J)if(i.drawBuffers){const ct=M.texture;for(let _t=0,bt=ct.length;_t<bt;_t++){const Ut=n.get(ct[_t]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&X(M)===!1){const ct=J?x:[x];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const bt=ct[_t];U.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[_t]);const Ut=r.convert(bt.format,bt.colorSpace),et=r.convert(bt.type),Yt=S(bt.internalFormat,Ut,et,bt.colorSpace,M.isXRRenderTarget===!0),Ht=st(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Yt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,U.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),H(s.TEXTURE_CUBE_MAP,x,yt);for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(U.__webglFramebuffer[ct][_t],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else gt(U.__webglFramebuffer[ct],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);A(x,yt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const ct=M.texture;for(let _t=0,bt=ct.length;_t<bt;_t++){const Ut=ct[_t],et=n.get(Ut);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),H(s.TEXTURE_2D,Ut,yt),gt(U.__webglFramebuffer,M,Ut,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),A(Ut,yt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ct=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),H(ct,x,yt),a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(U.__webglFramebuffer[_t],M,x,s.COLOR_ATTACHMENT0,ct,_t);else gt(U.__webglFramebuffer,M,x,s.COLOR_ATTACHMENT0,ct,0);A(x,yt)&&v(ct),e.unbindTexture()}M.depthBuffer&&xt(M)}function ot(M){const x=p(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0,tt=U.length;nt<tt;nt++){const J=U[nt];if(A(J,x)){const yt=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(J).__webglTexture;e.bindTexture(yt,ct),v(yt),e.unbindTexture()}}}function Y(M){if(a&&M.samples>0&&X(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,nt=M.height;let tt=s.COLOR_BUFFER_BIT;const J=[],yt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(M),_t=M.isWebGLMultipleRenderTargets===!0;if(_t)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){J.push(s.COLOR_ATTACHMENT0+bt),M.depthBuffer&&J.push(yt);const Ut=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ut===!1&&(M.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]),Ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),_t){const et=n.get(x[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,U,nt,0,0,U,nt,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]);const Ut=n.get(x[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function st(M){return Math.min(i.maxSamples,M.samples)}function X(M){const x=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(M){const x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function pt(M,x){const U=M.colorSpace,nt=M.format,tt=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Gr||U!==pn&&U!==ke&&($t.getTransfer(U)===te?a===!1?t.has("EXT_sRGB")===!0&&nt===Ke?(M.format=Gr,M.minFilter=Fe,M.generateMipmaps=!1):x=xl.sRGBToLinear(x):(nt!==Ke||tt!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ct,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=X}function fm(s,t,e){const n=e.isWebGL2;function i(r,o=ke){let a;const l=$t.getTransfer(o);if(r===bn)return s.UNSIGNED_BYTE;if(r===ll)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Uc)return s.BYTE;if(r===Oc)return s.SHORT;if(r===$r)return s.UNSIGNED_SHORT;if(r===al)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===En)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fc)return s.ALPHA;if(r===Ke)return s.RGBA;if(r===Bc)return s.LUMINANCE;if(r===zc)return s.LUMINANCE_ALPHA;if(r===Gn)return s.DEPTH_COMPONENT;if(r===Ei)return s.DEPTH_STENCIL;if(r===Gr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===kc)return s.RED;if(r===hl)return s.RED_INTEGER;if(r===Gc)return s.RG;if(r===ul)return s.RG_INTEGER;if(r===dl)return s.RGBA_INTEGER;if(r===js||r===Js||r===Qs||r===tr)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xo||r===So||r===yo||r===Mo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===So)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Eo||r===Ao)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Eo)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ao)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===To||r===bo||r===wo||r===Ro||r===Po||r===Co||r===Lo||r===Io||r===Do||r===No||r===Uo||r===Oo||r===Fo||r===Bo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===To)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ro)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Po)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Co)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Io)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Do)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===No)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===er||r===zo||r===ko)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===er)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ko)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vc||r===Go||r===Vo||r===Ho)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===er)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Go)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ho)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class pm extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class An extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gm extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const A=[],v=[],S=new ht;let C=null;const R=new ze;R.layers.enable(1),R.viewport=new me;const w=new ze;w.layers.enable(2),w.viewport=new me;const V=[R,w],y=new pm;y.layers.enable(1),y.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=A[H];return Z===void 0&&(Z=new Ar,A[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=A[H];return Z===void 0&&(Z=new Ar,A[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=A[H];return Z===void 0&&(Z=new Ar,A[H]=Z),Z.getHandSpace()};function W(H){const Z=v.indexOf(H.inputSource);if(Z===-1)return;const ft=A[Z];ft!==void 0&&(ft.update(H.inputSource,H.frame,c||o),ft.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",I);for(let H=0;H<A.length;H++){const Z=v[H];Z!==null&&(v[H]=null,A[H].disconnect(Z))}T=null,F=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ft=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Ei:Gn,ft=_.stencil?kn:Mn);const gt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Hn(d.textureWidth,d.textureHeight,{format:Ke,type:bn,depthTexture:new Ll(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Tt=t.properties.get(f);Tt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(H){for(let Z=0;Z<H.removed.length;Z++){const ft=H.removed[Z],St=v.indexOf(ft);St>=0&&(v[St]=null,A[St].disconnect(ft))}for(let Z=0;Z<H.added.length;Z++){const ft=H.added[Z];let St=v.indexOf(ft);if(St===-1){for(let Tt=0;Tt<A.length;Tt++)if(Tt>=v.length){v.push(ft),St=Tt;break}else if(v[Tt]===null){v[Tt]=ft,St=Tt;break}if(St===-1)break}const gt=A[St];gt&&gt.connect(ft)}}const O=new b,k=new b;function $(H,Z,ft){O.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ft.matrixWorld);const St=O.distanceTo(k),gt=Z.projectionMatrix.elements,Tt=ft.projectionMatrix.elements,Pt=gt[14]/(gt[10]-1),xt=gt[14]/(gt[10]+1),Ct=(gt[9]+1)/gt[5],P=(gt[9]-1)/gt[5],ot=(gt[8]-1)/gt[0],Y=(Tt[8]+1)/Tt[0],st=Pt*ot,X=Pt*Y,Et=St/(-ot+Y),pt=Et*-ot;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(pt),H.translateZ(Et),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const M=Pt+Et,x=xt+Et,U=st-pt,nt=X+(St-pt),tt=Ct*xt/x*M,J=P*xt/x*M;H.projectionMatrix.makePerspective(U,nt,tt,J,M,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;y.near=w.near=R.near=H.near,y.far=w.far=R.far=H.far,(T!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,F=y.far);const Z=H.parent,ft=y.cameras;q(y,Z);for(let St=0;St<ft.length;St++)q(ft[St],Z);ft.length===2?$(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),K(H,y,Z)};function K(H,Z,ft){ft===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ft.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Wi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let j=null;function it(H,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let St=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let gt=0;gt<ft.length;gt++){const Tt=ft[gt];let Pt=null;if(m!==null)Pt=m.getViewport(Tt);else{const Ct=u.getViewSubImage(d,Tt);Pt=Ct.viewport,gt===0&&(t.setRenderTargetTextures(f,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(f))}let xt=V[gt];xt===void 0&&(xt=new ze,xt.layers.enable(gt),xt.viewport=new me,V[gt]=xt),xt.matrix.fromArray(Tt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Tt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),gt===0&&(y.matrix.copy(xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(xt)}}for(let ft=0;ft<A.length;ft++){const St=v[ft],gt=A[ft];St!==null&&gt!==void 0&&gt.update(St,Z,c||o)}j&&j(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const rt=new Pl;rt.setAnimationLoop(it),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function _m(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,bl(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,A,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,A,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const A=t.get(f).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const A=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vm(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,v){const S=v.program;n.uniformBlockBinding(A,S)}function c(A,v){let S=i[A.id];S===void 0&&(g(A),S=h(A),i[A.id]=S,A.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(A,C);const R=t.render.frame;r[A.id]!==R&&(d(A),r[A.id]=R)}function h(A){const v=u();A.__bindingPointIndex=v;const S=s.createBuffer(),C=A.__size,R=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const v=i[A.id],S=A.uniforms,C=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,w=S.length;R<w;R++){const V=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,T=V.length;y<T;y++){const F=V[y];if(m(F,R,y,C)===!0){const W=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let I=0;for(let O=0;O<Q.length;O++){const k=Q[O],$=_(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,W+I,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(A,v,S,C){const R=A.value,w=v+"_"+S;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const V=C[w];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return C[w]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function g(A){const v=A.uniforms;let S=0;const C=16;for(let w=0,V=v.length;w<V;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,F=y.length;T<F;T++){const W=y[T],Q=Array.isArray(W.value)?W.value:[W.value];for(let I=0,O=Q.length;I<O;I++){const k=Q[I],$=_(k),q=S%C;q!==0&&C-q<$.boundary&&(S+=C-q),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=$.storage}}}const R=S%C;return R>0&&(S+=C-R),A.__size=S,A.__cache={},this}function _(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Fl{constructor(t={}){const{canvas:e=fh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const v=this;let S=!1,C=0,R=0,w=null,V=-1,y=null;const T=new me,F=new me;let W=null;const Q=new Wt(0);let I=0,O=e.width,k=e.height,$=1,q=null,K=null;const j=new me(0,0,O,k),it=new me(0,0,O,k);let rt=!1;const H=new Qr;let Z=!1,ft=!1,St=null;const gt=new ee,Tt=new ht,Pt=new b,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return w===null?$:1}let P=n;function ot(E,N){for(let z=0;z<E.length;z++){const G=E[z],B=e.getContext(G,N);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kr}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),P=ot(N,E),P===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,st,X,Et,pt,M,x,U,nt,tt,J,yt,ct,_t,bt,Ut,et,Yt,Ht,Dt,At,vt,Ft,Kt;function re(){Y=new Rf(P),st=new Mf(P,Y,t),Y.init(st),vt=new fm(P,Y,st),X=new um(P,Y,st),Et=new Lf(P),pt=new jp,M=new dm(P,Y,X,pt,st,vt,Et),x=new Af(v),U=new wf(v),nt=new Bh(P,st),Ft=new Sf(P,Y,nt,st),tt=new Pf(P,nt,Et,Ft),J=new Uf(P,tt,nt,Et),Ht=new Nf(P,st,M),Ut=new Ef(pt),yt=new Zp(v,x,U,Y,st,Ft,Ut),ct=new _m(v,pt),_t=new Qp,bt=new rm(Y,st),Yt=new xf(v,x,U,X,J,d,l),et=new hm(v,J,st),Kt=new vm(P,Et,st,X),Dt=new yf(P,Y,Et,st),At=new Cf(P,Y,Et,st),Et.programs=yt.programs,v.capabilities=st,v.extensions=Y,v.properties=pt,v.renderLists=_t,v.shadowMap=et,v.state=X,v.info=Et}re();const kt=new gm(v,P);this.xr=kt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(O,k,!1))},this.getSize=function(E){return E.set(O,k)},this.setSize=function(E,N,z=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,k=N,e.width=Math.floor(E*$),e.height=Math.floor(N*$),z===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(O*$,k*$).floor()},this.setDrawingBufferSize=function(E,N,z){O=E,k=N,$=z,e.width=Math.floor(E*z),e.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,N,z,G){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,N,z,G),X.viewport(T.copy(j).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,N,z,G){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,N,z,G),X.scissor(F.copy(it).multiplyScalar($).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){X.setScissorTest(rt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(E=!0,N=!0,z=!0){let G=0;if(E){let B=!1;if(w!==null){const mt=w.texture.format;B=mt===dl||mt===ul||mt===hl}if(B){const mt=w.texture.type,Mt=mt===bn||mt===Mn||mt===$r||mt===kn||mt===ll||mt===cl,Rt=Yt.getClearColor(),It=Yt.getClearAlpha(),zt=Rt.r,Nt=Rt.g,Ot=Rt.b;Mt?(m[0]=zt,m[1]=Nt,m[2]=Ot,m[3]=It,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=zt,g[1]=Nt,g[2]=Ot,g[3]=It,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),bt.dispose(),pt.dispose(),x.dispose(),U.dispose(),J.dispose(),Ft.dispose(),Kt.dispose(),yt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ee),kt.removeEventListener("sessionend",Jt),St&&(St.dispose(),St=null),Ae.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Et.autoReset,N=et.enabled,z=et.autoUpdate,G=et.needsUpdate,B=et.type;re(),Et.autoReset=E,et.enabled=N,et.autoUpdate=z,et.needsUpdate=G,et.type=B}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const N=E.target;N.removeEventListener("dispose",dt),Lt(N)}function Lt(E){wt(E),pt.remove(E)}function wt(E){const N=pt.get(E).programs;N!==void 0&&(N.forEach(function(z){yt.releaseProgram(z)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,G,B,mt){N===null&&(N=xt);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,Rt=Zl(E,N,z,G,B);X.setMaterial(G,Mt);let It=z.index,zt=1;if(G.wireframe===!0){if(It=tt.getWireframeAttribute(z),It===void 0)return;zt=2}const Nt=z.drawRange,Ot=z.attributes.position;let ae=Nt.start*zt,Le=(Nt.start+Nt.count)*zt;mt!==null&&(ae=Math.max(ae,mt.start*zt),Le=Math.min(Le,(mt.start+mt.count)*zt)),It!==null?(ae=Math.max(ae,0),Le=Math.min(Le,It.count)):Ot!=null&&(ae=Math.max(ae,0),Le=Math.min(Le,Ot.count));const fe=Le-ae;if(fe<0||fe===1/0)return;Ft.setup(B,G,Rt,z,It);let nn,ie=Dt;if(It!==null&&(nn=nt.get(It),ie=At,ie.setIndex(nn)),B.isMesh)G.wireframe===!0?(X.setLineWidth(G.wireframeLinewidth*Ct()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(B.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),X.setLineWidth(Gt*Ct()),B.isLineSegments?ie.setMode(P.LINES):B.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else B.isPoints?ie.setMode(P.POINTS):B.isSprite&&ie.setMode(P.TRIANGLES);if(B.isBatchedMesh)ie.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ie.renderInstances(ae,fe,B.count);else if(z.isInstancedBufferGeometry){const Gt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,qs=Math.min(z.instanceCount,Gt);ie.renderInstances(ae,fe,qs)}else ie.render(ae,fe)};function Zt(E,N,z){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=Pe,E.needsUpdate=!0,$i(E,N,z),E.side=Rn,E.needsUpdate=!0,$i(E,N,z),E.side=Ye):$i(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),p=bt.get(z),p.init(),A.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(B){const mt=B.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){const Rt=mt[Mt];Zt(Rt,z,B),G.add(Rt)}else Zt(mt,z,B),G.add(mt)}),A.pop(),p=null,G},this.compileAsync=function(E,N,z=null){const G=this.compile(E,N,z);return new Promise(B=>{function mt(){if(G.forEach(function(Mt){pt.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){B(E);return}setTimeout(mt,10)}Y.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let jt=null;function de(E){jt&&jt(E)}function Ee(){Ae.stop()}function Jt(){Ae.start()}const Ae=new Pl;Ae.setAnimationLoop(de),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(E){jt=E,kt.setAnimationLoop(E),E===null?Ae.stop():Ae.start()},kt.addEventListener("sessionstart",Ee),kt.addEventListener("sessionend",Jt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(N),N=kt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,w),p=bt.get(E,A.length),p.init(),A.push(p),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(gt),ft=this.localClippingEnabled,Z=Ut.init(this.clippingPlanes,ft),_=_t.get(E,f.length),_.init(),f.push(_),je(E,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,K),this.info.render.frame++,Z===!0&&Ut.beginShadows();const z=p.state.shadowsArray;if(et.render(z,E,N),Z===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,E),p.setupLights(v._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let B=0,mt=G.length;B<mt;B++){const Mt=G[B];ro(_,E,Mt,Mt.viewport)}}else ro(_,E,N);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,N),Ft.resetDefaultState(),V=-1,y=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function je(E,N,z,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){G&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const Mt=J.update(E),Rt=E.material;Rt.visible&&_.push(E,Mt,Rt,z,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const Mt=J.update(E),Rt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Pt.copy(Mt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(Rt)){const It=Mt.groups;for(let zt=0,Nt=It.length;zt<Nt;zt++){const Ot=It[zt],ae=Rt[Ot.materialIndex];ae&&ae.visible&&_.push(E,Mt,ae,z,Pt.z,Ot)}}else Rt.visible&&_.push(E,Mt,Rt,z,Pt.z,null)}}const mt=E.children;for(let Mt=0,Rt=mt.length;Mt<Rt;Mt++)je(mt[Mt],N,z,G)}function ro(E,N,z,G){const B=E.opaque,mt=E.transmissive,Mt=E.transparent;p.setupLightsView(z),Z===!0&&Ut.setGlobalState(v.clippingPlanes,z),mt.length>0&&$l(B,mt,N,z),G&&X.viewport(T.copy(G)),B.length>0&&Ki(B,N,z),mt.length>0&&Ki(mt,N,z),Mt.length>0&&Ki(Mt,N,z),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function $l(E,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const mt=st.isWebGL2;St===null&&(St=new Hn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Hi:bn,minFilter:Vi,samples:mt?4:0})),v.getDrawingBufferSize(Tt),mt?St.setSize(Tt.x,Tt.y):St.setSize(Bs(Tt.x),Bs(Tt.y));const Mt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Rt=v.toneMapping;v.toneMapping=fn,Ki(E,z,G),M.updateMultisampleRenderTarget(St),M.updateRenderTargetMipmap(St);let It=!1;for(let zt=0,Nt=N.length;zt<Nt;zt++){const Ot=N[zt],ae=Ot.object,Le=Ot.geometry,fe=Ot.material,nn=Ot.group;if(fe.side===Ye&&ae.layers.test(G.layers)){const ie=fe.side;fe.side=Pe,fe.needsUpdate=!0,oo(ae,z,G,Le,fe,nn),fe.side=ie,fe.needsUpdate=!0,It=!0}}It===!0&&(M.updateMultisampleRenderTarget(St),M.updateRenderTargetMipmap(St)),v.setRenderTarget(Mt),v.setClearColor(Q,I),v.toneMapping=Rt}function Ki(E,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,mt=E.length;B<mt;B++){const Mt=E[B],Rt=Mt.object,It=Mt.geometry,zt=G===null?Mt.material:G,Nt=Mt.group;Rt.layers.test(z.layers)&&oo(Rt,N,z,It,zt,Nt)}}function oo(E,N,z,G,B,mt){E.onBeforeRender(v,N,z,G,B,mt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,N,z,G,E,mt),B.transparent===!0&&B.side===Ye&&B.forceSinglePass===!1?(B.side=Pe,B.needsUpdate=!0,v.renderBufferDirect(z,N,G,B,E,mt),B.side=Rn,B.needsUpdate=!0,v.renderBufferDirect(z,N,G,B,E,mt),B.side=Ye):v.renderBufferDirect(z,N,G,B,E,mt),E.onAfterRender(v,N,z,G,B,mt)}function $i(E,N,z){N.isScene!==!0&&(N=xt);const G=pt.get(E),B=p.state.lights,mt=p.state.shadowsArray,Mt=B.state.version,Rt=yt.getParameters(E,B.state,mt,N,z),It=yt.getProgramCacheKey(Rt);let zt=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?U:x).get(E.envMap||G.environment),zt===void 0&&(E.addEventListener("dispose",dt),zt=new Map,G.programs=zt);let Nt=zt.get(It);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===Mt)return lo(E,Rt),Nt}else Rt.uniforms=yt.getUniforms(E),E.onBuild(z,Rt,v),E.onBeforeCompile(Rt,v),Nt=yt.acquireProgram(Rt,It),zt.set(It,Nt),G.uniforms=Rt.uniforms;const Ot=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=Ut.uniform),lo(E,Rt),G.needsLights=Jl(E),G.lightsStateVersion=Mt,G.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function ao(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ls.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function lo(E,N){const z=pt.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Zl(E,N,z,G,B){N.isScene!==!0&&(N=xt),M.resetTextureUnits();const mt=N.fog,Mt=G.isMeshStandardMaterial?N.environment:null,Rt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pn,It=(G.isMeshStandardMaterial?U:x).get(G.envMap||Mt),zt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,Le=!!z.morphAttributes.color;let fe=fn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=v.toneMapping);const nn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=nn!==void 0?nn.length:0,Gt=pt.get(G),qs=p.state.lights;if(Z===!0&&(ft===!0||E!==y)){const Ne=E===y&&G.id===V;Ut.setState(G,E,Ne)}let oe=!1;G.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==qs.state.version||Gt.outputColorSpace!==Rt||B.isBatchedMesh&&Gt.batching===!1||!B.isBatchedMesh&&Gt.batching===!0||B.isInstancedMesh&&Gt.instancing===!1||!B.isInstancedMesh&&Gt.instancing===!0||B.isSkinnedMesh&&Gt.skinning===!1||!B.isSkinnedMesh&&Gt.skinning===!0||B.isInstancedMesh&&Gt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Gt.instancingColor===!1&&B.instanceColor!==null||Gt.envMap!==It||G.fog===!0&&Gt.fog!==mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ut.numPlanes||Gt.numIntersection!==Ut.numIntersection)||Gt.vertexAlphas!==zt||Gt.vertexTangents!==Nt||Gt.morphTargets!==Ot||Gt.morphNormals!==ae||Gt.morphColors!==Le||Gt.toneMapping!==fe||st.isWebGL2===!0&&Gt.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,Gt.__version=G.version);let Cn=Gt.currentProgram;oe===!0&&(Cn=$i(G,N,B));let co=!1,Ri=!1,Ks=!1;const ve=Cn.getUniforms(),Ln=Gt.uniforms;if(X.useProgram(Cn.program)&&(co=!0,Ri=!0,Ks=!0),G.id!==V&&(V=G.id,Ri=!0),co||y!==E){ve.setValue(P,"projectionMatrix",E.projectionMatrix),ve.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ne=ve.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,Pt.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ri=!0,Ks=!0)}if(B.isSkinnedMesh){ve.setOptional(P,B,"bindMatrix"),ve.setOptional(P,B,"bindMatrixInverse");const Ne=B.skeleton;Ne&&(st.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(P,"boneTexture",Ne.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ve.setOptional(P,B,"batchingTexture"),ve.setValue(P,"batchingTexture",B._matricesTexture,M));const $s=z.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&st.isWebGL2===!0)&&Ht.update(B,z,Cn),(Ri||Gt.receiveShadow!==B.receiveShadow)&&(Gt.receiveShadow=B.receiveShadow,ve.setValue(P,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ln.envMap.value=It,Ln.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Ri&&(ve.setValue(P,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&jl(Ln,Ks),mt&&G.fog===!0&&ct.refreshFogUniforms(Ln,mt),ct.refreshMaterialUniforms(Ln,G,$,k,St),Ls.upload(P,ao(Gt),Ln,M)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ls.upload(P,ao(Gt),Ln,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(P,"center",B.center),ve.setValue(P,"modelViewMatrix",B.modelViewMatrix),ve.setValue(P,"normalMatrix",B.normalMatrix),ve.setValue(P,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ne=G.uniformsGroups;for(let Zs=0,Ql=Ne.length;Zs<Ql;Zs++)if(st.isWebGL2){const ho=Ne[Zs];Kt.update(ho,Cn),Kt.bind(ho,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function jl(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Jl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,z){pt.get(E.texture).__webglTexture=N,pt.get(E.depthTexture).__webglTexture=z;const G=pt.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const z=pt.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){w=E,C=N,R=z;let G=!0,B=null,mt=!1,Mt=!1;if(E){const It=pt.get(E);It.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(P.FRAMEBUFFER,null),G=!1):It.__webglFramebuffer===void 0?M.setupRenderTarget(E):It.__hasExternalTextures&&M.rebindTextures(E,pt.get(E.texture).__webglTexture,pt.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Nt=pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?B=Nt[N][z]:B=Nt[N],mt=!0):st.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?B=pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[z]:B=Nt,T.copy(E.viewport),F.copy(E.scissor),W=E.scissorTest}else T.copy(j).multiplyScalar($).floor(),F.copy(it).multiplyScalar($).floor(),W=rt;if(X.bindFramebuffer(P.FRAMEBUFFER,B)&&st.drawBuffers&&G&&X.drawBuffers(E,B),X.viewport(T),X.scissor(F),X.setScissorTest(W),mt){const It=pt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,z)}else if(Mt){const It=pt.get(E.texture),zt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.__webglTexture,z||0,zt)}V=-1},this.readRenderTargetPixels=function(E,N,z,G,B,mt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){X.bindFramebuffer(P.FRAMEBUFFER,Rt);try{const It=E.texture,zt=It.format,Nt=It.type;if(zt!==Ke&&vt.convert(zt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===Hi&&(Y.has("EXT_color_buffer_half_float")||st.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Nt!==bn&&vt.convert(Nt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===En&&(st.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&z>=0&&z<=E.height-B&&P.readPixels(N,z,G,B,vt.convert(zt),vt.convert(Nt),mt)}finally{const It=w!==null?pt.get(w).__webglFramebuffer:null;X.bindFramebuffer(P.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(E,N,z=0){const G=Math.pow(2,-z),B=Math.floor(N.image.width*G),mt=Math.floor(N.image.height*G);M.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,E.x,E.y,B,mt),X.unbindTexture()},this.copyTextureToTexture=function(E,N,z,G=0){const B=N.image.width,mt=N.image.height,Mt=vt.convert(z.format),Rt=vt.convert(z.type);M.setTexture2D(z,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,G,E.x,E.y,B,mt,Mt,Rt,N.image.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,G,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,G,E.x,E.y,Mt,Rt,N.image),G===0&&z.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=E.max.x-E.min.x+1,Mt=E.max.y-E.min.y+1,Rt=E.max.z-E.min.z+1,It=vt.convert(G.format),zt=vt.convert(G.type);let Nt;if(G.isData3DTexture)M.setTexture3D(G,0),Nt=P.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)M.setTexture2DArray(G,0),Nt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const Ot=P.getParameter(P.UNPACK_ROW_LENGTH),ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Le=P.getParameter(P.UNPACK_SKIP_PIXELS),fe=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES),ie=z.isCompressedTexture?z.mipmaps[B]:z.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?P.texSubImage3D(Nt,B,N.x,N.y,N.z,mt,Mt,Rt,It,zt,ie.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Nt,B,N.x,N.y,N.z,mt,Mt,Rt,It,ie.data)):P.texSubImage3D(Nt,B,N.x,N.y,N.z,mt,Mt,Rt,It,zt,ie),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),B===0&&G.generateMipmaps&&P.generateMipmap(Nt),X.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),X.unbindTexture()},this.resetState=function(){C=0,R=0,w=null,X.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zr?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Vn:pl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vn?ge:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xm extends Fl{}xm.prototype.isWebGL1Renderer=!0;class eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sm extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ia extends Ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ui=new ee,Da=new ee,vs=[],Na=new tn,ym=new ee,Di=new Xt,Ni=new mn;class Bl extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ym)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Na.copy(t.boundingBox).applyMatrix4(ui),this.boundingBox.union(Na)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Ni.copy(t.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Ni)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(n),t.ray.intersectsSphere(Ni)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ui),Da.multiplyMatrices(n,ui),Di.matrixWorld=Da,Di.raycast(t,vs);for(let o=0,a=vs.length;o<a;o++){const l=vs[o];l.instanceId=r,l.object=this,e.push(l)}vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zl extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new b,Oa=new b,Fa=new ee,Tr=new Jr,xs=new mn;class Mm extends le{constructor(t=new Me,e=new zl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ua.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Oa);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;Fa.copy(i).invert(),Tr.copy(t.ray).applyMatrix4(Fa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new b,h=new b,u=new b,d=new b,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let v=f,S=A-1;v<S;v+=m){const C=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,R),Tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const V=t.ray.origin.distanceTo(d);V<t.near||V>t.far||e.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),A=Math.min(p.count,o.start+o.count);for(let v=f,S=A-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Tr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ba=new b,za=new b;class Em extends Mm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ba.fromBufferAttribute(e,i),za.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ba.distanceTo(za);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kl extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ka=new ee,Wr=new Jr,Ss=new mn,ys=new b;class Am extends le{constructor(t=new Me,e=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(i),Ss.radius+=r,t.ray.intersectsSphere(Ss)===!1)return;ka.copy(i).invert(),Wr.copy(t.ray).applyMatrix4(ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);ys.fromBufferAttribute(u,p),Ga(ys,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)ys.fromBufferAttribute(u,g),Ga(ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ga(s,t,e,n,i,r,o){const a=Wr.distanceSqToPoint(s);if(a<e){const l=new b;Wr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Tm extends Ce{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ht:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,i=[],r=[],o=[],a=new b,l=new ee;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class no extends en{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bm extends no{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function io(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ms=new b,br=new io,wr=new io,Rr=new io;class wm extends en{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new b){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ms.subVectors(i[0],i[1]).add(i[0]),c=Ms);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ms.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ms),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),br.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),Rr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Rr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(br.calc(l),wr.calc(l),Rr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Va(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Rm(s,t){const e=1-s;return e*e*t}function Pm(s,t){return 2*(1-s)*s*t}function Cm(s,t){return s*s*t}function Fi(s,t,e,n){return Rm(s,t)+Pm(s,e)+Cm(s,n)}function Lm(s,t){const e=1-s;return e*e*e*t}function Im(s,t){const e=1-s;return 3*e*e*s*t}function Dm(s,t){return 3*(1-s)*s*s*t}function Nm(s,t){return s*s*s*t}function Bi(s,t,e,n,i){return Lm(s,t)+Im(s,e)+Dm(s,n)+Nm(s,i)}class Gl extends en{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Um extends en{constructor(t=new b,e=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(t,i.x,r.x,o.x,a.x),Bi(t,i.y,r.y,o.y,a.y),Bi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vl extends en{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Om extends en{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends en{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fi(t,i.x,r.x,o.x),Fi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fm extends en{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fi(t,i.x,r.x,o.x),Fi(t,i.y,r.y,o.y),Fi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wl extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Va(a,l.x,c.x,h.x,u.x),Va(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Xr=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:wm,CubicBezierCurve:Gl,CubicBezierCurve3:Um,EllipseCurve:no,LineCurve:Vl,LineCurve3:Om,QuadraticBezierCurve:Hl,QuadraticBezierCurve3:Fm,SplineCurve:Wl});class Bm extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Xr[i.type]().fromJSON(i))}return this}}class Ha extends Bm{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vl(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Hl(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Gl(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new no(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class so extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new b,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class wi extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;A(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(m,2));function A(){const S=new b,C=new b;let R=0;const w=(e-t)/n;for(let V=0;V<=r;V++){const y=[],T=V/r,F=T*(e-t)+t;for(let W=0;W<=i;W++){const Q=W/i,I=Q*l+a,O=Math.sin(I),k=Math.cos(I);C.x=F*O,C.y=-T*n+p,C.z=F*k,u.push(C.x,C.y,C.z),S.set(O,w,k).normalize(),d.push(S.x,S.y,S.z),m.push(Q,1-T),y.push(g++)}_.push(y)}for(let V=0;V<i;V++)for(let y=0;y<r;y++){const T=_[y][V],F=_[y+1][V],W=_[y+1][V+1],Q=_[y][V+1];h.push(T,F,Q),h.push(F,W,Q),R+=6}c.addGroup(f,R,0),f+=R}function v(S){const C=g,R=new ht,w=new b;let V=0;const y=S===!0?t:e,T=S===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,p*T,0),d.push(0,T,0),m.push(.5,.5),g++;const F=g;for(let W=0;W<=i;W++){const I=W/i*l+a,O=Math.cos(I),k=Math.sin(I);w.x=y*k,w.y=p*T,w.z=y*O,u.push(w.x,w.y,w.z),d.push(0,T,0),R.x=O*.5+.5,R.y=k*.5*T+.5,m.push(R.x,R.y),g++}for(let W=0;W<i;W++){const Q=C+W,I=F+W;S===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),V+=3}c.addGroup(f,V,S===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dn extends wi{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Es=new b,As=new b,Pr=new b,Ts=new Be;class zm extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(xi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:f}=Ts;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ts.getNormal(Pr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){const v=(A+1)%3,S=u[A],C=u[v],R=Ts[h[A]],w=Ts[h[v]],V=`${S}_${C}`,y=`${C}_${S}`;y in d&&d[y]?(Pr.dot(d[y].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(w.x,w.y,w.z)),d[y]=null):V in d||(d[V]={index0:c[A],index1:c[v],normal:Pr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Es.fromBufferAttribute(a,_),As.fromBufferAttribute(a,p),m.push(Es.x,Es.y,Es.z),m.push(As.x,As.y,As.z)}this.setAttribute("position",new ne(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Is extends Ha{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ha().fromJSON(i))}return this}}const km={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Xl(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=Xm(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Xi(r,o,e,a,l,m,0),o}};function Xl(s,t,e,n,i){let r,o;if(i===ng(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Wa(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wa(r,s[r],s[r+1],o);return o&&Ys(o,o.next)&&(qi(o),o=o.next),o}function Yn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||se(e.prev,e,e.next)===0)){if(qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Zm(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vm(s,n,i,r):Gm(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),qi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Hm(Yn(s),t,e),Xi(s,t,e,n,i,r,2)):o===2&&Wm(s,t,e,n,i,r):Xi(Yn(s),t,e,n,i,r,1);break}}}function Gm(s){const t=s.prev,e=s,n=s.next;if(se(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&_i(i,a,r,l,o,c,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(se(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=Yr(m,g,t,e,n),A=Yr(_,p,t,e,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=f&&S&&S.z<=A;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&_i(a,h,l,u,c,d,v.x,v.y)&&se(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&_i(a,h,l,u,c,d,S.x,S.y)&&se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&_i(a,h,l,u,c,d,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=A;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&_i(a,h,l,u,c,d,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Hm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ys(i,r)&&Yl(i,n,n.next,r)&&Yi(i,r)&&Yi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qi(n),qi(n.next),n=s=r),n=n.next}while(n!==s);return Yn(n)}function Wm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qm(o,a)){let l=ql(o,a);o=Yn(o,o.next),l=Yn(l,l.next),Xi(o,t,e,n,i,r,0),Xi(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Xm(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Xl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Jm(c));for(i.sort(Ym),r=0;r<i.length;r++)e=qm(i[r],e);return e}function Ym(s,t){return s.x-t.x}function qm(s,t){const e=Km(s,t);if(!e)return t;const n=ql(e,s);return Yn(n,n.next),Yn(e,e.next)}function Km(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&_i(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&$m(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function $m(s,t){return se(s.prev,s,t.prev)<0&&se(t.next,s,s.next)<0}function Zm(s,t,e,n){let i=s;do i.z===0&&(i.z=Yr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,jm(i)}function jm(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Yr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _i(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Qm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!tg(s,t)&&(Yi(s,t)&&Yi(t,s)&&eg(s,t)&&(se(s.prev,s,t.prev)||se(s,t.prev,t))||Ys(s,t)&&se(s.prev,s,s.next)>0&&se(t.prev,t,t.next)>0)}function se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ys(s,t){return s.x===t.x&&s.y===t.y}function Yl(s,t,e,n){const i=ws(se(s,t,e)),r=ws(se(s,t,n)),o=ws(se(e,n,s)),a=ws(se(e,n,t));return!!(i!==r&&o!==a||i===0&&bs(s,e,t)||r===0&&bs(s,n,t)||o===0&&bs(e,s,n)||a===0&&bs(e,t,n))}function bs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ws(s){return s>0?1:s<0?-1:0}function tg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yi(s,t){return se(s.prev,s,s.next)<0?se(s,t,s.next)>=0&&se(s,s.prev,t)>=0:se(s,t,s.prev)<0||se(s,s.next,t)<0}function eg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ql(s,t){const e=new qr(s.i,s.x,s.y),n=new qr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wa(s,t,e,n){const i=new qr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ng(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class zi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return zi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Xa(t),Ya(n,t);let o=t.length;e.forEach(Xa);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ya(n,e[l]);const a=km.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xa(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ya(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ki extends Me{constructor(t=new Is([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:ig;let v,S=!1,C,R,w,V;f&&(v=f.getSpacedPoints(h),S=!0,d=!1,C=f.computeFrenetFrames(h,!1),R=new b,w=new b,V=new b),d||(p=0,m=0,g=0,_=0);const y=a.extractPoints(c);let T=y.shape;const F=y.holes;if(!zi.isClockWise(T)){T=T.reverse();for(let P=0,ot=F.length;P<ot;P++){const Y=F[P];zi.isClockWise(Y)&&(F[P]=Y.reverse())}}const Q=zi.triangulateShape(T,F),I=T;for(let P=0,ot=F.length;P<ot;P++){const Y=F[P];T=T.concat(Y)}function O(P,ot,Y){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ot,Y)}const k=T.length,$=Q.length;function q(P,ot,Y){let st,X,Et;const pt=P.x-ot.x,M=P.y-ot.y,x=Y.x-P.x,U=Y.y-P.y,nt=pt*pt+M*M,tt=pt*U-M*x;if(Math.abs(tt)>Number.EPSILON){const J=Math.sqrt(nt),yt=Math.sqrt(x*x+U*U),ct=ot.x-M/J,_t=ot.y+pt/J,bt=Y.x-U/yt,Ut=Y.y+x/yt,et=((bt-ct)*U-(Ut-_t)*x)/(pt*U-M*x);st=ct+pt*et-P.x,X=_t+M*et-P.y;const Yt=st*st+X*X;if(Yt<=2)return new ht(st,X);Et=Math.sqrt(Yt/2)}else{let J=!1;pt>Number.EPSILON?x>Number.EPSILON&&(J=!0):pt<-Number.EPSILON?x<-Number.EPSILON&&(J=!0):Math.sign(M)===Math.sign(U)&&(J=!0),J?(st=-M,X=pt,Et=Math.sqrt(nt)):(st=pt,X=M,Et=Math.sqrt(nt/2))}return new ht(st/Et,X/Et)}const K=[];for(let P=0,ot=I.length,Y=ot-1,st=P+1;P<ot;P++,Y++,st++)Y===ot&&(Y=0),st===ot&&(st=0),K[P]=q(I[P],I[Y],I[st]);const j=[];let it,rt=K.concat();for(let P=0,ot=F.length;P<ot;P++){const Y=F[P];it=[];for(let st=0,X=Y.length,Et=X-1,pt=st+1;st<X;st++,Et++,pt++)Et===X&&(Et=0),pt===X&&(pt=0),it[st]=q(Y[st],Y[Et],Y[pt]);j.push(it),rt=rt.concat(it)}for(let P=0;P<p;P++){const ot=P/p,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=I.length;X<Et;X++){const pt=O(I[X],K[X],st);gt(pt.x,pt.y,-Y)}for(let X=0,Et=F.length;X<Et;X++){const pt=F[X];it=j[X];for(let M=0,x=pt.length;M<x;M++){const U=O(pt[M],it[M],st);gt(U.x,U.y,-Y)}}}const H=g+_;for(let P=0;P<k;P++){const ot=d?O(T[P],rt[P],H):T[P];S?(w.copy(C.normals[0]).multiplyScalar(ot.x),R.copy(C.binormals[0]).multiplyScalar(ot.y),V.copy(v[0]).add(w).add(R),gt(V.x,V.y,V.z)):gt(ot.x,ot.y,0)}for(let P=1;P<=h;P++)for(let ot=0;ot<k;ot++){const Y=d?O(T[ot],rt[ot],H):T[ot];S?(w.copy(C.normals[P]).multiplyScalar(Y.x),R.copy(C.binormals[P]).multiplyScalar(Y.y),V.copy(v[P]).add(w).add(R),gt(V.x,V.y,V.z)):gt(Y.x,Y.y,u/h*P)}for(let P=p-1;P>=0;P--){const ot=P/p,Y=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let X=0,Et=I.length;X<Et;X++){const pt=O(I[X],K[X],st);gt(pt.x,pt.y,u+Y)}for(let X=0,Et=F.length;X<Et;X++){const pt=F[X];it=j[X];for(let M=0,x=pt.length;M<x;M++){const U=O(pt[M],it[M],st);S?gt(U.x,U.y+v[h-1].y,v[h-1].x+Y):gt(U.x,U.y,u+Y)}}}Z(),ft();function Z(){const P=i.length/3;if(d){let ot=0,Y=k*ot;for(let st=0;st<$;st++){const X=Q[st];Tt(X[2]+Y,X[1]+Y,X[0]+Y)}ot=h+p*2,Y=k*ot;for(let st=0;st<$;st++){const X=Q[st];Tt(X[0]+Y,X[1]+Y,X[2]+Y)}}else{for(let ot=0;ot<$;ot++){const Y=Q[ot];Tt(Y[2],Y[1],Y[0])}for(let ot=0;ot<$;ot++){const Y=Q[ot];Tt(Y[0]+k*h,Y[1]+k*h,Y[2]+k*h)}}n.addGroup(P,i.length/3-P,0)}function ft(){const P=i.length/3;let ot=0;St(I,ot),ot+=I.length;for(let Y=0,st=F.length;Y<st;Y++){const X=F[Y];St(X,ot),ot+=X.length}n.addGroup(P,i.length/3-P,1)}function St(P,ot){let Y=P.length;for(;--Y>=0;){const st=Y;let X=Y-1;X<0&&(X=P.length-1);for(let Et=0,pt=h+p*2;Et<pt;Et++){const M=k*Et,x=k*(Et+1),U=ot+st+M,nt=ot+X+M,tt=ot+X+x,J=ot+st+x;Pt(U,nt,tt,J)}}}function gt(P,ot,Y){l.push(P),l.push(ot),l.push(Y)}function Tt(P,ot,Y){xt(P),xt(ot),xt(Y);const st=i.length/3,X=A.generateTopUV(n,i,st-3,st-2,st-1);Ct(X[0]),Ct(X[1]),Ct(X[2])}function Pt(P,ot,Y,st){xt(P),xt(ot),xt(st),xt(ot),xt(Y),xt(st);const X=i.length/3,Et=A.generateSideWallUV(n,i,X-6,X-3,X-2,X-1);Ct(Et[0]),Ct(Et[1]),Ct(Et[3]),Ct(Et[1]),Ct(Et[2]),Ct(Et[3])}function xt(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Ct(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xr[i.type]().fromJSON(i)),new ki(n,t.options)}}const ig={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-g),new ht(_,1-f)]:[new ht(a,1-l),new ht(h,1-u),new ht(m,1-g),new ht(p,1-f)]}};function sg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ks extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new b,d=new b,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const A=[],v=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const R=C/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(R+S,1-v),A.push(c++)}h.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){const v=h[f][A+1],S=h[f][A],C=h[f+1][A],R=h[f+1][A+1];(f!==0||o>0)&&m.push(v,S,R),(f!==n-1||l<Math.PI)&&m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gs extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,A=(i+1)*m+g;o.push(_,p,A),o.push(p,f,A)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Re extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kl extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Cr=new ee,qa=new b,Ka=new b;class rg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qa.setFromMatrixPosition(t.matrixWorld),e.position.copy(qa),Ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ka),e.updateMatrixWorld(),Cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class og extends rg{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $a extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ag extends Kl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);const D={ARENA:{WALL_THICKNESS:2,MAP_SCALE:3,CHECKER_LIGHT_COLOR:14277081,CHECKER_DARK_COLOR:5921370,CHECKER_WORLD_SIZE:18},PLAYER:{SPEED:18,TURN_SPEED:2.2,ROLL_SPEED:2,BOOST_MULTIPLIER:1.8,BOOST_DURATION:2,BOOST_COOLDOWN:5,SPAWN_PROTECTION:1,HITBOX_RADIUS:.8,MODEL_SCALE:1,NOSE_CAMERA_LOCAL_Y:.05,NOSE_CAMERA_LOCAL_Z:-1.95,START_Y:10,AUTO_ROLL:!0,AUTO_ROLL_SPEED:1.5},GAMEPLAY:{PLANAR_MODE:!1,PORTAL_COUNT:0,PLANAR_LEVEL_COUNT:5,PORTAL_BEAMS:!1,PLANAR_AIM_INPUT_SPEED:1.5},TRAIL:{WIDTH:.6,UPDATE_INTERVAL:.07,GAP_CHANCE:.02,GAP_DURATION:.3,MAX_SEGMENTS:5e3},RENDER:{MAX_PIXEL_RATIO:1.35,SHADOW_MAP_SIZE:512},POWERUP:{SPAWN_INTERVAL:3,MAX_ON_FIELD:8,PICKUP_RADIUS:2.5,SIZE:1.5,ROTATION_SPEED:2,BOUNCE_SPEED:1.5,BOUNCE_HEIGHT:.5,MAX_INVENTORY:5,TYPES:{SPEED_UP:{name:"Schneller",color:65382,icon:"⚡",duration:4,multiplier:1.6},SLOW_DOWN:{name:"Langsamer",color:16724787,icon:"🐢",duration:4,multiplier:.5},THICK:{name:"Dick",color:16763904,icon:"🧱",duration:5,trailWidth:1.8},THIN:{name:"Dünn",color:11158783,icon:"✂",duration:5,trailWidth:.2},SHIELD:{name:"Schild",color:4491519,icon:"🛡",duration:3},SLOW_TIME:{name:"Zeitlupe",color:4521864,icon:"🕙",duration:4,timeScale:.4},GHOST:{name:"Geist",color:16737996,icon:"👻",duration:3},INVERT:{name:"Invertieren",color:16711935,icon:"🔀",duration:4}}},BOT:{DEFAULT_DIFFICULTY:"NORMAL",ACTIVE_DIFFICULTY:"NORMAL",REACTION_TIME:.13,LOOK_AHEAD:13,AGGRESSION:.58,DIFFICULTY_PROFILES:{EASY:{reactionTime:.24,lookAhead:11,aggression:.36,errorRate:.24,probeSpread:.62,probeStep:2.3,turnCommitTime:.14,stuckCheckInterval:.45,stuckTriggerTime:1.7,minProgressDistance:.85,minForwardProgress:.35,recoveryDuration:.95,recoveryCooldown:1.9,itemUseCooldown:1.25,itemShootCooldown:.8,targetRefreshInterval:.28,portalInterest:.35,portalSeekDistance:60,portalEntryDotMin:.22,portalIntentThreshold:.25,portalIntentDuration:.9,boostChance:.0025,probeCount:7,projectileAwareness:0,pursuitEnabled:!1,pursuitRadius:0,pursuitAimTolerance:.95,heightBias:0,spacingWeight:0,itemContextWeight:.2},NORMAL:{reactionTime:.14,lookAhead:13,aggression:.58,errorRate:.11,probeSpread:.74,probeStep:1.6,turnCommitTime:.18,stuckCheckInterval:.4,stuckTriggerTime:1.2,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1.3,recoveryCooldown:1.55,itemUseCooldown:.95,itemShootCooldown:.62,targetRefreshInterval:.2,portalInterest:.56,portalSeekDistance:72,portalEntryDotMin:.28,portalIntentThreshold:.2,portalIntentDuration:1.15,boostChance:.0045,probeCount:10,projectileAwareness:.6,pursuitEnabled:!0,pursuitRadius:35,pursuitAimTolerance:.85,heightBias:.15,spacingWeight:.3,itemContextWeight:.7},HARD:{reactionTime:.08,lookAhead:16,aggression:.74,errorRate:.04,probeSpread:.9,probeStep:1.4,turnCommitTime:.24,stuckCheckInterval:.35,stuckTriggerTime:1,minProgressDistance:1,minForwardProgress:.5,recoveryDuration:1.25,recoveryCooldown:1.2,itemUseCooldown:.78,itemShootCooldown:.48,targetRefreshInterval:.12,portalInterest:.74,portalSeekDistance:84,portalEntryDotMin:.35,portalIntentThreshold:.14,portalIntentDuration:1.35,boostChance:.0065,probeCount:12,projectileAwareness:.95,pursuitEnabled:!0,pursuitRadius:50,pursuitAimTolerance:.75,heightBias:.25,spacingWeight:.5,itemContextWeight:1}}},PROJECTILE:{SPEED:45,RADIUS:.7,LIFE_TIME:3,MAX_DISTANCE:140,COOLDOWN:.45,PLANAR_AIM_MAX_ANGLE_DEG:18},PORTAL:{RADIUS:3.5,COOLDOWN:1.2,RING_SIZE:4,ROTATION_SPEED:2,MIN_PAIR_DISTANCE:15,MIN_PAIR_DISTANCE_PLANAR:4},HOMING:{LOCK_ON_ANGLE:15,TURN_RATE:3,MAX_LOCK_RANGE:100},COLORS:{PLAYER_1:43775,PLAYER_2:16746496,BOT_COLORS:[16729156,4521796,16777028,16729343,4521983],BACKGROUND:526354,AMBIENT_LIGHT:3359846},CAMERA:{FOV:75,NEAR:.1,FAR:200,FOLLOW_DISTANCE:12,FOLLOW_HEIGHT:6,LOOK_AHEAD:5,SMOOTHING:.08,MODES:["THIRD_PERSON","FIRST_PERSON","TOP_DOWN"],FIRST_PERSON_NOSE_CLEARANCE:.3,FIRST_PERSON_OFFSET:4,FIRST_PERSON_BOOST_OFFSET:1.45,FIRST_PERSON_BOOST_BLEND_SPEED:8.5,COLLISION_RADIUS:.45,COLLISION_BACKOFF:.04,COLLISION_STEPS:8},MAPS:{standard:{name:"Standard Arena",size:[80,30,80],obstacles:[{pos:[0,5,0],size:[4,10,4]},{pos:[20,5,20],size:[3,10,3]},{pos:[-20,5,-20],size:[3,10,3]},{pos:[20,5,-20],size:[3,10,3]},{pos:[-20,5,20],size:[3,10,3]}],portals:[{a:[-30,12,0],b:[30,12,0],color:65484}]},empty:{name:"Leer",size:[50,25,50],obstacles:[],portals:[]},maze:{name:"Labyrinth",size:[80,25,80],obstacles:[{pos:[-20,5,-20],size:[20,10,2]},{pos:[20,5,-20],size:[20,10,2]},{pos:[0,5,0],size:[30,10,2]},{pos:[-20,5,20],size:[20,10,2]},{pos:[20,5,20],size:[20,10,2]},{pos:[-20,5,0],size:[2,10,20]},{pos:[20,5,0],size:[2,10,20]},{pos:[0,5,-20],size:[2,10,15]},{pos:[0,5,20],size:[2,10,15]}],portals:[{a:[-30,10,-30],b:[30,10,30],color:16738047},{a:[30,10,-30],b:[-30,10,30],color:6737151}]},complex:{name:"Komplex",size:[90,30,90],obstacles:[{pos:[0,5,0],size:[6,12,6]},{pos:[-25,5,-25],size:[10,8,2]},{pos:[25,5,-25],size:[2,8,10]},{pos:[-25,5,25],size:[2,8,10]},{pos:[25,5,25],size:[10,8,2]},{pos:[-15,5,0],size:[2,15,15]},{pos:[15,5,0],size:[2,15,15]},{pos:[0,5,-15],size:[15,15,2]},{pos:[0,5,15],size:[15,15,2]},{pos:[-30,3,0],size:[5,6,5]},{pos:[30,3,0],size:[5,6,5]}],portals:[{a:[-35,12,-35],b:[35,12,35],color:16755200},{a:[35,12,-35],b:[-35,12,35],color:43775}]},pyramid:{name:"Pyramide",size:[80,35,80],obstacles:[{pos:[0,2,0],size:[20,4,20]},{pos:[0,6,0],size:[15,4,15]},{pos:[0,10,0],size:[10,4,10]},{pos:[0,14,0],size:[5,4,5]},{pos:[-30,5,-30],size:[3,10,3]},{pos:[30,5,-30],size:[3,10,3]},{pos:[-30,5,30],size:[3,10,3]},{pos:[30,5,30],size:[3,10,3]}],portals:[{a:[0,25,-30],b:[0,25,30],color:16729343}]}},KEYS:{PLAYER_1:{UP:"KeyW",DOWN:"KeyS",LEFT:"KeyA",RIGHT:"KeyD",ROLL_LEFT:"KeyQ",ROLL_RIGHT:"KeyE",BOOST:"ShiftLeft",SHOOT:"KeyF",NEXT_ITEM:"KeyR",DROP:"KeyG",CAMERA:"KeyC"},PLAYER_2:{UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",ROLL_LEFT:"KeyN",ROLL_RIGHT:"KeyM",BOOST:"ShiftRight",SHOOT:"KeyJ",NEXT_ITEM:"KeyL",DROP:"KeyH",CAMERA:"KeyV"}}};class lg{constructor(t){this.canvas=t,this.renderer=new Fl({canvas:this.canvas,antialias:window.devicePixelRatio<=1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.setSize(window.innerWidth,window.innerHeight),this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nc,this.renderer.toneMapping=Fr,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(D.COLORS.BACKGROUND),this.scene=new Sm,this.scene.fog=new eo(D.COLORS.BACKGROUND,50,200),this._setupLights(),this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[],this.splitScreen=!1,window.addEventListener("resize",()=>this._onResize()),this._tmpVec=new b,this._tmpVec2=new b,this._tmpLookAt=new b,this._tmpCamDir=new b,this._tmpCamProbe=new b}_setupLights(){const t=new ag(D.COLORS.AMBIENT_LIGHT,.8);this.scene.add(t);const e=new $a(16777215,.8);e.position.set(30,50,30),e.castShadow=!0,e.shadow.mapSize.set(D.RENDER.SHADOW_MAP_SIZE,D.RENDER.SHADOW_MAP_SIZE),e.shadow.camera.near=1,e.shadow.camera.far=150,e.shadow.camera.left=-60,e.shadow.camera.right=60,e.shadow.camera.top=60,e.shadow.camera.bottom=-60,this.scene.add(e);const n=new $a(4482730,.3);n.position.set(-20,30,-10),this.scene.add(n)}createCamera(t){const e=new ze(D.CAMERA.FOV,this._getAspect(),D.CAMERA.NEAR,D.CAMERA.FAR);return e.position.set(0,15,20),this.cameras.push(e),this.cameraTargets.push({position:new b,lookAt:new b}),this.cameraModes.push(0),this.cameraBoostBlend.push(0),e}setSplitScreen(t){this.splitScreen=t,this._updateCameraAspects()}cycleCamera(t){t<this.cameraModes.length&&(this.cameraModes[t]=(this.cameraModes[t]+1)%D.CAMERA.MODES.length)}getCameraMode(t){return D.CAMERA.MODES[this.cameraModes[t]||0]}updateCamera(t,e,n,i,r=null,o=!1,a=!1,l=null,c=null){if(t>=this.cameras.length)return;const h=this.cameras[t],u=this.cameraTargets[t],d=this.getCameraMode(t),m=D.CAMERA.SMOOTHING,g=d==="FIRST_PERSON"&&!0&&!!c,_=D.CAMERA.FIRST_PERSON_NOSE_CLEARANCE,p=g&&d==="FIRST_PERSON",f=d==="FIRST_PERSON"&&a?1:0,A=Math.max(.001,D.CAMERA.FIRST_PERSON_BOOST_BLEND_SPEED),v=1-Math.exp(-A*Math.max(0,i)),S=this.cameraBoostBlend[t]||0,C=wn.clamp(wn.lerp(S,f,v),0,1);this.cameraBoostBlend[t]=C;const R=wn.lerp(D.CAMERA.FIRST_PERSON_OFFSET,D.CAMERA.FIRST_PERSON_BOOST_OFFSET,C);if(o&&r){d==="THIRD_PERSON"?(this._tmpVec.set(0,D.CAMERA.FOLLOW_HEIGHT,D.CAMERA.FOLLOW_DISTANCE),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_)):(this._tmpVec.set(0,0,-R),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l)):d==="TOP_DOWN"&&(this._tmpVec.set(0,40,5),this._tmpVec.applyQuaternion(r),u.position.copy(e).add(this._tmpVec));const w=p?1:1-Math.pow(1-m,i*60);h.position.lerp(u.position,w),p?h.quaternion.copy(r):h.quaternion.slerp(r,w)}else{if(d==="THIRD_PERSON"?(this._tmpVec.copy(n).multiplyScalar(-12),this._tmpVec.y+=D.CAMERA.FOLLOW_HEIGHT,u.position.copy(e).add(this._tmpVec),this._tmpVec2.copy(n).multiplyScalar(D.CAMERA.LOOK_AHEAD),u.lookAt.copy(e).add(this._tmpVec2)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(u.position).add(this._tmpVec2)):(this._tmpVec.copy(n).multiplyScalar(R),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(e).add(this._tmpVec2)):d==="TOP_DOWN"&&(u.position.set(e.x,e.y+40,e.z+5),u.lookAt.copy(e)),p){h.position.copy(u.position),h.lookAt(u.lookAt);return}const w=1-Math.pow(1-m,i*60);h.position.lerp(u.position,w),h.getWorldDirection(this._tmpLookAt),this._tmpLookAt.multiplyScalar(10).add(h.position),this._tmpLookAt.lerp(u.lookAt,w),h.lookAt(this._tmpLookAt)}}_resolveCameraCollision(t,e,n){if(!n||typeof n.checkCollision!="function")return;const i=Math.max(.05,D.CAMERA.COLLISION_RADIUS);if(!n.checkCollision(e,i)||(this._tmpCamDir.copy(e).sub(t),this._tmpCamDir.lengthSq()<1e-6))return;let r=0,o=1,a=0;const l=Math.max(4,Math.floor(D.CAMERA.COLLISION_STEPS));for(let u=0;u<l;u++){const d=(r+o)*.5;this._tmpCamProbe.copy(t).addScaledVector(this._tmpCamDir,d),n.checkCollision(this._tmpCamProbe,i)?o=d:(a=d,r=d)}const c=Math.max(0,D.CAMERA.COLLISION_BACKOFF),h=Math.max(0,a-c);e.copy(t).addScaledVector(this._tmpCamDir,h)}render(){const t=this._width,e=this._height;this.splitScreen&&this.cameras.length>=2?(this.renderer.setViewport(0,0,t/2,e),this.renderer.setScissor(0,0,t/2,e),this.renderer.setScissorTest(!0),this.renderer.render(this.scene,this.cameras[0]),this.renderer.setViewport(t/2,0,t/2,e),this.renderer.setScissor(t/2,0,t/2,e),this.renderer.render(this.scene,this.cameras[1]),this.renderer.setScissorTest(!1)):this.cameras.length>0&&(this.renderer.setViewport(0,0,t,e),this.renderer.render(this.scene,this.cameras[0]))}_getAspect(){return this.splitScreen?this._width/2/this._height:this._width/this._height}_updateCameraAspects(){const t=this._getAspect();for(const e of this.cameras)e.aspect=t,e.updateProjectionMatrix()}_onResize(){this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.setSize(this._width,this._height),this._updateCameraAspects()}addToScene(t){this.scene.add(t)}removeFromScene(t){this.scene.remove(t)}clearScene(){const t=[];this.scene.traverse(e=>{!e.isLight&&e!==this.scene&&t.push(e)});for(const e of t)e.parent===this.scene&&this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose());this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[]}setQuality(t){t==="LOW"?(this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,.8)),this.renderer.toneMapping=fn,this.scene.fog.near=30,this.scene.fog.far=120):(this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.toneMapping=Fr,this.scene.fog.near=50,this.scene.fog.far=200),this.scene.traverse(e=>{e.isMesh&&e.material&&(e.material.needsUpdate=!0)})}}class cg{constructor(t,e){this.updateFn=t,this.renderFn=e,this.running=!1,this.lastTime=0,this.timeScale=1,this._boundLoop=this._loop.bind(this),this.frameId=null,this._errorShown=!1,this.accumulator=0,this.fixedStep=1/60}start(){this.running=!0,this.lastTime=performance.now(),this._errorShown=!1,this.frameId=requestAnimationFrame(this._boundLoop)}stop(){this.running=!1,this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null)}setTimeScale(t){this.timeScale=t}_loop(t){if(!this.running)return;const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.05);this.accumulator+=n*this.timeScale;const i=this.fixedStep*3;this.accumulator>i&&(this.accumulator=i);try{let r=!1;for(;this.accumulator>=this.fixedStep;)this.updateFn(this.fixedStep),this.accumulator-=this.fixedStep,r=!0;!r&&n>0&&this.updateFn(n*this.timeScale),this.renderFn()}catch(r){if(!this._errorShown){this._errorShown=!0,console.error("GameLoop error:",r);const o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;width:100%;padding:20px;background:#c00;color:#fff;font:16px monospace;z-index:99999;white-space:pre-wrap;",o.textContent="FEHLER: "+r.message+`

`+r.stack,document.body.appendChild(o)}}this.frameId=requestAnimationFrame(this._boundLoop)}}const hg=["UP","DOWN","LEFT","RIGHT","ROLL_LEFT","ROLL_RIGHT","BOOST","SHOOT","NEXT_ITEM","DROP","CAMERA"];function Za(s){return JSON.parse(JSON.stringify(s))}class ug{constructor(){this.keys={},this.justPressed={},this.bindings=Za(D.KEYS),this._reuseInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,nextItem:!1},window.addEventListener("keydown",t=>{this.keys[t.code]||(this.justPressed[t.code]=!0),this.keys[t.code]=!0,t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.preventDefault()})}setBindings(t){this.bindings={PLAYER_1:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_1,D.KEYS.PLAYER_1),PLAYER_2:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_2,D.KEYS.PLAYER_2)}}getBindings(){return Za(this.bindings)}_normalizePlayerBindings(t,e){const n=t||{},i={};for(const r of hg)i[r]=n[r]||e[r];return i}isDown(t){return!!this.keys[t]}wasPressed(t){return this.justPressed[t]?(this.justPressed[t]=!1,!0):!1}clearJustPressed(){this.justPressed={}}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.nextItem=!1}_isActionDown(t,e=""){return this.isDown(t)?!0:!!e&&this.isDown(e)}_wasActionPressed(t,e=""){let n=this.wasPressed(t);return e&&e!==t&&(n=this.wasPressed(e)||n),n}getPlayerInput(t,e={}){const n=!!e.includeSecondaryBindings&&t===0,i=t===0?this.bindings.PLAYER_1:this.bindings.PLAYER_2,r=n?this.bindings.PLAYER_2:null;return this._resetInput(this._reuseInput),this._reuseInput.pitchUp=this._isActionDown(i.UP,(r==null?void 0:r.UP)||""),this._reuseInput.pitchDown=this._isActionDown(i.DOWN,(r==null?void 0:r.DOWN)||""),this._reuseInput.yawLeft=this._isActionDown(i.LEFT,(r==null?void 0:r.LEFT)||""),this._reuseInput.yawRight=this._isActionDown(i.RIGHT,(r==null?void 0:r.RIGHT)||""),this._reuseInput.rollLeft=this._isActionDown(i.ROLL_LEFT,(r==null?void 0:r.ROLL_LEFT)||""),this._reuseInput.rollRight=this._isActionDown(i.ROLL_RIGHT,(r==null?void 0:r.ROLL_RIGHT)||""),this._reuseInput.boost=this._isActionDown(i.BOOST,(r==null?void 0:r.BOOST)||""),this._reuseInput.cameraSwitch=this._wasActionPressed(i.CAMERA,(r==null?void 0:r.CAMERA)||""),this._reuseInput.dropItem=this._wasActionPressed(i.DROP,(r==null?void 0:r.DROP)||""),this._reuseInput.shootItem=this._wasActionPressed(i.SHOOT,(r==null?void 0:r.SHOOT)||""),this._reuseInput.nextItem=this._wasActionPressed(i.NEXT_ITEM,(r==null?void 0:r.NEXT_ITEM)||""),this._reuseInput}}class dg{constructor(t){this.renderer=t,this.obstacles=[],this.portals=[],this.portalsEnabled=!0,this.bounds={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},this._tmpSphere=new mn}build(t){const e=D.MAPS[t]||D.MAPS.standard;this.currentMapKey=t;const n=D.ARENA.MAP_SCALE,[i,r,o]=e.size,a=i*n,l=r*n,c=o*n,h=a/2,u=l/2,d=c/2;this.bounds={minX:-h,maxX:h,minY:0,maxY:l,minZ:-d,maxZ:d};const m=this._createCheckerTexture(D.ARENA.CHECKER_LIGHT_COLOR,D.ARENA.CHECKER_DARK_COLOR),g=Math.max(1,D.ARENA.CHECKER_WORLD_SIZE),_=m.clone();_.needsUpdate=!0,_.repeat.set(Math.max(1,a/g),Math.max(1,c/g));const p=m.clone();p.needsUpdate=!0,p.repeat.set(Math.max(1,a/g),Math.max(1,l/g));const f=new Re({color:16777215,map:p,transparent:!0,opacity:.9,roughness:.75,metalness:.1,side:Ye}),A=new Re({color:16777215,map:_,roughness:.9,metalness:.05}),v=new Re({color:2763338,roughness:.4,metalness:.5,transparent:!0,opacity:.6}),S=new Xt(new Ws(a,c),A);S.rotation.x=-Math.PI/2,S.receiveShadow=!0,S.matrixAutoUpdate=!1,S.updateMatrix(),this.renderer.addToScene(S);const C=D.ARENA.WALL_THICKNESS*n;this._addWall(0,u,d+C/2,a+2*C,l,C,f),this._addWall(0,u,-d-C/2,a+2*C,l,C,f),this._addWall(-h-C/2,u,0,C,l,c,f),this._addWall(h+C/2,u,0,C,l,c,f),this._addWall(0,l,0,a,C,c,f);for(const R of e.obstacles){const[w,V,y]=R.pos,[T,F,W]=R.size;this._addObstacle(w*n,V*n,y*n,T*n,F*n,W*n,v)}this._buildPortals(e,n),this._addParticles(a,l,c)}_buildPortals(t,e){if(this.portals=[],!this.portalsEnabled)return;const n=Math.max(0,Math.floor(D.GAMEPLAY.PORTAL_COUNT||0));if(n>0){this._buildFixedDynamicPortals(n);return}if(Array.isArray(t.portals))for(const i of t.portals)this._createPortalFromDef(i,e);this._validatePortalPlacements()}_createPortalFromDef(t,e){const n=this._resolvePortalPosition(new b(t.a[0]*e,t.a[1]*e,t.a[2]*e),11),i=this._resolvePortalPosition(new b(t.b[0]*e,t.b[1]*e,t.b[2]*e),29),r=t.color||65484;this._addPortalInstance(n,i,r,"NEUTRAL","NEUTRAL")}_buildFixedDynamicPortals(t){D.GAMEPLAY.PLANAR_MODE?this._buildFixedPlanarPortals(t):this._buildFixed3DPortals(t)}_buildFixed3DPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPortalSlots3D();if(!(n.length<2))for(let i=0;i<t;i++){const r=n[i*2%n.length],o=n[(i*2+5)%n.length],a=n[(i*2+7)%n.length],l=this._portalPositionFromSlot(r,i*13+5);let c=this._portalPositionFromSlot(o,i*17+9);l.distanceToSquared(c)<64&&(c=this._portalPositionFromSlot(a,i*23+3)),this._addPortalInstance(l,c,e[i%e.length],"NEUTRAL","NEUTRAL")}}_buildFixedPlanarPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPlanarAnchors(),i=this.getPortalLevelsFallback();if(n.length===0||i.length<2)return;const r=i.length-1;for(let o=0;o<t;o++){const a=n[o%n.length],l=(o+Math.floor(o/Math.max(1,n.length)))%r,c=i[l],h=i[l+1],u=this._resolvePlanarElevatorPair(a[0],a[1],c,h,o*29+7);u&&this._addPortalInstance(u.low,u.high,e[o%e.length],"UP","DOWN")}}_getMapPortalSlots3D(){const t={standard:[[-.75,.18,-.75],[.75,.18,.75],[.75,.35,-.75],[-.75,.35,.75],[-.2,.52,-.82],[.2,.52,.82],[-.82,.62,.2],[.82,.62,-.2],[0,.26,-.35],[0,.58,.35],[-.45,.72,0],[.45,.72,0]],empty:[[-.78,.2,-.78],[.78,.2,.78],[.78,.2,-.78],[-.78,.2,.78],[0,.45,-.82],[0,.45,.82],[-.82,.45,0],[.82,.45,0],[-.35,.72,-.35],[.35,.72,.35],[.35,.72,-.35],[-.35,.72,.35]],maze:[[-.8,.22,-.6],[.8,.22,.6],[-.8,.22,.6],[.8,.22,-.6],[-.25,.5,-.8],[.25,.5,.8],[-.6,.62,0],[.6,.62,0],[0,.35,-.2],[0,.35,.2],[-.4,.75,-.35],[.4,.75,.35]],complex:[[-.82,.2,-.82],[.82,.2,.82],[.82,.2,-.82],[-.82,.2,.82],[-.5,.42,-.1],[.5,.42,.1],[-.1,.55,.5],[.1,.55,-.5],[0,.72,-.72],[0,.72,.72],[-.72,.72,0],[.72,.72,0]],pyramid:[[-.78,.18,-.78],[.78,.18,.78],[.78,.18,-.78],[-.78,.18,.78],[-.45,.38,-.45],[.45,.38,.45],[0,.58,-.78],[0,.58,.78],[-.78,.58,0],[.78,.58,0],[-.2,.78,0],[.2,.78,0]]};return t[this.currentMapKey]||t.standard}_getMapPlanarAnchors(){const t={standard:[[-.7,-.7],[.7,-.7],[.7,.7],[-.7,.7],[0,-.45],[0,.45],[-.45,0],[.45,0]],empty:[[-.75,-.75],[.75,-.75],[.75,.75],[-.75,.75],[0,-.55],[0,.55],[-.55,0],[.55,0]],maze:[[-.78,-.62],[.78,-.62],[.78,.62],[-.78,.62],[0,-.72],[0,.72],[-.52,0],[.52,0]],complex:[[-.82,-.82],[.82,-.82],[.82,.82],[-.82,.82],[-.55,0],[.55,0],[0,-.55],[0,.55]],pyramid:[[-.78,-.78],[.78,-.78],[.78,.78],[-.78,.78],[-.48,0],[.48,0],[0,-.48],[0,.48]]};return t[this.currentMapKey]||t.standard}_portalPositionFromSlot(t,e){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,r=(t[0]+1)*.5,o=t[1],a=(t[2]+1)*.5,l=new b(n.minX+i+r*(n.maxX-n.minX-2*i),n.minY+i+o*(n.maxY-n.minY-2*i),n.minZ+i+a*(n.maxZ-n.minZ-2*i));return this._resolvePortalPosition(l,e)}_portalPositionFromXZLevel(t,e,n,i){const r=this.bounds,o=D.PORTAL.RING_SIZE+2.5,a=new b(r.minX+o+(t+1)*.5*(r.maxX-r.minX-2*o),n,r.minZ+o+(e+1)*.5*(r.maxZ-r.minZ-2*o));return this._resolvePortalPosition(a,i)}_resolvePlanarElevatorPair(t,e,n,i,r=0){const o=Math.min(n,i),a=Math.max(n,i),l=this.bounds,c=D.PORTAL.RING_SIZE+2.5,h=D.PORTAL.RADIUS*.75,u=l.minX+c+(t+1)*.5*(l.maxX-l.minX-2*c),d=l.minZ+c+(e+1)*.5*(l.maxZ-l.minZ-2*c),m=new b,g=new b;for(let v=0;v<28;v++){const S=(r+v*41)%360*Math.PI/180,C=v===0?0:2.2+(v-1)*1.2,R=Math.max(l.minX+c,Math.min(l.maxX-c,u+Math.cos(S)*C)),w=Math.max(l.minZ+c,Math.min(l.maxZ-c,d+Math.sin(S)*C));if(m.set(R,o,w),g.set(R,a,w),!this.checkCollision(m,h)&&!this.checkCollision(g,h))return{low:m.clone(),high:g.clone()}}const _=this._resolvePortalPosition(new b(u,o,d),r),p=new b(_.x,a,_.z);if(!this.checkCollision(p,h))return{low:_,high:p};const f=this._resolvePortalPosition(new b(u,a,d),r+17),A=new b(f.x,o,f.z);return this.checkCollision(A,h)?null:{low:A,high:f}}_resolvePortalPosition(t,e=0){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,r=D.PORTAL.RADIUS*.75;if(!this.checkCollision(t,r))return t;const o=new b;for(let a=0;a<20;a++){const l=(e+a*37)%360*Math.PI/180,c=2.5+a*1.3,h=(a%5-2)*1.1;if(o.set(t.x+Math.cos(l)*c,t.y+h,t.z+Math.sin(l)*c),o.x=Math.max(n.minX+i,Math.min(n.maxX-i,o.x)),o.y=Math.max(n.minY+i,Math.min(n.maxY-i,o.y)),o.z=Math.max(n.minZ+i,Math.min(n.maxZ-i,o.z)),!this.checkCollision(o,r))return o.clone()}return t}_addPortalInstance(t,e,n,i="NEUTRAL",r="NEUTRAL"){const o=this._createPortalMesh(t,n,i),a=this._createPortalMesh(e,n,r);this.portals.push({posA:t,posB:e,meshA:o,meshB:a,color:n,cooldowns:new Map})}_createPortalMesh(t,e,n="NEUTRAL"){const i=new An,r=D.PORTAL.RING_SIZE;let o=e;n==="UP"&&(o=65280),n==="DOWN"&&(o=16711680);const a=new Gs(r,.3,16,32),l=new Re({color:o,emissive:o,emissiveIntensity:1.2,roughness:.2,metalness:.8}),c=new Xt(a,l);i.add(c);const h=new so(r*.85,32),u=new $e({color:o,transparent:!0,opacity:.15,side:Ye}),d=new Xt(h,u);i.add(d);const m=new Gs(r*.6,.15,12,24),g=new Re({color:16777215,emissive:o,emissiveIntensity:.5,transparent:!0,opacity:.6}),_=new Xt(m,g);if(i.add(_),n!=="NEUTRAL"){const p=new dn(.8,2.5,8),f=new $e({color:o,transparent:!0,opacity:.8}),A=new Xt(p,f);n==="UP"?A.position.y=0:n==="DOWN"&&(A.rotation.x=Math.PI,A.position.y=0),i.add(A),i.userData.arrow=A,i.userData.direction=n}return i.position.copy(t),this.renderer.addToScene(i),i}toggleBeams(){}checkPortal(t,e,n){if(!this.portalsEnabled)return null;const i=D.PORTAL.RADIUS,r=(i+e)*(i+e);for(const o of this.portals){if(o.cooldowns.has(n)&&o.cooldowns.get(n)>0)continue;const a=t.distanceToSquared(o.posA),l=t.distanceToSquared(o.posB);if(a<r){const c=o.posA.distanceTo(o.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return o.cooldowns.set(n,h),{target:o.posB,portal:o}}if(l<r){const c=o.posA.distanceTo(o.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return o.cooldowns.set(n,h),{target:o.posA,portal:o}}}return null}_createCheckerTexture(t,e){const r=document.createElement("canvas");r.width=128,r.height=128;const o=r.getContext("2d"),a=`#${t.toString(16).padStart(6,"0")}`,l=`#${e.toString(16).padStart(6,"0")}`;o.fillStyle=a,o.fillRect(0,0,64,64),o.fillRect(64,64,64,64),o.fillStyle=l,o.fillRect(64,0,64,64),o.fillRect(0,64,64,64);const c=new Tm(r);return c.wrapS=Gi,c.wrapT=Gi,c.magFilter=ye,c.minFilter=Cs,c}_addWall(t,e,n,i,r,o,a){const l=new Ze(i,r,o),c=new Xt(l,a);c.position.set(t,e,n),c.matrixAutoUpdate=!1,c.updateMatrix(),this.renderer.addToScene(c);const h=new tn().setFromObject(c);this.obstacles.push({mesh:c,box:h,isWall:!0})}_addObstacle(t,e,n,i,r,o,a){const l=new Ze(i,r,o),c=new zm(l),h=new zl({color:4482730,transparent:!0,opacity:.5}),u=new Xt(l,a.clone());u.position.set(t,e,n),u.castShadow=!1,u.receiveShadow=!1,u.matrixAutoUpdate=!1,u.updateMatrix(),this.renderer.addToScene(u);const d=new Em(c,h);d.position.copy(u.position),d.matrixAutoUpdate=!1,d.updateMatrix(),this.renderer.addToScene(d);const m=new tn().setFromObject(u);this.obstacles.push({mesh:u,box:m,isWall:!1})}_addParticles(t,e,n){const r=new Me,o=new Float32Array(200*3);for(let l=0;l<200;l++)o[l*3]=(Math.random()-.5)*t,o[l*3+1]=Math.random()*e,o[l*3+2]=(Math.random()-.5)*n;r.setAttribute("position",new Ge(o,3));const a=new kl({color:4491519,size:.15,transparent:!0,opacity:.4,sizeAttenuation:!0,sizeAttenuation:!0});this.particles=new Am(r,a),this.renderer.addToScene(this.particles)}checkCollision(t,e){const n=this.bounds;if(t.x-e<n.minX||t.x+e>n.maxX||t.y-e<n.minY||t.y+e>n.maxY||t.z-e<n.minZ||t.z+e>n.maxZ)return!0;this._tmpSphere.center.copy(t),this._tmpSphere.radius=e;for(const i of this.obstacles)if(i.box.intersectsSphere(this._tmpSphere))return!0;return!1}getRandomPosition(t=5){const e=this.bounds;for(let n=0;n<50;n++){const i=e.minX+t+Math.random()*(e.maxX-e.minX-2*t),r=3+Math.random()*(e.maxY-6),o=e.minZ+t+Math.random()*(e.maxZ-e.minZ-2*t),a=new b(i,r,o);if(!this.checkCollision(a,3))return a}return new b(0,D.PLAYER.START_Y,0)}getRandomPositionOnLevel(t,e=5){const n=this.bounds,i=Math.max(n.minY+3,Math.min(n.maxY-3,t));for(let r=0;r<50;r++){const o=n.minX+e+Math.random()*(n.maxX-n.minX-2*e),a=n.minZ+e+Math.random()*(n.maxZ-n.minZ-2*e),l=new b(o,i,a);if(!this.checkCollision(l,3))return l}return new b(0,i,0)}getPortalLevelsFallback(){const t=this.bounds,e=Math.max(1,t.maxY-t.minY),n=Math.max(2,Math.floor(D.GAMEPLAY.PLANAR_LEVEL_COUNT||5)),i=.18,r=.82,o=[];for(let a=0;a<n;a++){const l=n<=1?.5:a/(n-1),c=i+(r-i)*l;o.push(t.minY+e*c)}return o}getPortalLevels(){const t=[];for(const n of this.portals)for(const i of[n.posA.y,n.posB.y]){let r=!1;for(const o of t)if(Math.abs(o-i)<=.35){r=!0;break}r||t.push(i)}return t.length===0?this.getPortalLevelsFallback():(t.sort((n,i)=>n-i),t)}update(t){this.particles&&(this.particles.rotation.y+=t*.02);const e=D.PORTAL.ROTATION_SPEED;for(const n of this.portals){n.meshA&&(n.meshA.rotation.z+=t*e,n.meshA.rotation.y+=t*e*.3),n.meshB&&(n.meshB.rotation.z-=t*e,n.meshB.rotation.y-=t*e*.3);const i=[];for(const[r,o]of n.cooldowns){const a=o-t;a<=0?i.push(r):n.cooldowns.set(r,a)}for(let r=0;r<i.length;r++)n.cooldowns.delete(i[r])}}_validatePortalPlacements(){if(!this.portals||this.portals.length===0)return;const t=D.GAMEPLAY.PLANAR_MODE?D.PORTAL.MIN_PAIR_DISTANCE_PLANAR:D.PORTAL.MIN_PAIR_DISTANCE,e=t*t;for(let n=this.portals.length-1;n>=0;n--){const i=this.portals[n];i.posA.distanceToSquared(i.posB)<e&&(console.warn(`[Arena] Portal pair ${n} too close together! Removing.`),this.portals.splice(n,1))}}}const fg=new wi(1,1,1,4),pg=new b(0,1,0),Xe=new le,Rs=10;class mg{constructor(t,e){this.renderer=t,this.color=e,this.maxSegments=D.TRAIL.MAX_SEGMENTS,this.writeIndex=0,this.segmentCount=0,this._dirty=!1,this.timeSinceUpdate=0,this.hasLastPosition=!1,this.lastX=0,this.lastY=0,this.lastZ=0,this.inGap=!1,this.gapTimer=0,this.width=D.TRAIL.WIDTH,this._tmpDir=new b,this.material=new Re({color:e,emissive:e,emissiveIntensity:.3,roughness:.3,metalness:.6}),this.mesh=new Bl(fg,this.material,this.maxSegments),this.mesh.instanceMatrix.setUsage(_l),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,Xe.scale.set(0,0,0),Xe.updateMatrix();for(let n=0;n<this.maxSegments;n++)this.mesh.setMatrixAt(n,Xe.matrix);this.renderer.addToScene(this.mesh),this.segmentsData=new Float32Array(this.maxSegments*7),this.grid=new Map,this.segmentCells=new Int32Array(this.maxSegments),this._tmpCollisionNormal=new b,this._collisionResult={hit:!0,normal:this._tmpCollisionNormal}}setWidth(t){this.width=t}resetWidth(){this.width=D.TRAIL.WIDTH}forceGap(t=.5){this.inGap=!0,this.gapTimer=t,this.hasLastPosition=!1}update(t,e,n){if(this.inGap){this.gapTimer-=t,this.gapTimer<=0&&(this.inGap=!1),this._setLastPosition(e);return}if(this.timeSinceUpdate+=t,this.timeSinceUpdate>=D.TRAIL.UPDATE_INTERVAL){if(this.timeSinceUpdate-=D.TRAIL.UPDATE_INTERVAL,Math.random()<D.TRAIL.GAP_CHANCE){this.inGap=!0,this.gapTimer=D.TRAIL.GAP_DURATION,this._setLastPosition(e);return}this.hasLastPosition&&this._addSegment(this.lastX,this.lastY,this.lastZ,e.x,e.y,e.z),this._setLastPosition(e)}this._dirty&&(this.mesh.count=Math.min(this.segmentCount,this.maxSegments),this.mesh.instanceMatrix.needsUpdate=!0,this._dirty=!1)}_setLastPosition(t){this.hasLastPosition=!0,this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z}_getKey(t,e){const n=Math.floor(t/Rs),i=Math.floor(e/Rs);return(n+1e3)*2e3+(i+1e3)}_addSegment(t,e,n,i,r,o){const a=i-t,l=r-e,c=o-n,h=Math.sqrt(a*a+l*l+c*c);if(h<.01)return;if(this.segmentCount>=this.maxSegments){const f=this.segmentCells[this.writeIndex];if(this.grid.has(f)){const A=this.grid.get(f),v=A.indexOf(this.writeIndex);if(v!==-1){const S=A[A.length-1];A[v]=S,A.pop()}A.length===0&&this.grid.delete(f)}}const u=this.width*.5,d=(t+i)*.5,m=(e+r)*.5,g=(n+o)*.5;Xe.position.set(d,m,g),this._tmpDir.set(a/h,l/h,c/h),Xe.quaternion.setFromUnitVectors(pg,this._tmpDir),Xe.scale.set(u,h,u),Xe.updateMatrix(),this.mesh.setMatrixAt(this.writeIndex,Xe.matrix),this._dirty=!0;const _=this.writeIndex*7;this.segmentsData[_]=t,this.segmentsData[_+1]=e,this.segmentsData[_+2]=n,this.segmentsData[_+3]=i,this.segmentsData[_+4]=r,this.segmentsData[_+5]=o,this.segmentsData[_+6]=u;const p=this._getKey(d,g);this.grid.has(p)||this.grid.set(p,[]),this.grid.get(p).push(this.writeIndex),this.segmentCells[this.writeIndex]=p,this.writeIndex=(this.writeIndex+1)%this.maxSegments,this.segmentCount<this.maxSegments&&this.segmentCount++}_checkCollisionInternal(t,e,n,i=null){if(this.segmentCount===0)return!1;const r=Math.floor(t.x/Rs),o=Math.floor(t.z/Rs);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=r+a,h=o+l,u=(c+1e3)*2e3+(h+1e3),d=this.grid.get(u);if(d)for(let m=0;m<d.length;m++){const g=d[m];if((this.writeIndex-1-g+this.maxSegments)%this.maxSegments<n)continue;const p=g*7,f=this.segmentsData[p+6],A=e+f,v=this.segmentsData[p],S=this.segmentsData[p+3],C=(v<S?v:S)-f,R=(v>S?v:S)+f;if(t.x<C||t.x>R)continue;const w=this.segmentsData[p+2],V=this.segmentsData[p+5],y=(w<V?w:V)-f,T=(w>V?w:V)+f;if(t.z<y||t.z>T)continue;const F=this.segmentsData[p],W=this.segmentsData[p+1],Q=this.segmentsData[p+2],I=this.segmentsData[p+3],O=this.segmentsData[p+4],k=this.segmentsData[p+5],$=I-F,q=O-W,K=k-Q,j=t.x-F,it=t.y-W,rt=t.z-Q,H=$*$+q*q+K*K;let Z=0;H>1e-6&&(Z=(j*$+it*q+rt*K)/H,Z<0?Z=0:Z>1&&(Z=1));const ft=F+Z*$,St=W+Z*q,gt=Q+Z*K,Tt=t.x-ft,Pt=t.y-St,xt=t.z-gt,Ct=Tt*Tt+Pt*Pt+xt*xt;if(Ct<=A*A){if(i){const P=Math.sqrt(Ct)||.001;i.set(Tt/P,Pt/P,xt/P)}return!0}}}return!1}checkCollisionFast(t,e,n=20){return this._checkCollisionInternal(t,e,n,null)}checkCollision(t,e,n=20){return this._checkCollisionInternal(t,e,n,this._tmpCollisionNormal)?this._collisionResult:!1}_distanceSqPointToSegment(t,e,n,i,r,o,a,l,c){const h=a-i,u=l-r,d=c-o,m=t-i,g=e-r,_=n-o,p=h*h+u*u+d*d;if(p<=1e-6)return m*m+g*g+_*_;let f=(m*h+g*u+_*d)/p;f<0?f=0:f>1&&(f=1);const A=i+f*h,v=r+f*u,S=o+f*d,C=t-A,R=e-v,w=n-S;return C*C+R*R+w*w}clear(){Xe.scale.set(0,0,0),Xe.updateMatrix();for(let t=0;t<this.maxSegments;t++)this.mesh.setMatrixAt(t,Xe.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.count=0,this.writeIndex=0,this.segmentCount=0,this.hasLastPosition=!1,this.timeSinceUpdate=0,this.inGap=!1,this.grid.clear(),this.segmentCells.fill(0)}dispose(){this.renderer.removeFromScene(this.mesh),this.mesh.dispose(),this.material.dispose()}}const Qt={};function gg(){if(Qt.body)return;Qt.body=new dn(.35,3.2,8),Qt.body.rotateX(Math.PI/2),Qt.cockpit=new ks(.28,10,10,0,Math.PI*2,0,Math.PI/2),Qt.nozzle=new wi(.2,.25,.4,8),Qt.nozzle.rotateX(Math.PI/2),Qt.flameInner=new dn(.15,1,8),Qt.flameInner.rotateX(-Math.PI/2),Qt.flameMid=new dn(.22,1.4,8),Qt.flameMid.rotateX(-Math.PI/2),Qt.flameOuter=new dn(.28,1.8,8),Qt.flameOuter.rotateX(-Math.PI/2),Qt.shield=new ks(1.5,8,8);const s=new Is;s.moveTo(0,0),s.lineTo(-1.8,.6),s.lineTo(-.3,.8),s.lineTo(0,0),Qt.wingL=new ki(s,{depth:.06,bevelEnabled:!1});const t=new Is;t.moveTo(0,0),t.lineTo(1.8,.6),t.lineTo(.3,.8),t.lineTo(0,0),Qt.wingR=new ki(t,{depth:.06,bevelEnabled:!1});const e=new Is;e.moveTo(0,0),e.lineTo(0,.8),e.lineTo(.4,.1),e.lineTo(0,0),Qt.fin=new ki(e,{depth:.04,bevelEnabled:!1})}class ja{constructor(t,e,n,i=!1){this.renderer=t,this.index=e,this.color=n,this.isBot=i,this.alive=!0,this.score=0,this.position=new b,this.velocity=new b(0,0,-1),this.quaternion=new Wn,this.speed=D.PLAYER.SPEED,this.baseSpeed=D.PLAYER.SPEED,this._tmpEuler=new Pn(0,0,0,"YXZ"),this._tmpEuler2=new Pn(0,0,0,"YXZ"),this._tmpQuat=new Wn,this._tmpVec=new b,this._tmpDir=new b,this._tmpAimRight=new b,this._tmpAimUp=new b,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.inventory=[],this.selectedItemIndex=0,this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.invertPitchBase=!1,this.modelScale=D.PLAYER.MODEL_SCALE||1,this.cockpitCamera=!1,this.spawnProtectionTimer=0,this.planarAimOffset=0,this.cameraMode=0,this._createModel(),this.trail=new mg(t,n)}_createModel(){gg(),this.group=new An;const t=new Re({color:this.color,emissive:this.color,emissiveIntensity:.2,roughness:.3,metalness:.7}),e=new Re({color:this.color,emissive:this.color,emissiveIntensity:.1,roughness:.4,metalness:.8}),n=new Xt(Qt.body,t);n.castShadow=!1,this.group.add(n);const i=new Re({color:8965375,emissive:2254506,emissiveIntensity:.3,transparent:!0,opacity:.7,roughness:.1,metalness:.9}),r=new Xt(Qt.cockpit,i);r.rotation.x=-Math.PI/2,r.position.set(0,.2,-.7),this.group.add(r),this.firstPersonAnchor=new le,this.firstPersonAnchor.position.set(0,D.PLAYER.NOSE_CAMERA_LOCAL_Y,D.PLAYER.NOSE_CAMERA_LOCAL_Z),this.group.add(this.firstPersonAnchor);const o=new Xt(Qt.wingL,e);o.position.set(0,-.02,.1),o.castShadow=!1,this.group.add(o);const a=new Xt(Qt.wingR,e);a.position.set(0,-.02,.1),a.castShadow=!1,this.group.add(a);const l=new Xt(Qt.fin,t);l.position.set(-.02,.15,1),l.castShadow=!1,this.group.add(l);const c=new Re({color:3355443,roughness:.6,metalness:.9}),h=new Xt(Qt.nozzle,c);h.position.z=1.5,this.group.add(h),this.flameGroup=new An,this.flameGroup.position.z=1.9,this.flames=[];const u=new $e({color:16777130,transparent:!0,opacity:.9}),d=new Xt(Qt.flameInner,u);this.flameGroup.add(d),this.flames.push(d);const m=new $e({color:16746496,transparent:!0,opacity:.6}),g=new Xt(Qt.flameMid,m);this.flameGroup.add(g),this.flames.push(g);const _=new $e({color:16724736,transparent:!0,opacity:.35}),p=new Xt(Qt.flameOuter,_);this.flameGroup.add(p),this.flames.push(p),this.group.add(this.flameGroup);const f=new $e({color:4491519,transparent:!0,opacity:0,wireframe:!0});this.shieldMesh=new Xt(Qt.shield,f),this.group.add(this.shieldMesh),this.renderer.addToScene(this.group),this._applyModelScale()}spawn(t,e=null){this.position.copy(t),this.alive=!0,this.speed=this.baseSpeed,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.spawnProtectionTimer=D.PLAYER.SPAWN_PROTECTION,this.planarAimOffset=0;const n=D.PLAYER.START_Y,i=Number.isFinite(t==null?void 0:t.y)?t.y:n;if(this.currentPlanarY=D.GAMEPLAY.PLANAR_MODE?i:n,this.trail.clear(),this.trail.resetWidth(),this.group.visible=!0,e&&e.lengthSq()>1e-4)this._tmpVec.copy(e).normalize(),this.quaternion.setFromUnitVectors(this._tmpDir.set(0,0,-1),this._tmpVec);else{const r=Math.random()*Math.PI*2;this._tmpEuler.set(0,r,0,"YXZ"),this.quaternion.setFromEuler(this._tmpEuler)}this._updateModel()}update(t,e){if(!this.alive)return;this.spawnProtectionTimer=Math.max(0,this.spawnProtectionTimer-t),this._updateEffects(t);const n=D.PLAYER.TURN_SPEED*t,i=D.PLAYER.ROLL_SPEED*t;let r=0,o=0,a=0;e&&(r=(e.pitchUp?1:0)-(e.pitchDown?1:0),o=(e.yawLeft?1:0)-(e.yawRight?1:0),a=(e.rollLeft?1:0)-(e.rollRight?1:0),this.invertPitchBase&&(r*=-1),this.invertControls&&(r*=-1,o*=-1),D.GAMEPLAY.PLANAR_MODE&&(r=0),e.boost&&this.boostCooldown<=0&&!this.isBoosting&&(this.isBoosting=!0,this.boostTimer=D.PLAYER.BOOST_DURATION)),this._tmpEuler.set(r*n,o*n,a*i,"YXZ"),this._tmpQuat.setFromEuler(this._tmpEuler),this.quaternion.multiply(this._tmpQuat),D.PLAYER.AUTO_ROLL&&a===0?(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.z*=1-D.PLAYER.AUTO_ROLL_SPEED*t,D.GAMEPLAY.PLANAR_MODE&&(this._tmpEuler2.x=0),this.quaternion.setFromEuler(this._tmpEuler2)):D.GAMEPLAY.PLANAR_MODE&&(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.x=0,this.quaternion.setFromEuler(this._tmpEuler2)),this.isBoosting&&(this.boostTimer-=t,this.speed=this.baseSpeed*D.PLAYER.BOOST_MULTIPLIER,this.boostTimer<=0&&(this.isBoosting=!1,this.boostCooldown=D.PLAYER.BOOST_COOLDOWN,this.speed=this.baseSpeed)),this.boostCooldown>0&&(this.boostCooldown-=t),this._tmpVec.set(0,0,-1).applyQuaternion(this.quaternion),this.velocity.copy(this._tmpVec).multiplyScalar(this.speed),D.GAMEPLAY.PLANAR_MODE&&(this.velocity.y=0,this.position.y=this.currentPlanarY),this.position.x+=this.velocity.x*t,D.GAMEPLAY.PLANAR_MODE||(this.position.y+=this.velocity.y*t),this.position.z+=this.velocity.z*t,this.trail.update(t,this.position,this._tmpVec),this._updateModel()}_updateModel(){this.group.position.copy(this.position),this.group.quaternion.copy(this.quaternion);const t=performance.now()*.001;if(this.flames&&this.flames.length>0){const e=this.isBoosting?3:1,n=Math.sin(t*25)*.15+Math.sin(t*37)*.1,i=(.4+n*.3)*e;this.flames[0].scale.set(1,1,i),this.flames[0].material.opacity=this.isBoosting?1:.7;const r=(.35+n*.2)*e;this.flames[1].scale.set(1,1,r),this.flames[1].material.opacity=this.isBoosting?.8:.45;const o=(.3+n*.15)*e;this.flames[2].scale.set(1,1,o),this.flames[2].material.opacity=this.isBoosting?.6:.2,this.isBoosting?(this.flames[0].material.color.setHex(16777215),this.flames[1].material.color.setHex(16755251),this.flames[2].material.color.setHex(16729088)):(this.flames[0].material.color.setHex(16777130),this.flames[1].material.color.setHex(16746496),this.flames[2].material.color.setHex(16724736))}this.shieldMesh&&(this.shieldMesh.material.opacity=this.hasShield?.25+Math.sin(t*5)*.1:0)}_updateEffects(t){for(let e=this.activeEffects.length-1;e>=0;e--){const n=this.activeEffects[e];n.remaining-=t,n.remaining<=0&&(this._removeEffect(n),this.activeEffects.splice(e,1))}}_applyModelScale(){this.group&&this.group.scale.setScalar(this.modelScale)}setControlOptions(t={}){typeof t.invertPitch=="boolean"&&(this.invertPitchBase=t.invertPitch),typeof t.modelScale=="number"&&(this.modelScale=t.modelScale,this._applyModelScale()),typeof t.cockpitCamera=="boolean"&&(this.cockpitCamera=t.cockpitCamera)}applyPowerup(t){const e=D.POWERUP.TYPES[t];if(!e)return;this.activeEffects=this.activeEffects.filter(i=>i.type===t?(this._removeEffect(i),!1):!0);const n={type:t,remaining:e.duration};switch(this.activeEffects.push(n),t){case"SPEED_UP":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"THICK":this.trail.setWidth(e.trailWidth);break;case"THIN":this.trail.setWidth(e.trailWidth);break;case"SHIELD":this.hasShield=!0;break;case"GHOST":this.isGhost=!0;break;case"INVERT":this.invertControls=!0;break}}_removeEffect(t){switch(t.type){case"SPEED_UP":case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED,this.speed=this.baseSpeed;break;case"THICK":case"THIN":this.trail.resetWidth();break;case"SHIELD":this.hasShield=!1;break;case"GHOST":this.isGhost=!1;break;case"INVERT":this.invertControls=!1;break}}addToInventory(t){return this.inventory.length<D.POWERUP.MAX_INVENTORY?(this.inventory.push(t),!0):!1}cycleItem(){this.inventory.length>0?this.selectedItemIndex=(this.selectedItemIndex+1)%this.inventory.length:this.selectedItemIndex=0}useItem(){if(this.inventory.length>0&&this.selectedItemIndex<this.inventory.length){const t=this.inventory.splice(this.selectedItemIndex,1)[0];return this.selectedItemIndex>=this.inventory.length&&this.inventory.length>0&&(this.selectedItemIndex=0),this.applyPowerup(t),t}return null}dropItem(){return this.inventory.length>0?this.inventory.pop():null}kill(){this.alive=!1,this.group.visible=!1}getDirection(t=null){return t?t.set(0,0,-1).applyQuaternion(this.quaternion):new b(0,0,-1).applyQuaternion(this.quaternion)}getFirstPersonCameraAnchor(t=null){const e=t||new b;return this.firstPersonAnchor?(this.firstPersonAnchor.getWorldPosition(e),e):(this.getDirection(this._tmpDir),e.copy(this.position).add(this._tmpDir))}getAimDirection(t=null){const e=t||new b;if(this.getDirection(e).normalize(),!D.GAMEPLAY.PLANAR_MODE)return e;const n=Math.min(1,Math.max(-1,this.planarAimOffset||0));if(Math.abs(n)<1e-4)return e;this._tmpAimRight.crossVectors(this._tmpDir.set(0,1,0),e),this._tmpAimRight.lengthSq()<1e-6?this._tmpAimRight.set(1,0,0):this._tmpAimRight.normalize(),this._tmpAimUp.crossVectors(e,this._tmpAimRight).normalize();const i=wn.degToRad(D.PROJECTILE.PLANAR_AIM_MAX_ANGLE_DEG)*n,r=Math.cos(i),o=Math.sin(i);return e.multiplyScalar(r).addScaledVector(this._tmpAimUp,o).normalize(),e}dispose(){this.trail.dispose(),this.renderer.removeFromScene(this.group)}}const Ja=new b(0,1,0),Qa={standard:{caution:0,portalBias:0,aggressionBias:0},empty:{caution:-.12,portalBias:-.08,aggressionBias:.16},maze:{caution:.22,portalBias:.06,aggressionBias:-.1},complex:{caution:.16,portalBias:.08,aggressionBias:-.04},pyramid:{caution:.08,portalBias:.12,aggressionBias:.03}},_g={SPEED_UP:{self:.8,offense:.2,defensiveScale:.5,emergencyScale:.1,combatSelf:.2},SLOW_DOWN:{self:-.8,offense:.9,defensiveScale:.1,emergencyScale:0,combatSelf:-.3},THICK:{self:.9,offense:.1,defensiveScale:.8,emergencyScale:.2,combatSelf:.4},THIN:{self:-.6,offense:.7,defensiveScale:.2,emergencyScale:0,combatSelf:-.2},SHIELD:{self:.5,offense:0,defensiveScale:1.2,emergencyScale:2.5,combatSelf:.8},SLOW_TIME:{self:.7,offense:.35,defensiveScale:.6,emergencyScale:.4,combatSelf:.3},GHOST:{self:.95,offense:.1,defensiveScale:1,emergencyScale:2,combatSelf:.5},INVERT:{self:-.7,offense:.85,defensiveScale:.15,emergencyScale:0,combatSelf:-.4}};function Oe(s,t,e,n=0){return{name:s,yaw:t,pitch:e,weight:n,dir:new b,risk:999,wallDist:0,trailDist:0,clearance:0,immediateDanger:!1}}class vg{constructor(t={}){this.recorder=t.recorder||null,this.currentInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1},this.reactionTimer=0,this._profileName="NORMAL",this.profile=null,this._decision={yaw:0,pitch:0,boost:!1,useItem:-1,shootItem:!1,shootItemIndex:-1},this.state={turnCommitTimer:0,committedYaw:0,committedPitch:0,recoveryActive:!1,recoveryTimer:0,recoveryCooldown:0,recoveryYaw:0,recoveryPitch:0,targetPlayer:null,targetRefreshTimer:0,itemUseCooldown:0,itemShootCooldown:0,portalIntentActive:!1,portalIntentTimer:0,portalIntentScore:0,portalEntryDistanceSq:1/0},this.sense={lookAhead:0,forwardRisk:1,bestProbe:null,targetDistanceSq:1/0,targetInFront:!1,immediateDanger:!1,pressure:0,localOpenness:0,mapCaution:0,mapPortalBias:0,mapAggressionBias:0,projectileThreat:!1,projectileEvadeYaw:0,projectileEvadePitch:0,heightBias:0,botRepulsionYaw:0,botRepulsionPitch:0,pursuitActive:!1,pursuitYaw:0,pursuitPitch:0,pursuitAimDot:0},this._checkStuckTimer=0,this._stuckScore=0,this._recentBouncePressure=0,this._hasPositionSample=!1,this._lastPos=new b,this._lastCollisionNormal=new b,this._hasCollisionNormal=!1,this._portalEntry=new b,this._portalExit=new b,this._portalTarget=null,this._tmpForward=new b,this._tmpRight=new b,this._tmpUp=new b,this._tmpVec=new b,this._tmpVec2=new b,this._tmpVec3=new b,this._probes=[Oe("forward",0,0,0),Oe("left",-1,0,.02),Oe("right",1,0,.02),Oe("leftWide",-1.8,0,.07),Oe("rightWide",1.8,0,.07),Oe("up",0,.9,.08),Oe("down",0,-.9,.08),Oe("upLeft",-.7,.7,.1),Oe("upRight",.7,.7,.1),Oe("downLeft",-.7,-.7,.1),Oe("downRight",.7,-.7,.1),Oe("backward",3.14,0,.25)],this._setDifficulty(t.difficulty||D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY),this._checkStuckTimer=this.profile.stuckCheckInterval}_setDifficulty(t){const e=D.BOT.DIFFICULTY_PROFILES||{},n=typeof t=="string"?t.toUpperCase():"NORMAL";this._profileName=e[n]?n:"NORMAL";const i={reactionTime:D.BOT.REACTION_TIME,lookAhead:D.BOT.LOOK_AHEAD,aggression:D.BOT.AGGRESSION,errorRate:0,probeSpread:.7,probeStep:2,turnCommitTime:.25,stuckCheckInterval:.4,stuckTriggerTime:1.6,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1,recoveryCooldown:1.5,itemUseCooldown:1,itemShootCooldown:.6,targetRefreshInterval:.2,portalInterest:.5,portalSeekDistance:70,portalEntryDotMin:.3,portalIntentThreshold:.2,portalIntentDuration:1,boostChance:.004};this.profile={...i,...e[this._profileName]||{}}}setDifficulty(t){this._setDifficulty(t),this.reactionTimer=0,this.state.turnCommitTimer=0,this.state.recoveryActive=!1}onBounce(t,e=null){const n=t==="TRAIL"?1.3:.9;this._recentBouncePressure=Math.min(4,this._recentBouncePressure+n),e&&(this._lastCollisionNormal.copy(e).normalize(),this._hasCollisionNormal=!0)}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.shootItemIndex=-1,t.nextItem=!1,t.useItem=-1}_resetDecision(){this._decision.yaw=0,this._decision.pitch=0,this._decision.boost=!1,this._decision.useItem=-1,this._decision.shootItem=!1,this._decision.shootItemIndex=-1}_buildBasis(t){this._tmpRight.crossVectors(Ja,t),this._tmpRight.lengthSq()<1e-6?this._tmpRight.set(1,0,0):this._tmpRight.normalize(),this._tmpUp.crossVectors(t,this._tmpRight).normalize()}_updateTimers(t){this.reactionTimer-=t,this._checkStuckTimer-=t,this._recentBouncePressure=Math.max(0,this._recentBouncePressure-t*1.35),this.state.turnCommitTimer=Math.max(0,this.state.turnCommitTimer-t),this.state.recoveryCooldown=Math.max(0,this.state.recoveryCooldown-t),this.state.targetRefreshTimer=Math.max(0,this.state.targetRefreshTimer-t),this.state.itemUseCooldown=Math.max(0,this.state.itemUseCooldown-t),this.state.itemShootCooldown=Math.max(0,this.state.itemShootCooldown-t),this.state.portalIntentTimer=Math.max(0,this.state.portalIntentTimer-t),this.state.portalIntentTimer===0&&(this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null)}_updateStuckState(t,e,n){if(!this._hasPositionSample){this._lastPos.copy(t.position),this._hasPositionSample=!0;return}if(this._checkStuckTimer>0)return;this._checkStuckTimer=this.profile.stuckCheckInterval,t.getDirection(this._tmpForward).normalize(),this._tmpVec.subVectors(t.position,this._lastPos);const i=this._tmpVec.length(),r=this._tmpVec.dot(this._tmpForward),o=i<this.profile.minProgressDistance,a=r<this.profile.minForwardProgress;o||a?this._stuckScore+=this.profile.stuckCheckInterval:this._stuckScore=Math.max(0,this._stuckScore-this.profile.stuckCheckInterval*.8),this._stuckScore+=this._recentBouncePressure*.06,this._lastPos.copy(t.position),!this.state.recoveryActive&&this.state.recoveryCooldown<=0&&this._stuckScore>=this.profile.stuckTriggerTime&&this._enterRecovery(t,e,n,"low-progress")}_selectRecoveryManeuver(t,e,n){t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const i=D.GAMEPLAY.PLANAR_MODE?[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:0,weight:.12,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.12,biasAwayFromNormal:!0}]:[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:1,weight:.1},{yaw:1,pitch:1,weight:.1},{yaw:-1,pitch:-1,weight:.1},{yaw:1,pitch:-1,weight:.1},{yaw:-1,pitch:0,weight:.14,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.14,biasAwayFromNormal:!0}],r=[3,5.5,8.5,12];let o=null,a=1/0;for(let l=0;l<i.length;l++){const c=i[l];this._tmpVec.copy(this._tmpForward).addScaledVector(this._tmpRight,c.yaw*.95),!D.GAMEPLAY.PLANAR_MODE&&c.pitch!==0&&this._tmpVec.addScaledVector(this._tmpUp,c.pitch*.75),this._tmpVec.normalize();let h=c.weight;if(c.biasAwayFromNormal&&this._hasCollisionNormal){const u=this._tmpRight.dot(this._lastCollisionNormal);(c.yaw>0&&u>0||c.yaw<0&&u<0)&&(h+=.65)}for(let u=0;u<r.length;u++){const d=r[u];this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,d);const m=e.checkCollision(this._tmpVec2,1.35),g=this._checkTrailHit(this._tmpVec2,t,n);if(m||g){h+=3.2+u*.8+(g?.9:.5);break}h+=this._estimateEnemyPressure(this._tmpVec2,t,n)*.35}if(this._hasCollisionNormal){const u=this._tmpVec.dot(this._lastCollisionNormal);h-=u*.65}if(!D.GAMEPLAY.PLANAR_MODE){const d=t.position.y+this._tmpVec.y*9;(d<e.bounds.minY+7||d>e.bounds.maxY-7)&&(h+=.85)}h<a&&(a=h,o=c)}return o}_enterRecovery(t,e,n,i){this.state.recoveryActive=!0,this.state.recoveryTimer=this.profile.recoveryDuration,this.state.recoveryCooldown=this.profile.recoveryCooldown,this._stuckScore=0;const r=this._selectRecoveryManeuver(t,e,n);this.state.recoveryYaw=(r==null?void 0:r.yaw)||(Math.random()>.5?1:-1),this.state.recoveryPitch=D.GAMEPLAY.PLANAR_MODE?0:(r==null?void 0:r.pitch)||0,D.GAMEPLAY.PLANAR_MODE||(t.position.y<e.bounds.minY+8?this.state.recoveryPitch=1:t.position.y>e.bounds.maxY-8&&(this.state.recoveryPitch=-1)),this.recorder&&this.recorder.logEvent("STUCK",t.index,`reason=${i} yaw=${this.state.recoveryYaw} pitch=${this.state.recoveryPitch}`)}_shouldBoostRecovery(t,e,n){if(this._recentBouncePressure>1.2||this.sense.forwardRisk>.62)return!1;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.copy(this._tmpForward),this._tmpVec.addScaledVector(this._tmpRight,this.state.recoveryYaw*.22),D.GAMEPLAY.PLANAR_MODE||this._tmpVec.addScaledVector(this._tmpUp,this.state.recoveryPitch*.2),this._tmpVec.normalize();const i=[3,5,7];for(let r=0;r<i.length;r++)if(this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,i[r]),e.checkCollision(this._tmpVec2,1.35)||this._checkTrailHit(this._tmpVec2,t,n))return!1;return!0}_updateRecovery(t,e,n,i){return this.state.recoveryTimer-=t,this.state.recoveryTimer<=0?(this.state.recoveryActive=!1,this.state.recoveryYaw=0,this.state.recoveryPitch=0,!1):(this._resetInput(this.currentInput),this.currentInput.boost=this._shouldBoostRecovery(e,n,i),this.state.recoveryYaw>0?this.currentInput.yawRight=!0:this.state.recoveryYaw<0&&(this.currentInput.yawLeft=!0),D.GAMEPLAY.PLANAR_MODE||(this.state.recoveryPitch>0?this.currentInput.pitchUp=!0:this.state.recoveryPitch<0&&(this.currentInput.pitchDown=!0)),!0)}_computeDynamicLookAhead(t){const e=this.profile.lookAhead,n=t.baseSpeed>0?t.speed/t.baseSpeed:1;let i=e*(1+(n-1)*.75);return t.isBoosting&&(i*=1.2),Math.max(8,i)}_mapBehavior(t){const e=t.currentMapKey||"standard";return Qa[e]||Qa.standard}_composeProbeDirection(t,e,n,i){const r=i.yaw*this.profile.probeSpread,o=i.pitch*this.profile.probeSpread;i.dir.copy(t),r!==0&&i.dir.addScaledVector(e,r),!D.GAMEPLAY.PLANAR_MODE&&o!==0&&i.dir.addScaledVector(n,o),i.dir.normalize()}_checkTrailHit(t,e,n){const i=this.state.recoveryActive?6:this._recentBouncePressure>1.4?8:12;for(let r=0;r<n.length;r++){const o=n[r];if(!o||!o.alive)continue;const a=o===e?i:0;if(o.trail.checkCollisionFast){if(o.trail.checkCollisionFast(t,1.35,a))return!0}else{const l=o.trail.checkCollision(t,1.35,a);if(l&&l.hit)return!0}}return!1}_scoreProbe(t,e,n,i,r){const o=this.profile.probeStep;let a=r;const l=Math.abs(i.yaw);l>2.5?a=r*.4:l>1.2&&(a=r*.7);let c=a,h=a,u=!1;for(let f=o;f<=a;f+=o){if(this._tmpVec.copy(t.position).addScaledVector(i.dir,f),e.checkCollision(this._tmpVec,1.35)){c=f,f<=o*1.5&&(u=!0);break}if(this._checkTrailHit(this._tmpVec,t,n)){h=f,f<=o*1.5&&(u=!0);break}}const d=t.baseSpeed>0?t.speed/t.baseSpeed:1,m=Math.max(0,d-1)*.3,g=1-Math.min(1,c/a),_=1-Math.min(1,h/a);let p=g*(1.1+this.sense.mapCaution+m)+_*(1.45+this.sense.mapCaution*.5+m*.7);p+=i.weight,u&&(p+=2.2),this.profile.errorRate>0&&Math.random()<this.profile.errorRate&&(p+=(Math.random()-.2)*.65),i.wallDist=c,i.trailDist=h,i.clearance=Math.min(c,h),i.immediateDanger=u,i.risk=p}_selectTarget(t,e){let n=null,i=-1/0,r=1/0;t.getDirection(this._tmpForward).normalize();for(let o=0;o<e.length;o++){const a=e[o];if(!a||a===t||!a.alive)continue;this._tmpVec.subVectors(a.position,t.position);const l=this._tmpVec.lengthSq();if(l<1e-4)continue;const c=1/Math.max(4,Math.sqrt(l)),h=this._tmpVec.normalize().dot(this._tmpForward);a.getDirection(this._tmpVec2).normalize(),this._tmpVec3.subVectors(t.position,a.position).normalize();const u=this._tmpVec2.dot(this._tmpVec3),d=c*.9+h*.55+u*.35;d>i&&(i=d,n=a,r=l)}this.state.targetPlayer=n,this.sense.targetDistanceSq=n?r:1/0,n?(this._tmpVec.subVectors(n.position,t.position).normalize(),this.sense.targetInFront=this._tmpVec.dot(this._tmpForward)>.52):this.sense.targetInFront=!1}_estimateEnemyPressure(t,e,n){let i=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(!a||a===e||!a.alive)continue;const l=a.position.distanceToSquared(t);l<i&&(i=l)}if(!isFinite(i))return 0;const r=Math.sqrt(i);return r>=40?0:1-r/40}_estimatePointRisk(t,e,n,i){const r=n.checkCollision(t,1.6)?1:0,o=this._checkTrailHit(t,e,i)?1:0,a=this._estimateEnemyPressure(t,e,i);return r*1.2+o*1.5+a*.6}_estimateExitSafety(t,e,n,i){const o=[{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}];let a=0;for(let l=0;l<o.length;l++)this._tmpVec3.set(t.x+o[l].x*5,t.y+o[l].y*5,t.z+o[l].z*5),(e.checkCollision(this._tmpVec3,1.6)||this._checkTrailHit(this._tmpVec3,n,i))&&a++;return a/o.length}_senseProjectiles(t,e){this.sense.projectileThreat=!1,this.sense.projectileEvadeYaw=0,this.sense.projectileEvadePitch=0;const n=this.profile.projectileAwareness||0;if(n<=0||!e||e.length===0)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let i=1/0,r=0,o=0;for(let a=0;a<e.length;a++){const l=e[a];if(l.owner===t)continue;this._tmpVec.subVectors(l.position,t.position);const c=this._tmpVec.length();if(c>25||c<.5||(this._tmpVec.normalize(),this._tmpVec2.copy(l.velocity).normalize(),-this._tmpVec2.dot(this._tmpVec)<.4))continue;const u=l.velocity.length(),d=u>1?c/u:999;if(!(d>.8)&&!(Math.random()>n)&&d<i&&(i=d,this._tmpVec3.crossVectors(this._tmpVec2,Ja).normalize(),r=this._tmpRight.dot(this._tmpVec3)>0?-1:1,!D.GAMEPLAY.PLANAR_MODE)){const g=this._tmpVec.y;o=g>.2?-1:g<-.2?1:0}}i<1/0&&(this.sense.projectileThreat=!0,this.sense.projectileEvadeYaw=r,this.sense.projectileEvadePitch=o)}_senseHeight(t,e){if(this.sense.heightBias=0,D.GAMEPLAY.PLANAR_MODE)return;const n=this.profile.heightBias||0;if(n<=0)return;const i=e.bounds,r=(i.minY+i.maxY)*.5,o=t.position.y-r,a=(i.maxY-i.minY)*.5;if(a<=0)return;const l=o/a;this.sense.heightBias=-l*n}_senseBotSpacing(t,e){this.sense.botRepulsionYaw=0,this.sense.botRepulsionPitch=0;const n=this.profile.spacingWeight||0;if(n<=0)return;const i=12;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let r=0,o=0;for(let a=0;a<e.length;a++){const l=e[a];if(!l||l===t||!l.alive||!l.isBot)continue;this._tmpVec.subVectors(t.position,l.position);const c=this._tmpVec.length();if(c>=i||c<.1)continue;const h=n*(1-c/i);this._tmpVec.normalize(),r+=this._tmpRight.dot(this._tmpVec)*h,o+=this._tmpUp.dot(this._tmpVec)*h}Math.abs(r)>.05&&(this.sense.botRepulsionYaw=r>0?1:-1),!D.GAMEPLAY.PLANAR_MODE&&Math.abs(o)>.05&&(this.sense.botRepulsionPitch=o>0?1:-1)}_evaluatePursuit(t){if(this.sense.pursuitActive=!1,this.sense.pursuitYaw=0,this.sense.pursuitPitch=0,this.sense.pursuitAimDot=0,!this.profile.pursuitEnabled||this.sense.immediateDanger||this.sense.forwardRisk>.3)return;const e=this.state.targetPlayer;if(!e||!e.alive)return;const n=this.profile.pursuitRadius||35;if(this.sense.targetDistanceSq>n*n||!this.sense.targetInFront)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.subVectors(e.position,t.position).normalize();const i=this._tmpVec.dot(this._tmpForward),r=this._tmpRight.dot(this._tmpVec),o=this._tmpUp.dot(this._tmpVec);this.sense.pursuitActive=!0,this.sense.pursuitAimDot=i,this.sense.pursuitYaw=Math.abs(r)>.05?r>0?1:-1:0,D.GAMEPLAY.PLANAR_MODE||(this.sense.pursuitPitch=Math.abs(o)>.08?o>0?1:-1:0)}_evaluatePortalIntent(t,e,n){if(!e.portalsEnabled||!e.portals||e.portals.length===0){this.state.portalIntentActive=!1,this._portalTarget=null;return}if(this.profile.portalInterest<=0){this.state.portalIntentActive=!1,this._portalTarget=null;return}const i=this.profile.portalSeekDistance,r=i*i;t.getDirection(this._tmpForward).normalize();let o=-1/0,a=null,l=null,c=1/0;for(let h=0;h<e.portals.length;h++){const u=e.portals[h],d=[{entry:u.posA,exit:u.posB},{entry:u.posB,exit:u.posA}];for(let m=0;m<d.length;m++){const{entry:g,exit:_}=d[m],p=t.position.distanceToSquared(g);if(p>r||(this._tmpVec.subVectors(g,t.position).normalize(),this._tmpVec.dot(this._tmpForward)<this.profile.portalEntryDotMin))continue;const A=this._estimatePointRisk(g,t,e,n),v=this._estimateExitSafety(_,e,t,n),S=v;if(v>=.75)continue;const C=this.sense.forwardRisk-S,R=p/r,w=C*(.8+this.profile.portalInterest)+this.sense.mapPortalBias*.5-A*.6-R*.4;w>o&&(o=w,a=g,l=_,c=p)}}if(a&&o>=this.profile.portalIntentThreshold){this.state.portalIntentActive=!0,this.state.portalIntentTimer=this.profile.portalIntentDuration,this.state.portalIntentScore=o,this.state.portalEntryDistanceSq=c,this._portalEntry.copy(a),this._portalExit.copy(l),this._portalTarget=this._portalEntry;return}this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null}_senseEnvironment(t,e,n,i){const r=this._mapBehavior(e);this.sense.mapCaution=r.caution,this.sense.mapPortalBias=r.portalBias,this.sense.mapAggressionBias=r.aggressionBias,this.sense.lookAhead=this._computeDynamicLookAhead(t),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const o=this.profile.probeCount||this._probes.length;let a=null,l=1/0,c=null,h=0,u=0;for(let g=0;g<this._probes.length&&!(g>=o);g++){const _=this._probes[g],p=Math.abs(_.pitch)>.001;D.GAMEPLAY.PLANAR_MODE&&p||(this._composeProbeDirection(this._tmpForward,this._tmpRight,this._tmpUp,_),this._scoreProbe(t,e,n,_,this.sense.lookAhead),h+=_.clearance,u++,_.name==="forward"&&(c=_),_.risk<l&&(l=_.risk,a=_))}this.sense.bestProbe=a,this.sense.forwardRisk=c?c.risk:1,this.sense.immediateDanger=!!(c&&c.immediateDanger),this.sense.localOpenness=u>0?h/u:this.sense.lookAhead*.4;const d=this._estimateEnemyPressure(t.position,t,n),m=1-Math.min(1,this.sense.localOpenness/this.sense.lookAhead);this.sense.pressure=Math.min(1.6,d*.8+m*.9+this._recentBouncePressure*.2),(this.state.targetRefreshTimer<=0||!this.state.targetPlayer||!this.state.targetPlayer.alive)&&(this._selectTarget(t,n),this.state.targetRefreshTimer=this.profile.targetRefreshInterval),this._senseProjectiles(t,i),this._evaluatePursuit(t),this._senseHeight(t,e),this._senseBotSpacing(t,n),this._evaluatePortalIntent(t,e,n)}_applyPortalSteering(t){if(!this.state.portalIntentActive||!this._portalTarget)return!1;this._tmpVec.subVectors(this._portalTarget,t.position);const e=this._tmpVec.lengthSq();if(e<9)return this.state.portalIntentActive=!1,this._portalTarget=null,!1;this._tmpVec.normalize(),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(this._tmpVec),i=this._tmpUp.dot(this._tmpVec);return this._decision.yaw=Math.abs(n)>.08?n>0?1:-1:0,D.GAMEPLAY.PLANAR_MODE||(this._decision.pitch=Math.abs(i)>.08?i>0?1:-1:0),e<196&&this.sense.forwardRisk<.75&&(this._decision.boost=!0),!0}_decideSteering(t){const e=this.sense.bestProbe;if(!e){this._decision.yaw=Math.random()>.5?1:-1,this._decision.pitch=0;return}t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(e.dir),i=this._tmpUp.dot(e.dir);let r=Math.abs(n)>.06?n>0?1:-1:0,o=0;!D.GAMEPLAY.PLANAR_MODE&&Math.abs(i)>.08&&(o=i>0?1:-1),!D.GAMEPLAY.PLANAR_MODE&&o===0&&Math.abs(this.sense.heightBias)>.15&&(o=this.sense.heightBias>0?1:-1),r===0&&this.sense.botRepulsionYaw!==0&&(r=this.sense.botRepulsionYaw),!D.GAMEPLAY.PLANAR_MODE&&o===0&&this.sense.botRepulsionPitch!==0&&(o=this.sense.botRepulsionPitch);const a=this.sense.lookAhead>0?this.sense.localOpenness/this.sense.lookAhead:.5,l=this.sense.immediateDanger?.45:this.sense.forwardRisk>.72||a<.55||this._recentBouncePressure>1.2?.65:1,c=Math.max(.08,this.profile.turnCommitTime*l);(this.state.turnCommitTimer<=0||this.sense.immediateDanger)&&(this.state.committedYaw=r,this.state.committedPitch=o,(r!==0||o!==0)&&(this.state.turnCommitTimer=c)),this.state.turnCommitTimer>0&&(r=this.state.committedYaw,o=this.state.committedPitch),this._decision.yaw=r,this._decision.pitch=o;const h=this.profile.aggression+this.sense.mapAggressionBias;!this.sense.immediateDanger&&this.sense.forwardRisk<.45&&Math.random()<this.profile.boostChance*(.8+Math.max(0,h))&&(this._decision.boost=!0),this._profileName==="EASY"&&Math.random()<.08&&(this._decision.yaw=Math.random()>.5?1:-1)}_decideItemUsage(t){if(!t.inventory||t.inventory.length===0)return;let e=-1/0,n=-1,i=-1/0,r=-1;const o=this.sense.pressure,a=Math.max(0,this.profile.aggression+this.sense.mapAggressionBias),l=this.sense.targetInFront?1.1:.5,c=this.sense.immediateDanger?1:this.sense.forwardRisk>.6?.5:0,h=this.sense.targetDistanceSq<100,u=this.profile.itemContextWeight||.5;for(let d=0;d<t.inventory.length;d++){const m=t.inventory[d],g=_g[m]||{self:0,offense:0,defensiveScale:0,emergencyScale:0,combatSelf:0},_=g.self+o*g.defensiveScale+c*(g.emergencyScale||0)*u+(h?(g.combatSelf||0)*u:0),p=g.offense*(.55+a)*l;_>e&&(e=_,n=d),p>i&&(i=p,r=d)}if(n>=0&&e>.72&&this.state.itemUseCooldown<=0){this._decision.useItem=n,this.state.itemUseCooldown=this.profile.itemUseCooldown;return}r>=0&&i>.45&&this.state.itemShootCooldown<=0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=r,this.state.itemShootCooldown=this.profile.itemShootCooldown)}_applyDecisionToInput(){const t=this.currentInput;return this._resetInput(t),this._decision.yaw>0?t.yawRight=!0:this._decision.yaw<0&&(t.yawLeft=!0),this._decision.pitch>0?t.pitchUp=!0:this._decision.pitch<0&&(t.pitchDown=!0),t.boost=this._decision.boost,t.useItem=this._decision.useItem,t.shootItem=this._decision.shootItem,t.shootItemIndex=this._decision.shootItemIndex,t}update(t,e,n,i,r){const o=D.BOT.ACTIVE_DIFFICULTY||this._profileName;if(o!==this._profileName&&this._setDifficulty(o),this._updateTimers(t),this._updateStuckState(e,n,i),this.state.recoveryActive&&this._updateRecovery(t,e,n,i))return this.currentInput;if(this.reactionTimer>0)return this.currentInput;const a=1+(Math.random()*2-1)*this.profile.errorRate*.2;if(this.reactionTimer=Math.max(.02,this.profile.reactionTime*a),this._resetDecision(),this._senseEnvironment(e,n,i,r),this.sense.immediateDanger&&this.state.recoveryCooldown<=0&&this._recentBouncePressure>2.3&&(this._enterRecovery(e,n,i,"collision-pressure"),this._updateRecovery(t,e,n,i)))return this.currentInput;if(this.sense.projectileThreat&&this.sense.forwardRisk<.6)this._decision.yaw=this.sense.projectileEvadeYaw,this._decision.pitch=this.sense.projectileEvadePitch,this._decision.boost=!0;else if(!this._applyPortalSteering(e))if(this.sense.pursuitActive){this._decision.yaw=this.sense.pursuitYaw,this._decision.pitch=this.sense.pursuitPitch,this.sense.targetDistanceSq>400&&(this._decision.boost=!0);const c=this.profile.pursuitAimTolerance||.85;this.sense.pursuitAimDot>c&&e.inventory&&e.inventory.length>0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=0,this.state.itemShootCooldown=this.profile.itemShootCooldown)}else this._decideSteering(e);return this._decideItemUsage(e),this._applyDecisionToInput()}}const we={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1};function xg(){return we.pitchUp=!1,we.pitchDown=!1,we.yawLeft=!1,we.yawRight=!1,we.rollLeft=!1,we.rollRight=!1,we.boost=!1,we.cameraSwitch=!1,we.dropItem=!1,we.shootItem=!1,we.shootItemIndex=-1,we.nextItem=!1,we.useItem=-1,we}class Sg{constructor(t,e,n,i,r,o){this.renderer=t,this.arena=e,this.powerupManager=n,this.particles=i,this.audio=r,this.recorder=o,this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer=new Map,this.projectiles=[],this._projectileAssets=new Map,this._projectilePools=new Map,this.onPlayerDied=null,this.onRoundEnd=null,this.onPlayerFeedback=null,this._tmpVec=new b,this._tmpVec2=new b,this._tmpDir=new b,this._tmpDir2=new b,this._tmpCamAnchor=new b,this._lockOnCache=new Map,this.botDifficulty=D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY}setup(t,e,n={}){var a,l;console.log(`[EntityManager] Setup: Humans=${t}, Bots=${e}`),this.clear();const i=Array.isArray(n.humanConfigs)?n.humanConfigs:[],r=typeof n.modelScale=="number"?n.modelScale:D.PLAYER.MODEL_SCALE||1;this.botDifficulty=n.botDifficulty||D.BOT.ACTIVE_DIFFICULTY||this.botDifficulty,this.humanPlayers=[],this.botByPlayer.clear();const o=[D.COLORS.PLAYER_1,D.COLORS.PLAYER_2];for(let c=0;c<t;c++){const h=new ja(this.renderer,c,o[c],!1);h.setControlOptions({invertPitch:!!((a=i[c])!=null&&a.invertPitch),cockpitCamera:!!((l=i[c])!=null&&l.cockpitCamera),modelScale:r}),this.players.push(h),this.humanPlayers.push(h)}for(let c=0;c<e;c++){const h=D.COLORS.BOT_COLORS[c%D.COLORS.BOT_COLORS.length],u=new ja(this.renderer,t+c,h,!0);u.setControlOptions({modelScale:r,invertPitch:!1});const d=new vg({difficulty:this.botDifficulty,recorder:this.recorder});this.players.push(u),this.bots.push({player:u,ai:d}),this.botByPlayer.set(u,d)}}setBotDifficulty(t){var e;this.botDifficulty=t||this.botDifficulty;for(let n=0;n<this.bots.length;n++){const i=this.bots[n];(e=i==null?void 0:i.ai)!=null&&e.setDifficulty&&i.ai.setDifficulty(this.botDifficulty)}}spawnAll(){this._roundEnded=!1;const e=!!D.GAMEPLAY.PLANAR_MODE?this._getPlanarSpawnLevel():null;for(const n of this.players){const i=this._findSpawnPosition(12,12,e),r=this._findSafeSpawnDirection(i);n.spawn(i,r),n.shootCooldown=0,this.recorder&&(this.recorder.markPlayerSpawn(n),this.recorder.logEvent("SPAWN",n.index,n.isBot?"bot=1":"bot=0"))}}_getPlanarSpawnLevel(){var a,l,c;const t=((a=this.arena)==null?void 0:a.bounds)||null,e=t?(t.minY+t.maxY)*.5:D.PLAYER.START_Y;if(!(Array.isArray((l=this.arena)==null?void 0:l.portals)&&this.arena.portals.length>0)||!((c=this.arena)!=null&&c.getPortalLevels))return e;const i=this.arena.getPortalLevels();if(!Array.isArray(i)||i.length===0)return e;let r=e,o=1/0;for(let h=0;h<i.length;h++){const u=i[h];if(!Number.isFinite(u))continue;const d=Math.abs(u-e);d<o&&(o=d,r=u)}return r}_findSpawnPosition(t=12,e=12,n=null){var o;const i=Number.isFinite(n)&&!!((o=this.arena)!=null&&o.getRandomPositionOnLevel),r=()=>i?this.arena.getRandomPositionOnLevel(n,e):this.arena.getRandomPosition(e);for(let a=0;a<100;a++){const l=r();let c=!1;for(const h of this.players)if(h.alive&&h.position.distanceToSquared(l)<t*t){c=!0;break}if(!c)return l}return r()}_findSafeSpawnDirection(t){let n=new b(0,0,-1),i=-1;for(let r=0;r<20;r++){const o=Math.PI*2*r/20;this._tmpDir.set(Math.sin(o),0,-Math.cos(o));const a=this._traceFreeDistance(t,this._tmpDir,36,2.2);a>i&&(i=a,n.copy(this._tmpDir))}return n}_traceFreeDistance(t,e,n,i){const r=Math.max(.5,i);let o=0;for(;o<n;)if(o+=r,this._tmpVec.set(t.x+e.x*o,t.y+e.y*o,t.z+e.z*o),this.arena.checkCollision(this._tmpVec,D.PLAYER.HITBOX_RADIUS))return o-r;return n}update(t,e){this._lockOnCache.clear(),this._updateProjectiles(t);for(const a of this.players){if(!a.alive)continue;a.shootCooldown=Math.max(0,(a.shootCooldown||0)-t);let l=xg();if(a.isBot){const d=this.botByPlayer.get(a);d&&(l=d.update(t,a,this.arena,this.players,this.projectiles))}else{const d=this.humanPlayers.length===1&&a.index===0;l=e.getPlayerInput(a.index,{includeSecondaryBindings:d}),l.cameraSwitch&&(this.renderer.cycleCamera(a.index),a.cameraMode=this.renderer.cameraModes[a.index]||0)}if(l.nextItem&&a.cycleItem(),l.dropItem&&a.dropItem(),l.useItem>=0){const d=this._useInventoryItem(a,l.useItem);d.ok?this.recorder&&this.recorder.logEvent("ITEM_USE",a.index,`mode=use type=${d.type}`):a.isBot||this._notifyPlayerFeedback(a,d.reason)}if(l.shootItem){const d=this._shootItemProjectile(a,l.shootItemIndex);!d.ok&&!a.isBot?this._notifyPlayerFeedback(a,d.reason):d.ok&&this.recorder&&this.recorder.logEvent("ITEM_USE",a.index,`mode=shoot type=${d.type}`)}a.update(t,l);const c=(a.spawnProtectionTimer||0)>0;if(!a.isGhost&&!c){if(this.arena.checkCollision(a.position,D.PLAYER.HITBOX_RADIUS))if(a.hasShield)a.hasShield=!1,a.getDirection(this._tmpDir).multiplyScalar(2),a.position.sub(this._tmpDir);else if(a.isBot)this._bounceBot(a,null,"WALL");else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(a.position,a.color),this._killPlayer(a,"WALL");continue}for(const d of this.players){if(!d.alive)continue;const m=d===a?15:0,g=d.trail.checkCollision(a.position,D.PLAYER.HITBOX_RADIUS,m);if(g&&g.hit)if(a.hasShield)a.hasShield=!1;else if(a.isBot){if(g&&g.hit){this._bounceBot(a,g.normal,"TRAIL");break}}else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(a.position,a.color),this._killPlayer(a,d===a?"TRAIL_SELF":"TRAIL_OTHER");break}}}if(!a.alive)continue;const h=this.arena.checkPortal(a.position,D.PLAYER.HITBOX_RADIUS,a.index);h&&(a.position.copy(h.target),a.getDirection(this._tmpVec).normalize().multiplyScalar(2),a.position.add(this._tmpVec),D.GAMEPLAY.PLANAR_MODE&&(a.currentPlanarY=h.target.y),a.trail.forceGap(.5));const u=this.powerupManager.checkPickup(a.position,D.PLAYER.HITBOX_RADIUS);u&&(a.addToInventory(u),this.audio&&this.audio.play("POWERUP"),this.particles&&this.particles.spawnHit(a.position,65280))}if(this._roundEnded)return;let n=0,i=null;for(const a of this.humanPlayers)a.alive&&(n++,i=a);let r=!1,o=null;if(this.humanPlayers.length===1){if(n===0){console.log("[EntityManager] Round End: Singleplayer Died"),r=!0,o=null;for(let a=0;a<this.bots.length;a++){const l=this.bots[a].player;if(l&&l.alive){o=l;break}}}}else this.humanPlayers.length>=2&&n<=1&&this.humanPlayers.length>1&&(console.log(`[EntityManager] Round End: Multiplayer Survivor. HumansAlive=${n}, TotalHumans=${this.humanPlayers.length}, Winner=P${o?o.index:"None"}`),r=!0,o=i);r&&(this._roundEnded=!0,this.onRoundEnd&&this.onRoundEnd(o))}_takeInventoryItem(t,e=-1){if(!t.inventory||t.inventory.length===0)return{ok:!1,reason:"Kein Item verfuegbar",type:null};const n=Number.isInteger(e)&&e>=0?Math.min(e,t.inventory.length-1):Math.min(t.selectedItemIndex||0,t.inventory.length-1),i=t.inventory.splice(n,1)[0];return(t.inventory.length===0||t.selectedItemIndex>=t.inventory.length)&&(t.selectedItemIndex=0),{ok:!0,type:i}}_useInventoryItem(t,e=-1){const n=this._takeInventoryItem(t,e);return!n.ok||!n.type?{ok:!1,reason:"Kein Item zum Nutzen"}:(t.applyPowerup(n.type),{ok:!0,type:n.type})}_shootItemProjectile(t,e=-1){if((t.shootCooldown||0)>0)return{ok:!1,reason:`Schuss bereit in ${t.shootCooldown.toFixed(1)}s`};const n=this._takeInventoryItem(t,e);if(!n.ok||!n.type)return{ok:!1,reason:"Kein Item zum Schiessen",type:null};const i=n.type,r=D.POWERUP.TYPES[i];if(!r)return{ok:!1,reason:"Item ungueltig"};t.getAimDirection(this._tmpDir).normalize(),this._tmpVec.copy(t.position).addScaledVector(this._tmpDir,2.2);const o=D.PROJECTILE.SPEED,a=D.PROJECTILE.RADIUS,l=this._acquireProjectileMesh(i,r.color);return l.position.copy(this._tmpVec),this._tmpVec2.copy(this._tmpVec).add(this._tmpDir),l.lookAt(this._tmpVec2),this.projectiles.push({mesh:l,flame:l.userData.flame||null,poolKey:i,owner:t,type:i,position:this._tmpVec.clone(),velocity:this._tmpDir.clone().multiplyScalar(o),radius:a,ttl:D.PROJECTILE.LIFE_TIME,traveled:0,target:this._checkLockOn(t)}),t.shootCooldown=D.PROJECTILE.COOLDOWN,this.audio&&this.audio.play("SHOOT"),{ok:!0,type:i}}_acquireProjectileMesh(t,e){let i=this._getProjectilePool(t).pop();if(!i){const r=this._getProjectileAssets(t,e);i=new An;const o=new Xt(r.bodyGeo,r.bodyMat);i.add(o);const a=new Xt(r.tipGeo,r.tipMat);a.position.z=-.8,i.add(a);for(let c=0;c<4;c++){const h=new Xt(r.finGeo,r.finMat);h.position.z=.5;const u=Math.PI/2*c;c%2===0?h.position.x=Math.cos(u)*.2:(h.position.y=Math.sin(u)*.2,h.rotation.z=Math.PI/2),i.add(h)}const l=new Xt(r.flameGeo,r.flameMat);l.position.z=.85,i.add(l),i.userData.flame=l}return i.visible=!0,i.userData.flame&&i.userData.flame.scale.set(1,1,1),this.renderer.addToScene(i),i}_getProjectilePool(t){return this._projectilePools.has(t)||this._projectilePools.set(t,[]),this._projectilePools.get(t)}_getProjectileAssets(t,e){if(this._projectileAssets.has(t))return this._projectileAssets.get(t);const n=new wi(.15,.15,1.2,8);n.rotateX(Math.PI/2);const i=new dn(.15,.4,8);i.rotateX(Math.PI/2);const r=new Ze(.02,.25,.3),o=new dn(.1,.5,6);o.rotateX(-Math.PI/2);const a=new Re({color:e,emissive:e,emissiveIntensity:.4,roughness:.3,metalness:.6}),l=new Re({color:13421772,emissive:e,emissiveIntensity:.2,roughness:.2,metalness:.8}),c=new Re({color:e,emissive:e,emissiveIntensity:.3,roughness:.4,metalness:.5}),h=new $e({color:16737792,transparent:!0,opacity:.8}),u={bodyGeo:n,tipGeo:i,finGeo:r,flameGeo:o,bodyMat:a,tipMat:l,finMat:c,flameMat:h};return this._projectileAssets.set(t,u),u}_checkLockOn(t){if(this._lockOnCache.has(t.index))return this._lockOnCache.get(t.index);t.getDirection(this._tmpDir).normalize();const e=D.HOMING.LOCK_ON_ANGLE*Math.PI/180,n=D.HOMING.MAX_LOCK_RANGE,i=n*n;let r=null,o=1/0;for(const a of this.players){if(a===t||!a.alive)continue;this._tmpVec.subVectors(a.position,t.position);const l=this._tmpVec.lengthSq();if(l>i||l<1)continue;this._tmpDir.angleTo(this._tmpVec.normalize())<=e&&l<o&&(r=a,o=l)}return this._lockOnCache.set(t.index,r),r}getLockOnTarget(t){if(this._lockOnCache.has(t))return this._lockOnCache.get(t);const e=this.players[t];return!e||!e.alive?null:this._checkLockOn(e)}_updateProjectiles(t){const e=performance.now()*.001;for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n],r=i.velocity.x*t,o=i.velocity.y*t,a=i.velocity.z*t;i.position.x+=r,i.position.y+=o,i.position.z+=a,i.traveled+=Math.sqrt(r*r+o*o+a*a),i.ttl-=t,i.mesh.position.copy(i.position),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec);const l=this.arena.checkPortal(i.position,i.radius,1e3+n);if(l&&(i.position.copy(l.target),this._tmpVec.copy(i.velocity).normalize().multiplyScalar(1.5),i.position.add(this._tmpVec),i.mesh.position.copy(i.position)),i.target&&i.target.alive){this._tmpVec.subVectors(i.target.position,i.position).normalize(),this._tmpVec2.copy(i.velocity);const h=this._tmpVec2.length();this._tmpVec2.normalize();const u=D.HOMING.TURN_RATE*t;this._tmpVec2.lerp(this._tmpVec,Math.min(u,1)).normalize(),i.velocity.copy(this._tmpVec2.multiplyScalar(h)),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec)}if(i.flame){const h=.7+Math.sin(e*30+n*7)*.3;i.flame.scale.set(1,1,h)}if(i.ttl<=0||i.traveled>=D.PROJECTILE.MAX_DISTANCE||this.arena.checkCollision(i.position,i.radius)){this.particles&&this.particles.spawnHit(i.position,16776960),this.audio&&!i.owner.isBot&&this.audio.play("HIT"),this._removeProjectileAt(n);continue}let c=!1;for(const h of this.players){if(!h.alive||h===i.owner)continue;const u=D.PLAYER.HITBOX_RADIUS+i.radius;if(h.position.distanceToSquared(i.position)<=u*u){h.hasShield?(h.hasShield=!1,i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer geblockt")):(h.applyPowerup(i.type),this.particles&&this.particles.spawnExplosion(h.position,i.poolKey?16711680:16776960),this.audio&&this.audio.play("POWERUP"),i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer!")),c=!0;break}}c&&this._removeProjectileAt(n)}}_removeProjectileAt(t){const e=this.projectiles[t];e&&(this._releaseProjectileMesh(e),this.projectiles.splice(t,1))}_releaseProjectileMesh(t){this.renderer.removeFromScene(t.mesh),t.mesh.visible=!1,this._getProjectilePool(t.poolKey||t.type).push(t.mesh)}_notifyPlayerFeedback(t,e){this.onPlayerFeedback&&this.onPlayerFeedback(t,e)}_killPlayer(t,e="UNKNOWN"){t.kill(),this.particles&&this.particles.spawnExplosion(t.position,t.color),this.audio&&this.audio.play("EXPLOSION"),this.recorder&&(this.recorder.markPlayerDeath(t,e),this.recorder.logEvent("KILL",t.index,`cause=${e}`)),this.onPlayerDied&&this.onPlayerDied(t)}_isBotPositionSafe(t,e){const n=D.PLAYER.HITBOX_RADIUS;if(this.arena.checkCollision(e,n))return!1;for(let i=0;i<this.players.length;i++){const r=this.players[i];if(!r||!r.alive)continue;const o=r===t?20:0;if(r.trail.checkCollisionFast){if(r.trail.checkCollisionFast(e,n,o))return!1}else{const a=r.trail.checkCollision(e,n,o);if(a&&a.hit)return!1}}return!0}_clampBotPosition(t){const e=this.arena.bounds,n=D.PLAYER.HITBOX_RADIUS+.5;t.x=Math.max(e.minX+n,Math.min(e.maxX-n,t.x)),t.y=Math.max(e.minY+n,Math.min(e.maxY-n,t.y)),t.z=Math.max(e.minZ+n,Math.min(e.maxZ-n,t.z))}_findSafeBouncePosition(t,e,n=null){const i=t.position.x,r=t.position.y,o=t.position.z,a=[2.5,4,6,8],l=[{x:e.x,y:e.y,z:e.z}];n&&(l.push({x:e.x+n.x*.35,y:e.y+n.y*.35,z:e.z+n.z*.35}),l.push({x:e.x-n.x*.22,y:e.y-n.y*.22,z:e.z-n.z*.22}));for(let c=0;c<l.length;c++){let h=l[c].x,u=l[c].y,d=l[c].z;const m=Math.hypot(h,u,d);if(!(m<1e-4)){h/=m,u/=m,d/=m;for(let g=0;g<a.length;g++){const _=a[g];if(this._tmpVec.set(i+h*_,r+u*_,o+d*_),this._clampBotPosition(this._tmpVec),this._isBotPositionSafe(t,this._tmpVec))return t.position.copy(this._tmpVec),!0}}}return this._tmpVec.set(i+e.x*2,r+e.y*2,o+e.z*2),this._clampBotPosition(this._tmpVec),t.position.copy(this._tmpVec),!1}_bounceBot(t,e=null,n="WALL"){t.getDirection(this._tmpDir);const i=t.position,r=this.arena.bounds;let o=this._tmpVec2;if(e)o.copy(e).normalize();else{const h=i.x-r.minX,u=r.maxX-i.x,d=i.y-r.minY,m=r.maxY-i.y,g=i.z-r.minZ,_=r.maxZ-i.z;let p=h;this._tmpVec2.set(1,0,0),u<p&&(p=u,this._tmpVec2.set(-1,0,0)),d<p&&(p=d,this._tmpVec2.set(0,1,0)),m<p&&(p=m,this._tmpVec2.set(0,-1,0)),g<p&&(p=g,this._tmpVec2.set(0,0,1)),_<p&&(p=_,this._tmpVec2.set(0,0,-1)),o=this._tmpVec2}const a=this._tmpDir.dot(o);this._tmpDir.x-=2*a*o.x,this._tmpDir.y-=2*a*o.y,this._tmpDir.z-=2*a*o.z,this._tmpDir.normalize(),this._tmpDir.addScaledVector(o,.25);const l=n==="TRAIL"?.35:.24;this._tmpDir.x+=(Math.random()-.5)*l,this._tmpDir.y+=(Math.random()-.5)*l,this._tmpDir.z+=(Math.random()-.5)*l,D.GAMEPLAY.PLANAR_MODE&&(this._tmpDir.y=0),this._tmpDir.normalize(),this._tmpVec.copy(i).add(this._tmpDir),t.group.lookAt(this._tmpVec),t.quaternion.copy(t.group.quaternion),this._findSafeBouncePosition(t,this._tmpDir,o),t.trail.forceGap(.3);const c=this.botByPlayer.get(t);if(c!=null&&c.onBounce&&c.onBounce(n,o),this.recorder){const h=n==="TRAIL"?"BOUNCE_TRAIL":"BOUNCE_WALL";this.recorder.logEvent(h,t.index)}}updateCameras(t){for(const e of this.players)if(!e.isBot&&e.index<this.renderer.cameras.length){const n=e.position,i=e.alive?e.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),r=e.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(e.index,n,i,t,e.quaternion,e.cockpitCamera,e.isBoosting,this.arena,r),e.cameraMode=this.renderer.cameraModes[e.index]||0}}getHumanPlayers(){return this.humanPlayers}clear(){for(let t=this.projectiles.length-1;t>=0;t--)this._removeProjectileAt(t);for(const t of this._projectilePools.values())for(const e of t)this.renderer.removeFromScene(e);this._projectilePools.clear();for(const t of this._projectileAssets.values())t.bodyGeo.dispose(),t.tipGeo.dispose(),t.finGeo.dispose(),t.flameGeo.dispose(),t.bodyMat.dispose(),t.tipMat.dispose(),t.finMat.dispose(),t.flameMat.dispose();this._projectileAssets.clear();for(const t of this.players)t.dispose();this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer.clear(),this.projectiles=[],this._lockOnCache.clear()}}class yg{constructor(t,e){this.renderer=t,this.arena=e,this.items=[],this.spawnTimer=0,this.typeKeys=Object.keys(D.POWERUP.TYPES),this._pickupBoxSize=new b,this._pickupSphere=new mn;const n=D.POWERUP.SIZE;this._sharedGeo=new Ze(n,n,n),this._sharedWireGeo=new Ze(n*1.15,n*1.15,n*1.15)}update(t){this.spawnTimer+=t,this.spawnTimer>=D.POWERUP.SPAWN_INTERVAL&&this.items.length<D.POWERUP.MAX_ON_FIELD&&(this.spawnTimer=0,this._spawnRandom());const e=performance.now()*.001,n=D.POWERUP.PICKUP_RADIUS*2;this._pickupBoxSize.set(n,n,n);for(const i of this.items)i.mesh.rotation.y+=D.POWERUP.ROTATION_SPEED*t,i.mesh.position.y=i.baseY+Math.sin(e*D.POWERUP.BOUNCE_SPEED+i.phase)*D.POWERUP.BOUNCE_HEIGHT,i.box.setFromCenterAndSize(i.mesh.position,this._pickupBoxSize)}_spawnRandom(){var u;const t=this.typeKeys[Math.floor(Math.random()*this.typeKeys.length)],e=D.POWERUP.TYPES[t];let n=null;if(D.GAMEPLAY.PLANAR_MODE&&((u=this.arena)!=null&&u.getPortalLevels)){const d=this.arena.getPortalLevels();if(d.length>0){const m=d[Math.floor(Math.random()*d.length)];n=this.arena.getRandomPositionOnLevel(m,8)}}n||(n=this.arena.getRandomPosition(8));const i=this._sharedGeo,r=new Re({color:e.color,emissive:e.color,emissiveIntensity:.5,roughness:.2,metalness:.8,transparent:!0,opacity:.85}),o=new Xt(i,r);o.position.copy(n),o.castShadow=!1;const a=this._sharedWireGeo,l=new $e({color:e.color,wireframe:!0,transparent:!0,opacity:.3}),c=new Xt(a,l);o.add(c),this.renderer.addToScene(o);const h=new tn().setFromCenterAndSize(n,new b(D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2));this.items.push({mesh:o,type:t,box:h,baseY:n.y,phase:Math.random()*Math.PI*2})}checkPickup(t,e){this._pickupSphere.center.copy(t),this._pickupSphere.radius=e+D.POWERUP.PICKUP_RADIUS;for(let n=this.items.length-1;n>=0;n--)if(this.items[n].box.intersectsSphere(this._pickupSphere)){const i=this.items.splice(n,1)[0];return this.renderer.removeFromScene(i.mesh),i.mesh.material.dispose(),i.type}return null}clear(){for(const t of this.items)this.renderer.removeFromScene(t.mesh),t.mesh.material.dispose();this.items=[],this.spawnTimer=0}}const cn=1e3,Je=new le;class Mg{constructor(t){this.renderer=t,this.count=0,this.positions=new Float32Array(cn*3),this.velocities=new Float32Array(cn*3),this.lifetimes=new Float32Array(cn),this.maxLifetimes=new Float32Array(cn),this.gravities=new Float32Array(cn),this.scales=new Float32Array(cn),this.colors=new Float32Array(cn*3);const e=new Ze(.8,.8,.8),n=new $e({color:16777215,transparent:!0,opacity:1});this.mesh=new Bl(e,n,cn),this.mesh.instanceMatrix.setUsage(_l),this.mesh.count=0,this.renderer.addToScene(this.mesh),this._tmpColor=new Wt}spawn(t,e,n,i=1,r=.5,o=1){this._tmpColor.setHex(n);for(let a=0;a<e;a++){if(this.count>=cn)return;const l=this.count;this.count++,this.positions[l*3]=t.x,this.positions[l*3+1]=t.y,this.positions[l*3+2]=t.z;const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),u=i*(.5+Math.random()*.5);this.velocities[l*3]=u*Math.sin(h)*Math.cos(c),this.velocities[l*3+1]=u*Math.sin(h)*Math.sin(c),this.velocities[l*3+2]=u*Math.cos(h),this.lifetimes[l]=o*(.8+Math.random()*.4),this.maxLifetimes[l]=this.lifetimes[l],this.gravities[l]=-5,this.scales[l]=r*(.5+Math.random()*.5),this.colors[l*3]=this._tmpColor.r,this.colors[l*3+1]=this._tmpColor.g,this.colors[l*3+2]=this._tmpColor.b,this.mesh.setColorAt(l,this._tmpColor),Je.position.set(this.positions[l*3],this.positions[l*3+1],this.positions[l*3+2]),Je.scale.setScalar(this.scales[l]),Je.updateMatrix(),this.mesh.setMatrixAt(l,Je.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawnExplosion(t,e){this.spawn(t,30,e,12,.7,.6)}spawnHit(t,e){this.spawn(t,10,e,6,.4,.3)}update(t){if(this.count===0){this.mesh.count=0;return}let e=0,n=!1;for(let i=0;i<this.count;i++)if(this.lifetimes[i]-=t,this.lifetimes[i]>0){const r=i*3,o=e*3;this.velocities[r+1]+=this.gravities[i]*t,this.positions[r]+=this.velocities[r]*t,this.positions[r+1]+=this.velocities[r+1]*t,this.positions[r+2]+=this.velocities[r+2]*t,i!==e&&(this.positions[o]=this.positions[r],this.positions[o+1]=this.positions[r+1],this.positions[o+2]=this.positions[r+2],this.velocities[o]=this.velocities[r],this.velocities[o+1]=this.velocities[r+1],this.velocities[o+2]=this.velocities[r+2],this.lifetimes[e]=this.lifetimes[i],this.maxLifetimes[e]=this.maxLifetimes[i],this.gravities[e]=this.gravities[i],this.scales[e]=this.scales[i],this.colors[o]=this.colors[r],this.colors[o+1]=this.colors[r+1],this.colors[o+2]=this.colors[r+2],this._tmpColor.setRGB(this.colors[o],this.colors[o+1],this.colors[o+2]),this.mesh.setColorAt(e,this._tmpColor),n=!0),Je.position.set(this.positions[o],this.positions[o+1],this.positions[o+2]),Je.rotation.x+=this.velocities[o+2]*t,Je.rotation.y+=this.velocities[o]*t;const a=this.scales[e]*(this.lifetimes[e]/this.maxLifetimes[e]);Je.scale.setScalar(a),Je.updateMatrix(),this.mesh.setMatrixAt(e,Je.matrix),e++}this.count=e,this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,n&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.count=0,this.mesh.count=0}}class Eg{constructor(){this.ctx=null,this.enabled=!0,this.volume=.15,this.buffers={},this.lastPlayTime={},this.cooldowns={SHOOT:100,EXPLOSION:200,HIT:100,POWERUP:500,BOOST:200};const t=()=>this._init();window.addEventListener("keydown",t,{once:!0}),window.addEventListener("mousedown",t,{once:!0}),window.addEventListener("keydown",e=>{e.code==="KeyM"&&(this.enabled=!this.enabled,console.log(`Audio ${this.enabled?"ENABLED":"DISABLED"}`))})}_init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this._generateBuffers())}_generateBuffers(){const e=this.ctx.sampleRate*.3,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.buffers.explosion=n}play(t){if(!this.enabled||!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=performance.now(),n=this.lastPlayTime[t]||0,i=this.cooldowns[t]||50;if(!(e-n<i))switch(this.lastPlayTime[t]=e,t){case"SHOOT":this._playShoot();break;case"EXPLOSION":this._playExplosion();break;case"HIT":this._playHit();break;case"POWERUP":this._playPowerup();break;case"BOOST":this._playBoost();break}}_playShoot(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.5,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playExplosion(){if(!this.buffers.explosion)return;const t=this.ctx.createBufferSource();t.buffer=this.buffers.explosion;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1e3,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(100,this.ctx.currentTime+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(this.volume,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(n),n.connect(this.ctx.destination),t.start()}_playHit(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.8,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playPowerup(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.2),e.gain.setValueAtTime(this.volume*.6,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.2)}_playBoost(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(300,this.ctx.currentTime+.3),e.gain.setValueAtTime(this.volume*.4,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.3)}}class tl{constructor(t,e){this.container=document.getElementById(t),this.playerIndex=e,this.horizon=this.container.querySelector(".hud-horizon"),this.pitchLadder=this.container.querySelector(".hud-pitch-ladder"),this.centerCrosshair=this.container.querySelector(".hud-center-crosshair"),this.bankLine=this.container.querySelector(".hud-bank-line"),this.bankAngle=this.container.querySelector(".hud-bank-angle"),this.speedValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed"),this.altValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt"),this.headingValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading"),this.lockReticle=this.container.querySelector(".hud-lock-reticle"),this.lockDist=this.lockReticle.querySelector(".lock-dist"),this.speedScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed-scale"),this.altScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt-scale"),this.headingScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading-scale"),this._createPitchLadder(),this._createTapeScales(),this.visible=!1,this._vec=new b}_createPitchLadder(){for(let t=-18;t<=18;t++){if(t===0)continue;const e=t*5,n=document.createElement("div");n.className="pitch-line",n.dataset.deg=e,n.style.top=`${-e*8}px`,n.style.width=`${120-Math.abs(e)*.5}px`,e<0&&(n.style.borderTopStyle="dashed"),this.pitchLadder.appendChild(n)}}_createTapeScales(){this._fillScale(this.speedScale,0,100,10,"px",20),this._fillScale(this.altScale,0,200,10,"px",20);const t=["N","NE","E","SE","S","SW","W","NW"];for(let e=0;e<=360;e+=15){const n=document.createElement("div");if(n.style.position="absolute",n.style.left=`${e*4}px`,n.style.height=e%90===0?"10px":"5px",n.style.borderLeft="1px solid #0f0",n.style.bottom="0",e%45===0){const i=document.createElement("div");i.textContent=t[e/45%8],i.style.position="absolute",i.style.left="-10px",i.style.top="-15px",i.style.fontSize="10px",n.appendChild(i)}this.headingScale.appendChild(n)}}_fillScale(t,e,n,i,r,o){for(let a=e;a<=n;a+=i){const l=document.createElement("div");if(l.style.position="absolute",l.style.top=`${-(a*(o/i))}px`,l.style.right="0",l.style.width="8px",l.style.borderTop="1px solid #0f0",a%(i*2)===0){const c=document.createElement("div");c.textContent=a,c.style.position="absolute",c.style.right="12px",c.style.top="-6px",c.style.fontSize="9px",l.appendChild(c)}t.appendChild(l)}}setVisibility(t){this.visible!==t&&(this.visible=t,t?this.container.classList.remove("hidden"):this.container.classList.add("hidden"))}update(t,e,n){if(!t||!t.alive){this.setVisibility(!1);return}if(D.CAMERA.MODES[t.cameraMode]!=="FIRST_PERSON"){this.setVisibility(!1);return}this.setVisibility(!0);const r=new Pn().setFromQuaternion(t.quaternion,"YXZ"),o=wn.radToDeg(r.x),a=wn.radToDeg(r.y),l=wn.radToDeg(r.z),c=!!D.GAMEPLAY.PLANAR_MODE;if(this.horizon.style.transform="translate(-50%, -50%)",this.pitchLadder.style.transform=`translate(-50%, -50%) translateY(${o*8}px)`,this.bankLine&&(this.bankLine.style.transform=`translate(-50%, -50%) rotate(${l}deg)`),this.bankAngle){const _=Math.round(l),p=_>0?"+":"";this.bankAngle.textContent=`${p}${_}°`}this.centerCrosshair&&this.centerCrosshair.classList.toggle("hidden",c);const h=Math.round(t.speed*10),u=Math.round(t.position.y);this.speedValue.textContent=h,this.altValue.textContent=u,this.speedScale.style.transform=`translateY(0) translateY(${h*2}px)`,this.altScale.style.transform=`translateY(0) translateY(${u*2}px)`;let d=-a;d<0&&(d+=360),d=d%360;const m=Math.round(d);this.headingValue.textContent=m.toString().padStart(3,"0"),this.headingScale.style.transform=`translateX(-50%) translateX(${-d*4}px)`;const g=n.getLockOnTarget(t.index);if(g&&g.alive){this.lockReticle.classList.remove("hidden");const _=Math.round(t.position.distanceTo(g.position));this.lockDist.textContent=_+"m";const p=n.renderer.cameras[t.index];if(p){this._vec.copy(g.position),this._vec.project(p);const f=(this._vec.x*.5+.5)*this.container.clientWidth,A=(-(this._vec.y*.5)+.5)*this.container.clientHeight;this._vec.z<1?(this.lockReticle.style.left=`${f}px`,this.lockReticle.style.top=`${A}px`):this.lockReticle.classList.add("hidden")}}else this.lockReticle.classList.add("hidden")}}const di=800,fi=900,Ps=120,yn=16;function Ag(){return{roundId:0,duration:0,winnerIndex:-1,winnerIsBot:!1,botCount:0,humanCount:0,botSurvivalAverage:0,selfCollisions:0,stuckEvents:0,bounceWallEvents:0,bounceTrailEvents:0,itemUseEvents:0,stuckPerMinute:0}}function Tg(){return{rounds:0,totalDuration:0,totalBotLives:0,totalBotSurvival:0,totalSelfCollisions:0,totalStuckEvents:0,totalBounceWallEvents:0,totalBounceTrailEvents:0,totalItemUseEvents:0,botWins:0}}class bg{constructor(){this.events=new Array(di);for(let t=0;t<di;t++)this.events[t]={time:0,type:"",player:-1,data:""};this.eventIndex=0,this.eventCount=0,this.snapshots=new Array(fi);for(let t=0;t<fi;t++)this.snapshots[t]={time:0,players:[]};this.snapshotIndex=0,this.snapshotCount=0,this.roundSummaries=new Array(Ps);for(let t=0;t<Ps;t++)this.roundSummaries[t]=Ag();this.roundSummaryIndex=0,this.roundSummaryCount=0,this._roundIdCounter=0,this.playerSpawnTime=new Float32Array(yn),this.playerDeathTime=new Float32Array(yn),this.playerIsBot=new Uint8Array(yn),this.playerSeen=new Uint8Array(yn),this._frameCounter=0,this._snapshotInterval=10,this.roundStartTime=0,this._enabled=!0,this._aggregate=Tg(),this._baselines=new Map,this._lastRoundSummary=null,this._resetRoundState()}_resetRoundState(){this._roundSelfCollisions=0,this._roundStuckEvents=0,this._roundBounceWallEvents=0,this._roundBounceTrailEvents=0,this._roundItemUseEvents=0;for(let t=0;t<yn;t++)this.playerSpawnTime[t]=-1,this.playerDeathTime[t]=-1,this.playerIsBot[t]=0,this.playerSeen[t]=0}_elapsedSeconds(){return this.roundStartTime>0?(performance.now()-this.roundStartTime)/1e3:0}_trackPlayer(t,e=!1){if(!t||t.index<0||t.index>=yn)return;const n=t.index;this.playerSeen[n]=1,this.playerIsBot[n]=t.isBot?1:0,this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=this._elapsedSeconds()),e&&(this.playerDeathTime[n]=-1)}startRound(t=[]){if(this.eventIndex=0,this.eventCount=0,this.snapshotIndex=0,this.snapshotCount=0,this._frameCounter=0,this.roundStartTime=performance.now(),this._resetRoundState(),this._lastRoundSummary=null,Array.isArray(t))for(let e=0;e<t.length;e++)this._trackPlayer(t[e],!0)}logEvent(t,e,n=""){if(!this._enabled)return;const i=this.events[this.eventIndex];i.time=this._elapsedSeconds(),i.type=t,i.player=e,i.data=n,this.eventIndex=(this.eventIndex+1)%di,this.eventCount<di&&this.eventCount++,t==="STUCK"&&this._roundStuckEvents++,t==="BOUNCE_WALL"&&this._roundBounceWallEvents++,t==="BOUNCE_TRAIL"&&this._roundBounceTrailEvents++,t==="ITEM_USE"&&this._roundItemUseEvents++}markPlayerSpawn(t){this._enabled&&this._trackPlayer(t,!0)}markPlayerDeath(t,e=""){if(!this._enabled||!t||t.index<0||t.index>=yn)return;const n=t.index;this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=0),this.playerDeathTime[n]<0&&(this.playerDeathTime[n]=this._elapsedSeconds()),e==="TRAIL_SELF"&&this._roundSelfCollisions++}finalizeRound(t,e=[]){if(!this._enabled)return null;const n=Math.max(0,this._elapsedSeconds());let i=0,r=0,o=0;if(Array.isArray(e))for(let l=0;l<e.length;l++){const c=e[l];if(!c||c.index<0||c.index>=yn)continue;this._trackPlayer(c,!1);const h=c.index;this.playerDeathTime[h]<0&&(this.playerDeathTime[h]=n);const u=this.playerSpawnTime[h]>=0?this.playerSpawnTime[h]:0,d=Math.max(0,this.playerDeathTime[h]-u);c.isBot?(i++,o+=d):r++}const a=this.roundSummaries[this.roundSummaryIndex];return this._roundIdCounter++,a.roundId=this._roundIdCounter,a.duration=n,a.winnerIndex=t?t.index:-1,a.winnerIsBot=!!(t!=null&&t.isBot),a.botCount=i,a.humanCount=r,a.botSurvivalAverage=i>0?o/i:0,a.selfCollisions=this._roundSelfCollisions,a.stuckEvents=this._roundStuckEvents,a.bounceWallEvents=this._roundBounceWallEvents,a.bounceTrailEvents=this._roundBounceTrailEvents,a.itemUseEvents=this._roundItemUseEvents,a.stuckPerMinute=n>0?this._roundStuckEvents/(n/60):0,this.roundSummaryIndex=(this.roundSummaryIndex+1)%Ps,this.roundSummaryCount<Ps&&this.roundSummaryCount++,this._aggregate.rounds+=1,this._aggregate.totalDuration+=n,this._aggregate.totalBotLives+=i,this._aggregate.totalBotSurvival+=o,this._aggregate.totalSelfCollisions+=this._roundSelfCollisions,this._aggregate.totalStuckEvents+=this._roundStuckEvents,this._aggregate.totalBounceWallEvents+=this._roundBounceWallEvents,this._aggregate.totalBounceTrailEvents+=this._roundBounceTrailEvents,this._aggregate.totalItemUseEvents+=this._roundItemUseEvents,t!=null&&t.isBot&&(this._aggregate.botWins+=1),this._lastRoundSummary={roundId:a.roundId,duration:a.duration,winnerIndex:a.winnerIndex,winnerIsBot:a.winnerIsBot,botCount:a.botCount,humanCount:a.humanCount,botSurvivalAverage:a.botSurvivalAverage,selfCollisions:a.selfCollisions,stuckEvents:a.stuckEvents,bounceWallEvents:a.bounceWallEvents,bounceTrailEvents:a.bounceTrailEvents,itemUseEvents:a.itemUseEvents,stuckPerMinute:a.stuckPerMinute},this.logEvent("ROUND_END",a.winnerIndex,`duration=${a.duration.toFixed(2)}`),this._lastRoundSummary}getLastRoundMetrics(){return this._lastRoundSummary?{...this._lastRoundSummary}:null}getAggregateMetrics(){const t=this._aggregate.rounds,e=this._aggregate.totalDuration;return{rounds:t,botWinRate:t>0?this._aggregate.botWins/t:0,averageBotSurvival:this._aggregate.totalBotLives>0?this._aggregate.totalBotSurvival/this._aggregate.totalBotLives:0,selfCollisionsPerRound:t>0?this._aggregate.totalSelfCollisions/t:0,stuckEventsPerMinute:e>0?this._aggregate.totalStuckEvents/(e/60):0,bounceWallPerRound:t>0?this._aggregate.totalBounceWallEvents/t:0,bounceTrailPerRound:t>0?this._aggregate.totalBounceTrailEvents/t:0,itemUsePerRound:t>0?this._aggregate.totalItemUseEvents/t:0}}captureBaseline(t="BASELINE"){const e=this.getAggregateMetrics();return this._baselines.set(t,e),{label:t,...e}}compareWithBaseline(t="BASELINE"){if(!this._baselines.has(t))return null;const e=this._baselines.get(t),n=this.getAggregateMetrics();return{label:t,baseline:e,current:n,delta:{botWinRate:n.botWinRate-e.botWinRate,averageBotSurvival:n.averageBotSurvival-e.averageBotSurvival,selfCollisionsPerRound:n.selfCollisionsPerRound-e.selfCollisionsPerRound,stuckEventsPerMinute:n.stuckEventsPerMinute-e.stuckEventsPerMinute,bounceWallPerRound:n.bounceWallPerRound-e.bounceWallPerRound,bounceTrailPerRound:n.bounceTrailPerRound-e.bounceTrailPerRound,itemUsePerRound:n.itemUsePerRound-e.itemUsePerRound}}}getValidationMatrix(){return[{id:"V1",mode:"1p",bots:1,mapKey:"standard",planarMode:!1,portalCount:0,rounds:10},{id:"V2",mode:"1p",bots:3,mapKey:"maze",planarMode:!1,portalCount:0,rounds:10},{id:"V3",mode:"1p",bots:3,mapKey:"complex",planarMode:!0,portalCount:4,rounds:10},{id:"V4",mode:"2p",bots:2,mapKey:"standard",planarMode:!0,portalCount:6,rounds:10}]}recordFrame(t){if(!this._enabled||(this._frameCounter++,this._frameCounter%this._snapshotInterval!==0))return;const e=this.snapshots[this.snapshotIndex];for(e.time=this._elapsedSeconds();e.players.length<t.length;)e.players.push({idx:0,alive:!1,x:0,y:0,z:0,bot:!1});for(let n=0;n<t.length;n++){const i=t[n],r=e.players[n];r.idx=i.index,r.alive=i.alive,r.x=+i.position.x.toFixed(1),r.y=+i.position.y.toFixed(1),r.z=+i.position.z.toFixed(1),r.bot=i.isBot}this.snapshotIndex=(this.snapshotIndex+1)%fi,this.snapshotCount<fi&&this.snapshotCount++}dump(){const t=[],e=this.eventCount>=di?this.eventIndex:0;for(let h=0;h<this.eventCount;h++){const u=(e+h)%di,d=this.events[u];t.push(`[${d.time.toFixed(2)}s] ${d.type} P${d.player} ${d.data}`)}const n=this.getLastRoundMetrics(),i=this.getAggregateMetrics(),r=this.compareWithBaseline("BASELINE");console.group("%cROUND LOG","color: #0af; font-size: 14px; font-weight: bold;"),console.log(`Duration: ${this._elapsedSeconds().toFixed(1)}s`),console.log(`Events: ${this.eventCount}`),console.table(t.map(h=>({log:h}))),n&&console.log("Round KPI:",n),console.log("Aggregate KPI:",i),r&&console.log("Baseline delta (BASELINE):",r.delta);const o=[],a=this.snapshotCount>=fi?this.snapshotIndex:0,l=Math.min(this.snapshotCount,20),c=Math.max(0,this.snapshotCount-l);for(let h=0;h<l;h++){const u=(a+c+h)%fi,d=this.snapshots[u],m=d.players.filter(g=>g.idx!==void 0).map(g=>`${g.bot?"Bot":"P"}${g.idx}:${g.alive?"alive":"dead"}(${g.x},${g.y},${g.z})`).join(" | ");o.push({time:d.time.toFixed(2)+"s",players:m})}return o.length>0&&(console.log("Recent positions:"),console.table(o)),console.groupEnd(),{events:t,snapshots:o,lastRound:n,aggregate:i,baselineDelta:r?r.delta:null}}}const el="mini-curve-fever-3d.settings.v4",wg=["mini-curve-fever-3d.settings.v3"],nl="mini-curve-fever-3d.settings-profiles.v1",Lr="0.9.0",Ir="2026-02-18T02:54:07.929Z",Dr="MLRFULOA";function qt(s,t,e){return Math.min(Math.max(s,t),e)}function Nr(s){return JSON.parse(JSON.stringify(s))}const il=[{label:"Pitch Hoch",key:"UP"},{label:"Pitch Runter",key:"DOWN"},{label:"Links (Gier)",key:"LEFT"},{label:"Rechts (Gier)",key:"RIGHT"},{label:"Rollen Links",key:"ROLL_LEFT"},{label:"Rollen Rechts",key:"ROLL_RIGHT"},{label:"Boost",key:"BOOST"},{label:"Schiessen",key:"SHOOT"},{label:"Item Abwerfen",key:"DROP"},{label:"Item Wechseln",key:"NEXT_ITEM"},{label:"Kamera",key:"CAMERA"}];class Rg{constructor(){this.settings=this._loadSettings(),this.settingsProfiles=this._loadProfiles(),this.activeProfileName="",this.settingsDirty=!1,this.state="MENU",this.roundPause=0,this._hudTimer=0,this._adaptiveTimer=0,this._statsTimer=0,this.keyCapture=null,this.isLowQuality=!1,this._tmpAimVec=new b,this._tmpAimDir=new b,this._tmpRollEuler=new Pn(0,0,0,"YXZ");const t=document.getElementById("game-canvas");this.renderer=new lg(t),this.input=new ug,this.audio=new Eg,this.hudP1=new tl("p1-fighter-hud",0),this.hudP2=new tl("p2-fighter-hud",1),this.recorder=new bg,this._applySettingsToRuntime(),this.input.setBindings(this.settings.controls),this.arena=null,this.entityManager=null,this.powerupManager=null,this.particles=new Mg(this.renderer),this.gameLoop=new cg(e=>this.update(e),()=>this.render()),this.ui={mainMenu:document.getElementById("main-menu"),hud:document.getElementById("hud"),p2Hud:document.getElementById("p2-hud"),p1Score:document.querySelector("#p1-hud .player-score"),p2Score:document.querySelector("#p2-hud .player-score"),p1Items:document.getElementById("p1-items"),p2Items:document.getElementById("p2-items"),messageOverlay:document.getElementById("message-overlay"),messageText:document.getElementById("message-text"),messageSub:document.getElementById("message-sub"),statusToast:document.getElementById("status-toast"),keybindWarning:document.getElementById("keybind-warning"),menuContext:document.getElementById("menu-context"),buildInfo:document.getElementById("build-info"),buildInfoDetail:document.getElementById("build-info-detail"),copyBuildButton:document.getElementById("btn-copy-build"),modeButtons:Array.from(document.querySelectorAll(".mode-btn")),mapSelect:document.getElementById("map-select"),botSlider:document.getElementById("bot-count"),botLabel:document.getElementById("bot-count-label"),botDifficultySelect:document.getElementById("bot-difficulty"),winSlider:document.getElementById("win-count"),winLabel:document.getElementById("win-count-label"),autoRollToggle:document.getElementById("auto-roll-toggle"),invertP1:document.getElementById("invert-p1"),invertP2:document.getElementById("invert-p2"),cockpitCamP1:document.getElementById("cockpit-cam-p1"),cockpitCamP2:document.getElementById("cockpit-cam-p2"),portalsToggle:document.getElementById("portals-toggle"),speedSlider:document.getElementById("speed-slider"),speedLabel:document.getElementById("speed-label"),turnSlider:document.getElementById("turn-slider"),turnLabel:document.getElementById("turn-label"),planeSizeSlider:document.getElementById("plane-size-slider"),planeSizeLabel:document.getElementById("plane-size-label"),trailWidthSlider:document.getElementById("trail-width-slider"),trailWidthLabel:document.getElementById("trail-width-label"),gapSizeSlider:document.getElementById("gap-size-slider"),gapSizeLabel:document.getElementById("gap-size-label"),gapFrequencySlider:document.getElementById("gap-frequency-slider"),gapFrequencyLabel:document.getElementById("gap-frequency-label"),itemAmountSlider:document.getElementById("item-amount-slider"),itemAmountLabel:document.getElementById("item-amount-label"),fireRateSlider:document.getElementById("fire-rate-slider"),fireRateLabel:document.getElementById("fire-rate-label"),lockOnSlider:document.getElementById("lockon-slider"),lockOnLabel:document.getElementById("lockon-label"),crosshairP1:document.getElementById("crosshair-p1"),crosshairP2:document.getElementById("crosshair-p2"),keybindP1:document.getElementById("keybind-p1"),keybindP2:document.getElementById("keybind-p2"),resetKeysButton:document.getElementById("btn-reset-keys"),saveKeysButton:document.getElementById("btn-save-keys"),profileNameInput:document.getElementById("profile-name"),profileSelect:document.getElementById("profile-select"),profileSaveButton:document.getElementById("btn-profile-save"),profileLoadButton:document.getElementById("btn-profile-load"),profileDeleteButton:document.getElementById("btn-profile-delete"),startButton:document.getElementById("btn-start")},this._navButtons=[],this._menuButtonByPanel=new Map,this._lastMenuTrigger=null,this._buildInfoClipboardText="",this._setupMenuListeners(),this._setupMenuNavigation(),this._syncMenuControls(),this._markSettingsDirty(!1),this._renderBuildInfo(),this.gameLoop.start(),window.addEventListener("keydown",e=>this._handleKeyCapture(e),!0),this._fpsTracker={samples:[],avg:60,update(e){e>0&&this.samples.push(1/e),this.samples.length>60&&this.samples.shift(),this.avg=this.samples.length>0?this.samples.reduce((n,i)=>n+i,0)/this.samples.length:60}},window.addEventListener("keydown",e=>{if(e.code==="KeyP"&&!this.keyCapture){this.isLowQuality=!this.isLowQuality;const n=this.isLowQuality?"LOW":"HIGH";this.renderer.setQuality(n),this._showStatusToast(`Grafik: ${n==="LOW"?"Niedrig (Schnell)":"Hoch (Schön)"}`)}e.code==="KeyF"&&!this.keyCapture&&(this.stats?(this.stats.remove(),this.stats=null):(this.stats=document.createElement("div"),this.stats.style.cssText="position:fixed;top:10px;left:10px;color:#0f0;font:13px/1.5 monospace;z-index:1000;pointer-events:none;background:rgba(0,0,0,0.6);padding:8px 12px;border-radius:6px;min-width:200px;white-space:pre-wrap;",document.body.appendChild(this.stats),this._statsTimer=0))})}_formatBuildTime(){const t=new Date(Ir),e=Number.isNaN(t.getTime())?Ir:t.toISOString(),n=Number.isNaN(t.getTime())?Ir:t.toLocaleString("de-DE",{hour12:!1});return{short:e.slice(0,16).replace("T"," "),iso:e,local:n}}_renderBuildInfo(){const t=this._formatBuildTime(),e=`v${Lr} · Build ${Dr} · ${t.short}`,n=[`Version: v${Lr}`,`Build-ID: ${Dr}`,`Zeit (UTC): ${t.iso}`,`Zeit (lokal): ${t.local}`].join(`
`);this.ui.buildInfo&&(this.ui.buildInfo.textContent=e),this.ui.buildInfoDetail&&(this.ui.buildInfoDetail.textContent=n),this._buildInfoClipboardText=n}_copyBuildInfoToClipboard(){const t=this._buildInfoClipboardText||`v${Lr} · Build ${Dr}`,e=()=>{const n=document.createElement("textarea");n.value=t,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.top="-9999px",document.body.appendChild(n),n.select();const i=document.execCommand("copy");document.body.removeChild(n),this._showStatusToast(i?"Build-Info kopiert":"Kopieren nicht moeglich",1400,i?"success":"error")};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(()=>this._showStatusToast("Build-Info kopiert",1400,"success")).catch(()=>e());return}e()}_getMenuSectionLabel(t){if(!t)return"Hauptmenue";const e=this._menuButtonByPanel.get(t);if(e)return(e.textContent||"").replace(/\s+/g," ").trim();const n=document.querySelector(`#${t} .submenu-title`);return((n==null?void 0:n.textContent)||"Untermenue").replace(/\s+/g," ").trim()}_updateMenuContext(){var i;if(!this.ui.menuContext)return;const t=this._getMenuSectionLabel(this._activeSubmenu),e=this.activeProfileName||this._normalizeProfileName(((i=this.ui.profileNameInput)==null?void 0:i.value)||"")||"kein Profil",n=this.settingsDirty?"ungespeicherte Aenderungen":"alles gespeichert";this.ui.menuContext.textContent=`${t} · Profil: ${e} · ${n}`}_createDefaultSettings(){return{mode:"1p",mapKey:"standard",numBots:1,botDifficulty:"NORMAL",winsNeeded:5,autoRoll:!0,invertPitch:{PLAYER_1:!1,PLAYER_2:!1},cockpitCamera:{PLAYER_1:!1,PLAYER_2:!1},portalsEnabled:!0,gameplay:{speed:18,turnSensitivity:2.2,planeScale:1,trailWidth:.6,gapSize:.3,gapFrequency:.02,itemAmount:8,fireRate:.45,lockOnAngle:15,planarMode:!1,portalCount:0,planarLevelCount:5,portalBeams:!1},controls:this._cloneDefaultControls()}}_cloneDefaultControls(){const t=Nr(D.KEYS);return{PLAYER_1:{...t.PLAYER_1},PLAYER_2:{...t.PLAYER_2}}}_normalizePlayerControls(t,e){const n=t||{};return{UP:n.UP||e.UP,DOWN:n.DOWN||e.DOWN,LEFT:n.LEFT||e.LEFT,RIGHT:n.RIGHT||e.RIGHT,ROLL_LEFT:n.ROLL_LEFT||e.ROLL_LEFT,ROLL_RIGHT:n.ROLL_RIGHT||e.ROLL_RIGHT,BOOST:n.BOOST||e.BOOST,SHOOT:n.SHOOT||e.SHOOT,NEXT_ITEM:n.NEXT_ITEM||e.NEXT_ITEM,DROP:n.DROP||e.DROP,CAMERA:n.CAMERA||e.CAMERA}}_sanitizeSettings(t){var r,o,a,l,c,h,u,d,m,g,_,p,f,A,v,S,C,R;const e=this._createDefaultSettings(),n=t&&typeof t=="object"?t:{},i=Nr(e);return i.mode=n.mode==="2p"?"2p":"1p",i.mapKey=D.MAPS[n.mapKey]?n.mapKey:e.mapKey,i.numBots=qt(parseInt(n.numBots??e.numBots,10),0,8),i.botDifficulty=["EASY","NORMAL","HARD"].includes(n.botDifficulty)?n.botDifficulty:e.botDifficulty,i.winsNeeded=qt(parseInt(n.winsNeeded??e.winsNeeded,10),1,15),i.autoRoll=typeof n.autoRoll=="boolean"?n.autoRoll:e.autoRoll,i.invertPitch.PLAYER_1=!!((r=n==null?void 0:n.invertPitch)!=null&&r.PLAYER_1),i.invertPitch.PLAYER_2=!!((o=n==null?void 0:n.invertPitch)!=null&&o.PLAYER_2),i.cockpitCamera.PLAYER_1=!!((a=n==null?void 0:n.cockpitCamera)!=null&&a.PLAYER_1),i.cockpitCamera.PLAYER_2=!!((l=n==null?void 0:n.cockpitCamera)!=null&&l.PLAYER_2),i.portalsEnabled=(n==null?void 0:n.portalsEnabled)!==void 0?!!n.portalsEnabled:e.portalsEnabled,i.gameplay.speed=qt(parseFloat(((c=n==null?void 0:n.gameplay)==null?void 0:c.speed)??e.gameplay.speed),8,40),i.gameplay.turnSensitivity=qt(parseFloat(((h=n==null?void 0:n.gameplay)==null?void 0:h.turnSensitivity)??e.gameplay.turnSensitivity),.8,5),i.gameplay.planeScale=qt(parseFloat(((u=n==null?void 0:n.gameplay)==null?void 0:u.planeScale)??e.gameplay.planeScale),.6,2),i.gameplay.trailWidth=qt(parseFloat(((d=n==null?void 0:n.gameplay)==null?void 0:d.trailWidth)??e.gameplay.trailWidth),.2,2.5),i.gameplay.gapSize=qt(parseFloat(((m=n==null?void 0:n.gameplay)==null?void 0:m.gapSize)??e.gameplay.gapSize),.05,1.5),i.gameplay.gapFrequency=qt(parseFloat(((g=n==null?void 0:n.gameplay)==null?void 0:g.gapFrequency)??e.gameplay.gapFrequency),0,.25),i.gameplay.itemAmount=qt(parseInt(((_=n==null?void 0:n.gameplay)==null?void 0:_.itemAmount)??e.gameplay.itemAmount,10),1,20),i.gameplay.fireRate=qt(parseFloat(((p=n==null?void 0:n.gameplay)==null?void 0:p.fireRate)??e.gameplay.fireRate),.1,2),i.gameplay.lockOnAngle=qt(parseInt(((f=n==null?void 0:n.gameplay)==null?void 0:f.lockOnAngle)??e.gameplay.lockOnAngle,10),5,45),i.gameplay.planarMode=!!(((A=n==null?void 0:n.gameplay)==null?void 0:A.planarMode)??e.gameplay.planarMode),i.gameplay.portalCount=qt(parseInt(((v=n==null?void 0:n.gameplay)==null?void 0:v.portalCount)??e.gameplay.portalCount,10),0,20),i.gameplay.planarLevelCount=qt(parseInt(((S=n==null?void 0:n.gameplay)==null?void 0:S.planarLevelCount)??e.gameplay.planarLevelCount,10),2,10),i.gameplay.portalBeams=!1,i.controls.PLAYER_1=this._normalizePlayerControls((C=n==null?void 0:n.controls)==null?void 0:C.PLAYER_1,e.controls.PLAYER_1),i.controls.PLAYER_2=this._normalizePlayerControls((R=n==null?void 0:n.controls)==null?void 0:R.PLAYER_2,e.controls.PLAYER_2),i}_loadSettings(){try{const t=[el,...wg];for(const e of t){const n=localStorage.getItem(e);if(!n)continue;const i=JSON.parse(n);return this._sanitizeSettings(i)}}catch{}return this._createDefaultSettings()}_saveSettings(){try{localStorage.setItem(el,JSON.stringify(this.settings)),this._markSettingsDirty(!1)}catch{}}_loadProfiles(){try{const t=localStorage.getItem(nl);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return[];const n=[],i=new Set;for(const r of e){const o=this._normalizeProfileName((r==null?void 0:r.name)||""),a=this._getProfileNameKey(o);!o||i.has(a)||(i.add(a),n.push({name:o,updatedAt:Number((r==null?void 0:r.updatedAt)||Date.now()),settings:this._sanitizeSettings((r==null?void 0:r.settings)||{})}))}return n.sort((r,o)=>o.updatedAt-r.updatedAt),n}catch{return[]}}_saveProfiles(){try{return localStorage.setItem(nl,JSON.stringify(this.settingsProfiles)),!0}catch{return!1}}_normalizeProfileName(t){return String(t||"").trim().replace(/\s+/g," ").slice(0,32)}_getProfileNameKey(t){return this._normalizeProfileName(t).toLocaleLowerCase()}_findProfileIndexByName(t){const e=this._getProfileNameKey(t);return e?this.settingsProfiles.findIndex(n=>this._getProfileNameKey(n.name)===e):-1}_findProfileByName(t){const e=this._findProfileIndexByName(t);return e>=0?this.settingsProfiles[e]:null}_applySettingsToRuntime(){this.numHumans=this.settings.mode==="2p"?2:1,this.numBots=this.settings.numBots,this.mapKey=this.settings.mapKey,this.winsNeeded=this.settings.winsNeeded,D.PLAYER.SPEED=this.settings.gameplay.speed,D.PLAYER.TURN_SPEED=this.settings.gameplay.turnSensitivity,D.PLAYER.MODEL_SCALE=this.settings.gameplay.planeScale,D.PLAYER.HITBOX_RADIUS=.8*this.settings.gameplay.planeScale,D.PLAYER.AUTO_ROLL=this.settings.autoRoll,this.settings.gameplay&&(D.GAMEPLAY.PLANAR_MODE=!!this.settings.gameplay.planarMode,D.GAMEPLAY.PORTAL_COUNT=this.settings.gameplay.portalCount||0,D.GAMEPLAY.PLANAR_LEVEL_COUNT=qt(parseInt(this.settings.gameplay.planarLevelCount??5,10),2,10)),D.TRAIL.WIDTH=this.settings.gameplay.trailWidth,D.TRAIL.GAP_DURATION=this.settings.gameplay.gapSize,D.TRAIL.GAP_CHANCE=this.settings.gameplay.gapFrequency,D.POWERUP.MAX_ON_FIELD=Math.round(this.settings.gameplay.itemAmount),D.PROJECTILE.COOLDOWN=this.settings.gameplay.fireRate,this.settings.gameplay&&(D.GAMEPLAY.PORTAL_BEAMS=!1),D.BOT.ACTIVE_DIFFICULTY=this.settings.botDifficulty||D.BOT.DEFAULT_DIFFICULTY,this.arena&&this.arena.toggleBeams&&this.arena.toggleBeams(D.GAMEPLAY.PORTAL_BEAMS),this.entityManager&&this.entityManager.setBotDifficulty&&this.entityManager.setBotDifficulty(D.BOT.ACTIVE_DIFFICULTY),this.input.setBindings(this.settings.controls),D.HOMING.LOCK_ON_ANGLE=this.settings.gameplay.lockOnAngle}_setupMenuListeners(){this.ui.modeButtons.forEach(o=>{o.addEventListener("click",()=>{this.settings.mode=o.dataset.mode==="2p"?"2p":"1p",this._onSettingsChanged()})}),this.ui.mapSelect.addEventListener("change",o=>{this.settings.mapKey=D.MAPS[o.target.value]?o.target.value:"standard",this._onSettingsChanged()}),this.ui.botSlider.addEventListener("input",()=>{this.settings.numBots=qt(parseInt(this.ui.botSlider.value,10),0,8),this._onSettingsChanged()}),this.ui.botDifficultySelect&&this.ui.botDifficultySelect.addEventListener("change",()=>{const o=String(this.ui.botDifficultySelect.value||"").toUpperCase();this.settings.botDifficulty=["EASY","NORMAL","HARD"].includes(o)?o:"NORMAL",this._onSettingsChanged()}),this.ui.winSlider.addEventListener("input",()=>{this.settings.winsNeeded=qt(parseInt(this.ui.winSlider.value,10),1,15),this._onSettingsChanged()}),this.ui.autoRollToggle.addEventListener("change",()=>{this.settings.autoRoll=!!this.ui.autoRollToggle.checked,this._onSettingsChanged()}),this.ui.invertP1.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_1=!!this.ui.invertP1.checked,this._onSettingsChanged()}),this.ui.invertP2.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_2=!!this.ui.invertP2.checked,this._onSettingsChanged()}),this.ui.cockpitCamP1.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_1=!!this.ui.cockpitCamP1.checked,this._onSettingsChanged()}),this.ui.cockpitCamP2.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_2=!!this.ui.cockpitCamP2.checked,this._onSettingsChanged()});const t=document.getElementById("planar-mode-toggle");t&&t.addEventListener("change",o=>{this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarMode=o.target.checked,this.settings.gameplay.planarMode&&(this.settings.gameplay.portalCount||0)===0&&(this.settings.gameplay.portalCount=4,this._showStatusToast("Ebenen-Modus: 4 Portale aktiviert")),this._onSettingsChanged()}),this.ui.portalsToggle.addEventListener("change",()=>{this.settings.portalsEnabled=!!this.ui.portalsToggle.checked,this._onSettingsChanged()}),this.ui.speedSlider.addEventListener("input",()=>{this.settings.gameplay.speed=qt(parseFloat(this.ui.speedSlider.value),8,40),this._onSettingsChanged()}),this.ui.turnSlider.addEventListener("input",()=>{this.settings.gameplay.turnSensitivity=qt(parseFloat(this.ui.turnSlider.value),.8,5),this._onSettingsChanged()}),this.ui.planeSizeSlider.addEventListener("input",()=>{this.settings.gameplay.planeScale=qt(parseFloat(this.ui.planeSizeSlider.value),.6,2),this._onSettingsChanged()}),this.ui.trailWidthSlider.addEventListener("input",()=>{this.settings.gameplay.trailWidth=qt(parseFloat(this.ui.trailWidthSlider.value),.2,2.5),this._onSettingsChanged()}),this.ui.gapSizeSlider.addEventListener("input",()=>{this.settings.gameplay.gapSize=qt(parseFloat(this.ui.gapSizeSlider.value),.05,1.5),this._onSettingsChanged()}),this.ui.gapFrequencySlider.addEventListener("input",()=>{this.settings.gameplay.gapFrequency=qt(parseFloat(this.ui.gapFrequencySlider.value),0,.25),this._onSettingsChanged()}),this.ui.itemAmountSlider.addEventListener("input",()=>{this.settings.gameplay.itemAmount=qt(parseInt(this.ui.itemAmountSlider.value,10),1,20),this._onSettingsChanged()}),this.ui.fireRateSlider.addEventListener("input",()=>{this.settings.gameplay.fireRate=qt(parseFloat(this.ui.fireRateSlider.value),.1,2),this._onSettingsChanged()}),this.ui.lockOnSlider.addEventListener("input",()=>{this.settings.gameplay.lockOnAngle=qt(parseInt(this.ui.lockOnSlider.value,10),5,45),this._onSettingsChanged()}),this.ui.keybindP1.addEventListener("click",o=>{const a=o.target.closest("button.keybind-btn");a&&this._startKeyCapture("PLAYER_1",a.dataset.action)}),this.ui.keybindP2.addEventListener("click",o=>{const a=o.target.closest("button.keybind-btn");a&&this._startKeyCapture("PLAYER_2",a.dataset.action)}),this.ui.resetKeysButton.addEventListener("click",()=>{this.settings.controls=this._cloneDefaultControls(),this._onSettingsChanged(),this._showStatusToast("✅ Standard-Tasten wiederhergestellt")}),this.ui.saveKeysButton.addEventListener("click",()=>{this._saveSettings(),this._showStatusToast("Einstellungen gespeichert")}),this.ui.startButton.addEventListener("click",()=>{this.startMatch()}),this.ui.profileSaveButton&&this.ui.profileSaveButton.addEventListener("click",()=>{var o;this._saveProfile(((o=this.ui.profileNameInput)==null?void 0:o.value)||"")}),this.ui.profileLoadButton&&this.ui.profileLoadButton.addEventListener("click",()=>{var a;const o=this._normalizeProfileName(((a=this.ui.profileSelect)==null?void 0:a.value)||"");if(!o){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._loadProfile(o)}),this.ui.profileDeleteButton&&this.ui.profileDeleteButton.addEventListener("click",()=>{var a;const o=this._normalizeProfileName(((a=this.ui.profileSelect)==null?void 0:a.value)||"");if(!o){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._deleteProfile(o)}),this.ui.profileSelect&&this.ui.profileSelect.addEventListener("change",()=>{const o=this._normalizeProfileName(this.ui.profileSelect.value||""),a=this._findProfileByName(o);this.activeProfileName=a?a.name:"",this.ui.profileNameInput&&(this.ui.profileNameInput.value=this.activeProfileName),this._syncProfileActionState()}),this.ui.profileNameInput&&(this.ui.profileNameInput.addEventListener("input",()=>{this._syncProfileActionState()}),this.ui.profileNameInput.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),this._saveProfile(this.ui.profileNameInput.value||""))}));const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");e&&n&&e.addEventListener("input",o=>{const a=parseInt(o.target.value,10);n.textContent=a,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.portalCount=a,this._onSettingsChanged()});const i=document.getElementById("planar-level-count-slider"),r=document.getElementById("planar-level-count-label");i&&r&&i.addEventListener("input",o=>{const a=qt(parseInt(o.target.value,10),2,10);r.textContent=a,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarLevelCount=a,this._onSettingsChanged()}),this.ui.copyBuildButton&&this.ui.copyBuildButton.addEventListener("click",()=>{this._copyBuildInfoToClipboard()})}_setupMenuNavigation(){this._menuNav=document.getElementById("menu-nav"),this._submenuPanels=Array.from(document.querySelectorAll(".submenu-panel")),this._activeSubmenu=null,this._navButtons=Array.from(document.querySelectorAll(".nav-btn[data-submenu]")),this._menuButtonByPanel.clear();for(const e of this._submenuPanels)e.setAttribute("aria-hidden",e.classList.contains("hidden")?"true":"false");for(const e of this._navButtons){const n=e.dataset.submenu;n&&this._menuButtonByPanel.set(n,e),e.setAttribute("aria-expanded","false"),e.addEventListener("click",()=>{this._lastMenuTrigger=e,this._showSubmenu(n)})}this._menuNav&&this._menuNav.addEventListener("keydown",e=>{var o,a;if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const i=this._navButtons.indexOf(document.activeElement);if(i<0)return;if(e.preventDefault(),e.key==="Home"){(o=this._navButtons[0])==null||o.focus();return}if(e.key==="End"){(a=this._navButtons[this._navButtons.length-1])==null||a.focus();return}const r=e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1;this._focusNextNavButton(i,r)});const t=document.querySelectorAll(".back-btn[data-back]");for(const e of t)e.addEventListener("click",()=>{this._showMainNav()});window.addEventListener("keydown",e=>{e.code==="Escape"&&this.state==="MENU"&&this._activeSubmenu&&(e.preventDefault(),this._showMainNav())}),this._updateMenuNavState(),this._updateMenuContext()}_focusNextNavButton(t,e){var r;if(!this._navButtons.length)return;const n=this._navButtons.length,i=(t+e+n)%n;(r=this._navButtons[i])==null||r.focus()}_updateMenuNavState(){for(const t of this._navButtons){const e=t.dataset.submenu,n=!!this._activeSubmenu&&e===this._activeSubmenu;t.classList.toggle("active",n),t.setAttribute("aria-expanded",n?"true":"false")}}_focusFirstInSubmenu(t){if(!t)return;const e=t.querySelector('button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');e&&e.focus()}_showSubmenu(t){if(!t)return;this._menuNav&&(this._menuNav.classList.add("hidden"),this._menuNav.setAttribute("aria-hidden","true"));for(const n of this._submenuPanels)n.classList.add("hidden"),n.setAttribute("aria-hidden","true");const e=document.getElementById(t);e&&(e.classList.remove("hidden"),e.setAttribute("aria-hidden","false"),this._activeSubmenu=t,this._updateMenuNavState(),this._focusFirstInSubmenu(e),this._updateMenuContext())}_showMainNav(){for(const e of this._submenuPanels)e.classList.add("hidden"),e.setAttribute("aria-hidden","true");this._menuNav&&(this._menuNav.classList.remove("hidden"),this._menuNav.setAttribute("aria-hidden","false")),this._activeSubmenu=null,this._updateMenuNavState(),this._updateMenuContext();const t=this._lastMenuTrigger||this._navButtons[0];t&&this.state==="MENU"&&t.focus()}_onSettingsChanged(){this._applySettingsToRuntime(),this._markSettingsDirty(!0),this._syncMenuControls()}_syncMenuControls(){var o,a,l;this.ui.modeButtons.forEach(c=>{c.classList.toggle("active",c.dataset.mode===this.settings.mode)}),this.ui.mapSelect.value=this.settings.mapKey,this.ui.botSlider.value=String(this.settings.numBots),this.ui.botLabel.textContent=String(this.settings.numBots),this.ui.botDifficultySelect&&(this.ui.botDifficultySelect.value=this.settings.botDifficulty||"NORMAL"),this.ui.winSlider.value=String(this.settings.winsNeeded),this.ui.winLabel.textContent=String(this.settings.winsNeeded),this.ui.autoRollToggle.checked=this.settings.autoRoll,this.ui.invertP1.checked=this.settings.invertPitch.PLAYER_1,this.ui.invertP2.checked=this.settings.invertPitch.PLAYER_2,this.ui.cockpitCamP1.checked=this.settings.cockpitCamera.PLAYER_1,this.ui.cockpitCamP2.checked=this.settings.cockpitCamera.PLAYER_2;const t=document.getElementById("planar-mode-toggle");t&&(t.checked=((o=this.settings.gameplay)==null?void 0:o.planarMode)||!1),this.ui.portalsToggle.checked=this.settings.portalsEnabled;const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");if(e&&n){const c=((a=this.settings.gameplay)==null?void 0:a.portalCount)||0;e.value=c,n.textContent=c}const i=document.getElementById("planar-level-count-slider"),r=document.getElementById("planar-level-count-label");if(i&&r){const c=qt(parseInt(((l=this.settings.gameplay)==null?void 0:l.planarLevelCount)??5,10),2,10);i.value=c,r.textContent=c}this.ui.speedSlider.value=String(this.settings.gameplay.speed),this.ui.speedLabel.textContent=this.settings.gameplay.speed.toFixed(1),this.ui.turnSlider.value=String(this.settings.gameplay.turnSensitivity),this.ui.turnLabel.textContent=this.settings.gameplay.turnSensitivity.toFixed(1),this.ui.planeSizeSlider.value=String(this.settings.gameplay.planeScale),this.ui.planeSizeLabel.textContent=this.settings.gameplay.planeScale.toFixed(1),this.ui.trailWidthSlider.value=String(this.settings.gameplay.trailWidth),this.ui.trailWidthLabel.textContent=this.settings.gameplay.trailWidth.toFixed(2),this.ui.gapSizeSlider.value=String(this.settings.gameplay.gapSize),this.ui.gapSizeLabel.textContent=this.settings.gameplay.gapSize.toFixed(2),this.ui.gapFrequencySlider.value=String(this.settings.gameplay.gapFrequency),this.ui.gapFrequencyLabel.textContent=this.settings.gameplay.gapFrequency.toFixed(3),this.ui.itemAmountSlider.value=String(this.settings.gameplay.itemAmount),this.ui.itemAmountLabel.textContent=String(this.settings.gameplay.itemAmount),this.ui.fireRateSlider.value=String(this.settings.gameplay.fireRate),this.ui.fireRateLabel.textContent=this.settings.gameplay.fireRate.toFixed(2),this.ui.lockOnSlider.value=String(this.settings.gameplay.lockOnAngle),this.ui.lockOnLabel.textContent=String(this.settings.gameplay.lockOnAngle),this._renderKeybindEditor(),this._syncP2HudVisibility(),this._syncProfileControls(),this._updateSaveButtonState()}_markSettingsDirty(t){this.settingsDirty=!!t,this._updateSaveButtonState()}_updateSaveButtonState(){var t;(t=this.ui)!=null&&t.saveKeysButton&&(this.ui.saveKeysButton.classList.toggle("unsaved",this.settingsDirty),this.ui.saveKeysButton.textContent=this.settingsDirty?"💾 Einstellungen explizit speichern *":"💾 Einstellungen explizit speichern",this._updateMenuContext())}_syncProfileControls(){var o;if(!this.ui.profileSelect)return;const t=this._normalizeProfileName(this.activeProfileName||this.ui.profileSelect.value||""),e=[...this.settingsProfiles].sort((a,l)=>l.updatedAt-a.updatedAt);this.ui.profileSelect.innerHTML="";const n=document.createElement("option");n.value="",n.textContent="Kein Profil gewaehlt",this.ui.profileSelect.appendChild(n);for(const a of e){const l=document.createElement("option");l.value=a.name,l.textContent=a.name,this.ui.profileSelect.appendChild(l)}const i=this._findProfileByName(t),r=i?i.name:"";this.activeProfileName=r,this.ui.profileSelect.value=r,this.ui.profileNameInput&&!((o=document.activeElement)!=null&&o.isSameNode(this.ui.profileNameInput))&&(this.ui.profileNameInput.value=r),this._syncProfileActionState()}_syncProfileActionState(){var o,a;const t=this._findProfileByName(((o=this.ui.profileSelect)==null?void 0:o.value)||this.activeProfileName||""),e=this._normalizeProfileName(((a=this.ui.profileNameInput)==null?void 0:a.value)||""),n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),r=e&&n>=0&&n===i;this.ui.profileLoadButton&&(this.ui.profileLoadButton.disabled=!t),this.ui.profileDeleteButton&&(this.ui.profileDeleteButton.disabled=!t),this.ui.profileSaveButton&&(this.ui.profileSaveButton.disabled=!e,e?r?this.ui.profileSaveButton.textContent="Aktives Profil aktualisieren":n>=0?this.ui.profileSaveButton.textContent="Name bereits vergeben":this.ui.profileSaveButton.textContent="Neues Profil speichern":this.ui.profileSaveButton.textContent="Profil unter Namen speichern"),this._updateMenuContext()}_saveProfile(t){const e=this._normalizeProfileName(t);if(!e)return this._showStatusToast("Profilname fehlt",1400,"error"),!1;const n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),r=n>=0&&n===i;if(n>=0&&!r)return this._showStatusToast("Name existiert bereits",1500,"error"),!1;const o=n>=0,a={name:e,updatedAt:Date.now(),settings:Nr(this.settings)};n>=0?this.settingsProfiles[n]=a:this.settingsProfiles.push(a),this.activeProfileName=e;const l=this._saveProfiles();return this._syncProfileControls(),l?(this._showStatusToast(o?`Profil aktualisiert: ${e}`:`Profil gespeichert: ${e}`,1500,"success"),!0):(this._showStatusToast("Profil konnte nicht gespeichert werden",1700,"error"),!1)}_loadProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileByName(e);return n?(this.settings=this._sanitizeSettings(n.settings),this.activeProfileName=n.name,this._onSettingsChanged(),this._markSettingsDirty(!1),this._showStatusToast(`Profil geladen: ${n.name}`,1400,"success"),!0):(this._showStatusToast("Profil nicht gefunden",1500,"error"),!1)}_deleteProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileIndexByName(e);if(n<0)return this._showStatusToast("Profil nicht gefunden",1500,"error"),!1;const i=this.settingsProfiles[n].name;this.settingsProfiles.splice(n,1),this._findProfileIndexByName(this.activeProfileName)<0&&(this.activeProfileName="");const r=this._saveProfiles();return this._syncProfileControls(),r?(this._showStatusToast(`Profil geloescht: ${i}`,1400,"success"),!0):(this._showStatusToast("Profil konnte nicht geloescht werden",1700,"error"),!1)}_renderKeybindEditor(){const t=this._collectKeyConflicts();this._renderKeybindRows("PLAYER_1",this.ui.keybindP1,t),this._renderKeybindRows("PLAYER_2",this.ui.keybindP2,t),this._updateKeyConflictWarning(t)}_renderKeybindRows(t,e,n){e.innerHTML="";for(const i of il){const r=document.createElement("div");r.className="key-row";const o=document.createElement("div");o.className="key-action",o.textContent=i.label;const a=this._getControlValue(t,i.key),l=document.createElement("button");l.type="button",l.className="keybind-btn",l.dataset.action=i.key;const c=!!a&&(n.get(a)||0)>1;l.textContent=this._formatKeyCode(a)+(c?"  (Konflikt)":""),c&&(r.classList.add("conflict"),l.classList.add("conflict")),this.keyCapture&&this.keyCapture.playerKey===t&&this.keyCapture.actionKey===i.key&&(l.classList.add("listening"),l.textContent="Taste druecken..."),r.appendChild(o),r.appendChild(l),e.appendChild(r)}}_startKeyCapture(t,e){this.keyCapture={playerKey:t,actionKey:e},this._renderKeybindEditor()}_handleKeyCapture(t){if(!(!this.keyCapture||this.ui.mainMenu.classList.contains("hidden"))){if(t.preventDefault(),t.stopPropagation(),t.code==="Escape"){this.keyCapture=null,this._renderKeybindEditor();return}this._setControlValue(this.keyCapture.playerKey,this.keyCapture.actionKey,t.code),this.keyCapture=null,this._onSettingsChanged(),this._showStatusToast("✅ Taste gespeichert!")}}_getControlValue(t,e){return this.settings.controls[t][e]||""}_setControlValue(t,e,n){this.settings.controls[t][e]=n}_collectKeyConflicts(){const t=new Map;for(const e of["PLAYER_1","PLAYER_2"])for(const n of il){const i=this._getControlValue(e,n.key);i&&t.set(i,(t.get(i)||0)+1)}return t}_updateKeyConflictWarning(t){const e=Array.from(t.entries()).filter(([,n])=>n>1).map(([n])=>this._formatKeyCode(n));if(e.length===0){this.ui.keybindWarning.classList.add("hidden"),this.ui.keybindWarning.textContent="";return}this.ui.keybindWarning.classList.remove("hidden"),this.ui.keybindWarning.textContent=`Achtung: Mehrfachbelegte Tasten: ${e.join(", ")}`}_formatKeyCode(t){if(!t)return"-";const e={ArrowUp:"Arrow Up",ArrowDown:"Arrow Down",ArrowLeft:"Arrow Left",ArrowRight:"Arrow Right",ShiftLeft:"Shift Left",ShiftRight:"Shift Right",Space:"Space",Enter:"Enter",Escape:"Escape",ControlLeft:"Ctrl Left",ControlRight:"Ctrl Right",AltLeft:"Alt Left",AltRight:"Alt Right"};return e[t]?e[t]:t.startsWith("Key")?t.slice(3):t.startsWith("Digit")?t.slice(5):t.startsWith("Numpad")?`Num ${t.slice(6)}`:t}_showStatusToast(t,e=1200,n="info"){if(!this.ui.statusToast)return;const i=n==="success"||n==="error"?n:"info";this.ui.statusToast.textContent=t,this.ui.statusToast.classList.remove("hidden","show","toast-info","toast-success","toast-error"),this.ui.statusToast.classList.add(`toast-${i}`),this.ui.statusToast.offsetWidth,this.ui.statusToast.classList.add("show"),this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.ui.statusToast.classList.remove("show"),this.ui.statusToast.classList.add("hidden")},e)}_showPlayerFeedback(t,e){if(!t)return;const n=t.isBot?`Bot ${t.index+1}`:`P${t.index+1}`;this._showStatusToast(`${n}: ${e}`)}_syncP2HudVisibility(){this.ui.p2Hud.classList.toggle("hidden",this.numHumans!==2)}startMatch(){this.keyCapture=null,this._applySettingsToRuntime(),this.ui.mainMenu.classList.add("hidden"),this.ui.hud.classList.remove("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this.renderer.setSplitScreen(this.numHumans===2),this._syncP2HudVisibility(),this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.particles.clear(),this.renderer.clearScene(),this.arena=new dg(this.renderer),this.arena.portalsEnabled=this.settings.portalsEnabled,this.arena.build(this.mapKey),this.powerupManager=new yg(this.renderer,this.arena),this.entityManager=new Sg(this.renderer,this.arena,this.powerupManager,this.particles,this.audio,this.recorder),this.numHumans=this.settings.mode==="2p"?2:1,this.numBots=this.settings.numBots,this.mapKey=this.settings.mapKey,this.winsNeeded=this.settings.winsNeeded||5,this.entityManager.setup(this.numHumans,this.numBots,{modelScale:this.settings.gameplay.planeScale,botDifficulty:this.settings.botDifficulty||"NORMAL",humanConfigs:[{invertPitch:this.settings.invertPitch.PLAYER_1,cockpitCamera:this.settings.cockpitCamera.PLAYER_1},{invertPitch:this.settings.invertPitch.PLAYER_2,cockpitCamera:this.settings.cockpitCamera.PLAYER_2}]}),this.entityManager.onPlayerFeedback=(t,e)=>{this._showPlayerFeedback(t,e)};for(let t=0;t<this.numHumans;t++)this.renderer.createCamera(t);for(const t of this.entityManager.players)t.score=0;this.entityManager.onPlayerDied=()=>{},this.entityManager.onRoundEnd=t=>{this._onRoundEnd(t)},this._startRound()}_startRound(){this.state="PLAYING",this._hudTimer=0,this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none"),this.roundPause=0;for(const t of this.entityManager.players)t.trail.clear();this.powerupManager.clear(),this.recorder.startRound(this.entityManager.players),this.entityManager.spawnAll();for(const t of this.entityManager.getHumanPlayers())t.planarAimOffset=0;this.gameLoop.setTimeScale(1),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this._updateHUD()}_onRoundEnd(t){this.state="ROUND_END",this.roundPause=3,console.log("--- ROUND END ---");try{const o=this.recorder.finalizeRound(t,this.entityManager.players);o&&console.log("[Recorder] Round KPI:",o),this.recorder.dump()}catch(o){console.error("Recorder Dump Failed:",o)}t&&t.score++,this._updateHUD();const e=parseInt(this.numBots)||0,n=this.entityManager.getHumanPlayers().length>1||e>0,i=Math.max(5,this.winsNeeded),r=n?this.entityManager.players.find(o=>o.score>=i):null;if(r){this.state="MATCH_END";const o=r.isBot?`Bot ${r.index+1}`:`Spieler ${r.index+1}`;this.ui.messageText.textContent=`Sieg: ${o} (Score: ${r.score})`,this.ui.messageSub.textContent="ENTER fuer neues Match oder ESC fuer Menue",this.ui.messageOverlay.classList.remove("hidden")}else if(t){const o=t.isBot?`Bot ${t.index+1}`:`Spieler ${t.index+1}`;this.ui.messageText.textContent=`${o} gewinnt die Runde`,this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}else this.ui.messageText.textContent="Unentschieden",this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}_updateHUD(){const t=this.entityManager.getHumanPlayers();if(t.length>0){const e=String(t[0].score);this.ui.p1Score.textContent!==e&&(this.ui.p1Score.textContent=e),this._updateItemBar(this.ui.p1Items,t[0])}if(t.length>1){const e=String(t[1].score);this.ui.p2Score.textContent!==e&&(this.ui.p2Score.textContent=e),this._updateItemBar(this.ui.p2Items,t[1])}}_updateItemBar(t,e){this._ensureItemSlots(t);for(let n=0;n<D.POWERUP.MAX_INVENTORY;n++){const i=t.children[n],r=n<e.inventory.length?e.inventory[n]:"";if(i.dataset.type!==r)if(i.dataset.type=r,r){const o=D.POWERUP.TYPES[r];i.textContent=o.icon,i.classList.add("active"),i.style.borderColor="#"+o.color.toString(16).padStart(6,"0")}else i.textContent="",i.classList.remove("active"),i.style.borderColor=""}}_ensureItemSlots(t){const e=D.POWERUP.MAX_INVENTORY;for(;t.children.length<e;){const n=document.createElement("div");n.className="item-slot",n.dataset.type="",t.appendChild(n)}for(;t.children.length>e;)t.removeChild(t.lastChild)}_getPlanarAimAxis(t){const e=this.settings.controls,n=e.PLAYER_1,i=e.PLAYER_2;let r=!1,o=!1;if(this.numHumans===1&&t===0)r=this.input.isDown(n.UP)||this.input.isDown(i.UP),o=this.input.isDown(n.DOWN)||this.input.isDown(i.DOWN);else{const a=t===0?n:i;r=this.input.isDown(a.UP),o=this.input.isDown(a.DOWN)}return(o?1:0)-(r?1:0)}_updatePlanarAimAssist(t){if(!this.entityManager)return;const e=D.GAMEPLAY.PLANAR_AIM_INPUT_SPEED,n=!!D.GAMEPLAY.PLANAR_MODE;for(const i of this.entityManager.getHumanPlayers()){const r=n?this._getPlanarAimAxis(i.index):0;let o=i.planarAimOffset||0;if(r!==0)o+=r*e*t;else{const a=1-Math.exp(-.6*t);o+=(0-o)*a}i.planarAimOffset=qt(o,-1,1)}}_updateCrosshairPosition(t,e){if(!t||!t.alive||!e){e&&(e.style.display="none");return}const n=this.renderer.cameras[t.index];if(!n){e.style.display="none";return}e.style.display="block";const i=window.innerWidth,r=window.innerHeight,o=this.numHumans===2,a=o?i*.5:i,l=o?t.index===0?0:a:0;t.getAimDirection(this._tmpAimDir),this._tmpAimVec.copy(t.position).addScaledVector(this._tmpAimDir,80).project(n);const c=qt(this._tmpAimVec.x,-1.05,1.05),h=qt(this._tmpAimVec.y,-1.05,1.05),u=l+(c*.5+.5)*a,d=(-(h*.5)+.5)*r;this._tmpRollEuler.setFromQuaternion(t.quaternion,"YXZ");const m=wn.radToDeg(this._tmpRollEuler.z);e.style.left=`${u}px`,e.style.top=`${d}px`,e.style.transform=`translate(-50%, -50%) rotate(${m.toFixed(2)}deg)`}_updateCrosshairs(){if(!this.entityManager)return;const t=this.entityManager.players[0],e=this.entityManager.players[1],n=!!D.GAMEPLAY.PLANAR_MODE,i=r=>r?n?!0:(D.CAMERA.MODES[r.cameraMode]||"THIRD_PERSON")!=="FIRST_PERSON":!1;this.ui.crosshairP1&&(i(t)?this._updateCrosshairPosition(t,this.ui.crosshairP1):this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.numHumans===2?i(e)?this._updateCrosshairPosition(e,this.ui.crosshairP2):this.ui.crosshairP2.style.display="none":this.ui.crosshairP2.style.display="none")}update(t){if(this._fpsTracker.update(t),this.state==="PLAYING"&&this.entityManager&&this.recorder.recordFrame(this.entityManager.players),this.stats&&(this._statsTimer=(this._statsTimer||0)+t,this._statsTimer>=.25)){this._statsTimer=0;const e=this.renderer.renderer.info,n=Math.round(this._fpsTracker.avg),i=e.render.calls||0,r=e.render.triangles||0,o=e.memory.geometries||0,a=e.memory.textures||0,l=this.entityManager?this.entityManager.players.filter(h=>h.alive).length:0,c=this.isLowQuality?"LOW":"HIGH";this.stats.innerHTML=`<b style="color:${n<30?"#f44":n<50?"#fa0":"#0f0"}">FPS: ${n}</b>
Draw Calls: ${i}
Dreiecke: ${(r/1e3).toFixed(1)}k
Geometrien: ${o}
Texturen: ${a}
Spieler: ${l}
Qualität: ${c}`}if(this._adaptiveTimer=(this._adaptiveTimer||0)+t,this._adaptiveTimer>=3&&(this._adaptiveTimer=0,this._fpsTracker.avg<30&&!this.isLowQuality&&this.state==="PLAYING"&&(this.isLowQuality=!0,this.renderer.setQuality("LOW"),this._showStatusToast("⚡ Grafik automatisch reduziert"))),this.state==="PLAYING"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this._updatePlanarAimAssist(t),this.entityManager.update(t,this.input),this.powerupManager.update(t),this.particles.update(t),this.arena.update(t),this.entityManager.updateCameras(t),this._updateCrosshairs(),this._hudTimer+=t,this._hudTimer>=.2&&(this._hudTimer=0,this._updateHUD());const e=this.entityManager.players[0];if(e&&this.hudP1.update(e,t,this.entityManager),this.ui.crosshairP1&&(this.entityManager.getLockOnTarget(0)?this.ui.crosshairP1.classList.add("locked"):this.ui.crosshairP1.classList.remove("locked")),this.ui.crosshairP2&&this.numHumans===2){this.entityManager.getLockOnTarget(1)?this.ui.crosshairP2.classList.add("locked"):this.ui.crosshairP2.classList.remove("locked");const i=this.entityManager.players[1];i&&this.hudP2.update(i,t,this.entityManager)}else this.hudP2.setVisibility(!1);for(const n of this.entityManager.players)for(const i of n.activeEffects)i.type==="SLOW_TIME"&&this.gameLoop.setTimeScale(D.POWERUP.TYPES.SLOW_TIME.timeScale)}else if(this.state==="ROUND_END"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this.input.wasPressed("Enter")&&(this.roundPause=0),this.roundPause-=t;const e=Math.ceil(this.roundPause);e>0&&(this.ui.messageSub.textContent=`Naechste Runde in ${e}...`),this.entityManager.updateCameras(t),this.roundPause<=0&&this._startRound()}else this.state==="MATCH_END"&&(this.input.wasPressed("Enter")?this.startMatch():this.input.wasPressed("Escape")&&this._returnToMenu(),this.entityManager.updateCameras(t))}render(){this.renderer.render()}_returnToMenu(){this.state="MENU",this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.renderer.clearScene(),this.arena=null,this.entityManager=null,this.powerupManager=null,this.ui.mainMenu.classList.remove("hidden"),this._showMainNav(),this.ui.hud.classList.add("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none",this.ui.crosshairP1.style.left="50%",this.ui.crosshairP1.style.top="50%",this.ui.crosshairP1.style.transform="translate(-50%, -50%) rotate(0deg)"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none",this.ui.crosshairP2.style.left="50%",this.ui.crosshairP2.style.top="50%",this.ui.crosshairP2.style.transform="translate(-50%, -50%) rotate(0deg)"),this._syncMenuControls()}_showDebugLog(t){}captureBotBaseline(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.captureBaseline(e);return this._showStatusToast(`Bot-Baseline gespeichert: ${e}`),console.log(`[Recorder] Baseline gespeichert (${e}):`,n),n}printBotValidationReport(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.getAggregateMetrics(),i=this.recorder.compareWithBaseline(e),r=this.recorder.getValidationMatrix(),o={label:e,aggregate:n,comparison:i,matrix:r};return console.log("[Recorder] Validation report:",o),o}getBotValidationMatrix(){return this.recorder.getValidationMatrix()}printBotTestProtocol(){const t=this.getBotValidationMatrix(),e={steps:["1) applyBotValidationScenario(0) und 10 Runden spielen.",'2) captureBotBaseline("BASELINE") ausfuehren.',"3) Weitere Szenarien aus der Matrix durchspielen.",'4) printBotValidationReport("BASELINE") fuer KPI-Vergleich ausfuehren.'],matrix:t};return console.log("[Recorder] Bot-Testprotokoll:",e),e}applyBotValidationScenario(t=0){const e=this.getBotValidationMatrix();if(!e||e.length===0)return null;let n=null;return typeof t=="number"?n=e[Math.max(0,Math.min(e.length-1,t))]:n=e.find(i=>i.id===t)||e[0],n?(this.settings.mode=n.mode==="2p"?"2p":"1p",this.settings.numBots=n.bots,this.settings.mapKey=n.mapKey,this.settings.gameplay.planarMode=!!n.planarMode,this.settings.gameplay.portalCount=n.portalCount,this.settings.portalsEnabled=n.portalCount>0||this.settings.portalsEnabled,this.settings.winsNeeded=Math.max(1,this.settings.winsNeeded),this._onSettingsChanged(),this._showStatusToast(`Szenario ${n.id} geladen`),console.log("[Recorder] Validation scenario loaded:",n),n):null}}window.onerror=function(s,t,e,n,i){const r=document.createElement("div");return r.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",r.innerHTML=`<h1>CRITICAL ERROR</h1><p>${s}</p><p>${t}:${e}:${n}</p><pre>${i?i.stack:"No stack trace"}</pre>`,document.body.appendChild(r),!1};window.addEventListener("DOMContentLoaded",()=>{try{console.log("DOM ready, initializing Game...");const s=new Rg;window.GAME_INSTANCE=s}catch(s){console.error("Fatal Game Init Error:",s);const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",t.innerHTML=`<h1>INIT ERROR</h1><p>${s.message}</p><pre>${s.stack}</pre>`,document.body.appendChild(t)}});
