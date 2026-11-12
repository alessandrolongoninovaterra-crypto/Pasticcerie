(()=>{var ch="170";var gp=0,cu=1,xp=2;var la=1,hh=2,Yn=3,ui=0,We=1,re=2,Nn=0,us=1,fi=2,hu=3,uu=4,yp=5,Ci=100,vp=101,Mp=102,_p=103,bp=104,wp=200,Ep=201,Sp=202,Tp=203,zl=204,Fl=205,Ap=206,Rp=207,Cp=208,Ip=209,Pp=210,Lp=211,Dp=212,Np=213,Up=214,Ol=0,Bl=1,kl=2,ms=3,Hl=4,Gl=5,Vl=6,Wl=7,ca=0,zp=1,Fp=2,hi=0,uh=1,fh=2,dh=3,Er=4,Op=5,ph=6,mh=7;var Af=300,gs=301,xs=302,Xl=303,ql=304,ha=306,di=1e3,_n=1001,Yl=1002,an=1003,Bp=1004;var Xr=1005;var Ln=1006,el=1007;var Pi=1008;var Jn=1009,Rf=1010,Cf=1011,lr=1012,gh=1013,Li=1014,Dn=1015,Sn=1016,xh=1017,yh=1018,ys=1020,If=35902,Pf=1021,Lf=1022,bn=1023,Df=1024,Nf=1025,fs=1026,vs=1027,vh=1028,Mh=1029,Uf=1030,_h=1031;var bh=1033,So=33776,To=33777,Ao=33778,Ro=33779,Zl=35840,$l=35841,Kl=35842,Jl=35843,jl=36196,Ql=37492,tc=37496,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,Co=36492,mc=36494,gc=36495,zf=36283,xc=36284,yc=36285,vc=36286;var Io=2300,Mc=2301,nl=2302,fu=2400,du=2401,pu=2402;var kp=3200,wh=3201;var ua=0,Hp=1,li="",ve="srgb",Cs="srgb-linear",fa="linear",ge="srgb";var Wi=7680;var mu=519,Gp=512,Vp=513,Wp=514,Ff=515,Xp=516,qp=517,Yp=518,Zp=519,_c=35044,Of=35048;var gu="300 es",$n=2e3,Po=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,ir=Math.PI/180,Ms=180/Math.PI;function Un(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function $p(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kp(s,t,e){return s!==t?(e-s)/(t-s):0}function sr(s,t,e){return(1-e)*s+e*t}function Jp(s,t,e,n){return sr(s,t,1-Math.exp(-e*n))}function jp(s,t=1){return t-Math.abs(Eh(s,t*2)-t)}function Qp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function t0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function e0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function n0(s,t){return s+Math.random()*(t-s)}function i0(s){return s*(.5-Math.random())}function s0(s){s!==void 0&&(xu=s);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r0(s){return s*ir}function o0(s){return s*Ms}function a0(s){return(s&s-1)===0&&s!==0}function l0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function c0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function h0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Bf={DEG2RAD:ir,RAD2DEG:Ms,generateUUID:Un,clamp:ze,euclideanModulo:Eh,mapLinear:$p,inverseLerp:Kp,lerp:sr,damp:Jp,pingpong:jp,smoothstep:Qp,smootherstep:t0,randInt:e0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:h0,normalize:xe,denormalize:Mn},Et=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=i[0],x=i[3],p=i[6],M=i[1],v=i[4],y=i[7],_=i[2],w=i[5],S=i[8];return r[0]=o*g+a*M+l*_,r[3]=o*x+a*v+l*w,r[6]=o*p+a*y+l*S,r[1]=c*g+u*M+h*_,r[4]=c*x+u*v+h*w,r[7]=c*p+u*y+h*S,r[2]=f*g+d*M+m*_,r[5]=f*x+d*v+m*w,r[8]=f*p+d*y+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},il=new ie;function kf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function u0(){let s=Lo("canvas");return s.style.display="block",s}var yu={};function er(s){s in yu||(yu[s]=!0,console.warn(s))}function f0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function d0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function p0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?fa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vu=[.64,.33,.3,.6,.15,.06],Mu=[.2126,.7152,.0722],_u=[.3127,.329],bu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Cs]:{primaries:vu,whitePoint:_u,transfer:fa,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:Mu,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:vu,whitePoint:_u,transfer:ge,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:Mu,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var Xi,bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Lo("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},m0=0,Do=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sl(i[o].image)):r.push(sl(i[o]))}else r=sl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function sl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var g0=0,tn=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=Ln,o=Pi,a=bn,l=Jn,c=s.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Un(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Af;tn.DEFAULT_ANISOTROPY=1;var ye=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,_=(p+1)/2,w=(u+f)/4,S=(h+g)/4,T=(m+x)/4;return v>y&&v>_?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=S/n):y>_?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=T/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=S/r,i=T/r),this.set(n,i,r,e),this}let M=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(x-m)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Do(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},No=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let x=1-a,p=l*f+c*d+u*m+h*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let _=Math.sqrt(v),w=Math.atan2(_,p*M);x=Math.sin(x*w)/_,a=Math.sin(a*w)/_}let y=a*M;if(l=l*x+f*y,c=c*x+d*y,u=u*x+m*y,h=h*x+g*y,x===1-a){let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new H,Eu=new Ie,jn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Yr.subVectors(this.max,Ws),qi.subVectors(t.a,Ws),Yi.subVectors(t.b,Ws),Zi.subVectors(t.c,Ws),ni.subVectors(Yi,qi),ii.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!ol(e,qi,Yi,Zi,Yr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,qi,Yi,Zi,Yr))?!1:(Zr.crossVectors(ni,ii),e=[Zr.x,Zr.y,Zr.z],ol(e,qi,Yi,Zi,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,qr=new jn,qi=new H,Yi=new H,Zi=new H,ni=new H,ii=new H,bi=new H,Ws=new H,Yr=new H,Zr=new H,wi=new H;function ol(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var x0=new jn,Xs=new H,al=new H,Qn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):x0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(al)),this.expandByPoint(Xs.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new H,ll=new H,$r=new H,si=new H,cl=new H,Kr=new H,hl=new H,cr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ll.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ll);let r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=si.dot(this.direction),l=-si.dot($r),c=si.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ll).addScaledVector($r,f),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){cl.subVectors(e,t),Kr.subVectors(n,t),hl.crossVectors(cl,Kr);let o=this.direction.dot(hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let l=a*this.direction.dot(Kr.crossVectors(si,Kr));if(l<0)return null;let c=a*this.direction.dot(cl.cross(si));if(c<0||l+c>o)return null;let u=-a*si.dot(hl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class s{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,x)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f+g*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-g*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,v0)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ri.crossVectors(n,rn),ri.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ri.crossVectors(n,rn)),ri.normalize(),Jr.crossVectors(rn,ri),i[0]=ri.x,i[4]=Jr.x,i[8]=rn.x,i[1]=ri.y,i[5]=Jr.y,i[9]=rn.y,i[2]=ri.z,i[6]=Jr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],x=n[10],p=n[14],M=n[3],v=n[7],y=n[11],_=n[15],w=i[0],S=i[4],T=i[8],b=i[12],E=i[1],R=i[5],L=i[9],D=i[13],N=i[2],O=i[6],z=i[10],W=i[14],B=i[3],j=i[7],q=i[11],ut=i[15];return r[0]=o*w+a*E+l*N+c*B,r[4]=o*S+a*R+l*O+c*j,r[8]=o*T+a*L+l*z+c*q,r[12]=o*b+a*D+l*W+c*ut,r[1]=u*w+h*E+f*N+d*B,r[5]=u*S+h*R+f*O+d*j,r[9]=u*T+h*L+f*z+d*q,r[13]=u*b+h*D+f*W+d*ut,r[2]=m*w+g*E+x*N+p*B,r[6]=m*S+g*R+x*O+p*j,r[10]=m*T+g*L+x*z+p*q,r[14]=m*b+g*D+x*W+p*ut,r[3]=M*w+v*E+y*N+_*B,r[7]=M*S+v*R+y*O+_*j,r[11]=M*T+v*L+y*z+_*q,r[15]=M*b+v*D+y*W+_*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],g=t[7],x=t[11],p=t[15];return m*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+x*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],g=t[13],x=t[14],p=t[15],M=h*x*c-g*f*c+g*l*d-a*x*d-h*l*p+a*f*p,v=m*f*c-u*x*c-m*l*d+o*x*d+u*l*p-o*f*p,y=u*g*c-m*h*c+m*a*d-o*g*d-u*a*p+o*h*p,_=m*h*l-u*g*l-m*a*f+o*g*f+u*a*x-o*h*x,w=e*M+n*v+i*y+r*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return t[0]=M*S,t[1]=(g*f*r-h*x*r-g*i*d+n*x*d+h*i*p-n*f*p)*S,t[2]=(a*x*r-g*l*r+g*i*c-n*x*c-a*i*p+n*l*p)*S,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=v*S,t[5]=(u*x*r-m*f*r+m*i*d-e*x*d-u*i*p+e*f*p)*S,t[6]=(m*l*r-o*x*r-m*i*c+e*x*c+o*i*p-e*l*p)*S,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=y*S,t[9]=(m*h*r-u*g*r-m*n*d+e*g*d+u*n*p-e*h*p)*S,t[10]=(o*g*r-m*a*r+m*n*c-e*g*c-o*n*p+e*a*p)*S,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*S,t[12]=_*S,t[13]=(u*g*i-m*h*i+m*n*f-e*g*f-u*n*x+e*h*x)*S,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*x-e*a*x)*S,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,g=o*u,x=o*h,p=a*h,M=l*c,v=l*u,y=l*h,_=n.x,w=n.y,S=n.z;return i[0]=(1-(g+p))*_,i[1]=(d+y)*_,i[2]=(m-v)*_,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+p))*w,i[6]=(x+M)*w,i[7]=0,i[8]=(m+v)*S,i[9]=(x-M)*S,i[10]=(1-(f+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=$i.set(i[0],i[1],i[2]).length(),o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=$n){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===$n)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Po)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=$n){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u,m,g;if(a===$n)m=(o+r)*h,g=-2*h;else if(a===Po)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new H,yn=new Jt,y0=new H(0,0,0),v0=new H(1,1,1),ri=new H,Jr=new H,rn=new H,Su=new Jt,Tu=new Ie,Ke=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},M0=0,Au=new H,Ki=new Ie,Wn=new Jt,jr=new H,qs=new H,_0=new H,b0=new Ie,Ru=new H(1,0,0),Cu=new H(0,1,0),Iu=new H(0,0,1),Pu={type:"added"},w0={type:"removed"},Ji={type:"childadded",child:null},ul={type:"childremoved",child:null},Ne=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new Ke,n=new Ie,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ie}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Cu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Au.copy(t).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Cu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(qs,jr,this.up):Wn.lookAt(jr,qs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(w0),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,_0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,b0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ne.DEFAULT_UP=new H(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new H,Xn=new H,fl=new H,qn=new H,ji=new H,Qi=new H,Lu=new H,dl=new H,pl=new H,ml=new H,gl=new ye,xl=new ye,yl=new ye,ci=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Xn.subVectors(n,e),fl.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Xn),l=vn.dot(fl),c=Xn.dot(Xn),u=Xn.dot(fl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return gl.setScalar(0),xl.setScalar(0),yl.setScalar(0),gl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Xn.subVectors(t,e),vn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ji.subVectors(i,n),Qi.subVectors(r,n),dl.subVectors(t,n);let l=ji.dot(dl),c=Qi.dot(dl);if(l<=0&&c<=0)return e.copy(n);pl.subVectors(t,i);let u=ji.dot(pl),h=Qi.dot(pl);if(u>=0&&h<=u)return e.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);ml.subVectors(t,r);let d=ji.dot(ml),m=Qi.dot(ml);if(m>=0&&d<=m)return e.copy(r);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Qi,a);let x=u*m-d*h;if(x<=0&&h-u>=0&&d-m>=0)return Lu.subVectors(r,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(Lu,a);let p=1/(x+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function vl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Eh(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vl(o,r,t+1/3),this.g=vl(o,r,t),this.b=vl(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ze(Ve.r*255,0,255))*65536+Math.round(ze(Ve.g*255,0,255))*256+Math.round(ze(Ve.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ve){le.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Qr);let n=sr(oi.h,Qr.h,e),i=sr(oi.s,Qr.s,e),r=sr(oi.l,Qr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Nt;Nt.NAMES=Hf;var E0=0,un=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Un(),this.name="",this.blending=us,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Fl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new H,to=new Et,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}};var _s=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},S0=0,hn=new Jt,Ml=new Ne,ts=new H,on=new jn,Ys=new jn,Be=new H,ee=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kf(t)?bs:_s)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(on.min,Ys.min),on.expandByPoint(Be),Be.addVectors(on.max,Ys.max),on.expandByPoint(Be)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Be.add(ts)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new H,l[T]=new H;let c=new H,u=new H,h=new H,f=new Et,d=new Et,m=new Et,g=new H,x=new H;function p(T,b,E){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),x.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[T].add(g),a[b].add(g),a[E].add(g),l[T].add(x),l[b].add(x),l[E].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,b=M.length;T<b;++T){let E=M[T],R=E.start,L=E.count;for(let D=R,N=R+L;D<N;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new H,y=new H,_=new H,w=new H;function S(T){_.fromBufferAttribute(i,T),w.copy(_);let b=a[T];v.copy(b),v.sub(_.multiplyScalar(_.dot(b))).normalize(),y.crossVectors(w,b);let R=y.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,R)}for(let T=0,b=M.length;T<b;++T){let E=M[T],R=E.start,L=E.count;for(let D=R,N=R+L;D<N;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),g=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let g=0,x=l.length;g<x;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Jt,Ei=new cr,eo=new Qn,Nu=new H,no=new H,io=new H,so=new H,_l=new H,ro=new H,Uu=new H,oo=new H,Ct=class extends Ne{constructor(t=new ee,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(_l.fromBufferAttribute(h,t),o?ro.addScaledVector(_l,u):ro.addScaledVector(_l.sub(e),u))}e.add(ro)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(eo.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(eo,Nu)===null||Ei.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let x=f[m],p=o[x.materialIndex],M=Math.max(x.start,d.start),v=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let y=M,_=v;y<_;y+=3){let w=a.getX(y),S=a.getX(y+1),T=a.getX(y+2);i=ao(this,p,t,n,c,u,h,w,S,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){let M=a.getX(x),v=a.getX(x+1),y=a.getX(x+2);i=ao(this,o,t,n,c,u,h,M,v,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let x=f[m],p=o[x.materialIndex],M=Math.max(x.start,d.start),v=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let y=M,_=v;y<_;y+=3){let w=y,S=y+1,T=y+2;i=ao(this,p,t,n,c,u,h,w,S,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){let M=x,v=x+1,y=x+2;i=ao(this,o,t,n,c,u,h,M,v,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function T0(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ui,a),l===null)return null;oo.copy(a),oo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:s}}function ao(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,no),s.getVertexPosition(l,io),s.getVertexPosition(c,so);let u=T0(s,t,e,n,no,io,so,Uu);if(u){let h=new H;ci.getBarycoord(Uu,no,io,so,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new Et)),r&&(u.uv1=ci.getInterpolatedAttribute(r,a,l,c,h,new Et)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ci.getNormal(no,io,so,f.normal),u.face=f,u.barycoord=h}return u}var Bt=class s extends ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function m(g,x,p,M,v,y,_,w,S,T,b){let E=y/S,R=_/T,L=y/2,D=_/2,N=w/2,O=S+1,z=T+1,W=0,B=0,j=new H;for(let q=0;q<z;q++){let ut=q*R-D;for(let bt=0;bt<O;bt++){let At=bt*E-L;j[g]=At*M,j[x]=ut*v,j[p]=N,c.push(j.x,j.y,j.z),j[g]=0,j[x]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(bt/S),h.push(1-q/T),W+=1}}for(let q=0;q<T;q++)for(let ut=0;ut<S;ut++){let bt=f+ut+O*q,At=f+ut+O*(q+1),st=f+(ut+1)+O*(q+1),$=f+(ut+1)+O*q;l.push(bt,At,$),l.push(At,st,$),B+=6}a.addGroup(d,B,b),d+=B,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function A0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var gi={clone:ws,merge:Ze},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=A0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zo=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new H,zu=new Et,Fu=new Et,He=class extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Fu),e.subVectors(Fu,zu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Sc=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(es,ns,t,e);i.layers=this.layers,this.add(i);let r=new He(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new He(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new He(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new He(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new He(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tc=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Nn});r.uniforms.tEquirect.value=e;let o=new Ct(i,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Ln),new Sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},bl=new H,I0=new H,P0=new ie,Zn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=bl.subVectors(n,e).cross(I0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||P0.getNormalMatrix(t),i=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new Qn,lo=new H,hr=class{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],g=i[10],x=i[11],p=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,x-d,y-p).normalize(),n[1].setComponents(l+r,f+c,x+d,y+p).normalize(),n[2].setComponents(l+o,f+u,x+m,y+M).normalize(),n[3].setComponents(l-o,f-u,x-m,y-M).normalize(),n[4].setComponents(l-a,f-h,x-g,y-v).normalize(),e===$n)n[5].setComponents(l+a,f+h,x+g,y+v).normalize();else if(e===Po)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lo.x=i.normal.x>0?t.max.x:t.min.x,lo.y=i.normal.y>0?t.max.y:t.min.y,lo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function L0(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var en=class s extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],g=[],x=[];for(let p=0;p<u;p++){let M=p*f-o;for(let v=0;v<c;v++){let y=v*h-r;m.push(y,-M,0),g.push(0,0,1),x.push(v/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,y=M+c*(p+1),_=M+1+c*(p+1),w=M+1+c*p;d.push(v,y,w),d.push(y,_,w)}this.setIndex(d),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Lm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kg=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Hg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Yg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zg=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,$g=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Kg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Jg=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Qg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tx=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,ex=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nx=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ix=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sx=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,rx=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ox=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,ax=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cx=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ux=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,se={alphahash_fragment:D0,alphahash_pars_fragment:N0,alphamap_fragment:U0,alphamap_pars_fragment:z0,alphatest_fragment:F0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:H0,batching_vertex:G0,begin_vertex:V0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:J0,color_fragment:j0,color_pars_fragment:Q0,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Sm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:xm,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:_m,lights_lambert_fragment:bm,lights_lambert_pars_fragment:wm,lights_pars_begin:Em,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Im,lights_physical_pars_fragment:Pm,lights_fragment_begin:Lm,lights_fragment_maps:Dm,lights_fragment_end:Nm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:km,map_particle_fragment:Hm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:Zm,morphtarget_vertex:$m,normal_fragment_begin:Km,normal_fragment_maps:Jm,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:xg,skinbase_vertex:yg,skinning_pars_vertex:vg,skinning_vertex:Mg,skinnormal_vertex:_g,specularmap_fragment:bg,specularmap_pars_fragment:wg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Sg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Ig,worldpos_vertex:Pg,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Ug,cube_vert:zg,cube_frag:Fg,depth_vert:Og,depth_frag:Bg,distanceRGBA_vert:kg,distanceRGBA_frag:Hg,equirect_vert:Gg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:Zg,meshlambert_frag:$g,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:tx,meshphong_frag:ex,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:rx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:hx,sprite_frag:ux},Ft={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Pn={basic:{uniforms:Ze([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ze([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ze([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ze([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ze([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ze([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ze([Ft.points,Ft.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ze([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ze([Ft.common,Ft.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ze([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ze([Ft.sprite,Ft.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ze([Ft.common,Ft.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ze([Ft.lights,Ft.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Pn.physical={uniforms:Ze([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var co={r:0,b:0,g:0},Ti=new Ke,fx=new Jt;function dx(s,t,e,n,i,r,o){let a=new Nt(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function g(M){let v=!1,y=m(M);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===ha)?(u===void 0&&(u=new Ct(new Bt(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:ws(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(v.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Ti)),u.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ct(new en(2,2),new Pe({name:"BackgroundMaterial",uniforms:ws(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(co,Gf(s)),n.buffers.color.setClear(co.r,co.g,co.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:x}}function px(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(E,R,L,D,N){let O=!1,z=h(D,L,R);r!==z&&(r=z,c(r.object)),O=d(E,D,L,N),O&&m(E,D,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(E,R,L,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,R,L){let D=L.wireframe===!0,N=n[E.id];N===void 0&&(N={},n[E.id]=N);let O=N[R.id];O===void 0&&(O={},N[R.id]=O);let z=O[D];return z===void 0&&(z=f(l()),O[D]=z),z}function f(E){let R=[],L=[],D=[];for(let N=0;N<e;N++)R[N]=0,L[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:E,attributes:{},index:null}}function d(E,R,L,D){let N=r.attributes,O=R.attributes,z=0,W=L.getAttributes();for(let B in W)if(W[B].location>=0){let q=N[B],ut=O[B];if(ut===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),q===void 0||q.attribute!==ut||ut&&q.data!==ut.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function m(E,R,L,D){let N={},O=R.attributes,z=0,W=L.getAttributes();for(let B in W)if(W[B].location>=0){let q=O[B];q===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));let ut={};ut.attribute=q,q&&q.data&&(ut.data=q.data),N[B]=ut,z++}r.attributes=N,r.attributesNum=z,r.index=D}function g(){let E=r.newAttributes;for(let R=0,L=E.length;R<L;R++)E[R]=0}function x(E){p(E,0)}function p(E,R){let L=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;L[E]=1,D[E]===0&&(s.enableVertexAttribArray(E),D[E]=1),N[E]!==R&&(s.vertexAttribDivisor(E,R),N[E]=R)}function M(){let E=r.newAttributes,R=r.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==E[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function v(E,R,L,D,N,O,z){z===!0?s.vertexAttribIPointer(E,R,L,N,O):s.vertexAttribPointer(E,R,L,D,N,O)}function y(E,R,L,D){g();let N=D.attributes,O=L.getAttributes(),z=R.defaultAttributeValues;for(let W in O){let B=O[W];if(B.location>=0){let j=N[W];if(j===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){let q=j.normalized,ut=j.itemSize,bt=t.get(j);if(bt===void 0)continue;let At=bt.buffer,st=bt.type,$=bt.bytesPerElement,vt=st===s.INT||st===s.UNSIGNED_INT||j.gpuType===gh;if(j.isInterleavedBufferAttribute){let V=j.data,Q=V.stride,Y=j.offset;if(V.isInstancedInterleavedBuffer){for(let k=0;k<B.locationSize;k++)p(B.location+k,V.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let k=0;k<B.locationSize;k++)x(B.location+k);s.bindBuffer(s.ARRAY_BUFFER,At);for(let k=0;k<B.locationSize;k++)v(B.location+k,ut/B.locationSize,st,q,Q*$,(Y+ut/B.locationSize*k)*$,vt)}else{if(j.isInstancedBufferAttribute){for(let V=0;V<B.locationSize;V++)p(B.location+V,j.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let V=0;V<B.locationSize;V++)x(B.location+V);s.bindBuffer(s.ARRAY_BUFFER,At);for(let V=0;V<B.locationSize;V++)v(B.location+V,ut/B.locationSize,st,q,ut*$,ut/B.locationSize*V*$,vt)}}else if(z!==void 0){let q=z[W];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(B.location,q);break;case 3:s.vertexAttrib3fv(B.location,q);break;case 4:s.vertexAttrib4fv(B.location,q);break;default:s.vertexAttrib1fv(B.location,q)}}}}M()}function _(){T();for(let E in n){let R=n[E];for(let L in R){let D=R[L];for(let N in D)u(D[N].object),delete D[N];delete R[L]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let R=n[E.id];for(let L in R){let D=R[L];for(let N in D)u(D[N].object),delete D[N];delete R[L]}delete n[E.id]}function S(E){for(let R in n){let L=n[R];if(L[E.id]===void 0)continue;let D=L[E.id];for(let N in D)u(D[N].object),delete D[N];delete L[E.id]}}function T(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:b,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:x,disableUnusedAttributes:M}}function mx(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==bn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let T=S===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Jn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Dn&&!T)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:_,maxSamples:w}}function xx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!x)r?u(null):c();else{let M=r?0:n,v=M*4,y=p.clippingState||null;l.value=y,y=u(m,f,v,d);for(let _=0;_!==v;++_)y[_]=e[_];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let g=h!==null?h.length:0,x=null;if(g!==0){if(x=l.value,m!==!0||x===null){let p=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let v=0,y=d;v!==g;++v,y+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(x,y),x[y+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function yx(s){let t=new WeakMap;function e(o,a){return a===Xl?o.mapping=gs:a===ql&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Tc(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Es=class extends zo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Ou=[.125,.215,.35,.446,.526,.582],Ii=20,wl=new Es,Bu=new Nt,El=null,Sl=0,Tl=0,Al=!1,Ri=(1+Math.sqrt(5))/2,is=1/Ri,ku=[new H(-Ri,is,0),new H(Ri,is,0),new H(-is,0,Ri),new H(is,0,Ri),new H(0,Ri,-is),new H(0,Ri,is),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Oo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){El=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El,Sl,Tl),this._renderer.xr.enabled=Al,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Sn,format:bn,colorSpace:Cs,depthBuffer:!1},i=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vx(r)),this._blurMaterial=Mx(r,t,e)}return i}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,n,i){let a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bu),u.toneMapping=hi,u.autoClear=!1;let d=new Ae({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new Ct(new Bt,d),g=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,g=!0):(d.color.copy(Bu),g=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;ho(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gs||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ku[(i-r-1)%ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ct(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),g=r/m,x=isFinite(r)?1+Math.floor(u*g):Ii;x>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ii}`);let p=[],M=0;for(let S=0;S<Ii;++S){let T=S/g,b=Math.exp(-T*T/2);p.push(b),S===0?M+=b:S<x&&(M+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;let y=this._sizeLods[i],_=3*y*(i>v-cs?i-v+cs:0),w=4*(this._cubeSize-y);ho(e,_,w,3*y,2*y),l.setRenderTarget(e),l.render(h,wl)}};function vx(s){let t=[],e=[],n=[],i=s,r=s-cs+1+Ou.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-cs?l=Ou[o-s+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,x=2,p=1,M=new Float32Array(g*m*d),v=new Float32Array(x*m*d),y=new Float32Array(p*m*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,T=w>2?0:-1,b=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];M.set(b,g*m*w),v.set(f,x*m*w);let E=[w,w,w,w,w,w];y.set(E,p*m*w)}let _=new ee;_.setAttribute("position",new ue(M,g)),_.setAttribute("uv",new ue(v,x)),_.setAttribute("faceIndex",new ue(y,p)),t.push(_),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hu(s,t,e){let n=new $e(s,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mx(s,t,e){let n=new Float32Array(Ii),i=new H(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Gu(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Vu(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function _x(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xl||l===ql,u=l===gs||l===xs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Oo(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Oo(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wx(s,t,e,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let x=0,p=g.length;x<p;x++)t.remove(g[x])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let g=d[m];for(let x=0,p=g.length;x<p;x++)t.update(g[x],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,m=h.attributes.position,g=0;if(d!==null){let M=d.array;g=d.version;for(let v=0,y=M.length;v<y;v+=3){let _=M[v+0],w=M[v+1],S=M[v+2];f.push(_,w,w,S,S,_)}}else if(m!==void 0){let M=m.array;g=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let _=v+0,w=v+1,S=v+2;f.push(_,w,w,S,S,_)}}else return;let x=new(kf(f)?bs:_s)(f,1);x.version=g;let p=r.get(h);p&&t.remove(p),r.set(h,x)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ex(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];e.update(x,n,1)}function h(f,d,m,g){if(m===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tx(s,t,e){let n=new WeakMap,i=new ye;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,_=1;y>t.maxTextureSize&&(_=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*_*4*h),S=new No(w,y,_,h);S.type=Dn,S.needsUpdate=!0;let T=v*4;for(let E=0;E<h;E++){let R=x[E],L=p[E],D=M[E],N=y*_*4*E;for(let O=0;O<R.count;O++){let z=O*T;d===!0&&(i.fromBufferAttribute(R,O),w[N+z+0]=i.x,w[N+z+1]=i.y,w[N+z+2]=i.z,w[N+z+3]=0),m===!0&&(i.fromBufferAttribute(L,O),w[N+z+4]=i.x,w[N+z+5]=i.y,w[N+z+6]=i.z,w[N+z+7]=0),g===!0&&(i.fromBufferAttribute(D,O),w[N+z+8]=i.x,w[N+z+9]=i.y,w[N+z+10]=i.z,w[N+z+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new Et(y,_)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ax(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Bo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u=fs){if(u!==fs&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fs&&(n=Li),n===void 0&&u===vs&&(n=ys),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wf=new tn,Wu=new Bo(1,1),Xf=new No,qf=new Ec,Yf=new Fo,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),$u=new Float32Array(4);function Is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Xu[i];if(r===void 0&&(r=new Float32Array(i),Xu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function da(s,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Rx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function Lx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;$u.set(n),s.uniformMatrix2fv(this.addr,!1,$u),Oe(e,n)}}function Dx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Zu.set(n),s.uniformMatrix3fv(this.addr,!1,Zu),Oe(e,n)}}function Nx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Yu.set(n),s.uniformMatrix4fv(this.addr,!1,Yu),Oe(e,n)}}function Ux(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function Bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Vx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wu.compareFunction=Ff,r=Wu):r=Wf,e.setTexture2D(t||r,i)}function Wx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qf,i)}function Xx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yf,i)}function qx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xf,i)}function Yx(s){switch(s){case 5126:return Rx;case 35664:return Cx;case 35665:return Ix;case 35666:return Px;case 35674:return Lx;case 35675:return Dx;case 35676:return Nx;case 5124:case 35670:return Ux;case 35667:case 35671:return zx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return kx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Zx(s,t){s.uniform1fv(this.addr,t)}function $x(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function Kx(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function Jx(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function jx(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qx(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function t1(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function e1(s,t){s.uniform1iv(this.addr,t)}function n1(s,t){s.uniform2iv(this.addr,t)}function i1(s,t){s.uniform3iv(this.addr,t)}function s1(s,t){s.uniform4iv(this.addr,t)}function r1(s,t){s.uniform1uiv(this.addr,t)}function o1(s,t){s.uniform2uiv(this.addr,t)}function a1(s,t){s.uniform3uiv(this.addr,t)}function l1(s,t){s.uniform4uiv(this.addr,t)}function c1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Wf,r[o])}function h1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||qf,r[o])}function u1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yf,r[o])}function f1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function d1(s){switch(s){case 5126:return Zx;case 35664:return $x;case 35665:return Kx;case 35666:return Jx;case 35674:return jx;case 35675:return Qx;case 35676:return t1;case 5124:case 35670:return e1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yx(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d1(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Ku(s,t){s.seq.push(t),s.map[t.id]=t}function p1(s,t,e){let n=s.name,i=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),o=Rl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ku(e,c===void 0?new Ac(a,s,t):new Rc(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Cc(a),Ku(e,h)),e=h}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);p1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ju(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var m1=37297,g1=0;function x1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ju=new ie;function y1(s){le._getMatrix(ju,le.workingColorSpace,s);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case fa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+x1(s.getShaderSource(t),o)}else return i}function v1(s,t){let e=y1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M1(s,t){let e;switch(t){case uh:e="Linear";break;case fh:e="Reinhard";break;case dh:e="Cineon";break;case Er:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case Op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new H;function _1(){le.getLuminanceCoefficients(uo);let s=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function w1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function nr(s){return s!==""}function tf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(s){return s.replace(S1,A1)}var T1=new Map;function A1(s,t){let e=se[t];if(e===void 0){let n=T1.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(s){return s.replace(R1,C1)}function C1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===la?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function P1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function D1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case zp:t="ENVMAP_BLENDING_MIX";break;case Fp:t="ENVMAP_BLENDING_ADD";break}return t}function N1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=I1(e),c=P1(e),u=L1(e),h=D1(e),f=N1(e),d=b1(e),m=w1(r),g=i.createProgram(),x,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(x=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?se.tonemapping_pars_fragment:"",e.toneMapping!==hi?M1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),_1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=Ic(o),o=tf(o,e),o=ef(o,e),a=Ic(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+x+o,y=M+p+a,_=Ju(i,i.VERTEX_SHADER,v),w=Ju(i,i.FRAGMENT_SHADER,y);i.attachShader(g,_),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(R){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(_).trim(),N=i.getShaderInfoLog(w).trim(),O=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,_,w);else{let W=Qu(i,_,"vertex"),B=Qu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+B)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||N==="")&&(z=!1);z&&(R.diagnostics={runnable:O,programLog:L,vertexShader:{log:D,prefix:x},fragmentShader:{log:N,prefix:p}})}i.deleteShader(_),i.deleteShader(w),T=new ps(i,g),b=E1(i,g)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,m1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=w,this}var z1=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=z1++,this.code=t,this.usedTimes=0}};function F1(s,t,e,n,i,r,o){let a=new Uo,l=new Pc,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,E,R,L,D){let N=L.fog,O=D.geometry,z=b.isMeshStandardMaterial?L.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),B=W&&W.mapping===ha?W.image.height:null,j=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ut=q!==void 0?q.length:0,bt=0;O.morphAttributes.position!==void 0&&(bt=1),O.morphAttributes.normal!==void 0&&(bt=2),O.morphAttributes.color!==void 0&&(bt=3);let At,st,$,vt;if(j){let he=Pn[j];At=he.vertexShader,st=he.fragmentShader}else At=b.vertexShader,st=b.fragmentShader,l.update(b),$=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);let V=s.getRenderTarget(),Q=s.state.buffers.depth.getReversed(),Y=D.isInstancedMesh===!0,k=D.isBatchedMesh===!0,tt=!!b.map,F=!!b.matcap,K=!!W,I=!!b.aoMap,ht=!!b.lightMap,et=!!b.bumpMap,it=!!b.normalMap,Z=!!b.displacementMap,Mt=!!b.emissiveMap,ct=!!b.metalnessMap,P=!!b.roughnessMap,C=b.anisotropy>0,X=b.clearcoat>0,J=b.dispersion>0,ft=b.iridescence>0,G=b.sheen>0,lt=b.transmission>0,pt=C&&!!b.anisotropyMap,_t=X&&!!b.clearcoatMap,It=X&&!!b.clearcoatNormalMap,at=X&&!!b.clearcoatRoughnessMap,dt=ft&&!!b.iridescenceMap,mt=ft&&!!b.iridescenceThicknessMap,Rt=G&&!!b.sheenColorMap,Tt=G&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,Zt=!!b.specularColorMap,ae=!!b.specularIntensityMap,nt=lt&&!!b.transmissionMap,Dt=lt&&!!b.thicknessMap,yt=!!b.gradientMap,wt=!!b.alphaMap,Ut=b.alphaTest>0,zt=!!b.alphaHash,Kt=!!b.extensions,de=hi;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(de=s.toneMapping);let Ue={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:st,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:k,batchingColor:k&&D._colorsTexture!==null,instancing:Y,instancingColor:Y&&D.instanceColor!==null,instancingMorph:Y&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Cs,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:F,envMap:K,envMapMode:K&&W.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:ht,bumpMap:et,normalMap:it,displacementMap:f&&Z,emissiveMap:Mt,normalMapObjectSpace:it&&b.normalMapType===Hp,normalMapTangentSpace:it&&b.normalMapType===ua,metalnessMap:ct,roughnessMap:P,anisotropy:C,anisotropyMap:pt,clearcoat:X,clearcoatMap:_t,clearcoatNormalMap:It,clearcoatRoughnessMap:at,dispersion:J,iridescence:ft,iridescenceMap:dt,iridescenceThicknessMap:mt,sheen:G,sheenColorMap:Rt,sheenRoughnessMap:Tt,specularMap:Gt,specularColorMap:Zt,specularIntensityMap:ae,transmission:lt,transmissionMap:nt,thicknessMap:Dt,gradientMap:yt,opaque:b.transparent===!1&&b.blending===us&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ut,alphaHash:zt,combine:b.combine,mapUv:tt&&g(b.map.channel),aoMapUv:I&&g(b.aoMap.channel),lightMapUv:ht&&g(b.lightMap.channel),bumpMapUv:et&&g(b.bumpMap.channel),normalMapUv:it&&g(b.normalMap.channel),displacementMapUv:Z&&g(b.displacementMap.channel),emissiveMapUv:Mt&&g(b.emissiveMap.channel),metalnessMapUv:ct&&g(b.metalnessMap.channel),roughnessMapUv:P&&g(b.roughnessMap.channel),anisotropyMapUv:pt&&g(b.anisotropyMap.channel),clearcoatMapUv:_t&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(b.sheenRoughnessMap.channel),specularMapUv:Gt&&g(b.specularMap.channel),specularColorMapUv:Zt&&g(b.specularColorMap.channel),specularIntensityMapUv:ae&&g(b.specularIntensityMap.channel),transmissionMapUv:nt&&g(b.transmissionMap.channel),thicknessMapUv:Dt&&g(b.thicknessMap.channel),alphaMapUv:wt&&g(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(it||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(tt||wt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:bt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===ge,decodeVideoTextureEmissive:Mt&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===re,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&b.extensions.multiDraw===!0||k)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)E.push(R),E.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(E,b),v(E,b),E.push(s.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let E=m[b.type],R;if(E){let L=Pn[E];R=gi.clone(L.uniforms)}else R=b.uniforms;return R}function _(b,E){let R;for(let L=0,D=u.length;L<D;L++){let N=u[L];if(N.cacheKey===E){R=N,++R.usedTimes;break}}return R===void 0&&(R=new U1(s,E,b,r),u.push(R)),R}function w(b){if(--b.usedTimes===0){let E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function S(b){l.remove(b)}function T(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:T}}function O1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function B1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function rf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function of(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,g,x){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:x},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=x),t++,p}function a(h,f,d,m,g,x){let p=o(h,f,d,m,g,x);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,m,g,x){let p=o(h,f,d,m,g,x);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||B1),n.length>1&&n.sort(f||rf),i.length>1&&i.sort(f||rf)}function u(){for(let h=t,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function k1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new of,s.set(n,[o])):i>=r.length?(o=new of,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function H1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Nt};break;case"SpotLight":e={position:new H,direction:new H,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function G1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var V1=0;function W1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function X1(s){let t=new H1,e=G1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Jt,o=new Jt;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,g=0,x=0,p=0,M=0,v=0,y=0,_=0,w=0,S=0;c.sort(W1);for(let b=0,E=c.length;b<E;b++){let R=c[b],L=R.color,D=R.intensity,N=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*D,h+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],D);S++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=z,d++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=N,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[g]=z;let W=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,W.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=W.matrix,R.castShadow){let B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=O,y++}g++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=z,x++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let W=R.shadow,B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=R.shadow.matrix,v++}n.point[m]=z,m++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(D),z.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[p]=z,p++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==x||T.hemiLength!==p||T.numDirectionalShadows!==M||T.numPointShadows!==v||T.numSpotShadows!==y||T.numSpotMaps!==_||T.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,T.directionalLength=d,T.pointLength=m,T.spotLength=g,T.rectAreaLength=x,T.hemiLength=p,T.numDirectionalShadows=M,T.numPointShadows=v,T.numSpotShadows=y,T.numSpotMaps=_,T.numLightProbes=S,n.version=V1++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0,x=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),h++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),d++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),o.identity(),r.copy(v.matrixWorld),r.premultiply(x),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(x),f++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(x),g++}}}return{setup:a,setupView:l,state:n}}function af(s){let t=new X1(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function q1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new af(s),t.set(i,[a])):r>=o.length?(a=new af(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ur=class extends un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dc=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`;function $1(s,t,e){let n=new hr,i=new Et,r=new Et,o=new ye,a=new ur({depthPacking:wh}),l=new Dc,c={},u=e.maxTextureSize,h={[ui]:We,[We]:ui,[re]:re},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Y1,fragmentShader:Z1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ee;m.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ct(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let p=this.type;this.render=function(w,S,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Nn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==Yn&&this.type===Yn,N=p===Yn&&this.type!==Yn;for(let O=0,z=w.length;O<z;O++){let W=w[O],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let j=B.getFrameExtents();if(i.multiply(j),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||D===!0||N===!0){let ut=this.type!==Yn?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new $e(i.x,i.y,ut),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let q=B.getViewportCount();for(let ut=0;ut<q;ut++){let bt=B.getViewport(ut);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),L.viewport(o),B.updateMatrices(W,ut),n=B.getFrustum(),y(S,T,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Yn&&M(B,T),B.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(b,E,R)};function M(w,S){let T=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $e(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(S,null,T,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(S,null,T,d,g,null)}function v(w,S,T,b){let E=null,R=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=T.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=E.uuid,D=S.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let O=N[D];O===void 0&&(O=E.clone(),N[D]=O,S.addEventListener("dispose",_)),E=O}if(E.visible=S.visible,E.wireframe=S.wireframe,b===Yn?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:h[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=T}return E}function y(w,S,T,b,E){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let D=t.update(w),N=w.material;if(Array.isArray(N)){let O=D.groups;for(let z=0,W=O.length;z<W;z++){let B=O[z],j=N[B.materialIndex];if(j&&j.visible){let q=v(w,j,b,E);w.onBeforeShadow(s,w,S,T,D,q,B),s.renderBufferDirect(T,null,D,q,w,B),w.onAfterShadow(s,w,S,T,D,q,B)}}}else if(N.visible){let O=v(w,N,b,E);w.onBeforeShadow(s,w,S,T,D,O,null),s.renderBufferDirect(T,null,D,O,w,null),w.onAfterShadow(s,w,S,T,D,O,null)}}let L=w.children;for(let D=0,N=L.length;D<N;D++)y(L[D],S,T,b,E)}function _(w){w.target.removeEventListener("dispose",_);for(let T in c){let b=c[T],E=w.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var K1={[Ol]:Bl,[kl]:Vl,[Hl]:Wl,[ms]:Gl,[Bl]:Ol,[Vl]:kl,[Wl]:Hl,[Gl]:ms};function J1(s,t){function e(){let nt=!1,Dt=new ye,yt=null,wt=new ye(0,0,0,0);return{setMask:function(Ut){yt!==Ut&&!nt&&(s.colorMask(Ut,Ut,Ut,Ut),yt=Ut)},setLocked:function(Ut){nt=Ut},setClear:function(Ut,zt,Kt,de,Ue){Ue===!0&&(Ut*=de,zt*=de,Kt*=de),Dt.set(Ut,zt,Kt,de),wt.equals(Dt)===!1&&(s.clearColor(Ut,zt,Kt,de),wt.copy(Dt))},reset:function(){nt=!1,yt=null,wt.set(-1,0,0,0)}}}function n(){let nt=!1,Dt=!1,yt=null,wt=null,Ut=null;return{setReversed:function(zt){if(Dt!==zt){let Kt=t.get("EXT_clip_control");Dt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);let de=Ut;Ut=null,this.setClear(de)}Dt=zt},getReversed:function(){return Dt},setTest:function(zt){zt?V(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(zt){yt!==zt&&!nt&&(s.depthMask(zt),yt=zt)},setFunc:function(zt){if(Dt&&(zt=K1[zt]),wt!==zt){switch(zt){case Ol:s.depthFunc(s.NEVER);break;case Bl:s.depthFunc(s.ALWAYS);break;case kl:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Gl:s.depthFunc(s.GEQUAL);break;case Vl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=zt}},setLocked:function(zt){nt=zt},setClear:function(zt){Ut!==zt&&(Dt&&(zt=1-zt),s.clearDepth(zt),Ut=zt)},reset:function(){nt=!1,yt=null,wt=null,Ut=null,Dt=!1}}}function i(){let nt=!1,Dt=null,yt=null,wt=null,Ut=null,zt=null,Kt=null,de=null,Ue=null;return{setTest:function(he){nt||(he?V(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(he){Dt!==he&&!nt&&(s.stencilMask(he),Dt=he)},setFunc:function(he,mn,kn){(yt!==he||wt!==mn||Ut!==kn)&&(s.stencilFunc(he,mn,kn),yt=he,wt=mn,Ut=kn)},setOp:function(he,mn,kn){(zt!==he||Kt!==mn||de!==kn)&&(s.stencilOp(he,mn,kn),zt=he,Kt=mn,de=kn)},setLocked:function(he){nt=he},setClear:function(he){Ue!==he&&(s.clearStencil(he),Ue=he)},reset:function(){nt=!1,Dt=null,yt=null,wt=null,Ut=null,zt=null,Kt=null,de=null,Ue=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,M=null,v=null,y=null,_=null,w=null,S=new Nt(0,0,0),T=0,b=!1,E=null,R=null,L=null,D=null,N=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=W>=2);let j=null,q={},ut=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),At=new ye().fromArray(ut),st=new ye().fromArray(bt);function $(nt,Dt,yt,wt){let Ut=new Uint8Array(4),zt=s.createTexture();s.bindTexture(nt,zt),s.texParameteri(nt,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(nt,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<yt;Kt++)nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(Dt+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return zt}let vt={};vt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(s.DEPTH_TEST),o.setFunc(ms),et(!1),it(cu),V(s.CULL_FACE),I(Nn);function V(nt){u[nt]!==!0&&(s.enable(nt),u[nt]=!0)}function Q(nt){u[nt]!==!1&&(s.disable(nt),u[nt]=!1)}function Y(nt,Dt){return h[nt]!==Dt?(s.bindFramebuffer(nt,Dt),h[nt]=Dt,nt===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Dt),nt===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function k(nt,Dt){let yt=d,wt=!1;if(nt){yt=f.get(Dt),yt===void 0&&(yt=[],f.set(Dt,yt));let Ut=nt.textures;if(yt.length!==Ut.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let zt=0,Kt=Ut.length;zt<Kt;zt++)yt[zt]=s.COLOR_ATTACHMENT0+zt;yt.length=Ut.length,wt=!0}}else yt[0]!==s.BACK&&(yt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(yt)}function tt(nt){return m!==nt?(s.useProgram(nt),m=nt,!0):!1}let F={[Ci]:s.FUNC_ADD,[vp]:s.FUNC_SUBTRACT,[Mp]:s.FUNC_REVERSE_SUBTRACT};F[_p]=s.MIN,F[bp]=s.MAX;let K={[wp]:s.ZERO,[Ep]:s.ONE,[Sp]:s.SRC_COLOR,[zl]:s.SRC_ALPHA,[Pp]:s.SRC_ALPHA_SATURATE,[Cp]:s.DST_COLOR,[Ap]:s.DST_ALPHA,[Tp]:s.ONE_MINUS_SRC_COLOR,[Fl]:s.ONE_MINUS_SRC_ALPHA,[Ip]:s.ONE_MINUS_DST_COLOR,[Rp]:s.ONE_MINUS_DST_ALPHA,[Lp]:s.CONSTANT_COLOR,[Dp]:s.ONE_MINUS_CONSTANT_COLOR,[Np]:s.CONSTANT_ALPHA,[Up]:s.ONE_MINUS_CONSTANT_ALPHA};function I(nt,Dt,yt,wt,Ut,zt,Kt,de,Ue,he){if(nt===Nn){g===!0&&(Q(s.BLEND),g=!1);return}if(g===!1&&(V(s.BLEND),g=!0),nt!==yp){if(nt!==x||he!==b){if((p!==Ci||y!==Ci)&&(s.blendEquation(s.FUNC_ADD),p=Ci,y=Ci),he)switch(nt){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.ONE,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}else switch(nt){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}M=null,v=null,_=null,w=null,S.set(0,0,0),T=0,x=nt,b=he}return}Ut=Ut||Dt,zt=zt||yt,Kt=Kt||wt,(Dt!==p||Ut!==y)&&(s.blendEquationSeparate(F[Dt],F[Ut]),p=Dt,y=Ut),(yt!==M||wt!==v||zt!==_||Kt!==w)&&(s.blendFuncSeparate(K[yt],K[wt],K[zt],K[Kt]),M=yt,v=wt,_=zt,w=Kt),(de.equals(S)===!1||Ue!==T)&&(s.blendColor(de.r,de.g,de.b,Ue),S.copy(de),T=Ue),x=nt,b=!1}function ht(nt,Dt){nt.side===re?Q(s.CULL_FACE):V(s.CULL_FACE);let yt=nt.side===We;Dt&&(yt=!yt),et(yt),nt.blending===us&&nt.transparent===!1?I(Nn):I(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),o.setFunc(nt.depthFunc),o.setTest(nt.depthTest),o.setMask(nt.depthWrite),r.setMask(nt.colorWrite);let wt=nt.stencilWrite;a.setTest(wt),wt&&(a.setMask(nt.stencilWriteMask),a.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),a.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),Mt(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?V(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(nt){E!==nt&&(nt?s.frontFace(s.CW):s.frontFace(s.CCW),E=nt)}function it(nt){nt!==gp?(V(s.CULL_FACE),nt!==R&&(nt===cu?s.cullFace(s.BACK):nt===xp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),R=nt}function Z(nt){nt!==L&&(z&&s.lineWidth(nt),L=nt)}function Mt(nt,Dt,yt){nt?(V(s.POLYGON_OFFSET_FILL),(D!==Dt||N!==yt)&&(s.polygonOffset(Dt,yt),D=Dt,N=yt)):Q(s.POLYGON_OFFSET_FILL)}function ct(nt){nt?V(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function P(nt){nt===void 0&&(nt=s.TEXTURE0+O-1),j!==nt&&(s.activeTexture(nt),j=nt)}function C(nt,Dt,yt){yt===void 0&&(j===null?yt=s.TEXTURE0+O-1:yt=j);let wt=q[yt];wt===void 0&&(wt={type:void 0,texture:void 0},q[yt]=wt),(wt.type!==nt||wt.texture!==Dt)&&(j!==yt&&(s.activeTexture(yt),j=yt),s.bindTexture(nt,Dt||vt[nt]),wt.type=nt,wt.texture=Dt)}function X(){let nt=q[j];nt!==void 0&&nt.type!==void 0&&(s.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function G(){try{s.texSubImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function It(){try{s.texStorage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Rt(nt){At.equals(nt)===!1&&(s.scissor(nt.x,nt.y,nt.z,nt.w),At.copy(nt))}function Tt(nt){st.equals(nt)===!1&&(s.viewport(nt.x,nt.y,nt.z,nt.w),st.copy(nt))}function Gt(nt,Dt){let yt=c.get(Dt);yt===void 0&&(yt=new WeakMap,c.set(Dt,yt));let wt=yt.get(nt);wt===void 0&&(wt=s.getUniformBlockIndex(Dt,nt.name),yt.set(nt,wt))}function Zt(nt,Dt){let wt=c.get(Dt).get(nt);l.get(Dt)!==wt&&(s.uniformBlockBinding(Dt,wt,nt.__bindingPointIndex),l.set(Dt,wt))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},j=null,q={},h={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,M=null,v=null,y=null,_=null,w=null,S=new Nt(0,0,0),T=0,b=!1,E=null,R=null,L=null,D=null,N=null,At.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:Q,bindFramebuffer:Y,drawBuffers:k,useProgram:tt,setBlending:I,setMaterial:ht,setFlipSided:et,setCullFace:it,setLineWidth:Z,setPolygonOffset:Mt,setScissorTest:ct,activeTexture:P,bindTexture:C,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ft,texImage2D:dt,texImage3D:mt,updateUBOMapping:Gt,uniformBlockBinding:Zt,texStorage2D:It,texStorage3D:at,texSubImage2D:G,texSubImage3D:lt,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Rt,viewport:Tt,reset:ae}}function lf(s,t,e,n){let i=j1(n);switch(e){case Pf:return s*t;case Df:return s*t;case Nf:return s*t*2;case vh:return s*t/i.components*i.byteLength;case Mh:return s*t/i.components*i.byteLength;case Uf:return s*t*2/i.components*i.byteLength;case _h:return s*t*2/i.components*i.byteLength;case Lf:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case bh:return s*t*4/i.components*i.byteLength;case So:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:case Jl:return Math.max(s,16)*Math.max(t,8)/4;case Zl:case Kl:return Math.max(s,8)*Math.max(t,8)/2;case jl:case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Co:case mc:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zf:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yc:case vc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j1(s){switch(s){case Jn:case Rf:return{byteLength:1,components:1};case lr:case Cf:case Sn:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case Li:case gh:case Dn:return{byteLength:4,components:1};case If:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Q1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,C){return d?new OffscreenCanvas(P,C):Lo("canvas")}function g(P,C,X){let J=1,ft=ct(P);if((ft.width>X||ft.height>X)&&(J=X/Math.max(ft.width,ft.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let G=Math.floor(J*ft.width),lt=Math.floor(J*ft.height);h===void 0&&(h=m(G,lt));let pt=C?m(G,lt):h;return pt.width=G,pt.height=lt,pt.getContext("2d").drawImage(P,0,0,G,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+G+"x"+lt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),P;return P}function x(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,C,X,J,ft=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let G=C;if(C===s.RED&&(X===s.FLOAT&&(G=s.R32F),X===s.HALF_FLOAT&&(G=s.R16F),X===s.UNSIGNED_BYTE&&(G=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.R8UI),X===s.UNSIGNED_SHORT&&(G=s.R16UI),X===s.UNSIGNED_INT&&(G=s.R32UI),X===s.BYTE&&(G=s.R8I),X===s.SHORT&&(G=s.R16I),X===s.INT&&(G=s.R32I)),C===s.RG&&(X===s.FLOAT&&(G=s.RG32F),X===s.HALF_FLOAT&&(G=s.RG16F),X===s.UNSIGNED_BYTE&&(G=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RG8UI),X===s.UNSIGNED_SHORT&&(G=s.RG16UI),X===s.UNSIGNED_INT&&(G=s.RG32UI),X===s.BYTE&&(G=s.RG8I),X===s.SHORT&&(G=s.RG16I),X===s.INT&&(G=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGB8UI),X===s.UNSIGNED_SHORT&&(G=s.RGB16UI),X===s.UNSIGNED_INT&&(G=s.RGB32UI),X===s.BYTE&&(G=s.RGB8I),X===s.SHORT&&(G=s.RGB16I),X===s.INT&&(G=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),X===s.UNSIGNED_INT&&(G=s.RGBA32UI),X===s.BYTE&&(G=s.RGBA8I),X===s.SHORT&&(G=s.RGBA16I),X===s.INT&&(G=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),C===s.RGBA){let lt=ft?fa:le.getTransfer(J);X===s.FLOAT&&(G=s.RGBA32F),X===s.HALF_FLOAT&&(G=s.RGBA16F),X===s.UNSIGNED_BYTE&&(G=lt===ge?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(P,C){let X;return P?C===null||C===Li||C===ys?X=s.DEPTH24_STENCIL8:C===Dn?X=s.DEPTH32F_STENCIL8:C===lr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Li||C===ys?X=s.DEPTH_COMPONENT24:C===Dn?X=s.DEPTH_COMPONENT32F:C===lr&&(X=s.DEPTH_COMPONENT16),X}function _(P,C){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==Ln?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function w(P){let C=P.target;C.removeEventListener("dispose",w),T(C),C.isVideoTexture&&u.delete(C)}function S(P){let C=P.target;C.removeEventListener("dispose",S),E(C)}function T(P){let C=n.get(P);if(C.__webglInit===void 0)return;let X=P.source,J=f.get(X);if(J){let ft=J[C.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&b(P),Object.keys(J).length===0&&f.delete(X)}n.remove(P)}function b(P){let C=n.get(P);s.deleteTexture(C.__webglTexture);let X=P.source,J=f.get(X);delete J[C.__cacheKey],o.memory.textures--}function E(P){let C=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(C.__webglFramebuffer[J]))for(let ft=0;ft<C.__webglFramebuffer[J].length;ft++)s.deleteFramebuffer(C.__webglFramebuffer[J][ft]);else s.deleteFramebuffer(C.__webglFramebuffer[J]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[J])}else{if(Array.isArray(C.__webglFramebuffer))for(let J=0;J<C.__webglFramebuffer.length;J++)s.deleteFramebuffer(C.__webglFramebuffer[J]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let J=0;J<C.__webglColorRenderbuffer.length;J++)C.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[J]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let X=P.textures;for(let J=0,ft=X.length;J<ft;J++){let G=n.get(X[J]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(P)}let R=0;function L(){R=0}function D(){let P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function N(P){let C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function O(P,C){let X=n.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(X,P,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function z(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){st(X,P,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function W(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){st(X,P,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function B(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){$(X,P,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}let j={[di]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Yl]:s.MIRRORED_REPEAT},q={[an]:s.NEAREST,[Bp]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[el]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},ut={[Gp]:s.NEVER,[Zp]:s.ALWAYS,[Vp]:s.LESS,[Ff]:s.LEQUAL,[Wp]:s.EQUAL,[Yp]:s.GEQUAL,[Xp]:s.GREATER,[qp]:s.NOTEQUAL};function bt(P,C){if(C.type===Dn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ln||C.magFilter===el||C.magFilter===Xr||C.magFilter===Pi||C.minFilter===Ln||C.minFilter===el||C.minFilter===Xr||C.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,j[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,q[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,q[C.minFilter]),C.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ut[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===an||C.minFilter!==Xr&&C.minFilter!==Pi||C.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function At(P,C){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",w));let J=C.source,ft=f.get(J);ft===void 0&&(ft={},f.set(J,ft));let G=N(C);if(G!==P.__cacheKey){ft[G]===void 0&&(ft[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ft[G].usedTimes++;let lt=ft[P.__cacheKey];lt!==void 0&&(ft[P.__cacheKey].usedTimes--,lt.usedTimes===0&&b(C)),P.__cacheKey=G,P.__webglTexture=ft[G].texture}return X}function st(P,C,X){let J=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(J=s.TEXTURE_3D);let ft=At(P,C),G=C.source;e.bindTexture(J,P.__webglTexture,s.TEXTURE0+X);let lt=n.get(G);if(G.version!==lt.__version||ft===!0){e.activeTexture(s.TEXTURE0+X);let pt=le.getPrimaries(le.workingColorSpace),_t=C.colorSpace===li?null:le.getPrimaries(C.colorSpace),It=C.colorSpace===li||pt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let at=g(C.image,!1,i.maxTextureSize);at=Mt(C,at);let dt=r.convert(C.format,C.colorSpace),mt=r.convert(C.type),Rt=v(C.internalFormat,dt,mt,C.colorSpace,C.isVideoTexture);bt(J,C);let Tt,Gt=C.mipmaps,Zt=C.isVideoTexture!==!0,ae=lt.__version===void 0||ft===!0,nt=G.dataReady,Dt=_(C,at);if(C.isDepthTexture)Rt=y(C.format===vs,C.type),ae&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Rt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Rt,at.width,at.height,0,dt,mt,null));else if(C.isDataTexture)if(Gt.length>0){Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Dt,Rt,Gt[0].width,Gt[0].height);for(let yt=0,wt=Gt.length;yt<wt;yt++)Tt=Gt[yt],Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,Tt.width,Tt.height,dt,mt,Tt.data):e.texImage2D(s.TEXTURE_2D,yt,Rt,Tt.width,Tt.height,0,dt,mt,Tt.data);C.generateMipmaps=!1}else Zt?(ae&&e.texStorage2D(s.TEXTURE_2D,Dt,Rt,at.width,at.height),nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,dt,mt,at.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,at.width,at.height,0,dt,mt,at.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Rt,Gt[0].width,Gt[0].height,at.depth);for(let yt=0,wt=Gt.length;yt<wt;yt++)if(Tt=Gt[yt],C.format!==bn)if(dt!==null)if(Zt){if(nt)if(C.layerUpdates.size>0){let Ut=lf(Tt.width,Tt.height,C.format,C.type);for(let zt of C.layerUpdates){let Kt=Tt.data.subarray(zt*Ut/Tt.data.BYTES_PER_ELEMENT,(zt+1)*Ut/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,zt,Tt.width,Tt.height,1,dt,Kt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Tt.width,Tt.height,at.depth,dt,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,Rt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Tt.width,Tt.height,at.depth,dt,mt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,yt,Rt,Tt.width,Tt.height,at.depth,0,dt,mt,Tt.data)}else{Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Dt,Rt,Gt[0].width,Gt[0].height);for(let yt=0,wt=Gt.length;yt<wt;yt++)Tt=Gt[yt],C.format!==bn?dt!==null?Zt?nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,Tt.width,Tt.height,dt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,yt,Rt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,Tt.width,Tt.height,dt,mt,Tt.data):e.texImage2D(s.TEXTURE_2D,yt,Rt,Tt.width,Tt.height,0,dt,mt,Tt.data)}else if(C.isDataArrayTexture)if(Zt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Rt,at.width,at.height,at.depth),nt)if(C.layerUpdates.size>0){let yt=lf(at.width,at.height,C.format,C.type);for(let wt of C.layerUpdates){let Ut=at.data.subarray(wt*yt/at.data.BYTES_PER_ELEMENT,(wt+1)*yt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,at.width,at.height,1,dt,mt,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,mt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,at.width,at.height,at.depth,0,dt,mt,at.data);else if(C.isData3DTexture)Zt?(ae&&e.texStorage3D(s.TEXTURE_3D,Dt,Rt,at.width,at.height,at.depth),nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,mt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,at.width,at.height,at.depth,0,dt,mt,at.data);else if(C.isFramebufferTexture){if(ae)if(Zt)e.texStorage2D(s.TEXTURE_2D,Dt,Rt,at.width,at.height);else{let yt=at.width,wt=at.height;for(let Ut=0;Ut<Dt;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,Rt,yt,wt,0,dt,mt,null),yt>>=1,wt>>=1}}else if(Gt.length>0){if(Zt&&ae){let yt=ct(Gt[0]);e.texStorage2D(s.TEXTURE_2D,Dt,Rt,yt.width,yt.height)}for(let yt=0,wt=Gt.length;yt<wt;yt++)Tt=Gt[yt],Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,dt,mt,Tt):e.texImage2D(s.TEXTURE_2D,yt,Rt,dt,mt,Tt);C.generateMipmaps=!1}else if(Zt){if(ae){let yt=ct(at);e.texStorage2D(s.TEXTURE_2D,Dt,Rt,yt.width,yt.height)}nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,mt,at)}else e.texImage2D(s.TEXTURE_2D,0,Rt,dt,mt,at);x(C)&&p(J),lt.__version=G.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function $(P,C,X){if(C.image.length!==6)return;let J=At(P,C),ft=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let G=n.get(ft);if(ft.version!==G.__version||J===!0){e.activeTexture(s.TEXTURE0+X);let lt=le.getPrimaries(le.workingColorSpace),pt=C.colorSpace===li?null:le.getPrimaries(C.colorSpace),_t=C.colorSpace===li||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let It=C.isCompressedTexture||C.image[0].isCompressedTexture,at=C.image[0]&&C.image[0].isDataTexture,dt=[];for(let wt=0;wt<6;wt++)!It&&!at?dt[wt]=g(C.image[wt],!0,i.maxCubemapSize):dt[wt]=at?C.image[wt].image:C.image[wt],dt[wt]=Mt(C,dt[wt]);let mt=dt[0],Rt=r.convert(C.format,C.colorSpace),Tt=r.convert(C.type),Gt=v(C.internalFormat,Rt,Tt,C.colorSpace),Zt=C.isVideoTexture!==!0,ae=G.__version===void 0||J===!0,nt=ft.dataReady,Dt=_(C,mt);bt(s.TEXTURE_CUBE_MAP,C);let yt;if(It){Zt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,Gt,mt.width,mt.height);for(let wt=0;wt<6;wt++){yt=dt[wt].mipmaps;for(let Ut=0;Ut<yt.length;Ut++){let zt=yt[Ut];C.format!==bn?Rt!==null?Zt?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,zt.width,zt.height,Rt,zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,Gt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,zt.width,zt.height,Rt,Tt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,Gt,zt.width,zt.height,0,Rt,Tt,zt.data)}}}else{if(yt=C.mipmaps,Zt&&ae){yt.length>0&&Dt++;let wt=ct(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,Gt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(at){Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,dt[wt].width,dt[wt].height,Rt,Tt,dt[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Gt,dt[wt].width,dt[wt].height,0,Rt,Tt,dt[wt].data);for(let Ut=0;Ut<yt.length;Ut++){let Kt=yt[Ut].image[wt].image;Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,Kt.width,Kt.height,Rt,Tt,Kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,Gt,Kt.width,Kt.height,0,Rt,Tt,Kt.data)}}else{Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Rt,Tt,dt[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Gt,Rt,Tt,dt[wt]);for(let Ut=0;Ut<yt.length;Ut++){let zt=yt[Ut];Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,Rt,Tt,zt.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,Gt,Rt,Tt,zt.image[wt])}}}x(C)&&p(s.TEXTURE_CUBE_MAP),G.__version=ft.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function vt(P,C,X,J,ft,G){let lt=r.convert(X.format,X.colorSpace),pt=r.convert(X.type),_t=v(X.internalFormat,lt,pt,X.colorSpace),It=n.get(C),at=n.get(X);if(at.__renderTarget=C,!It.__hasExternalTextures){let dt=Math.max(1,C.width>>G),mt=Math.max(1,C.height>>G);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?e.texImage3D(ft,G,_t,dt,mt,C.depth,0,lt,pt,null):e.texImage2D(ft,G,_t,dt,mt,0,lt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),it(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ft,at.__webglTexture,0,et(C)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ft,at.__webglTexture,G),e.bindFramebuffer(s.FRAMEBUFFER,null)}function V(P,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer){let J=C.depthTexture,ft=J&&J.isDepthTexture?J.type:null,G=y(C.stencilBuffer,ft),lt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=et(C);it(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,G,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,G,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,G,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,P)}else{let J=C.textures;for(let ft=0;ft<J.length;ft++){let G=J[ft],lt=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),_t=v(G.internalFormat,lt,pt,G.colorSpace),It=et(C);X&&it(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,_t,C.width,C.height):it(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,_t,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,_t,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(C.depthTexture);J.__renderTarget=C,(!J.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let ft=J.__webglTexture,G=et(C);if(C.depthTexture.format===fs)it(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(C.depthTexture.format===vs)it(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function Y(P){let C=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),J){let ft=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,J.removeEventListener("dispose",ft)};J.addEventListener("dispose",ft),C.__depthDisposeCallback=ft}C.__boundDepthTexture=J}if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Q(C.__webglFramebuffer,P)}else if(X){C.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[J]),C.__webglDepthbuffer[J]===void 0)C.__webglDepthbuffer[J]=s.createRenderbuffer(),V(C.__webglDepthbuffer[J],P,!1);else{let ft=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=C.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,G)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),V(C.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function k(P,C,X){let J=n.get(P);C!==void 0&&vt(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Y(P)}function tt(P){let C=P.texture,X=n.get(P),J=n.get(C);P.addEventListener("dispose",S);let ft=P.textures,G=P.isWebGLCubeRenderTarget===!0,lt=ft.length>1;if(lt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=C.version,o.memory.textures++),G){X.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[pt]=[];for(let _t=0;_t<C.mipmaps.length;_t++)X.__webglFramebuffer[pt][_t]=s.createFramebuffer()}else X.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let pt=0;pt<C.mipmaps.length;pt++)X.__webglFramebuffer[pt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(lt)for(let pt=0,_t=ft.length;pt<_t;pt++){let It=n.get(ft[pt]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&it(P)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pt=0;pt<ft.length;pt++){let _t=ft[pt];X.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[pt]);let It=r.convert(_t.format,_t.colorSpace),at=r.convert(_t.type),dt=v(_t.internalFormat,It,at,_t.colorSpace,P.isXRRenderTarget===!0),mt=et(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,dt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,X.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),V(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),bt(s.TEXTURE_CUBE_MAP,C);for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0)for(let _t=0;_t<C.mipmaps.length;_t++)vt(X.__webglFramebuffer[pt][_t],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else vt(X.__webglFramebuffer[pt],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(C)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let pt=0,_t=ft.length;pt<_t;pt++){let It=ft[pt],at=n.get(It);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),bt(s.TEXTURE_2D,It),vt(X.__webglFramebuffer,P,It,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),x(It)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),bt(pt,C),C.mipmaps&&C.mipmaps.length>0)for(let _t=0;_t<C.mipmaps.length;_t++)vt(X.__webglFramebuffer[_t],P,C,s.COLOR_ATTACHMENT0,pt,_t);else vt(X.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,pt,0);x(C)&&p(pt),e.unbindTexture()}P.depthBuffer&&Y(P)}function F(P){let C=P.textures;for(let X=0,J=C.length;X<J;X++){let ft=C[X];if(x(ft)){let G=M(P),lt=n.get(ft).__webglTexture;e.bindTexture(G,lt),p(G),e.unbindTexture()}}}let K=[],I=[];function ht(P){if(P.samples>0){if(it(P)===!1){let C=P.textures,X=P.width,J=P.height,ft=s.COLOR_BUFFER_BIT,G=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(P),pt=C.length>1;if(pt)for(let _t=0;_t<C.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let _t=0;_t<C.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[_t]);let It=n.get(C[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,X,J,0,0,X,J,ft,s.NEAREST),l===!0&&(K.length=0,I.length=0,K.push(s.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(K.push(G),I.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<C.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,lt.__webglColorRenderbuffer[_t]);let It=n.get(C[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let C=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function et(P){return Math.min(i.maxSamples,P.samples)}function it(P){let C=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Z(P){let C=o.render.frame;u.get(P)!==C&&(u.set(P,C),P.update())}function Mt(P,C){let X=P.colorSpace,J=P.format,ft=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Cs&&X!==li&&(le.getTransfer(X)===ge?(J!==bn||ft!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=k,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=it}function ty(s,t){function e(n,i=li){let r,o=le.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===xh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===If)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return s.BYTE;if(n===Cf)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===gh)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===Pf)return s.ALPHA;if(n===Lf)return s.RGB;if(n===bn)return s.RGBA;if(n===Df)return s.LUMINANCE;if(n===Nf)return s.LUMINANCE_ALPHA;if(n===fs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===vh)return s.RED;if(n===Mh)return s.RED_INTEGER;if(n===Uf)return s.RG;if(n===_h)return s.RG_INTEGER;if(n===bh)return s.RGBA_INTEGER;if(n===So||n===To||n===Ao||n===Ro)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===$l||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Ql||n===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Ql)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===mc||n===gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zf||n===xc||n===yc||n===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Nc=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let x=e.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,g=new Uc,x=e.getContextAttributes(),p=null,M=null,v=[],y=[],_=new Et,w=null,S=new He;S.viewport=new ye;let T=new He;T.viewport=new ye;let b=[S,T],E=new Nc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let $=v[st];return $===void 0&&($=new rr,v[st]=$),$.getTargetRaySpace()},this.getControllerGrip=function(st){let $=v[st];return $===void 0&&($=new rr,v[st]=$),$.getGripSpace()},this.getHand=function(st){let $=v[st];return $===void 0&&($=new rr,v[st]=$),$.getHandSpace()};function D(st){let $=y.indexOf(st.inputSource);if($===-1)return;let vt=v[$];vt!==void 0&&(vt.update(st.inputSource,st.frame,c||o),vt.dispatchEvent({type:st.type,data:st.inputSource}))}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let st=0;st<v.length;st++){let $=y[st];$!==null&&(y[st]=null,v[st].disconnect($))}R=null,L=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(st){if(i=st,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),i.renderState.layers===void 0){let $={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new $e(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,vt=null,V=null;x.depth&&(V=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?vs:fs,vt=x.stencil?ys:Li);let Q={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Q),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new $e(f.textureWidth,f.textureHeight,{format:bn,type:Jn,depthTexture:new Bo(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(st){for(let $=0;$<st.removed.length;$++){let vt=st.removed[$],V=y.indexOf(vt);V>=0&&(y[V]=null,v[V].disconnect(vt))}for(let $=0;$<st.added.length;$++){let vt=st.added[$],V=y.indexOf(vt);if(V===-1){for(let Y=0;Y<v.length;Y++)if(Y>=y.length){y.push(vt),V=Y;break}else if(y[Y]===null){y[Y]=vt,V=Y;break}if(V===-1)break}let Q=v[V];Q&&Q.connect(vt)}}let z=new H,W=new H;function B(st,$,vt){z.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(vt.matrixWorld);let V=z.distanceTo(W),Q=$.projectionMatrix.elements,Y=vt.projectionMatrix.elements,k=Q[14]/(Q[10]-1),tt=Q[14]/(Q[10]+1),F=(Q[9]+1)/Q[5],K=(Q[9]-1)/Q[5],I=(Q[8]-1)/Q[0],ht=(Y[8]+1)/Y[0],et=k*I,it=k*ht,Z=V/(-I+ht),Mt=Z*-I;if($.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Mt),st.translateZ(Z),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Q[10]===-1)st.projectionMatrix.copy($.projectionMatrix),st.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ct=k+Z,P=tt+Z,C=et-Mt,X=it+(V-Mt),J=F*tt/P*ct,ft=K*tt/P*ct;st.projectionMatrix.makePerspective(C,X,J,ft,ct,P),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function j(st,$){$===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices($.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(i===null)return;let $=st.near,vt=st.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),E.near=T.near=S.near=$,E.far=T.far=S.far=vt,(R!==E.near||L!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,L=E.far),S.layers.mask=st.layers.mask|2,T.layers.mask=st.layers.mask|4,E.layers.mask=S.layers.mask|T.layers.mask;let V=st.parent,Q=E.cameras;j(E,V);for(let Y=0;Y<Q.length;Y++)j(Q[Y],V);Q.length===2?B(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),q(st,E,V)};function q(st,$,vt){vt===null?st.matrix.copy($.matrixWorld):(st.matrix.copy(vt.matrixWorld),st.matrix.invert(),st.matrix.multiply($.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy($.projectionMatrix),st.projectionMatrixInverse.copy($.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Ms*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let ut=null;function bt(st,$){if(u=$.getViewerPose(c||o),m=$,u!==null){let vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let V=!1;vt.length!==E.cameras.length&&(E.cameras.length=0,V=!0);for(let Y=0;Y<vt.length;Y++){let k=vt[Y],tt=null;if(d!==null)tt=d.getViewport(k);else{let K=h.getViewSubImage(f,k);tt=K.viewport,Y===0&&(t.setRenderTargetTextures(M,K.colorTexture,f.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(M))}let F=b[Y];F===void 0&&(F=new He,F.layers.enable(Y),F.viewport=new ye,b[Y]=F),F.matrix.fromArray(k.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(k.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(tt.x,tt.y,tt.width,tt.height),Y===0&&(E.matrix.copy(F.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),V===!0&&E.cameras.push(F)}let Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let Y=h.getDepthInformation(vt[0]);Y&&Y.isValid&&Y.texture&&g.init(t,Y,i.renderState)}}for(let vt=0;vt<v.length;vt++){let V=y[vt],Q=v[vt];V!==null&&Q!==void 0&&Q.update(V,$,c||o)}ut&&ut(st,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let At=new Vf;At.setAnimationLoop(bt),this.setAnimationLoop=function(st){ut=st},this.dispose=function(){}}},Ai=new Ke,sy=new Jt;function ry(s,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Gf(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),h(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,M,v):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===We&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===We&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,y=M.envMapRotation;v&&(x.envMap.value=v,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),x.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Ai)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,M,v){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=v*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){let M=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(m(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",x));let _=v.program;n.updateUBOMapping(M,_);let w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){let v=h();M.__bindingPointIndex=v;let y=s.createBuffer(),_=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=i[M.id],y=M.uniforms,_=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,S=y.length;w<S;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,E=T.length;b<E;b++){let R=T[b];if(d(R,w,b,_)===!0){let L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value],N=0;for(let O=0;O<D.length;O++){let z=D[O],W=g(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+N,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,v,y,_){let w=M.value,S=v+"_"+y;if(_[S]===void 0)return typeof w=="number"||typeof w=="boolean"?_[S]=w:_[S]=w.clone(),!0;{let T=_[S];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return _[S]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function m(M){let v=M.uniforms,y=0,_=16;for(let S=0,T=v.length;S<T;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,R=b.length;E<R;E++){let L=b[E],D=Array.isArray(L.value)?L.value:[L.value];for(let N=0,O=D.length;N<O;N++){let z=D[N],W=g(z),B=y%_,j=B%W.boundary,q=B+j;y+=j,q!==0&&_-q<W.storage&&(y+=_-q),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=W.storage}}}let w=y%_;return w>0&&(y+=_-w),M.__size=y,M.__cache={},this}function g(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function x(M){let v=M.target;v.removeEventListener("dispose",x);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ko=class{constructor(t={}){let{canvas:e=u0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=hi,this.toneMappingExposure=1;let y=this,_=!1,w=0,S=0,T=null,b=-1,E=null,R=new ye,L=new ye,D=null,N=new Nt(0),O=0,z=e.width,W=e.height,B=1,j=null,q=null,ut=new ye(0,0,z,W),bt=new ye(0,0,z,W),At=!1,st=new hr,$=!1,vt=!1,V=new Jt,Q=new Jt,Y=new H,k=new ye,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function K(){return T===null?B:1}let I=n;function ht(U,rt){return e.getContext(U,rt)}try{let U={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",zt,!1),I===null){let rt="webgl2";if(I=ht(rt,U),I===null)throw ht(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let et,it,Z,Mt,ct,P,C,X,J,ft,G,lt,pt,_t,It,at,dt,mt,Rt,Tt,Gt,Zt,ae,nt;function Dt(){et=new bx(I),et.init(),Zt=new ty(I,et),it=new gx(I,et,t,Zt),Z=new J1(I,et),it.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),Mt=new Sx(I),ct=new O1,P=new Q1(I,et,Z,ct,it,Zt,Mt),C=new yx(y),X=new _x(y),J=new L0(I),ae=new px(I,J),ft=new wx(I,J,Mt,ae),G=new Ax(I,ft,J,Mt),Rt=new Tx(I,it,P),at=new xx(ct),lt=new F1(y,C,X,et,it,ae,at),pt=new ry(y,ct),_t=new k1,It=new q1(et),mt=new dx(y,C,X,Z,G,d,l),dt=new $1(y,G,it),nt=new oy(I,Mt,it,Z),Tt=new mx(I,et,Mt),Gt=new Ex(I,et,Mt),Mt.programs=lt.programs,y.capabilities=it,y.extensions=et,y.properties=ct,y.renderLists=_t,y.shadowMap=dt,y.state=Z,y.info=Mt}Dt();let yt=new zc(y,I);this.xr=yt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let U=et.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=et.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(U){U!==void 0&&(B=U,this.setSize(z,W,!1))},this.getSize=function(U){return U.set(z,W)},this.setSize=function(U,rt,gt=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,W=rt,e.width=Math.floor(U*B),e.height=Math.floor(rt*B),gt===!0&&(e.style.width=U+"px",e.style.height=rt+"px"),this.setViewport(0,0,U,rt)},this.getDrawingBufferSize=function(U){return U.set(z*B,W*B).floor()},this.setDrawingBufferSize=function(U,rt,gt){z=U,W=rt,B=gt,e.width=Math.floor(U*gt),e.height=Math.floor(rt*gt),this.setViewport(0,0,U,rt)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(ut)},this.setViewport=function(U,rt,gt,xt){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,rt,gt,xt),Z.viewport(R.copy(ut).multiplyScalar(B).round())},this.getScissor=function(U){return U.copy(bt)},this.setScissor=function(U,rt,gt,xt){U.isVector4?bt.set(U.x,U.y,U.z,U.w):bt.set(U,rt,gt,xt),Z.scissor(L.copy(bt).multiplyScalar(B).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(U){Z.setScissorTest(At=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){q=U},this.getClearColor=function(U){return U.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(U=!0,rt=!0,gt=!0){let xt=0;if(U){let ot=!1;if(T!==null){let Pt=T.texture.format;ot=Pt===bh||Pt===_h||Pt===Mh}if(ot){let Pt=T.texture.type,Ot=Pt===Jn||Pt===Li||Pt===lr||Pt===ys||Pt===xh||Pt===yh,Vt=mt.getClearColor(),Wt=mt.getClearAlpha(),Qt=Vt.r,ne=Vt.g,Xt=Vt.b;Ot?(m[0]=Qt,m[1]=ne,m[2]=Xt,m[3]=Wt,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Qt,g[1]=ne,g[2]=Xt,g[3]=Wt,I.clearBufferiv(I.COLOR,0,g))}else xt|=I.COLOR_BUFFER_BIT}rt&&(xt|=I.DEPTH_BUFFER_BIT),gt&&(xt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),_t.dispose(),It.dispose(),ct.dispose(),C.dispose(),X.dispose(),G.dispose(),ae.dispose(),nt.dispose(),lt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",eu),yt.removeEventListener("sessionend",nu),_i.stop()};function wt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let U=Mt.autoReset,rt=dt.enabled,gt=dt.autoUpdate,xt=dt.needsUpdate,ot=dt.type;Dt(),Mt.autoReset=U,dt.enabled=rt,dt.autoUpdate=gt,dt.needsUpdate=xt,dt.type=ot}function zt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Kt(U){let rt=U.target;rt.removeEventListener("dispose",Kt),de(rt)}function de(U){Ue(U),ct.remove(U)}function Ue(U){let rt=ct.get(U).programs;rt!==void 0&&(rt.forEach(function(gt){lt.releaseProgram(gt)}),U.isShaderMaterial&&lt.releaseShaderCache(U))}this.renderBufferDirect=function(U,rt,gt,xt,ot,Pt){rt===null&&(rt=tt);let Ot=ot.isMesh&&ot.matrixWorld.determinant()<0,Vt=dp(U,rt,gt,xt,ot);Z.setMaterial(xt,Ot);let Wt=gt.index,Qt=1;if(xt.wireframe===!0){if(Wt=ft.getWireframeAttribute(gt),Wt===void 0)return;Qt=2}let ne=gt.drawRange,Xt=gt.attributes.position,fe=ne.start*Qt,Me=(ne.start+ne.count)*Qt;Pt!==null&&(fe=Math.max(fe,Pt.start*Qt),Me=Math.min(Me,(Pt.start+Pt.count)*Qt)),Wt!==null?(fe=Math.max(fe,0),Me=Math.min(Me,Wt.count)):Xt!=null&&(fe=Math.max(fe,0),Me=Math.min(Me,Xt.count));let _e=Me-fe;if(_e<0||_e===1/0)return;ae.setup(ot,xt,Vt,gt,Wt);let Qe,pe=Tt;if(Wt!==null&&(Qe=J.get(Wt),pe=Gt,pe.setIndex(Qe)),ot.isMesh)xt.wireframe===!0?(Z.setLineWidth(xt.wireframeLinewidth*K()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(ot.isLine){let qt=xt.linewidth;qt===void 0&&(qt=1),Z.setLineWidth(qt*K()),ot.isLineSegments?pe.setMode(I.LINES):ot.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else ot.isPoints?pe.setMode(I.POINTS):ot.isSprite&&pe.setMode(I.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)pe.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))pe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let qt=ot._multiDrawStarts,Hn=ot._multiDrawCounts,me=ot._multiDrawCount,gn=Wt?J.get(Wt).bytesPerElement:1,Vi=ct.get(xt).currentProgram.getUniforms();for(let sn=0;sn<me;sn++)Vi.setValue(I,"_gl_DrawID",sn),pe.render(qt[sn]/gn,Hn[sn])}else if(ot.isInstancedMesh)pe.renderInstances(fe,_e,ot.count);else if(gt.isInstancedBufferGeometry){let qt=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Hn=Math.min(gt.instanceCount,qt);pe.renderInstances(fe,_e,Hn)}else pe.render(fe,_e)};function he(U,rt,gt){U.transparent===!0&&U.side===re&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,Wr(U,rt,gt),U.side=ui,U.needsUpdate=!0,Wr(U,rt,gt),U.side=re):Wr(U,rt,gt)}this.compile=function(U,rt,gt=null){gt===null&&(gt=U),p=It.get(gt),p.init(rt),v.push(p),gt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(rt.layers)&&(p.pushLight(ot),ot.castShadow&&p.pushShadow(ot))}),U!==gt&&U.traverseVisible(function(ot){ot.isLight&&ot.layers.test(rt.layers)&&(p.pushLight(ot),ot.castShadow&&p.pushShadow(ot))}),p.setupLights();let xt=new Set;return U.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Pt=ot.material;if(Pt)if(Array.isArray(Pt))for(let Ot=0;Ot<Pt.length;Ot++){let Vt=Pt[Ot];he(Vt,gt,ot),xt.add(Vt)}else he(Pt,gt,ot),xt.add(Pt)}),v.pop(),p=null,xt},this.compileAsync=function(U,rt,gt=null){let xt=this.compile(U,rt,gt);return new Promise(ot=>{function Pt(){if(xt.forEach(function(Ot){ct.get(Ot).currentProgram.isReady()&&xt.delete(Ot)}),xt.size===0){ot(U);return}setTimeout(Pt,10)}et.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let mn=null;function kn(U){mn&&mn(U)}function eu(){_i.stop()}function nu(){_i.start()}let _i=new Vf;_i.setAnimationLoop(kn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(U){mn=U,yt.setAnimationLoop(U),U===null?_i.stop():_i.start()},yt.addEventListener("sessionstart",eu),yt.addEventListener("sessionend",nu),this.render=function(U,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(rt),rt=yt.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,rt,T),p=It.get(U,v.length),p.init(rt),v.push(p),Q.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),st.setFromProjectionMatrix(Q),vt=this.localClippingEnabled,$=at.init(this.clippingPlanes,vt),x=_t.get(U,M.length),x.init(),M.push(x),yt.enabled===!0&&yt.isPresenting===!0){let Pt=y.xr.getDepthSensingMesh();Pt!==null&&tl(Pt,rt,-1/0,y.sortObjects)}tl(U,rt,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(j,q),F=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,F&&mt.addToRenderList(x,U),this.info.render.frame++,$===!0&&at.beginShadows();let gt=p.state.shadowsArray;dt.render(gt,U,rt),$===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let xt=x.opaque,ot=x.transmissive;if(p.setupLights(),rt.isArrayCamera){let Pt=rt.cameras;if(ot.length>0)for(let Ot=0,Vt=Pt.length;Ot<Vt;Ot++){let Wt=Pt[Ot];su(xt,ot,U,Wt)}F&&mt.render(U);for(let Ot=0,Vt=Pt.length;Ot<Vt;Ot++){let Wt=Pt[Ot];iu(x,U,Wt,Wt.viewport)}}else ot.length>0&&su(xt,ot,U,rt),F&&mt.render(U),iu(x,U,rt);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(y,U,rt),ae.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function tl(U,rt,gt,xt){if(U.visible===!1)return;if(U.layers.test(rt.layers)){if(U.isGroup)gt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(rt);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||st.intersectsSprite(U)){xt&&k.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Q);let Ot=G.update(U),Vt=U.material;Vt.visible&&x.push(U,Ot,Vt,gt,k.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||st.intersectsObject(U))){let Ot=G.update(U),Vt=U.material;if(xt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),k.copy(U.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),k.copy(Ot.boundingSphere.center)),k.applyMatrix4(U.matrixWorld).applyMatrix4(Q)),Array.isArray(Vt)){let Wt=Ot.groups;for(let Qt=0,ne=Wt.length;Qt<ne;Qt++){let Xt=Wt[Qt],fe=Vt[Xt.materialIndex];fe&&fe.visible&&x.push(U,Ot,fe,gt,k.z,Xt)}}else Vt.visible&&x.push(U,Ot,Vt,gt,k.z,null)}}let Pt=U.children;for(let Ot=0,Vt=Pt.length;Ot<Vt;Ot++)tl(Pt[Ot],rt,gt,xt)}function iu(U,rt,gt,xt){let ot=U.opaque,Pt=U.transmissive,Ot=U.transparent;p.setupLightsView(gt),$===!0&&at.setGlobalState(y.clippingPlanes,gt),xt&&Z.viewport(R.copy(xt)),ot.length>0&&Vr(ot,rt,gt),Pt.length>0&&Vr(Pt,rt,gt),Ot.length>0&&Vr(Ot,rt,gt),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function su(U,rt,gt,xt){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[xt.id]===void 0&&(p.state.transmissionRenderTarget[xt.id]=new $e(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Sn:Jn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let Pt=p.state.transmissionRenderTarget[xt.id],Ot=xt.viewport||R;Pt.setSize(Ot.z,Ot.w);let Vt=y.getRenderTarget();y.setRenderTarget(Pt),y.getClearColor(N),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),F&&mt.render(gt);let Wt=y.toneMapping;y.toneMapping=hi;let Qt=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),p.setupLightsView(xt),$===!0&&at.setGlobalState(y.clippingPlanes,xt),Vr(U,gt,xt),P.updateMultisampleRenderTarget(Pt),P.updateRenderTargetMipmap(Pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Xt=0,fe=rt.length;Xt<fe;Xt++){let Me=rt[Xt],_e=Me.object,Qe=Me.geometry,pe=Me.material,qt=Me.group;if(pe.side===re&&_e.layers.test(xt.layers)){let Hn=pe.side;pe.side=We,pe.needsUpdate=!0,ru(_e,gt,xt,Qe,pe,qt),pe.side=Hn,pe.needsUpdate=!0,ne=!0}}ne===!0&&(P.updateMultisampleRenderTarget(Pt),P.updateRenderTargetMipmap(Pt))}y.setRenderTarget(Vt),y.setClearColor(N,O),Qt!==void 0&&(xt.viewport=Qt),y.toneMapping=Wt}function Vr(U,rt,gt){let xt=rt.isScene===!0?rt.overrideMaterial:null;for(let ot=0,Pt=U.length;ot<Pt;ot++){let Ot=U[ot],Vt=Ot.object,Wt=Ot.geometry,Qt=xt===null?Ot.material:xt,ne=Ot.group;Vt.layers.test(gt.layers)&&ru(Vt,rt,gt,Wt,Qt,ne)}}function ru(U,rt,gt,xt,ot,Pt){U.onBeforeRender(y,rt,gt,xt,ot,Pt),U.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ot.onBeforeRender(y,rt,gt,xt,U,Pt),ot.transparent===!0&&ot.side===re&&ot.forceSinglePass===!1?(ot.side=We,ot.needsUpdate=!0,y.renderBufferDirect(gt,rt,xt,ot,U,Pt),ot.side=ui,ot.needsUpdate=!0,y.renderBufferDirect(gt,rt,xt,ot,U,Pt),ot.side=re):y.renderBufferDirect(gt,rt,xt,ot,U,Pt),U.onAfterRender(y,rt,gt,xt,ot,Pt)}function Wr(U,rt,gt){rt.isScene!==!0&&(rt=tt);let xt=ct.get(U),ot=p.state.lights,Pt=p.state.shadowsArray,Ot=ot.state.version,Vt=lt.getParameters(U,ot.state,Pt,rt,gt),Wt=lt.getProgramCacheKey(Vt),Qt=xt.programs;xt.environment=U.isMeshStandardMaterial?rt.environment:null,xt.fog=rt.fog,xt.envMap=(U.isMeshStandardMaterial?X:C).get(U.envMap||xt.environment),xt.envMapRotation=xt.environment!==null&&U.envMap===null?rt.environmentRotation:U.envMapRotation,Qt===void 0&&(U.addEventListener("dispose",Kt),Qt=new Map,xt.programs=Qt);let ne=Qt.get(Wt);if(ne!==void 0){if(xt.currentProgram===ne&&xt.lightsStateVersion===Ot)return au(U,Vt),ne}else Vt.uniforms=lt.getUniforms(U),U.onBeforeCompile(Vt,y),ne=lt.acquireProgram(Vt,Wt),Qt.set(Wt,ne),xt.uniforms=Vt.uniforms;let Xt=xt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Xt.clippingPlanes=at.uniform),au(U,Vt),xt.needsLights=mp(U),xt.lightsStateVersion=Ot,xt.needsLights&&(Xt.ambientLightColor.value=ot.state.ambient,Xt.lightProbe.value=ot.state.probe,Xt.directionalLights.value=ot.state.directional,Xt.directionalLightShadows.value=ot.state.directionalShadow,Xt.spotLights.value=ot.state.spot,Xt.spotLightShadows.value=ot.state.spotShadow,Xt.rectAreaLights.value=ot.state.rectArea,Xt.ltc_1.value=ot.state.rectAreaLTC1,Xt.ltc_2.value=ot.state.rectAreaLTC2,Xt.pointLights.value=ot.state.point,Xt.pointLightShadows.value=ot.state.pointShadow,Xt.hemisphereLights.value=ot.state.hemi,Xt.directionalShadowMap.value=ot.state.directionalShadowMap,Xt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Xt.spotShadowMap.value=ot.state.spotShadowMap,Xt.spotLightMatrix.value=ot.state.spotLightMatrix,Xt.spotLightMap.value=ot.state.spotLightMap,Xt.pointShadowMap.value=ot.state.pointShadowMap,Xt.pointShadowMatrix.value=ot.state.pointShadowMatrix),xt.currentProgram=ne,xt.uniformsList=null,ne}function ou(U){if(U.uniformsList===null){let rt=U.currentProgram.getUniforms();U.uniformsList=ps.seqWithValue(rt.seq,U.uniforms)}return U.uniformsList}function au(U,rt){let gt=ct.get(U);gt.outputColorSpace=rt.outputColorSpace,gt.batching=rt.batching,gt.batchingColor=rt.batchingColor,gt.instancing=rt.instancing,gt.instancingColor=rt.instancingColor,gt.instancingMorph=rt.instancingMorph,gt.skinning=rt.skinning,gt.morphTargets=rt.morphTargets,gt.morphNormals=rt.morphNormals,gt.morphColors=rt.morphColors,gt.morphTargetsCount=rt.morphTargetsCount,gt.numClippingPlanes=rt.numClippingPlanes,gt.numIntersection=rt.numClipIntersection,gt.vertexAlphas=rt.vertexAlphas,gt.vertexTangents=rt.vertexTangents,gt.toneMapping=rt.toneMapping}function dp(U,rt,gt,xt,ot){rt.isScene!==!0&&(rt=tt),P.resetTextureUnits();let Pt=rt.fog,Ot=xt.isMeshStandardMaterial?rt.environment:null,Vt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cs,Wt=(xt.isMeshStandardMaterial?X:C).get(xt.envMap||Ot),Qt=xt.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ne=!!gt.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Xt=!!gt.morphAttributes.position,fe=!!gt.morphAttributes.normal,Me=!!gt.morphAttributes.color,_e=hi;xt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_e=y.toneMapping);let Qe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,pe=Qe!==void 0?Qe.length:0,qt=ct.get(xt),Hn=p.state.lights;if($===!0&&(vt===!0||U!==E)){let cn=U===E&&xt.id===b;at.setState(xt,U,cn)}let me=!1;xt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Hn.state.version||qt.outputColorSpace!==Vt||ot.isBatchedMesh&&qt.batching===!1||!ot.isBatchedMesh&&qt.batching===!0||ot.isBatchedMesh&&qt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&qt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&qt.instancing===!1||!ot.isInstancedMesh&&qt.instancing===!0||ot.isSkinnedMesh&&qt.skinning===!1||!ot.isSkinnedMesh&&qt.skinning===!0||ot.isInstancedMesh&&qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&qt.instancingMorph===!1&&ot.morphTexture!==null||qt.envMap!==Wt||xt.fog===!0&&qt.fog!==Pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==at.numPlanes||qt.numIntersection!==at.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==ne||qt.morphTargets!==Xt||qt.morphNormals!==fe||qt.morphColors!==Me||qt.toneMapping!==_e||qt.morphTargetsCount!==pe)&&(me=!0):(me=!0,qt.__version=xt.version);let gn=qt.currentProgram;me===!0&&(gn=Wr(xt,rt,ot));let Vi=!1,sn=!1,Gs=!1,be=gn.getUniforms(),In=qt.uniforms;if(Z.useProgram(gn.program)&&(Vi=!0,sn=!0,Gs=!0),xt.id!==b&&(b=xt.id,sn=!0),Vi||E!==U){Z.buffers.depth.getReversed()?(V.copy(U.projectionMatrix),d0(V),p0(V),be.setValue(I,"projectionMatrix",V)):be.setValue(I,"projectionMatrix",U.projectionMatrix),be.setValue(I,"viewMatrix",U.matrixWorldInverse);let ti=be.map.cameraPosition;ti!==void 0&&ti.setValue(I,Y.setFromMatrixPosition(U.matrixWorld)),it.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&be.setValue(I,"isOrthographic",U.isOrthographicCamera===!0),E!==U&&(E=U,sn=!0,Gs=!0)}if(ot.isSkinnedMesh){be.setOptional(I,ot,"bindMatrix"),be.setOptional(I,ot,"bindMatrixInverse");let cn=ot.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),be.setValue(I,"boneTexture",cn.boneTexture,P))}ot.isBatchedMesh&&(be.setOptional(I,ot,"batchingTexture"),be.setValue(I,"batchingTexture",ot._matricesTexture,P),be.setOptional(I,ot,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",ot._indirectTexture,P),be.setOptional(I,ot,"batchingColorTexture"),ot._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",ot._colorsTexture,P));let Vs=gt.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&Rt.update(ot,gt,gn),(sn||qt.receiveShadow!==ot.receiveShadow)&&(qt.receiveShadow=ot.receiveShadow,be.setValue(I,"receiveShadow",ot.receiveShadow)),xt.isMeshGouraudMaterial&&xt.envMap!==null&&(In.envMap.value=Wt,In.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),xt.isMeshStandardMaterial&&xt.envMap===null&&rt.environment!==null&&(In.envMapIntensity.value=rt.environmentIntensity),sn&&(be.setValue(I,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&pp(In,Gs),Pt&&xt.fog===!0&&pt.refreshFogUniforms(In,Pt),pt.refreshMaterialUniforms(In,xt,B,W,p.state.transmissionRenderTarget[U.id]),ps.upload(I,ou(qt),In,P)),xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(ps.upload(I,ou(qt),In,P),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&be.setValue(I,"center",ot.center),be.setValue(I,"modelViewMatrix",ot.modelViewMatrix),be.setValue(I,"normalMatrix",ot.normalMatrix),be.setValue(I,"modelMatrix",ot.matrixWorld),xt.isShaderMaterial||xt.isRawShaderMaterial){let cn=xt.uniformsGroups;for(let ti=0,ei=cn.length;ti<ei;ti++){let lu=cn[ti];nt.update(lu,gn),nt.bind(lu,gn)}}return gn}function pp(U,rt){U.ambientLightColor.needsUpdate=rt,U.lightProbe.needsUpdate=rt,U.directionalLights.needsUpdate=rt,U.directionalLightShadows.needsUpdate=rt,U.pointLights.needsUpdate=rt,U.pointLightShadows.needsUpdate=rt,U.spotLights.needsUpdate=rt,U.spotLightShadows.needsUpdate=rt,U.rectAreaLights.needsUpdate=rt,U.hemisphereLights.needsUpdate=rt}function mp(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,rt,gt){ct.get(U.texture).__webglTexture=rt,ct.get(U.depthTexture).__webglTexture=gt;let xt=ct.get(U);xt.__hasExternalTextures=!0,xt.__autoAllocateDepthBuffer=gt===void 0,xt.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,rt){let gt=ct.get(U);gt.__webglFramebuffer=rt,gt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(U,rt=0,gt=0){T=U,w=rt,S=gt;let xt=!0,ot=null,Pt=!1,Ot=!1;if(U){let Wt=ct.get(U);if(Wt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),xt=!1;else if(Wt.__webglFramebuffer===void 0)P.setupRenderTarget(U);else if(Wt.__hasExternalTextures)P.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Xt=U.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&ct.has(Xt)&&(U.width!==Xt.image.width||U.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(U)}}let Qt=U.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);let ne=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ne[rt])?ot=ne[rt][gt]:ot=ne[rt],Pt=!0):U.samples>0&&P.useMultisampledRTT(U)===!1?ot=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(ne)?ot=ne[gt]:ot=ne,R.copy(U.viewport),L.copy(U.scissor),D=U.scissorTest}else R.copy(ut).multiplyScalar(B).floor(),L.copy(bt).multiplyScalar(B).floor(),D=At;if(Z.bindFramebuffer(I.FRAMEBUFFER,ot)&&xt&&Z.drawBuffers(U,ot),Z.viewport(R),Z.scissor(L),Z.setScissorTest(D),Pt){let Wt=ct.get(U.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Wt.__webglTexture,gt)}else if(Ot){let Wt=ct.get(U.texture),Qt=rt||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,gt||0,Qt)}b=-1},this.readRenderTargetPixels=function(U,rt,gt,xt,ot,Pt,Ot){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){Z.bindFramebuffer(I.FRAMEBUFFER,Vt);try{let Wt=U.texture,Qt=Wt.format,ne=Wt.type;if(!it.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=U.width-xt&&gt>=0&&gt<=U.height-ot&&I.readPixels(rt,gt,xt,ot,Zt.convert(Qt),Zt.convert(ne),Pt)}finally{let Wt=T!==null?ct.get(T).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(U,rt,gt,xt,ot,Pt,Ot){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){let Wt=U.texture,Qt=Wt.format,ne=Wt.type;if(!it.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(rt>=0&&rt<=U.width-xt&&gt>=0&&gt<=U.height-ot){Z.bindFramebuffer(I.FRAMEBUFFER,Vt);let Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,Pt.byteLength,I.STREAM_READ),I.readPixels(rt,gt,xt,ot,Zt.convert(Qt),Zt.convert(ne),0);let fe=T!==null?ct.get(T).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,fe);let Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await f0(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Pt),I.deleteBuffer(Xt),I.deleteSync(Me),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,rt=null,gt=0){U.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),rt=arguments[0]||null,U=arguments[1]);let xt=Math.pow(2,-gt),ot=Math.floor(U.image.width*xt),Pt=Math.floor(U.image.height*xt),Ot=rt!==null?rt.x:0,Vt=rt!==null?rt.y:0;P.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,gt,0,0,Ot,Vt,ot,Pt),Z.unbindTexture()},this.copyTextureToTexture=function(U,rt,gt=null,xt=null,ot=0){U.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),xt=arguments[0]||null,U=arguments[1],rt=arguments[2],ot=arguments[3]||0,gt=null);let Pt,Ot,Vt,Wt,Qt,ne,Xt,fe,Me,_e=U.isCompressedTexture?U.mipmaps[ot]:U.image;gt!==null?(Pt=gt.max.x-gt.min.x,Ot=gt.max.y-gt.min.y,Vt=gt.isBox3?gt.max.z-gt.min.z:1,Wt=gt.min.x,Qt=gt.min.y,ne=gt.isBox3?gt.min.z:0):(Pt=_e.width,Ot=_e.height,Vt=_e.depth||1,Wt=0,Qt=0,ne=0),xt!==null?(Xt=xt.x,fe=xt.y,Me=xt.z):(Xt=0,fe=0,Me=0);let Qe=Zt.convert(rt.format),pe=Zt.convert(rt.type),qt;rt.isData3DTexture?(P.setTexture3D(rt,0),qt=I.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(P.setTexture2DArray(rt,0),qt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(rt,0),qt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,rt.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,rt.unpackAlignment);let Hn=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Vi=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ne);let Gs=U.isDataArrayTexture||U.isData3DTexture,be=rt.isDataArrayTexture||rt.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let In=ct.get(U),Vs=ct.get(rt),cn=ct.get(In.__renderTarget),ti=ct.get(Vs.__renderTarget);Z.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<Vt;ei++)Gs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ct.get(U).__webglTexture,ot,ne+ei),U.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ct.get(rt).__webglTexture,ot,Me+ei),I.blitFramebuffer(Wt,Qt,Pt,Ot,Xt,fe,Pt,Ot,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(qt,ot,Xt,fe,Me+ei,Wt,Qt,Pt,Ot):I.copyTexSubImage2D(qt,ot,Xt,fe,Me+ei,Wt,Qt,Pt,Ot);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?U.isDataTexture||U.isData3DTexture?I.texSubImage3D(qt,ot,Xt,fe,Me,Pt,Ot,Vt,Qe,pe,_e.data):rt.isCompressedArrayTexture?I.compressedTexSubImage3D(qt,ot,Xt,fe,Me,Pt,Ot,Vt,Qe,_e.data):I.texSubImage3D(qt,ot,Xt,fe,Me,Pt,Ot,Vt,Qe,pe,_e):U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ot,Xt,fe,Pt,Ot,Qe,pe,_e.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ot,Xt,fe,_e.width,_e.height,Qe,_e.data):I.texSubImage2D(I.TEXTURE_2D,ot,Xt,fe,Pt,Ot,Qe,pe,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,Hn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),ot===0&&rt.generateMipmaps&&I.generateMipmap(qt),Z.unbindTexture()},this.copyTextureToTexture3D=function(U,rt,gt=null,xt=null,ot=0){return U.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),gt=arguments[0]||null,xt=arguments[1]||null,U=arguments[2],rt=arguments[3],ot=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,rt,gt,xt,ot)},this.initRenderTarget=function(U){ct.get(U).__webglFramebuffer===void 0&&P.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?P.setTextureCube(U,0):U.isData3DTexture?P.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?P.setTexture2DArray(U,0):P.setTexture2D(U,0),Z.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,Z.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Ho=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Go=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new H,fr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Zs=new H,rs=new H,os=new H,as=new Et,$s=new Et,Zf=new Jt,fo=new H,Ks=new H,po=new H,cf=new Et,Cl=new Et,hf=new Et,Wo=class extends Ne{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vo(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new fr(n,3,0,!1)),ss.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),os,o,rs,i,r),mo(Ks.set(.5,-.5,0),os,o,rs,i,r),mo(po.set(.5,.5,0),os,o,rs,i,r),cf.set(0,0),Cl.set(1,0),hf.set(1,1);let a=t.ray.intersectTriangle(fo,Ks,po,!1,Zs);if(a===null&&(mo(Ks.set(-.5,.5,0),os,o,rs,i,r),Cl.set(0,1),a=t.ray.intersectTriangle(fo,po,Ks,!1,Zs),a===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:ci.getInterpolation(Zs,fo,Ks,po,cf,Cl,hf,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(s,t,e,n,i,r){as.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?($s.x=r*as.x-i*as.y,$s.y=i*as.x+r*as.y):$s.copy(as),s.copy(t),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Zf)}var Fc=class extends tn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new Jt,uf=new Jt,go=[],ff=new jn,ay=new Jt,Js=new Ct,js=new Qn,Re=class extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ay)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),ff.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(ff)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),js.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),uf.multiplyMatrices(n,ls),Js.matrixWorld=uf,Js.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let l=go[o];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(i*this.count),i,this.count,vh,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xo=new H,qo=new H,df=new Jt,Qs=new cr,xo=new Qn,Il=new H,pf=new H,Oc=class extends Ne{constructor(t=new ee,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Xo.fromBufferAttribute(e,i-1),qo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;df.copy(i).invert(),Qs.copy(t.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,x=m-1;g<x;g+=c){let p=u.getX(g),M=u.getX(g+1),v=yo(this,t,Qs,l,p,M);v&&e.push(v)}if(this.isLineLoop){let g=u.getX(m-1),x=u.getX(d),p=yo(this,t,Qs,l,g,x);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,x=m-1;g<x;g+=c){let p=yo(this,t,Qs,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){let g=yo(this,t,Qs,l,m-1,d);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yo(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Xo.fromBufferAttribute(o,i),qo.fromBufferAttribute(o,r),e.distanceSqToSegment(Xo,qo,Il,pf)>n)return;Il.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Il);if(!(l<t.near||l>t.far))return{distance:l,point:pf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var mf=new H,gf=new H,Yo=class extends Oc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)mf.fromBufferAttribute(e,i),gf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gr=class extends un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xf=new Jt,Bc=new cr,vo=new Qn,Mo=new H,Zo=class extends Ne{constructor(t=new ee,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;xf.copy(i).invert(),Bc.copy(t.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){let x=c.getX(m);Mo.fromBufferAttribute(h,x),yf(Mo,x,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)Mo.fromBufferAttribute(h,m),yf(Mo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(s,t,e,n,i,r,o){let a=Bc.distanceSqToPoint(s);if(a<e){let l=new H;Bc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Le=class extends tn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Et:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,i=[],r=[],o=[],a=new H,l=new Jt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ze(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends fn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kc=class extends xr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var _o=new H,Pl=new Th,Ll=new Th,Dl=new Th,Hc=class extends fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(_o.subVectors(i[0],i[1]).add(i[0]),c=_o);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(_o.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=_o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),Pl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,g,x),Ll.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,g,x),Dl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,g,x)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ll.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Dl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Pl.calc(l),Ll.calc(l),Dl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function ly(s,t){let e=1-s;return e*e*t}function cy(s,t){return 2*(1-s)*s*t}function hy(s,t){return s*s*t}function or(s,t,e,n){return ly(s,t)+cy(s,e)+hy(s,n)}function uy(s,t){let e=1-s;return e*e*e*t}function fy(s,t){let e=1-s;return 3*e*e*s*t}function dy(s,t){return 3*(1-s)*s*s*t}function py(s,t){return s*s*s*t}function ar(s,t,e,n,i){return uy(s,t)+fy(s,e)+dy(s,n)+py(s,i)}var $o=class extends fn{constructor(t=new Et,e=new Et,n=new Et,i=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Et){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,i.x,r.x,o.x,a.x),ar(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gc=class extends fn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,i.x,r.x,o.x,a.x),ar(t,i.y,r.y,o.y,a.y),ar(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends fn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends fn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends fn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(or(t,i.x,r.x,o.x),or(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wc=class extends fn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(or(t,i.x,r.x,o.x),or(t,i.y,r.y,o.y),or(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vf(a,l.x,c.x,u.x,h.x),vf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Et().fromArray(i))}return this}},Xc=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:Hc,CubicBezierCurve:$o,CubicBezierCurve3:Gc,EllipseCurve:xr,LineCurve:Ko,LineCurve3:Vc,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Wc,SplineCurve:jo}),qc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Xc[i.type]().fromJSON(i))}return this}},Qo=class extends qc{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Jo(this.currentPoint.clone(),new Et(t,e),new Et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new $o(this.currentPoint.clone(),new Et(t,e),new Et(n,i),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new xr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ta=class s extends ee{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ze(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new H,f=new Et,d=new H,m=new H,g=new H,x=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:x=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-x,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:x=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-x,d.z=p*0,m.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(m)}for(let M=0;M<=e;M++){let v=n+M*u*i,y=Math.sin(v),_=Math.cos(v);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*y,h.y=t[w].y,h.z=t[w].x*_,o.push(h.x,h.y,h.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);let S=l[3*w+0]*y,T=l[3*w+1],b=l[3*w+0]*_;c.push(S,T,b)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,_=y,w=y+t.length,S=y+t.length+1,T=y+1;r.push(_,w,T),r.push(S,T,w)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Di=class s extends ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},te=class s extends ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,g=[],x=n/2,p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function M(){let y=new H,_=new H,w=0,S=(e-t)/n;for(let T=0;T<=r;T++){let b=[],E=T/r,R=E*(e-t)+t;for(let L=0;L<=i;L++){let D=L/i,N=D*l+a,O=Math.sin(N),z=Math.cos(N);_.x=R*O,_.y=-E*n+x,_.z=R*z,h.push(_.x,_.y,_.z),y.set(O,S,z).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-E),b.push(m++)}g.push(b)}for(let T=0;T<i;T++)for(let b=0;b<r;b++){let E=g[b][T],R=g[b+1][T],L=g[b+1][T+1],D=g[b][T+1];(t>0||b!==0)&&(u.push(E,R,D),w+=3),(e>0||b!==r-1)&&(u.push(R,L,D),w+=3)}c.addGroup(p,w,0),p+=w}function v(y){let _=m,w=new Et,S=new H,T=0,b=y===!0?t:e,E=y===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,x*E,0),f.push(0,E,0),d.push(.5,.5),m++;let R=m;for(let L=0;L<=i;L++){let N=L/i*l+a,O=Math.cos(N),z=Math.sin(N);S.x=b*z,S.y=x*E,S.z=b*O,h.push(S.x,S.y,S.z),f.push(0,E,0),w.x=O*.5+.5,w.y=z*.5*E+.5,d.push(w.x,w.y),m++}for(let L=0;L<i;L++){let D=_+L,N=R+L;y===!0?u.push(N,N+1,D):u.push(N+1,N,D),T+=3}c.addGroup(p,T,y===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ss=class s extends te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yc=class s extends ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new H,y=new H,_=new H;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],y),d(e[w+2],_),l(v,y,_,M)}function l(M,v,y,_){let w=_+1,S=[];for(let T=0;T<=w;T++){S[T]=[];let b=M.clone().lerp(y,T/w),E=v.clone().lerp(y,T/w),R=w-T;for(let L=0;L<=R;L++)L===0&&T===w?S[T][L]=b:S[T][L]=b.clone().lerp(E,L/R)}for(let T=0;T<w;T++)for(let b=0;b<2*(w-T)-1;b++){let E=Math.floor(b/2);b%2===0?(f(S[T][E+1]),f(S[T+1][E]),f(S[T][E])):(f(S[T][E+1]),f(S[T+1][E+1]),f(S[T+1][E]))}}function c(M){let v=new H;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){let M=new H;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=x(M)/2/Math.PI+.5,_=p(M)/Math.PI+.5;o.push(y,1-_)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],_=o[M+4],w=Math.max(v,y,_),S=Math.min(v,y,_);w>.9&&S<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),_<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let M=new H,v=new H,y=new H,_=new H,w=new Et,S=new Et,T=new Et;for(let b=0,E=0;b<r.length;b+=9,E+=6){M.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),w.set(o[E+0],o[E+1]),S.set(o[E+2],o[E+3]),T.set(o[E+4],o[E+5]),_.copy(M).add(v).add(y).divideScalar(3);let R=x(_);g(w,E+0,M,R),g(S,E+2,v,R),g(T,E+4,y,R)}}function g(M,v,y,_){_<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=_/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ts=class extends Qo{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Qo().fromJSON(i))}return this}},my={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=$f(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=My(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],f=s[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return yr(r,o,e,a,l,d,0),o}};function $f(s,t,e,n,i){let r,o;if(i===Py(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Mf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mf(r,s[r],s[r+1],o);return o&&pa(o,o.next)&&(Mr(o),o=o.next),o}function Ni(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Te(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Sy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?xy(s,n,i,r):gy(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Mr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=yy(Ni(s),t,e),yr(s,t,e,n,i,r,2)):o===2&&vy(s,t,e,n,i,r):yr(Ni(s),t,e,n,i,r,1);break}}}function gy(s){let t=s.prev,e=s,n=s.next;if(Te(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&hs(i,a,r,l,o,c,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xy(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Te(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,x=u>h?u>f?u:f:h>f?h:f,p=Zc(d,m,t,e,n),M=Zc(g,x,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=x&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=g&&y.y>=m&&y.y<=x&&y!==i&&y!==o&&hs(a,u,l,h,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=x&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=x&&y!==i&&y!==o&&hs(a,u,l,h,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!pa(i,r)&&Kf(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=s=r),n=n.next}while(n!==s);return Ni(n)}function vy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ry(o,a)){let l=Jf(o,a);o=Ni(o,o.next),l=Ni(l,l.next),yr(o,t,e,n,i,r,0),yr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function My(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=$f(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ay(c));for(i.sort(_y),r=0;r<i.length;r++)e=by(i[r],e);return e}function _y(s,t){return s.x-t.x}function by(s,t){let e=wy(s,t);if(!e)return t;let n=Jf(e,s);return Ni(n,n.next),Ni(e,e.next)}function wy(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),vr(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Ey(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Ey(s,t){return Te(s.prev,s,t.prev)<0&&Te(t.next,s,s.next)<0}function Sy(s,t,e,n){let i=s;do i.z===0&&(i.z=Zc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ty(i)}function Ty(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Zc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ay(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ry(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Cy(s,t)&&(vr(s,t)&&vr(t,s)&&Iy(s,t)&&(Te(s.prev,s,t.prev)||Te(s,t.prev,t))||pa(s,t)&&Te(s.prev,s,s.next)>0&&Te(t.prev,t,t.next)>0)}function Te(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pa(s,t){return s.x===t.x&&s.y===t.y}function Kf(s,t,e,n){let i=wo(Te(s,t,e)),r=wo(Te(s,t,n)),o=wo(Te(e,n,s)),a=wo(Te(e,n,t));return!!(i!==r&&o!==a||i===0&&bo(s,e,t)||r===0&&bo(s,n,t)||o===0&&bo(e,s,n)||a===0&&bo(e,t,n))}function bo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wo(s){return s>0?1:s<0?-1:0}function Cy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return Te(s.prev,s,s.next)<0?Te(s,t,s.next)>=0&&Te(s,s.prev,t)>=0:Te(s,t,s.prev)<0||Te(s,s.next,t)<0}function Iy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Jf(s,t){let e=new $c(s.i,s.x,s.y),n=new $c(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mf(s,t,e,n){let i=new $c(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function $c(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Py(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var zn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];_f(t),bf(n,t);let o=t.length;e.forEach(_f);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,bf(n,e[l]);let a=my.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _f(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var _r=class s extends ee{constructor(t=new Ts([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ly,v,y=!1,_,w,S,T;p&&(v=p.getSpacedPoints(u),y=!0,f=!1,_=p.computeFrenetFrames(u,!1),w=new H,S=new H,T=new H),f||(x=0,d=0,m=0,g=0);let b=a.extractPoints(c),E=b.shape,R=b.holes;if(!zn.isClockWise(E)){E=E.reverse();for(let F=0,K=R.length;F<K;F++){let I=R[F];zn.isClockWise(I)&&(R[F]=I.reverse())}}let D=zn.triangulateShape(E,R),N=E;for(let F=0,K=R.length;F<K;F++){let I=R[F];E=E.concat(I)}function O(F,K,I){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(K,I)}let z=E.length,W=D.length;function B(F,K,I){let ht,et,it,Z=F.x-K.x,Mt=F.y-K.y,ct=I.x-F.x,P=I.y-F.y,C=Z*Z+Mt*Mt,X=Z*P-Mt*ct;if(Math.abs(X)>Number.EPSILON){let J=Math.sqrt(C),ft=Math.sqrt(ct*ct+P*P),G=K.x-Mt/J,lt=K.y+Z/J,pt=I.x-P/ft,_t=I.y+ct/ft,It=((pt-G)*P-(_t-lt)*ct)/(Z*P-Mt*ct);ht=G+Z*It-F.x,et=lt+Mt*It-F.y;let at=ht*ht+et*et;if(at<=2)return new Et(ht,et);it=Math.sqrt(at/2)}else{let J=!1;Z>Number.EPSILON?ct>Number.EPSILON&&(J=!0):Z<-Number.EPSILON?ct<-Number.EPSILON&&(J=!0):Math.sign(Mt)===Math.sign(P)&&(J=!0),J?(ht=-Mt,et=Z,it=Math.sqrt(C)):(ht=Z,et=Mt,it=Math.sqrt(C/2))}return new Et(ht/it,et/it)}let j=[];for(let F=0,K=N.length,I=K-1,ht=F+1;F<K;F++,I++,ht++)I===K&&(I=0),ht===K&&(ht=0),j[F]=B(N[F],N[I],N[ht]);let q=[],ut,bt=j.concat();for(let F=0,K=R.length;F<K;F++){let I=R[F];ut=[];for(let ht=0,et=I.length,it=et-1,Z=ht+1;ht<et;ht++,it++,Z++)it===et&&(it=0),Z===et&&(Z=0),ut[ht]=B(I[ht],I[it],I[Z]);q.push(ut),bt=bt.concat(ut)}for(let F=0;F<x;F++){let K=F/x,I=d*Math.cos(K*Math.PI/2),ht=m*Math.sin(K*Math.PI/2)+g;for(let et=0,it=N.length;et<it;et++){let Z=O(N[et],j[et],ht);V(Z.x,Z.y,-I)}for(let et=0,it=R.length;et<it;et++){let Z=R[et];ut=q[et];for(let Mt=0,ct=Z.length;Mt<ct;Mt++){let P=O(Z[Mt],ut[Mt],ht);V(P.x,P.y,-I)}}}let At=m+g;for(let F=0;F<z;F++){let K=f?O(E[F],bt[F],At):E[F];y?(S.copy(_.normals[0]).multiplyScalar(K.x),w.copy(_.binormals[0]).multiplyScalar(K.y),T.copy(v[0]).add(S).add(w),V(T.x,T.y,T.z)):V(K.x,K.y,0)}for(let F=1;F<=u;F++)for(let K=0;K<z;K++){let I=f?O(E[K],bt[K],At):E[K];y?(S.copy(_.normals[F]).multiplyScalar(I.x),w.copy(_.binormals[F]).multiplyScalar(I.y),T.copy(v[F]).add(S).add(w),V(T.x,T.y,T.z)):V(I.x,I.y,h/u*F)}for(let F=x-1;F>=0;F--){let K=F/x,I=d*Math.cos(K*Math.PI/2),ht=m*Math.sin(K*Math.PI/2)+g;for(let et=0,it=N.length;et<it;et++){let Z=O(N[et],j[et],ht);V(Z.x,Z.y,h+I)}for(let et=0,it=R.length;et<it;et++){let Z=R[et];ut=q[et];for(let Mt=0,ct=Z.length;Mt<ct;Mt++){let P=O(Z[Mt],ut[Mt],ht);y?V(P.x,P.y+v[u-1].y,v[u-1].x+I):V(P.x,P.y,h+I)}}}st(),$();function st(){let F=i.length/3;if(f){let K=0,I=z*K;for(let ht=0;ht<W;ht++){let et=D[ht];Q(et[2]+I,et[1]+I,et[0]+I)}K=u+x*2,I=z*K;for(let ht=0;ht<W;ht++){let et=D[ht];Q(et[0]+I,et[1]+I,et[2]+I)}}else{for(let K=0;K<W;K++){let I=D[K];Q(I[2],I[1],I[0])}for(let K=0;K<W;K++){let I=D[K];Q(I[0]+z*u,I[1]+z*u,I[2]+z*u)}}n.addGroup(F,i.length/3-F,0)}function $(){let F=i.length/3,K=0;vt(N,K),K+=N.length;for(let I=0,ht=R.length;I<ht;I++){let et=R[I];vt(et,K),K+=et.length}n.addGroup(F,i.length/3-F,1)}function vt(F,K){let I=F.length;for(;--I>=0;){let ht=I,et=I-1;et<0&&(et=F.length-1);for(let it=0,Z=u+x*2;it<Z;it++){let Mt=z*it,ct=z*(it+1),P=K+ht+Mt,C=K+et+Mt,X=K+et+ct,J=K+ht+ct;Y(P,C,X,J)}}}function V(F,K,I){l.push(F),l.push(K),l.push(I)}function Q(F,K,I){k(F),k(K),k(I);let ht=i.length/3,et=M.generateTopUV(n,i,ht-3,ht-2,ht-1);tt(et[0]),tt(et[1]),tt(et[2])}function Y(F,K,I,ht){k(F),k(K),k(ht),k(K),k(I),k(ht);let et=i.length/3,it=M.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);tt(it[0]),tt(it[1]),tt(it[3]),tt(it[1]),tt(it[2]),tt(it[3])}function k(F){i.push(l[F*3+0]),i.push(l[F*3+1]),i.push(l[F*3+2])}function tt(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Dy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xc[i.type]().fromJSON(i)),new s(n,t.options)}},Ly={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Et(r,o),new Et(a,l),new Et(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],g=t[r*3],x=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Et(o,1-l),new Et(c,1-h),new Et(f,1-m),new Et(g,1-p)]:[new Et(a,1-l),new Et(u,1-h),new Et(d,1-m),new Et(x,1-p)]}};function Dy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var br=class s extends Yc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var dn=class s extends ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){let M=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let _=0;_<=e;_++){let w=_/e;h.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),x.push(w+y,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let v=u[p][M+1],y=u[p][M],_=u[p+1][M],w=u[p+1][M+1];(p!==0||o>0)&&d.push(v,y,w),(p!==n-1||l<Math.PI)&&d.push(y,_,w)}this.setIndex(d),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fn=class s extends ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let g=m/i*r,x=d/n*Math.PI*2;h.x=(t+e*Math.cos(x))*Math.cos(g),h.y=(t+e*Math.cos(x))*Math.sin(g),h.z=e*Math.sin(x),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let g=(i+1)*d+m-1,x=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,M=(i+1)*d+m;o.push(g,x,M),o.push(x,p,M)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ea=class extends Pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},mi=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},wn=class extends un{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Nt(16777215),this.specular=new Nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ht=class extends un{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Eo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ny(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var As=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends As{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=t,a=2*e-n;break;case pu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case du:o=t,l=2*n-e;break;case pu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),g=m*m,x=g*m,p=-f*x+2*f*g-f*m,M=(1+f)*x+(-1.5-2*f)*g+(-.5+f)*m+1,v=(-1-d)*x+(1.5+d)*g+.5*m,y=d*x-d*g;for(let _=0;_!==a;++_)r[_]=p*o[u+_]+M*o[c+_]+v*o[l+_]+y*o[h+_];return r}},Jc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},jc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case Mc:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ny(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[f+m]||g!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Mc;var Ui=class extends En{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Io;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends En{};Qc.prototype.ValueTypeName="color";var th=class extends En{};th.prototype.ValueTypeName="number";var eh=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},na=class extends En{InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends En{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Io;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends En{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Uy=new ih,sh=class{constructor(t){this.manager=t!==void 0?t:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ia=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Nl=new Jt,wf=new H,Ef=new H,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ef),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rh=class extends wr{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ms*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},sa=class extends Rs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Sf=new Jt,tr=new H,Ul=new H,oh=class extends wr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),Ul.copy(n.position),Ul.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}},ra=class extends Rs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ah=class extends wr{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tf(){return performance.now()}var Ah="\\[\\]\\.:\\/",zy=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Fy="[^"+Ah.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",Rh),By=/(WCOD+)?/.source.replace("WCOD",Fy),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Gy=new RegExp("^"+Oy+By+ky+Hy+"$"),Vy=["material","materials","bones","map"],lh=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zy,"")}static parseTrackName(t){let e=Gy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=lh;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var Ps=new Map;window.BDS_DATA=(s,t,e)=>{let n=Ps.get(s);n&&(Ps.delete(s),n.resolve({fmt:t,b64:e}))};function Wy(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Xy(s){let t=new DecompressionStream("gzip"),e=new Blob([s]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function qy(s,t){return new Promise((e,n)=>{Ps.set(s,{resolve:e});let i=document.createElement("script");i.src=t,i.async=!0,i.onerror=()=>{Ps.delete(s),n(new Error("Impossibile caricare "+t))},i.onload=()=>{i.remove(),setTimeout(()=>{Ps.has(s)&&(Ps.delete(s),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(i)})}async function Sr(s,t){let{fmt:e,b64:n}=await qy(s,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let i=await Xy(Wy(n));return e==="bin"?i:JSON.parse(new TextDecoder().decode(i))}var ma=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var ga=class{constructor(t,e,n){let i=t.height;this.nx=i.nx,this.nz=i.nz,this.step=i.step,this.x0=i.x0,this.z0=i.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*i.scale;this.h0=r,this.hScale=i.scale,this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0);{let c=new Uint32Array(l.getImageData(0,0,o.w,o.h).data.buffer),u=new Uint8Array(c.length),h=new Map;this.lcKeys=[];let f=-1,d=0;for(let m=0;m<c.length;m++){let g=c[m];g!==f&&(f=g,d=h.get(g),d===void 0&&(d=this.lcKeys.length,h.set(g,d),this.lcKeys.push(g))),u[m]=d}this.lcIdx=u}this.lcCanvas=a,this.texture=new Le(a),this.texture.colorSpace=ve,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=_n,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,u])=>({k:c,c:u})),this.palette.push({k:"default",c:o.default})}heightOrig(t,e){let n=(t-this.x0)/this.step,i=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(i);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=i-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h0,h=this.hScale;if(a+l<=1)return(u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l)*h;let f=u[c+this.nx+1];return(f+(u[c+this.nx]-f)*(1-a)+(u[c+1]-f)*(1-l))*h}height(t,e){let n=(t-this.x0)/this.step,i=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(i);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=i-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h;if(a+l<=1)return u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l;let h=u[c+this.nx+1];return h+(u[c+this.nx]-h)*(1-a)+(u[c+1]-h)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),i=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||i<0||n>=this.lcW||i>=this.lcH)return"default";let r=this.lcIdx[i*this.lcW+n],o=this.classCache.get(r);if(o===void 0){let a=this.lcKeys[r],l=a&255,c=a>>>8&255,u=a>>>16&255,h=1e9;for(let f of this.palette){let d=(f.c[0]-l)**2+(f.c[1]-c)**2+(f.c[2]-u)**2;d<h&&(h=d,o=f.k)}this.classCache.set(r,o)}return o}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Ht({map:this.texture});return e.onBeforeCompile=n=>{n.uniforms.detailMap={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUp = normalize(mat3(modelMatrix) * objectNormal).y;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vUp;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          // imbocchi delle gallerie: il colore riservato (magenta) apre il terreno; sul bordo, dove
          // il filtro lo mescola ai colori vicini, lo si toglie per non lasciare aloni
          float hole = min(diffuseColor.r, diffuseColor.b) - diffuseColor.g;
          if (hole > 0.5) discard;
          if (hole > 0.04) diffuseColor.rgb = clamp((diffuseColor.rgb - hole * vec3(1.0, 0.0, 1.0)) / (1.0 - hole), 0.0, 1.0);
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);
          // sui pendii molto ripidi (oltre ~45 gradi) affiora la roccia
          float steep = smoothstep(0.26, 0.46, 1.0 - vUp);
          vec3 rock = vec3(0.47, 0.45, 0.42) * (0.75 + 0.5 * d1) * (0.9 + 0.3 * d2);
          diffuseColor.rgb = mix(diffuseColor.rgb, rock, steep * 0.85);`)},e}buildChunk(t,e,n,i,r,o=0){let a=Math.round(n/i)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),u=this.proj.xmax-this.proj.xmin,h=this.proj.zmax-this.proj.zmin;for(let x=0;x<a;x++)for(let p=0;p<a;p++){let M=t+p*i,v=e+x*i,y=x*a+p,_=this.height(M,v);if(o>0)for(let w=-2;w<=2;w++)for(let S=-2;S<=2;S++)_=Math.min(_,this.height(M+w*i/2,v+S*i/2));l[y*3]=M,l[y*3+1]=_-o,l[y*3+2]=v,c[y*2]=(M-this.proj.xmin)/u,c[y*2+1]=1-(v-this.proj.zmin)/h}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let x=0;x<a-1;x++)for(let p=0;p<a-1;p++){let M=x*a+p,v=M+1,y=M+a,_=y+1;f[d++]=M,f[d++]=y,f[d++]=v,f[d++]=v,f[d++]=y,f[d++]=_}let m=new ee;m.setAttribute("position",new ue(l,3)),m.setAttribute("uv",new ue(c,2)),m.setIndex(new ue(f,1)),m.computeVertexNormals();let g=new Ct(m,r);return g.receiveShadow=!0,g}};var oe=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,i=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(i,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.i.length===0}build(){let t=new ee;return t.setAttribute("position",new Yt(this.p,3)),this.c&&t.setAttribute("color",new Yt(this.c,3)),this.u&&t.setAttribute("uv",new Yt(this.u,2)),t.setIndex(this.n>65535?new bs(this.i,1):new _s(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new Ct(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Ee(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s^=s>>>4,s=Math.imul(s,668265261),s^=s>>>15,(s>>>0)/4294967296}function jf(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],l=e[r][0],c=e[r][1];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Fi(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Le(i);return r.colorSpace=ve,n&&(r.wrapS=r.wrapT=di),r.anisotropy=8,r}function Qf(s=256){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s),i=16,r=new Float32Array(i*i);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/s*i,h=c/s*i,f=Math.floor(u),d=Math.floor(h),m=u-f,g=h-d,x=(v,y)=>r[(y+i)%i*i+(v+i)%i],p=m*m*(3-2*m),M=g*g*(3-2*g);return(x(f,d)*(1-p)+x(f+1,d)*p)*(1-M)+(x(f,d+1)*(1-p)+x(f+1,d+1)*p)*M};for(let l=0;l<s;l++)for(let c=0;c<s;c++){let u=(l*s+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new Le(t);return a.wrapS=a.wrapT=di,a.anisotropy=8,a}var td=4,Tr=null;function Ls(){if(Tr)return Tr;let s=Fi(256,256,t=>{t.clearRect(0,0,256,256);let e="#ffffff";t.fillStyle=e,t.fillRect(0,6,256,4),t.fillRect(0,54,256,4);for(let n=0;n<10;n++){let i=n*25.6+11;t.fillRect(i,2,3.5,60),t.beginPath(),t.moveTo(i-2,4),t.lineTo(i+1.75,0),t.lineTo(i+5.5,4),t.fill()}t.strokeStyle=e,t.lineWidth=1.6;for(let n=-8;n<24;n++)t.beginPath(),t.moveTo(n*16,64),t.lineTo(n*16+64,128),t.stroke(),t.beginPath(),t.moveTo(n*16+64,64),t.lineTo(n*16,128),t.stroke();t.fillRect(0,65,256,3),t.fillRect(0,124,256,3),t.fillStyle="#ffffff",t.fillRect(0,140,256,12),t.fillRect(0,166,256,12);for(let n of[6,134])t.fillRect(n,130,14,62);t.fillRect(0,194,256,5),t.fillRect(0,250,256,6),t.fillRect(0,214,256,3);for(let n=0;n<16;n++)t.fillRect(n*16+6,194,3,62);t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.arc(n*32+16,214,9,Math.PI,0),t.stroke();t.fillRect(0,192,4,64),t.fillRect(252,192,4,64)});return s.wrapT=_n,s.anisotropy=4,Tr={grille:new Ht({map:s,vertexColors:!0,alphaTest:.45,side:re,transparent:!1}),solid:new Ht({vertexColors:!0})},Tr.depth=new ur({depthPacking:wh,map:s,alphaTest:.45,side:re}),Tr}var Yy=s=>[1-(s+1)/td+.004,1-s/td-.004];function Ar(s,t,e,n,i,r,o,a,l,c,u,h,f=0){let d=Math.hypot(i-t,r-e),[m,g]=Yy(c),x=f+d/u,p=s.v(t,n+a,e,h[0],h[1],h[2],f,m),M=s.v(i,o+a,r,h[0],h[1],h[2],x,m),v=s.v(i,o+l,r,h[0],h[1],h[2],x,g),y=s.v(t,n+l,e,h[0],h[1],h[2],f,g);return s.quad(p,M,v,y),x}function pn(s,t,e,n,i,r,o,a,l,c,u=null){let h=i/2,f=o/2,d=[a*h,l*h],m=[-l*f,a*f],g=(M,v,y)=>[t+d[0]*M+m[0]*y,e+v*r,n+d[1]*M+m[1]*y],x=[1,.62,.8,.8,.72,.72];[[g(-1,1,-1),g(-1,1,1),g(1,1,1),g(1,1,-1)],[g(-1,0,-1),g(1,0,-1),g(1,0,1),g(-1,0,1)],[g(-1,0,1),g(1,0,1),g(1,1,1),g(-1,1,1)],[g(1,0,-1),g(-1,0,-1),g(-1,1,-1),g(1,1,-1)],[g(1,0,1),g(1,0,-1),g(1,1,-1),g(1,1,1)],[g(-1,0,-1),g(-1,0,1),g(-1,1,1),g(-1,1,-1)]].forEach((M,v)=>{if(v===1)return;let y=v===0&&u?u:c,_=v===0&&u?1:x[v],w=M.map(S=>s.v(S[0],S[1],S[2],y[0]*_,y[1]*_,y[2]*_));s.quad(w[0],w[1],w[2],w[3])})}var Rr=[.17,.19,.18],Zy=[.13,.22,.16],$y=[.45,.32,.2],Ky=[.62,.64,.62],ya=[[.86,.8,.66],[.78,.7,.55],[.72,.72,.7],[.82,.62,.48],[.62,.36,.28]];function ed(s,t,e,n,i,r,o){let a=Ee(o)<.6?Rr:Zy,l=ya[Math.floor(Ee(o+7)*ya.length)],c=n===4?Math.min(.6,i*.35):0,u=0;for(let h=0;h<e.length-1;h++){let[f,d]=e[h],[m,g]=e[h+1],x=Math.hypot(m-f,g-d);if(x<.2)continue;let p=(m-f)/x,M=(g-d)/x,v=Math.max(1,Math.ceil(x/6));for(let y=0;y<v;y++){let _=f+(m-f)*y/v,w=d+(g-d)*y/v,S=f+(m-f)*(y+1)/v,T=d+(g-d)*(y+1)/v,b=r.height(_,w),E=r.height(S,T);if(n===4){let D=x/v,N=Math.min(b,E);pn(s,(_+S)/2,N-.3,(w+T)/2,D+.02,c+.3+Math.abs(E-b)*.5,.3,p,M,l,[.74,.73,.7])}u=Ar(t,_,w,b,S,T,E,c,i,n===5?1:n===6?2:0,n===6?5:1.2,n===6?$y:n===5?Ky:a,u)}if(n===5||n===7){let y=Math.max(1,Math.round(x/3));for(let _=0;_<=y;_++){let w=f+(m-f)*_/y,S=d+(g-d)*_/y;pn(s,w,r.height(w,S)-.2,S,.06,i+.25,.06,p,M,n===5?[.36,.4,.36]:a)}}}}var xa=(s,t)=>Math.atan2(-t,s),va=class{constructor(t,e,n){this.R=t,this.T=e,this.col=n,this.dyn=[]}baseY(t,e){let n=this.R.surfaceAt(t,e,1e9);return n&&n.road?n.h:this.T.height(t,e)+.02}leafGeo(t,e,n){let i=new oe(!0,!0);return Ar(i,0,0,0,t,0,0,.08,e,n===4?1:3,n===3?1.1:1.6,Rr),i.build()}build(t,e){let n=e&&e.gt;if(!n||!n.length)return null;let i=Ls(),r=new oe(!0,!1),o=new oe(!0,!0),a=new $t;for(let l=0;l<n.length;l+=6){let c=n[l],u=n[l+1]/10,h=n[l+2]/10,f=n[l+3]/1800*Math.PI,d=n[l+4]/10,m=n[l+5],g=Math.sin(f),x=Math.cos(f),p=x,M=-g,v=this.baseY(u,h),y=Math.round(u*7+h*13),_=u-g*d/2,w=h-x*d/2,S=u+g*d/2,T=h+x*d/2,b=c===3?1.25:1.8,E=ya[Math.floor(Ee(y)*ya.length)];if(c<=1||c===3){let L=c===3?.3:.42;for(let D of[-1,1]){let N=u+g*(d/2+L/2)*D,O=h+x*(d/2+L/2)*D;pn(r,N,v-.3,O,L,b+.6,L,g,x,E),pn(r,N,v+b+.3,O,L+.08,.08,L+.08,g,x,[.7,.69,.66])}}else if(c===2)pn(r,_-g*.25,v,w-x*.25,.38,1.05,.38,g,x,[.92,.92,.9]),pn(r,_-g*.25,v+.75,w-x*.25,.4,.12,.4,g,x,[.8,.1,.08]),pn(r,S,v,T,.1,.85,.1,g,x,[.85,.85,.85]);else for(let[L,D]of[[_,w],[S,T]])pn(r,L,v,D,.12,.9,.12,g,x,[.85,.2,.15]);if(m===2){this.addDynamic(a,t,c,u,v,h,g,x,d,b);continue}let R=m===1;if(R&&this.col.addPolygon(t,Float32Array.from([_-p*.2,w-M*.2,S-p*.2,T-M*.2,S+p*.2,T+M*.2,_+p*.2,w+M*.2]),void 0,!0),c===0){let L=d>2.6,D=L?d/2:d,N=L?[[_,w,g,x],[S,T,-g,-x]]:[[_,w,g,x]];for(let[O,z,W,B]of N){let j=R?W:p,q=R?B:M;Ar(o,O,z,v,O+j*D,z+q*D,v,.08,b,3,1.6,Rr)}}else if(c===1){let L=R?0:d;Ar(o,_+g*L+p*.18,w+x*L+M*.18,v,S+g*L+p*.18,T+x*L+M*.18,v,.08,b,3,1.6,Rr)}else if(c===3){let L=R?0:1.2,D=g*Math.cos(L)+p*Math.sin(L),N=x*Math.cos(L)+M*Math.sin(L);Ar(o,_,w,v,_+D*d,w+N*d,v,.06,b,3,1.1,Rr)}else if(c===2)this.boom(r,_,w,v,g,x,d,R?0:1.45);else if(c===4&&R)for(let D=0;D<8;D++){let N=D/8,O=(D+1)/8,z=j=>.3*4*j*(1-j),W=_+(S-_)*(N+O)/2,B=w+(T-w)*(N+O)/2;pn(r,W,v+.8-z((N+O)/2),B,d/8,.04,.04,g,x,D%2?[.85,.15,.1]:[.95,.95,.95])}}if(r.empty||a.add(r.mesh(i.solid,!0)),!o.empty){let l=o.mesh(i.grille,!0);l.customDepthMaterial=this.depthMat(),a.add(l)}return a.userData.dispose=()=>{this.dyn=this.dyn.filter(l=>l.tile!==t?!0:(l.colObj&&this.col.remove(l.colObj),!1))},a}depthMat(){return Ls().depth}boom(t,e,n,i,r,o,a,l){let c=Math.max(2,Math.round(a/.5));for(let u=0;u<c;u++){let h=u%2?[.8,.08,.06]:[.95,.95,.95],f=(u+.5)/c*a;l>.7?pn(t,e,i+.95+u/c*a,n,.09,a/c+.005,.06,r,o,h):pn(t,e+r*f,i+.905,n+o*f,a/c+.005,.09,.06,r,o,h)}}addDynamic(t,e,n,i,r,o,a,l,c,u){let h=l,f=-a,d=i-a*c/2,m=o-l*c/2,g=i+a*c/2,x=o+l*c/2,p={tile:e,kind:n,x:i,z:o,w:c,open:0,target:0,hold:0,parts:[],colObj:null,ring:Float32Array.from([d-h*.2,m-f*.2,g-h*.2,x-f*.2,g+h*.2,x+f*.2,d+h*.2,m+f*.2])},M=Ls();if(n===2||n===4){let v=new oe(!0,!1),y=Math.max(2,Math.round(c/.5));for(let S=0;S<y;S++)pn(v,(S+.5)/y*c,-.045,0,c/y+.005,.09,.06,1,0,S%2?[.8,.08,.06]:[.95,.95,.95]);let _=new $t,w=v.mesh(M.solid,!0);_.position.set(d,r+.95,m),_.rotation.y=xa(a,l),_.add(w),t.add(_),p.parts.push({obj:w,apply:S=>{w.rotation.z=S*1.45}})}else if(n===1){let v=new Ct(this.leafGeo(c,u,n),M.grille);v.castShadow=!0,v.customDepthMaterial=this.depthMat(),v.rotation.y=xa(a,l),t.add(v),p.parts.push({obj:v,apply:y=>{v.position.set(d+a*c*y+h*.18,r,m+l*c*y+f*.18)}})}else{let v=c>2.6,y=v?c/2:c,_=this.leafGeo(y,u,n),w=v?[[d,m,a,l],[g,x,-a,-l]]:[[d,m,a,l]];for(let[S,T,b,E]of w){let R=new Ct(_,M.grille);R.castShadow=!0,R.customDepthMaterial=this.depthMat(),R.position.set(S,r,T),t.add(R);let L=xa(b,E),D=xa(h,f);for(;D-L>Math.PI;)D-=2*Math.PI;for(;D-L<-Math.PI;)D+=2*Math.PI;p.parts.push({obj:R,apply:N=>{R.rotation.y=L+(D-L)*N}})}}for(let v of p.parts)v.apply(0);p.colObj=this.col.addPolygon(e,p.ring,void 0,!0),this.dyn.push(p)}update(t,e){for(let n of this.dyn){let i=!1;for(let a of e)if(Math.abs(a.x-n.x)<14&&Math.abs(a.z-n.z)<14&&Math.hypot(a.x-n.x,a.z-n.z)<11+n.w/2){i=!0;break}if(i?n.hold=3:n.hold-=t,n.target=n.hold>0?1:0,n.open===n.target)continue;let r=n.kind===2||n.kind===4?.9:.45;n.open=n.target>n.open?Math.min(1,n.open+t*r):Math.max(0,n.open-t*r);for(let a of n.parts)a.apply(n.open);let o=n.open<.8;o&&!n.colObj?n.colObj=this.col.addPolygon(n.tile,n.ring,void 0,!0):!o&&n.colObj&&(this.col.remove(n.colObj),n.colObj=null)}}};var kt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},Lt={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},jt={GATE:14,SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},Jy=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],Ch=.18,xi=32,jy=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],Qy=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],nd=1.6,tv=.13,id={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function ev(s){let t=id[s];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var Ma=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let i=n.proj;this.xmin=i.xmin,this.zmin=i.zmin,this.xmax=i.xmax,this.zmax=i.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),u=0,h=0;for(let p=0;p<o;p++)u+=t.nodes[p*2],h+=t.nodes[p*2+1],a[p]=u/10,l[p]=h/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;let f=new Map;for(let p=0;t.th&&p<t.th.length;p+=2)f.set(t.th[p],t.th[p+1]/10);this.ways=t.ways.map(p=>{let M=r>8,v={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:M?p[8]:0,sw:M?p[9]:0,lit:M?p[10]:0,lf:M?p[11]:0,lb:M?p[12]:0,turnF:M?this.names[p[13]]:"",turnB:M?this.names[p[14]]:"",dest:M?this.names[p[15]]:"",nodes:p.slice(r)};return v.oneway=!!(v.flags&Lt.ONEWAY),v.drivable=!(v.flags&Lt.NOCAR),this.layout(v),v}),this.smooth(a,l,c),this.fixRoundabouts(a,l);let d=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=d,this.ntag=new Uint8Array(d),this.ndir=new Uint8Array(d);let m=r>8?3:2;for(let p=0;p<t.ntags.length;p+=m)this.ntag[t.ntags[p]]=t.ntags[p+1],m===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let M=p.nodes.length;p.cum=new Float32Array(M);for(let v=1;v<M;v++){let y=p.nodes[v-1],_=p.nodes[v];p.cum[v]=p.cum[v-1]+Math.hypot(this.nx[_]-this.nx[y],this.nz[_]-this.nz[y])}if(p.len=p.cum[M-1],p.abs=!!(p.flags&(Lt.BRIDGE|Lt.TUNNEL)),p.abs){let v=p.nodes[0],y=p.nodes[M-1];p.h0=e.height(this.nx[v],this.nz[v])+this.dh[v],p.h1=e.height(this.nx[y],this.nz[y])+this.dh[y],p.flags&Lt.TUNNEL&&(f.has(v)&&(p.h0=f.get(v)),f.has(y)&&(p.h1=f.get(y)))}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let M=this.pointAt(p,p.len/2),v=e.isUrban(M[0],M[1]),y=p.cls,_;y===0?_=p.flags&Lt.LINK?80:130:y===1?_=p.flags&Lt.LINK?60:v?70:110:y<=4?_=p.flags&Lt.LINK||v?50:90:y===5?_=v?50:70:y===6?_=50:_=30,p.flags&Lt.ROUNDABOUT&&(_=Math.min(_,50)),p.limit=_,p.limitMapped=!1}let g=new Int32Array(d+1);this.ways.forEach(p=>{for(let M of p.nodes)g[M+1]++});for(let p=0;p<d;p++)g[p+1]+=g[p];this.adjStart=g,this.adjWay=new Int32Array(g[d]),this.adjPos=new Int32Array(g[d]);let x=g.slice(0,d);this.ways.forEach((p,M)=>{for(let v=0;v<p.nodes.length;v++){let y=p.nodes[v],_=x[y]++;this.adjWay[_]=M,this.adjPos[_]=v}}),this.degree=new Uint8Array(d),this.degMain=new Uint8Array(d),this.w1=new Float32Array(d),this.w2=new Float32Array(d),this.m1=new Float32Array(d),this.m2=new Float32Array(d),this.onRb=new Uint8Array(d),this.ways.forEach(p=>{let M=p.cls<=kt.LIVING&&p.drivable;for(let v=0;v<p.nodes.length;v++){let y=p.nodes[v],_=(v>0?1:0)+(v<p.nodes.length-1?1:0);this.degree[y]+=_,M&&(this.degMain[y]+=_),p.width>this.w1[y]?(this.w2[y]=this.w1[y],this.w1[y]=p.width):p.width>this.w2[y]&&(this.w2[y]=p.width),M&&(p.width>this.m1[y]?(this.m2[y]=this.m1[y],this.m1[y]=p.width):p.width>this.m2[y]&&(this.m2[y]=p.width)),p.flags&Lt.ROUNDABOUT&&(this.onRb[y]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,M)=>{let v=p.width/2+1;for(let y=0;y<p.nodes.length-1;y++){let _=p.nodes[y],w=p.nodes[y+1],S=this.nx[_],T=this.nz[_],b=this.nx[w],E=this.nz[w],R=M*16384+y,L=Math.floor((Math.min(S,b)-v-this.xmin)/xi),D=Math.floor((Math.max(S,b)+v-this.xmin)/xi),N=Math.floor((Math.min(T,E)-v-this.zmin)/xi),O=Math.floor((Math.max(T,E)+v-this.zmin)/xi);for(let B=N;B<=O;B++)for(let j=L;j<=D;j++){let q=B*4096+j,ut=this.grid.get(q);ut||this.grid.set(q,ut=[]),ut.push(R)}let z=this.tileKey((S+b)/2,(T+E)/2),W=this.tileSegs.get(z);W||this.tileSegs.set(z,W=[]),W.push(R)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,M)=>{for(let v=0;v<p.p.length-1;v++){let y=this.tileKey((p.p[v][0]+p.p[v+1][0])/2,(p.p[v][1]+p.p[v+1][1])/2),_=this.tileRails.get(y);_||this.tileRails.set(y,_=[]),_.push(M*16384+v)}if(p.bridge){let v=p.p[0],y=p.p[p.p.length-1];p.h0=e.height(v[0],v[1]),p.h1=e.height(y[0],y[1]),p.cum=[0];for(let _=1;_<p.p.length;_++)p.cum.push(p.cum[_-1]+Math.hypot(p.p[_][0]-p.p[_-1][0],p.p[_][1]-p.p[_-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}rawProfile(t){if(t.raw)return t.raw;let e=this.terrain,n=4,i=5,r=Math.max(2,Math.ceil(t.len/n)+1),o=t.len/(r-1)||1,a=new Float32Array(r),l=0;for(let c=0;c<r;c++){let u=c*o;for(;l<t.nodes.length-2&&t.cum[l+1]<u;)l++;let h=t.nodes[l],f=t.nodes[l+1],d=t.cum[l+1]-t.cum[l]||1,m=Math.min(1,Math.max(0,(u-t.cum[l])/d));a[c]=e.heightOrig(this.nx[h]+(this.nx[f]-this.nx[h])*m,this.nz[h]+(this.nz[f]-this.nz[h])*m)+this.dh[h]+(this.dh[f]-this.dh[h])*m}for(let c=0;c<2&&r>2;c++){let u=new Float32Array(r),h=0;for(let f=-i;f<=i;f++)h+=a[Math.min(r-1,Math.max(0,f))];for(let f=0;f<r;f++)u[f]=h/(2*i+1),h+=a[Math.min(r-1,f+i+1)]-a[Math.min(r-1,Math.max(0,f-i))];a=u}return t.raw=a,t.pstep=o,a}nodeHeight(t){let e=0,n=0;for(let i=this.adjStart[t];i<this.adjStart[t+1];i++){let r=this.ways[this.adjWay[i]],o=this.adjPos[i];if(r.abs){if(o===0)return r.h0;if(o===r.nodes.length-1)return r.h1;continue}let a=this.rawProfile(r),l=Math.min(a.length-1,r.cum[o]/r.pstep),c=Math.min(a.length-2,Math.floor(l));e+=a.length<2?a[0]:a[c]+(a[c+1]-a[c])*(l-c),n++}return n?e/n:0}ensureProfile(t){if(t.prof||t.abs)return;let e=this.rawProfile(t),n=e.length,i=new Float32Array(e),r=[];for(let a=0;a<t.nodes.length;a++){let l=t.nodes[a];if(a===0||a===t.nodes.length-1||this.degree[l]!==2){let c=Math.min(n-1,t.cum[a]/t.pstep),u=Math.min(n-2,Math.floor(c));r.push([t.cum[a],this.nodeHeight(l)-(n<2?e[0]:e[u]+(e[u+1]-e[u])*(c-u))])}}let o=0;for(let a=0;a<n;a++){let l=a*t.pstep;for(;o<r.length-2&&r[o+1][0]<l;)o++;let[c,u]=r[o],[h,f]=r[Math.min(o+1,r.length-1)],d=h>c?Math.min(1,Math.max(0,(l-c)/(h-c))):0;i[a]+=u+(f-u)*d}t.prof=i}ensureRegion(t,e=1/0){if(this.regionDone||(this.regionDone=new Set,this.regionQ=new Map),this.regionDone.has(t))return!0;let n=this.regionQ.get(t);if(!n){let i=new Set,r=t%1e3,o=Math.floor(t/1e3);n=[];for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++)for(let c of this.tileSegs.get((o+a)*1e3+r+l)||[]){let u=Math.floor(c/16384);i.has(u)||(i.add(u),n.push(u))}this.regionQ.set(t,n)}for(;n.length;){let i=this.ways[n.pop()];if(!i.abs&&!i.carved&&(this.ensureProfile(i),this.carveWay(i),i.carved=!0),performance.now()>e)return!n.length&&(this.regionDone.add(t),this.regionQ.delete(t),!0)}return this.regionDone.add(t),this.regionQ.delete(t),!0}profAt(t,e){let n=t.prof;if(n.length<2)return n[0];let i=Math.min(n.length-1,Math.max(0,e/t.pstep)),r=Math.min(n.length-2,Math.floor(i));return n[r]+(n[r+1]-n[r])*(i-r)}carveWay(t){let e=this.terrain,n=e.h,i=e.nx,r=e.nz,o=e.step,a=e.x0,l=e.z0,c=0;{if(!t.prof)return;let u=t.width/2+.6,h=t.nodes,f=t.prof,d=t.pstep;for(let m=0;m<h.length-1;m++){let g=h[m],x=h[m+1];if(this.dh[g]>.3||this.dh[x]>.3)continue;let p=this.nx[g],M=this.nz[g],v=t.cum[m+1]-t.cum[m];if(v<.01)continue;let y=(this.nx[x]-p)/v,_=(this.nz[x]-M)/v,w=Math.max(1,Math.ceil(v/3));for(let S=0;S<=w;S++){let T=v*S/w,b=t.cum[m]+T,E=p+y*T,R=M+_*T,L=Math.min(f.length-1,Math.max(0,b/d)),D=Math.min(f.length-2,Math.floor(L)),N=f[D]+(f[D+1]-f[D])*(L-D)-.03,O=(f[D+1]-f[D])/d;for(let z=-1;z<=1;z++){let W=E-_*u*z,B=R+y*u*z,j=Math.floor((W-a)/o),q=Math.floor((B-l)/o);if(!(j<0||q<0||j>=i-1||q>=r-1))for(let ut=0;ut<4;ut++){let bt=j+(ut&1),At=q+(ut>>1),st=At*i+bt,$=N+O*((a+bt*o-E)*y+(l+At*o-R)*_);n[st]>$&&(n[st]=$,c++)}}}}}this.loweredCorners=(this.loweredCorners||0)+c}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=jy[e],i,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&Lt.LINK)?2:1:2);t.oneway?(i=o,r=0):t.lf||t.lb?(i=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-i)):o<=1?(i=.5,r=.5):(i=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(i+r))):e===kt.TRACK?a=3.2:e===kt.SERVICE?a=t.flags&Lt.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===kt.PEDESTRIAN?a=6:(t.flags&Lt.ROUNDABOUT&&!t.lanes&&(i=e<=3?1.6:1.4),a=(i+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&i===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(i+r)*n>a&&(n=a/(i+r)),t.width=a,t.lw=n,t.nF=i,t.nB=r,t.sh=(a-(i+r)*n)/2,t.cOff=-a/2+t.sh+r*n}fixRoundabouts(t,e){let n=new Map,i=l=>{for(;n.get(l)!==l;)n.set(l,n.get(n.get(l))),l=n.get(l);return l},r=this.ways.filter(l=>l.flags&Lt.ROUNDABOUT);for(let l of r){for(let c of l.nodes)n.has(c)||n.set(c,c);for(let c=1;c<l.nodes.length;c++){let u=i(l.nodes[c-1]),h=i(l.nodes[c]);u!==h&&n.set(u,h)}}let o=new Map;for(let l of n.keys()){let c=i(l);o.has(c)||o.set(c,[]),o.get(c).push(l)}let a=new Map;for(let[l,c]of o){let u=0,h=0;for(let d of c)u+=t[d],h+=e[d];u/=c.length,h/=c.length;let f=0;for(let d of c)f+=Math.hypot(t[d]-u,e[d]-h);f/=c.length,a.set(l,Math.max(4.5,Math.min(9,f*.5,2*(f-2))))}for(let l of r){if(l.widthTag>2)continue;let c=a.get(i(l.nodes[0]));if(!c)continue;let u=l.lanes>=2&&c>=7.5?2:1;l.width=c,l.nF=u,l.nB=0,l.sh=.4,l.lw=(c-.8)/u,l.cOff=-c/2+l.sh}}coveredBy(t,e,n,i=0,r=!0){let o=this.ways[t],a=u=>u.flags&Lt.ROUNDABOUT?-1:u.cls*2+(u.flags&Lt.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],m=f.nodes[h+1],g=this.nx[d],x=this.nz[d],p=this.nx[m]-g,M=this.nz[m]-x,v=p*p+M*M;if(v<1e-6)return;let y=((e-g)*p+(n-x)*M)/v;if(y<0||y>1)return;let _=Math.sqrt(v);h===0&&y*_<.3||h===f.nodes.length-2&&(1-y)*_<.3||Math.abs((e-g)*M-(n-x)*p)/_>f.width/2+i||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let i=t.length,r=new Uint8Array(i),o=new Map;this.ways.forEach((c,u)=>{let h=c.nodes;for(let f=0;f<h.length;f++)r[h[f]]+=(f>0?1:0)+(f<h.length-1?1:0);for(let f of[0,h.length-1]){let d=o.get(h[f]);d||o.set(h[f],d=[]),d.push([u,f])}});let a=(c,u)=>{let h=this.ways[c],f=h.nodes,d=f[u];if(f[0]===f[f.length-1]&&f.length>3)return u===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[m,g]of o.get(d)||[]){if(m===c)continue;let x=this.ways[m].nodes;return g===0?x[1]:x[x.length-2]}return-1},l=(c,u)=>{let h=this.ways[c].nodes,f=h[u],d=u>0?h[u-1]:a(c,u),m=u<h.length-1?h[u+1]:a(c,u),g=0,x=0,p=0,M=0,v=0;if(d>=0){let S=Math.hypot(t[f]-t[d],e[f]-e[d])||1;g=(t[f]-t[d])/S,x=(e[f]-e[d])/S}if(m>=0){let S=Math.hypot(t[m]-t[f],e[m]-e[f])||1;p=(t[m]-t[f])/S,M=(e[m]-e[f])/S}d>=0&&m>=0&&(v=Math.acos(Math.max(-1,Math.min(1,g*p+x*M))));let y=g+p,_=x+M,w=Math.hypot(y,_);return w<1e-6?null:[y/w,_/w,v]};this.ways.forEach((c,u)=>{let h=c.nodes;if(h.length<2)return;let f=[h[0]],d=l(u,0);for(let m=0;m<h.length-1;m++){let g=h[m],x=h[m+1],p=l(u,m+1),M=t[x]-t[g],v=e[x]-e[g],y=Math.hypot(M,v);if(y>3&&d&&p){let _=M/y,w=v/y,S=Math.acos(Math.max(-1,Math.min(1,d[0]*_+d[1]*w))),T=Math.acos(Math.max(-1,Math.min(1,p[0]*_+p[1]*w))),b=Math.max(S,T);if(b>.03&&b<1.1){let E=y*b/4,R=Math.min(8,Math.ceil(Math.sqrt(E/.12)));if(R>=2){let L=d[2]>.6?Math.min(y,7):y,D=p[2]>.6?Math.min(y,7):y;for(let N=1;N<R;N++){let O=N/R,z=O*O,W=z*O,B=2*W-3*z+1,j=W-2*z+O,q=-2*W+3*z,ut=W-z;t.push(B*t[g]+j*L*d[0]+q*t[x]+ut*D*p[0]),e.push(B*e[g]+j*L*d[1]+q*e[x]+ut*D*p[1]),n.push(n[g]+(n[x]-n[g])*O),f.push(t.length-1)}}}}f.push(x),d=p}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let i=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[i]+(this.nx[r]-this.nx[i])*a,this.nz[i]+(this.nz[r]-this.nz[i])*a,n,a]}heightOn(t,e,n,i,r){let o=this.ways[t];if(o.abs){let a=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?a/o.len:0)+Ch}return o.prof||this.ensureProfile(o),this.profAt(o,o.cum[e]+n*(o.cum[e+1]-o.cum[e]))+Ch}segmentsNear(t,e,n,i){let r=Math.floor((t-n-this.xmin)/xi),o=Math.floor((t+n-this.xmin)/xi),a=Math.floor((e-n-this.zmin)/xi),l=Math.floor((e+n-this.zmin)/xi),c=this._seen||(this._seen=new Set);c.clear();for(let u=a;u<=l;u++)for(let h=r;h<=o;h++){let f=this.grid.get(u*4096+h);if(f)for(let d of f)c.has(d)||(c.add(d),i(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,i){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(i-c)*h)/f;d=d<0?0:d>1?1:d;let m=l+u*d,g=c+h*d;return{t:d,px:m,pz:g,d:Math.hypot(n-m,i-g),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let i=null,r=-1e9,o=this._cand||(this._cand=[]);if(o.length=0,this.segmentsNear(t,e,8,(l,c)=>{let u=this.ways[l],h=this.projectOnSeg(l,c,t,e),f=u.width/2+.35;if(h.d>f)return;let d=this.heightOn(l,c,h.t,t,e);d>n+1.3||(o.push(d,Math.max(.03,1-h.d/f)),(d>r+.01||Math.abs(d-r)<=.01&&i&&h.d<i.d)&&(r=d,i={wi:l,k:c,t:h.t,d:h.d}))}),o.length>2){let l=0,c=0;for(let u=0;u<o.length;u+=2)r-o[u]<.8&&(c+=o[u]*o[u+1],l+=o[u+1]);l>0&&(r=c/l)}let a=this.terrain.height(t,e);return i&&r>=a-.6?{h:r,road:i}:i&&this.ways[i.wi].flags&Lt.TUNNEL&&n<r+3?{h:r,road:i}:i&&a>n+1.3?{h:r,road:i}:{h:a,road:null}}nearest(t,e,n=40,i=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(i&&!i(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:Jy[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&Lt.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let i=new Map;for(let o of t.keys()){let a=e(o);i.has(a)||i.set(a,[]),i.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&Lt.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of i.values()){if(o.length<4)continue;let a=0,l=0;for(let g of o)a+=this.nx[g],l+=this.nz[g];a/=o.length,l/=o.length;let c=1e9,u=0,h=0,f=0;for(let g of o){let x=Math.hypot(this.nx[g]-a,this.nz[g]-l);c=Math.min(c,x),u=Math.max(u,x),h=Math.max(h,r.get(g)),f+=this.dh[g]}if(u>c*1.8||u>120)continue;let d=c-h/2-.3;if(d<1.2)continue;let m=o.map(g=>{let x=Math.hypot(this.nx[g]-a,this.nz[g]-l),p=Math.max(.1,(x-r.get(g)/2-.1)/x);return[Math.atan2(this.nz[g]-l,this.nx[g]-a),a+(this.nx[g]-a)*p,l+(this.nz[g]-l)*p]}).sort((g,x)=>g[0]-x[0]).map(g=>[g[1],g[2]]);this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length,poly:m})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,i]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:i,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(i,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=g=>{let x=t.width>=i[g]-.01?r[g]:i[g];return x>0?x/2+a:0},d=-1e9,m=0;for(let g=0;g<e;g++){let x=t.nodes[g];if(o[x]>=3){let p=f(x);p>0&&(d=t.cum[g],m=p)}l[g]=d,c[g]=m}d=1e9,m=0;for(let g=e-1;g>=0;g--){let x=t.nodes[g];if(o[x]>=3){let p=f(x);p>0&&(d=t.cum[g],m=p)}u[g]=d,h[g]=m}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(a.flags&Lt.ROUNDABOUT||!a.drivable||a.cls>=kt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Fi(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Fi(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),m=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,m+2,c-4,c-4,5),o.fill()}}),n=Fi(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),i=Fi(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=id[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Ht({map:t,vertexColors:!0}),-2,-4),stone:r(new Ht({map:e,vertexColors:!0}),-2,-4),path:r(new Ht({map:t,vertexColors:!0}),-1,-2),walk:new Ht({map:n,vertexColors:!0,side:re}),mark:r(new Ht({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Ht({map:i,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Ht({color:11052186,side:re}),tube:new Ae({vertexColors:!0,side:re}),tlamp:new Ae({color:16771504,side:re}),barrier:new Ht({vertexColors:!0,side:re}),guard:new Ht({color:13159632,side:re}),island:new Ht({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,i=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}let o=Math.hypot(i,r)||1;i/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+i*(u/f);a=1/Math.max(.5,d)}return[-r*a,i*a]}wayColor(t){if(t.flags&Lt.NOCAR||t.surf===1)return[1,1,1];if(t.flags&Lt.UNPAVED)return[.95,.82,.62];t.tint===void 0&&(t.tint=.92+.16*Ee(t.nodes[0]*31+t.nodes.length));let e=Qy[t.cls];return[e[0]*t.tint,e[1]*t.tint,e[2]*t.tint]}edgeH(t,e,n,i,r){let o=this.ways[t];return this.heightOn(t,e,n,i,r)}addDecal(t,e,n,i,r,o,a,l,c,u,h){let f=ev(h);if(!f)return;let d=-l,m=a,g=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([x,p,M,v])=>{let y=r+d*x+a*p,_=o+m*x+l*p;return t.v(y,this.edgeH(e,n,i,y,_)+.035,_,1,1,1,M,v)});t.quad(g[0],g[1],g[2],g[3])}buildTile(t){let e=this.buildTileGen(t),n;for(;!(n=e.next()).done;);return n.value}*buildTileGen(t){let e=new $t,n=this.tileSegs.get(t)||[],i=this.materials(),r=new oe(!0,!0),o=new oe(!0,!0),a=new oe(!0,!1),l=new oe(!1,!1),c=new oe(!1,!1),u=new oe(!0,!1),h=new oe(!1,!1),f=new oe(!0,!0),d=new oe(!0,!0),m=this.terrain,g=5,x=new Set,p=0;for(let v of n){++p%20===0&&(yield);let y=Math.floor(v/16384),_=v%16384,w=this.ways[y],S=w.nodes[_],T=w.nodes[_+1],b=this.nx[S],E=this.nz[S],R=this.nx[T],L=this.nz[T],D=Math.hypot(R-b,L-E);if(D<.05)continue;let N=(R-b)/D,O=(L-E)/D,z=-O,W=N,B=this.miter(w,_),j=this.miter(w,_+1),q=w.width/2,ut=Math.max(1,Math.ceil(D/g)),bt=Math.max(1,Math.ceil(D/10));if(bt<ut){let F=!0;for(let K=0;K<bt&&F;K++)for(let I of[-1,1]){let ht=[];for(let et of[K/bt,(K+.5)/bt,(K+1)/bt]){let it=B[0]+(j[0]-B[0])*et,Z=B[1]+(j[1]-B[1])*et,Mt=b+(R-b)*et+it*q*I,ct=E+(L-E)*et+Z*q*I;ht.push(this.edgeH(y,_,et,Mt,ct))}if(Math.abs(ht[1]-(ht[0]+ht[2])/2)>.02){F=!1;break}}F&&(ut=bt)}let At=!!(w.flags&Lt.TUNNEL),st=At?this.wayColor(w).map(F=>F*.5):this.wayColor(w),$=w.surf===1||!!(w.flags&Lt.NOCAR),vt=$?o:r,V=$?.6:.2,Q=w.abs||this.dh[S]>.3||this.dh[T]>.3,Y=-1,k=-1,tt=[];for(let F=0;F<=ut;F++){let K=F/ut,I=b+(R-b)*K,ht=E+(L-E)*K,et=B[0]+(j[0]-B[0])*K,it=B[1]+(j[1]-B[1])*K,Z=I-et*q,Mt=ht-it*q,ct=I+et*q,P=ht+it*q,C=this.edgeH(y,_,K,Z,Mt),X=this.edgeH(y,_,K,ct,P),J=vt.v(Z,C,Mt,st[0],st[1],st[2],Z*V,Mt*V),ft=vt.v(ct,X,P,st[0],st[1],st[2],ct*V,P*V);Y>=0&&vt.quad(Y,k,ft,J),Y=J,k=ft,tt.push([Z,C,Mt,ct,X,P,et,it])}if(At){let F=q+.7,K=[[-F,0,.3],[-F,1.2,.3],[-F,3.4,.17],[-F*.5,5.2,.13],[0,5.8,.12],[F*.5,5.2,.13],[F,3.4,.17],[F,1.2,.3],[F,0,.3]],I=(Z,Mt=0)=>{let ct=(Z[0]+Z[3])/2,P=(Z[1]+Z[4])/2,C=(Z[2]+Z[5])/2;return K.map(([X,J])=>[ct+Z[6]*(X+Math.sign(X)*Mt),P+J+(J>0?Mt:0)-.05,C+Z[7]*(X+Math.sign(X)*Mt)])},ht=null,et=null,it=99;tt.forEach((Z,Mt)=>{let ct=I(Z),P=ct.map((G,lt)=>u.v(G[0],G[1],G[2],K[lt][2],K[lt][2],K[lt][2]*1.05));if(ht)for(let G=0;G<P.length-1;G++)u.quad(ht[G],ht[G+1],P[G+1],P[G]);ht=P;let C=(Z[0]+Z[3])/2,X=(Z[2]+Z[5])/2,J=m.height(C,X)-(Z[1]+Z[4])/2,ft=J<8.5||it<8.5?I(Z,.3):null;if(ft){let G=(Z[1]+Z[4])/2-.6;if(ft.unshift([C-Z[6]*(F+6.5),G+2.2,X-Z[7]*(F+6.5)]),ft.push([C+Z[6]*(F+6.5),G+2.2,X+Z[7]*(F+6.5)]),et)for(let lt=0;lt<ft.length-1;lt++){let pt=l.v(...et[lt]),_t=l.v(...et[lt+1]),It=l.v(...ft[lt+1]),at=l.v(...ft[lt]);l.quad(pt,_t,It,at)}}if(et=ft,it=J,Mt>0&&(Mt+_)%2===0){let G=ct[4],lt=Mt%4===0?.3:-.3,pt=G[0]+Z[6]*q*lt,_t=G[2]+Z[7]*q*lt,It=G[1]-.75,at=h.v(pt-N*.7-Z[6]*.16,It,_t-O*.7-Z[7]*.16),dt=h.v(pt+N*.7-Z[6]*.16,It,_t+O*.7-Z[7]*.16),mt=h.v(pt+N*.7+Z[6]*.16,It,_t+O*.7+Z[7]*.16),Rt=h.v(pt-N*.7+Z[6]*.16,It,_t-O*.7+Z[7]*.16);h.quad(at,dt,mt,Rt)}});for(let[Z,Mt,ct]of[[w.nodes[0],_===0,tt[0]],[w.nodes[w.nodes.length-1],_===w.nodes.length-2,tt[tt.length-1]]]){if(!Mt)continue;let P=!1;for(let dt=this.adjStart[Z];dt<this.adjStart[Z+1];dt++)this.adjWay[dt]!==y&&this.ways[this.adjWay[dt]].flags&Lt.TUNNEL&&(P=!0);if(P)continue;let C=I(ct,.02),X=(ct[0]+ct[3])/2,J=(ct[1]+ct[4])/2,ft=(ct[2]+ct[5])/2,G=(dt,mt)=>l.v(X+ct[6]*dt,J+mt,ft+ct[7]*dt),lt=C.map(dt=>l.v(dt[0],dt[1],dt[2])),pt=G(-F-4.5,-.6),_t=G(-F-4.5,7.6),It=G(F+4.5,7.6),at=G(F+4.5,-.6);for(let dt of[[pt,lt[0],lt[2]],[pt,lt[2],_t],[_t,lt[2],lt[3]],[_t,lt[3],lt[4]],[_t,lt[4],It],[It,lt[4],lt[5]],[It,lt[5],lt[6]],[It,lt[6],at],[at,lt[6],lt[8]]])l.tri(dt[0],dt[1],dt[2])}}for(let[F,K]of[[0,S],[w.nodes.length-1,T]]){if(F===0?_!==0:_!==w.nodes.length-2)continue;let I=K*2+($?1:0);if(x.has(I)||w.flags&Lt.ROUNDABOUT)continue;x.add(I);let ht=this.nx[K],et=this.nz[K],it=F===0?0:1,Z=vt.v(ht,this.edgeH(y,_,it,ht,et),et,st[0],st[1],st[2],ht*V,et*V),Mt=[];for(let ct=0;ct<14;ct++){let P=ct/14*Math.PI*2,C=ht+Math.cos(P)*q,X=et+Math.sin(P)*q;Mt.push(vt.v(C,this.edgeH(y,_,it,C,X),X,st[0],st[1],st[2],C*V,X*V))}for(let ct=0;ct<14;ct++)vt.tri(Z,Mt[(ct+1)%14],Mt[ct])}if(Q){for(let F=0;F<2;F++)for(let K=0;K<tt.length-1;K++){let I=tt[K],ht=tt[K+1],et=I[F*3],it=I[F*3+1],Z=I[F*3+2],Mt=ht[F*3],ct=ht[F*3+1],P=ht[F*3+2],C=m.height(et,Z),X=m.height(Mt,P);if(it-C<.35&&ct-X<.35||this.coveredBy(y,(et+Mt)/2,(Z+P)/2,.3))continue;let J=w.abs?Math.max(C-1,it-1.4):C-.5,ft=w.abs?Math.max(X-1,ct-1.4):X-.5,G=l.v(et,it,Z),lt=l.v(Mt,ct,P),pt=l.v(Mt,ft,P),_t=l.v(et,J,Z);l.quad(G,lt,pt,_t);let It=l.v(et,it+1,Z),at=l.v(Mt,ct+1,P),dt=l.v(Mt,ct,P),mt=l.v(et,it,Z);l.quad(It,at,dt,mt)}if(w.abs&&w.flags&Lt.BRIDGE)for(let F=1;F<tt.length-1;F+=4){let K=tt[F],I=(K[0]+K[3])/2,ht=(K[2]+K[5])/2,et=(K[1]+K[4])/2,it=m.height(I,ht);if(et-it<3)continue;let Z=.6,Mt=[[-Z,-Z],[Z,-Z],[Z,Z],[-Z,Z]];for(let ct=0;ct<4;ct++){let[P,C]=Mt[ct],[X,J]=Mt[(ct+1)%4],ft=l.v(I+P,et-.5,ht+C),G=l.v(I+X,et-.5,ht+J),lt=l.v(I+X,it-1,ht+J),pt=l.v(I+P,it-1,ht+C);l.quad(ft,G,lt,pt)}}}if(w.cls<=kt.TRUNK&&!(w.flags&Lt.LINK)&&!Q){let F=this.zones(w).mark;for(let K=0;K<2;K++)for(let I=0;I<tt.length-1;I++){let ht=w.cum[_]+I/ut*D,et=w.cum[_]+(I+1)/ut*D;if(ht-F.pc[_]<8||F.nc[_+1]-et<8)continue;let it=tt[I],Z=tt[I+1],Mt=K?1:-1,ct=.4*Mt;if(this.coveredBy(y,(it[K*3]+Z[K*3])/2+z*ct,(it[K*3+2]+Z[K*3+2])/2+W*ct,.8))continue;let P=it[K*3]+z*ct,C=it[K*3+2]+W*ct,X=it[K*3+1],J=Z[K*3]+z*ct,ft=Z[K*3+2]+W*ct,G=Z[K*3+1],lt=c.v(P,X+.85,C),pt=c.v(J,G+.85,ft),_t=c.v(J,G+.5,ft),It=c.v(P,X+.5,C);if(c.quad(lt,pt,_t,It),I%2===0){let at=c.v(P,X+.85,C),dt=c.v(P+N*.12,X+.85,C+O*.12),mt=c.v(P+N*.12,X-.2,C+O*.12),Rt=c.v(P,X-.2,C);c.quad(at,dt,mt,Rt)}}}this.buildSidewalk(f,y,_,tt,ut,D),this.buildVerge(r,y,_,tt,ut,D),this.buildMarkings(a,y,_)}let M=new oe(!0,!1);for(let v of this.roundabouts){if(this.tileKey(v.x,v.z)!==t)continue;let y=m.height(v.x,v.z)+v.dh+Ch+.22,_=v.poly,w=_.length,S=Math.min(1.6,v.r*.3),T=M.v(v.x,y+.25+Math.min(1.2,v.r*.06),v.z,.3,.52,.2),E=[[0,y-.6,.86,.86,.83],[0,y,.86,.86,.83],[.25,y,.62,.55,.5],[S,y+.06,.62,.55,.5],[S,y+.25,.8,.8,.78],[S+.25,y+.25,.33,.56,.22]].map(([L,D,N,O,z])=>_.map(([W,B])=>{let j=Math.hypot(W-v.x,B-v.z)||1,q=Math.max(.05,(j-L)/j);return M.v(v.x+(W-v.x)*q,D,v.z+(B-v.z)*q,N,O,z)}));for(let L=0;L<E.length-1;L++)for(let D=0;D<w;D++){let N=(D+1)%w;M.quad(E[L][D],E[L+1][D],E[L+1][N],E[L][N])}let R=E[E.length-1];for(let L=0;L<w;L++)M.tri(T,R[(L+1)%w],R[L])}return yield,this.buildNodeMarks(t,a,r),yield,this.buildLaneArrows(t,d),this.buildRoundaboutEntries(t,a),yield,this.buildRails(t,r,l),yield,r.empty||e.add(r.mesh(i.road)),yield,o.empty||e.add(o.mesh(i.stone)),f.empty||e.add(f.mesh(i.walk)),yield,a.empty||e.add(a.mesh(i.mark)),d.empty||e.add(d.mesh(i.decal)),l.empty||e.add(l.mesh(i.wall,!0)),u.empty||e.add(u.mesh(i.tube)),h.empty||e.add(h.mesh(i.tlamp)),c.empty||e.add(c.mesh(i.guard)),M.empty||e.add(M.mesh(i.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&Lt.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<kt.PRIMARY||t.cls>kt.RESIDENTIAL||t.flags&(Lt.LINK|Lt.ROUNDABOUT|Lt.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,i,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let m=0;m<2;m++){if(!(u&(m?2:1)))continue;let g=m?1:-1,x=null;for(let p=0;p<=r;p++){let M=a.cum[n]+p/r*o,v=i[p],y=p/r,_=v[m*3],w=v[m*3+1],S=v[m*3+2],T=_+v[6]*g*nd,b=S+v[7]*g*nd;if((M-h.pc[n]<40||h.nc[n+1]-M<40)&&this.coveredBy(e,(_+T)/2,(S+b)/2,1)){x=null;continue}let R=this.edgeH(e,n,y,T,b),L=Math.max(w,R)+tv,D=[t.v(_,w-.05,S,d[0],d[1],d[2],0,M*.5),t.v(_,L,S,d[0],d[1],d[2],.1,M*.5),t.v(_,L,S,f[0],f[1],f[2],0,M*.6),t.v(T,L,b,f[0],f[1],f[2],1,M*.6),t.v(T,L,b,d[0],d[1],d[2],0,M*.5),t.v(T,Math.min(R,this.terrain.height(T,b))-.4,b,d[0],d[1],d[2],.1,M*.5)];if(x)for(let N=0;N<6;N+=2)g>0?t.quad(x[N],x[N+1],D[N+1],D[N]):t.quad(x[N],D[N],D[N+1],x[N+1]);x=D}}}buildVerge(t,e,n,i,r,o){let a=this.ways[e];if(a.cls>kt.UNCLASSIFIED||a.cls<kt.TRUNK||a.abs||!a.drivable||a.flags&(Lt.ROUNDABOUT|Lt.UNPAVED|Lt.NOCAR)||a.surf===1)return;let l=a.nodes[n],c=a.nodes[n+1];if(this.dh[l]>.3||this.dh[c]>.3||this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2))return;let u=this.zones(a).walk,h=this.terrain,f=.9,d=[.8,.76,.68],m=[.5,.56,.38];for(let g=0;g<2;g++){let x=g?1:-1,p=null;for(let M=0;M<=r;M++){let v=a.cum[n]+M/r*o,y=i[M],_=y[g*3],w=y[g*3+1],S=y[g*3+2],T=_+y[6]*x*f,b=S+y[7]*x*f;if((v-u.pc[n]<40||u.nc[n+1]-v<40)&&this.coveredBy(e,(_+T)/2,(S+b)/2,.6)){p=null;continue}let R=[t.v(_,w-.02,S,d[0],d[1],d[2],_*.9,S*.9),t.v(T,h.height(T,b)+.04,b,m[0],m[1],m[2],T*.9,b*.9)];p&&(x>0?t.quad(p[0],p[1],R[1],R[0]):t.quad(p[0],R[0],R[1],p[1])),p=R}}}buildMarkings(t,e,n){let i=this.ways[e];if(i.cls>=kt.SERVICE||!i.drivable||i.flags&Lt.UNPAVED||i.surf===1)return;let r=i.nodes[n],o=i.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,m=this.miter(i,n),g=this.miter(i,n+1),x=i.width/2,p=this.zones(i).mark,M=this.zones(i).walk,v=i.cum[n],y=[],_=i.limit<=50,w=i.flags&Lt.ROUNDABOUT;if(i.cls<=kt.TERTIARY||w||i.width>=7){let R=Math.max(.3,i.sh*.85);y.push({off:-x+R,wdt:.15,dash:0,edge:!0},{off:x-R,wdt:.15,dash:0,edge:!0})}let S=_?[3,4.5]:[4.5,7.5];if(w)i.nF>=2&&y.push({off:-x+i.sh+i.lw,wdt:.12,dash:[3,4.5]});else if(!i.oneway&&i.nF>=1&&i.nB>=1&&i.width>=5.4){let R=(p.nc[n+1]-(v+h)<22||v-p.pc[n]<22)&&i.cls<=kt.TERTIARY;i.nF+i.nB>=4?y.push({off:i.cOff-.14,wdt:.12,dash:0},{off:i.cOff+.14,wdt:.12,dash:0}):y.push({off:i.cOff,wdt:.15,dash:R?0:S});for(let L=1;L<i.nF;L++)y.push({off:i.cOff+i.lw*L,wdt:.12,dash:S});for(let L=1;L<i.nB;L++)y.push({off:i.cOff-i.lw*L,wdt:.12,dash:S})}else if(i.oneway&&i.nF>=2)for(let R=1;R<i.nF;R++)y.push({off:-x+i.sh+i.lw*R,wdt:.15,dash:[4.5,7.5]});let T=i.cls<=kt.TRUNK||i.flags&Lt.LINK?220:35,b=v-M.pc[n]<T||M.nc[n+1]-(v+h)<T,E=b?1.25:5;for(let R of y){let L=[];for(let W=0;W<h;W+=E)L.push(W);if(R.dash){let W=R.dash[0]+R.dash[1];for(let B=Math.floor(v/W)*W;B<v+h;B+=W)B>v&&L.push(B-v),B+R.dash[0]>v&&B+R.dash[0]<v+h&&L.push(B+R.dash[0]-v)}L.push(h),L.sort((W,B)=>W-B);let D=[];for(let W=0;W<L.length-1;W++){let B=L[W],j=L[W+1];if(j-B<.02)continue;let q=(B+j)/2,ut=q/h,bt=!R.dash||(v+q)%(R.dash[0]+R.dash[1])<R.dash[0];if(bt&&b){let At=m[0]+(g[0]-m[0])*ut,st=m[1]+(g[1]-m[1])*ut;this.coveredBy(e,a+f*q+At*R.off,l+d*q+st*R.off,R.edge?.1:0,!!R.edge)&&(bt=!1)}D.push([B,j,bt])}let N=-1,O=-1,z=-1;for(let W=0;W<D.length;W++){let[B,j,q]=D[W];if(!q){N=-1;continue}let ut=D[W+1],bt=ut&&ut[2]&&ut[0]===j&&Math.abs(j/5-Math.round(j/5))>1e-6,At=N>=0&&z===B;if(bt&&At){z=j;continue}for(let st of At?[j]:bt?[B]:[B,j]){let $=st/h,vt=m[0]+(g[0]-m[0])*$,V=m[1]+(g[1]-m[1])*$,Q=a+f*st+vt*R.off,Y=l+d*st+V*R.off,k=Q-vt*R.wdt/2,tt=Y-V*R.wdt/2,F=Q+vt*R.wdt/2,K=Y+V*R.wdt/2,I=t.v(k,this.edgeH(e,n,$,k,tt)+.02,tt,1,1,1),ht=t.v(F,this.edgeH(e,n,$,F,K)+.02,K,1,1,1);N>=0&&t.quad(N,O,ht,I),N=I,O=ht}z=j}}}buildNodeMarks(t,e,n){let i=new Set,r=[jt.CROSSING,jt.CROSSING_SIGNALS,jt.BUMP,jt.TABLE,jt.MINI_RB,jt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||i.has(h)||!r.includes(f)||c.cls>=kt.SERVICE&&f!==jt.TURNING)continue;i.add(h);let d=Math.min(u,c.nodes.length-2),m=c.nodes[d],g=c.nodes[d+1],x=this.nx[g]-this.nx[m],p=this.nz[g]-this.nz[m],M=Math.hypot(x,p)||1,v=x/M,y=p/M,_=-y,w=v,S=this.nx[h],T=this.nz[h],b=c.width/2,E=u===d?0:1,R=(L,D,N,O,z,W=.025)=>{let B=[[L,N],[D,N],[D,O],[L,O]].map(([j,q])=>{let ut=S+_*j+v*q,bt=T+w*j+y*q;return e.v(ut,this.edgeH(a,d,E,ut,bt)+W,bt,z[0],z[1],z[2])});e.quad(B[0],B[1],B[2],B[3])};if(f===jt.CROSSING||f===jt.CROSSING_SIGNALS)for(let L=-b+.55;L<=b-.55;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1]);else if(f===jt.BUMP){let L=0;for(let D=-b+.2;D<b-.2;D+=.5,L++)R(D,Math.min(b-.2,D+.5),-.45,.45,L%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===jt.TABLE){R(-b+.1,b-.1,-2.6,2.6,[.72,.36,.3],.05);for(let L=-b+.6;L<=b-.6;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1],.07)}else if(f===jt.MINI_RB){let L=this.edgeH(a,d,E,S,T)+.03,D=e.v(S,L+.08,T,1,1,1),N=[];for(let O=0;O<16;O++){let z=O/16*6.2832;N.push(e.v(S+Math.cos(z)*1.5,L,T+Math.sin(z)*1.5,1,1,1))}for(let O=0;O<16;O++)e.tri(D,N[(O+1)%16],N[O])}else if(f===jt.TURNING){let L=this.wayColor(c),D=Math.max(7,b+3),N=n.v(S,this.edgeH(a,d,E,S,T),T,L[0],L[1],L[2],S*.2,T*.2),O=[];for(let z=0;z<20;z++){let W=z/20*6.2832,B=S+Math.cos(W)*D,j=T+Math.sin(W)*D;O.push(n.v(B,this.edgeH(a,d,E,B,j),j,L[0],L[1],L[2],B*.2,j*.2))}for(let z=0;z<20;z++)n.tri(N,O[(z+1)%20],O[z])}}}}buildLaneArrows(t,e){let n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let m of a.len>70?[9,32]:[9]){if(m>a.len-4)continue;let[g,x,p,M]=this.pointAt(a,l>0?a.len-m:m),v=a.nodes[p],y=a.nodes[p+1],_=this.nx[y]-this.nx[v],w=this.nz[y]-this.nz[v],S=Math.hypot(_,w)||1;_=_/S*l,w=w/S*l;let T=-w,b=_,E=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((R,L)=>{let D=new Set(R.split(";").map(O=>O.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(O=>O==="left"||O==="right"||O==="through"));if(!D.size)return;let N=E+d*(L+.5);this.addDecal(e,r,p,M,g+T*N,x+b*N,_,w,Math.min(1.5,d*.5),4.2,[...D].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let i=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=i.oneway?-i.width/2+.3:(n.dir>0?i.cOff:-i.cOff)+.15,m=i.width/2-.3;for(let g=d;g+.5<=m;g+=.75){let x=[[g,-.3],[g+.5,-.3],[g+.25,.35]].map(([p,M])=>{let v=h+l*p-r*M,y=f+c*p-o*M;return e.v(v,this.edgeH(n.wi,n.k,n.t,v,y)+.03,y,1,1,1)});e.tri(x[0],x[1],x[2]),e.tri(x[0],x[2],x[1])}}}buildRails(t,e){let n=this.terrain;for(let i of this.tileRails.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,m=(h-c)/f,g=-m,x=d,p=Math.max(1,Math.ceil(f/6)),M=(v,y,_)=>{if(a.bridge&&a.cum){let w=a.cum[o]+_*f;return a.h0+(a.h1-a.h0)*w/(a.cum[a.cum.length-1]||1)+.25}return n.height(v,y)+.25};for(let[v,y,_]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let w=-1,S=-1;for(let T=0;T<=p;T++){let b=T/p,E=l+(u-l)*b+g*v,R=c+(h-c)*b+x*v,L=M(E,R,b)+(_?.16:0),D=E-g*y/2,N=R-x*y/2,O=E+g*y/2,z=R+x*y/2,W=_?[.35,.33,.32]:[.75,.68,.58],B=e.v(D,L,N,...W,D*.3,N*.3),j=e.v(O,L,z,...W,O*.3,z*.3);w>=0&&e.quad(w,S,j,B),w=B,S=j}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new oe(!0,!0),i=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let v=3;v<r.length;v+=2)u+=r[v],h+=r[v+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let v=0;v<c.length-1;v++){let y=Math.hypot(c[v+1][0]-c[v][0],c[v+1][1]-c[v][1]),_=Math.max(1,Math.ceil(y/6));for(let w=0;w<_;w++)f.push([c[v][0]+(c[v+1][0]-c[v][0])*w/_,c[v][1]+(c[v+1][1]-c[v][1])*w/_,d+y*w/_]);d+=y}f.push([c[c.length-1][0],c[c.length-1][1],d]);let m=i[o],g=e.height(f[0][0],f[0][1]),x=e.height(f[f.length-1][0],f[f.length-1][1]),p=-1,M=-1;for(let v=0;v<f.length;v++){let y=f[Math.min(f.length-1,v+1)],_=f[Math.max(0,v-1)],w=y[0]-_[0],S=y[1]-_[1],T=Math.hypot(w,S)||1;w/=T,S/=T;let b=-S,E=w,R=f[v][0],L=f[v][1],D=d>0?f[v][2]/d:0,N=R-b*a/2,O=L-E*a/2,z=R+b*a/2,W=L+E*a/2,B=l?g+(x-g)*D+Math.sin(Math.PI*D)*Math.min(5.5,d*.12)+.1:0,j=n.v(N,l?B:e.height(N,O)+.1,O,m[0],m[1],m[2],N*.3,O*.3),q=n.v(z,l?B:e.height(z,W)+.1,W,m[0],m[1],m[2],z*.3,W*.3);p>=0&&n.quad(p,M,q,j),p=j,M=q}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new oe(!0,!1),i=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,m=-f/d*u/2,g=h/d*u/2,x=[[o-m,a-g],[o+m,a+g],[l+m,c+g],[l-m,c-g]].map(([p,M])=>n.v(p,e.height(p,M)+.1,M,1,1,1));n.quad(x[0],x[1],x[2],x[3])};for(let o=0;o<i.length;o+=5){let a=i[o]/10,l=i[o+1]/10,c=i[o+2]/10*Math.PI/180,u=i[o+3]/10,h=(i[o+4]>>1)/10,f=i[o+4]&1,d=Math.sin(c),m=Math.cos(c),g=-m,x=d;if(f===0)for(let p of[1,-1])r(a+g*p*u/2-d*h/2,l+x*p*u/2-m*h/2,a+g*p*u/2+d*h/2,l+x*p*u/2+m*h/2,.1);else for(let p of[1,-1])r(a+d*p*h/2-g*u/2,l+m*p*h/2-x*u/2,a+d*p*h/2+g*u/2,l+m*p*h/2+x*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let i=this.terrain,r=new oe(!0,!1),o=new oe(!0,!1),a=new oe(!0,!0),l=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let u of t.ba){let h=l[u[0]],f=u[1]/10,d=[],m=0,g=0;for(let x=2;x<u.length;x+=2)m+=u[x],g+=u[x+1],d.push([m/10,g/10]);if(u[0]>=4){if(ed(o,a,d,u[0],f,i,u[2]+u[3]*31),e&&u[0]!==7)for(let x=0;x<d.length-1;x++){let[p,M]=d[x],[v,y]=d[x+1],_=Math.hypot(v-p,y-M);if(_<1.5)continue;let w=-(y-M)/_*.3,S=(v-p)/_*.3;e.addPolygon(n,Float32Array.from([p-w,M-S,v-w,y-S,v+w,y+S,p+w,M+S]))}continue}for(let x=0;x<d.length-1;x++){let[p,M]=d[x],[v,y]=d[x+1],_=Math.hypot(v-p,y-M);if(_<.2)continue;let w=-(y-M)/_*h.th/2,S=(v-p)/_*h.th/2,T=Math.max(1,Math.ceil(_/8));for(let b=0;b<T;b++){let E=b/T,R=(b+1)/T,L=p+(v-p)*E,D=M+(y-M)*E,N=p+(v-p)*R,O=M+(y-M)*R,z=i.height(L,D),W=i.height(N,O),B=u[0]===3?.45:-.3,j=h.c,q=[j[0]*.8,j[1]*.8,j[2]*.8],ut=[[L-w,D-S,z],[N-w,O-S,W],[N+w,O+S,W],[L+w,D+S,z]],bt=ut.map(([At,st,$])=>r.v(At,$+f,st,j[0],j[1],j[2]));r.quad(bt[0],bt[1],bt[2],bt[3]);for(let[At,st]of[[0,1],[2,3]]){let $=ut[At],vt=ut[st],V=r.v($[0],$[2]+f,$[1],q[0],q[1],q[2]),Q=r.v(vt[0],vt[2]+f,vt[1],q[0],q[1],q[2]),Y=r.v(vt[0],vt[2]+B,vt[1],q[0],q[1],q[2]),k=r.v($[0],$[2]+B,$[1],q[0],q[1],q[2]);r.quad(V,Q,Y,k)}}if(e&&u[0]!==3&&_>1.5){let b=Math.max(.4,h.th/2),E=-(y-M)/_*b,R=(v-p)/_*b;e.addPolygon(n,Float32Array.from([p-E,M-R,v-E,y-R,v+E,y+R,p+E,M+R]))}}}let c=new $t;if(r.empty||c.add(r.mesh(this.materials().barrier,!0)),o.empty||c.add(o.mesh(Ls().solid,!1)),!a.empty){let u=a.mesh(Ls().grille,!1);c.add(u)}return c.children.length?c:null}};var sd=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],rd=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],od=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],ad=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],ld=new Nt;function nv(){let e=()=>{let c=document.createElement("canvas");return c.width=c.height=512,c},n={res:e(),condo:e(),modern:e(),ind:e(),plain:e(),emiR:e(),emiC:e(),emiM:e(),emiI:e()},i=Object.fromEntries(Object.entries(n).map(([c,u])=>[c,u.getContext("2d")]));for(let c of["res","condo","modern","ind","plain"]){let u=i[c];u.fillStyle="#ffffff",u.fillRect(0,0,512,512);for(let h=0;h<2500;h++)u.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,u.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8)}for(let c of["emiR","emiC","emiM","emiI"])i[c].fillStyle="#000",i[c].fillRect(0,0,512,512);let r=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"],o=(c,u,h,f,d,m=.35)=>{c.fillStyle=Math.random()<m?Math.random()<.5?"#ffd890":"#fff0c0":"#000",c.fillRect(u,h,f,d)},a=(c,u,h,f,d)=>{c.fillStyle="#2f3438",c.fillRect(u,h,f,d),c.fillStyle="#5c6a72",c.fillRect(u+2,h+2,f/2-3,d-4),c.fillRect(u+f/2+1,h+2,f/2-3,d-4)};for(let c=0;c<8;c++)for(let u=0;u<8;u++){let h=u*64,f=c*64,d=c===7,{res:m,condo:g,modern:x,ind:p}=i;for(let S of[m,g])S.fillStyle="rgba(0,0,0,0.07)",S.fillRect(h,f,64,2);if(d){if(m.fillStyle="rgba(60,50,40,0.28)",m.fillRect(h,f+64*.8,64,64*.2),u%4===1)m.fillStyle="#d8d2c4",m.fillRect(h+64*.26,f+64*.2,64*.48,64*.8),m.fillStyle=r[(u+2)%r.length],m.beginPath(),m.roundRect(h+64*.3,f+64*.24,64*.4,64*.76,[64*.2,64*.2,0,0]),m.fill(),m.fillStyle="rgba(0,0,0,0.3)",m.fillRect(h+64*.495,f+64*.3,1.5,64*.7);else{let b=h+22.4,E=f+64*.26;m.fillStyle="#d8d2c4",m.fillRect(b-3,E-3,19.2+6,25.6+7),a(m,b,E,19.2,25.6),m.strokeStyle="rgba(20,20,20,0.7)",m.lineWidth=1;for(let R=1;R<5;R++)m.beginPath(),m.moveTo(b+19.2*R/5,E),m.lineTo(b+19.2*R/5,E+25.6),m.stroke();o(i.emiR,b,E,19.2,25.6,.25)}if(g.fillStyle="rgba(70,70,70,0.3)",g.fillRect(h,f,64,64),u%4===2)g.fillStyle="#39424a",g.fillRect(h+64*.2,f+64*.22,64*.6,64*.78),g.fillStyle="#7d8f9c",g.fillRect(h+64*.24,f+64*.26,64*.24,64*.74),g.fillRect(h+64*.52,f+64*.26,64*.24,64*.74),o(i.emiC,h+64*.24,f+64*.26,64*.52,64*.7,.8);else{g.fillStyle="#b9bcbd",g.fillRect(h+64*.12,f+64*.3,64*.76,64*.7),g.fillStyle="rgba(0,0,0,0.18)";for(let S=0;S<9;S++)g.fillRect(h+64*.12,f+64*(.33+S*.075),64*.76,1.5)}if(x.fillStyle="#3d4850",x.fillRect(h+3,f+64*.18,58,64*.82),x.fillStyle="#8fa3b0",x.fillRect(h+6,f+64*.22,52,64*.74),o(i.emiM,h+6,f+64*.22,52,64*.74,.5),p.fillStyle="rgba(0,0,0,0.12)",p.fillRect(h,f+64*.75,64,64*.25),u%4===0){p.fillStyle="#6d7479",p.fillRect(h+64*.08,f+64*.08,64*.84,64*.92),p.fillStyle="rgba(0,0,0,0.2)";for(let S=0;S<8;S++)p.fillRect(h+64*.08,f+64*(.12+S*.11),64*.84,1.5)}continue}let M=64*.34,v=64*.52,y=h+(64-M)/2,_=f+64*.22;m.fillStyle="#d8d2c4",m.fillRect(y-3,_-3,M+6,v+7),a(m,y,_,M,v);let w=Math.random();m.fillStyle=r[(u*7+c*3)%r.length],w<.6?(m.fillRect(y-M/2-2,_,M/2,v),m.fillRect(y+M+2,_,M/2,v)):w<.85&&m.fillRect(y,_,M,v),m.fillStyle="rgba(0,0,0,0.25)";for(let S=0;S<6;S++)m.fillRect(y-M/2-2,_+S*v/6,M*2+4,1);if((w<.6||w>=.85)&&o(i.emiR,y,_,M,v),(u+c)%3!==0){let b=h+19.2,E=f+64*.2;g.fillStyle="#e4e0d6",g.fillRect(b-3,E-3,25.6+6,42.24+3),a(g,b,E,25.6,42.24),o(i.emiC,b,E,25.6,42.24),g.fillStyle="rgba(0,0,0,0.3)",g.fillRect(h+3,f+64*.88,58,4),g.fillStyle="#c9c6bd",g.fillRect(h+2,f+64*.84,60,4),g.fillStyle="rgba(40,44,48,0.75)",g.fillRect(h+2,f+64*.56,60,2.5);for(let R=0;R<=10;R++)g.fillRect(h+2+58*R/10,f+64*.56,1.5,64*.28)}else{let b=h+21.119999999999997,E=f+64*.26;g.fillStyle="#e4e0d6",g.fillRect(b-3,E-3,21.76+6,28.16+7),a(g,b,E,21.76,28.16),o(i.emiC,b,E,21.76,28.16),g.fillStyle="#8f9499",g.fillRect(b,E,21.76,28.16*(Math.random()<.5?.35:.1))}x.fillStyle="#3d4850",x.fillRect(h+64*.1,f+64*.24,64*.8,64*.5),x.fillStyle="#7f95a3",x.fillRect(h+64*.13,f+64*.27,64*.35,64*.44),x.fillRect(h+64*.52,f+64*.27,64*.35,64*.44),x.fillStyle="rgba(0,0,0,0.1)",x.fillRect(h,f+64*.82,64,2),o(i.emiM,h+64*.13,f+64*.27,64*.74,64*.44,.4),p.fillStyle="rgba(0,0,0,0.08)",p.fillRect(h,f,2,64),c%2===0&&(p.fillStyle="#4b5a63",p.fillRect(h+3,f+64*.3,58,64*.3),i.emiI.fillStyle=Math.random()<.25?"#e8f0ff":"#000",i.emiI.fillRect(h+3,f+64*.3,58,64*.3))}let l=c=>{let u=new Le(c);return u.wrapS=u.wrapT=di,u.anisotropy=8,u.colorSpace=ve,u};return Object.fromEntries(Object.entries(n).map(([c,u])=>[c,l(u)]))}var _a=class{constructor(t){this.terrain=t;let e=nv(),n=(i,r)=>new Ht({map:i,vertexColors:!0,emissiveMap:r,emissive:16777215,emissiveIntensity:0});this.mats={res:n(e.res,e.emiR),condo:n(e.condo,e.emiC),modern:n(e.modern,e.emiM),ind:n(e.ind,e.emiI),plain:new Ht({map:e.plain,vertexColors:!0}),roof:new Ht({vertexColors:!0,side:re})},this.mats.roof.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
varying float vRUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vRUp = abs(normalize(mat3(modelMatrix) * objectNormal).y);`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
varying float vRUp;`).replace("#include <color_fragment>",`#include <color_fragment>
          float pitch = smoothstep(0.995, 0.96, vRUp) * clamp(1.0 - distance(cameraPosition, vRW) / 260.0, 0.0, 1.0);
          float rowsT = 0.84 + 0.16 * smoothstep(0.0, 0.35, fract(vRW.y * 2.6));
          float colsT = 0.94 + 0.06 * step(0.5, fract((vRW.x + vRW.z) * 2.4));
          diffuseColor.rgb *= mix(1.0, rowsT * colsT, pitch);`)}}setNight(t){for(let e of["res","condo","modern"])this.mats[e].emissiveIntensity=t*.55;this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let i=this.buildGen(t,e,n),r;for(;!(r=i.next()).done;);return r.value}*buildGen(t,e,n){let i=this.terrain,r={res:new oe,condo:new oe,modern:new oe,ind:new oe,plain:new oe},o=new oe(!0,!1),a=t.s,l=[],c=0;for(let h of t.b){++c%12===0&&(yield);let f=h[0],d=h[1]/10,m=h[2]/10,g=h[3],x=h[4],p=a[h[5]],M=a[h[6]],v=a[h[7]],y=[],_=0,w=0;for(let $=8;$<h.length;$+=2)_+=h[$],w+=h[$+1],y.push(_/10,w/10);let S=y.length/2;if(S<3)continue;let T=0,b=0,E=0,R=1e9,L=-1e9;for(let $=0;$<S;$++){let vt=($+1)%S;T+=y[$*2]*y[vt*2+1]-y[vt*2]*y[$*2+1],b+=y[$*2],E+=y[$*2+1];let V=i.height(y[$*2],y[$*2+1]);R=Math.min(R,V),L=Math.max(L,V)}T=Math.abs(T/2),b/=S,E/=S;let D=Ee(Math.floor(y[0]*10)*7919+Math.floor(y[1]*10)),N=Ee(Math.floor(y[1]*10)*104729+17),O=f;if(O===0&&(O=T<45?6:T>1800?3:2),!(d>0))if(g>0)d=g*3.1+.6;else switch(O){case 1:d=6.2+D*2.5;break;case 2:d=T>500?11+D*7:7+D*4;break;case 3:d=7.5+D*4;break;case 4:d=7+D*5;break;case 5:d=13+Math.min(10,T/80);break;case 6:d=2.8+D*.8;break;case 7:d=10+D*4;break;case 8:d=28+D*12;break;case 9:d=6+D*2;break;default:d=4+D*3}let z=R-.6+m,W=(R+L)/2+d,B=Math.max(1,Math.round(d/3.05)),j=O===3||O===4?"ind":O===5||O===6||O===8||O===9||O===10?"plain":"res";j==="res"&&(B>=4&&T>160?j=N<.75?"condo":"modern":B>=2&&T>110&&D<.16?j="modern":B===3&&T>220&&N<.45&&(j="condo"));let q;if(M&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(M))try{ld.set(M),q=ld.clone()}catch{q=null}q||(q=new Nt(j==="ind"?rd[Math.floor(N*rd.length)]:O===8||O===5?N<.5?"#d8c9a8":"#c9a77f":sd[Math.floor(N*sd.length)])),q.convertSRGBToLinear();let ut=r[j],bt=0;for(let $=0;$<S;$++){let vt=($+1)%S,V=y[$*2],Q=y[$*2+1],Y=y[vt*2],k=y[vt*2+1],tt=Math.hypot(Y-V,k-Q),F=bt/24,K=Math.max(1,Math.round(tt/3)),I=F+K/8,ht=B/8,et=ht*(z-(W-d))/d,it=ut.v(V,z,Q,q.r*.78,q.g*.78,q.b*.78,F,et),Z=ut.v(V,W,Q,q.r,q.g,q.b,F,ht),Mt=ut.v(Y,W,k,q.r,q.g,q.b,I,ht),ct=ut.v(Y,z,k,q.r*.78,q.g*.78,q.b*.78,I,et);ut.quad(it,Z,Mt,ct),bt+=tt}let At,st=(O===1||O===2&&(T<1400||g<=4)||O===5||O===9||O===7&&T<900||O===6&&T>18)&&x!==1;if(v&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(v))try{At=new Nt(v)}catch{At=null}At||(At=new Nt(st?od[Math.floor(D*od.length)]:ad[Math.floor(D*ad.length)])),At.convertSRGBToLinear(),this.roof(o,y,S,W,st,At,T,O,q,N),e&&e.addPolygon(n,Float32Array.from(y),W+(st?3:1)),p&&(O===5||O===8||f===7)&&l.push({name:p,x:b,z:E,y:W+4})}let u=new $t;for(let h of["res","condo","modern","ind","plain"])r[h].empty||(yield,u.add(r[h].mesh(this.mats[h],!0)));return yield,o.empty||u.add(o.mesh(this.mats.roof,!0)),{group:u,labels:l}}offsetRing(t,e,n){let i=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let m=-c,g=l,x=-h,p=u,M=Math.max(.35,1+m*x+g*p);i[r*2]=t[r*2]+n*(m+x)/M,i[r*2+1]=t[r*2+1]+n*(g+p)/M}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return i}roof(t,e,n,i,r,o,a,l,c,u){let h=(v,y,_,w=o)=>{let S=y[0]-v[0],T=y[2]-v[2],b=_[0]-v[0],E=_[2]-v[2],R=T*b-S*E,L=t.v(v[0],v[1],v[2],w.r,w.g,w.b),D=t.v(y[0],y[1],y[2],w.r,w.g,w.b),N=t.v(_[0],_[1],_[2],w.r,w.g,w.b);R>=0?t.tri(L,D,N):t.tri(L,N,D)},f=(v,y,_,w,S)=>{h(v,y,_,S),h(v,_,w,S)},d=o.clone().multiplyScalar(.84),m=o.clone().multiplyScalar(1.06),g=.45,x=(v,y,_)=>{if(u>.55)return;let w=.3,S=1.1,T=c.clone().multiplyScalar(.9),b=[[v-w,y-w],[v+w,y-w],[v+w,y+w],[v-w,y+w]];for(let E=0;E<4;E++){let[R,L]=b[E],[D,N]=b[(E+1)%4];f([R,_-.6,L],[D,_-.6,N],[D,_+S,N],[R,_+S,L],T)}f([b[0][0],_+S,b[0][1]],[b[1][0],_+S,b[1][1]],[b[2][0],_+S,b[2][1]],[b[3][0],_+S,b[3][1]],d)};if(r&&n===4&&a<2500){let v=[0,1,2,3].map(q=>[e[q*2],e[q*2+1]]),y=Math.hypot(v[1][0]-v[0][0],v[1][1]-v[0][1]),_=Math.hypot(v[2][0]-v[1][0],v[2][1]-v[1][1]),w=_>y?[v[1],v[2],v[3],v[0]]:v,S=Math.max(y,_),T=Math.min(y,_),b=(w[0][0]+w[1][0]+w[2][0]+w[3][0])/4,E=(w[0][1]+w[1][1]+w[2][1]+w[3][1])/4,R=(w[1][0]-w[0][0]+(w[2][0]-w[3][0]))/2/S,L=(w[1][1]-w[0][1]+(w[2][1]-w[3][1]))/2/S,D=Math.min(T*.27,5),N=this.offsetRing(w.flat(),4,-g),O=[0,1,2,3].map(q=>[N[q*2],i-g*.5,N[q*2+1]]),z=u>.4,W=z?S/2+g:Math.max(0,S/2-T/2),B=[b-R*W,i+D,E-L*W],j=[b+R*W,i+D,E+L*W];if(f(O[0],O[1],j,B,m),f(O[2],O[3],B,j,o),z){let q=[0,1,2,3].map(ut=>[w[ut][0],i,w[ut][1]]);h(q[1],q[2],[b+R*S/2,i+D,E+L*S/2],c),h(q[3],q[0],[b-R*S/2,i+D,E-L*S/2],c)}else h(O[1],O[2],j,d),h(O[3],O[0],B,d);x(b+R*S*.2,E+L*S*.2,i+D);return}if(r&&a<6e3&&n<=60){let v=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),y=this.offsetRing(e,n,v);if(y||(v*=.5,y=this.offsetRing(e,n,v)),y){let _=this.offsetRing(e,n,-g),w=i+v*.5;for(let b=0;b<n;b++){let E=(b+1)%n;f([_[b*2],i-g*.4,_[b*2+1]],[_[E*2],i-g*.4,_[E*2+1]],[y[E*2],w,y[E*2+1]],[y[b*2],w,y[b*2+1]],b%2?o:d)}let S=[];for(let b=0;b<n;b++)S.push(new Et(y[b*2],y[b*2+1]));let T=[];try{T=zn.triangulateShape(S,[])}catch{T=[]}for(let[b,E,R]of T)h([S[b].x,w,S[b].y],[S[E].x,w,S[E].y],[S[R].x,w,S[R].y],m);(l===1||l===2)&&x(y[0]*.5+y[2]*.5,y[1]*.5+y[3]*.5,w);return}}let p=[];for(let v=0;v<n;v++)p.push(new Et(e[v*2],e[v*2+1]));let M;try{M=zn.triangulateShape(p,[])}catch{return}for(let[v,y,_]of M)h([p[v].x,i-.25,p[v].y],[p[y].x,i-.25,p[y].y],[p[_].x,i-.25,p[_].y])}};var iv={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},ba=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new br(1,1),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r),l=i.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));i.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new Ss(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new te(.12,.18,1,5),this.crownMat=new Ht({color:16777215}),this.trunkMat=new Ht({color:5981746})}build(t,e,n,i,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(z,W,B,j=!1,q=!1)=>f.push([z,W,B,j,q]);if(t){for(let z=0;z<t.tr.length;z+=2)d(t.tr[z]/10,t.tr[z+1]/10,.9+Ee(z)*.5);for(let z of t.rows){let W=0,B=0,j=[];for(let q=0;q<z.length;q+=2)W+=z[q],B+=z[q+1],j.push([W/10,B/10]);for(let q=0;q<j.length-1;q++){let ut=Math.hypot(j[q+1][0]-j[q][0],j[q+1][1]-j[q][1]);for(let bt=0;bt<ut;bt+=7)d(j[q][0]+(j[q+1][0]-j[q][0])*bt/ut,j[q][1]+(j[q+1][1]-j[q][1])*bt/ut,.8+Ee(q*31+bt)*.4,!1,Ee(z.length*7+z[0])<.45)}}}let m=11,g=e*7919+n*104729|0;for(let z=h+m/2;z<h+c;z+=m)for(let W=u+m/2;W<u+c;W+=m){g++;let B=W+(Ee(g)-.5)*m,j=z+(Ee(g*3+1)-.5)*m,q=a.landClass(B,j),ut=(iv[q]||0)*o;Ee(g*7+5)>ut||d(B,j,.75+Ee(g*11)*.6,(q==="forest"||q==="wood")&&Ee(g*13)<.12)}let x=f.filter(([z,W])=>{let B=l.nearest(z,W,9);return!B||B.d>l.ways[B.wi].width/2+1.5});if(!x.length)return null;let p=x.length,M=x.filter(z=>z[3]).length,v=new Re(this.crownGeo,this.crownMat,p-M),y=M?new Re(this.coneGeo,this.crownMat,M):null,_=new Re(this.trunkGeo,this.trunkMat,p),w=new Jt,S=new Ie,T=new H,b=new H,E=new Nt,R=new H(0,1,0),L=0,D=0,N=0;for(let[z,W,B,j,q]of x){let ut=a.height(z,W),bt=(j?10:q?13:6.5)*B*(.8+Ee(L*5+1)*.5),At=(j?2.1:q?1.5:2.6+Ee(L*9)*1.4)*B;S.setFromAxisAngle(R,Ee(L*17)*6.28),b.set(z,ut+bt*.3,W),T.set(1,bt*.6,1),w.compose(b,S,T),_.setMatrixAt(L,w);let st=.75+Ee(L*23)*.4;if(j)b.set(z,ut+bt*.55,W),T.set(At,bt*.85,At),w.compose(b,S,T),y.setMatrixAt(N,w),E.setRGB(.1*st,.26*st,.12*st),y.setColorAt(N++,E);else{b.set(z,ut+bt*.62,W),T.set(At,q?bt*.42:At*1.05,At),w.compose(b,S,T),v.setMatrixAt(D,w);let $=Ee(L*41)<.06;E.setRGB($?.42*st:.17*st,$?.3*st:(.29+Ee(L*31)*.07)*st,.09*st),v.setColorAt(D++,E)}i&&i.addCircle(r,z,W,.35*B,ut+bt),L++}v.castShadow=!0,_.castShadow=!1,v.computeBoundingSphere(),_.computeBoundingSphere();let O=new $t;return O.add(v,_),y&&(y.castShadow=!0,y.computeBoundingSphere(),O.add(y)),O}};var Cr=44;function Pr(s,t){let e=(t%Cr+Cr)%Cr,n=s===0?e:(e+Cr/2)%Cr;return n<17?"G":n<20.5?"Y":"R"}function ke(s,t,e,n,i,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,m]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let g=f*i/2,x=m*o/2;h.push([t+g*c+x*u,e+d*r/2,n-g*u+x*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(m=>s.v(h[m][0],h[m][1],h[m][2],l[0],l[1],l[2],0,0));s.quad(d[0],d[1],d[2],d[3])}}function On(s,t,e,n,i,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=s.v(t-u*i/2,e-r/2,n-h*i/2,1,1,1,a[0],a[1]),d=s.v(t+u*i/2,e-r/2,n+h*i/2,1,1,1,a[2],a[1]),m=s.v(t+u*i/2,e+r/2,n+h*i/2,1,1,1,a[2],a[3]),g=s.v(t-u*i/2,e+r/2,n-h*i/2,1,1,1,a[0],a[3]);s.quad(f,d,m,g)}var Ph=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back","curveR","curveL","steep","children"];function Ir(s,t=!1){let e=Ph.indexOf(s),n=e%8,i=Math.floor(e/8)+(t?4:0);return[n/8,1-(i+1)/8,(n+1)/8,1-i/8]}function sv(s,t){let i=(h,f)=>{s.beginPath(),s.arc(64,64,h,0,7),s.fillStyle=f,s.fill()},r=(h,f)=>{s.beginPath(),h.forEach(([d,m],g)=>g?s.lineTo(d,m):s.moveTo(d,m)),s.closePath(),s.fillStyle=f,s.fill()},o=(h,f,d,m,g,x)=>{s.beginPath(),s.roundRect(h,f,d,m,g),s.fillStyle=x,s.fill()},a=(h,f,d,m=67)=>{s.fillStyle=d,s.font=`bold ${f}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(h,64,m)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(/^s\d+$/.test(t)){i(62,l),i(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,m)=>{let g=(m+.5)/8*Math.PI*2;return[64+Math.cos(g)*f,64+Math.sin(g)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{i(62,"#fff"),i(58,c),s.strokeStyle="#fff",s.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;s.beginPath(),s.arc(64,64,30,f,d,!1),s.stroke();let m=64+Math.cos(f)*30,g=64+Math.sin(f)*30;s.save(),s.translate(m,g),s.rotate(f-Math.PI/2),s.beginPath(),s.moveTo(0,-17),s.lineTo(13,6),s.lineTo(-13,6),s.closePath(),s.fillStyle="#fff",s.fill(),s.restore()}break}case"noentry":i(62,"#fff"),i(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),s.fillStyle="#111",s.beginPath(),s.arc(66,52,7,0,7),s.fill(),s.strokeStyle="#111",s.lineWidth=6,s.lineCap="round",s.beginPath(),s.moveTo(64,62),s.lineTo(62,82),s.lineTo(50,100),s.moveTo(62,82),s.lineTo(76,100),s.moveTo(52,74),s.lineTo(64,66),s.lineTo(78,76),s.stroke(),s.lineCap="butt";break}case"bump":u(),s.fillStyle="#111",s.beginPath(),s.moveTo(36,96),s.quadraticCurveTo(64,56,92,96),s.closePath(),s.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"curveR":case"curveL":{u(),s.save(),t==="curveL"&&(s.translate(128,0),s.scale(-1,1)),s.strokeStyle="#111",s.lineWidth=9,s.lineCap="butt",s.beginPath(),s.moveTo(52,102),s.lineTo(52,84),s.quadraticCurveTo(52,62,78,58),s.stroke(),r([[92,56],[74,44],[74,70]],"#111"),s.restore();break}case"steep":{u(),r([[34,100],[96,100],[34,66]],"#111"),s.fillStyle="#111",s.font="bold 20px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("10%",72,74);break}case"children":{u(),s.fillStyle="#111",s.strokeStyle="#111",s.lineWidth=5,s.lineCap="round";for(let[h,f]of[[52,1],[78,.82]])s.beginPath(),s.arc(h,62+(1-f)*14,6*f,0,7),s.fill(),s.beginPath(),s.moveTo(h,70),s.lineTo(h,86),s.lineTo(h-8*f,102),s.moveTo(h,86),s.lineTo(h+8*f,102),s.moveTo(h-9*f,78),s.lineTo(h+9*f,76),s.stroke();s.lineCap="butt";break}case"level":{s.lineCap="butt";for(let h of[1,-1])s.save(),s.translate(64,64),s.rotate(h*.55),s.fillStyle=l,s.fillRect(-62,-13,124,26),s.fillStyle="#fff",s.fillRect(-56,-8,112,16),s.fillStyle=l,s.fillRect(-62,-13,16,26),s.fillRect(46,-13,16,26),s.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),s.strokeStyle="#111",s.lineWidth=5,s.beginPath(),s.moveTo(74,60),s.lineTo(86,60),s.lineTo(86,86),s.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":s.fillStyle="#7d8185",s.fillRect(0,0,128,128);break;default:break}}function rv(){let s=document.createElement("canvas");s.width=s.height=1024;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");Ph.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",sv(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let i=new Le(s);return i.colorSpace=ve,i.anisotropy=8,i}var Ih=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,i){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),i(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Le(this.cv);return t.colorSpace=ve,t.anisotropy=8,new Ht({map:t,vertexColors:!0})}};function Oi(s,t,e,n,i="bold"){for(s.font=`${i} ${n}px Arial`;s.measureText(t).width>e&&n>9;)n-=1,s.font=`${i} ${n}px Arial`;return n}var wa=class{constructor(t,e,n,i){this.roads=t,this.terrain=e,this.comuneAt=n,this.meta=i,this.inferred={};let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Ht({map:rv(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Ht({vertexColors:!0,side:re}),this.lights=[0,1].map(()=>({R:new Ae({color:3342336}),Y:new Ae({color:3351040}),G:new Ae({color:8704})})),this.greenMat=new Ae({color:2162528}),this.lampMat=new Ae({color:5592400}),this.lampPoleMat=new Ht({color:5593178}),this.lampPoleGeo=new te(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new Bt(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Ae({map:new Le(o),transparent:!0,blending:fi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new en(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of i?i.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let i=Pr(n,t),r=this.lights[n];r.R.color.setHex(i==="R"?16722458:2754566),r.Y.color.setHex(i==="Y"?16756736:2760196),r.G.color.setHex(i==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let i=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,i=u.n)}return i}approaches(t){let e=this.roads,n=[];for(let i=e.adjStart[t];i<e.adjStart[t+1];i++){let r=e.ways[e.adjWay[i]],o=e.adjPos[i];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[i],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[i],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,i=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==i&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),i=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,i=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;i=n.ways[o].limit}}return i}traceDestination(t,e,n,i){let r=this.roads,o=this.comuneOfNode(i),a=this.placeNear(r.nx[i],r.nz[i],600),l=0,c=i;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let g=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),x=null,p=1.15,M=(_,w,S,T)=>{let b=r.ways[_],E=b.nodes[w+S];if(E===void 0)return;let R=Math.atan2(r.nx[E]-r.nx[T],r.nz[E]-r.nz[T])-g;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<p&&(p=Math.abs(R),x=[_,w,S])},v=(_,w)=>{for(let S=r.adjStart[_];S<r.adjStart[_+1];S++){let T=r.adjWay[S],b=r.ways[T],E=r.adjPos[S];if(!(!b.drivable||b.cls>kt.UNCLASSIFIED)&&!(T===t&&E===e)){if(b.flags&Lt.ROUNDABOUT){w||y(T,E);continue}E<b.nodes.length-1&&M(T,E,1,w?d:_),E>0&&!b.oneway&&M(T,E,-1,w?d:_)}}},y=(_,w)=>{let S=_,T=w;for(let b=0;b<120;b++){let E=r.ways[S];if(T>=E.nodes.length-1){let L=E.nodes[E.nodes.length-1],D=!1;if(E.nodes[0]===L&&E.nodes.length>2)T=0,D=!0;else for(let N=r.adjStart[L];N<r.adjStart[L+1];N++){let O=r.adjWay[N];if(O!==S&&r.ways[O].flags&Lt.ROUNDABOUT&&r.adjPos[N]===0){S=O,T=0,D=!0;break}}if(!D)return}T++;let R=(E===r.ways[S],r.ways[S].nodes[T]);if(R===d)return;r.degree[R]>=3&&v(R,!0)}};if(v(d,!1),!x)return null;c=d,[t,e,n]=x;continue}let m=h.nodes[f];if(l+=Math.hypot(r.nx[m]-r.nx[d],r.nz[m]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let g=this.comuneOfNode(m);if(g&&o&&g!==o)return{name:g,dist:l};let x=this.placeNear(r.nx[m],r.nz[m]);if(x&&x!==a&&x!==o&&l>500)return{name:x,dist:l}}}return null}build(t,e){let n=this.roads,i=this.terrain,r=n.tileSegs.get(t)||[],o=new oe(!0,!1),a=new oe(!0,!0),l=new oe(!0,!0),c=new oe(!0,!1),u=new oe(!0,!0),h=[0,1].map(()=>({R:new oe(!1,!1),Y:new oe(!1,!1),G:new oe(!1,!1)})),f=new oe(!1,!1),d=new Ih,m=[],g=[],x=[],p=[.42,.43,.44],M=(V,Q=.7)=>({uv:Ir(V),back:Ir(V,!0),w:Q,h:Q,name:V}),v=new Set(["deadend","parking","curveR","curveL","steep","children"]),y=(V,Q,Y,k,tt,F=2)=>{if(tt=tt.filter(it=>it&&it.uv),!tt.length)return;for(let it of tt)if(v.has(it.name)){let Z=this.inferred[it.name]||(this.inferred[it.name]={n:0});Z.n++,Z.x=V,Z.z=Q,Z.dx=Y,Z.dz=k}let K=Math.atan2(-Y,-k),I=i.height(V,Q),ht=tt.reduce((it,Z)=>it+Z.h+.06,0);ke(o,V,I+(F+ht)/2,Q,.07,F+ht,.07,K,p);let et=I+F+ht;for(let it of tt)et-=it.h/2+.03,On(it.text?l:a,V-Y*.05,et,Q-k*.05,it.w,it.h,K,it.uv),it.text&&it.double?On(l,V+Y*.05,et,Q+k*.05,it.w,it.h,K+Math.PI,it.uv):On(a,V+Y*.05,et,Q+k*.05,it.w,it.h,K+Math.PI,it.back||Ir("back")),et-=it.h/2+.03},_=V=>{let Q=d.add("st"+V,190,42,(Y,k,tt)=>{Y.fillStyle="#f7f7f2",Y.fillRect(0,0,k,tt),Y.strokeStyle="#1b2f6b",Y.lineWidth=3,Y.strokeRect(2.5,2.5,k-5,tt-5),Y.fillStyle="#16255a",Y.textAlign="center",Y.textBaseline="middle",Oi(Y,V,k-16,22),Y.fillText(V,k/2,tt/2+1)});return Q&&{uv:Q,w:1.25,h:.28,text:!0,double:!0}},w=(V,Q)=>{let Y=d.add("tw"+(Q?"E":"S")+V,300,116,(k,tt,F)=>{k.fillStyle="#fff",k.fillRect(0,0,tt,F),k.strokeStyle="#111",k.lineWidth=6,k.strokeRect(7,7,tt-14,F-14),k.fillStyle="#111",k.textAlign="center",k.textBaseline="middle",Oi(k,V,tt-44,50),k.fillText(V,tt/2,F/2+2),Q&&(k.strokeStyle="#c8101a",k.lineWidth=12,k.beginPath(),k.moveTo(16,F-16),k.lineTo(tt-16,16),k.stroke())});return Y&&{uv:Y,w:2.1,h:.82,text:!0}},S=(V,Q,Y)=>{let k=Q?`${V}  ${Q}`:V,tt=d.add("dr"+(Y?"B":"W")+k,300,64,(F,K,I)=>{F.fillStyle=Y?"#0a4fa6":"#fff",F.fillRect(0,0,K,I),F.strokeStyle=Y?"#fff":"#111",F.lineWidth=3,F.strokeRect(3.5,3.5,K-7,I-7),F.fillStyle=Y?"#fff":"#111",F.beginPath(),F.moveTo(34,12),F.lineTo(54,34),F.lineTo(41,34),F.lineTo(41,54),F.lineTo(27,54),F.lineTo(27,34),F.lineTo(14,34),F.closePath(),F.fill(),F.textAlign="left",F.textBaseline="middle",Oi(F,k,K-76,30),F.fillText(k,66,I/2+2)});return tt&&{uv:tt,w:1.9,h:.42,text:!0}},T=(V,Q)=>{let Y=26+V.length*46,k=d.add("bd"+Q+V.join("|"),400,Y,(tt,F,K)=>{let I={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[Q],ht=Q==="white"?"#111":"#fff";tt.fillStyle=I,tt.fillRect(0,0,F,K),tt.strokeStyle=ht,tt.lineWidth=4,tt.strokeRect(5,5,F-10,K-10),tt.fillStyle=ht,tt.textBaseline="middle",V.forEach((et,it)=>{let Z=36+it*46;tt.textAlign="left",Oi(tt,et,F-90,34),tt.fillText(et,22,Z)}),tt.beginPath(),tt.moveTo(F-28,18),tt.lineTo(F-28,46),tt.lineTo(F-56,18),tt.closePath(),tt.fill(),tt.lineWidth=8,tt.strokeStyle=ht,tt.beginPath(),tt.moveTo(F-62,52),tt.lineTo(F-36,26),tt.stroke()});return k&&{uv:k,w:3.2,h:3.2*Y/400,text:!0}},b=V=>{let Q=d.add("rf"+V,130,56,(Y,k,tt)=>{let F=/^A\d/.test(V);Y.fillStyle="#fff",Y.fillRect(0,0,k,tt),Y.fillStyle=F?"#0b7a3b":"#0a4fa6",Y.fillRect(4,4,k-8,tt-8),Y.fillStyle="#fff",Y.textAlign="center",Y.textBaseline="middle",Oi(Y,V,k-18,30),Y.fillText(V,k/2,tt/2+2)});return Q&&{uv:Q,w:.8,h:.34,text:!0}},E=V=>{let Q=d.add("bs"+V,190,36,(Y,k,tt)=>{Y.fillStyle="#f2c417",Y.fillRect(0,0,k,tt),Y.fillStyle="#111",Y.textAlign="center",Y.textBaseline="middle",Oi(Y,V,k-12,20),Y.fillText(V,k/2,tt/2+1)});return Q&&{uv:Q,w:1,h:.2,text:!0,double:!0}},R=V=>{let Q=d.add("ft"+V,150,150,(Y,k,tt)=>{Y.fillStyle="#f4f4f4",Y.fillRect(0,0,k,tt),Y.fillStyle="#d6202a",Y.fillRect(0,0,k,52),Y.fillStyle="#fff",Y.textAlign="center",Y.textBaseline="middle",Oi(Y,V||"CARBURANTI",k-14,26),Y.fillText(V||"CARBURANTI",k/2,27),Y.fillStyle="#111",Y.font="bold 20px Arial",Y.textAlign="left",Y.fillText("Benzina",10,80),Y.fillText("Gasolio",10,108),Y.fillText("GPL",10,134),Y.fillStyle="#0b7a3b",Y.textAlign="right",Y.fillText("1.7"+V.length%9,k-10,80),Y.fillText("1.6"+V.length*3%9,k-10,108),Y.fillText("0.7"+V.length*7%9,k-10,134)});return Q&&{uv:Q,w:1.5,h:1.5,text:!0,double:!0}},L=V=>Ph.includes("s"+V)?M("s"+V,.66):null,D=(V,Q,Y,k,tt)=>n.heightOn(V,Q,Y,k,tt),N=(V,Q,Y,k,tt,F)=>{let K=-k,I=Y,ht=V.w.width/2,et=n.nx[Q]-Y*(tt+.8),it=n.nz[Q]-k*(tt+.8),Z=V.w.oneway?-ht+.3:(V.fwd?V.w.cOff:-V.w.cOff)+.1,Mt=ht-.3,ct=D(V.wi,V.seg,V.t,et,it)+.03;if(F)for(let P=Z;P+.5<=Mt;P+=.75){let C=[[P,-.3],[P+.5,-.3],[P+.25,.35]].map(([X,J])=>c.v(et+K*X-Y*J,ct,it+I*X-k*J));c.tri(C[0],C[1],C[2]),c.tri(C[0],C[2],C[1])}else{let P=c.v(et+K*Z-Y*.25,ct,it+I*Z-k*.25),C=c.v(et+K*Mt-Y*.25,ct,it+I*Mt-k*.25),X=c.v(et+K*Mt+Y*.25,ct,it+I*Mt+k*.25),J=c.v(et+K*Z+Y*.25,ct,it+I*Z+k*.25);c.quad(P,C,X,J)}return[et+K*(Z+Mt)/2,it+I*(Z+Mt)/2,Mt-Z]},O=new Set,z=new Set,W=new Set,B=new Set,j=new Map,q=new Map,ut=0;for(let V of r){let Q=Math.floor(V/16384),Y=V%16384,k=n.ways[Q];if(!k.drivable)continue;let tt=k.nodes[Y],F=k.nodes[Y+1],K=n.nx[tt],I=n.nz[tt],ht=n.nx[F],et=n.nz[F],it=Math.hypot(ht-K,et-I);if(it<.3)continue;let Z=(ht-K)/it,Mt=(et-I)/it,ct=-Mt,P=Z,C=k.width/2,X=k.nodes.length-2,J=C+.9;for(let G of[tt,F]){if(O.has(G))continue;O.add(G);let lt=n.ntag[G];if(n.degMain[G]>=3&&ut<240){let at=new Set;for(let dt=n.adjStart[G];dt<n.adjStart[G+1];dt++){let mt=n.ways[n.adjWay[dt]],Rt=n.adjPos[dt];if(!mt.name||!mt.drivable||mt.cls>kt.LIVING||at.has(mt.name)||z.has(mt.name+"@"+G))continue;at.add(mt.name),z.add(mt.name+"@"+G);let Tt=Rt<mt.nodes.length-1?mt.nodes[Rt+1]:mt.nodes[Rt-1],Gt=n.nx[Tt]-n.nx[G],Zt=n.nz[Tt]-n.nz[G],ae=Math.hypot(Gt,Zt)||1;Gt/=ae,Zt/=ae;let nt=n.w1[G]/2+2.4,Dt=mt.width/2+.9,yt=n.nx[G]+Gt*nt-Zt*Dt,wt=n.nz[G]+Zt*nt+Gt*Dt,Ut=_(mt.name);Ut&&(y(yt,wt,-Zt,Gt,[Ut],2.45),ut++)}}if(!lt)continue;let pt=this.approaches(G).filter(at=>at.w.cls<=kt.SERVICE);if(!pt.length)continue;let _t=n.degMain[G]>=3,It=at=>{let dt=n.nx[G]-n.nx[at.from],mt=n.nz[G]-n.nz[at.from],Rt=Math.hypot(dt,mt)||1;return[dt/Rt,mt/Rt,Rt]};if(lt===jt.SIGNALS||lt===jt.STOP||lt===jt.GIVE_WAY||lt===jt.CROSSING_SIGNALS){let at=pt,dt=n.ndir[G];if(dt&&!_t){let mt=pt.filter(Rt=>Rt.fwd===(dt===1));mt.length&&(at=mt)}else if(lt!==jt.SIGNALS&&lt!==jt.CROSSING_SIGNALS&&_t){let mt=Math.min(...pt.map(Rt=>Rt.w.cls));at=pt.filter(Rt=>Rt.w.cls>mt),at.length||(at=pt.slice(0,1))}else if(!_t&&lt!==jt.CROSSING_SIGNALS){let mt=pt.filter(Rt=>this.leadsToJunction(G,Rt.from));mt.length&&(at=mt)}for(let mt of at){let[Rt,Tt,Gt]=It(mt),Zt=-Tt,ae=Rt,nt=mt.w.width/2,Dt=_t?Math.min(Gt*.6+2,n.w1[G]/2+1.5):lt===jt.CROSSING_SIGNALS?2.5:0,yt=n.nx[G]-Rt*Dt+Zt*(nt+.9),wt=n.nz[G]-Tt*Dt+ae*(nt+.9),Ut=Math.atan2(-Rt,-Tt);if(lt===jt.SIGNALS||lt===jt.CROSSING_SIGNALS){let zt=i.height(yt,wt);ke(o,yt,zt+1.55,wt,.09,3.1,.09,Ut,p),ke(o,yt,zt+3,wt,.38,1.05,.3,Ut,[.1,.1,.1]);let Kt=-Rt*.16,de=-Tt*.16;if(lt===jt.SIGNALS){let Ue=Math.abs(Rt)>Math.abs(Tt)?1:0,he=h[Ue];ke(he.R,yt+Kt,zt+3.33,wt+de,.22,.22,.04,Ut,[1,1,1]),ke(he.Y,yt+Kt,zt+3,wt+de,.22,.22,.04,Ut,[1,1,1]),ke(he.G,yt+Kt,zt+2.67,wt+de,.22,.22,.04,Ut,[1,1,1]),g.push({node:G,group:Ue})}else ke(f,yt+Kt,zt+2.67,wt+de,.22,.22,.04,Ut,[1,1,1]);N(mt,G,Rt,Tt,Dt+(lt===jt.CROSSING_SIGNALS?.5:0),!1)}else if(lt===jt.STOP){y(yt,wt,Rt,Tt,[M("stop",.75)]);let[zt,Kt,de]=N(mt,G,Rt,Tt,Dt,!1);mt.w.cls<=kt.RESIDENTIAL&&de>2&&n.addDecal(u,mt.wi,mt.seg,mt.t,zt-Rt*2.6,Kt-Tt*2.6,Rt,Tt,Math.min(2.4,de-.4),3,"stop")}else y(yt,wt,Rt,Tt,[M("giveway",.8)]),N(mt,G,Rt,Tt,Dt,!0)}}else if(lt===jt.CROSSING&&!_t&&k.cls<=kt.UNCLASSIFIED)for(let at of pt){let[dt,mt]=It(at);y(n.nx[G]-dt*2.6-mt*(at.w.width/2+.9),n.nz[G]-mt*2.6+dt*(at.w.width/2+.9),dt,mt,[M("ped",.6)])}else if(lt===jt.BUMP||lt===jt.TABLE)for(let at of pt){let[dt,mt]=It(at);y(n.nx[G]-dt*7-mt*(at.w.width/2+.9),n.nz[G]-mt*7+dt*(at.w.width/2+.9),dt,mt,[M("bump",.8),lt===jt.TABLE?null:L(30)])}else if(lt===jt.LEVEL_CROSSING)for(let at of pt){let[dt,mt]=It(at),Rt=n.nx[G]-dt*5-mt*(at.w.width/2+.9),Tt=n.nz[G]-mt*5+dt*(at.w.width/2+.9);y(Rt,Tt,dt,mt,[M("level",.95)],1.7);let Gt=i.height(Rt,Tt),Zt=Math.atan2(-dt,-mt);ke(o,Rt-dt*.8,Gt+.55,Tt-mt*.8,.3,1.1,.3,Zt,[.75,.75,.75]);for(let ae=0;ae<6;ae++)ke(o,Rt-dt*.8+mt*.25,Gt+1.4+ae*.7,Tt-mt*.8-dt*.25,.1,.7,.1,Zt,ae%2?[.85,.1,.1]:[.95,.95,.95])}}let ft=k.limitMapped&&k.cls<=kt.RESIDENTIAL&&k.len>80&&!(k.flags&Lt.ROUNDABOUT);if(Y===0&&ft&&this.neighbourLimit(tt,Q)!==k.limit){let G=Math.min(14,k.len*.3),[lt,pt]=n.pointAt(k,G);y(lt+ct*J,pt+P*J,Z,Mt,[L(k.limit)],2.1)}if(Y===X&&!k.oneway&&ft&&this.neighbourLimit(F,Q)!==k.limit){let G=Math.min(14,k.len*.3),[lt,pt]=n.pointAt(k,k.len-G);y(lt-ct*J,pt-P*J,-Z,-Mt,[L(k.limit)],2.1)}if(k.oneway&&!(k.flags&(Lt.ROUNDABOUT|Lt.LINK))&&k.cls>=kt.TERTIARY&&k.cls<=kt.LIVING&&k.len>25){let G=(lt,pt)=>{for(let _t=n.adjStart[lt];_t<n.adjStart[lt+1];_t++){let It=n.adjWay[_t],at=n.ways[It];if(It!==Q&&at.oneway&&(at.name===k.name||n.degMain[lt]<3)&&n.adjPos[_t]===(pt?at.nodes.length-1:0))return!0}return!1};if(Y===0&&n.degMain[tt]>=3&&!n.onRb[tt]&&!G(tt,!0)){let[lt,pt]=n.pointAt(k,Math.min(6,k.len*.3));y(lt+ct*J,pt+P*J,Z,Mt,[M("oneway",.6)])}if(Y===X&&n.degMain[F]>=3&&!n.onRb[F]&&!G(F,!1)){let lt=Math.min(k.len*.3,n.w1[F]/2+1.5);for(let pt of[1,-1])y(ht-Z*lt+ct*J*pt,et-Mt*lt+P*J*pt,-Z,-Mt,[M("noentry",.6)])}}if(!k.oneway&&k.cls>=kt.UNCLASSIFIED&&k.cls<=kt.LIVING&&k.len>50&&!(k.flags&(Lt.PRIVATE|Lt.ROUNDABOUT))){let G=k.nodes[0],lt=k.nodes[k.nodes.length-1];if(Y===0&&n.degMain[G]>=3&&n.degree[lt]===1){let[pt,_t]=n.pointAt(k,Math.min(9,k.len*.2));y(pt+ct*J,_t+P*J,Z,Mt,[M("deadend",.6)])}if(Y===X&&n.degMain[lt]>=3&&n.degree[G]===1){let[pt,_t]=n.pointAt(k,k.len-Math.min(9,k.len*.2));y(pt-ct*J,_t-P*J,-Z,-Mt,[M("deadend",.6)])}}if(k.flags&Lt.AISLE)for(let[G,lt,pt,_t]of[[k.nodes[0],Y===0,Z,Mt],[k.nodes[k.nodes.length-1],Y===X,-Z,-Mt]]){if(!lt)continue;let It=!1;for(let dt=n.adjStart[G];dt<n.adjStart[G+1];dt++){let mt=n.ways[n.adjWay[dt]];mt!==k&&mt.drivable&&!(mt.flags&Lt.AISLE)&&mt.cls<=kt.SERVICE&&(It=!0)}let at=Math.round(n.nx[G]/70)+"_"+Math.round(n.nz[G]/70);!It||B.has(at)||(B.add(at),y(n.nx[G]+pt*3-_t*(C+.8),n.nz[G]+_t*3+pt*(C+.8),pt,_t,[M("parking",.6)]))}if(k.cls<=kt.UNCLASSIFIED&&k.limit>=50&&!(k.flags&(Lt.ROUNDABOUT|Lt.LINK|Lt.TUNNEL))&&k.len>160){let G=k.cum[Y],lt=at=>{let dt=n.pointAt(k,at-12),mt=n.pointAt(k,at+12),Rt=Math.hypot(mt[0]-dt[0],mt[1]-dt[1])||1;return[(mt[0]-dt[0])/Rt,(mt[1]-dt[1])/Rt]},pt=at=>{if(at<40||at>k.len-40)return 0;let dt=lt(at-22),mt=lt(at+22);return Math.atan2(dt[0]*mt[1]-dt[1]*mt[0],dt[0]*mt[0]+dt[1]*mt[1])},_t=j.get(Q);if(G>75&&G<k.len-75&&n.degMain[tt]<3&&(_t===void 0||Math.abs(G-_t)>150)&&!i.isUrban(K,I)){let at=pt(G);if(Math.abs(at)>.56&&Math.abs(at)>=Math.abs(pt(G-12))&&Math.abs(at)>=Math.abs(pt(G+12))){j.set(Q,G);let dt=n.pointAt(k,G-65),mt=lt(G-65);if(y(dt[0]-mt[1]*J,dt[1]+mt[0]*J,mt[0],mt[1],[M(at>0?"curveR":"curveL",.8)]),!k.oneway){let Rt=n.pointAt(k,G+65),Tt=lt(G+65);y(Rt[0]+Tt[1]*J,Rt[1]-Tt[0]*J,-Tt[0],-Tt[1],[M(at>0?"curveL":"curveR",.8)])}}}let It=q.get(Q);if(!k.abs&&G>30&&G<k.len-130&&(It===void 0||Math.abs(G-It)>450)){let at=Tt=>{let Gt=n.pointAt(k,Tt);return i.height(Gt[0],Gt[1])},dt=at(G),mt=dt-at(G+110),Rt=at(Math.max(0,G-90))-dt;if(Math.abs(mt)>10&&Math.abs(Rt)<4.5){if(q.set(Q,G),mt>0)y(K+ct*J,I+P*J,Z,Mt,[M("steep",.8)]);else if(!k.oneway){let Tt=n.pointAt(k,G+110),Gt=lt(Math.min(k.len-15,G+110));y(Tt[0]+Gt[1]*J,Tt[1]-Gt[0]*J,-Gt[0],-Gt[1],[M("steep",.8)])}}}}if(Y===0&&k.dest&&k.len>30){let G=k.dest.split("|"),lt=G[G.length-1].split(";").map(It=>It.trim()).filter(Boolean).slice(0,4);G.length>1&&(lt[0]=G[0].split(";")[0]+"  "+lt[0]);let pt=k.cls===0?"green":k.cls<=3||k.limit>50?"blue":"white",_t=T(lt,pt);if(_t){let[It,at]=n.pointAt(k,Math.min(18,k.len*.4)),dt=It+ct*(J+1.8),mt=at+P*(J+1.8),Rt=i.height(dt,mt),Tt=Math.atan2(-Z,-Mt);for(let Gt of[1,-1])ke(o,dt+ct*1.3*Gt,Rt+1.6+_t.h/2,mt+P*1.3*Gt,.1,3.2+_t.h,.1,Tt,p);On(l,dt-Z*.08,Rt+3.2+_t.h/2,mt-Mt*.08,_t.w,_t.h,Tt,_t.uv),On(a,dt+Z*.08,Rt+3.2+_t.h/2,mt+Mt*.08,_t.w,_t.h,Tt+Math.PI,Ir("back"))}}if(k.ref&&k.cls<=kt.TERTIARY&&!(k.flags&(Lt.LINK|Lt.ROUNDABOUT))&&k.len>160){let G=k.ref.split(";")[0].trim();if(Y===0&&n.degMain[tt]>=3&&!W.has(G+tt)){W.add(G+tt);let[lt,pt]=n.pointAt(k,38);y(lt+ct*J,pt+P*J,Z,Mt,[b(G)],1.9)}if(Y===X&&!k.oneway&&n.degMain[F]>=3&&!W.has(G+F)){W.add(G+F);let[lt,pt]=n.pointAt(k,k.len-38);y(lt-ct*J,pt-P*J,-Z,-Mt,[b(G)],1.9)}}if(k.cls<=kt.RESIDENTIAL&&k.cls>=kt.TRUNK&&!(k.flags&(Lt.LINK|Lt.BRIDGE|Lt.TUNNEL|Lt.ROUNDABOUT))){let G=this.comuneOfNode(tt),lt=this.comuneOfNode(F);if(G&&lt&&G!==lt){let pt=0,_t=1;for(let dt=0;dt<10;dt++){let mt=(pt+_t)/2;this.comuneAt(K+(ht-K)*mt,I+(et-I)*mt)===G?pt=mt:_t=mt}let It=K+(ht-K)*pt,at=I+(et-I)*pt;this.townSign(o,l,a,It+ct*(J+.4),at+P*(J+.4),Z,Mt,w(lt,!1),w(lt,!0)),k.oneway||this.townSign(o,l,a,It-ct*(J+.4),at-P*(J+.4),-Z,-Mt,w(G,!1),w(G,!0))}}if(k.cls>=kt.PRIMARY&&k.cls<=kt.LIVING&&!k.abs&&!(k.flags&Lt.ROUNDABOUT)&&k.lit!==2){let G=k.cum[Y];for(let lt=Math.ceil(G/30)*30-G;lt<it;lt+=30){let pt=K+Z*lt,_t=I+Mt*lt;if(k.lit!==1&&!i.isUrban(pt,_t))continue;let It=Math.floor((G+lt)/30+.5)%2===0||k.oneway?1:-1,at=pt+ct*It*(C+1.1),dt=_t+P*It*(C+1.1),mt=n.nearest(at,dt,6);mt&&mt.d<n.ways[mt.wi].width/2+.4||m.push([at,i.height(at,dt),dt,Math.atan2(P*It,-ct*It)])}}}let bt=this.meta.proj.xmin+t%1e3*1e3,At=this.meta.proj.zmin+Math.floor(t/1e3)*1e3;for(let V of this.meta.landmarks){if(V[0]!==11||V[1]<bt||V[1]>=bt+1e3||V[2]<At||V[2]>=At+1e3)continue;let Q=n.nearest(V[1],V[2],90,F=>F.drivable&&F.cls>=kt.TERTIARY&&F.cls<=kt.LIVING&&!(F.flags&Lt.PRIVATE));if(!Q)continue;let Y=n.ways[Q.wi],k=Y.cum[Q.k]+(Y.cum[Q.k+1]-Y.cum[Q.k])*Q.t,tt=Y.width/2+.9;for(let[F,K]of[[k-45,1],[k+45,-1]]){if(F<5||F>Y.len-5||K<0&&Y.oneway)continue;let I=n.pointAt(Y,F),ht=n.pointAt(Y,F+K*4),et=Math.hypot(ht[0]-I[0],ht[1]-I[1])||1,it=(ht[0]-I[0])/et,Z=(ht[1]-I[1])/et;y(I[0]-Z*tt,I[1]+it*tt,it,Z,[M("children",.75)])}}for(let V of n.roundaboutEntries(t)){let Q=n.ways[V.wi],Y=n.nx[V.nd]-n.nx[V.from],k=n.nz[V.nd]-n.nz[V.from],tt=Math.hypot(Y,k)||1;Y/=tt,k/=tt;let F=n.w1[V.nd]/2+2.5,K=!1,I=0,ht=V.dir>0?Q.nodes.length-1:0;for(;I<30&&ht-V.dir>=0&&ht-V.dir<Q.nodes.length;){let Z=Q.nodes[ht],Mt=Q.nodes[ht-V.dir];if(I+=Math.hypot(n.nx[Mt]-n.nx[Z],n.nz[Mt]-n.nz[Z]),ht-=V.dir,n.ntag[Mt]===jt.GIVE_WAY||n.ntag[Mt]===jt.STOP){K=!0;break}}let et=n.nx[V.nd]-Y*F-k*(Q.width/2+.9),it=n.nz[V.nd]-k*F+Y*(Q.width/2+.9);y(et,it,Y,k,[K?null:M("giveway",.8),M("roundabout",.62)])}let st=new Set;for(let V of r){let Q=Math.floor(V/16384),Y=V%16384,k=n.ways[Q];if(k.flags&Lt.ROUNDABOUT||!k.drivable||k.cls>kt.TERTIARY)continue;let tt=k.nodes.length-2;for(let[F,K]of[[0,1],[k.nodes.length-1,-1]]){if((K>0?Y!==0:Y!==tt)||K<0&&k.oneway)continue;let I=k.nodes[F];if(!n.onRb[I]||st.has(Q*2+(K>0?0:1)))continue;st.add(Q*2+(K>0?0:1));let ht=this.traceDestination(Q,F,K,I);if(!ht)continue;let et=k.nodes[F+K],it=n.nx[et]-n.nx[I],Z=n.nz[et]-n.nz[I],Mt=Math.hypot(it,Z)||1;it/=Mt,Z/=Mt;let ct=k.limit>50||k.cls<=kt.SECONDARY,P=S(ht.name,ct?Math.max(1,Math.round(ht.dist/1e3)):0,ct),C=n.w1[I]/2+3.5;y(n.nx[I]+it*C-Z*(k.width/2+1.2),n.nz[I]+Z*C+it*(k.width/2+1.2),it,Z,[P],2.3)}}for(let[V,Q,Y,k]of e&&e.pt||[]){let tt=Q/10,F=Y/10,K=e.s[k]||"",I=n.nearest(tt,F,30,J=>J.drivable&&J.cls<=kt.SERVICE),ht=0,et=1;if(I){let J=Math.hypot(I.dx,I.dz)||1;ht=I.dx/J,et=I.dz/J}let it=I&&Math.sign((tt-I.px)*-et+(F-I.pz)*ht)||1,Z=I?n.ways[I.wi].width/2:0,Mt=I?Math.max(I.d,Z+1):0,ct=I?I.px-et*it*Mt:tt,P=I?I.pz+ht*it*Mt:F,C=ht*it,X=et*it;if(V===1){y(ct,P,C,X,[M("bus",.5),K?E(K):null],2);let J=i.height(ct,P),ft=Math.atan2(-C,-X),G=-et*it,lt=ht*it,pt=ct+C*2.2+G*.9,_t=P+X*2.2+lt*.9;ke(o,pt,J+2.45,_t,1.5,.08,3,ft,[.25,.3,.34]),ke(o,pt+G*.7,J+1.25,_t+lt*.7,.05,2.4,3,ft,[.55,.68,.74]);for(let It of[-1.45,1.45])ke(o,pt+C*It-G*.6,J+1.2,_t+X*It-lt*.6,.07,2.4,.07,ft,p)}else if(V===2){let J=I?Math.atan2(ht*it,et*it):0;m.push([tt,i.height(tt,F),F,J,1])}else if(V===3&&I){let J=[...this.places.values()].flat().find(_t=>_t.n===K),ft=C,G=X;if(J){let _t=Math.sign((J.x-ct)*ht+(J.z-P)*et)||1;ft=ht*_t,G=et*_t}let lt=I.px-G*(Z+1.3),pt=I.pz+ft*(Z+1.3);this.townSign(o,l,a,lt,pt,ft,G,w(K,!1),w(K,!0))}else if(V===4&&I){y(ct,P,C,X,[M("camera",.9)],2),x.push([I.px+ht*it*14,I.pz+et*it*14]);let J=i.height(ct,P),ft=Math.atan2(-C,-X);ke(o,ct+C*14,J+1.4,P+X*14,.5,2.8,.5,ft,[.95,.5,.1]),ke(o,ct+C*14-C*.26,J+2.3,P+X*14-X*.26,.3,.3,.04,ft,[.05,.05,.05])}else if(V===5){let J=R(K);if(J){let ft=i.height(ct,P),G=Math.atan2(-C,-X);ke(o,ct,ft+2.6,P,1.6,5.2,.3,G,[.9,.9,.9]),On(l,ct-C*.16,ft+4.3,P-X*.16,J.w,J.h,G,J.uv),On(l,ct+C*.16,ft+4.3,P+X*.16,J.w,J.h,G+Math.PI,J.uv)}}}let $=new $t,vt=[];if(o.empty||$.add(o.mesh(this.poleMat,!0)),a.empty||$.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let V=d.material();vt.push(V),$.add(l.mesh(V))}c.empty||$.add(c.mesh(this.markMat)),u.empty||$.add(u.mesh(this.decalMat));for(let V=0;V<2;V++)for(let Q of["R","Y","G"])h[V][Q].empty||$.add(h[V][Q].mesh(this.lights[V][Q]));if(f.empty||$.add(f.mesh(this.greenMat)),m.length){let V=m.filter(it=>it[4]),Q=m.filter(it=>it[4]||!V.some(Z=>Math.hypot(Z[0]-it[0],Z[2]-it[2])<22)),Y=new Re(this.lampPoleGeo,this.lampPoleMat,Q.length),k=new Re(this.lampHeadGeo,this.lampMat,Q.length),tt=new Re(this.poolGeo,this.poolMat,Q.length),F=new Jt,K=new Ie,I=new H(0,1,0),ht=new H(1,1,1),et=new H;Q.forEach(([it,Z,Mt,ct],P)=>{K.setFromAxisAngle(I,ct),et.set(it,Z,Mt),F.compose(et,K,ht),Y.setMatrixAt(P,F),k.setMatrixAt(P,F),tt.setMatrixAt(P,F)}),Y.computeBoundingSphere(),k.computeBoundingSphere(),tt.computeBoundingSphere(),tt.renderOrder=2,$.add(Y,k,tt)}return $.userData.dispose=()=>{for(let V of vt)V.map.dispose(),V.dispose()},{group:$,signals:g,lamps:m,cameras:x}}townSign(t,e,n,i,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(i,r),f=Math.atan2(-o,-a),d=-a,m=o,g=[.42,.43,.44];ke(t,i-d*.75,h+1.35,r-m*.75,.08,2.7,.08,f,g),ke(t,i+d*.75,h+1.35,r+m*.75,.08,2.7,.08,f,g),On(e,i-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?On(e,i+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):On(n,i+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,Ir("back"))}};var Ea=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,i,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(i/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,i=>{let r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e,n,i=!1){let r=1e9,o=1e9,a=-1e9,l=-1e9;for(let u=0;u<e.length;u+=2)r=Math.min(r,e[u]),a=Math.max(a,e[u]),o=Math.min(o,e[u+1]),l=Math.max(l,e[u+1]);if(!i&&a-r<1.5&&l-o<1.5)return null;let c={ring:e,tile:t,minx:r,minz:o,maxx:a,maxz:l,top:n};return this._add(t,c),c}addCircle(t,e,n,i,r){let o={x:e,z:n,r:i,tile:t,top:r,minx:e-i,minz:n-i,maxx:e+i,maxz:n+i};return this._add(t,o),o}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let i=this.grid.get(n);if(!i)return;let r=i.indexOf(t);r>=0&&i.splice(r,1),i.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let i of e)this._cells(i.minx,i.minz,i.maxx,i.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}topAt(t,e,n){let i=-1/0;return this._cells(t-n,e-n,t+n,e+n,r=>{let o=this.grid.get(r);if(o)for(let a of o){if(a.top===void 0||a.top<=i||t+n<a.minx||t-n>a.maxx||e+n<a.minz||e-n>a.maxz)continue;(a.ring?cd(t,e,n,a.ring):Math.hypot(t-a.x,e-a.z)<n+a.r)&&(i=a.top)}}),i}resolveCircle(t,e,n){let i=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=cd(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!i||c.depth>i.depth)&&(i=c)}}),i}};function cd(s,t,e,n){let i=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=i-1;f<i;d=f++){let m=n[f*2],g=n[f*2+1],x=n[d*2],p=n[d*2+1];g>t!=p>t&&s<(x-m)*(t-g)/(p-g)+m&&(r=!r);let M=m-x,v=g-p,y=M*M+v*v||1e-9,_=((s-x)*M+(t-p)*v)/y;_=_<0?0:_>1?1:_;let w=x+M*_,S=p+v*_,T=Math.hypot(s-w,t-S);T<o&&(o=T,a=w,l=S)}if(!r&&o>=e)return null;let c=s-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var Tn={darkMetal:new Ht({color:3620675}),greyMetal:new Ht({color:4344399}),midMetal:new Ht({color:5002330}),wood:new Ht({color:8016432}),woodDark:new Ht({color:6044964}),stone:new Ht({color:9407104}),soil:new Ht({color:4142122}),hedge:new Ht({color:4025145}),binBody:new Ht({color:3951169}),binLid:new Ht({color:3227449}),red:new Ht({color:11545120}),white:new Ht({color:15790318}),signBlue:new Ht({color:2183567}),roof:new Ht({color:3159099}),glass:new ce({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:re,depthWrite:!1})};function An(s){let t=s.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),i=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&i.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new ee;return o.setAttribute("position",new ue(n,3)),o.setAttribute("normal",new ue(i,3)),o.computeVertexNormals(),o}function hd(s,t,e,{shadow:n=!0}={}){let i=new Re(s,t,e);i.castShadow=n,i.count=e;let r=new Jt,o=new Ie,a=new Ke,l=new H,c=new H(1,1,1);return{mesh:i,setAt:(h,f,d,m=0,g=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,g,d),r.compose(l,o,c),i.setMatrixAt(h,r),i.instanceMatrix.needsUpdate=!0},count:e}}function Sa(s,t,{shadow:e=!0}={}){let n=new $t,i=s.map(({geom:h,material:f})=>{let d=new Re(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new Jt,o=new Ie,a=new Ke,l=new H,c=new H(1,1,1);return{mesh:n,setAt:(h,f,d,m=0,g=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,g,d),r.compose(l,o,c);for(let x of i)x.setMatrixAt(h,r),x.instanceMatrix.needsUpdate=!0},count:t}}function ud(s){let t=new te(.075,.1,.82,8);t.translate(0,.41,0);let e=new dn(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new te(.11,.11,.06,8);n.translate(0,.1,0);let i=An([t,e,n]);return hd(i,Tn.darkMetal,s)}function fd(s){let t=new te(.05,.05,.55,6);t.translate(0,.28,0);let e=new te(.11,.14,.08,8);e.translate(0,.04,0);let n=new te(.19,.17,.5,9);n.translate(0,.82,0);let i=new Fn(.19,.02,5,9).rotateX(Math.PI/2);i.translate(0,1.07,0);let r=An([t,e,n,i]),o=new te(.215,.2,.06,9);o.translate(0,1.12,0);let a=new dn(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=An([o,a]);return Sa([{geom:r,material:Tn.binBody},{geom:l,material:Tn.binLid}],s)}function dd(s){let i=[];for(let c=0;c<3;c++){let u=new Bt(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),i.push(u)}for(let c=0;c<3;c++){let u=new Bt(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),i.push(u)}let r=An(i),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new Bt(.05,.45,.05);h.translate(u,.45/2,.12);let f=new Bt(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new Bt(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new Bt(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=An(o);return Sa([{geom:r,material:Tn.wood},{geom:l,material:Tn.darkMetal}],s)}function pd(s){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new Bt(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new Bt(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new Bt(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return hd(An(t),Tn.darkMetal,s)}function md(s){let t=new te(.09,.13,.95,8);t.translate(0,.475,0);let e=new te(.16,.2,.08,8);e.translate(0,.04,0);let n=new te(.17,.13,.1,10);n.translate(0,.9,0);let i=new te(.13,.11,.07,10);i.translate(0,.94,0);let r=An([t,e,n]),o=new te(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new dn(.03,6,5);return a.translate(0,1.02,-.09),Sa([{geom:r,material:Tn.greyMetal},{geom:An([i]),material:Tn.midMetal},{geom:An([o,a]),material:Tn.darkMetal}],s)}function gd(s){let t=new te(.23,.25,.07,6);t.translate(0,.035,0);let e=new te(.135,.165,.6,9);e.translate(0,.37,0);let n=new te(.115,.175,.1,9);n.translate(0,.72,0);let i=new dn(.125,9,5,0,Math.PI*2,0,Math.PI/2);i.translate(0,.77,0);let r=new te(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=An([t,e,n,i,r]),a=[];for(let u of[-1,1]){let h=new te(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new te(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new te(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),Sa([{geom:o,material:Tn.red},{geom:An(a),material:Tn.darkMetal}],s)}function yd(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ee,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=xd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);let m=xd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function xd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new ue(o,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let g=u.getComponent(f,m);a.setComponent(f+h,m,g)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var ov={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},Ta=class{constructor(t,e,n,i,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=i,this.settings=r,this.collision=new Ea,this.gates=new va(i,n,this.collision),this.tiles=new Map,this.queue=[],this.detail=Qf(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new _a(n),this.vegetation=new ba(n,i),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new wa(i,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new $t,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let i=!1;for(let r of n.rings)jf(t,e,r)&&(i=!i);if(i)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new $t;for(let i=t.zmin;i<t.zmax;i+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,i,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new wn({color:3106440,specular:11189196,shininess:110,transparent:!0,opacity:.94,side:re});this.waterU={uTime:{value:0},uSky:{value:new Nt(.75,.84,.92)}},t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.waterU),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTime;
uniform vec3 uSky;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          vec2 wp = vWPos.xz;
          float wd = distance(cameraPosition, vWPos);
          float amp = clamp(1.0 - wd / 700.0, 0.12, 1.0);
          vec2 wg = vec2(cos(wp.x * 0.33 + uTime * 1.1), cos(wp.y * 0.29 + uTime * 0.9)) * 0.04
                  + vec2(cos(dot(wp, vec2(0.9, 0.5)) * 0.8 + uTime * 1.7), cos(dot(wp, vec2(-0.4, 0.8)) * 0.74 + uTime * 1.5)) * 0.03
                  + vec2(cos(dot(wp, vec2(0.3, -0.95)) * 2.1 + uTime * 2.6), cos(dot(wp, vec2(0.8, 0.6)) * 1.9 + uTime * 2.3)) * 0.015;
          vec3 nW = normalize(vec3(-wg.x * amp, 1.0, -wg.y * amp));
          normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
          vec3 vdirW = normalize(cameraPosition - vWPos);
          float fres = pow(1.0 - max(dot(vdirW, nW), 0.0), 3.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, uSky, clamp(fres, 0.0, 1.0) * 0.8);
          diffuseColor.a = mix(0.9, 1.0, fres);`)},this.waterMat=t;let e=new $t;for(let n of this.meta.waters)for(let i of n.o){if(i.length<4)continue;let r=i.map(m=>new Et(m[0],m[1])),o=(n.i||[]).filter(m=>m.length>=4).map(m=>m.map(g=>new Et(g[0],g[1]))),a;try{a=zn.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(m=>this.terrain.height(m.x,m.y)).sort((m,g)=>m-g),u=c[Math.floor(c.length*.3)]+.35,h=new Float32Array(l.length*3);l.forEach((m,g)=>{h[g*3]=m.x,h[g*3+1]=u,h[g*3+2]=m.y});let f=[];for(let[m,g,x]of a)f.push(m,x,g);let d=new ee;d.setAttribute("position",new ue(h,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((m,g)=>f[g-g%3+[0,2,1][g%3]])),d.computeVertexNormals()),e.add(new Ct(d,t))}this.root.add(e)}initFar(t){this.farIdx=new Map;let e=0;for(let[i,r,o]of t.t)this.farIdx.set(r*1e3+i,[e,o]),e+=o*7;this.farData=t.d,this.farMeshes=new Map,this.farQueue=[],this.farGroup=new $t,this.root.add(this.farGroup),this.farBMat=new Ht({vertexColors:!0});let n=(i,r=1)=>i.map(o=>new Nt(o).convertSRGBToLinear().multiplyScalar(r));this.farPal={wall:n(["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#e3c08e","#d9c7a6"]),ind:n(["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6"]),tile:n(["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52"],1.2),flat:n(["#8d8a84","#7d7b77","#9a968e","#6f6e6a"])}}updateFar(t,e,n){if(!this.farIdx||(this.farTick=(this.farTick||0)+1,this.farTick%20!==1&&n===this.farR))return;this.farR=n;let i=this.meta.proj,r=Math.floor((t-i.xmin)/1e3),o=Math.floor((e-i.zmin)/1e3),a=Math.ceil(n/1e3),l=[];for(let c=o-a;c<=o+a;c++)for(let u=r-a;u<=r+a;u++){let h=c*1e3+u;if(u<0||c<0||!this.farIdx.has(h)||this.farMeshes.has(h))continue;let f=Math.hypot(i.xmin+(u+.5)*1e3-t,i.zmin+(c+.5)*1e3-e);f<=n&&l.push([f,h])}l.sort((c,u)=>c[0]-u[0]),this.farQueue=l.map(c=>c[1]);for(let[c,u]of this.farMeshes){let h=c%1e3,f=Math.floor(c/1e3);Math.hypot(i.xmin+(h+.5)*1e3-t,i.zmin+(f+.5)*1e3-e)>n+1500&&(this.farGroup.remove(u),u.geometry.dispose(),this.farMeshes.delete(c))}}pumpFar(t=3){if(!this.farIdx)return;let e=performance.now();for(;this.farQueue.length&&performance.now()-e<t;){let n=this.farQueue.shift();if(this.farMeshes.has(n))continue;let i=this.buildFarTile(n);this.farMeshes.set(n,i),this.farGroup.add(i)}for(let[n,i]of this.farMeshes){let r=this.tiles.get(n);i.visible=!(r&&r.parts.buildings)}}buildFarTile(t){let[e,n]=this.farIdx.get(t),i=this.farData,r=this.terrain,o=this.meta.proj,a=this.farPal,l=o.xmin+t%1e3*1e3,c=o.zmin+Math.floor(t/1e3)*1e3,u=new Float32Array(n*60),h=new Float32Array(n*60),f=new Float32Array(n*60),d=new Uint32Array(n*30),m=0,g=0,x=(v,y,_,w,S,T,b,E)=>(u[m*3]=v,u[m*3+1]=y,u[m*3+2]=_,h[m*3]=w.r*S,h[m*3+1]=w.g*S,h[m*3+2]=w.b*S,f[m*3]=T,f[m*3+1]=b,f[m*3+2]=E,m++);for(let v=0;v<n;v++){let y=e+v*7,_=l+i[y]/10,w=c+i[y+1]/10,S=i[y+2]/10,T=i[y+3]/10,b=i[y+4]*Math.PI/180,E=i[y+5]/10,R=i[y+6],L=Math.sin(b),D=Math.cos(b),N=-D,O=L,z=r.height(_,w),W=z-2.5,B=z+E+(R&1?1:.2),j=(i[y]*73+i[y+1]*151+v*7)%97/97,q=(i[y]*31+i[y+1]*17+v*13)%89/89,ut=R&2?a.ind[Math.floor(j*a.ind.length)]:a.wall[Math.floor(j*a.wall.length)],bt=R&1?a.tile[Math.floor(q*a.tile.length)]:a.flat[Math.floor(q*a.flat.length)],At=[[_+L*S+N*T,w+D*S+O*T],[_-L*S+N*T,w-D*S+O*T],[_-L*S-N*T,w-D*S-O*T],[_+L*S-N*T,w+D*S-O*T]],st=[[N,O],[-L,-D],[-N,-O],[L,D]];for(let k=0;k<4;k++){let tt=At[k],F=At[(k+1)%4],[K,I]=st[k],ht=x(tt[0],W,tt[1],ut,1,K,0,I),et=x(F[0],W,F[1],ut,1,K,0,I),it=x(F[0],B,F[1],ut,1,K,0,I),Z=x(tt[0],B,tt[1],ut,1,K,0,I);-(F[1]-tt[1])*K+(F[0]-tt[0])*I>0?(d[g++]=ht,d[g++]=et,d[g++]=it,d[g++]=ht,d[g++]=it,d[g++]=Z):(d[g++]=ht,d[g++]=it,d[g++]=et,d[g++]=ht,d[g++]=Z,d[g++]=it)}let $=x(At[0][0],B,At[0][1],bt,1,0,1,0),vt=x(At[1][0],B,At[1][1],bt,1,0,1,0),V=x(At[2][0],B,At[2][1],bt,1,0,1,0),Q=x(At[3][0],B,At[3][1],bt,1,0,1,0);(At[1][1]-At[0][1])*(At[2][0]-At[0][0])-(At[1][0]-At[0][0])*(At[2][1]-At[0][1])>0?(d[g++]=$,d[g++]=vt,d[g++]=V,d[g++]=$,d[g++]=V,d[g++]=Q):(d[g++]=$,d[g++]=V,d[g++]=vt,d[g++]=$,d[g++]=Q,d[g++]=V)}let p=new ee;p.setAttribute("position",new ue(u,3)),p.setAttribute("color",new ue(h,3)),p.setAttribute("normal",new ue(f,3)),p.setIndex(new ue(d,1)),p.computeBoundingSphere();let M=new Ct(p,this.farBMat);return M.matrixAutoUpdate=!1,M}updateWater(t,e){this.waterU&&(this.waterU.uTime.value=t%1e4,this.waterU.uSky.value.copy(e))}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,i=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=i-o;c<=i+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let u=n.xmin+(c+.5)*1e3,h=n.zmin+(l+.5)*1e3,f=Math.hypot(u-t,h-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let g={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(g.key,g)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700;let m=this.farIdx?(this.settings.detailKm||1.5)*1e3:1e9;if(f<m)d.bldPending&&(d.bldPending=!1,delete d.parts.buildings);else if(f>m+400&&d.parts.buildings&&!d.gen){let g=d.parts.buildings;this.root.remove(g),g.traverse(x=>{x.geometry&&x.geometry.dispose()}),d.parts.buildings=null,d.bldPending=!0}d.bldFar=f>=m}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isSprite&&i.material.map&&(i.material.map.dispose(),i.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((i,r)=>i.d-r.d);for(let i of n){if(performance.now()-e>t)return!1;if(i.state==="new"){i.state="loading",this.tileSet.has(i.key)?Sr("t_"+i.i+"_"+i.j,`data/tiles/t_${i.i}_${i.j}.js`).then(c=>{i.data=c,i.state="ready"}).catch(()=>{i.data=null,i.state="ready"}):(i.data=null,i.state="ready");continue}if(i.state!=="ready"||i.dead)continue;let r=this.meta.proj,o=r.xmin+i.i*1e3,a=r.zmin+i.j*1e3,l=(c,u)=>{i.parts[c]=u,u&&this.root.add(u)};if(!("terrain"in i.parts)){if(!this.roads.ensureRegion(i.key,e+t))return!1;l("terrain",this.terrain.buildChunk(o,a,1e3,Math.max(5,this.terrain.step),this.terrainMat));continue}if(!("roads"in i.parts)){i.gen||(i.gen=this.roads.buildTileGen(i.key));let c;do c=i.gen.next();while(!c.done&&performance.now()-e<t);if(!c.done)return!1;i.gen=null,l("roads",c.value);continue}if(!("signs"in i.parts)){let c=this.signage.build(i.key,i.data);for(let u of c.signals)this.signals.push({...u,tile:i.key});for(let u of c.cameras||[])this.cameras.push({x:u[0],z:u[1],tile:i.key});l("signs",c.group);continue}if(!("buildings"in i.parts)){if(i.data&&i.bldFar&&this.farIdx&&this.farIdx.has(i.key)){i.parts.buildings=null,i.bldPending=!0;continue}if(i.data){i.gen||(i.gen=this.buildings.buildGen(i.data,i.bldCol?null:this.collision,i.key),i.bldCol=!0);let c;do c=i.gen.next();while(!c.done&&performance.now()-e<t);if(!c.done)return!1;i.gen=null,l("buildings",c.value.group)}else l("buildings",null);if(!i.rbDone){i.rbDone=!0;for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===i.key&&this.collision.addCircle(i.key,c.x,c.z,c.r)}continue}if(!("paths"in i.parts)){let c=new $t,u=this.roads.buildPaths(i.data),h=this.roads.buildBarriers(i.data,this.collision,i.key),f=this.buildPower(i),d=this.roads.buildStalls(i.data);for(let m of[u,h,f,d])m&&c.add(m);l("paths",c.children.length?c:null);continue}if(!("gates"in i.parts)){l("gates",this.gates.build(i.key,i.data));continue}if(!("props"in i.parts)){l("props",this.buildProps(i)),this.traffic&&this.traffic.computeParkSpots(i.key,i.data);continue}if(!("labels"in i.parts)){l("labels",this.buildLabels(i));continue}if(i.vegWanted&&!("veg"in i.parts)){l("veg",this.vegetation.build(i.data,i.i,i.j,this.collision,i.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=9,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,i=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=M=>M[0]>=i&&M[0]<i+1e3&&M[1]>=r&&M[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let M of e)for(let v=0;v<M.length;v++){if(!o(M[v]))continue;let y=M[v],_=M[v-1]||M[v+1],w=M[v+1]||M[v-1],S=w[0]-_[0],T=w[1]-_[1],b=Math.hypot(S,T)||1;if(S/=b,T/=b,c.push([y[0],u.height(y[0],y[1]),y[1],Math.atan2(S,T)]),v<M.length-1){let E=M[v+1],R=u.height(y[0],y[1])+a,L=u.height(E[0],E[1])+a,D=Math.hypot(E[0]-y[0],E[1]-y[1]),N=-(E[1]-y[1])/(D||1),O=(E[0]-y[0])/(D||1);for(let[z,W]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let B=0;B<8;B++)for(let j of[B/8,(B+1)/8]){let q=Math.min(9,D*.03)*4*j*(1-j);l.push(y[0]+(E[0]-y[0])*j+N*z,R+(L-R)*j+W-q,y[1]+(E[1]-y[1])*j+O*z)}}}if(!c.length)return null;let h=new $t;if(l.length){let M=new ee;M.setAttribute("position",new Yt(l,3)),this.wireMat=this.wireMat||new mr({color:2763822}),h.add(new Yo(M,this.wireMat))}if(!this.towerGeo){let M=[],v=new te(.12,.2,a,4);for(let[y,_]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let w=v.clone();w.rotateZ(-y*.08),w.rotateX(_*.08),w.translate(y*1.6,a/2,_*1.6),M.push(w)}for(let[y,_]of[[a-4,11],[a,8]]){let w=new Bt(_,.25,.25);w.translate(0,y,0),M.push(w)}for(let y=5;y<a;y+=6){let _=new Bt(3.4-y*.06,.12,3.4-y*.06);_.translate(0,y,0),M.push(_)}this.towerGeo=yd(M.map(y=>y.toNonIndexed())),this.towerMat=new Ht({color:9080982})}let f=new Re(this.towerGeo,this.towerMat,c.length),d=new Jt,m=new Ie,g=new H(0,1,0),x=new H(1,1,1),p=new H;return c.forEach(([M,v,y,_],w)=>{m.setFromAxisAngle(g,_),p.set(M,v-.5,y),d.compose(p,m,x),f.setMatrixAt(w,d),this.collision.addCircle(t.key,M,y,2.2,v+29)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:dd,11:fd,12:ud,13:gd,14:pd,15:md},i={};for(let o of e)n[o[0]]&&(i[o[0]]=i[o[0]]||[]).push(o);let r=new $t;for(let o of Object.keys(i)){let a=i[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,m=this.roads.nearest(h,f,25,p=>p.drivable);m&&(+o==10||+o==14)&&(d=Math.atan2(m.px-h,m.pz-f));let g=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(g)||(d=Math.PI-g*Math.PI/180);let x=m&&m.d<this.roads.ways[m.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[m.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(x?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,i=e.zmin+t.j*1e3,r=new $t;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<i||c>=i+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=ov[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let m=new Le(h);m.colorSpace=ve;let g=new Wo(new dr({map:m,depthTest:!0,fog:!1,transparent:!0})),x=this.terrain.height(l,c)+(a===1?32:a===12?6:18);g.position.set(l,x,c),g.scale.set(d/48*3.2,3.2,1),g.userData.lm=!0,r.add(g)}return r}updateLabels(t,e=!1){let n=[],i=e?1100:520;for(let a of this.tiles.values()){let l=a.parts.labels;if(l)for(let c of l.children){if(c.visible=!1,!this.labelsOn)continue;let u=c.position.distanceTo(t.position);u<i&&u>15&&n.push([u,c])}}n.sort((a,l)=>a[0]-l[0]);let r=[],o=this._lv||(this._lv=new H);for(let[a,l]of n){if(r.length>=7)break;if(o.copy(l.position).project(t),o.z>1||Math.abs(o.x)>1.05||Math.abs(o.y)>1.05)continue;let c=Math.max(1,a/120),u=l.userData.asp||(l.userData.asp=l.scale.x/l.scale.y),h=3.2*c/a*1.9,f=h*u*.56;r.some(d=>Math.abs(d[0]-o.x)<d[2]+f&&Math.abs(d[1]-o.y)<d[3]+h)||(r.push([o.x,o.y,f,h]),l.visible=!0,l.scale.set(u*3.2*c,3.2*c,1))}}};var Aa=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new dn(4500,32,16);this.uniforms={top:{value:new Nt},horizon:{value:new Nt},sunDir:{value:new H},sunCol:{value:new Nt},cloudCol:{value:new Nt},time:{value:0},cover:{value:.5}};let i=new Pe({uniforms:this.uniforms,side:We,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
        void main(){ vec3 d = normalize(vDir); float h = max(d.y, 0.0); vec3 c = mix(horizon, top, pow(h, 0.55));
          if (d.y < 0.0) c = horizon * 0.85;
          float s = max(dot(d, sunDir), 0.0);
          c += sunCol * (pow(s, 900.0) * 3.0 + pow(s, 12.0) * 0.25);
          if (d.y > 0.015) {
            // nuvole: rumore frattale proiettato su un piano alto
            vec2 uv = d.xz / (d.y + 0.12) * 1.6 + vec2(time * 0.006, time * 0.002);
            float n = fbm(uv);
            float cl = smoothstep(1.0 - cover, 1.0 - cover + 0.28, n) * smoothstep(0.015, 0.16, d.y);
            float shade = 0.72 + 0.28 * smoothstep(0.45, 0.9, fbm(uv + sunDir.xz * 0.25 + 3.1));
            c = mix(c, cloudCol * shade + sunCol * pow(s, 6.0) * 0.25, cl * 0.9);
          }
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.dome=new Ct(n,i),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new ee;o.setAttribute("position",new Yt(r,3)),this.starMat=new gr({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Zo(o,this.starMat),this.stars.frustumCulled=!1,this.stars.scale.setScalar(.3),t.add(this.stars),this.sun=new oa(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new ia(12375295,5922880,.9),t.add(this.hemi),t.fog=new Ho(13622246,400,2600),this.sunDir=new H,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),i=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(i),o=Math.asin(r),a=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=Bf.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new Nt(659490).lerp(new Nt(4030417),l),h=new Nt(1317418).lerp(new Nt(13229034),l).lerp(new Nt(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.28+.98*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.34*l+.05,.33*l+.05,.27*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new H(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var yi={x:0,y:1,z:0},av=()=>0;function vd(s,t){return av(s,t)}function Md(){return yi}var Lh={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},_d=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function Bi(s){return _d[s%_d.length]}function bd(s,t,e){let n=s.length,i=[],r=[];for(let l=0;l<n;l++){let[c,u]=s[l],h=t[l],f=e[l];i.push(-h,u,c,h,u,c),i.push(-h,u,c,-h,f,c),i.push(h,u,c,h,f,c),i.push(-h,f,c,h,f,c),i.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:i,idx:r}}function Dr({pos:s,idx:t}){let e=new ee;return e.setAttribute("position",new Yt(s,3)),e.setIndex(t),e.computeVertexNormals(),e}var wd=1.12,Nr=s=>s.wheelR*2+.02,Lr=.34;function lv(s){return s>=1?0:s<=Lr?1:.5*(1+Math.cos(Math.PI*(s-Lr)/(1-Lr)))}function Ed(s,t){let e=Nr(s),n=s.wheelR*wd;return t.map(([i])=>{let r=0;for(let o of s.wheelZ)r=Math.max(r,lv(Math.abs(i-o)/n));return s.sill+(e-s.sill)*r})}function Sd(s){let t=s.profile.map(r=>[r[0],r[1]]),e=s.widths.slice(),n=s.wheelR*wd,i=[];for(let r of s.wheelZ)for(let o of[-1,-Lr,Lr,1])i.push(r+o*n);i.sort((r,o)=>o-r);for(let r of i){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function Td(s){let t=Ur(s),e=s.tumble||0,n=[];for(let i of s.pillars||[]){let[r,o]=s.cab[i],a=s.cabw[i],l=o-t[i]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(nn(.04,l,s.bus?.16:.09,(a+e*.5+.004)*c,t[i]+l/2,r))}return n}function Ad(s){let t=Dh(s),e=Ur(s),n=[],i=e[0]+(s.bus?.22:.02),r=s.cab[0][0]-(s.bus?.3:.22);for(let o of[1,-1])n.push(nn(.16,.12,.07,(t.halfW+.08)*o,i,r));return n}function cv(s){let{profile:t,widths:e}=Sd(s);return Dr(bd(t,e,Ed(s,t)))}var Ur=s=>s.cabBase||s.cab.map(()=>s.beltY);function Rd(s,t=!1){let e=s.cab,n=s.cabw,i=Ur(s),r=s.tumble||0,[o,a]=s.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let m=0;m<e.length;m++){let[g,x]=e[m],p=n[m],M=p+r,v=i[m];u.push(-p,x,g,p,x,g),u.push(-M,v,g,-p,x,g),u.push(M,v,g,p,x,g),u.push(-M,v,g,M,v,g,-p,x,g,p,x,g)}let f=(m,g)=>m*10+g;for(let m=0;m<e.length-1;m++)t&&l&&m>=o&&m<c-1||h.push(f(m,0),f(m,1),f(m+1,0),f(m,1),f(m+1,1),f(m+1,0)),h.push(f(m,3),f(m+1,3),f(m,2),f(m+1,3),f(m+1,2),f(m,2)),h.push(f(m,5),f(m,4),f(m+1,5),f(m+1,5),f(m,4),f(m+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),Dr({pos:u,idx:h})}function Cd(s){let[t,e]=s.roofSlice;if(t===0&&e===0)return null;let n=s.cab.slice(t,s.cab.length+e),i=s.cabw.slice(t,s.cabw.length+e);if(n.length<2)return null;let r=s.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=i[c]*(1-.04*f)+.03,m=h+.006;o.push(-d,m,u,0,m+r,u,d,m,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var Ra=new Nt;function Id(){return{pos:[],idx:[],col:[]}}function Je(s,t,e){let n=t.attributes.position,i=s.pos.length/3;Ra.set(e);for(let o=0;o<n.count;o++)s.pos.push(n.getX(o),n.getY(o),n.getZ(o)),s.col.push(Ra.r,Ra.g,Ra.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)s.idx.push(i+r.getX(o));else for(let o=0;o<n.count;o++)s.idx.push(i+o);t.dispose()}function Pd(s){let t=new ee;return t.setAttribute("position",new Yt(s.pos,3)),t.setAttribute("color",new Yt(s.col,3)),t.setIndex(s.idx),t.computeVertexNormals(),t}var nn=(s,t,e,n,i,r)=>new Bt(s,t,e).translate(n,i,r),je={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},ki={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function Dh(s){let t=s.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),i=Math.max(...s.widths),r=s.widths[0],o=s.widths[s.widths.length-1],a=s.profile[0][1],l=s.profile[s.profile.length-1][1],c=a-s.sill,u=l-s.sill;return{noseZ:e,tailZ:n,halfW:i,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:s.sill+c*(s.bus?.42:.74),headH:c*.26,grilleY:s.sill+c*(s.bus?.14:.44),grilleH:c*.24,lampY:s.sill+u*(s.bus?.36:.66),lampH:u*.3,bumperY:s.sill+c*.12,bumperH:c*.3}}function hv(s){let{profile:t,widths:e}=Sd(s),n=bd(t,e,Ed(s,t)),i=Cd(s);if(i){let r=n.pos.length/3;n.pos.push(...i.pos);for(let o of i.idx)n.idx.push(r+o)}for(let r of[...Td(s),...Ad(s)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return Dr(n)}function uv(s){let t=Id(),e=Dh(s),n=Rd(s,!0);Je(t,n,je.glass);let i=s.wheelX-s.wheelW/2-.02,r=s.sill*.7;if(Je(t,nn(i*2,Nr(s)-r,(e.noseZ-e.tailZ)*.84,0,(Nr(s)+r)/2,(e.noseZ+e.tailZ)/2),je.under),Je(t,nn(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),je.bumper),Je(t,nn(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),je.bumper),s.bus){for(let o of[4.3,.6,-1.4])Je(t,nn(.04,1.14,1.05,-(e.halfW+.005),s.sill+.6,o),je.black);Je(t,nn(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),je.black);for(let o of[1,-1])Je(t,nn(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),je.lamp),Je(t,nn(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),je.tail)}else{Je(t,nn(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),je.black);let o=e.noseW*.56;for(let a of[1,-1])Je(t,nn(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),je.lamp),Je(t,nn(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),je.amber),Je(t,nn(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),je.tail);Je(t,nn(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),je.black)}return Pd(t)}function fv(s){let t=Id(),e=s.wheelR,n=s.wheelW;Je(t,new te(e,e,n,14).rotateZ(Math.PI/2),je.tyre);for(let i of[1,-1])Je(t,new Di(e*.6,12).rotateY(i*Math.PI/2).translate(i*(n/2+.004),0,0),je.rim);return Pd(t)}var Ca=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function Nh(s){let t=new mi({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:re}),e=new ce({vertexColors:!0,roughness:.35,metalness:.2,side:re}),n=new ce({vertexColors:!0,roughness:.75,metalness:.15}),i=new $t,r=Object.keys(ki),o={};for(let T of r)o[T]=[];for(let T=0;T<s;T++)o[Bi(T)].push(T);let a={},l=new Array(s);for(let T of r){let b=o[T].length;if(b===0)continue;let E=ki[T],R=new Re(hv(E),t,b),L=new Re(uv(E),e,b),D=new Re(fv(E),n,b*4);R.castShadow=!0,R.frustumCulled=!1,L.frustumCulled=!1,D.frustumCulled=!1,i.add(R,L,D),a[T]={body:R,trim:L,wheels:D,spec:E},o[T].forEach((N,O)=>{l[N]={type:T,local:O}})}let c=new Float32Array(s).fill(NaN),u=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),d=new Float32Array(s),m=new Jt,g=new Jt,x=new Jt,p=new Jt,M=new Nt,v=new H(0,1,0),y=new H,_=new Ie,w=new Jt;return{group:i,setAt:(T,b,E,R,L=0,D=vd(b,E))=>{let N=l[T];if(!N)return;let{body:O,trim:z,wheels:W,spec:B}=a[N.type],j=Md(b,E,D);y.set(j.x,j.y,j.z),_.setFromUnitVectors(v,y),w.makeRotationFromQuaternion(_),m.makeRotationY(R).premultiply(w).setPosition(b,D,E),O.setMatrixAt(N.local,m),z.setMatrixAt(N.local,m),M.set(Ca[L%Ca.length]),O.setColorAt(N.local,M);let q=Math.sin(R),ut=Math.cos(R),bt=0;if(c[T]===c[T]){let V=b-c[T],Q=E-u[T];V*V+Q*Q<36&&(bt=V*q+Q*ut);let Y=R-h[T];for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;let k=B.wheelZ[0]-B.wheelZ[1],tt=Math.abs(bt)>.004?Math.max(-.6,Math.min(.6,Y*k/bt)):0;d[T]+=(tt-d[T])*.3}c[T]=b,u[T]=E,h[T]=R,f[T]=(f[T]+bt/B.wheelR)%(Math.PI*2);let[At,st]=B.wheelZ,$=B.wheelX,vt=B.wheelR;for(let V=0;V<4;V++){let Q=V<2,Y=V%2?-$:$;g.makeRotationX(f[T]),Q&&d[T]&&(x.makeRotationY(d[T]),g.premultiply(x)),g.setPosition(Y,vt,Q?At:st),p.multiplyMatrices(m,g),W.setMatrixAt(N.local*4+V,p)}O.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0)},count:s,palette:Ca.length}}var Ds={tireGeo:new Fn(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new te(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new Fn(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new te(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new Bt(.05,.17,.045),brakeGeo:new te(.15,.15,.03,20).rotateZ(Math.PI/2)},Ns={tire:new ce({color:1316121,roughness:.85,metalness:.1}),rim:new ce({color:14672874,metalness:.5,roughness:.34}),lip:new ce({color:16054010,metalness:.6,roughness:.22}),hub:new ce({color:3816772,metalness:.45,roughness:.4}),brake:new ce({color:5527647,metalness:.3,roughness:.6})};function dv(){let s=new $t,t=new Ct(Ds.tireGeo,Ns.tire),e=new Ct(Ds.brakeGeo,Ns.brake);e.position.x=.04;let n=new Ct(Ds.rimLipGeo,Ns.lip);n.position.x=.095;let i=new Ct(Ds.rimBarrelGeo,Ns.rim),r=new Ct(Ds.hubGeo,Ns.hub);r.position.x=.085,s.add(t,e,i,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new Ct(Ds.spokeGeo,Ns.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),s.add(c)}return s}function Ld(s=12726047,{police:t=!1,body:e="car"}={}){let n=ki[e]||ki.car,i=new $t,r=t?15922423:s,o=Dh(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,m]=n.wheelZ,g=n.wheelX,x=n.wheelR,p=Ur(n),M=n.tumble||0,v=new mi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),y=new ce({color:1118742,roughness:.6,metalness:.3}),_=new ce({color:15396338,metalness:.55,roughness:.22});i.add(new Ct(cv(n),v));let w=new ce({color:723982,roughness:1}),S=g-n.wheelW/2-.02;i.add(new Ct(new Bt(S*2,Nr(n)-.1,(a-l)*.8).translate(0,(Nr(n)+.1)/2,(a+l)/2),w));let T=new ce({color:1710879,roughness:.65,metalness:.2}),b=Math.abs(d-m)-n.wheelR*2.2;if(b>.3)for(let Q of[1,-1]){let Y=new Ct(new Bt(.06,.13,b),T);Y.position.set((c-.05)*Q,n.sill+.04,(d+m)/2),i.add(Y)}let E=new Fn(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[Q,Y]of[[g,d],[-g,d],[g,m],[-g,m]]){let k=new Ct(E,v);k.position.set(Q+.02*Math.sign(Q),x,Y),i.add(k)}let R=new ce({color:3948616,roughness:.85,metalness:.05});{let Q=n.cab,Y=n.cabw,k=[],tt=[];for(let I=0;I<Q.length;I++){let[ht,et]=Q[I],it=Y[I]*.9,Z=(Y[I]+M)*.9;k.push(-Z,p[I]-.02,ht,Z,p[I]-.02,ht,-it,et-.06,ht,it,et-.06,ht)}let F=(I,ht)=>I*4+ht;for(let I=0;I<Q.length-1;I++)tt.push(F(I,2),F(I+1,2),F(I,3),F(I,3),F(I+1,2),F(I+1,3)),tt.push(F(I,0),F(I,2),F(I+1,0),F(I+1,0),F(I,2),F(I+1,2)),tt.push(F(I,1),F(I+1,1),F(I,3),F(I+1,1),F(I+1,3),F(I,3));tt.push(F(0,0),F(0,1),F(0,2),F(0,1),F(0,3),F(0,2));let K=Q.length-1;tt.push(F(K,0),F(K,2),F(K,1),F(K,1),F(K,2),F(K,3)),i.add(new Ct(Dr({pos:k,idx:tt}),R))}let L=new mi({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:re});i.add(new Ct(Rd(n,!0),L));let D=new mi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),N=Cd(n);if(N){i.add(new Ct(Dr(N),D));let[Q]=n.roofSlice,[Y,k]=n.cab[Q],tt=n.cabw[Q],F=new Ct(new Bt(tt*2,.03,.06),D);F.position.set(0,k-.005,Y+.02),i.add(F)}let O=new ce({color:13225430,metalness:.7,roughness:.28}),z=n.cab[0][0],W=n.cab[n.cab.length-1][0],B=Math.max(...n.cabw)+M;for(let Q of[1,-1]){let Y=new Ct(new Bt(.025,.03,Math.abs(z-W)-.08),O);Y.position.set((B+.01)*Q,f+.02,(z+W)/2),i.add(Y)}let j=new ce({color:r,metalness:.35,roughness:.42});for(let Q of Td(n))i.add(new Ct(Q,j));let q=new ce({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),ut=new ce({color:1513500,roughness:.55,metalness:.25});if(n.bus){let Q=new Ct(new Bt(u*1.3,.26,.05),new ce({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));Q.position.set(0,2.54,a-.01),i.add(Q);for(let tt of[1,-1]){let F=new Ct(new Bt(.36,.22,.06),new ce({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));F.position.set(.74*tt,o.headY,a-.02),i.add(F);let K=new Ct(new Bt(.4,.26,.02),_);K.position.set(.74*tt,o.headY,a-.05),i.add(K);let I=new Ct(new Bt(.32,.34,.06),q);I.position.set(.86*tt,o.lampY,l+.03),i.add(I)}let Y=new Ct(new Bt(u*1.92,o.bumperH,.12),ut);Y.position.set(0,o.bumperY,a-.05);let k=new Ct(new Bt(h*1.92,o.bumperH,.12),ut);k.position.set(0,o.bumperY,l+.05),i.add(Y,k);for(let tt of[4.3,.6,-1.4]){let F=new Ct(new Bt(.04,1.14,1.05),y);F.position.set(-(c+.005),n.sill+.6,tt),i.add(F)}}else{let Q=u*1.1,Y=new Ct(new Bt(Q,o.grilleH,.07),y);Y.position.set(0,o.grilleY,a-.04),i.add(Y);let k=new ce({color:2829876,metalness:.6,roughness:.4});for(let X=0;X<3;X++){let J=new Ct(new Bt(Q-.03,.02,.02),k);J.position.set(0,o.grilleY-.05+X*.05,a-.015),i.add(J)}let tt=new Ct(new Bt(u*1.4,.09,.05),y);tt.position.set(0,n.sill+.05,a-.05),i.add(tt);let F=new ce({color:658189,roughness:.5,metalness:.2}),K=new ce({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),I=new mi({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),ht=new ce({color:13796895,roughness:.35,metalness:.1}),et=u*.56;for(let X of[1,-1]){let J=new Ct(new Bt(.34,o.headH,.1),F);J.position.set(et*X,o.headY,a-.09),i.add(J);let ft=new Ct(new Bt(.28,.12,.02),K);ft.position.set(et*X,o.headY,a-.045),i.add(ft);let G=new Ct(new Bt(.35,.16,.02),_);G.position.set(et*X,o.headY,a-.03),i.add(G);let lt=new Ct(new Bt(.3,.13,.015),I);lt.position.set(et*X,o.headY,a-.018),i.add(lt);let pt=new Ct(new Bt(.12,.11,.06),ht);pt.position.set((et+.24)*X,o.headY,a-.05),i.add(pt)}let it=new Ct(new Di(.05,16),_);it.position.set(0,o.grilleY,a-.003),i.add(it);let Z=o.lampY,Mt=l+.035;for(let X of[1,-1]){let J=new Ct(new Bt(h*.68,.2,.04),new ce({color:1180422,roughness:.5,metalness:.2}));J.position.set(h*.58*X,Z,Mt+.03),i.add(J);let ft=new Ct(new Bt(h*.6,.17,.07),q);ft.position.set(h*.58*X,Z,Mt),i.add(ft)}let ct=new Ct(new Bt(h*.56,.14,.04),new ce({color:1118742,roughness:.6,metalness:.3}));ct.position.set(0,Z-.03,Mt+.03),i.add(ct);let P=new Ct(new Bt(h*.44,.07,.02),_);P.position.set(0,Z-.03,Mt+.005),i.add(P);let C=(X,J,ft)=>{let G=new Ct(new Bt(X,o.bumperH,.09),ut);return G.position.set(0,o.bumperY,J+ft*.04),G};i.add(C(u*1.92,a,-1),C(h*1.92,l,1));for(let X of[1,-1]){let J=new Ct(new te(.045,.045,.06,12).rotateX(Math.PI/2),_);J.position.set(c*.42*X,n.sill-.02,l+.05),i.add(J)}}let bt=new ce({color:r,metalness:.5,roughness:.35}),At=new ce({color:547,metalness:.9,roughness:.1});for(let Q of Ad(n))i.add(new Ct(Q,bt));{let Q=Ur(n)[0]+(n.bus?.22:.02),Y=n.cab[0][0]-(n.bus?.3:.22);for(let k of[1,-1]){let tt=new Ct(new Bt(.02,.09,.05),At);tt.position.set((c+.16)*k,Q,Y),i.add(tt)}}let st=[["wheelFL",g,d],["wheelFR",-g,d],["wheelRL",g,m],["wheelRR",-g,m]],$=x/.3;for(let[Q,Y,k]of st){let tt=new $t;tt.name=Q,tt.position.set(Y,x,k);let F=dv();F.scale.setScalar($),tt.add(F),i.add(tt)}if(t){let Q=Math.max(...n.cab.map(F=>F[1])),Y=new Ct(new Bt(.66,.05,.3),y);Y.position.set(0,Q+.05,.05),i.add(Y);let k=new Ct(new Bt(.3,.1,.3),new ce({color:2245836,emissive:2250239,emissiveIntensity:1.6}));k.position.set(-.17,Q+.11,.05);let tt=new Ct(new Bt(.3,.1,.3),new ce({color:13378082,emissive:16720418,emissiveIntensity:1.6}));tt.position.set(.17,Q+.11,.05),i.add(k,tt),i.userData.lightbar={blue:k.material,red:tt.material}}let vt=new sa(16773583,0,80,.62,.5,1.2);vt.position.set(0,o.headY+.2,a-.05),vt.target.position.set(0,.2,a+10),i.add(vt,vt.target),i.userData.headlight=vt;let V=new ra(16722450,0,1.4,3.4);return V.position.set(0,o.lampY,l+.05),i.add(V),i.userData.tailGlow=V,i.traverse(Q=>{Q.isMesh&&(Q.castShadow=!0)}),i}function Dd(s,t,{sz:e=1,sy:n=1,sx:i=1,wheelR:r}={}){let o=ki[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*i),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*i),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*i,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),ki[s]=a,a}function Nd(s){return ki[s]}var Uh=Ca;var zr=9.81,Ud=1.2,zd={id:"plane",kind:"plane",name:"Aereo da turismo",desc:"Monomotore biposto ad ala alta: decolla, sorvola la Brianza e atterra su un prato o una strada dritta.",color:"#f4f4f0",stripe:"#c0392b",L:7.3,W:10.2,H:2.6,wb:1.6,mass:760,kw:85,rpmMax:2700,thrust:3600,cdS:.9,kInd:31e4,wingS:15,vStall:20,vRot:24,vNe:75},Ia=class{constructor(t,e){this.spec=t,this.world=e,this.isPlane=!0,this.x=0,this.y=0,this.z=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.bank=0,this.lever=0,this.throttle=0,this.brake=0,this.steer=0,this.gear=1,this.rpm=0,this.slip=0,this.impact=0,this.wheelSpinAngle=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.agl=0,this.surface=null,this.stall=!1}ground(t,e,n=1e9){return this.world.roads.surfaceAt(t,e,n).h}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=this.vy=0,this.bank=0,this.pitch=0,this.roll=0,this.lever=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.surface=this.world.roads.surfaceAt(t,e,1e9),this.y=this.surface.h}launch(t=250,e=48){this.y=this.ground(this.x,this.z)+t,this.u=e,this.vy=0,this.pitch=.03,this.bank=0,this.lever=.65,this.onGround=!1,this.airborne=!0,this.crashed=0,this.surface=null}update(t,e){for(let i=0;i<3;i++)this.step(t/3,e);this.roll=-this.bank,this.rpm=700+this.lever*2e3+Math.min(300,this.u*4),this.throttle=this.lever,this.wheelSpinAngle+=(this.onGround?this.u/.3:0)*t,this.propAngle=(this.propAngle||0)+this.rpm/60*Math.PI*2*t}step(t,e){let n=this.spec,i=this.world;if(this.crashed>0){this.crashed-=t,this.u=0,this.crashed<=0&&(this.launch(),this.relaunched=!0);return}this.lever=Math.max(0,Math.min(1,this.lever+(e.throttle-e.brake)*t*.6));let r=n.thrust*this.lever*Math.max(0,1-this.u/(n.vNe*1.05)),o=.5*Ud*n.cdS*this.u*this.u+(this.onGround?0:n.kInd/Math.max(100,this.u*this.u)),a=Math.sin(this.h),l=Math.cos(this.h),c=this.ground(this.x,this.z,this.y+2);if(this.agl=this.y-c,this.onGround){this.brake=e.handbrake?1:0;let M=.03*n.mass*zr*Math.sign(this.u),v=(e.handbrake?.55:0)*n.mass*zr*Math.sign(this.u);this.u+=(r-o-M-v)/n.mass*t,Math.abs(this.u)<.08&&this.lever<.05&&(this.u=0),this.u<0&&(this.u=0),this.steer+=(e.steer*.5*Math.min(1,12/Math.max(1,this.u))-this.steer)*Math.min(1,t*6),this.h+=this.u*Math.tan(this.steer)/n.wb*t*Math.max(.15,1-this.u/n.vRot);let y=this.u>n.vRot*.85?Math.max(0,e.pitch)*.2:0;this.pitch+=(y-this.pitch)*Math.min(1,t*2),this.bank*=Math.exp(-t*8),this.x+=a*this.u*t,this.z+=l*this.u*t,this.collideGround(),this.surface=i.roads.surfaceAt(this.x,this.z,this.y+1),this.y=this.surface.h,this.vy=0;let _=Math.atan2(this.ground(this.x+a*2,this.z+l*2,this.y+3)-this.ground(this.x-a*2,this.z-l*2,this.y+3),4);this.dynPitch+=(_-this.dynPitch)*Math.min(1,t*8);let w=.5*Ud*n.wingS*this.u*this.u*(.35+this.pitch*5)/(n.mass*zr);this.pitch>.08&&w>1&&(this.onGround=!1,this.airborne=!0,this.surface=null,this.vy=1);return}this.dynPitch*=Math.exp(-t*3);let u=Math.min(1,(this.u/n.vStall)**2);this.stall=u<.98;let h=1.3*Math.min(1,this.u/25);Math.abs(e.steer)>.05?this.bank+=e.steer*h*t:this.bank*=Math.exp(-t*.9),this.bank=Math.max(-1.05,Math.min(1.05,this.bank));let f=.65*Math.min(1,this.u/30);if(this.pitch+=e.pitch*f*t,Math.abs(e.pitch)<.05){let M=Math.max(-.16,Math.min(.04,.02+.5*(this.u-1.35*n.vStall)/n.vStall));this.pitch+=(M-this.pitch)*Math.min(1,t*.5)}this.stall&&(this.pitch-=(1-u)*.9*t),this.pitch=Math.max(-.75,Math.min(.55,this.pitch)),this.w=zr*Math.tan(this.bank)/Math.max(15,this.u)*u,this.h+=this.w*t;let d=Math.atan2(this.vy,Math.max(1,this.u));this.u+=((r-o)/n.mass-zr*Math.sin(d))*t,this.u=Math.max(5,this.u);let m=this.u*Math.sin(this.pitch)*u*Math.cos(this.bank)-(1-u)*9-(1-Math.cos(this.bank))*3.5;this.vy+=(m-this.vy)*Math.min(1,t*1.6),this.x+=a*this.u*t,this.z+=l*this.u*t,this.y+=this.vy*t;let g=c+1800;this.y>g&&(this.y=g,this.vy=Math.min(0,this.vy));let x=i.terrain;if(x.inside(this.x,this.z)||(this.x=Math.max(x.x0+50,Math.min(x.x0+(x.nx-1)*x.step-50,this.x)),this.z=Math.max(x.z0+50,Math.min(x.z0+(x.nz-1)*x.step-50,this.z)),this.h+=Math.PI*.75*t*4,this.outside=1),this.agl<60&&i.collision.topAt(this.x,this.z,1.5)>this.y+.3){this.crash("Schianto contro un ostacolo!");return}let p=this.ground(this.x,this.z,this.y+1);if(this.y<=p){let M=(this.ground(this.x+a*3,this.z+l*3,this.y+4)-p)/3,v=this.vy-M*this.u,y=v<-4.2||Math.abs(this.bank)>.35||this.pitch<-.18||this.u>40;if(this.y=p,y){this.crash(v<-4.2&&M>.12?"Schianto contro il pendio!":this.u>40?"Atterraggio troppo veloce!":"Atterraggio troppo duro!");return}this.onGround=!0,this.airborne=!1,this.impact=Math.min(1,-this.vy/6),this.vy=0,this.bank=0,this.touchdown=!0}}collideGround(){let t=this.world,e=1.6,n=t.collision.resolveCircle(this.x,this.z,e),i=t.traffic?t.traffic.resolveCircle(this.x,this.z,e):null;i&&(!n||i.depth>n.depth)&&(n=i),n&&(this.x+=n.nx*n.depth,this.z+=n.nz*n.depth,this.u>1&&(this.impact=Math.max(this.impact,Math.min(1,this.u/10))),this.u*=.3)}crash(t){this.crashed=2.2,this.crashMsg=t,this.impact=1,this.vy=0,this.lever=0,this.u=0,this.y=this.ground(this.x,this.z,this.y+1)}};function Fd(s,t={}){let e=new $t,n=new $t,i=new wn({color:t.color||s.color,shininess:70,specular:5592405}),r=new wn({color:s.stripe,shininess:50}),o=new Ht({color:1908772}),a=new wn({color:2240576,shininess:120,specular:10070715,transparent:!0,opacity:.75}),l=.95,c=($,vt,V,Q,Y,k=0,tt=0,F=0)=>{let K=new Ct($,vt);return K.position.set(V,Q,Y),K.rotation.set(k,tt,F),K.castShadow=!0,K.receiveShadow=!0,n.add(K),K},u=[[2.35,.55,.6],[1.6,1.05,1.15],[.2,1.1,1.25],[-1.2,.95,1],[-3,.45,.55],[-4.6,.22,.38]],h=[];for(let[$,vt,V]of u)h.push({z:$,hw:vt,hh:V});let f=[],d=[],m=$=>[[$.hw,-$.hh*.45],[$.hw*.92,$.hh*.55],[-$.hw*.92,$.hh*.55],[-$.hw,-$.hh*.45],[-$.hw*.6,-$.hh*.55],[$.hw*.6,-$.hh*.55]];h.forEach($=>{for(let[vt,V]of m($))f.push(vt*.5,l+.55+V*.5+($.z<-1?(-1-$.z)*.12:0),$.z)});let g=6;for(let $=0;$<h.length-1;$++)for(let vt=0;vt<g;vt++){let V=$*g+vt,Q=$*g+(vt+1)%g,Y=V+g,k=Q+g;d.push(V,Y,Q,Q,Y,k)}for(let $=1;$<g-1;$++){d.push(0,$,$+1);let vt=(h.length-1)*g;d.push(vt,vt+$+1,vt+$)}let x=new ee;x.setAttribute("position",new Yt(f,3)),x.setIndex(d),x.computeVertexNormals();let p=new Ct(x,i);p.castShadow=!0,n.add(p);let M=[p];for(let $ of[1,-1])M.push(c(new Bt(.02,.16,5.6),r,$*.53,l+.45,-.9,0,$*.055,0));M.push(c(new te(.2,.3,.35,12),i,0,l+.52,2.5,Math.PI/2)),M.push(c(new Ss(.11,.22,10),o,0,l+.52,2.78,Math.PI/2));let v=new $t;v.position.set(0,l+.52,2.72),n.add(v);let y=new Ct(new Bt(1.85,.14,.04),o);y.castShadow=!0,v.add(y),M.push(y);let _=new Ct(new Di(.93,24),new Ae({color:2236962,transparent:!0,opacity:.12,side:re}));v.add(_),M.push(c(new Bt(1.02,.42,.04),a,0,l+1,1.5,-.55));for(let $ of[1,-1])M.push(c(new Bt(.03,.38,1.3),a,$*.535,l+.88,.55));c(new Bt(s.W,.13,1.45),i,0,l+1.18,.45);for(let $ of[1,-1]){c(new Bt(.5,.14,1.46),r,$*(s.W/2-.25),l+1.18,.45);let vt=c(new te(.035,.035,2.25,6),o,$*1.35,l+.7,.55,0,0,$*1.02);vt.castShadow=!0}c(new Bt(3.4,.08,.85),i,0,l+.8,-4.25);let w=new Ts;w.moveTo(0,0),w.lineTo(-1.1,0),w.lineTo(-1.25,1.35),w.lineTo(-.55,1.35),w.lineTo(0,0);let S=new _r(w,{depth:.07,bevelEnabled:!1}),T=c(S,r,.035,l+.82,-3.55,0,-Math.PI/2,0);T.castShadow=!0;let b=new te(.21,.21,.14,14);b.rotateZ(Math.PI/2);let E=[];for(let[$,vt,V]of[[0,1.95,!0],[1,-.1,!1],[-1,-.1,!1]]){let Q=new $t;Q.position.set($,.21,vt),Q.rotation.order="YXZ",n.add(Q);let Y=new Ct(b,o);Y.castShadow=!0,Q.add(Y),c(new Bt(.05,l+.3,.06),o,$*.75,l*.5+.1,vt,0,0,-$*.35),E.push({pivot:Q,front:V})}e.add(n);let R=new $t,L=new H(.24,l+.9,1),D=new Ct(new Bt(1,.26,.12),new Ht({color:2829616}));D.position.set(0,l+.52,1.72),R.add(D);let N=.5,O=.26,z=l+.66,W=l+.76,B=1.78,j=2.62,q=new ee;q.setAttribute("position",new Yt([-N,z,B,N,z,B,O,W,j,-N,z,B,O,W,j,-O,W,j],3)),q.computeVertexNormals(),R.add(new Ct(q,new wn({color:t.color||s.color,shininess:60,side:re})));let ut=document.createElement("canvas");ut.width=256,ut.height=96;let bt=new Le(ut);bt.colorSpace=ve;let At=new Ct(new en(.36,.135),new Ae({map:bt,toneMapped:!1}));At.position.set(.2,l+.58,1.655),R.add(At),At.lookAt(L);let st=new Ct(new Bt(.3,.045,.04),new Ht({color:1381653}));return st.position.set(.24,l+.4,1.4),R.add(st),R.visible=!1,e.add(R),e.userData.eye=L.clone(),{root:e,ext:n,wheels:E,prop:v,headlight:null,tailGlow:null,interior:R,steeringWheel:st,dashCanvas:ut,dashTex:bt,exterior:M,isPlane:!0}}function Od(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.textAlign="center",a.fillStyle=o?"#ff5a4a":"#9fe3ff",a.font="bold 34px Arial",a.fillText(String(Math.round(e)),52,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",52,70),a.fillStyle="#ffd36b",a.font="bold 30px Arial",a.fillText(String(Math.round(n)),140,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m dal suolo",140,70),a.fillStyle=i>=0?"#7dff9a":"#ffb36b",a.font="bold 20px Arial",a.fillText((i>=0?"+":"")+i.toFixed(1),214,46),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m/s",214,64),a.fillStyle="#1e2a30",a.fillRect(176,76,70,8),a.fillStyle="#59c9ff",a.fillRect(176,76,70*r,8),o&&(a.fillStyle="#ff5a4a",a.font="bold 13px Arial",a.fillText("STALLO",52,88)),t.needsUpdate=!0}var Us=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];Us.push(zd);for(let s of Us)s.base!=="bus"&&s.kind!=="plane"&&Dd("bds-"+s.id,s.base,{sz:s.sz,sy:s.sy,sx:s.sx,wheelR:s.wheelR});var pv=s=>s.base==="bus"?"bus":"bds-"+s.id,Bd=new Ht({color:2237478});function kd(s,t={}){let e=new $t,n=pv(s),i=Nd(n),r=Ld(new Nt(t.color||s.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((m,g)=>{let x=r.getObjectByName(m);return x&&(x.rotation.order="YXZ"),{pivot:x,front:g<2}}).filter(m=>m.pivot),l=i.beltY,c=Math.max(...i.cab.map(m=>m[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new $t;let m=i.widths.reduce(($,vt)=>Math.max($,vt),0)*2,g=m*.22,[x,p]=i.cab[0],M=Math.min(c-.17,Math.max(l+.2,l+.55*(c-l))),v=x-.95,y=new H(g,M,v),_=new Ht({color:2829616}),w=new Ht({color:3816512,side:re}),S=v+.6,T=Math.min(M-.2,p+.04),b=Math.max(.4,x-S),E=new Ct(new Bt(m-.1,.42,b),_);E.position.set(0,T-.21,S+b/2),u.add(E);let R=M-.18-T;if(R>.04){let $=new Ct(new Bt(.56,R+.05,.3),_);$.position.set(g,T+R/2-.02,S+.15),u.add($)}f=document.createElement("canvas"),f.width=256,f.height=96,d=new Le(f),d.colorSpace=ve;let L=new Ct(new en(.4,.15),new Ae({map:d,toneMapped:!1}));L.position.set(g,M-.28,S-.005),L.lookAt(y),u.add(L),h=new $t,h.add(new Ct(new Fn(.185,.02,8,32),new Ht({color:1381653})));for(let $ of[0,2.1,4.2]){let vt=new Ct(new Bt(.17,.028,.02),Bd);vt.position.set(Math.cos($-Math.PI/2)*.085,Math.sin($-Math.PI/2)*.085,0),vt.rotation.z=$-Math.PI/2,h.add(vt)}let D=new Ct(new te(.055,.055,.06,12),Bd);D.rotation.x=Math.PI/2,h.add(D);let N=new $t;N.position.set(g,M-.34,v+.47),N.rotation.x=-.42,N.add(h);let O=new Ct(new te(.035,.045,.3,8),_);O.rotation.x=Math.PI/2-.42,O.position.set(0,-.06,.16),N.add(O),u.add(N);let z=i.cab[1]?i.cab[1][0]:x-.5,W=i.cab[1]?i.cab[1][1]:c,B=i.cab[i.cab.length-2][0];for(let $ of[1,-1]){let vt=new H($*(m/2-.1),p,x-.05),V=new H($*(m/2-.16),W-.03,z),Q=new Ct(new Bt(.08,vt.distanceTo(V),.1),w);Q.position.copy(vt).add(V).multiplyScalar(.5),Q.lookAt(V),Q.rotateX(Math.PI/2),u.add(Q);let Y=new Ct(new en(Math.max(.6,x-v+.6),l-.3),w);Y.rotation.y=Math.PI/2,Y.position.set($*(m/2-.06),(l+.3)/2,(x+v-.6)/2),u.add(Y)}let j=new Ct(new en(m-.1,Math.max(.5,z-.12-B)),new Ht({color:11841445,emissive:3157546,side:re}));j.rotation.x=Math.PI/2,j.position.set(0,Math.min(c,W+.02)-.04,(z-.12+B)/2),u.add(j);let q=new Ct(new Bt(.15,.045,.02),new Ht({color:5593180}));q.position.set(0,W-.075,z-.02),u.add(q);let ut=i.profile[1]||i.profile[0],bt=m/2-.18,At=new ee;At.setAttribute("position",new Yt([-bt,p-.02,x,bt,p-.02,x,bt,ut[1],ut[0],-bt,p-.02,x,bt,ut[1],ut[0],-bt,ut[1],ut[0]],3)),At.computeVertexNormals();let st=new Ct(At,new wn({color:t.color||s.color,shininess:60,specular:4473924,side:re}));u.add(st),u.visible=!1,e.add(u),e.userData.eye=y.clone()}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function Hd(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/i);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var Pa=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let at=r;r=o,o=at}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),m=Math.cos(this.h),g=-Math.sin(this.h),x=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=x;let p=!!x.road,M=p?i.roads.ways[x.road.wi]:null,v=!1;if(!p){let at=i.terrain.landClass(this.x,this.z);v=at==="parking"||at==="parking_space"||at==="pedestrian"}let y=n.grip*(p?M.flags&64?.78:1:v?.95:.68),_=p?M.flags&64?.03:.013:v?.016:.06;n.drive==="A"&&!p&&(y*=1.12,_*=.7),this.mu=y;let w=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,T=Math.atan2(w-S,this.L),b=n.W*.8,E=i.roads.surfaceAt(this.x+m*b/2,this.z+g*b/2,this.y+.5).h,R=i.roads.surfaceAt(this.x-m*b/2,this.z-g*b/2,this.y+.5).h,L=Math.atan2(E-R,b),D=this.m*9.81*Math.cos(T),N=D*this.b/this.L-this.m*this.ax*this.hcg/this.L,O=D*this.a/this.L+this.m*this.ax*this.hcg/this.L;N=Math.max(N,D*.15),O=Math.max(O,D*.15),this.airborne&&(N=O=0);let z=this.gear>0?n.gears[this.gear-1]:3.6,W=Math.abs(this.u)/n.wheelR*30/Math.PI,B=W*z*n.final,j=900+r*2600;if((this.gear===1||this.gear===-1)&&B<j&&(B=B*.4+j*.6),B=Math.max(800,B),this.rpm+=(B-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let at=n.rpmMax*(.55+.37*r);if(this.rpm>at&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let dt=W*n.gears[this.gear-2]*n.final,mt=n.rpmMax*(.28+.3*r);this.rpm<mt&&dt<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let q=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(q=this.torque(this.rpm)*z*n.final*.88/n.wheelR*r),this.gear<0&&(q=this.u<-7?0:-q*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(q-=Math.sign(this.u)*this.torque(this.rpm)*.12*z*n.final/n.wheelR*(this.rpm/n.rpmMax));let ut=n.drive==="F"?N:n.drive==="R"?O:N+O,bt=y*ut;this.wheelSpin=Math.abs(q)>bt?Math.min(1,(Math.abs(q)-bt)/bt):0,q=Math.max(-bt,Math.min(bt,q));let At=0,st=n.brake*o;Math.abs(this.u)>.05&&(At=-Math.sign(this.u)*Math.min(st,y*(N+O)));let $=0;this.handbrake>0&&Math.abs(this.u)>.05&&($=-Math.sign(this.u)*y*O*.8*this.handbrake);let vt=Math.max(Math.abs(this.u),.5),V=this.u>=0?1:-1,Q=Math.atan2(this.v+this.a*this.w,vt)-this.steer*V,Y=Math.atan2(this.v-this.b*this.w,vt),k=(at,dt,mt)=>{let Tt=-(12*dt)*at,Gt=mt*dt;return Math.abs(Tt)>Gt&&(Tt=Math.sign(Tt)*Gt*Math.max(.75,1-.25*(Math.abs(Tt)/Gt-1))),Tt},tt=y*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(tt*=1-.35*this.wheelSpin);let F=k(Q,N,y),K=k(Y,O,tt);this.slip=Math.max(Math.abs(Y),Math.abs(Q)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let I=-.5*1.2*n.cda*this.u*Math.abs(this.u),ht=Math.abs(this.u)>.05?-Math.sign(this.u)*_*(N+O):0,et=-this.m*9.81*Math.sin(T),it=this.m*9.81*Math.sin(L)*.5,Z=Math.cos(this.steer),Mt=Math.sin(this.steer),ct=q+At+$+I+ht+et-F*Mt,P=K+F*Z+it;this.airborne&&(ct=I+et*0,P=0);let C=ct/this.m+this.v*this.w,X=P/this.m-this.u*this.w,J=this.airborne?0:(this.a*F*Z-this.b*K)/this.I,ft=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let at=1.1*y*9.81/Math.abs(this.u);Math.abs(this.w)>at&&(this.w+=(Math.sign(this.w)*at-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=C*t,this.v+=X*t,this.w+=J*t,Math.sign(ft)!==Math.sign(this.u)&&Math.abs(q)<1&&ft!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(et)<st+_*D+1500&&(this.u=0);let G=Math.min(1,Math.abs(this.u)/4),lt=this.u*Math.tan(this.steer)/this.L;this.w=this.w*G+lt*(1-G),this.v*=1-(1-G)*Math.min(1,t*8),this.ax=this.ax+(ct/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(P/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let pt=f*this.u+m*this.v,_t=d*this.u+g*this.v;this.x+=pt*t,this.z+=_t*t,this.collide();let It=i.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=It&&(this.y=It,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-It>.35&&this.y-It<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(It-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=It),this.pitch+=(T-this.pitch)*Math.min(1,t*10),this.roll+=(L-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),i=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+i*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),m=n*this.u+f*this.v,g=i*this.u+d*this.v,x=m*u.nx+g*u.nz;x<0&&(m-=1.25*x*u.nx,g-=1.25*x*u.nz,m*=.8,g*=.8,this.impact=Math.max(this.impact,Math.min(1,-x/12)),this.u=m*n+g*i,this.v=m*f+g*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var La=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),i=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(i?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set,padThr:0,padBrk:0,stickY:0};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let u=c.axes,h=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,m=x=>{if(x===void 0)return 0;let p=d.invertPedals?(1-x)/2:(x+1)/2;return p<.03?0:Math.min(1,p)},g=u[d.steerAxis]||0;(Math.abs(g)>.005||m(u[d.throttleAxis])>0||m(u[d.brakeAxis])>0)&&(a.steer=-g,a.analogWheel=!0,a.throttle=Math.max(a.throttle,m(u[d.throttleAxis])),a.brake=Math.max(a.brake,m(u[d.brakeAxis])))}else if(c.mapping==="standard"){let d=u[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,h(7)),a.brake=Math.max(a.brake,h(6)),a.padThr=h(7),a.padBrk=h(6),Math.abs(u[1]||0)>.1&&(a.stickY=u[1]),(h(0)>.5||h(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,m)=>{d.pressed&&!f[m]&&a.buttons.add(m)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var zh=72,vi=1e6,Gd=14,Da=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new $t,this.fleet=Nh(zh);let e=t.settings&&t.settings.parked||288;this.parkFleet=Nh(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=zh-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,vi,vi,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,vi,vi,0,0,-100);let l=Bi(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),i.fillStyle=r,i.fillRect(0,0,32,64),this.beamMat=new Ae({map:new Le(n),transparent:!0,blending:fi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new en(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Re(o,this.beamMat,zh),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new Jt,this._q=new Ie,this._up=new H(0,1,0),this._p=new H,this._s=new H(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,vi,vi,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let i=0;i<6;i++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,M=>M.drivable&&M.cls<=kt.LIVING&&!(M.flags&Lt.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(Bi(this.free[h])==="bus"&&u.cls>kt.TERTIARY&&(h=this.free.findIndex(M=>Bi(M)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],m=(f>0?c.t:1-c.t)*d;if(this.cars.some(M=>Math.hypot(M.x-c.px,M.z-c.pz)<25))continue;let g=this.free.splice(h,1)[0],x=Bi(g),p={slot:g,type:x,box:Lh[x],colour:Math.floor(Math.random()*Gd),wi:c.wi,k:c.k,dir:f,s:m,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(x==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(p),this.cars.push(p),this.place(p,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]);for(let f=e.adjStart[r];f<e.adjStart[r+1];f++){let d=e.adjWay[f],m=e.adjPos[f],g=e.ways[d];if(!g.drivable||g.cls>kt.LIVING||g.flags&Lt.PRIVATE||t.type==="bus"&&g.cls>kt.UNCLASSIFIED)continue;let x=[];m<g.nodes.length-1&&x.push({wi:d,k:m,dir:1,to:g.nodes[m+1]}),m>0&&!g.oneway&&x.push({wi:d,k:m-1,dir:-1,to:g.nodes[m-1]});for(let p of x){if(p.wi===t.wi&&p.k===t.k&&p.dir===-t.dir)continue;let v=Math.atan2(e.nx[p.to]-e.nx[r],e.nz[p.to]-e.nz[r])-c;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let y=1+Math.max(0,6-g.cls)*.5;Math.abs(v)<.4&&(y*=2.5),Math.abs(v)>2.6&&(y*=.05),l.push({...p,turn:v,wgt:y})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&Lt.ROUNDABOUT&&!(n.flags&Lt.ROUNDABOUT)||n.flags&Lt.LINK&&!(h.flags&Lt.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,i=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,m=(u-l)/h,g=n.laneCenter(i,t.dir),x=a+d*t.s-m*g,p=l+m*t.s+d*g,M=t.dir>0?f:1-f,v=n.heightOn(t.wi,t.k,M,x,p),y=Math.min(1,(t.s+2)/h),_=t.dir>0?y:1-y,w=n.heightOn(t.wi,t.k,_,x+d*(y-f)*h,p+m*(y-f)*h),S=y>f?(w-v)/((y-f)*h):t.slope;t.slope+=(S-t.slope)*Math.min(1,(e||1)*5),t.x=x,t.z=p,t.y=v;let T=Math.atan2(d,m);e===0&&(t.h=T);let b=T-t.h;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;t.h+=b*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),i=Math.hypot(t.slope,1);yi.x=-e*t.slope/i,yi.y=1/i,yi.z=-n*t.slope/i,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let i=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=i.ways[u.wi],[f,d]=this.segEnds(u),g=Math.hypot(i.nx[d]-i.nx[f],i.nz[d]-i.nz[f])-u.s,x=Math.sin(u.h),p=Math.cos(u.h),M=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let N=Math.abs(u.next.turn)>1?5.5:9;M=Math.min(M,Math.sqrt(N*N+2*2.2*Math.max(0,g-3)))}let v=1e9,y=0,_=(N,O,z,W,B,j)=>{let q=N-u.x,ut=O-u.z,bt=q*x+ut*p;if(bt<=0||bt>60)return;let At=Math.abs(q*p-ut*x),st=W*x+B*p;if(At>(st>.3?2:1.4))return;let $=bt-u.box.halfL-j-.4;$<v&&(v=$,y=z*Math.max(0,st))};for(let N of this.cars)N!==u&&_(N.x,N.z,N.speed,Math.sin(N.h),Math.cos(N.h),N.box.halfL);e.active!==!1&&_(r,o,c,a,l,2.2);for(let N of this.statics)_(N.x,N.z,0,Math.sin(N.h),Math.cos(N.h),N.box.halfL);for(let N of this.obstacles)_(N[0],N[1],0,0,0,.6);let w=i.ntag[d]===jt.SIGNALS?d:u.next&&i.ntag[this.nodeAfter(u)]===jt.SIGNALS&&g<35?-2:-1;if(w!==-1){let N=w===d?g:g+20,O=Math.abs(x)>Math.abs(p)?1:0,z=Pr(O,n);if((z==="R"||z==="Y"&&N>14)&&N>1.5){let W=N-3.5-u.box.halfL+2.2;W<v&&(v=Math.max(.1,W),y=0)}}if(u.yield&&g<18&&g>.3){let N=i.nx[d],O=i.nz[d],z=!1,W=(B,j,q,ut,bt,At)=>{if(z||q<1.5||At===u.wi)return;let st=N-B,$=O-j,vt=Math.hypot(st,$);vt>10+q*3.2||vt<.5||(st*ut+$*bt)/vt<.6||(z=!0)};for(let B of this.cars)B!==u&&W(B.x,B.z,B.speed,Math.sin(B.h),Math.cos(B.h),B.wi);if(e.active!==!1&&W(r,o,c,a,l,e.wi),z){let B=g-2.2-u.box.halfL+2.2;B<v&&(v=Math.max(.1,B),y=0)}}u.bumped>0&&(u.bumped-=t,M=0);let S=u.type==="bus"?1.1:1.6,T=2.4,b=2.2,E=1.25,R=u.speed,L=S*(1-Math.pow(Math.max(0,R)/Math.max(.1,M),4));if(v<1e8){let N=b+R*E+R*(R-y)/(2*Math.sqrt(S*T));L-=S*Math.pow(Math.max(0,N)/Math.max(.3,v),2)}L=Math.max(-9,L),u.speed=Math.max(0,R+L*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let D=0;for(;D++<8;){let[N,O]=this.segEnds(u),z=Math.hypot(i.nx[O]-i.nx[N],i.nz[O]-i.nz[N]);if(u.s<z)break;u.s-=z;let W=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=W.wi,u.k=W.k,u.dir=W.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,i=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=i&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,i=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,m=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>m)continue;let g=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(g+=Math.PI);let x=a(r[l]+7,r[l+1]+13),p=x<.7||h<2.35?"car":x<.9?"wagon":f>=5?"van":"wagon",M=Lh[p],v=Math.sin(g),y=Math.cos(g),_=[i.addCircle(t,c+v*1.1,u+y*1.1,M.halfW-.08),i.addCircle(t,c-v*1.1,u-y*1.1,M.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:g,type:p,box:M,colour:Math.floor(a(r[l]+3,r[l+1]+5)*Gd),taken:!1,objs:_})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let i of this.parkSpots.values())for(let r of i){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}yi.x=0,yi.y=1,yi.z=0;for(let i of Object.keys(n)){let r=n[i].sort((a,l)=>a._d-l._d),o=this.parkPools[i];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],vi,vi,0,0,-100)}}}nearestParked(t,e,n){let i=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,i=a)}return i}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,i=null){let r=null,o=(a,l)=>{if(a===i)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let m=-d;m<=d;m++){let g=f*m/d,x=a.x+c*g,p=a.z+u*g,M=t-x,v=e-p,y=Math.hypot(M,v);y<n+h&&(!r||n+h-y>r.depth)&&(r={nx:y>1e-6?M/y:1,nz:y>1e-6?v/y:0,depth:n+h-y,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var Fh=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,i=this.v,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},Na=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,i=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===kt.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&Lt.PRIVATE&&(h=6),l.cls===kt.SERVICE&&(h=l.flags&Lt.AISLE?5:1.8),l.cls===kt.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],m=l.nodes[f+1];if(e.ntag[d]===jt.GATE||e.ntag[m]===jt.GATE)continue;let x=(l.cum[f+1]-l.cum[f])/u*h;i.push(d,m,x,c,f),l.oneway||i.push(m,d,x,c,f)}});let r=i.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[i[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[i[l*5]]++;this.eTo[c]=i[l*5+1],this.eCost[c]=i[l*5+2],this.eWay[c]=i[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,i,r){let o=this.R,a=z=>z.drivable&&z.cls!==kt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(i,r,400,a);if(!l||!c)return null;let u=++this.run,h=new Fh,f=Math.sin(n),d=Math.cos(n),m=o.ways[l.wi],g=m.nodes[l.k],x=m.nodes[l.k+1],p=m.cum[l.k+1]-m.cum[l.k],M=Math.max(10,m.limit)/3.6,v=l.dx*f+l.dz*d,y=(z,W)=>{this.stamp[z]!==u&&(this.stamp[z]=u,this.dist[z]=1e18,this.closed[z]=0),W<this.dist[z]&&(this.dist[z]=W,this.prev[z]=-1,this.prevWay[z]=l.wi,h.push(W+this.h(z,i,r),z))},_=25;y(x,(1-l.t)*p/M+(v<0?_:0)),m.oneway||y(g,l.t*p/M+(v>0?_:0));let w=o.ways[c.wi],S=w.nodes[c.k],T=w.nodes[c.k+1],b=new Set([S,T]),E=-1,R=0;for(;h.size;){let z=h.pop();if(this.closed[z])continue;if(this.closed[z]=1,b.has(z)){E=z;break}if(++R>4e5)break;let W=this.dist[z];for(let B=this.eStart[z];B<this.eStart[z+1];B++){let j=this.eTo[B];this.stamp[j]!==u&&(this.stamp[j]=u,this.dist[j]=1e18,this.closed[j]=0);let q=W+this.eCost[B];q<this.dist[j]&&(this.dist[j]=q,this.prev[j]=z,this.prevWay[j]=this.eWay[B],h.push(q+this.h(j,i,r),j))}}if(E<0)return null;let L=[],D=[];for(let z=E;z>=0;z=this.prev[z])L.push(z),D.push(this.prevWay[z]);L.reverse(),D.reverse();let N=[[l.px,l.pz]];for(let z of L)N.push([o.nx[z],o.nz[z]]);N.push([c.px,c.pz]);let O={pts:N,nodes:L,ways:D,dest:[c.px,c.pz],destRaw:[i,r],time:this.dist[E]};O.cum=[0];for(let z=1;z<N.length;z++)O.cum.push(O.cum[z-1]+Math.hypot(N[z][0]-N[z-1][0],N[z][1]-N[z-1][1]));return O.length=O.cum[O.cum.length-1],O.steps=this.instructions(O),O}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:i,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<i.length-1;){let u=i[c],h=r[c],f=r[c+1],d=e.ways[h].flags&Lt.ROUNDABOUT,m=e.ways[f].flags&Lt.ROUNDABOUT,g=o[c],x=o[c+1],p=o[c+2];if(!d&&m){let R=0,L=c+1;for(;L<i.length-1&&e.ways[r[L+1]].flags&Lt.ROUNDABOUT;)this.hasExit(i[L],r[L])&&R++,L++;R++;let D=L+1<r.length?l(r[L+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:R,name:D,text:`Alla rotatoria prendi la ${R}\xAA uscita`+(D?` verso ${D}`:"")}),c=L+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let M=Math.atan2(x[0]-g[0],x[1]-g[1]),y=Math.atan2(p[0]-x[0],p[1]-x[1])-M;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;let _=y*180/Math.PI,w=l(h),S=l(f),T=S!==w;if(Math.abs(_)<25&&!T){c++;continue}if(Math.abs(_)<25&&T&&!this.realChoice(u,h)){c++;continue}let b,E;Math.abs(_)<25?(b="straight",E="Prosegui dritto"):_>=25&&_<55?(b="slight-left",E="Tieni la sinistra"):_>=55&&_<150?(b="left",E="Svolta a sinistra"):_<=-25&&_>-55?(b="slight-right",E="Tieni la destra"):_<=-55&&_>-150?(b="right",E="Svolta a destra"):(b="uturn",E="Fai inversione a U"),S&&(E+=(b==="straight"?" su ":" in ")+S),n.push({i:c,d:a[c+1],type:b,name:S,text:E}),c++}return n.push({i:i.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let i=n.adjStart[t];i<n.adjStart[t+1];i++){let r=n.ways[n.adjWay[i]];if(!(r.flags&Lt.ROUNDABOUT)&&r.drivable&&r.cls<kt.SERVICE+1){let o=n.adjPos[i];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,i=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=kt.LIVING&&i++;return i>=2}};function Vd(s,t,e){let{pts:n,cum:i}=s,r=1e9,o=0,a=0,l=Math.max(0,(s._lastI||0)-30),c=Math.min(n.length-1,(s._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,m=n[u+1][1]-f,g=d*d+m*m||1e-9,x=((t-h)*d+(e-f)*m)/g;x=Math.max(0,Math.min(1,x));let p=Math.hypot(t-h-d*x,e-f-m*x);p<r&&(r=p,o=i[u]+Math.sqrt(g)*x,a=u)}return s._lastI=a,{off:r,s:o,i:a}}var mv=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],gv=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],xv={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},Ua=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,i)=>{n.cls<=kt.TERTIARY&&n.drivable&&this.major.push(i)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let i=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let u=0;u<o.length;u++){let h=(u+1)%o.length,f=o[u][0]*o[h][1]-o[h][0]*o[u][1];a+=f,l+=(o[u][0]+o[h][0])*f,c+=(o[u][1]+o[h][1])*f}Math.abs(a)>r&&(r=Math.abs(a),i=[l/(3*a),c/(3*a)])}return{...n,label:i}}),this.night=!1}drawMini(t,e,n){let i=this.mini,r=this.miniCtx,o=i.width,a=i.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,i,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>i+3e3||Math.abs(a[0][1]-n)>i+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,i,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,i,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=kt.SERVICE||c[d.cls].push(h*16384+f)});let u=o?gv:mv;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let m=[12,11,9,8,7,6,6,5,4,3,5][f],g=Math.max(a?1:1.6,m*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(g+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=g/r),!(h===0&&f>=kt.SERVICE)){t.beginPath();for(let x of d){let p=Math.floor((x+1)/16384),M=x-p*16384,v=l.ways[p];if(M<0)for(let y=0;y<v.nodes.length;y++){let _=v.nodes[y];y?t.lineTo(l.nx[_],l.nz[_]):t.moveTo(l.nx[_],l.nz[_])}else{let y=v.nodes[M],_=v.nodes[M+1];t.moveTo(l.nx[y],l.nz[y]),t.lineTo(l.nx[_],l.nz[_])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,i){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);i?t.moveTo(i.x,i.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let i=this.big,r=this.bigCtx,o=i.width,a=i.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((m,g)=>g?r.lineTo(m[0],m[1]):r.moveTo(m[0],m[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.R.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(xv[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,m]=this.toScreen(h.label[0],h.label[1]);d<-100||m<-50||d>o+100||m>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,m),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,m))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var za=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(i=>{let r=e.createOscillator();return r.type="square",r.frequency.value=i,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,i){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+i*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+i*1500,r,.1)}};function Oa(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var Fr=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],Fa=(s,t,e)=>s<t?t:s>e?e:s;function Bh({facing:s,scale:t,x:e,z:n,travelX:i,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=Fa((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),m=1.1+4.9*h,g=(.6+1.6*h)*(.4+u()*.6),x=2.2+5*h,p=-r,M=i,v={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:i*d+o*g,vz:r*d+a*g,vy:m,qx:0,qy:Math.sin(s/2),qz:0,qw:Math.cos(s/2),wx:p*x,wy:(u()-.5)*(1.5+5*h),wz:M*x,col:new Float64Array(9),pose:c?{...c}:Oa(),vel:Oa(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:s,lieSign:u()<.5?1:-1,done:!1,rand:u};Ba(v);let y=5+13*h;for(let[_]of Fr)v.vel[_]=(u()-.5)*y;return v}function Ba(s){let{qx:t,qy:e,qz:n,qw:i}=s,r=s.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}var Oh=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function kh(s,t){if(s.t+=t,s.phase==="rise"){Mv(s,t);return}s.vy-=11.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t;let{wx:e,wy:n,wz:i,qx:r,qy:o,qz:a,qw:l}=s,c=t*.5,u=r+c*(e*l+n*a-i*o),h=o+c*(n*l+i*r-e*a),f=a+c*(i*l+e*o-n*r),d=l-c*(e*r+n*o+i*a),m=1/(Math.hypot(u,h,f,d)||1);s.qx=u*m,s.qy=h*m,s.qz=f*m,s.qw=d*m,Ba(s);let g=s.col,x=!1;for(let v=0;v<Oh.length;v++){let y=Oh[v][0]*s.scale,_=g[3]*y,w=g[4]*y,S=g[5]*y,T=Oh[v][1]*s.scale-(s.y+w);if(T<=0)continue;x=!0,s.y+=T*.55;let b=s.vx+(s.wy*S-s.wz*w),E=s.vy+(s.wz*_-s.wx*S),R=s.vz+(s.wx*w-s.wy*_);if(E>=0)continue;let L=(_*_+S*S)/.16,D=-(1+.17)*E/(1+L);s.vy+=D,s.wx+=-S*D/.16,s.wz+=_*D/.16;let N=Math.hypot(b,R);if(N>1e-4){let O=Math.min(.55*D,N),z=-b/N*O,W=-R/N*O;s.vx+=z,s.vz+=W,s.wy+=(S*z-_*W)/.16*.5}if(D>.9&&s.bumps++,D>.6){let O=Math.min(9,D*2.4);for(let[z]of Fr)s.vel[z]+=(s.rand()-.5)*O}}if(x){s.grounded+=t;let v=Math.exp(-3.2*t);s.wx*=v,s.wy*=v,s.wz*=v,s.vx*=Math.exp(-1.9*t),s.vz*=Math.exp(-1.9*t)}else s.airborne+=t,s.grounded=0;vv(s,t);let p=Math.hypot(s.wx,s.wy,s.wz),M=Math.hypot(s.vx,s.vy,s.vz);if(s.phase==="air"&&x&&s.grounded>.12&&p<1.1&&M<.7){s.phase="down",s.settleFor=0;let v=g[6],y=g[8];v*v+y*y<.04&&(v=g[3],y=g[5]),s.yawOut=Math.atan2(v,y)}if(s.phase==="down"){if(s.settleFor+=t,s.settleFor<.45){let v=Math.min(1,t*7);yv(s,v),Ba(s)}s.vx*=Math.exp(-5*t),s.vz*=Math.exp(-5*t),s.wx*=Math.exp(-6*t),s.wy*=Math.exp(-6*t),s.wz*=Math.exp(-6*t),s.settleFor>s.restFor+.45&&(s.phase="rise",s.riseT=0,s.riseFrom={qx:s.qx,qy:s.qy,qz:s.qz,qw:s.qw,y:s.y,pose:{...s.pose}})}}function yv(s,t){let e=s.yawOut/2,n=Math.sin(e),i=Math.cos(e),r=s.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=i*r,l=n*o,c=-n*r,u=i*o,h=s.qx*a+s.qy*l+s.qz*c+s.qw*u,f=a,d=l,m=c,g=u;h<0&&(f=-f,d=-d,m=-m,g=-g),s.qx+=(f-s.qx)*t,s.qy+=(d-s.qy)*t,s.qz+=(m-s.qz)*t,s.qw+=(g-s.qw)*t;let x=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=x,s.qy*=x,s.qz*=x,s.qw*=x}function vv(s,t){let e=s.col,n=-e[1],i=-e[4],r=-e[7],o=Math.asin(Fa(n,-1,1)),a=Math.atan2(-r,-i),l=s.pose,c=s.vel,u=s.phase==="down"?1:0;for(let h=0;h<Fr.length;h++){let f=Fr[h],d=f[0],m=f[1],g=f[2],x=f[6],p=f[3]*(1+u*.6),M=f[4]*(1+u*1.4),v=f[5],y=v==="swing"?Fa(a+x,m,g):v==="lean"?Fa(o+x,m,g):v==="slack"?x:0,_=c[d]+(p*(y-l[d])-M*c[d])*t,w=l[d]+_*t;w<m?(w=m,_*=-.18):w>g&&(w=g,_*=-.18),c[d]=_,l[d]=w}}function Mv(s,t){s.riseT+=t;let e=Math.min(1,s.riseT/s.riseFor),n=s.riseFrom,i=e*e*(3-2*e),r=s.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;s.qx=n.qx+(h*o-n.qx)*i,s.qy=n.qy+(h*a-n.qy)*i,s.qz=n.qz+(h*l-n.qz)*i,s.qw=n.qw+(h*c-n.qw)*i;let f=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=f,s.qy*=f,s.qz*=f,s.qw*=f,Ba(s);let d=.46*s.hipRest;s.y=e<.5?n.y+(d-n.y)*Wd(e/.5):d+(s.hipRest-d)*Wd((e-.5)/.5);let m=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[g]of Fr){let x=n.pose[g],p=0;g==="kneeL"||g==="kneeR"?p=m:g==="hipLs"||g==="hipRs"?p=-m*.75:g==="spine"?p=-.35*(1-i):g==="shLz"?p=.18:g==="shRz"&&(p=-.18),s.pose[g]=x+(p-x)*i,s.vel[g]=0}e>=1&&(s.done=!0)}var Wd=s=>s*s*(3-2*s);var _v=[12999502,5144518,5873770,13018190,9068230,5155270],bv=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],wv=.34,Xd=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function qd(s){return(.2126*(s>>16&255)+.7152*(s>>8&255)+.0722*(s&255))/255}var Ev=.15,Sv=[15782580,15254430,14132856,12091218,9263675,6307884],Tv=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],Av=[9187114,2903932,1907999,4156229,11576460,7166860],Yd=[1710620,2565160,3813160,4539722],Rv=[3881528,5916214,3095882,7037527,8011578],Cv=.34,Iv=1.75;var Fs=.43,Os=.42,Hh=.058,Pv=.085,Lv=.092,Zd=.372,Dv=.44,Nv=.196,Gh=.3,Vh=.265,d_=Fs+Os+Hh;function Uv(s){let t=s()<.5,e=t?1.58+s()*.16:1.7+s()*.18;return{female:t,scale:e/Iv,shoulder:t?.88+s()*.07:1+s()*.11,depth:.92+s()*.26,hipW:t?1.04+s()*.1:.94+s()*.08,limb:(t?.9:1)+s()*.14}}function zv(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Rn(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of s){n.set(c.attributes.position.array,o*3),i.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new ee;return l.setAttribute("position",new ue(n,3)),l.setAttribute("normal",new ue(i,3)),l.setIndex(new ue(r,1)),l.computeVertexNormals(),l}function ka(s,t,e,n=6){let i=new te(s,t,e,n,1,!1);return i.translate(0,-e/2,0),i}function Ha(s,t=6,e=4){return new dn(s,t,e)}function Or(s,t,e){return new Bt(s,t,e)}function Fv(){let s=Ha(.1,9,6);s.scale(.84,1.13,1.16),s.translate(0,.176,.008);let t=Or(.102,.072,.112);t.translate(0,.12,.04);let e=new te(.05,.058,.09,6);e.translate(0,.045,-.008);let n=Or(.024,.028,.034);n.translate(0,.158,.122);let i=Rn([e,t,s,n]),r=new dn(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=Rn([r]),a=Or(.175,.22,.062);a.translate(0,.005,-.062);let l=Rn([a]),c=T=>{let b=new ta(T.map(([E,R])=>new Et(E,R)),8);return b.scale(1,1,.66),b},u=Rn([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=Rn([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=Rn([Ha(.049),ka(.047,.04,Gh)]),m=ka(.037,.031,Vh+f);m.translate(0,f,0);let g=Ha(.044,5,4);g.scale(.85,1.25,.62),g.translate(0,-Vh-.035,0);let x=Rn([m,g]),p=Rn([Ha(.086),ka(.082,.06,Fs)]),M=ka(.057,.043,Os+.06);M.translate(0,.06,0);let v=Rn([M]),y=Or(.088,.055,.235);y.translate(0,-.03,.052);let _=Rn([y]),w=Or(.24,.28,.13);w.translate(0,-.15,0);let S=Rn([w]);return{head:i,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:x,thigh:p,shin:v,foot:_,bag:S}}function Ov(s,t,e,n,i,r,o){let a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,m=0,g=-l,x=l*u,p=c,M=a*u,v=l*c,y=-u,_=a*c;s[0]=d*h+x*f,s[1]=m*h+p*f,s[2]=g*h+M*f,s[3]=-d*f+x*h,s[4]=-m*f+p*h,s[5]=-g*f+M*h,s[6]=v,s[7]=y,s[8]=_,s[9]=t,s[10]=e,s[11]=n}function Bv(s,t,e,n,i){s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=e,s[10]=n,s[11]=i}function zs(s,t,e,n,i,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],m=t[6],g=t[7],x=t[8];s[9]=t[9]+l*e+h*n+m*i,s[10]=t[10]+c*e+f*n+g*i,s[11]=t[11]+u*e+d*n+x*i;let p=Math.cos(a),M=Math.sin(a),v=Math.cos(r),y=Math.sin(r),_=Math.cos(o),w=Math.sin(o),S=p,T=-M,b=M*y,E=v,R=p*y,L=S*_+b*w,D=E*w,N=T*_+R*w,O=-S*w+b*_,z=E*_,W=-T*w+R*_,B=M*v,j=-y,q=p*v;s[0]=l*L+h*D+m*N,s[1]=c*L+f*D+g*N,s[2]=u*L+d*D+x*N,s[3]=l*O+h*z+m*W,s[4]=c*O+f*z+g*W,s[5]=u*O+d*z+x*W,s[6]=l*B+h*j+m*q,s[7]=c*B+f*j+g*q,s[8]=u*B+d*j+x*q}function Hi(s,t,e,n){let i=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];s[9]=t[9]+a*e,s[10]=t[10]+l*e,s[11]=t[11]+c*e;let d=Math.cos(n),m=Math.sin(n);s[0]=i,s[1]=r,s[2]=o,s[3]=a*d+u*m,s[4]=l*d+h*m,s[5]=c*d+f*m,s[6]=-a*m+u*d,s[7]=-l*m+h*d,s[8]=-c*m+f*d}function qe(s,t,e,n,i,r){let o=s.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*i,o[a+5]=e[4]*i,o[a+6]=e[5]*i,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function Ga(s,t){let e=s.instanceMatrix.array,n=t*16;for(let i=0;i<16;i++)e[n+i]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var $d=(s,t,e)=>s<t?t:s>e?e:s;function Kd(s,t=20260919){let e=zv(t),n=Fv(),i=new Ht,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let v of o)r[v]=new Re(n[a[v]],i,s);let l=o.map(v=>r[v]),c=new $t;for(let v of l)v.instanceMatrix.setUsage(Of),v.frustumCulled=!1,c.add(v);for(let v of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])v.castShadow=!0;let u=new Nt,h=v=>v[e()*v.length|0],f=[];for(let v=0;v<s;v++){let y=Uv(e),_={phase:e()*Math.PI*2,build:y,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<Cv,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:Oa(),rag:null};f.push(_);let w=e()<wv,S=h(w?_v:bv),T=h(Xd);for(let N=0;N<10&&Math.abs(qd(T)-qd(S))<Ev;N++)T=h(Xd);let b=h(Sv),E=e()<.1,R=e()<.14;_.longHair=!E&&!R&&e()<.34,_.bald=E,_.hatted=R;let L=e()<.45?S:b;r.chest.setColorAt(v,u.setHex(S)),r.armL.setColorAt(v,u.setHex(S)),r.armR.setColorAt(v,u.setHex(S)),r.foreL.setColorAt(v,u.setHex(L)),r.foreR.setColorAt(v,u.setHex(L)),r.head.setColorAt(v,u.setHex(b)),r.pelvis.setColorAt(v,u.setHex(T)),r.thighL.setColorAt(v,u.setHex(T)),r.thighR.setColorAt(v,u.setHex(T)),r.shinL.setColorAt(v,u.setHex(T)),r.shinR.setColorAt(v,u.setHex(T)),r.footL.setColorAt(v,u.setHex(h(Yd))),r.footR.setColorAt(v,u.setHex(h(Yd)));let D=h(R?Av:Tv);r.hair.setColorAt(v,u.setHex(D)),r.hairLong.setColorAt(v,u.setHex(D)),r.bag.setColorAt(v,u.setHex(h(Rv)))}for(let v of l)v.instanceColor&&(v.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function m(v){return .2+.26*Math.min(1.7,v.gait)}function g(v,y,_){let w=v.phase,S=Math.sin(w),T=Math.cos(w),b=m(v)*(v.idle>0?0:1),E=Math.max(0,v.gait-1),R=b*S,L=-b*S;y.hipLs=R,y.hipRs=L,y.kneeL=x(w,b,E),y.kneeR=x(w+Math.PI,b,E);let D=.62,N=.38,O=-(R+y.kneeL),z=-(L+y.kneeR);y.ankL=$d(O+D*Math.max(0,S)**1.4-N*Math.max(0,-S)**1.6,-1.05,.4),y.ankR=$d(z+D*Math.max(0,-S)**1.4-N*Math.max(0,S)**1.6,-1.05,.4),y.hipLz=.02,y.hipRz=-.02;let W=-R*.62*v.swagger*(1+E*.5);y.shLs=W,y.shRs=-W;let B=.11+(v.build.shoulder-.95)*.35+E*.06;y.shLz=B,y.shRz=-B,y.elbL=.34+2.05*Math.max(0,-W)-.18*Math.max(0,W)+E*.55,y.elbR=.34+2.05*Math.max(0,W)-.18*Math.max(0,-W)+E*.55,v.bag&&(v.bagSide>0?(y.shLs*=.25,y.elbL=.32,y.shLz=B*1.5):(y.shRs*=.25,y.elbR=.32,y.shRz=-B*1.5)),y.twist=-.26*S*(1+E*.4),y.spine=-.02+.03*Math.abs(T)+Math.sin(_*1.6+v.phase*.1)*.012,y.spineZ=.035*T,y.headZ=-y.spineZ*.8,y.neck=.13-y.spine*.5}function x(v,y,_){let w=Math.max(0,-Math.cos(v)),S=Math.max(0,Math.sin(v));return .08+(2.1+_*1.4)*y*w**1.15+(.75+_)*y*S**2}function p(v,y){let _=.062*Math.max(0,-v.ankL),w=.062*Math.max(0,-v.ankR),S=Fs*Math.cos(v.hipLs)+Os*Math.cos(v.hipLs+v.kneeL)+Hh+_,T=Fs*Math.cos(v.hipRs)+Os*Math.cos(v.hipRs+v.kneeR)+Hh+w;return Math.max(S,T)*y}function M(v,y,_){let w=y.build,S=w.scale,T=w.limb*S,b=d.root;zs(d.chest,b,0,Lv*S,0,_.spine,_.spineZ,_.twist),zs(d.head,d.chest,0,Dv*S,0,_.neck,_.headZ,_.headYaw);let E=Nv*w.shoulder*S;zs(d.armL,d.chest,E,Zd*S,0,_.shLs,_.shLz,0),zs(d.armR,d.chest,-E,Zd*S,0,_.shRs,_.shRz,0),Hi(d.foreL,d.armL,-Gh*S,-_.elbL),Hi(d.foreR,d.armR,-Gh*S,-_.elbR);let R=Pv*w.hipW*S;if(zs(d.thighL,b,R,0,0,_.hipLs,_.hipLz,0),zs(d.thighR,b,-R,0,0,_.hipRs,_.hipRz,0),Hi(d.shinL,d.thighL,-Fs*S,_.kneeL),Hi(d.shinR,d.thighR,-Fs*S,_.kneeR),Hi(d.footL,d.shinL,-Os*S,_.ankL),Hi(d.footR,d.shinR,-Os*S,_.ankR),qe(r.pelvis,v,b,S*w.hipW,S,S*w.depth),qe(r.chest,v,d.chest,S*w.shoulder,S,S*w.depth),qe(r.head,v,d.head,S,S,S),y.bald?Ga(r.hair,v):qe(r.hair,v,d.head,S*(y.hatted?1.1:1),S*(y.hatted?1.12:1),S*(y.hatted?1.1:1)),y.longHair?qe(r.hairLong,v,d.head,S,S,S):Ga(r.hairLong,v),qe(r.armL,v,d.armL,T,S,T),qe(r.armR,v,d.armR,T,S,T),qe(r.foreL,v,d.foreL,T,S,T),qe(r.foreR,v,d.foreR,T,S,T),qe(r.thighL,v,d.thighL,T,S,T),qe(r.thighR,v,d.thighR,T,S,T),qe(r.shinL,v,d.shinL,T,S,T),qe(r.shinR,v,d.shinR,T,S,T),qe(r.footL,v,d.footL,T,S,T),qe(r.footR,v,d.footR,T,S,T),y.bag){let L=y.bagSide>0?d.foreL:d.foreR,D=y.bagSide>0?_.elbL:_.elbR;Hi(d.bag,L,-(Vh+.05)*S,D*.5),qe(r.bag,v,d.bag,S,S,S)}else Ga(r.bag,v)}return{group:c,people:f,rand:e,count:s,drawWalking(v,y,_,w,S,T){let b=f[v],E=b.build.scale;g(b,b.pose,T),Ov(d.root,y,_+p(b.pose,E),w,S+.12*Math.sin(b.phase)*(b.idle>0?0:1),b.lean+.12*Math.max(0,b.gait-1),.022*Math.cos(b.phase)),M(v,b,b.pose)},drawRagdoll(v,y,_){Bv(d.root,y.col,y.x,_+y.y,y.z),M(v,f[v],y.pose)},hideAt(v){for(let y of l)Ga(y,v)},commit(){for(let v of l)v.instanceMatrix.needsUpdate=!0}}}var Bs=90,Wh=s=>s.cls>=kt.PRIMARY&&!(s.flags&(Lt.LINK|Lt.TUNNEL|Lt.PRIVATE))&&s.cls!==kt.TRACK,Va=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=Kd(Bs),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<Bs;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=Bs-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(Bs,t)}latTarget(t,e){return t.flags&Lt.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let i=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=i.nearest(c,u,45,Wh);if(!h)continue;let f=i.ways[h.wi];if(f.cls<=kt.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let i=this.R,r=i.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=i.nx[o],c=i.nz[o],u=i.nx[a],h=i.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,m=(h-c)/f,g=t.dir>0?t.s:f-t.s,x=l+d*g-m*t.lat,p=c+m*g+d*t.lat,M=n?1:Math.min(1,e*5),v=t.x,y=t.z;t.x+=(x-t.x)*M,t.z+=(p-t.z)*M;let _=t.x-v,w=t.z-y;if(n)t.h=Math.atan2(d*t.dir,m*t.dir);else if(_*_+w*w>1e-7){let b=Math.atan2(_,w)-t.h;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;t.h+=b*Math.min(1,e*8)}let S=Math.abs(t.lat)<r.width/2+.2;t.onRoad=S&&!(r.flags&Lt.NOCAR);let T=Math.min(1,Math.max(0,g/f));t.y=S?i.heightOn(t.wi,t.k,T,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===jt.CROSSING||e.ntag[r]===jt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&Lt.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]),l=[];for(let M=e.adjStart[r];M<e.adjStart[r+1];M++){let v=e.adjWay[M],y=e.adjPos[M],_=e.ways[v];if(!(!Wh(_)||_.cls<=kt.SECONDARY&&_.limit>50))for(let[w,S,T]of[[y,1,_.nodes[y+1]],[y-1,-1,_.nodes[y-1]]]){if(T===void 0||v===t.wi&&w===t.k)continue;let b=Math.atan2(e.nx[T]-e.nx[r],e.nz[T]-e.nz[r])-a;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;l.push({wi:v,k:w,dir:S,wgt:(Math.abs(b)<.5?3:Math.abs(b)>2.6?.1:1)*(_.flags&Lt.NOCAR?2.5:1)*(_.cls>=kt.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((M,v)=>M+v.wgt,0),u=l[l.length-1];for(let M of l)if(c-=M.wgt,c<=0){u=M;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],m=e.nx[d]-e.nx[f],g=e.nz[d]-e.nz[f],x=Math.hypot(m,g)||1,p=((t.x-e.nx[f])*-g+(t.z-e.nz[f])*m)/x;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=p>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,p))}update(t,e,n,i,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<Bs;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<Bs;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){kh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let _=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,_),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,m=null;for(let _ of i){let w=h.x-_.x,S=h.z-_.z,T=w*w+S*S;if(T>900)continue;let b=Math.hypot(_.vx,_.vz),E=Math.sin(_.h),R=Math.cos(_.h),L=w*E+S*R,D=w*R-S*E;if(Math.abs(L)<_.halfL+.25&&Math.abs(D)<_.halfW+.25)b>1.6?m=_:(h.x+=(D>=0?R:-R)*.05,h.z+=(D>=0?-E:E)*.05);else if(b>2.5){let N=_.vx/b,O=_.vz/b,z=w*N+S*O,W=Math.abs(w*O-S*N);z>0&&z<4+b*1.4&&W<_.halfW+1.3&&(d=!0,h.fleeSide=w*O-S*N>=0?1:-1,h.fdx=O*h.fleeSide,h.fdz=-N*h.fleeSide)}if(r&&_.player&&T<400){let N=Math.max(b,1);(w*(_.vx||E)+S*(_.vz||R))/N>-2&&(d=!0,h.fdx=D>=0?R:-R,h.fdz=D>=0?-E:E)}}if(m){let _=Math.hypot(m.vx,m.vz),w=m.vx/_,S=m.vz/_,T=h.x-m.x,b=h.z-m.z,E=Math.hypot(T,b)||1;h.rag=Bh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:w,travelZ:S,awayX:T/E,awayZ:b/E,speed:_,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,_,m),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let g=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let _=this.world.collision.resolveCircle(h.x,h.z,.3);_&&(h.x+=_.nx*_.depth,h.z+=_.nz*_.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let x=this.latTarget(f,h.side);if(h.wait>0){let _=!1;for(let w of i){let S=Math.hypot(w.vx,w.vz);if(S<1.5)continue;let T=h.x-w.x,b=h.z-w.z,E=Math.hypot(T,b);E<12+S*3&&(T*w.vx+b*w.vz)/(E*S)>.5&&(_=!0)}h.wait+=t,!_||h.wait>9?h.wait=0:g=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,x-h.lat)));let p=Math.abs(x-h.lat)>.3,M=p?g*.25:g;h.gait+=((g>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=M*t;let v=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(M,p&&g>0?1.2:0)/Math.max(.25,v);let y=0;for(;y++<6;){let[_,w]=this.ends(h),S=Math.hypot(o.nx[w]-o.nx[_],o.nz[w]-o.nz[_]);if(h.s<S)break;h.s-=S,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,i,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,i,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,Wh);if(!n){t.alive=!1;return}let i=e.ways[n.wi],r=i.cum[n.k+1]-i.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(i=>i.alive&&!i.rag&&Math.hypot(i.x-t,i.z-e)<n)}};var Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kv=new Es(-1,1,1,-1,0,1),Xh=class extends ee{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},Hv=new Xh,Mi=class{constructor(t){this._mesh=new Ct(Hv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Xa=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},qa=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ya=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xa(Wa),this.copyPass.material.blending=Nn,this.clock=new aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Br!==void 0&&(o instanceof Br?n=!0:o instanceof qa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Za=class extends ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Jd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ks=class s extends ln{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,o,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new $e(r,o,{type:Sn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new $e(r,o,{type:Sn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Jd;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Wa;this.copyUniforms=gi.clone(u.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ks.BlurDirectionX=new Et(1,0);ks.BlurDirectionY=new Et(0,1);var jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var $a=class extends ln{constructor(){super();let t=jd;this.uniforms=gi.clone(t.uniforms),this.material=new ea({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var St=s=>document.getElementById(s),Bn={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132,farKm:0},mid:{viewTiles:2,shadows:!0,softShadows:!1,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288,farKm:5,detailKm:1.5},high:{viewTiles:3,shadows:!0,softShadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432,farKm:7,detailKm:2.2}},A={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},Gr=()=>A.foot.on?A.foot:A.vehicle;window.BDS=A;new URLSearchParams(location.search).get("auto")==="0"&&(A.autoOff=!0);var Gi={stage:"",t0:performance.now(),timer:0};function Qd(){let s=Math.round((performance.now()-Gi.t0)/1e3),t="";s>=25&&(t=" \u2014 sui computer meno potenti pu\xF2 servire fino a un minuto; chiudi le altre schede del browser"),St("loadmsg").textContent=Gi.stage+(s>=3?` (${s} s)`:"")+t}function op(s){clearInterval(Gi.timer),console.error(s);let t=navigator.userAgent.match(/(Edg|Chrome|Firefox|Safari)\/[\d.]+/);St("loadmsg").textContent=`Errore durante "${Gi.stage}": ${s&&s.message?s.message:s} \u2014 browser: ${t?t[0]:navigator.userAgent}. Usa Chrome, Edge o Firefox aggiornati su computer.`,St("loadmsg").style.color="#ff8a7a"}addEventListener("error",s=>{(!A.meta||!A.router)&&op(s.error||s.message)});async function Gv(){let s=()=>new Promise(c=>setTimeout(c,30)),t=(c,u)=>{St("loadbar").style.width=(c*100).toFixed(0)+"%",u&&(Gi.stage=u,Qd())};Gi.timer=setInterval(Qd,1e3),t(.03,"Caricamento della cartografia reale");let e=0,n=[["meta","data/meta.js"],["roads","data/roads.js"],["height","data/height.js"],["landcover","data/landcover.js"]],i=await Promise.all(n.map(([c,u])=>Sr(c,u).then(h=>(e++,t(.03+e/4*.42,`Caricamento della cartografia reale: ${e} di 4 file`),h)))),[r,o,a,l]=i;A.meta=r,A.proj=new ma(r.proj),t(.5,"Altimetria e colori del terreno"),await s(),A.terrain=new ga(r,a,l),t(.62,`Costruzione della rete stradale (${o.ways.length.toLocaleString("it")} vie OSM)`),await s(),A.roads=new Ma(o,A.terrain,r),t(.9,"Preparazione del navigatore"),await s(),A.router=new Na(A.roads),t(1,"Pronto"),clearInterval(Gi.timer),St("loading").classList.add("hidden"),jh()}function Vv(s,t){let e=A.roads,n=e.streets.get(s)||[],i=null;for(let r of n){let o=A.world.comuneAt(r.x,r.z);t&&o!==t||(!i||r.len>i.len)&&(i=r)}return i}var Ja={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function Wv(){let s=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(s.get("lat")||t.lat||0),n=+(s.get("lon")||t.lon||0);return e&&n?(A.pickedStart=A.proj.fromLatLon(e,n),"picked"):null}function Xv(){let s=A.meta,t=[];t.push({id:"casa",label:Ja.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of s.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=s.comuni.map(n=>n.n).filter(n=>!s.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function jh(){if(St("menu").classList.remove("hidden"),A.meta.dbgt&&A.meta.dbgt.length&&!St("dbgtcredit")){let n=document.createElement("div");n.id="dbgtcredit",n.textContent=`Forme e altezze degli edifici${A.meta.height.step<20?" e altimetria di dettaglio":""}: DBGT \u2013 Database Geo-Topografico di Regione Lombardia (${A.meta.dbgt.join(", ")}).`,document.querySelector("#menu .credits").appendChild(n)}let t=St("cars");t.innerHTML="",Us.forEach((n,i)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(i===A.carIdx?" sel":"");let o=n.kind==="plane"?`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>apertura ${n.W} m</span><span>decollo ~${Math.round(n.vRot*3.6)} km/h</span>`:`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span>`;r.innerHTML=`<div class="sw" style="background:${n.kind==="plane"?n.stripe:n.color}"></div><b>${n.kind==="plane"?"\u2708 ":""}${n.name}</b><small>${n.desc}</small>
      <div class="spec">${o}</div>`,r.onclick=()=>{A.carIdx=i,[...t.children].forEach(a=>a.classList.toggle("sel",a===r))},t.appendChild(r)});let e=St("start");e.innerHTML="";for(let n of Xv()){let i=document.createElement("option");i.value=n.id,i.textContent=n.label,e.appendChild(i)}if(A.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}St("go").onclick=()=>Jv(),St("pickstart").onclick=()=>{ap(),hp("start")}}function ap(){if(A.renderer)return;let s=St("game"),t=Bn[St("quality").value]||Bn.mid;A.settings={...t};let e=new ko({canvas:s,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=t.softShadows?hh:la,e.toneMapping=Er,e.toneMappingExposure=1.2,A.renderer=e;let n=new Go;A.scene=n,A.camera=new He(62,innerWidth/innerHeight,.5,5e3),A.sky=new Aa(n,A.meta.proj.lat0),A.world=new Ta(n,A.meta,A.terrain,A.roads,A.settings),A.traffic=new Da(A.world),A.world.traffic=A.traffic,n.add(A.traffic.group),A.peds=new Va(A.world),A.peds.setTarget(t.peds),A.peds.onHit=(r,o,a)=>{a.player&&Kh("ped",o)},n.add(A.peds.group),t.bloom&&(A.composer=new Ya(e),A.composer.addPass(new Za(n,A.camera)),A.bloom=new ks(new Et(innerWidth,innerHeight),0,.4,.82),A.composer.addPass(A.bloom),A.composer.addPass(new $a));let i=null;s.addEventListener("mousedown",r=>{i=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{i=null}),addEventListener("mousemove",r=>{!i||A.mapOpen||A.paused||!A.started||(A.orbit.yaw-=(r.clientX-i[0])*.006,A.orbit.pitch=Math.max(-.25,Math.min(1.1,A.orbit.pitch+(r.clientY-i[1])*.004)),A.orbit.idle=0,i=[r.clientX,r.clientY])}),A.maps=new Ua(A.world,A.meta),A.input=new La,A.audio=new za,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),A.composer&&A.composer.setSize(innerWidth,innerHeight),A.camera.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.mapOpen&&(A.maps.resizeBig(),A.mapDirty=!0)}),nM(),iM(),requestAnimationFrame(fp)}function Qa(s){let t=A.roads,e=A.world,n=(i,r,o=!1)=>{let a=t.ways[i],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let m=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,g=t.laneCenter(a,m?1:-1);return{x:l-Math.cos(d)*g,z:c+Math.sin(d)*g,h:d}};if(s==="picked"&&A.pickedStart){let i=t.nearest(A.pickedStart[0],A.pickedStart[1],300,r=>r.drivable&&r.cls<=kt.SERVICE);if(i)return n(i.wi,(t.ways[i.wi].cum[i.k]+(t.ways[i.wi].cum[i.k+1]-t.ways[i.wi].cum[i.k])*i.t)/t.ways[i.wi].len)}if(s==="casa"){if(Wv()==="picked")return Qa("picked");let i=-1;if(t.ways.forEach((r,o)=>{if(r.name!==Ja.street||!r.drivable||r.cls>kt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===Ja.comune&&(i<0||r.len>t.ways[i].len)&&(i=o)}),i>=0)return n(i,Ja.frac);s="comune:Giussano"}if(s==="viamilano"){let i=Vv("Via Milano","Giussano");if(i)return n(i.wi,.35,!0);s="comune:Giussano"}if(s.startsWith("comune:")){let i=s.slice(7),r=A.meta.places.find(c=>c.n===i&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=A.maps.comuni.find(u=>u.n===i);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=kt.RESIDENTIAL&&c.cls>=kt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function lp(s=Us[A.carIdx],t=null){A.carModel&&A.scene.remove(A.carModel.root),s.kind==="plane"?(A.vehicle=new Ia(s,A.world),A.carModel=Fd(s,{color:t})):(A.vehicle=new Pa(s,A.world),A.carModel=kd(s,{interior:!0,color:t})),A.scene.add(A.carModel.root),A.lightsOn=!1,St("helpbar").textContent=s.kind==="plane"?"W/S manetta \xB7 \u2191/\u2193 cabra/picchia \xB7 A/D vira \xB7 Spazio freni a terra \xB7 R riparti in volo \xB7 C visuale \xB7 F scendi (a terra)":"F scendi/sali \xB7 E clacson \xB7 M mappa \xB7 C visuale \xB7 mouse: telecamera \xB7 Esc pausa",Qh(s.kind==="plane"?2e4:12e3)}var tp=0;function Qh(s=8e3){let t=St("helpbar");t.style.transition="opacity .6s",t.style.opacity="0.85",clearTimeout(tp),tp=setTimeout(()=>{t.style.opacity="0"},s)}function qv(s){let t=A.input.keys;return{throttle:Math.max(t.has("KeyW")?1:0,s.padThr||0),brake:Math.max(t.has("KeyS")?1:0,s.padBrk||0),pitch:Math.max(-1,Math.min(1,(t.has("ArrowUp")?1:0)-(t.has("ArrowDown")?1:0)-(s.stickY||0))),steer:s.steer,handbrake:s.handbrake}}var Cn=()=>!A.foot.on&&A.vehicle&&A.vehicle.isPlane&&!A.vehicle.onGround,ep={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},cp=()=>({halfL:A.vehicle.spec.L/2,halfW:A.vehicle.spec.W/2});function Yv(){let s=A.vehicle,t=A.foot;if(s.isPlane&&!s.onGround){Ce("Atterra prima di scendere",1200);return}if(Math.abs(s.u)>2.5){Ce("Fermati prima di scendere",1200);return}let e=Math.cos(s.h),n=-Math.sin(s.h);t.x=s.x+e*(s.spec.W/2+.75),t.z=s.z+n*(s.spec.W/2+.75),t.h=s.h,t.u=0,t.y=s.y,t.on=!0,(A.camMode===1||A.camMode===2)&&(A.camMode=0),A.orbit.yaw=0,A.camInit=!0,Ce("A piedi \u2014 F per salire su un veicolo",1800),Qh(6e3)}function Zv(){let s=A.foot,t=A.vehicle,e=A.traffic,n=Math.hypot(t.x-s.x,t.z-s.z)-t.spec.W/2,i=e.nearestCar(s.x,s.z,2.6),r=e.nearestParked(s.x,s.z,2.6),o=i?Math.hypot(i.x-s.x,i.z-s.z)-i.box.halfW:1e9,a=r?Math.hypot(r.x-s.x,r.z-s.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){Ce("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=A.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:cp(),model:c}),A.carModel=null,e.statics.length>6){let d=e.statics.shift();A.scene.remove(d.model.root)}let u=l===o?e.take(i):e.takeParked(r),h=ep[u.type]||ep.car,f=Us.find(d=>d.id===h[u.colour%h.length]);lp(f,"#"+Uh[u.colour%Uh.length].toString(16).padStart(6,"0")),A.vehicle.place(u.x,u.z,u.h),Ce(f.name,1500)}s.on=!1,A.orbit.yaw=0,A.camInit=!0}function $v(s,t){let e=A.foot,n=A.input.keys,i=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*s;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(i?6.2:2.3);e.u+=(o-e.u)*Math.min(1,s*8),e.x+=Math.sin(e.h)*e.u*s,e.z+=Math.cos(e.h)*e.u*s;let a={x:A.vehicle.x,z:A.vehicle.z,h:A.vehicle.h,box:cp()};for(let l=0;l<2;l++){let c=A.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),A.traffic.statics.push(a);let u=A.traffic.resolveCircle(e.x,e.z,.32);A.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=A.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function Kh(s,t,e=s){let n=performance.now();if(A.cool[e]&&n-A.cool[e]<(s==="camera"?2e4:5e3))return;A.cool[e]=n;let i=0,r=0,o="";if(s==="ped")i=870,r=8,o="Hai urtato un pedone!";else if(s==="red")i=167,r=6,o="Passaggio con il rosso";else if(s==="camera"){let a=t;a<=10?(i=42,r=0):a<=40?(i=173,r=3):a<=60?(i=543,r=6):(i=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=St("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}A.fines+=i,A.licence-=r,Ce(`\u{1F6A8} ${o} \u2014 multa \u20AC ${i}${r?`, \u2212${r} punti`:""}`,3200),A.licence<=0&&(A.licence=20,setTimeout(()=>Ce("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),St("licence").textContent=`\u{1FAAA} ${A.licence} punti \xB7 multe \u20AC ${A.fines.toLocaleString("it")}`}function Kv(s,t,e){if(A.foot.on||s.isPlane||!s.surface||!s.surface.road)return;let n=A.roads,i=s.surface.road,r=n.ways[i.wi];if(s.u>3)for(let o of[r.nodes[i.k],r.nodes[i.k+1]]){if(n.ntag[o]!==jt.SIGNALS||Math.hypot(n.nx[o]-s.x,n.nz[o]-s.z)>4.5)continue;let a=Math.sin(s.h),l=Math.cos(s.h);Pr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&Kh("red",0,"red"+o)}if(t>r.limit+5)for(let o of A.world.cameras)Math.hypot(o.x-s.x,o.z-s.z)<16&&Kh("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function Jv(){A.audio&&A.audio.start(),ap(),A.settings.viewTiles=(Bn[St("quality").value]||Bn.mid).viewTiles,A.settings.farKm=(Bn[St("quality").value]||Bn.mid).farKm,A.settings.detailKm=(Bn[St("quality").value]||Bn.mid).detailKm,A.settings.farKm>0&&!A.world.farIdx&&!A.farLoading&&(A.farLoading=!0,Sr("far","data/far.js").then(t=>A.world.initFar(t)).catch(()=>{})),A.traffic.target=+St("traffic").value,St("ptraffic").value=St("traffic").value,A.sky.hours=+St("tod").value,lp();let s=Qa(St("start").value);A.vehicle.place(s.x,s.z,s.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.traffic.clear();for(let t of A.traffic.statics)A.scene.remove(t.model.root);A.traffic.statics=[],A.foot.on=!1,A.orbit.yaw=0,A.orbit.pitch=0,A.peds.setTarget((Bn[St("quality").value]||Bn.mid).peds),A.camInit=!0,St("menu").classList.add("hidden"),St("hud").classList.remove("hidden"),A.started=!0,A.paused=!1,A.loadingWorld=!0,Ce("Caricamento della zona\u2026",1500),A.audio.start()}function jv(){let s=A.vehicle,t=A.roads;if(s.isPlane){s.launch(250,45),A.camInit=!0,Ce("Di nuovo in volo a 250 m",1200);return}let e=t.nearest(s.x,s.z,300,a=>a.drivable&&a.cls<=kt.SERVICE);if(!e)return;let n=t.ways[e.wi],i=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[i],t.nz[r]-t.nz[i]);!n.oneway&&Math.cos(o-s.h)<0&&(o+=Math.PI),s.place(e.px,e.pz,o),Ce("Rimesso in strada",1200)}var ja=0;function Ce(s,t=2500){let e=St("toast");e.textContent=s,e.classList.add("show"),ja=performance.now()+t}function Hr(s){if(!(!A.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(s);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var Qv={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function Hs(s){return s>=1e3?(s/1e3).toFixed(s>=1e4?0:1).replace(".",",")+" km":Math.round(s/10)*10+" m"}function tM(s){let t=Gr();if(Cn()&&A.dest){let l=A.dest[0]-t.x,c=A.dest[1]-t.z,u=Math.hypot(l,c),h=Math.atan2(l,c)-t.h;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;St("nav").classList.remove("hidden"),St("navarrow").textContent=Math.abs(h)<.3?"\u2B06":Math.abs(h)>2.6?"\u2B07":h>0?h>1.2?"\u2B05":"\u2196":h<-1.2?"\u27A1":"\u2197",St("navarrow").style.fontSize="44px",St("navd").textContent=Hs(u),St("navt").textContent="Destinazione in linea d'aria",St("naveta").textContent=`circa ${Math.max(1,Math.round(u/Math.max(20,t.u)/60))} min alla velocit\xE0 attuale`;return}if(!A.route){St("nav").classList.add("hidden");return}let e=A.route,n=Vd(e,t.x,t.z);if(n.off>40){if(A.offT=(A.offT||0)+s,A.offT>2.5){A.offT=0,tu(!0);return}}else A.offT=0;let i=e.length-n.s;if(i<25){Ce("\u{1F3C1} Sei arrivato a destinazione!",4e3),Hr("Sei arrivato a destinazione"),A.route=null,A.dest=null,St("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);St("nav").classList.remove("hidden"),St("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":Qv[r.type]||"\u2B06",St("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",St("navd").textContent=Hs(o),St("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));St("naveta").textContent=`Destinazione: ${Hs(i)} \xB7 circa ${Math.max(1,Math.round(i/a/60))} min`,A.lastStep!==r&&(A.lastStep=r,A.announced=0),A.announced===0&&o<400&&o>120&&(A.announced=1,Hr(`Tra ${Hs(o).replace(","," virgola ")}, ${r.text}`)),A.announced<=1&&o<70&&(A.announced=2,Hr(r.text))}function tu(s){if(!A.dest)return;if(Cn()){A.route=null,s||Ce(`Destinazione impostata: ${Hs(Math.hypot(A.dest[0]-A.vehicle.x,A.dest[1]-A.vehicle.z))} in linea d'aria`);return}let t=Gr(),e=A.router.route(t.x,t.z,t.h,A.dest[0],A.dest[1]);if(A.route=e,!e){Ce("Nessun percorso trovato verso la destinazione");return}A.lastStep=null,s?Hr("Ricalcolo del percorso"):(Ce(`Percorso calcolato: ${Hs(e.length)}`),Hr("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var qh=0,Yh=0,Zh=performance.now();function eM(s){let t=Gr(),e=A.roads,n=A.vehicle;qh+=s,Yh++;let i=performance.now();if(i-Zh>1e3&&(St("fps").textContent=Math.round(Yh*1e3/(i-Zh))+" fps",Yh=0,Zh=i),ja&&performance.now()>ja&&(St("toast").classList.remove("show"),ja=0),qh<.1)return;qh=0;let r=Math.abs(t.u*3.6);St("spd").textContent=Math.round(r),!A.foot.on&&n.isPlane?(St("gear").textContent=n.crashed>0?"INCIDENTE":n.onGround?"A TERRA":n.stall?"STALLO":"IN VOLO",St("gear").style.fontSize="14px",St("gear").style.color=n.stall&&!n.onGround?"var(--bad)":"",St("rpmbar").style.width=Math.round(n.lever*100)+"%"):(St("gear").textContent=A.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,St("gear").style.fontSize=A.foot.on?"14px":"",St("gear").style.color="",St("rpmbar").style.width=(A.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%");let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let g=e.nearest(t.x,t.z,25,x=>x.drivable);g&&(a=g.wi)}let l=A.world.comuneAt(t.x,t.z);if(Cn())St("roadname").textContent=n.crashed>0?"\u{1F4A5} Incidente \u2014 si riparte in volo":`In volo \xB7 ${Math.round(Math.max(0,n.agl))} m dal suolo`,St("limit").classList.add("hidden"),A.curLimit=0;else if(a>=0){let g=e.ways[a];St("roadname").textContent=e.displayName(g),St("limitv").textContent=g.limit,St("limit").classList.toggle("hidden",A.foot.on),St("limitest").textContent=g.limitMapped?"":"indicativo",St("limit").classList.toggle("over",r>g.limit*1.1+3),A.curLimit=g.limit}else St("roadname").textContent="Fuori strada",St("limit").classList.add("hidden"),A.curLimit=0;let c="",u=1e9;for(let g of A.meta.places){if(g.t==="town"||g.t==="city"||g.t==="locality")continue;let x=Math.hypot(g.x-t.x,g.z-t.z);x<u&&x<700&&(u=x,c=g.n)}St("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=A.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,m=["N","NE","E","SE","S","SO","O","NO"];St("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${m[Math.round(d/45)%8]}`,St("alt").textContent=!A.foot.on&&n.isPlane?`manetta ${Math.round(n.lever*100)}% \xB7 ${n.vy>=0?"\u2191":"\u2193"} ${Math.abs(n.vy).toFixed(1)} m/s`:"",St("clock").textContent="\u{1F552} "+A.sky.clock(),St("tspeed").textContent=A.sky.speed===0?"\u23F8":A.sky.speed===1?"1\xD7":A.sky.speed+"\xD7",!A.foot.on&&n.isPlane&&A.camMode===1?Od(A.carModel.dashCanvas,A.carModel.dashTex,r,n.agl,n.vy,n.lever,n.stall&&!n.onGround):!A.foot.on&&A.carModel.dashCanvas&&A.camMode===1&&Hd(A.carModel.dashCanvas,A.carModel.dashTex,r,n.rpm,n.spec.rpmMax,St("gear").textContent,A.curLimit)}function hp(s){A.mapOpen=!0,A.mapMode=s||"dest",St("mapview").classList.remove("hidden"),A.maps.resizeBig();let t=A.vehicle;if(A.started&&t)A.maps.cx=t.x,A.maps.cz=t.z,A.maps.zoom=.35;else{let e=Qa("casa");A.maps.cx=e.x,A.maps.cz=e.z,A.maps.zoom=.12}St("setdest").classList.toggle("hidden",!A.started),St("teleport").textContent=A.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",St("mapinfo").textContent=A.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",A.mapDirty=!0,St("search").value="",St("results").innerHTML=""}function kr(){A.mapOpen=!1,St("mapview").classList.add("hidden"),A.started||jh()}function np(s,t,e){A.mapSel=[s,t];let n=A.world.comuneAt(s,t),i=A.roads.nearest(s,t,150,o=>o.drivable),r=e||(i?A.roads.displayName(A.roads.ways[i.wi]):"Punto selezionato");A.mapSelLabel=r+(n?", "+n:""),St("mapinfo").innerHTML=`<b>${A.mapSelLabel}</b><br>${A.proj.toLatLon(s,t).map(o=>o.toFixed(5)).join(", ")}`,A.mapDirty=!0,A.started&&A.mapMode==="dest"&&up()}function up(){A.mapSel&&(A.dest=A.mapSel.slice(),tu(!1),A.mapDirty=!0)}function nM(){let s=St("bigmap"),t=null,e=!1;s.addEventListener("mousedown",i=>{t=[i.clientX,i.clientY,A.maps.cx,A.maps.cz],e=!1}),addEventListener("mousemove",i=>{if(!t||!A.mapOpen)return;let r=i.clientX-t[0],o=i.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),A.maps.cx=t[2]-r/A.maps.zoom,A.maps.cz=t[3]-o/A.maps.zoom,A.mapDirty=!0}),addEventListener("mouseup",i=>{if(t&&!e&&A.mapOpen&&i.target===s){let[r,o]=A.maps.toWorld(i.clientX,i.clientY);np(r,o)}t=null}),s.addEventListener("wheel",i=>{i.preventDefault();let[r,o]=A.maps.toWorld(i.clientX,i.clientY),a=Math.exp(-i.deltaY*.0015);A.maps.zoom=Math.max(.03,Math.min(6,A.maps.zoom*a));let[l,c]=A.maps.toWorld(i.clientX,i.clientY);A.maps.cx+=r-l,A.maps.cz+=o-c,A.mapDirty=!0},{passive:!1}),St("closemap").onclick=kr,St("setdest").onclick=()=>{up(),kr()},St("cleardest").onclick=()=>{A.route=null,A.dest=null,A.mapDirty=!0},St("teleport").onclick=()=>{if(!A.mapSel)return;if(!A.started){A.pickedStart=A.mapSel.slice(),kr(),St("pickinfo").textContent="Partenza: "+A.mapSelLabel;return}A.pickedStart=A.mapSel.slice();let i=Qa("picked");A.vehicle.place(i.x,i.z,i.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.foot.on=!1,A.traffic.clear(),A.camInit=!0,A.loadingWorld=!0,kr(),A.dest&&tu(!0)};let n=St("search");n.addEventListener("input",()=>{let i=n.value.trim().toLowerCase(),r=[];if(i.length>=2){for(let a of A.maps.comuni)a.n.toLowerCase().includes(i)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of A.meta.places)a.n.toLowerCase().includes(i)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of A.meta.landmarks)a[3].toLowerCase().includes(i)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(A.world.comuneAt(a[1],a[2])?" \xB7 "+A.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of A.roads.streets){if(!a.toLowerCase().includes(i))continue;let c=new Map;for(let u of l){let h=A.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}St("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{A.maps.cx=o.x,A.maps.cz=o.z,A.maps.zoom=Math.max(A.maps.zoom,.8),np(o.x,o.z,o.n)},St("results").appendChild(a)}})}function iM(){St("resume").onclick=()=>Jh(!1),St("tomenu").onclick=()=>{Jh(!1),A.started=!1,St("hud").classList.add("hidden"),jh()},St("ptraffic").onchange=n=>{A.traffic.target=+n.target.value,A.traffic.target||A.traffic.clear()},St("ptime").onchange=n=>{A.sky.speed=+n.target.value},St("pvoice").onchange=n=>{A.voice=n.target.value==="1"},St("paudio").onchange=n=>{A.audio.muted=n.target.value==="0"};let s=A.input.wheelCfg,t=(n,i)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=i};t(St("axsteer"),s.steerAxis),t(St("axthr"),s.throttleAxis),t(St("axbrk"),s.brakeAxis),St("wheelon").checked=s.enabled,St("axinv").checked=s.invertPedals;let e=()=>{s.enabled=St("wheelon").checked,s.steerAxis=+St("axsteer").value,s.throttleAxis=+St("axthr").value,s.brakeAxis=+St("axbrk").value,s.invertPedals=St("axinv").checked,A.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])St(n).onchange=e}function Jh(s){A.paused=s,St("pause").classList.toggle("hidden",!s),!s&&A.started&&Qh(6e3),s&&(St("ptime").value=String(A.sky.speed))}var Ka=new H,ip=new H,sM=new H,rM=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function oM(s,t){let e=A.vehicle,n=A.camera,i=A.carModel,r=A.foot,o=A.orbit,a=r.on?0:A.camMode;if(A.debugCam){n.position.set(...A.debugCam.pos),n.lookAt(...A.debugCam.look),n.near=1,n.updateProjectionMatrix(),i.interior.visible=!1;for(let l of i.exterior)l.visible=!0;return}i.interior.visible=a===1;for(let l of i.exterior)l.visible=a!==1;if(document.body.classList.toggle("cockpit",a===1),o.idle+=s,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-s*2.5),o.pitch*=Math.exp(-s*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*(e.isPlane?1.1:.75),u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),m=Math.sin(o.pitch),g=sM.set(l.x-Math.sin(f)*c*d,l.y+u+c*m,l.z-Math.cos(f)*c*d),x=A.roads.surfaceAt(g.x,g.z,l.y+3).h;g.y=Math.max(g.y,x+.8),A.camInit&&(Ka.copy(g),A.camInit=!1),Ka.lerp(g,1-Math.exp(-s*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(Ka);let p=r.on?.5:4;ip.set(l.x+Math.sin(f)*p,l.y+h,l.z+Math.cos(f)*p),n.lookAt(ip),n.near=.5}else{let l=a===1?i.root.userData.eye.clone():new H(0,e.spec.H*.82+.05,e.spec.L*.18);i.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(i.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new H(Math.sin(c)*u,(a===1?e.isPlane?-3.5:-3.2:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?i.root.userData.eye:new H(0,e.spec.H*.82,0)).applyMatrix4(i.root.matrixWorld);n.lookAt(h),n.near=.08,Ka.copy(n.position)}n.updateProjectionMatrix()}var Se={t:0,n:0,scale:1,good:0,shadowsOff:!1};function aM(s){if(A.autoOff||A.loadingWorld||s>.5||(Se.t+=s,Se.n++,Se.t<1.5))return;let t=Se.t/Se.n;Se.t=0,Se.n=0;let e=Math.min(devicePixelRatio,A.settings.pixelRatio),n=()=>{let i=Math.max(.5,e*Se.scale);A.renderer.setPixelRatio(i),A.composer&&A.composer.setPixelRatio(i)};t>.042?(Se.good=0,Se.scale>.61?(Se.scale=Math.max(.6,Se.scale-.14),n()):!Se.shadowsOff&&A.settings.shadows&&(Se.shadowsOff=!0,A.sky.sun.castShadow=!1)):t<.02?++Se.good>=3&&(Se.good=0,Se.shadowsOff?(Se.shadowsOff=!1,A.sky.sun.castShadow=!0):Se.scale<1&&(Se.scale=Math.min(1,Se.scale+.1),n())):Se.good=0,St("fps").title=`risoluzione ${Math.round(Se.scale*100)}%${Se.shadowsOff?", ombre spente":""}`}var sp=performance.now(),$h=0;function fp(s){requestAnimationFrame(fp);let t=(s-sp)/1e3,e=Math.min(.05,t);if(sp=s,!A.renderer)return;if(A.mapOpen){A.input.read(e),(A.input.consume("KeyM")||A.input.consume("Escape"))&&kr(),A.mapDirty&&(A.maps.drawBig(A.started?Gr():null,A.route,A.dest||(A.mapMode==="start"?null:A.mapSel)),A.mapDirty=!1),A.mapSel&&A.mapMode==="start"&&A.started;return}if(!A.started)return;let n=A.input;if(n.consume("Escape")&&Jh(!A.paused),A.paused){let _=n.axesSnapshot();St("axes").textContent=_?`${_.id}: `+_.axes.map((w,S)=>`${S}:${w.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let i=n.read(e);if((n.consume("KeyC")||i.buttons.has(3))&&(A.camMode=(A.camMode+1)%4,Ce(rM[A.camMode],1e3)),n.consume("KeyM")||i.buttons.has(8)){hp("dest");return}if(n.consume("KeyN")&&St("mini-wrap").classList.toggle("hidden"),(n.consume("KeyH")||i.buttons.has(2))&&(A.lightsOn=!A.lightsOn,Ce(A.lightsOn?"Fari accesi":"Fari spenti",900)),n.consume("KeyR")&&!A.foot.on&&jv(),n.consume("KeyK")&&(A.world.labelsOn=!A.world.labelsOn,Ce(A.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),n.consume("KeyT")){let _=[30,300,0,1];A.sky.speed=_[(_.indexOf(A.sky.speed)+1)%_.length],Ce("Velocit\xE0 del tempo: "+(A.sky.speed?A.sky.speed+"\xD7":"ferma"),1e3)}(n.consume("Equal")||n.consume("NumpadAdd"))&&(A.sky.hours=(A.sky.hours+1)%24),(n.consume("Minus")||n.consume("NumpadSubtract"))&&(A.sky.hours=(A.sky.hours+23)%24),(n.consume("KeyF")||n.consume("Enter")||i.buttons.has(1))&&(A.foot.on?Zv():Yv());let r=!A.foot.on&&(n.keys.has("KeyE")||!!i.hornPad);A.audio.horn(r);let o=A.vehicle,a=A.foot,l=Gr();if(A.world.update(l.x,l.z),A.world.pump(A.loadingWorld?40:Cn()?12:7),A.settings.farKm>0&&(A.world.updateFar(l.x,l.z,Cn()?A.settings.farKm*1e3:Math.min(A.settings.farKm*1e3,3200)),A.world.pumpFar(A.loadingWorld?12:3)),A.loadingWorld)if(A.world.ready(o.x,o.z)){if(A.loadingWorld=!1,o.pendingLaunch)o.pendingLaunch=!1,o.launch(250,45),A.camInit=!0,Ce("\u2708 In volo sopra la Brianza \u2014 W/S manetta, \u2191/\u2193 cabra/picchia, A/D vira",4500);else if(!o.isPlane||o.onGround){let _=A.roads.surfaceAt(o.x,o.z,1e9);o.y=_.h}}else i.throttle=0,i.brake=1;A.loadingWorld||(a.on?(o.update(e,{throttle:0,brake:1,steer:0,handbrake:1,pitch:0}),$v(e,i)):o.update(e,o.isPlane?qv(i):i)),o.isPlane&&(o.crashed>0&&!o.crashShown&&(o.crashShown=!0,Ce("\u{1F4A5} "+o.crashMsg+" Si riparte in volo\u2026",2200)),o.relaunched&&(o.relaunched=!1,o.crashShown=!1,A.camInit=!0),o.touchdown&&(o.touchdown=!1,Ce(o.impact>.4?"Atterraggio un po' brusco":"\u{1F6EC} Atterraggio riuscito",1800),o.impact=0),o.outside&&(o.outside=0,Ce("Fine della zona: si torna indietro",1500)));let c=Math.sin(o.h),u=Math.cos(o.h),h=Math.cos(o.h),f=-Math.sin(o.h),d=Cn()?[]:[{x:o.x,z:o.z,h:o.h,vx:c*o.u+h*o.v,vz:u*o.u+f*o.v,halfL:o.spec.L/2,halfW:o.spec.W/2,player:!0}];for(let _ of A.traffic.cars)Math.abs(_.x-l.x)<90&&Math.abs(_.z-l.z)<90&&d.push({x:_.x,z:_.z,h:_.h,vx:Math.sin(_.h)*_.speed,vz:Math.cos(_.h)*_.speed,halfL:_.box.halfL,halfW:_.box.halfW});let m=A.loadingWorld?[]:A.peds.update(e,l.x,l.z,d,r);a.on&&m.push([a.x,a.z]),A.traffic.obstacles=m,A.traffic.update(e,{x:o.x,z:o.z,h:o.h,u:o.u,wi:o.surface&&o.surface.road?o.surface.road.wi:-1,active:!Cn()},s/1e3);let g=Cn()?[]:[{x:o.x,z:o.z}];for(let _ of A.traffic.cars)Math.abs(_.x-l.x)<300&&Math.abs(_.z-l.z)<300&&g.push(_);A.world.gates.update(e,g),A.peds.drawPlayer(a.on,a.x,a.y,a.z,a.h,a.gait,a.u,e);let x=A.carModel;x.root.position.set(o.x,o.y,o.z),x.root.rotation.set(-(o.pitch+o.dynPitch),o.h,o.roll+o.dynRoll,"YXZ");for(let _ of x.wheels)_.pivot.rotation.x=o.wheelSpinAngle||0,_.front&&(_.pivot.rotation.y=o.steer);x.prop&&(x.prop.rotation.z=o.propAngle||0),x.steeringWheel&&(x.steeringWheel.rotation.z=-o.steer*7);let p=!a.on&&(A.lightsOn||A.sky.night>.55||(A.tunnelK||0)>.5);x.headlight&&(x.headlight.intensity=p?70:0),x.tailGlow&&(x.tailGlow.intensity=o.brake>.05&&!a.on?2.2:p?.6:0),rp.set(l.x,Cn()?o.y-o.agl:l.y,l.z),A.sky.update(e,rp);let M=!a.on&&o.surface&&o.surface.road?A.roads.ways[o.surface.road.wi]:null,v=M&&M.flags&8&&A.terrain.height(o.x,o.z)-o.y>4?1:0;A.tunnelK=(A.tunnelK||0)+(v-(A.tunnelK||0))*Math.min(1,e*2.5),A.tunnelK>.01&&(A.sky.sun.intensity*=1-.92*A.tunnelK,A.sky.hemi.intensity*=1-.6*A.tunnelK,A.scene.fog.color.multiplyScalar(1-.88*A.tunnelK)),A.world.updateWater(s/1e3,A.scene.fog.color),aM(t);let y=Cn()?1+Math.min(1.9,o.agl/130):1;A.scene.fog.near*=y,A.scene.fog.far*=y,A.camera.far=Math.max(1700,A.scene.fog.far*1.06),A.world.buildings.setNight(A.sky.night),A.world.signage.update(s/1e3,A.sky.night),A.traffic.setNight(A.sky.night),oM(e,n.keys.has("KeyV")),A.world.updateLabels(A.camera,Cn()),eM(e),tM(e),Kv(o,Math.abs(o.u)*3.6,s),$h+=e,$h>.05&&!St("mini-wrap").classList.contains("hidden")&&($h=0,A.maps.drawMini(l,A.route,A.sky.night>.5)),a.on?A.audio.update(800,0,0,0):A.audio.update(o.rpm,o.throttle,Math.abs(o.u)*3.6,o.slip),o.impact>.25&&!a.on&&!o.isPlane&&Ce("\u{1F4A5} Urto!",700),o.impact=0,A.composer&&A.sky.night>.2?(A.bloom.strength=A.sky.night*.55,A.composer.render()):A.renderer.render(A.scene,A.camera)}var rp=new H;Gv().catch(op);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
