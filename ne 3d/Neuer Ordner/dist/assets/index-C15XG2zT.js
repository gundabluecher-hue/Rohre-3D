(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="160",Uc=0,Ra=1,Oc=2,Fc=0,Pl=1,Bc=2,mn=3,On=0,Ce=1,Ze=2,Dn=0,bi=1,Pa=2,La=3,Ca=4,kc=5,Yn=100,zc=101,Vc=102,Ia=103,Da=104,Hc=200,Gc=201,Wc=202,Xc=203,Kr=204,$r=205,Yc=206,qc=207,Kc=208,$c=209,Zc=210,jc=211,Jc=212,Qc=213,th=214,eh=0,nh=1,ih=2,Vs=3,sh=4,rh=5,ah=6,oh=7,Ll=0,lh=1,ch=2,vn=0,hh=1,uh=2,dh=3,Zr=4,fh=5,ph=6,Cl=300,Pi=301,Li=302,jr=303,Jr=304,Zs=306,$i=1e3,je=1001,Qr=1002,Ee=1003,Na=1004,Bs=1005,Ve=1006,mh=1007,Zi=1008,Nn=1009,gh=1010,_h=1011,ha=1012,Il=1013,Pn=1014,Ln=1015,ji=1016,Dl=1017,Nl=1018,Kn=1020,vh=1021,Je=1023,Sh=1024,xh=1025,$n=1026,Ci=1027,yh=1028,Ul=1029,Mh=1030,Ol=1031,Fl=1033,ar=33776,or=33777,lr=33778,cr=33779,Ua=35840,Oa=35841,Fa=35842,Ba=35843,Bl=36196,ka=37492,za=37496,Va=37808,Ha=37809,Ga=37810,Wa=37811,Xa=37812,Ya=37813,qa=37814,Ka=37815,$a=37816,Za=37817,ja=37818,Ja=37819,Qa=37820,to=37821,hr=36492,eo=36494,no=36495,Eh=36283,io=36284,so=36285,ro=36286,kl=3e3,Zn=3001,Ah=3200,Th=3201,zl=0,bh=1,We="",ve="srgb",Sn="srgb-linear",ua="display-p3",js="display-p3-linear",Hs="linear",ee="srgb",Gs="rec709",Ws="p3",ii=7680,ao=519,wh=512,Rh=513,Ph=514,Vl=515,Lh=516,Ch=517,Ih=518,Dh=519,oo=35044,Hl=35048,lo="300 es",ta=1035,gn=2e3,Xs=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const wi=Math.PI/180,Ji=180/Math.PI;function ei(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Se(r,t,e){return Math.max(t,Math.min(e,r))}function da(r,t){return(r%t+t)%t}function Nh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Uh(r,t,e){return r!==t?(e-r)/(t-r):0}function Gi(r,t,e){return(1-e)*r+e*t}function Oh(r,t,e,n){return Gi(r,t,1-Math.exp(-e*n))}function Fh(r,t=1){return t-Math.abs(da(r,t*2)-t)}function Bh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function kh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function zh(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Vh(r,t){return r+Math.random()*(t-r)}function Hh(r){return r*(.5-Math.random())}function Gh(r){r!==void 0&&(co=r);let t=co+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wh(r){return r*wi}function Xh(r){return r*Ji}function ea(r){return(r&r-1)===0&&r!==0}function Yh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qh(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function we(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Un={DEG2RAD:wi,RAD2DEG:Ji,generateUUID:ei,clamp:Se,euclideanModulo:da,mapLinear:Nh,inverseLerp:Uh,lerp:Gi,damp:Oh,pingpong:Fh,smoothstep:Bh,smootherstep:kh,randInt:zh,randFloat:Vh,randFloatSpread:Hh,seededRandom:Gh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:ea,ceilPowerOfTwo:Yh,floorPowerOfTwo:Ys,setQuaternionFromProperEuler:qh,normalize:we,denormalize:Mi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,s,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],S=i[1],v=i[4],M=i[7],R=i[2],b=i[5],w=i[8];return s[0]=a*_+o*S+l*R,s[3]=a*f+o*v+l*b,s[6]=a*p+o*M+l*w,s[1]=c*_+h*S+u*R,s[4]=c*f+h*v+u*b,s[7]=c*p+h*M+u*w,s[2]=d*_+m*S+g*R,s[5]=d*f+m*v+g*b,s[8]=d*p+m*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Wt;function Gl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kh(){const r=qs("canvas");return r.style.display="block",r}const ho={};function Wi(r){r in ho||(ho[r]=!0,console.warn(r))}const uo=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fo=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[Sn]:{transfer:Hs,primaries:Gs,toReference:r=>r,fromReference:r=>r},[ve]:{transfer:ee,primaries:Gs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[js]:{transfer:Hs,primaries:Ws,toReference:r=>r.applyMatrix3(fo),fromReference:r=>r.applyMatrix3(uo)},[ua]:{transfer:ee,primaries:Ws,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fo),fromReference:r=>r.applyMatrix3(uo).convertLinearToSRGB()}},$h=new Set([Sn,js]),Zt={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$h.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=rs[t].toReference,i=rs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return rs[r].primaries},getTransfer:function(r){return r===We?Hs:rs[r].transfer}};function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let si;class Wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=qs("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zh=0;class Xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(fr(i[a].image)):s.push(fr(i[a]))}else s=fr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function fr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Ie extends Di{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=je,i=je,s=Ve,a=Zi,o=Je,l=Nn,c=Ie.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ei(),this.name="",this.source=new Xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?ve:We),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case Qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case Qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Zn:kl}set encoding(t){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Zn?ve:We}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Cl;Ie.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,R=(p+1)/2,b=(h+d)/4,w=(u+_)/4,N=(g+f)/4;return v>M&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=w/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=N/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=N/s),this.set(n,i,s,e),this}let S=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?ve:We),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yl extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qh extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-o;const p=l*d+c*m+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,p*S);f=Math.sin(f*b)/R,o=Math.sin(o*b)/R}const M=o*S;if(l=l*f+d*M,c=c*f+m*M,h=h*f+g*M,u=u*f+_*M,f===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new P,po=new Jn;class an{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(s,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),os.subVectors(this.max,Fi),ri.subVectors(t.a,Fi),ai.subVectors(t.b,Fi),oi.subVectors(t.c,Fi),yn.subVectors(ai,ri),Mn.subVectors(oi,ai),zn.subVectors(ri,oi);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-zn.z,zn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,zn.z,0,-zn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-zn.y,zn.x,0];return!mr(e,ri,ai,oi,os)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,ri,ai,oi,os))?!1:(ls.crossVectors(yn,Mn),e=[ls.x,ls.y,ls.z],mr(e,ri,ai,oi,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,as=new an,ri=new P,ai=new P,oi=new P,yn=new P,Mn=new P,zn=new P,Fi=new P,os=new P,ls=new P,Vn=new P;function mr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vn.fromArray(r,s);const o=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tu=new an,Bi=new P,gr=new P;class xn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(gr)),this.expandByPoint(Bi.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new P,_r=new P,cs=new P,En=new P,vr=new P,hs=new P,Sr=new P;class fa{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_r.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(_r);const s=t.distanceTo(e)*.5,a=-this.direction.dot(cs),o=En.dot(this.direction),l=-En.dot(cs),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_r).addScaledVector(cs,d),m}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,s){vr.subVectors(e,t),hs.subVectors(n,t),Sr.crossVectors(vr,hs);let a=this.direction.dot(Sr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(En,hs));if(l<0)return null;const c=o*this.direction.dot(vr.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(Sr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,l,c,h,u,d,m,g,_,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,m,g,_,f)}set(t,e,n,i,s,a,o,l,c,h,u,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),An.crossVectors(n,Ne),An.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),An.crossVectors(n,Ne)),An.normalize(),us.crossVectors(Ne,An),i[0]=An.x,i[4]=us.x,i[8]=Ne.x,i[1]=An.y,i[5]=us.y,i[9]=Ne.y,i[2]=An.z,i[6]=us.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],S=n[3],v=n[7],M=n[11],R=n[15],b=i[0],w=i[4],N=i[8],y=i[12],T=i[1],U=i[5],W=i[9],tt=i[13],C=i[2],B=i[6],V=i[10],q=i[14],Y=i[3],X=i[7],j=i[11],J=i[15];return s[0]=a*b+o*T+l*C+c*Y,s[4]=a*w+o*U+l*B+c*X,s[8]=a*N+o*W+l*V+c*j,s[12]=a*y+o*tt+l*q+c*J,s[1]=h*b+u*T+d*C+m*Y,s[5]=h*w+u*U+d*B+m*X,s[9]=h*N+u*W+d*V+m*j,s[13]=h*y+u*tt+d*q+m*J,s[2]=g*b+_*T+f*C+p*Y,s[6]=g*w+_*U+f*B+p*X,s[10]=g*N+_*W+f*V+p*j,s[14]=g*y+_*tt+f*q+p*J,s[3]=S*b+v*T+M*C+R*Y,s[7]=S*w+v*U+M*B+R*X,s[11]=S*N+v*W+M*V+R*j,s[15]=S*y+v*tt+M*q+R*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*m-n*l*m)+_*(+e*l*m-e*c*d+s*a*d-i*a*m+i*c*h-s*l*h)+f*(+e*c*u-e*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],S=u*f*c-_*d*c+_*l*m-o*f*m-u*l*p+o*d*p,v=g*d*c-h*f*c-g*l*m+a*f*m+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*m-a*_*m-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*f-a*u*f,b=e*S+n*v+i*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=S*w,t[1]=(_*d*s-u*f*s-_*i*m+n*f*m+u*i*p-n*d*p)*w,t[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*p+n*l*p)*w,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*m-n*l*m)*w,t[4]=v*w,t[5]=(h*f*s-g*d*s+g*i*m-e*f*m-h*i*p+e*d*p)*w,t[6]=(g*l*s-a*f*s-g*i*c+e*f*c+a*i*p-e*l*p)*w,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*m+e*l*m)*w,t[8]=M*w,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*w,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*m-e*o*m)*w,t[12]=R*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*f+e*u*f)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*f-e*o*f)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,g=s*u,_=a*h,f=a*u,p=o*u,S=l*c,v=l*h,M=l*u,R=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*R,i[1]=(m+M)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(m-M)*b,i[5]=(1-(d+p))*b,i[6]=(f+S)*b,i[7]=0,i[8]=(g+v)*w,i[9]=(f-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const a=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/s,h=1/a,u=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=gn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===gn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Xs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,m=(n+i)*h;let g,_;if(o===gn)g=(a+s)*u,_=-2*u;else if(o===Xs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new P,qe=new ne,eu=new P(0,0,0),nu=new P(1,1,1),An=new P,us=new P,Ne=new P,mo=new ne,go=new Jn;class Fn{constructor(t=0,e=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return go.setFromEuler(this),this.setFromQuaternion(go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iu=0;const _o=new P,ci=new Jn,un=new ne,ds=new P,ki=new P,su=new P,ru=new Jn,vo=new P(1,0,0),So=new P(0,1,0),xo=new P(0,0,1),au={type:"added"},ou={type:"removed"};class ce extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new P,e=new Fn,n=new Jn,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Wt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(vo,t)}rotateY(t){return this.rotateOnAxis(So,t)}rotateZ(t){return this.rotateOnAxis(xo,t)}translateOnAxis(t,e){return _o.copy(t).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vo,t)}translateY(t){return this.translateOnAxis(So,t)}translateZ(t){return this.translateOnAxis(xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(ki,ds,this.up):un.lookAt(ds,ki,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(un),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ou)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new P(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new P,dn=new P,xr=new P,fn=new P,hi=new P,ui=new P,yo=new P,yr=new P,Mr=new P,Er=new P;let fs=!1;class He{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ke.subVectors(i,e),dn.subVectors(n,e),xr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(dn),l=Ke.dot(xr),c=dn.dot(dn),h=dn.dot(xr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,i,s,a,o,l){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),He.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;hi.subVectors(i,n),ui.subVectors(s,n),yr.subVectors(t,n);const l=hi.dot(yr),c=ui.dot(yr);if(l<=0&&c<=0)return e.copy(n);Mr.subVectors(t,i);const h=hi.dot(Mr),u=ui.dot(Mr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(hi,a);Er.subVectors(t,s);const m=hi.dot(Er),g=ui.dot(Er);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ui,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return yo.subVectors(s,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(yo,o);const p=1/(f+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ar(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=da(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ar(a,s,t+1/3),this.g=Ar(a,s,t),this.b=Ar(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Zt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Se(Me.r*255,0,255))*65536+Math.round(Se(Me.g*255,0,255))*256+Math.round(Se(Me.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,s=Me.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ve){Zt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ps);const n=Gi(Tn.h,ps.h,e),i=Gi(Tn.s,ps.s,e),s=Gi(Tn.l,ps.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Yt;Yt.NAMES=Kl;let lu=0;class ni extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=bi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=$r,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qe extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new P,ms=new ut;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),t}}class $l extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cu=0;const Fe=new ne,Tr=new ce,di=new P,Ue=new an,zi=new an,ge=new P;class Ae extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Zl:$l)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ue.min,zi.min),Ue.expandByPoint(ge),ge.addVectors(Ue.max,zi.max),Ue.expandByPoint(ge)):(Ue.expandByPoint(zi.min),Ue.expandByPoint(zi.max))}Ue.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(di.fromBufferAttribute(t,c),ge.add(di)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new P,h[T]=new P;const u=new P,d=new P,m=new P,g=new ut,_=new ut,f=new ut,p=new P,S=new P;function v(T,U,W){u.fromArray(i,T*3),d.fromArray(i,U*3),m.fromArray(i,W*3),g.fromArray(a,T*2),_.fromArray(a,U*2),f.fromArray(a,W*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);const tt=1/(_.x*f.y-f.x*_.y);isFinite(tt)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(tt),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(tt),c[T].add(p),c[U].add(p),c[W].add(p),h[T].add(S),h[U].add(S),h[W].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,U=M.length;T<U;++T){const W=M[T],tt=W.start,C=W.count;for(let B=tt,V=tt+C;B<V;B+=3)v(n[B+0],n[B+1],n[B+2])}const R=new P,b=new P,w=new P,N=new P;function y(T){w.fromArray(s,T*3),N.copy(w);const U=c[T];R.copy(U),R.sub(w.multiplyScalar(w.dot(U))).normalize(),b.crossVectors(N,U);const tt=b.dot(h[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=tt}for(let T=0,U=M.length;T<U;++T){const W=M[T],tt=W.start,C=W.count;for(let B=tt,V=tt+C;B<V;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new ne,Hn=new fa,gs=new xn,Eo=new P,fi=new P,pi=new P,mi=new P,br=new P,_s=new P,vs=new ut,Ss=new ut,xs=new ut,Ao=new P,To=new P,bo=new P,ys=new P,Ms=new P;class qt extends ce{constructor(t=new Ae,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(br.fromBufferAttribute(u,t),a?_s.addScaledVector(br,h):_s.addScaledVector(br.sub(e),h))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(gs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(gs,Eo)===null||Hn.origin.distanceToSquared(Eo)>(t.far-t.near)**2))&&(Mo.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,R=v;M<R;M+=3){const b=o.getX(M),w=o.getX(M+1),N=o.getX(M+2);i=Es(this,p,t,n,c,h,u,b,w,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=o.getX(f),v=o.getX(f+1),M=o.getX(f+2);i=Es(this,a,t,n,c,h,u,S,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,R=v;M<R;M+=3){const b=M,w=M+1,N=M+2;i=Es(this,p,t,n,c,h,u,b,w,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=f,v=f+1,M=f+2;i=Es(this,a,t,n,c,h,u,S,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function hu(r,t,e,n,i,s,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===On,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:r}}function Es(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,fi),r.getVertexPosition(l,pi),r.getVertexPosition(c,mi);const h=hu(r,t,e,n,fi,pi,mi,ys);if(h){i&&(vs.fromBufferAttribute(i,o),Ss.fromBufferAttribute(i,l),xs.fromBufferAttribute(i,c),h.uv=He.getInterpolation(ys,fi,pi,mi,vs,Ss,xs,new ut)),s&&(vs.fromBufferAttribute(s,o),Ss.fromBufferAttribute(s,l),xs.fromBufferAttribute(s,c),h.uv1=He.getInterpolation(ys,fi,pi,mi,vs,Ss,xs,new ut),h.uv2=h.uv1),a&&(Ao.fromBufferAttribute(a,o),To.fromBufferAttribute(a,l),bo.fromBufferAttribute(a,c),h.normal=He.getInterpolation(ys,fi,pi,mi,Ao,To,bo,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};He.getNormal(fi,pi,mi,u.normal),h.face=u}return h}class en extends Ae{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,f,p,S,v,M,R,b,w,N,y){const T=M/w,U=R/N,W=M/2,tt=R/2,C=b/2,B=w+1,V=N+1;let q=0,Y=0;const X=new P;for(let j=0;j<V;j++){const J=j*U-tt;for(let lt=0;lt<B;lt++){const G=lt*T-W;X[_]=G*S,X[f]=J*v,X[p]=C,c.push(X.x,X.y,X.z),X[_]=0,X[f]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(lt/w),u.push(1-j/N),q+=1}}for(let j=0;j<N;j++)for(let J=0;J<w;J++){const lt=d+J+B*j,G=d+J+B*(j+1),Z=d+(J+1)+B*(j+1),ct=d+(J+1)+B*j;l.push(lt,G,ct),l.push(G,Z,ct),Y+=6}o.addGroup(m,Y,y),m+=Y,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(r){const t={};for(let e=0;e<r.length;e++){const n=Ii(r[e]);for(const i in n)t[i]=n[i]}return t}function uu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function jl(r){return r.getRenderTarget()===null?r.outputColorSpace:Zt.workingColorSpace}const du={clone:Ii,merge:Re};var fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jl extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ge extends Jl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class mu extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(gi,_i,t,e);i.layers=this.layers,this.add(i);const s=new Ge(gi,_i,t,e);s.layers=this.layers,this.add(s);const a=new Ge(gi,_i,t,e);a.layers=this.layers,this.add(a);const o=new Ge(gi,_i,t,e);o.layers=this.layers,this.add(o);const l=new Ge(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new Ge(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ql extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gu extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Zn?ve:We),this.texture=new Ql(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Dn});s.uniforms.tEquirect.value=e;const a=new qt(i,s),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Ve),new mu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const wr=new P,_u=new P,vu=new Wt;class Wn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=wr.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vu.getNormalMatrix(t),i=this.coplanarPoint(wr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new xn,As=new P;class pa{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,s=new Wn,a=new Wn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,f-m,M-p).normalize(),n[1].setComponents(l+s,d+c,f+m,M+p).normalize(),n[2].setComponents(l+a,d+h,f+g,M+S).normalize(),n[3].setComponents(l-a,d-h,f-g,M-S).normalize(),n[4].setComponents(l-o,d-u,f-_,M-v).normalize(),e===gn)n[5].setComponents(l+o,d+u,f+_,M+v).normalize();else if(e===Xs)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(As.x=i.normal.x>0?t.max.x:t.min.x,As.y=i.normal.y>0?t.max.y:t.min.y,As.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tc(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Su(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Js extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const S=p*d-a;for(let v=0;v<c;v++){const M=v*u-s;g.push(M,-S,0),_.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,M=S+c*(p+1),R=S+1+c*(p+1),b=S+1+c*p;m.push(v,M,b),m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.widthSegments,t.heightSegments)}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
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
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
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
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
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
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Du=`#ifdef USE_IRIDESCENCE
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
#endif`,Nu=`#ifdef USE_BUMPMAP
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xu=`vec3 transformedNormal = objectNormal;
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
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`
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
}`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vd=`PhysicalMaterial material;
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
#endif`,Sd=`struct PhysicalMaterial {
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
}`,xd=`
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
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
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
}`,Rf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,kf=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
}`,Yf=`#define TOON
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
}`,qf=`#define TOON
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
}`,Kf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,jf=`uniform vec3 color;
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
}`,Jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:xu,alphahash_pars_fragment:yu,alphamap_fragment:Mu,alphamap_pars_fragment:Eu,alphatest_fragment:Au,alphatest_pars_fragment:Tu,aomap_fragment:bu,aomap_pars_fragment:wu,batching_pars_vertex:Ru,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Cu,bsdfs:Iu,iridescence_fragment:Du,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:zu,color_pars_vertex:Vu,color_vertex:Hu,common:Gu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:Yu,displacementmap_vertex:qu,emissivemap_fragment:Ku,emissivemap_pars_fragment:$u,colorspace_fragment:Zu,colorspace_pars_fragment:ju,envmap_fragment:Ju,envmap_common_pars_fragment:Qu,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:fd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:hd,lights_lambert_pars_fragment:ud,lights_pars_begin:dd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:vd,lights_physical_pars_fragment:Sd,lights_fragment_begin:xd,lights_fragment_maps:yd,lights_fragment_end:Md,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:bd,map_fragment:wd,map_pars_fragment:Rd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Id,morphcolor_vertex:Dd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Od,normal_fragment_begin:Fd,normal_fragment_maps:Bd,normal_pars_fragment:kd,normal_pars_vertex:zd,normal_vertex:Vd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:Yd,opaque_fragment:qd,packing:Kd,premultiplied_alpha_fragment:$d,project_vertex:Zd,dithering_fragment:jd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:vf,worldpos_vertex:Sf,background_vert:xf,background_frag:yf,backgroundCube_vert:Mf,backgroundCube_frag:Ef,cube_vert:Af,cube_frag:Tf,depth_vert:bf,depth_frag:wf,distanceRGBA_vert:Rf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:Cf,linedashed_vert:If,linedashed_frag:Df,meshbasic_vert:Nf,meshbasic_frag:Uf,meshlambert_vert:Of,meshlambert_frag:Ff,meshmatcap_vert:Bf,meshmatcap_frag:kf,meshnormal_vert:zf,meshnormal_frag:Vf,meshphong_vert:Hf,meshphong_frag:Gf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:Yf,meshtoon_frag:qf,points_vert:Kf,points_frag:$f,shadow_vert:Zf,shadow_frag:jf,sprite_vert:Jf,sprite_frag:Qf},ot={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},rn={basic:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Yt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Yt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([ot.lights,ot.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};rn.physical={uniforms:Re([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ts={r:0,b:0,g:0};function tp(r,t,e,n,i,s,a){const o=new Yt(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zs)?(h===void 0&&(h=new qt(new en(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ii(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,(u!==v||d!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new Js(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ii(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(Ts,jl(r)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function ep(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function u(C,B,V,q,Y){let X=!1;if(a){const j=_(q,V,B);c!==j&&(c=j,m(c.object)),X=p(C,q,V,Y),X&&S(C,q,V,Y)}else{const j=B.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=q.id,c.program=V.id,c.wireframe=j,X=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,N(C,B,V,q),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,B,V){const q=V.wireframe===!0;let Y=o[C.id];Y===void 0&&(Y={},o[C.id]=Y);let X=Y[B.id];X===void 0&&(X={},Y[B.id]=X);let j=X[q];return j===void 0&&(j=f(d()),X[q]=j),j}function f(C){const B=[],V=[],q=[];for(let Y=0;Y<i;Y++)B[Y]=0,V[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:q,object:C,attributes:{},index:null}}function p(C,B,V,q){const Y=c.attributes,X=B.attributes;let j=0;const J=V.getAttributes();for(const lt in J)if(J[lt].location>=0){const Z=Y[lt];let ct=X[lt];if(ct===void 0&&(lt==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),lt==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),Z===void 0||Z.attribute!==ct||ct&&Z.data!==ct.data)return!0;j++}return c.attributesNum!==j||c.index!==q}function S(C,B,V,q){const Y={},X=B.attributes;let j=0;const J=V.getAttributes();for(const lt in J)if(J[lt].location>=0){let Z=X[lt];Z===void 0&&(lt==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),lt==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));const ct={};ct.attribute=Z,Z&&Z.data&&(ct.data=Z.data),Y[lt]=ct,j++}c.attributes=Y,c.attributesNum=j,c.index=q}function v(){const C=c.newAttributes;for(let B=0,V=C.length;B<V;B++)C[B]=0}function M(C){R(C,0)}function R(C,B){const V=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;V[C]=1,q[C]===0&&(r.enableVertexAttribArray(C),q[C]=1),Y[C]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),Y[C]=B)}function b(){const C=c.newAttributes,B=c.enabledAttributes;for(let V=0,q=B.length;V<q;V++)B[V]!==C[V]&&(r.disableVertexAttribArray(V),B[V]=0)}function w(C,B,V,q,Y,X,j){j===!0?r.vertexAttribIPointer(C,B,V,Y,X):r.vertexAttribPointer(C,B,V,q,Y,X)}function N(C,B,V,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,X=V.getAttributes(),j=B.defaultAttributeValues;for(const J in X){const lt=X[J];if(lt.location>=0){let G=Y[J];if(G===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){const Z=G.normalized,ct=G.itemSize,dt=e.get(G);if(dt===void 0)continue;const ft=dt.buffer,Et=dt.type,wt=dt.bytesPerElement,xt=n.isWebGL2===!0&&(Et===r.INT||Et===r.UNSIGNED_INT||G.gpuType===Il);if(G.isInterleavedBufferAttribute){const It=G.data,L=It.stride,rt=G.offset;if(It.isInstancedInterleavedBuffer){for(let $=0;$<lt.locationSize;$++)R(lt.location+$,It.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let $=0;$<lt.locationSize;$++)M(lt.location+$);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let $=0;$<lt.locationSize;$++)w(lt.location+$,ct/lt.locationSize,Et,Z,L*wt,(rt+ct/lt.locationSize*$)*wt,xt)}else{if(G.isInstancedBufferAttribute){for(let It=0;It<lt.locationSize;It++)R(lt.location+It,G.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let It=0;It<lt.locationSize;It++)M(lt.location+It);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let It=0;It<lt.locationSize;It++)w(lt.location+It,ct/lt.locationSize,Et,Z,ct*wt,ct/lt.locationSize*It*wt,xt)}}else if(j!==void 0){const Z=j[J];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(lt.location,Z);break;case 3:r.vertexAttrib3fv(lt.location,Z);break;case 4:r.vertexAttrib4fv(lt.location,Z);break;default:r.vertexAttrib1fv(lt.location,Z)}}}}b()}function y(){W();for(const C in o){const B=o[C];for(const V in B){const q=B[V];for(const Y in q)g(q[Y].object),delete q[Y];delete B[V]}delete o[C]}}function T(C){if(o[C.id]===void 0)return;const B=o[C.id];for(const V in B){const q=B[V];for(const Y in q)g(q[Y].object),delete q[Y];delete B[V]}delete o[C.id]}function U(C){for(const B in o){const V=o[B];if(V[C.id]===void 0)continue;const q=V[C.id];for(const Y in q)g(q[Y].object),delete q[Y];delete V[C.id]}}function W(){tt(),h=!0,c!==l&&(c=l,m(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:tt,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function np(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ip(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),R=v&&M,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function sp(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Wn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const S=s?0:n,v=S*4;let M=p.clippingState||null;l.value=M,M=h(g,d,v,m);for(let R=0;R!==v;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,M=m;v!==_;++v,M+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function rp(r){let t=new WeakMap;function e(a,o){return o===jr?a.mapping=Pi:o===Jr&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jr||o===Jr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gu(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ec extends Jl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,wo=[.125,.215,.35,.446,.526,.582],qn=20,Rr=new ec,Ro=new Yt;let Pr=null,Lr=0,Cr=0;const Xn=(1+Math.sqrt(5))/2,vi=1/Xn,Po=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Xn,vi),new P(0,Xn,-vi),new P(vi,0,Xn),new P(-vi,0,Xn),new P(Xn,vi,0),new P(-Xn,vi,0)];class Lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pr,Lr,Cr),t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:ji,format:Je,colorSpace:Sn,depthBuffer:!1},i=Co(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(s)),this._blurMaterial=op(s,t,e)}return i}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,i){const o=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ro),h.toneMapping=vn,h.autoClear=!1;const m=new Qe({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new qt(new en,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Ro),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;bs(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Po[(i-1)%Po.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qn-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):qn;f>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const p=[];let S=0;for(let w=0;w<qn;++w){const N=w/_,y=Math.exp(-N*N/2);p.push(y),w===0?S+=y:w<f&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],R=3*M*(i>v-Ei?i-v+Ei:0),b=4*(this._cubeSize-M);bs(e,R,b,3*M,2*M),l.setRenderTarget(e),l.render(u,Rr)}}function ap(r){const t=[],e=[],n=[];let i=r;const s=r-Ei+1+wo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ei?l=wo[a-r+Ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,S=new Float32Array(_*g*m),v=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,N=b>2?0:-1,y=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];S.set(y,_*g*b),v.set(d,f*g*b);const T=[b,b,b,b,b,b];M.set(T,p*g*b)}const R=new Ae;R.setAttribute("position",new Xe(S,_)),R.setAttribute("uv",new Xe(v,f)),R.setAttribute("faceIndex",new Xe(M,p)),t.push(R),i>Ei&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Co(r,t,e){const n=new jn(r,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function op(r,t,e){const n=new Float32Array(qn),i=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Io(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Do(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function lp(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===jr||l===Jr,h=l===Pi||l===Li;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Lo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Lo(r));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],r.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,M=S.length;v<M;v+=3){const R=S[v+0],b=S[v+1],w=S[v+2];d.push(R,b,b,w,w,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const R=v+0,b=v+1,w=v+2;d.push(R,b,b,w,w,R)}}else return;const f=new(Gl(d)?Zl:$l)(d,1);f.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function up(r,t,e,n){const i=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){r.drawElements(s,g,o,m*l),e.update(g,s,1)}function u(m,g,_){if(_===0)return;let f,p;if(i)f=r,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,o,m*l,_),e.update(g,s,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function dp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fp(r,t){return r[0]-t[0]}function pp(r,t){return Math.abs(t[1])-Math.abs(r[1])}function mp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new _e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let N=0;S===!0&&(N=1),v===!0&&(N=2),M===!0&&(N=3);let y=h.attributes.position.count*N,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const U=new Float32Array(y*T*4*g),W=new Yl(U,y,T,g);W.type=Ln,W.needsUpdate=!0;const tt=N*4;for(let B=0;B<g;B++){const V=R[B],q=b[B],Y=w[B],X=y*T*4*B;for(let j=0;j<V.count;j++){const J=j*tt;S===!0&&(a.fromBufferAttribute(V,j),U[X+J+0]=a.x,U[X+J+1]=a.y,U[X+J+2]=a.z,U[X+J+3]=0),v===!0&&(a.fromBufferAttribute(q,j),U[X+J+4]=a.x,U[X+J+5]=a.y,U[X+J+6]=a.z,U[X+J+7]=0),M===!0&&(a.fromBufferAttribute(Y,j),U[X+J+8]=a.x,U[X+J+9]=a.y,U[X+J+10]=a.z,U[X+J+11]=Y.itemSize===4?a.w:1)}}_={count:g,texture:W,size:new ut(y,T)},s.set(h,_),h.addEventListener("dispose",C)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){const M=g[v];M[0]=v,M[1]=d[v]}g.sort(pp);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(fp);const _=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=o[v],R=M[0],b=M[1];R!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[R]&&h.setAttribute("morphTarget"+v,_[R]),f&&h.getAttribute("morphNormal"+v)!==f[R]&&h.setAttribute("morphNormal"+v,f[R]),i[v]=b,p+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function gp(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class nc extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$n&&(n=Pn),n===void 0&&h===Ci&&(n=Kn),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ic=new Ie,sc=new nc(1,1);sc.compareFunction=Vl;const rc=new Yl,ac=new Qh,oc=new Ql,No=[],Uo=[],Oo=new Float32Array(16),Fo=new Float32Array(9),Bo=new Float32Array(4);function Ni(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=No[i];if(s===void 0&&(s=new Float32Array(i),No[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function de(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qs(r,t){let e=Uo[t];e===void 0&&(e=new Int32Array(t),Uo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _p(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2fv(this.addr,t),fe(e,t)}}function Sp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;r.uniform3fv(this.addr,t),fe(e,t)}}function xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4fv(this.addr,t),fe(e,t)}}function yp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Bo.set(n),r.uniformMatrix2fv(this.addr,!1,Bo),fe(e,n)}}function Mp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Fo.set(n),r.uniformMatrix3fv(this.addr,!1,Fo),fe(e,n)}}function Ep(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Oo.set(n),r.uniformMatrix4fv(this.addr,!1,Oo),fe(e,n)}}function Ap(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Tp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2iv(this.addr,t),fe(e,t)}}function bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3iv(this.addr,t),fe(e,t)}}function wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4iv(this.addr,t),fe(e,t)}}function Rp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2uiv(this.addr,t),fe(e,t)}}function Lp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3uiv(this.addr,t),fe(e,t)}}function Cp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4uiv(this.addr,t),fe(e,t)}}function Ip(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?sc:ic;e.setTexture2D(t||s,i)}function Dp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ac,i)}function Np(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||oc,i)}function Up(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rc,i)}function Op(r){switch(r){case 5126:return _p;case 35664:return vp;case 35665:return Sp;case 35666:return xp;case 35674:return yp;case 35675:return Mp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return wp;case 5125:return Rp;case 36294:return Pp;case 36295:return Lp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Up}}function Fp(r,t){r.uniform1fv(this.addr,t)}function Bp(r,t){const e=Ni(t,this.size,2);r.uniform2fv(this.addr,e)}function kp(r,t){const e=Ni(t,this.size,3);r.uniform3fv(this.addr,e)}function zp(r,t){const e=Ni(t,this.size,4);r.uniform4fv(this.addr,e)}function Vp(r,t){const e=Ni(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Hp(r,t){const e=Ni(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gp(r,t){const e=Ni(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Wp(r,t){r.uniform1iv(this.addr,t)}function Xp(r,t){r.uniform2iv(this.addr,t)}function Yp(r,t){r.uniform3iv(this.addr,t)}function qp(r,t){r.uniform4iv(this.addr,t)}function Kp(r,t){r.uniform1uiv(this.addr,t)}function $p(r,t){r.uniform2uiv(this.addr,t)}function Zp(r,t){r.uniform3uiv(this.addr,t)}function jp(r,t){r.uniform4uiv(this.addr,t)}function Jp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ic,s[a])}function Qp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ac,s[a])}function tm(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||oc,s[a])}function em(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rc,s[a])}function nm(r){switch(r){case 5126:return Fp;case 35664:return Bp;case 35665:return kp;case 35666:return zp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return qp;case 5125:return Kp;case 36294:return $p;case 36295:return Zp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Op(e.type)}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function ko(r,t){r.seq.push(t),r.map[t.id]=t}function am(r,t,e){const n=r.name,i=n.length;for(Ir.lastIndex=0;;){const s=Ir.exec(n),a=Ir.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ko(e,c===void 0?new im(o,r,t):new sm(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new rm(o),ko(e,u)),e=u}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);am(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function zo(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const om=37297;let lm=0;function cm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hm(r){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(r);let n;switch(t===e?n="":t===Ws&&e===Gs?n="LinearDisplayP3ToLinearSRGB":t===Gs&&e===Ws&&(n="LinearSRGBToLinearDisplayP3"),r){case Sn:case js:return[n,"LinearTransferOETF"];case ve:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Vo(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+cm(r.getShaderSource(t),a)}else return i}function um(r,t){const e=hm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dm(r,t){let e;switch(t){case hh:e="Linear";break;case uh:e="Reinhard";break;case dh:e="OptimizedCineon";break;case Zr:e="ACESFilmic";break;case ph:e="AgX";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function pm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function mm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ai(r){return r!==""}function Ho(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Go(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(r){return r.replace(_m,Sm)}const vm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(r,t){let e=zt[t];if(e===void 0){const n=vm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return na(e)}const xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(r){return r.replace(xm,ym)}function ym(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function bm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wm(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mm(e),c=Em(e),h=Am(e),u=Tm(e),d=bm(e),m=e.isWebGL2?"":fm(e),g=pm(e),_=mm(s),f=i.createProgram();let p,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),S.length>0&&(S+=`
`)):(p=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),S=[m,Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?zt.tonemapping_pars_fragment:"",e.toneMapping!==vn?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,um("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=na(a),a=Ho(a,e),a=Go(a,e),o=na(o),o=Ho(o,e),o=Go(o,e),a=Wo(a),o=Wo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=v+p+a,R=v+S+o,b=zo(i,i.VERTEX_SHADER,M),w=zo(i,i.FRAGMENT_SHADER,R);i.attachShader(f,b),i.attachShader(f,w),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function N(W){if(r.debug.checkShaderErrors){const tt=i.getProgramInfoLog(f).trim(),C=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(w).trim();let V=!0,q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,w);else{const Y=Vo(i,b,"vertex"),X=Vo(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+Y+`
`+X)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(C===""||B==="")&&(q=!1);q&&(W.diagnostics={runnable:V,programLog:tt,vertexShader:{log:C,prefix:p},fragmentShader:{log:B,prefix:S}})}i.deleteShader(b),i.deleteShader(w),y=new ks(i,f),T=gm(i,f)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(f,om)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}let Rm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lm(t),e.set(t,n)),n}}class Lm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Cm(r,t,e,n,i,s,a){const o=new ql,l=new Pm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function f(y,T,U,W,tt){const C=W.fog,B=tt.geometry,V=y.isMeshStandardMaterial?W.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),Y=q&&q.mapping===Zs?q.image.height:null,X=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,J=j!==void 0?j.length:0;let lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let G,Z,ct,dt;if(X){const Te=rn[X];G=Te.vertexShader,Z=Te.fragmentShader}else G=y.vertexShader,Z=y.fragmentShader,l.update(y),ct=l.getVertexShaderID(y),dt=l.getFragmentShaderID(y);const ft=r.getRenderTarget(),Et=tt.isInstancedMesh===!0,wt=tt.isBatchedMesh===!0,xt=!!y.map,It=!!y.matcap,L=!!q,rt=!!y.aoMap,$=!!y.lightMap,st=!!y.bumpMap,K=!!y.normalMap,Tt=!!y.displacementMap,gt=!!y.emissiveMap,E=!!y.metalnessMap,x=!!y.roughnessMap,F=y.anisotropy>0,it=y.clearcoat>0,et=y.iridescence>0,Q=y.sheen>0,yt=y.transmission>0,ht=F&&!!y.anisotropyMap,vt=it&&!!y.clearcoatMap,Rt=it&&!!y.clearcoatNormalMap,Ft=it&&!!y.clearcoatRoughnessMap,nt=et&&!!y.iridescenceMap,Kt=et&&!!y.iridescenceThicknessMap,Xt=Q&&!!y.sheenColorMap,Ut=Q&&!!y.sheenRoughnessMap,bt=!!y.specularMap,St=!!y.specularColorMap,kt=!!y.specularIntensityMap,$t=yt&&!!y.transmissionMap,ae=yt&&!!y.thicknessMap,Ht=!!y.gradientMap,at=!!y.alphaMap,I=y.alphaTest>0,pt=!!y.alphaHash,mt=!!y.extensions,Dt=!!B.attributes.uv1,Pt=!!B.attributes.uv2,jt=!!B.attributes.uv3;let Jt=vn;return y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Jt=r.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:Z,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:wt,instancing:Et,instancingColor:Et&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Sn,map:xt,matcap:It,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:$,bumpMap:st,normalMap:K,displacementMap:d&&Tt,emissiveMap:gt,normalMapObjectSpace:K&&y.normalMapType===bh,normalMapTangentSpace:K&&y.normalMapType===zl,metalnessMap:E,roughnessMap:x,anisotropy:F,anisotropyMap:ht,clearcoat:it,clearcoatMap:vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ft,iridescence:et,iridescenceMap:nt,iridescenceThicknessMap:Kt,sheen:Q,sheenColorMap:Xt,sheenRoughnessMap:Ut,specularMap:bt,specularColorMap:St,specularIntensityMap:kt,transmission:yt,transmissionMap:$t,thicknessMap:ae,gradientMap:Ht,opaque:y.transparent===!1&&y.blending===bi,alphaMap:at,alphaTest:I,alphaHash:pt,combine:y.combine,mapUv:xt&&_(y.map.channel),aoMapUv:rt&&_(y.aoMap.channel),lightMapUv:$&&_(y.lightMap.channel),bumpMapUv:st&&_(y.bumpMap.channel),normalMapUv:K&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:gt&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(y.sheenRoughnessMap.channel),specularMapUv:bt&&_(y.specularMap.channel),specularColorMapUv:St&&_(y.specularColorMap.channel),specularIntensityMapUv:kt&&_(y.specularIntensityMap.channel),transmissionMapUv:$t&&_(y.transmissionMap.channel),thicknessMapUv:ae&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(K||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:jt,pointsUvs:tt.isPoints===!0&&!!B.attributes.uv&&(xt||at),fog:!!C,useFog:y.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(S(T,y),v(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const T=g[y.type];let U;if(T){const W=rn[T];U=du.clone(W.uniforms)}else U=y.uniforms;return U}function R(y,T){let U;for(let W=0,tt=c.length;W<tt;W++){const C=c[W];if(C.cacheKey===T){U=C,++U.usedTimes;break}}return U===void 0&&(U=new wm(r,T,y,s),c.push(U)),U}function b(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:N}}function Im(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Dm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yo(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qo(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,g,_,f){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function o(u,d,m,g,_,f){const p=a(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,d,m,g,_,f){const p=a(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Dm),n.length>1&&n.sort(d||Yo),i.length>1&&i.sort(d||Yo)}function h(){for(let u=t,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Nm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new qo,r.set(n,[a])):i>=s.length?(a=new qo,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Um(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Yt};break;case"SpotLight":e={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Om(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Fm=0;function Bm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function km(r,t){const e=new Um,n=Om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,a=new ne,o=new ne;function l(h,u){let d=0,m=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,f=0,p=0,S=0,v=0,M=0,R=0,b=0,w=0,N=0,y=0;h.sort(Bm);const T=u===!0?Math.PI:1;for(let W=0,tt=h.length;W<tt;W++){const C=h[W],B=C.color,V=C.intensity,q=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=B.r*V*T,m+=B.g*V*T,g+=B.b*V*T;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],V);y++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const j=C.shadow,J=n.get(C);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=X,_++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(B).multiplyScalar(V*T),X.distance=q,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[p]=X;const j=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,j.updateMatrices(C),C.castShadow&&N++),i.spotLightMatrix[p]=j.matrix,C.castShadow){const J=n.get(C);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=Y,b++}p++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=X,S++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*T),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,J=n.get(C);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=C.shadow.matrix,R++}i.point[f]=X,f++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(V*T),X.groundColor.copy(C.groundColor).multiplyScalar(V*T),i.hemi[v]=X,v++}}S>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==_||U.pointLength!==f||U.spotLength!==p||U.rectAreaLength!==S||U.hemiLength!==v||U.numDirectionalShadows!==M||U.numPointShadows!==R||U.numSpotShadows!==b||U.numSpotMaps!==w||U.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=y,U.directionalLength=_,U.pointLength=f,U.spotLength=p,U.rectAreaLength=S,U.hemiLength=v,U.numDirectionalShadows=M,U.numPointShadows=R,U.numSpotShadows=b,U.numSpotMaps=w,U.numLightProbes=y,i.version=Fm++)}function c(h,u){let d=0,m=0,g=0,_=0,f=0;const p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const M=h[S];if(M.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(M.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const R=i.hemi[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Ko(r,t){const e=new km(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zm(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Ko(r,t),e.set(s,[l])):a>=o.length?(l=new Ko(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Vm extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hm extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(r,t,e){let n=new pa;const i=new ut,s=new ut,a=new _e,o=new Vm({depthPacking:Th}),l=new Hm,c={},h=e.maxTextureSize,u={[On]:Ce,[Ce]:On,[Ze]:Ze},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let p=this.type;this.render=function(b,w,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Dn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const tt=p!==mn&&this.type===mn,C=p===mn&&this.type!==mn;for(let B=0,V=b.length;B<V;B++){const q=b[B],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const X=Y.getFrameExtents();if(i.multiply(X),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,Y.mapSize.y=s.y)),Y.map===null||tt===!0||C===!0){const J=this.type!==mn?{minFilter:Ee,magFilter:Ee}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jn(i.x,i.y,J),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const j=Y.getViewportCount();for(let J=0;J<j;J++){const lt=Y.getViewport(J);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),W.viewport(a),Y.updateMatrices(q,J),n=Y.getFrustum(),M(w,N,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===mn&&S(Y,N),Y.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(y,T,U)};function S(b,w){const N=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,N,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,N,m,_,null)}function v(b,w,N,y){let T=null;const U=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)T=U;else if(T=N.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=T.uuid,tt=w.uuid;let C=c[W];C===void 0&&(C={},c[W]=C);let B=C[tt];B===void 0&&(B=T.clone(),C[tt]=B,w.addEventListener("dispose",R)),T=B}if(T.visible=w.visible,T.wireframe=w.wireframe,y===mn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=r.properties.get(T);W.light=N}return T}function M(b,w,N,y,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const tt=t.update(b),C=b.material;if(Array.isArray(C)){const B=tt.groups;for(let V=0,q=B.length;V<q;V++){const Y=B[V],X=C[Y.materialIndex];if(X&&X.visible){const j=v(b,X,y,T);b.onBeforeShadow(r,b,w,N,tt,j,Y),r.renderBufferDirect(N,null,tt,j,b,Y),b.onAfterShadow(r,b,w,N,tt,j,Y)}}}else if(C.visible){const B=v(b,C,y,T);b.onBeforeShadow(r,b,w,N,tt,B,null),r.renderBufferDirect(N,null,tt,B,b,null),b.onAfterShadow(r,b,w,N,tt,B,null)}}const W=b.children;for(let tt=0,C=W.length;tt<C;tt++)M(W[tt],w,N,y,T)}function R(b){b.target.removeEventListener("dispose",R);for(const N in c){const y=c[N],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Ym(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const pt=new _e;let mt=null;const Dt=new _e(0,0,0,0);return{setMask:function(Pt){mt!==Pt&&!I&&(r.colorMask(Pt,Pt,Pt,Pt),mt=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,jt,Jt,pe,Te){Te===!0&&(Pt*=pe,jt*=pe,Jt*=pe),pt.set(Pt,jt,Jt,pe),Dt.equals(pt)===!1&&(r.clearColor(Pt,jt,Jt,pe),Dt.copy(pt))},reset:function(){I=!1,mt=null,Dt.set(-1,0,0,0)}}}function s(){let I=!1,pt=null,mt=null,Dt=null;return{setTest:function(Pt){Pt?wt(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(Pt){pt!==Pt&&!I&&(r.depthMask(Pt),pt=Pt)},setFunc:function(Pt){if(mt!==Pt){switch(Pt){case eh:r.depthFunc(r.NEVER);break;case nh:r.depthFunc(r.ALWAYS);break;case ih:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case sh:r.depthFunc(r.EQUAL);break;case rh:r.depthFunc(r.GEQUAL);break;case ah:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Dt!==Pt&&(r.clearDepth(Pt),Dt=Pt)},reset:function(){I=!1,pt=null,mt=null,Dt=null}}}function a(){let I=!1,pt=null,mt=null,Dt=null,Pt=null,jt=null,Jt=null,pe=null,Te=null;return{setTest:function(Qt){I||(Qt?wt(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(Qt){pt!==Qt&&!I&&(r.stencilMask(Qt),pt=Qt)},setFunc:function(Qt,be,nn){(mt!==Qt||Dt!==be||Pt!==nn)&&(r.stencilFunc(Qt,be,nn),mt=Qt,Dt=be,Pt=nn)},setOp:function(Qt,be,nn){(jt!==Qt||Jt!==be||pe!==nn)&&(r.stencilOp(Qt,be,nn),jt=Qt,Jt=be,pe=nn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Te!==Qt&&(r.clearStencil(Qt),Te=Qt)},reset:function(){I=!1,pt=null,mt=null,Dt=null,Pt=null,jt=null,Jt=null,pe=null,Te=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,v=null,M=null,R=null,b=null,w=null,N=null,y=new Yt(0,0,0),T=0,U=!1,W=null,tt=null,C=null,B=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=X>=2);let J=null,lt={};const G=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ct=new _e().fromArray(G),dt=new _e().fromArray(Z);function ft(I,pt,mt,Dt){const Pt=new Uint8Array(4),jt=r.createTexture();r.bindTexture(I,jt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<mt;Jt++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(pt,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(pt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return jt}const Et={};Et[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(r.DEPTH_TEST),l.setFunc(Vs),gt(!1),E(Ra),wt(r.CULL_FACE),K(Dn);function wt(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function xt(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function It(I,pt){return m[I]!==pt?(r.bindFramebuffer(I,pt),m[I]=pt,n&&(I===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=pt),I===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=pt)),!0):!1}function L(I,pt){let mt=_,Dt=!1;if(I)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),I.isWebGLMultipleRenderTargets){const Pt=I.texture;if(mt.length!==Pt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let jt=0,Jt=Pt.length;jt<Jt;jt++)mt[jt]=r.COLOR_ATTACHMENT0+jt;mt.length=Pt.length,Dt=!0}}else mt[0]!==r.COLOR_ATTACHMENT0&&(mt[0]=r.COLOR_ATTACHMENT0,Dt=!0);else mt[0]!==r.BACK&&(mt[0]=r.BACK,Dt=!0);Dt&&(e.isWebGL2?r.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function rt(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const $={[Yn]:r.FUNC_ADD,[zc]:r.FUNC_SUBTRACT,[Vc]:r.FUNC_REVERSE_SUBTRACT};if(n)$[Ia]=r.MIN,$[Da]=r.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&($[Ia]=I.MIN_EXT,$[Da]=I.MAX_EXT)}const st={[Hc]:r.ZERO,[Gc]:r.ONE,[Wc]:r.SRC_COLOR,[Kr]:r.SRC_ALPHA,[Zc]:r.SRC_ALPHA_SATURATE,[Kc]:r.DST_COLOR,[Yc]:r.DST_ALPHA,[Xc]:r.ONE_MINUS_SRC_COLOR,[$r]:r.ONE_MINUS_SRC_ALPHA,[$c]:r.ONE_MINUS_DST_COLOR,[qc]:r.ONE_MINUS_DST_ALPHA,[jc]:r.CONSTANT_COLOR,[Jc]:r.ONE_MINUS_CONSTANT_COLOR,[Qc]:r.CONSTANT_ALPHA,[th]:r.ONE_MINUS_CONSTANT_ALPHA};function K(I,pt,mt,Dt,Pt,jt,Jt,pe,Te,Qt){if(I===Dn){p===!0&&(xt(r.BLEND),p=!1);return}if(p===!1&&(wt(r.BLEND),p=!0),I!==kc){if(I!==S||Qt!==U){if((v!==Yn||b!==Yn)&&(r.blendEquation(r.FUNC_ADD),v=Yn,b=Yn),Qt)switch(I){case bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pa:r.blendFunc(r.ONE,r.ONE);break;case La:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case La:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,R=null,w=null,N=null,y.set(0,0,0),T=0,S=I,U=Qt}return}Pt=Pt||pt,jt=jt||mt,Jt=Jt||Dt,(pt!==v||Pt!==b)&&(r.blendEquationSeparate($[pt],$[Pt]),v=pt,b=Pt),(mt!==M||Dt!==R||jt!==w||Jt!==N)&&(r.blendFuncSeparate(st[mt],st[Dt],st[jt],st[Jt]),M=mt,R=Dt,w=jt,N=Jt),(pe.equals(y)===!1||Te!==T)&&(r.blendColor(pe.r,pe.g,pe.b,Te),y.copy(pe),T=Te),S=I,U=!1}function Tt(I,pt){I.side===Ze?xt(r.CULL_FACE):wt(r.CULL_FACE);let mt=I.side===Ce;pt&&(mt=!mt),gt(mt),I.blending===bi&&I.transparent===!1?K(Dn):K(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Dt=I.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?wt(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){W!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),W=I)}function E(I){I!==Uc?(wt(r.CULL_FACE),I!==tt&&(I===Ra?r.cullFace(r.BACK):I===Oc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),tt=I}function x(I){I!==C&&(Y&&r.lineWidth(I),C=I)}function F(I,pt,mt){I?(wt(r.POLYGON_OFFSET_FILL),(B!==pt||V!==mt)&&(r.polygonOffset(pt,mt),B=pt,V=mt)):xt(r.POLYGON_OFFSET_FILL)}function it(I){I?wt(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function et(I){I===void 0&&(I=r.TEXTURE0+q-1),J!==I&&(r.activeTexture(I),J=I)}function Q(I,pt,mt){mt===void 0&&(J===null?mt=r.TEXTURE0+q-1:mt=J);let Dt=lt[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},lt[mt]=Dt),(Dt.type!==I||Dt.texture!==pt)&&(J!==mt&&(r.activeTexture(mt),J=mt),r.bindTexture(I,pt||Et[I]),Dt.type=I,Dt.texture=pt)}function yt(){const I=lt[J];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){ct.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function $t(I){dt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function ae(I,pt){let mt=u.get(pt);mt===void 0&&(mt=new WeakMap,u.set(pt,mt));let Dt=mt.get(I);Dt===void 0&&(Dt=r.getUniformBlockIndex(pt,I.name),mt.set(I,Dt))}function Ht(I,pt){const Dt=u.get(pt).get(I);h.get(pt)!==Dt&&(r.uniformBlockBinding(pt,Dt,I.__bindingPointIndex),h.set(pt,Dt))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},J=null,lt={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,v=null,M=null,R=null,b=null,w=null,N=null,y=new Yt(0,0,0),T=0,U=!1,W=null,tt=null,C=null,B=null,V=null,ct.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:wt,disable:xt,bindFramebuffer:It,drawBuffers:L,useProgram:rt,setBlending:K,setMaterial:Tt,setFlipSided:gt,setCullFace:E,setLineWidth:x,setPolygonOffset:F,setScissorTest:it,activeTexture:et,bindTexture:Q,unbindTexture:yt,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:bt,texImage3D:St,updateUBOMapping:ae,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:Ut,texSubImage2D:Rt,texSubImage3D:Ft,compressedTexSubImage2D:nt,compressedTexSubImage3D:Kt,scissor:kt,viewport:$t,reset:at}}function qm(r,t,e,n,i,s,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):qs("canvas")}function _(E,x,F,it){let et=1;if((E.width>it||E.height>it)&&(et=it/Math.max(E.width,E.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=x?Ys:Math.floor,yt=Q(et*E.width),ht=Q(et*E.height);u===void 0&&(u=g(yt,ht));const vt=F?g(yt,ht):u;return vt.width=yt,vt.height=ht,vt.getContext("2d").drawImage(E,0,0,yt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+yt+"x"+ht+")."),vt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return ea(E.width)&&ea(E.height)}function p(E){return o?!1:E.wrapS!==je||E.wrapT!==je||E.minFilter!==Ee&&E.minFilter!==Ve}function S(E,x){return E.generateMipmaps&&x&&E.minFilter!==Ee&&E.minFilter!==Ve}function v(E){r.generateMipmap(E)}function M(E,x,F,it,et=!1){if(o===!1)return x;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=x;if(x===r.RED&&(F===r.FLOAT&&(Q=r.R32F),F===r.HALF_FLOAT&&(Q=r.R16F),F===r.UNSIGNED_BYTE&&(Q=r.R8)),x===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Q=r.R8UI),F===r.UNSIGNED_SHORT&&(Q=r.R16UI),F===r.UNSIGNED_INT&&(Q=r.R32UI),F===r.BYTE&&(Q=r.R8I),F===r.SHORT&&(Q=r.R16I),F===r.INT&&(Q=r.R32I)),x===r.RG&&(F===r.FLOAT&&(Q=r.RG32F),F===r.HALF_FLOAT&&(Q=r.RG16F),F===r.UNSIGNED_BYTE&&(Q=r.RG8)),x===r.RGBA){const yt=et?Hs:Zt.getTransfer(it);F===r.FLOAT&&(Q=r.RGBA32F),F===r.HALF_FLOAT&&(Q=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Q=yt===ee?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(E,x,F){return S(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Ee&&E.minFilter!==Ve?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function b(E){return E===Ee||E===Na||E===Bs?r.NEAREST:r.LINEAR}function w(E){const x=E.target;x.removeEventListener("dispose",w),y(x),x.isVideoTexture&&h.delete(x)}function N(E){const x=E.target;x.removeEventListener("dispose",N),U(x)}function y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const F=E.source,it=d.get(F);if(it){const et=it[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(E),Object.keys(it).length===0&&d.delete(F)}n.remove(E)}function T(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const F=E.source,it=d.get(F);delete it[x.__cacheKey],a.memory.textures--}function U(E){const x=E.texture,F=n.get(E),it=n.get(x);if(it.__webglTexture!==void 0&&(r.deleteTexture(it.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(F.__webglFramebuffer[et]))for(let Q=0;Q<F.__webglFramebuffer[et].length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[et][Q]);else r.deleteFramebuffer(F.__webglFramebuffer[et]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[et])}else{if(Array.isArray(F.__webglFramebuffer))for(let et=0;et<F.__webglFramebuffer.length;et++)r.deleteFramebuffer(F.__webglFramebuffer[et]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let et=0;et<F.__webglColorRenderbuffer.length;et++)F.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[et]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,Q=x.length;et<Q;et++){const yt=n.get(x[et]);yt.__webglTexture&&(r.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(x[et])}n.remove(x),n.remove(E)}let W=0;function tt(){W=0}function C(){const E=W;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),W+=1,E}function B(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){const F=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const it=E.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(F,E,x);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+x)}function q(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ct(F,E,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+x)}function Y(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ct(F,E,x);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+x)}function X(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){dt(F,E,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+x)}const j={[$i]:r.REPEAT,[je]:r.CLAMP_TO_EDGE,[Qr]:r.MIRRORED_REPEAT},J={[Ee]:r.NEAREST,[Na]:r.NEAREST_MIPMAP_NEAREST,[Bs]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[mh]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},lt={[wh]:r.NEVER,[Dh]:r.ALWAYS,[Rh]:r.LESS,[Vl]:r.LEQUAL,[Ph]:r.EQUAL,[Ih]:r.GEQUAL,[Lh]:r.GREATER,[Ch]:r.NOTEQUAL};function G(E,x,F){if(F?(r.texParameteri(E,r.TEXTURE_WRAP_S,j[x.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,j[x.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,j[x.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,J[x.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,J[x.minFilter])):(r.texParameteri(E,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(E,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(x.wrapS!==je||x.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,r.TEXTURE_MAG_FILTER,b(x.magFilter)),r.texParameteri(E,r.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==Ee&&x.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ee||x.minFilter!==Bs&&x.minFilter!==Zi||x.type===Ln&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===ji&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(E,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));const it=x.source;let et=d.get(it);et===void 0&&(et={},d.set(it,et));const Q=B(x);if(Q!==E.__cacheKey){et[Q]===void 0&&(et[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[Q].usedTimes++;const yt=et[E.__cacheKey];yt!==void 0&&(et[E.__cacheKey].usedTimes--,yt.usedTimes===0&&T(x)),E.__cacheKey=Q,E.__webglTexture=et[Q].texture}return F}function ct(E,x,F){let it=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=r.TEXTURE_3D);const et=Z(E,x),Q=x.source;e.bindTexture(it,E.__webglTexture,r.TEXTURE0+F);const yt=n.get(Q);if(Q.version!==yt.__version||et===!0){e.activeTexture(r.TEXTURE0+F);const ht=Zt.getPrimaries(Zt.workingColorSpace),vt=x.colorSpace===We?null:Zt.getPrimaries(x.colorSpace),Rt=x.colorSpace===We||ht===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ft=p(x)&&f(x.image)===!1;let nt=_(x.image,Ft,!1,i.maxTextureSize);nt=gt(x,nt);const Kt=f(nt)||o,Xt=s.convert(x.format,x.colorSpace);let Ut=s.convert(x.type),bt=M(x.internalFormat,Xt,Ut,x.colorSpace,x.isVideoTexture);G(it,x,Kt);let St;const kt=x.mipmaps,$t=o&&x.isVideoTexture!==!0&&bt!==Bl,ae=yt.__version===void 0||et===!0,Ht=R(x,nt,Kt);if(x.isDepthTexture)bt=r.DEPTH_COMPONENT,o?x.type===Ln?bt=r.DEPTH_COMPONENT32F:x.type===Pn?bt=r.DEPTH_COMPONENT24:x.type===Kn?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:x.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===$n&&bt===r.DEPTH_COMPONENT&&x.type!==ha&&x.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Pn,Ut=s.convert(x.type)),x.format===Ci&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,x.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Kn,Ut=s.convert(x.type))),ae&&($t?e.texStorage2D(r.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,Xt,Ut,null));else if(x.isDataTexture)if(kt.length>0&&Kt){$t&&ae&&e.texStorage2D(r.TEXTURE_2D,Ht,bt,kt[0].width,kt[0].height);for(let at=0,I=kt.length;at<I;at++)St=kt[at],$t?e.texSubImage2D(r.TEXTURE_2D,at,0,0,St.width,St.height,Xt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,at,bt,St.width,St.height,0,Xt,Ut,St.data);x.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(r.TEXTURE_2D,Ht,bt,nt.width,nt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,Xt,Ut,nt.data)):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,Xt,Ut,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,bt,kt[0].width,kt[0].height,nt.depth);for(let at=0,I=kt.length;at<I;at++)St=kt[at],x.format!==Je?Xt!==null?$t?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,nt.depth,Xt,St.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,bt,St.width,St.height,nt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,nt.depth,Xt,Ut,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,bt,St.width,St.height,nt.depth,0,Xt,Ut,St.data)}else{$t&&ae&&e.texStorage2D(r.TEXTURE_2D,Ht,bt,kt[0].width,kt[0].height);for(let at=0,I=kt.length;at<I;at++)St=kt[at],x.format!==Je?Xt!==null?$t?e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,St.width,St.height,Xt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,at,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(r.TEXTURE_2D,at,0,0,St.width,St.height,Xt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,at,bt,St.width,St.height,0,Xt,Ut,St.data)}else if(x.isDataArrayTexture)$t?(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,bt,nt.width,nt.height,nt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Xt,Ut,nt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,Xt,Ut,nt.data);else if(x.isData3DTexture)$t?(ae&&e.texStorage3D(r.TEXTURE_3D,Ht,bt,nt.width,nt.height,nt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Xt,Ut,nt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,Xt,Ut,nt.data);else if(x.isFramebufferTexture){if(ae)if($t)e.texStorage2D(r.TEXTURE_2D,Ht,bt,nt.width,nt.height);else{let at=nt.width,I=nt.height;for(let pt=0;pt<Ht;pt++)e.texImage2D(r.TEXTURE_2D,pt,bt,at,I,0,Xt,Ut,null),at>>=1,I>>=1}}else if(kt.length>0&&Kt){$t&&ae&&e.texStorage2D(r.TEXTURE_2D,Ht,bt,kt[0].width,kt[0].height);for(let at=0,I=kt.length;at<I;at++)St=kt[at],$t?e.texSubImage2D(r.TEXTURE_2D,at,0,0,Xt,Ut,St):e.texImage2D(r.TEXTURE_2D,at,bt,Xt,Ut,St);x.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(r.TEXTURE_2D,Ht,bt,nt.width,nt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Xt,Ut,nt)):e.texImage2D(r.TEXTURE_2D,0,bt,Xt,Ut,nt);S(x,Kt)&&v(it),yt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function dt(E,x,F){if(x.image.length!==6)return;const it=Z(E,x),et=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+F);const Q=n.get(et);if(et.version!==Q.__version||it===!0){e.activeTexture(r.TEXTURE0+F);const yt=Zt.getPrimaries(Zt.workingColorSpace),ht=x.colorSpace===We?null:Zt.getPrimaries(x.colorSpace),vt=x.colorSpace===We||yt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,nt=[];for(let at=0;at<6;at++)!Rt&&!Ft?nt[at]=_(x.image[at],!1,!0,i.maxCubemapSize):nt[at]=Ft?x.image[at].image:x.image[at],nt[at]=gt(x,nt[at]);const Kt=nt[0],Xt=f(Kt)||o,Ut=s.convert(x.format,x.colorSpace),bt=s.convert(x.type),St=M(x.internalFormat,Ut,bt,x.colorSpace),kt=o&&x.isVideoTexture!==!0,$t=Q.__version===void 0||it===!0;let ae=R(x,Kt,Xt);G(r.TEXTURE_CUBE_MAP,x,Xt);let Ht;if(Rt){kt&&$t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,St,Kt.width,Kt.height);for(let at=0;at<6;at++){Ht=nt[at].mipmaps;for(let I=0;I<Ht.length;I++){const pt=Ht[I];x.format!==Je?Ut!==null?kt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,St,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,pt.width,pt.height,Ut,bt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,St,pt.width,pt.height,0,Ut,bt,pt.data)}}}else{Ht=x.mipmaps,kt&&$t&&(Ht.length>0&&ae++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,St,nt[0].width,nt[0].height));for(let at=0;at<6;at++)if(Ft){kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,nt[at].width,nt[at].height,Ut,bt,nt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,St,nt[at].width,nt[at].height,0,Ut,bt,nt[at].data);for(let I=0;I<Ht.length;I++){const mt=Ht[I].image[at].image;kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,mt.width,mt.height,Ut,bt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,St,mt.width,mt.height,0,Ut,bt,mt.data)}}else{kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,bt,nt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,St,Ut,bt,nt[at]);for(let I=0;I<Ht.length;I++){const pt=Ht[I];kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,Ut,bt,pt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,St,Ut,bt,pt.image[at])}}}S(x,Xt)&&v(r.TEXTURE_CUBE_MAP),Q.__version=et.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ft(E,x,F,it,et,Q){const yt=s.convert(F.format,F.colorSpace),ht=s.convert(F.type),vt=M(F.internalFormat,yt,ht,F.colorSpace);if(!n.get(x).__hasExternalTextures){const Ft=Math.max(1,x.width>>Q),nt=Math.max(1,x.height>>Q);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,vt,Ft,nt,x.depth,0,yt,ht,null):e.texImage2D(et,Q,vt,Ft,nt,0,yt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,E),K(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,et,n.get(F).__webglTexture,0,st(x)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,et,n.get(F).__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(E,x,F){if(r.bindRenderbuffer(r.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let it=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||K(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Ln?it=r.DEPTH_COMPONENT32F:et.type===Pn&&(it=r.DEPTH_COMPONENT24));const Q=st(x);K(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,it,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,it,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,it,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const it=st(x);F&&K(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,x.width,x.height):K(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{const it=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<it.length;et++){const Q=it[et],yt=s.convert(Q.format,Q.colorSpace),ht=s.convert(Q.type),vt=M(Q.internalFormat,yt,ht,Q.colorSpace),Rt=st(x);F&&K(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,vt,x.width,x.height):K(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,vt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,vt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const it=n.get(x.depthTexture).__webglTexture,et=st(x);if(x.depthTexture.format===$n)K(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(x.depthTexture.format===Ci)K(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function xt(E){const x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]=r.createRenderbuffer(),Et(x.__webglDepthbuffer[it],E,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Et(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(E,x,F){const it=n.get(E);x!==void 0&&ft(it.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&xt(E)}function L(E){const x=E.texture,F=n.get(E),it=n.get(x);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=x.version,a.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,yt=f(E)||o;if(et){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let vt=0;vt<x.mipmaps.length;vt++)F.__webglFramebuffer[ht][vt]=r.createFramebuffer()}else F.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)F.__webglFramebuffer[ht]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){const ht=E.texture;for(let vt=0,Rt=ht.length;vt<Rt;vt++){const Ft=n.get(ht[vt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&K(E)===!1){const ht=Q?x:[x];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Rt=ht[vt];F.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[vt]);const Ft=s.convert(Rt.format,Rt.colorSpace),nt=s.convert(Rt.type),Kt=M(Rt.internalFormat,Ft,nt,Rt.colorSpace,E.isXRRenderTarget===!0),Xt=st(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Kt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,F.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),G(r.TEXTURE_CUBE_MAP,x,yt);for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ft(F.__webglFramebuffer[ht][vt],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else ft(F.__webglFramebuffer[ht],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(x,yt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const ht=E.texture;for(let vt=0,Rt=ht.length;vt<Rt;vt++){const Ft=ht[vt],nt=n.get(Ft);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),G(r.TEXTURE_2D,Ft,yt),ft(F.__webglFramebuffer,E,Ft,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),S(Ft,yt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ht=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,it.__webglTexture),G(ht,x,yt),o&&x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ft(F.__webglFramebuffer[vt],E,x,r.COLOR_ATTACHMENT0,ht,vt);else ft(F.__webglFramebuffer,E,x,r.COLOR_ATTACHMENT0,ht,0);S(x,yt)&&v(ht),e.unbindTexture()}E.depthBuffer&&xt(E)}function rt(E){const x=f(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0,et=F.length;it<et;it++){const Q=F[it];if(S(Q,x)){const yt=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(Q).__webglTexture;e.bindTexture(yt,ht),v(yt),e.unbindTexture()}}}function $(E){if(o&&E.samples>0&&K(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,it=E.height;let et=r.COLOR_BUFFER_BIT;const Q=[],yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(E),vt=E.isWebGLMultipleRenderTargets===!0;if(vt)for(let Rt=0;Rt<x.length;Rt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){Q.push(r.COLOR_ATTACHMENT0+Rt),E.depthBuffer&&Q.push(yt);const Ft=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ft===!1&&(E.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Rt]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[yt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[yt])),vt){const nt=n.get(x[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,nt,0)}r.blitFramebuffer(0,0,F,it,0,0,F,it,et,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<x.length;Rt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Rt]);const Ft=n.get(x[Rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function st(E){return Math.min(i.maxSamples,E.samples)}function K(E){const x=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function gt(E,x){const F=E.colorSpace,it=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ta||F!==Sn&&F!==We&&(Zt.getTransfer(F)===ee?o===!1?t.has("EXT_sRGB")===!0&&it===Je?(E.format=ta,E.minFilter=Ve,E.generateMipmaps=!1):x=Wl.sRGBToLinear(x):(it!==Je||et!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=C,this.resetTextureUnits=tt,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=It,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=K}function Km(r,t,e){const n=e.isWebGL2;function i(s,a=We){let o;const l=Zt.getTransfer(a);if(s===Nn)return r.UNSIGNED_BYTE;if(s===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Nl)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gh)return r.BYTE;if(s===_h)return r.SHORT;if(s===ha)return r.UNSIGNED_SHORT;if(s===Il)return r.INT;if(s===Pn)return r.UNSIGNED_INT;if(s===Ln)return r.FLOAT;if(s===ji)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===vh)return r.ALPHA;if(s===Je)return r.RGBA;if(s===Sh)return r.LUMINANCE;if(s===xh)return r.LUMINANCE_ALPHA;if(s===$n)return r.DEPTH_COMPONENT;if(s===Ci)return r.DEPTH_STENCIL;if(s===ta)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===yh)return r.RED;if(s===Ul)return r.RED_INTEGER;if(s===Mh)return r.RG;if(s===Ol)return r.RG_INTEGER;if(s===Fl)return r.RGBA_INTEGER;if(s===ar||s===or||s===lr||s===cr)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ua||s===Oa||s===Fa||s===Ba)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ua)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ka||s===za)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ka)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===za)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Va||s===Ha||s===Ga||s===Wa||s===Xa||s===Ya||s===qa||s===Ka||s===$a||s===Za||s===ja||s===Ja||s===Qa||s===to)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Va)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ha)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ga)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ya)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ka)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$a)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Za)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ja)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ja)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===to)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hr||s===eo||s===no)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===hr)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===no)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Eh||s===io||s===so||s===ro)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===hr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===so)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ro)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Kn?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class $m extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cn extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jm extends Di{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=e.getContextAttributes();let f=null,p=null;const S=[],v=[],M=new ut;let R=null;const b=new Ge;b.layers.enable(1),b.viewport=new _e;const w=new Ge;w.layers.enable(2),w.viewport=new _e;const N=[b,w],y=new $m;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=S[G];return Z===void 0&&(Z=new Dr,S[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=S[G];return Z===void 0&&(Z=new Dr,S[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=S[G];return Z===void 0&&(Z=new Dr,S[G]=Z),Z.getHandSpace()};function W(G){const Z=v.indexOf(G.inputSource);if(Z===-1)return;const ct=S[Z];ct!==void 0&&(ct.update(G.inputSource,G.frame,c||a),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function tt(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",C);for(let G=0;G<S.length;G++){const Z=v[G];Z!==null&&(v[G]=null,S[G].disconnect(Z))}T=null,U=null,t.setRenderTarget(f),m=null,d=null,u=null,i=null,p=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new jn(m.framebufferWidth,m.framebufferHeight,{format:Je,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ct=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Ci:$n,ct=_.stencil?Kn:Pn);const ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ft),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new jn(d.textureWidth,d.textureHeight,{format:Je,type:Nn,depthTexture:new nc(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Et=t.properties.get(p);Et.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(G){for(let Z=0;Z<G.removed.length;Z++){const ct=G.removed[Z],dt=v.indexOf(ct);dt>=0&&(v[dt]=null,S[dt].disconnect(ct))}for(let Z=0;Z<G.added.length;Z++){const ct=G.added[Z];let dt=v.indexOf(ct);if(dt===-1){for(let Et=0;Et<S.length;Et++)if(Et>=v.length){v.push(ct),dt=Et;break}else if(v[Et]===null){v[Et]=ct,dt=Et;break}if(dt===-1)break}const ft=S[dt];ft&&ft.connect(ct)}}const B=new P,V=new P;function q(G,Z,ct){B.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(ct.matrixWorld);const dt=B.distanceTo(V),ft=Z.projectionMatrix.elements,Et=ct.projectionMatrix.elements,wt=ft[14]/(ft[10]-1),xt=ft[14]/(ft[10]+1),It=(ft[9]+1)/ft[5],L=(ft[9]-1)/ft[5],rt=(ft[8]-1)/ft[0],$=(Et[8]+1)/Et[0],st=wt*rt,K=wt*$,Tt=dt/(-rt+$),gt=Tt*-rt;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(gt),G.translateZ(Tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=wt+Tt,x=xt+Tt,F=st-gt,it=K+(dt-gt),et=It*xt/x*E,Q=L*xt/x*E;G.projectionMatrix.makePerspective(F,it,et,Q,E,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=w.near=b.near=G.near,y.far=w.far=b.far=G.far,(T!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const Z=G.parent,ct=y.cameras;Y(y,Z);for(let dt=0;dt<ct.length;dt++)Y(ct[dt],Z);ct.length===2?q(y,b,w):y.projectionMatrix.copy(b.projectionMatrix),X(G,y,Z)};function X(G,Z,ct){ct===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ji*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let j=null;function J(G,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let dt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let ft=0;ft<ct.length;ft++){const Et=ct[ft];let wt=null;if(m!==null)wt=m.getViewport(Et);else{const It=u.getViewSubImage(d,Et);wt=It.viewport,ft===0&&(t.setRenderTargetTextures(p,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let xt=N[ft];xt===void 0&&(xt=new Ge,xt.layers.enable(ft),xt.viewport=new _e,N[ft]=xt),xt.matrix.fromArray(Et.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Et.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(wt.x,wt.y,wt.width,wt.height),ft===0&&(y.matrix.copy(xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(xt)}}for(let ct=0;ct<S.length;ct++){const dt=v[ct],ft=S[ct];dt!==null&&ft!==void 0&&ft.update(dt,Z,c||a)}j&&j(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const lt=new tc;lt.setAnimationLoop(J),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}}function Jm(r,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,jl(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ce&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ce&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=t.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qm(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",f));const R=v.program;n.updateUBOMapping(S,R);const b=t.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function h(S){const v=u();S.__bindingPointIndex=v;const M=r.createBuffer(),R=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],M=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,w=M.length;b<w;b++){const N=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,T=N.length;y<T;y++){const U=N[y];if(m(U,b,y,R)===!0){const W=U.__offset,tt=Array.isArray(U.value)?U.value:[U.value];let C=0;for(let B=0;B<tt.length;B++){const V=tt[B],q=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,W+C,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,v,M,R){const b=S.value,w=v+"_"+M;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{const N=R[w];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return R[w]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function g(S){const v=S.uniforms;let M=0;const R=16;for(let w=0,N=v.length;w<N;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,U=y.length;T<U;T++){const W=y[T],tt=Array.isArray(W.value)?W.value:[W.value];for(let C=0,B=tt.length;C<B;C++){const V=tt[C],q=_(V),Y=M%R;Y!==0&&R-Y<q.boundary&&(M+=R-Y),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=q.storage}}}const b=M%R;return b>0&&(M+=R-b),S.__size=M,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function f(S){const v=S.target;v.removeEventListener("dispose",f);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class lc{constructor(t={}){const{canvas:e=Kh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const v=this;let M=!1,R=0,b=0,w=null,N=-1,y=null;const T=new _e,U=new _e;let W=null;const tt=new Yt(0);let C=0,B=e.width,V=e.height,q=1,Y=null,X=null;const j=new _e(0,0,B,V),J=new _e(0,0,B,V);let lt=!1;const G=new pa;let Z=!1,ct=!1,dt=null;const ft=new ne,Et=new ut,wt=new P,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return w===null?q:1}let L=n;function rt(A,O){for(let z=0;z<A.length;z++){const H=A[z],k=e.getContext(H,O);if(k!==null)return k}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),L=rt(O,A),L===null)throw rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,st,K,Tt,gt,E,x,F,it,et,Q,yt,ht,vt,Rt,Ft,nt,Kt,Xt,Ut,bt,St,kt,$t;function ae(){$=new cp(L),st=new ip(L,$,t),$.init(st),St=new Km(L,$,st),K=new Ym(L,$,st),Tt=new dp(L),gt=new Im,E=new qm(L,$,K,gt,st,St,Tt),x=new rp(v),F=new lp(v),it=new Su(L,st),kt=new ep(L,$,it,st),et=new hp(L,it,Tt,kt),Q=new gp(L,et,it,Tt),Xt=new mp(L,st,E),Ft=new sp(gt),yt=new Cm(v,x,F,$,st,kt,Ft),ht=new Jm(v,gt),vt=new Nm,Rt=new zm($,st),Kt=new tp(v,x,F,K,Q,d,l),nt=new Xm(v,Q,st),$t=new Qm(L,Tt,st,K),Ut=new np(L,$,Tt,st),bt=new up(L,$,Tt,st),Tt.programs=yt.programs,v.capabilities=st,v.extensions=$,v.properties=gt,v.renderLists=vt,v.shadowMap=nt,v.state=K,v.info=Tt}ae();const Ht=new jm(v,L);this.xr=Ht,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(B,V,!1))},this.getSize=function(A){return A.set(B,V)},this.setSize=function(A,O,z=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,V=O,e.width=Math.floor(A*q),e.height=Math.floor(O*q),z===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*q,V*q).floor()},this.setDrawingBufferSize=function(A,O,z){B=A,V=O,q=z,e.width=Math.floor(A*z),e.height=Math.floor(O*z),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,O,z,H){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,O,z,H),K.viewport(T.copy(j).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,O,z,H){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,O,z,H),K.scissor(U.copy(J).multiplyScalar(q).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){K.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(A=!0,O=!0,z=!0){let H=0;if(A){let k=!1;if(w!==null){const _t=w.texture.format;k=_t===Fl||_t===Ol||_t===Ul}if(k){const _t=w.texture.type,At=_t===Nn||_t===Pn||_t===ha||_t===Kn||_t===Dl||_t===Nl,Lt=Kt.getClearColor(),Nt=Kt.getClearAlpha(),Vt=Lt.r,Ot=Lt.g,Bt=Lt.b;At?(m[0]=Vt,m[1]=Ot,m[2]=Bt,m[3]=Nt,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Vt,g[1]=Ot,g[2]=Bt,g[3]=Nt,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Rt.dispose(),gt.dispose(),x.dispose(),F.dispose(),Q.dispose(),kt.dispose(),$t.dispose(),yt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Te),Ht.removeEventListener("sessionend",Qt),dt&&(dt.dispose(),dt=null),be.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Tt.autoReset,O=nt.enabled,z=nt.autoUpdate,H=nt.needsUpdate,k=nt.type;ae(),Tt.autoReset=A,nt.enabled=O,nt.autoUpdate=z,nt.needsUpdate=H,nt.type=k}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const O=A.target;O.removeEventListener("dispose",mt),Dt(O)}function Dt(A){Pt(A),gt.remove(A)}function Pt(A){const O=gt.get(A).programs;O!==void 0&&(O.forEach(function(z){yt.releaseProgram(z)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,z,H,k,_t){O===null&&(O=xt);const At=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Cc(A,O,z,H,k);K.setMaterial(H,At);let Nt=z.index,Vt=1;if(H.wireframe===!0){if(Nt=et.getWireframeAttribute(z),Nt===void 0)return;Vt=2}const Ot=z.drawRange,Bt=z.attributes.position;let le=Ot.start*Vt,De=(Ot.start+Ot.count)*Vt;_t!==null&&(le=Math.max(le,_t.start*Vt),De=Math.min(De,(_t.start+_t.count)*Vt)),Nt!==null?(le=Math.max(le,0),De=Math.min(De,Nt.count)):Bt!=null&&(le=Math.max(le,0),De=Math.min(De,Bt.count));const me=De-le;if(me<0||me===1/0)return;kt.setup(k,H,Lt,z,Nt);let ln,se=Ut;if(Nt!==null&&(ln=it.get(Nt),se=bt,se.setIndex(ln)),k.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*It()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(k.isLine){let Gt=H.linewidth;Gt===void 0&&(Gt=1),K.setLineWidth(Gt*It()),k.isLineSegments?se.setMode(L.LINES):k.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else k.isPoints?se.setMode(L.POINTS):k.isSprite&&se.setMode(L.TRIANGLES);if(k.isBatchedMesh)se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)se.renderInstances(le,me,k.count);else if(z.isInstancedBufferGeometry){const Gt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,nr=Math.min(z.instanceCount,Gt);se.renderInstances(le,me,nr)}else se.render(le,me)};function jt(A,O,z){A.transparent===!0&&A.side===Ze&&A.forceSinglePass===!1?(A.side=Ce,A.needsUpdate=!0,ss(A,O,z),A.side=On,A.needsUpdate=!0,ss(A,O,z),A.side=Ze):ss(A,O,z)}this.compile=function(A,O,z=null){z===null&&(z=A),f=Rt.get(z),f.init(),S.push(f),z.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),A!==z&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(v._useLegacyLights);const H=new Set;return A.traverse(function(k){const _t=k.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){const Lt=_t[At];jt(Lt,z,k),H.add(Lt)}else jt(_t,z,k),H.add(_t)}),S.pop(),f=null,H},this.compileAsync=function(A,O,z=null){const H=this.compile(A,O,z);return new Promise(k=>{function _t(){if(H.forEach(function(At){gt.get(At).currentProgram.isReady()&&H.delete(At)}),H.size===0){k(A);return}setTimeout(_t,10)}$.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Jt=null;function pe(A){Jt&&Jt(A)}function Te(){be.stop()}function Qt(){be.start()}const be=new tc;be.setAnimationLoop(pe),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(A){Jt=A,Ht.setAnimationLoop(A),A===null?be.stop():be.start()},Ht.addEventListener("sessionstart",Te),Ht.addEventListener("sessionend",Qt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(O),O=Ht.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,w),f=Rt.get(A,S.length),f.init(),S.push(f),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(ft),ct=this.localClippingEnabled,Z=Ft.init(this.clippingPlanes,ct),_=vt.get(A,p.length),_.init(),p.push(_),nn(A,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,X),this.info.render.frame++,Z===!0&&Ft.beginShadows();const z=f.state.shadowsArray;if(nt.render(z,A,O),Z===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,A),f.setupLights(v._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let k=0,_t=H.length;k<_t;k++){const At=H[k];Ma(_,A,At,At.viewport)}}else Ma(_,A,O);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,O),kt.resetDefaultState(),N=-1,y=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function nn(A,O,z,H){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){H&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);const At=Q.update(A),Lt=A.material;Lt.visible&&_.push(A,At,Lt,z,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const At=Q.update(A),Lt=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),wt.copy(At.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(Lt)){const Nt=At.groups;for(let Vt=0,Ot=Nt.length;Vt<Ot;Vt++){const Bt=Nt[Vt],le=Lt[Bt.materialIndex];le&&le.visible&&_.push(A,At,le,z,wt.z,Bt)}}else Lt.visible&&_.push(A,At,Lt,z,wt.z,null)}}const _t=A.children;for(let At=0,Lt=_t.length;At<Lt;At++)nn(_t[At],O,z,H)}function Ma(A,O,z,H){const k=A.opaque,_t=A.transmissive,At=A.transparent;f.setupLightsView(z),Z===!0&&Ft.setGlobalState(v.clippingPlanes,z),_t.length>0&&Lc(k,_t,O,z),H&&K.viewport(T.copy(H)),k.length>0&&is(k,O,z),_t.length>0&&is(_t,O,z),At.length>0&&is(At,O,z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Lc(A,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const _t=st.isWebGL2;dt===null&&(dt=new jn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ji:Nn,minFilter:Zi,samples:_t?4:0})),v.getDrawingBufferSize(Et),_t?dt.setSize(Et.x,Et.y):dt.setSize(Ys(Et.x),Ys(Et.y));const At=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(tt),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const Lt=v.toneMapping;v.toneMapping=vn,is(A,z,H),E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt);let Nt=!1;for(let Vt=0,Ot=O.length;Vt<Ot;Vt++){const Bt=O[Vt],le=Bt.object,De=Bt.geometry,me=Bt.material,ln=Bt.group;if(me.side===Ze&&le.layers.test(H.layers)){const se=me.side;me.side=Ce,me.needsUpdate=!0,Ea(le,z,H,De,me,ln),me.side=se,me.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt)),v.setRenderTarget(At),v.setClearColor(tt,C),v.toneMapping=Lt}function is(A,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,_t=A.length;k<_t;k++){const At=A[k],Lt=At.object,Nt=At.geometry,Vt=H===null?At.material:H,Ot=At.group;Lt.layers.test(z.layers)&&Ea(Lt,O,z,Nt,Vt,Ot)}}function Ea(A,O,z,H,k,_t){A.onBeforeRender(v,O,z,H,k,_t),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,O,z,H,A,_t),k.transparent===!0&&k.side===Ze&&k.forceSinglePass===!1?(k.side=Ce,k.needsUpdate=!0,v.renderBufferDirect(z,O,H,k,A,_t),k.side=On,k.needsUpdate=!0,v.renderBufferDirect(z,O,H,k,A,_t),k.side=Ze):v.renderBufferDirect(z,O,H,k,A,_t),A.onAfterRender(v,O,z,H,k,_t)}function ss(A,O,z){O.isScene!==!0&&(O=xt);const H=gt.get(A),k=f.state.lights,_t=f.state.shadowsArray,At=k.state.version,Lt=yt.getParameters(A,k.state,_t,O,z),Nt=yt.getProgramCacheKey(Lt);let Vt=H.programs;H.environment=A.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(A.isMeshStandardMaterial?F:x).get(A.envMap||H.environment),Vt===void 0&&(A.addEventListener("dispose",mt),Vt=new Map,H.programs=Vt);let Ot=Vt.get(Nt);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===At)return Ta(A,Lt),Ot}else Lt.uniforms=yt.getUniforms(A),A.onBuild(z,Lt,v),A.onBeforeCompile(Lt,v),Ot=yt.acquireProgram(Lt,Nt),Vt.set(Nt,Ot),H.uniforms=Lt.uniforms;const Bt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=Ft.uniform),Ta(A,Lt),H.needsLights=Dc(A),H.lightsStateVersion=At,H.needsLights&&(Bt.ambientLightColor.value=k.state.ambient,Bt.lightProbe.value=k.state.probe,Bt.directionalLights.value=k.state.directional,Bt.directionalLightShadows.value=k.state.directionalShadow,Bt.spotLights.value=k.state.spot,Bt.spotLightShadows.value=k.state.spotShadow,Bt.rectAreaLights.value=k.state.rectArea,Bt.ltc_1.value=k.state.rectAreaLTC1,Bt.ltc_2.value=k.state.rectAreaLTC2,Bt.pointLights.value=k.state.point,Bt.pointLightShadows.value=k.state.pointShadow,Bt.hemisphereLights.value=k.state.hemi,Bt.directionalShadowMap.value=k.state.directionalShadowMap,Bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Bt.spotShadowMap.value=k.state.spotShadowMap,Bt.spotLightMatrix.value=k.state.spotLightMatrix,Bt.spotLightMap.value=k.state.spotLightMap,Bt.pointShadowMap.value=k.state.pointShadowMap,Bt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function Aa(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=ks.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ta(A,O){const z=gt.get(A);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Cc(A,O,z,H,k){O.isScene!==!0&&(O=xt),E.resetTextureUnits();const _t=O.fog,At=H.isMeshStandardMaterial?O.environment:null,Lt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sn,Nt=(H.isMeshStandardMaterial?F:x).get(H.envMap||At),Vt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Bt=!!z.morphAttributes.position,le=!!z.morphAttributes.normal,De=!!z.morphAttributes.color;let me=vn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(me=v.toneMapping);const ln=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=ln!==void 0?ln.length:0,Gt=gt.get(H),nr=f.state.lights;if(Z===!0&&(ct===!0||A!==y)){const Oe=A===y&&H.id===N;Ft.setState(H,A,Oe)}let oe=!1;H.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==nr.state.version||Gt.outputColorSpace!==Lt||k.isBatchedMesh&&Gt.batching===!1||!k.isBatchedMesh&&Gt.batching===!0||k.isInstancedMesh&&Gt.instancing===!1||!k.isInstancedMesh&&Gt.instancing===!0||k.isSkinnedMesh&&Gt.skinning===!1||!k.isSkinnedMesh&&Gt.skinning===!0||k.isInstancedMesh&&Gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Gt.instancingColor===!1&&k.instanceColor!==null||Gt.envMap!==Nt||H.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ft.numPlanes||Gt.numIntersection!==Ft.numIntersection)||Gt.vertexAlphas!==Vt||Gt.vertexTangents!==Ot||Gt.morphTargets!==Bt||Gt.morphNormals!==le||Gt.morphColors!==De||Gt.toneMapping!==me||st.isWebGL2===!0&&Gt.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Gt.__version=H.version);let Bn=Gt.currentProgram;oe===!0&&(Bn=ss(H,O,k));let ba=!1,Oi=!1,ir=!1;const xe=Bn.getUniforms(),kn=Gt.uniforms;if(K.useProgram(Bn.program)&&(ba=!0,Oi=!0,ir=!0),H.id!==N&&(N=H.id,Oi=!0),ba||y!==A){xe.setValue(L,"projectionMatrix",A.projectionMatrix),xe.setValue(L,"viewMatrix",A.matrixWorldInverse);const Oe=xe.map.cameraPosition;Oe!==void 0&&Oe.setValue(L,wt.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&xe.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Oi=!0,ir=!0)}if(k.isSkinnedMesh){xe.setOptional(L,k,"bindMatrix"),xe.setOptional(L,k,"bindMatrixInverse");const Oe=k.skeleton;Oe&&(st.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(L,"boneTexture",Oe.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(xe.setOptional(L,k,"batchingTexture"),xe.setValue(L,"batchingTexture",k._matricesTexture,E));const sr=z.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0&&st.isWebGL2===!0)&&Xt.update(k,z,Bn),(Oi||Gt.receiveShadow!==k.receiveShadow)&&(Gt.receiveShadow=k.receiveShadow,xe.setValue(L,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(kn.envMap.value=Nt,kn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Oi&&(xe.setValue(L,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Ic(kn,ir),_t&&H.fog===!0&&ht.refreshFogUniforms(kn,_t),ht.refreshMaterialUniforms(kn,H,q,V,dt),ks.upload(L,Aa(Gt),kn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(L,Aa(Gt),kn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(L,"center",k.center),xe.setValue(L,"modelViewMatrix",k.modelViewMatrix),xe.setValue(L,"normalMatrix",k.normalMatrix),xe.setValue(L,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Oe=H.uniformsGroups;for(let rr=0,Nc=Oe.length;rr<Nc;rr++)if(st.isWebGL2){const wa=Oe[rr];$t.update(wa,Bn),$t.bind(wa,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function Ic(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Dc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,z){gt.get(A.texture).__webglTexture=O,gt.get(A.depthTexture).__webglTexture=z;const H=gt.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const z=gt.get(A);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,z=0){w=A,R=O,b=z;let H=!0,k=null,_t=!1,At=!1;if(A){const Nt=gt.get(A);Nt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Nt.__webglFramebuffer===void 0?E.setupRenderTarget(A):Nt.__hasExternalTextures&&E.rebindTextures(A,gt.get(A.texture).__webglTexture,gt.get(A.depthTexture).__webglTexture);const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(At=!0);const Ot=gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?k=Ot[O][z]:k=Ot[O],_t=!0):st.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?k=gt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[z]:k=Ot,T.copy(A.viewport),U.copy(A.scissor),W=A.scissorTest}else T.copy(j).multiplyScalar(q).floor(),U.copy(J).multiplyScalar(q).floor(),W=lt;if(K.bindFramebuffer(L.FRAMEBUFFER,k)&&st.drawBuffers&&H&&K.drawBuffers(A,k),K.viewport(T),K.scissor(U),K.setScissorTest(W),_t){const Nt=gt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,z)}else if(At){const Nt=gt.get(A.texture),Vt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,z||0,Vt)}N=-1},this.readRenderTargetPixels=function(A,O,z,H,k,_t,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){K.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Nt=A.texture,Vt=Nt.format,Ot=Nt.type;if(Vt!==Je&&St.convert(Vt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ot===ji&&($.has("EXT_color_buffer_half_float")||st.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ot!==Nn&&St.convert(Ot)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Ln&&(st.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-H&&z>=0&&z<=A.height-k&&L.readPixels(O,z,H,k,St.convert(Vt),St.convert(Ot),_t)}finally{const Nt=w!==null?gt.get(w).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(A,O,z=0){const H=Math.pow(2,-z),k=Math.floor(O.image.width*H),_t=Math.floor(O.image.height*H);E.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,A.x,A.y,k,_t),K.unbindTexture()},this.copyTextureToTexture=function(A,O,z,H=0){const k=O.image.width,_t=O.image.height,At=St.convert(z.format),Lt=St.convert(z.type);E.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,A.x,A.y,k,_t,At,Lt,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,At,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,A.x,A.y,At,Lt,O.image),H===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(A,O,z,H,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=A.max.x-A.min.x+1,At=A.max.y-A.min.y+1,Lt=A.max.z-A.min.z+1,Nt=St.convert(H.format),Vt=St.convert(H.type);let Ot;if(H.isData3DTexture)E.setTexture3D(H,0),Ot=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Ot=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),De=L.getParameter(L.UNPACK_SKIP_PIXELS),me=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES),se=z.isCompressedTexture?z.mipmaps[k]:z.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),z.isDataTexture||z.isData3DTexture?L.texSubImage3D(Ot,k,O.x,O.y,O.z,_t,At,Lt,Nt,Vt,se.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ot,k,O.x,O.y,O.z,_t,At,Lt,Nt,se.data)):L.texSubImage3D(Ot,k,O.x,O.y,O.z,_t,At,Lt,Nt,Vt,se),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,me),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),k===0&&H.generateMipmaps&&L.generateMipmap(Ot),K.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,K.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ua?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Zn:kl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Zn?ve:Sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tg extends lc{}tg.prototype.isWebGL1Renderer=!0;class ga{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eg extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class $o extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new ne,Zo=new ne,ws=[],jo=new an,ng=new ne,Vi=new qt,Hi=new xn;class cc extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),jo.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(jo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),Hi.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Hi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),t.ray.intersectsSphere(Hi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Si),Zo.multiplyMatrices(n,Si),Vi.matrixWorld=Zo,Vi.raycast(t,ws);for(let a=0,o=ws.length;a<o;a++){const l=ws[a];l.instanceId=s,l.object=this,e.push(l)}ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hc extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jo=new P,Qo=new P,tl=new ne,Nr=new fa,Rs=new xn;class ig extends ce{constructor(t=new Ae,e=new hc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Jo.fromBufferAttribute(e,i-1),Qo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Qo);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,t.ray.intersectsSphere(Rs)===!1)return;tl.copy(i).invert(),Nr.copy(t.ray).applyMatrix4(tl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=p,M=S-1;v<M;v+=m){const R=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(f,R),h.fromBufferAttribute(f,b),Nr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let v=p,M=S-1;v<M;v+=m){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),Nr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const el=new P,nl=new P;class sg extends ig{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)el.fromBufferAttribute(e,i),nl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+el.distanceTo(nl);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uc extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const il=new ne,ia=new fa,Ps=new xn,Ls=new P;class rg extends ce{constructor(t=new Ae,e=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;il.copy(i).invert(),ia.copy(t.ray).applyMatrix4(il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);Ls.fromBufferAttribute(u,f),sl(Ls,f,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Ls.fromBufferAttribute(u,g),sl(Ls,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sl(r,t,e,n,i,s,a){const o=ia.distanceSqToPoint(r);if(o<e){const l=new P;ia.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ag extends Ie{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,m=(a-h)/d;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new ut:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],a=[],o=new P,l=new ne;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Se(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(Se(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _a extends on{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new ut,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class og extends _a{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function va(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,i(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Cs=new P,Ur=new va,Or=new va,Fr=new va;class lg extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Ur.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,f),Or.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,f),Fr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Or.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ur.calc(l),Or.calc(l),Fr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function cg(r,t){const e=1-r;return e*e*t}function hg(r,t){return 2*(1-r)*r*t}function ug(r,t){return r*r*t}function Xi(r,t,e,n){return cg(r,t)+hg(r,e)+ug(r,n)}function dg(r,t){const e=1-r;return e*e*e*t}function fg(r,t){const e=1-r;return 3*e*e*r*t}function pg(r,t){return 3*(1-r)*r*r*t}function mg(r,t){return r*r*r*t}function Yi(r,t,e,n,i){return dg(r,t)+fg(r,e)+pg(r,n)+mg(r,i)}class dc extends on{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yi(t,i.x,s.x,a.x,o.x),Yi(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends on{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yi(t,i.x,s.x,a.x,o.x),Yi(t,i.y,s.y,a.y,o.y),Yi(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fc extends on{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends on{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pc extends on{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Xi(t,i.x,s.x,a.x),Xi(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends on{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Xi(t,i.x,s.x,a.x),Xi(t,i.y,s.y,a.y),Xi(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(rl(o,l.x,c.x,h.x,u.x),rl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var sa=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:lg,CubicBezierCurve:dc,CubicBezierCurve3:gg,EllipseCurve:_a,LineCurve:fc,LineCurve3:_g,QuadraticBezierCurve:pc,QuadraticBezierCurve3:vg,SplineCurve:mc});class Sg extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new sa[i.type]().fromJSON(i))}return this}}class al extends Sg{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new pc(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new dc(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new _a(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sa extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new P,h=new ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ui extends Ae{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const _=[],f=n/2;let p=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(m,2));function S(){const M=new P,R=new P;let b=0;const w=(e-t)/n;for(let N=0;N<=s;N++){const y=[],T=N/s,U=T*(e-t)+t;for(let W=0;W<=i;W++){const tt=W/i,C=tt*l+o,B=Math.sin(C),V=Math.cos(C);R.x=U*B,R.y=-T*n+f,R.z=U*V,u.push(R.x,R.y,R.z),M.set(B,w,V).normalize(),d.push(M.x,M.y,M.z),m.push(tt,1-T),y.push(g++)}_.push(y)}for(let N=0;N<i;N++)for(let y=0;y<s;y++){const T=_[y][N],U=_[y+1][N],W=_[y+1][N+1],tt=_[y][N+1];h.push(T,U,tt),h.push(U,W,tt),b+=6}c.addGroup(p,b,0),p+=b}function v(M){const R=g,b=new ut,w=new P;let N=0;const y=M===!0?t:e,T=M===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,f*T,0),d.push(0,T,0),m.push(.5,.5),g++;const U=g;for(let W=0;W<=i;W++){const C=W/i*l+o,B=Math.cos(C),V=Math.sin(C);w.x=y*V,w.y=f*T,w.z=y*B,u.push(w.x,w.y,w.z),d.push(0,T,0),b.x=B*.5+.5,b.y=V*.5*T+.5,m.push(b.x,b.y),g++}for(let W=0;W<i;W++){const tt=R+W,C=U+W;M===!0?h.push(C,C+1,tt):h.push(C+1,C,tt),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _n extends Ui{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Is=new P,Ds=new P,Br=new P,Ns=new He;class xg extends Ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(wi*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:f,c:p}=Ns;if(_.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ns.getNormal(Br),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const v=(S+1)%3,M=u[S],R=u[v],b=Ns[h[S]],w=Ns[h[v]],N=`${M}_${R}`,y=`${R}_${M}`;y in d&&d[y]?(Br.dot(d[y].normal)<=s&&(m.push(b.x,b.y,b.z),m.push(w.x,w.y,w.z)),d[y]=null):N in d||(d[N]={index0:c[S],index1:c[v],normal:Br.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:f}=d[g];Is.fromBufferAttribute(o,_),Ds.fromBufferAttribute(o,f),m.push(Is.x,Is.y,Is.z),m.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new ie(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class zs extends al{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new al().fromJSON(i))}return this}}const yg={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=gc(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,m;if(n&&(s=bg(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Qi(s,a,e,o,l,m,0),a}};function gc(r,t,e,n,i){let s,a;if(i===Fg(r,t,e,n)>0)for(s=t;s<e;s+=n)a=ol(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=ol(s,r[s],r[s+1],a);return a&&tr(a,a.next)&&(es(a),a=a.next),a}function ti(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(tr(e,e.next)||re(e.prev,e,e.next)===0)){if(es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qi(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Cg(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Eg(r,n,i,s):Mg(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),es(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ag(ti(r),t,e),Qi(r,t,e,n,i,s,2)):a===2&&Tg(r,t,e,n,i,s):Qi(ti(r),t,e,n,i,s,1);break}}}function Mg(r){const t=r.prev,e=r,n=r.next;if(re(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ti(i,o,s,l,a,c,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Eg(r,t,e,n){const i=r.prev,s=r,a=r.next;if(re(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,p=ra(m,g,t,e,n),S=ra(_,f,t,e,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=p&&M&&M.z<=S;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&Ti(o,h,l,u,c,d,v.x,v.y)&&re(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==i&&M!==a&&Ti(o,h,l,u,c,d,M.x,M.y)&&re(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&Ti(o,h,l,u,c,d,v.x,v.y)&&re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=S;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==i&&M!==a&&Ti(o,h,l,u,c,d,M.x,M.y)&&re(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ag(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!tr(i,s)&&_c(i,n,n.next,s)&&ts(i,s)&&ts(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),es(n),es(n.next),n=r=s),n=n.next}while(n!==r);return ti(n)}function Tg(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ng(a,o)){let l=vc(a,o);a=ti(a,a.next),l=ti(l,l.next),Qi(a,t,e,n,i,s,0),Qi(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function bg(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=gc(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Dg(c));for(i.sort(wg),s=0;s<i.length;s++)e=Rg(i[s],e);return e}function wg(r,t){return r.x-t.x}function Rg(r,t){const e=Pg(r,t);if(!e)return t;const n=vc(e,r);return ti(n,n.next),ti(e,e.next)}function Pg(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ti(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),ts(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Lg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Lg(r,t){return re(r.prev,r,t.prev)<0&&re(t.next,r,r.next)<0}function Cg(r,t,e,n){let i=r;do i.z===0&&(i.z=ra(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ig(i)}function Ig(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function ra(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Dg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ti(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Ng(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Ug(r,t)&&(ts(r,t)&&ts(t,r)&&Og(r,t)&&(re(r.prev,r,t.prev)||re(r,t.prev,t))||tr(r,t)&&re(r.prev,r,r.next)>0&&re(t.prev,t,t.next)>0)}function re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function tr(r,t){return r.x===t.x&&r.y===t.y}function _c(r,t,e,n){const i=Os(re(r,t,e)),s=Os(re(r,t,n)),a=Os(re(e,n,r)),o=Os(re(e,n,t));return!!(i!==s&&a!==o||i===0&&Us(r,e,t)||s===0&&Us(r,n,t)||a===0&&Us(e,r,n)||o===0&&Us(e,t,n))}function Us(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Os(r){return r>0?1:r<0?-1:0}function Ug(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&_c(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ts(r,t){return re(r.prev,r,r.next)<0?re(r,t,r.next)>=0&&re(r,r.prev,t)>=0:re(r,t,r.prev)<0||re(r,r.next,t)<0}function Og(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function vc(r,t){const e=new aa(r.i,r.x,r.y),n=new aa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ol(r,t,e,n){const i=new aa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function es(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function aa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fg(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class qi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return qi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ll(t),cl(n,t);let a=t.length;e.forEach(ll);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,cl(n,e[l]);const o=yg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ll(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function cl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ki extends Ae{constructor(t=new zs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Bg;let v,M=!1,R,b,w,N;p&&(v=p.getSpacedPoints(h),M=!0,d=!1,R=p.computeFrenetFrames(h,!1),b=new P,w=new P,N=new P),d||(f=0,m=0,g=0,_=0);const y=o.extractPoints(c);let T=y.shape;const U=y.holes;if(!qi.isClockWise(T)){T=T.reverse();for(let L=0,rt=U.length;L<rt;L++){const $=U[L];qi.isClockWise($)&&(U[L]=$.reverse())}}const tt=qi.triangulateShape(T,U),C=T;for(let L=0,rt=U.length;L<rt;L++){const $=U[L];T=T.concat($)}function B(L,rt,$){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(rt,$)}const V=T.length,q=tt.length;function Y(L,rt,$){let st,K,Tt;const gt=L.x-rt.x,E=L.y-rt.y,x=$.x-L.x,F=$.y-L.y,it=gt*gt+E*E,et=gt*F-E*x;if(Math.abs(et)>Number.EPSILON){const Q=Math.sqrt(it),yt=Math.sqrt(x*x+F*F),ht=rt.x-E/Q,vt=rt.y+gt/Q,Rt=$.x-F/yt,Ft=$.y+x/yt,nt=((Rt-ht)*F-(Ft-vt)*x)/(gt*F-E*x);st=ht+gt*nt-L.x,K=vt+E*nt-L.y;const Kt=st*st+K*K;if(Kt<=2)return new ut(st,K);Tt=Math.sqrt(Kt/2)}else{let Q=!1;gt>Number.EPSILON?x>Number.EPSILON&&(Q=!0):gt<-Number.EPSILON?x<-Number.EPSILON&&(Q=!0):Math.sign(E)===Math.sign(F)&&(Q=!0),Q?(st=-E,K=gt,Tt=Math.sqrt(it)):(st=gt,K=E,Tt=Math.sqrt(it/2))}return new ut(st/Tt,K/Tt)}const X=[];for(let L=0,rt=C.length,$=rt-1,st=L+1;L<rt;L++,$++,st++)$===rt&&($=0),st===rt&&(st=0),X[L]=Y(C[L],C[$],C[st]);const j=[];let J,lt=X.concat();for(let L=0,rt=U.length;L<rt;L++){const $=U[L];J=[];for(let st=0,K=$.length,Tt=K-1,gt=st+1;st<K;st++,Tt++,gt++)Tt===K&&(Tt=0),gt===K&&(gt=0),J[st]=Y($[st],$[Tt],$[gt]);j.push(J),lt=lt.concat(J)}for(let L=0;L<f;L++){const rt=L/f,$=m*Math.cos(rt*Math.PI/2),st=g*Math.sin(rt*Math.PI/2)+_;for(let K=0,Tt=C.length;K<Tt;K++){const gt=B(C[K],X[K],st);ft(gt.x,gt.y,-$)}for(let K=0,Tt=U.length;K<Tt;K++){const gt=U[K];J=j[K];for(let E=0,x=gt.length;E<x;E++){const F=B(gt[E],J[E],st);ft(F.x,F.y,-$)}}}const G=g+_;for(let L=0;L<V;L++){const rt=d?B(T[L],lt[L],G):T[L];M?(w.copy(R.normals[0]).multiplyScalar(rt.x),b.copy(R.binormals[0]).multiplyScalar(rt.y),N.copy(v[0]).add(w).add(b),ft(N.x,N.y,N.z)):ft(rt.x,rt.y,0)}for(let L=1;L<=h;L++)for(let rt=0;rt<V;rt++){const $=d?B(T[rt],lt[rt],G):T[rt];M?(w.copy(R.normals[L]).multiplyScalar($.x),b.copy(R.binormals[L]).multiplyScalar($.y),N.copy(v[L]).add(w).add(b),ft(N.x,N.y,N.z)):ft($.x,$.y,u/h*L)}for(let L=f-1;L>=0;L--){const rt=L/f,$=m*Math.cos(rt*Math.PI/2),st=g*Math.sin(rt*Math.PI/2)+_;for(let K=0,Tt=C.length;K<Tt;K++){const gt=B(C[K],X[K],st);ft(gt.x,gt.y,u+$)}for(let K=0,Tt=U.length;K<Tt;K++){const gt=U[K];J=j[K];for(let E=0,x=gt.length;E<x;E++){const F=B(gt[E],J[E],st);M?ft(F.x,F.y+v[h-1].y,v[h-1].x+$):ft(F.x,F.y,u+$)}}}Z(),ct();function Z(){const L=i.length/3;if(d){let rt=0,$=V*rt;for(let st=0;st<q;st++){const K=tt[st];Et(K[2]+$,K[1]+$,K[0]+$)}rt=h+f*2,$=V*rt;for(let st=0;st<q;st++){const K=tt[st];Et(K[0]+$,K[1]+$,K[2]+$)}}else{for(let rt=0;rt<q;rt++){const $=tt[rt];Et($[2],$[1],$[0])}for(let rt=0;rt<q;rt++){const $=tt[rt];Et($[0]+V*h,$[1]+V*h,$[2]+V*h)}}n.addGroup(L,i.length/3-L,0)}function ct(){const L=i.length/3;let rt=0;dt(C,rt),rt+=C.length;for(let $=0,st=U.length;$<st;$++){const K=U[$];dt(K,rt),rt+=K.length}n.addGroup(L,i.length/3-L,1)}function dt(L,rt){let $=L.length;for(;--$>=0;){const st=$;let K=$-1;K<0&&(K=L.length-1);for(let Tt=0,gt=h+f*2;Tt<gt;Tt++){const E=V*Tt,x=V*(Tt+1),F=rt+st+E,it=rt+K+E,et=rt+K+x,Q=rt+st+x;wt(F,it,et,Q)}}}function ft(L,rt,$){l.push(L),l.push(rt),l.push($)}function Et(L,rt,$){xt(L),xt(rt),xt($);const st=i.length/3,K=S.generateTopUV(n,i,st-3,st-2,st-1);It(K[0]),It(K[1]),It(K[2])}function wt(L,rt,$,st){xt(L),xt(rt),xt(st),xt(rt),xt($),xt(st);const K=i.length/3,Tt=S.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);It(Tt[0]),It(Tt[1]),It(Tt[3]),It(Tt[1]),It(Tt[2]),It(Tt[3])}function xt(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function It(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new sa[i.type]().fromJSON(i)),new Ki(n,t.options)}}const Bg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ut(s,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-u),new ut(d,1-g),new ut(_,1-p)]:[new ut(o,1-l),new ut(h,1-u),new ut(m,1-g),new ut(f,1-p)]}};function kg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ks extends Ae{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const b=R/e;u.x=-t*Math.cos(i+b*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+b*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(b+M,1-v),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const v=h[p][S+1],M=h[p][S],R=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&m.push(v,M,b),(p!==n-1||l<Math.PI)&&m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $s extends Ae{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,S=(i+1)*m+g;a.push(_,f,S),a.push(f,p,S)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Le extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sc extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const kr=new ne,hl=new P,ul=new P;class zg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ul),e.updateMatrixWorld(),kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vg extends zg{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dl extends Sc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hg extends Sc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const D={MAX_UPDATES_PER_FRAME:5,ARENA:{WALL_THICKNESS:2,MAP_SCALE:3,CHECKER_LIGHT_COLOR:14277081,CHECKER_DARK_COLOR:5921370,CHECKER_WORLD_SIZE:18},PLAYER:{SPEED:18,TURN_SPEED:2.2,ROLL_SPEED:2,BOOST_MULTIPLIER:1.8,BOOST_DURATION:2,BOOST_COOLDOWN:5,SPAWN_PROTECTION:1,HITBOX_RADIUS:.8,MODEL_SCALE:1,NOSE_CAMERA_LOCAL_Y:.05,NOSE_CAMERA_LOCAL_Z:-1.95,START_Y:10,AUTO_ROLL:!0,AUTO_ROLL_SPEED:1.5},GAMEPLAY:{PLANAR_MODE:!1,PORTAL_COUNT:0,PLANAR_LEVEL_COUNT:5,PORTAL_BEAMS:!1,PLANAR_AIM_INPUT_SPEED:1.5},TRAIL:{WIDTH:.6,UPDATE_INTERVAL:.07,GAP_CHANCE:.02,GAP_DURATION:.3,MAX_SEGMENTS:5e3},RENDER:{MAX_PIXEL_RATIO:1.35,SHADOW_MAP_SIZE:512},DEBUG:{PERF:{ENABLED:!1,SAMPLE_EVERY:4,MAX_SAMPLES:2048}},POWERUP:{SPAWN_INTERVAL:3,MAX_ON_FIELD:8,PICKUP_RADIUS:2.5,SIZE:1.5,ROTATION_SPEED:2,BOUNCE_SPEED:1.5,BOUNCE_HEIGHT:.5,MAX_INVENTORY:5,TYPES:{SPEED_UP:{name:"Schneller",color:65382,icon:"⚡",duration:4,multiplier:1.6},SLOW_DOWN:{name:"Langsamer",color:16724787,icon:"🐢",duration:4,multiplier:.5},THICK:{name:"Dick",color:16763904,icon:"🧱",duration:5,trailWidth:1.8},THIN:{name:"Dünn",color:11158783,icon:"✂",duration:5,trailWidth:.2},SHIELD:{name:"Schild",color:4491519,icon:"🛡",duration:3},SLOW_TIME:{name:"Zeitlupe",color:4521864,icon:"🕙",duration:4,timeScale:.4},GHOST:{name:"Geist",color:16737996,icon:"👻",duration:3},INVERT:{name:"Invertieren",color:16711935,icon:"🔀",duration:4}}},BOT:{DEFAULT_DIFFICULTY:"NORMAL",ACTIVE_DIFFICULTY:"NORMAL",REACTION_TIME:.13,LOOK_AHEAD:13,AGGRESSION:.58,LEARNING:{ENABLED:!1,STORAGE_KEY:"mini-curve-fever-3d.bot-learning.v1",STORAGE_KEY_3D:"mini-curve-fever-3d.bot-learning.v1.3d",STORAGE_KEY_PLANAR:"mini-curve-fever-3d.bot-learning.v1.planar",MAX_TRAINING_TIME_SCALE:1e3,ALPHA:.16,GAMMA:.92,EPSILON_START:.35,EPSILON_MIN:.04,EPSILON_DECAY:.9995,MAX_STATES:2500,SAVE_EVERY_UPDATES:200,MIN_SAVE_INTERVAL_MS:4e3,REWARD:{SURVIVAL_PER_SEC:.03,BOUNCE_WALL:-.35,BOUNCE_TRAIL:-.55,KILL:2.2,DEATH:-2.8,ROUND_WIN:1.4,ROUND_LOSS:-.8,ROUND_DRAW:-.25,KILL_HUMAN_BONUS:.85,DEATH_BY_HUMAN:-.95,HUMAN_ENGAGEMENT_PER_SEC:.018}},DIFFICULTY_PROFILES:{EASY:{reactionTime:.24,lookAhead:11,aggression:.36,errorRate:.24,probeSpread:.62,probeStep:2.3,turnCommitTime:.14,stuckCheckInterval:.45,stuckTriggerTime:1.7,minProgressDistance:.85,minForwardProgress:.35,recoveryDuration:.95,recoveryCooldown:1.9,itemUseCooldown:1.25,itemShootCooldown:.8,targetRefreshInterval:.28,portalInterest:.35,portalSeekDistance:60,portalEntryDotMin:.22,portalIntentThreshold:.25,portalIntentDuration:.9,boostChance:.0025,probeCount:7,projectileAwareness:0,pursuitEnabled:!1,pursuitRadius:0,pursuitAimTolerance:.95,heightBias:0,spacingWeight:0,itemContextWeight:.2},NORMAL:{reactionTime:.14,lookAhead:13,aggression:.58,errorRate:.11,probeSpread:.74,probeStep:1.6,turnCommitTime:.18,stuckCheckInterval:.4,stuckTriggerTime:1.2,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1.3,recoveryCooldown:1.55,itemUseCooldown:.95,itemShootCooldown:.62,targetRefreshInterval:.2,portalInterest:.56,portalSeekDistance:72,portalEntryDotMin:.28,portalIntentThreshold:.2,portalIntentDuration:1.15,boostChance:.0045,probeCount:10,projectileAwareness:.6,pursuitEnabled:!0,pursuitRadius:35,pursuitAimTolerance:.85,heightBias:.15,spacingWeight:.3,itemContextWeight:.7},HARD:{reactionTime:.08,lookAhead:16,aggression:.74,errorRate:.04,probeSpread:.9,probeStep:1.4,turnCommitTime:.24,stuckCheckInterval:.35,stuckTriggerTime:1,minProgressDistance:1,minForwardProgress:.5,recoveryDuration:1.25,recoveryCooldown:1.2,itemUseCooldown:.78,itemShootCooldown:.48,targetRefreshInterval:.12,portalInterest:.74,portalSeekDistance:84,portalEntryDotMin:.35,portalIntentThreshold:.14,portalIntentDuration:1.35,boostChance:.0065,probeCount:12,projectileAwareness:.95,pursuitEnabled:!0,pursuitRadius:50,pursuitAimTolerance:.75,heightBias:.25,spacingWeight:.5,itemContextWeight:1}}},PROJECTILE:{SPEED:45,RADIUS:.7,LIFE_TIME:3,MAX_DISTANCE:140,COOLDOWN:.45,PLANAR_AIM_MAX_ANGLE_DEG:18},PORTAL:{RADIUS:3.5,COOLDOWN:1.2,RING_SIZE:4,ROTATION_SPEED:2,MIN_PAIR_DISTANCE:15,MIN_PAIR_DISTANCE_PLANAR:4},HOMING:{LOCK_ON_ANGLE:15,TURN_RATE:3,MAX_LOCK_RANGE:100},COLORS:{PLAYER_1:43775,PLAYER_2:16746496,BOT_COLORS:[16729156,4521796,16777028,16729343,4521983],BACKGROUND:526354,AMBIENT_LIGHT:3359846},CAMERA:{FOV:75,NEAR:.1,FAR:200,FOLLOW_DISTANCE:12,FOLLOW_HEIGHT:6,LOOK_AHEAD:5,SMOOTHING:.08,MODES:["THIRD_PERSON","FIRST_PERSON","TOP_DOWN"],FIRST_PERSON_NOSE_CLEARANCE:.3,FIRST_PERSON_OFFSET:4,FIRST_PERSON_BOOST_OFFSET:1.45,FIRST_PERSON_BOOST_BLEND_SPEED:8.5,COLLISION_RADIUS:.45,COLLISION_BACKOFF:.04,COLLISION_STEPS:8},MAPS:{standard:{name:"Standard Arena",size:[80,30,80],obstacles:[{pos:[0,5,0],size:[4,10,4]},{pos:[20,5,20],size:[3,10,3]},{pos:[-20,5,-20],size:[3,10,3]},{pos:[20,5,-20],size:[3,10,3]},{pos:[-20,5,20],size:[3,10,3]}],portals:[{a:[-30,12,0],b:[30,12,0],color:65484}]},empty:{name:"Leer",size:[50,25,50],obstacles:[],portals:[]},maze:{name:"Labyrinth",size:[80,25,80],obstacles:[{pos:[-20,5,-20],size:[20,10,2]},{pos:[20,5,-20],size:[20,10,2]},{pos:[0,5,0],size:[30,10,2]},{pos:[-20,5,20],size:[20,10,2]},{pos:[20,5,20],size:[20,10,2]},{pos:[-20,5,0],size:[2,10,20]},{pos:[20,5,0],size:[2,10,20]},{pos:[0,5,-20],size:[2,10,15]},{pos:[0,5,20],size:[2,10,15]}],portals:[{a:[-30,10,-30],b:[30,10,30],color:16738047},{a:[30,10,-30],b:[-30,10,30],color:6737151}]},complex:{name:"Komplex",size:[90,30,90],obstacles:[{pos:[0,5,0],size:[6,12,6]},{pos:[-25,5,-25],size:[10,8,2]},{pos:[25,5,-25],size:[2,8,10]},{pos:[-25,5,25],size:[2,8,10]},{pos:[25,5,25],size:[10,8,2]},{pos:[-15,5,0],size:[2,15,15]},{pos:[15,5,0],size:[2,15,15]},{pos:[0,5,-15],size:[15,15,2]},{pos:[0,5,15],size:[15,15,2]},{pos:[-30,3,0],size:[5,6,5]},{pos:[30,3,0],size:[5,6,5]}],portals:[{a:[-35,12,-35],b:[35,12,35],color:16755200},{a:[35,12,-35],b:[-35,12,35],color:43775}]},pyramid:{name:"Pyramide",size:[80,35,80],obstacles:[{pos:[0,2,0],size:[20,4,20]},{pos:[0,6,0],size:[15,4,15]},{pos:[0,10,0],size:[10,4,10]},{pos:[0,14,0],size:[5,4,5]},{pos:[-30,5,-30],size:[3,10,3]},{pos:[30,5,-30],size:[3,10,3]},{pos:[-30,5,30],size:[3,10,3]},{pos:[30,5,30],size:[3,10,3]}],portals:[{a:[0,25,-30],b:[0,25,30],color:16729343}]}},KEYS:{PLAYER_1:{UP:"KeyW",DOWN:"KeyS",LEFT:"KeyA",RIGHT:"KeyD",ROLL_LEFT:"KeyQ",ROLL_RIGHT:"KeyE",BOOST:"ShiftLeft",SHOOT:"KeyF",NEXT_ITEM:"KeyR",DROP:"KeyG",CAMERA:"KeyC"},PLAYER_2:{UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",ROLL_LEFT:"KeyN",ROLL_RIGHT:"KeyM",BOOST:"ShiftRight",SHOOT:"KeyJ",NEXT_ITEM:"KeyL",DROP:"KeyH",CAMERA:"KeyV"}}};class Gg{constructor(t){this.canvas=t,this.renderer=new lc({canvas:this.canvas,antialias:window.devicePixelRatio<=1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.setSize(window.innerWidth,window.innerHeight),this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fc,this.renderer.toneMapping=Zr,this.renderer.toneMappingExposure=1.2,this.renderer.setClearColor(D.COLORS.BACKGROUND),this.scene=new eg,this.scene.fog=new ga(D.COLORS.BACKGROUND,50,200),this._setupLights(),this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[],this.splitScreen=!1,window.addEventListener("resize",()=>this._onResize()),this._tmpVec=new P,this._tmpVec2=new P,this._tmpLookAt=new P,this._tmpCamDir=new P,this._tmpCamProbe=new P}_setupLights(){const t=new Hg(D.COLORS.AMBIENT_LIGHT,.8);this.scene.add(t);const e=new dl(16777215,.8);e.position.set(30,50,30),e.castShadow=!0,e.shadow.mapSize.set(D.RENDER.SHADOW_MAP_SIZE,D.RENDER.SHADOW_MAP_SIZE),e.shadow.camera.near=1,e.shadow.camera.far=150,e.shadow.camera.left=-60,e.shadow.camera.right=60,e.shadow.camera.top=60,e.shadow.camera.bottom=-60,this.scene.add(e);const n=new dl(4482730,.3);n.position.set(-20,30,-10),this.scene.add(n)}createCamera(t){const e=new Ge(D.CAMERA.FOV,this._getAspect(),D.CAMERA.NEAR,D.CAMERA.FAR);return e.position.set(0,15,20),this.cameras.push(e),this.cameraTargets.push({position:new P,lookAt:new P}),this.cameraModes.push(0),this.cameraBoostBlend.push(0),e}setSplitScreen(t){this.splitScreen=t,this._updateCameraAspects()}cycleCamera(t){t<this.cameraModes.length&&(this.cameraModes[t]=(this.cameraModes[t]+1)%D.CAMERA.MODES.length)}getCameraMode(t){return D.CAMERA.MODES[this.cameraModes[t]||0]}updateCamera(t,e,n,i,s=null,a=!1,o=!1,l=null,c=null){if(t>=this.cameras.length)return;const h=this.cameras[t],u=this.cameraTargets[t],d=this.getCameraMode(t),m=D.CAMERA.SMOOTHING,g=d==="FIRST_PERSON"&&!0&&!!c,_=D.CAMERA.FIRST_PERSON_NOSE_CLEARANCE,f=g&&d==="FIRST_PERSON",p=d==="FIRST_PERSON"&&o?1:0,S=Math.max(.001,D.CAMERA.FIRST_PERSON_BOOST_BLEND_SPEED),v=1-Math.exp(-S*Math.max(0,i)),M=this.cameraBoostBlend[t]||0,R=Un.clamp(Un.lerp(M,p,v),0,1);this.cameraBoostBlend[t]=R;const b=Un.lerp(D.CAMERA.FIRST_PERSON_OFFSET,D.CAMERA.FIRST_PERSON_BOOST_OFFSET,R);if(a&&s){d==="THIRD_PERSON"?(this._tmpVec.set(0,D.CAMERA.FOLLOW_HEIGHT,D.CAMERA.FOLLOW_DISTANCE),this._tmpVec.applyQuaternion(s),u.position.copy(e).add(this._tmpVec)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_)):(this._tmpVec.set(0,0,-b),this._tmpVec.applyQuaternion(s),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l)):d==="TOP_DOWN"&&(this._tmpVec.set(0,40,5),this._tmpVec.applyQuaternion(s),u.position.copy(e).add(this._tmpVec));const w=f?1:1-Math.pow(1-m,i*60);h.position.lerp(u.position,w),f?h.quaternion.copy(s):h.quaternion.slerp(s,w)}else{if(d==="THIRD_PERSON"?(this._tmpVec.copy(n).multiplyScalar(-12),this._tmpVec.y+=D.CAMERA.FOLLOW_HEIGHT,u.position.copy(e).add(this._tmpVec),this._tmpVec2.copy(n).multiplyScalar(D.CAMERA.LOOK_AHEAD),u.lookAt.copy(e).add(this._tmpVec2)):d==="FIRST_PERSON"?g?(u.position.copy(c),u.position.addScaledVector(n,_),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(u.position).add(this._tmpVec2)):(this._tmpVec.copy(n).multiplyScalar(b),u.position.copy(e).add(this._tmpVec),this._resolveCameraCollision(e,u.position,l),this._tmpVec2.copy(n).multiplyScalar(20),u.lookAt.copy(e).add(this._tmpVec2)):d==="TOP_DOWN"&&(u.position.set(e.x,e.y+40,e.z+5),u.lookAt.copy(e)),f){h.position.copy(u.position),h.lookAt(u.lookAt);return}const w=1-Math.pow(1-m,i*60);h.position.lerp(u.position,w),h.getWorldDirection(this._tmpLookAt),this._tmpLookAt.multiplyScalar(10).add(h.position),this._tmpLookAt.lerp(u.lookAt,w),h.lookAt(this._tmpLookAt)}}_resolveCameraCollision(t,e,n){if(!n||typeof n.checkCollision!="function")return;const i=Math.max(.05,D.CAMERA.COLLISION_RADIUS);if(!n.checkCollision(e,i)||(this._tmpCamDir.copy(e).sub(t),this._tmpCamDir.lengthSq()<1e-6))return;let s=0,a=1,o=0;const l=Math.max(4,Math.floor(D.CAMERA.COLLISION_STEPS));for(let u=0;u<l;u++){const d=(s+a)*.5;this._tmpCamProbe.copy(t).addScaledVector(this._tmpCamDir,d),n.checkCollision(this._tmpCamProbe,i)?a=d:(o=d,s=d)}const c=Math.max(0,D.CAMERA.COLLISION_BACKOFF),h=Math.max(0,o-c);e.copy(t).addScaledVector(this._tmpCamDir,h)}render(){const t=this._width,e=this._height;this.splitScreen&&this.cameras.length>=2?(this.renderer.setViewport(0,0,t/2,e),this.renderer.setScissor(0,0,t/2,e),this.renderer.setScissorTest(!0),this.renderer.render(this.scene,this.cameras[0]),this.renderer.setViewport(t/2,0,t/2,e),this.renderer.setScissor(t/2,0,t/2,e),this.renderer.render(this.scene,this.cameras[1]),this.renderer.setScissorTest(!1)):this.cameras.length>0&&(this.renderer.setViewport(0,0,t,e),this.renderer.render(this.scene,this.cameras[0]))}_getAspect(){return this.splitScreen?this._width/2/this._height:this._width/this._height}_updateCameraAspects(){const t=this._getAspect();for(const e of this.cameras)e.aspect=t,e.updateProjectionMatrix()}_onResize(){this._width=window.innerWidth,this._height=window.innerHeight,this.renderer.setSize(this._width,this._height),this._updateCameraAspects()}addToScene(t){this.scene.add(t)}removeFromScene(t){this.scene.remove(t)}clearScene(){const t=[];this.scene.traverse(e=>{!e.isLight&&e!==this.scene&&t.push(e)});for(const e of t)e.parent===this.scene&&this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose());this.cameras=[],this.cameraTargets=[],this.cameraModes=[],this.cameraBoostBlend=[]}setQuality(t){t==="LOW"?(this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,.8)),this.renderer.toneMapping=vn,this.scene.fog.near=30,this.scene.fog.far=120):(this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,D.RENDER.MAX_PIXEL_RATIO)),this.renderer.toneMapping=Zr,this.scene.fog.near=50,this.scene.fog.far=200),this.scene.traverse(e=>{e.isMesh&&e.material&&(e.material.needsUpdate=!0)})}}function Wg(r,t,e){return Math.min(Math.max(r,t),e)}function zr(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now()}class Xg{constructor(t,e){this.updateFn=t,this.renderFn=e,this.running=!1,this.lastTime=0,this.timeScale=1,this._boundLoop=this._loop.bind(this),this.frameId=null,this._errorShown=!1,this.accumulator=0,this.fixedStep=1/60,this.maxUpdatesPerFrame=Math.max(1,Math.floor(D.MAX_UPDATES_PER_FRAME)),this.maxUpdateCpuMs=8,this.dropAccumulatorOnBudgetExhaust=!1,this._diag={frame:0,lastRawDt:0,lastScaledDt:0,lastSimulatedDt:0,lastSteps:0,lastCpuMs:0,lastAccumulator:0,budgetHit:!1,droppedAccumulator:!1,totalBudgetHits:0,totalDroppedFrames:0}}start(){this.running=!0,this.lastTime=performance.now(),this._errorShown=!1,this.frameId=requestAnimationFrame(this._boundLoop)}stop(){this.running=!1,this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null)}setTimeScale(t){const e=Number(t);this.timeScale=Number.isFinite(e)&&e>0?e:1}configureUpdateBudget(t={}){if(Object.prototype.hasOwnProperty.call(t,"maxUpdatesPerFrame")){const e=Number(t.maxUpdatesPerFrame);Number.isFinite(e)&&(this.maxUpdatesPerFrame=Math.max(1,Math.floor(e)))}if(Object.prototype.hasOwnProperty.call(t,"maxUpdateCpuMs")){const e=Number(t.maxUpdateCpuMs);Number.isFinite(e)&&(this.maxUpdateCpuMs=Wg(e,0,50))}Object.prototype.hasOwnProperty.call(t,"dropAccumulatorOnBudgetExhaust")&&(this.dropAccumulatorOnBudgetExhaust=!!t.dropAccumulatorOnBudgetExhaust)}getDiagnostics(){const t=this._diag,e=t.lastRawDt>0?t.lastSimulatedDt/t.lastRawDt:this.timeScale;return{frame:t.frame,lastRawDt:t.lastRawDt,lastScaledDt:t.lastScaledDt,lastSimulatedDt:t.lastSimulatedDt,lastSteps:t.lastSteps,lastCpuMs:t.lastCpuMs,lastAccumulator:t.lastAccumulator,budgetHit:t.budgetHit,droppedAccumulator:t.droppedAccumulator,totalBudgetHits:t.totalBudgetHits,totalDroppedFrames:t.totalDroppedFrames,targetScale:this.timeScale,effectiveScale:e,maxUpdatesPerFrame:this.maxUpdatesPerFrame,maxUpdateCpuMs:this.maxUpdateCpuMs}}_loop(t){if(!this.running)return;const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.05),i=n*this.timeScale;this.accumulator+=i;const s=this.fixedStep*this.maxUpdatesPerFrame;this.accumulator>s&&(this.accumulator=s);try{let a=!1,o=0,l=0,c=!1,h=!1;const u=zr(),d=this._diag.frame+1;for(;this.accumulator>=this.fixedStep&&o<this.maxUpdatesPerFrame;)if(this.updateFn(this.fixedStep,{frame:d,stepIndex:o+1,fixedStep:!0,timeScale:this.timeScale}),this.accumulator-=this.fixedStep,l+=this.fixedStep,o++,a=!0,this.maxUpdateCpuMs>0&&zr()-u>=this.maxUpdateCpuMs){c=!0;break}if(!c&&this.accumulator>=this.fixedStep&&o>=this.maxUpdatesPerFrame&&(c=!0),c&&this.dropAccumulatorOnBudgetExhaust&&(this.accumulator=0,h=!0),!a&&n>0){const g=n*this.timeScale;this.updateFn(g,{frame:d,stepIndex:1,fixedStep:!1,timeScale:this.timeScale}),l=g}const m=zr()-u;this._diag.frame=d,this._diag.lastRawDt=e,this._diag.lastScaledDt=i,this._diag.lastSimulatedDt=l,this._diag.lastSteps=o,this._diag.lastCpuMs=m,this._diag.lastAccumulator=this.accumulator,this._diag.budgetHit=c,this._diag.droppedAccumulator=h,c&&this._diag.totalBudgetHits++,h&&this._diag.totalDroppedFrames++,this.renderFn()}catch(a){if(!this._errorShown){this._errorShown=!0,console.error("GameLoop error:",a);const o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;width:100%;padding:20px;background:#c00;color:#fff;font:16px monospace;z-index:99999;white-space:pre-wrap;",o.textContent="FEHLER: "+a.message+`

`+a.stack,document.body.appendChild(o)}}this.frameId=requestAnimationFrame(this._boundLoop)}}const Yg=["UP","DOWN","LEFT","RIGHT","ROLL_LEFT","ROLL_RIGHT","BOOST","SHOOT","NEXT_ITEM","DROP","CAMERA"];function fl(r){return JSON.parse(JSON.stringify(r))}class qg{constructor(){this.keys={},this.justPressed={},this.bindings=fl(D.KEYS),this._reuseInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,nextItem:!1},window.addEventListener("keydown",t=>{this.keys[t.code]||(this.justPressed[t.code]=!0),this.keys[t.code]=!0,t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.preventDefault()})}setBindings(t){this.bindings={PLAYER_1:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_1,D.KEYS.PLAYER_1),PLAYER_2:this._normalizePlayerBindings(t==null?void 0:t.PLAYER_2,D.KEYS.PLAYER_2)}}getBindings(){return fl(this.bindings)}_normalizePlayerBindings(t,e){const n=t||{},i={};for(const s of Yg)i[s]=n[s]||e[s];return i}isDown(t){return!!this.keys[t]}wasPressed(t){return this.justPressed[t]?(this.justPressed[t]=!1,!0):!1}clearJustPressed(){this.justPressed={}}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.nextItem=!1}_isActionDown(t,e=""){return this.isDown(t)?!0:!!e&&this.isDown(e)}_wasActionPressed(t,e=""){let n=this.wasPressed(t);return e&&e!==t&&(n=this.wasPressed(e)||n),n}getPlayerInput(t,e={}){const n=!!e.includeSecondaryBindings&&t===0,i=t===0?this.bindings.PLAYER_1:this.bindings.PLAYER_2,s=n?this.bindings.PLAYER_2:null;return this._resetInput(this._reuseInput),this._reuseInput.pitchUp=this._isActionDown(i.UP,(s==null?void 0:s.UP)||""),this._reuseInput.pitchDown=this._isActionDown(i.DOWN,(s==null?void 0:s.DOWN)||""),this._reuseInput.yawLeft=this._isActionDown(i.LEFT,(s==null?void 0:s.LEFT)||""),this._reuseInput.yawRight=this._isActionDown(i.RIGHT,(s==null?void 0:s.RIGHT)||""),this._reuseInput.rollLeft=this._isActionDown(i.ROLL_LEFT,(s==null?void 0:s.ROLL_LEFT)||""),this._reuseInput.rollRight=this._isActionDown(i.ROLL_RIGHT,(s==null?void 0:s.ROLL_RIGHT)||""),this._reuseInput.boost=this._isActionDown(i.BOOST,(s==null?void 0:s.BOOST)||""),this._reuseInput.cameraSwitch=this._wasActionPressed(i.CAMERA,(s==null?void 0:s.CAMERA)||""),this._reuseInput.dropItem=this._wasActionPressed(i.DROP,(s==null?void 0:s.DROP)||""),this._reuseInput.shootItem=this._wasActionPressed(i.SHOOT,(s==null?void 0:s.SHOOT)||""),this._reuseInput.nextItem=this._wasActionPressed(i.NEXT_ITEM,(s==null?void 0:s.NEXT_ITEM)||""),this._reuseInput}}class Kg{constructor(t){this.renderer=t,this.obstacles=[],this.portals=[],this.portalsEnabled=!0,this.bounds={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},this._tmpSphere=new xn}build(t){const e=D.MAPS[t]||D.MAPS.standard;this.currentMapKey=t;const n=D.ARENA.MAP_SCALE,[i,s,a]=e.size,o=i*n,l=s*n,c=a*n,h=o/2,u=l/2,d=c/2;this.bounds={minX:-h,maxX:h,minY:0,maxY:l,minZ:-d,maxZ:d};const m=this._createCheckerTexture(D.ARENA.CHECKER_LIGHT_COLOR,D.ARENA.CHECKER_DARK_COLOR),g=Math.max(1,D.ARENA.CHECKER_WORLD_SIZE),_=m.clone();_.needsUpdate=!0,_.repeat.set(Math.max(1,o/g),Math.max(1,c/g));const f=m.clone();f.needsUpdate=!0,f.repeat.set(Math.max(1,o/g),Math.max(1,l/g));const p=new Le({color:16777215,map:f,transparent:!0,opacity:.9,roughness:.75,metalness:.1,side:Ze}),S=new Le({color:16777215,map:_,roughness:.9,metalness:.05}),v=new Le({color:2763338,roughness:.4,metalness:.5,transparent:!0,opacity:.6}),M=new qt(new Js(o,c),S);M.rotation.x=-Math.PI/2,M.receiveShadow=!0,M.matrixAutoUpdate=!1,M.updateMatrix(),this.renderer.addToScene(M);const R=D.ARENA.WALL_THICKNESS*n;this._addWall(0,u,d+R/2,o+2*R,l,R,p),this._addWall(0,u,-d-R/2,o+2*R,l,R,p),this._addWall(-h-R/2,u,0,R,l,c,p),this._addWall(h+R/2,u,0,R,l,c,p),this._addWall(0,l,0,o,R,c,p);for(const b of e.obstacles){const[w,N,y]=b.pos,[T,U,W]=b.size;this._addObstacle(w*n,N*n,y*n,T*n,U*n,W*n,v)}this._buildPortals(e,n),this._addParticles(o,l,c)}_buildPortals(t,e){if(this.portals=[],!this.portalsEnabled)return;const n=Math.max(0,Math.floor(D.GAMEPLAY.PORTAL_COUNT||0));if(n>0){this._buildFixedDynamicPortals(n);return}if(Array.isArray(t.portals))for(const i of t.portals)this._createPortalFromDef(i,e);this._validatePortalPlacements()}_createPortalFromDef(t,e){const n=this._resolvePortalPosition(new P(t.a[0]*e,t.a[1]*e,t.a[2]*e),11),i=this._resolvePortalPosition(new P(t.b[0]*e,t.b[1]*e,t.b[2]*e),29),s=t.color||65484;this._addPortalInstance(n,i,s,"NEUTRAL","NEUTRAL")}_buildFixedDynamicPortals(t){D.GAMEPLAY.PLANAR_MODE?this._buildFixedPlanarPortals(t):this._buildFixed3DPortals(t)}_buildFixed3DPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPortalSlots3D();if(!(n.length<2))for(let i=0;i<t;i++){const s=n[i*2%n.length],a=n[(i*2+5)%n.length],o=n[(i*2+7)%n.length],l=this._portalPositionFromSlot(s,i*13+5);let c=this._portalPositionFromSlot(a,i*17+9);l.distanceToSquared(c)<64&&(c=this._portalPositionFromSlot(o,i*23+3)),this._addPortalInstance(l,c,e[i%e.length],"NEUTRAL","NEUTRAL")}}_buildFixedPlanarPortals(t){const e=[65484,16711884,16776960,52479,16746564,6750020],n=this._getMapPlanarAnchors(),i=this.getPortalLevelsFallback();if(n.length===0||i.length<2)return;const s=i.length-1;for(let a=0;a<t;a++){const o=n[a%n.length],l=(a+Math.floor(a/Math.max(1,n.length)))%s,c=i[l],h=i[l+1],u=this._resolvePlanarElevatorPair(o[0],o[1],c,h,a*29+7);u&&this._addPortalInstance(u.low,u.high,e[a%e.length],"UP","DOWN")}}_getMapPortalSlots3D(){const t={standard:[[-.75,.18,-.75],[.75,.18,.75],[.75,.35,-.75],[-.75,.35,.75],[-.2,.52,-.82],[.2,.52,.82],[-.82,.62,.2],[.82,.62,-.2],[0,.26,-.35],[0,.58,.35],[-.45,.72,0],[.45,.72,0]],empty:[[-.78,.2,-.78],[.78,.2,.78],[.78,.2,-.78],[-.78,.2,.78],[0,.45,-.82],[0,.45,.82],[-.82,.45,0],[.82,.45,0],[-.35,.72,-.35],[.35,.72,.35],[.35,.72,-.35],[-.35,.72,.35]],maze:[[-.8,.22,-.6],[.8,.22,.6],[-.8,.22,.6],[.8,.22,-.6],[-.25,.5,-.8],[.25,.5,.8],[-.6,.62,0],[.6,.62,0],[0,.35,-.2],[0,.35,.2],[-.4,.75,-.35],[.4,.75,.35]],complex:[[-.82,.2,-.82],[.82,.2,.82],[.82,.2,-.82],[-.82,.2,.82],[-.5,.42,-.1],[.5,.42,.1],[-.1,.55,.5],[.1,.55,-.5],[0,.72,-.72],[0,.72,.72],[-.72,.72,0],[.72,.72,0]],pyramid:[[-.78,.18,-.78],[.78,.18,.78],[.78,.18,-.78],[-.78,.18,.78],[-.45,.38,-.45],[.45,.38,.45],[0,.58,-.78],[0,.58,.78],[-.78,.58,0],[.78,.58,0],[-.2,.78,0],[.2,.78,0]]};return t[this.currentMapKey]||t.standard}_getMapPlanarAnchors(){const t={standard:[[-.7,-.7],[.7,-.7],[.7,.7],[-.7,.7],[0,-.45],[0,.45],[-.45,0],[.45,0]],empty:[[-.75,-.75],[.75,-.75],[.75,.75],[-.75,.75],[0,-.55],[0,.55],[-.55,0],[.55,0]],maze:[[-.78,-.62],[.78,-.62],[.78,.62],[-.78,.62],[0,-.72],[0,.72],[-.52,0],[.52,0]],complex:[[-.82,-.82],[.82,-.82],[.82,.82],[-.82,.82],[-.55,0],[.55,0],[0,-.55],[0,.55]],pyramid:[[-.78,-.78],[.78,-.78],[.78,.78],[-.78,.78],[-.48,0],[.48,0],[0,-.48],[0,.48]]};return t[this.currentMapKey]||t.standard}_portalPositionFromSlot(t,e){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,s=(t[0]+1)*.5,a=t[1],o=(t[2]+1)*.5,l=new P(n.minX+i+s*(n.maxX-n.minX-2*i),n.minY+i+a*(n.maxY-n.minY-2*i),n.minZ+i+o*(n.maxZ-n.minZ-2*i));return this._resolvePortalPosition(l,e)}_portalPositionFromXZLevel(t,e,n,i){const s=this.bounds,a=D.PORTAL.RING_SIZE+2.5,o=new P(s.minX+a+(t+1)*.5*(s.maxX-s.minX-2*a),n,s.minZ+a+(e+1)*.5*(s.maxZ-s.minZ-2*a));return this._resolvePortalPosition(o,i)}_resolvePlanarElevatorPair(t,e,n,i,s=0){const a=Math.min(n,i),o=Math.max(n,i),l=this.bounds,c=D.PORTAL.RING_SIZE+2.5,h=D.PORTAL.RADIUS*.75,u=l.minX+c+(t+1)*.5*(l.maxX-l.minX-2*c),d=l.minZ+c+(e+1)*.5*(l.maxZ-l.minZ-2*c),m=new P,g=new P;for(let v=0;v<28;v++){const M=(s+v*41)%360*Math.PI/180,R=v===0?0:2.2+(v-1)*1.2,b=Math.max(l.minX+c,Math.min(l.maxX-c,u+Math.cos(M)*R)),w=Math.max(l.minZ+c,Math.min(l.maxZ-c,d+Math.sin(M)*R));if(m.set(b,a,w),g.set(b,o,w),!this.checkCollision(m,h)&&!this.checkCollision(g,h))return{low:m.clone(),high:g.clone()}}const _=this._resolvePortalPosition(new P(u,a,d),s),f=new P(_.x,o,_.z);if(!this.checkCollision(f,h))return{low:_,high:f};const p=this._resolvePortalPosition(new P(u,o,d),s+17),S=new P(p.x,a,p.z);return this.checkCollision(S,h)?null:{low:S,high:p}}_resolvePortalPosition(t,e=0){const n=this.bounds,i=D.PORTAL.RING_SIZE+2.5,s=D.PORTAL.RADIUS*.75;if(!this.checkCollision(t,s))return t;const a=new P;for(let o=0;o<20;o++){const l=(e+o*37)%360*Math.PI/180,c=2.5+o*1.3,h=(o%5-2)*1.1;if(a.set(t.x+Math.cos(l)*c,t.y+h,t.z+Math.sin(l)*c),a.x=Math.max(n.minX+i,Math.min(n.maxX-i,a.x)),a.y=Math.max(n.minY+i,Math.min(n.maxY-i,a.y)),a.z=Math.max(n.minZ+i,Math.min(n.maxZ-i,a.z)),!this.checkCollision(a,s))return a.clone()}return t}_addPortalInstance(t,e,n,i="NEUTRAL",s="NEUTRAL"){const a=this._createPortalMesh(t,n,i),o=this._createPortalMesh(e,n,s);this.portals.push({posA:t,posB:e,meshA:a,meshB:o,color:n,cooldowns:new Map})}_createPortalMesh(t,e,n="NEUTRAL"){const i=new Cn,s=D.PORTAL.RING_SIZE;let a=e;n==="UP"&&(a=65280),n==="DOWN"&&(a=16711680);const o=new $s(s,.3,16,32),l=new Le({color:a,emissive:a,emissiveIntensity:1.2,roughness:.2,metalness:.8}),c=new qt(o,l);i.add(c);const h=new Sa(s*.85,32),u=new Qe({color:a,transparent:!0,opacity:.15,side:Ze}),d=new qt(h,u);i.add(d);const m=new $s(s*.6,.15,12,24),g=new Le({color:16777215,emissive:a,emissiveIntensity:.5,transparent:!0,opacity:.6}),_=new qt(m,g);if(i.add(_),n!=="NEUTRAL"){const f=new _n(.8,2.5,8),p=new Qe({color:a,transparent:!0,opacity:.8}),S=new qt(f,p);n==="UP"?S.position.y=0:n==="DOWN"&&(S.rotation.x=Math.PI,S.position.y=0),i.add(S),i.userData.arrow=S,i.userData.direction=n}return i.position.copy(t),this.renderer.addToScene(i),i}toggleBeams(){}checkPortal(t,e,n){if(!this.portalsEnabled)return null;const i=D.PORTAL.RADIUS,s=(i+e)*(i+e);for(const a of this.portals){if(a.cooldowns.has(n)&&a.cooldowns.get(n)>0)continue;const o=t.distanceToSquared(a.posA),l=t.distanceToSquared(a.posB);if(o<s){const c=a.posA.distanceTo(a.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return a.cooldowns.set(n,h),{target:a.posB,portal:a}}if(l<s){const c=a.posA.distanceTo(a.posB),h=Math.max(D.PORTAL.COOLDOWN,c/80);return a.cooldowns.set(n,h),{target:a.posA,portal:a}}}return null}_createCheckerTexture(t,e){const s=document.createElement("canvas");s.width=128,s.height=128;const a=s.getContext("2d"),o=`#${t.toString(16).padStart(6,"0")}`,l=`#${e.toString(16).padStart(6,"0")}`;a.fillStyle=o,a.fillRect(0,0,64,64),a.fillRect(64,64,64,64),a.fillStyle=l,a.fillRect(64,0,64,64),a.fillRect(0,64,64,64);const c=new ag(s);return c.wrapS=$i,c.wrapT=$i,c.magFilter=Ee,c.minFilter=Bs,c}_addWall(t,e,n,i,s,a,o){const l=new en(i,s,a),c=new qt(l,o);c.position.set(t,e,n),c.matrixAutoUpdate=!1,c.updateMatrix(),this.renderer.addToScene(c);const h=new an().setFromObject(c);this.obstacles.push({mesh:c,box:h,isWall:!0})}_addObstacle(t,e,n,i,s,a,o){const l=new en(i,s,a),c=new xg(l),h=new hc({color:4482730,transparent:!0,opacity:.5}),u=new qt(l,o.clone());u.position.set(t,e,n),u.castShadow=!1,u.receiveShadow=!1,u.matrixAutoUpdate=!1,u.updateMatrix(),this.renderer.addToScene(u);const d=new sg(c,h);d.position.copy(u.position),d.matrixAutoUpdate=!1,d.updateMatrix(),this.renderer.addToScene(d);const m=new an().setFromObject(u);this.obstacles.push({mesh:u,box:m,isWall:!1})}_addParticles(t,e,n){const s=new Ae,a=new Float32Array(200*3);for(let l=0;l<200;l++)a[l*3]=(Math.random()-.5)*t,a[l*3+1]=Math.random()*e,a[l*3+2]=(Math.random()-.5)*n;s.setAttribute("position",new Xe(a,3));const o=new uc({color:4491519,size:.15,transparent:!0,opacity:.4,sizeAttenuation:!0,sizeAttenuation:!0});this.particles=new rg(s,o),this.renderer.addToScene(this.particles)}checkCollision(t,e){const n=this.bounds;if(t.x-e<n.minX||t.x+e>n.maxX||t.y-e<n.minY||t.y+e>n.maxY||t.z-e<n.minZ||t.z+e>n.maxZ)return!0;this._tmpSphere.center.copy(t),this._tmpSphere.radius=e;for(const i of this.obstacles)if(i.box.intersectsSphere(this._tmpSphere))return!0;return!1}getRandomPosition(t=5){const e=this.bounds;for(let n=0;n<50;n++){const i=e.minX+t+Math.random()*(e.maxX-e.minX-2*t),s=3+Math.random()*(e.maxY-6),a=e.minZ+t+Math.random()*(e.maxZ-e.minZ-2*t),o=new P(i,s,a);if(!this.checkCollision(o,3))return o}return new P(0,D.PLAYER.START_Y,0)}getRandomPositionOnLevel(t,e=5){const n=this.bounds,i=Math.max(n.minY+3,Math.min(n.maxY-3,t));for(let s=0;s<50;s++){const a=n.minX+e+Math.random()*(n.maxX-n.minX-2*e),o=n.minZ+e+Math.random()*(n.maxZ-n.minZ-2*e),l=new P(a,i,o);if(!this.checkCollision(l,3))return l}return new P(0,i,0)}getPortalLevelsFallback(){const t=this.bounds,e=Math.max(1,t.maxY-t.minY),n=Math.max(2,Math.floor(D.GAMEPLAY.PLANAR_LEVEL_COUNT||5)),i=.18,s=.82,a=[];for(let o=0;o<n;o++){const l=n<=1?.5:o/(n-1),c=i+(s-i)*l;a.push(t.minY+e*c)}return a}getPortalLevels(){const t=[];for(const n of this.portals)for(const i of[n.posA.y,n.posB.y]){let s=!1;for(const a of t)if(Math.abs(a-i)<=.35){s=!0;break}s||t.push(i)}return t.length===0?this.getPortalLevelsFallback():(t.sort((n,i)=>n-i),t)}update(t){this.particles&&(this.particles.rotation.y+=t*.02);const e=D.PORTAL.ROTATION_SPEED;for(const n of this.portals){n.meshA&&(n.meshA.rotation.z+=t*e,n.meshA.rotation.y+=t*e*.3),n.meshB&&(n.meshB.rotation.z-=t*e,n.meshB.rotation.y-=t*e*.3);const i=[];for(const[s,a]of n.cooldowns){const o=a-t;o<=0?i.push(s):n.cooldowns.set(s,o)}for(let s=0;s<i.length;s++)n.cooldowns.delete(i[s])}}_validatePortalPlacements(){if(!this.portals||this.portals.length===0)return;const t=D.GAMEPLAY.PLANAR_MODE?D.PORTAL.MIN_PAIR_DISTANCE_PLANAR:D.PORTAL.MIN_PAIR_DISTANCE,e=t*t;for(let n=this.portals.length-1;n>=0;n--){const i=this.portals[n];i.posA.distanceToSquared(i.posB)<e&&(console.warn(`[Arena] Portal pair ${n} too close together! Removing.`),this.portals.splice(n,1))}}}const $g=new Ui(1,1,1,4),Zg=new P(0,1,0),$e=new ce,Fs=10;class jg{constructor(t,e){this.renderer=t,this.color=e,this.maxSegments=D.TRAIL.MAX_SEGMENTS,this.writeIndex=0,this.segmentCount=0,this._dirty=!1,this.timeSinceUpdate=0,this.hasLastPosition=!1,this.lastX=0,this.lastY=0,this.lastZ=0,this.inGap=!1,this.gapTimer=0,this.width=D.TRAIL.WIDTH,this._tmpDir=new P,this.material=new Le({color:e,emissive:e,emissiveIntensity:.3,roughness:.3,metalness:.6}),this.mesh=new cc($g,this.material,this.maxSegments),this.mesh.instanceMatrix.setUsage(Hl),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,$e.scale.set(0,0,0),$e.updateMatrix();for(let n=0;n<this.maxSegments;n++)this.mesh.setMatrixAt(n,$e.matrix);this.renderer.addToScene(this.mesh),this.segmentsData=new Float32Array(this.maxSegments*7),this.grid=new Map,this.segmentCells=new Int32Array(this.maxSegments),this._tmpCollisionNormal=new P,this._collisionResult={hit:!0,normal:this._tmpCollisionNormal}}setWidth(t){this.width=t}resetWidth(){this.width=D.TRAIL.WIDTH}forceGap(t=.5){this.inGap=!0,this.gapTimer=t,this.hasLastPosition=!1}update(t,e,n){if(this.inGap){this.gapTimer-=t,this.gapTimer<=0&&(this.inGap=!1),this._setLastPosition(e);return}if(this.timeSinceUpdate+=t,this.timeSinceUpdate>=D.TRAIL.UPDATE_INTERVAL){if(this.timeSinceUpdate-=D.TRAIL.UPDATE_INTERVAL,Math.random()<D.TRAIL.GAP_CHANCE){this.inGap=!0,this.gapTimer=D.TRAIL.GAP_DURATION,this._setLastPosition(e);return}this.hasLastPosition&&this._addSegment(this.lastX,this.lastY,this.lastZ,e.x,e.y,e.z),this._setLastPosition(e)}this._dirty&&(this.mesh.count=Math.min(this.segmentCount,this.maxSegments),this.mesh.instanceMatrix.needsUpdate=!0,this._dirty=!1)}_setLastPosition(t){this.hasLastPosition=!0,this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z}_getKey(t,e){const n=Math.floor(t/Fs),i=Math.floor(e/Fs);return(n+1e3)*2e3+(i+1e3)}_addSegment(t,e,n,i,s,a){const o=i-t,l=s-e,c=a-n,h=Math.sqrt(o*o+l*l+c*c);if(h<.01)return;if(this.segmentCount>=this.maxSegments){const p=this.segmentCells[this.writeIndex];if(this.grid.has(p)){const S=this.grid.get(p),v=S.indexOf(this.writeIndex);if(v!==-1){const M=S[S.length-1];S[v]=M,S.pop()}S.length===0&&this.grid.delete(p)}}const u=this.width*.5,d=(t+i)*.5,m=(e+s)*.5,g=(n+a)*.5;$e.position.set(d,m,g),this._tmpDir.set(o/h,l/h,c/h),$e.quaternion.setFromUnitVectors(Zg,this._tmpDir),$e.scale.set(u,h,u),$e.updateMatrix(),this.mesh.setMatrixAt(this.writeIndex,$e.matrix),this._dirty=!0;const _=this.writeIndex*7;this.segmentsData[_]=t,this.segmentsData[_+1]=e,this.segmentsData[_+2]=n,this.segmentsData[_+3]=i,this.segmentsData[_+4]=s,this.segmentsData[_+5]=a,this.segmentsData[_+6]=u;const f=this._getKey(d,g);this.grid.has(f)||this.grid.set(f,[]),this.grid.get(f).push(this.writeIndex),this.segmentCells[this.writeIndex]=f,this.writeIndex=(this.writeIndex+1)%this.maxSegments,this.segmentCount<this.maxSegments&&this.segmentCount++}_checkCollisionInternal(t,e,n,i=null){if(this.segmentCount===0)return!1;const s=Math.floor(t.x/Fs),a=Math.floor(t.z/Fs);for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){const c=s+o,h=a+l,u=(c+1e3)*2e3+(h+1e3),d=this.grid.get(u);if(d)for(let m=0;m<d.length;m++){const g=d[m];if((this.writeIndex-1-g+this.maxSegments)%this.maxSegments<n)continue;const f=g*7,p=this.segmentsData[f+6],S=e+p,v=this.segmentsData[f],M=this.segmentsData[f+3],R=(v<M?v:M)-p,b=(v>M?v:M)+p;if(t.x<R||t.x>b)continue;const w=this.segmentsData[f+2],N=this.segmentsData[f+5],y=(w<N?w:N)-p,T=(w>N?w:N)+p;if(t.z<y||t.z>T)continue;const U=this.segmentsData[f],W=this.segmentsData[f+1],tt=this.segmentsData[f+2],C=this.segmentsData[f+3],B=this.segmentsData[f+4],V=this.segmentsData[f+5],q=C-U,Y=B-W,X=V-tt,j=t.x-U,J=t.y-W,lt=t.z-tt,G=q*q+Y*Y+X*X;let Z=0;G>1e-6&&(Z=(j*q+J*Y+lt*X)/G,Z<0?Z=0:Z>1&&(Z=1));const ct=U+Z*q,dt=W+Z*Y,ft=tt+Z*X,Et=t.x-ct,wt=t.y-dt,xt=t.z-ft,It=Et*Et+wt*wt+xt*xt;if(It<=S*S){if(i){const L=Math.sqrt(It)||.001;i.set(Et/L,wt/L,xt/L)}return!0}}}return!1}checkCollisionFast(t,e,n=20){return this._checkCollisionInternal(t,e,n,null)}checkCollision(t,e,n=20){return this._checkCollisionInternal(t,e,n,this._tmpCollisionNormal)?this._collisionResult:!1}_distanceSqPointToSegment(t,e,n,i,s,a,o,l,c){const h=o-i,u=l-s,d=c-a,m=t-i,g=e-s,_=n-a,f=h*h+u*u+d*d;if(f<=1e-6)return m*m+g*g+_*_;let p=(m*h+g*u+_*d)/f;p<0?p=0:p>1&&(p=1);const S=i+p*h,v=s+p*u,M=a+p*d,R=t-S,b=e-v,w=n-M;return R*R+b*b+w*w}clear(){$e.scale.set(0,0,0),$e.updateMatrix();for(let t=0;t<this.maxSegments;t++)this.mesh.setMatrixAt(t,$e.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.count=0,this.writeIndex=0,this.segmentCount=0,this.hasLastPosition=!1,this.timeSinceUpdate=0,this.inGap=!1,this.grid.clear(),this.segmentCells.fill(0)}dispose(){this.renderer.removeFromScene(this.mesh),this.mesh.dispose(),this.material.dispose()}}const te={};function Jg(){if(te.body)return;te.body=new _n(.35,3.2,8),te.body.rotateX(Math.PI/2),te.cockpit=new Ks(.28,10,10,0,Math.PI*2,0,Math.PI/2),te.nozzle=new Ui(.2,.25,.4,8),te.nozzle.rotateX(Math.PI/2),te.flameInner=new _n(.15,1,8),te.flameInner.rotateX(-Math.PI/2),te.flameMid=new _n(.22,1.4,8),te.flameMid.rotateX(-Math.PI/2),te.flameOuter=new _n(.28,1.8,8),te.flameOuter.rotateX(-Math.PI/2),te.shield=new Ks(1.5,8,8);const r=new zs;r.moveTo(0,0),r.lineTo(-1.8,.6),r.lineTo(-.3,.8),r.lineTo(0,0),te.wingL=new Ki(r,{depth:.06,bevelEnabled:!1});const t=new zs;t.moveTo(0,0),t.lineTo(1.8,.6),t.lineTo(.3,.8),t.lineTo(0,0),te.wingR=new Ki(t,{depth:.06,bevelEnabled:!1});const e=new zs;e.moveTo(0,0),e.lineTo(0,.8),e.lineTo(.4,.1),e.lineTo(0,0),te.fin=new Ki(e,{depth:.04,bevelEnabled:!1})}class pl{constructor(t,e,n,i=!1){this.renderer=t,this.index=e,this.color=n,this.isBot=i,this.alive=!0,this.score=0,this.position=new P,this.velocity=new P(0,0,-1),this.quaternion=new Jn,this.speed=D.PLAYER.SPEED,this.baseSpeed=D.PLAYER.SPEED,this._tmpEuler=new Fn(0,0,0,"YXZ"),this._tmpEuler2=new Fn(0,0,0,"YXZ"),this._tmpQuat=new Jn,this._tmpVec=new P,this._tmpDir=new P,this._tmpAimRight=new P,this._tmpAimUp=new P,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.inventory=[],this.selectedItemIndex=0,this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.invertPitchBase=!1,this.modelScale=D.PLAYER.MODEL_SCALE||1,this.cockpitCamera=!1,this.spawnProtectionTimer=0,this.planarAimOffset=0,this.forcePlanarMode=!1,this.cameraMode=0,this._createModel(),this.trail=new jg(t,n)}_createModel(){Jg(),this.group=new Cn;const t=new Le({color:this.color,emissive:this.color,emissiveIntensity:.2,roughness:.3,metalness:.7}),e=new Le({color:this.color,emissive:this.color,emissiveIntensity:.1,roughness:.4,metalness:.8}),n=new qt(te.body,t);n.castShadow=!1,this.group.add(n);const i=new Le({color:8965375,emissive:2254506,emissiveIntensity:.3,transparent:!0,opacity:.7,roughness:.1,metalness:.9}),s=new qt(te.cockpit,i);s.rotation.x=-Math.PI/2,s.position.set(0,.2,-.7),this.group.add(s),this.firstPersonAnchor=new ce,this.firstPersonAnchor.position.set(0,D.PLAYER.NOSE_CAMERA_LOCAL_Y,D.PLAYER.NOSE_CAMERA_LOCAL_Z),this.group.add(this.firstPersonAnchor);const a=new qt(te.wingL,e);a.position.set(0,-.02,.1),a.castShadow=!1,this.group.add(a);const o=new qt(te.wingR,e);o.position.set(0,-.02,.1),o.castShadow=!1,this.group.add(o);const l=new qt(te.fin,t);l.position.set(-.02,.15,1),l.castShadow=!1,this.group.add(l);const c=new Le({color:3355443,roughness:.6,metalness:.9}),h=new qt(te.nozzle,c);h.position.z=1.5,this.group.add(h),this.flameGroup=new Cn,this.flameGroup.position.z=1.9,this.flames=[];const u=new Qe({color:16777130,transparent:!0,opacity:.9}),d=new qt(te.flameInner,u);this.flameGroup.add(d),this.flames.push(d);const m=new Qe({color:16746496,transparent:!0,opacity:.6}),g=new qt(te.flameMid,m);this.flameGroup.add(g),this.flames.push(g);const _=new Qe({color:16724736,transparent:!0,opacity:.35}),f=new qt(te.flameOuter,_);this.flameGroup.add(f),this.flames.push(f),this.group.add(this.flameGroup);const p=new Qe({color:4491519,transparent:!0,opacity:0,wireframe:!0});this.shieldMesh=new qt(te.shield,p),this.group.add(this.shieldMesh),this.renderer.addToScene(this.group),this._applyModelScale()}spawn(t,e=null){this.position.copy(t),this.alive=!0,this.speed=this.baseSpeed,this.boostTimer=0,this.boostCooldown=0,this.isBoosting=!1,this.activeEffects=[],this.hasShield=!1,this.isGhost=!1,this.invertControls=!1,this.spawnProtectionTimer=D.PLAYER.SPAWN_PROTECTION,this.planarAimOffset=0;const n=D.PLAYER.START_Y,i=Number.isFinite(t==null?void 0:t.y)?t.y:n;if(this.currentPlanarY=this.isPlanarMode()?i:n,this.trail.clear(),this.trail.resetWidth(),this.group.visible=!0,e&&e.lengthSq()>1e-4)this._tmpVec.copy(e).normalize(),this.quaternion.setFromUnitVectors(this._tmpDir.set(0,0,-1),this._tmpVec);else{const s=Math.random()*Math.PI*2;this._tmpEuler.set(0,s,0,"YXZ"),this.quaternion.setFromEuler(this._tmpEuler)}this._updateModel()}update(t,e){if(!this.alive)return;this.spawnProtectionTimer=Math.max(0,this.spawnProtectionTimer-t);const n=this.isPlanarMode();this._updateEffects(t);const i=D.PLAYER.TURN_SPEED*t,s=D.PLAYER.ROLL_SPEED*t;let a=0,o=0,l=0;e&&(a=(e.pitchUp?1:0)-(e.pitchDown?1:0),o=(e.yawLeft?1:0)-(e.yawRight?1:0),l=(e.rollLeft?1:0)-(e.rollRight?1:0),this.invertPitchBase&&(a*=-1),this.invertControls&&(a*=-1,o*=-1),n&&(a=0),e.boost&&this.boostCooldown<=0&&!this.isBoosting&&(this.isBoosting=!0,this.boostTimer=D.PLAYER.BOOST_DURATION)),this._tmpEuler.set(a*i,o*i,l*s,"YXZ"),this._tmpQuat.setFromEuler(this._tmpEuler),this.quaternion.multiply(this._tmpQuat),D.PLAYER.AUTO_ROLL&&l===0?(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.z*=1-D.PLAYER.AUTO_ROLL_SPEED*t,n&&(this._tmpEuler2.x=0),this.quaternion.setFromEuler(this._tmpEuler2)):n&&(this._tmpEuler2.setFromQuaternion(this.quaternion,"YXZ"),this._tmpEuler2.x=0,this.quaternion.setFromEuler(this._tmpEuler2)),this.isBoosting&&(this.boostTimer-=t,this.speed=this.baseSpeed*D.PLAYER.BOOST_MULTIPLIER,this.boostTimer<=0&&(this.isBoosting=!1,this.boostCooldown=D.PLAYER.BOOST_COOLDOWN,this.speed=this.baseSpeed)),this.boostCooldown>0&&(this.boostCooldown-=t),this._tmpVec.set(0,0,-1).applyQuaternion(this.quaternion),this.velocity.copy(this._tmpVec).multiplyScalar(this.speed),n&&(this.velocity.y=0,this.position.y=this.currentPlanarY),this.position.x+=this.velocity.x*t,n||(this.position.y+=this.velocity.y*t),this.position.z+=this.velocity.z*t,this.trail.update(t,this.position,this._tmpVec),this._updateModel()}_updateModel(){this.group.position.copy(this.position),this.group.quaternion.copy(this.quaternion);const t=performance.now()*.001;if(this.flames&&this.flames.length>0){const e=this.isBoosting?3:1,n=Math.sin(t*25)*.15+Math.sin(t*37)*.1,i=(.4+n*.3)*e;this.flames[0].scale.set(1,1,i),this.flames[0].material.opacity=this.isBoosting?1:.7;const s=(.35+n*.2)*e;this.flames[1].scale.set(1,1,s),this.flames[1].material.opacity=this.isBoosting?.8:.45;const a=(.3+n*.15)*e;this.flames[2].scale.set(1,1,a),this.flames[2].material.opacity=this.isBoosting?.6:.2,this.isBoosting?(this.flames[0].material.color.setHex(16777215),this.flames[1].material.color.setHex(16755251),this.flames[2].material.color.setHex(16729088)):(this.flames[0].material.color.setHex(16777130),this.flames[1].material.color.setHex(16746496),this.flames[2].material.color.setHex(16724736))}this.shieldMesh&&(this.shieldMesh.material.opacity=this.hasShield?.25+Math.sin(t*5)*.1:0)}_updateEffects(t){for(let e=this.activeEffects.length-1;e>=0;e--){const n=this.activeEffects[e];n.remaining-=t,n.remaining<=0&&(this._removeEffect(n),this.activeEffects.splice(e,1))}}_applyModelScale(){this.group&&this.group.scale.setScalar(this.modelScale)}setControlOptions(t={}){typeof t.invertPitch=="boolean"&&(this.invertPitchBase=t.invertPitch),typeof t.modelScale=="number"&&(this.modelScale=t.modelScale,this._applyModelScale()),typeof t.cockpitCamera=="boolean"&&(this.cockpitCamera=t.cockpitCamera),typeof t.forcePlanarMode=="boolean"&&(this.forcePlanarMode=t.forcePlanarMode)}applyPowerup(t){const e=D.POWERUP.TYPES[t];if(!e)return;this.activeEffects=this.activeEffects.filter(i=>i.type===t?(this._removeEffect(i),!1):!0);const n={type:t,remaining:e.duration};switch(this.activeEffects.push(n),t){case"SPEED_UP":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED*e.multiplier,this.speed=this.baseSpeed;break;case"THICK":this.trail.setWidth(e.trailWidth);break;case"THIN":this.trail.setWidth(e.trailWidth);break;case"SHIELD":this.hasShield=!0;break;case"GHOST":this.isGhost=!0;break;case"INVERT":this.invertControls=!0;break}}_removeEffect(t){switch(t.type){case"SPEED_UP":case"SLOW_DOWN":this.baseSpeed=D.PLAYER.SPEED,this.speed=this.baseSpeed;break;case"THICK":case"THIN":this.trail.resetWidth();break;case"SHIELD":this.hasShield=!1;break;case"GHOST":this.isGhost=!1;break;case"INVERT":this.invertControls=!1;break}}addToInventory(t){return this.inventory.length<D.POWERUP.MAX_INVENTORY?(this.inventory.push(t),!0):!1}cycleItem(){this.inventory.length>0?this.selectedItemIndex=(this.selectedItemIndex+1)%this.inventory.length:this.selectedItemIndex=0}useItem(){if(this.inventory.length>0&&this.selectedItemIndex<this.inventory.length){const t=this.inventory.splice(this.selectedItemIndex,1)[0];return this.selectedItemIndex>=this.inventory.length&&this.inventory.length>0&&(this.selectedItemIndex=0),this.applyPowerup(t),t}return null}dropItem(){return this.inventory.length>0?this.inventory.pop():null}kill(){this.alive=!1,this.group.visible=!1}isPlanarMode(){return!!(D.GAMEPLAY.PLANAR_MODE||this.forcePlanarMode)}getDirection(t=null){return t?t.set(0,0,-1).applyQuaternion(this.quaternion):new P(0,0,-1).applyQuaternion(this.quaternion)}getFirstPersonCameraAnchor(t=null){const e=t||new P;return this.firstPersonAnchor?(this.firstPersonAnchor.getWorldPosition(e),e):(this.getDirection(this._tmpDir),e.copy(this.position).add(this._tmpDir))}getAimDirection(t=null){const e=t||new P;if(this.getDirection(e).normalize(),!this.isPlanarMode())return e;const n=Math.min(1,Math.max(-1,this.planarAimOffset||0));if(Math.abs(n)<1e-4)return e;this._tmpAimRight.crossVectors(this._tmpDir.set(0,1,0),e),this._tmpAimRight.lengthSq()<1e-6?this._tmpAimRight.set(1,0,0):this._tmpAimRight.normalize(),this._tmpAimUp.crossVectors(e,this._tmpAimRight).normalize();const i=Un.degToRad(D.PROJECTILE.PLANAR_AIM_MAX_ANGLE_DEG)*n,s=Math.cos(i),a=Math.sin(i);return e.multiplyScalar(s).addScaledVector(this._tmpAimUp,a).normalize(),e}dispose(){this.trail.dispose(),this.renderer.removeFromScene(this.group)}}const Qg=1024;function ns(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now()}function xa(){var r;return((r=D==null?void 0:D.DEBUG)==null?void 0:r.PERF)||{}}function xc(){const r=Number(xa().SAMPLE_EVERY);return!Number.isFinite(r)||r<1?1:Math.floor(r)}function yc(){const r=Number(xa().MAX_SAMPLES);return!Number.isFinite(r)||r<8?Qg:Math.floor(r)}function er(){return!!xa().ENABLED}function t_(r){const t=yc();return{name:r,calls:0,sampledCalls:0,totalMs:0,minMs:1/0,maxMs:0,lastMs:0,sampleIndex:0,sampleCount:0,samples:new Float64Array(t)}}function e_(r){const t=new Array(r.sampleCount);if(r.sampleCount===0)return t;const e=r.samples.length;if(r.sampleCount<e){for(let i=0;i<r.sampleCount;i++)t[i]=r.samples[i];return t}let n=r.sampleIndex;for(let i=0;i<r.sampleCount;i++)t[i]=r.samples[n],n++,n>=e&&(n=0);return t}function Vr(r,t){if(!r||r.length===0)return 0;if(r.length===1)return r[0];const e=Math.max(0,Math.min(1,t)),n=Math.floor((r.length-1)*e);return r[n]}function n_(r){const t=e_(r);t.sort((n,i)=>n-i);const e=r.sampledCalls>0?r.totalMs/r.sampledCalls:0;return{calls:r.calls,sampledCalls:r.sampledCalls,avgMs:e,minMs:Number.isFinite(r.minMs)?r.minMs:0,p50Ms:Vr(t,.5),p95Ms:Vr(t,.95),p99Ms:Vr(t,.99),maxMs:r.maxMs,lastMs:r.lastMs}}const tn={startedAtMs:ns(),sections:new Map,counters:new Map};function ya(r){let t=tn.sections.get(r);return t||(t=t_(r),tn.sections.set(r,t)),t}function Mc(r,t){if(!Number.isFinite(t)||t<0)return 0;const e=ya(r);e.sampledCalls+=1,e.totalMs+=t,e.lastMs=t,e.minMs=Math.min(e.minMs,t),e.maxMs=Math.max(e.maxMs,t);const n=e.samples.length;return e.samples[e.sampleIndex]=t,e.sampleIndex=(e.sampleIndex+1)%n,e.sampleCount=Math.min(e.sampleCount+1,n),t}function Ec(r){if(!er())return 0;const t=ya(r);t.calls+=1;const e=xc();return t.calls%e!==0?0:ns()}function Ac(r,t){return t?Mc(r,ns()-t):0}function i_(r,t){if(!er())return 0;const e=ya(r);return e.calls+=1,Mc(r,t)}function s_(r,t=1){if(!er())return;const e=Number.isFinite(t)?t:0,n=tn.counters.get(r)||0;tn.counters.set(r,n+e)}function r_(r={}){const t={};for(const[i,s]of tn.sections.entries())t[i]=n_(s);const e={};for(const[i,s]of tn.counters.entries())e[i]=s;const n={enabled:er(),sampleEvery:xc(),maxSamplesPerSection:yc(),startedAtMs:tn.startedAtMs,uptimeMs:Math.max(0,ns()-tn.startedAtMs),sections:t,counters:e};return r.reset===!0&&Tc(),n}function Tc(){tn.startedAtMs=ns(),tn.sections.clear(),tn.counters.clear()}const a_={perfStart:Ec,perfEnd:Ac,perfRecord:i_,perfCount:s_,perfSnapshot:r_,perfReset:Tc};typeof window<"u"&&(window.__PERF_DEBUG__=a_);const ml=new P(0,1,0),gl="bot.scoreProbe",_l={standard:{caution:0,portalBias:0,aggressionBias:0},empty:{caution:-.12,portalBias:-.08,aggressionBias:.16},maze:{caution:.22,portalBias:.06,aggressionBias:-.1},complex:{caution:.16,portalBias:.08,aggressionBias:-.04},pyramid:{caution:.08,portalBias:.12,aggressionBias:.03}},o_={SPEED_UP:{self:.8,offense:.2,defensiveScale:.5,emergencyScale:.1,combatSelf:.2},SLOW_DOWN:{self:-.8,offense:.9,defensiveScale:.1,emergencyScale:0,combatSelf:-.3},THICK:{self:.9,offense:.1,defensiveScale:.8,emergencyScale:.2,combatSelf:.4},THIN:{self:-.6,offense:.7,defensiveScale:.2,emergencyScale:0,combatSelf:-.2},SHIELD:{self:.5,offense:0,defensiveScale:1.2,emergencyScale:2.5,combatSelf:.8},SLOW_TIME:{self:.7,offense:.35,defensiveScale:.6,emergencyScale:.4,combatSelf:.3},GHOST:{self:.95,offense:.1,defensiveScale:1,emergencyScale:2,combatSelf:.5},INVERT:{self:-.7,offense:.85,defensiveScale:.15,emergencyScale:0,combatSelf:-.4}},Be=Object.freeze({NO_OP:0,YAW_LEFT:1,YAW_RIGHT:2,PITCH_UP:3,PITCH_DOWN:4,BOOST:5,USE_ITEM:6,SHOOT_ITEM:7});function Hr(r){return!!(r&&typeof r.encodeState=="function"&&typeof r.selectAction=="function"&&typeof r.updateTransition=="function"&&typeof r.getActionName=="function"&&typeof r.getActionCount=="function")}function ke(r,t,e,n=0){return{name:r,yaw:t,pitch:e,weight:n,dir:new P,risk:999,wallDist:0,trailDist:0,clearance:0,immediateDanger:!1}}class l_{constructor(t={}){var e,n,i,s,a,o,l,c,h,u,d,m,g,_,f,p,S,v,M,R,b,w;this.recorder=t.recorder||null,this.learningEngine=Hr(t.learning)?t.learning:null,this.botId=t.botId||`bot-${Math.random().toString(36).slice(2,8)}`,this.learningEnabled=!!t.learningEnabled,this.learningTraining=!!t.learningTraining,this.forcePlanarMode=!!t.forcePlanarMode,this._learningReward={survivalPerSec:(n=(e=D.BOT.LEARNING)==null?void 0:e.REWARD)==null?void 0:n.SURVIVAL_PER_SEC,bounceWall:(s=(i=D.BOT.LEARNING)==null?void 0:i.REWARD)==null?void 0:s.BOUNCE_WALL,bounceTrail:(o=(a=D.BOT.LEARNING)==null?void 0:a.REWARD)==null?void 0:o.BOUNCE_TRAIL,kill:(c=(l=D.BOT.LEARNING)==null?void 0:l.REWARD)==null?void 0:c.KILL,death:(u=(h=D.BOT.LEARNING)==null?void 0:h.REWARD)==null?void 0:u.DEATH,roundWin:(m=(d=D.BOT.LEARNING)==null?void 0:d.REWARD)==null?void 0:m.ROUND_WIN,roundLoss:(_=(g=D.BOT.LEARNING)==null?void 0:g.REWARD)==null?void 0:_.ROUND_LOSS,roundDraw:(p=(f=D.BOT.LEARNING)==null?void 0:f.REWARD)==null?void 0:p.ROUND_DRAW,killHumanBonus:(v=(S=D.BOT.LEARNING)==null?void 0:S.REWARD)==null?void 0:v.KILL_HUMAN_BONUS,deathByHuman:(R=(M=D.BOT.LEARNING)==null?void 0:M.REWARD)==null?void 0:R.DEATH_BY_HUMAN,humanEngagementPerSec:(w=(b=D.BOT.LEARNING)==null?void 0:b.REWARD)==null?void 0:w.HUMAN_ENGAGEMENT_PER_SEC},this._learning={lastStateKey:"",lastActionIndex:-1,rewardBuffer:0,roundReward:0,decisionCount:0,updateCount:0},this.currentInput={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1},this.reactionTimer=0,this._profileName="NORMAL",this.profile=null,this._decision={yaw:0,pitch:0,boost:!1,useItem:-1,shootItem:!1,shootItemIndex:-1},this.state={turnCommitTimer:0,committedYaw:0,committedPitch:0,recoveryActive:!1,recoveryTimer:0,recoveryCooldown:0,recoveryYaw:0,recoveryPitch:0,targetPlayer:null,targetRefreshTimer:0,itemUseCooldown:0,itemShootCooldown:0,portalIntentActive:!1,portalIntentTimer:0,portalIntentScore:0,portalEntryDistanceSq:1/0},this.sense={lookAhead:0,forwardRisk:1,bestProbe:null,targetDistanceSq:1/0,targetInFront:!1,immediateDanger:!1,pressure:0,localOpenness:0,mapCaution:0,mapPortalBias:0,mapAggressionBias:0,projectileThreat:!1,projectileEvadeYaw:0,projectileEvadePitch:0,heightBias:0,botRepulsionYaw:0,botRepulsionPitch:0,pursuitActive:!1,pursuitYaw:0,pursuitPitch:0,pursuitAimDot:0,humanAliveCount:0,nearestHumanDistanceSq:1/0,humanThreat:0,humanTargetInFront:!1},this._checkStuckTimer=0,this._stuckScore=0,this._recentBouncePressure=0,this._hasPositionSample=!1,this._lastPos=new P,this._lastCollisionNormal=new P,this._hasCollisionNormal=!1,this._portalEntry=new P,this._portalExit=new P,this._portalTarget=null,this._tmpForward=new P,this._tmpRight=new P,this._tmpUp=new P,this._tmpVec=new P,this._tmpVec2=new P,this._tmpVec3=new P,this._probes=[ke("forward",0,0,0),ke("left",-1,0,.02),ke("right",1,0,.02),ke("leftWide",-1.8,0,.07),ke("rightWide",1.8,0,.07),ke("up",0,.9,.08),ke("down",0,-.9,.08),ke("upLeft",-.7,.7,.1),ke("upRight",.7,.7,.1),ke("downLeft",-.7,-.7,.1),ke("downRight",.7,-.7,.1),ke("backward",3.14,0,.25)],this._setDifficulty(t.difficulty||D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY),this._checkStuckTimer=this.profile.stuckCheckInterval}_setDifficulty(t){const e=D.BOT.DIFFICULTY_PROFILES||{},n=typeof t=="string"?t.toUpperCase():"NORMAL";this._profileName=e[n]?n:"NORMAL";const i={reactionTime:D.BOT.REACTION_TIME,lookAhead:D.BOT.LOOK_AHEAD,aggression:D.BOT.AGGRESSION,errorRate:0,probeSpread:.7,probeStep:2,turnCommitTime:.25,stuckCheckInterval:.4,stuckTriggerTime:1.6,minProgressDistance:.9,minForwardProgress:.45,recoveryDuration:1,recoveryCooldown:1.5,itemUseCooldown:1,itemShootCooldown:.6,targetRefreshInterval:.2,portalInterest:.5,portalSeekDistance:70,portalEntryDotMin:.3,portalIntentThreshold:.2,portalIntentDuration:1,boostChance:.004};this.profile={...i,...e[this._profileName]||{}}}setDifficulty(t){this._setDifficulty(t),this.reactionTimer=0,this.state.turnCommitTimer=0,this.state.recoveryActive=!1}setLearningOptions(t={}){Object.prototype.hasOwnProperty.call(t,"learningEngine")&&(this.learningEngine=Hr(t.learningEngine)?t.learningEngine:this.learningEngine),Object.prototype.hasOwnProperty.call(t,"enabled")&&(this.learningEnabled=!!t.enabled),Object.prototype.hasOwnProperty.call(t,"training")&&(this.learningTraining=!!t.training),Object.prototype.hasOwnProperty.call(t,"forcePlanarMode")&&(this.forcePlanarMode=!!t.forcePlanarMode),this._isLearningActive()||this._clearLearningTransition()}onBounce(t,e=null){const n=t==="TRAIL"?1.3:.9;this._recentBouncePressure=Math.min(4,this._recentBouncePressure+n),e&&(this._lastCollisionNormal.copy(e).normalize(),this._hasCollisionNormal=!0),this._isLearningActive()&&this._addLearningReward(t==="TRAIL"?this._learningReward.bounceTrail:this._learningReward.bounceWall)}onKill(t=null,e="UNKNOWN"){var n;if(this._isLearningActive()&&(this._addLearningReward(this._learningReward.kill),t&&!t.isBot&&this._addLearningReward(this._learningReward.killHumanBonus),(n=this.recorder)!=null&&n.logEvent)){const i=t?`victim=${t.index}`:"victim=-1",s=t&&!t.isBot?1:0;this.recorder.logEvent("LEARN_KILL",Number.isFinite(t==null?void 0:t.index)?t.index:-1,`killer=${this.botId} cause=${e} ${i} human=${s}`)}}onDeath(t="UNKNOWN",e=null){this._isLearningActive()&&(this._addLearningReward(this._learningReward.death),e&&!e.isBot&&this._addLearningReward(this._learningReward.deathByHuman),this._finalizeLearningTransition(!0,`death:${t}`))}onRoundEnd(t="draw"){this._isLearningActive()&&(t==="win"?this._addLearningReward(this._learningReward.roundWin):t==="loss"?this._addLearningReward(this._learningReward.roundLoss):this._addLearningReward(this._learningReward.roundDraw),this._finalizeLearningTransition(!0,`round:${t}`))}_resetInput(t){t.pitchUp=!1,t.pitchDown=!1,t.yawLeft=!1,t.yawRight=!1,t.rollLeft=!1,t.rollRight=!1,t.boost=!1,t.cameraSwitch=!1,t.dropItem=!1,t.shootItem=!1,t.shootItemIndex=-1,t.nextItem=!1,t.useItem=-1}_resetDecision(){this._decision.yaw=0,this._decision.pitch=0,this._decision.boost=!1,this._decision.useItem=-1,this._decision.shootItem=!1,this._decision.shootItemIndex=-1}_buildBasis(t){this._tmpRight.crossVectors(ml,t),this._tmpRight.lengthSq()<1e-6?this._tmpRight.set(1,0,0):this._tmpRight.normalize(),this._tmpUp.crossVectors(t,this._tmpRight).normalize()}_updateTimers(t){this.reactionTimer-=t,this._checkStuckTimer-=t,this._recentBouncePressure=Math.max(0,this._recentBouncePressure-t*1.35),this.state.turnCommitTimer=Math.max(0,this.state.turnCommitTimer-t),this.state.recoveryCooldown=Math.max(0,this.state.recoveryCooldown-t),this.state.targetRefreshTimer=Math.max(0,this.state.targetRefreshTimer-t),this.state.itemUseCooldown=Math.max(0,this.state.itemUseCooldown-t),this.state.itemShootCooldown=Math.max(0,this.state.itemShootCooldown-t),this.state.portalIntentTimer=Math.max(0,this.state.portalIntentTimer-t),this.state.portalIntentTimer===0&&(this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null)}_updateStuckState(t,e,n){if(!this._hasPositionSample){this._lastPos.copy(t.position),this._hasPositionSample=!0;return}if(this._checkStuckTimer>0)return;this._checkStuckTimer=this.profile.stuckCheckInterval,t.getDirection(this._tmpForward).normalize(),this._tmpVec.subVectors(t.position,this._lastPos);const i=this._tmpVec.length(),s=this._tmpVec.dot(this._tmpForward),a=i<this.profile.minProgressDistance,o=s<this.profile.minForwardProgress;a||o?this._stuckScore+=this.profile.stuckCheckInterval:this._stuckScore=Math.max(0,this._stuckScore-this.profile.stuckCheckInterval*.8),this._stuckScore+=this._recentBouncePressure*.06,this._lastPos.copy(t.position),!this.state.recoveryActive&&this.state.recoveryCooldown<=0&&this._stuckScore>=this.profile.stuckTriggerTime&&this._enterRecovery(t,e,n,"low-progress")}_selectRecoveryManeuver(t,e,n){t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const i=this._isPlanarMode()?[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:0,weight:.12,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.12,biasAwayFromNormal:!0}]:[{yaw:-1,pitch:0,weight:.02},{yaw:1,pitch:0,weight:.02},{yaw:-1,pitch:1,weight:.1},{yaw:1,pitch:1,weight:.1},{yaw:-1,pitch:-1,weight:.1},{yaw:1,pitch:-1,weight:.1},{yaw:-1,pitch:0,weight:.14,biasAwayFromNormal:!0},{yaw:1,pitch:0,weight:.14,biasAwayFromNormal:!0}],s=[3,5.5,8.5,12];let a=null,o=1/0;for(let l=0;l<i.length;l++){const c=i[l];this._tmpVec.copy(this._tmpForward).addScaledVector(this._tmpRight,c.yaw*.95),!this._isPlanarMode()&&c.pitch!==0&&this._tmpVec.addScaledVector(this._tmpUp,c.pitch*.75),this._tmpVec.normalize();let h=c.weight;if(c.biasAwayFromNormal&&this._hasCollisionNormal){const u=this._tmpRight.dot(this._lastCollisionNormal);(c.yaw>0&&u>0||c.yaw<0&&u<0)&&(h+=.65)}for(let u=0;u<s.length;u++){const d=s[u];this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,d);const m=e.checkCollision(this._tmpVec2,1.35),g=this._checkTrailHit(this._tmpVec2,t,n);if(m||g){h+=3.2+u*.8+(g?.9:.5);break}h+=this._estimateEnemyPressure(this._tmpVec2,t,n)*.35}if(this._hasCollisionNormal){const u=this._tmpVec.dot(this._lastCollisionNormal);h-=u*.65}if(!this._isPlanarMode()){const d=t.position.y+this._tmpVec.y*9;(d<e.bounds.minY+7||d>e.bounds.maxY-7)&&(h+=.85)}h<o&&(o=h,a=c)}return a}_enterRecovery(t,e,n,i){this.state.recoveryActive=!0,this.state.recoveryTimer=this.profile.recoveryDuration,this.state.recoveryCooldown=this.profile.recoveryCooldown,this._stuckScore=0;const s=this._selectRecoveryManeuver(t,e,n);this.state.recoveryYaw=(s==null?void 0:s.yaw)||(Math.random()>.5?1:-1),this.state.recoveryPitch=this._isPlanarMode()?0:(s==null?void 0:s.pitch)||0,this._isPlanarMode()||(t.position.y<e.bounds.minY+8?this.state.recoveryPitch=1:t.position.y>e.bounds.maxY-8&&(this.state.recoveryPitch=-1)),this.recorder&&this.recorder.logEvent("STUCK",t.index,`reason=${i} yaw=${this.state.recoveryYaw} pitch=${this.state.recoveryPitch}`)}_shouldBoostRecovery(t,e,n){if(this._recentBouncePressure>1.2||this.sense.forwardRisk>.62)return!1;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.copy(this._tmpForward),this._tmpVec.addScaledVector(this._tmpRight,this.state.recoveryYaw*.22),this._isPlanarMode()||this._tmpVec.addScaledVector(this._tmpUp,this.state.recoveryPitch*.2),this._tmpVec.normalize();const i=[3,5,7];for(let s=0;s<i.length;s++)if(this._tmpVec2.copy(t.position).addScaledVector(this._tmpVec,i[s]),e.checkCollision(this._tmpVec2,1.35)||this._checkTrailHit(this._tmpVec2,t,n))return!1;return!0}_updateRecovery(t,e,n,i){return this.state.recoveryTimer-=t,this.state.recoveryTimer<=0?(this.state.recoveryActive=!1,this.state.recoveryYaw=0,this.state.recoveryPitch=0,!1):(this._resetInput(this.currentInput),this.currentInput.boost=this._shouldBoostRecovery(e,n,i),this.state.recoveryYaw>0?this.currentInput.yawRight=!0:this.state.recoveryYaw<0&&(this.currentInput.yawLeft=!0),this._isPlanarMode()||(this.state.recoveryPitch>0?this.currentInput.pitchUp=!0:this.state.recoveryPitch<0&&(this.currentInput.pitchDown=!0)),!0)}_computeDynamicLookAhead(t){const e=this.profile.lookAhead,n=t.baseSpeed>0?t.speed/t.baseSpeed:1;let i=e*(1+(n-1)*.75);return t.isBoosting&&(i*=1.2),Math.max(8,i)}_mapBehavior(t){const e=t.currentMapKey||"standard";return _l[e]||_l.standard}_composeProbeDirection(t,e,n,i){const s=i.yaw*this.profile.probeSpread,a=i.pitch*this.profile.probeSpread;i.dir.copy(t),s!==0&&i.dir.addScaledVector(e,s),!this._isPlanarMode()&&a!==0&&i.dir.addScaledVector(n,a),i.dir.normalize()}_checkTrailHit(t,e,n){const i=this.state.recoveryActive?6:this._recentBouncePressure>1.4?8:12;for(let s=0;s<n.length;s++){const a=n[s];if(!a||!a.alive)continue;const o=a===e?i:0;if(a.trail.checkCollisionFast){if(a.trail.checkCollisionFast(t,1.35,o))return!0}else{const l=a.trail.checkCollision(t,1.35,o);if(l&&l.hit)return!0}}return!1}_scoreProbe(t,e,n,i,s){const a=Ec(gl);try{const o=this.profile.probeStep;let l=s;const c=Math.abs(i.yaw);c>2.5?l=s*.4:c>1.2&&(l=s*.7);let h=l,u=l,d=!1;for(let S=o;S<=l;S+=o){if(this._tmpVec.copy(t.position).addScaledVector(i.dir,S),e.checkCollision(this._tmpVec,1.35)){h=S,S<=o*1.5&&(d=!0);break}if(this._checkTrailHit(this._tmpVec,t,n)){u=S,S<=o*1.5&&(d=!0);break}}const m=t.baseSpeed>0?t.speed/t.baseSpeed:1,g=Math.max(0,m-1)*.3,_=1-Math.min(1,h/l),f=1-Math.min(1,u/l);let p=_*(1.1+this.sense.mapCaution+g)+f*(1.45+this.sense.mapCaution*.5+g*.7);p+=i.weight,d&&(p+=2.2),this.profile.errorRate>0&&Math.random()<this.profile.errorRate&&(p+=(Math.random()-.2)*.65),i.wallDist=h,i.trailDist=u,i.clearance=Math.min(h,u),i.immediateDanger=d,i.risk=p}finally{Ac(gl,a)}}_selectTarget(t,e){let n=null,i=-1/0,s=1/0;t.getDirection(this._tmpForward).normalize();for(let a=0;a<e.length;a++){const o=e[a];if(!o||o===t||!o.alive)continue;this._tmpVec.subVectors(o.position,t.position);const l=this._tmpVec.lengthSq();if(l<1e-4)continue;const c=1/Math.max(4,Math.sqrt(l)),h=this._tmpVec.normalize().dot(this._tmpForward);o.getDirection(this._tmpVec2).normalize(),this._tmpVec3.subVectors(t.position,o.position).normalize();const u=this._tmpVec2.dot(this._tmpVec3),d=o.isBot?0:.08,m=c*.9+h*.55+u*.35+d;m>i&&(i=m,n=o,s=l)}this.state.targetPlayer=n,this.sense.targetDistanceSq=n?s:1/0,n?(this._tmpVec.subVectors(n.position,t.position).normalize(),this.sense.targetInFront=this._tmpVec.dot(this._tmpForward)>.52):this.sense.targetInFront=!1}_estimateEnemyPressure(t,e,n){let i=1/0;for(let a=0;a<n.length;a++){const o=n[a];if(!o||o===e||!o.alive)continue;const l=o.position.distanceToSquared(t);l<i&&(i=l)}if(!isFinite(i))return 0;const s=Math.sqrt(i);return s>=40?0:1-s/40}_estimatePointRisk(t,e,n,i){const s=n.checkCollision(t,1.6)?1:0,a=this._checkTrailHit(t,e,i)?1:0,o=this._estimateEnemyPressure(t,e,i);return s*1.2+a*1.5+o*.6}_estimateExitSafety(t,e,n,i){const a=[{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}];let o=0;for(let l=0;l<a.length;l++)this._tmpVec3.set(t.x+a[l].x*5,t.y+a[l].y*5,t.z+a[l].z*5),(e.checkCollision(this._tmpVec3,1.6)||this._checkTrailHit(this._tmpVec3,n,i))&&o++;return o/a.length}_senseProjectiles(t,e){this.sense.projectileThreat=!1,this.sense.projectileEvadeYaw=0,this.sense.projectileEvadePitch=0;const n=this.profile.projectileAwareness||0;if(n<=0||!e||e.length===0)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let i=1/0,s=0,a=0;for(let o=0;o<e.length;o++){const l=e[o];if(l.owner===t)continue;this._tmpVec.subVectors(l.position,t.position);const c=this._tmpVec.length();if(c>25||c<.5||(this._tmpVec.normalize(),this._tmpVec2.copy(l.velocity).normalize(),-this._tmpVec2.dot(this._tmpVec)<.4))continue;const u=l.velocity.length(),d=u>1?c/u:999;if(!(d>.8)&&!(Math.random()>n)&&d<i&&(i=d,this._tmpVec3.crossVectors(this._tmpVec2,ml).normalize(),s=this._tmpRight.dot(this._tmpVec3)>0?-1:1,!this._isPlanarMode())){const g=this._tmpVec.y;a=g>.2?-1:g<-.2?1:0}}i<1/0&&(this.sense.projectileThreat=!0,this.sense.projectileEvadeYaw=s,this.sense.projectileEvadePitch=a)}_senseHeight(t,e){if(this.sense.heightBias=0,this._isPlanarMode())return;const n=this.profile.heightBias||0;if(n<=0)return;const i=e.bounds,s=(i.minY+i.maxY)*.5,a=t.position.y-s,o=(i.maxY-i.minY)*.5;if(o<=0)return;const l=a/o;this.sense.heightBias=-l*n}_senseBotSpacing(t,e){this.sense.botRepulsionYaw=0,this.sense.botRepulsionPitch=0;const n=this.profile.spacingWeight||0;if(n<=0)return;const i=12;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);let s=0,a=0;for(let o=0;o<e.length;o++){const l=e[o];if(!l||l===t||!l.alive||!l.isBot)continue;this._tmpVec.subVectors(t.position,l.position);const c=this._tmpVec.length();if(c>=i||c<.1)continue;const h=n*(1-c/i);this._tmpVec.normalize(),s+=this._tmpRight.dot(this._tmpVec)*h,a+=this._tmpUp.dot(this._tmpVec)*h}Math.abs(s)>.05&&(this.sense.botRepulsionYaw=s>0?1:-1),!this._isPlanarMode()&&Math.abs(a)>.05&&(this.sense.botRepulsionPitch=a>0?1:-1)}_senseHumanPlayers(t,e){if(this.sense.humanAliveCount=0,this.sense.nearestHumanDistanceSq=1/0,this.sense.humanThreat=0,this.sense.humanTargetInFront=!1,!e||e.length===0)return;let n=null,i=1/0,s=0,a=0;for(let o=0;o<e.length;o++){const l=e[o];if(!l||l===t||!l.alive||l.isBot)continue;this.sense.humanAliveCount++;const c=l.position.distanceToSquared(t.position);c<i&&(i=c,n=l),l.getDirection(this._tmpVec2).normalize(),this._tmpVec3.subVectors(t.position,l.position);const h=this._tmpVec3.lengthSq();if(h>1e-4){this._tmpVec3.multiplyScalar(1/Math.sqrt(h));const u=this._tmpVec2.dot(this._tmpVec3);s+=Math.max(0,u),a++}}this.sense.nearestHumanDistanceSq=i,a>0&&(this.sense.humanThreat=s/a),n&&(this._tmpVec.subVectors(n.position,t.position).normalize(),this.sense.humanTargetInFront=this._tmpVec.dot(this._tmpForward)>.45)}_addPlayerDataReward(t){if(!this._isLearningActive()||!Number.isFinite(t)||t<=0||this.sense.humanAliveCount<=0||!Number.isFinite(this.sense.nearestHumanDistanceSq))return;const e=this._learningReward.humanEngagementPerSec||0;if(e===0)return;const n=Math.sqrt(Math.max(0,this.sense.nearestHumanDistanceSq)),i=Math.max(0,1-n/50),s=this.sense.humanTargetInFront?1.1:.85,a=1-Math.min(.8,Math.max(0,this.sense.humanThreat)*.35),o=e*i*s*a*t;this._addLearningReward(o)}_evaluatePursuit(t){if(this.sense.pursuitActive=!1,this.sense.pursuitYaw=0,this.sense.pursuitPitch=0,this.sense.pursuitAimDot=0,!this.profile.pursuitEnabled||this.sense.immediateDanger||this.sense.forwardRisk>.3)return;const e=this.state.targetPlayer;if(!e||!e.alive)return;const n=this.profile.pursuitRadius||35;if(this.sense.targetDistanceSq>n*n||!this.sense.targetInFront)return;t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward),this._tmpVec.subVectors(e.position,t.position).normalize();const i=this._tmpVec.dot(this._tmpForward),s=this._tmpRight.dot(this._tmpVec),a=this._tmpUp.dot(this._tmpVec);this.sense.pursuitActive=!0,this.sense.pursuitAimDot=i,this.sense.pursuitYaw=Math.abs(s)>.05?s>0?1:-1:0,this._isPlanarMode()||(this.sense.pursuitPitch=Math.abs(a)>.08?a>0?1:-1:0)}_evaluatePortalIntent(t,e,n){if(!e.portalsEnabled||!e.portals||e.portals.length===0){this.state.portalIntentActive=!1,this._portalTarget=null;return}if(this.profile.portalInterest<=0){this.state.portalIntentActive=!1,this._portalTarget=null;return}const i=this.profile.portalSeekDistance,s=i*i;t.getDirection(this._tmpForward).normalize();let a=-1/0,o=null,l=null,c=1/0;for(let h=0;h<e.portals.length;h++){const u=e.portals[h],d=[{entry:u.posA,exit:u.posB},{entry:u.posB,exit:u.posA}];for(let m=0;m<d.length;m++){const{entry:g,exit:_}=d[m],f=t.position.distanceToSquared(g);if(f>s||(this._tmpVec.subVectors(g,t.position).normalize(),this._tmpVec.dot(this._tmpForward)<this.profile.portalEntryDotMin))continue;const S=this._estimatePointRisk(g,t,e,n),v=this._estimateExitSafety(_,e,t,n),M=v;if(v>=.75)continue;const R=this.sense.forwardRisk-M,b=f/s,w=R*(.8+this.profile.portalInterest)+this.sense.mapPortalBias*.5-S*.6-b*.4;w>a&&(a=w,o=g,l=_,c=f)}}if(o&&a>=this.profile.portalIntentThreshold){this.state.portalIntentActive=!0,this.state.portalIntentTimer=this.profile.portalIntentDuration,this.state.portalIntentScore=a,this.state.portalEntryDistanceSq=c,this._portalEntry.copy(o),this._portalExit.copy(l),this._portalTarget=this._portalEntry;return}this.state.portalIntentActive=!1,this.state.portalIntentScore=0,this._portalTarget=null}_senseEnvironment(t,e,n,i){const s=this._mapBehavior(e);this.sense.mapCaution=s.caution,this.sense.mapPortalBias=s.portalBias,this.sense.mapAggressionBias=s.aggressionBias,this.sense.lookAhead=this._computeDynamicLookAhead(t),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const a=this.profile.probeCount||this._probes.length;let o=null,l=1/0,c=null,h=0,u=0;for(let g=0;g<this._probes.length&&!(g>=a);g++){const _=this._probes[g],f=Math.abs(_.pitch)>.001;this._isPlanarMode()&&f||(this._composeProbeDirection(this._tmpForward,this._tmpRight,this._tmpUp,_),this._scoreProbe(t,e,n,_,this.sense.lookAhead),h+=_.clearance,u++,_.name==="forward"&&(c=_),_.risk<l&&(l=_.risk,o=_))}this.sense.bestProbe=o,this.sense.forwardRisk=c?c.risk:1,this.sense.immediateDanger=!!(c&&c.immediateDanger),this.sense.localOpenness=u>0?h/u:this.sense.lookAhead*.4;const d=this._estimateEnemyPressure(t.position,t,n),m=1-Math.min(1,this.sense.localOpenness/this.sense.lookAhead);this.sense.pressure=Math.min(1.6,d*.8+m*.9+this._recentBouncePressure*.2),(this.state.targetRefreshTimer<=0||!this.state.targetPlayer||!this.state.targetPlayer.alive)&&(this._selectTarget(t,n),this.state.targetRefreshTimer=this.profile.targetRefreshInterval),this._senseProjectiles(t,i),this._evaluatePursuit(t),this._senseHeight(t,e),this._senseBotSpacing(t,n),this._senseHumanPlayers(t,n),this._evaluatePortalIntent(t,e,n)}_applyPortalSteering(t){if(!this.state.portalIntentActive||!this._portalTarget)return!1;this._tmpVec.subVectors(this._portalTarget,t.position);const e=this._tmpVec.lengthSq();if(e<9)return this.state.portalIntentActive=!1,this._portalTarget=null,!1;this._tmpVec.normalize(),t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(this._tmpVec),i=this._tmpUp.dot(this._tmpVec);return this._decision.yaw=Math.abs(n)>.08?n>0?1:-1:0,this._isPlanarMode()||(this._decision.pitch=Math.abs(i)>.08?i>0?1:-1:0),e<196&&this.sense.forwardRisk<.75&&(this._decision.boost=!0),!0}_decideSteering(t){const e=this.sense.bestProbe;if(!e){this._decision.yaw=Math.random()>.5?1:-1,this._decision.pitch=0;return}t.getDirection(this._tmpForward).normalize(),this._buildBasis(this._tmpForward);const n=this._tmpRight.dot(e.dir),i=this._tmpUp.dot(e.dir);let s=Math.abs(n)>.06?n>0?1:-1:0,a=0;!this._isPlanarMode()&&Math.abs(i)>.08&&(a=i>0?1:-1),!this._isPlanarMode()&&a===0&&Math.abs(this.sense.heightBias)>.15&&(a=this.sense.heightBias>0?1:-1),s===0&&this.sense.botRepulsionYaw!==0&&(s=this.sense.botRepulsionYaw),!this._isPlanarMode()&&a===0&&this.sense.botRepulsionPitch!==0&&(a=this.sense.botRepulsionPitch);const o=this.sense.lookAhead>0?this.sense.localOpenness/this.sense.lookAhead:.5,l=this.sense.immediateDanger?.45:this.sense.forwardRisk>.72||o<.55||this._recentBouncePressure>1.2?.65:1,c=Math.max(.08,this.profile.turnCommitTime*l);(this.state.turnCommitTimer<=0||this.sense.immediateDanger)&&(this.state.committedYaw=s,this.state.committedPitch=a,(s!==0||a!==0)&&(this.state.turnCommitTimer=c)),this.state.turnCommitTimer>0&&(s=this.state.committedYaw,a=this.state.committedPitch),this._decision.yaw=s,this._decision.pitch=a;const h=this.profile.aggression+this.sense.mapAggressionBias;!this.sense.immediateDanger&&this.sense.forwardRisk<.45&&Math.random()<this.profile.boostChance*(.8+Math.max(0,h))&&(this._decision.boost=!0),this._profileName==="EASY"&&Math.random()<.08&&(this._decision.yaw=Math.random()>.5?1:-1)}_decideItemUsage(t){if(!t.inventory||t.inventory.length===0)return;let e=-1/0,n=-1,i=-1/0,s=-1;const a=this.sense.pressure,o=Math.max(0,this.profile.aggression+this.sense.mapAggressionBias),l=this.sense.targetInFront?1.1:.5,c=this.sense.immediateDanger?1:this.sense.forwardRisk>.6?.5:0,h=this.sense.targetDistanceSq<100,u=this.profile.itemContextWeight||.5;for(let d=0;d<t.inventory.length;d++){const m=t.inventory[d],g=o_[m]||{self:0,offense:0,defensiveScale:0,emergencyScale:0,combatSelf:0},_=g.self+a*g.defensiveScale+c*(g.emergencyScale||0)*u+(h?(g.combatSelf||0)*u:0),f=g.offense*(.55+o)*l;_>e&&(e=_,n=d),f>i&&(i=f,s=d)}if(n>=0&&e>.72&&this.state.itemUseCooldown<=0){this._decision.useItem=n,this.state.itemUseCooldown=this.profile.itemUseCooldown;return}s>=0&&i>.45&&this.state.itemShootCooldown<=0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=s,this.state.itemShootCooldown=this.profile.itemShootCooldown)}_applyDecisionToInput(){const t=this.currentInput;return this._resetInput(t),this._decision.yaw>0?t.yawRight=!0:this._decision.yaw<0&&(t.yawLeft=!0),this._decision.pitch>0?t.pitchUp=!0:this._decision.pitch<0&&(t.pitchDown=!0),t.boost=this._decision.boost,t.useItem=this._decision.useItem,t.shootItem=this._decision.shootItem,t.shootItemIndex=this._decision.shootItemIndex,t}_isLearningActive(){return!!(this.learningEnabled&&Hr(this.learningEngine)&&this.learningEngine.enabled!==!1)}_isPlanarMode(){return!!(D.GAMEPLAY.PLANAR_MODE||this.forcePlanarMode)}_canTrainLearning(){return!!(this._isLearningActive()&&this.learningTraining)}_addLearningReward(t){this._isLearningActive()&&Number.isFinite(t)&&(this._learning.rewardBuffer+=t,this._learning.roundReward+=t)}_clearLearningTransition(){this._learning.lastStateKey="",this._learning.lastActionIndex=-1,this._learning.rewardBuffer=0}_getLearningStateKey(t,e){return this._isLearningActive()?this.learningEngine.encodeState({player:t,sense:this.sense,arena:e,planarMode:this._isPlanarMode()}):""}_getLearningAllowedActions(t){if(!this._isLearningActive())return null;const e=this.learningEngine.getActionCount(),n=new Array(e).fill(!0);this._isPlanarMode()&&(n[Be.PITCH_UP]=!1,n[Be.PITCH_DOWN]=!1);const s=!!(t.inventory&&t.inventory.length>0);return(!s||this.state.itemUseCooldown>0)&&(n[Be.USE_ITEM]=!1),(!s||this.state.itemShootCooldown>0)&&(n[Be.SHOOT_ITEM]=!1),(this.sense.immediateDanger||this.sense.forwardRisk>.82)&&(n[Be.USE_ITEM]=!1),n}_flushLearningTransition(t){var i;if(!this._isLearningActive()||this._learning.lastActionIndex<0||!this._learning.lastStateKey)return;const e=this._learning.rewardBuffer,n=this.learningEngine.updateTransition({stateKey:this._learning.lastStateKey,actionIndex:this._learning.lastActionIndex,reward:e,nextStateKey:t,terminal:!1,training:this._canTrainLearning()});this._learning.rewardBuffer=0,n!=null&&n.updated&&(this._learning.updateCount++,(i=this.recorder)!=null&&i.recordLearningStep&&this.recorder.recordLearningStep(e,n.tdError,n.epsilon,this.learningEngine.getActionName(this._learning.lastActionIndex)))}_finalizeLearningTransition(t=!0,e=""){var s,a;if(!this._isLearningActive())return;if(this._learning.lastActionIndex<0||!this._learning.lastStateKey){this._learning.rewardBuffer=0;return}const n=this._learning.rewardBuffer,i=this.learningEngine.updateTransition({stateKey:this._learning.lastStateKey,actionIndex:this._learning.lastActionIndex,reward:n,nextStateKey:"",terminal:!!t,training:this._canTrainLearning()});i!=null&&i.updated&&((s=this.recorder)!=null&&s.recordLearningStep)&&this.recorder.recordLearningStep(n,i.tdError,i.epsilon,this.learningEngine.getActionName(this._learning.lastActionIndex)),(a=this.recorder)!=null&&a.logEvent&&this.recorder.logEvent("LEARN_EPISODE_END",-1,`bot=${this.botId} reason=${e||"terminal"} reward=${n.toFixed(3)}`),this._clearLearningTransition()}_applyLearningAction(t,e){if(!this._isLearningActive()||!e)return;const n=this.learningEngine.selectAction(e,{training:this._canTrainLearning(),allowedActions:this._getLearningAllowedActions(t)});switch(this._learning.lastStateKey=e,this._learning.lastActionIndex=n,this._learning.decisionCount++,n){case Be.YAW_LEFT:this._decision.yaw=-1;break;case Be.YAW_RIGHT:this._decision.yaw=1;break;case Be.PITCH_UP:this._isPlanarMode()||(this._decision.pitch=1);break;case Be.PITCH_DOWN:this._isPlanarMode()||(this._decision.pitch=-1);break;case Be.BOOST:this._decision.boost=!0;break;case Be.USE_ITEM:if(t.inventory&&t.inventory.length>0&&this.state.itemUseCooldown<=0){const i=Math.min(t.selectedItemIndex||0,t.inventory.length-1);this._decision.useItem=i,this._decision.shootItem=!1,this._decision.shootItemIndex=-1,this.state.itemUseCooldown=this.profile.itemUseCooldown}break;case Be.SHOOT_ITEM:if(t.inventory&&t.inventory.length>0&&this.state.itemShootCooldown<=0){const i=Math.min(t.selectedItemIndex||0,t.inventory.length-1);this._decision.shootItem=!0,this._decision.shootItemIndex=i,this._decision.useItem=-1,this.state.itemShootCooldown=this.profile.itemShootCooldown}break}}update(t,e,n,i,s){const a=D.BOT.ACTIVE_DIFFICULTY||this._profileName;if(a!==this._profileName&&this._setDifficulty(a),this._isLearningActive()&&this._addLearningReward((this._learningReward.survivalPerSec||0)*t),this._updateTimers(t),this._updateStuckState(e,n,i),this.state.recoveryActive&&this._updateRecovery(t,e,n,i))return this.currentInput;if(this.reactionTimer>0)return this.currentInput;const o=1+(Math.random()*2-1)*this.profile.errorRate*.2;this.reactionTimer=Math.max(.02,this.profile.reactionTime*o),this._resetDecision(),this._senseEnvironment(e,n,i,s),this._addPlayerDataReward(t);const l=this._getLearningStateKey(e,n);if(this._flushLearningTransition(l),this.sense.immediateDanger&&this.state.recoveryCooldown<=0&&this._recentBouncePressure>2.3&&(this._enterRecovery(e,n,i,"collision-pressure"),this._updateRecovery(t,e,n,i)))return this.currentInput;if(this.sense.projectileThreat&&this.sense.forwardRisk<.6)this._decision.yaw=this.sense.projectileEvadeYaw,this._decision.pitch=this.sense.projectileEvadePitch,this._decision.boost=!0;else if(!this._applyPortalSteering(e))if(this.sense.pursuitActive){this._decision.yaw=this.sense.pursuitYaw,this._decision.pitch=this.sense.pursuitPitch,this.sense.targetDistanceSq>400&&(this._decision.boost=!0);const h=this.profile.pursuitAimTolerance||.85;this.sense.pursuitAimDot>h&&e.inventory&&e.inventory.length>0&&(this._decision.shootItem=!0,this._decision.shootItemIndex=0,this.state.itemShootCooldown=this.profile.itemShootCooldown)}else this._decideSteering(e);return this._decideItemUsage(e),this._applyLearningAction(e,l),this._applyDecisionToInput()}}const Pe={pitchUp:!1,pitchDown:!1,yawLeft:!1,yawRight:!1,rollLeft:!1,rollRight:!1,boost:!1,cameraSwitch:!1,dropItem:!1,shootItem:!1,shootItemIndex:-1,nextItem:!1,useItem:-1};function c_(){return Pe.pitchUp=!1,Pe.pitchDown=!1,Pe.yawLeft=!1,Pe.yawRight=!1,Pe.rollLeft=!1,Pe.rollRight=!1,Pe.boost=!1,Pe.cameraSwitch=!1,Pe.dropItem=!1,Pe.shootItem=!1,Pe.shootItemIndex=-1,Pe.nextItem=!1,Pe.useItem=-1,Pe}class h_{constructor(t,e,n,i,s,a,o=null){this.renderer=t,this.arena=e,this.powerupManager=n,this.particles=i,this.audio=s,this.recorder=a,this.learningEngines=this._normalizeLearningEngines(o),this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer=new Map,this.projectiles=[],this._projectileAssets=new Map,this._projectilePools=new Map,this.onPlayerDied=null,this.onRoundEnd=null,this.onPlayerFeedback=null,this._tmpVec=new P,this._tmpVec2=new P,this._tmpDir=new P,this._tmpDir2=new P,this._tmpCamAnchor=new P,this._tmpBoundaryNormal=new P,this._lockOnCache=new Map,this.botDifficulty=D.BOT.ACTIVE_DIFFICULTY||D.BOT.DEFAULT_DIFFICULTY,this.trainingEnabled=!1,this.mortalBots=!1,this.botOnlyRoundEnd=!1,this.dualWorlds=!1,this.worldCount=1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache=new Map}_isLearningEngineLike(t){return!!(t&&typeof t.selectAction=="function"&&typeof t.updateTransition=="function"&&typeof t.getStats=="function")}_normalizeLearningEngines(t){const e={mode3d:null,planar:null};return this._isLearningEngineLike(t)?(e.mode3d=t,e.planar=t,e):(t&&typeof t=="object"&&(this._isLearningEngineLike(t.mode3d)?e.mode3d=t.mode3d:this._isLearningEngineLike(t.mode3D)&&(e.mode3d=t.mode3D),this._isLearningEngineLike(t.planar)?e.planar=t.planar:this._isLearningEngineLike(t.planarMode)&&(e.planar=t.planarMode)),!e.mode3d&&e.planar&&(e.mode3d=e.planar),!e.planar&&e.mode3d&&(e.planar=e.mode3d),e)}_resolveLearningEngine(t=!1){return this.dualWorlds&&this.worldCount>=2?t?this.learningEngines.planar||this.learningEngines.mode3d||null:this.learningEngines.mode3d||this.learningEngines.planar||null:t||D.GAMEPLAY.PLANAR_MODE?this.learningEngines.planar||this.learningEngines.mode3d||null:this.learningEngines.mode3d||this.learningEngines.planar||null}setup(t,e,n={}){var l,c;console.log(`[EntityManager] Setup: Humans=${t}, Bots=${e}`),this.clear();const i=Array.isArray(n.humanConfigs)?n.humanConfigs:[],s=typeof n.modelScale=="number"?n.modelScale:D.PLAYER.MODEL_SCALE||1;this.botDifficulty=n.botDifficulty||D.BOT.ACTIVE_DIFFICULTY||this.botDifficulty;const a=n.training&&typeof n.training=="object"?n.training:{};this.trainingEnabled=!!a.enabled,this.mortalBots=!!a.mortalBots,this.botOnlyRoundEnd=!!a.botVsBotOnly,this.dualWorlds=!!(this.botOnlyRoundEnd&&a.dualWorlds),this.worldCount=this.dualWorlds?2:1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear(),this.humanPlayers=[],this.botByPlayer.clear();const o=[D.COLORS.PLAYER_1,D.COLORS.PLAYER_2];for(let h=0;h<t;h++){const u=new pl(this.renderer,h,o[h],!1);u.setControlOptions({invertPitch:!!((l=i[h])!=null&&l.invertPitch),cockpitCamera:!!((c=i[h])!=null&&c.cockpitCamera),modelScale:s,forcePlanarMode:!1}),u.worldId=0,this.players.push(u),this.humanPlayers.push(u)}for(let h=0;h<e;h++){const u=D.COLORS.BOT_COLORS[h%D.COLORS.BOT_COLORS.length],d=new pl(this.renderer,t+h,u,!0),m=this.dualWorlds?Math.floor(h/2)%this.worldCount:0,g=this.dualWorlds&&m===1,_=this._resolveLearningEngine(g);d.setControlOptions({modelScale:s,invertPitch:!1,forcePlanarMode:g}),d.worldId=m;const f=new l_({difficulty:this.botDifficulty,recorder:this.recorder,learning:_,learningEnabled:this.trainingEnabled,learningTraining:this.trainingEnabled,botId:`bot-w${m}-${t+h}`,forcePlanarMode:g});this.players.push(d),this.bots.push({player:d,ai:f,worldId:m}),this.botByPlayer.set(d,f)}}setBotDifficulty(t){var e;this.botDifficulty=t||this.botDifficulty;for(let n=0;n<this.bots.length;n++){const i=this.bots[n];(e=i==null?void 0:i.ai)!=null&&e.setDifficulty&&i.ai.setDifficulty(this.botDifficulty)}}setTrainingOptions(t={}){var e,n;this.trainingEnabled=!!t.enabled,this.mortalBots=!!t.mortalBots,this.botOnlyRoundEnd=!!t.botVsBotOnly,this.dualWorlds=!!(this.botOnlyRoundEnd&&t.dualWorlds),this.worldCount=this.dualWorlds?2:1,this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear();for(let i=0;i<this.bots.length;i++){const s=this.bots[i],a=this.dualWorlds?Math.floor(i/2)%this.worldCount:0;s!=null&&s.player&&(s.player.worldId=a),s&&(s.worldId=a);const o=this.dualWorlds&&a===1;if((e=s==null?void 0:s.player)!=null&&e.setControlOptions&&s.player.setControlOptions({forcePlanarMode:o}),(n=s==null?void 0:s.ai)!=null&&n.setLearningOptions){const l=this._resolveLearningEngine(o);s.ai.setLearningOptions({learningEngine:l,enabled:this.trainingEnabled,training:this.trainingEnabled,forcePlanarMode:o})}}}_isDualWorldsActive(){return!!(this.dualWorlds&&this.worldCount>=2)}_getWorldIdForPlayer(t){return t&&Number.isInteger(t.worldId)?Math.max(0,Math.min(this.worldCount-1,t.worldId)):0}_areInSameWorld(t,e){return this._isDualWorldsActive()?this._getWorldIdForPlayer(t)===this._getWorldIdForPlayer(e):!0}_buildWorldZones(){var a;const t=(a=this.arena)==null?void 0:a.bounds;if(!t){this._worldZones=[];return}if(!this._isDualWorldsActive()){this._worldZones=[{...t,worldId:0}];return}const e=(t.minX+t.maxX)*.5,n=Math.max(2.5,(t.maxX-t.minX)*.05),i=e-n*.5,s=e+n*.5;this._worldZones=[{worldId:0,minX:t.minX,maxX:i,minY:t.minY,maxY:t.maxY,minZ:t.minZ,maxZ:t.maxZ},{worldId:1,minX:s,maxX:t.maxX,minY:t.minY,maxY:t.maxY,minZ:t.minZ,maxZ:t.maxZ}]}_getWorldBounds(t=0){var n;if(this._worldZones.length===0&&this._buildWorldZones(),this._worldZones.length===0)return((n=this.arena)==null?void 0:n.bounds)||null;if(!this._isDualWorldsActive())return this._worldZones[0];const e=Math.max(0,Math.min(this._worldZones.length-1,t));return this._worldZones[e]||this._worldZones[0]}_resetWorldRoundState(){const t=this._isDualWorldsActive()?this.worldCount:1;this._worldRoundState=[];for(let e=0;e<t;e++)this._worldRoundState.push({resolved:!1,winner:null})}_getPlayersInWorld(t){if(!this._isDualWorldsActive())return this.players;const e=[];for(let n=0;n<this.players.length;n++){const i=this.players[n];this._getWorldIdForPlayer(i)===t&&e.push(i)}return e}_getProjectilesInWorld(t){if(!this._isDualWorldsActive())return this.projectiles;const e=[];for(let n=0;n<this.projectiles.length;n++){const i=this.projectiles[n];(Number.isInteger(i==null?void 0:i.worldId)?i.worldId:0)===t&&e.push(i)}return e}_getArenaViewForWorld(t){var s,a,o,l;if(!this._isDualWorldsActive())return this.arena;let e=this._arenaViewCache.get(t);e||(e={bounds:{minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},currentMapKey:"standard",portalsEnabled:!1,portals:[],checkCollision:(c,h=0)=>this.arena.checkCollision(c,h)||this._isPositionOutOfWorldBounds(c,t,h)},this._arenaViewCache.set(t,e));const n=(s=this.arena)==null?void 0:s.bounds,i=this._getWorldBounds(t);return n&&(e.bounds.minY=n.minY,e.bounds.maxY=n.maxY,e.bounds.minZ=n.minZ,e.bounds.maxZ=n.maxZ),i?(e.bounds.minX=i.minX,e.bounds.maxX=i.maxX):n&&(e.bounds.minX=n.minX,e.bounds.maxX=n.maxX),e.currentMapKey=((a=this.arena)==null?void 0:a.currentMapKey)||"standard",e.portalsEnabled=!!((o=this.arena)!=null&&o.portalsEnabled),e.portals=Array.isArray((l=this.arena)==null?void 0:l.portals)?this.arena.portals:[],e}_getRandomPositionInWorld(t=0,e=12,n=null){const i=this._getWorldBounds(t);if(!i)return this.arena.getRandomPosition(e);const s=i.minX+e,a=i.maxX-e,o=i.minY+e,l=i.maxY-e,c=i.minZ+e,h=i.maxZ-e,u=Math.min(s,a),d=Math.max(s,a),m=Math.min(c,h),g=Math.max(c,h),_=u+Math.random()*(d-u),f=m+Math.random()*(g-m);let p=o+Math.random()*Math.max(1e-4,l-o);return Number.isFinite(n)&&(p=n),new P(_,p,f)}_isPositionOutOfWorldBounds(t,e=0,n=0){if(!this._isDualWorldsActive())return!1;const i=this._getWorldBounds(e);if(!i)return!1;const s=Math.max(0,n);return t.x-s<i.minX||t.x+s>i.maxX}_getWorldBoundaryNormal(t,e=0,n=0){if(!this._isDualWorldsActive())return null;const i=this._getWorldBounds(e);if(!i)return null;const s=Math.max(0,n);return t.x-s<i.minX?this._tmpBoundaryNormal.set(1,0,0):t.x+s>i.maxX?this._tmpBoundaryNormal.set(-1,0,0):null}_constrainPlayerToWorld(t){if(!this._isDualWorldsActive()||!t)return;const e=this._getWorldBounds(this._getWorldIdForPlayer(t));if(!e)return;const n=D.PLAYER.HITBOX_RADIUS+.3;t.position.x=Math.max(e.minX+n,Math.min(e.maxX-n,t.position.x))}_getSpectatorFocusForWorld(t){if(!this._isDualWorldsActive())return null;let e=null;for(let n=0;n<this.players.length;n++){const i=this.players[n];if(this._getWorldIdForPlayer(i)===t&&(e||(e=i),i.alive))return i}return e}spawnAll(){this._roundEnded=!1,this._buildWorldZones(),this._resetWorldRoundState();const e=!!D.GAMEPLAY.PLANAR_MODE?this._getPlanarSpawnLevel():null;for(const n of this.players){const i=this._getWorldIdForPlayer(n),a=!!(n!=null&&n.isPlanarMode&&n.isPlanarMode())?this._getPlanarSpawnLevel():e,o=this._findSpawnPosition(12,12,a,i),l=this._findSafeSpawnDirection(o,i);n.spawn(o,l),n.worldId=i,n.shootCooldown=0,this.recorder&&(this.recorder.markPlayerSpawn(n),this.recorder.logEvent("SPAWN",n.index,`bot=${n.isBot?1:0} world=${i}`))}}_getPlanarSpawnLevel(){var o,l,c;const t=((o=this.arena)==null?void 0:o.bounds)||null,e=t?(t.minY+t.maxY)*.5:D.PLAYER.START_Y;if(!(Array.isArray((l=this.arena)==null?void 0:l.portals)&&this.arena.portals.length>0)||!((c=this.arena)!=null&&c.getPortalLevels))return e;const i=this.arena.getPortalLevels();if(!Array.isArray(i)||i.length===0)return e;let s=e,a=1/0;for(let h=0;h<i.length;h++){const u=i[h];if(!Number.isFinite(u))continue;const d=Math.abs(u-e);d<a&&(a=d,s=u)}return s}_findSpawnPosition(t=12,e=12,n=null,i=0){var o;const s=Number.isFinite(n)&&!!((o=this.arena)!=null&&o.getRandomPositionOnLevel),a=()=>this._isDualWorldsActive()?this._getRandomPositionInWorld(i,e,s?n:null):s?this.arena.getRandomPositionOnLevel(n,e):this.arena.getRandomPosition(e);for(let l=0;l<100;l++){const c=a();let h=!1;for(const u of this.players)if(u.alive&&!(this._isDualWorldsActive()&&this._getWorldIdForPlayer(u)!==i)&&u.position.distanceToSquared(c)<t*t){h=!0;break}if(!h)return c}return a()}_findSafeSpawnDirection(t,e=0){let i=new P(0,0,-1),s=-1;for(let a=0;a<20;a++){const o=Math.PI*2*a/20;this._tmpDir.set(Math.sin(o),0,-Math.cos(o));const l=this._traceFreeDistance(t,this._tmpDir,36,2.2,e);l>s&&(s=l,i.copy(this._tmpDir))}return i}_traceFreeDistance(t,e,n,i,s=0){const a=Math.max(.5,i);let o=0;for(;o<n;)if(o+=a,this._tmpVec.set(t.x+e.x*o,t.y+e.y*o,t.z+e.z*o),this.arena.checkCollision(this._tmpVec,D.PLAYER.HITBOX_RADIUS)||this._isPositionOutOfWorldBounds(this._tmpVec,s,D.PLAYER.HITBOX_RADIUS))return o-a;return n}update(t,e){var l,c,h,u,d,m,g,_;this._lockOnCache.clear(),this._updateProjectiles(t);for(const f of this.players){if(!f.alive)continue;f.shootCooldown=Math.max(0,(f.shootCooldown||0)-t);let p=c_();if(f.isBot){const R=this.botByPlayer.get(f);if(R){const b=this._getWorldIdForPlayer(f),w=this._isDualWorldsActive()?this._getArenaViewForWorld(b):this.arena,N=this._isDualWorldsActive()?this._getPlayersInWorld(b):this.players,y=this._isDualWorldsActive()?this._getProjectilesInWorld(b):this.projectiles;p=R.update(t,f,w,N,y)}}else{const R=this.humanPlayers.length===1&&f.index===0;p=e.getPlayerInput(f.index,{includeSecondaryBindings:R}),p.cameraSwitch&&(this.renderer.cycleCamera(f.index),f.cameraMode=this.renderer.cameraModes[f.index]||0)}if(p.nextItem&&f.cycleItem(),p.dropItem&&f.dropItem(),p.useItem>=0){const R=this._useInventoryItem(f,p.useItem);R.ok?this.recorder&&this.recorder.logEvent("ITEM_USE",f.index,`mode=use type=${R.type}`):f.isBot||this._notifyPlayerFeedback(f,R.reason)}if(p.shootItem){const R=this._shootItemProjectile(f,p.shootItemIndex);!R.ok&&!f.isBot?this._notifyPlayerFeedback(f,R.reason):R.ok&&this.recorder&&this.recorder.logEvent("ITEM_USE",f.index,`mode=shoot type=${R.type}`)}f.update(t,p),this._constrainPlayerToWorld(f);const S=(f.spawnProtectionTimer||0)>0;if(!f.isGhost&&!S){const R=this._getWorldIdForPlayer(f),b=this.arena.checkCollision(f.position,D.PLAYER.HITBOX_RADIUS),w=this._isPositionOutOfWorldBounds(f.position,R,D.PLAYER.HITBOX_RADIUS);if(b||w)if(f.hasShield)f.hasShield=!1,f.getDirection(this._tmpDir).multiplyScalar(2),f.position.sub(this._tmpDir),this._constrainPlayerToWorld(f);else if(f.isBot&&!this.mortalBots){const N=!b&&w?this._getWorldBoundaryNormal(f.position,R,D.PLAYER.HITBOX_RADIUS):null;this._bounceBot(f,N,"WALL")}else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(f.position,f.color),this._killPlayer(f,"WALL");continue}for(const N of this.players){if(!N.alive||!this._areInSameWorld(f,N))continue;const y=N===f?15:0,T=N.trail.checkCollision(f.position,D.PLAYER.HITBOX_RADIUS,y);if(T&&T.hit)if(f.hasShield)f.hasShield=!1;else if(f.isBot&&!this.mortalBots){if(T&&T.hit){this._bounceBot(f,T.normal,"TRAIL");break}}else{this.audio&&this.audio.play("HIT"),this.particles&&this.particles.spawnHit(f.position,f.color);const U=N===f?"TRAIL_SELF":"TRAIL_OTHER",W=N!==f?N:null;this._killPlayer(f,U,W);break}}}if(!f.alive)continue;const v=this._isDualWorldsActive()?null:this.arena.checkPortal(f.position,D.PLAYER.HITBOX_RADIUS,f.index);v&&(f.position.copy(v.target),f.getDirection(this._tmpVec).normalize().multiplyScalar(2),f.position.add(this._tmpVec),f!=null&&f.isPlanarMode&&f.isPlanarMode()&&(f.currentPlanarY=v.target.y),f.trail.forceGap(.5),this._constrainPlayerToWorld(f));const M=this.powerupManager.checkPickup(f.position,D.PLAYER.HITBOX_RADIUS);M&&(f.addToInventory(M),this.audio&&this.audio.play("POWERUP"),this.particles&&this.particles.spawnHit(f.position,65280))}if(this._roundEnded)return;let n=0,i=null;for(const f of this.humanPlayers)f.alive&&(n++,i=f);let s=!1,a=null,o=!1;if(this.humanPlayers.length===1){if(n===0){console.log("[EntityManager] Round End: Singleplayer Died"),s=!0,a=null;for(let f=0;f<this.bots.length;f++){const p=this.bots[f].player;if(p&&p.alive){a=p;break}}}}else if(this.humanPlayers.length>=2)n<=1&&this.humanPlayers.length>1&&(console.log(`[EntityManager] Round End: Multiplayer Survivor. HumansAlive=${n}, TotalHumans=${this.humanPlayers.length}, Winner=P${a?a.index:"None"}`),s=!0,a=i);else if(this.botOnlyRoundEnd)if(this._isDualWorldsActive()){let f=!0;for(let p=0;p<this.worldCount;p++){const S=this._worldRoundState[p];if(!S||S.resolved)continue;let v=0,M=null,R=0;for(let b=0;b<this.bots.length;b++){const w=(l=this.bots[b])==null?void 0:l.player;w&&this._getWorldIdForPlayer(w)===p&&(R++,w.alive&&(v++,M=w))}if(R>0&&v<=1){S.resolved=!0,S.winner=M||null;for(let b=0;b<this.bots.length;b++){const w=this.bots[b];if(!((c=w==null?void 0:w.player)!=null&&c.alive)||!((h=w==null?void 0:w.ai)!=null&&h.onRoundEnd)||this._getWorldIdForPlayer(w.player)!==p)continue;const N=S.winner?w.player===S.winner?"win":"loss":"draw";w.ai.onRoundEnd(N)}}else f=!1}o=!0,f&&(s=!0,a=((u=this._worldRoundState[0])==null?void 0:u.winner)||((d=this._worldRoundState[1])==null?void 0:d.winner)||null)}else{let f=0,p=null;for(let S=0;S<this.bots.length;S++){const v=(m=this.bots[S])==null?void 0:m.player;v!=null&&v.alive&&(f++,p=v)}f<=1&&this.bots.length>0&&(s=!0,a=p)}if(s){if(this._roundEnded=!0,!o)for(let f=0;f<this.bots.length;f++){const p=this.bots[f];if(!((g=p==null?void 0:p.player)!=null&&g.alive)||!((_=p==null?void 0:p.ai)!=null&&_.onRoundEnd))continue;const S=a?p.player===a?"win":"loss":"draw";p.ai.onRoundEnd(S)}this.onRoundEnd&&this.onRoundEnd(a)}}_takeInventoryItem(t,e=-1){if(!t.inventory||t.inventory.length===0)return{ok:!1,reason:"Kein Item verfuegbar",type:null};const n=Number.isInteger(e)&&e>=0?Math.min(e,t.inventory.length-1):Math.min(t.selectedItemIndex||0,t.inventory.length-1),i=t.inventory.splice(n,1)[0];return(t.inventory.length===0||t.selectedItemIndex>=t.inventory.length)&&(t.selectedItemIndex=0),{ok:!0,type:i}}_useInventoryItem(t,e=-1){const n=this._takeInventoryItem(t,e);return!n.ok||!n.type?{ok:!1,reason:"Kein Item zum Nutzen"}:(t.applyPowerup(n.type),{ok:!0,type:n.type})}_shootItemProjectile(t,e=-1){if((t.shootCooldown||0)>0)return{ok:!1,reason:`Schuss bereit in ${t.shootCooldown.toFixed(1)}s`};const n=this._takeInventoryItem(t,e);if(!n.ok||!n.type)return{ok:!1,reason:"Kein Item zum Schiessen",type:null};const i=n.type,s=D.POWERUP.TYPES[i];if(!s)return{ok:!1,reason:"Item ungueltig"};t.getAimDirection(this._tmpDir).normalize(),this._tmpVec.copy(t.position).addScaledVector(this._tmpDir,2.2);const a=D.PROJECTILE.SPEED,o=D.PROJECTILE.RADIUS,l=this._acquireProjectileMesh(i,s.color);return l.position.copy(this._tmpVec),this._tmpVec2.copy(this._tmpVec).add(this._tmpDir),l.lookAt(this._tmpVec2),this.projectiles.push({mesh:l,flame:l.userData.flame||null,poolKey:i,owner:t,worldId:this._getWorldIdForPlayer(t),type:i,position:this._tmpVec.clone(),velocity:this._tmpDir.clone().multiplyScalar(a),radius:o,ttl:D.PROJECTILE.LIFE_TIME,traveled:0,target:this._checkLockOn(t)}),t.shootCooldown=D.PROJECTILE.COOLDOWN,this.audio&&this.audio.play("SHOOT"),{ok:!0,type:i}}_acquireProjectileMesh(t,e){let i=this._getProjectilePool(t).pop();if(!i){const s=this._getProjectileAssets(t,e);i=new Cn;const a=new qt(s.bodyGeo,s.bodyMat);i.add(a);const o=new qt(s.tipGeo,s.tipMat);o.position.z=-.8,i.add(o);for(let c=0;c<4;c++){const h=new qt(s.finGeo,s.finMat);h.position.z=.5;const u=Math.PI/2*c;c%2===0?h.position.x=Math.cos(u)*.2:(h.position.y=Math.sin(u)*.2,h.rotation.z=Math.PI/2),i.add(h)}const l=new qt(s.flameGeo,s.flameMat);l.position.z=.85,i.add(l),i.userData.flame=l}return i.visible=!0,i.userData.flame&&i.userData.flame.scale.set(1,1,1),this.renderer.addToScene(i),i}_getProjectilePool(t){return this._projectilePools.has(t)||this._projectilePools.set(t,[]),this._projectilePools.get(t)}_getProjectileAssets(t,e){if(this._projectileAssets.has(t))return this._projectileAssets.get(t);const n=new Ui(.15,.15,1.2,8);n.rotateX(Math.PI/2);const i=new _n(.15,.4,8);i.rotateX(Math.PI/2);const s=new en(.02,.25,.3),a=new _n(.1,.5,6);a.rotateX(-Math.PI/2);const o=new Le({color:e,emissive:e,emissiveIntensity:.4,roughness:.3,metalness:.6}),l=new Le({color:13421772,emissive:e,emissiveIntensity:.2,roughness:.2,metalness:.8}),c=new Le({color:e,emissive:e,emissiveIntensity:.3,roughness:.4,metalness:.5}),h=new Qe({color:16737792,transparent:!0,opacity:.8}),u={bodyGeo:n,tipGeo:i,finGeo:s,flameGeo:a,bodyMat:o,tipMat:l,finMat:c,flameMat:h};return this._projectileAssets.set(t,u),u}_checkLockOn(t){if(this._lockOnCache.has(t.index))return this._lockOnCache.get(t.index);t.getDirection(this._tmpDir).normalize();const e=D.HOMING.LOCK_ON_ANGLE*Math.PI/180,n=D.HOMING.MAX_LOCK_RANGE,i=n*n;let s=null,a=1/0;for(const o of this.players){if(o===t||!o.alive||!this._areInSameWorld(t,o))continue;this._tmpVec.subVectors(o.position,t.position);const l=this._tmpVec.lengthSq();if(l>i||l<1)continue;this._tmpDir.angleTo(this._tmpVec.normalize())<=e&&l<a&&(s=o,a=l)}return this._lockOnCache.set(t.index,s),s}getLockOnTarget(t){if(this._lockOnCache.has(t))return this._lockOnCache.get(t);const e=this.players[t];return!e||!e.alive?null:this._checkLockOn(e)}_updateProjectiles(t){const e=performance.now()*.001;for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n],s=i.velocity.x*t,a=i.velocity.y*t,o=i.velocity.z*t;i.position.x+=s,i.position.y+=a,i.position.z+=o,i.traveled+=Math.sqrt(s*s+a*a+o*o),i.ttl-=t,i.mesh.position.copy(i.position),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec);const l=this._isDualWorldsActive()?null:this.arena.checkPortal(i.position,i.radius,1e3+n);if(l&&(i.position.copy(l.target),this._tmpVec.copy(i.velocity).normalize().multiplyScalar(1.5),i.position.add(this._tmpVec),i.mesh.position.copy(i.position)),i.target&&i.target.alive){this._tmpVec.subVectors(i.target.position,i.position).normalize(),this._tmpVec2.copy(i.velocity);const h=this._tmpVec2.length();this._tmpVec2.normalize();const u=D.HOMING.TURN_RATE*t;this._tmpVec2.lerp(this._tmpVec,Math.min(u,1)).normalize(),i.velocity.copy(this._tmpVec2.multiplyScalar(h)),this._tmpVec.addVectors(i.position,i.velocity),i.mesh.lookAt(this._tmpVec)}if(i.flame){const h=.7+Math.sin(e*30+n*7)*.3;i.flame.scale.set(1,1,h)}if(i.ttl<=0||i.traveled>=D.PROJECTILE.MAX_DISTANCE||this.arena.checkCollision(i.position,i.radius)||this._isPositionOutOfWorldBounds(i.position,Number.isInteger(i.worldId)?i.worldId:0,i.radius)){this.particles&&this.particles.spawnHit(i.position,16776960),this.audio&&!i.owner.isBot&&this.audio.play("HIT"),this._removeProjectileAt(n);continue}let c=!1;for(const h of this.players){if(!h.alive||h===i.owner||!this._areInSameWorld(i.owner,h))continue;const u=D.PLAYER.HITBOX_RADIUS+i.radius;if(h.position.distanceToSquared(i.position)<=u*u){h.hasShield?(h.hasShield=!1,i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer geblockt")):(h.applyPowerup(i.type),this.particles&&this.particles.spawnExplosion(h.position,i.poolKey?16711680:16776960),this.audio&&this.audio.play("POWERUP"),i.owner.isBot||this._notifyPlayerFeedback(i.owner,"Treffer!")),c=!0;break}}c&&this._removeProjectileAt(n)}}_removeProjectileAt(t){const e=this.projectiles[t];e&&(this._releaseProjectileMesh(e),this.projectiles.splice(t,1))}_releaseProjectileMesh(t){this.renderer.removeFromScene(t.mesh),t.mesh.visible=!1,this._getProjectilePool(t.poolKey||t.type).push(t.mesh)}_notifyPlayerFeedback(t,e){this.onPlayerFeedback&&this.onPlayerFeedback(t,e)}_killPlayer(t,e="UNKNOWN",n=null){if(!(!t||!t.alive)){if(t.kill(),this.particles&&this.particles.spawnExplosion(t.position,t.color),this.audio&&this.audio.play("EXPLOSION"),t.isBot){const i=this.botByPlayer.get(t);i!=null&&i.onDeath&&i.onDeath(e,n||null)}if(n&&n.isBot){const i=this.botByPlayer.get(n);i!=null&&i.onKill&&i.onKill(t,e)}if(this.recorder){this.recorder.markPlayerDeath(t,e);const i=Number.isFinite(n==null?void 0:n.index)?n.index:-1,s=this._getWorldIdForPlayer(t);this.recorder.logEvent("KILL",t.index,`cause=${e} killer=${i} world=${s}`)}this.onPlayerDied&&this.onPlayerDied(t)}}_isBotPositionSafe(t,e){const n=D.PLAYER.HITBOX_RADIUS;if(this.arena.checkCollision(e,n)||this._isPositionOutOfWorldBounds(e,this._getWorldIdForPlayer(t),n))return!1;for(let i=0;i<this.players.length;i++){const s=this.players[i];if(!s||!s.alive||!this._areInSameWorld(t,s))continue;const a=s===t?20:0;if(s.trail.checkCollisionFast){if(s.trail.checkCollisionFast(e,n,a))return!1}else{const o=s.trail.checkCollision(e,n,a);if(o&&o.hit)return!1}}return!0}_clampBotPosition(t,e=0){const n=this.arena.bounds,i=D.PLAYER.HITBOX_RADIUS+.5;if(t.x=Math.max(n.minX+i,Math.min(n.maxX-i,t.x)),t.y=Math.max(n.minY+i,Math.min(n.maxY-i,t.y)),t.z=Math.max(n.minZ+i,Math.min(n.maxZ-i,t.z)),this._isDualWorldsActive()){const s=this._getWorldBounds(e);s&&(t.x=Math.max(s.minX+i,Math.min(s.maxX-i,t.x)))}}_findSafeBouncePosition(t,e,n=null){const i=t.position.x,s=t.position.y,a=t.position.z,o=this._getWorldIdForPlayer(t),l=[2.5,4,6,8],c=[{x:e.x,y:e.y,z:e.z}];n&&(c.push({x:e.x+n.x*.35,y:e.y+n.y*.35,z:e.z+n.z*.35}),c.push({x:e.x-n.x*.22,y:e.y-n.y*.22,z:e.z-n.z*.22}));for(let h=0;h<c.length;h++){let u=c[h].x,d=c[h].y,m=c[h].z;const g=Math.hypot(u,d,m);if(!(g<1e-4)){u/=g,d/=g,m/=g;for(let _=0;_<l.length;_++){const f=l[_];if(this._tmpVec.set(i+u*f,s+d*f,a+m*f),this._clampBotPosition(this._tmpVec,o),this._isBotPositionSafe(t,this._tmpVec))return t.position.copy(this._tmpVec),!0}}}return this._tmpVec.set(i+e.x*2,s+e.y*2,a+e.z*2),this._clampBotPosition(this._tmpVec,o),t.position.copy(this._tmpVec),!1}_bounceBot(t,e=null,n="WALL"){t.getDirection(this._tmpDir);const i=t.position,s=this.arena.bounds;let a=this._tmpVec2;if(e)a.copy(e).normalize();else{const h=i.x-s.minX,u=s.maxX-i.x,d=i.y-s.minY,m=s.maxY-i.y,g=i.z-s.minZ,_=s.maxZ-i.z;let f=h;this._tmpVec2.set(1,0,0),u<f&&(f=u,this._tmpVec2.set(-1,0,0)),d<f&&(f=d,this._tmpVec2.set(0,1,0)),m<f&&(f=m,this._tmpVec2.set(0,-1,0)),g<f&&(f=g,this._tmpVec2.set(0,0,1)),_<f&&(f=_,this._tmpVec2.set(0,0,-1)),a=this._tmpVec2}const o=this._tmpDir.dot(a);this._tmpDir.x-=2*o*a.x,this._tmpDir.y-=2*o*a.y,this._tmpDir.z-=2*o*a.z,this._tmpDir.normalize(),this._tmpDir.addScaledVector(a,.25);const l=n==="TRAIL"?.35:.24;this._tmpDir.x+=(Math.random()-.5)*l,this._tmpDir.y+=(Math.random()-.5)*l,this._tmpDir.z+=(Math.random()-.5)*l,t!=null&&t.isPlanarMode&&t.isPlanarMode()&&(this._tmpDir.y=0),this._tmpDir.normalize(),this._tmpVec.copy(i).add(this._tmpDir),t.group.lookAt(this._tmpVec),t.quaternion.copy(t.group.quaternion),this._findSafeBouncePosition(t,this._tmpDir,a),t.trail.forceGap(.3);const c=this.botByPlayer.get(t);if(c!=null&&c.onBounce&&c.onBounce(n,a),this.recorder){const h=n==="TRAIL"?"BOUNCE_TRAIL":"BOUNCE_WALL";this.recorder.logEvent(h,t.index)}}updateCameras(t){let e=!1;for(const n of this.players)if(!n.isBot&&n.index<this.renderer.cameras.length){const i=n.position,s=n.alive?n.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),a=n.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(n.index,i,s,t,n.quaternion,n.cockpitCamera,n.isBoosting,this.arena,a),n.cameraMode=this.renderer.cameraModes[n.index]||0,e=!0}if(!e&&this.humanPlayers.length===0&&this.renderer.cameras.length>0){let n=null,i=null;if(this._isDualWorldsActive())n=this._getSpectatorFocusForWorld(0),i=this._getSpectatorFocusForWorld(1),!n&&this.players.length>0&&(n=this.players[0]),i||(i=n);else{for(let s=0;s<this.players.length;s++){const a=this.players[s];a!=null&&a.alive&&(n?!i&&a!==n&&(i=a):n=a)}if(!n&&this.players.length>0&&(n=this.players[0]),!i)for(let s=0;s<this.players.length;s++){const a=this.players[s];if(a&&a!==n){i=a;break}}i||(i=n)}if(n){const s=n.position,a=n.alive?n.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),o=n.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(0,s,a,t,n.quaternion,!1,n.isBoosting,this.arena,o)}if(i&&this.renderer.cameras.length>1){const s=i.position,a=i.alive?i.getDirection(this._tmpDir2):this._tmpDir2.set(0,0,-1),o=i.getFirstPersonCameraAnchor(this._tmpCamAnchor);this.renderer.updateCamera(1,s,a,t,i.quaternion,!1,i.isBoosting,this.arena,o)}}}getHumanPlayers(){return this.humanPlayers}clear(){for(let t=this.projectiles.length-1;t>=0;t--)this._removeProjectileAt(t);for(const t of this._projectilePools.values())for(const e of t)this.renderer.removeFromScene(e);this._projectilePools.clear();for(const t of this._projectileAssets.values())t.bodyGeo.dispose(),t.tipGeo.dispose(),t.finGeo.dispose(),t.flameGeo.dispose(),t.bodyMat.dispose(),t.tipMat.dispose(),t.finMat.dispose(),t.flameMat.dispose();this._projectileAssets.clear();for(const t of this.players)t.dispose();this.players=[],this.humanPlayers=[],this.bots=[],this.botByPlayer.clear(),this.projectiles=[],this._lockOnCache.clear(),this._worldZones=[],this._worldRoundState=[],this._arenaViewCache.clear(),this.dualWorlds=!1,this.worldCount=1}}class u_{constructor(t,e){this.renderer=t,this.arena=e,this.items=[],this.spawnTimer=0,this.typeKeys=Object.keys(D.POWERUP.TYPES),this._pickupBoxSize=new P,this._pickupSphere=new xn;const n=D.POWERUP.SIZE;this._sharedGeo=new en(n,n,n),this._sharedWireGeo=new en(n*1.15,n*1.15,n*1.15)}update(t){this.spawnTimer+=t,this.spawnTimer>=D.POWERUP.SPAWN_INTERVAL&&this.items.length<D.POWERUP.MAX_ON_FIELD&&(this.spawnTimer=0,this._spawnRandom());const e=performance.now()*.001,n=D.POWERUP.PICKUP_RADIUS*2;this._pickupBoxSize.set(n,n,n);for(const i of this.items)i.mesh.rotation.y+=D.POWERUP.ROTATION_SPEED*t,i.mesh.position.y=i.baseY+Math.sin(e*D.POWERUP.BOUNCE_SPEED+i.phase)*D.POWERUP.BOUNCE_HEIGHT,i.box.setFromCenterAndSize(i.mesh.position,this._pickupBoxSize)}_spawnRandom(){var u;const t=this.typeKeys[Math.floor(Math.random()*this.typeKeys.length)],e=D.POWERUP.TYPES[t];let n=null;if(D.GAMEPLAY.PLANAR_MODE&&((u=this.arena)!=null&&u.getPortalLevels)){const d=this.arena.getPortalLevels();if(d.length>0){const m=d[Math.floor(Math.random()*d.length)];n=this.arena.getRandomPositionOnLevel(m,8)}}n||(n=this.arena.getRandomPosition(8));const i=this._sharedGeo,s=new Le({color:e.color,emissive:e.color,emissiveIntensity:.5,roughness:.2,metalness:.8,transparent:!0,opacity:.85}),a=new qt(i,s);a.position.copy(n),a.castShadow=!1;const o=this._sharedWireGeo,l=new Qe({color:e.color,wireframe:!0,transparent:!0,opacity:.3}),c=new qt(o,l);a.add(c),this.renderer.addToScene(a);const h=new an().setFromCenterAndSize(n,new P(D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2,D.POWERUP.PICKUP_RADIUS*2));this.items.push({mesh:a,type:t,box:h,baseY:n.y,phase:Math.random()*Math.PI*2})}checkPickup(t,e){this._pickupSphere.center.copy(t),this._pickupSphere.radius=e+D.POWERUP.PICKUP_RADIUS;for(let n=this.items.length-1;n>=0;n--)if(this.items[n].box.intersectsSphere(this._pickupSphere)){const i=this.items.splice(n,1)[0];return this.renderer.removeFromScene(i.mesh),i.mesh.material.dispose(),i.type}return null}clear(){for(const t of this.items)this.renderer.removeFromScene(t.mesh),t.mesh.material.dispose();this.items=[],this.spawnTimer=0}}const pn=1e3,sn=new ce;class d_{constructor(t){this.renderer=t,this.count=0,this.positions=new Float32Array(pn*3),this.velocities=new Float32Array(pn*3),this.lifetimes=new Float32Array(pn),this.maxLifetimes=new Float32Array(pn),this.gravities=new Float32Array(pn),this.scales=new Float32Array(pn),this.colors=new Float32Array(pn*3);const e=new en(.8,.8,.8),n=new Qe({color:16777215,transparent:!0,opacity:1});this.mesh=new cc(e,n,pn),this.mesh.instanceMatrix.setUsage(Hl),this.mesh.count=0,this.renderer.addToScene(this.mesh),this._tmpColor=new Yt}spawn(t,e,n,i=1,s=.5,a=1){this._tmpColor.setHex(n);for(let o=0;o<e;o++){if(this.count>=pn)return;const l=this.count;this.count++,this.positions[l*3]=t.x,this.positions[l*3+1]=t.y,this.positions[l*3+2]=t.z;const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),u=i*(.5+Math.random()*.5);this.velocities[l*3]=u*Math.sin(h)*Math.cos(c),this.velocities[l*3+1]=u*Math.sin(h)*Math.sin(c),this.velocities[l*3+2]=u*Math.cos(h),this.lifetimes[l]=a*(.8+Math.random()*.4),this.maxLifetimes[l]=this.lifetimes[l],this.gravities[l]=-5,this.scales[l]=s*(.5+Math.random()*.5),this.colors[l*3]=this._tmpColor.r,this.colors[l*3+1]=this._tmpColor.g,this.colors[l*3+2]=this._tmpColor.b,this.mesh.setColorAt(l,this._tmpColor),sn.position.set(this.positions[l*3],this.positions[l*3+1],this.positions[l*3+2]),sn.scale.setScalar(this.scales[l]),sn.updateMatrix(),this.mesh.setMatrixAt(l,sn.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawnExplosion(t,e){this.spawn(t,30,e,12,.7,.6)}spawnHit(t,e){this.spawn(t,10,e,6,.4,.3)}update(t){if(this.count===0){this.mesh.count=0;return}let e=0,n=!1;for(let i=0;i<this.count;i++)if(this.lifetimes[i]-=t,this.lifetimes[i]>0){const s=i*3,a=e*3;this.velocities[s+1]+=this.gravities[i]*t,this.positions[s]+=this.velocities[s]*t,this.positions[s+1]+=this.velocities[s+1]*t,this.positions[s+2]+=this.velocities[s+2]*t,i!==e&&(this.positions[a]=this.positions[s],this.positions[a+1]=this.positions[s+1],this.positions[a+2]=this.positions[s+2],this.velocities[a]=this.velocities[s],this.velocities[a+1]=this.velocities[s+1],this.velocities[a+2]=this.velocities[s+2],this.lifetimes[e]=this.lifetimes[i],this.maxLifetimes[e]=this.maxLifetimes[i],this.gravities[e]=this.gravities[i],this.scales[e]=this.scales[i],this.colors[a]=this.colors[s],this.colors[a+1]=this.colors[s+1],this.colors[a+2]=this.colors[s+2],this._tmpColor.setRGB(this.colors[a],this.colors[a+1],this.colors[a+2]),this.mesh.setColorAt(e,this._tmpColor),n=!0),sn.position.set(this.positions[a],this.positions[a+1],this.positions[a+2]),sn.rotation.x+=this.velocities[a+2]*t,sn.rotation.y+=this.velocities[a]*t;const o=this.scales[e]*(this.lifetimes[e]/this.maxLifetimes[e]);sn.scale.setScalar(o),sn.updateMatrix(),this.mesh.setMatrixAt(e,sn.matrix),e++}this.count=e,this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,n&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.count=0,this.mesh.count=0}}class f_{constructor(){this.ctx=null,this.enabled=!0,this.volume=.15,this.buffers={},this.lastPlayTime={},this.cooldowns={SHOOT:100,EXPLOSION:200,HIT:100,POWERUP:500,BOOST:200};const t=()=>this._init();window.addEventListener("keydown",t,{once:!0}),window.addEventListener("mousedown",t,{once:!0}),window.addEventListener("keydown",e=>{e.code==="KeyM"&&(this.enabled=!this.enabled,console.log(`Audio ${this.enabled?"ENABLED":"DISABLED"}`))})}_init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this._generateBuffers())}_generateBuffers(){const e=this.ctx.sampleRate*.3,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;this.buffers.explosion=n}play(t){if(!this.enabled||!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=performance.now(),n=this.lastPlayTime[t]||0,i=this.cooldowns[t]||50;if(!(e-n<i))switch(this.lastPlayTime[t]=e,t){case"SHOOT":this._playShoot();break;case"EXPLOSION":this._playExplosion();break;case"HIT":this._playHit();break;case"POWERUP":this._playPowerup();break;case"BOOST":this._playBoost();break}}_playShoot(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.5,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playExplosion(){if(!this.buffers.explosion)return;const t=this.ctx.createBufferSource();t.buffer=this.buffers.explosion;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1e3,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(100,this.ctx.currentTime+.3);const n=this.ctx.createGain();n.gain.setValueAtTime(this.volume,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(n),n.connect(this.ctx.destination),t.start()}_playHit(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1),e.gain.setValueAtTime(this.volume*.8,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}_playPowerup(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(400,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(1200,this.ctx.currentTime+.2),e.gain.setValueAtTime(this.volume*.6,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.2)}_playBoost(){const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(300,this.ctx.currentTime+.3),e.gain.setValueAtTime(this.volume*.4,this.ctx.currentTime),e.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.3),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.3)}}class vl{constructor(t,e){this.container=document.getElementById(t),this.playerIndex=e,this.horizon=this.container.querySelector(".hud-horizon"),this.pitchLadder=this.container.querySelector(".hud-pitch-ladder"),this.centerCrosshair=this.container.querySelector(".hud-center-crosshair"),this.bankLine=this.container.querySelector(".hud-bank-line"),this.bankAngle=this.container.querySelector(".hud-bank-angle"),this.speedValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed"),this.altValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt"),this.headingValue=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading"),this.lockReticle=this.container.querySelector(".hud-lock-reticle"),this.lockDist=this.lockReticle.querySelector(".lock-dist"),this.speedScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-speed-scale"),this.altScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-alt-scale"),this.headingScale=this.container.querySelector("#"+(e===0?"p1":"p2")+"-hud-heading-scale"),this._createPitchLadder(),this._createTapeScales(),this.visible=!1,this._vec=new P}_createPitchLadder(){for(let t=-18;t<=18;t++){if(t===0)continue;const e=t*5,n=document.createElement("div");n.className="pitch-line",n.dataset.deg=e,n.style.top=`${-e*8}px`,n.style.width=`${120-Math.abs(e)*.5}px`,e<0&&(n.style.borderTopStyle="dashed"),this.pitchLadder.appendChild(n)}}_createTapeScales(){this._fillScale(this.speedScale,0,100,10,"px",20),this._fillScale(this.altScale,0,200,10,"px",20);const t=["N","NE","E","SE","S","SW","W","NW"];for(let e=0;e<=360;e+=15){const n=document.createElement("div");if(n.style.position="absolute",n.style.left=`${e*4}px`,n.style.height=e%90===0?"10px":"5px",n.style.borderLeft="1px solid #0f0",n.style.bottom="0",e%45===0){const i=document.createElement("div");i.textContent=t[e/45%8],i.style.position="absolute",i.style.left="-10px",i.style.top="-15px",i.style.fontSize="10px",n.appendChild(i)}this.headingScale.appendChild(n)}}_fillScale(t,e,n,i,s,a){for(let o=e;o<=n;o+=i){const l=document.createElement("div");if(l.style.position="absolute",l.style.top=`${-(o*(a/i))}px`,l.style.right="0",l.style.width="8px",l.style.borderTop="1px solid #0f0",o%(i*2)===0){const c=document.createElement("div");c.textContent=o,c.style.position="absolute",c.style.right="12px",c.style.top="-6px",c.style.fontSize="9px",l.appendChild(c)}t.appendChild(l)}}setVisibility(t){this.visible!==t&&(this.visible=t,t?this.container.classList.remove("hidden"):this.container.classList.add("hidden"))}update(t,e,n){if(!t||!t.alive){this.setVisibility(!1);return}if(D.CAMERA.MODES[t.cameraMode]!=="FIRST_PERSON"){this.setVisibility(!1);return}this.setVisibility(!0);const s=new Fn().setFromQuaternion(t.quaternion,"YXZ"),a=Un.radToDeg(s.x),o=Un.radToDeg(s.y),l=Un.radToDeg(s.z),c=!!D.GAMEPLAY.PLANAR_MODE;if(this.horizon.style.transform="translate(-50%, -50%)",this.pitchLadder.style.transform=`translate(-50%, -50%) translateY(${a*8}px)`,this.bankLine&&(this.bankLine.style.transform=`translate(-50%, -50%) rotate(${l}deg)`),this.bankAngle){const _=Math.round(l),f=_>0?"+":"";this.bankAngle.textContent=`${f}${_}°`}this.centerCrosshair&&this.centerCrosshair.classList.toggle("hidden",c);const h=Math.round(t.speed*10),u=Math.round(t.position.y);this.speedValue.textContent=h,this.altValue.textContent=u,this.speedScale.style.transform=`translateY(0) translateY(${h*2}px)`,this.altScale.style.transform=`translateY(0) translateY(${u*2}px)`;let d=-o;d<0&&(d+=360),d=d%360;const m=Math.round(d);this.headingValue.textContent=m.toString().padStart(3,"0"),this.headingScale.style.transform=`translateX(-50%) translateX(${-d*4}px)`;const g=n.getLockOnTarget(t.index);if(g&&g.alive){this.lockReticle.classList.remove("hidden");const _=Math.round(t.position.distanceTo(g.position));this.lockDist.textContent=_+"m";const f=n.renderer.cameras[t.index];if(f){this._vec.copy(g.position),this._vec.project(f);const p=(this._vec.x*.5+.5)*this.container.clientWidth,S=(-(this._vec.y*.5)+.5)*this.container.clientHeight;this._vec.z<1?(this.lockReticle.style.left=`${p}px`,this.lockReticle.style.top=`${S}px`):this.lockReticle.classList.add("hidden")}}else this.lockReticle.classList.add("hidden")}}const xi=800,yi=900,bn=120,ze=16;function Sl(){return{roundId:0,duration:0,winnerIndex:-1,winnerIsBot:!1,botCount:0,humanCount:0,botSurvivalAverage:0,selfCollisions:0,stuckEvents:0,bounceWallEvents:0,bounceTrailEvents:0,itemUseEvents:0,stuckPerMinute:0,learningUpdates:0,learningRewardSum:0,learningTdAbsSum:0}}function xl(){return{rounds:0,totalDuration:0,totalBotLives:0,totalBotSurvival:0,totalSelfCollisions:0,totalStuckEvents:0,totalBounceWallEvents:0,totalBounceTrailEvents:0,totalItemUseEvents:0,botWins:0,totalLearningUpdates:0,totalLearningReward:0,totalLearningTdAbs:0}}class p_{constructor(){this.events=new Array(xi);for(let t=0;t<xi;t++)this.events[t]={time:0,type:"",player:-1,data:""};this.eventIndex=0,this.eventCount=0,this.snapshots=new Array(yi);for(let t=0;t<yi;t++)this.snapshots[t]={time:0,players:[]};this.snapshotIndex=0,this.snapshotCount=0,this.roundSummaries=new Array(bn);for(let t=0;t<bn;t++)this.roundSummaries[t]=Sl();this.roundSummaryIndex=0,this.roundSummaryCount=0,this._roundIdCounter=0,this.playerSpawnTime=new Float32Array(ze),this.playerDeathTime=new Float32Array(ze),this.playerIsBot=new Uint8Array(ze),this.playerSeen=new Uint8Array(ze),this._botSurvivalSumByIndex=new Float64Array(ze),this._botSurvivalRoundsByIndex=new Uint32Array(ze),this._frameCounter=0,this._snapshotInterval=10,this.roundStartTime=0,this._elapsedSimSec=0,this._enabled=!0,this._aggregate=xl(),this._baselines=new Map,this._lastRoundSummary=null,this._resetRoundState()}resetAll(){this.eventIndex=0,this.eventCount=0,this.snapshotIndex=0,this.snapshotCount=0,this.roundSummaryIndex=0,this.roundSummaryCount=0,this._roundIdCounter=0,this.roundStartTime=0,this._elapsedSimSec=0,this._frameCounter=0;for(let t=0;t<bn;t++)this.roundSummaries[t]=Sl();this._aggregate=xl(),this._baselines.clear(),this._lastRoundSummary=null,this._botSurvivalSumByIndex.fill(0),this._botSurvivalRoundsByIndex.fill(0),this._resetRoundState()}_resetRoundState(){this._roundSelfCollisions=0,this._roundStuckEvents=0,this._roundBounceWallEvents=0,this._roundBounceTrailEvents=0,this._roundItemUseEvents=0,this._roundLearningUpdates=0,this._roundLearningRewardSum=0,this._roundLearningTdAbsSum=0;for(let t=0;t<ze;t++)this.playerSpawnTime[t]=-1,this.playerDeathTime[t]=-1,this.playerIsBot[t]=0,this.playerSeen[t]=0}_elapsedSeconds(){return Math.max(0,this._elapsedSimSec||0)}tick(t){if(!this._enabled)return;const e=Number.isFinite(t)?t:0;e<=0||(this._elapsedSimSec+=e)}_trackPlayer(t,e=!1){if(!t||t.index<0||t.index>=ze)return;const n=t.index;this.playerSeen[n]=1,this.playerIsBot[n]=t.isBot?1:0,this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=this._elapsedSeconds()),e&&(this.playerDeathTime[n]=-1)}startRound(t=[]){if(this.eventIndex=0,this.eventCount=0,this.snapshotIndex=0,this.snapshotCount=0,this._frameCounter=0,this.roundStartTime=performance.now(),this._elapsedSimSec=0,this._resetRoundState(),this._lastRoundSummary=null,Array.isArray(t))for(let e=0;e<t.length;e++)this._trackPlayer(t[e],!0)}logEvent(t,e,n=""){if(!this._enabled)return;const i=this.events[this.eventIndex];i.time=this._elapsedSeconds(),i.type=t,i.player=e,i.data=n,this.eventIndex=(this.eventIndex+1)%xi,this.eventCount<xi&&this.eventCount++,t==="STUCK"&&this._roundStuckEvents++,t==="BOUNCE_WALL"&&this._roundBounceWallEvents++,t==="BOUNCE_TRAIL"&&this._roundBounceTrailEvents++,t==="ITEM_USE"&&this._roundItemUseEvents++}markPlayerSpawn(t){this._enabled&&this._trackPlayer(t,!0)}markPlayerDeath(t,e=""){if(!this._enabled||!t||t.index<0||t.index>=ze)return;const n=t.index;this.playerSpawnTime[n]<0&&(this.playerSpawnTime[n]=0),this.playerDeathTime[n]<0&&(this.playerDeathTime[n]=this._elapsedSeconds()),e==="TRAIL_SELF"&&this._roundSelfCollisions++}recordLearningStep(t=0,e=0,n=0,i=""){if(!this._enabled)return;const s=Number.isFinite(t)?t:0,a=Number.isFinite(e)?e:0,o=Number.isFinite(n)?n:0;this._roundLearningUpdates++,this._roundLearningRewardSum+=s,this._roundLearningTdAbsSum+=Math.abs(a),this._roundLearningUpdates%8===0&&this.logEvent("LEARN_STEP",-1,`a=${i||"NO_OP"} r=${s.toFixed(3)} td=${a.toFixed(3)} e=${o.toFixed(3)}`)}finalizeRound(t,e=[]){if(!this._enabled)return null;const n=Math.max(0,this._elapsedSeconds());let i=0,s=0,a=0;if(Array.isArray(e))for(let l=0;l<e.length;l++){const c=e[l];if(!c||c.index<0||c.index>=ze)continue;this._trackPlayer(c,!1);const h=c.index;this.playerDeathTime[h]<0&&(this.playerDeathTime[h]=n);const u=this.playerSpawnTime[h]>=0?this.playerSpawnTime[h]:0,d=Math.max(0,this.playerDeathTime[h]-u);c.isBot?(i++,a+=d,this._botSurvivalSumByIndex[h]+=d,this._botSurvivalRoundsByIndex[h]+=1):s++}const o=this.roundSummaries[this.roundSummaryIndex];return this._roundIdCounter++,o.roundId=this._roundIdCounter,o.duration=n,o.winnerIndex=t?t.index:-1,o.winnerIsBot=!!(t!=null&&t.isBot),o.botCount=i,o.humanCount=s,o.botSurvivalAverage=i>0?a/i:0,o.selfCollisions=this._roundSelfCollisions,o.stuckEvents=this._roundStuckEvents,o.bounceWallEvents=this._roundBounceWallEvents,o.bounceTrailEvents=this._roundBounceTrailEvents,o.itemUseEvents=this._roundItemUseEvents,o.stuckPerMinute=n>0?this._roundStuckEvents/(n/60):0,o.learningUpdates=this._roundLearningUpdates,o.learningRewardSum=this._roundLearningRewardSum,o.learningTdAbsSum=this._roundLearningTdAbsSum,this.roundSummaryIndex=(this.roundSummaryIndex+1)%bn,this.roundSummaryCount<bn&&this.roundSummaryCount++,this._aggregate.rounds+=1,this._aggregate.totalDuration+=n,this._aggregate.totalBotLives+=i,this._aggregate.totalBotSurvival+=a,this._aggregate.totalSelfCollisions+=this._roundSelfCollisions,this._aggregate.totalStuckEvents+=this._roundStuckEvents,this._aggregate.totalBounceWallEvents+=this._roundBounceWallEvents,this._aggregate.totalBounceTrailEvents+=this._roundBounceTrailEvents,this._aggregate.totalItemUseEvents+=this._roundItemUseEvents,this._aggregate.totalLearningUpdates+=this._roundLearningUpdates,this._aggregate.totalLearningReward+=this._roundLearningRewardSum,this._aggregate.totalLearningTdAbs+=this._roundLearningTdAbsSum,t!=null&&t.isBot&&(this._aggregate.botWins+=1),this._lastRoundSummary={roundId:o.roundId,duration:o.duration,winnerIndex:o.winnerIndex,winnerIsBot:o.winnerIsBot,botCount:o.botCount,humanCount:o.humanCount,botSurvivalAverage:o.botSurvivalAverage,selfCollisions:o.selfCollisions,stuckEvents:o.stuckEvents,bounceWallEvents:o.bounceWallEvents,bounceTrailEvents:o.bounceTrailEvents,itemUseEvents:o.itemUseEvents,stuckPerMinute:o.stuckPerMinute,learningUpdates:o.learningUpdates,learningRewardSum:o.learningRewardSum,learningTdAbsSum:o.learningTdAbsSum},this.logEvent("ROUND_END",o.winnerIndex,`duration=${o.duration.toFixed(2)}`),this._lastRoundSummary}getLastRoundMetrics(){return this._lastRoundSummary?{...this._lastRoundSummary}:null}getRoundSummaries(t=bn){const e=Math.max(0,Math.floor(t)),n=this.roundSummaryCount;if(e===0||n===0)return[];const i=Math.min(n,e),s=n>=bn?this.roundSummaryIndex:0,a=Math.max(0,n-i),o=[];for(let l=0;l<i;l++){const c=(s+a+l)%bn,h=this.roundSummaries[c];o.push({roundId:h.roundId,duration:h.duration,winnerIndex:h.winnerIndex,winnerIsBot:h.winnerIsBot,botCount:h.botCount,humanCount:h.humanCount,botSurvivalAverage:h.botSurvivalAverage,selfCollisions:h.selfCollisions,stuckEvents:h.stuckEvents,bounceWallEvents:h.bounceWallEvents,bounceTrailEvents:h.bounceTrailEvents,itemUseEvents:h.itemUseEvents,stuckPerMinute:h.stuckPerMinute,learningUpdates:h.learningUpdates,learningRewardSum:h.learningRewardSum,learningTdAbsSum:h.learningTdAbsSum})}return o}getBotSurvivalAverages(t=ze){const e=Math.max(0,Math.floor(t));if(e<=0)return[];const n=[];for(let i=0;i<ze;i++){const s=this._botSurvivalRoundsByIndex[i];if(!s)continue;const a=this._botSurvivalSumByIndex[i];n.push({botIndex:i,botNumber:i+1,rounds:s,totalSurvivalSec:a,averageSurvivalSec:s>0?a/s:0})}return n.sort((i,s)=>i.botIndex-s.botIndex),n.slice(0,e)}getAggregateMetrics(){const t=this._aggregate.rounds,e=this._aggregate.totalDuration;return{rounds:t,botWinRate:t>0?this._aggregate.botWins/t:0,averageBotSurvival:this._aggregate.totalBotLives>0?this._aggregate.totalBotSurvival/this._aggregate.totalBotLives:0,selfCollisionsPerRound:t>0?this._aggregate.totalSelfCollisions/t:0,stuckEventsPerMinute:e>0?this._aggregate.totalStuckEvents/(e/60):0,bounceWallPerRound:t>0?this._aggregate.totalBounceWallEvents/t:0,bounceTrailPerRound:t>0?this._aggregate.totalBounceTrailEvents/t:0,itemUsePerRound:t>0?this._aggregate.totalItemUseEvents/t:0,learningUpdatesPerRound:t>0?this._aggregate.totalLearningUpdates/t:0,learningRewardPerRound:t>0?this._aggregate.totalLearningReward/t:0,learningTdAbsMean:this._aggregate.totalLearningUpdates>0?this._aggregate.totalLearningTdAbs/this._aggregate.totalLearningUpdates:0}}getLearningAnalysis(t=12){const e=Math.max(2,Math.floor(t)),n=this.getRoundSummaries(e*2);if(n.length===0)return{status:"NO_DATA",samplesRecent:0,samplesPrevious:0,recentUpdatesPerRound:0,recentRewardPerRound:0,recentTdAbsMean:0,prevUpdatesPerRound:0,prevRewardPerRound:0,prevTdAbsMean:0,updateTrendPerRound:0,rewardTrendPerRound:0,tdAbsTrend:0};const i=n.slice(-e),s=n.slice(-(e*2),-e),a=(v,M)=>v.reduce((R,b)=>R+M(b),0),o=(v,M)=>v.length>0?a(v,M)/v.length:0,l=v=>{const M=a(v,b=>b.learningUpdates||0);return M<=0?0:a(v,b=>b.learningTdAbsSum||0)/M},c=o(i,v=>v.learningUpdates||0),h=o(i,v=>v.learningRewardSum||0),u=l(i),d=o(s,v=>v.learningUpdates||0),m=o(s,v=>v.learningRewardSum||0),g=l(s),_=c-d,f=h-m,p=u-g;let S="NO_DATA";return c<=.001?S="NO_LEARNING":Math.abs(f)<.02&&Math.abs(_)<.1?S="PLATEAU":f>=0?S=p<=0?"IMPROVING":"UNSTABLE":S="UNSTABLE",{status:S,samplesRecent:i.length,samplesPrevious:s.length,recentUpdatesPerRound:c,recentRewardPerRound:h,recentTdAbsMean:u,prevUpdatesPerRound:d,prevRewardPerRound:m,prevTdAbsMean:g,updateTrendPerRound:_,rewardTrendPerRound:f,tdAbsTrend:p}}captureBaseline(t="BASELINE"){const e=this.getAggregateMetrics();return this._baselines.set(t,e),{label:t,...e}}compareWithBaseline(t="BASELINE"){if(!this._baselines.has(t))return null;const e=this._baselines.get(t),n=this.getAggregateMetrics(),i=e||{};return{label:t,baseline:e,current:n,delta:{botWinRate:n.botWinRate-(i.botWinRate||0),averageBotSurvival:n.averageBotSurvival-(i.averageBotSurvival||0),selfCollisionsPerRound:n.selfCollisionsPerRound-(i.selfCollisionsPerRound||0),stuckEventsPerMinute:n.stuckEventsPerMinute-(i.stuckEventsPerMinute||0),bounceWallPerRound:n.bounceWallPerRound-(i.bounceWallPerRound||0),bounceTrailPerRound:n.bounceTrailPerRound-(i.bounceTrailPerRound||0),itemUsePerRound:n.itemUsePerRound-(i.itemUsePerRound||0),learningUpdatesPerRound:n.learningUpdatesPerRound-(i.learningUpdatesPerRound||0),learningRewardPerRound:n.learningRewardPerRound-(i.learningRewardPerRound||0),learningTdAbsMean:n.learningTdAbsMean-(i.learningTdAbsMean||0)}}}getValidationMatrix(){return[{id:"V1",mode:"1p",bots:1,mapKey:"standard",planarMode:!1,portalCount:0,rounds:10},{id:"V2",mode:"1p",bots:3,mapKey:"maze",planarMode:!1,portalCount:0,rounds:10},{id:"V3",mode:"1p",bots:3,mapKey:"complex",planarMode:!0,portalCount:4,rounds:10},{id:"V4",mode:"2p",bots:2,mapKey:"standard",planarMode:!0,portalCount:6,rounds:10}]}recordFrame(t){if(!this._enabled||(this._frameCounter++,this._frameCounter%this._snapshotInterval!==0))return;const e=this.snapshots[this.snapshotIndex];for(e.time=this._elapsedSeconds();e.players.length<t.length;)e.players.push({idx:0,alive:!1,x:0,y:0,z:0,bot:!1});for(let n=0;n<t.length;n++){const i=t[n],s=e.players[n];s.idx=i.index,s.alive=i.alive,s.x=+i.position.x.toFixed(1),s.y=+i.position.y.toFixed(1),s.z=+i.position.z.toFixed(1),s.bot=i.isBot}this.snapshotIndex=(this.snapshotIndex+1)%yi,this.snapshotCount<yi&&this.snapshotCount++}dump(){const t=[],e=this.eventCount>=xi?this.eventIndex:0;for(let h=0;h<this.eventCount;h++){const u=(e+h)%xi,d=this.events[u];t.push(`[${d.time.toFixed(2)}s] ${d.type} P${d.player} ${d.data}`)}const n=this.getLastRoundMetrics(),i=this.getAggregateMetrics(),s=this.compareWithBaseline("BASELINE");console.group("%cROUND LOG","color: #0af; font-size: 14px; font-weight: bold;"),console.log(`Duration: ${this._elapsedSeconds().toFixed(1)}s`),console.log(`Events: ${this.eventCount}`),console.table(t.map(h=>({log:h}))),n&&console.log("Round KPI:",n),console.log("Aggregate KPI:",i),s&&console.log("Baseline delta (BASELINE):",s.delta);const a=[],o=this.snapshotCount>=yi?this.snapshotIndex:0,l=Math.min(this.snapshotCount,20),c=Math.max(0,this.snapshotCount-l);for(let h=0;h<l;h++){const u=(o+c+h)%yi,d=this.snapshots[u],m=d.players.filter(g=>g.idx!==void 0).map(g=>`${g.bot?"Bot":"P"}${g.idx}:${g.alive?"alive":"dead"}(${g.x},${g.y},${g.z})`).join(" | ");a.push({time:d.time.toFixed(2)+"s",players:m})}return a.length>0&&(console.log("Recent positions:"),console.table(a)),console.groupEnd(),{events:t,snapshots:a,lastRound:n,aggregate:i,baselineDelta:s?s.delta:null}}}const m_=Object.freeze(["NO_OP","YAW_LEFT","YAW_RIGHT","PITCH_UP","PITCH_DOWN","BOOST","USE_ITEM","SHOOT_ITEM"]),oa=2,g_=1,__=".lastgood",v_="mini-curve-fever-3d.bot-learning.v1";function wn(r,t,e){return Math.min(Math.max(r,t),e)}function Rn(r,t){if(!Number.isFinite(r))return t.length;for(let e=0;e<t.length;e++)if(r<t[e])return e;return t.length}function Mt(r,t=0){return Number.isFinite(r)?r:t}function S_(r){return!r||r.length===0?0:r[Math.floor(Math.random()*r.length)]}function bc(r){let t=2166136261;const e=String(r||"");for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}function wc(r,t,e,n){return{epsilon:Mt(r,0),totalUpdates:Math.max(0,Math.floor(Mt(t,0))),totalReward:Mt(e,0),states:Array.isArray(n)?n:[]}}function x_(r,t=Date.now()){const e=wc(r==null?void 0:r.epsilon,r==null?void 0:r.totalUpdates,r==null?void 0:r.totalReward,r==null?void 0:r.states),n=bc(JSON.stringify(e));return{version:oa,savedAt:Math.max(0,Math.floor(Mt(t,Date.now()))),checksum:n,epsilon:e.epsilon,totalUpdates:e.totalUpdates,totalReward:e.totalReward,states:e.states}}class Rc{constructor(t={}){var n;const e=((n=D.BOT)==null?void 0:n.LEARNING)||{};this.storageKey=t.storageKey||e.STORAGE_KEY||v_,this.alpha=Mt(t.alpha,Mt(e.ALPHA,.16)),this.gamma=Mt(t.gamma,Mt(e.GAMMA,.92)),this.epsilonStart=wn(Mt(t.epsilonStart,Mt(e.EPSILON_START,.35)),0,1),this.epsilonMin=wn(Mt(t.epsilonMin,Mt(e.EPSILON_MIN,.04)),0,1),this.epsilonDecay=wn(Mt(t.epsilonDecay,Mt(e.EPSILON_DECAY,.9995)),.9,1),this.maxStates=Math.max(200,Math.floor(Mt(t.maxStates,Mt(e.MAX_STATES,2500)))),this.saveEveryUpdates=Math.max(1,Math.floor(Mt(t.saveEveryUpdates,Mt(e.SAVE_EVERY_UPDATES,200)))),this.minSaveIntervalMs=Math.max(0,Math.floor(Mt(t.minSaveIntervalMs,Mt(e.MIN_SAVE_INTERVAL_MS,4e3)))),this.actions=m_.slice(),this.trainingEnabled=!!(t.trainingEnabled??e.ENABLED??!1),this.enabled=!0,this.epsilon=this.epsilonStart,this.totalUpdates=0,this.totalReward=0,this.updatesSinceSave=0,this.lastSaveAt=0,this.lastLoadedAt=0,this.epsilonOverride=null,this.backupStorageKey=`${this.storageKey}${__}`,this.qTable=new Map,this.stateMeta=new Map,this._loaded=this.load()}setEnabled(t){this.enabled=!!t}setTrainingEnabled(t){this.trainingEnabled=!!t}setEpsilonOverride(t){if(t==null||t===""){this.epsilonOverride=null;return}const e=Number(t);Number.isFinite(e)&&(this.epsilonOverride=wn(e,this.epsilonMin,1),this.epsilon=this.epsilonOverride)}getActionName(t){return!Number.isInteger(t)||t<0||t>=this.actions.length?this.actions[0]:this.actions[t]}getActionCount(){return this.actions.length}encodeState({player:t,sense:e,arena:n,planarMode:i}){const s=e||{},a=Math.max(1,Mt(s.lookAhead,1)),o=Mt(s.localOpenness,0)/a,l=Number.isFinite(s.targetDistanceSq)?Math.sqrt(Math.max(0,s.targetDistanceSq)):1/0,c=t&&t.baseSpeed>0?Mt(t.speed/t.baseSpeed,1):1,h=Number.isFinite(s.nearestHumanDistanceSq)?Math.sqrt(Math.max(0,s.nearestHumanDistanceSq)):1/0,u=Math.max(0,Math.floor(Mt(s.humanAliveCount,0))),d=wn(Mt(s.humanThreat,0),0,2);let m=1;if(!i&&t&&(n!=null&&n.bounds)){const T=(n.bounds.minY+n.bounds.maxY)*.5;t.position.y<T-5?m=0:t.position.y>T+5&&(m=2)}const g=Rn(Mt(s.forwardRisk,0),[.2,.4,.6,.85]),_=Rn(Mt(s.pressure,0),[.25,.5,.9,1.2]),f=Rn(o,[.25,.45,.65,.85]),p=Rn(l,[8,16,30,55]),S=Rn(c,[.9,1.1,1.4,1.8]),v=s.targetInFront?1:0,M=s.immediateDanger?1:0,R=s.projectileThreat?1:0,b=i?1:0,w=Rn(u,[1,2]),N=Rn(h,[10,20,35,55]),y=Rn(d,[.2,.45,.75,1.1]);return`f${g}|p${_}|o${f}|d${p}|s${S}|t${v}|i${M}|j${R}|h${m}|m${b}|hc${w}|hd${N}|ht${y}`}selectAction(t,e={}){if(!this.enabled||!t)return 0;const n=e.training!==!1,i=Array.isArray(e.allowedActions)?e.allowedActions:null,s=[];for(let h=0;h<this.actions.length;h++)(!i||i[h])&&s.push(h);if(s.length===0)return 0;const a=this._ensureState(t);if(n&&this.trainingEnabled&&Math.random()<this.epsilon)return S_(s);let l=s[0],c=a[l];for(let h=1;h<s.length;h++){const u=s[h],d=a[u];d>c&&(c=d,l=u)}return l}updateTransition(t={}){const e=typeof t.stateKey=="string"?t.stateKey:"",n=typeof t.nextStateKey=="string"?t.nextStateKey:"",i=Number.isInteger(t.actionIndex)?t.actionIndex:0,s=Mt(t.reward,0),a=!!t.terminal,o=t.training!==!1;if(!e||i<0||i>=this.actions.length)return null;const l=this._ensureState(e),c=l[i];let h=0;if(!a&&n){const g=this._ensureState(n);h=g[0];for(let _=1;_<g.length;_++)g[_]>h&&(h=g[_])}const d=s+(a?0:this.gamma*h)-c,m=o&&this.trainingEnabled;return m&&(l[i]=c+this.alpha*d,this.totalUpdates++,this.totalReward+=s,this.updatesSinceSave++,this.epsilonOverride===null?this.epsilon=Math.max(this.epsilonMin,this.epsilon*this.epsilonDecay):this.epsilon=this.epsilonOverride,this._touchState(e),n&&this._touchState(n),this._pruneStatesIfNeeded(),this.save(!1)),{updated:m,tdError:d,qValue:l[i],epsilon:this.epsilon}}reset(t=!0){this.qTable.clear(),this.stateMeta.clear(),this.totalUpdates=0,this.totalReward=0,this.updatesSinceSave=0,this.epsilon=this.epsilonOverride===null?this.epsilonStart:this.epsilonOverride,t&&this.save(!0)}exportDump(t=Date.now()){const e=Math.max(0,Math.floor(Mt(t,Date.now())));return{savedAt:e,epsilon:this.epsilon,totalUpdates:this.totalUpdates,totalReward:this.totalReward,states:this._serializeStates(e)}}importDumpAndSave(t,e={}){const n=this._normalizeExternalDump(t);if(!n)return!1;this.qTable.clear(),this.stateMeta.clear();const i=this.actions.length;for(let s=0;s<n.states.length;s++){const a=n.states[s],o=a[0],l=a[1],c=a[2],h=a[3],u=new Float64Array(i);for(let d=0;d<i;d++)u[d]=Mt(l[d],0);this.qTable.set(o,u),this.stateMeta.set(o,{visits:Math.max(1,Math.floor(Mt(c,1))),lastSeen:Math.max(0,Math.floor(Mt(h,n.savedAt)))})}if(Number.isFinite(n.epsilon)){const s=wn(n.epsilon,this.epsilonMin,this.epsilonStart);this.epsilon=this.epsilonOverride===null?s:this.epsilonOverride}return this.totalUpdates=Math.max(0,Math.floor(Mt(n.totalUpdates,0))),this.totalReward=Mt(n.totalReward,0),this.lastLoadedAt=Date.now(),this.updatesSinceSave=0,this._pruneStatesIfNeeded(),e.save!==!1&&this.save(!0),!0}mergeDumpAndSave(t,e={}){const n=this._normalizeExternalDump(t);if(!n)return!1;const i=this.actions.length;for(let l=0;l<n.states.length;l++){const c=n.states[l],h=c[0],u=c[1],d=Math.max(1,Math.floor(Mt(c[2],1))),m=Math.max(0,Math.floor(Mt(c[3],n.savedAt))),g=this.qTable.get(h),_=this.stateMeta.get(h);if(!g||!_){const S=new Float64Array(i);for(let v=0;v<i;v++)S[v]=Mt(u[v],0);this.qTable.set(h,S),this.stateMeta.set(h,{visits:d,lastSeen:m});continue}const f=Math.max(1,Math.floor(Mt(_.visits,1))),p=f+d;for(let S=0;S<i;S++){const v=Mt(g[S],0),M=Mt(u[S],0);g[S]=(v*f+M*d)/p}_.visits=p,_.lastSeen=Math.max(Math.max(0,Math.floor(Mt(_.lastSeen,0))),m)}const s=this.totalUpdates,a=Math.max(0,Math.floor(Mt(n.totalUpdates,0)));this.totalUpdates=Math.max(this.totalUpdates,a);const o=Mt(n.totalReward,0);if((a>s||Math.abs(o)>Math.abs(this.totalReward))&&(this.totalReward=o),Number.isFinite(n.epsilon)){const l=Math.min(this.epsilon,n.epsilon),c=wn(l,this.epsilonMin,this.epsilonStart);this.epsilon=this.epsilonOverride===null?c:this.epsilonOverride}return this.lastLoadedAt=Date.now(),this.updatesSinceSave=Math.max(1,this.updatesSinceSave),this._pruneStatesIfNeeded(),e.save!==!1&&this.save(!0),!0}getStats(){return{loaded:this._loaded,enabled:this.enabled,trainingEnabled:this.trainingEnabled,states:this.qTable.size,maxStates:this.maxStates,epsilon:this.epsilon,epsilonStart:this.epsilonStart,epsilonMin:this.epsilonMin,totalUpdates:this.totalUpdates,totalReward:this.totalReward,storageKey:this.storageKey,backupStorageKey:this.backupStorageKey,lastSaveAt:this.lastSaveAt,lastLoadedAt:this.lastLoadedAt,updatesSinceSave:this.updatesSinceSave,saveEveryUpdates:this.saveEveryUpdates,minSaveIntervalMs:this.minSaveIntervalMs,epsilonOverride:this.epsilonOverride}}save(t=!1){if(typeof localStorage>"u")return!1;const e=Date.now();if(!t&&(this.updatesSinceSave<this.saveEveryUpdates||e-this.lastSaveAt<this.minSaveIntervalMs))return!1;const n=x_({epsilon:this.epsilon,totalUpdates:this.totalUpdates,totalReward:this.totalReward,states:this._serializeStates(e)},e),i=JSON.stringify(n);try{const s=localStorage.getItem(this.storageKey);return s&&localStorage.setItem(this.backupStorageKey,s),localStorage.setItem(this.storageKey,i),this.lastSaveAt=e,this.updatesSinceSave=0,!0}catch{try{return localStorage.setItem(this.storageKey,i),this.lastSaveAt=e,this.updatesSinceSave=0,!0}catch{return!1}}}load(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem(this.storageKey);if(this._hydrateFromRaw(t))return!0;const e=localStorage.getItem(this.backupStorageKey);if(!this._hydrateFromRaw(e))return!1;try{e&&localStorage.setItem(this.storageKey,e)}catch{}return!0}catch{return!1}}_serializeStates(t=Date.now()){const e=[];for(const[n,i]of this.qTable.entries()){const s=this.stateMeta.get(n)||{visits:1,lastSeen:t};e.push([n,Array.from(i),Math.max(1,Math.floor(s.visits||1)),Math.max(0,Math.floor(s.lastSeen||t))])}return e}_normalizeExternalDump(t){const e=t&&typeof t=="object"?t:null;if(!e||!Array.isArray(e.states))return null;const n=Date.now(),i=Math.max(0,Math.floor(Mt(e.savedAt??e.timestamp,n))),s=Number.isFinite(e.epsilon)?e.epsilon:null,a=Math.max(0,Math.floor(Mt(e.totalUpdates,0))),o=Mt(e.totalReward,0),l=[],c=this.actions.length;for(let h=0;h<e.states.length;h++){const u=e.states[h];if(!Array.isArray(u)||typeof u[0]!="string"||!Array.isArray(u[1]))continue;const d=new Array(c);for(let _=0;_<c;_++)d[_]=Mt(u[1][_],0);const m=Math.max(1,Math.floor(Mt(u[2],1))),g=Math.max(0,Math.floor(Mt(u[3],i)));l.push([u[0],d,m,g])}return l.length===0?null:{savedAt:i,epsilon:s,totalUpdates:a,totalReward:o,states:l}}_hydrateFromRaw(t){if(!t)return!1;let e=null;try{e=JSON.parse(t)}catch{return!1}if(!e||!Array.isArray(e.states))return!1;const n=Number(e.version);if(Number.isFinite(n)&&n!==oa&&n!==g_)return!1;if(n===oa&&typeof e.checksum=="string"){const o=wc(e.epsilon,e.totalUpdates,e.totalReward,e.states),l=bc(JSON.stringify(o));if(e.checksum!==l)return!1}this.qTable.clear(),this.stateMeta.clear();const i=this.actions.length,s=Date.now();for(let o=0;o<e.states.length;o++){const l=e.states[o];if(!Array.isArray(l)||l.length<2)continue;const c=l[0],h=l[1],u=Mt(l[2],1),d=Mt(l[3],s);if(typeof c!="string"||!Array.isArray(h))continue;const m=new Float64Array(i);for(let g=0;g<i;g++)m[g]=Mt(h[g],0);this.qTable.set(c,m),this.stateMeta.set(c,{visits:Math.max(1,Math.floor(u)),lastSeen:Math.max(0,Math.floor(d))})}const a=wn(Mt(e.epsilon,this.epsilonStart),this.epsilonMin,this.epsilonStart);return this.epsilon=this.epsilonOverride===null?a:this.epsilonOverride,this.totalUpdates=Math.max(0,Math.floor(Mt(e.totalUpdates,0))),this.totalReward=Mt(e.totalReward,0),this.lastSaveAt=Math.max(0,Math.floor(Mt(e.savedAt,this.lastSaveAt))),this.lastLoadedAt=s,this.updatesSinceSave=0,this._pruneStatesIfNeeded(),!0}_ensureState(t){return this.qTable.has(t)||(this.qTable.set(t,new Float64Array(this.actions.length)),this.stateMeta.set(t,{visits:1,lastSeen:Date.now()})),this.qTable.get(t)}_touchState(t){const e=Date.now(),n=this.stateMeta.get(t);if(!n){this.stateMeta.set(t,{visits:1,lastSeen:e});return}n.visits=Math.max(1,n.visits+1),n.lastSeen=e}_pruneStatesIfNeeded(){if(this.qTable.size<=this.maxStates)return;const t=this.qTable.size-this.maxStates,e=[];for(const[n,i]of this.stateMeta.entries())e.push({key:n,visits:Mt(i==null?void 0:i.visits,1),lastSeen:Mt(i==null?void 0:i.lastSeen,0)});e.sort((n,i)=>n.visits!==i.visits?n.visits-i.visits:n.lastSeen-i.lastSeen);for(let n=0;n<t&&n<e.length;n++)this.qTable.delete(e[n].key),this.stateMeta.delete(e[n].key)}}let ue=null,yl=0;const la=2,y_=1,M_=".lastgood";function Pc(r){let t=2166136261;const e=String(r||"");for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}function In(r,t=Date.now()){const e=r&&typeof r=="object"?r:{},n=Math.max(0,Math.floor(Number.isFinite(t)?t:Date.now())),i=Array.isArray(e.states)?e.states:[],s=[];for(let a=0;a<i.length;a++){const o=i[a];if(!Array.isArray(o)||typeof o[0]!="string"||!Array.isArray(o[1]))continue;const l=new Array(o[1].length);for(let c=0;c<o[1].length;c++)l[c]=Number.isFinite(o[1][c])?o[1][c]:0;s.push([o[0],l,Number.isFinite(o[2])?Math.max(1,Math.floor(o[2])):1,Number.isFinite(o[3])?Math.max(0,Math.floor(o[3])):n])}return{savedAt:Number.isFinite(e.savedAt)?Math.max(0,Math.floor(e.savedAt)):n,epsilon:Number.isFinite(e.epsilon)?e.epsilon:0,totalUpdates:Number.isFinite(e.totalUpdates)?Math.max(0,Math.floor(e.totalUpdates)):0,totalReward:Number.isFinite(e.totalReward)?e.totalReward:0,states:s}}function Ml(r,t=Date.now()){const e=In(r,t),n={epsilon:e.epsilon,totalUpdates:e.totalUpdates,totalReward:e.totalReward,states:e.states},i=Pc(JSON.stringify(n));return{version:la,savedAt:e.savedAt,checksum:i,epsilon:e.epsilon,totalUpdates:e.totalUpdates,totalReward:e.totalReward,states:e.states}}function El(r){if(!r)return null;let t=null;try{t=JSON.parse(r)}catch{return null}if(!t||!Array.isArray(t.states))return null;const e=Number(t.version);if(Number.isFinite(e)&&e!==la&&e!==y_)return null;if(e===la&&typeof t.checksum=="string"){const n={epsilon:Number.isFinite(t.epsilon)?t.epsilon:0,totalUpdates:Number.isFinite(t.totalUpdates)?Math.max(0,Math.floor(t.totalUpdates)):0,totalReward:Number.isFinite(t.totalReward)?t.totalReward:0,states:t.states};if(Pc(JSON.stringify(n))!==t.checksum)return null}return In(t)}function E_(r,t,e){const n=In(r||{}),i=In(t||{}),s=Math.max(1,Math.floor(Number.isFinite(e)?e:1)),a=new Map,o=f=>{if(!Array.isArray(f)||typeof f[0]!="string"||!Array.isArray(f[1]))return;const p=f[0],S=new Array(s);for(let y=0;y<s;y++)S[y]=Number.isFinite(f[1][y])?f[1][y]:0;const v=Number.isFinite(f[2])?Math.max(1,Math.floor(f[2])):1,M=Number.isFinite(f[3])?Math.max(0,Math.floor(f[3])):0;if(!a.has(p)){a.set(p,[p,S,v,M]);return}const R=a.get(p),b=R[1],w=Math.max(1,Math.floor(Number.isFinite(R[2])?R[2]:1)),N=w+v;for(let y=0;y<s;y++){const T=Number.isFinite(b[y])?b[y]:0,U=Number.isFinite(S[y])?S[y]:0;b[y]=(T*w+U*v)/N}R[2]=N,R[3]=Math.max(Math.max(0,Math.floor(Number.isFinite(R[3])?R[3]:0)),M)};for(let f=0;f<n.states.length;f++)o(n.states[f]);for(let f=0;f<i.states.length;f++)o(i.states[f]);const l=[];Number.isFinite(n.epsilon)&&l.push(n.epsilon),Number.isFinite(i.epsilon)&&l.push(i.epsilon);const c=l.length>0?Math.min(...l):0,h=Number.isFinite(n.totalUpdates)?Math.max(0,Math.floor(n.totalUpdates)):0,u=Number.isFinite(i.totalUpdates)?Math.max(0,Math.floor(i.totalUpdates)):0,d=Math.max(h,u),m=Number.isFinite(n.totalReward)?n.totalReward:0,g=Number.isFinite(i.totalReward)?i.totalReward:0,_=u>h||Math.abs(g)>Math.abs(m)?g:m;return{savedAt:Math.max(Number.isFinite(n.savedAt)?Math.max(0,Math.floor(n.savedAt)):0,Number.isFinite(i.savedAt)?Math.max(0,Math.floor(i.savedAt)):0),epsilon:c,totalUpdates:d,totalReward:_,states:Array.from(a.values())}}class A_{constructor(t={}){this.engineId=t.storageKey||"default",this.options={...t,storageKey:this.engineId},this.backupStorageKey=`${this.engineId}${M_}`,this.fallbackEngine=new Rc({...this.options,storageKey:`${this.engineId}.fallback`}),this.enabled=t.enabled!==!1,this.trainingEnabled=t.trainingEnabled!==!1,this.fallbackEngine.setEnabled(this.enabled),this.fallbackEngine.setTrainingEnabled(this.trainingEnabled),this.epsilon=this.fallbackEngine.epsilonStart,this.totalUpdates=0,this.totalReward=0,this.statesCount=0,this.lastSaveAt=0,this.lastLoadedAt=0,this.updatesSinceSave=0,ue||(ue=new Worker(new URL("/assets/aiWorker-B93M3CkB.js",import.meta.url),{type:"module"})),ue.onmessage||(ue._instances=new Map,ue.onmessage=n=>{const i=n.data;i.engineId&&ue._instances.has(i.engineId)&&ue._instances.get(i.engineId)._handleWorkerMessage(i)}),ue._instances.set(this.engineId,this),this._callbacks=new Map;const e=this._loadLocalStorage();e&&Array.isArray(e.states)&&(this._hydrateFallbackFromDump(e),this._syncMirroredStatsFromFallback(),this.lastLoadedAt=Date.now()),ue.postMessage({type:"INIT",engineId:this.engineId,options:this.options,dump:e})}_hydrateFallbackFromDump(t){if(!this.fallbackEngine||!t||!Array.isArray(t.states))return;const e=this.fallbackEngine.actions.length,n=Date.now();this.fallbackEngine.qTable.clear(),this.fallbackEngine.stateMeta.clear();for(let i=0;i<t.states.length;i++){const s=t.states[i];if(!Array.isArray(s)||typeof s[0]!="string"||!Array.isArray(s[1]))continue;const a=new Float64Array(e);for(let o=0;o<e;o++)a[o]=Number.isFinite(s[1][o])?s[1][o]:0;this.fallbackEngine.qTable.set(s[0],a),this.fallbackEngine.stateMeta.set(s[0],{visits:Number.isFinite(s[2])?Math.max(1,Math.floor(s[2])):1,lastSeen:Number.isFinite(s[3])?Math.max(0,Math.floor(s[3])):n})}Number.isFinite(t.epsilon)&&(this.fallbackEngine.epsilon=t.epsilon),this.fallbackEngine.totalUpdates=Number.isFinite(t.totalUpdates)?Math.max(0,Math.floor(t.totalUpdates)):0,this.fallbackEngine.totalReward=Number.isFinite(t.totalReward)?t.totalReward:0,this.fallbackEngine.lastSaveAt=Number.isFinite(t.savedAt)?Math.max(0,Math.floor(t.savedAt)):this.fallbackEngine.lastSaveAt,this.fallbackEngine.lastLoadedAt=n,this.fallbackEngine.updatesSinceSave=0}_syncMirroredStatsFromFallback(){const t=this.fallbackEngine.getStats();this.epsilon=t.epsilon,this.totalUpdates=t.totalUpdates,this.totalReward=t.totalReward,this.statesCount=t.states,this.lastSaveAt=t.lastSaveAt||this.lastSaveAt,this.lastLoadedAt=t.lastLoadedAt||this.lastLoadedAt,this.updatesSinceSave=t.updatesSinceSave||0}_loadLocalStorage(){if(typeof localStorage>"u")return null;try{const t=localStorage.getItem(this.engineId),e=El(t);if(e)return e;const n=localStorage.getItem(this.backupStorageKey),i=El(n);if(i){try{n&&localStorage.setItem(this.engineId,n)}catch{}return i}}catch{return null}return null}_handleWorkerMessage(t){if(t.type==="SAVE_SYNC"){const e=In(t.dump||{});this._hydrateFallbackFromDump(e),this._syncMirroredStatsFromFallback(),this._saveLocalStorage(e)}t.reqId&&this._callbacks.has(t.reqId)&&(this._callbacks.get(t.reqId)(t),this._callbacks.delete(t.reqId))}_saveLocalStorage(t){if(typeof localStorage>"u")return!1;try{const e=Ml(t),n=JSON.stringify(e),i=localStorage.getItem(this.engineId);return i&&localStorage.setItem(this.backupStorageKey,i),localStorage.setItem(this.engineId,n),this.lastSaveAt=e.savedAt,this.updatesSinceSave=0,!0}catch{try{const e=Ml(t);return localStorage.setItem(this.engineId,JSON.stringify(e)),this.lastSaveAt=e.savedAt,this.updatesSinceSave=0,!0}catch{return!1}}}_exportFallbackDump(t=Date.now()){const e=[];for(const[n,i]of this.fallbackEngine.qTable.entries()){const s=this.fallbackEngine.stateMeta.get(n)||{visits:1,lastSeen:t};e.push([n,Array.from(i),Math.max(1,Math.floor(s.visits||1)),Math.max(0,Math.floor(s.lastSeen||t))])}return{savedAt:t,epsilon:this.fallbackEngine.epsilon,totalUpdates:this.fallbackEngine.totalUpdates,totalReward:this.fallbackEngine.totalReward,states:e}}encodeState(t){return this.fallbackEngine.encodeState(t)}setEnabled(t){var e;this.enabled=!!t,(e=this.fallbackEngine)!=null&&e.setEnabled&&this.fallbackEngine.setEnabled(this.enabled),ue.postMessage({type:"SET_PARAMS",engineId:this.engineId,params:{enabled:t}})}setTrainingEnabled(t){var e;this.trainingEnabled=!!t,(e=this.fallbackEngine)!=null&&e.setTrainingEnabled&&this.fallbackEngine.setTrainingEnabled(this.trainingEnabled),ue.postMessage({type:"SET_PARAMS",engineId:this.engineId,params:{trainingEnabled:t}})}setEpsilonOverride(t){var e;(e=this.fallbackEngine)!=null&&e.setEpsilonOverride&&(this.fallbackEngine.setEpsilonOverride(t),this._syncMirroredStatsFromFallback()),ue.postMessage({type:"SET_PARAMS",engineId:this.engineId,params:{epsilonOverride:t}})}getActionName(t){return this.fallbackEngine.getActionName(t)}getActionCount(){return this.fallbackEngine.getActionCount()}selectAction(t,e={}){return this.fallbackEngine.selectAction(t,e)}requestAction(t,e,n){const i=++yl;this._callbacks.set(i,s=>{s.type==="ACTION_ACK"&&typeof n=="function"&&n(s.action)}),ue.postMessage({type:"SELECT_ACTION",engineId:this.engineId,stateKey:t,options:e,reqId:i})}updateTransition(t={}){const e=this.fallbackEngine.updateTransition(t);return this._syncMirroredStatsFromFallback(),ue.postMessage({type:"UPDATE_TRANSITION",engineId:this.engineId,params:t}),e}getStats(){var t,e,n,i,s;return this._syncMirroredStatsFromFallback(),{loaded:!0,enabled:this.enabled,trainingEnabled:this.trainingEnabled,states:this.statesCount,maxStates:((t=this.fallbackEngine)==null?void 0:t.maxStates)||0,epsilon:this.epsilon,epsilonStart:(e=this.fallbackEngine)==null?void 0:e.epsilonStart,epsilonMin:(n=this.fallbackEngine)==null?void 0:n.epsilonMin,totalUpdates:this.totalUpdates,totalReward:this.totalReward,storageKey:this.engineId,backupStorageKey:this.backupStorageKey,lastSaveAt:this.lastSaveAt,lastLoadedAt:this.lastLoadedAt,updatesSinceSave:this.updatesSinceSave,saveEveryUpdates:((i=this.fallbackEngine)==null?void 0:i.saveEveryUpdates)||0,minSaveIntervalMs:((s=this.fallbackEngine)==null?void 0:s.minSaveIntervalMs)||0}}exportDump(t=Date.now()){return this._exportFallbackDump(t)}save(t=!1){return t&&this._saveLocalStorage(this._exportFallbackDump()),ue.postMessage({type:"FORCE_SAVE",engineId:this.engineId,force:t}),!0}reset(t=!0){this.fallbackEngine.reset(!1),this._syncMirroredStatsFromFallback(),t&&this._saveLocalStorage(this._exportFallbackDump()),ue.postMessage({type:"RESET",engineId:this.engineId,saveAfterReset:t})}requestDump(){return new Promise(t=>{const e=++yl;this._callbacks.set(e,n=>{n.type==="DUMP_ACK"&&t(n.dump)}),ue.postMessage({type:"REQUEST_DUMP",engineId:this.engineId,reqId:e})})}importDumpAndSave(t,e,n){const i=Date.now();let s=null;if(t&&typeof t=="object"&&!Array.isArray(t)&&Array.isArray(t.states))s=In(t);else{const o=Array.isArray(t)?t:[],l=[];for(let c=0;c<o.length;c++){const h=o[c];!Array.isArray(h)||typeof h[0]!="string"||!Array.isArray(h[1])||l.push([h[0],Array.from(h[1]),Number.isFinite(h[2])?Math.max(1,Math.floor(h[2])):1,Number.isFinite(h[3])?Math.max(0,Math.floor(h[3])):i])}s=In({savedAt:i,epsilon:this.epsilon,totalUpdates:e,totalReward:n,states:l})}typeof this.fallbackEngine.importDumpAndSave=="function"?this.fallbackEngine.importDumpAndSave(s,{save:!1}):this._hydrateFallbackFromDump(s),this._syncMirroredStatsFromFallback();const a=this._exportFallbackDump(s.savedAt||i);this._saveLocalStorage(a),ue.postMessage({type:"INIT",engineId:this.engineId,options:this.options,dump:a})}mergeDumpAndSave(t){var a,o;const e=In(t||{});if(!Array.isArray(e.states)||e.states.length===0)return!1;const n=((o=(a=this.fallbackEngine)==null?void 0:a.getActionCount)==null?void 0:o.call(a))||8,i=E_(this._exportFallbackDump(),e,n);typeof this.fallbackEngine.mergeDumpAndSave=="function"?this.fallbackEngine.mergeDumpAndSave(i,{save:!1}):typeof this.fallbackEngine.importDumpAndSave=="function"?this.fallbackEngine.importDumpAndSave(i,{save:!1}):this._hydrateFallbackFromDump(i),this._syncMirroredStatsFromFallback();const s=this._exportFallbackDump(i.savedAt||Date.now());return this._saveLocalStorage(s),ue.postMessage({type:"INIT",engineId:this.engineId,options:this.options,dump:s}),!0}}const Al="mini-curve-fever-3d.settings.v4",T_=["mini-curve-fever-3d.settings.v3"],Tl="mini-curve-fever-3d.settings-profiles.v1",Gr="mini-curve-fever-3d.bot-learning.legacy-import.v1",bl=Object.freeze(["./bot-learning-data.json"]),b_="./learning_history_compact_summary.json",Wr="0.9.0",Xr="2026-02-20T02:47:23.552Z",Yr="MLUAHMZL";function Ct(r,t,e){return Math.min(Math.max(r,t),e)}function qr(r){return JSON.parse(JSON.stringify(r))}function wl(r={}){if(typeof Worker<"u")try{return new A_(r)}catch(t){console.warn("[Learning] Worker proxy unavailable, falling back to main-thread engine.",t)}return new Rc(r)}const Rl=[{label:"Pitch Hoch",key:"UP"},{label:"Pitch Runter",key:"DOWN"},{label:"Links (Gier)",key:"LEFT"},{label:"Rechts (Gier)",key:"RIGHT"},{label:"Rollen Links",key:"ROLL_LEFT"},{label:"Rollen Rechts",key:"ROLL_RIGHT"},{label:"Boost",key:"BOOST"},{label:"Schiessen",key:"SHOOT"},{label:"Item Abwerfen",key:"DROP"},{label:"Item Wechseln",key:"NEXT_ITEM"},{label:"Kamera",key:"CAMERA"}];class w_{constructor(){var a,o,l;this.settings=this._loadSettings(),this.settingsProfiles=this._loadProfiles(),this.activeProfileName="",this.settingsDirty=!1,this.state="MENU",this.roundPause=0,this._hudTimer=0,this._adaptiveTimer=0,this._statsTimer=0,this._trainingOverlayTimer=0,this._lastLearningAutoSaveAt=Date.now(),this._legacyLearningImportPromise=null,this._legacyLearningImportDone=!1,this.keyCapture=null,this.isLowQuality=!1,this._tmpAimVec=new P,this._tmpAimDir=new P,this._tmpRollEuler=new Fn(0,0,0,"YXZ");const t=document.getElementById("game-canvas");this.renderer=new Gg(t),this.input=new qg,this.audio=new f_,this.hudP1=new vl("p1-fighter-hud",0),this.hudP2=new vl("p2-fighter-hud",1),this.recorder=new p_;const e=(a=D.BOT.LEARNING)==null?void 0:a.STORAGE_KEY,n=(o=D.BOT.LEARNING)==null?void 0:o.STORAGE_KEY_3D,i=(l=D.BOT.LEARNING)==null?void 0:l.STORAGE_KEY_PLANAR;if(typeof localStorage<"u")try{if(n!==e){const c=localStorage.getItem(e),h=!!localStorage.getItem(n);c&&!h&&localStorage.setItem(n,c)}}catch{}this.botLearning3D=wl({storageKey:n}),this.botLearningPlanar=wl({storageKey:i}),this.botLearning=this.botLearning3D,this._applySettingsToRuntime(),this.input.setBindings(this.settings.controls),this.arena=null,this.entityManager=null,this.powerupManager=null,this.particles=new d_(this.renderer),this.gameLoop=new Xg((c,h)=>this.update(c,h),()=>this.render()),this.ui={mainMenu:document.getElementById("main-menu"),hud:document.getElementById("hud"),p1Hud:document.getElementById("p1-hud"),p2Hud:document.getElementById("p2-hud"),p1Score:document.querySelector("#p1-hud .player-score"),p2Score:document.querySelector("#p2-hud .player-score"),p1Items:document.getElementById("p1-items"),p2Items:document.getElementById("p2-items"),messageOverlay:document.getElementById("message-overlay"),messageText:document.getElementById("message-text"),messageSub:document.getElementById("message-sub"),statusToast:document.getElementById("status-toast"),keybindWarning:document.getElementById("keybind-warning"),menuContext:document.getElementById("menu-context"),buildInfo:document.getElementById("build-info"),buildInfoDetail:document.getElementById("build-info-detail"),copyBuildButton:document.getElementById("btn-copy-build"),modeButtons:Array.from(document.querySelectorAll(".mode-btn")),mapSelect:document.getElementById("map-select"),botSlider:document.getElementById("bot-count"),botLabel:document.getElementById("bot-count-label"),botDifficultySelect:document.getElementById("bot-difficulty"),winSlider:document.getElementById("win-count"),winLabel:document.getElementById("win-count-label"),autoRollToggle:document.getElementById("auto-roll-toggle"),invertP1:document.getElementById("invert-p1"),invertP2:document.getElementById("invert-p2"),cockpitCamP1:document.getElementById("cockpit-cam-p1"),cockpitCamP2:document.getElementById("cockpit-cam-p2"),portalsToggle:document.getElementById("portals-toggle"),speedSlider:document.getElementById("speed-slider"),speedLabel:document.getElementById("speed-label"),turnSlider:document.getElementById("turn-slider"),turnLabel:document.getElementById("turn-label"),planeSizeSlider:document.getElementById("plane-size-slider"),planeSizeLabel:document.getElementById("plane-size-label"),trailWidthSlider:document.getElementById("trail-width-slider"),trailWidthLabel:document.getElementById("trail-width-label"),gapSizeSlider:document.getElementById("gap-size-slider"),gapSizeLabel:document.getElementById("gap-size-label"),gapFrequencySlider:document.getElementById("gap-frequency-slider"),gapFrequencyLabel:document.getElementById("gap-frequency-label"),itemAmountSlider:document.getElementById("item-amount-slider"),itemAmountLabel:document.getElementById("item-amount-label"),fireRateSlider:document.getElementById("fire-rate-slider"),fireRateLabel:document.getElementById("fire-rate-label"),lockOnSlider:document.getElementById("lockon-slider"),lockOnLabel:document.getElementById("lockon-label"),crosshairP1:document.getElementById("crosshair-p1"),crosshairP2:document.getElementById("crosshair-p2"),keybindP1:document.getElementById("keybind-p1"),keybindP2:document.getElementById("keybind-p2"),resetKeysButton:document.getElementById("btn-reset-keys"),saveKeysButton:document.getElementById("btn-save-keys"),profileNameInput:document.getElementById("profile-name"),profileSelect:document.getElementById("profile-select"),profileSaveButton:document.getElementById("btn-profile-save"),profileLoadButton:document.getElementById("btn-profile-load"),profileDeleteButton:document.getElementById("btn-profile-delete"),startButton:document.getElementById("btn-start"),trainingEnabledToggle:document.getElementById("training-enabled-toggle"),trainingBotOnlyToggle:document.getElementById("training-bot-only-toggle"),trainingMortalBotsToggle:document.getElementById("training-mortal-bots-toggle"),trainingAutoRestartToggle:document.getElementById("training-auto-restart-toggle"),trainingSpectatorSplitToggle:document.getElementById("training-spectator-split-toggle"),trainingDualWorldsToggle:document.getElementById("training-dual-worlds-toggle"),trainingTimeScaleSlider:document.getElementById("training-time-scale-slider"),trainingTimeScaleLabel:document.getElementById("training-time-scale-label"),trainingAutoSaveSlider:document.getElementById("training-autosave-rounds-slider"),trainingAutoSaveLabel:document.getElementById("training-autosave-rounds-label"),trainingStartButton:document.getElementById("btn-training-start"),trainingSaveButton:document.getElementById("btn-training-save"),trainingResetButton:document.getElementById("btn-training-reset"),trainingStatus:document.getElementById("training-status"),trainingOverlay:document.getElementById("training-overlay"),trainingOverlayLines:document.getElementById("training-overlay-lines"),trainingOverlayProgressFill:document.getElementById("training-overlay-progress-fill"),trainingOverlayProgressLabel:document.getElementById("training-overlay-progress-label")},this._navButtons=[],this._menuButtonByPanel=new Map,this._lastMenuTrigger=null,this._buildInfoClipboardText="",this._setupMenuListeners(),this._setupMenuNavigation(),this._syncMenuControls(),this._markSettingsDirty(!1),this._renderBuildInfo(),this._kickoffLegacyLearningImport(),this.gameLoop.start(),window.addEventListener("keydown",c=>this._handleKeyCapture(c),!0),this._fpsTracker={samples:[],avg:60,update(c){c>0&&this.samples.push(1/c),this.samples.length>60&&this.samples.shift(),this.avg=this.samples.length>0?this.samples.reduce((h,u)=>h+u,0)/this.samples.length:60}},window.addEventListener("keydown",c=>{if(c.code==="KeyP"&&!this.keyCapture){this.isLowQuality=!this.isLowQuality;const h=this.isLowQuality?"LOW":"HIGH";this.renderer.setQuality(h),this._showStatusToast(`Grafik: ${h==="LOW"?"Niedrig (Schnell)":"Hoch (Schön)"}`)}c.code==="KeyF"&&!this.keyCapture&&(this.stats?(this.stats.remove(),this.stats=null):(this.stats=document.createElement("div"),this.stats.style.cssText="position:fixed;top:10px;left:10px;color:#0f0;font:13px/1.5 monospace;z-index:1000;pointer-events:none;background:rgba(0,0,0,0.6);padding:8px 12px;border-radius:6px;min-width:200px;white-space:pre-wrap;",document.body.appendChild(this.stats),this._statsTimer=0))});const s=()=>{this._saveLearningData(!1,!0)};window.addEventListener("beforeunload",s),window.addEventListener("pagehide",s),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&s()})}_formatBuildTime(){const t=new Date(Xr),e=Number.isNaN(t.getTime())?Xr:t.toISOString(),n=Number.isNaN(t.getTime())?Xr:t.toLocaleString("de-DE",{hour12:!1});return{short:e.slice(0,16).replace("T"," "),iso:e,local:n}}_renderBuildInfo(){const t=this._formatBuildTime(),e=`v${Wr} · Build ${Yr} · ${t.short}`,n=[`Version: v${Wr}`,`Build-ID: ${Yr}`,`Zeit (UTC): ${t.iso}`,`Zeit (lokal): ${t.local}`].join(`
`);this.ui.buildInfo&&(this.ui.buildInfo.textContent=e),this.ui.buildInfoDetail&&(this.ui.buildInfoDetail.textContent=n),this._buildInfoClipboardText=n}_copyBuildInfoToClipboard(){const t=this._buildInfoClipboardText||`v${Wr} · Build ${Yr}`,e=()=>{const n=document.createElement("textarea");n.value=t,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.top="-9999px",document.body.appendChild(n),n.select();const i=document.execCommand("copy");document.body.removeChild(n),this._showStatusToast(i?"Build-Info kopiert":"Kopieren nicht moeglich",1400,i?"success":"error")};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(()=>this._showStatusToast("Build-Info kopiert",1400,"success")).catch(()=>e());return}e()}_getMenuSectionLabel(t){if(!t)return"Hauptmenue";const e=this._menuButtonByPanel.get(t);if(e)return(e.textContent||"").replace(/\s+/g," ").trim();const n=document.querySelector(`#${t} .submenu-title`);return((n==null?void 0:n.textContent)||"Untermenue").replace(/\s+/g," ").trim()}_updateMenuContext(){var i;if(!this.ui.menuContext)return;const t=this._getMenuSectionLabel(this._activeSubmenu),e=this.activeProfileName||this._normalizeProfileName(((i=this.ui.profileNameInput)==null?void 0:i.value)||"")||"kein Profil",n=this.settingsDirty?"ungespeicherte Aenderungen":"alles gespeichert";this.ui.menuContext.textContent=`${t} · Profil: ${e} · ${n}`}_createDefaultSettings(){return{mode:"1p",mapKey:"standard",numBots:1,botDifficulty:"NORMAL",winsNeeded:5,autoRoll:!0,invertPitch:{PLAYER_1:!1,PLAYER_2:!1},cockpitCamera:{PLAYER_1:!1,PLAYER_2:!1},portalsEnabled:!0,gameplay:{speed:18,turnSensitivity:2.2,planeScale:1,trailWidth:.6,gapSize:.3,gapFrequency:.02,itemAmount:8,fireRate:.45,lockOnAngle:15,planarMode:!1,portalCount:0,planarLevelCount:5,portalBeams:!1},training:{enabled:!1,botVsBotOnly:!1,mortalBots:!1,autoRestart:!0,spectatorSplit:!1,dualWorlds:!1,timeScale:1e3,autoSaveRounds:5},controls:this._cloneDefaultControls()}}_cloneDefaultControls(){const t=qr(D.KEYS);return{PLAYER_1:{...t.PLAYER_1},PLAYER_2:{...t.PLAYER_2}}}_normalizePlayerControls(t,e){const n=t||{};return{UP:n.UP||e.UP,DOWN:n.DOWN||e.DOWN,LEFT:n.LEFT||e.LEFT,RIGHT:n.RIGHT||e.RIGHT,ROLL_LEFT:n.ROLL_LEFT||e.ROLL_LEFT,ROLL_RIGHT:n.ROLL_RIGHT||e.ROLL_RIGHT,BOOST:n.BOOST||e.BOOST,SHOOT:n.SHOOT||e.SHOOT,NEXT_ITEM:n.NEXT_ITEM||e.NEXT_ITEM,DROP:n.DROP||e.DROP,CAMERA:n.CAMERA||e.CAMERA}}_sanitizeSettings(t){var l,c,h,u,d,m,g,_,f,p,S,v,M,R,b,w,N,y,T,U,W,tt,C,B,V,q;const e=this._createDefaultSettings(),n=t&&typeof t=="object"?t:{},i=qr(e);i.mode=n.mode==="2p"?"2p":"1p",i.mapKey=D.MAPS[n.mapKey]?n.mapKey:e.mapKey,i.numBots=Ct(parseInt(n.numBots??e.numBots,10),0,8),i.botDifficulty=["EASY","NORMAL","HARD"].includes(n.botDifficulty)?n.botDifficulty:e.botDifficulty,i.winsNeeded=Ct(parseInt(n.winsNeeded??e.winsNeeded,10),1,15),i.autoRoll=typeof n.autoRoll=="boolean"?n.autoRoll:e.autoRoll,i.invertPitch.PLAYER_1=!!((l=n==null?void 0:n.invertPitch)!=null&&l.PLAYER_1),i.invertPitch.PLAYER_2=!!((c=n==null?void 0:n.invertPitch)!=null&&c.PLAYER_2),i.cockpitCamera.PLAYER_1=!!((h=n==null?void 0:n.cockpitCamera)!=null&&h.PLAYER_1),i.cockpitCamera.PLAYER_2=!!((u=n==null?void 0:n.cockpitCamera)!=null&&u.PLAYER_2),i.portalsEnabled=(n==null?void 0:n.portalsEnabled)!==void 0?!!n.portalsEnabled:e.portalsEnabled,i.gameplay.speed=Ct(parseFloat(((d=n==null?void 0:n.gameplay)==null?void 0:d.speed)??e.gameplay.speed),8,40),i.gameplay.turnSensitivity=Ct(parseFloat(((m=n==null?void 0:n.gameplay)==null?void 0:m.turnSensitivity)??e.gameplay.turnSensitivity),.8,5),i.gameplay.planeScale=Ct(parseFloat(((g=n==null?void 0:n.gameplay)==null?void 0:g.planeScale)??e.gameplay.planeScale),.6,2),i.gameplay.trailWidth=Ct(parseFloat(((_=n==null?void 0:n.gameplay)==null?void 0:_.trailWidth)??e.gameplay.trailWidth),.2,2.5),i.gameplay.gapSize=Ct(parseFloat(((f=n==null?void 0:n.gameplay)==null?void 0:f.gapSize)??e.gameplay.gapSize),.05,1.5),i.gameplay.gapFrequency=Ct(parseFloat(((p=n==null?void 0:n.gameplay)==null?void 0:p.gapFrequency)??e.gameplay.gapFrequency),0,.25),i.gameplay.itemAmount=Ct(parseInt(((S=n==null?void 0:n.gameplay)==null?void 0:S.itemAmount)??e.gameplay.itemAmount,10),1,20),i.gameplay.fireRate=Ct(parseFloat(((v=n==null?void 0:n.gameplay)==null?void 0:v.fireRate)??e.gameplay.fireRate),.1,2),i.gameplay.lockOnAngle=Ct(parseInt(((M=n==null?void 0:n.gameplay)==null?void 0:M.lockOnAngle)??e.gameplay.lockOnAngle,10),5,45),i.gameplay.planarMode=!!(((R=n==null?void 0:n.gameplay)==null?void 0:R.planarMode)??e.gameplay.planarMode),i.gameplay.portalCount=Ct(parseInt(((b=n==null?void 0:n.gameplay)==null?void 0:b.portalCount)??e.gameplay.portalCount,10),0,20),i.gameplay.planarLevelCount=Ct(parseInt(((w=n==null?void 0:n.gameplay)==null?void 0:w.planarLevelCount)??e.gameplay.planarLevelCount,10),2,10),i.gameplay.portalBeams=!1,i.training.enabled=!!(((N=n==null?void 0:n.training)==null?void 0:N.enabled)??e.training.enabled),i.training.botVsBotOnly=!!(((y=n==null?void 0:n.training)==null?void 0:y.botVsBotOnly)??e.training.botVsBotOnly),i.training.mortalBots=!!(((T=n==null?void 0:n.training)==null?void 0:T.mortalBots)??e.training.mortalBots),i.training.autoRestart=((U=n==null?void 0:n.training)==null?void 0:U.autoRestart)!==void 0?!!n.training.autoRestart:e.training.autoRestart,i.training.spectatorSplit=!!(((W=n==null?void 0:n.training)==null?void 0:W.spectatorSplit)??e.training.spectatorSplit),i.training.dualWorlds=!!(((tt=n==null?void 0:n.training)==null?void 0:tt.dualWorlds)??e.training.dualWorlds);const s=parseFloat(((C=n==null?void 0:n.training)==null?void 0:C.timeScale)??e.training.timeScale),a=this._getTrainingTimeScaleBounds();i.training.timeScale=Ct(Number.isFinite(s)?s:e.training.timeScale,a.min,a.max);const o=parseInt(((B=n==null?void 0:n.training)==null?void 0:B.autoSaveRounds)??e.training.autoSaveRounds,10);return i.training.autoSaveRounds=Ct(Number.isFinite(o)?o:e.training.autoSaveRounds,1,50),i.controls.PLAYER_1=this._normalizePlayerControls((V=n==null?void 0:n.controls)==null?void 0:V.PLAYER_1,e.controls.PLAYER_1),i.controls.PLAYER_2=this._normalizePlayerControls((q=n==null?void 0:n.controls)==null?void 0:q.PLAYER_2,e.controls.PLAYER_2),i}_loadSettings(){try{const t=[Al,...T_];for(const e of t){const n=localStorage.getItem(e);if(!n)continue;const i=JSON.parse(n);return this._sanitizeSettings(i)}}catch{}return this._createDefaultSettings()}_saveSettings(){try{localStorage.setItem(Al,JSON.stringify(this.settings)),this._markSettingsDirty(!1)}catch{}}_loadProfiles(){try{const t=localStorage.getItem(Tl);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return[];const n=[],i=new Set;for(const s of e){const a=this._normalizeProfileName((s==null?void 0:s.name)||""),o=this._getProfileNameKey(a);!a||i.has(o)||(i.add(o),n.push({name:a,updatedAt:Number((s==null?void 0:s.updatedAt)||Date.now()),settings:this._sanitizeSettings((s==null?void 0:s.settings)||{})}))}return n.sort((s,a)=>a.updatedAt-s.updatedAt),n}catch{return[]}}_saveProfiles(){try{return localStorage.setItem(Tl,JSON.stringify(this.settingsProfiles)),!0}catch{return!1}}_normalizeProfileName(t){return String(t||"").trim().replace(/\s+/g," ").slice(0,32)}_getProfileNameKey(t){return this._normalizeProfileName(t).toLocaleLowerCase()}_findProfileIndexByName(t){const e=this._getProfileNameKey(t);return e?this.settingsProfiles.findIndex(n=>this._getProfileNameKey(n.name)===e):-1}_findProfileByName(t){const e=this._findProfileIndexByName(t);return e>=0?this.settingsProfiles[e]:null}_applySettingsToRuntime(){var a,o,l,c;const t=!!((a=this.settings.training)!=null&&a.enabled&&((o=this.settings.training)!=null&&o.botVsBotOnly)),e=!!(t&&((l=this.settings.training)!=null&&l.dualWorlds));this.numHumans=t?0:this.settings.mode==="2p"?2:1;const n=e?4:t?2:0,i=e?4:8,s=parseInt(this.settings.numBots,10);if(this.numBots=Ct(Number.isFinite(s)?s:n,n,i),this.settings.numBots=this.numBots,this.mapKey=this.settings.mapKey,this.winsNeeded=this.settings.winsNeeded,D.PLAYER.SPEED=this.settings.gameplay.speed,D.PLAYER.TURN_SPEED=this.settings.gameplay.turnSensitivity,D.PLAYER.MODEL_SCALE=this.settings.gameplay.planeScale,D.PLAYER.HITBOX_RADIUS=.8*this.settings.gameplay.planeScale,D.PLAYER.AUTO_ROLL=this.settings.autoRoll,this.settings.gameplay){const h=!!this.settings.gameplay.planarMode;D.GAMEPLAY.PLANAR_MODE=e?!1:h,D.GAMEPLAY.PORTAL_COUNT=this.settings.gameplay.portalCount||0,D.GAMEPLAY.PLANAR_LEVEL_COUNT=Ct(parseInt(this.settings.gameplay.planarLevelCount??5,10),2,10)}D.TRAIL.WIDTH=this.settings.gameplay.trailWidth,D.TRAIL.GAP_DURATION=this.settings.gameplay.gapSize,D.TRAIL.GAP_CHANCE=this.settings.gameplay.gapFrequency,D.POWERUP.MAX_ON_FIELD=Math.round(this.settings.gameplay.itemAmount),D.PROJECTILE.COOLDOWN=this.settings.gameplay.fireRate,this.settings.gameplay&&(D.GAMEPLAY.PORTAL_BEAMS=!1),D.BOT.ACTIVE_DIFFICULTY=this.settings.botDifficulty||D.BOT.DEFAULT_DIFFICULTY,this._setLearningEnginesEnabled(!!((c=this.settings.training)!=null&&c.enabled)),this.arena&&this.arena.toggleBeams&&this.arena.toggleBeams(D.GAMEPLAY.PORTAL_BEAMS),this.entityManager&&this.entityManager.setBotDifficulty&&this.entityManager.setBotDifficulty(D.BOT.ACTIVE_DIFFICULTY),this.entityManager&&this.entityManager.setTrainingOptions&&this.entityManager.setTrainingOptions(this.settings.training),this.input.setBindings(this.settings.controls),D.HOMING.LOCK_ON_ANGLE=this.settings.gameplay.lockOnAngle,this._applyLoopTiming(1)}_setupMenuListeners(){this.ui.modeButtons.forEach(a=>{a.addEventListener("click",()=>{this.settings.mode=a.dataset.mode==="2p"?"2p":"1p",this._onSettingsChanged()})}),this.ui.mapSelect.addEventListener("change",a=>{this.settings.mapKey=D.MAPS[a.target.value]?a.target.value:"standard",this._onSettingsChanged()}),this.ui.botSlider.addEventListener("input",()=>{this.settings.numBots=Ct(parseInt(this.ui.botSlider.value,10),0,8),this._onSettingsChanged()}),this.ui.botDifficultySelect&&this.ui.botDifficultySelect.addEventListener("change",()=>{const a=String(this.ui.botDifficultySelect.value||"").toUpperCase();this.settings.botDifficulty=["EASY","NORMAL","HARD"].includes(a)?a:"NORMAL",this._onSettingsChanged()}),this.ui.winSlider.addEventListener("input",()=>{this.settings.winsNeeded=Ct(parseInt(this.ui.winSlider.value,10),1,15),this._onSettingsChanged()}),this.ui.autoRollToggle.addEventListener("change",()=>{this.settings.autoRoll=!!this.ui.autoRollToggle.checked,this._onSettingsChanged()}),this.ui.invertP1.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_1=!!this.ui.invertP1.checked,this._onSettingsChanged()}),this.ui.invertP2.addEventListener("change",()=>{this.settings.invertPitch.PLAYER_2=!!this.ui.invertP2.checked,this._onSettingsChanged()}),this.ui.cockpitCamP1.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_1=!!this.ui.cockpitCamP1.checked,this._onSettingsChanged()}),this.ui.cockpitCamP2.addEventListener("change",()=>{this.settings.cockpitCamera.PLAYER_2=!!this.ui.cockpitCamP2.checked,this._onSettingsChanged()});const t=document.getElementById("planar-mode-toggle");t&&t.addEventListener("change",a=>{this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarMode=a.target.checked,this.settings.gameplay.planarMode&&(this.settings.gameplay.portalCount||0)===0&&(this.settings.gameplay.portalCount=4,this._showStatusToast("Ebenen-Modus: 4 Portale aktiviert")),this._onSettingsChanged()}),this.ui.portalsToggle.addEventListener("change",()=>{this.settings.portalsEnabled=!!this.ui.portalsToggle.checked,this._onSettingsChanged()}),this.ui.speedSlider.addEventListener("input",()=>{this.settings.gameplay.speed=Ct(parseFloat(this.ui.speedSlider.value),8,40),this._onSettingsChanged()}),this.ui.turnSlider.addEventListener("input",()=>{this.settings.gameplay.turnSensitivity=Ct(parseFloat(this.ui.turnSlider.value),.8,5),this._onSettingsChanged()}),this.ui.planeSizeSlider.addEventListener("input",()=>{this.settings.gameplay.planeScale=Ct(parseFloat(this.ui.planeSizeSlider.value),.6,2),this._onSettingsChanged()}),this.ui.trailWidthSlider.addEventListener("input",()=>{this.settings.gameplay.trailWidth=Ct(parseFloat(this.ui.trailWidthSlider.value),.2,2.5),this._onSettingsChanged()}),this.ui.gapSizeSlider.addEventListener("input",()=>{this.settings.gameplay.gapSize=Ct(parseFloat(this.ui.gapSizeSlider.value),.05,1.5),this._onSettingsChanged()}),this.ui.gapFrequencySlider.addEventListener("input",()=>{this.settings.gameplay.gapFrequency=Ct(parseFloat(this.ui.gapFrequencySlider.value),0,.25),this._onSettingsChanged()}),this.ui.itemAmountSlider.addEventListener("input",()=>{this.settings.gameplay.itemAmount=Ct(parseInt(this.ui.itemAmountSlider.value,10),1,20),this._onSettingsChanged()}),this.ui.fireRateSlider.addEventListener("input",()=>{this.settings.gameplay.fireRate=Ct(parseFloat(this.ui.fireRateSlider.value),.1,2),this._onSettingsChanged()}),this.ui.lockOnSlider.addEventListener("input",()=>{this.settings.gameplay.lockOnAngle=Ct(parseInt(this.ui.lockOnSlider.value,10),5,45),this._onSettingsChanged()}),this.ui.keybindP1.addEventListener("click",a=>{const o=a.target.closest("button.keybind-btn");o&&this._startKeyCapture("PLAYER_1",o.dataset.action)}),this.ui.keybindP2.addEventListener("click",a=>{const o=a.target.closest("button.keybind-btn");o&&this._startKeyCapture("PLAYER_2",o.dataset.action)}),this.ui.resetKeysButton.addEventListener("click",()=>{this.settings.controls=this._cloneDefaultControls(),this._onSettingsChanged(),this._showStatusToast("✅ Standard-Tasten wiederhergestellt")}),this.ui.saveKeysButton.addEventListener("click",()=>{this._saveSettings(),this._showStatusToast("Einstellungen gespeichert")}),this.ui.startButton.addEventListener("click",()=>{this.startMatch()}),this.ui.profileSaveButton&&this.ui.profileSaveButton.addEventListener("click",()=>{var a;this._saveProfile(((a=this.ui.profileNameInput)==null?void 0:a.value)||"")}),this.ui.profileLoadButton&&this.ui.profileLoadButton.addEventListener("click",()=>{var o;const a=this._normalizeProfileName(((o=this.ui.profileSelect)==null?void 0:o.value)||"");if(!a){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._loadProfile(a)}),this.ui.profileDeleteButton&&this.ui.profileDeleteButton.addEventListener("click",()=>{var o;const a=this._normalizeProfileName(((o=this.ui.profileSelect)==null?void 0:o.value)||"");if(!a){this._showStatusToast("Profil auswaehlen",1400,"error");return}this._deleteProfile(a)}),this.ui.profileSelect&&this.ui.profileSelect.addEventListener("change",()=>{const a=this._normalizeProfileName(this.ui.profileSelect.value||""),o=this._findProfileByName(a);this.activeProfileName=o?o.name:"",this.ui.profileNameInput&&(this.ui.profileNameInput.value=this.activeProfileName),this._syncProfileActionState()}),this.ui.profileNameInput&&(this.ui.profileNameInput.addEventListener("input",()=>{this._syncProfileActionState()}),this.ui.profileNameInput.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),this._saveProfile(this.ui.profileNameInput.value||""))}));const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");e&&n&&e.addEventListener("input",a=>{const o=parseInt(a.target.value,10);n.textContent=o,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.portalCount=o,this._onSettingsChanged()});const i=document.getElementById("planar-level-count-slider"),s=document.getElementById("planar-level-count-label");i&&s&&i.addEventListener("input",a=>{const o=Ct(parseInt(a.target.value,10),2,10);s.textContent=o,this.settings.gameplay||(this.settings.gameplay={}),this.settings.gameplay.planarLevelCount=o,this._onSettingsChanged()}),this.ui.copyBuildButton&&this.ui.copyBuildButton.addEventListener("click",()=>{this._copyBuildInfoToClipboard()}),this.ui.trainingEnabledToggle&&this.ui.trainingEnabledToggle.addEventListener("change",()=>{this.settings.training.enabled=!!this.ui.trainingEnabledToggle.checked,this._onSettingsChanged()}),this.ui.trainingBotOnlyToggle&&this.ui.trainingBotOnlyToggle.addEventListener("change",()=>{if(this.settings.training.botVsBotOnly=!!this.ui.trainingBotOnlyToggle.checked,this.settings.training.botVsBotOnly){const a=this.settings.training.dualWorlds?4:2;this.settings.numBots=Math.max(a,this.settings.numBots||a),this.settings.training.mortalBots=!0}this._onSettingsChanged()}),this.ui.trainingMortalBotsToggle&&this.ui.trainingMortalBotsToggle.addEventListener("change",()=>{this.settings.training.mortalBots=!!this.ui.trainingMortalBotsToggle.checked,this._onSettingsChanged()}),this.ui.trainingAutoRestartToggle&&this.ui.trainingAutoRestartToggle.addEventListener("change",()=>{this.settings.training.autoRestart=!!this.ui.trainingAutoRestartToggle.checked,this._onSettingsChanged()}),this.ui.trainingSpectatorSplitToggle&&this.ui.trainingSpectatorSplitToggle.addEventListener("change",()=>{this.settings.training.spectatorSplit=!!this.ui.trainingSpectatorSplitToggle.checked,this._onSettingsChanged()}),this.ui.trainingDualWorldsToggle&&this.ui.trainingDualWorldsToggle.addEventListener("change",()=>{this.settings.training.dualWorlds=!!this.ui.trainingDualWorldsToggle.checked,this.settings.training.dualWorlds&&(this.settings.training.enabled=!0,this.settings.training.botVsBotOnly=!0,this.settings.training.mortalBots=!0,this.settings.training.spectatorSplit=!0,this.settings.numBots=4),this._onSettingsChanged()}),this.ui.trainingTimeScaleSlider&&this.ui.trainingTimeScaleSlider.addEventListener("input",()=>{const a=this._getTrainingTimeScaleBounds(),o=parseFloat(this.ui.trainingTimeScaleSlider.value);this.settings.training.timeScale=Ct(Number.isFinite(o)?o:1,a.min,a.max),this._onSettingsChanged()}),this.ui.trainingAutoSaveSlider&&this.ui.trainingAutoSaveSlider.addEventListener("input",()=>{this.settings.training.autoSaveRounds=Ct(parseInt(this.ui.trainingAutoSaveSlider.value,10),1,50),this._onSettingsChanged()}),this.ui.trainingStartButton&&this.ui.trainingStartButton.addEventListener("click",()=>{this._startDeveloperTraining()}),this.ui.trainingSaveButton&&this.ui.trainingSaveButton.addEventListener("click",()=>{this._saveLearningData(!0)}),this.ui.trainingResetButton&&this.ui.trainingResetButton.addEventListener("click",()=>{this._resetLearningData()})}_setupMenuNavigation(){this._menuNav=document.getElementById("menu-nav"),this._submenuPanels=Array.from(document.querySelectorAll(".submenu-panel")),this._activeSubmenu=null,this._navButtons=Array.from(document.querySelectorAll(".nav-btn[data-submenu]")),this._menuButtonByPanel.clear();for(const e of this._submenuPanels)e.setAttribute("aria-hidden",e.classList.contains("hidden")?"true":"false");for(const e of this._navButtons){const n=e.dataset.submenu;n&&this._menuButtonByPanel.set(n,e),e.setAttribute("aria-expanded","false"),e.addEventListener("click",()=>{this._lastMenuTrigger=e,this._showSubmenu(n)})}this._menuNav&&this._menuNav.addEventListener("keydown",e=>{var a,o;if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const i=this._navButtons.indexOf(document.activeElement);if(i<0)return;if(e.preventDefault(),e.key==="Home"){(a=this._navButtons[0])==null||a.focus();return}if(e.key==="End"){(o=this._navButtons[this._navButtons.length-1])==null||o.focus();return}const s=e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1;this._focusNextNavButton(i,s)});const t=document.querySelectorAll(".back-btn[data-back]");for(const e of t)e.addEventListener("click",()=>{this._showMainNav()});window.addEventListener("keydown",e=>{e.code==="Escape"&&this.state==="MENU"&&this._activeSubmenu&&(e.preventDefault(),this._showMainNav())}),this._updateMenuNavState(),this._updateMenuContext()}_focusNextNavButton(t,e){var s;if(!this._navButtons.length)return;const n=this._navButtons.length,i=(t+e+n)%n;(s=this._navButtons[i])==null||s.focus()}_updateMenuNavState(){for(const t of this._navButtons){const e=t.dataset.submenu,n=!!this._activeSubmenu&&e===this._activeSubmenu;t.classList.toggle("active",n),t.setAttribute("aria-expanded",n?"true":"false")}}_focusFirstInSubmenu(t){if(!t)return;const e=t.querySelector('button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');e&&e.focus()}_showSubmenu(t){if(!t)return;this._menuNav&&(this._menuNav.classList.add("hidden"),this._menuNav.setAttribute("aria-hidden","true"));for(const n of this._submenuPanels)n.classList.add("hidden"),n.setAttribute("aria-hidden","true");const e=document.getElementById(t);e&&(e.classList.remove("hidden"),e.setAttribute("aria-hidden","false"),this._activeSubmenu=t,this._updateMenuNavState(),this._focusFirstInSubmenu(e),this._updateMenuContext())}_showMainNav(){for(const e of this._submenuPanels)e.classList.add("hidden"),e.setAttribute("aria-hidden","true");this._menuNav&&(this._menuNav.classList.remove("hidden"),this._menuNav.setAttribute("aria-hidden","false")),this._activeSubmenu=null,this._updateMenuNavState(),this._updateMenuContext();const t=this._lastMenuTrigger||this._navButtons[0];t&&this.state==="MENU"&&t.focus()}_onSettingsChanged(){this._applySettingsToRuntime(),this._markSettingsDirty(!0),this._syncMenuControls()}_syncMenuControls(){var a,o,l,c,h,u,d,m,g,_,f;this.ui.modeButtons.forEach(p=>{p.classList.toggle("active",p.dataset.mode===this.settings.mode)}),this.ui.mapSelect.value=this.settings.mapKey,this.ui.botSlider.value=String(this.settings.numBots),this.ui.botLabel.textContent=String(this.settings.numBots),this.ui.botDifficultySelect&&(this.ui.botDifficultySelect.value=this.settings.botDifficulty||"NORMAL"),this.ui.winSlider.value=String(this.settings.winsNeeded),this.ui.winLabel.textContent=String(this.settings.winsNeeded),this.ui.autoRollToggle.checked=this.settings.autoRoll,this.ui.invertP1.checked=this.settings.invertPitch.PLAYER_1,this.ui.invertP2.checked=this.settings.invertPitch.PLAYER_2,this.ui.cockpitCamP1.checked=this.settings.cockpitCamera.PLAYER_1,this.ui.cockpitCamP2.checked=this.settings.cockpitCamera.PLAYER_2;const t=document.getElementById("planar-mode-toggle");t&&(t.checked=((a=this.settings.gameplay)==null?void 0:a.planarMode)||!1),this.ui.portalsToggle.checked=this.settings.portalsEnabled;const e=document.getElementById("portal-count-slider"),n=document.getElementById("portal-count-label");if(e&&n){const p=((o=this.settings.gameplay)==null?void 0:o.portalCount)||0;e.value=p,n.textContent=p}const i=document.getElementById("planar-level-count-slider"),s=document.getElementById("planar-level-count-label");if(i&&s){const p=Ct(parseInt(((l=this.settings.gameplay)==null?void 0:l.planarLevelCount)??5,10),2,10);i.value=p,s.textContent=p}if(this.ui.speedSlider.value=String(this.settings.gameplay.speed),this.ui.speedLabel.textContent=this.settings.gameplay.speed.toFixed(1),this.ui.turnSlider.value=String(this.settings.gameplay.turnSensitivity),this.ui.turnLabel.textContent=this.settings.gameplay.turnSensitivity.toFixed(1),this.ui.planeSizeSlider.value=String(this.settings.gameplay.planeScale),this.ui.planeSizeLabel.textContent=this.settings.gameplay.planeScale.toFixed(1),this.ui.trailWidthSlider.value=String(this.settings.gameplay.trailWidth),this.ui.trailWidthLabel.textContent=this.settings.gameplay.trailWidth.toFixed(2),this.ui.gapSizeSlider.value=String(this.settings.gameplay.gapSize),this.ui.gapSizeLabel.textContent=this.settings.gameplay.gapSize.toFixed(2),this.ui.gapFrequencySlider.value=String(this.settings.gameplay.gapFrequency),this.ui.gapFrequencyLabel.textContent=this.settings.gameplay.gapFrequency.toFixed(3),this.ui.itemAmountSlider.value=String(this.settings.gameplay.itemAmount),this.ui.itemAmountLabel.textContent=String(this.settings.gameplay.itemAmount),this.ui.fireRateSlider.value=String(this.settings.gameplay.fireRate),this.ui.fireRateLabel.textContent=this.settings.gameplay.fireRate.toFixed(2),this.ui.lockOnSlider.value=String(this.settings.gameplay.lockOnAngle),this.ui.lockOnLabel.textContent=String(this.settings.gameplay.lockOnAngle),this.ui.trainingEnabledToggle&&(this.ui.trainingEnabledToggle.checked=!!((c=this.settings.training)!=null&&c.enabled)),this.ui.trainingBotOnlyToggle&&(this.ui.trainingBotOnlyToggle.checked=!!((h=this.settings.training)!=null&&h.botVsBotOnly)),this.ui.trainingMortalBotsToggle&&(this.ui.trainingMortalBotsToggle.checked=!!((u=this.settings.training)!=null&&u.mortalBots)),this.ui.trainingAutoRestartToggle&&(this.ui.trainingAutoRestartToggle.checked=!!((d=this.settings.training)!=null&&d.autoRestart)),this.ui.trainingSpectatorSplitToggle&&(this.ui.trainingSpectatorSplitToggle.checked=!!((m=this.settings.training)!=null&&m.spectatorSplit)),this.ui.trainingDualWorldsToggle&&(this.ui.trainingDualWorldsToggle.checked=!!((g=this.settings.training)!=null&&g.dualWorlds)),this.ui.trainingTimeScaleSlider&&this.ui.trainingTimeScaleLabel){const p=this._getTrainingTimeScaleBounds(),S=Ct(parseFloat(((_=this.settings.training)==null?void 0:_.timeScale)??1),p.min,p.max);this.ui.trainingTimeScaleSlider.max=String(p.max),this.ui.trainingTimeScaleSlider.value=S.toFixed(1),this.ui.trainingTimeScaleLabel.textContent=S.toFixed(1)}if(this.ui.trainingAutoSaveSlider&&this.ui.trainingAutoSaveLabel){const p=Ct(parseInt(((f=this.settings.training)==null?void 0:f.autoSaveRounds)??5,10),1,50);this.ui.trainingAutoSaveSlider.value=String(p),this.ui.trainingAutoSaveLabel.textContent=String(p)}this._renderKeybindEditor(),this._syncP2HudVisibility(),this._syncProfileControls(),this._updateSaveButtonState(),this._updateTrainingStatus()}_markSettingsDirty(t){this.settingsDirty=!!t,this._updateSaveButtonState()}_updateSaveButtonState(){var t;(t=this.ui)!=null&&t.saveKeysButton&&(this.ui.saveKeysButton.classList.toggle("unsaved",this.settingsDirty),this.ui.saveKeysButton.textContent=this.settingsDirty?"💾 Einstellungen explizit speichern *":"💾 Einstellungen explizit speichern",this._updateMenuContext())}_syncProfileControls(){var a;if(!this.ui.profileSelect)return;const t=this._normalizeProfileName(this.activeProfileName||this.ui.profileSelect.value||""),e=[...this.settingsProfiles].sort((o,l)=>l.updatedAt-o.updatedAt);this.ui.profileSelect.innerHTML="";const n=document.createElement("option");n.value="",n.textContent="Kein Profil gewaehlt",this.ui.profileSelect.appendChild(n);for(const o of e){const l=document.createElement("option");l.value=o.name,l.textContent=o.name,this.ui.profileSelect.appendChild(l)}const i=this._findProfileByName(t),s=i?i.name:"";this.activeProfileName=s,this.ui.profileSelect.value=s,this.ui.profileNameInput&&!((a=document.activeElement)!=null&&a.isSameNode(this.ui.profileNameInput))&&(this.ui.profileNameInput.value=s),this._syncProfileActionState()}_syncProfileActionState(){var a,o;const t=this._findProfileByName(((a=this.ui.profileSelect)==null?void 0:a.value)||this.activeProfileName||""),e=this._normalizeProfileName(((o=this.ui.profileNameInput)==null?void 0:o.value)||""),n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),s=e&&n>=0&&n===i;this.ui.profileLoadButton&&(this.ui.profileLoadButton.disabled=!t),this.ui.profileDeleteButton&&(this.ui.profileDeleteButton.disabled=!t),this.ui.profileSaveButton&&(this.ui.profileSaveButton.disabled=!e,e?s?this.ui.profileSaveButton.textContent="Aktives Profil aktualisieren":n>=0?this.ui.profileSaveButton.textContent="Name bereits vergeben":this.ui.profileSaveButton.textContent="Neues Profil speichern":this.ui.profileSaveButton.textContent="Profil unter Namen speichern"),this._updateMenuContext()}_saveProfile(t){const e=this._normalizeProfileName(t);if(!e)return this._showStatusToast("Profilname fehlt",1400,"error"),!1;const n=this._findProfileIndexByName(e),i=this._findProfileIndexByName(this.activeProfileName),s=n>=0&&n===i;if(n>=0&&!s)return this._showStatusToast("Name existiert bereits",1500,"error"),!1;const a=n>=0,o={name:e,updatedAt:Date.now(),settings:qr(this.settings)};n>=0?this.settingsProfiles[n]=o:this.settingsProfiles.push(o),this.activeProfileName=e;const l=this._saveProfiles();return this._syncProfileControls(),l?(this._showStatusToast(a?`Profil aktualisiert: ${e}`:`Profil gespeichert: ${e}`,1500,"success"),!0):(this._showStatusToast("Profil konnte nicht gespeichert werden",1700,"error"),!1)}_loadProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileByName(e);return n?(this.settings=this._sanitizeSettings(n.settings),this.activeProfileName=n.name,this._onSettingsChanged(),this._markSettingsDirty(!1),this._showStatusToast(`Profil geladen: ${n.name}`,1400,"success"),!0):(this._showStatusToast("Profil nicht gefunden",1500,"error"),!1)}_deleteProfile(t){const e=this._normalizeProfileName(t),n=this._findProfileIndexByName(e);if(n<0)return this._showStatusToast("Profil nicht gefunden",1500,"error"),!1;const i=this.settingsProfiles[n].name;this.settingsProfiles.splice(n,1),this._findProfileIndexByName(this.activeProfileName)<0&&(this.activeProfileName="");const s=this._saveProfiles();return this._syncProfileControls(),s?(this._showStatusToast(`Profil geloescht: ${i}`,1400,"success"),!0):(this._showStatusToast("Profil konnte nicht geloescht werden",1700,"error"),!1)}_renderKeybindEditor(){const t=this._collectKeyConflicts();this._renderKeybindRows("PLAYER_1",this.ui.keybindP1,t),this._renderKeybindRows("PLAYER_2",this.ui.keybindP2,t),this._updateKeyConflictWarning(t)}_renderKeybindRows(t,e,n){e.innerHTML="";for(const i of Rl){const s=document.createElement("div");s.className="key-row";const a=document.createElement("div");a.className="key-action",a.textContent=i.label;const o=this._getControlValue(t,i.key),l=document.createElement("button");l.type="button",l.className="keybind-btn",l.dataset.action=i.key;const c=!!o&&(n.get(o)||0)>1;l.textContent=this._formatKeyCode(o)+(c?"  (Konflikt)":""),c&&(s.classList.add("conflict"),l.classList.add("conflict")),this.keyCapture&&this.keyCapture.playerKey===t&&this.keyCapture.actionKey===i.key&&(l.classList.add("listening"),l.textContent="Taste druecken..."),s.appendChild(a),s.appendChild(l),e.appendChild(s)}}_startKeyCapture(t,e){this.keyCapture={playerKey:t,actionKey:e},this._renderKeybindEditor()}_handleKeyCapture(t){if(!(!this.keyCapture||this.ui.mainMenu.classList.contains("hidden"))){if(t.preventDefault(),t.stopPropagation(),t.code==="Escape"){this.keyCapture=null,this._renderKeybindEditor();return}this._setControlValue(this.keyCapture.playerKey,this.keyCapture.actionKey,t.code),this.keyCapture=null,this._onSettingsChanged(),this._showStatusToast("✅ Taste gespeichert!")}}_getControlValue(t,e){return this.settings.controls[t][e]||""}_setControlValue(t,e,n){this.settings.controls[t][e]=n}_collectKeyConflicts(){const t=new Map;for(const e of["PLAYER_1","PLAYER_2"])for(const n of Rl){const i=this._getControlValue(e,n.key);i&&t.set(i,(t.get(i)||0)+1)}return t}_updateKeyConflictWarning(t){const e=Array.from(t.entries()).filter(([,n])=>n>1).map(([n])=>this._formatKeyCode(n));if(e.length===0){this.ui.keybindWarning.classList.add("hidden"),this.ui.keybindWarning.textContent="";return}this.ui.keybindWarning.classList.remove("hidden"),this.ui.keybindWarning.textContent=`Achtung: Mehrfachbelegte Tasten: ${e.join(", ")}`}_formatKeyCode(t){if(!t)return"-";const e={ArrowUp:"Arrow Up",ArrowDown:"Arrow Down",ArrowLeft:"Arrow Left",ArrowRight:"Arrow Right",ShiftLeft:"Shift Left",ShiftRight:"Shift Right",Space:"Space",Enter:"Enter",Escape:"Escape",ControlLeft:"Ctrl Left",ControlRight:"Ctrl Right",AltLeft:"Alt Left",AltRight:"Alt Right"};return e[t]?e[t]:t.startsWith("Key")?t.slice(3):t.startsWith("Digit")?t.slice(5):t.startsWith("Numpad")?`Num ${t.slice(6)}`:t}_showStatusToast(t,e=1200,n="info"){if(!this.ui.statusToast)return;const i=n==="success"||n==="error"?n:"info";this.ui.statusToast.textContent=t,this.ui.statusToast.classList.remove("hidden","show","toast-info","toast-success","toast-error"),this.ui.statusToast.classList.add(`toast-${i}`),this.ui.statusToast.offsetWidth,this.ui.statusToast.classList.add("show"),this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.ui.statusToast.classList.remove("show"),this.ui.statusToast.classList.add("hidden")},e)}_showPlayerFeedback(t,e){if(!t)return;const n=t.isBot?`Bot ${t.index+1}`:`P${t.index+1}`;this._showStatusToast(`${n}: ${e}`)}_syncP2HudVisibility(){this.ui.p1Hud&&this.ui.p1Hud.classList.toggle("hidden",this.numHumans<1),this.ui.p2Hud&&this.ui.p2Hud.classList.toggle("hidden",this.numHumans!==2)}_getTrainingTimeScaleBounds(){var n,i;const t=Number((i=(n=D.BOT)==null?void 0:n.LEARNING)==null?void 0:i.MAX_TRAINING_TIME_SCALE);return{min:.5,max:Number.isFinite(t)?Math.max(1,t):1e3}}_getTrainingBaseTimeScale(){var i,s;if(!!!((s=(i=this.settings)==null?void 0:i.training)!=null&&s.enabled))return 1;const e=parseFloat(this.settings.training.timeScale??1),n=this._getTrainingTimeScaleBounds();return Ct(Number.isFinite(e)?e:1,n.min,n.max)}_applyLoopTiming(t=1){if(!this.gameLoop)return;const e=this._getTrainingTimeScaleBounds(),n=this.state==="PLAYING"||this.state==="ROUND_END",i=n?this._getTrainingBaseTimeScale():1,s=Number.isFinite(t)&&t>0?t:1,a=Ct(i*s,.05,e.max);this.gameLoop.setTimeScale(a);const o=Math.max(1,Math.floor(D.MAX_UPDATES_PER_FRAME)),l=n&&this._isTrainingBotOnlyMode()&&a>8;let c=o,h=8,u=!1;l&&(c=Ct(Math.ceil(a),o,1200),h=Ct(6+Math.log10(a+1)*4,6,16),u=!0),typeof this.gameLoop.configureUpdateBudget=="function"&&this.gameLoop.configureUpdateBudget({maxUpdatesPerFrame:c,maxUpdateCpuMs:h,dropAccumulatorOnBudgetExhaust:u})}_isTrainingBotOnlyMode(){var t,e,n,i;return!!((e=(t=this.settings)==null?void 0:t.training)!=null&&e.enabled&&((i=(n=this.settings)==null?void 0:n.training)!=null&&i.botVsBotOnly))}_isTrainingDualWorldsMode(){var t,e;return!!(this._isTrainingBotOnlyMode()&&((e=(t=this.settings)==null?void 0:t.training)!=null&&e.dualWorlds)&&(this.numBots||0)>=4)}_isTrainingSpectatorSplitMode(){var t,e;return this._isTrainingDualWorldsMode()?!0:!!(this._isTrainingBotOnlyMode()&&((e=(t=this.settings)==null?void 0:t.training)!=null&&e.spectatorSplit)&&(this.numBots||0)>=2)}_getLearningEngines(){const t=[];return this.botLearning3D&&t.push(this.botLearning3D),this.botLearningPlanar&&this.botLearningPlanar!==this.botLearning3D&&t.push(this.botLearningPlanar),t}_getLearningEngineMap(){return{mode3d:this.botLearning3D||null,planar:this.botLearningPlanar||this.botLearning3D||null}}_setLearningEnginesEnabled(t){const e=!!t,n=this._getLearningEngines();for(let i=0;i<n.length;i++)n[i].setEnabled(e),n[i].setTrainingEnabled(e)}_kickoffLegacyLearningImport(){this._legacyLearningImportDone||this._legacyLearningImportPromise||(this._legacyLearningImportPromise=(async()=>{const t=await this._importLegacyLearningDataIfAvailable(),e=this.state==="MENU",n=e?this._upgradeActiveLearningSchemas():0;n>0&&(this._saveLearningData(!1,!0),this._updateTrainingStatus(),((t==null?void 0:t.integratedSources)||0)<=0&&this._showStatusToast(`Lernschema aktualisiert (${n} Engine${n>1?"s":""})`,2200,"success")),!!(t!=null&&t.deferred)||!e||(this._legacyLearningImportDone=!0)})().catch(t=>{console.warn("[Learning] Legacy import failed.",t)}).finally(()=>{this._legacyLearningImportPromise=null}))}async _importLegacyLearningDataIfAvailable(){if(this._getLearningEngines().length===0)return;const e=this._loadLearningImportState(),n=new Set(e.importedSourceIds||[]),i=this._collectLegacyLearningStorageSources(),s=await this._loadLegacyLearningFileSources(),a=[...i,...s];let o=0,l=0,c=0,h=!1;for(let u=0;u<a.length;u++){if(this.state!=="MENU"){h=!0;break}const d=a[u],m=this._buildLegacySourceId(d.payload);if(!m)continue;const g=`${m}|mode:${d.hintMode||"both"}`;if(n.has(g))continue;const _=this._toLegacyEngineDump(d.payload,"3d",d.hintMode),f=this._toLegacyEngineDump(d.payload,"planar",d.hintMode);let p=!1;if(_&&this.botLearning3D&&(typeof this.botLearning3D.mergeDumpAndSave=="function"?p=!!this.botLearning3D.mergeDumpAndSave(_)||p:typeof this.botLearning3D.importDumpAndSave=="function"&&(this.botLearning3D.importDumpAndSave(_),p=!0),p&&(l+=_.states.length)),f&&this.botLearningPlanar&&this.botLearningPlanar!==this.botLearning3D){let S=!1;typeof this.botLearningPlanar.mergeDumpAndSave=="function"?S=!!this.botLearningPlanar.mergeDumpAndSave(f):typeof this.botLearningPlanar.importDumpAndSave=="function"&&(this.botLearningPlanar.importDumpAndSave(f),S=!0),p=p||S,S&&(c+=f.states.length)}p&&(n.add(g),o++)}return o>0&&(this._saveLearningImportState({importedSourceIds:Array.from(n)}),this._saveLearningData(!1,!0),this._updateTrainingStatus(),this._showStatusToast(`Legacy-Lerndaten integriert (${o} Quellen, ${l}/${c} States 3D/Planar)`,2600,"success")),{integratedSources:o,integratedStates3D:l,integratedStatesPlanar:c,deferred:h}}_loadLearningImportState(){if(typeof localStorage>"u")return{importedSourceIds:[]};try{const t=localStorage.getItem(Gr);if(!t)return{importedSourceIds:[]};const e=JSON.parse(t);return{importedSourceIds:Array.isArray(e==null?void 0:e.importedSourceIds)?e.importedSourceIds.filter(i=>typeof i=="string"):[]}}catch{return{importedSourceIds:[]}}}_saveLearningImportState(t){if(typeof localStorage>"u")return!1;try{const e={version:1,importedSourceIds:Array.isArray(t==null?void 0:t.importedSourceIds)?t.importedSourceIds.filter(n=>typeof n=="string").slice(-256):[],savedAt:Date.now()};return localStorage.setItem(Gr,JSON.stringify(e)),!0}catch{return!1}}async _fetchJsonMaybe(t,e=5e3){if(typeof fetch!="function")return null;const n=typeof AbortController<"u"?new AbortController:null,i=n?setTimeout(()=>{try{n.abort()}catch{}},e):null;try{const s=await fetch(t,{cache:"no-store",signal:n==null?void 0:n.signal});return!s||!s.ok?null:await s.json()}catch{return null}finally{i&&clearTimeout(i)}}async _loadLegacyLearningFileSources(){const t=[];for(let n=0;n<bl.length;n++){const i=bl[n],s=await this._fetchJsonMaybe(i,5e3);s&&typeof s=="object"&&t.push({hintMode:"both",payload:s})}const e=await this._fetchJsonMaybe(b_,6500);if(e&&Array.isArray(e.snapshots)&&e.snapshots.length>0){let n=null;for(let i=0;i<e.snapshots.length;i++){const s=e.snapshots[i];if(!s||typeof s.file!="string")continue;if(!n){n=s;continue}const a=String(n.timestamp||n.file);String(s.timestamp||s.file)>=a&&(n=s)}if(n&&typeof n.file=="string"){const i=n.file.replace(/\\/g,"/").trim();if(i&&!i.includes("..")){const s=i.startsWith("learning_history/")?i:`learning_history/${i}`,a=await this._fetchJsonMaybe(`./${s}`,6500);a&&typeof a=="object"&&t.push({hintMode:"both",payload:a})}}}return t}_collectLegacyLearningStorageSources(){var s,a,o,l;if(typeof localStorage>"u")return[];const t=new Set,e=(a=(s=this.botLearning3D)==null?void 0:s.getStats)==null?void 0:a.call(s),n=(l=(o=this.botLearningPlanar)==null?void 0:o.getStats)==null?void 0:l.call(o);typeof(e==null?void 0:e.storageKey)=="string"&&t.add(e.storageKey),typeof(e==null?void 0:e.backupStorageKey)=="string"&&t.add(e.backupStorageKey),typeof(n==null?void 0:n.storageKey)=="string"&&t.add(n.storageKey),typeof(n==null?void 0:n.backupStorageKey)=="string"&&t.add(n.backupStorageKey);const i=[];for(let c=0;c<localStorage.length;c++){const h=localStorage.key(c);if(typeof h!="string"||!h.startsWith("mini-curve-fever-3d.bot-learning")||h===Gr||t.has(h)||h.endsWith(".lastgood")||h.endsWith(".fallback"))continue;const u=localStorage.getItem(h);if(!u)continue;let d=null;try{d=JSON.parse(u)}catch{d=null}if(!d||typeof d!="object")continue;const m=h.toLowerCase();let g="both";m.includes(".planar")?g="planar":m.includes(".3d")&&(g="3d"),i.push({hintMode:g,payload:d})}return i}_buildLegacyStateFingerprint(t){if(!Array.isArray(t)||t.length===0)return"0";const e=a=>String(a||"").replace(/[^a-zA-Z0-9_:-]/g,"").slice(0,24),n=Array.isArray(t[0])?e(t[0][0]):"",i=Array.isArray(t[Math.floor(t.length*.5)])?e(t[Math.floor(t.length*.5)][0]):"",s=Array.isArray(t[t.length-1])?e(t[t.length-1][0]):"";return`${t.length}:${n}:${i}:${s}`}_buildLegacySourceId(t){var h,u;const e=t&&typeof t=="object"?t:null;if(!e)return"";const n=Math.max(0,Math.floor(Number.isFinite(e.savedAt)?e.savedAt:Number.isFinite(e.timestamp)?e.timestamp:0)),i=Math.max(0,Math.floor(Number.isFinite((h=e==null?void 0:e.engine3D)==null?void 0:h.totalUpdates)?e.engine3D.totalUpdates:Number.isFinite(e.totalUpdates)?e.totalUpdates:0)),s=Math.max(0,Math.floor(Number.isFinite((u=e==null?void 0:e.enginePlanar)==null?void 0:u.totalUpdates)?e.enginePlanar.totalUpdates:Number.isFinite(e.totalUpdates)?e.totalUpdates:0)),a=Array.isArray(e.states3D)?e.states3D:Array.isArray(e.states)?e.states:[],o=Array.isArray(e.statesPlanar)?e.statesPlanar:Array.isArray(e.states)?e.states:[],l=this._buildLegacyStateFingerprint(a),c=this._buildLegacyStateFingerprint(o);return`t${n}|u3${i}|up${s}|s3${l}|sp${c}`}_toLegacyEngineDump(t,e,n="both"){var m,g,_,f,p,S;const i=t&&typeof t=="object"?t:null;if(!i||n==="3d"&&e!=="3d"||n==="planar"&&e!=="planar")return null;let s=null;if(e==="3d"&&Array.isArray(i.states3D)?s=i.states3D:e==="planar"&&Array.isArray(i.statesPlanar)?s=i.statesPlanar:Array.isArray(i.states)&&(s=i.states),!Array.isArray(s)||s.length===0)return null;const a=e==="3d"?i.engine3D:i.enginePlanar,o=Math.max(0,Math.floor(Number.isFinite(i.savedAt)?i.savedAt:Number.isFinite(i.timestamp)?i.timestamp:Date.now())),l=Number.isFinite(a==null?void 0:a.epsilon)?a.epsilon:Number.isFinite(i.epsilon)?i.epsilon:null,c=Math.max(0,Math.floor(Number.isFinite(a==null?void 0:a.totalUpdates)?a.totalUpdates:Number.isFinite(i.totalUpdates)?i.totalUpdates:0)),h=Number.isFinite(a==null?void 0:a.totalReward)?a.totalReward:Number.isFinite(i.totalReward)?i.totalReward:0,u=e==="planar"?((g=(m=this.botLearningPlanar)==null?void 0:m.getActionCount)==null?void 0:g.call(m))||((f=(_=this.botLearning3D)==null?void 0:_.getActionCount)==null?void 0:f.call(_))||8:((S=(p=this.botLearning3D)==null?void 0:p.getActionCount)==null?void 0:S.call(p))||8,d=[];for(let v=0;v<s.length;v++){const M=s[v];if(!Array.isArray(M)||typeof M[0]!="string"||!Array.isArray(M[1]))continue;const R=this._canonicalizeLegacyStateKey(M[0]);if(!R)continue;const b=new Array(u);for(let y=0;y<u;y++)b[y]=Number.isFinite(M[1][y])?M[1][y]:0;const w=Number.isFinite(M[2])?Math.max(1,Math.floor(M[2])):1,N=Number.isFinite(M[3])?Math.max(0,Math.floor(M[3])):o;d.push([R,b,w,N])}return d.length===0?null:{savedAt:o,epsilon:l,totalUpdates:c,totalReward:h,states:this._mergeStateRowsByKey(d,u)}}_mergeStateRowsByKey(t,e){const n=new Map,i=Math.max(1,Math.floor(Number.isFinite(e)?e:1));for(let s=0;s<t.length;s++){const a=t[s];if(!Array.isArray(a)||typeof a[0]!="string"||!Array.isArray(a[1]))continue;const o=a[0],l=new Array(i);for(let _=0;_<i;_++)l[_]=Number.isFinite(a[1][_])?a[1][_]:0;const c=Number.isFinite(a[2])?Math.max(1,Math.floor(a[2])):1,h=Number.isFinite(a[3])?Math.max(0,Math.floor(a[3])):0;if(!n.has(o)){n.set(o,[o,l,c,h]);continue}const u=n.get(o),d=u[1],m=Math.max(1,Math.floor(Number.isFinite(u[2])?u[2]:1)),g=m+c;for(let _=0;_<i;_++){const f=Number.isFinite(d[_])?d[_]:0,p=Number.isFinite(l[_])?l[_]:0;d[_]=(f*m+p*c)/g}u[2]=g,u[3]=Math.max(Math.max(0,Math.floor(Number.isFinite(u[3])?u[3]:0)),h)}return Array.from(n.values())}_tokenNumber(t,e,n,i,s){const a=Number.isFinite(t==null?void 0:t[e])?t[e]:n,o=Number.isFinite(a)?a:n;return Ct(Math.floor(o),i,s)}_canonicalizeLegacyStateKey(t){var v;if(typeof t!="string")return"";const e={},n=t.split("|");for(let M=0;M<n.length;M++){const R=(v=n[M])==null?void 0:v.trim();if(!R)continue;const b=/^([a-zA-Z]+)(-?\d+)$/.exec(R);if(!b)continue;const w=b[1],N=parseInt(b[2],10);Number.isFinite(N)&&(e[w]=N)}if(!(Number.isFinite(e.f)&&Number.isFinite(e.p)&&Number.isFinite(e.o)&&Number.isFinite(e.d)))return"";const s=this._tokenNumber(e,"f",0,0,4),a=this._tokenNumber(e,"p",0,0,4),o=this._tokenNumber(e,"o",0,0,4),l=this._tokenNumber(e,"d",0,0,4),c=this._tokenNumber(e,"s",0,0,4),h=this._tokenNumber(e,"t",0,0,1),u=this._tokenNumber(e,"i",0,0,1),d=this._tokenNumber(e,"j",0,0,1),m=this._tokenNumber(e,"h",1,0,2),g=this._tokenNumber(e,"m",0,0,1),_=this._tokenNumber(e,"hc",0,0,2),f=Number.isFinite(e==null?void 0:e.hd)?e.hd:4,p=this._tokenNumber(e,"hd",f,0,4),S=this._tokenNumber(e,"ht",0,0,4);return`f${s}|p${a}|o${o}|d${l}|s${c}|t${h}|i${u}|j${d}|h${m}|m${g}|hc${_}|hd${p}|ht${S}`}_upgradeActiveLearningSchemas(){if(this.state!=="MENU")return 0;const t=[];this.botLearning3D&&t.push({engine:this.botLearning3D,mode:"3d"}),this.botLearningPlanar&&t.push({engine:this.botLearningPlanar,mode:"planar"});let e=0;const n=new Set;for(let i=0;i<t.length;i++){const s=t[i];!(s!=null&&s.engine)||n.has(s.engine)||(n.add(s.engine),this._upgradeLearningEngineSchema(s.engine,s.mode)&&e++)}return e}_upgradeLearningEngineSchema(t,e="3d"){var l;if(!t||typeof t.exportDump!="function"||typeof t.importDumpAndSave!="function")return!1;const n=t.exportDump(Date.now());if(!n||!Array.isArray(n.states)||n.states.length===0)return!1;const i=Math.max(1,Math.floor(Number(((l=t.getActionCount)==null?void 0:l.call(t))||8))),s=[];let a=!1;for(let c=0;c<n.states.length;c++){const h=n.states[c];if(!Array.isArray(h)||typeof h[0]!="string"||!Array.isArray(h[1]))continue;const u=h[0],m=this._canonicalizeLegacyStateKey(u)||u;m!==u&&(a=!0);const g=new Array(i);for(let p=0;p<i;p++)g[p]=Number.isFinite(h[1][p])?h[1][p]:0;const _=Number.isFinite(h[2])?Math.max(1,Math.floor(h[2])):1,f=Number.isFinite(h[3])?Math.max(0,Math.floor(h[3])):n.savedAt||Date.now();s.push([m,g,_,f])}if(s.length===0)return!1;const o=this._mergeStateRowsByKey(s,i);return o.length!==n.states.length&&(a=!0),a?(t.importDumpAndSave({savedAt:Number.isFinite(n.savedAt)?n.savedAt:Date.now(),epsilon:Number.isFinite(n.epsilon)?n.epsilon:null,totalUpdates:Number.isFinite(n.totalUpdates)?Math.max(0,Math.floor(n.totalUpdates)):0,totalReward:Number.isFinite(n.totalReward)?n.totalReward:0,states:o}),!0):!1}_buildTrainingTelemetry(){var q,Y,X,j,J,lt,G,Z,ct;const t=this.botLearning3D?this.botLearning3D.getStats():null,e=this.botLearningPlanar?this.botLearningPlanar.getStats():null,n=((q=this.settings)==null?void 0:q.training)||{};if(!t&&!e)return{available:!1,menuLines:["Learning engine nicht verfuegbar."],overlayLines:["Learning engine nicht verfuegbar."],overlayStatusClass:"status-no_learning",overlayProgressPct:0,overlayProgressLabel:"0.0%"};const i=((t==null?void 0:t.states)||0)+((e==null?void 0:e.states)||0),s=((t==null?void 0:t.totalUpdates)||0)+((e==null?void 0:e.totalUpdates)||0),a=((t==null?void 0:t.totalReward)||0)+((e==null?void 0:e.totalReward)||0),o=((t==null?void 0:t.updatesSinceSave)||0)+((e==null?void 0:e.updatesSinceSave)||0),l=Math.max((t==null?void 0:t.lastSaveAt)||0,(e==null?void 0:e.lastSaveAt)||0),c=l>0?(Date.now()-l)/1e3:NaN,h=Number.isFinite(t==null?void 0:t.epsilon)?t.epsilon.toFixed(3):"n/a",u=Number.isFinite(e==null?void 0:e.epsilon)?e.epsilon.toFixed(3):"n/a",d=((X=(Y=this.recorder)==null?void 0:Y.getAggregateMetrics)==null?void 0:X.call(Y))||{},m=((J=(j=this.recorder)==null?void 0:j.getBotSurvivalAverages)==null?void 0:J.call(j,8))||[],g=((G=(lt=this.recorder)==null?void 0:lt.getLearningAnalysis)==null?void 0:G.call(lt,12))||null,_=((ct=(Z=this.gameLoop)==null?void 0:Z.getDiagnostics)==null?void 0:ct.call(Z))||null,f=Number.isFinite(_==null?void 0:_.effectiveScale)?_.effectiveScale:this._getTrainingBaseTimeScale(),p=Number.isFinite(_==null?void 0:_.lastSteps)?_.lastSteps:0,S=(dt,ft=3)=>Number.isFinite(dt)?dt.toFixed(ft):"n/a",v=(g==null?void 0:g.status)||"NO_DATA",M=m.length>0?m.map(dt=>`B${dt.botNumber}:${S(dt.averageSurvivalSec,2)}s`).join(" | "):"keine Daten",R=dt=>{if(!dt)return NaN;const ft=Number(dt.epsilon),Et=Number(dt.epsilonStart),wt=Number(dt.epsilonMin);return!Number.isFinite(ft)||!Number.isFinite(Et)||!Number.isFinite(wt)||Et<=wt?NaN:Ct((Et-ft)/(Et-wt)*100,0,100)},b=R(t),w=R(e),N=[b,w].filter(dt=>Number.isFinite(dt)),y=N.length>0?N.reduce((dt,ft)=>dt+ft,0)/N.length:0,T=((t==null?void 0:t.maxStates)||0)+((e==null?void 0:e.maxStates)||0),U=T>0?Ct(i/T*100,0,100):0,W=Ct(y*.7+U*.3,0,100),C={IMPROVING:"status-improving",PLATEAU:"status-plateau",UNSTABLE:"status-unstable",NO_LEARNING:"status-no_learning",NO_DATA:"status-no_learning"}[v]||"status-plateau",B=[`Learning: ${n.enabled?"AN":"AUS"} | BotOnly: ${n.botVsBotOnly?"JA":"NEIN"} | Mortal: ${n.mortalBots?"JA":"NEIN"}`,`Split: ${this._isTrainingSpectatorSplitMode()?"JA":"NEIN"} | Dual-Welten: ${this._isTrainingDualWorldsMode()?"JA":"NEIN"} | Auto-Restart: ${n.autoRestart?"JA":"NEIN"}`,`States(3D/Planar/Total): ${(t==null?void 0:t.states)||0}/${(e==null?void 0:e.states)||0}/${i} | Updates: ${s}`,`Epsilon(3D/Planar): ${h}/${u} | RewardSum: ${a.toFixed(2)} | TimeScale: ${this._getTrainingBaseTimeScale().toFixed(1)}x`,`Analyse: ${v} | LearnUpd/Round: ${S(d.learningUpdatesPerRound,2)} | Reward/Round: ${S(d.learningRewardPerRound,3)} | TD-Abs(mean): ${S(d.learningTdAbsMean,3)}`,`Trend (12 Runden): Updates ${S(g==null?void 0:g.updateTrendPerRound,2)} | Reward ${S(g==null?void 0:g.rewardTrendPerRound,3)} | TD ${S(g==null?void 0:g.tdAbsTrend,3)}`,`Loop: Ziel ${this._getTrainingBaseTimeScale().toFixed(1)}x | Ist ${S(f,1)}x | Steps/Frame ${p} | BudgetHits ${(_==null?void 0:_.totalBudgetHits)||0}`,`Persistenz: pending ${o} | letzter Save vor ${S(c,1)}s | DroppedFrames ${(_==null?void 0:_.totalDroppedFrames)||0}`,`Avg Ueberleben pro Bot: ${M}`],V=[`Runden: ${d.rounds||0} | Updates: ${s} | States: ${i}`,`Upd/Runde: ${S(d.learningUpdatesPerRound,2)} | Reward/Runde: ${S(d.learningRewardPerRound,3)} | TD: ${S(d.learningTdAbsMean,3)}`,`Analyse: ${v} | Epsilon 3D/Planar: ${h}/${u}`,`Scale Ziel/Ist: ${this._getTrainingBaseTimeScale().toFixed(1)}x/${S(f,1)}x | Save in Queue: ${o}`,`Avg Ueberleben/Bot: ${M}`];return{available:!0,menuLines:B,overlayLines:V,overlayStatusClass:C,overlayProgressPct:W,overlayProgressLabel:`${W.toFixed(1)}%`}}_updateTrainingOverlay(t=null){var l,c,h;const e=(l=this.ui)==null?void 0:l.trainingOverlay;if(!e)return;const n=this.state==="PLAYING"||this.state==="ROUND_END"||this.state==="MATCH_END",i=!!((h=(c=this.settings)==null?void 0:c.training)!=null&&h.enabled),s=n&&i;if(e.classList.toggle("hidden",!s),!s)return;const a=t||this._buildTrainingTelemetry(),o=["status-improving","status-plateau","status-unstable","status-no_learning"];if(e.classList.remove(...o),e.classList.add(a.overlayStatusClass||"status-plateau"),this.ui.trainingOverlayLines&&(this.ui.trainingOverlayLines.textContent=(a.overlayLines||[]).join(`
`)),this.ui.trainingOverlayProgressFill){const u=Ct(Number(a.overlayProgressPct)||0,0,100);this.ui.trainingOverlayProgressFill.style.width=`${u.toFixed(1)}%`}this.ui.trainingOverlayProgressLabel&&(this.ui.trainingOverlayProgressLabel.textContent=a.overlayProgressLabel||"0.0%")}_updateTrainingStatus(){const t=this._buildTrainingTelemetry();this.ui.trainingStatus&&(this.ui.trainingStatus.textContent=(t.menuLines||[]).join(`
`)),this._updateTrainingOverlay(t)}_saveLearningData(t=!1,e=!0){const n=this._getLearningEngines();if(n.length===0)return!1;let i=!0;for(let s=0;s<n.length;s++)i=n[s].save(e)&&i;return i&&(this._lastLearningAutoSaveAt=Date.now()),this._updateTrainingStatus(),t&&this._showStatusToast(i?"Lerndaten gespeichert":"Lerndaten konnten nicht gespeichert werden",1400,i?"success":"error"),i}_tickLearningAutoPersist(){var s,a;if(!((a=(s=this.settings)==null?void 0:s.training)!=null&&a.enabled)){this._lastLearningAutoSaveAt=Date.now();return}const t=Date.now();if(t-this._lastLearningAutoSaveAt<2500)return;let n=0;const i=this._getLearningEngines();for(let o=0;o<i.length;o++){const l=i[o].getStats?i[o].getStats():null;n+=(l==null?void 0:l.updatesSinceSave)||0}if(n<=0){this._lastLearningAutoSaveAt=t;return}this._saveLearningData(!1,!0),this._lastLearningAutoSaveAt=t}_resetLearningData(){const t=this._getLearningEngines();if(t.length!==0){for(let e=0;e<t.length;e++)t[e].reset(!0);this._updateTrainingStatus(),this._showStatusToast("Lerndaten zurueckgesetzt",1500,"success")}}_startDeveloperTraining(){const t=this._getTrainingTimeScaleBounds();this.settings.training.enabled=!0,this.settings.training.botVsBotOnly=!0,this.settings.training.mortalBots=!0,this.settings.training.autoRestart=!0,this.settings.training.spectatorSplit=!0,this.settings.training.dualWorlds=!0,this.settings.training.timeScale=t.max,this.settings.training.autoSaveRounds=1,this.settings.gameplay&&(this.settings.gameplay.planarMode=!1),this.settings.numBots=4,this._onSettingsChanged(),this._showStatusToast("Developer-Training gestartet",1200,"success"),this.startMatch()}startMatch(){this.keyCapture=null,this._applySettingsToRuntime(),this.ui.mainMenu.classList.add("hidden"),this.ui.hud.classList.remove("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden");const t=this._isTrainingSpectatorSplitMode();this.renderer.setSplitScreen(this.numHumans===2||t),this._syncP2HudVisibility(),this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.particles.clear(),this.renderer.clearScene(),this.arena=new Kg(this.renderer),this.arena.portalsEnabled=this.settings.portalsEnabled,this.arena.build(this.mapKey),this.powerupManager=new u_(this.renderer,this.arena),this.entityManager=new h_(this.renderer,this.arena,this.powerupManager,this.particles,this.audio,this.recorder,this._getLearningEngineMap()),this.entityManager.setup(this.numHumans,this.numBots,{modelScale:this.settings.gameplay.planeScale,botDifficulty:this.settings.botDifficulty||"NORMAL",training:this.settings.training,humanConfigs:[{invertPitch:this.settings.invertPitch.PLAYER_1,cockpitCamera:this.settings.cockpitCamera.PLAYER_1},{invertPitch:this.settings.invertPitch.PLAYER_2,cockpitCamera:this.settings.cockpitCamera.PLAYER_2}]}),this.entityManager.onPlayerFeedback=(e,n)=>{this._showPlayerFeedback(e,n)};for(let e=0;e<this.numHumans;e++)this.renderer.createCamera(e);this.numHumans===0&&(this.renderer.createCamera(0),t&&this.renderer.createCamera(1));for(const e of this.entityManager.players)e.score=0;this.entityManager.onPlayerDied=()=>{},this.entityManager.onRoundEnd=e=>{this._onRoundEnd(e)},this._startRound()}_startRound(){this.state="PLAYING",this._hudTimer=0,this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none"),this.roundPause=0;for(const t of this.entityManager.players)t.trail.clear();this.powerupManager.clear(),this.recorder.startRound(this.entityManager.players),this.entityManager.spawnAll();for(const t of this.entityManager.getHumanPlayers())t.planarAimOffset=0;this._applyLoopTiming(1),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this._trainingOverlayTimer=0,this._updateHUD(),this._updateTrainingStatus()}_onRoundEnd(t){var c,h,u;this.state="ROUND_END",this.roundPause=3,console.log("--- ROUND END ---");let e=null;try{e=this.recorder.finalizeRound(t,this.entityManager.players),e&&console.log("[Recorder] Round KPI:",e),this.recorder.dump()}catch(d){console.error("Recorder Dump Failed:",d)}if(!!((c=this.settings.training)!=null&&c.enabled)&&this._getLearningEngines().length>0){const d=this.recorder.getAggregateMetrics().rounds,m=Ct(parseInt(((h=this.settings.training)==null?void 0:h.autoSaveRounds)??5,10),1,50);d>0&&d%m===0&&this._saveLearningData(!1,!0),this._updateTrainingStatus()}if(this._isTrainingBotOnlyMode()&&!!((u=this.settings.training)!=null&&u.autoRestart)){this.ui.messageOverlay.classList.add("hidden"),this.roundPause=.35;return}t&&t.score++,this._updateHUD();const s=parseInt(this.numBots)||0,a=this.entityManager.getHumanPlayers().length>1||s>0,o=Math.max(5,this.winsNeeded),l=a?this.entityManager.players.find(d=>d.score>=o):null;if(l){this.state="MATCH_END";const d=l.isBot?`Bot ${l.index+1}`:`Spieler ${l.index+1}`;this.ui.messageText.textContent=`Sieg: ${d} (Score: ${l.score})`,this.ui.messageSub.textContent="ENTER fuer neues Match oder ESC fuer Menue",this.ui.messageOverlay.classList.remove("hidden")}else if(t){const d=t.isBot?`Bot ${t.index+1}`:`Spieler ${t.index+1}`;this.ui.messageText.textContent=`${d} gewinnt die Runde`,this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}else this.ui.messageText.textContent="Unentschieden",this.ui.messageSub.textContent="Naechste Runde in 3...",this.ui.messageOverlay.classList.remove("hidden")}_updateHUD(){const t=this.entityManager.getHumanPlayers();if(t.length>0){const e=String(t[0].score);this.ui.p1Score.textContent!==e&&(this.ui.p1Score.textContent=e),this._updateItemBar(this.ui.p1Items,t[0])}if(t.length>1){const e=String(t[1].score);this.ui.p2Score.textContent!==e&&(this.ui.p2Score.textContent=e),this._updateItemBar(this.ui.p2Items,t[1])}}_updateItemBar(t,e){this._ensureItemSlots(t);for(let n=0;n<D.POWERUP.MAX_INVENTORY;n++){const i=t.children[n],s=n<e.inventory.length?e.inventory[n]:"";if(i.dataset.type!==s)if(i.dataset.type=s,s){const a=D.POWERUP.TYPES[s];i.textContent=a.icon,i.classList.add("active"),i.style.borderColor="#"+a.color.toString(16).padStart(6,"0")}else i.textContent="",i.classList.remove("active"),i.style.borderColor=""}}_ensureItemSlots(t){const e=D.POWERUP.MAX_INVENTORY;for(;t.children.length<e;){const n=document.createElement("div");n.className="item-slot",n.dataset.type="",t.appendChild(n)}for(;t.children.length>e;)t.removeChild(t.lastChild)}_getPlanarAimAxis(t){const e=this.settings.controls,n=e.PLAYER_1,i=e.PLAYER_2;let s=!1,a=!1;if(this.numHumans===1&&t===0)s=this.input.isDown(n.UP)||this.input.isDown(i.UP),a=this.input.isDown(n.DOWN)||this.input.isDown(i.DOWN);else{const o=t===0?n:i;s=this.input.isDown(o.UP),a=this.input.isDown(o.DOWN)}return(a?1:0)-(s?1:0)}_updatePlanarAimAssist(t){if(!this.entityManager)return;const e=D.GAMEPLAY.PLANAR_AIM_INPUT_SPEED,n=!!D.GAMEPLAY.PLANAR_MODE;for(const i of this.entityManager.getHumanPlayers()){const s=n?this._getPlanarAimAxis(i.index):0;let a=i.planarAimOffset||0;if(s!==0)a+=s*e*t;else{const o=1-Math.exp(-.6*t);a+=(0-a)*o}i.planarAimOffset=Ct(a,-1,1)}}_updateCrosshairPosition(t,e){if(!t||!t.alive||!e){e&&(e.style.display="none");return}const n=this.renderer.cameras[t.index];if(!n){e.style.display="none";return}e.style.display="block";const i=window.innerWidth,s=window.innerHeight,a=this.numHumans===2,o=a?i*.5:i,l=a?t.index===0?0:o:0;t.getAimDirection(this._tmpAimDir),this._tmpAimVec.copy(t.position).addScaledVector(this._tmpAimDir,80).project(n);const c=Ct(this._tmpAimVec.x,-1.05,1.05),h=Ct(this._tmpAimVec.y,-1.05,1.05),u=l+(c*.5+.5)*o,d=(-(h*.5)+.5)*s;this._tmpRollEuler.setFromQuaternion(t.quaternion,"YXZ");const m=Un.radToDeg(this._tmpRollEuler.z);e.style.left=`${u}px`,e.style.top=`${d}px`,e.style.transform=`translate(-50%, -50%) rotate(${m.toFixed(2)}deg)`}_updateCrosshairs(){if(!this.entityManager)return;const t=this.entityManager.players[0],e=this.entityManager.players[1],n=!!D.GAMEPLAY.PLANAR_MODE,i=s=>s?n?!0:(D.CAMERA.MODES[s.cameraMode]||"THIRD_PERSON")!=="FIRST_PERSON":!1;this.ui.crosshairP1&&(i(t)?this._updateCrosshairPosition(t,this.ui.crosshairP1):this.ui.crosshairP1.style.display="none"),this.ui.crosshairP2&&(this.numHumans===2?i(e)?this._updateCrosshairPosition(e,this.ui.crosshairP2):this.ui.crosshairP2.style.display="none":this.ui.crosshairP2.style.display="none")}update(t,e=null){var n;if(this._fpsTracker.update(t),this.state==="PLAYING"&&this.entityManager&&((n=this.recorder)!=null&&n.tick&&this.recorder.tick(t),this.recorder.recordFrame(this.entityManager.players)),this.stats&&(this._statsTimer=(this._statsTimer||0)+t,this._statsTimer>=.25)){this._statsTimer=0;const i=this.renderer.renderer.info,s=Math.round(this._fpsTracker.avg),a=i.render.calls||0,o=i.render.triangles||0,l=i.memory.geometries||0,c=i.memory.textures||0,h=this.entityManager?this.entityManager.players.filter(d=>d.alive).length:0,u=this.isLowQuality?"LOW":"HIGH";this.stats.innerHTML=`<b style="color:${s<30?"#f44":s<50?"#fa0":"#0f0"}">FPS: ${s}</b>
Draw Calls: ${a}
Dreiecke: ${(o/1e3).toFixed(1)}k
Geometrien: ${l}
Texturen: ${c}
Spieler: ${h}
Qualität: ${u}`}if(this._adaptiveTimer=(this._adaptiveTimer||0)+t,this._adaptiveTimer>=3&&(this._adaptiveTimer=0,this._fpsTracker.avg<30&&!this.isLowQuality&&this.state==="PLAYING"&&(this.isLowQuality=!0,this.renderer.setQuality("LOW"),this._showStatusToast("⚡ Grafik automatisch reduziert"))),this._trainingOverlayTimer=(this._trainingOverlayTimer||0)+t,this._trainingOverlayTimer>=.25&&(this._trainingOverlayTimer=0,this._updateTrainingStatus()),this.state==="PLAYING"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this._updatePlanarAimAssist(t),this.entityManager.update(t,this.input),this.powerupManager.update(t),this.particles.update(t),this.arena.update(t),this.entityManager.updateCameras(t),this._updateCrosshairs(),this._hudTimer+=t,this._hudTimer>=.2&&(this._hudTimer=0,this._updateHUD());const i=this.entityManager.players[0];if(i&&this.hudP1.update(i,t,this.entityManager),this.ui.crosshairP1&&(this.entityManager.getLockOnTarget(0)?this.ui.crosshairP1.classList.add("locked"):this.ui.crosshairP1.classList.remove("locked")),this.ui.crosshairP2&&this.numHumans===2){this.entityManager.getLockOnTarget(1)?this.ui.crosshairP2.classList.add("locked"):this.ui.crosshairP2.classList.remove("locked");const o=this.entityManager.players[1];o&&this.hudP2.update(o,t,this.entityManager)}else this.hudP2.setVisibility(!1);let s=1;for(const a of this.entityManager.players)for(const o of a.activeEffects)o.type==="SLOW_TIME"&&(s=Math.min(s,D.POWERUP.TYPES.SLOW_TIME.timeScale));this._applyLoopTiming(s),e!=null&&e.frame&&e.stepIndex===1?this._tickLearningAutoPersist():e||this._tickLearningAutoPersist()}else if(this.state==="ROUND_END"){if(this.input.wasPressed("Escape")){this._returnToMenu();return}this.input.wasPressed("Enter")&&(this.roundPause=0),this.roundPause-=t;const i=Math.ceil(this.roundPause);i>0&&(this.ui.messageSub.textContent=`Naechste Runde in ${i}...`),this.entityManager.updateCameras(t),this.roundPause<=0&&this._startRound()}else this.state==="MATCH_END"&&(this.input.wasPressed("Enter")?this.startMatch():this.input.wasPressed("Escape")&&this._returnToMenu(),this.entityManager.updateCameras(t))}render(){this.renderer.render()}_returnToMenu(){this.state="MENU",this.entityManager&&this.entityManager.clear(),this.powerupManager&&this.powerupManager.clear(),this.renderer.clearScene(),this.arena=null,this.entityManager=null,this.powerupManager=null,this.ui.mainMenu.classList.remove("hidden"),this._showMainNav(),this.ui.hud.classList.add("hidden"),this.ui.messageOverlay.classList.add("hidden"),this.ui.statusToast.classList.add("hidden"),this.ui.crosshairP1&&(this.ui.crosshairP1.style.display="none",this.ui.crosshairP1.style.left="50%",this.ui.crosshairP1.style.top="50%",this.ui.crosshairP1.style.transform="translate(-50%, -50%) rotate(0deg)"),this.ui.crosshairP2&&(this.ui.crosshairP2.style.display="none",this.ui.crosshairP2.style.left="50%",this.ui.crosshairP2.style.top="50%",this.ui.crosshairP2.style.transform="translate(-50%, -50%) rotate(0deg)"),this.ui.trainingOverlay&&this.ui.trainingOverlay.classList.add("hidden"),this._saveLearningData(!1,!0),this._applyLoopTiming(1),this._syncMenuControls(),this._kickoffLegacyLearningImport()}_showDebugLog(t){}captureBotBaseline(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.captureBaseline(e);return this._showStatusToast(`Bot-Baseline gespeichert: ${e}`),console.log(`[Recorder] Baseline gespeichert (${e}):`,n),n}printBotValidationReport(t="BASELINE"){const e=String(t||"BASELINE").toUpperCase(),n=this.recorder.getAggregateMetrics(),i=this.recorder.compareWithBaseline(e),s=this.recorder.getValidationMatrix(),a={label:e,aggregate:n,comparison:i,matrix:s};return console.log("[Recorder] Validation report:",a),a}getBotValidationMatrix(){return this.recorder.getValidationMatrix()}printBotTestProtocol(){const t=this.getBotValidationMatrix(),e={steps:["1) applyBotValidationScenario(0) und 10 Runden spielen.",'2) captureBotBaseline("BASELINE") ausfuehren.',"3) Weitere Szenarien aus der Matrix durchspielen.",'4) printBotValidationReport("BASELINE") fuer KPI-Vergleich ausfuehren.'],matrix:t};return console.log("[Recorder] Bot-Testprotokoll:",e),e}applyBotValidationScenario(t=0){const e=this.getBotValidationMatrix();if(!e||e.length===0)return null;let n=null;return typeof t=="number"?n=e[Math.max(0,Math.min(e.length-1,t))]:n=e.find(i=>i.id===t)||e[0],n?(this.settings.mode=n.mode==="2p"?"2p":"1p",this.settings.numBots=n.bots,this.settings.mapKey=n.mapKey,this.settings.gameplay.planarMode=!!n.planarMode,this.settings.gameplay.portalCount=n.portalCount,this.settings.portalsEnabled=n.portalCount>0||this.settings.portalsEnabled,this.settings.winsNeeded=Math.max(1,this.settings.winsNeeded),this._onSettingsChanged(),this._showStatusToast(`Szenario ${n.id} geladen`),console.log("[Recorder] Validation scenario loaded:",n),n):null}}window.onerror=function(r,t,e,n,i){const s=document.createElement("div");return s.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",s.innerHTML=`<h1>CRITICAL ERROR</h1><p>${r}</p><p>${t}:${e}:${n}</p><pre>${i?i.stack:"No stack trace"}</pre>`,document.body.appendChild(s),!1};window.addEventListener("DOMContentLoaded",()=>{try{console.log("DOM ready, initializing Game...");const r=new w_;new URLSearchParams(window.location.search).get("autotrain")==="1"&&r._startDeveloperTraining(),window.GAME_INSTANCE=r}catch(r){console.error("Fatal Game Init Error:",r);const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(50,0,0,0.9);color:#fff;padding:20px;z-index:99999;font-family:monospace;overflow:auto;",t.innerHTML=`<h1>INIT ERROR</h1><p>${r.message}</p><pre>${r.stack}</pre>`,document.body.appendChild(t)}});
