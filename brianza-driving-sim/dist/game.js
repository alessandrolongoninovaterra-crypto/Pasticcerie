(()=>{var hh="170";var pp=0,lu=1,mp=2;var la=1,uh=2,Yn=3,ui=0,We=1,re=2,Dn=0,us=1,fi=2,cu=3,hu=4,gp=5,Ci=100,xp=101,yp=102,vp=103,Mp=104,_p=200,bp=201,wp=202,Ep=203,Fl=204,Bl=205,Sp=206,Tp=207,Ap=208,Rp=209,Cp=210,Ip=211,Pp=212,Lp=213,Dp=214,Ol=0,kl=1,Hl=2,ms=3,Gl=4,Vl=5,Wl=6,Xl=7,ca=0,Up=1,Np=2,hi=0,fh=1,dh=2,ph=3,Er=4,zp=5,mh=6,gh=7;var Tf=300,gs=301,xs=302,ql=303,Yl=304,ha=306,di=1e3,_n=1001,Zl=1002,an=1003,Fp=1004;var Xr=1005;var Pn=1006,nl=1007;var Pi=1008;var Jn=1009,Af=1010,Rf=1011,lr=1012,xh=1013,Li=1014,Ln=1015,Sn=1016,yh=1017,vh=1018,ys=1020,Cf=35902,If=1021,Pf=1022,bn=1023,Lf=1024,Df=1025,fs=1026,vs=1027,Mh=1028,_h=1029,Uf=1030,bh=1031;var wh=1033,So=33776,To=33777,Ao=33778,Ro=33779,$l=35840,Kl=35841,Jl=35842,jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,fc=37818,dc=37819,pc=37820,mc=37821,Co=36492,gc=36494,xc=36495,Nf=36283,yc=36284,vc=36285,Mc=36286;var Io=2300,_c=2301,il=2302,uu=2400,fu=2401,du=2402;var Bp=3200,Eh=3201;var ua=0,Op=1,li="",ye="srgb",Cs="srgb-linear",fa="linear",pe="srgb";var Wi=7680;var pu=519,kp=512,Hp=513,Gp=514,zf=515,Vp=516,Wp=517,Xp=518,qp=519,bc=35044,Ff=35048;var mu="300 es",$n=2e3,Po=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,ir=Math.PI/180,Ms=180/Math.PI;function Un(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ne(s,t,e){return Math.max(t,Math.min(e,s))}function Sh(s,t){return(s%t+t)%t}function Yp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Zp(s,t,e){return s!==t?(e-s)/(t-s):0}function sr(s,t,e){return(1-e)*s+e*t}function $p(s,t,e,n){return sr(s,t,1-Math.exp(-e*n))}function Kp(s,t=1){return t-Math.abs(Sh(s,t*2)-t)}function Jp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function jp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function t0(s,t){return s+Math.random()*(t-s)}function e0(s){return s*(.5-Math.random())}function n0(s){s!==void 0&&(gu=s);let t=gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i0(s){return s*ir}function s0(s){return s*Ms}function r0(s){return(s&s-1)===0&&s!==0}function o0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function a0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function l0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Bf={DEG2RAD:ir,RAD2DEG:Ms,generateUUID:Un,clamp:Ne,euclideanModulo:Sh,mapLinear:Yp,inverseLerp:Zp,lerp:sr,damp:$p,pingpong:Kp,smoothstep:Jp,smootherstep:jp,randInt:Qp,randFloat:t0,randFloatSpread:e0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:l0,normalize:ge,denormalize:Mn},Mt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=i[0],p=i[3],y=i[6],M=i[1],x=i[4],v=i[7],b=i[2],E=i[5],S=i[8];return r[0]=o*g+a*M+l*b,r[3]=o*p+a*x+l*E,r[6]=o*y+a*v+l*S,r[1]=c*g+u*M+h*b,r[4]=c*p+u*x+h*E,r[7]=c*y+u*v+h*S,r[2]=f*g+d*M+m*b,r[5]=f*p+d*x+m*E,r[8]=f*y+d*v+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new ie;function Of(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function c0(){let s=Lo("canvas");return s.style.display="block",s}var xu={};function er(s){s in xu||(xu[s]=!0,console.warn(s))}function h0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function u0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function f0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?fa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var yu=[.64,.33,.3,.6,.15,.06],vu=[.2126,.7152,.0722],Mu=[.3127,.329],_u=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Cs]:{primaries:yu,whitePoint:Mu,transfer:fa,toXYZ:_u,fromXYZ:bu,luminanceCoefficients:vu,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:yu,whitePoint:Mu,transfer:pe,toXYZ:_u,fromXYZ:bu,luminanceCoefficients:vu,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var Xi,wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Lo("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},d0=0,Do=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(rl(i[o].image)):r.push(rl(i[o]))}else r=rl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function rl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var p0=0,tn=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=Pn,o=Pi,a=bn,l=Jn,c=s.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Un(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Tf;tn.DEFAULT_ANISOTROPY=1;var xe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],p=l[6],y=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,b=(y+1)/2,E=(u+f)/4,S=(h+g)/4,T=(m+p)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=S/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=T/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Do(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Uo=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ce=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let p=1-a,y=l*f+c*d+u*m+h*g,M=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let b=Math.sqrt(x),E=Math.atan2(b,y*M);p=Math.sin(p*E)/b,a=Math.sin(a*E)/b}let v=a*M;if(l=l*p+f*v,c=c*p+d*v,u=u*p+m*v,h=h*p+g*v,p===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new H,wu=new Ce,jn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Yr.subVectors(this.max,Ws),qi.subVectors(t.a,Ws),Yi.subVectors(t.b,Ws),Zi.subVectors(t.c,Ws),ni.subVectors(Yi,qi),ii.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!al(e,qi,Yi,Zi,Yr)||(e=[1,0,0,0,1,0,0,0,1],!al(e,qi,Yi,Zi,Yr))?!1:(Zr.crossVectors(ni,ii),e=[Zr.x,Zr.y,Zr.z],al(e,qi,Yi,Zi,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,qr=new jn,qi=new H,Yi=new H,Zi=new H,ni=new H,ii=new H,bi=new H,Ws=new H,Yr=new H,Zr=new H,wi=new H;function al(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var m0=new jn,Xs=new H,ll=new H,Qn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):m0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(ll)),this.expandByPoint(Xs.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new H,cl=new H,$r=new H,si=new H,hl=new H,Kr=new H,ul=new H,cr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cl.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),si.copy(this.origin).sub(cl);let r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=si.dot(this.direction),l=-si.dot($r),c=si.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(cl).addScaledVector($r,f),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){hl.subVectors(e,t),Kr.subVectors(n,t),ul.crossVectors(hl,Kr);let o=this.direction.dot(ul),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let l=a*this.direction.dot(Kr.crossVectors(si,Kr));if(l<0)return null;let c=a*this.direction.dot(hl.cross(si));if(c<0||l+c>o)return null;let u=-a*si.dot(ul);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,p)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,g,p){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=d,y[7]=m,y[11]=g,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f+g*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-g*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g0,t,x0)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ri.crossVectors(n,rn),ri.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ri.crossVectors(n,rn)),ri.normalize(),Jr.crossVectors(rn,ri),i[0]=ri.x,i[4]=Jr.x,i[8]=rn.x,i[1]=ri.y,i[5]=Jr.y,i[9]=rn.y,i[2]=ri.z,i[6]=Jr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],p=n[10],y=n[14],M=n[3],x=n[7],v=n[11],b=n[15],E=i[0],S=i[4],T=i[8],_=i[12],w=i[1],R=i[5],L=i[9],N=i[13],U=i[2],B=i[6],F=i[10],W=i[14],O=i[3],X=i[7],Z=i[11],V=i[15];return r[0]=o*E+a*w+l*U+c*O,r[4]=o*S+a*R+l*B+c*X,r[8]=o*T+a*L+l*F+c*Z,r[12]=o*_+a*N+l*W+c*V,r[1]=u*E+h*w+f*U+d*O,r[5]=u*S+h*R+f*B+d*X,r[9]=u*T+h*L+f*F+d*Z,r[13]=u*_+h*N+f*W+d*V,r[2]=m*E+g*w+p*U+y*O,r[6]=m*S+g*R+p*B+y*X,r[10]=m*T+g*L+p*F+y*Z,r[14]=m*_+g*N+p*W+y*V,r[3]=M*E+x*w+v*U+b*O,r[7]=M*S+x*R+v*B+b*X,r[11]=M*T+x*L+v*F+b*Z,r[15]=M*_+x*N+v*W+b*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],g=t[7],p=t[11],y=t[15];return m*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+y*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],g=t[13],p=t[14],y=t[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*y+a*f*y,x=m*f*c-u*p*c-m*l*d+o*p*d+u*l*y-o*f*y,v=u*g*c-m*h*c+m*a*d-o*g*d-u*a*y+o*h*y,b=m*h*l-u*g*l-m*a*f+o*g*f+u*a*p-o*h*p,E=e*M+n*x+i*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=M*S,t[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*y-n*f*y)*S,t[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*y+n*l*y)*S,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=x*S,t[5]=(u*p*r-m*f*r+m*i*d-e*p*d-u*i*y+e*f*y)*S,t[6]=(m*l*r-o*p*r-m*i*c+e*p*c+o*i*y-e*l*y)*S,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=v*S,t[9]=(m*h*r-u*g*r-m*n*d+e*g*d+u*n*y-e*h*y)*S,t[10]=(o*g*r-m*a*r+m*n*c-e*g*c-o*n*y+e*a*y)*S,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*S,t[12]=b*S,t[13]=(u*g*i-m*h*i+m*n*f-e*g*f-u*n*p+e*h*p)*S,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*p-e*a*p)*S,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,g=o*u,p=o*h,y=a*h,M=l*c,x=l*u,v=l*h,b=n.x,E=n.y,S=n.z;return i[0]=(1-(g+y))*b,i[1]=(d+v)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+y))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+x)*S,i[9]=(p-M)*S,i[10]=(1-(f+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=$i.set(i[0],i[1],i[2]).length(),o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=$n){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===$n)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Po)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=$n){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u,m,g;if(a===$n)m=(o+r)*h,g=-2*h;else if(a===Po)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new H,yn=new Kt,g0=new H(0,0,0),x0=new H(1,1,1),ri=new H,Jr=new H,rn=new H,Eu=new Kt,Su=new Ce,Ke=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},y0=0,Tu=new H,Ki=new Ce,Wn=new Kt,jr=new H,qs=new H,v0=new H,M0=new Ce,Au=new H(1,0,0),Ru=new H(0,1,0),Cu=new H(0,0,1),Iu={type:"added"},_0={type:"removed"},Ji={type:"childadded",child:null},fl={type:"childremoved",child:null},De=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new Ke,n=new Ce,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ie}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(qs,jr,this.up):Wn.lookAt(jr,qs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_0),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,M0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};De.DEFAULT_UP=new H(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new H,Xn=new H,dl=new H,qn=new H,ji=new H,Qi=new H,Pu=new H,pl=new H,ml=new H,gl=new H,xl=new xe,yl=new xe,vl=new xe,ci=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Xn.subVectors(n,e),dl.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Xn),l=vn.dot(dl),c=Xn.dot(Xn),u=Xn.dot(dl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Xn.subVectors(t,e),vn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ji.subVectors(i,n),Qi.subVectors(r,n),pl.subVectors(t,n);let l=ji.dot(pl),c=Qi.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,i);let u=ji.dot(ml),h=Qi.dot(ml);if(u>=0&&h<=u)return e.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);gl.subVectors(t,r);let d=ji.dot(gl),m=Qi.dot(gl);if(m>=0&&d<=m)return e.copy(r);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Qi,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Pu.subVectors(r,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(Pu,a);let y=1/(p+g+f);return o=g*y,a=f*y,e.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ml(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Sh(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ne(Ve.r*255,0,255))*65536+Math.round(Ne(Ve.g*255,0,255))*256+Math.round(Ne(Ve.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ye){le.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Qr);let n=sr(oi.h,Qr.h,e),i=sr(oi.s,Qr.s,e),r=sr(oi.l,Qr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ct;Ct.NAMES=kf;var b0=0,un=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Un(),this.name="",this.blending=us,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new H,to=new Mt,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var _s=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}},w0=0,hn=new Kt,_l=new De,ts=new H,on=new jn,Ys=new jn,Be=new H,te=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?bs:_s)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(on.min,Ys.min),on.expandByPoint(Be),Be.addVectors(on.max,Ys.max),on.expandByPoint(Be)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Be.add(ts)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new H,l[T]=new H;let c=new H,u=new H,h=new H,f=new Mt,d=new Mt,m=new Mt,g=new H,p=new H;function y(T,_,w){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,w),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[T].add(g),a[_].add(g),a[w].add(g),l[T].add(p),l[_].add(p),l[w].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,_=M.length;T<_;++T){let w=M[T],R=w.start,L=w.count;for(let N=R,U=R+L;N<U;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new H,v=new H,b=new H,E=new H;function S(T){b.fromBufferAttribute(i,T),E.copy(b);let _=a[T];x.copy(_),x.sub(b.multiplyScalar(b.dot(_))).normalize(),v.crossVectors(E,_);let R=v.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,R)}for(let T=0,_=M.length;T<_;++T){let w=M[T],R=w.start,L=w.count;for(let N=R,U=R+L;N<U;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let y=0;y<u;y++)f[m++]=c[d++]}return new he(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lu=new Kt,Ei=new cr,eo=new Qn,Du=new H,no=new H,io=new H,so=new H,bl=new H,ro=new H,Uu=new H,oo=new H,St=class extends De{constructor(t=new te,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(bl.fromBufferAttribute(h,t),o?ro.addScaledVector(bl,u):ro.addScaledVector(bl.sub(e),u))}e.add(ro)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(eo.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(eo,Du)===null||Ei.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let p=f[m],y=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){let E=a.getX(v),S=a.getX(v+1),T=a.getX(v+2);i=ao(this,y,t,n,c,u,h,E,S,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,y=g;p<y;p+=3){let M=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);i=ao(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let p=f[m],y=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){let E=v,S=v+1,T=v+2;i=ao(this,y,t,n,c,u,h,E,S,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=m,y=g;p<y;p+=3){let M=p,x=p+1,v=p+2;i=ao(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function E0(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ui,a),l===null)return null;oo.copy(a),oo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:s}}function ao(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,no),s.getVertexPosition(l,io),s.getVertexPosition(c,so);let u=E0(s,t,e,n,no,io,so,Uu);if(u){let h=new H;ci.getBarycoord(Uu,no,io,so,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new Mt)),r&&(u.uv1=ci.getInterpolatedAttribute(r,a,l,c,h,new Mt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ci.getNormal(no,io,so,f.normal),u.face=f,u.barycoord=h}return u}var Ut=class s extends te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(g,p,y,M,x,v,b,E,S,T,_){let w=v/S,R=b/T,L=v/2,N=b/2,U=E/2,B=S+1,F=T+1,W=0,O=0,X=new H;for(let Z=0;Z<F;Z++){let V=Z*R-N;for(let Q=0;Q<B;Q++){let K=Q*w-L;X[g]=K*M,X[p]=V*x,X[y]=U,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[y]=E>0?1:-1,u.push(X.x,X.y,X.z),h.push(Q/S),h.push(1-Z/T),W+=1}}for(let Z=0;Z<T;Z++)for(let V=0;V<S;V++){let Q=f+V+B*Z,K=f+V+B*(Z+1),D=f+(V+1)+B*(Z+1),k=f+(V+1)+B*Z;l.push(Q,K,k),l.push(K,D,k),O+=6}a.addGroup(d,O,_),d+=O,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function S0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var gi={clone:ws,merge:Ze},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=S0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zo=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new H,Nu=new Mt,zu=new Mt,ke=class extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,zu),e.subVectors(zu,Nu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Tc=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(es,ns,t,e);i.layers=this.layers,this.add(i);let r=new ke(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new ke(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new ke(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new ke(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new ke(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ut(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Dn});r.uniforms.tEquirect.value=e;let o=new St(i,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Pn),new Tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},wl=new H,R0=new H,C0=new ie,Zn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=wl.subVectors(n,e).cross(R0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||C0.getNormalMatrix(t),i=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new Qn,lo=new H,hr=class{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],g=i[10],p=i[11],y=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-y).normalize(),n[1].setComponents(l+r,f+c,p+d,v+y).normalize(),n[2].setComponents(l+o,f+u,p+m,v+M).normalize(),n[3].setComponents(l-o,f-u,p-m,v-M).normalize(),n[4].setComponents(l-a,f-h,p-g,v-x).normalize(),e===$n)n[5].setComponents(l+a,f+h,p+g,v+x).normalize();else if(e===Po)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lo.x=i.normal.x>0?t.max.x:t.min.x,lo.y=i.normal.y>0?t.max.y:t.min.y,lo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function I0(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var en=class s extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],g=[],p=[];for(let y=0;y<u;y++){let M=y*f-o;for(let x=0;x<c;x++){let v=x*h-r;m.push(v,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let M=0;M<a;M++){let x=M+c*y,v=M+c*(y+1),b=M+1+c*(y+1),E=M+1+c*y;d.push(x,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,sx=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:U0,alphatest_fragment:N0,alphatest_pars_fragment:z0,aomap_fragment:F0,aomap_pars_fragment:B0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:$0,color_fragment:K0,color_pars_fragment:J0,color_pars_vertex:j0,color_vertex:Q0,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:wm,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:vm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:_m,lights_pars_begin:bm,lights_toon_fragment:Em,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Rm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Im,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:zm,map_fragment:Fm,map_pars_fragment:Bm,map_particle_fragment:Om,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:dg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:xg,skinning_vertex:yg,skinnormal_vertex:vg,specularmap_fragment:Mg,specularmap_pars_fragment:_g,tonemapping_fragment:bg,tonemapping_pars_fragment:wg,transmission_fragment:Eg,transmission_pars_fragment:Sg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Ig,background_frag:Pg,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:Ng,depth_vert:zg,depth_frag:Fg,distanceRGBA_vert:Bg,distanceRGBA_frag:Og,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ox,shadow_frag:ax,sprite_vert:lx,sprite_frag:cx},Pt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},In={basic:{uniforms:Ze([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ze([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ze([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ze([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ze([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ze([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ze([Pt.points,Pt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ze([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ze([Pt.common,Pt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ze([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ze([Pt.sprite,Pt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ze([Pt.common,Pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ze([Pt.lights,Pt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};In.physical={uniforms:Ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var co={r:0,b:0,g:0},Ti=new Ke,hx=new Kt;function ux(s,t,e,n,i,r,o){let a=new Ct(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1,v=m(M);v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,x){let v=m(x);v&&(v.isCubeTexture||v.mapping===ha)?(u===void 0&&(u=new St(new Ut(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:ws(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ti)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==pe,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new en(2,2),new Ie({name:"BackgroundMaterial",uniforms:ws(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function y(M,x){M.getRGB(co,Hf(s)),n.buffers.color.setClear(co.r,co.g,co.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,y(a,l)},render:g,addToRenderList:p}}function fx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(w,R,L,N,U){let B=!1,F=h(N,L,R);r!==F&&(r=F,c(r.object)),B=d(w,N,L,U),B&&m(w,N,L,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(w,R,L,N),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,R,L){let N=L.wireframe===!0,U=n[w.id];U===void 0&&(U={},n[w.id]=U);let B=U[R.id];B===void 0&&(B={},U[R.id]=B);let F=B[N];return F===void 0&&(F=f(l()),B[N]=F),F}function f(w){let R=[],L=[],N=[];for(let U=0;U<e;U++)R[U]=0,L[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:N,object:w,attributes:{},index:null}}function d(w,R,L,N){let U=r.attributes,B=R.attributes,F=0,W=L.getAttributes();for(let O in W)if(W[O].location>=0){let Z=U[O],V=B[O];if(V===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),Z===void 0||Z.attribute!==V||V&&Z.data!==V.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function m(w,R,L,N){let U={},B=R.attributes,F=0,W=L.getAttributes();for(let O in W)if(W[O].location>=0){let Z=B[O];Z===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor));let V={};V.attribute=Z,Z&&Z.data&&(V.data=Z.data),U[O]=V,F++}r.attributes=U,r.attributesNum=F,r.index=N}function g(){let w=r.newAttributes;for(let R=0,L=w.length;R<L;R++)w[R]=0}function p(w){y(w,0)}function y(w,R){let L=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;L[w]=1,N[w]===0&&(s.enableVertexAttribArray(w),N[w]=1),U[w]!==R&&(s.vertexAttribDivisor(w,R),U[w]=R)}function M(){let w=r.newAttributes,R=r.enabledAttributes;for(let L=0,N=R.length;L<N;L++)R[L]!==w[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function x(w,R,L,N,U,B,F){F===!0?s.vertexAttribIPointer(w,R,L,U,B):s.vertexAttribPointer(w,R,L,N,U,B)}function v(w,R,L,N){g();let U=N.attributes,B=L.getAttributes(),F=R.defaultAttributeValues;for(let W in B){let O=B[W];if(O.location>=0){let X=U[W];if(X===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),X!==void 0){let Z=X.normalized,V=X.itemSize,Q=t.get(X);if(Q===void 0)continue;let K=Q.buffer,D=Q.type,k=Q.bytesPerElement,Y=D===s.INT||D===s.UNSIGNED_INT||X.gpuType===xh;if(X.isInterleavedBufferAttribute){let tt=X.data,$=tt.stride,at=X.offset;if(tt.isInstancedInterleavedBuffer){for(let et=0;et<O.locationSize;et++)y(O.location+et,tt.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<O.locationSize;et++)p(O.location+et);s.bindBuffer(s.ARRAY_BUFFER,K);for(let et=0;et<O.locationSize;et++)x(O.location+et,V/O.locationSize,D,Z,$*k,(at+V/O.locationSize*et)*k,Y)}else{if(X.isInstancedBufferAttribute){for(let tt=0;tt<O.locationSize;tt++)y(O.location+tt,X.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let tt=0;tt<O.locationSize;tt++)p(O.location+tt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let tt=0;tt<O.locationSize;tt++)x(O.location+tt,V/O.locationSize,D,Z,V*k,V/O.locationSize*tt*k,Y)}}else if(F!==void 0){let Z=F[W];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(O.location,Z);break;case 3:s.vertexAttrib3fv(O.location,Z);break;case 4:s.vertexAttrib4fv(O.location,Z);break;default:s.vertexAttrib1fv(O.location,Z)}}}}M()}function b(){T();for(let w in n){let R=n[w];for(let L in R){let N=R[L];for(let U in N)u(N[U].object),delete N[U];delete R[L]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let L in R){let N=R[L];for(let U in N)u(N[U].object),delete N[U];delete R[L]}delete n[w.id]}function S(w){for(let R in n){let L=n[R];if(L[w.id]===void 0)continue;let N=L[w.id];for(let U in N)u(N[U].object),delete N[U];delete L[w.id]}}function T(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:_,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function dx(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function px(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==bn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let T=S===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Jn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ln&&!T)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:y,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function mx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,y=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,x=M*4,v=y.clippingState||null;l.value=v,v=u(m,f,x,d);for(let b=0;b!==x;++b)v[b]=e[b];y.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let g=h!==null?h.length:0,p=null;if(g!==0){if(p=l.value,m!==!0||p===null){let y=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<y)&&(p=new Float32Array(y));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function gx(s){let t=new WeakMap;function e(o,a){return a===ql?o.mapping=gs:a===Yl&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ql||a===Yl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Es=class extends zo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Fu=[.125,.215,.35,.446,.526,.582],Ii=20,El=new Es,Bu=new Ct,Sl=null,Tl=0,Al=0,Rl=!1,Ri=(1+Math.sqrt(5))/2,is=1/Ri,Ou=[new H(-Ri,is,0),new H(Ri,is,0),new H(-is,0,Ri),new H(is,0,Ri),new H(0,Ri,-is),new H(0,Ri,is),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Bo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,Tl,Al),this._renderer.xr.enabled=Rl,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Sn,format:bn,colorSpace:Cs,depthBuffer:!1},i=ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(r)),this._blurMaterial=yx(r,t,e)}return i}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,n,i){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bu),u.toneMapping=hi,u.autoClear=!1;let d=new Ue({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new St(new Ut,d),g=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Bu),g=!0);for(let y=0;y<6;y++){let M=y%3;M===0?(a.up.set(0,l[y],0),a.lookAt(c[y],0,0)):M===1?(a.up.set(0,0,l[y]),a.lookAt(0,c[y],0)):(a.up.set(0,l[y],0),a.lookAt(0,0,c[y]));let x=this._cubeSize;ho(i,M*x,y>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gs||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,El)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(i-r-1)%Ou.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new St(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),g=r/m,p=isFinite(r)?1+Math.floor(u*g):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let y=[],M=0;for(let S=0;S<Ii;++S){let T=S/g,_=Math.exp(-T*T/2);y.push(_),S===0?M+=_:S<p&&(M+=2*_)}for(let S=0;S<y.length;S++)y[S]=y[S]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=y,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let v=this._sizeLods[i],b=3*v*(i>x-cs?i-x+cs:0),E=4*(this._cubeSize-v);ho(e,b,E,3*v,2*v),l.setRenderTarget(e),l.render(h,El)}};function xx(s){let t=[],e=[],n=[],i=s,r=s-cs+1+Fu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-cs?l=Fu[o-s+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,p=2,y=1,M=new Float32Array(g*m*d),x=new Float32Array(p*m*d),v=new Float32Array(y*m*d);for(let E=0;E<d;E++){let S=E%3*2/3-1,T=E>2?0:-1,_=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];M.set(_,g*m*E),x.set(f,p*m*E);let w=[E,E,E,E,E,E];v.set(w,y*m*E)}let b=new te;b.setAttribute("position",new he(M,g)),b.setAttribute("uv",new he(x,p)),b.setAttribute("faceIndex",new he(v,y)),t.push(b),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ku(s,t,e){let n=new $e(s,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function yx(s,t,e){let n=new Float32Array(Ii),i=new H(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Hu(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Gu(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function vx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ql||l===Yl,u=l===gs||l===xs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bo(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Bo(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _x(s,t,e,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let p=0,y=g.length;p<y;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let g=d[m];for(let p=0,y=g.length;p<y;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,m=h.attributes.position,g=0;if(d!==null){let M=d.array;g=d.version;for(let x=0,v=M.length;x<v;x+=3){let b=M[x+0],E=M[x+1],S=M[x+2];f.push(b,E,E,S,S,b)}}else if(m!==void 0){let M=m.array;g=m.version;for(let x=0,v=M.length/3-1;x<v;x+=3){let b=x+0,E=x+1,S=x+2;f.push(b,E,E,S,S,b)}}else return;let p=new(Of(f)?bs:_s)(f,1);p.version=g;let y=r.get(h);y&&t.remove(y),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y];e.update(p,n,1)}function h(f,d,m,g){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<f.length;y++)c(f[y]/o,d[y],g[y]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,m);let y=0;for(let M=0;M<m;M++)y+=d[M]*g[M];e.update(y,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ex(s,t,e){let n=new WeakMap,i=new xe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),g===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*h),S=new Uo(E,v,b,h);S.type=Ln,S.needsUpdate=!0;let T=x*4;for(let w=0;w<h;w++){let R=p[w],L=y[w],N=M[w],U=v*b*4*w;for(let B=0;B<R.count;B++){let F=B*T;d===!0&&(i.fromBufferAttribute(R,B),E[U+F+0]=i.x,E[U+F+1]=i.y,E[U+F+2]=i.z,E[U+F+3]=0),m===!0&&(i.fromBufferAttribute(L,B),E[U+F+4]=i.x,E[U+F+5]=i.y,E[U+F+6]=i.z,E[U+F+7]=0),g===!0&&(i.fromBufferAttribute(N,B),E[U+F+8]=i.x,E[U+F+9]=i.y,E[U+F+10]=i.z,E[U+F+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new Mt(v,b)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Sx(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Oo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u=fs){if(u!==fs&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fs&&(n=Li),n===void 0&&u===vs&&(n=ys),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vf=new tn,Vu=new Oo(1,1),Wf=new Uo,Xf=new Sc,qf=new Fo,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function Is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Wu[i];if(r===void 0&&(r=new Float32Array(i),Wu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function da(s,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function Ix(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Zu.set(n),s.uniformMatrix2fv(this.addr,!1,Zu),Fe(e,n)}}function Px(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Yu.set(n),s.uniformMatrix3fv(this.addr,!1,Yu),Fe(e,n)}}function Lx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;qu.set(n),s.uniformMatrix4fv(this.addr,!1,qu),Fe(e,n)}}function Dx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Fx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function Hx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vu.compareFunction=zf,r=Vu):r=Vf,e.setTexture2D(t||r,i)}function Gx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xf,i)}function Vx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qf,i)}function Wx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wf,i)}function Xx(s){switch(s){case 5126:return Tx;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return zx;case 5125:return Fx;case 36294:return Bx;case 36295:return Ox;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(s,t){s.uniform1fv(this.addr,t)}function Yx(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function Zx(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function $x(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function Kx(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jx(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jx(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Qx(s,t){s.uniform1iv(this.addr,t)}function t1(s,t){s.uniform2iv(this.addr,t)}function e1(s,t){s.uniform3iv(this.addr,t)}function n1(s,t){s.uniform4iv(this.addr,t)}function i1(s,t){s.uniform1uiv(this.addr,t)}function s1(s,t){s.uniform2uiv(this.addr,t)}function r1(s,t){s.uniform3uiv(this.addr,t)}function o1(s,t){s.uniform4uiv(this.addr,t)}function a1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vf,r[o])}function l1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xf,r[o])}function c1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||qf,r[o])}function h1(s,t,e){let n=this.cache,i=t.length,r=da(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wf,r[o])}function u1(s){switch(s){case 5126:return qx;case 35664:return Yx;case 35665:return Zx;case 35666:return $x;case 35674:return Kx;case 35675:return Jx;case 35676:return jx;case 5124:case 35670:return Qx;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}var Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xx(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u1(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function $u(s,t){s.seq.push(t),s.map[t.id]=t}function f1(s,t,e){let n=s.name,i=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),o=Cl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$u(e,c===void 0?new Rc(a,s,t):new Cc(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Ic(a),$u(e,h)),e=h}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);f1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ku(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var d1=37297,p1=0;function m1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ju=new ie;function g1(s){le._getMatrix(Ju,le.workingColorSpace,s);let t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case fa:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ju(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+m1(s.getShaderSource(t),o)}else return i}function x1(s,t){let e=g1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y1(s,t){let e;switch(t){case fh:e="Linear";break;case dh:e="Reinhard";break;case ph:e="Cineon";break;case Er:e="ACESFilmic";break;case mh:e="AgX";break;case gh:e="Neutral";break;case zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new H;function v1(){le.getLuminanceCoefficients(uo);let s=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function _1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function nr(s){return s!==""}function Qu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(w1,S1)}var E1=new Map;function S1(s,t){let e=se[t];if(e===void 0){let n=E1.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(s){return s.replace(T1,A1)}function A1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function R1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===la?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function C1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function P1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Up:t="ENVMAP_BLENDING_MIX";break;case Np:t="ENVMAP_BLENDING_ADD";break}return t}function L1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function D1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=R1(e),c=C1(e),u=I1(e),h=P1(e),f=L1(e),d=M1(e),m=_1(r),g=i.createProgram(),p,y,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),p.length>0&&(p+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),y.length>0&&(y+=`
`)):(p=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),y=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?se.tonemapping_pars_fragment:"",e.toneMapping!==hi?y1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,x1("linearToOutputTexel",e.outputColorSpace),v1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=Pc(o),o=Qu(o,e),o=tf(o,e),a=Pc(a),a=Qu(a,e),a=tf(a,e),o=ef(o),a=ef(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",e.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let x=M+p+o,v=M+y+a,b=Ku(i,i.VERTEX_SHADER,x),E=Ku(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(R){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g).trim(),N=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(E).trim(),B=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{let W=ju(i,b,"vertex"),O=ju(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||U==="")&&(F=!1);F&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:U,prefix:y}})}i.deleteShader(b),i.deleteShader(E),T=new ps(i,g),_=b1(i,g)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(g,d1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var U1=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dc(t),e.set(t,n)),n}},Dc=class{constructor(t){this.id=U1++,this.code=t,this.usedTimes=0}};function N1(s,t,e,n,i,r,o){let a=new No,l=new Lc,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,R,L,N){let U=L.fog,B=N.geometry,F=_.isMeshStandardMaterial?L.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||F),O=W&&W.mapping===ha?W.image.height:null,X=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,V=Z!==void 0?Z.length:0,Q=0;B.morphAttributes.position!==void 0&&(Q=1),B.morphAttributes.normal!==void 0&&(Q=2),B.morphAttributes.color!==void 0&&(Q=3);let K,D,k,Y;if(X){let me=In[X];K=me.vertexShader,D=me.fragmentShader}else K=_.vertexShader,D=_.fragmentShader,l.update(_),k=l.getVertexShaderID(_),Y=l.getFragmentShaderID(_);let tt=s.getRenderTarget(),$=s.state.buffers.depth.getReversed(),at=N.isInstancedMesh===!0,et=N.isBatchedMesh===!0,st=!!_.map,G=!!_.matcap,j=!!W,P=!!_.aoMap,ft=!!_.lightMap,ct=!!_.bumpMap,mt=!!_.normalMap,rt=!!_.displacementMap,Et=!!_.emissiveMap,ot=!!_.metalnessMap,I=!!_.roughnessMap,C=_.anisotropy>0,q=_.clearcoat>0,ht=_.dispersion>0,ut=_.iridescence>0,lt=_.sheen>0,gt=_.transmission>0,yt=C&&!!_.anisotropyMap,wt=q&&!!_.clearcoatMap,Bt=q&&!!_.clearcoatNormalMap,vt=q&&!!_.clearcoatRoughnessMap,It=ut&&!!_.iridescenceMap,Ot=ut&&!!_.iridescenceThicknessMap,Xt=lt&&!!_.sheenColorMap,At=lt&&!!_.sheenRoughnessMap,Yt=!!_.specularMap,Zt=!!_.specularColorMap,ae=!!_.specularIntensityMap,J=gt&&!!_.transmissionMap,Rt=gt&&!!_.thicknessMap,xt=!!_.gradientMap,_t=!!_.alphaMap,Nt=_.alphaTest>0,Lt=!!_.alphaHash,ee=!!_.extensions,Ae=hi;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);let He={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:D,defines:_.defines,customVertexShaderID:k,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:et,batchingColor:et&&N._colorsTexture!==null,instancing:at,instancingColor:at&&N.instanceColor!==null,instancingMorph:at&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Cs,alphaToCoverage:!!_.alphaToCoverage,map:st,matcap:G,envMap:j,envMapMode:j&&W.mapping,envMapCubeUVHeight:O,aoMap:P,lightMap:ft,bumpMap:ct,normalMap:mt,displacementMap:f&&rt,emissiveMap:Et,normalMapObjectSpace:mt&&_.normalMapType===Op,normalMapTangentSpace:mt&&_.normalMapType===ua,metalnessMap:ot,roughnessMap:I,anisotropy:C,anisotropyMap:yt,clearcoat:q,clearcoatMap:wt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:vt,dispersion:ht,iridescence:ut,iridescenceMap:It,iridescenceThicknessMap:Ot,sheen:lt,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:Yt,specularColorMap:Zt,specularIntensityMap:ae,transmission:gt,transmissionMap:J,thicknessMap:Rt,gradientMap:xt,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:Nt,alphaHash:Lt,combine:_.combine,mapUv:st&&g(_.map.channel),aoMapUv:P&&g(_.aoMap.channel),lightMapUv:ft&&g(_.lightMap.channel),bumpMapUv:ct&&g(_.bumpMap.channel),normalMapUv:mt&&g(_.normalMap.channel),displacementMapUv:rt&&g(_.displacementMap.channel),emissiveMapUv:Et&&g(_.emissiveMap.channel),metalnessMapUv:ot&&g(_.metalnessMap.channel),roughnessMapUv:I&&g(_.roughnessMap.channel),anisotropyMapUv:yt&&g(_.anisotropyMap.channel),clearcoatMapUv:wt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(_.sheenRoughnessMap.channel),specularMapUv:Yt&&g(_.specularMap.channel),specularColorMapUv:Zt&&g(_.specularColorMap.channel),specularIntensityMapUv:ae&&g(_.specularIntensityMap.channel),transmissionMapUv:J&&g(_.transmissionMap.channel),thicknessMapUv:Rt&&g(_.thicknessMap.channel),alphaMapUv:_t&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(mt||C),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(st||_t),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:st&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Et&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===re,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(M(w,_),x(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function M(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let w=m[_.type],R;if(w){let L=In[w];R=gi.clone(L.uniforms)}else R=_.uniforms;return R}function b(_,w){let R;for(let L=0,N=u.length;L<N;L++){let U=u[L];if(U.cacheKey===w){R=U,++R.usedTimes;break}}return R===void 0&&(R=new D1(s,w,_,r),u.push(R)),R}function E(_){if(--_.usedTimes===0){let w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function S(_){l.remove(_)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:u,dispose:T}}function z1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function F1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function sf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,g,p){let y=s[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:p},s[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=d,y.groupOrder=m,y.renderOrder=h.renderOrder,y.z=g,y.group=p),t++,y}function a(h,f,d,m,g,p){let y=o(h,f,d,m,g,p);d.transmission>0?n.push(y):d.transparent===!0?i.push(y):e.push(y)}function l(h,f,d,m,g,p){let y=o(h,f,d,m,g,p);d.transmission>0?n.unshift(y):d.transparent===!0?i.unshift(y):e.unshift(y)}function c(h,f){e.length>1&&e.sort(h||F1),n.length>1&&n.sort(f||sf),i.length>1&&i.sort(f||sf)}function u(){for(let h=t,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function B1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new rf,s.set(n,[o])):i>=r.length?(o=new rf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function O1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ct};break;case"SpotLight":e={position:new H,direction:new H,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function k1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var H1=0;function G1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function V1(s){let t=new O1,e=k1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Kt,o=new Kt;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,m=0,g=0,p=0,y=0,M=0,x=0,v=0,b=0,E=0,S=0;c.sort(G1);for(let _=0,w=c.length;_<w;_++){let R=c[_],L=R.color,N=R.intensity,U=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],N);S++}else if(R.isDirectionalLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,O=e.get(R);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=F,d++}else if(R.isSpotLight){let F=t.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(L).multiplyScalar(N),F.distance=U,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[g]=F;let W=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,W.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[g]=W.matrix,R.castShadow){let O=e.get(R);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=B,v++}g++}else if(R.isRectAreaLight){let F=t.get(R);F.color.copy(L).multiplyScalar(N),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=F,p++}else if(R.isPointLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let W=R.shadow,O=e.get(R);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=R.shadow.matrix,x++}n.point[m]=F,m++}else if(R.isHemisphereLight){let F=t.get(R);F.skyColor.copy(R.color).multiplyScalar(N),F.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[y]=F,y++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==p||T.hemiLength!==y||T.numDirectionalShadows!==M||T.numPointShadows!==x||T.numSpotShadows!==v||T.numSpotMaps!==b||T.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,T.directionalLength=d,T.pointLength=m,T.spotLength=g,T.rectAreaLength=p,T.hemiLength=y,T.numDirectionalShadows=M,T.numPointShadows=x,T.numSpotShadows=v,T.numSpotMaps=b,T.numLightProbes=S,n.version=H1++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0,p=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let x=c[y];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function of(s){let t=new V1(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function W1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new of(s),t.set(i,[a])):r>=o.length?(a=new of(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ur=class extends un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
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
}`;function Y1(s,t,e){let n=new hr,i=new Mt,r=new Mt,o=new xe,a=new ur({depthPacking:Eh}),l=new Uc,c={},u=e.maxTextureSize,h={[ui]:We,[We]:ui,[re]:re},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:X1,fragmentShader:q1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new te;m.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new St(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let y=this.type;this.render=function(E,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let _=s.getRenderTarget(),w=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Dn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=y!==Yn&&this.type===Yn,U=y===Yn&&this.type!==Yn;for(let B=0,F=E.length;B<F;B++){let W=E[B],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let X=O.getFrameExtents();if(i.multiply(X),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,O.mapSize.y=r.y)),O.map===null||N===!0||U===!0){let V=this.type!==Yn?{minFilter:an,magFilter:an}:{};O.map!==null&&O.map.dispose(),O.map=new $e(i.x,i.y,V),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let Z=O.getViewportCount();for(let V=0;V<Z;V++){let Q=O.getViewport(V);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o),O.updateMatrices(W,V),n=O.getFrustum(),v(S,T,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Yn&&M(O,T),O.needsUpdate=!1}y=this.type,p.needsUpdate=!1,s.setRenderTarget(_,w,R)};function M(E,S){let T=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $e(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,T,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,T,d,g,null)}function x(E,S,T,_){let w=null,R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)w=R;else if(w=T.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=w.uuid,N=S.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let B=U[N];B===void 0&&(B=w.clone(),U[N]=B,S.addEventListener("dispose",b)),w=B}if(w.visible=S.visible,w.wireframe=S.wireframe,_===Yn?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:h[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=s.properties.get(w);L.light=T}return w}function v(E,S,T,_,w){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let N=t.update(E),U=E.material;if(Array.isArray(U)){let B=N.groups;for(let F=0,W=B.length;F<W;F++){let O=B[F],X=U[O.materialIndex];if(X&&X.visible){let Z=x(E,X,_,w);E.onBeforeShadow(s,E,S,T,N,Z,O),s.renderBufferDirect(T,null,N,Z,E,O),E.onAfterShadow(s,E,S,T,N,Z,O)}}}else if(U.visible){let B=x(E,U,_,w);E.onBeforeShadow(s,E,S,T,N,B,null),s.renderBufferDirect(T,null,N,B,E,null),E.onAfterShadow(s,E,S,T,N,B,null)}}let L=E.children;for(let N=0,U=L.length;N<U;N++)v(L[N],S,T,_,w)}function b(E){E.target.removeEventListener("dispose",b);for(let T in c){let _=c[T],w=E.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var Z1={[Ol]:kl,[Hl]:Wl,[Gl]:Xl,[ms]:Vl,[kl]:Ol,[Wl]:Hl,[Xl]:Gl,[Vl]:ms};function $1(s,t){function e(){let J=!1,Rt=new xe,xt=null,_t=new xe(0,0,0,0);return{setMask:function(Nt){xt!==Nt&&!J&&(s.colorMask(Nt,Nt,Nt,Nt),xt=Nt)},setLocked:function(Nt){J=Nt},setClear:function(Nt,Lt,ee,Ae,He){He===!0&&(Nt*=Ae,Lt*=Ae,ee*=Ae),Rt.set(Nt,Lt,ee,Ae),_t.equals(Rt)===!1&&(s.clearColor(Nt,Lt,ee,Ae),_t.copy(Rt))},reset:function(){J=!1,xt=null,_t.set(-1,0,0,0)}}}function n(){let J=!1,Rt=!1,xt=null,_t=null,Nt=null;return{setReversed:function(Lt){if(Rt!==Lt){let ee=t.get("EXT_clip_control");Rt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Ae=Nt;Nt=null,this.setClear(Ae)}Rt=Lt},getReversed:function(){return Rt},setTest:function(Lt){Lt?tt(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(Lt){xt!==Lt&&!J&&(s.depthMask(Lt),xt=Lt)},setFunc:function(Lt){if(Rt&&(Lt=Z1[Lt]),_t!==Lt){switch(Lt){case Ol:s.depthFunc(s.NEVER);break;case kl:s.depthFunc(s.ALWAYS);break;case Hl:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Gl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Wl:s.depthFunc(s.GREATER);break;case Xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Lt}},setLocked:function(Lt){J=Lt},setClear:function(Lt){Nt!==Lt&&(Rt&&(Lt=1-Lt),s.clearDepth(Lt),Nt=Lt)},reset:function(){J=!1,xt=null,_t=null,Nt=null,Rt=!1}}}function i(){let J=!1,Rt=null,xt=null,_t=null,Nt=null,Lt=null,ee=null,Ae=null,He=null;return{setTest:function(me){J||(me?tt(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(me){Rt!==me&&!J&&(s.stencilMask(me),Rt=me)},setFunc:function(me,mn,kn){(xt!==me||_t!==mn||Nt!==kn)&&(s.stencilFunc(me,mn,kn),xt=me,_t=mn,Nt=kn)},setOp:function(me,mn,kn){(Lt!==me||ee!==mn||Ae!==kn)&&(s.stencilOp(me,mn,kn),Lt=me,ee=mn,Ae=kn)},setLocked:function(me){J=me},setClear:function(me){He!==me&&(s.clearStencil(me),He=me)},reset:function(){J=!1,Rt=null,xt=null,_t=null,Nt=null,Lt=null,ee=null,Ae=null,He=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,g=!1,p=null,y=null,M=null,x=null,v=null,b=null,E=null,S=new Ct(0,0,0),T=0,_=!1,w=null,R=null,L=null,N=null,U=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=W>=2);let X=null,Z={},V=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),K=new xe().fromArray(V),D=new xe().fromArray(Q);function k(J,Rt,xt,_t){let Nt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(J,Lt),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<xt;ee++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(Rt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return Lt}let Y={};Y[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(ms),ct(!1),mt(lu),tt(s.CULL_FACE),P(Dn);function tt(J){u[J]!==!0&&(s.enable(J),u[J]=!0)}function $(J){u[J]!==!1&&(s.disable(J),u[J]=!1)}function at(J,Rt){return h[J]!==Rt?(s.bindFramebuffer(J,Rt),h[J]=Rt,J===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Rt),J===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function et(J,Rt){let xt=d,_t=!1;if(J){xt=f.get(Rt),xt===void 0&&(xt=[],f.set(Rt,xt));let Nt=J.textures;if(xt.length!==Nt.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,ee=Nt.length;Lt<ee;Lt++)xt[Lt]=s.COLOR_ATTACHMENT0+Lt;xt.length=Nt.length,_t=!0}}else xt[0]!==s.BACK&&(xt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(xt)}function st(J){return m!==J?(s.useProgram(J),m=J,!0):!1}let G={[Ci]:s.FUNC_ADD,[xp]:s.FUNC_SUBTRACT,[yp]:s.FUNC_REVERSE_SUBTRACT};G[vp]=s.MIN,G[Mp]=s.MAX;let j={[_p]:s.ZERO,[bp]:s.ONE,[wp]:s.SRC_COLOR,[Fl]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[Ap]:s.DST_COLOR,[Sp]:s.DST_ALPHA,[Ep]:s.ONE_MINUS_SRC_COLOR,[Bl]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Tp]:s.ONE_MINUS_DST_ALPHA,[Ip]:s.CONSTANT_COLOR,[Pp]:s.ONE_MINUS_CONSTANT_COLOR,[Lp]:s.CONSTANT_ALPHA,[Dp]:s.ONE_MINUS_CONSTANT_ALPHA};function P(J,Rt,xt,_t,Nt,Lt,ee,Ae,He,me){if(J===Dn){g===!0&&($(s.BLEND),g=!1);return}if(g===!1&&(tt(s.BLEND),g=!0),J!==gp){if(J!==p||me!==_){if((y!==Ci||v!==Ci)&&(s.blendEquation(s.FUNC_ADD),y=Ci,v=Ci),me)switch(J){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.ONE,s.ONE);break;case cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}M=null,x=null,b=null,E=null,S.set(0,0,0),T=0,p=J,_=me}return}Nt=Nt||Rt,Lt=Lt||xt,ee=ee||_t,(Rt!==y||Nt!==v)&&(s.blendEquationSeparate(G[Rt],G[Nt]),y=Rt,v=Nt),(xt!==M||_t!==x||Lt!==b||ee!==E)&&(s.blendFuncSeparate(j[xt],j[_t],j[Lt],j[ee]),M=xt,x=_t,b=Lt,E=ee),(Ae.equals(S)===!1||He!==T)&&(s.blendColor(Ae.r,Ae.g,Ae.b,He),S.copy(Ae),T=He),p=J,_=!1}function ft(J,Rt){J.side===re?$(s.CULL_FACE):tt(s.CULL_FACE);let xt=J.side===We;Rt&&(xt=!xt),ct(xt),J.blending===us&&J.transparent===!1?P(Dn):P(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),r.setMask(J.colorWrite);let _t=J.stencilWrite;a.setTest(_t),_t&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Et(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(J){w!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),w=J)}function mt(J){J!==pp?(tt(s.CULL_FACE),J!==R&&(J===lu?s.cullFace(s.BACK):J===mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),R=J}function rt(J){J!==L&&(F&&s.lineWidth(J),L=J)}function Et(J,Rt,xt){J?(tt(s.POLYGON_OFFSET_FILL),(N!==Rt||U!==xt)&&(s.polygonOffset(Rt,xt),N=Rt,U=xt)):$(s.POLYGON_OFFSET_FILL)}function ot(J){J?tt(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function I(J){J===void 0&&(J=s.TEXTURE0+B-1),X!==J&&(s.activeTexture(J),X=J)}function C(J,Rt,xt){xt===void 0&&(X===null?xt=s.TEXTURE0+B-1:xt=X);let _t=Z[xt];_t===void 0&&(_t={type:void 0,texture:void 0},Z[xt]=_t),(_t.type!==J||_t.texture!==Rt)&&(X!==xt&&(s.activeTexture(xt),X=xt),s.bindTexture(J,Rt||Y[J]),_t.type=J,_t.texture=Rt)}function q(){let J=Z[X];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function vt(){try{s.texStorage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Xt(J){K.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),K.copy(J))}function At(J){D.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),D.copy(J))}function Yt(J,Rt){let xt=c.get(Rt);xt===void 0&&(xt=new WeakMap,c.set(Rt,xt));let _t=xt.get(J);_t===void 0&&(_t=s.getUniformBlockIndex(Rt,J.name),xt.set(J,_t))}function Zt(J,Rt){let _t=c.get(Rt).get(J);l.get(Rt)!==_t&&(s.uniformBlockBinding(Rt,_t,J.__bindingPointIndex),l.set(Rt,_t))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},X=null,Z={},h={},f=new WeakMap,d=[],m=null,g=!1,p=null,y=null,M=null,x=null,v=null,b=null,E=null,S=new Ct(0,0,0),T=0,_=!1,w=null,R=null,L=null,N=null,U=null,K.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:$,bindFramebuffer:at,drawBuffers:et,useProgram:st,setBlending:P,setMaterial:ft,setFlipSided:ct,setCullFace:mt,setLineWidth:rt,setPolygonOffset:Et,setScissorTest:ot,activeTexture:I,bindTexture:C,unbindTexture:q,compressedTexImage2D:ht,compressedTexImage3D:ut,texImage2D:It,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:Bt,texStorage3D:vt,texSubImage2D:lt,texSubImage3D:gt,compressedTexSubImage2D:yt,compressedTexSubImage3D:wt,scissor:Xt,viewport:At,reset:ae}}function af(s,t,e,n){let i=K1(n);switch(e){case If:return s*t;case Lf:return s*t;case Df:return s*t*2;case Mh:return s*t/i.components*i.byteLength;case _h:return s*t/i.components*i.byteLength;case Uf:return s*t*2/i.components*i.byteLength;case bh:return s*t*2/i.components*i.byteLength;case Pf:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case wh:return s*t*4/i.components*i.byteLength;case So:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:case jl:return Math.max(s,16)*Math.max(t,8)/4;case $l:case Jl:return Math.max(s,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Co:case gc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nf:case yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vc:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K1(s){switch(s){case Jn:case Af:return{byteLength:1,components:1};case lr:case Rf:case Sn:return{byteLength:2,components:1};case yh:case vh:return{byteLength:2,components:4};case Li:case xh:case Ln:return{byteLength:4,components:1};case Cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function J1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,C){return d?new OffscreenCanvas(I,C):Lo("canvas")}function g(I,C,q){let ht=1,ut=ot(I);if((ut.width>q||ut.height>q)&&(ht=q/Math.max(ut.width,ut.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let lt=Math.floor(ht*ut.width),gt=Math.floor(ht*ut.height);h===void 0&&(h=m(lt,gt));let yt=C?m(lt,gt):h;return yt.width=lt,yt.height=gt,yt.getContext("2d").drawImage(I,0,0,lt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+lt+"x"+gt+")."),yt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),I;return I}function p(I){return I.generateMipmaps}function y(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,C,q,ht,ut=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=C;if(C===s.RED&&(q===s.FLOAT&&(lt=s.R32F),q===s.HALF_FLOAT&&(lt=s.R16F),q===s.UNSIGNED_BYTE&&(lt=s.R8)),C===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.R8UI),q===s.UNSIGNED_SHORT&&(lt=s.R16UI),q===s.UNSIGNED_INT&&(lt=s.R32UI),q===s.BYTE&&(lt=s.R8I),q===s.SHORT&&(lt=s.R16I),q===s.INT&&(lt=s.R32I)),C===s.RG&&(q===s.FLOAT&&(lt=s.RG32F),q===s.HALF_FLOAT&&(lt=s.RG16F),q===s.UNSIGNED_BYTE&&(lt=s.RG8)),C===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RG8UI),q===s.UNSIGNED_SHORT&&(lt=s.RG16UI),q===s.UNSIGNED_INT&&(lt=s.RG32UI),q===s.BYTE&&(lt=s.RG8I),q===s.SHORT&&(lt=s.RG16I),q===s.INT&&(lt=s.RG32I)),C===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),q===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),q===s.UNSIGNED_INT&&(lt=s.RGB32UI),q===s.BYTE&&(lt=s.RGB8I),q===s.SHORT&&(lt=s.RGB16I),q===s.INT&&(lt=s.RGB32I)),C===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),q===s.UNSIGNED_INT&&(lt=s.RGBA32UI),q===s.BYTE&&(lt=s.RGBA8I),q===s.SHORT&&(lt=s.RGBA16I),q===s.INT&&(lt=s.RGBA32I)),C===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),C===s.RGBA){let gt=ut?fa:le.getTransfer(ht);q===s.FLOAT&&(lt=s.RGBA32F),q===s.HALF_FLOAT&&(lt=s.RGBA16F),q===s.UNSIGNED_BYTE&&(lt=gt===pe?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function v(I,C){let q;return I?C===null||C===Li||C===ys?q=s.DEPTH24_STENCIL8:C===Ln?q=s.DEPTH32F_STENCIL8:C===lr&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Li||C===ys?q=s.DEPTH_COMPONENT24:C===Ln?q=s.DEPTH_COMPONENT32F:C===lr&&(q=s.DEPTH_COMPONENT16),q}function b(I,C){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==Pn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function E(I){let C=I.target;C.removeEventListener("dispose",E),T(C),C.isVideoTexture&&u.delete(C)}function S(I){let C=I.target;C.removeEventListener("dispose",S),w(C)}function T(I){let C=n.get(I);if(C.__webglInit===void 0)return;let q=I.source,ht=f.get(q);if(ht){let ut=ht[C.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&_(I),Object.keys(ht).length===0&&f.delete(q)}n.remove(I)}function _(I){let C=n.get(I);s.deleteTexture(C.__webglTexture);let q=I.source,ht=f.get(q);delete ht[C.__cacheKey],o.memory.textures--}function w(I){let C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(C.__webglFramebuffer[ht]))for(let ut=0;ut<C.__webglFramebuffer[ht].length;ut++)s.deleteFramebuffer(C.__webglFramebuffer[ht][ut]);else s.deleteFramebuffer(C.__webglFramebuffer[ht]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ht])}else{if(Array.isArray(C.__webglFramebuffer))for(let ht=0;ht<C.__webglFramebuffer.length;ht++)s.deleteFramebuffer(C.__webglFramebuffer[ht]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ht=0;ht<C.__webglColorRenderbuffer.length;ht++)C.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ht]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let q=I.textures;for(let ht=0,ut=q.length;ht<ut;ht++){let lt=n.get(q[ht]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(q[ht])}n.remove(I)}let R=0;function L(){R=0}function N(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function U(I){let C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function B(I,C){let q=n.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let ht=I.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(q,I,C);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+C)}function F(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){D(q,I,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+C)}function W(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){D(q,I,C);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+C)}function O(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){k(q,I,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+C)}let X={[di]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Zl]:s.MIRRORED_REPEAT},Z={[an]:s.NEAREST,[Fp]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},V={[kp]:s.NEVER,[qp]:s.ALWAYS,[Hp]:s.LESS,[zf]:s.LEQUAL,[Gp]:s.EQUAL,[Xp]:s.GEQUAL,[Vp]:s.GREATER,[Wp]:s.NOTEQUAL};function Q(I,C){if(C.type===Ln&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Pn||C.magFilter===nl||C.magFilter===Xr||C.magFilter===Pi||C.minFilter===Pn||C.minFilter===nl||C.minFilter===Xr||C.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,X[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,X[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,X[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Z[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Z[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,V[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===an||C.minFilter!==Xr&&C.minFilter!==Pi||C.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function K(I,C){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",E));let ht=C.source,ut=f.get(ht);ut===void 0&&(ut={},f.set(ht,ut));let lt=U(C);if(lt!==I.__cacheKey){ut[lt]===void 0&&(ut[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ut[lt].usedTimes++;let gt=ut[I.__cacheKey];gt!==void 0&&(ut[I.__cacheKey].usedTimes--,gt.usedTimes===0&&_(C)),I.__cacheKey=lt,I.__webglTexture=ut[lt].texture}return q}function D(I,C,q){let ht=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ht=s.TEXTURE_3D);let ut=K(I,C),lt=C.source;e.bindTexture(ht,I.__webglTexture,s.TEXTURE0+q);let gt=n.get(lt);if(lt.version!==gt.__version||ut===!0){e.activeTexture(s.TEXTURE0+q);let yt=le.getPrimaries(le.workingColorSpace),wt=C.colorSpace===li?null:le.getPrimaries(C.colorSpace),Bt=C.colorSpace===li||yt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=g(C.image,!1,i.maxTextureSize);vt=Et(C,vt);let It=r.convert(C.format,C.colorSpace),Ot=r.convert(C.type),Xt=x(C.internalFormat,It,Ot,C.colorSpace,C.isVideoTexture);Q(ht,C);let At,Yt=C.mipmaps,Zt=C.isVideoTexture!==!0,ae=gt.__version===void 0||ut===!0,J=lt.dataReady,Rt=b(C,vt);if(C.isDepthTexture)Xt=v(C.format===vs,C.type),ae&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Xt,vt.width,vt.height):e.texImage2D(s.TEXTURE_2D,0,Xt,vt.width,vt.height,0,It,Ot,null));else if(C.isDataTexture)if(Yt.length>0){Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,Yt[0].width,Yt[0].height);for(let xt=0,_t=Yt.length;xt<_t;xt++)At=Yt[xt],Zt?J&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,At.width,At.height,It,Ot,At.data):e.texImage2D(s.TEXTURE_2D,xt,Xt,At.width,At.height,0,It,Ot,At.data);C.generateMipmaps=!1}else Zt?(ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,vt.width,vt.height),J&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt.width,vt.height,It,Ot,vt.data)):e.texImage2D(s.TEXTURE_2D,0,Xt,vt.width,vt.height,0,It,Ot,vt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,Yt[0].width,Yt[0].height,vt.depth);for(let xt=0,_t=Yt.length;xt<_t;xt++)if(At=Yt[xt],C.format!==bn)if(It!==null)if(Zt){if(J)if(C.layerUpdates.size>0){let Nt=af(At.width,At.height,C.format,C.type);for(let Lt of C.layerUpdates){let ee=At.data.subarray(Lt*Nt/At.data.BYTES_PER_ELEMENT,(Lt+1)*Nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,Lt,At.width,At.height,1,It,ee)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,vt.depth,It,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,Xt,At.width,At.height,vt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?J&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,vt.depth,It,Ot,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,xt,Xt,At.width,At.height,vt.depth,0,It,Ot,At.data)}else{Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,Yt[0].width,Yt[0].height);for(let xt=0,_t=Yt.length;xt<_t;xt++)At=Yt[xt],C.format!==bn?It!==null?Zt?J&&e.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,At.width,At.height,It,At.data):e.compressedTexImage2D(s.TEXTURE_2D,xt,Xt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?J&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,At.width,At.height,It,Ot,At.data):e.texImage2D(s.TEXTURE_2D,xt,Xt,At.width,At.height,0,It,Ot,At.data)}else if(C.isDataArrayTexture)if(Zt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,vt.width,vt.height,vt.depth),J)if(C.layerUpdates.size>0){let xt=af(vt.width,vt.height,C.format,C.type);for(let _t of C.layerUpdates){let Nt=vt.data.subarray(_t*xt/vt.data.BYTES_PER_ELEMENT,(_t+1)*xt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,It,Ot,Nt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,It,Ot,vt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,vt.width,vt.height,vt.depth,0,It,Ot,vt.data);else if(C.isData3DTexture)Zt?(ae&&e.texStorage3D(s.TEXTURE_3D,Rt,Xt,vt.width,vt.height,vt.depth),J&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,It,Ot,vt.data)):e.texImage3D(s.TEXTURE_3D,0,Xt,vt.width,vt.height,vt.depth,0,It,Ot,vt.data);else if(C.isFramebufferTexture){if(ae)if(Zt)e.texStorage2D(s.TEXTURE_2D,Rt,Xt,vt.width,vt.height);else{let xt=vt.width,_t=vt.height;for(let Nt=0;Nt<Rt;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,Xt,xt,_t,0,It,Ot,null),xt>>=1,_t>>=1}}else if(Yt.length>0){if(Zt&&ae){let xt=ot(Yt[0]);e.texStorage2D(s.TEXTURE_2D,Rt,Xt,xt.width,xt.height)}for(let xt=0,_t=Yt.length;xt<_t;xt++)At=Yt[xt],Zt?J&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,It,Ot,At):e.texImage2D(s.TEXTURE_2D,xt,Xt,It,Ot,At);C.generateMipmaps=!1}else if(Zt){if(ae){let xt=ot(vt);e.texStorage2D(s.TEXTURE_2D,Rt,Xt,xt.width,xt.height)}J&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Ot,vt)}else e.texImage2D(s.TEXTURE_2D,0,Xt,It,Ot,vt);p(C)&&y(ht),gt.__version=lt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function k(I,C,q){if(C.image.length!==6)return;let ht=K(I,C),ut=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);let lt=n.get(ut);if(ut.version!==lt.__version||ht===!0){e.activeTexture(s.TEXTURE0+q);let gt=le.getPrimaries(le.workingColorSpace),yt=C.colorSpace===li?null:le.getPrimaries(C.colorSpace),wt=C.colorSpace===li||gt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Bt=C.isCompressedTexture||C.image[0].isCompressedTexture,vt=C.image[0]&&C.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!Bt&&!vt?It[_t]=g(C.image[_t],!0,i.maxCubemapSize):It[_t]=vt?C.image[_t].image:C.image[_t],It[_t]=Et(C,It[_t]);let Ot=It[0],Xt=r.convert(C.format,C.colorSpace),At=r.convert(C.type),Yt=x(C.internalFormat,Xt,At,C.colorSpace),Zt=C.isVideoTexture!==!0,ae=lt.__version===void 0||ht===!0,J=ut.dataReady,Rt=b(C,Ot);Q(s.TEXTURE_CUBE_MAP,C);let xt;if(Bt){Zt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Yt,Ot.width,Ot.height);for(let _t=0;_t<6;_t++){xt=It[_t].mipmaps;for(let Nt=0;Nt<xt.length;Nt++){let Lt=xt[Nt];C.format!==bn?Xt!==null?Zt?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,Lt.width,Lt.height,Xt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,Lt.width,Lt.height,Xt,At,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,Yt,Lt.width,Lt.height,0,Xt,At,Lt.data)}}}else{if(xt=C.mipmaps,Zt&&ae){xt.length>0&&Rt++;let _t=ot(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Yt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){Zt?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Xt,At,It[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,It[_t].width,It[_t].height,0,Xt,At,It[_t].data);for(let Nt=0;Nt<xt.length;Nt++){let ee=xt[Nt].image[_t].image;Zt?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,ee.width,ee.height,Xt,At,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,Yt,ee.width,ee.height,0,Xt,At,ee.data)}}else{Zt?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,At,It[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,Xt,At,It[_t]);for(let Nt=0;Nt<xt.length;Nt++){let Lt=xt[Nt];Zt?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,Xt,At,Lt.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,Yt,Xt,At,Lt.image[_t])}}}p(C)&&y(s.TEXTURE_CUBE_MAP),lt.__version=ut.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Y(I,C,q,ht,ut,lt){let gt=r.convert(q.format,q.colorSpace),yt=r.convert(q.type),wt=x(q.internalFormat,gt,yt,q.colorSpace),Bt=n.get(C),vt=n.get(q);if(vt.__renderTarget=C,!Bt.__hasExternalTextures){let It=Math.max(1,C.width>>lt),Ot=Math.max(1,C.height>>lt);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,lt,wt,It,Ot,C.depth,0,gt,yt,null):e.texImage2D(ut,lt,wt,It,Ot,0,gt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),mt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ut,vt.__webglTexture,0,ct(C)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,ut,vt.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(I,C,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){let ht=C.depthTexture,ut=ht&&ht.isDepthTexture?ht.type:null,lt=v(C.stencilBuffer,ut),gt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=ct(C);mt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,lt,C.width,C.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,lt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,lt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,I)}else{let ht=C.textures;for(let ut=0;ut<ht.length;ut++){let lt=ht[ut],gt=r.convert(lt.format,lt.colorSpace),yt=r.convert(lt.type),wt=x(lt.internalFormat,gt,yt,lt.colorSpace),Bt=ct(C);q&&mt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,wt,C.width,C.height):mt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,wt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,wt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=n.get(C.depthTexture);ht.__renderTarget=C,(!ht.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);let ut=ht.__webglTexture,lt=ct(C);if(C.depthTexture.format===fs)mt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0);else if(C.depthTexture.format===vs)mt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function at(I){let C=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){let ht=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ht){let ut=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ht.removeEventListener("dispose",ut)};ht.addEventListener("dispose",ut),C.__depthDisposeCallback=ut}C.__boundDepthTexture=ht}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");$(C.__webglFramebuffer,I)}else if(q){C.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ht]),C.__webglDepthbuffer[ht]===void 0)C.__webglDepthbuffer[ht]=s.createRenderbuffer(),tt(C.__webglDepthbuffer[ht],I,!1);else{let ut=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=C.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),tt(C.__webglDepthbuffer,I,!1);else{let ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(I,C,q){let ht=n.get(I);C!==void 0&&Y(ht.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&at(I)}function st(I){let C=I.texture,q=n.get(I),ht=n.get(C);I.addEventListener("dispose",S);let ut=I.textures,lt=I.isWebGLCubeRenderTarget===!0,gt=ut.length>1;if(gt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=C.version,o.memory.textures++),lt){q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[yt]=[];for(let wt=0;wt<C.mipmaps.length;wt++)q.__webglFramebuffer[yt][wt]=s.createFramebuffer()}else q.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let yt=0;yt<C.mipmaps.length;yt++)q.__webglFramebuffer[yt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(gt)for(let yt=0,wt=ut.length;yt<wt;yt++){let Bt=n.get(ut[yt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&mt(I)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];q.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[yt]);let Bt=r.convert(wt.format,wt.colorSpace),vt=r.convert(wt.type),It=x(wt.internalFormat,Bt,vt,wt.colorSpace,I.isXRRenderTarget===!0),Ot=ct(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,It,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,q.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C);for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0)for(let wt=0;wt<C.mipmaps.length;wt++)Y(q.__webglFramebuffer[yt][wt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt);else Y(q.__webglFramebuffer[yt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(C)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let yt=0,wt=ut.length;yt<wt;yt++){let Bt=ut[yt],vt=n.get(Bt);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),Q(s.TEXTURE_2D,Bt),Y(q.__webglFramebuffer,I,Bt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),p(Bt)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,ht.__webglTexture),Q(yt,C),C.mipmaps&&C.mipmaps.length>0)for(let wt=0;wt<C.mipmaps.length;wt++)Y(q.__webglFramebuffer[wt],I,C,s.COLOR_ATTACHMENT0,yt,wt);else Y(q.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,yt,0);p(C)&&y(yt),e.unbindTexture()}I.depthBuffer&&at(I)}function G(I){let C=I.textures;for(let q=0,ht=C.length;q<ht;q++){let ut=C[q];if(p(ut)){let lt=M(I),gt=n.get(ut).__webglTexture;e.bindTexture(lt,gt),y(lt),e.unbindTexture()}}}let j=[],P=[];function ft(I){if(I.samples>0){if(mt(I)===!1){let C=I.textures,q=I.width,ht=I.height,ut=s.COLOR_BUFFER_BIT,lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(I),yt=C.length>1;if(yt)for(let wt=0;wt<C.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let wt=0;wt<C.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]);let Bt=n.get(C[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,q,ht,0,0,q,ht,ut,s.NEAREST),l===!0&&(j.length=0,P.length=0,j.push(s.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push(lt),P.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let wt=0;wt<C.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]);let Bt=n.get(C[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function ct(I){return Math.min(i.maxSamples,I.samples)}function mt(I){let C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function rt(I){let C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function Et(I,C){let q=I.colorSpace,ht=I.format,ut=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Cs&&q!==li&&(le.getTransfer(q)===pe?(ht!==bn||ut!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=et,this.setupRenderTarget=st,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=mt}function j1(s,t){function e(n,i=li){let r,o=le.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return s.BYTE;if(n===Rf)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===xh)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===If)return s.ALPHA;if(n===Pf)return s.RGB;if(n===bn)return s.RGBA;if(n===Lf)return s.LUMINANCE;if(n===Df)return s.LUMINANCE_ALPHA;if(n===fs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===Mh)return s.RED;if(n===_h)return s.RED_INTEGER;if(n===Uf)return s.RG;if(n===bh)return s.RG_INTEGER;if(n===wh)return s.RGBA_INTEGER;if(n===So||n===To||n===Ao||n===Ro)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Kl||n===Jl||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===tc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nf||n===yc||n===vc||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Nc=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q1={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),y=this._getHandJoint(c,g);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=p.radius),y.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ie({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,g=new zc,p=e.getContextAttributes(),y=null,M=null,x=[],v=[],b=new Mt,E=null,S=new ke;S.viewport=new xe;let T=new ke;T.viewport=new xe;let _=[S,T],w=new Nc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=x[D];return k===void 0&&(k=new rr,x[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=x[D];return k===void 0&&(k=new rr,x[D]=k),k.getGripSpace()},this.getHand=function(D){let k=x[D];return k===void 0&&(k=new rr,x[D]=k),k.getHandSpace()};function N(D){let k=v.indexOf(D.inputSource);if(k===-1)return;let Y=x[k];Y!==void 0&&(Y.update(D.inputSource,D.frame,c||o),Y.dispatchEvent({type:D.type,data:D.inputSource}))}function U(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",B);for(let D=0;D<x.length;D++){let k=v[D];k!==null&&(v[D]=null,x[D].disconnect(k))}R=null,L=null,g.reset(),t.setRenderTarget(y),d=null,f=null,h=null,i=null,M=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",U),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0){let k={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new $e(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let k=null,Y=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=p.stencil?vs:fs,Y=p.stencil?ys:Li);let $={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer($),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new $e(f.textureWidth,f.textureHeight,{format:bn,type:Jn,depthTexture:new Oo(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(D){for(let k=0;k<D.removed.length;k++){let Y=D.removed[k],tt=v.indexOf(Y);tt>=0&&(v[tt]=null,x[tt].disconnect(Y))}for(let k=0;k<D.added.length;k++){let Y=D.added[k],tt=v.indexOf(Y);if(tt===-1){for(let at=0;at<x.length;at++)if(at>=v.length){v.push(Y),tt=at;break}else if(v[at]===null){v[at]=Y,tt=at;break}if(tt===-1)break}let $=x[tt];$&&$.connect(Y)}}let F=new H,W=new H;function O(D,k,Y){F.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(Y.matrixWorld);let tt=F.distanceTo(W),$=k.projectionMatrix.elements,at=Y.projectionMatrix.elements,et=$[14]/($[10]-1),st=$[14]/($[10]+1),G=($[9]+1)/$[5],j=($[9]-1)/$[5],P=($[8]-1)/$[0],ft=(at[8]+1)/at[0],ct=et*P,mt=et*ft,rt=tt/(-P+ft),Et=rt*-P;if(k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Et),D.translateZ(rt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),$[10]===-1)D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let ot=et+rt,I=st+rt,C=ct-Et,q=mt+(tt-Et),ht=G*st/I*ot,ut=j*st/I*ot;D.projectionMatrix.makePerspective(C,q,ht,ut,ot,I),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function X(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let k=D.near,Y=D.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),w.near=T.near=S.near=k,w.far=T.far=S.far=Y,(R!==w.near||L!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,L=w.far),S.layers.mask=D.layers.mask|2,T.layers.mask=D.layers.mask|4,w.layers.mask=S.layers.mask|T.layers.mask;let tt=D.parent,$=w.cameras;X(w,tt);for(let at=0;at<$.length;at++)X($[at],tt);$.length===2?O(w,S,T):w.projectionMatrix.copy(S.projectionMatrix),Z(D,w,tt)};function Z(D,k,Y){Y===null?D.matrix.copy(k.matrixWorld):(D.matrix.copy(Y.matrixWorld),D.matrix.invert(),D.matrix.multiply(k.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ms*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let V=null;function Q(D,k){if(u=k.getViewerPose(c||o),m=k,u!==null){let Y=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let tt=!1;Y.length!==w.cameras.length&&(w.cameras.length=0,tt=!0);for(let at=0;at<Y.length;at++){let et=Y[at],st=null;if(d!==null)st=d.getViewport(et);else{let j=h.getViewSubImage(f,et);st=j.viewport,at===0&&(t.setRenderTargetTextures(M,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(M))}let G=_[at];G===void 0&&(G=new ke,G.layers.enable(at),G.viewport=new xe,_[at]=G),G.matrix.fromArray(et.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(et.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(st.x,st.y,st.width,st.height),at===0&&(w.matrix.copy(G.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),tt===!0&&w.cameras.push(G)}let $=i.enabledFeatures;if($&&$.includes("depth-sensing")){let at=h.getDepthInformation(Y[0]);at&&at.isValid&&at.texture&&g.init(t,at,i.renderState)}}for(let Y=0;Y<x.length;Y++){let tt=v[Y],$=x[Y];tt!==null&&$!==void 0&&$.update(tt,k,c||o)}V&&V(D,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),m=null}let K=new Gf;K.setAnimationLoop(Q),this.setAnimationLoop=function(D){V=D},this.dispose=function(){}}},Ai=new Ke,ny=new Kt;function iy(s,t){function e(p,y){p.matrixAutoUpdate===!0&&p.updateMatrix(),y.value.copy(p.matrix)}function n(p,y){y.color.getRGB(p.fogColor.value,Hf(s)),y.isFog?(p.fogNear.value=y.near,p.fogFar.value=y.far):y.isFogExp2&&(p.fogDensity.value=y.density)}function i(p,y,M,x,v){y.isMeshBasicMaterial||y.isMeshLambertMaterial?r(p,y):y.isMeshToonMaterial?(r(p,y),h(p,y)):y.isMeshPhongMaterial?(r(p,y),u(p,y)):y.isMeshStandardMaterial?(r(p,y),f(p,y),y.isMeshPhysicalMaterial&&d(p,y,v)):y.isMeshMatcapMaterial?(r(p,y),m(p,y)):y.isMeshDepthMaterial?r(p,y):y.isMeshDistanceMaterial?(r(p,y),g(p,y)):y.isMeshNormalMaterial?r(p,y):y.isLineBasicMaterial?(o(p,y),y.isLineDashedMaterial&&a(p,y)):y.isPointsMaterial?l(p,y,M,x):y.isSpriteMaterial?c(p,y):y.isShadowMaterial?(p.color.value.copy(y.color),p.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(p,y){p.opacity.value=y.opacity,y.color&&p.diffuse.value.copy(y.color),y.emissive&&p.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(p.map.value=y.map,e(y.map,p.mapTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.bumpMap&&(p.bumpMap.value=y.bumpMap,e(y.bumpMap,p.bumpMapTransform),p.bumpScale.value=y.bumpScale,y.side===We&&(p.bumpScale.value*=-1)),y.normalMap&&(p.normalMap.value=y.normalMap,e(y.normalMap,p.normalMapTransform),p.normalScale.value.copy(y.normalScale),y.side===We&&p.normalScale.value.negate()),y.displacementMap&&(p.displacementMap.value=y.displacementMap,e(y.displacementMap,p.displacementMapTransform),p.displacementScale.value=y.displacementScale,p.displacementBias.value=y.displacementBias),y.emissiveMap&&(p.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,p.emissiveMapTransform)),y.specularMap&&(p.specularMap.value=y.specularMap,e(y.specularMap,p.specularMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest);let M=t.get(y),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Ai)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=y.reflectivity,p.ior.value=y.ior,p.refractionRatio.value=y.refractionRatio),y.lightMap&&(p.lightMap.value=y.lightMap,p.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,p.lightMapTransform)),y.aoMap&&(p.aoMap.value=y.aoMap,p.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,p.aoMapTransform))}function o(p,y){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,y.map&&(p.map.value=y.map,e(y.map,p.mapTransform))}function a(p,y){p.dashSize.value=y.dashSize,p.totalSize.value=y.dashSize+y.gapSize,p.scale.value=y.scale}function l(p,y,M,x){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,p.size.value=y.size*M,p.scale.value=x*.5,y.map&&(p.map.value=y.map,e(y.map,p.uvTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest)}function c(p,y){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,p.rotation.value=y.rotation,y.map&&(p.map.value=y.map,e(y.map,p.mapTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest)}function u(p,y){p.specular.value.copy(y.specular),p.shininess.value=Math.max(y.shininess,1e-4)}function h(p,y){y.gradientMap&&(p.gradientMap.value=y.gradientMap)}function f(p,y){p.metalness.value=y.metalness,y.metalnessMap&&(p.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,p.metalnessMapTransform)),p.roughness.value=y.roughness,y.roughnessMap&&(p.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,p.roughnessMapTransform)),y.envMap&&(p.envMapIntensity.value=y.envMapIntensity)}function d(p,y,M){p.ior.value=y.ior,y.sheen>0&&(p.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),p.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(p.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,p.sheenColorMapTransform)),y.sheenRoughnessMap&&(p.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,p.sheenRoughnessMapTransform))),y.clearcoat>0&&(p.clearcoat.value=y.clearcoat,p.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(p.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,p.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(p.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===We&&p.clearcoatNormalScale.value.negate())),y.dispersion>0&&(p.dispersion.value=y.dispersion),y.iridescence>0&&(p.iridescence.value=y.iridescence,p.iridescenceIOR.value=y.iridescenceIOR,p.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(p.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,p.iridescenceMapTransform)),y.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),y.transmission>0&&(p.transmission.value=y.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),y.transmissionMap&&(p.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,p.transmissionMapTransform)),p.thickness.value=y.thickness,y.thicknessMap&&(p.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=y.attenuationDistance,p.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(p.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(p.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=y.specularIntensity,p.specularColor.value.copy(y.specularColor),y.specularColorMap&&(p.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,p.specularColorMapTransform)),y.specularIntensityMap&&(p.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,y){y.matcap&&(p.matcap.value=y.matcap)}function g(p,y){let M=t.get(y).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(m(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));let b=x.program;n.updateUBOMapping(M,b);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){let x=h();M.__bindingPointIndex=x;let v=s.createBuffer(),b=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=i[M.id],v=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,S=v.length;E<S;E++){let T=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,w=T.length;_<w;_++){let R=T[_];if(d(R,E,_,b)===!0){let L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],U=0;for(let B=0;B<N.length;B++){let F=N[B],W=g(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,L+U,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,v,b){let E=M.value,S=x+"_"+v;if(b[S]===void 0)return typeof E=="number"||typeof E=="boolean"?b[S]=E:b[S]=E.clone(),!0;{let T=b[S];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return b[S]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function m(M){let x=M.uniforms,v=0,b=16;for(let S=0,T=x.length;S<T;S++){let _=Array.isArray(x[S])?x[S]:[x[S]];for(let w=0,R=_.length;w<R;w++){let L=_[w],N=Array.isArray(L.value)?L.value:[L.value];for(let U=0,B=N.length;U<B;U++){let F=N[U],W=g(F),O=v%b,X=O%W.boundary,Z=O+X;v+=X,Z!==0&&b-Z<W.storage&&(v+=b-Z),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=W.storage}}}let E=v%b;return E>0&&(v+=b-E),M.__size=v,M.__cache={},this}function g(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function y(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:y}}var ko=class{constructor(t={}){let{canvas:e=c0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),p=null,y=null,M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=hi,this.toneMappingExposure=1;let v=this,b=!1,E=0,S=0,T=null,_=-1,w=null,R=new xe,L=new xe,N=null,U=new Ct(0),B=0,F=e.width,W=e.height,O=1,X=null,Z=null,V=new xe(0,0,F,W),Q=new xe(0,0,F,W),K=!1,D=new hr,k=!1,Y=!1,tt=new Kt,$=new Kt,at=new H,et=new xe,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G=!1;function j(){return T===null?O:1}let P=n;function ft(z,nt){return e.getContext(z,nt)}try{let z={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hh}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),P===null){let nt="webgl2";if(P=ft(nt,z),P===null)throw ft(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let ct,mt,rt,Et,ot,I,C,q,ht,ut,lt,gt,yt,wt,Bt,vt,It,Ot,Xt,At,Yt,Zt,ae,J;function Rt(){ct=new Mx(P),ct.init(),Zt=new j1(P,ct),mt=new px(P,ct,t,Zt),rt=new $1(P,ct),mt.reverseDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),Et=new wx(P),ot=new z1,I=new J1(P,ct,rt,ot,mt,Zt,Et),C=new gx(v),q=new vx(v),ht=new I0(P),ae=new fx(P,ht),ut=new _x(P,ht,Et,ae),lt=new Sx(P,ut,ht,Et),Xt=new Ex(P,mt,I),vt=new mx(ot),gt=new N1(v,C,q,ct,mt,ae,vt),yt=new iy(v,ot),wt=new B1,Bt=new W1(ct),Ot=new ux(v,C,q,rt,lt,d,l),It=new Y1(v,lt,mt),J=new sy(P,Et,mt,rt),At=new dx(P,ct,Et),Yt=new bx(P,ct,Et),Et.programs=gt.programs,v.capabilities=mt,v.extensions=ct,v.properties=ot,v.renderLists=wt,v.shadowMap=It,v.state=rt,v.info=Et}Rt();let xt=new Fc(v,P);this.xr=xt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let z=ct.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=ct.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(z){z!==void 0&&(O=z,this.setSize(F,W,!1))},this.getSize=function(z){return z.set(F,W)},this.setSize=function(z,nt,dt=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=z,W=nt,e.width=Math.floor(z*O),e.height=Math.floor(nt*O),dt===!0&&(e.style.width=z+"px",e.style.height=nt+"px"),this.setViewport(0,0,z,nt)},this.getDrawingBufferSize=function(z){return z.set(F*O,W*O).floor()},this.setDrawingBufferSize=function(z,nt,dt){F=z,W=nt,O=dt,e.width=Math.floor(z*dt),e.height=Math.floor(nt*dt),this.setViewport(0,0,z,nt)},this.getCurrentViewport=function(z){return z.copy(R)},this.getViewport=function(z){return z.copy(V)},this.setViewport=function(z,nt,dt,pt){z.isVector4?V.set(z.x,z.y,z.z,z.w):V.set(z,nt,dt,pt),rt.viewport(R.copy(V).multiplyScalar(O).round())},this.getScissor=function(z){return z.copy(Q)},this.setScissor=function(z,nt,dt,pt){z.isVector4?Q.set(z.x,z.y,z.z,z.w):Q.set(z,nt,dt,pt),rt.scissor(L.copy(Q).multiplyScalar(O).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(z){rt.setScissorTest(K=z)},this.setOpaqueSort=function(z){X=z},this.setTransparentSort=function(z){Z=z},this.getClearColor=function(z){return z.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(z=!0,nt=!0,dt=!0){let pt=0;if(z){let it=!1;if(T!==null){let Tt=T.texture.format;it=Tt===wh||Tt===bh||Tt===_h}if(it){let Tt=T.texture.type,Dt=Tt===Jn||Tt===Li||Tt===lr||Tt===ys||Tt===yh||Tt===vh,kt=Ot.getClearColor(),Ht=Ot.getClearAlpha(),jt=kt.r,ne=kt.g,Gt=kt.b;Dt?(m[0]=jt,m[1]=ne,m[2]=Gt,m[3]=Ht,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=jt,g[1]=ne,g[2]=Gt,g[3]=Ht,P.clearBufferiv(P.COLOR,0,g))}else pt|=P.COLOR_BUFFER_BIT}nt&&(pt|=P.DEPTH_BUFFER_BIT),dt&&(pt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),wt.dispose(),Bt.dispose(),ot.dispose(),C.dispose(),q.dispose(),lt.dispose(),ae.dispose(),J.dispose(),gt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",tu),xt.removeEventListener("sessionend",eu),_i.stop()};function _t(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let z=Et.autoReset,nt=It.enabled,dt=It.autoUpdate,pt=It.needsUpdate,it=It.type;Rt(),Et.autoReset=z,It.enabled=nt,It.autoUpdate=dt,It.needsUpdate=pt,It.type=it}function Lt(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function ee(z){let nt=z.target;nt.removeEventListener("dispose",ee),Ae(nt)}function Ae(z){He(z),ot.remove(z)}function He(z){let nt=ot.get(z).programs;nt!==void 0&&(nt.forEach(function(dt){gt.releaseProgram(dt)}),z.isShaderMaterial&&gt.releaseShaderCache(z))}this.renderBufferDirect=function(z,nt,dt,pt,it,Tt){nt===null&&(nt=st);let Dt=it.isMesh&&it.matrixWorld.determinant()<0,kt=up(z,nt,dt,pt,it);rt.setMaterial(pt,Dt);let Ht=dt.index,jt=1;if(pt.wireframe===!0){if(Ht=ut.getWireframeAttribute(dt),Ht===void 0)return;jt=2}let ne=dt.drawRange,Gt=dt.attributes.position,ue=ne.start*jt,ve=(ne.start+ne.count)*jt;Tt!==null&&(ue=Math.max(ue,Tt.start*jt),ve=Math.min(ve,(Tt.start+Tt.count)*jt)),Ht!==null?(ue=Math.max(ue,0),ve=Math.min(ve,Ht.count)):Gt!=null&&(ue=Math.max(ue,0),ve=Math.min(ve,Gt.count));let Me=ve-ue;if(Me<0||Me===1/0)return;ae.setup(it,pt,kt,dt,Ht);let Qe,fe=At;if(Ht!==null&&(Qe=ht.get(Ht),fe=Yt,fe.setIndex(Qe)),it.isMesh)pt.wireframe===!0?(rt.setLineWidth(pt.wireframeLinewidth*j()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(it.isLine){let Wt=pt.linewidth;Wt===void 0&&(Wt=1),rt.setLineWidth(Wt*j()),it.isLineSegments?fe.setMode(P.LINES):it.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else it.isPoints?fe.setMode(P.POINTS):it.isSprite&&fe.setMode(P.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)fe.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))fe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let Wt=it._multiDrawStarts,Hn=it._multiDrawCounts,de=it._multiDrawCount,gn=Ht?ht.get(Ht).bytesPerElement:1,Vi=ot.get(pt).currentProgram.getUniforms();for(let sn=0;sn<de;sn++)Vi.setValue(P,"_gl_DrawID",sn),fe.render(Wt[sn]/gn,Hn[sn])}else if(it.isInstancedMesh)fe.renderInstances(ue,Me,it.count);else if(dt.isInstancedBufferGeometry){let Wt=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Hn=Math.min(dt.instanceCount,Wt);fe.renderInstances(ue,Me,Hn)}else fe.render(ue,Me)};function me(z,nt,dt){z.transparent===!0&&z.side===re&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,Wr(z,nt,dt),z.side=ui,z.needsUpdate=!0,Wr(z,nt,dt),z.side=re):Wr(z,nt,dt)}this.compile=function(z,nt,dt=null){dt===null&&(dt=z),y=Bt.get(dt),y.init(nt),x.push(y),dt.traverseVisible(function(it){it.isLight&&it.layers.test(nt.layers)&&(y.pushLight(it),it.castShadow&&y.pushShadow(it))}),z!==dt&&z.traverseVisible(function(it){it.isLight&&it.layers.test(nt.layers)&&(y.pushLight(it),it.castShadow&&y.pushShadow(it))}),y.setupLights();let pt=new Set;return z.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Tt=it.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){let kt=Tt[Dt];me(kt,dt,it),pt.add(kt)}else me(Tt,dt,it),pt.add(Tt)}),x.pop(),y=null,pt},this.compileAsync=function(z,nt,dt=null){let pt=this.compile(z,nt,dt);return new Promise(it=>{function Tt(){if(pt.forEach(function(Dt){ot.get(Dt).currentProgram.isReady()&&pt.delete(Dt)}),pt.size===0){it(z);return}setTimeout(Tt,10)}ct.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let mn=null;function kn(z){mn&&mn(z)}function tu(){_i.stop()}function eu(){_i.start()}let _i=new Gf;_i.setAnimationLoop(kn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(z){mn=z,xt.setAnimationLoop(z),z===null?_i.stop():_i.start()},xt.addEventListener("sessionstart",tu),xt.addEventListener("sessionend",eu),this.render=function(z,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(nt),nt=xt.getCamera()),z.isScene===!0&&z.onBeforeRender(v,z,nt,T),y=Bt.get(z,x.length),y.init(nt),x.push(y),$.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),D.setFromProjectionMatrix($),Y=this.localClippingEnabled,k=vt.init(this.clippingPlanes,Y),p=wt.get(z,M.length),p.init(),M.push(p),xt.enabled===!0&&xt.isPresenting===!0){let Tt=v.xr.getDepthSensingMesh();Tt!==null&&el(Tt,nt,-1/0,v.sortObjects)}el(z,nt,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(X,Z),G=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,G&&Ot.addToRenderList(p,z),this.info.render.frame++,k===!0&&vt.beginShadows();let dt=y.state.shadowsArray;It.render(dt,z,nt),k===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let pt=p.opaque,it=p.transmissive;if(y.setupLights(),nt.isArrayCamera){let Tt=nt.cameras;if(it.length>0)for(let Dt=0,kt=Tt.length;Dt<kt;Dt++){let Ht=Tt[Dt];iu(pt,it,z,Ht)}G&&Ot.render(z);for(let Dt=0,kt=Tt.length;Dt<kt;Dt++){let Ht=Tt[Dt];nu(p,z,Ht,Ht.viewport)}}else it.length>0&&iu(pt,it,z,nt),G&&Ot.render(z),nu(p,z,nt);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),z.isScene===!0&&z.onAfterRender(v,z,nt),ae.resetDefaultState(),_=-1,w=null,x.pop(),x.length>0?(y=x[x.length-1],k===!0&&vt.setGlobalState(v.clippingPlanes,y.state.camera)):y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function el(z,nt,dt,pt){if(z.visible===!1)return;if(z.layers.test(nt.layers)){if(z.isGroup)dt=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(nt);else if(z.isLight)y.pushLight(z),z.castShadow&&y.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||D.intersectsSprite(z)){pt&&et.setFromMatrixPosition(z.matrixWorld).applyMatrix4($);let Dt=lt.update(z),kt=z.material;kt.visible&&p.push(z,Dt,kt,dt,et.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||D.intersectsObject(z))){let Dt=lt.update(z),kt=z.material;if(pt&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),et.copy(z.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),et.copy(Dt.boundingSphere.center)),et.applyMatrix4(z.matrixWorld).applyMatrix4($)),Array.isArray(kt)){let Ht=Dt.groups;for(let jt=0,ne=Ht.length;jt<ne;jt++){let Gt=Ht[jt],ue=kt[Gt.materialIndex];ue&&ue.visible&&p.push(z,Dt,ue,dt,et.z,Gt)}}else kt.visible&&p.push(z,Dt,kt,dt,et.z,null)}}let Tt=z.children;for(let Dt=0,kt=Tt.length;Dt<kt;Dt++)el(Tt[Dt],nt,dt,pt)}function nu(z,nt,dt,pt){let it=z.opaque,Tt=z.transmissive,Dt=z.transparent;y.setupLightsView(dt),k===!0&&vt.setGlobalState(v.clippingPlanes,dt),pt&&rt.viewport(R.copy(pt)),it.length>0&&Vr(it,nt,dt),Tt.length>0&&Vr(Tt,nt,dt),Dt.length>0&&Vr(Dt,nt,dt),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function iu(z,nt,dt,pt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[pt.id]===void 0&&(y.state.transmissionRenderTarget[pt.id]=new $e(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Sn:Jn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let Tt=y.state.transmissionRenderTarget[pt.id],Dt=pt.viewport||R;Tt.setSize(Dt.z,Dt.w);let kt=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),G&&Ot.render(dt);let Ht=v.toneMapping;v.toneMapping=hi;let jt=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),y.setupLightsView(pt),k===!0&&vt.setGlobalState(v.clippingPlanes,pt),Vr(z,dt,pt),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Gt=0,ue=nt.length;Gt<ue;Gt++){let ve=nt[Gt],Me=ve.object,Qe=ve.geometry,fe=ve.material,Wt=ve.group;if(fe.side===re&&Me.layers.test(pt.layers)){let Hn=fe.side;fe.side=We,fe.needsUpdate=!0,su(Me,dt,pt,Qe,fe,Wt),fe.side=Hn,fe.needsUpdate=!0,ne=!0}}ne===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}v.setRenderTarget(kt),v.setClearColor(U,B),jt!==void 0&&(pt.viewport=jt),v.toneMapping=Ht}function Vr(z,nt,dt){let pt=nt.isScene===!0?nt.overrideMaterial:null;for(let it=0,Tt=z.length;it<Tt;it++){let Dt=z[it],kt=Dt.object,Ht=Dt.geometry,jt=pt===null?Dt.material:pt,ne=Dt.group;kt.layers.test(dt.layers)&&su(kt,nt,dt,Ht,jt,ne)}}function su(z,nt,dt,pt,it,Tt){z.onBeforeRender(v,nt,dt,pt,it,Tt),z.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),it.onBeforeRender(v,nt,dt,pt,z,Tt),it.transparent===!0&&it.side===re&&it.forceSinglePass===!1?(it.side=We,it.needsUpdate=!0,v.renderBufferDirect(dt,nt,pt,it,z,Tt),it.side=ui,it.needsUpdate=!0,v.renderBufferDirect(dt,nt,pt,it,z,Tt),it.side=re):v.renderBufferDirect(dt,nt,pt,it,z,Tt),z.onAfterRender(v,nt,dt,pt,it,Tt)}function Wr(z,nt,dt){nt.isScene!==!0&&(nt=st);let pt=ot.get(z),it=y.state.lights,Tt=y.state.shadowsArray,Dt=it.state.version,kt=gt.getParameters(z,it.state,Tt,nt,dt),Ht=gt.getProgramCacheKey(kt),jt=pt.programs;pt.environment=z.isMeshStandardMaterial?nt.environment:null,pt.fog=nt.fog,pt.envMap=(z.isMeshStandardMaterial?q:C).get(z.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&z.envMap===null?nt.environmentRotation:z.envMapRotation,jt===void 0&&(z.addEventListener("dispose",ee),jt=new Map,pt.programs=jt);let ne=jt.get(Ht);if(ne!==void 0){if(pt.currentProgram===ne&&pt.lightsStateVersion===Dt)return ou(z,kt),ne}else kt.uniforms=gt.getUniforms(z),z.onBeforeCompile(kt,v),ne=gt.acquireProgram(kt,Ht),jt.set(Ht,ne),pt.uniforms=kt.uniforms;let Gt=pt.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Gt.clippingPlanes=vt.uniform),ou(z,kt),pt.needsLights=dp(z),pt.lightsStateVersion=Dt,pt.needsLights&&(Gt.ambientLightColor.value=it.state.ambient,Gt.lightProbe.value=it.state.probe,Gt.directionalLights.value=it.state.directional,Gt.directionalLightShadows.value=it.state.directionalShadow,Gt.spotLights.value=it.state.spot,Gt.spotLightShadows.value=it.state.spotShadow,Gt.rectAreaLights.value=it.state.rectArea,Gt.ltc_1.value=it.state.rectAreaLTC1,Gt.ltc_2.value=it.state.rectAreaLTC2,Gt.pointLights.value=it.state.point,Gt.pointLightShadows.value=it.state.pointShadow,Gt.hemisphereLights.value=it.state.hemi,Gt.directionalShadowMap.value=it.state.directionalShadowMap,Gt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Gt.spotShadowMap.value=it.state.spotShadowMap,Gt.spotLightMatrix.value=it.state.spotLightMatrix,Gt.spotLightMap.value=it.state.spotLightMap,Gt.pointShadowMap.value=it.state.pointShadowMap,Gt.pointShadowMatrix.value=it.state.pointShadowMatrix),pt.currentProgram=ne,pt.uniformsList=null,ne}function ru(z){if(z.uniformsList===null){let nt=z.currentProgram.getUniforms();z.uniformsList=ps.seqWithValue(nt.seq,z.uniforms)}return z.uniformsList}function ou(z,nt){let dt=ot.get(z);dt.outputColorSpace=nt.outputColorSpace,dt.batching=nt.batching,dt.batchingColor=nt.batchingColor,dt.instancing=nt.instancing,dt.instancingColor=nt.instancingColor,dt.instancingMorph=nt.instancingMorph,dt.skinning=nt.skinning,dt.morphTargets=nt.morphTargets,dt.morphNormals=nt.morphNormals,dt.morphColors=nt.morphColors,dt.morphTargetsCount=nt.morphTargetsCount,dt.numClippingPlanes=nt.numClippingPlanes,dt.numIntersection=nt.numClipIntersection,dt.vertexAlphas=nt.vertexAlphas,dt.vertexTangents=nt.vertexTangents,dt.toneMapping=nt.toneMapping}function up(z,nt,dt,pt,it){nt.isScene!==!0&&(nt=st),I.resetTextureUnits();let Tt=nt.fog,Dt=pt.isMeshStandardMaterial?nt.environment:null,kt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cs,Ht=(pt.isMeshStandardMaterial?q:C).get(pt.envMap||Dt),jt=pt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ne=!!dt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Gt=!!dt.morphAttributes.position,ue=!!dt.morphAttributes.normal,ve=!!dt.morphAttributes.color,Me=hi;pt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Me=v.toneMapping);let Qe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,fe=Qe!==void 0?Qe.length:0,Wt=ot.get(pt),Hn=y.state.lights;if(k===!0&&(Y===!0||z!==w)){let cn=z===w&&pt.id===_;vt.setState(pt,z,cn)}let de=!1;pt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Hn.state.version||Wt.outputColorSpace!==kt||it.isBatchedMesh&&Wt.batching===!1||!it.isBatchedMesh&&Wt.batching===!0||it.isBatchedMesh&&Wt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Wt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Wt.instancing===!1||!it.isInstancedMesh&&Wt.instancing===!0||it.isSkinnedMesh&&Wt.skinning===!1||!it.isSkinnedMesh&&Wt.skinning===!0||it.isInstancedMesh&&Wt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Wt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Wt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Wt.instancingMorph===!1&&it.morphTexture!==null||Wt.envMap!==Ht||pt.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==vt.numPlanes||Wt.numIntersection!==vt.numIntersection)||Wt.vertexAlphas!==jt||Wt.vertexTangents!==ne||Wt.morphTargets!==Gt||Wt.morphNormals!==ue||Wt.morphColors!==ve||Wt.toneMapping!==Me||Wt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Wt.__version=pt.version);let gn=Wt.currentProgram;de===!0&&(gn=Wr(pt,nt,it));let Vi=!1,sn=!1,Gs=!1,_e=gn.getUniforms(),Cn=Wt.uniforms;if(rt.useProgram(gn.program)&&(Vi=!0,sn=!0,Gs=!0),pt.id!==_&&(_=pt.id,sn=!0),Vi||w!==z){rt.buffers.depth.getReversed()?(tt.copy(z.projectionMatrix),u0(tt),f0(tt),_e.setValue(P,"projectionMatrix",tt)):_e.setValue(P,"projectionMatrix",z.projectionMatrix),_e.setValue(P,"viewMatrix",z.matrixWorldInverse);let ti=_e.map.cameraPosition;ti!==void 0&&ti.setValue(P,at.setFromMatrixPosition(z.matrixWorld)),mt.logarithmicDepthBuffer&&_e.setValue(P,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&_e.setValue(P,"isOrthographic",z.isOrthographicCamera===!0),w!==z&&(w=z,sn=!0,Gs=!0)}if(it.isSkinnedMesh){_e.setOptional(P,it,"bindMatrix"),_e.setOptional(P,it,"bindMatrixInverse");let cn=it.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),_e.setValue(P,"boneTexture",cn.boneTexture,I))}it.isBatchedMesh&&(_e.setOptional(P,it,"batchingTexture"),_e.setValue(P,"batchingTexture",it._matricesTexture,I),_e.setOptional(P,it,"batchingIdTexture"),_e.setValue(P,"batchingIdTexture",it._indirectTexture,I),_e.setOptional(P,it,"batchingColorTexture"),it._colorsTexture!==null&&_e.setValue(P,"batchingColorTexture",it._colorsTexture,I));let Vs=dt.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&Xt.update(it,dt,gn),(sn||Wt.receiveShadow!==it.receiveShadow)&&(Wt.receiveShadow=it.receiveShadow,_e.setValue(P,"receiveShadow",it.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Cn.envMap.value=Ht,Cn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&nt.environment!==null&&(Cn.envMapIntensity.value=nt.environmentIntensity),sn&&(_e.setValue(P,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&fp(Cn,Gs),Tt&&pt.fog===!0&&yt.refreshFogUniforms(Cn,Tt),yt.refreshMaterialUniforms(Cn,pt,O,W,y.state.transmissionRenderTarget[z.id]),ps.upload(P,ru(Wt),Cn,I)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ps.upload(P,ru(Wt),Cn,I),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&_e.setValue(P,"center",it.center),_e.setValue(P,"modelViewMatrix",it.modelViewMatrix),_e.setValue(P,"normalMatrix",it.normalMatrix),_e.setValue(P,"modelMatrix",it.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){let cn=pt.uniformsGroups;for(let ti=0,ei=cn.length;ti<ei;ti++){let au=cn[ti];J.update(au,gn),J.bind(au,gn)}}return gn}function fp(z,nt){z.ambientLightColor.needsUpdate=nt,z.lightProbe.needsUpdate=nt,z.directionalLights.needsUpdate=nt,z.directionalLightShadows.needsUpdate=nt,z.pointLights.needsUpdate=nt,z.pointLightShadows.needsUpdate=nt,z.spotLights.needsUpdate=nt,z.spotLightShadows.needsUpdate=nt,z.rectAreaLights.needsUpdate=nt,z.hemisphereLights.needsUpdate=nt}function dp(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(z,nt,dt){ot.get(z.texture).__webglTexture=nt,ot.get(z.depthTexture).__webglTexture=dt;let pt=ot.get(z);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=dt===void 0,pt.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,nt){let dt=ot.get(z);dt.__webglFramebuffer=nt,dt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(z,nt=0,dt=0){T=z,E=nt,S=dt;let pt=!0,it=null,Tt=!1,Dt=!1;if(z){let Ht=ot.get(z);if(Ht.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(P.FRAMEBUFFER,null),pt=!1;else if(Ht.__webglFramebuffer===void 0)I.setupRenderTarget(z);else if(Ht.__hasExternalTextures)I.rebindTextures(z,ot.get(z.texture).__webglTexture,ot.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let Gt=z.depthTexture;if(Ht.__boundDepthTexture!==Gt){if(Gt!==null&&ot.has(Gt)&&(z.width!==Gt.image.width||z.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(z)}}let jt=z.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Dt=!0);let ne=ot.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(ne[nt])?it=ne[nt][dt]:it=ne[nt],Tt=!0):z.samples>0&&I.useMultisampledRTT(z)===!1?it=ot.get(z).__webglMultisampledFramebuffer:Array.isArray(ne)?it=ne[dt]:it=ne,R.copy(z.viewport),L.copy(z.scissor),N=z.scissorTest}else R.copy(V).multiplyScalar(O).floor(),L.copy(Q).multiplyScalar(O).floor(),N=K;if(rt.bindFramebuffer(P.FRAMEBUFFER,it)&&pt&&rt.drawBuffers(z,it),rt.viewport(R),rt.scissor(L),rt.setScissorTest(N),Tt){let Ht=ot.get(z.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ht.__webglTexture,dt)}else if(Dt){let Ht=ot.get(z.texture),jt=nt||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,dt||0,jt)}_=-1},this.readRenderTargetPixels=function(z,nt,dt,pt,it,Tt,Dt){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=ot.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){rt.bindFramebuffer(P.FRAMEBUFFER,kt);try{let Ht=z.texture,jt=Ht.format,ne=Ht.type;if(!mt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=z.width-pt&&dt>=0&&dt<=z.height-it&&P.readPixels(nt,dt,pt,it,Zt.convert(jt),Zt.convert(ne),Tt)}finally{let Ht=T!==null?ot.get(T).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(z,nt,dt,pt,it,Tt,Dt){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=ot.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){let Ht=z.texture,jt=Ht.format,ne=Ht.type;if(!mt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=z.width-pt&&dt>=0&&dt<=z.height-it){rt.bindFramebuffer(P.FRAMEBUFFER,kt);let Gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.bufferData(P.PIXEL_PACK_BUFFER,Tt.byteLength,P.STREAM_READ),P.readPixels(nt,dt,pt,it,Zt.convert(jt),Zt.convert(ne),0);let ue=T!==null?ot.get(T).__webglFramebuffer:null;rt.bindFramebuffer(P.FRAMEBUFFER,ue);let ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await h0(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Tt),P.deleteBuffer(Gt),P.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,nt=null,dt=0){z.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,z=arguments[1]);let pt=Math.pow(2,-dt),it=Math.floor(z.image.width*pt),Tt=Math.floor(z.image.height*pt),Dt=nt!==null?nt.x:0,kt=nt!==null?nt.y:0;I.setTexture2D(z,0),P.copyTexSubImage2D(P.TEXTURE_2D,dt,0,0,Dt,kt,it,Tt),rt.unbindTexture()},this.copyTextureToTexture=function(z,nt,dt=null,pt=null,it=0){z.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,z=arguments[1],nt=arguments[2],it=arguments[3]||0,dt=null);let Tt,Dt,kt,Ht,jt,ne,Gt,ue,ve,Me=z.isCompressedTexture?z.mipmaps[it]:z.image;dt!==null?(Tt=dt.max.x-dt.min.x,Dt=dt.max.y-dt.min.y,kt=dt.isBox3?dt.max.z-dt.min.z:1,Ht=dt.min.x,jt=dt.min.y,ne=dt.isBox3?dt.min.z:0):(Tt=Me.width,Dt=Me.height,kt=Me.depth||1,Ht=0,jt=0,ne=0),pt!==null?(Gt=pt.x,ue=pt.y,ve=pt.z):(Gt=0,ue=0,ve=0);let Qe=Zt.convert(nt.format),fe=Zt.convert(nt.type),Wt;nt.isData3DTexture?(I.setTexture3D(nt,0),Wt=P.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(I.setTexture2DArray(nt,0),Wt=P.TEXTURE_2D_ARRAY):(I.setTexture2D(nt,0),Wt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,nt.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,nt.unpackAlignment);let Hn=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),Vi=P.getParameter(P.UNPACK_SKIP_ROWS),sn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ne);let Gs=z.isDataArrayTexture||z.isData3DTexture,_e=nt.isDataArrayTexture||nt.isData3DTexture;if(z.isRenderTargetTexture||z.isDepthTexture){let Cn=ot.get(z),Vs=ot.get(nt),cn=ot.get(Cn.__renderTarget),ti=ot.get(Vs.__renderTarget);rt.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<kt;ei++)Gs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ot.get(z).__webglTexture,it,ne+ei),z.isDepthTexture?(_e&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ot.get(nt).__webglTexture,it,ve+ei),P.blitFramebuffer(Ht,jt,Tt,Dt,Gt,ue,Tt,Dt,P.DEPTH_BUFFER_BIT,P.NEAREST)):_e?P.copyTexSubImage3D(Wt,it,Gt,ue,ve+ei,Ht,jt,Tt,Dt):P.copyTexSubImage2D(Wt,it,Gt,ue,ve+ei,Ht,jt,Tt,Dt);rt.bindFramebuffer(P.READ_FRAMEBUFFER,null),rt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _e?z.isDataTexture||z.isData3DTexture?P.texSubImage3D(Wt,it,Gt,ue,ve,Tt,Dt,kt,Qe,fe,Me.data):nt.isCompressedArrayTexture?P.compressedTexSubImage3D(Wt,it,Gt,ue,ve,Tt,Dt,kt,Qe,Me.data):P.texSubImage3D(Wt,it,Gt,ue,ve,Tt,Dt,kt,Qe,fe,Me):z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,it,Gt,ue,Tt,Dt,Qe,fe,Me.data):z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,it,Gt,ue,Me.width,Me.height,Qe,Me.data):P.texSubImage2D(P.TEXTURE_2D,it,Gt,ue,Tt,Dt,Qe,fe,Me);P.pixelStorei(P.UNPACK_ROW_LENGTH,Hn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sn),it===0&&nt.generateMipmaps&&P.generateMipmap(Wt),rt.unbindTexture()},this.copyTextureToTexture3D=function(z,nt,dt=null,pt=null,it=0){return z.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),dt=arguments[0]||null,pt=arguments[1]||null,z=arguments[2],nt=arguments[3],it=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,nt,dt,pt,it)},this.initRenderTarget=function(z){ot.get(z).__webglFramebuffer===void 0&&I.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?I.setTextureCube(z,0):z.isData3DTexture?I.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?I.setTexture2DArray(z,0):I.setTexture2D(z,0),rt.unbindTexture()},this.resetState=function(){E=0,S=0,T=null,rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Ho=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Go=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new H,fr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Zs=new H,rs=new H,os=new H,as=new Mt,$s=new Mt,Yf=new Kt,fo=new H,Ks=new H,po=new H,lf=new Mt,Il=new Mt,cf=new Mt,Wo=class extends De{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vo(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new fr(n,3,0,!1)),ss.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Yf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),os,o,rs,i,r),mo(Ks.set(.5,-.5,0),os,o,rs,i,r),mo(po.set(.5,.5,0),os,o,rs,i,r),lf.set(0,0),Il.set(1,0),cf.set(1,1);let a=t.ray.intersectTriangle(fo,Ks,po,!1,Zs);if(a===null&&(mo(Ks.set(-.5,.5,0),os,o,rs,i,r),Il.set(0,1),a=t.ray.intersectTriangle(fo,po,Ks,!1,Zs),a===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:ci.getInterpolation(Zs,fo,Ks,po,lf,Il,cf,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(s,t,e,n,i,r){as.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?($s.x=r*as.x-i*as.y,$s.y=i*as.x+r*as.y):$s.copy(as),s.copy(t),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Yf)}var Bc=class extends tn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends he{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new Kt,hf=new Kt,go=[],uf=new jn,ry=new Kt,Js=new St,js=new Qn,Se=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ry)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),uf.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(uf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),js.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),hf.multiplyMatrices(n,ls),Js.matrixWorld=hf,Js.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let l=go[o];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(i*this.count),i,this.count,Mh,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xo=new H,qo=new H,ff=new Kt,Qs=new cr,xo=new Qn,Pl=new H,df=new H,Oc=class extends De{constructor(t=new te,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Xo.fromBufferAttribute(e,i-1),qo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;ff.copy(i).invert(),Qs.copy(t.ray).applyMatrix4(ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,p=m-1;g<p;g+=c){let y=u.getX(g),M=u.getX(g+1),x=yo(this,t,Qs,l,y,M);x&&e.push(x)}if(this.isLineLoop){let g=u.getX(m-1),p=u.getX(d),y=yo(this,t,Qs,l,g,p);y&&e.push(y)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,p=m-1;g<p;g+=c){let y=yo(this,t,Qs,l,g,g+1);y&&e.push(y)}if(this.isLineLoop){let g=yo(this,t,Qs,l,m-1,d);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yo(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Xo.fromBufferAttribute(o,i),qo.fromBufferAttribute(o,r),e.distanceSqToSegment(Xo,qo,Pl,df)>n)return;Pl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Pl);if(!(l<t.near||l>t.far))return{distance:l,point:df.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var pf=new H,mf=new H,Yo=class extends Oc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pf.distanceTo(mf);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gr=class extends un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gf=new Kt,kc=new cr,vo=new Qn,Mo=new H,Zo=class extends De{constructor(t=new te,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;gf.copy(i).invert(),kc.copy(t.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){let p=c.getX(m);Mo.fromBufferAttribute(h,p),xf(Mo,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)Mo.fromBufferAttribute(h,m),xf(Mo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xf(s,t,e,n,i,r,o){let a=kc.distanceSqToPoint(s);if(a<e){let l=new H;kc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pe=class extends tn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,i=[],r=[],o=[],a=new H,l=new Kt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ne(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ne(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends fn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hc=class extends xr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var _o=new H,Ll=new Ah,Dl=new Ah,Ul=new Ah,Gc=class extends fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(_o.subVectors(i[0],i[1]).add(i[0]),c=_o);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(_o.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=_o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),Ll.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,g,p),Dl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,g,p),Ul.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,g,p)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Dl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ul.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ll.calc(l),Dl.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function oy(s,t){let e=1-s;return e*e*t}function ay(s,t){return 2*(1-s)*s*t}function ly(s,t){return s*s*t}function or(s,t,e,n){return oy(s,t)+ay(s,e)+ly(s,n)}function cy(s,t){let e=1-s;return e*e*e*t}function hy(s,t){let e=1-s;return 3*e*e*s*t}function uy(s,t){return 3*(1-s)*s*s*t}function fy(s,t){return s*s*s*t}function ar(s,t,e,n,i){return cy(s,t)+hy(s,e)+uy(s,n)+fy(s,i)}var $o=class extends fn{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,i.x,r.x,o.x,a.x),ar(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends fn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,i.x,r.x,o.x,a.x),ar(t,i.y,r.y,o.y,a.y),ar(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends fn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wc=class extends fn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends fn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(or(t,i.x,r.x,o.x),or(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends fn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(or(t,i.x,r.x,o.x),or(t,i.y,r.y,o.y),or(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(yf(a,l.x,c.x,u.x,h.x),yf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Gc,CubicBezierCurve:$o,CubicBezierCurve3:Vc,EllipseCurve:xr,LineCurve:Ko,LineCurve3:Wc,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Xc,SplineCurve:jo}),Yc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new qc[i.type]().fromJSON(i))}return this}},Qo=class extends Yc{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Jo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new $o(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new xr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ta=class s extends te{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ne(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new H,f=new Mt,d=new H,m=new H,g=new H,p=0,y=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,y=t[M+1].y-t[M].y,d.x=y*1,d.y=-p,d.z=y*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[M+1].x-t[M].x,y=t[M+1].y-t[M].y,d.x=y*1,d.y=-p,d.z=y*0,m.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(m)}for(let M=0;M<=e;M++){let x=n+M*u*i,v=Math.sin(x),b=Math.cos(x);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*v,h.y=t[E].y,h.z=t[E].x*b,o.push(h.x,h.y,h.z),f.x=M/e,f.y=E/(t.length-1),a.push(f.x,f.y);let S=l[3*E+0]*v,T=l[3*E+1],_=l[3*E+0]*b;c.push(S,T,_)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let v=x+M*t.length,b=v,E=v+t.length,S=v+t.length+1,T=v+1;r.push(b,E,T),r.push(S,T,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Di=class s extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qt=class s extends te{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,g=[],p=n/2,y=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function M(){let v=new H,b=new H,E=0,S=(e-t)/n;for(let T=0;T<=r;T++){let _=[],w=T/r,R=w*(e-t)+t;for(let L=0;L<=i;L++){let N=L/i,U=N*l+a,B=Math.sin(U),F=Math.cos(U);b.x=R*B,b.y=-w*n+p,b.z=R*F,h.push(b.x,b.y,b.z),v.set(B,S,F).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-w),_.push(m++)}g.push(_)}for(let T=0;T<i;T++)for(let _=0;_<r;_++){let w=g[_][T],R=g[_+1][T],L=g[_+1][T+1],N=g[_][T+1];(t>0||_!==0)&&(u.push(w,R,N),E+=3),(e>0||_!==r-1)&&(u.push(R,L,N),E+=3)}c.addGroup(y,E,0),y+=E}function x(v){let b=m,E=new Mt,S=new H,T=0,_=v===!0?t:e,w=v===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,p*w,0),f.push(0,w,0),d.push(.5,.5),m++;let R=m;for(let L=0;L<=i;L++){let U=L/i*l+a,B=Math.cos(U),F=Math.sin(U);S.x=_*F,S.y=p*w,S.z=_*B,h.push(S.x,S.y,S.z),f.push(0,w,0),E.x=B*.5+.5,E.y=F*.5*w+.5,d.push(E.x,E.y),m++}for(let L=0;L<i;L++){let N=b+L,U=R+L;v===!0?u.push(U,U+1,N):u.push(U+1,U,N),T+=3}c.addGroup(y,T,v===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ss=class s extends Qt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zc=class s extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new H,v=new H,b=new H;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],b),l(x,v,b,M)}function l(M,x,v,b){let E=b+1,S=[];for(let T=0;T<=E;T++){S[T]=[];let _=M.clone().lerp(v,T/E),w=x.clone().lerp(v,T/E),R=E-T;for(let L=0;L<=R;L++)L===0&&T===E?S[T][L]=_:S[T][L]=_.clone().lerp(w,L/R)}for(let T=0;T<E;T++)for(let _=0;_<2*(E-T)-1;_++){let w=Math.floor(_/2);_%2===0?(f(S[T][w+1]),f(S[T+1][w]),f(S[T][w])):(f(S[T][w+1]),f(S[T+1][w+1]),f(S[T+1][w]))}}function c(M){let x=new H;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){let M=new H;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let v=p(M)/2/Math.PI+.5,b=y(M)/Math.PI+.5;o.push(v,1-b)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let x=o[M+0],v=o[M+2],b=o[M+4],E=Math.max(x,v,b),S=Math.min(x,v,b);E>.9&&S<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){let v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function m(){let M=new H,x=new H,v=new H,b=new H,E=new Mt,S=new Mt,T=new Mt;for(let _=0,w=0;_<r.length;_+=9,w+=6){M.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),E.set(o[w+0],o[w+1]),S.set(o[w+2],o[w+3]),T.set(o[w+4],o[w+5]),b.copy(M).add(x).add(v).divideScalar(3);let R=p(b);g(E,w+0,M,R),g(S,w+2,x,R),g(T,w+4,v,R)}}function g(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function y(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ts=class extends Qo{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Qo().fromJSON(i))}return this}},dy={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Zf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=yy(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],f=s[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return yr(r,o,e,a,l,d,0),o}};function Zf(s,t,e,n,i){let r,o;if(i===Cy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=vf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=vf(r,s[r],s[r+1],o);return o&&pa(o,o.next)&&(Mr(o),o=o.next),o}function Ui(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&wy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?my(s,n,i,r):py(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Mr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=gy(Ui(s),t,e),yr(s,t,e,n,i,r,2)):o===2&&xy(s,t,e,n,i,r):yr(Ui(s),t,e,n,i,r,1);break}}}function py(s){let t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&hs(i,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function my(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ee(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,y=$c(d,m,t,e,n),M=$c(g,p,t,e,n),x=s.prevZ,v=s.nextZ;for(;x&&x.z>=y&&v&&v.z<=M;){if(x.x>=d&&x.x<=g&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&hs(a,u,l,h,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=g&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=y;){if(x.x>=d&&x.x<=g&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&hs(a,u,l,h,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!pa(i,r)&&$f(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function xy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ty(o,a)){let l=Kf(o,a);o=Ui(o,o.next),l=Ui(l,l.next),yr(o,t,e,n,i,r,0),yr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function yy(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Zf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Sy(c));for(i.sort(vy),r=0;r<i.length;r++)e=My(i[r],e);return e}function vy(s,t){return s.x-t.x}function My(s,t){let e=_y(s,t);if(!e)return t;let n=Kf(e,s);return Ui(n,n.next),Ui(e,e.next)}function _y(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),vr(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&by(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function by(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function wy(s,t,e,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ey(i)}function Ey(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function $c(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Sy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ty(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ay(s,t)&&(vr(s,t)&&vr(t,s)&&Ry(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||pa(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pa(s,t){return s.x===t.x&&s.y===t.y}function $f(s,t,e,n){let i=wo(Ee(s,t,e)),r=wo(Ee(s,t,n)),o=wo(Ee(e,n,s)),a=wo(Ee(e,n,t));return!!(i!==r&&o!==a||i===0&&bo(s,e,t)||r===0&&bo(s,n,t)||o===0&&bo(e,s,n)||a===0&&bo(e,t,n))}function bo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wo(s){return s>0?1:s<0?-1:0}function Ay(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&$f(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Ry(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Kf(s,t){let e=new Kc(s.i,s.x,s.y),n=new Kc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vf(s,t,e,n){let i=new Kc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Nn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Mf(t),_f(n,t);let o=t.length;e.forEach(Mf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,_f(n,e[l]);let a=dy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Mf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function _f(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var _r=class s extends te{constructor(t=new Ts([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Iy,x,v=!1,b,E,S,T;y&&(x=y.getSpacedPoints(u),v=!0,f=!1,b=y.computeFrenetFrames(u,!1),E=new H,S=new H,T=new H),f||(p=0,d=0,m=0,g=0);let _=a.extractPoints(c),w=_.shape,R=_.holes;if(!Nn.isClockWise(w)){w=w.reverse();for(let G=0,j=R.length;G<j;G++){let P=R[G];Nn.isClockWise(P)&&(R[G]=P.reverse())}}let N=Nn.triangulateShape(w,R),U=w;for(let G=0,j=R.length;G<j;G++){let P=R[G];w=w.concat(P)}function B(G,j,P){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(j,P)}let F=w.length,W=N.length;function O(G,j,P){let ft,ct,mt,rt=G.x-j.x,Et=G.y-j.y,ot=P.x-G.x,I=P.y-G.y,C=rt*rt+Et*Et,q=rt*I-Et*ot;if(Math.abs(q)>Number.EPSILON){let ht=Math.sqrt(C),ut=Math.sqrt(ot*ot+I*I),lt=j.x-Et/ht,gt=j.y+rt/ht,yt=P.x-I/ut,wt=P.y+ot/ut,Bt=((yt-lt)*I-(wt-gt)*ot)/(rt*I-Et*ot);ft=lt+rt*Bt-G.x,ct=gt+Et*Bt-G.y;let vt=ft*ft+ct*ct;if(vt<=2)return new Mt(ft,ct);mt=Math.sqrt(vt/2)}else{let ht=!1;rt>Number.EPSILON?ot>Number.EPSILON&&(ht=!0):rt<-Number.EPSILON?ot<-Number.EPSILON&&(ht=!0):Math.sign(Et)===Math.sign(I)&&(ht=!0),ht?(ft=-Et,ct=rt,mt=Math.sqrt(C)):(ft=rt,ct=Et,mt=Math.sqrt(C/2))}return new Mt(ft/mt,ct/mt)}let X=[];for(let G=0,j=U.length,P=j-1,ft=G+1;G<j;G++,P++,ft++)P===j&&(P=0),ft===j&&(ft=0),X[G]=O(U[G],U[P],U[ft]);let Z=[],V,Q=X.concat();for(let G=0,j=R.length;G<j;G++){let P=R[G];V=[];for(let ft=0,ct=P.length,mt=ct-1,rt=ft+1;ft<ct;ft++,mt++,rt++)mt===ct&&(mt=0),rt===ct&&(rt=0),V[ft]=O(P[ft],P[mt],P[rt]);Z.push(V),Q=Q.concat(V)}for(let G=0;G<p;G++){let j=G/p,P=d*Math.cos(j*Math.PI/2),ft=m*Math.sin(j*Math.PI/2)+g;for(let ct=0,mt=U.length;ct<mt;ct++){let rt=B(U[ct],X[ct],ft);tt(rt.x,rt.y,-P)}for(let ct=0,mt=R.length;ct<mt;ct++){let rt=R[ct];V=Z[ct];for(let Et=0,ot=rt.length;Et<ot;Et++){let I=B(rt[Et],V[Et],ft);tt(I.x,I.y,-P)}}}let K=m+g;for(let G=0;G<F;G++){let j=f?B(w[G],Q[G],K):w[G];v?(S.copy(b.normals[0]).multiplyScalar(j.x),E.copy(b.binormals[0]).multiplyScalar(j.y),T.copy(x[0]).add(S).add(E),tt(T.x,T.y,T.z)):tt(j.x,j.y,0)}for(let G=1;G<=u;G++)for(let j=0;j<F;j++){let P=f?B(w[j],Q[j],K):w[j];v?(S.copy(b.normals[G]).multiplyScalar(P.x),E.copy(b.binormals[G]).multiplyScalar(P.y),T.copy(x[G]).add(S).add(E),tt(T.x,T.y,T.z)):tt(P.x,P.y,h/u*G)}for(let G=p-1;G>=0;G--){let j=G/p,P=d*Math.cos(j*Math.PI/2),ft=m*Math.sin(j*Math.PI/2)+g;for(let ct=0,mt=U.length;ct<mt;ct++){let rt=B(U[ct],X[ct],ft);tt(rt.x,rt.y,h+P)}for(let ct=0,mt=R.length;ct<mt;ct++){let rt=R[ct];V=Z[ct];for(let Et=0,ot=rt.length;Et<ot;Et++){let I=B(rt[Et],V[Et],ft);v?tt(I.x,I.y+x[u-1].y,x[u-1].x+P):tt(I.x,I.y,h+P)}}}D(),k();function D(){let G=i.length/3;if(f){let j=0,P=F*j;for(let ft=0;ft<W;ft++){let ct=N[ft];$(ct[2]+P,ct[1]+P,ct[0]+P)}j=u+p*2,P=F*j;for(let ft=0;ft<W;ft++){let ct=N[ft];$(ct[0]+P,ct[1]+P,ct[2]+P)}}else{for(let j=0;j<W;j++){let P=N[j];$(P[2],P[1],P[0])}for(let j=0;j<W;j++){let P=N[j];$(P[0]+F*u,P[1]+F*u,P[2]+F*u)}}n.addGroup(G,i.length/3-G,0)}function k(){let G=i.length/3,j=0;Y(U,j),j+=U.length;for(let P=0,ft=R.length;P<ft;P++){let ct=R[P];Y(ct,j),j+=ct.length}n.addGroup(G,i.length/3-G,1)}function Y(G,j){let P=G.length;for(;--P>=0;){let ft=P,ct=P-1;ct<0&&(ct=G.length-1);for(let mt=0,rt=u+p*2;mt<rt;mt++){let Et=F*mt,ot=F*(mt+1),I=j+ft+Et,C=j+ct+Et,q=j+ct+ot,ht=j+ft+ot;at(I,C,q,ht)}}}function tt(G,j,P){l.push(G),l.push(j),l.push(P)}function $(G,j,P){et(G),et(j),et(P);let ft=i.length/3,ct=M.generateTopUV(n,i,ft-3,ft-2,ft-1);st(ct[0]),st(ct[1]),st(ct[2])}function at(G,j,P,ft){et(G),et(j),et(ft),et(j),et(P),et(ft);let ct=i.length/3,mt=M.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);st(mt[0]),st(mt[1]),st(mt[3]),st(mt[1]),st(mt[2]),st(mt[3])}function et(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function st(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Py(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new qc[i.type]().fromJSON(i)),new s(n,t.options)}},Iy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],g=t[r*3],p=t[r*3+1],y=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-h),new Mt(f,1-m),new Mt(g,1-y)]:[new Mt(a,1-l),new Mt(u,1-h),new Mt(d,1-m),new Mt(p,1-y)]}};function Py(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var br=class s extends Zc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var dn=class s extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],m=[],g=[],p=[];for(let y=0;y<=n;y++){let M=[],x=y/n,v=0;y===0&&o===0?v=.5/e:y===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let E=b/e;h.x=-t*Math.cos(i+E*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+E*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(E+v,1-x),M.push(c++)}u.push(M)}for(let y=0;y<n;y++)for(let M=0;M<e;M++){let x=u[y][M+1],v=u[y][M],b=u[y+1][M],E=u[y+1][M+1];(y!==0||o>0)&&d.push(x,v,E),(y!==n-1||l<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zn=class s extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let g=m/i*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(g),h.y=(t+e*Math.cos(p))*Math.sin(g),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let g=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,y=(i+1)*(d-1)+m,M=(i+1)*d+m;o.push(g,p,M),o.push(p,y,M)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ea=class extends Ie{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},mi=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},wn=class extends un{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ft=class extends un{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Eo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ly(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var As=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends As{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fu:r=t,a=2*e-n;break;case du:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:o=t,l=2*n-e;break;case du:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),g=m*m,p=g*m,y=-f*p+2*f*g-f*m,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*m+1,x=(-1-d)*p+(1.5+d)*g+.5*m,v=d*p-d*g;for(let b=0;b!==a;++b)r[b]=y*o[u+b]+M*o[c+b]+x*o[l+b]+v*o[h+b];return r}},jc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Qc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case _c:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return _c;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ly(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===il,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[f+m]||g!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=_c;var Ni=class extends En{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Io;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends En{};th.prototype.ValueTypeName="color";var eh=class extends En{};eh.prototype.ValueTypeName="number";var nh=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ce.slerpFlat(r,0,o,c-a,o,c,l);return r}},na=class extends En{InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends En{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Io;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends En{};ih.prototype.ValueTypeName="vector";var sh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Dy=new sh,rh=class{constructor(t){this.manager=t!==void 0?t:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ia=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Nl=new Kt,bf=new H,wf=new H,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(bf),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oh=class extends wr{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ms*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},sa=class extends Rs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ef=new Kt,tr=new H,zl=new H,ah=class extends wr{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),zl.copy(n.position),zl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),Ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef)}},ra=class extends Rs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lh=class extends wr{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Sf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Sf(){return performance.now()}var Rh="\\[\\]\\.:\\/",Uy=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",Ny="[^"+Rh.replace("\\.","")+"]",zy=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Fy=/(WCOD+)?/.source.replace("WCOD",Ny),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),ky=new RegExp("^"+zy+Fy+By+Oy+"$"),Hy=["material","materials","bones","map"],ch=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=ch;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);var Ps=new Map;window.BDS_DATA=(s,t,e)=>{let n=Ps.get(s);n&&(Ps.delete(s),n.resolve({fmt:t,b64:e}))};function Gy(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Vy(s){let t=new DecompressionStream("gzip"),e=new Blob([s]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function Wy(s,t){return new Promise((e,n)=>{Ps.set(s,{resolve:e});let i=document.createElement("script");i.src=t,i.async=!0,i.onerror=()=>{Ps.delete(s),n(new Error("Impossibile caricare "+t))},i.onload=()=>{i.remove(),setTimeout(()=>{Ps.has(s)&&(Ps.delete(s),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(i)})}async function Sr(s,t){let{fmt:e,b64:n}=await Wy(s,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let i=await Vy(Gy(n));return e==="bin"?i:JSON.parse(new TextDecoder().decode(i))}var ma=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var ga=class{constructor(t,e,n){let i=t.height;this.nx=i.nx,this.nz=i.nz,this.step=i.step,this.x0=i.x0,this.z0=i.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*i.scale;this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0);{let c=new Uint32Array(l.getImageData(0,0,o.w,o.h).data.buffer),u=new Uint8Array(c.length),h=new Map;this.lcKeys=[];let f=-1,d=0;for(let m=0;m<c.length;m++){let g=c[m];g!==f&&(f=g,d=h.get(g),d===void 0&&(d=this.lcKeys.length,h.set(g,d),this.lcKeys.push(g))),u[m]=d}this.lcIdx=u}this.lcCanvas=a,this.texture=new Pe(a),this.texture.colorSpace=ye,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=_n,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,u])=>({k:c,c:u})),this.palette.push({k:"default",c:o.default})}height(t,e){let n=(t-this.x0)/this.step,i=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(i);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=i-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h;if(a+l<=1)return u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l;let h=u[c+this.nx+1];return h+(u[c+this.nx]-h)*(1-a)+(u[c+1]-h)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),i=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||i<0||n>=this.lcW||i>=this.lcH)return"default";let r=this.lcIdx[i*this.lcW+n],o=this.classCache.get(r);if(o===void 0){let a=this.lcKeys[r],l=a&255,c=a>>>8&255,u=a>>>16&255,h=1e9;for(let f of this.palette){let d=(f.c[0]-l)**2+(f.c[1]-c)**2+(f.c[2]-u)**2;d<h&&(h=d,o=f.k)}this.classCache.set(r,o)}return o}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Ft({map:this.texture}),n=this.proj;return e.onBeforeCompile=i=>{i.uniforms.detailMap={value:t},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUp = normalize(mat3(modelMatrix) * objectNormal).y;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vUp;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);
          // sui pendii molto ripidi (oltre ~45 gradi) affiora la roccia
          float steep = smoothstep(0.26, 0.46, 1.0 - vUp);
          vec3 rock = vec3(0.47, 0.45, 0.42) * (0.75 + 0.5 * d1) * (0.9 + 0.3 * d2);
          diffuseColor.rgb = mix(diffuseColor.rgb, rock, steep * 0.85);`)},e}buildChunk(t,e,n,i,r,o=0){let a=Math.round(n/i)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),u=this.proj.xmax-this.proj.xmin,h=this.proj.zmax-this.proj.zmin;for(let p=0;p<a;p++)for(let y=0;y<a;y++){let M=t+y*i,x=e+p*i,v=p*a+y,b=this.height(M,x);if(o>0)for(let E=-2;E<=2;E++)for(let S=-2;S<=2;S++)b=Math.min(b,this.height(M+E*i/2,x+S*i/2));l[v*3]=M,l[v*3+1]=b-o,l[v*3+2]=x,c[v*2]=(M-this.proj.xmin)/u,c[v*2+1]=1-(x-this.proj.zmin)/h}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let y=0;y<a-1;y++){let M=p*a+y,x=M+1,v=M+a,b=v+1;f[d++]=M,f[d++]=v,f[d++]=x,f[d++]=x,f[d++]=v,f[d++]=b}let m=new te;m.setAttribute("position",new he(l,3)),m.setAttribute("uv",new he(c,2)),m.setIndex(new he(f,1)),m.computeVertexNormals();let g=new St(m,r);return g.receiveShadow=!0,g}};var oe=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,i=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(i,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.i.length===0}build(){let t=new te;return t.setAttribute("position",new qt(this.p,3)),this.c&&t.setAttribute("color",new qt(this.c,3)),this.u&&t.setAttribute("uv",new qt(this.u,2)),t.setIndex(this.n>65535?new bs(this.i,1):new _s(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new St(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Re(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s^=s>>>4,s=Math.imul(s,668265261),s^=s>>>15,(s>>>0)/4294967296}function Jf(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],l=e[r][0],c=e[r][1];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Fi(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Pe(i);return r.colorSpace=ye,n&&(r.wrapS=r.wrapT=di),r.anisotropy=8,r}function jf(s=256){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s),i=16,r=new Float32Array(i*i);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/s*i,h=c/s*i,f=Math.floor(u),d=Math.floor(h),m=u-f,g=h-d,p=(x,v)=>r[(v+i)%i*i+(x+i)%i],y=m*m*(3-2*m),M=g*g*(3-2*g);return(p(f,d)*(1-y)+p(f+1,d)*y)*(1-M)+(p(f,d+1)*(1-y)+p(f+1,d+1)*y)*M};for(let l=0;l<s;l++)for(let c=0;c<s;c++){let u=(l*s+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new Pe(t);return a.wrapS=a.wrapT=di,a.anisotropy=8,a}var Qf=4,Tr=null;function Ls(){if(Tr)return Tr;let s=Fi(256,256,t=>{t.clearRect(0,0,256,256);let e="#ffffff";t.fillStyle=e,t.fillRect(0,6,256,4),t.fillRect(0,54,256,4);for(let n=0;n<10;n++){let i=n*25.6+11;t.fillRect(i,2,3.5,60),t.beginPath(),t.moveTo(i-2,4),t.lineTo(i+1.75,0),t.lineTo(i+5.5,4),t.fill()}t.strokeStyle=e,t.lineWidth=1.6;for(let n=-8;n<24;n++)t.beginPath(),t.moveTo(n*16,64),t.lineTo(n*16+64,128),t.stroke(),t.beginPath(),t.moveTo(n*16+64,64),t.lineTo(n*16,128),t.stroke();t.fillRect(0,65,256,3),t.fillRect(0,124,256,3),t.fillStyle="#ffffff",t.fillRect(0,140,256,12),t.fillRect(0,166,256,12);for(let n of[6,134])t.fillRect(n,130,14,62);t.fillRect(0,194,256,5),t.fillRect(0,250,256,6),t.fillRect(0,214,256,3);for(let n=0;n<16;n++)t.fillRect(n*16+6,194,3,62);t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.arc(n*32+16,214,9,Math.PI,0),t.stroke();t.fillRect(0,192,4,64),t.fillRect(252,192,4,64)});return s.wrapT=_n,s.anisotropy=4,Tr={grille:new Ft({map:s,vertexColors:!0,alphaTest:.45,side:re,transparent:!1}),solid:new Ft({vertexColors:!0})},Tr.depth=new ur({depthPacking:Eh,map:s,alphaTest:.45,side:re}),Tr}var Xy=s=>[1-(s+1)/Qf+.004,1-s/Qf-.004];function Ar(s,t,e,n,i,r,o,a,l,c,u,h,f=0){let d=Math.hypot(i-t,r-e),[m,g]=Xy(c),p=f+d/u,y=s.v(t,n+a,e,h[0],h[1],h[2],f,m),M=s.v(i,o+a,r,h[0],h[1],h[2],p,m),x=s.v(i,o+l,r,h[0],h[1],h[2],p,g),v=s.v(t,n+l,e,h[0],h[1],h[2],f,g);return s.quad(y,M,x,v),p}function pn(s,t,e,n,i,r,o,a,l,c,u=null){let h=i/2,f=o/2,d=[a*h,l*h],m=[-l*f,a*f],g=(M,x,v)=>[t+d[0]*M+m[0]*v,e+x*r,n+d[1]*M+m[1]*v],p=[1,.62,.8,.8,.72,.72];[[g(-1,1,-1),g(-1,1,1),g(1,1,1),g(1,1,-1)],[g(-1,0,-1),g(1,0,-1),g(1,0,1),g(-1,0,1)],[g(-1,0,1),g(1,0,1),g(1,1,1),g(-1,1,1)],[g(1,0,-1),g(-1,0,-1),g(-1,1,-1),g(1,1,-1)],[g(1,0,1),g(1,0,-1),g(1,1,-1),g(1,1,1)],[g(-1,0,-1),g(-1,0,1),g(-1,1,1),g(-1,1,-1)]].forEach((M,x)=>{if(x===1)return;let v=x===0&&u?u:c,b=x===0&&u?1:p[x],E=M.map(S=>s.v(S[0],S[1],S[2],v[0]*b,v[1]*b,v[2]*b));s.quad(E[0],E[1],E[2],E[3])})}var Rr=[.17,.19,.18],qy=[.13,.22,.16],Yy=[.45,.32,.2],Zy=[.62,.64,.62],ya=[[.86,.8,.66],[.78,.7,.55],[.72,.72,.7],[.82,.62,.48],[.62,.36,.28]];function td(s,t,e,n,i,r,o){let a=Re(o)<.6?Rr:qy,l=ya[Math.floor(Re(o+7)*ya.length)],c=n===4?Math.min(.6,i*.35):0,u=0;for(let h=0;h<e.length-1;h++){let[f,d]=e[h],[m,g]=e[h+1],p=Math.hypot(m-f,g-d);if(p<.2)continue;let y=(m-f)/p,M=(g-d)/p,x=Math.max(1,Math.ceil(p/6));for(let v=0;v<x;v++){let b=f+(m-f)*v/x,E=d+(g-d)*v/x,S=f+(m-f)*(v+1)/x,T=d+(g-d)*(v+1)/x,_=r.height(b,E),w=r.height(S,T);if(n===4){let N=p/x,U=Math.min(_,w);pn(s,(b+S)/2,U-.3,(E+T)/2,N+.02,c+.3+Math.abs(w-_)*.5,.3,y,M,l,[.74,.73,.7])}u=Ar(t,b,E,_,S,T,w,c,i,n===5?1:n===6?2:0,n===6?5:1.2,n===6?Yy:n===5?Zy:a,u)}if(n===5||n===7){let v=Math.max(1,Math.round(p/3));for(let b=0;b<=v;b++){let E=f+(m-f)*b/v,S=d+(g-d)*b/v;pn(s,E,r.height(E,S)-.2,S,.06,i+.25,.06,y,M,n===5?[.36,.4,.36]:a)}}}}var xa=(s,t)=>Math.atan2(-t,s),va=class{constructor(t,e,n){this.R=t,this.T=e,this.col=n,this.dyn=[]}baseY(t,e){let n=this.R.surfaceAt(t,e,1e9);return n&&n.road?n.h:this.T.height(t,e)+.02}leafGeo(t,e,n){let i=new oe(!0,!0);return Ar(i,0,0,0,t,0,0,.08,e,n===4?1:3,n===3?1.1:1.6,Rr),i.build()}build(t,e){let n=e&&e.gt;if(!n||!n.length)return null;let i=Ls(),r=new oe(!0,!1),o=new oe(!0,!0),a=new $t;for(let l=0;l<n.length;l+=6){let c=n[l],u=n[l+1]/10,h=n[l+2]/10,f=n[l+3]/1800*Math.PI,d=n[l+4]/10,m=n[l+5],g=Math.sin(f),p=Math.cos(f),y=p,M=-g,x=this.baseY(u,h),v=Math.round(u*7+h*13),b=u-g*d/2,E=h-p*d/2,S=u+g*d/2,T=h+p*d/2,_=c===3?1.25:1.8,w=ya[Math.floor(Re(v)*ya.length)];if(c<=1||c===3){let L=c===3?.3:.42;for(let N of[-1,1]){let U=u+g*(d/2+L/2)*N,B=h+p*(d/2+L/2)*N;pn(r,U,x-.3,B,L,_+.6,L,g,p,w),pn(r,U,x+_+.3,B,L+.08,.08,L+.08,g,p,[.7,.69,.66])}}else if(c===2)pn(r,b-g*.25,x,E-p*.25,.38,1.05,.38,g,p,[.92,.92,.9]),pn(r,b-g*.25,x+.75,E-p*.25,.4,.12,.4,g,p,[.8,.1,.08]),pn(r,S,x,T,.1,.85,.1,g,p,[.85,.85,.85]);else for(let[L,N]of[[b,E],[S,T]])pn(r,L,x,N,.12,.9,.12,g,p,[.85,.2,.15]);if(m===2){this.addDynamic(a,t,c,u,x,h,g,p,d,_);continue}let R=m===1;if(R&&this.col.addPolygon(t,Float32Array.from([b-y*.2,E-M*.2,S-y*.2,T-M*.2,S+y*.2,T+M*.2,b+y*.2,E+M*.2]),void 0,!0),c===0){let L=d>2.6,N=L?d/2:d,U=L?[[b,E,g,p],[S,T,-g,-p]]:[[b,E,g,p]];for(let[B,F,W,O]of U){let X=R?W:y,Z=R?O:M;Ar(o,B,F,x,B+X*N,F+Z*N,x,.08,_,3,1.6,Rr)}}else if(c===1){let L=R?0:d;Ar(o,b+g*L+y*.18,E+p*L+M*.18,x,S+g*L+y*.18,T+p*L+M*.18,x,.08,_,3,1.6,Rr)}else if(c===3){let L=R?0:1.2,N=g*Math.cos(L)+y*Math.sin(L),U=p*Math.cos(L)+M*Math.sin(L);Ar(o,b,E,x,b+N*d,E+U*d,x,.06,_,3,1.1,Rr)}else if(c===2)this.boom(r,b,E,x,g,p,d,R?0:1.45);else if(c===4&&R)for(let N=0;N<8;N++){let U=N/8,B=(N+1)/8,F=X=>.3*4*X*(1-X),W=b+(S-b)*(U+B)/2,O=E+(T-E)*(U+B)/2;pn(r,W,x+.8-F((U+B)/2),O,d/8,.04,.04,g,p,N%2?[.85,.15,.1]:[.95,.95,.95])}}if(r.empty||a.add(r.mesh(i.solid,!0)),!o.empty){let l=o.mesh(i.grille,!0);l.customDepthMaterial=this.depthMat(),a.add(l)}return a.userData.dispose=()=>{this.dyn=this.dyn.filter(l=>l.tile!==t?!0:(l.colObj&&this.col.remove(l.colObj),!1))},a}depthMat(){return Ls().depth}boom(t,e,n,i,r,o,a,l){let c=Math.max(2,Math.round(a/.5));for(let u=0;u<c;u++){let h=u%2?[.8,.08,.06]:[.95,.95,.95],f=(u+.5)/c*a;l>.7?pn(t,e,i+.95+u/c*a,n,.09,a/c+.005,.06,r,o,h):pn(t,e+r*f,i+.905,n+o*f,a/c+.005,.09,.06,r,o,h)}}addDynamic(t,e,n,i,r,o,a,l,c,u){let h=l,f=-a,d=i-a*c/2,m=o-l*c/2,g=i+a*c/2,p=o+l*c/2,y={tile:e,kind:n,x:i,z:o,w:c,open:0,target:0,hold:0,parts:[],colObj:null,ring:Float32Array.from([d-h*.2,m-f*.2,g-h*.2,p-f*.2,g+h*.2,p+f*.2,d+h*.2,m+f*.2])},M=Ls();if(n===2||n===4){let x=new oe(!0,!1),v=Math.max(2,Math.round(c/.5));for(let S=0;S<v;S++)pn(x,(S+.5)/v*c,-.045,0,c/v+.005,.09,.06,1,0,S%2?[.8,.08,.06]:[.95,.95,.95]);let b=new $t,E=x.mesh(M.solid,!0);b.position.set(d,r+.95,m),b.rotation.y=xa(a,l),b.add(E),t.add(b),y.parts.push({obj:E,apply:S=>{E.rotation.z=S*1.45}})}else if(n===1){let x=new St(this.leafGeo(c,u,n),M.grille);x.castShadow=!0,x.customDepthMaterial=this.depthMat(),x.rotation.y=xa(a,l),t.add(x),y.parts.push({obj:x,apply:v=>{x.position.set(d+a*c*v+h*.18,r,m+l*c*v+f*.18)}})}else{let x=c>2.6,v=x?c/2:c,b=this.leafGeo(v,u,n),E=x?[[d,m,a,l],[g,p,-a,-l]]:[[d,m,a,l]];for(let[S,T,_,w]of E){let R=new St(b,M.grille);R.castShadow=!0,R.customDepthMaterial=this.depthMat(),R.position.set(S,r,T),t.add(R);let L=xa(_,w),N=xa(h,f);for(;N-L>Math.PI;)N-=2*Math.PI;for(;N-L<-Math.PI;)N+=2*Math.PI;y.parts.push({obj:R,apply:U=>{R.rotation.y=L+(N-L)*U}})}}for(let x of y.parts)x.apply(0);y.colObj=this.col.addPolygon(e,y.ring,void 0,!0),this.dyn.push(y)}update(t,e){for(let n of this.dyn){let i=!1;for(let a of e)if(Math.abs(a.x-n.x)<14&&Math.abs(a.z-n.z)<14&&Math.hypot(a.x-n.x,a.z-n.z)<11+n.w/2){i=!0;break}if(i?n.hold=3:n.hold-=t,n.target=n.hold>0?1:0,n.open===n.target)continue;let r=n.kind===2||n.kind===4?.9:.45;n.open=n.target>n.open?Math.min(1,n.open+t*r):Math.max(0,n.open-t*r);for(let a of n.parts)a.apply(n.open);let o=n.open<.8;o&&!n.colObj?n.colObj=this.col.addPolygon(n.tile,n.ring,void 0,!0):!o&&n.colObj&&(this.col.remove(n.colObj),n.colObj=null)}}};var Vt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},zt={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},Jt={GATE:14,SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},$y=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],Ma=.18,xi=32,Ky=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],Jy=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],ed=1.6,jy=.13,nd={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function Qy(s){let t=nd[s];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var _a=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let i=n.proj;this.xmin=i.xmin,this.zmin=i.zmin,this.xmax=i.xmax,this.zmax=i.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),u=0,h=0;for(let p=0;p<o;p++)u+=t.nodes[p*2],h+=t.nodes[p*2+1],a[p]=u/10,l[p]=h/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;this.ways=t.ways.map(p=>{let y=r>8,M={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:y?p[8]:0,sw:y?p[9]:0,lit:y?p[10]:0,lf:y?p[11]:0,lb:y?p[12]:0,turnF:y?this.names[p[13]]:"",turnB:y?this.names[p[14]]:"",dest:y?this.names[p[15]]:"",nodes:p.slice(r)};return M.oneway=!!(M.flags&zt.ONEWAY),M.drivable=!(M.flags&zt.NOCAR),this.layout(M),M}),this.smooth(a,l,c),this.fixRoundabouts(a,l);let f=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=f,this.ntag=new Uint8Array(f),this.ndir=new Uint8Array(f);let d=r>8?3:2;for(let p=0;p<t.ntags.length;p+=d)this.ntag[t.ntags[p]]=t.ntags[p+1],d===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let y=p.nodes.length;p.cum=new Float32Array(y);for(let M=1;M<y;M++){let x=p.nodes[M-1],v=p.nodes[M];p.cum[M]=p.cum[M-1]+Math.hypot(this.nx[v]-this.nx[x],this.nz[v]-this.nz[x])}if(p.len=p.cum[y-1],p.abs=!!(p.flags&(zt.BRIDGE|zt.TUNNEL)),p.abs){let M=p.nodes[0],x=p.nodes[y-1];p.h0=e.height(this.nx[M],this.nz[M])+this.dh[M],p.h1=e.height(this.nx[x],this.nz[x])+this.dh[x]}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let y=this.pointAt(p,p.len/2),M=e.isUrban(y[0],y[1]),x=p.cls,v;x===0?v=p.flags&zt.LINK?80:130:x===1?v=p.flags&zt.LINK?60:M?70:110:x<=4?v=p.flags&zt.LINK||M?50:90:x===5?v=M?50:70:x===6?v=50:v=30,p.flags&zt.ROUNDABOUT&&(v=Math.min(v,50)),p.limit=v,p.limitMapped=!1}let m=new Int32Array(f+1);this.ways.forEach(p=>{for(let y of p.nodes)m[y+1]++});for(let p=0;p<f;p++)m[p+1]+=m[p];this.adjStart=m,this.adjWay=new Int32Array(m[f]),this.adjPos=new Int32Array(m[f]);let g=m.slice(0,f);this.ways.forEach((p,y)=>{for(let M=0;M<p.nodes.length;M++){let x=p.nodes[M],v=g[x]++;this.adjWay[v]=y,this.adjPos[v]=M}}),this.degree=new Uint8Array(f),this.degMain=new Uint8Array(f),this.w1=new Float32Array(f),this.w2=new Float32Array(f),this.m1=new Float32Array(f),this.m2=new Float32Array(f),this.onRb=new Uint8Array(f),this.ways.forEach(p=>{let y=p.cls<=Vt.LIVING&&p.drivable;for(let M=0;M<p.nodes.length;M++){let x=p.nodes[M],v=(M>0?1:0)+(M<p.nodes.length-1?1:0);this.degree[x]+=v,y&&(this.degMain[x]+=v),p.width>this.w1[x]?(this.w2[x]=this.w1[x],this.w1[x]=p.width):p.width>this.w2[x]&&(this.w2[x]=p.width),y&&(p.width>this.m1[x]?(this.m2[x]=this.m1[x],this.m1[x]=p.width):p.width>this.m2[x]&&(this.m2[x]=p.width)),p.flags&zt.ROUNDABOUT&&(this.onRb[x]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,y)=>{let M=p.width/2+1;for(let x=0;x<p.nodes.length-1;x++){let v=p.nodes[x],b=p.nodes[x+1],E=this.nx[v],S=this.nz[v],T=this.nx[b],_=this.nz[b],w=y*16384+x,R=Math.floor((Math.min(E,T)-M-this.xmin)/xi),L=Math.floor((Math.max(E,T)+M-this.xmin)/xi),N=Math.floor((Math.min(S,_)-M-this.zmin)/xi),U=Math.floor((Math.max(S,_)+M-this.zmin)/xi);for(let W=N;W<=U;W++)for(let O=R;O<=L;O++){let X=W*4096+O,Z=this.grid.get(X);Z||this.grid.set(X,Z=[]),Z.push(w)}let B=this.tileKey((E+T)/2,(S+_)/2),F=this.tileSegs.get(B);F||this.tileSegs.set(B,F=[]),F.push(w)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,y)=>{for(let M=0;M<p.p.length-1;M++){let x=this.tileKey((p.p[M][0]+p.p[M+1][0])/2,(p.p[M][1]+p.p[M+1][1])/2),v=this.tileRails.get(x);v||this.tileRails.set(x,v=[]),v.push(y*16384+M)}if(p.bridge){let M=p.p[0],x=p.p[p.p.length-1];p.h0=e.height(M[0],M[1]),p.h1=e.height(x[0],x[1]),p.cum=[0];for(let v=1;v<p.p.length;v++)p.cum.push(p.cum[v-1]+Math.hypot(p.p[v][0]-p.p[v-1][0],p.p[v][1]-p.p[v-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=Ky[e],i,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&zt.LINK)?2:1:2);t.oneway?(i=o,r=0):t.lf||t.lb?(i=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-i)):o<=1?(i=.5,r=.5):(i=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(i+r))):e===Vt.TRACK?a=3.2:e===Vt.SERVICE?a=t.flags&zt.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===Vt.PEDESTRIAN?a=6:(t.flags&zt.ROUNDABOUT&&!t.lanes&&(i=e<=3?1.6:1.4),a=(i+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&i===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(i+r)*n>a&&(n=a/(i+r)),t.width=a,t.lw=n,t.nF=i,t.nB=r,t.sh=(a-(i+r)*n)/2,t.cOff=-a/2+t.sh+r*n}fixRoundabouts(t,e){let n=new Map,i=l=>{for(;n.get(l)!==l;)n.set(l,n.get(n.get(l))),l=n.get(l);return l},r=this.ways.filter(l=>l.flags&zt.ROUNDABOUT);for(let l of r){for(let c of l.nodes)n.has(c)||n.set(c,c);for(let c=1;c<l.nodes.length;c++){let u=i(l.nodes[c-1]),h=i(l.nodes[c]);u!==h&&n.set(u,h)}}let o=new Map;for(let l of n.keys()){let c=i(l);o.has(c)||o.set(c,[]),o.get(c).push(l)}let a=new Map;for(let[l,c]of o){let u=0,h=0;for(let d of c)u+=t[d],h+=e[d];u/=c.length,h/=c.length;let f=0;for(let d of c)f+=Math.hypot(t[d]-u,e[d]-h);f/=c.length,a.set(l,Math.max(4.5,Math.min(9,f*.5,2*(f-2))))}for(let l of r){if(l.widthTag>2)continue;let c=a.get(i(l.nodes[0]));if(!c)continue;let u=l.lanes>=2&&c>=7.5?2:1;l.width=c,l.nF=u,l.nB=0,l.sh=.4,l.lw=(c-.8)/u,l.cOff=-c/2+l.sh}}coveredBy(t,e,n,i=0,r=!0){let o=this.ways[t],a=u=>u.flags&zt.ROUNDABOUT?-1:u.cls*2+(u.flags&zt.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],m=f.nodes[h+1],g=this.nx[d],p=this.nz[d],y=this.nx[m]-g,M=this.nz[m]-p,x=y*y+M*M;if(x<1e-6)return;let v=((e-g)*y+(n-p)*M)/x;if(v<0||v>1)return;let b=Math.sqrt(x);h===0&&v*b<.3||h===f.nodes.length-2&&(1-v)*b<.3||Math.abs((e-g)*M-(n-p)*y)/b>f.width/2+i||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let i=t.length,r=new Uint8Array(i),o=new Map;this.ways.forEach((c,u)=>{let h=c.nodes;for(let f=0;f<h.length;f++)r[h[f]]+=(f>0?1:0)+(f<h.length-1?1:0);for(let f of[0,h.length-1]){let d=o.get(h[f]);d||o.set(h[f],d=[]),d.push([u,f])}});let a=(c,u)=>{let h=this.ways[c],f=h.nodes,d=f[u];if(f[0]===f[f.length-1]&&f.length>3)return u===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[m,g]of o.get(d)||[]){if(m===c)continue;let p=this.ways[m].nodes;return g===0?p[1]:p[p.length-2]}return-1},l=(c,u)=>{let h=this.ways[c].nodes,f=h[u],d=u>0?h[u-1]:a(c,u),m=u<h.length-1?h[u+1]:a(c,u),g=0,p=0,y=0,M=0,x=0;if(d>=0){let S=Math.hypot(t[f]-t[d],e[f]-e[d])||1;g=(t[f]-t[d])/S,p=(e[f]-e[d])/S}if(m>=0){let S=Math.hypot(t[m]-t[f],e[m]-e[f])||1;y=(t[m]-t[f])/S,M=(e[m]-e[f])/S}d>=0&&m>=0&&(x=Math.acos(Math.max(-1,Math.min(1,g*y+p*M))));let v=g+y,b=p+M,E=Math.hypot(v,b);return E<1e-6?null:[v/E,b/E,x]};this.ways.forEach((c,u)=>{let h=c.nodes;if(h.length<2)return;let f=[h[0]],d=l(u,0);for(let m=0;m<h.length-1;m++){let g=h[m],p=h[m+1],y=l(u,m+1),M=t[p]-t[g],x=e[p]-e[g],v=Math.hypot(M,x);if(v>3&&d&&y){let b=M/v,E=x/v,S=Math.acos(Math.max(-1,Math.min(1,d[0]*b+d[1]*E))),T=Math.acos(Math.max(-1,Math.min(1,y[0]*b+y[1]*E))),_=Math.max(S,T);if(_>.03&&_<1.1){let w=v*_/4,R=Math.min(8,Math.ceil(Math.sqrt(w/.12)));if(R>=2){let L=d[2]>.6?Math.min(v,7):v,N=y[2]>.6?Math.min(v,7):v;for(let U=1;U<R;U++){let B=U/R,F=B*B,W=F*B,O=2*W-3*F+1,X=W-2*F+B,Z=-2*W+3*F,V=W-F;t.push(O*t[g]+X*L*d[0]+Z*t[p]+V*N*y[0]),e.push(O*e[g]+X*L*d[1]+Z*e[p]+V*N*y[1]),n.push(n[g]+(n[p]-n[g])*B),f.push(t.length-1)}}}}f.push(p),d=y}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let i=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[i]+(this.nx[r]-this.nx[i])*a,this.nz[i]+(this.nz[r]-this.nz[i])*a,n,a]}heightOn(t,e,n,i,r){let o=this.ways[t];if(o.abs){let c=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?c/o.len:0)+Ma}let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+Ma}segmentsNear(t,e,n,i){let r=Math.floor((t-n-this.xmin)/xi),o=Math.floor((t+n-this.xmin)/xi),a=Math.floor((e-n-this.zmin)/xi),l=Math.floor((e+n-this.zmin)/xi),c=this._seen||(this._seen=new Set);c.clear();for(let u=a;u<=l;u++)for(let h=r;h<=o;h++){let f=this.grid.get(u*4096+h);if(f)for(let d of f)c.has(d)||(c.add(d),i(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,i){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(i-c)*h)/f;d=d<0?0:d>1?1:d;let m=l+u*d,g=c+h*d;return{t:d,px:m,pz:g,d:Math.hypot(n-m,i-g),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let i=null,r=-1e9;this.segmentsNear(t,e,8,(a,l)=>{let c=this.ways[a],u=this.projectOnSeg(a,l,t,e);if(u.d>c.width/2+.35)return;let h=this.heightOn(a,l,u.t,t,e);h<=n+1.3&&(h>r+.01||Math.abs(h-r)<=.01&&i&&u.d<i.d)&&(r=h,i={wi:a,k:l,t:u.t,d:u.d})});let o=this.terrain.height(t,e);return i&&r>=o-.6?{h:r,road:i}:i&&o>n+1.3?{h:r,road:i}:{h:o,road:null}}nearest(t,e,n=40,i=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(i&&!i(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:$y[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&zt.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let i=new Map;for(let o of t.keys()){let a=e(o);i.has(a)||i.set(a,[]),i.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&zt.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of i.values()){if(o.length<4)continue;let a=0,l=0;for(let g of o)a+=this.nx[g],l+=this.nz[g];a/=o.length,l/=o.length;let c=1e9,u=0,h=0,f=0;for(let g of o){let p=Math.hypot(this.nx[g]-a,this.nz[g]-l);c=Math.min(c,p),u=Math.max(u,p),h=Math.max(h,r.get(g)),f+=this.dh[g]}if(u>c*1.8||u>120)continue;let d=c-h/2-.3;if(d<1.2)continue;let m=o.map(g=>{let p=Math.hypot(this.nx[g]-a,this.nz[g]-l),y=Math.max(.1,(p-r.get(g)/2-.1)/p);return[Math.atan2(this.nz[g]-l,this.nx[g]-a),a+(this.nx[g]-a)*y,l+(this.nz[g]-l)*y]}).sort((g,p)=>g[0]-p[0]).map(g=>[g[1],g[2]]);this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length,poly:m})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,i]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:i,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(i,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=g=>{let p=t.width>=i[g]-.01?r[g]:i[g];return p>0?p/2+a:0},d=-1e9,m=0;for(let g=0;g<e;g++){let p=t.nodes[g];if(o[p]>=3){let y=f(p);y>0&&(d=t.cum[g],m=y)}l[g]=d,c[g]=m}d=1e9,m=0;for(let g=e-1;g>=0;g--){let p=t.nodes[g];if(o[p]>=3){let y=f(p);y>0&&(d=t.cum[g],m=y)}u[g]=d,h[g]=m}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(a.flags&zt.ROUNDABOUT||!a.drivable||a.cls>=Vt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Fi(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Fi(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),m=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,m+2,c-4,c-4,5),o.fill()}}),n=Fi(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),i=Fi(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=nd[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Ft({map:t,vertexColors:!0}),-2,-4),stone:r(new Ft({map:e,vertexColors:!0}),-2,-4),path:r(new Ft({map:t,vertexColors:!0}),-1,-2),walk:new Ft({map:n,vertexColors:!0,side:re}),mark:r(new Ft({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Ft({map:i,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Ft({color:11052186,side:re}),barrier:new Ft({vertexColors:!0,side:re}),guard:new Ft({color:13159632,side:re}),island:new Ft({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,i=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}let o=Math.hypot(i,r)||1;i/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+i*(u/f);a=1/Math.max(.5,d)}return[-r*a,i*a]}wayColor(t){return t.flags&zt.NOCAR||t.surf===1?[1,1,1]:t.flags&zt.UNPAVED?[.95,.82,.62]:Jy[t.cls]}edgeH(t,e,n,i,r){let o=this.ways[t];if(o.abs)return this.heightOn(t,e,n,i,r);let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+Ma}addDecal(t,e,n,i,r,o,a,l,c,u,h){let f=Qy(h);if(!f)return;let d=-l,m=a,g=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([p,y,M,x])=>{let v=r+d*p+a*y,b=o+m*p+l*y;return t.v(v,this.edgeH(e,n,i,v,b)+.035,b,1,1,1,M,x)});t.quad(g[0],g[1],g[2],g[3])}buildTile(t){let e=this.buildTileGen(t),n;for(;!(n=e.next()).done;);return n.value}*buildTileGen(t){let e=new $t,n=this.tileSegs.get(t)||[],i=this.materials(),r=new oe(!0,!0),o=new oe(!0,!0),a=new oe(!0,!1),l=new oe(!1,!1),c=new oe(!1,!1),u=new oe(!0,!0),h=new oe(!0,!0),f=this.terrain,d=5,m=new Set,g=0;for(let y of n){++g%20===0&&(yield);let M=Math.floor(y/16384),x=y%16384,v=this.ways[M],b=v.nodes[x],E=v.nodes[x+1],S=this.nx[b],T=this.nz[b],_=this.nx[E],w=this.nz[E],R=Math.hypot(_-S,w-T);if(R<.05)continue;let L=(_-S)/R,N=(w-T)/R,U=-N,B=L,F=this.miter(v,x),W=this.miter(v,x+1),O=v.width/2,X=Math.max(1,Math.ceil(R/d)),Z=Math.max(1,Math.ceil(R/10));if(Z<X){let at=!0;for(let et=0;et<Z&&at;et++)for(let st of[-1,1]){let G=[];for(let j of[et/Z,(et+.5)/Z,(et+1)/Z]){let P=F[0]+(W[0]-F[0])*j,ft=F[1]+(W[1]-F[1])*j,ct=S+(_-S)*j+P*O*st,mt=T+(w-T)*j+ft*O*st;G.push(this.edgeH(M,x,j,ct,mt))}if(Math.abs(G[1]-(G[0]+G[2])/2)>.02){at=!1;break}}at&&(X=Z)}let V=this.wayColor(v),Q=v.surf===1||!!(v.flags&zt.NOCAR),K=Q?o:r,D=Q?.6:.2,k=v.abs||this.dh[b]>.3||this.dh[E]>.3,Y=-1,tt=-1,$=[];for(let at=0;at<=X;at++){let et=at/X,st=S+(_-S)*et,G=T+(w-T)*et,j=F[0]+(W[0]-F[0])*et,P=F[1]+(W[1]-F[1])*et,ft=st-j*O,ct=G-P*O,mt=st+j*O,rt=G+P*O,Et=this.edgeH(M,x,et,ft,ct),ot=this.edgeH(M,x,et,mt,rt),I=K.v(ft,Et,ct,V[0],V[1],V[2],ft*D,ct*D),C=K.v(mt,ot,rt,V[0],V[1],V[2],mt*D,rt*D);Y>=0&&K.quad(Y,tt,C,I),Y=I,tt=C,$.push([ft,Et,ct,mt,ot,rt,j,P])}for(let[at,et]of[[0,b],[v.nodes.length-1,E]]){if(at===0?x!==0:x!==v.nodes.length-2)continue;let st=et*2+(Q?1:0);if(m.has(st)||v.flags&zt.ROUNDABOUT)continue;m.add(st);let G=this.nx[et],j=this.nz[et],P=at===0?0:1,ft=K.v(G,this.edgeH(M,x,P,G,j),j,V[0],V[1],V[2],G*D,j*D),ct=[];for(let mt=0;mt<14;mt++){let rt=mt/14*Math.PI*2,Et=G+Math.cos(rt)*O,ot=j+Math.sin(rt)*O;ct.push(K.v(Et,this.edgeH(M,x,P,Et,ot),ot,V[0],V[1],V[2],Et*D,ot*D))}for(let mt=0;mt<14;mt++)K.tri(ft,ct[(mt+1)%14],ct[mt])}if(k){for(let at=0;at<2;at++)for(let et=0;et<$.length-1;et++){let st=$[et],G=$[et+1],j=st[at*3],P=st[at*3+1],ft=st[at*3+2],ct=G[at*3],mt=G[at*3+1],rt=G[at*3+2],Et=f.height(j,ft),ot=f.height(ct,rt);if(P-Et<.35&&mt-ot<.35||this.coveredBy(M,(j+ct)/2,(ft+rt)/2,.3))continue;let I=v.abs?Math.max(Et-1,P-1.4):Et-.5,C=v.abs?Math.max(ot-1,mt-1.4):ot-.5,q=l.v(j,P,ft),ht=l.v(ct,mt,rt),ut=l.v(ct,C,rt),lt=l.v(j,I,ft);l.quad(q,ht,ut,lt);let gt=l.v(j,P+1,ft),yt=l.v(ct,mt+1,rt),wt=l.v(ct,mt,rt),Bt=l.v(j,P,ft);l.quad(gt,yt,wt,Bt)}if(v.abs&&v.flags&zt.BRIDGE)for(let at=1;at<$.length-1;at+=4){let et=$[at],st=(et[0]+et[3])/2,G=(et[2]+et[5])/2,j=(et[1]+et[4])/2,P=f.height(st,G);if(j-P<3)continue;let ft=.6,ct=[[-ft,-ft],[ft,-ft],[ft,ft],[-ft,ft]];for(let mt=0;mt<4;mt++){let[rt,Et]=ct[mt],[ot,I]=ct[(mt+1)%4],C=l.v(st+rt,j-.5,G+Et),q=l.v(st+ot,j-.5,G+I),ht=l.v(st+ot,P-1,G+I),ut=l.v(st+rt,P-1,G+Et);l.quad(C,q,ht,ut)}}}if(v.cls<=Vt.TRUNK&&!(v.flags&zt.LINK)&&!k){let at=this.zones(v).mark;for(let et=0;et<2;et++)for(let st=0;st<$.length-1;st++){let G=v.cum[x]+st/X*R,j=v.cum[x]+(st+1)/X*R;if(G-at.pc[x]<8||at.nc[x+1]-j<8)continue;let P=$[st],ft=$[st+1],ct=et?1:-1,mt=.4*ct;if(this.coveredBy(M,(P[et*3]+ft[et*3])/2+U*mt,(P[et*3+2]+ft[et*3+2])/2+B*mt,.8))continue;let rt=P[et*3]+U*mt,Et=P[et*3+2]+B*mt,ot=P[et*3+1],I=ft[et*3]+U*mt,C=ft[et*3+2]+B*mt,q=ft[et*3+1],ht=c.v(rt,ot+.85,Et),ut=c.v(I,q+.85,C),lt=c.v(I,q+.5,C),gt=c.v(rt,ot+.5,Et);if(c.quad(ht,ut,lt,gt),st%2===0){let yt=c.v(rt,ot+.85,Et),wt=c.v(rt+L*.12,ot+.85,Et+N*.12),Bt=c.v(rt+L*.12,ot-.2,Et+N*.12),vt=c.v(rt,ot-.2,Et);c.quad(yt,wt,Bt,vt)}}}this.buildSidewalk(u,M,x,$,X,R),this.buildMarkings(a,M,x)}let p=new oe(!0,!1);for(let y of this.roundabouts){if(this.tileKey(y.x,y.z)!==t)continue;let M=f.height(y.x,y.z)+y.dh+Ma+.22,x=y.poly,v=x.length,b=Math.min(1.6,y.r*.3),E=p.v(y.x,M+.25+Math.min(1.2,y.r*.06),y.z,.3,.52,.2),T=[[0,M-.6,.86,.86,.83],[0,M,.86,.86,.83],[.25,M,.62,.55,.5],[b,M+.06,.62,.55,.5],[b,M+.25,.8,.8,.78],[b+.25,M+.25,.33,.56,.22]].map(([w,R,L,N,U])=>x.map(([B,F])=>{let W=Math.hypot(B-y.x,F-y.z)||1,O=Math.max(.05,(W-w)/W);return p.v(y.x+(B-y.x)*O,R,y.z+(F-y.z)*O,L,N,U)}));for(let w=0;w<T.length-1;w++)for(let R=0;R<v;R++){let L=(R+1)%v;p.quad(T[w][R],T[w+1][R],T[w+1][L],T[w][L])}let _=T[T.length-1];for(let w=0;w<v;w++)p.tri(E,_[(w+1)%v],_[w])}return yield,this.buildNodeMarks(t,a,r),yield,this.buildLaneArrows(t,h),this.buildRoundaboutEntries(t,a),yield,this.buildRails(t,r,l),yield,r.empty||e.add(r.mesh(i.road)),yield,o.empty||e.add(o.mesh(i.stone)),u.empty||e.add(u.mesh(i.walk)),yield,a.empty||e.add(a.mesh(i.mark)),h.empty||e.add(h.mesh(i.decal)),l.empty||e.add(l.mesh(i.wall,!0)),c.empty||e.add(c.mesh(i.guard)),p.empty||e.add(p.mesh(i.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&zt.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<Vt.PRIMARY||t.cls>Vt.RESIDENTIAL||t.flags&(zt.LINK|zt.ROUNDABOUT|zt.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,i,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let m=0;m<2;m++){if(!(u&(m?2:1)))continue;let g=m?1:-1,p=null;for(let y=0;y<=r;y++){let M=a.cum[n]+y/r*o,x=i[y],v=y/r,b=x[m*3],E=x[m*3+1],S=x[m*3+2],T=b+x[6]*g*ed,_=S+x[7]*g*ed;if((M-h.pc[n]<40||h.nc[n+1]-M<40)&&this.coveredBy(e,(b+T)/2,(S+_)/2,1)){p=null;continue}let R=this.edgeH(e,n,v,T,_),L=Math.max(E,R)+jy,N=[t.v(b,E-.05,S,d[0],d[1],d[2],0,M*.5),t.v(b,L,S,d[0],d[1],d[2],.1,M*.5),t.v(b,L,S,f[0],f[1],f[2],0,M*.6),t.v(T,L,_,f[0],f[1],f[2],1,M*.6),t.v(T,L,_,d[0],d[1],d[2],0,M*.5),t.v(T,Math.min(R,this.terrain.height(T,_))-.4,_,d[0],d[1],d[2],.1,M*.5)];if(p)for(let U=0;U<6;U+=2)g>0?t.quad(p[U],p[U+1],N[U+1],N[U]):t.quad(p[U],N[U],N[U+1],p[U+1]);p=N}}}buildMarkings(t,e,n){let i=this.ways[e];if(i.cls>=Vt.SERVICE||!i.drivable||i.flags&zt.UNPAVED||i.surf===1)return;let r=i.nodes[n],o=i.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,m=this.miter(i,n),g=this.miter(i,n+1),p=i.width/2,y=this.zones(i).mark,M=this.zones(i).walk,x=i.cum[n],v=[],b=i.limit<=50,E=i.flags&zt.ROUNDABOUT;if(i.cls<=Vt.TERTIARY||E||i.width>=7){let R=Math.max(.3,i.sh*.85);v.push({off:-p+R,wdt:.15,dash:0,edge:!0},{off:p-R,wdt:.15,dash:0,edge:!0})}let S=b?[3,4.5]:[4.5,7.5];if(E)i.nF>=2&&v.push({off:-p+i.sh+i.lw,wdt:.12,dash:[3,4.5]});else if(!i.oneway&&i.nF>=1&&i.nB>=1&&i.width>=5.4){let R=(y.nc[n+1]-(x+h)<22||x-y.pc[n]<22)&&i.cls<=Vt.TERTIARY;i.nF+i.nB>=4?v.push({off:i.cOff-.14,wdt:.12,dash:0},{off:i.cOff+.14,wdt:.12,dash:0}):v.push({off:i.cOff,wdt:.15,dash:R?0:S});for(let L=1;L<i.nF;L++)v.push({off:i.cOff+i.lw*L,wdt:.12,dash:S});for(let L=1;L<i.nB;L++)v.push({off:i.cOff-i.lw*L,wdt:.12,dash:S})}else if(i.oneway&&i.nF>=2)for(let R=1;R<i.nF;R++)v.push({off:-p+i.sh+i.lw*R,wdt:.15,dash:[4.5,7.5]});let T=i.cls<=Vt.TRUNK||i.flags&zt.LINK?220:35,_=x-M.pc[n]<T||M.nc[n+1]-(x+h)<T,w=_?1.25:5;for(let R of v){let L=[];for(let W=0;W<h;W+=w)L.push(W);if(R.dash){let W=R.dash[0]+R.dash[1];for(let O=Math.floor(x/W)*W;O<x+h;O+=W)O>x&&L.push(O-x),O+R.dash[0]>x&&O+R.dash[0]<x+h&&L.push(O+R.dash[0]-x)}L.push(h),L.sort((W,O)=>W-O);let N=[];for(let W=0;W<L.length-1;W++){let O=L[W],X=L[W+1];if(X-O<.02)continue;let Z=(O+X)/2,V=Z/h,Q=!R.dash||(x+Z)%(R.dash[0]+R.dash[1])<R.dash[0];if(Q&&_){let K=m[0]+(g[0]-m[0])*V,D=m[1]+(g[1]-m[1])*V;this.coveredBy(e,a+f*Z+K*R.off,l+d*Z+D*R.off,R.edge?.1:0,!!R.edge)&&(Q=!1)}N.push([O,X,Q])}let U=-1,B=-1,F=-1;for(let W=0;W<N.length;W++){let[O,X,Z]=N[W];if(!Z){U=-1;continue}let V=N[W+1],Q=V&&V[2]&&V[0]===X&&Math.abs(X/5-Math.round(X/5))>1e-6,K=U>=0&&F===O;if(Q&&K){F=X;continue}for(let D of K?[X]:Q?[O]:[O,X]){let k=D/h,Y=m[0]+(g[0]-m[0])*k,tt=m[1]+(g[1]-m[1])*k,$=a+f*D+Y*R.off,at=l+d*D+tt*R.off,et=$-Y*R.wdt/2,st=at-tt*R.wdt/2,G=$+Y*R.wdt/2,j=at+tt*R.wdt/2,P=t.v(et,this.edgeH(e,n,k,et,st)+.02,st,1,1,1),ft=t.v(G,this.edgeH(e,n,k,G,j)+.02,j,1,1,1);U>=0&&t.quad(U,B,ft,P),U=P,B=ft}F=X}}}buildNodeMarks(t,e,n){let i=new Set,r=[Jt.CROSSING,Jt.CROSSING_SIGNALS,Jt.BUMP,Jt.TABLE,Jt.MINI_RB,Jt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||i.has(h)||!r.includes(f)||c.cls>=Vt.SERVICE&&f!==Jt.TURNING)continue;i.add(h);let d=Math.min(u,c.nodes.length-2),m=c.nodes[d],g=c.nodes[d+1],p=this.nx[g]-this.nx[m],y=this.nz[g]-this.nz[m],M=Math.hypot(p,y)||1,x=p/M,v=y/M,b=-v,E=x,S=this.nx[h],T=this.nz[h],_=c.width/2,w=u===d?0:1,R=(L,N,U,B,F,W=.025)=>{let O=[[L,U],[N,U],[N,B],[L,B]].map(([X,Z])=>{let V=S+b*X+x*Z,Q=T+E*X+v*Z;return e.v(V,this.edgeH(a,d,w,V,Q)+W,Q,F[0],F[1],F[2])});e.quad(O[0],O[1],O[2],O[3])};if(f===Jt.CROSSING||f===Jt.CROSSING_SIGNALS)for(let L=-_+.55;L<=_-.55;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1]);else if(f===Jt.BUMP){let L=0;for(let N=-_+.2;N<_-.2;N+=.5,L++)R(N,Math.min(_-.2,N+.5),-.45,.45,L%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===Jt.TABLE){R(-_+.1,_-.1,-2.6,2.6,[.72,.36,.3],.05);for(let L=-_+.6;L<=_-.6;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1],.07)}else if(f===Jt.MINI_RB){let L=this.edgeH(a,d,w,S,T)+.03,N=e.v(S,L+.08,T,1,1,1),U=[];for(let B=0;B<16;B++){let F=B/16*6.2832;U.push(e.v(S+Math.cos(F)*1.5,L,T+Math.sin(F)*1.5,1,1,1))}for(let B=0;B<16;B++)e.tri(N,U[(B+1)%16],U[B])}else if(f===Jt.TURNING){let L=this.wayColor(c),N=Math.max(7,_+3),U=n.v(S,this.edgeH(a,d,w,S,T),T,L[0],L[1],L[2],S*.2,T*.2),B=[];for(let F=0;F<20;F++){let W=F/20*6.2832,O=S+Math.cos(W)*N,X=T+Math.sin(W)*N;B.push(n.v(O,this.edgeH(a,d,w,O,X),X,L[0],L[1],L[2],O*.2,X*.2))}for(let F=0;F<20;F++)n.tri(U,B[(F+1)%20],B[F])}}}}buildLaneArrows(t,e){let n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let m of a.len>70?[9,32]:[9]){if(m>a.len-4)continue;let[g,p,y,M]=this.pointAt(a,l>0?a.len-m:m),x=a.nodes[y],v=a.nodes[y+1],b=this.nx[v]-this.nx[x],E=this.nz[v]-this.nz[x],S=Math.hypot(b,E)||1;b=b/S*l,E=E/S*l;let T=-E,_=b,w=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((R,L)=>{let N=new Set(R.split(";").map(B=>B.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(B=>B==="left"||B==="right"||B==="through"));if(!N.size)return;let U=w+d*(L+.5);this.addDecal(e,r,y,M,g+T*U,p+_*U,b,E,Math.min(1.5,d*.5),4.2,[...N].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let i=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=i.oneway?-i.width/2+.3:(n.dir>0?i.cOff:-i.cOff)+.15,m=i.width/2-.3;for(let g=d;g+.5<=m;g+=.75){let p=[[g,-.3],[g+.5,-.3],[g+.25,.35]].map(([y,M])=>{let x=h+l*y-r*M,v=f+c*y-o*M;return e.v(x,this.edgeH(n.wi,n.k,n.t,x,v)+.03,v,1,1,1)});e.tri(p[0],p[1],p[2]),e.tri(p[0],p[2],p[1])}}}buildRails(t,e){let n=this.terrain;for(let i of this.tileRails.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,m=(h-c)/f,g=-m,p=d,y=Math.max(1,Math.ceil(f/6)),M=(x,v,b)=>{if(a.bridge&&a.cum){let E=a.cum[o]+b*f;return a.h0+(a.h1-a.h0)*E/(a.cum[a.cum.length-1]||1)+.25}return n.height(x,v)+.25};for(let[x,v,b]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let E=-1,S=-1;for(let T=0;T<=y;T++){let _=T/y,w=l+(u-l)*_+g*x,R=c+(h-c)*_+p*x,L=M(w,R,_)+(b?.16:0),N=w-g*v/2,U=R-p*v/2,B=w+g*v/2,F=R+p*v/2,W=b?[.35,.33,.32]:[.75,.68,.58],O=e.v(N,L,U,...W,N*.3,U*.3),X=e.v(B,L,F,...W,B*.3,F*.3);E>=0&&e.quad(E,S,X,O),E=O,S=X}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new oe(!0,!0),i=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let x=3;x<r.length;x+=2)u+=r[x],h+=r[x+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let x=0;x<c.length-1;x++){let v=Math.hypot(c[x+1][0]-c[x][0],c[x+1][1]-c[x][1]),b=Math.max(1,Math.ceil(v/6));for(let E=0;E<b;E++)f.push([c[x][0]+(c[x+1][0]-c[x][0])*E/b,c[x][1]+(c[x+1][1]-c[x][1])*E/b,d+v*E/b]);d+=v}f.push([c[c.length-1][0],c[c.length-1][1],d]);let m=i[o],g=e.height(f[0][0],f[0][1]),p=e.height(f[f.length-1][0],f[f.length-1][1]),y=-1,M=-1;for(let x=0;x<f.length;x++){let v=f[Math.min(f.length-1,x+1)],b=f[Math.max(0,x-1)],E=v[0]-b[0],S=v[1]-b[1],T=Math.hypot(E,S)||1;E/=T,S/=T;let _=-S,w=E,R=f[x][0],L=f[x][1],N=d>0?f[x][2]/d:0,U=R-_*a/2,B=L-w*a/2,F=R+_*a/2,W=L+w*a/2,O=l?g+(p-g)*N+Math.sin(Math.PI*N)*Math.min(5.5,d*.12)+.1:0,X=n.v(U,l?O:e.height(U,B)+.1,B,m[0],m[1],m[2],U*.3,B*.3),Z=n.v(F,l?O:e.height(F,W)+.1,W,m[0],m[1],m[2],F*.3,W*.3);y>=0&&n.quad(y,M,Z,X),y=X,M=Z}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new oe(!0,!1),i=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,m=-f/d*u/2,g=h/d*u/2,p=[[o-m,a-g],[o+m,a+g],[l+m,c+g],[l-m,c-g]].map(([y,M])=>n.v(y,e.height(y,M)+.1,M,1,1,1));n.quad(p[0],p[1],p[2],p[3])};for(let o=0;o<i.length;o+=5){let a=i[o]/10,l=i[o+1]/10,c=i[o+2]/10*Math.PI/180,u=i[o+3]/10,h=(i[o+4]>>1)/10,f=i[o+4]&1,d=Math.sin(c),m=Math.cos(c),g=-m,p=d;if(f===0)for(let y of[1,-1])r(a+g*y*u/2-d*h/2,l+p*y*u/2-m*h/2,a+g*y*u/2+d*h/2,l+p*y*u/2+m*h/2,.1);else for(let y of[1,-1])r(a+d*y*h/2-g*u/2,l+m*y*h/2-p*u/2,a+d*y*h/2+g*u/2,l+m*y*h/2+p*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let i=this.terrain,r=new oe(!0,!1),o=new oe(!0,!1),a=new oe(!0,!0),l=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let u of t.ba){let h=l[u[0]],f=u[1]/10,d=[],m=0,g=0;for(let p=2;p<u.length;p+=2)m+=u[p],g+=u[p+1],d.push([m/10,g/10]);if(u[0]>=4){if(td(o,a,d,u[0],f,i,u[2]+u[3]*31),e&&u[0]!==7)for(let p=0;p<d.length-1;p++){let[y,M]=d[p],[x,v]=d[p+1],b=Math.hypot(x-y,v-M);if(b<1.5)continue;let E=-(v-M)/b*.3,S=(x-y)/b*.3;e.addPolygon(n,Float32Array.from([y-E,M-S,x-E,v-S,x+E,v+S,y+E,M+S]))}continue}for(let p=0;p<d.length-1;p++){let[y,M]=d[p],[x,v]=d[p+1],b=Math.hypot(x-y,v-M);if(b<.2)continue;let E=-(v-M)/b*h.th/2,S=(x-y)/b*h.th/2,T=Math.max(1,Math.ceil(b/8));for(let _=0;_<T;_++){let w=_/T,R=(_+1)/T,L=y+(x-y)*w,N=M+(v-M)*w,U=y+(x-y)*R,B=M+(v-M)*R,F=i.height(L,N),W=i.height(U,B),O=u[0]===3?.45:-.3,X=h.c,Z=[X[0]*.8,X[1]*.8,X[2]*.8],V=[[L-E,N-S,F],[U-E,B-S,W],[U+E,B+S,W],[L+E,N+S,F]],Q=V.map(([K,D,k])=>r.v(K,k+f,D,X[0],X[1],X[2]));r.quad(Q[0],Q[1],Q[2],Q[3]);for(let[K,D]of[[0,1],[2,3]]){let k=V[K],Y=V[D],tt=r.v(k[0],k[2]+f,k[1],Z[0],Z[1],Z[2]),$=r.v(Y[0],Y[2]+f,Y[1],Z[0],Z[1],Z[2]),at=r.v(Y[0],Y[2]+O,Y[1],Z[0],Z[1],Z[2]),et=r.v(k[0],k[2]+O,k[1],Z[0],Z[1],Z[2]);r.quad(tt,$,at,et)}}if(e&&u[0]!==3&&b>1.5){let _=Math.max(.4,h.th/2),w=-(v-M)/b*_,R=(x-y)/b*_;e.addPolygon(n,Float32Array.from([y-w,M-R,x-w,v-R,x+w,v+R,y+w,M+R]))}}}let c=new $t;if(r.empty||c.add(r.mesh(this.materials().barrier,!0)),o.empty||c.add(o.mesh(Ls().solid,!1)),!a.empty){let u=a.mesh(Ls().grille,!1);c.add(u)}return c.children.length?c:null}};var id=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],sd=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],rd=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],od=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],ad=new Ct;function tv(){let e=()=>{let g=document.createElement("canvas");return g.width=g.height=512,g},n=e(),i=e(),r=e(),o=e(),a=e(),l=n.getContext("2d"),c=r.getContext("2d"),u=i.getContext("2d"),h=o.getContext("2d"),f=a.getContext("2d");for(let g of[l,u,f])g.fillStyle="#ffffff",g.fillRect(0,0,512,512);for(let g of[c,h])g.fillStyle="#000",g.fillRect(0,0,512,512);for(let g of[l,u,f])for(let p=0;p<2500;p++)g.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,g.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8);let d=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"];for(let g=0;g<8;g++)for(let p=0;p<8;p++){let y=p*64,M=g*64,x=64*.34,v=64*.52,b=y+(64-x)/2,E=M+64*.22;l.fillStyle="#d8d2c4",l.fillRect(b-3,E-3,x+6,v+7),l.fillStyle="#2f3438",l.fillRect(b,E,x,v),l.fillStyle="#5c6a72",l.fillRect(b+2,E+2,x/2-3,v-4),l.fillRect(b+x/2+1,E+2,x/2-3,v-4);let S=Math.random(),T=d[(p*7+g*3)%d.length];l.fillStyle=T,S<.6?(l.fillRect(b-x/2-2,E,x/2,v),l.fillRect(b+x+2,E,x/2,v)):S<.85&&l.fillRect(b,E,x,v),l.fillStyle="rgba(0,0,0,0.25)";for(let _=0;_<6;_++)l.fillRect(b-x/2-2,E+_*v/6,x*2+4,1);if(S<.85||Math.random()<.3){let _=Math.random()<.35;c.fillStyle=_?Math.random()<.5?"#ffd890":"#fff0c0":"#000",S>=.6&&S<.85&&(c.fillStyle="#000"),c.fillRect(b,E,x,v)}u.fillStyle="rgba(0,0,0,0.08)",u.fillRect(y,M,2,64),g%2===0&&(u.fillStyle="#4b5a63",u.fillRect(y+3,M+64*.3,58,64*.3),h.fillStyle=Math.random()<.25?"#e8f0ff":"#000",h.fillRect(y+3,M+64*.3,58,64*.3))}let m=(g,p=!0)=>{let y=new Pe(g);return y.wrapS=y.wrapT=di,y.anisotropy=8,p&&(y.colorSpace=ye),y};return{res:m(n),ind:m(i),plain:m(a),emiR:m(r),emiI:m(o)}}var ba=class{constructor(t){this.terrain=t;let e=tv();this.mats={res:new Ft({map:e.res,vertexColors:!0,emissiveMap:e.emiR,emissive:16777215,emissiveIntensity:0}),ind:new Ft({map:e.ind,vertexColors:!0,emissiveMap:e.emiI,emissive:16777215,emissiveIntensity:0}),plain:new Ft({map:e.plain,vertexColors:!0}),roof:new Ft({vertexColors:!0,side:re})}}setNight(t){this.mats.res.emissiveIntensity=t*.55,this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let i=this.buildGen(t,e,n),r;for(;!(r=i.next()).done;);return r.value}*buildGen(t,e,n){let i=this.terrain,r={res:new oe,ind:new oe,plain:new oe},o=new oe(!0,!1),a=t.s,l=[],c=0;for(let h of t.b){++c%12===0&&(yield);let f=h[0],d=h[1]/10,m=h[2]/10,g=h[3],p=h[4],y=a[h[5]],M=a[h[6]],x=a[h[7]],v=[],b=0,E=0;for(let D=8;D<h.length;D+=2)b+=h[D],E+=h[D+1],v.push(b/10,E/10);let S=v.length/2;if(S<3)continue;let T=0,_=0,w=0,R=1e9,L=-1e9;for(let D=0;D<S;D++){let k=(D+1)%S;T+=v[D*2]*v[k*2+1]-v[k*2]*v[D*2+1],_+=v[D*2],w+=v[D*2+1];let Y=i.height(v[D*2],v[D*2+1]);R=Math.min(R,Y),L=Math.max(L,Y)}T=Math.abs(T/2),_/=S,w/=S;let N=Re(Math.floor(v[0]*10)*7919+Math.floor(v[1]*10)),U=Re(Math.floor(v[1]*10)*104729+17),B=f;if(B===0&&(B=T<45?6:T>1800?3:2),!(d>0))if(g>0)d=g*3.1+.6;else switch(B){case 1:d=6.2+N*2.5;break;case 2:d=T>500?11+N*7:7+N*4;break;case 3:d=7.5+N*4;break;case 4:d=7+N*5;break;case 5:d=13+Math.min(10,T/80);break;case 6:d=2.8+N*.8;break;case 7:d=10+N*4;break;case 8:d=28+N*12;break;case 9:d=6+N*2;break;default:d=4+N*3}let F=R-.6+m,W=(R+L)/2+d,O=B===3||B===4?"ind":B===5||B===6||B===8||B===9||B===10?"plain":"res",X;if(M&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(M))try{ad.set(M),X=ad.clone()}catch{X=null}X||(X=new Ct(O==="ind"?sd[Math.floor(U*sd.length)]:B===8||B===5?U<.5?"#d8c9a8":"#c9a77f":id[Math.floor(U*id.length)])),X.convertSRGBToLinear();let Z=r[O],V=0;for(let D=0;D<S;D++){let k=(D+1)%S,Y=v[D*2],tt=v[D*2+1],$=v[k*2],at=v[k*2+1],et=Math.hypot($-Y,at-tt),st=V/24,G=(V+et)/24,j=Math.max(1,Math.round(et/3)),P=st+j/8,ft=0,ct=(W-F)/24,mt=Z.v(Y,F,tt,X.r,X.g,X.b,st,ct),rt=Z.v(Y,W,tt,X.r,X.g,X.b,st,ft),Et=Z.v($,W,at,X.r,X.g,X.b,P,ft),ot=Z.v($,F,at,X.r,X.g,X.b,P,ct);Z.quad(mt,rt,Et,ot),V+=et}let Q,K=(B===1||B===2&&(T<1400||g<=4)||B===5||B===9||B===7&&T<900||B===6&&T>18)&&p!==1;if(x&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(x))try{Q=new Ct(x)}catch{Q=null}Q||(Q=new Ct(K?rd[Math.floor(N*rd.length)]:od[Math.floor(N*od.length)])),Q.convertSRGBToLinear(),this.roof(o,v,S,W,K,Q,T,B,X,U),e&&e.addPolygon(n,Float32Array.from(v),W+(K?3:1)),y&&(B===5||B===8||f===7)&&l.push({name:y,x:_,z:w,y:W+4})}let u=new $t;for(let h of["res","ind","plain"])r[h].empty||(yield,u.add(r[h].mesh(this.mats[h],!0)));return yield,o.empty||u.add(o.mesh(this.mats.roof,!0)),{group:u,labels:l}}offsetRing(t,e,n){let i=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let m=-c,g=l,p=-h,y=u,M=Math.max(.35,1+m*p+g*y);i[r*2]=t[r*2]+n*(m+p)/M,i[r*2+1]=t[r*2+1]+n*(g+y)/M}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return i}roof(t,e,n,i,r,o,a,l,c,u){let h=(x,v,b,E=o)=>{let S=v[0]-x[0],T=v[2]-x[2],_=b[0]-x[0],w=b[2]-x[2],R=T*_-S*w,L=t.v(x[0],x[1],x[2],E.r,E.g,E.b),N=t.v(v[0],v[1],v[2],E.r,E.g,E.b),U=t.v(b[0],b[1],b[2],E.r,E.g,E.b);R>=0?t.tri(L,N,U):t.tri(L,U,N)},f=(x,v,b,E,S)=>{h(x,v,b,S),h(x,b,E,S)},d=o.clone().multiplyScalar(.84),m=o.clone().multiplyScalar(1.06),g=.45,p=(x,v,b)=>{if(u>.55)return;let E=.3,S=1.1,T=c.clone().multiplyScalar(.9),_=[[x-E,v-E],[x+E,v-E],[x+E,v+E],[x-E,v+E]];for(let w=0;w<4;w++){let[R,L]=_[w],[N,U]=_[(w+1)%4];f([R,b-.6,L],[N,b-.6,U],[N,b+S,U],[R,b+S,L],T)}f([_[0][0],b+S,_[0][1]],[_[1][0],b+S,_[1][1]],[_[2][0],b+S,_[2][1]],[_[3][0],b+S,_[3][1]],d)};if(r&&n===4&&a<2500){let x=[0,1,2,3].map(Z=>[e[Z*2],e[Z*2+1]]),v=Math.hypot(x[1][0]-x[0][0],x[1][1]-x[0][1]),b=Math.hypot(x[2][0]-x[1][0],x[2][1]-x[1][1]),E=b>v?[x[1],x[2],x[3],x[0]]:x,S=Math.max(v,b),T=Math.min(v,b),_=(E[0][0]+E[1][0]+E[2][0]+E[3][0])/4,w=(E[0][1]+E[1][1]+E[2][1]+E[3][1])/4,R=(E[1][0]-E[0][0]+(E[2][0]-E[3][0]))/2/S,L=(E[1][1]-E[0][1]+(E[2][1]-E[3][1]))/2/S,N=Math.min(T*.27,5),U=this.offsetRing(E.flat(),4,-g),B=[0,1,2,3].map(Z=>[U[Z*2],i-g*.5,U[Z*2+1]]),F=u>.4,W=F?S/2+g:Math.max(0,S/2-T/2),O=[_-R*W,i+N,w-L*W],X=[_+R*W,i+N,w+L*W];if(f(B[0],B[1],X,O,m),f(B[2],B[3],O,X,o),F){let Z=[0,1,2,3].map(V=>[E[V][0],i,E[V][1]]);h(Z[1],Z[2],[_+R*S/2,i+N,w+L*S/2],c),h(Z[3],Z[0],[_-R*S/2,i+N,w-L*S/2],c)}else h(B[1],B[2],X,d),h(B[3],B[0],O,d);p(_+R*S*.2,w+L*S*.2,i+N);return}if(r&&a<6e3&&n<=60){let x=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),v=this.offsetRing(e,n,x);if(v||(x*=.5,v=this.offsetRing(e,n,x)),v){let b=this.offsetRing(e,n,-g),E=i+x*.5;for(let _=0;_<n;_++){let w=(_+1)%n;f([b[_*2],i-g*.4,b[_*2+1]],[b[w*2],i-g*.4,b[w*2+1]],[v[w*2],E,v[w*2+1]],[v[_*2],E,v[_*2+1]],_%2?o:d)}let S=[];for(let _=0;_<n;_++)S.push(new Mt(v[_*2],v[_*2+1]));let T=[];try{T=Nn.triangulateShape(S,[])}catch{T=[]}for(let[_,w,R]of T)h([S[_].x,E,S[_].y],[S[w].x,E,S[w].y],[S[R].x,E,S[R].y],m);(l===1||l===2)&&p(v[0]*.5+v[2]*.5,v[1]*.5+v[3]*.5,E);return}}let y=[];for(let x=0;x<n;x++)y.push(new Mt(e[x*2],e[x*2+1]));let M;try{M=Nn.triangulateShape(y,[])}catch{return}for(let[x,v,b]of M)h([y[x].x,i-.25,y[x].y],[y[v].x,i-.25,y[v].y],[y[b].x,i-.25,y[b].y])}};var ev={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},wa=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new br(1,1),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r),l=i.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));i.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new Ss(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new Qt(.12,.18,1,5),this.crownMat=new Ft({color:16777215}),this.trunkMat=new Ft({color:5981746})}build(t,e,n,i,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(F,W,O,X=!1,Z=!1)=>f.push([F,W,O,X,Z]);if(t){for(let F=0;F<t.tr.length;F+=2)d(t.tr[F]/10,t.tr[F+1]/10,.9+Re(F)*.5);for(let F of t.rows){let W=0,O=0,X=[];for(let Z=0;Z<F.length;Z+=2)W+=F[Z],O+=F[Z+1],X.push([W/10,O/10]);for(let Z=0;Z<X.length-1;Z++){let V=Math.hypot(X[Z+1][0]-X[Z][0],X[Z+1][1]-X[Z][1]);for(let Q=0;Q<V;Q+=7)d(X[Z][0]+(X[Z+1][0]-X[Z][0])*Q/V,X[Z][1]+(X[Z+1][1]-X[Z][1])*Q/V,.8+Re(Z*31+Q)*.4,!1,Re(F.length*7+F[0])<.45)}}}let m=11,g=e*7919+n*104729|0;for(let F=h+m/2;F<h+c;F+=m)for(let W=u+m/2;W<u+c;W+=m){g++;let O=W+(Re(g)-.5)*m,X=F+(Re(g*3+1)-.5)*m,Z=a.landClass(O,X),V=(ev[Z]||0)*o;Re(g*7+5)>V||d(O,X,.75+Re(g*11)*.6,(Z==="forest"||Z==="wood")&&Re(g*13)<.12)}let p=f.filter(([F,W])=>{let O=l.nearest(F,W,9);return!O||O.d>l.ways[O.wi].width/2+1.5});if(!p.length)return null;let y=p.length,M=p.filter(F=>F[3]).length,x=new Se(this.crownGeo,this.crownMat,y-M),v=M?new Se(this.coneGeo,this.crownMat,M):null,b=new Se(this.trunkGeo,this.trunkMat,y),E=new Kt,S=new Ce,T=new H,_=new H,w=new Ct,R=new H(0,1,0),L=0,N=0,U=0;for(let[F,W,O,X,Z]of p){let V=a.height(F,W),Q=(X?10:Z?13:6.5)*O*(.8+Re(L*5+1)*.5),K=(X?2.1:Z?1.5:2.6+Re(L*9)*1.4)*O;S.setFromAxisAngle(R,Re(L*17)*6.28),_.set(F,V+Q*.3,W),T.set(1,Q*.6,1),E.compose(_,S,T),b.setMatrixAt(L,E);let D=.75+Re(L*23)*.4;if(X)_.set(F,V+Q*.55,W),T.set(K,Q*.85,K),E.compose(_,S,T),v.setMatrixAt(U,E),w.setRGB(.1*D,.26*D,.12*D),v.setColorAt(U++,w);else{_.set(F,V+Q*.62,W),T.set(K,Z?Q*.42:K*1.05,K),E.compose(_,S,T),x.setMatrixAt(N,E);let k=Re(L*41)<.06;w.setRGB(k?.42*D:.17*D,k?.3*D:(.29+Re(L*31)*.07)*D,.09*D),x.setColorAt(N++,w)}i&&i.addCircle(r,F,W,.35*O,V+Q),L++}x.castShadow=!0,b.castShadow=!1,x.computeBoundingSphere(),b.computeBoundingSphere();let B=new $t;return B.add(x,b),v&&(v.castShadow=!0,v.computeBoundingSphere(),B.add(v)),B}};var Cr=44;function Pr(s,t){let e=(t%Cr+Cr)%Cr,n=s===0?e:(e+Cr/2)%Cr;return n<17?"G":n<20.5?"Y":"R"}function Oe(s,t,e,n,i,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,m]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let g=f*i/2,p=m*o/2;h.push([t+g*c+p*u,e+d*r/2,n-g*u+p*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(m=>s.v(h[m][0],h[m][1],h[m][2],l[0],l[1],l[2],0,0));s.quad(d[0],d[1],d[2],d[3])}}function Fn(s,t,e,n,i,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=s.v(t-u*i/2,e-r/2,n-h*i/2,1,1,1,a[0],a[1]),d=s.v(t+u*i/2,e-r/2,n+h*i/2,1,1,1,a[2],a[1]),m=s.v(t+u*i/2,e+r/2,n+h*i/2,1,1,1,a[2],a[3]),g=s.v(t-u*i/2,e+r/2,n-h*i/2,1,1,1,a[0],a[3]);s.quad(f,d,m,g)}var Ph=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back"];function Ir(s,t=!1){let e=Ph.indexOf(s),n=e%8,i=Math.floor(e/8)+(t?4:0);return[n/8,1-(i+1)/8,(n+1)/8,1-i/8]}function nv(s,t){let i=(h,f)=>{s.beginPath(),s.arc(64,64,h,0,7),s.fillStyle=f,s.fill()},r=(h,f)=>{s.beginPath(),h.forEach(([d,m],g)=>g?s.lineTo(d,m):s.moveTo(d,m)),s.closePath(),s.fillStyle=f,s.fill()},o=(h,f,d,m,g,p)=>{s.beginPath(),s.roundRect(h,f,d,m,g),s.fillStyle=p,s.fill()},a=(h,f,d,m=67)=>{s.fillStyle=d,s.font=`bold ${f}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(h,64,m)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(t.startsWith("s")){i(62,l),i(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,m)=>{let g=(m+.5)/8*Math.PI*2;return[64+Math.cos(g)*f,64+Math.sin(g)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{i(62,"#fff"),i(58,c),s.strokeStyle="#fff",s.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;s.beginPath(),s.arc(64,64,30,f,d,!1),s.stroke();let m=64+Math.cos(f)*30,g=64+Math.sin(f)*30;s.save(),s.translate(m,g),s.rotate(f-Math.PI/2),s.beginPath(),s.moveTo(0,-17),s.lineTo(13,6),s.lineTo(-13,6),s.closePath(),s.fillStyle="#fff",s.fill(),s.restore()}break}case"noentry":i(62,"#fff"),i(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),s.fillStyle="#111",s.beginPath(),s.arc(66,52,7,0,7),s.fill(),s.strokeStyle="#111",s.lineWidth=6,s.lineCap="round",s.beginPath(),s.moveTo(64,62),s.lineTo(62,82),s.lineTo(50,100),s.moveTo(62,82),s.lineTo(76,100),s.moveTo(52,74),s.lineTo(64,66),s.lineTo(78,76),s.stroke(),s.lineCap="butt";break}case"bump":u(),s.fillStyle="#111",s.beginPath(),s.moveTo(36,96),s.quadraticCurveTo(64,56,92,96),s.closePath(),s.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"level":{s.lineCap="butt";for(let h of[1,-1])s.save(),s.translate(64,64),s.rotate(h*.55),s.fillStyle=l,s.fillRect(-62,-13,124,26),s.fillStyle="#fff",s.fillRect(-56,-8,112,16),s.fillStyle=l,s.fillRect(-62,-13,16,26),s.fillRect(46,-13,16,26),s.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),s.strokeStyle="#111",s.lineWidth=5,s.beginPath(),s.moveTo(74,60),s.lineTo(86,60),s.lineTo(86,86),s.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":s.fillStyle="#7d8185",s.fillRect(0,0,128,128);break;default:break}}function iv(){let s=document.createElement("canvas");s.width=s.height=1024;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");Ph.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",nv(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let i=new Pe(s);return i.colorSpace=ye,i.anisotropy=8,i}var Ih=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,i){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),i(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Pe(this.cv);return t.colorSpace=ye,t.anisotropy=8,new Ft({map:t,vertexColors:!0})}};function Bi(s,t,e,n,i="bold"){for(s.font=`${i} ${n}px Arial`;s.measureText(t).width>e&&n>9;)n-=1,s.font=`${i} ${n}px Arial`;return n}var Ea=class{constructor(t,e,n,i){this.roads=t,this.terrain=e,this.comuneAt=n;let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Ft({map:iv(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Ft({vertexColors:!0,side:re}),this.lights=[0,1].map(()=>({R:new Ue({color:3342336}),Y:new Ue({color:3351040}),G:new Ue({color:8704})})),this.greenMat=new Ue({color:2162528}),this.lampMat=new Ue({color:5592400}),this.lampPoleMat=new Ft({color:5593178}),this.lampPoleGeo=new Qt(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new Ut(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Ue({map:new Pe(o),transparent:!0,blending:fi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new en(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of i?i.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let i=Pr(n,t),r=this.lights[n];r.R.color.setHex(i==="R"?16722458:2754566),r.Y.color.setHex(i==="Y"?16756736:2760196),r.G.color.setHex(i==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let i=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,i=u.n)}return i}approaches(t){let e=this.roads,n=[];for(let i=e.adjStart[t];i<e.adjStart[t+1];i++){let r=e.ways[e.adjWay[i]],o=e.adjPos[i];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[i],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[i],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,i=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==i&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),i=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,i=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;i=n.ways[o].limit}}return i}traceDestination(t,e,n,i){let r=this.roads,o=this.comuneOfNode(i),a=this.placeNear(r.nx[i],r.nz[i],600),l=0,c=i;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let g=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),p=null,y=1.15,M=(b,E,S,T)=>{let _=r.ways[b],w=_.nodes[E+S];if(w===void 0)return;let R=Math.atan2(r.nx[w]-r.nx[T],r.nz[w]-r.nz[T])-g;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<y&&(y=Math.abs(R),p=[b,E,S])},x=(b,E)=>{for(let S=r.adjStart[b];S<r.adjStart[b+1];S++){let T=r.adjWay[S],_=r.ways[T],w=r.adjPos[S];if(!(!_.drivable||_.cls>Vt.UNCLASSIFIED)&&!(T===t&&w===e)){if(_.flags&zt.ROUNDABOUT){E||v(T,w);continue}w<_.nodes.length-1&&M(T,w,1,E?d:b),w>0&&!_.oneway&&M(T,w,-1,E?d:b)}}},v=(b,E)=>{let S=b,T=E;for(let _=0;_<120;_++){let w=r.ways[S];if(T>=w.nodes.length-1){let L=w.nodes[w.nodes.length-1],N=!1;if(w.nodes[0]===L&&w.nodes.length>2)T=0,N=!0;else for(let U=r.adjStart[L];U<r.adjStart[L+1];U++){let B=r.adjWay[U];if(B!==S&&r.ways[B].flags&zt.ROUNDABOUT&&r.adjPos[U]===0){S=B,T=0,N=!0;break}}if(!N)return}T++;let R=(w===r.ways[S],r.ways[S].nodes[T]);if(R===d)return;r.degree[R]>=3&&x(R,!0)}};if(x(d,!1),!p)return null;c=d,[t,e,n]=p;continue}let m=h.nodes[f];if(l+=Math.hypot(r.nx[m]-r.nx[d],r.nz[m]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let g=this.comuneOfNode(m);if(g&&o&&g!==o)return{name:g,dist:l};let p=this.placeNear(r.nx[m],r.nz[m]);if(p&&p!==a&&p!==o&&l>500)return{name:p,dist:l}}}return null}build(t,e){let n=this.roads,i=this.terrain,r=n.tileSegs.get(t)||[],o=new oe(!0,!1),a=new oe(!0,!0),l=new oe(!0,!0),c=new oe(!0,!1),u=new oe(!0,!0),h=[0,1].map(()=>({R:new oe(!1,!1),Y:new oe(!1,!1),G:new oe(!1,!1)})),f=new oe(!1,!1),d=new Ih,m=[],g=[],p=[],y=[.42,.43,.44],M=(V,Q=.7)=>({uv:Ir(V),back:Ir(V,!0),w:Q,h:Q}),x=(V,Q,K,D,k,Y=2)=>{if(k=k.filter(st=>st&&st.uv),!k.length)return;let tt=Math.atan2(-K,-D),$=i.height(V,Q),at=k.reduce((st,G)=>st+G.h+.06,0);Oe(o,V,$+(Y+at)/2,Q,.07,Y+at,.07,tt,y);let et=$+Y+at;for(let st of k)et-=st.h/2+.03,Fn(st.text?l:a,V-K*.05,et,Q-D*.05,st.w,st.h,tt,st.uv),st.text&&st.double?Fn(l,V+K*.05,et,Q+D*.05,st.w,st.h,tt+Math.PI,st.uv):Fn(a,V+K*.05,et,Q+D*.05,st.w,st.h,tt+Math.PI,st.back||Ir("back")),et-=st.h/2+.03},v=V=>{let Q=d.add("st"+V,190,42,(K,D,k)=>{K.fillStyle="#f7f7f2",K.fillRect(0,0,D,k),K.strokeStyle="#1b2f6b",K.lineWidth=3,K.strokeRect(2.5,2.5,D-5,k-5),K.fillStyle="#16255a",K.textAlign="center",K.textBaseline="middle",Bi(K,V,D-16,22),K.fillText(V,D/2,k/2+1)});return Q&&{uv:Q,w:1.25,h:.28,text:!0,double:!0}},b=(V,Q)=>{let K=d.add("tw"+(Q?"E":"S")+V,300,116,(D,k,Y)=>{D.fillStyle="#fff",D.fillRect(0,0,k,Y),D.strokeStyle="#111",D.lineWidth=6,D.strokeRect(7,7,k-14,Y-14),D.fillStyle="#111",D.textAlign="center",D.textBaseline="middle",Bi(D,V,k-44,50),D.fillText(V,k/2,Y/2+2),Q&&(D.strokeStyle="#c8101a",D.lineWidth=12,D.beginPath(),D.moveTo(16,Y-16),D.lineTo(k-16,16),D.stroke())});return K&&{uv:K,w:2.1,h:.82,text:!0}},E=(V,Q,K)=>{let D=Q?`${V}  ${Q}`:V,k=d.add("dr"+(K?"B":"W")+D,300,64,(Y,tt,$)=>{Y.fillStyle=K?"#0a4fa6":"#fff",Y.fillRect(0,0,tt,$),Y.strokeStyle=K?"#fff":"#111",Y.lineWidth=3,Y.strokeRect(3.5,3.5,tt-7,$-7),Y.fillStyle=K?"#fff":"#111",Y.beginPath(),Y.moveTo(34,12),Y.lineTo(54,34),Y.lineTo(41,34),Y.lineTo(41,54),Y.lineTo(27,54),Y.lineTo(27,34),Y.lineTo(14,34),Y.closePath(),Y.fill(),Y.textAlign="left",Y.textBaseline="middle",Bi(Y,D,tt-76,30),Y.fillText(D,66,$/2+2)});return k&&{uv:k,w:1.9,h:.42,text:!0}},S=(V,Q)=>{let K=26+V.length*46,D=d.add("bd"+Q+V.join("|"),400,K,(k,Y,tt)=>{let $={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[Q],at=Q==="white"?"#111":"#fff";k.fillStyle=$,k.fillRect(0,0,Y,tt),k.strokeStyle=at,k.lineWidth=4,k.strokeRect(5,5,Y-10,tt-10),k.fillStyle=at,k.textBaseline="middle",V.forEach((et,st)=>{let G=36+st*46;k.textAlign="left",Bi(k,et,Y-90,34),k.fillText(et,22,G)}),k.beginPath(),k.moveTo(Y-28,18),k.lineTo(Y-28,46),k.lineTo(Y-56,18),k.closePath(),k.fill(),k.lineWidth=8,k.strokeStyle=at,k.beginPath(),k.moveTo(Y-62,52),k.lineTo(Y-36,26),k.stroke()});return D&&{uv:D,w:3.2,h:3.2*K/400,text:!0}},T=V=>{let Q=d.add("rf"+V,130,56,(K,D,k)=>{let Y=/^A\d/.test(V);K.fillStyle="#fff",K.fillRect(0,0,D,k),K.fillStyle=Y?"#0b7a3b":"#0a4fa6",K.fillRect(4,4,D-8,k-8),K.fillStyle="#fff",K.textAlign="center",K.textBaseline="middle",Bi(K,V,D-18,30),K.fillText(V,D/2,k/2+2)});return Q&&{uv:Q,w:.8,h:.34,text:!0}},_=V=>{let Q=d.add("bs"+V,190,36,(K,D,k)=>{K.fillStyle="#f2c417",K.fillRect(0,0,D,k),K.fillStyle="#111",K.textAlign="center",K.textBaseline="middle",Bi(K,V,D-12,20),K.fillText(V,D/2,k/2+1)});return Q&&{uv:Q,w:1,h:.2,text:!0,double:!0}},w=V=>{let Q=d.add("ft"+V,150,150,(K,D,k)=>{K.fillStyle="#f4f4f4",K.fillRect(0,0,D,k),K.fillStyle="#d6202a",K.fillRect(0,0,D,52),K.fillStyle="#fff",K.textAlign="center",K.textBaseline="middle",Bi(K,V||"CARBURANTI",D-14,26),K.fillText(V||"CARBURANTI",D/2,27),K.fillStyle="#111",K.font="bold 20px Arial",K.textAlign="left",K.fillText("Benzina",10,80),K.fillText("Gasolio",10,108),K.fillText("GPL",10,134),K.fillStyle="#0b7a3b",K.textAlign="right",K.fillText("1.7"+V.length%9,D-10,80),K.fillText("1.6"+V.length*3%9,D-10,108),K.fillText("0.7"+V.length*7%9,D-10,134)});return Q&&{uv:Q,w:1.5,h:1.5,text:!0,double:!0}},R=V=>Ph.includes("s"+V)?M("s"+V,.66):null,L=(V,Q,K,D,k)=>n.heightOn(V,Q,K,D,k),N=(V,Q,K,D,k,Y)=>{let tt=-D,$=K,at=V.w.width/2,et=n.nx[Q]-K*(k+.8),st=n.nz[Q]-D*(k+.8),G=V.w.oneway?-at+.3:(V.fwd?V.w.cOff:-V.w.cOff)+.1,j=at-.3,P=L(V.wi,V.seg,V.t,et,st)+.03;if(Y)for(let ft=G;ft+.5<=j;ft+=.75){let ct=[[ft,-.3],[ft+.5,-.3],[ft+.25,.35]].map(([mt,rt])=>c.v(et+tt*mt-K*rt,P,st+$*mt-D*rt));c.tri(ct[0],ct[1],ct[2]),c.tri(ct[0],ct[2],ct[1])}else{let ft=c.v(et+tt*G-K*.25,P,st+$*G-D*.25),ct=c.v(et+tt*j-K*.25,P,st+$*j-D*.25),mt=c.v(et+tt*j+K*.25,P,st+$*j+D*.25),rt=c.v(et+tt*G+K*.25,P,st+$*G+D*.25);c.quad(ft,ct,mt,rt)}return[et+tt*(G+j)/2,st+$*(G+j)/2,j-G]},U=new Set,B=new Set,F=new Set,W=0;for(let V of r){let Q=Math.floor(V/16384),K=V%16384,D=n.ways[Q];if(!D.drivable)continue;let k=D.nodes[K],Y=D.nodes[K+1],tt=n.nx[k],$=n.nz[k],at=n.nx[Y],et=n.nz[Y],st=Math.hypot(at-tt,et-$);if(st<.3)continue;let G=(at-tt)/st,j=(et-$)/st,P=-j,ft=G,ct=D.width/2,mt=D.nodes.length-2,rt=ct+.9;for(let ot of[k,Y]){if(U.has(ot))continue;U.add(ot);let I=n.ntag[ot];if(n.degMain[ot]>=3&&W<240){let ut=new Set;for(let lt=n.adjStart[ot];lt<n.adjStart[ot+1];lt++){let gt=n.ways[n.adjWay[lt]],yt=n.adjPos[lt];if(!gt.name||!gt.drivable||gt.cls>Vt.LIVING||ut.has(gt.name)||B.has(gt.name+"@"+ot))continue;ut.add(gt.name),B.add(gt.name+"@"+ot);let wt=yt<gt.nodes.length-1?gt.nodes[yt+1]:gt.nodes[yt-1],Bt=n.nx[wt]-n.nx[ot],vt=n.nz[wt]-n.nz[ot],It=Math.hypot(Bt,vt)||1;Bt/=It,vt/=It;let Ot=n.w1[ot]/2+2.4,Xt=gt.width/2+.9,At=n.nx[ot]+Bt*Ot-vt*Xt,Yt=n.nz[ot]+vt*Ot+Bt*Xt,Zt=v(gt.name);Zt&&(x(At,Yt,-vt,Bt,[Zt],2.45),W++)}}if(!I)continue;let C=this.approaches(ot).filter(ut=>ut.w.cls<=Vt.SERVICE);if(!C.length)continue;let q=n.degMain[ot]>=3,ht=ut=>{let lt=n.nx[ot]-n.nx[ut.from],gt=n.nz[ot]-n.nz[ut.from],yt=Math.hypot(lt,gt)||1;return[lt/yt,gt/yt,yt]};if(I===Jt.SIGNALS||I===Jt.STOP||I===Jt.GIVE_WAY||I===Jt.CROSSING_SIGNALS){let ut=C,lt=n.ndir[ot];if(lt&&!q){let gt=C.filter(yt=>yt.fwd===(lt===1));gt.length&&(ut=gt)}else if(I!==Jt.SIGNALS&&I!==Jt.CROSSING_SIGNALS&&q){let gt=Math.min(...C.map(yt=>yt.w.cls));ut=C.filter(yt=>yt.w.cls>gt),ut.length||(ut=C.slice(0,1))}else if(!q&&I!==Jt.CROSSING_SIGNALS){let gt=C.filter(yt=>this.leadsToJunction(ot,yt.from));gt.length&&(ut=gt)}for(let gt of ut){let[yt,wt,Bt]=ht(gt),vt=-wt,It=yt,Ot=gt.w.width/2,Xt=q?Math.min(Bt*.6+2,n.w1[ot]/2+1.5):I===Jt.CROSSING_SIGNALS?2.5:0,At=n.nx[ot]-yt*Xt+vt*(Ot+.9),Yt=n.nz[ot]-wt*Xt+It*(Ot+.9),Zt=Math.atan2(-yt,-wt);if(I===Jt.SIGNALS||I===Jt.CROSSING_SIGNALS){let ae=i.height(At,Yt);Oe(o,At,ae+1.55,Yt,.09,3.1,.09,Zt,y),Oe(o,At,ae+3,Yt,.38,1.05,.3,Zt,[.1,.1,.1]);let J=-yt*.16,Rt=-wt*.16;if(I===Jt.SIGNALS){let xt=Math.abs(yt)>Math.abs(wt)?1:0,_t=h[xt];Oe(_t.R,At+J,ae+3.33,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),Oe(_t.Y,At+J,ae+3,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),Oe(_t.G,At+J,ae+2.67,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),g.push({node:ot,group:xt})}else Oe(f,At+J,ae+2.67,Yt+Rt,.22,.22,.04,Zt,[1,1,1]);N(gt,ot,yt,wt,Xt+(I===Jt.CROSSING_SIGNALS?.5:0),!1)}else if(I===Jt.STOP){x(At,Yt,yt,wt,[M("stop",.75)]);let[ae,J,Rt]=N(gt,ot,yt,wt,Xt,!1);gt.w.cls<=Vt.RESIDENTIAL&&Rt>2&&n.addDecal(u,gt.wi,gt.seg,gt.t,ae-yt*2.6,J-wt*2.6,yt,wt,Math.min(2.4,Rt-.4),3,"stop")}else x(At,Yt,yt,wt,[M("giveway",.8)]),N(gt,ot,yt,wt,Xt,!0)}}else if(I===Jt.CROSSING&&!q&&D.cls<=Vt.UNCLASSIFIED)for(let ut of C){let[lt,gt]=ht(ut);x(n.nx[ot]-lt*2.6-gt*(ut.w.width/2+.9),n.nz[ot]-gt*2.6+lt*(ut.w.width/2+.9),lt,gt,[M("ped",.6)])}else if(I===Jt.BUMP||I===Jt.TABLE)for(let ut of C){let[lt,gt]=ht(ut);x(n.nx[ot]-lt*7-gt*(ut.w.width/2+.9),n.nz[ot]-gt*7+lt*(ut.w.width/2+.9),lt,gt,[M("bump",.8),I===Jt.TABLE?null:R(30)])}else if(I===Jt.LEVEL_CROSSING)for(let ut of C){let[lt,gt]=ht(ut),yt=n.nx[ot]-lt*5-gt*(ut.w.width/2+.9),wt=n.nz[ot]-gt*5+lt*(ut.w.width/2+.9);x(yt,wt,lt,gt,[M("level",.95)],1.7);let Bt=i.height(yt,wt),vt=Math.atan2(-lt,-gt);Oe(o,yt-lt*.8,Bt+.55,wt-gt*.8,.3,1.1,.3,vt,[.75,.75,.75]);for(let It=0;It<6;It++)Oe(o,yt-lt*.8+gt*.25,Bt+1.4+It*.7,wt-gt*.8-lt*.25,.1,.7,.1,vt,It%2?[.85,.1,.1]:[.95,.95,.95])}}let Et=D.limitMapped&&D.cls<=Vt.RESIDENTIAL&&D.len>80&&!(D.flags&zt.ROUNDABOUT);if(K===0&&Et&&this.neighbourLimit(k,Q)!==D.limit){let ot=Math.min(14,D.len*.3),[I,C]=n.pointAt(D,ot);x(I+P*rt,C+ft*rt,G,j,[R(D.limit)],2.1)}if(K===mt&&!D.oneway&&Et&&this.neighbourLimit(Y,Q)!==D.limit){let ot=Math.min(14,D.len*.3),[I,C]=n.pointAt(D,D.len-ot);x(I-P*rt,C-ft*rt,-G,-j,[R(D.limit)],2.1)}if(D.oneway&&!(D.flags&(zt.ROUNDABOUT|zt.LINK))&&D.cls>=Vt.TERTIARY&&D.cls<=Vt.LIVING&&D.len>25){let ot=(I,C)=>{for(let q=n.adjStart[I];q<n.adjStart[I+1];q++){let ht=n.adjWay[q],ut=n.ways[ht];if(ht!==Q&&ut.oneway&&(ut.name===D.name||n.degMain[I]<3)&&n.adjPos[q]===(C?ut.nodes.length-1:0))return!0}return!1};if(K===0&&n.degMain[k]>=3&&!n.onRb[k]&&!ot(k,!0)){let[I,C]=n.pointAt(D,Math.min(6,D.len*.3));x(I+P*rt,C+ft*rt,G,j,[M("oneway",.6)])}if(K===mt&&n.degMain[Y]>=3&&!n.onRb[Y]&&!ot(Y,!1)){let I=Math.min(D.len*.3,n.w1[Y]/2+1.5);for(let C of[1,-1])x(at-G*I+P*rt*C,et-j*I+ft*rt*C,-G,-j,[M("noentry",.6)])}}if(K===0&&D.dest&&D.len>30){let ot=D.dest.split("|"),I=ot[ot.length-1].split(";").map(ht=>ht.trim()).filter(Boolean).slice(0,4);ot.length>1&&(I[0]=ot[0].split(";")[0]+"  "+I[0]);let C=D.cls===0?"green":D.cls<=3||D.limit>50?"blue":"white",q=S(I,C);if(q){let[ht,ut]=n.pointAt(D,Math.min(18,D.len*.4)),lt=ht+P*(rt+1.8),gt=ut+ft*(rt+1.8),yt=i.height(lt,gt),wt=Math.atan2(-G,-j);for(let Bt of[1,-1])Oe(o,lt+P*1.3*Bt,yt+1.6+q.h/2,gt+ft*1.3*Bt,.1,3.2+q.h,.1,wt,y);Fn(l,lt-G*.08,yt+3.2+q.h/2,gt-j*.08,q.w,q.h,wt,q.uv),Fn(a,lt+G*.08,yt+3.2+q.h/2,gt+j*.08,q.w,q.h,wt+Math.PI,Ir("back"))}}if(D.ref&&D.cls<=Vt.TERTIARY&&!(D.flags&(zt.LINK|zt.ROUNDABOUT))&&D.len>160){let ot=D.ref.split(";")[0].trim();if(K===0&&n.degMain[k]>=3&&!F.has(ot+k)){F.add(ot+k);let[I,C]=n.pointAt(D,38);x(I+P*rt,C+ft*rt,G,j,[T(ot)],1.9)}if(K===mt&&!D.oneway&&n.degMain[Y]>=3&&!F.has(ot+Y)){F.add(ot+Y);let[I,C]=n.pointAt(D,D.len-38);x(I-P*rt,C-ft*rt,-G,-j,[T(ot)],1.9)}}if(D.cls<=Vt.RESIDENTIAL&&D.cls>=Vt.TRUNK&&!(D.flags&(zt.LINK|zt.BRIDGE|zt.TUNNEL|zt.ROUNDABOUT))){let ot=this.comuneOfNode(k),I=this.comuneOfNode(Y);if(ot&&I&&ot!==I){let C=0,q=1;for(let lt=0;lt<10;lt++){let gt=(C+q)/2;this.comuneAt(tt+(at-tt)*gt,$+(et-$)*gt)===ot?C=gt:q=gt}let ht=tt+(at-tt)*C,ut=$+(et-$)*C;this.townSign(o,l,a,ht+P*(rt+.4),ut+ft*(rt+.4),G,j,b(I,!1),b(I,!0)),D.oneway||this.townSign(o,l,a,ht-P*(rt+.4),ut-ft*(rt+.4),-G,-j,b(ot,!1),b(ot,!0))}}if(D.cls>=Vt.PRIMARY&&D.cls<=Vt.LIVING&&!D.abs&&!(D.flags&zt.ROUNDABOUT)&&D.lit!==2){let ot=D.cum[K];for(let I=Math.ceil(ot/30)*30-ot;I<st;I+=30){let C=tt+G*I,q=$+j*I;if(D.lit!==1&&!i.isUrban(C,q))continue;let ht=Math.floor((ot+I)/30+.5)%2===0||D.oneway?1:-1,ut=C+P*ht*(ct+1.1),lt=q+ft*ht*(ct+1.1),gt=n.nearest(ut,lt,6);gt&&gt.d<n.ways[gt.wi].width/2+.4||m.push([ut,i.height(ut,lt),lt,Math.atan2(ft*ht,-P*ht)])}}}for(let V of n.roundaboutEntries(t)){let Q=n.ways[V.wi],K=n.nx[V.nd]-n.nx[V.from],D=n.nz[V.nd]-n.nz[V.from],k=Math.hypot(K,D)||1;K/=k,D/=k;let Y=n.w1[V.nd]/2+2.5,tt=!1,$=0,at=V.dir>0?Q.nodes.length-1:0;for(;$<30&&at-V.dir>=0&&at-V.dir<Q.nodes.length;){let G=Q.nodes[at],j=Q.nodes[at-V.dir];if($+=Math.hypot(n.nx[j]-n.nx[G],n.nz[j]-n.nz[G]),at-=V.dir,n.ntag[j]===Jt.GIVE_WAY||n.ntag[j]===Jt.STOP){tt=!0;break}}let et=n.nx[V.nd]-K*Y-D*(Q.width/2+.9),st=n.nz[V.nd]-D*Y+K*(Q.width/2+.9);x(et,st,K,D,[tt?null:M("giveway",.8),M("roundabout",.62)])}let O=new Set;for(let V of r){let Q=Math.floor(V/16384),K=V%16384,D=n.ways[Q];if(D.flags&zt.ROUNDABOUT||!D.drivable||D.cls>Vt.TERTIARY)continue;let k=D.nodes.length-2;for(let[Y,tt]of[[0,1],[D.nodes.length-1,-1]]){if((tt>0?K!==0:K!==k)||tt<0&&D.oneway)continue;let $=D.nodes[Y];if(!n.onRb[$]||O.has(Q*2+(tt>0?0:1)))continue;O.add(Q*2+(tt>0?0:1));let at=this.traceDestination(Q,Y,tt,$);if(!at)continue;let et=D.nodes[Y+tt],st=n.nx[et]-n.nx[$],G=n.nz[et]-n.nz[$],j=Math.hypot(st,G)||1;st/=j,G/=j;let P=D.limit>50||D.cls<=Vt.SECONDARY,ft=E(at.name,P?Math.max(1,Math.round(at.dist/1e3)):0,P),ct=n.w1[$]/2+3.5;x(n.nx[$]+st*ct-G*(D.width/2+1.2),n.nz[$]+G*ct+st*(D.width/2+1.2),st,G,[ft],2.3)}}for(let[V,Q,K,D]of e&&e.pt||[]){let k=Q/10,Y=K/10,tt=e.s[D]||"",$=n.nearest(k,Y,30,rt=>rt.drivable&&rt.cls<=Vt.SERVICE),at=0,et=1;if($){let rt=Math.hypot($.dx,$.dz)||1;at=$.dx/rt,et=$.dz/rt}let st=$&&Math.sign((k-$.px)*-et+(Y-$.pz)*at)||1,G=$?n.ways[$.wi].width/2:0,j=$?Math.max($.d,G+1):0,P=$?$.px-et*st*j:k,ft=$?$.pz+at*st*j:Y,ct=at*st,mt=et*st;if(V===1){x(P,ft,ct,mt,[M("bus",.5),tt?_(tt):null],2);let rt=i.height(P,ft),Et=Math.atan2(-ct,-mt),ot=-et*st,I=at*st,C=P+ct*2.2+ot*.9,q=ft+mt*2.2+I*.9;Oe(o,C,rt+2.45,q,1.5,.08,3,Et,[.25,.3,.34]),Oe(o,C+ot*.7,rt+1.25,q+I*.7,.05,2.4,3,Et,[.55,.68,.74]);for(let ht of[-1.45,1.45])Oe(o,C+ct*ht-ot*.6,rt+1.2,q+mt*ht-I*.6,.07,2.4,.07,Et,y)}else if(V===2){let rt=$?Math.atan2(at*st,et*st):0;m.push([k,i.height(k,Y),Y,rt,1])}else if(V===3&&$){let rt=[...this.places.values()].flat().find(q=>q.n===tt),Et=ct,ot=mt;if(rt){let q=Math.sign((rt.x-P)*at+(rt.z-ft)*et)||1;Et=at*q,ot=et*q}let I=$.px-ot*(G+1.3),C=$.pz+Et*(G+1.3);this.townSign(o,l,a,I,C,Et,ot,b(tt,!1),b(tt,!0))}else if(V===4&&$){x(P,ft,ct,mt,[M("camera",.9)],2),p.push([$.px+at*st*14,$.pz+et*st*14]);let rt=i.height(P,ft),Et=Math.atan2(-ct,-mt);Oe(o,P+ct*14,rt+1.4,ft+mt*14,.5,2.8,.5,Et,[.95,.5,.1]),Oe(o,P+ct*14-ct*.26,rt+2.3,ft+mt*14-mt*.26,.3,.3,.04,Et,[.05,.05,.05])}else if(V===5){let rt=w(tt);if(rt){let Et=i.height(P,ft),ot=Math.atan2(-ct,-mt);Oe(o,P,Et+2.6,ft,1.6,5.2,.3,ot,[.9,.9,.9]),Fn(l,P-ct*.16,Et+4.3,ft-mt*.16,rt.w,rt.h,ot,rt.uv),Fn(l,P+ct*.16,Et+4.3,ft+mt*.16,rt.w,rt.h,ot+Math.PI,rt.uv)}}}let X=new $t,Z=[];if(o.empty||X.add(o.mesh(this.poleMat,!0)),a.empty||X.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let V=d.material();Z.push(V),X.add(l.mesh(V))}c.empty||X.add(c.mesh(this.markMat)),u.empty||X.add(u.mesh(this.decalMat));for(let V=0;V<2;V++)for(let Q of["R","Y","G"])h[V][Q].empty||X.add(h[V][Q].mesh(this.lights[V][Q]));if(f.empty||X.add(f.mesh(this.greenMat)),m.length){let V=m.filter(st=>st[4]),Q=m.filter(st=>st[4]||!V.some(G=>Math.hypot(G[0]-st[0],G[2]-st[2])<22)),K=new Se(this.lampPoleGeo,this.lampPoleMat,Q.length),D=new Se(this.lampHeadGeo,this.lampMat,Q.length),k=new Se(this.poolGeo,this.poolMat,Q.length),Y=new Kt,tt=new Ce,$=new H(0,1,0),at=new H(1,1,1),et=new H;Q.forEach(([st,G,j,P],ft)=>{tt.setFromAxisAngle($,P),et.set(st,G,j),Y.compose(et,tt,at),K.setMatrixAt(ft,Y),D.setMatrixAt(ft,Y),k.setMatrixAt(ft,Y)}),K.computeBoundingSphere(),D.computeBoundingSphere(),k.computeBoundingSphere(),k.renderOrder=2,X.add(K,D,k)}return X.userData.dispose=()=>{for(let V of Z)V.map.dispose(),V.dispose()},{group:X,signals:g,lamps:m,cameras:p}}townSign(t,e,n,i,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(i,r),f=Math.atan2(-o,-a),d=-a,m=o,g=[.42,.43,.44];Oe(t,i-d*.75,h+1.35,r-m*.75,.08,2.7,.08,f,g),Oe(t,i+d*.75,h+1.35,r+m*.75,.08,2.7,.08,f,g),Fn(e,i-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?Fn(e,i+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):Fn(n,i+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,Ir("back"))}};var Sa=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,i,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(i/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,i=>{let r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e,n,i=!1){let r=1e9,o=1e9,a=-1e9,l=-1e9;for(let u=0;u<e.length;u+=2)r=Math.min(r,e[u]),a=Math.max(a,e[u]),o=Math.min(o,e[u+1]),l=Math.max(l,e[u+1]);if(!i&&a-r<1.5&&l-o<1.5)return null;let c={ring:e,tile:t,minx:r,minz:o,maxx:a,maxz:l,top:n};return this._add(t,c),c}addCircle(t,e,n,i,r){let o={x:e,z:n,r:i,tile:t,top:r,minx:e-i,minz:n-i,maxx:e+i,maxz:n+i};return this._add(t,o),o}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let i=this.grid.get(n);if(!i)return;let r=i.indexOf(t);r>=0&&i.splice(r,1),i.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let i of e)this._cells(i.minx,i.minz,i.maxx,i.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}topAt(t,e,n){let i=-1/0;return this._cells(t-n,e-n,t+n,e+n,r=>{let o=this.grid.get(r);if(o)for(let a of o){if(a.top===void 0||a.top<=i||t+n<a.minx||t-n>a.maxx||e+n<a.minz||e-n>a.maxz)continue;(a.ring?ld(t,e,n,a.ring):Math.hypot(t-a.x,e-a.z)<n+a.r)&&(i=a.top)}}),i}resolveCircle(t,e,n){let i=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=ld(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!i||c.depth>i.depth)&&(i=c)}}),i}};function ld(s,t,e,n){let i=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=i-1;f<i;d=f++){let m=n[f*2],g=n[f*2+1],p=n[d*2],y=n[d*2+1];g>t!=y>t&&s<(p-m)*(t-g)/(y-g)+m&&(r=!r);let M=m-p,x=g-y,v=M*M+x*x||1e-9,b=((s-p)*M+(t-y)*x)/v;b=b<0?0:b>1?1:b;let E=p+M*b,S=y+x*b,T=Math.hypot(s-E,t-S);T<o&&(o=T,a=E,l=S)}if(!r&&o>=e)return null;let c=s-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var Tn={darkMetal:new Ft({color:3620675}),greyMetal:new Ft({color:4344399}),midMetal:new Ft({color:5002330}),wood:new Ft({color:8016432}),woodDark:new Ft({color:6044964}),stone:new Ft({color:9407104}),soil:new Ft({color:4142122}),hedge:new Ft({color:4025145}),binBody:new Ft({color:3951169}),binLid:new Ft({color:3227449}),red:new Ft({color:11545120}),white:new Ft({color:15790318}),signBlue:new Ft({color:2183567}),roof:new Ft({color:3159099}),glass:new ce({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:re,depthWrite:!1})};function An(s){let t=s.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),i=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&i.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new te;return o.setAttribute("position",new he(n,3)),o.setAttribute("normal",new he(i,3)),o.computeVertexNormals(),o}function cd(s,t,e,{shadow:n=!0}={}){let i=new Se(s,t,e);i.castShadow=n,i.count=e;let r=new Kt,o=new Ce,a=new Ke,l=new H,c=new H(1,1,1);return{mesh:i,setAt:(h,f,d,m=0,g=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,g,d),r.compose(l,o,c),i.setMatrixAt(h,r),i.instanceMatrix.needsUpdate=!0},count:e}}function Ta(s,t,{shadow:e=!0}={}){let n=new $t,i=s.map(({geom:h,material:f})=>{let d=new Se(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new Kt,o=new Ce,a=new Ke,l=new H,c=new H(1,1,1);return{mesh:n,setAt:(h,f,d,m=0,g=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,g,d),r.compose(l,o,c);for(let p of i)p.setMatrixAt(h,r),p.instanceMatrix.needsUpdate=!0},count:t}}function hd(s){let t=new Qt(.075,.1,.82,8);t.translate(0,.41,0);let e=new dn(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new Qt(.11,.11,.06,8);n.translate(0,.1,0);let i=An([t,e,n]);return cd(i,Tn.darkMetal,s)}function ud(s){let t=new Qt(.05,.05,.55,6);t.translate(0,.28,0);let e=new Qt(.11,.14,.08,8);e.translate(0,.04,0);let n=new Qt(.19,.17,.5,9);n.translate(0,.82,0);let i=new zn(.19,.02,5,9).rotateX(Math.PI/2);i.translate(0,1.07,0);let r=An([t,e,n,i]),o=new Qt(.215,.2,.06,9);o.translate(0,1.12,0);let a=new dn(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=An([o,a]);return Ta([{geom:r,material:Tn.binBody},{geom:l,material:Tn.binLid}],s)}function fd(s){let i=[];for(let c=0;c<3;c++){let u=new Ut(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),i.push(u)}for(let c=0;c<3;c++){let u=new Ut(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),i.push(u)}let r=An(i),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new Ut(.05,.45,.05);h.translate(u,.45/2,.12);let f=new Ut(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new Ut(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new Ut(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=An(o);return Ta([{geom:r,material:Tn.wood},{geom:l,material:Tn.darkMetal}],s)}function dd(s){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new Ut(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new Ut(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new Ut(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return cd(An(t),Tn.darkMetal,s)}function pd(s){let t=new Qt(.09,.13,.95,8);t.translate(0,.475,0);let e=new Qt(.16,.2,.08,8);e.translate(0,.04,0);let n=new Qt(.17,.13,.1,10);n.translate(0,.9,0);let i=new Qt(.13,.11,.07,10);i.translate(0,.94,0);let r=An([t,e,n]),o=new Qt(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new dn(.03,6,5);return a.translate(0,1.02,-.09),Ta([{geom:r,material:Tn.greyMetal},{geom:An([i]),material:Tn.midMetal},{geom:An([o,a]),material:Tn.darkMetal}],s)}function md(s){let t=new Qt(.23,.25,.07,6);t.translate(0,.035,0);let e=new Qt(.135,.165,.6,9);e.translate(0,.37,0);let n=new Qt(.115,.175,.1,9);n.translate(0,.72,0);let i=new dn(.125,9,5,0,Math.PI*2,0,Math.PI/2);i.translate(0,.77,0);let r=new Qt(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=An([t,e,n,i,r]),a=[];for(let u of[-1,1]){let h=new Qt(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new Qt(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new Qt(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),Ta([{geom:o,material:Tn.red},{geom:An(a),material:Tn.darkMetal}],s)}function xd(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new te,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=gd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);let m=gd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function gd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new he(o,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let g=u.getComponent(f,m);a.setComponent(f+h,m,g)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var sv={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},Aa=class{constructor(t,e,n,i,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=i,this.settings=r,this.collision=new Sa,this.gates=new va(i,n,this.collision),this.tiles=new Map,this.queue=[],this.detail=jf(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new ba(n),this.vegetation=new wa(n,i),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new Ea(i,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new $t,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let i=!1;for(let r of n.rings)Jf(t,e,r)&&(i=!i);if(i)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new $t;for(let i=t.zmin;i<t.zmax;i+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,i,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new wn({color:3106440,specular:11189196,shininess:110,transparent:!0,opacity:.94,side:re});this.waterU={uTime:{value:0},uSky:{value:new Ct(.75,.84,.92)}},t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.waterU),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.a = mix(0.9, 1.0, fres);`)},this.waterMat=t;let e=new $t;for(let n of this.meta.waters)for(let i of n.o){if(i.length<4)continue;let r=i.map(m=>new Mt(m[0],m[1])),o=(n.i||[]).filter(m=>m.length>=4).map(m=>m.map(g=>new Mt(g[0],g[1]))),a;try{a=Nn.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(m=>this.terrain.height(m.x,m.y)).sort((m,g)=>m-g),u=c[Math.floor(c.length*.3)]+.35,h=new Float32Array(l.length*3);l.forEach((m,g)=>{h[g*3]=m.x,h[g*3+1]=u,h[g*3+2]=m.y});let f=[];for(let[m,g,p]of a)f.push(m,p,g);let d=new te;d.setAttribute("position",new he(h,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((m,g)=>f[g-g%3+[0,2,1][g%3]])),d.computeVertexNormals()),e.add(new St(d,t))}this.root.add(e)}initFar(t){this.farIdx=new Map;let e=0;for(let[i,r,o]of t.t)this.farIdx.set(r*1e3+i,[e,o]),e+=o*7;this.farData=t.d,this.farMeshes=new Map,this.farQueue=[],this.farGroup=new $t,this.root.add(this.farGroup),this.farBMat=new Ft({vertexColors:!0});let n=(i,r=1)=>i.map(o=>new Ct(o).convertSRGBToLinear().multiplyScalar(r));this.farPal={wall:n(["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#e3c08e","#d9c7a6"]),ind:n(["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6"]),tile:n(["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52"],1.2),flat:n(["#8d8a84","#7d7b77","#9a968e","#6f6e6a"])}}updateFar(t,e,n){if(!this.farIdx||(this.farTick=(this.farTick||0)+1,this.farTick%20!==1&&n===this.farR))return;this.farR=n;let i=this.meta.proj,r=Math.floor((t-i.xmin)/1e3),o=Math.floor((e-i.zmin)/1e3),a=Math.ceil(n/1e3),l=[];for(let c=o-a;c<=o+a;c++)for(let u=r-a;u<=r+a;u++){let h=c*1e3+u;if(u<0||c<0||!this.farIdx.has(h)||this.farMeshes.has(h))continue;let f=Math.hypot(i.xmin+(u+.5)*1e3-t,i.zmin+(c+.5)*1e3-e);f<=n&&l.push([f,h])}l.sort((c,u)=>c[0]-u[0]),this.farQueue=l.map(c=>c[1]);for(let[c,u]of this.farMeshes){let h=c%1e3,f=Math.floor(c/1e3);Math.hypot(i.xmin+(h+.5)*1e3-t,i.zmin+(f+.5)*1e3-e)>n+1500&&(this.farGroup.remove(u),u.geometry.dispose(),this.farMeshes.delete(c))}}pumpFar(t=3){if(!this.farIdx)return;let e=performance.now();for(;this.farQueue.length&&performance.now()-e<t;){let n=this.farQueue.shift();if(this.farMeshes.has(n))continue;let i=this.buildFarTile(n);this.farMeshes.set(n,i),this.farGroup.add(i)}for(let[n,i]of this.farMeshes){let r=this.tiles.get(n);i.visible=!(r&&r.parts.buildings)}}buildFarTile(t){let[e,n]=this.farIdx.get(t),i=this.farData,r=this.terrain,o=this.meta.proj,a=this.farPal,l=o.xmin+t%1e3*1e3,c=o.zmin+Math.floor(t/1e3)*1e3,u=new Float32Array(n*60),h=new Float32Array(n*60),f=new Float32Array(n*60),d=new Uint32Array(n*30),m=0,g=0,p=(x,v,b,E,S,T,_,w)=>(u[m*3]=x,u[m*3+1]=v,u[m*3+2]=b,h[m*3]=E.r*S,h[m*3+1]=E.g*S,h[m*3+2]=E.b*S,f[m*3]=T,f[m*3+1]=_,f[m*3+2]=w,m++);for(let x=0;x<n;x++){let v=e+x*7,b=l+i[v]/10,E=c+i[v+1]/10,S=i[v+2]/10,T=i[v+3]/10,_=i[v+4]*Math.PI/180,w=i[v+5]/10,R=i[v+6],L=Math.sin(_),N=Math.cos(_),U=-N,B=L,F=r.height(b,E),W=F-2.5,O=F+w+(R&1?1:.2),X=(i[v]*73+i[v+1]*151+x*7)%97/97,Z=(i[v]*31+i[v+1]*17+x*13)%89/89,V=R&2?a.ind[Math.floor(X*a.ind.length)]:a.wall[Math.floor(X*a.wall.length)],Q=R&1?a.tile[Math.floor(Z*a.tile.length)]:a.flat[Math.floor(Z*a.flat.length)],K=[[b+L*S+U*T,E+N*S+B*T],[b-L*S+U*T,E-N*S+B*T],[b-L*S-U*T,E-N*S-B*T],[b+L*S-U*T,E+N*S-B*T]],D=[[U,B],[-L,-N],[-U,-B],[L,N]];for(let et=0;et<4;et++){let st=K[et],G=K[(et+1)%4],[j,P]=D[et],ft=p(st[0],W,st[1],V,1,j,0,P),ct=p(G[0],W,G[1],V,1,j,0,P),mt=p(G[0],O,G[1],V,1,j,0,P),rt=p(st[0],O,st[1],V,1,j,0,P);-(G[1]-st[1])*j+(G[0]-st[0])*P>0?(d[g++]=ft,d[g++]=ct,d[g++]=mt,d[g++]=ft,d[g++]=mt,d[g++]=rt):(d[g++]=ft,d[g++]=mt,d[g++]=ct,d[g++]=ft,d[g++]=rt,d[g++]=mt)}let k=p(K[0][0],O,K[0][1],Q,1,0,1,0),Y=p(K[1][0],O,K[1][1],Q,1,0,1,0),tt=p(K[2][0],O,K[2][1],Q,1,0,1,0),$=p(K[3][0],O,K[3][1],Q,1,0,1,0);(K[1][1]-K[0][1])*(K[2][0]-K[0][0])-(K[1][0]-K[0][0])*(K[2][1]-K[0][1])>0?(d[g++]=k,d[g++]=Y,d[g++]=tt,d[g++]=k,d[g++]=tt,d[g++]=$):(d[g++]=k,d[g++]=tt,d[g++]=Y,d[g++]=k,d[g++]=$,d[g++]=tt)}let y=new te;y.setAttribute("position",new he(u,3)),y.setAttribute("color",new he(h,3)),y.setAttribute("normal",new he(f,3)),y.setIndex(new he(d,1)),y.computeBoundingSphere();let M=new St(y,this.farBMat);return M.matrixAutoUpdate=!1,M}updateWater(t,e){this.waterU&&(this.waterU.uTime.value=t%1e4,this.waterU.uSky.value.copy(e))}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,i=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=i-o;c<=i+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let u=n.xmin+(c+.5)*1e3,h=n.zmin+(l+.5)*1e3,f=Math.hypot(u-t,h-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let g={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(g.key,g)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700;let m=this.farIdx?(this.settings.detailKm||1.5)*1e3:1e9;if(f<m)d.bldPending&&(d.bldPending=!1,delete d.parts.buildings);else if(f>m+400&&d.parts.buildings&&!d.gen){let g=d.parts.buildings;this.root.remove(g),g.traverse(p=>{p.geometry&&p.geometry.dispose()}),d.parts.buildings=null,d.bldPending=!0}d.bldFar=f>=m}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isSprite&&i.material.map&&(i.material.map.dispose(),i.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((i,r)=>i.d-r.d);for(let i of n){if(performance.now()-e>t)return!1;if(i.state==="new"){i.state="loading",this.tileSet.has(i.key)?Sr("t_"+i.i+"_"+i.j,`data/tiles/t_${i.i}_${i.j}.js`).then(c=>{i.data=c,i.state="ready"}).catch(()=>{i.data=null,i.state="ready"}):(i.data=null,i.state="ready");continue}if(i.state!=="ready"||i.dead)continue;let r=this.meta.proj,o=r.xmin+i.i*1e3,a=r.zmin+i.j*1e3,l=(c,u)=>{i.parts[c]=u,u&&this.root.add(u)};if(!("terrain"in i.parts)){l("terrain",this.terrain.buildChunk(o,a,1e3,Math.max(5,this.terrain.step),this.terrainMat));continue}if(!("roads"in i.parts)){i.gen||(i.gen=this.roads.buildTileGen(i.key));let c;do c=i.gen.next();while(!c.done&&performance.now()-e<t);if(!c.done)return!1;i.gen=null,l("roads",c.value);continue}if(!("signs"in i.parts)){let c=this.signage.build(i.key,i.data);for(let u of c.signals)this.signals.push({...u,tile:i.key});for(let u of c.cameras||[])this.cameras.push({x:u[0],z:u[1],tile:i.key});l("signs",c.group);continue}if(!("buildings"in i.parts)){if(i.data&&i.bldFar&&this.farIdx&&this.farIdx.has(i.key)){i.parts.buildings=null,i.bldPending=!0;continue}if(i.data){i.gen||(i.gen=this.buildings.buildGen(i.data,i.bldCol?null:this.collision,i.key),i.bldCol=!0);let c;do c=i.gen.next();while(!c.done&&performance.now()-e<t);if(!c.done)return!1;i.gen=null,l("buildings",c.value.group)}else l("buildings",null);if(!i.rbDone){i.rbDone=!0;for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===i.key&&this.collision.addCircle(i.key,c.x,c.z,c.r)}continue}if(!("paths"in i.parts)){let c=new $t,u=this.roads.buildPaths(i.data),h=this.roads.buildBarriers(i.data,this.collision,i.key),f=this.buildPower(i),d=this.roads.buildStalls(i.data);for(let m of[u,h,f,d])m&&c.add(m);l("paths",c.children.length?c:null);continue}if(!("gates"in i.parts)){l("gates",this.gates.build(i.key,i.data));continue}if(!("props"in i.parts)){l("props",this.buildProps(i)),this.traffic&&this.traffic.computeParkSpots(i.key,i.data);continue}if(!("labels"in i.parts)){l("labels",this.buildLabels(i));continue}if(i.vegWanted&&!("veg"in i.parts)){l("veg",this.vegetation.build(i.data,i.i,i.j,this.collision,i.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=9,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,i=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=M=>M[0]>=i&&M[0]<i+1e3&&M[1]>=r&&M[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let M of e)for(let x=0;x<M.length;x++){if(!o(M[x]))continue;let v=M[x],b=M[x-1]||M[x+1],E=M[x+1]||M[x-1],S=E[0]-b[0],T=E[1]-b[1],_=Math.hypot(S,T)||1;if(S/=_,T/=_,c.push([v[0],u.height(v[0],v[1]),v[1],Math.atan2(S,T)]),x<M.length-1){let w=M[x+1],R=u.height(v[0],v[1])+a,L=u.height(w[0],w[1])+a,N=Math.hypot(w[0]-v[0],w[1]-v[1]),U=-(w[1]-v[1])/(N||1),B=(w[0]-v[0])/(N||1);for(let[F,W]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let O=0;O<8;O++)for(let X of[O/8,(O+1)/8]){let Z=Math.min(9,N*.03)*4*X*(1-X);l.push(v[0]+(w[0]-v[0])*X+U*F,R+(L-R)*X+W-Z,v[1]+(w[1]-v[1])*X+B*F)}}}if(!c.length)return null;let h=new $t;if(l.length){let M=new te;M.setAttribute("position",new qt(l,3)),this.wireMat=this.wireMat||new mr({color:2763822}),h.add(new Yo(M,this.wireMat))}if(!this.towerGeo){let M=[],x=new Qt(.12,.2,a,4);for(let[v,b]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let E=x.clone();E.rotateZ(-v*.08),E.rotateX(b*.08),E.translate(v*1.6,a/2,b*1.6),M.push(E)}for(let[v,b]of[[a-4,11],[a,8]]){let E=new Ut(b,.25,.25);E.translate(0,v,0),M.push(E)}for(let v=5;v<a;v+=6){let b=new Ut(3.4-v*.06,.12,3.4-v*.06);b.translate(0,v,0),M.push(b)}this.towerGeo=xd(M.map(v=>v.toNonIndexed())),this.towerMat=new Ft({color:9080982})}let f=new Se(this.towerGeo,this.towerMat,c.length),d=new Kt,m=new Ce,g=new H(0,1,0),p=new H(1,1,1),y=new H;return c.forEach(([M,x,v,b],E)=>{m.setFromAxisAngle(g,b),y.set(M,x-.5,v),d.compose(y,m,p),f.setMatrixAt(E,d),this.collision.addCircle(t.key,M,v,2.2,x+29)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:fd,11:ud,12:hd,13:md,14:dd,15:pd},i={};for(let o of e)n[o[0]]&&(i[o[0]]=i[o[0]]||[]).push(o);let r=new $t;for(let o of Object.keys(i)){let a=i[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,m=this.roads.nearest(h,f,25,y=>y.drivable);m&&(+o==10||+o==14)&&(d=Math.atan2(m.px-h,m.pz-f));let g=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(g)||(d=Math.PI-g*Math.PI/180);let p=m&&m.d<this.roads.ways[m.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[m.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(p?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,i=e.zmin+t.j*1e3,r=new $t;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<i||c>=i+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=sv[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let m=new Pe(h);m.colorSpace=ye;let g=new Wo(new dr({map:m,depthTest:!0,fog:!1,transparent:!0})),p=this.terrain.height(l,c)+(a===1?32:a===12?6:18);g.position.set(l,p,c),g.scale.set(d/48*3.2,3.2,1),g.userData.lm=!0,r.add(g)}return r}updateLabels(t){for(let e of this.tiles.values()){let n=e.parts.labels;if(n)for(let i of n.children){let r=i.position.distanceTo(t.position);if(i.visible=this.labelsOn&&r<650&&r>15,i.visible){let o=Math.max(1,r/120);i.scale.set(i.scale.x/i.scale.y*3.2*o,3.2*o,1)}}}}};var Ra=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new dn(4500,32,16);this.uniforms={top:{value:new Ct},horizon:{value:new Ct},sunDir:{value:new H},sunCol:{value:new Ct},cloudCol:{value:new Ct},time:{value:0},cover:{value:.5}};let i=new Ie({uniforms:this.uniforms,side:We,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
        }`});this.dome=new St(n,i),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new te;o.setAttribute("position",new qt(r,3)),this.starMat=new gr({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Zo(o,this.starMat),this.stars.frustumCulled=!1,this.stars.scale.setScalar(.3),t.add(this.stars),this.sun=new oa(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new ia(12375295,5922880,.9),t.add(this.hemi),t.fog=new Ho(13622246,400,2600),this.sunDir=new H,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),i=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(i),o=Math.asin(r),a=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=Bf.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new Ct(659490).lerp(new Ct(4030417),l),h=new Ct(1317418).lerp(new Ct(13229034),l).lerp(new Ct(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.28+.98*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.34*l+.05,.33*l+.05,.27*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new H(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var yi={x:0,y:1,z:0},rv=()=>0;function yd(s,t){return rv(s,t)}function vd(){return yi}var Lh={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},Md=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function Oi(s){return Md[s%Md.length]}function _d(s,t,e){let n=s.length,i=[],r=[];for(let l=0;l<n;l++){let[c,u]=s[l],h=t[l],f=e[l];i.push(-h,u,c,h,u,c),i.push(-h,u,c,-h,f,c),i.push(h,u,c,h,f,c),i.push(-h,f,c,h,f,c),i.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:i,idx:r}}function Dr({pos:s,idx:t}){let e=new te;return e.setAttribute("position",new qt(s,3)),e.setIndex(t),e.computeVertexNormals(),e}var bd=1.12,Ur=s=>s.wheelR*2+.02,Lr=.34;function ov(s){return s>=1?0:s<=Lr?1:.5*(1+Math.cos(Math.PI*(s-Lr)/(1-Lr)))}function wd(s,t){let e=Ur(s),n=s.wheelR*bd;return t.map(([i])=>{let r=0;for(let o of s.wheelZ)r=Math.max(r,ov(Math.abs(i-o)/n));return s.sill+(e-s.sill)*r})}function Ed(s){let t=s.profile.map(r=>[r[0],r[1]]),e=s.widths.slice(),n=s.wheelR*bd,i=[];for(let r of s.wheelZ)for(let o of[-1,-Lr,Lr,1])i.push(r+o*n);i.sort((r,o)=>o-r);for(let r of i){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function Sd(s){let t=Nr(s),e=s.tumble||0,n=[];for(let i of s.pillars||[]){let[r,o]=s.cab[i],a=s.cabw[i],l=o-t[i]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(nn(.04,l,s.bus?.16:.09,(a+e*.5+.004)*c,t[i]+l/2,r))}return n}function Td(s){let t=Dh(s),e=Nr(s),n=[],i=e[0]+(s.bus?.22:.02),r=s.cab[0][0]-(s.bus?.3:.22);for(let o of[1,-1])n.push(nn(.16,.12,.07,(t.halfW+.08)*o,i,r));return n}function av(s){let{profile:t,widths:e}=Ed(s);return Dr(_d(t,e,wd(s,t)))}var Nr=s=>s.cabBase||s.cab.map(()=>s.beltY);function Ad(s,t=!1){let e=s.cab,n=s.cabw,i=Nr(s),r=s.tumble||0,[o,a]=s.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let m=0;m<e.length;m++){let[g,p]=e[m],y=n[m],M=y+r,x=i[m];u.push(-y,p,g,y,p,g),u.push(-M,x,g,-y,p,g),u.push(M,x,g,y,p,g),u.push(-M,x,g,M,x,g,-y,p,g,y,p,g)}let f=(m,g)=>m*10+g;for(let m=0;m<e.length-1;m++)t&&l&&m>=o&&m<c-1||h.push(f(m,0),f(m,1),f(m+1,0),f(m,1),f(m+1,1),f(m+1,0)),h.push(f(m,3),f(m+1,3),f(m,2),f(m+1,3),f(m+1,2),f(m,2)),h.push(f(m,5),f(m,4),f(m+1,5),f(m+1,5),f(m,4),f(m+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),Dr({pos:u,idx:h})}function Rd(s){let[t,e]=s.roofSlice;if(t===0&&e===0)return null;let n=s.cab.slice(t,s.cab.length+e),i=s.cabw.slice(t,s.cabw.length+e);if(n.length<2)return null;let r=s.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=i[c]*(1-.04*f)+.03,m=h+.006;o.push(-d,m,u,0,m+r,u,d,m,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var Ca=new Ct;function Cd(){return{pos:[],idx:[],col:[]}}function Je(s,t,e){let n=t.attributes.position,i=s.pos.length/3;Ca.set(e);for(let o=0;o<n.count;o++)s.pos.push(n.getX(o),n.getY(o),n.getZ(o)),s.col.push(Ca.r,Ca.g,Ca.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)s.idx.push(i+r.getX(o));else for(let o=0;o<n.count;o++)s.idx.push(i+o);t.dispose()}function Id(s){let t=new te;return t.setAttribute("position",new qt(s.pos,3)),t.setAttribute("color",new qt(s.col,3)),t.setIndex(s.idx),t.computeVertexNormals(),t}var nn=(s,t,e,n,i,r)=>new Ut(s,t,e).translate(n,i,r),je={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},ki={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function Dh(s){let t=s.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),i=Math.max(...s.widths),r=s.widths[0],o=s.widths[s.widths.length-1],a=s.profile[0][1],l=s.profile[s.profile.length-1][1],c=a-s.sill,u=l-s.sill;return{noseZ:e,tailZ:n,halfW:i,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:s.sill+c*(s.bus?.42:.74),headH:c*.26,grilleY:s.sill+c*(s.bus?.14:.44),grilleH:c*.24,lampY:s.sill+u*(s.bus?.36:.66),lampH:u*.3,bumperY:s.sill+c*.12,bumperH:c*.3}}function lv(s){let{profile:t,widths:e}=Ed(s),n=_d(t,e,wd(s,t)),i=Rd(s);if(i){let r=n.pos.length/3;n.pos.push(...i.pos);for(let o of i.idx)n.idx.push(r+o)}for(let r of[...Sd(s),...Td(s)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return Dr(n)}function cv(s){let t=Cd(),e=Dh(s),n=Ad(s,!0);Je(t,n,je.glass);let i=s.wheelX-s.wheelW/2-.02,r=s.sill*.7;if(Je(t,nn(i*2,Ur(s)-r,(e.noseZ-e.tailZ)*.84,0,(Ur(s)+r)/2,(e.noseZ+e.tailZ)/2),je.under),Je(t,nn(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),je.bumper),Je(t,nn(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),je.bumper),s.bus){for(let o of[4.3,.6,-1.4])Je(t,nn(.04,1.14,1.05,-(e.halfW+.005),s.sill+.6,o),je.black);Je(t,nn(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),je.black);for(let o of[1,-1])Je(t,nn(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),je.lamp),Je(t,nn(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),je.tail)}else{Je(t,nn(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),je.black);let o=e.noseW*.56;for(let a of[1,-1])Je(t,nn(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),je.lamp),Je(t,nn(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),je.amber),Je(t,nn(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),je.tail);Je(t,nn(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),je.black)}return Id(t)}function hv(s){let t=Cd(),e=s.wheelR,n=s.wheelW;Je(t,new Qt(e,e,n,14).rotateZ(Math.PI/2),je.tyre);for(let i of[1,-1])Je(t,new Di(e*.6,12).rotateY(i*Math.PI/2).translate(i*(n/2+.004),0,0),je.rim);return Id(t)}var Ia=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function Uh(s){let t=new mi({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:re}),e=new ce({vertexColors:!0,roughness:.35,metalness:.2,side:re}),n=new ce({vertexColors:!0,roughness:.75,metalness:.15}),i=new $t,r=Object.keys(ki),o={};for(let T of r)o[T]=[];for(let T=0;T<s;T++)o[Oi(T)].push(T);let a={},l=new Array(s);for(let T of r){let _=o[T].length;if(_===0)continue;let w=ki[T],R=new Se(lv(w),t,_),L=new Se(cv(w),e,_),N=new Se(hv(w),n,_*4);R.castShadow=!0,R.frustumCulled=!1,L.frustumCulled=!1,N.frustumCulled=!1,i.add(R,L,N),a[T]={body:R,trim:L,wheels:N,spec:w},o[T].forEach((U,B)=>{l[U]={type:T,local:B}})}let c=new Float32Array(s).fill(NaN),u=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),d=new Float32Array(s),m=new Kt,g=new Kt,p=new Kt,y=new Kt,M=new Ct,x=new H(0,1,0),v=new H,b=new Ce,E=new Kt;return{group:i,setAt:(T,_,w,R,L=0,N=yd(_,w))=>{let U=l[T];if(!U)return;let{body:B,trim:F,wheels:W,spec:O}=a[U.type],X=vd(_,w,N);v.set(X.x,X.y,X.z),b.setFromUnitVectors(x,v),E.makeRotationFromQuaternion(b),m.makeRotationY(R).premultiply(E).setPosition(_,N,w),B.setMatrixAt(U.local,m),F.setMatrixAt(U.local,m),M.set(Ia[L%Ia.length]),B.setColorAt(U.local,M);let Z=Math.sin(R),V=Math.cos(R),Q=0;if(c[T]===c[T]){let tt=_-c[T],$=w-u[T];tt*tt+$*$<36&&(Q=tt*Z+$*V);let at=R-h[T];for(;at>Math.PI;)at-=Math.PI*2;for(;at<-Math.PI;)at+=Math.PI*2;let et=O.wheelZ[0]-O.wheelZ[1],st=Math.abs(Q)>.004?Math.max(-.6,Math.min(.6,at*et/Q)):0;d[T]+=(st-d[T])*.3}c[T]=_,u[T]=w,h[T]=R,f[T]=(f[T]+Q/O.wheelR)%(Math.PI*2);let[K,D]=O.wheelZ,k=O.wheelX,Y=O.wheelR;for(let tt=0;tt<4;tt++){let $=tt<2,at=tt%2?-k:k;g.makeRotationX(f[T]),$&&d[T]&&(p.makeRotationY(d[T]),g.premultiply(p)),g.setPosition(at,Y,$?K:D),y.multiplyMatrices(m,g),W.setMatrixAt(U.local*4+tt,y)}B.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,B.instanceColor&&(B.instanceColor.needsUpdate=!0)},count:s,palette:Ia.length}}var Ds={tireGeo:new zn(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new Qt(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new zn(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new Qt(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new Ut(.05,.17,.045),brakeGeo:new Qt(.15,.15,.03,20).rotateZ(Math.PI/2)},Us={tire:new ce({color:1316121,roughness:.85,metalness:.1}),rim:new ce({color:14672874,metalness:.5,roughness:.34}),lip:new ce({color:16054010,metalness:.6,roughness:.22}),hub:new ce({color:3816772,metalness:.45,roughness:.4}),brake:new ce({color:5527647,metalness:.3,roughness:.6})};function uv(){let s=new $t,t=new St(Ds.tireGeo,Us.tire),e=new St(Ds.brakeGeo,Us.brake);e.position.x=.04;let n=new St(Ds.rimLipGeo,Us.lip);n.position.x=.095;let i=new St(Ds.rimBarrelGeo,Us.rim),r=new St(Ds.hubGeo,Us.hub);r.position.x=.085,s.add(t,e,i,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new St(Ds.spokeGeo,Us.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),s.add(c)}return s}function Pd(s=12726047,{police:t=!1,body:e="car"}={}){let n=ki[e]||ki.car,i=new $t,r=t?15922423:s,o=Dh(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,m]=n.wheelZ,g=n.wheelX,p=n.wheelR,y=Nr(n),M=n.tumble||0,x=new mi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),v=new ce({color:1118742,roughness:.6,metalness:.3}),b=new ce({color:15396338,metalness:.55,roughness:.22});i.add(new St(av(n),x));let E=new ce({color:723982,roughness:1}),S=g-n.wheelW/2-.02;i.add(new St(new Ut(S*2,Ur(n)-.1,(a-l)*.8).translate(0,(Ur(n)+.1)/2,(a+l)/2),E));let T=new ce({color:1710879,roughness:.65,metalness:.2}),_=Math.abs(d-m)-n.wheelR*2.2;if(_>.3)for(let $ of[1,-1]){let at=new St(new Ut(.06,.13,_),T);at.position.set((c-.05)*$,n.sill+.04,(d+m)/2),i.add(at)}let w=new zn(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[$,at]of[[g,d],[-g,d],[g,m],[-g,m]]){let et=new St(w,x);et.position.set($+.02*Math.sign($),p,at),i.add(et)}let R=new ce({color:3948616,roughness:.85,metalness:.05});{let $=n.cab,at=n.cabw,et=[],st=[];for(let P=0;P<$.length;P++){let[ft,ct]=$[P],mt=at[P]*.9,rt=(at[P]+M)*.9;et.push(-rt,y[P]-.02,ft,rt,y[P]-.02,ft,-mt,ct-.06,ft,mt,ct-.06,ft)}let G=(P,ft)=>P*4+ft;for(let P=0;P<$.length-1;P++)st.push(G(P,2),G(P+1,2),G(P,3),G(P,3),G(P+1,2),G(P+1,3)),st.push(G(P,0),G(P,2),G(P+1,0),G(P+1,0),G(P,2),G(P+1,2)),st.push(G(P,1),G(P+1,1),G(P,3),G(P+1,1),G(P+1,3),G(P,3));st.push(G(0,0),G(0,1),G(0,2),G(0,1),G(0,3),G(0,2));let j=$.length-1;st.push(G(j,0),G(j,2),G(j,1),G(j,1),G(j,2),G(j,3)),i.add(new St(Dr({pos:et,idx:st}),R))}let L=new mi({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:re});i.add(new St(Ad(n,!0),L));let N=new mi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),U=Rd(n);if(U){i.add(new St(Dr(U),N));let[$]=n.roofSlice,[at,et]=n.cab[$],st=n.cabw[$],G=new St(new Ut(st*2,.03,.06),N);G.position.set(0,et-.005,at+.02),i.add(G)}let B=new ce({color:13225430,metalness:.7,roughness:.28}),F=n.cab[0][0],W=n.cab[n.cab.length-1][0],O=Math.max(...n.cabw)+M;for(let $ of[1,-1]){let at=new St(new Ut(.025,.03,Math.abs(F-W)-.08),B);at.position.set((O+.01)*$,f+.02,(F+W)/2),i.add(at)}let X=new ce({color:r,metalness:.35,roughness:.42});for(let $ of Sd(n))i.add(new St($,X));let Z=new ce({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),V=new ce({color:1513500,roughness:.55,metalness:.25});if(n.bus){let $=new St(new Ut(u*1.3,.26,.05),new ce({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));$.position.set(0,2.54,a-.01),i.add($);for(let st of[1,-1]){let G=new St(new Ut(.36,.22,.06),new ce({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));G.position.set(.74*st,o.headY,a-.02),i.add(G);let j=new St(new Ut(.4,.26,.02),b);j.position.set(.74*st,o.headY,a-.05),i.add(j);let P=new St(new Ut(.32,.34,.06),Z);P.position.set(.86*st,o.lampY,l+.03),i.add(P)}let at=new St(new Ut(u*1.92,o.bumperH,.12),V);at.position.set(0,o.bumperY,a-.05);let et=new St(new Ut(h*1.92,o.bumperH,.12),V);et.position.set(0,o.bumperY,l+.05),i.add(at,et);for(let st of[4.3,.6,-1.4]){let G=new St(new Ut(.04,1.14,1.05),v);G.position.set(-(c+.005),n.sill+.6,st),i.add(G)}}else{let $=u*1.1,at=new St(new Ut($,o.grilleH,.07),v);at.position.set(0,o.grilleY,a-.04),i.add(at);let et=new ce({color:2829876,metalness:.6,roughness:.4});for(let q=0;q<3;q++){let ht=new St(new Ut($-.03,.02,.02),et);ht.position.set(0,o.grilleY-.05+q*.05,a-.015),i.add(ht)}let st=new St(new Ut(u*1.4,.09,.05),v);st.position.set(0,n.sill+.05,a-.05),i.add(st);let G=new ce({color:658189,roughness:.5,metalness:.2}),j=new ce({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),P=new mi({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),ft=new ce({color:13796895,roughness:.35,metalness:.1}),ct=u*.56;for(let q of[1,-1]){let ht=new St(new Ut(.34,o.headH,.1),G);ht.position.set(ct*q,o.headY,a-.09),i.add(ht);let ut=new St(new Ut(.28,.12,.02),j);ut.position.set(ct*q,o.headY,a-.045),i.add(ut);let lt=new St(new Ut(.35,.16,.02),b);lt.position.set(ct*q,o.headY,a-.03),i.add(lt);let gt=new St(new Ut(.3,.13,.015),P);gt.position.set(ct*q,o.headY,a-.018),i.add(gt);let yt=new St(new Ut(.12,.11,.06),ft);yt.position.set((ct+.24)*q,o.headY,a-.05),i.add(yt)}let mt=new St(new Di(.05,16),b);mt.position.set(0,o.grilleY,a-.003),i.add(mt);let rt=o.lampY,Et=l+.035;for(let q of[1,-1]){let ht=new St(new Ut(h*.68,.2,.04),new ce({color:1180422,roughness:.5,metalness:.2}));ht.position.set(h*.58*q,rt,Et+.03),i.add(ht);let ut=new St(new Ut(h*.6,.17,.07),Z);ut.position.set(h*.58*q,rt,Et),i.add(ut)}let ot=new St(new Ut(h*.56,.14,.04),new ce({color:1118742,roughness:.6,metalness:.3}));ot.position.set(0,rt-.03,Et+.03),i.add(ot);let I=new St(new Ut(h*.44,.07,.02),b);I.position.set(0,rt-.03,Et+.005),i.add(I);let C=(q,ht,ut)=>{let lt=new St(new Ut(q,o.bumperH,.09),V);return lt.position.set(0,o.bumperY,ht+ut*.04),lt};i.add(C(u*1.92,a,-1),C(h*1.92,l,1));for(let q of[1,-1]){let ht=new St(new Qt(.045,.045,.06,12).rotateX(Math.PI/2),b);ht.position.set(c*.42*q,n.sill-.02,l+.05),i.add(ht)}}let Q=new ce({color:r,metalness:.5,roughness:.35}),K=new ce({color:547,metalness:.9,roughness:.1});for(let $ of Td(n))i.add(new St($,Q));{let $=Nr(n)[0]+(n.bus?.22:.02),at=n.cab[0][0]-(n.bus?.3:.22);for(let et of[1,-1]){let st=new St(new Ut(.02,.09,.05),K);st.position.set((c+.16)*et,$,at),i.add(st)}}let D=[["wheelFL",g,d],["wheelFR",-g,d],["wheelRL",g,m],["wheelRR",-g,m]],k=p/.3;for(let[$,at,et]of D){let st=new $t;st.name=$,st.position.set(at,p,et);let G=uv();G.scale.setScalar(k),st.add(G),i.add(st)}if(t){let $=Math.max(...n.cab.map(G=>G[1])),at=new St(new Ut(.66,.05,.3),v);at.position.set(0,$+.05,.05),i.add(at);let et=new St(new Ut(.3,.1,.3),new ce({color:2245836,emissive:2250239,emissiveIntensity:1.6}));et.position.set(-.17,$+.11,.05);let st=new St(new Ut(.3,.1,.3),new ce({color:13378082,emissive:16720418,emissiveIntensity:1.6}));st.position.set(.17,$+.11,.05),i.add(et,st),i.userData.lightbar={blue:et.material,red:st.material}}let Y=new sa(16773583,0,80,.62,.5,1.2);Y.position.set(0,o.headY+.2,a-.05),Y.target.position.set(0,.2,a+10),i.add(Y,Y.target),i.userData.headlight=Y;let tt=new ra(16722450,0,1.4,3.4);return tt.position.set(0,o.lampY,l+.05),i.add(tt),i.userData.tailGlow=tt,i.traverse($=>{$.isMesh&&($.castShadow=!0)}),i}function Ld(s,t,{sz:e=1,sy:n=1,sx:i=1,wheelR:r}={}){let o=ki[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*i),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*i),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*i,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),ki[s]=a,a}function Dd(s){return ki[s]}var Nh=Ia;var zr=9.81,Ud=1.2,Nd={id:"plane",kind:"plane",name:"Aereo da turismo",desc:"Monomotore biposto ad ala alta: decolla, sorvola la Brianza e atterra su un prato o una strada dritta.",color:"#f4f4f0",stripe:"#c0392b",L:7.3,W:10.2,H:2.6,wb:1.6,mass:760,kw:85,rpmMax:2700,thrust:3600,cdS:.9,kInd:31e4,wingS:15,vStall:20,vRot:24,vNe:75},Pa=class{constructor(t,e){this.spec=t,this.world=e,this.isPlane=!0,this.x=0,this.y=0,this.z=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.bank=0,this.lever=0,this.throttle=0,this.brake=0,this.steer=0,this.gear=1,this.rpm=0,this.slip=0,this.impact=0,this.wheelSpinAngle=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.agl=0,this.surface=null,this.stall=!1}ground(t,e,n=1e9){return this.world.roads.surfaceAt(t,e,n).h}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=this.vy=0,this.bank=0,this.pitch=0,this.roll=0,this.lever=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.surface=this.world.roads.surfaceAt(t,e,1e9),this.y=this.surface.h}launch(t=250,e=48){this.y=this.ground(this.x,this.z)+t,this.u=e,this.vy=0,this.pitch=.03,this.bank=0,this.lever=.65,this.onGround=!1,this.airborne=!0,this.crashed=0,this.surface=null}update(t,e){for(let i=0;i<3;i++)this.step(t/3,e);this.roll=-this.bank,this.rpm=700+this.lever*2e3+Math.min(300,this.u*4),this.throttle=this.lever,this.wheelSpinAngle+=(this.onGround?this.u/.3:0)*t,this.propAngle=(this.propAngle||0)+this.rpm/60*Math.PI*2*t}step(t,e){let n=this.spec,i=this.world;if(this.crashed>0){this.crashed-=t,this.u=0,this.crashed<=0&&(this.launch(),this.relaunched=!0);return}this.lever=Math.max(0,Math.min(1,this.lever+(e.throttle-e.brake)*t*.6));let r=n.thrust*this.lever*Math.max(0,1-this.u/(n.vNe*1.05)),o=.5*Ud*n.cdS*this.u*this.u+(this.onGround?0:n.kInd/Math.max(100,this.u*this.u)),a=Math.sin(this.h),l=Math.cos(this.h),c=this.ground(this.x,this.z,this.y+2);if(this.agl=this.y-c,this.onGround){this.brake=e.handbrake?1:0;let M=.03*n.mass*zr*Math.sign(this.u),x=(e.handbrake?.55:0)*n.mass*zr*Math.sign(this.u);this.u+=(r-o-M-x)/n.mass*t,Math.abs(this.u)<.08&&this.lever<.05&&(this.u=0),this.u<0&&(this.u=0),this.steer+=(e.steer*.5*Math.min(1,12/Math.max(1,this.u))-this.steer)*Math.min(1,t*6),this.h+=this.u*Math.tan(this.steer)/n.wb*t*Math.max(.15,1-this.u/n.vRot);let v=this.u>n.vRot*.85?Math.max(0,e.pitch)*.2:0;this.pitch+=(v-this.pitch)*Math.min(1,t*2),this.bank*=Math.exp(-t*8),this.x+=a*this.u*t,this.z+=l*this.u*t,this.collideGround(),this.surface=i.roads.surfaceAt(this.x,this.z,this.y+1),this.y=this.surface.h,this.vy=0;let b=Math.atan2(this.ground(this.x+a*2,this.z+l*2,this.y+3)-this.ground(this.x-a*2,this.z-l*2,this.y+3),4);this.dynPitch+=(b-this.dynPitch)*Math.min(1,t*8);let E=.5*Ud*n.wingS*this.u*this.u*(.35+this.pitch*5)/(n.mass*zr);this.pitch>.08&&E>1&&(this.onGround=!1,this.airborne=!0,this.surface=null,this.vy=1);return}this.dynPitch*=Math.exp(-t*3);let u=Math.min(1,(this.u/n.vStall)**2);this.stall=u<.98;let h=1.3*Math.min(1,this.u/25);Math.abs(e.steer)>.05?this.bank+=e.steer*h*t:this.bank*=Math.exp(-t*.9),this.bank=Math.max(-1.05,Math.min(1.05,this.bank));let f=.65*Math.min(1,this.u/30);if(this.pitch+=e.pitch*f*t,Math.abs(e.pitch)<.05){let M=Math.max(-.16,Math.min(.04,.02+.5*(this.u-1.35*n.vStall)/n.vStall));this.pitch+=(M-this.pitch)*Math.min(1,t*.5)}this.stall&&(this.pitch-=(1-u)*.9*t),this.pitch=Math.max(-.75,Math.min(.55,this.pitch)),this.w=zr*Math.tan(this.bank)/Math.max(15,this.u)*u,this.h+=this.w*t;let d=Math.atan2(this.vy,Math.max(1,this.u));this.u+=((r-o)/n.mass-zr*Math.sin(d))*t,this.u=Math.max(5,this.u);let m=this.u*Math.sin(this.pitch)*u*Math.cos(this.bank)-(1-u)*9-(1-Math.cos(this.bank))*3.5;this.vy+=(m-this.vy)*Math.min(1,t*1.6),this.x+=a*this.u*t,this.z+=l*this.u*t,this.y+=this.vy*t;let g=c+1800;this.y>g&&(this.y=g,this.vy=Math.min(0,this.vy));let p=i.terrain;if(p.inside(this.x,this.z)||(this.x=Math.max(p.x0+50,Math.min(p.x0+(p.nx-1)*p.step-50,this.x)),this.z=Math.max(p.z0+50,Math.min(p.z0+(p.nz-1)*p.step-50,this.z)),this.h+=Math.PI*.75*t*4,this.outside=1),this.agl<60&&i.collision.topAt(this.x,this.z,1.5)>this.y+.3){this.crash("Schianto contro un ostacolo!");return}let y=this.ground(this.x,this.z,this.y+1);if(this.y<=y){let M=(this.ground(this.x+a*3,this.z+l*3,this.y+4)-y)/3,x=this.vy-M*this.u,v=x<-4.2||Math.abs(this.bank)>.35||this.pitch<-.18||this.u>40;if(this.y=y,v){this.crash(x<-4.2&&M>.12?"Schianto contro il pendio!":this.u>40?"Atterraggio troppo veloce!":"Atterraggio troppo duro!");return}this.onGround=!0,this.airborne=!1,this.impact=Math.min(1,-this.vy/6),this.vy=0,this.bank=0,this.touchdown=!0}}collideGround(){let t=this.world,e=1.6,n=t.collision.resolveCircle(this.x,this.z,e),i=t.traffic?t.traffic.resolveCircle(this.x,this.z,e):null;i&&(!n||i.depth>n.depth)&&(n=i),n&&(this.x+=n.nx*n.depth,this.z+=n.nz*n.depth,this.u>1&&(this.impact=Math.max(this.impact,Math.min(1,this.u/10))),this.u*=.3)}crash(t){this.crashed=2.2,this.crashMsg=t,this.impact=1,this.vy=0,this.lever=0,this.u=0,this.y=this.ground(this.x,this.z,this.y+1)}};function zd(s,t={}){let e=new $t,n=new $t,i=new wn({color:t.color||s.color,shininess:70,specular:5592405}),r=new wn({color:s.stripe,shininess:50}),o=new Ft({color:1908772}),a=new wn({color:2240576,shininess:120,specular:10070715,transparent:!0,opacity:.75}),l=.95,c=(k,Y,tt,$,at,et=0,st=0,G=0)=>{let j=new St(k,Y);return j.position.set(tt,$,at),j.rotation.set(et,st,G),j.castShadow=!0,j.receiveShadow=!0,n.add(j),j},u=[[2.35,.55,.6],[1.6,1.05,1.15],[.2,1.1,1.25],[-1.2,.95,1],[-3,.45,.55],[-4.6,.22,.38]],h=[];for(let[k,Y,tt]of u)h.push({z:k,hw:Y,hh:tt});let f=[],d=[],m=k=>[[k.hw,-k.hh*.45],[k.hw*.92,k.hh*.55],[-k.hw*.92,k.hh*.55],[-k.hw,-k.hh*.45],[-k.hw*.6,-k.hh*.55],[k.hw*.6,-k.hh*.55]];h.forEach(k=>{for(let[Y,tt]of m(k))f.push(Y*.5,l+.55+tt*.5+(k.z<-1?(-1-k.z)*.12:0),k.z)});let g=6;for(let k=0;k<h.length-1;k++)for(let Y=0;Y<g;Y++){let tt=k*g+Y,$=k*g+(Y+1)%g,at=tt+g,et=$+g;d.push(tt,at,$,$,at,et)}for(let k=1;k<g-1;k++){d.push(0,k,k+1);let Y=(h.length-1)*g;d.push(Y,Y+k+1,Y+k)}let p=new te;p.setAttribute("position",new qt(f,3)),p.setIndex(d),p.computeVertexNormals();let y=new St(p,i);y.castShadow=!0,n.add(y);let M=[y];for(let k of[1,-1])M.push(c(new Ut(.02,.16,5.6),r,k*.53,l+.45,-.9,0,k*.055,0));M.push(c(new Qt(.2,.3,.35,12),i,0,l+.52,2.5,Math.PI/2)),M.push(c(new Ss(.11,.22,10),o,0,l+.52,2.78,Math.PI/2));let x=new $t;x.position.set(0,l+.52,2.72),n.add(x);let v=new St(new Ut(1.85,.14,.04),o);v.castShadow=!0,x.add(v),M.push(v);let b=new St(new Di(.93,24),new Ue({color:2236962,transparent:!0,opacity:.12,side:re}));x.add(b),M.push(c(new Ut(1.02,.42,.04),a,0,l+1,1.5,-.55));for(let k of[1,-1])M.push(c(new Ut(.03,.38,1.3),a,k*.535,l+.88,.55));c(new Ut(s.W,.13,1.45),i,0,l+1.18,.45);for(let k of[1,-1]){c(new Ut(.5,.14,1.46),r,k*(s.W/2-.25),l+1.18,.45);let Y=c(new Qt(.035,.035,2.25,6),o,k*1.35,l+.7,.55,0,0,k*1.02);Y.castShadow=!0}c(new Ut(3.4,.08,.85),i,0,l+.8,-4.25);let E=new Ts;E.moveTo(0,0),E.lineTo(-1.1,0),E.lineTo(-1.25,1.35),E.lineTo(-.55,1.35),E.lineTo(0,0);let S=new _r(E,{depth:.07,bevelEnabled:!1}),T=c(S,r,.035,l+.82,-3.55,0,-Math.PI/2,0);T.castShadow=!0;let _=new Qt(.21,.21,.14,14);_.rotateZ(Math.PI/2);let w=[];for(let[k,Y,tt]of[[0,1.95,!0],[1,-.1,!1],[-1,-.1,!1]]){let $=new $t;$.position.set(k,.21,Y),$.rotation.order="YXZ",n.add($);let at=new St(_,o);at.castShadow=!0,$.add(at),c(new Ut(.05,l+.3,.06),o,k*.75,l*.5+.1,Y,0,0,-k*.35),w.push({pivot:$,front:tt})}e.add(n);let R=new $t,L=new H(.24,l+.9,1),N=new St(new Ut(1,.26,.12),new Ft({color:2829616}));N.position.set(0,l+.52,1.72),R.add(N);let U=.5,B=.26,F=l+.66,W=l+.76,O=1.78,X=2.62,Z=new te;Z.setAttribute("position",new qt([-U,F,O,U,F,O,B,W,X,-U,F,O,B,W,X,-B,W,X],3)),Z.computeVertexNormals(),R.add(new St(Z,new wn({color:t.color||s.color,shininess:60,side:re})));let V=document.createElement("canvas");V.width=256,V.height=96;let Q=new Pe(V);Q.colorSpace=ye;let K=new St(new en(.36,.135),new Ue({map:Q,toneMapped:!1}));K.position.set(.2,l+.58,1.655),R.add(K),K.lookAt(L);let D=new St(new Ut(.3,.045,.04),new Ft({color:1381653}));return D.position.set(.24,l+.4,1.4),R.add(D),R.visible=!1,e.add(R),e.userData.eye=L.clone(),{root:e,ext:n,wheels:w,prop:x,headlight:null,tailGlow:null,interior:R,steeringWheel:D,dashCanvas:V,dashTex:Q,exterior:M,isPlane:!0}}function Fd(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.textAlign="center",a.fillStyle=o?"#ff5a4a":"#9fe3ff",a.font="bold 34px Arial",a.fillText(String(Math.round(e)),52,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",52,70),a.fillStyle="#ffd36b",a.font="bold 30px Arial",a.fillText(String(Math.round(n)),140,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m dal suolo",140,70),a.fillStyle=i>=0?"#7dff9a":"#ffb36b",a.font="bold 20px Arial",a.fillText((i>=0?"+":"")+i.toFixed(1),214,46),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m/s",214,64),a.fillStyle="#1e2a30",a.fillRect(176,76,70,8),a.fillStyle="#59c9ff",a.fillRect(176,76,70*r,8),o&&(a.fillStyle="#ff5a4a",a.font="bold 13px Arial",a.fillText("STALLO",52,88)),t.needsUpdate=!0}var Ns=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];Ns.push(Nd);for(let s of Ns)s.base!=="bus"&&s.kind!=="plane"&&Ld("bds-"+s.id,s.base,{sz:s.sz,sy:s.sy,sx:s.sx,wheelR:s.wheelR});var fv=s=>s.base==="bus"?"bus":"bds-"+s.id,Bd=new Ft({color:2237478});function Od(s,t={}){let e=new $t,n=fv(s),i=Dd(n),r=Pd(new Ct(t.color||s.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((m,g)=>{let p=r.getObjectByName(m);return p&&(p.rotation.order="YXZ"),{pivot:p,front:g<2}}).filter(m=>m.pivot),l=i.beltY,c=Math.max(...i.cab.map(m=>m[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new $t;let m=i.widths.reduce((k,Y)=>Math.max(k,Y),0)*2,g=m*.22,[p,y]=i.cab[0],M=Math.min(c-.17,Math.max(l+.2,l+.55*(c-l))),x=p-.95,v=new H(g,M,x),b=new Ft({color:2829616}),E=new Ft({color:3816512,side:re}),S=x+.6,T=Math.min(M-.2,y+.04),_=Math.max(.4,p-S),w=new St(new Ut(m-.1,.42,_),b);w.position.set(0,T-.21,S+_/2),u.add(w);let R=M-.18-T;if(R>.04){let k=new St(new Ut(.56,R+.05,.3),b);k.position.set(g,T+R/2-.02,S+.15),u.add(k)}f=document.createElement("canvas"),f.width=256,f.height=96,d=new Pe(f),d.colorSpace=ye;let L=new St(new en(.4,.15),new Ue({map:d,toneMapped:!1}));L.position.set(g,M-.28,S-.005),L.lookAt(v),u.add(L),h=new $t,h.add(new St(new zn(.185,.02,8,32),new Ft({color:1381653})));for(let k of[0,2.1,4.2]){let Y=new St(new Ut(.17,.028,.02),Bd);Y.position.set(Math.cos(k-Math.PI/2)*.085,Math.sin(k-Math.PI/2)*.085,0),Y.rotation.z=k-Math.PI/2,h.add(Y)}let N=new St(new Qt(.055,.055,.06,12),Bd);N.rotation.x=Math.PI/2,h.add(N);let U=new $t;U.position.set(g,M-.34,x+.47),U.rotation.x=-.42,U.add(h);let B=new St(new Qt(.035,.045,.3,8),b);B.rotation.x=Math.PI/2-.42,B.position.set(0,-.06,.16),U.add(B),u.add(U);let F=i.cab[1]?i.cab[1][0]:p-.5,W=i.cab[1]?i.cab[1][1]:c,O=i.cab[i.cab.length-2][0];for(let k of[1,-1]){let Y=new H(k*(m/2-.1),y,p-.05),tt=new H(k*(m/2-.16),W-.03,F),$=new St(new Ut(.08,Y.distanceTo(tt),.1),E);$.position.copy(Y).add(tt).multiplyScalar(.5),$.lookAt(tt),$.rotateX(Math.PI/2),u.add($);let at=new St(new en(Math.max(.6,p-x+.6),l-.3),E);at.rotation.y=Math.PI/2,at.position.set(k*(m/2-.06),(l+.3)/2,(p+x-.6)/2),u.add(at)}let X=new St(new en(m-.1,Math.max(.5,F-.12-O)),new Ft({color:11841445,emissive:3157546,side:re}));X.rotation.x=Math.PI/2,X.position.set(0,Math.min(c,W+.02)-.04,(F-.12+O)/2),u.add(X);let Z=new St(new Ut(.15,.045,.02),new Ft({color:5593180}));Z.position.set(0,W-.075,F-.02),u.add(Z);let V=i.profile[1]||i.profile[0],Q=m/2-.18,K=new te;K.setAttribute("position",new qt([-Q,y-.02,p,Q,y-.02,p,Q,V[1],V[0],-Q,y-.02,p,Q,V[1],V[0],-Q,V[1],V[0]],3)),K.computeVertexNormals();let D=new St(K,new wn({color:t.color||s.color,shininess:60,specular:4473924,side:re}));u.add(D),u.visible=!1,e.add(u),e.userData.eye=v.clone()}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function kd(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/i);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var La=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let vt=r;r=o,o=vt}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),m=Math.cos(this.h),g=-Math.sin(this.h),p=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let y=!!p.road,M=y?i.roads.ways[p.road.wi]:null,x=!1;if(!y){let vt=i.terrain.landClass(this.x,this.z);x=vt==="parking"||vt==="parking_space"||vt==="pedestrian"}let v=n.grip*(y?M.flags&64?.78:1:x?.95:.68),b=y?M.flags&64?.03:.013:x?.016:.06;n.drive==="A"&&!y&&(v*=1.12,b*=.7),this.mu=v;let E=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,T=Math.atan2(E-S,this.L),_=n.W*.8,w=i.roads.surfaceAt(this.x+m*_/2,this.z+g*_/2,this.y+.5).h,R=i.roads.surfaceAt(this.x-m*_/2,this.z-g*_/2,this.y+.5).h,L=Math.atan2(w-R,_),N=this.m*9.81*Math.cos(T),U=N*this.b/this.L-this.m*this.ax*this.hcg/this.L,B=N*this.a/this.L+this.m*this.ax*this.hcg/this.L;U=Math.max(U,N*.15),B=Math.max(B,N*.15),this.airborne&&(U=B=0);let F=this.gear>0?n.gears[this.gear-1]:3.6,W=Math.abs(this.u)/n.wheelR*30/Math.PI,O=W*F*n.final,X=900+r*2600;if((this.gear===1||this.gear===-1)&&O<X&&(O=O*.4+X*.6),O=Math.max(800,O),this.rpm+=(O-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let vt=n.rpmMax*(.55+.37*r);if(this.rpm>vt&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let It=W*n.gears[this.gear-2]*n.final,Ot=n.rpmMax*(.28+.3*r);this.rpm<Ot&&It<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let Z=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(Z=this.torque(this.rpm)*F*n.final*.88/n.wheelR*r),this.gear<0&&(Z=this.u<-7?0:-Z*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(Z-=Math.sign(this.u)*this.torque(this.rpm)*.12*F*n.final/n.wheelR*(this.rpm/n.rpmMax));let V=n.drive==="F"?U:n.drive==="R"?B:U+B,Q=v*V;this.wheelSpin=Math.abs(Z)>Q?Math.min(1,(Math.abs(Z)-Q)/Q):0,Z=Math.max(-Q,Math.min(Q,Z));let K=0,D=n.brake*o;Math.abs(this.u)>.05&&(K=-Math.sign(this.u)*Math.min(D,v*(U+B)));let k=0;this.handbrake>0&&Math.abs(this.u)>.05&&(k=-Math.sign(this.u)*v*B*.8*this.handbrake);let Y=Math.max(Math.abs(this.u),.5),tt=this.u>=0?1:-1,$=Math.atan2(this.v+this.a*this.w,Y)-this.steer*tt,at=Math.atan2(this.v-this.b*this.w,Y),et=(vt,It,Ot)=>{let At=-(12*It)*vt,Yt=Ot*It;return Math.abs(At)>Yt&&(At=Math.sign(At)*Yt*Math.max(.75,1-.25*(Math.abs(At)/Yt-1))),At},st=v*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(st*=1-.35*this.wheelSpin);let G=et($,U,v),j=et(at,B,st);this.slip=Math.max(Math.abs(at),Math.abs($)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let P=-.5*1.2*n.cda*this.u*Math.abs(this.u),ft=Math.abs(this.u)>.05?-Math.sign(this.u)*b*(U+B):0,ct=-this.m*9.81*Math.sin(T),mt=this.m*9.81*Math.sin(L)*.5,rt=Math.cos(this.steer),Et=Math.sin(this.steer),ot=Z+K+k+P+ft+ct-G*Et,I=j+G*rt+mt;this.airborne&&(ot=P+ct*0,I=0);let C=ot/this.m+this.v*this.w,q=I/this.m-this.u*this.w,ht=this.airborne?0:(this.a*G*rt-this.b*j)/this.I,ut=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let vt=1.1*v*9.81/Math.abs(this.u);Math.abs(this.w)>vt&&(this.w+=(Math.sign(this.w)*vt-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=C*t,this.v+=q*t,this.w+=ht*t,Math.sign(ut)!==Math.sign(this.u)&&Math.abs(Z)<1&&ut!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(ct)<D+b*N+1500&&(this.u=0);let lt=Math.min(1,Math.abs(this.u)/4),gt=this.u*Math.tan(this.steer)/this.L;this.w=this.w*lt+gt*(1-lt),this.v*=1-(1-lt)*Math.min(1,t*8),this.ax=this.ax+(ot/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(I/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let yt=f*this.u+m*this.v,wt=d*this.u+g*this.v;this.x+=yt*t,this.z+=wt*t,this.collide();let Bt=i.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=Bt&&(this.y=Bt,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-Bt>.35&&this.y-Bt<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(Bt-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=Bt),this.pitch+=(T-this.pitch)*Math.min(1,t*10),this.roll+=(L-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),i=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+i*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),m=n*this.u+f*this.v,g=i*this.u+d*this.v,p=m*u.nx+g*u.nz;p<0&&(m-=1.25*p*u.nx,g-=1.25*p*u.nz,m*=.8,g*=.8,this.impact=Math.max(this.impact,Math.min(1,-p/12)),this.u=m*n+g*i,this.v=m*f+g*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var Da=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),i=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(i?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set,padThr:0,padBrk:0,stickY:0};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let u=c.axes,h=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,m=p=>{if(p===void 0)return 0;let y=d.invertPedals?(1-p)/2:(p+1)/2;return y<.03?0:Math.min(1,y)},g=u[d.steerAxis]||0;(Math.abs(g)>.005||m(u[d.throttleAxis])>0||m(u[d.brakeAxis])>0)&&(a.steer=-g,a.analogWheel=!0,a.throttle=Math.max(a.throttle,m(u[d.throttleAxis])),a.brake=Math.max(a.brake,m(u[d.brakeAxis])))}else if(c.mapping==="standard"){let d=u[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,h(7)),a.brake=Math.max(a.brake,h(6)),a.padThr=h(7),a.padBrk=h(6),Math.abs(u[1]||0)>.1&&(a.stickY=u[1]),(h(0)>.5||h(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,m)=>{d.pressed&&!f[m]&&a.buttons.add(m)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var zh=72,vi=1e6,Hd=14,Ua=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new $t,this.fleet=Uh(zh);let e=t.settings&&t.settings.parked||288;this.parkFleet=Uh(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=zh-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,vi,vi,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,vi,vi,0,0,-100);let l=Oi(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),i.fillStyle=r,i.fillRect(0,0,32,64),this.beamMat=new Ue({map:new Pe(n),transparent:!0,blending:fi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new en(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Se(o,this.beamMat,zh),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new Kt,this._q=new Ce,this._up=new H(0,1,0),this._p=new H,this._s=new H(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,vi,vi,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let i=0;i<6;i++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,M=>M.drivable&&M.cls<=Vt.LIVING&&!(M.flags&zt.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(Oi(this.free[h])==="bus"&&u.cls>Vt.TERTIARY&&(h=this.free.findIndex(M=>Oi(M)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],m=(f>0?c.t:1-c.t)*d;if(this.cars.some(M=>Math.hypot(M.x-c.px,M.z-c.pz)<25))continue;let g=this.free.splice(h,1)[0],p=Oi(g),y={slot:g,type:p,box:Lh[p],colour:Math.floor(Math.random()*Hd),wi:c.wi,k:c.k,dir:f,s:m,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(p==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(y),this.cars.push(y),this.place(y,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]);for(let f=e.adjStart[r];f<e.adjStart[r+1];f++){let d=e.adjWay[f],m=e.adjPos[f],g=e.ways[d];if(!g.drivable||g.cls>Vt.LIVING||g.flags&zt.PRIVATE||t.type==="bus"&&g.cls>Vt.UNCLASSIFIED)continue;let p=[];m<g.nodes.length-1&&p.push({wi:d,k:m,dir:1,to:g.nodes[m+1]}),m>0&&!g.oneway&&p.push({wi:d,k:m-1,dir:-1,to:g.nodes[m-1]});for(let y of p){if(y.wi===t.wi&&y.k===t.k&&y.dir===-t.dir)continue;let x=Math.atan2(e.nx[y.to]-e.nx[r],e.nz[y.to]-e.nz[r])-c;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;let v=1+Math.max(0,6-g.cls)*.5;Math.abs(x)<.4&&(v*=2.5),Math.abs(x)>2.6&&(v*=.05),l.push({...y,turn:x,wgt:v})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&zt.ROUNDABOUT&&!(n.flags&zt.ROUNDABOUT)||n.flags&zt.LINK&&!(h.flags&zt.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,i=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,m=(u-l)/h,g=n.laneCenter(i,t.dir),p=a+d*t.s-m*g,y=l+m*t.s+d*g,M=t.dir>0?f:1-f,x=n.heightOn(t.wi,t.k,M,p,y),v=Math.min(1,(t.s+2)/h),b=t.dir>0?v:1-v,E=n.heightOn(t.wi,t.k,b,p+d*(v-f)*h,y+m*(v-f)*h),S=v>f?(E-x)/((v-f)*h):t.slope;t.slope+=(S-t.slope)*Math.min(1,(e||1)*5),t.x=p,t.z=y,t.y=x;let T=Math.atan2(d,m);e===0&&(t.h=T);let _=T-t.h;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;t.h+=_*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),i=Math.hypot(t.slope,1);yi.x=-e*t.slope/i,yi.y=1/i,yi.z=-n*t.slope/i,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let i=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=i.ways[u.wi],[f,d]=this.segEnds(u),g=Math.hypot(i.nx[d]-i.nx[f],i.nz[d]-i.nz[f])-u.s,p=Math.sin(u.h),y=Math.cos(u.h),M=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let U=Math.abs(u.next.turn)>1?5.5:9;M=Math.min(M,Math.sqrt(U*U+2*2.2*Math.max(0,g-3)))}let x=1e9,v=0,b=(U,B,F,W,O,X)=>{let Z=U-u.x,V=B-u.z,Q=Z*p+V*y;if(Q<=0||Q>60)return;let K=Math.abs(Z*y-V*p),D=W*p+O*y;if(K>(D>.3?2:1.4))return;let k=Q-u.box.halfL-X-.4;k<x&&(x=k,v=F*Math.max(0,D))};for(let U of this.cars)U!==u&&b(U.x,U.z,U.speed,Math.sin(U.h),Math.cos(U.h),U.box.halfL);e.active!==!1&&b(r,o,c,a,l,2.2);for(let U of this.statics)b(U.x,U.z,0,Math.sin(U.h),Math.cos(U.h),U.box.halfL);for(let U of this.obstacles)b(U[0],U[1],0,0,0,.6);let E=i.ntag[d]===Jt.SIGNALS?d:u.next&&i.ntag[this.nodeAfter(u)]===Jt.SIGNALS&&g<35?-2:-1;if(E!==-1){let U=E===d?g:g+20,B=Math.abs(p)>Math.abs(y)?1:0,F=Pr(B,n);if((F==="R"||F==="Y"&&U>14)&&U>1.5){let W=U-3.5-u.box.halfL+2.2;W<x&&(x=Math.max(.1,W),v=0)}}if(u.yield&&g<18&&g>.3){let U=i.nx[d],B=i.nz[d],F=!1,W=(O,X,Z,V,Q,K)=>{if(F||Z<1.5||K===u.wi)return;let D=U-O,k=B-X,Y=Math.hypot(D,k);Y>10+Z*3.2||Y<.5||(D*V+k*Q)/Y<.6||(F=!0)};for(let O of this.cars)O!==u&&W(O.x,O.z,O.speed,Math.sin(O.h),Math.cos(O.h),O.wi);if(e.active!==!1&&W(r,o,c,a,l,e.wi),F){let O=g-2.2-u.box.halfL+2.2;O<x&&(x=Math.max(.1,O),v=0)}}u.bumped>0&&(u.bumped-=t,M=0);let S=u.type==="bus"?1.1:1.6,T=2.4,_=2.2,w=1.25,R=u.speed,L=S*(1-Math.pow(Math.max(0,R)/Math.max(.1,M),4));if(x<1e8){let U=_+R*w+R*(R-v)/(2*Math.sqrt(S*T));L-=S*Math.pow(Math.max(0,U)/Math.max(.3,x),2)}L=Math.max(-9,L),u.speed=Math.max(0,R+L*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let N=0;for(;N++<8;){let[U,B]=this.segEnds(u),F=Math.hypot(i.nx[B]-i.nx[U],i.nz[B]-i.nz[U]);if(u.s<F)break;u.s-=F;let W=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=W.wi,u.k=W.k,u.dir=W.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,i=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=i&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,i=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,m=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>m)continue;let g=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(g+=Math.PI);let p=a(r[l]+7,r[l+1]+13),y=p<.7||h<2.35?"car":p<.9?"wagon":f>=5?"van":"wagon",M=Lh[y],x=Math.sin(g),v=Math.cos(g),b=[i.addCircle(t,c+x*1.1,u+v*1.1,M.halfW-.08),i.addCircle(t,c-x*1.1,u-v*1.1,M.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:g,type:y,box:M,colour:Math.floor(a(r[l]+3,r[l+1]+5)*Hd),taken:!1,objs:b})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let i of this.parkSpots.values())for(let r of i){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}yi.x=0,yi.y=1,yi.z=0;for(let i of Object.keys(n)){let r=n[i].sort((a,l)=>a._d-l._d),o=this.parkPools[i];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],vi,vi,0,0,-100)}}}nearestParked(t,e,n){let i=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,i=a)}return i}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,i=null){let r=null,o=(a,l)=>{if(a===i)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let m=-d;m<=d;m++){let g=f*m/d,p=a.x+c*g,y=a.z+u*g,M=t-p,x=e-y,v=Math.hypot(M,x);v<n+h&&(!r||n+h-v>r.depth)&&(r={nx:v>1e-6?M/v:1,nz:v>1e-6?x/v:0,depth:n+h-v,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var Fh=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,i=this.v,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},Na=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,i=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===Vt.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&zt.PRIVATE&&(h=6),l.cls===Vt.SERVICE&&(h=l.flags&zt.AISLE?5:1.8),l.cls===Vt.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],m=l.nodes[f+1];if(e.ntag[d]===Jt.GATE||e.ntag[m]===Jt.GATE)continue;let p=(l.cum[f+1]-l.cum[f])/u*h;i.push(d,m,p,c,f),l.oneway||i.push(m,d,p,c,f)}});let r=i.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[i[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[i[l*5]]++;this.eTo[c]=i[l*5+1],this.eCost[c]=i[l*5+2],this.eWay[c]=i[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,i,r){let o=this.R,a=F=>F.drivable&&F.cls!==Vt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(i,r,400,a);if(!l||!c)return null;let u=++this.run,h=new Fh,f=Math.sin(n),d=Math.cos(n),m=o.ways[l.wi],g=m.nodes[l.k],p=m.nodes[l.k+1],y=m.cum[l.k+1]-m.cum[l.k],M=Math.max(10,m.limit)/3.6,x=l.dx*f+l.dz*d,v=(F,W)=>{this.stamp[F]!==u&&(this.stamp[F]=u,this.dist[F]=1e18,this.closed[F]=0),W<this.dist[F]&&(this.dist[F]=W,this.prev[F]=-1,this.prevWay[F]=l.wi,h.push(W+this.h(F,i,r),F))},b=25;v(p,(1-l.t)*y/M+(x<0?b:0)),m.oneway||v(g,l.t*y/M+(x>0?b:0));let E=o.ways[c.wi],S=E.nodes[c.k],T=E.nodes[c.k+1],_=new Set([S,T]),w=-1,R=0;for(;h.size;){let F=h.pop();if(this.closed[F])continue;if(this.closed[F]=1,_.has(F)){w=F;break}if(++R>4e5)break;let W=this.dist[F];for(let O=this.eStart[F];O<this.eStart[F+1];O++){let X=this.eTo[O];this.stamp[X]!==u&&(this.stamp[X]=u,this.dist[X]=1e18,this.closed[X]=0);let Z=W+this.eCost[O];Z<this.dist[X]&&(this.dist[X]=Z,this.prev[X]=F,this.prevWay[X]=this.eWay[O],h.push(Z+this.h(X,i,r),X))}}if(w<0)return null;let L=[],N=[];for(let F=w;F>=0;F=this.prev[F])L.push(F),N.push(this.prevWay[F]);L.reverse(),N.reverse();let U=[[l.px,l.pz]];for(let F of L)U.push([o.nx[F],o.nz[F]]);U.push([c.px,c.pz]);let B={pts:U,nodes:L,ways:N,dest:[c.px,c.pz],destRaw:[i,r],time:this.dist[w]};B.cum=[0];for(let F=1;F<U.length;F++)B.cum.push(B.cum[F-1]+Math.hypot(U[F][0]-U[F-1][0],U[F][1]-U[F-1][1]));return B.length=B.cum[B.cum.length-1],B.steps=this.instructions(B),B}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:i,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<i.length-1;){let u=i[c],h=r[c],f=r[c+1],d=e.ways[h].flags&zt.ROUNDABOUT,m=e.ways[f].flags&zt.ROUNDABOUT,g=o[c],p=o[c+1],y=o[c+2];if(!d&&m){let R=0,L=c+1;for(;L<i.length-1&&e.ways[r[L+1]].flags&zt.ROUNDABOUT;)this.hasExit(i[L],r[L])&&R++,L++;R++;let N=L+1<r.length?l(r[L+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:R,name:N,text:`Alla rotatoria prendi la ${R}\xAA uscita`+(N?` verso ${N}`:"")}),c=L+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let M=Math.atan2(p[0]-g[0],p[1]-g[1]),v=Math.atan2(y[0]-p[0],y[1]-p[1])-M;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let b=v*180/Math.PI,E=l(h),S=l(f),T=S!==E;if(Math.abs(b)<25&&!T){c++;continue}if(Math.abs(b)<25&&T&&!this.realChoice(u,h)){c++;continue}let _,w;Math.abs(b)<25?(_="straight",w="Prosegui dritto"):b>=25&&b<55?(_="slight-left",w="Tieni la sinistra"):b>=55&&b<150?(_="left",w="Svolta a sinistra"):b<=-25&&b>-55?(_="slight-right",w="Tieni la destra"):b<=-55&&b>-150?(_="right",w="Svolta a destra"):(_="uturn",w="Fai inversione a U"),S&&(w+=(_==="straight"?" su ":" in ")+S),n.push({i:c,d:a[c+1],type:_,name:S,text:w}),c++}return n.push({i:i.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let i=n.adjStart[t];i<n.adjStart[t+1];i++){let r=n.ways[n.adjWay[i]];if(!(r.flags&zt.ROUNDABOUT)&&r.drivable&&r.cls<Vt.SERVICE+1){let o=n.adjPos[i];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,i=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=Vt.LIVING&&i++;return i>=2}};function Gd(s,t,e){let{pts:n,cum:i}=s,r=1e9,o=0,a=0,l=Math.max(0,(s._lastI||0)-30),c=Math.min(n.length-1,(s._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,m=n[u+1][1]-f,g=d*d+m*m||1e-9,p=((t-h)*d+(e-f)*m)/g;p=Math.max(0,Math.min(1,p));let y=Math.hypot(t-h-d*p,e-f-m*p);y<r&&(r=y,o=i[u]+Math.sqrt(g)*p,a=u)}return s._lastI=a,{off:r,s:o,i:a}}var dv=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],pv=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],mv={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},za=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,i)=>{n.cls<=Vt.TERTIARY&&n.drivable&&this.major.push(i)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let i=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let u=0;u<o.length;u++){let h=(u+1)%o.length,f=o[u][0]*o[h][1]-o[h][0]*o[u][1];a+=f,l+=(o[u][0]+o[h][0])*f,c+=(o[u][1]+o[h][1])*f}Math.abs(a)>r&&(r=Math.abs(a),i=[l/(3*a),c/(3*a)])}return{...n,label:i}}),this.night=!1}drawMini(t,e,n){let i=this.mini,r=this.miniCtx,o=i.width,a=i.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,i,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>i+3e3||Math.abs(a[0][1]-n)>i+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,i,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,i,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=Vt.SERVICE||c[d.cls].push(h*16384+f)});let u=o?pv:dv;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let m=[12,11,9,8,7,6,6,5,4,3,5][f],g=Math.max(a?1:1.6,m*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(g+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=g/r),!(h===0&&f>=Vt.SERVICE)){t.beginPath();for(let p of d){let y=Math.floor((p+1)/16384),M=p-y*16384,x=l.ways[y];if(M<0)for(let v=0;v<x.nodes.length;v++){let b=x.nodes[v];v?t.lineTo(l.nx[b],l.nz[b]):t.moveTo(l.nx[b],l.nz[b])}else{let v=x.nodes[M],b=x.nodes[M+1];t.moveTo(l.nx[v],l.nz[v]),t.lineTo(l.nx[b],l.nz[b])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,i){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);i?t.moveTo(i.x,i.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let i=this.big,r=this.bigCtx,o=i.width,a=i.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((m,g)=>g?r.lineTo(m[0],m[1]):r.moveTo(m[0],m[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.R.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(mv[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,m]=this.toScreen(h.label[0],h.label[1]);d<-100||m<-50||d>o+100||m>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,m),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,m))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var Fa=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(i=>{let r=e.createOscillator();return r.type="square",r.frequency.value=i,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,i){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+i*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+i*1500,r,.1)}};function Oa(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var Fr=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],Ba=(s,t,e)=>s<t?t:s>e?e:s;function Oh({facing:s,scale:t,x:e,z:n,travelX:i,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=Ba((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),m=1.1+4.9*h,g=(.6+1.6*h)*(.4+u()*.6),p=2.2+5*h,y=-r,M=i,x={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:i*d+o*g,vz:r*d+a*g,vy:m,qx:0,qy:Math.sin(s/2),qz:0,qw:Math.cos(s/2),wx:y*p,wy:(u()-.5)*(1.5+5*h),wz:M*p,col:new Float64Array(9),pose:c?{...c}:Oa(),vel:Oa(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:s,lieSign:u()<.5?1:-1,done:!1,rand:u};ka(x);let v=5+13*h;for(let[b]of Fr)x.vel[b]=(u()-.5)*v;return x}function ka(s){let{qx:t,qy:e,qz:n,qw:i}=s,r=s.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}var Bh=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function kh(s,t){if(s.t+=t,s.phase==="rise"){yv(s,t);return}s.vy-=11.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t;let{wx:e,wy:n,wz:i,qx:r,qy:o,qz:a,qw:l}=s,c=t*.5,u=r+c*(e*l+n*a-i*o),h=o+c*(n*l+i*r-e*a),f=a+c*(i*l+e*o-n*r),d=l-c*(e*r+n*o+i*a),m=1/(Math.hypot(u,h,f,d)||1);s.qx=u*m,s.qy=h*m,s.qz=f*m,s.qw=d*m,ka(s);let g=s.col,p=!1;for(let x=0;x<Bh.length;x++){let v=Bh[x][0]*s.scale,b=g[3]*v,E=g[4]*v,S=g[5]*v,T=Bh[x][1]*s.scale-(s.y+E);if(T<=0)continue;p=!0,s.y+=T*.55;let _=s.vx+(s.wy*S-s.wz*E),w=s.vy+(s.wz*b-s.wx*S),R=s.vz+(s.wx*E-s.wy*b);if(w>=0)continue;let L=(b*b+S*S)/.16,N=-(1+.17)*w/(1+L);s.vy+=N,s.wx+=-S*N/.16,s.wz+=b*N/.16;let U=Math.hypot(_,R);if(U>1e-4){let B=Math.min(.55*N,U),F=-_/U*B,W=-R/U*B;s.vx+=F,s.vz+=W,s.wy+=(S*F-b*W)/.16*.5}if(N>.9&&s.bumps++,N>.6){let B=Math.min(9,N*2.4);for(let[F]of Fr)s.vel[F]+=(s.rand()-.5)*B}}if(p){s.grounded+=t;let x=Math.exp(-3.2*t);s.wx*=x,s.wy*=x,s.wz*=x,s.vx*=Math.exp(-1.9*t),s.vz*=Math.exp(-1.9*t)}else s.airborne+=t,s.grounded=0;xv(s,t);let y=Math.hypot(s.wx,s.wy,s.wz),M=Math.hypot(s.vx,s.vy,s.vz);if(s.phase==="air"&&p&&s.grounded>.12&&y<1.1&&M<.7){s.phase="down",s.settleFor=0;let x=g[6],v=g[8];x*x+v*v<.04&&(x=g[3],v=g[5]),s.yawOut=Math.atan2(x,v)}if(s.phase==="down"){if(s.settleFor+=t,s.settleFor<.45){let x=Math.min(1,t*7);gv(s,x),ka(s)}s.vx*=Math.exp(-5*t),s.vz*=Math.exp(-5*t),s.wx*=Math.exp(-6*t),s.wy*=Math.exp(-6*t),s.wz*=Math.exp(-6*t),s.settleFor>s.restFor+.45&&(s.phase="rise",s.riseT=0,s.riseFrom={qx:s.qx,qy:s.qy,qz:s.qz,qw:s.qw,y:s.y,pose:{...s.pose}})}}function gv(s,t){let e=s.yawOut/2,n=Math.sin(e),i=Math.cos(e),r=s.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=i*r,l=n*o,c=-n*r,u=i*o,h=s.qx*a+s.qy*l+s.qz*c+s.qw*u,f=a,d=l,m=c,g=u;h<0&&(f=-f,d=-d,m=-m,g=-g),s.qx+=(f-s.qx)*t,s.qy+=(d-s.qy)*t,s.qz+=(m-s.qz)*t,s.qw+=(g-s.qw)*t;let p=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=p,s.qy*=p,s.qz*=p,s.qw*=p}function xv(s,t){let e=s.col,n=-e[1],i=-e[4],r=-e[7],o=Math.asin(Ba(n,-1,1)),a=Math.atan2(-r,-i),l=s.pose,c=s.vel,u=s.phase==="down"?1:0;for(let h=0;h<Fr.length;h++){let f=Fr[h],d=f[0],m=f[1],g=f[2],p=f[6],y=f[3]*(1+u*.6),M=f[4]*(1+u*1.4),x=f[5],v=x==="swing"?Ba(a+p,m,g):x==="lean"?Ba(o+p,m,g):x==="slack"?p:0,b=c[d]+(y*(v-l[d])-M*c[d])*t,E=l[d]+b*t;E<m?(E=m,b*=-.18):E>g&&(E=g,b*=-.18),c[d]=b,l[d]=E}}function yv(s,t){s.riseT+=t;let e=Math.min(1,s.riseT/s.riseFor),n=s.riseFrom,i=e*e*(3-2*e),r=s.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;s.qx=n.qx+(h*o-n.qx)*i,s.qy=n.qy+(h*a-n.qy)*i,s.qz=n.qz+(h*l-n.qz)*i,s.qw=n.qw+(h*c-n.qw)*i;let f=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=f,s.qy*=f,s.qz*=f,s.qw*=f,ka(s);let d=.46*s.hipRest;s.y=e<.5?n.y+(d-n.y)*Vd(e/.5):d+(s.hipRest-d)*Vd((e-.5)/.5);let m=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[g]of Fr){let p=n.pose[g],y=0;g==="kneeL"||g==="kneeR"?y=m:g==="hipLs"||g==="hipRs"?y=-m*.75:g==="spine"?y=-.35*(1-i):g==="shLz"?y=.18:g==="shRz"&&(y=-.18),s.pose[g]=p+(y-p)*i,s.vel[g]=0}e>=1&&(s.done=!0)}var Vd=s=>s*s*(3-2*s);var vv=[12999502,5144518,5873770,13018190,9068230,5155270],Mv=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],_v=.34,Wd=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function Xd(s){return(.2126*(s>>16&255)+.7152*(s>>8&255)+.0722*(s&255))/255}var bv=.15,wv=[15782580,15254430,14132856,12091218,9263675,6307884],Ev=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],Sv=[9187114,2903932,1907999,4156229,11576460,7166860],qd=[1710620,2565160,3813160,4539722],Tv=[3881528,5916214,3095882,7037527,8011578],Av=.34,Rv=1.75;var Fs=.43,Bs=.42,Hh=.058,Cv=.085,Iv=.092,Yd=.372,Pv=.44,Lv=.196,Gh=.3,Vh=.265,u_=Fs+Bs+Hh;function Dv(s){let t=s()<.5,e=t?1.58+s()*.16:1.7+s()*.18;return{female:t,scale:e/Rv,shoulder:t?.88+s()*.07:1+s()*.11,depth:.92+s()*.26,hipW:t?1.04+s()*.1:.94+s()*.08,limb:(t?.9:1)+s()*.14}}function Uv(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Rn(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of s){n.set(c.attributes.position.array,o*3),i.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new te;return l.setAttribute("position",new he(n,3)),l.setAttribute("normal",new he(i,3)),l.setIndex(new he(r,1)),l.computeVertexNormals(),l}function Ha(s,t,e,n=6){let i=new Qt(s,t,e,n,1,!1);return i.translate(0,-e/2,0),i}function Ga(s,t=6,e=4){return new dn(s,t,e)}function Br(s,t,e){return new Ut(s,t,e)}function Nv(){let s=Ga(.1,9,6);s.scale(.84,1.13,1.16),s.translate(0,.176,.008);let t=Br(.102,.072,.112);t.translate(0,.12,.04);let e=new Qt(.05,.058,.09,6);e.translate(0,.045,-.008);let n=Br(.024,.028,.034);n.translate(0,.158,.122);let i=Rn([e,t,s,n]),r=new dn(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=Rn([r]),a=Br(.175,.22,.062);a.translate(0,.005,-.062);let l=Rn([a]),c=T=>{let _=new ta(T.map(([w,R])=>new Mt(w,R)),8);return _.scale(1,1,.66),_},u=Rn([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=Rn([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=Rn([Ga(.049),Ha(.047,.04,Gh)]),m=Ha(.037,.031,Vh+f);m.translate(0,f,0);let g=Ga(.044,5,4);g.scale(.85,1.25,.62),g.translate(0,-Vh-.035,0);let p=Rn([m,g]),y=Rn([Ga(.086),Ha(.082,.06,Fs)]),M=Ha(.057,.043,Bs+.06);M.translate(0,.06,0);let x=Rn([M]),v=Br(.088,.055,.235);v.translate(0,-.03,.052);let b=Rn([v]),E=Br(.24,.28,.13);E.translate(0,-.15,0);let S=Rn([E]);return{head:i,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:p,thigh:y,shin:x,foot:b,bag:S}}function zv(s,t,e,n,i,r,o){let a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,m=0,g=-l,p=l*u,y=c,M=a*u,x=l*c,v=-u,b=a*c;s[0]=d*h+p*f,s[1]=m*h+y*f,s[2]=g*h+M*f,s[3]=-d*f+p*h,s[4]=-m*f+y*h,s[5]=-g*f+M*h,s[6]=x,s[7]=v,s[8]=b,s[9]=t,s[10]=e,s[11]=n}function Fv(s,t,e,n,i){s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=e,s[10]=n,s[11]=i}function zs(s,t,e,n,i,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],m=t[6],g=t[7],p=t[8];s[9]=t[9]+l*e+h*n+m*i,s[10]=t[10]+c*e+f*n+g*i,s[11]=t[11]+u*e+d*n+p*i;let y=Math.cos(a),M=Math.sin(a),x=Math.cos(r),v=Math.sin(r),b=Math.cos(o),E=Math.sin(o),S=y,T=-M,_=M*v,w=x,R=y*v,L=S*b+_*E,N=w*E,U=T*b+R*E,B=-S*E+_*b,F=w*b,W=-T*E+R*b,O=M*x,X=-v,Z=y*x;s[0]=l*L+h*N+m*U,s[1]=c*L+f*N+g*U,s[2]=u*L+d*N+p*U,s[3]=l*B+h*F+m*W,s[4]=c*B+f*F+g*W,s[5]=u*B+d*F+p*W,s[6]=l*O+h*X+m*Z,s[7]=c*O+f*X+g*Z,s[8]=u*O+d*X+p*Z}function Hi(s,t,e,n){let i=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];s[9]=t[9]+a*e,s[10]=t[10]+l*e,s[11]=t[11]+c*e;let d=Math.cos(n),m=Math.sin(n);s[0]=i,s[1]=r,s[2]=o,s[3]=a*d+u*m,s[4]=l*d+h*m,s[5]=c*d+f*m,s[6]=-a*m+u*d,s[7]=-l*m+h*d,s[8]=-c*m+f*d}function qe(s,t,e,n,i,r){let o=s.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*i,o[a+5]=e[4]*i,o[a+6]=e[5]*i,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function Va(s,t){let e=s.instanceMatrix.array,n=t*16;for(let i=0;i<16;i++)e[n+i]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var Zd=(s,t,e)=>s<t?t:s>e?e:s;function $d(s,t=20260919){let e=Uv(t),n=Nv(),i=new Ft,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let x of o)r[x]=new Se(n[a[x]],i,s);let l=o.map(x=>r[x]),c=new $t;for(let x of l)x.instanceMatrix.setUsage(Ff),x.frustumCulled=!1,c.add(x);for(let x of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])x.castShadow=!0;let u=new Ct,h=x=>x[e()*x.length|0],f=[];for(let x=0;x<s;x++){let v=Dv(e),b={phase:e()*Math.PI*2,build:v,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<Av,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:Oa(),rag:null};f.push(b);let E=e()<_v,S=h(E?vv:Mv),T=h(Wd);for(let U=0;U<10&&Math.abs(Xd(T)-Xd(S))<bv;U++)T=h(Wd);let _=h(wv),w=e()<.1,R=e()<.14;b.longHair=!w&&!R&&e()<.34,b.bald=w,b.hatted=R;let L=e()<.45?S:_;r.chest.setColorAt(x,u.setHex(S)),r.armL.setColorAt(x,u.setHex(S)),r.armR.setColorAt(x,u.setHex(S)),r.foreL.setColorAt(x,u.setHex(L)),r.foreR.setColorAt(x,u.setHex(L)),r.head.setColorAt(x,u.setHex(_)),r.pelvis.setColorAt(x,u.setHex(T)),r.thighL.setColorAt(x,u.setHex(T)),r.thighR.setColorAt(x,u.setHex(T)),r.shinL.setColorAt(x,u.setHex(T)),r.shinR.setColorAt(x,u.setHex(T)),r.footL.setColorAt(x,u.setHex(h(qd))),r.footR.setColorAt(x,u.setHex(h(qd)));let N=h(R?Sv:Ev);r.hair.setColorAt(x,u.setHex(N)),r.hairLong.setColorAt(x,u.setHex(N)),r.bag.setColorAt(x,u.setHex(h(Tv)))}for(let x of l)x.instanceColor&&(x.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function m(x){return .2+.26*Math.min(1.7,x.gait)}function g(x,v,b){let E=x.phase,S=Math.sin(E),T=Math.cos(E),_=m(x)*(x.idle>0?0:1),w=Math.max(0,x.gait-1),R=_*S,L=-_*S;v.hipLs=R,v.hipRs=L,v.kneeL=p(E,_,w),v.kneeR=p(E+Math.PI,_,w);let N=.62,U=.38,B=-(R+v.kneeL),F=-(L+v.kneeR);v.ankL=Zd(B+N*Math.max(0,S)**1.4-U*Math.max(0,-S)**1.6,-1.05,.4),v.ankR=Zd(F+N*Math.max(0,-S)**1.4-U*Math.max(0,S)**1.6,-1.05,.4),v.hipLz=.02,v.hipRz=-.02;let W=-R*.62*x.swagger*(1+w*.5);v.shLs=W,v.shRs=-W;let O=.11+(x.build.shoulder-.95)*.35+w*.06;v.shLz=O,v.shRz=-O,v.elbL=.34+2.05*Math.max(0,-W)-.18*Math.max(0,W)+w*.55,v.elbR=.34+2.05*Math.max(0,W)-.18*Math.max(0,-W)+w*.55,x.bag&&(x.bagSide>0?(v.shLs*=.25,v.elbL=.32,v.shLz=O*1.5):(v.shRs*=.25,v.elbR=.32,v.shRz=-O*1.5)),v.twist=-.26*S*(1+w*.4),v.spine=-.02+.03*Math.abs(T)+Math.sin(b*1.6+x.phase*.1)*.012,v.spineZ=.035*T,v.headZ=-v.spineZ*.8,v.neck=.13-v.spine*.5}function p(x,v,b){let E=Math.max(0,-Math.cos(x)),S=Math.max(0,Math.sin(x));return .08+(2.1+b*1.4)*v*E**1.15+(.75+b)*v*S**2}function y(x,v){let b=.062*Math.max(0,-x.ankL),E=.062*Math.max(0,-x.ankR),S=Fs*Math.cos(x.hipLs)+Bs*Math.cos(x.hipLs+x.kneeL)+Hh+b,T=Fs*Math.cos(x.hipRs)+Bs*Math.cos(x.hipRs+x.kneeR)+Hh+E;return Math.max(S,T)*v}function M(x,v,b){let E=v.build,S=E.scale,T=E.limb*S,_=d.root;zs(d.chest,_,0,Iv*S,0,b.spine,b.spineZ,b.twist),zs(d.head,d.chest,0,Pv*S,0,b.neck,b.headZ,b.headYaw);let w=Lv*E.shoulder*S;zs(d.armL,d.chest,w,Yd*S,0,b.shLs,b.shLz,0),zs(d.armR,d.chest,-w,Yd*S,0,b.shRs,b.shRz,0),Hi(d.foreL,d.armL,-Gh*S,-b.elbL),Hi(d.foreR,d.armR,-Gh*S,-b.elbR);let R=Cv*E.hipW*S;if(zs(d.thighL,_,R,0,0,b.hipLs,b.hipLz,0),zs(d.thighR,_,-R,0,0,b.hipRs,b.hipRz,0),Hi(d.shinL,d.thighL,-Fs*S,b.kneeL),Hi(d.shinR,d.thighR,-Fs*S,b.kneeR),Hi(d.footL,d.shinL,-Bs*S,b.ankL),Hi(d.footR,d.shinR,-Bs*S,b.ankR),qe(r.pelvis,x,_,S*E.hipW,S,S*E.depth),qe(r.chest,x,d.chest,S*E.shoulder,S,S*E.depth),qe(r.head,x,d.head,S,S,S),v.bald?Va(r.hair,x):qe(r.hair,x,d.head,S*(v.hatted?1.1:1),S*(v.hatted?1.12:1),S*(v.hatted?1.1:1)),v.longHair?qe(r.hairLong,x,d.head,S,S,S):Va(r.hairLong,x),qe(r.armL,x,d.armL,T,S,T),qe(r.armR,x,d.armR,T,S,T),qe(r.foreL,x,d.foreL,T,S,T),qe(r.foreR,x,d.foreR,T,S,T),qe(r.thighL,x,d.thighL,T,S,T),qe(r.thighR,x,d.thighR,T,S,T),qe(r.shinL,x,d.shinL,T,S,T),qe(r.shinR,x,d.shinR,T,S,T),qe(r.footL,x,d.footL,T,S,T),qe(r.footR,x,d.footR,T,S,T),v.bag){let L=v.bagSide>0?d.foreL:d.foreR,N=v.bagSide>0?b.elbL:b.elbR;Hi(d.bag,L,-(Vh+.05)*S,N*.5),qe(r.bag,x,d.bag,S,S,S)}else Va(r.bag,x)}return{group:c,people:f,rand:e,count:s,drawWalking(x,v,b,E,S,T){let _=f[x],w=_.build.scale;g(_,_.pose,T),zv(d.root,v,b+y(_.pose,w),E,S+.12*Math.sin(_.phase)*(_.idle>0?0:1),_.lean+.12*Math.max(0,_.gait-1),.022*Math.cos(_.phase)),M(x,_,_.pose)},drawRagdoll(x,v,b){Fv(d.root,v.col,v.x,b+v.y,v.z),M(x,f[x],v.pose)},hideAt(x){for(let v of l)Va(v,x)},commit(){for(let x of l)x.instanceMatrix.needsUpdate=!0}}}var Os=90,Wh=s=>s.cls>=Vt.PRIMARY&&!(s.flags&(zt.LINK|zt.TUNNEL|zt.PRIVATE))&&s.cls!==Vt.TRACK,Wa=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=$d(Os),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<Os;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=Os-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(Os,t)}latTarget(t,e){return t.flags&zt.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let i=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=i.nearest(c,u,45,Wh);if(!h)continue;let f=i.ways[h.wi];if(f.cls<=Vt.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let i=this.R,r=i.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=i.nx[o],c=i.nz[o],u=i.nx[a],h=i.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,m=(h-c)/f,g=t.dir>0?t.s:f-t.s,p=l+d*g-m*t.lat,y=c+m*g+d*t.lat,M=n?1:Math.min(1,e*5),x=t.x,v=t.z;t.x+=(p-t.x)*M,t.z+=(y-t.z)*M;let b=t.x-x,E=t.z-v;if(n)t.h=Math.atan2(d*t.dir,m*t.dir);else if(b*b+E*E>1e-7){let _=Math.atan2(b,E)-t.h;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;t.h+=_*Math.min(1,e*8)}let S=Math.abs(t.lat)<r.width/2+.2;t.onRoad=S&&!(r.flags&zt.NOCAR);let T=Math.min(1,Math.max(0,g/f));t.y=S?i.heightOn(t.wi,t.k,T,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===Jt.CROSSING||e.ntag[r]===Jt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&zt.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]),l=[];for(let M=e.adjStart[r];M<e.adjStart[r+1];M++){let x=e.adjWay[M],v=e.adjPos[M],b=e.ways[x];if(!(!Wh(b)||b.cls<=Vt.SECONDARY&&b.limit>50))for(let[E,S,T]of[[v,1,b.nodes[v+1]],[v-1,-1,b.nodes[v-1]]]){if(T===void 0||x===t.wi&&E===t.k)continue;let _=Math.atan2(e.nx[T]-e.nx[r],e.nz[T]-e.nz[r])-a;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;l.push({wi:x,k:E,dir:S,wgt:(Math.abs(_)<.5?3:Math.abs(_)>2.6?.1:1)*(b.flags&zt.NOCAR?2.5:1)*(b.cls>=Vt.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((M,x)=>M+x.wgt,0),u=l[l.length-1];for(let M of l)if(c-=M.wgt,c<=0){u=M;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],m=e.nx[d]-e.nx[f],g=e.nz[d]-e.nz[f],p=Math.hypot(m,g)||1,y=((t.x-e.nx[f])*-g+(t.z-e.nz[f])*m)/p;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=y>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,y))}update(t,e,n,i,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<Os;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<Os;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){kh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let b=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,b),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,m=null;for(let b of i){let E=h.x-b.x,S=h.z-b.z,T=E*E+S*S;if(T>900)continue;let _=Math.hypot(b.vx,b.vz),w=Math.sin(b.h),R=Math.cos(b.h),L=E*w+S*R,N=E*R-S*w;if(Math.abs(L)<b.halfL+.25&&Math.abs(N)<b.halfW+.25)_>1.6?m=b:(h.x+=(N>=0?R:-R)*.05,h.z+=(N>=0?-w:w)*.05);else if(_>2.5){let U=b.vx/_,B=b.vz/_,F=E*U+S*B,W=Math.abs(E*B-S*U);F>0&&F<4+_*1.4&&W<b.halfW+1.3&&(d=!0,h.fleeSide=E*B-S*U>=0?1:-1,h.fdx=B*h.fleeSide,h.fdz=-U*h.fleeSide)}if(r&&b.player&&T<400){let U=Math.max(_,1);(E*(b.vx||w)+S*(b.vz||R))/U>-2&&(d=!0,h.fdx=N>=0?R:-R,h.fdz=N>=0?-w:w)}}if(m){let b=Math.hypot(m.vx,m.vz),E=m.vx/b,S=m.vz/b,T=h.x-m.x,_=h.z-m.z,w=Math.hypot(T,_)||1;h.rag=Oh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:E,travelZ:S,awayX:T/w,awayZ:_/w,speed:b,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,b,m),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let g=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let b=this.world.collision.resolveCircle(h.x,h.z,.3);b&&(h.x+=b.nx*b.depth,h.z+=b.nz*b.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let p=this.latTarget(f,h.side);if(h.wait>0){let b=!1;for(let E of i){let S=Math.hypot(E.vx,E.vz);if(S<1.5)continue;let T=h.x-E.x,_=h.z-E.z,w=Math.hypot(T,_);w<12+S*3&&(T*E.vx+_*E.vz)/(w*S)>.5&&(b=!0)}h.wait+=t,!b||h.wait>9?h.wait=0:g=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,p-h.lat)));let y=Math.abs(p-h.lat)>.3,M=y?g*.25:g;h.gait+=((g>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=M*t;let x=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(M,y&&g>0?1.2:0)/Math.max(.25,x);let v=0;for(;v++<6;){let[b,E]=this.ends(h),S=Math.hypot(o.nx[E]-o.nx[b],o.nz[E]-o.nz[b]);if(h.s<S)break;h.s-=S,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,i,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,i,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,Wh);if(!n){t.alive=!1;return}let i=e.ways[n.wi],r=i.cum[n.k+1]-i.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(i=>i.alive&&!i.rag&&Math.hypot(i.x-t,i.z-e)<n)}};var Xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Bv=new Es(-1,1,1,-1,0,1),Xh=class extends te{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},Ov=new Xh,Mi=class{constructor(t){this._mesh=new St(Ov,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Bv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var qa=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ya=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Za=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qa(Xa),this.copyPass.material.blending=Dn,this.clock=new aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(o instanceof Or?n=!0:o instanceof Ya&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $a=class extends ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Kd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ks=class s extends ln{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,o,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new $e(r,o,{type:Sn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new $e(r,o,{type:Sn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Kd;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Xa;this.copyUniforms=gi.clone(u.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Ue,this.fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ks.BlurDirectionX=new Mt(1,0);ks.BlurDirectionY=new Mt(0,1);var Jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ka=class extends ln{constructor(){super();let t=Jd;this.uniforms=gi.clone(t.uniforms),this.material=new ea({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bt=s=>document.getElementById(s),Bn={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132,farKm:0},mid:{viewTiles:2,shadows:!0,softShadows:!1,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288,farKm:5,detailKm:1.5},high:{viewTiles:3,shadows:!0,softShadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432,farKm:7,detailKm:2.2}},A={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},Gr=()=>A.foot.on?A.foot:A.vehicle;window.BDS=A;new URLSearchParams(location.search).get("auto")==="0"&&(A.autoOff=!0);var Gi={stage:"",t0:performance.now(),timer:0};function jd(){let s=Math.round((performance.now()-Gi.t0)/1e3),t="";s>=25&&(t=" \u2014 sui computer meno potenti pu\xF2 servire fino a un minuto; chiudi le altre schede del browser"),bt("loadmsg").textContent=Gi.stage+(s>=3?` (${s} s)`:"")+t}function sp(s){clearInterval(Gi.timer),console.error(s);let t=navigator.userAgent.match(/(Edg|Chrome|Firefox|Safari)\/[\d.]+/);bt("loadmsg").textContent=`Errore durante "${Gi.stage}": ${s&&s.message?s.message:s} \u2014 browser: ${t?t[0]:navigator.userAgent}. Usa Chrome, Edge o Firefox aggiornati su computer.`,bt("loadmsg").style.color="#ff8a7a"}addEventListener("error",s=>{(!A.meta||!A.router)&&sp(s.error||s.message)});async function kv(){let s=()=>new Promise(c=>setTimeout(c,30)),t=(c,u)=>{bt("loadbar").style.width=(c*100).toFixed(0)+"%",u&&(Gi.stage=u,jd())};Gi.timer=setInterval(jd,1e3),t(.03,"Caricamento della cartografia reale");let e=0,n=[["meta","data/meta.js"],["roads","data/roads.js"],["height","data/height.js"],["landcover","data/landcover.js"]],i=await Promise.all(n.map(([c,u])=>Sr(c,u).then(h=>(e++,t(.03+e/4*.42,`Caricamento della cartografia reale: ${e} di 4 file`),h)))),[r,o,a,l]=i;A.meta=r,A.proj=new ma(r.proj),t(.5,"Altimetria e colori del terreno"),await s(),A.terrain=new ga(r,a,l),t(.62,`Costruzione della rete stradale (${o.ways.length.toLocaleString("it")} vie OSM)`),await s(),A.roads=new _a(o,A.terrain,r),t(.9,"Preparazione del navigatore"),await s(),A.router=new Na(A.roads),t(1,"Pronto"),clearInterval(Gi.timer),bt("loading").classList.add("hidden"),jh()}function Hv(s,t){let e=A.roads,n=e.streets.get(s)||[],i=null;for(let r of n){let o=A.world.comuneAt(r.x,r.z);t&&o!==t||(!i||r.len>i.len)&&(i=r)}return i}var ja={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function Gv(){let s=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(s.get("lat")||t.lat||0),n=+(s.get("lon")||t.lon||0);return e&&n?(A.pickedStart=A.proj.fromLatLon(e,n),"picked"):null}function Vv(){let s=A.meta,t=[];t.push({id:"casa",label:ja.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of s.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=s.comuni.map(n=>n.n).filter(n=>!s.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function jh(){if(bt("menu").classList.remove("hidden"),A.meta.dbgt&&A.meta.dbgt.length&&!bt("dbgtcredit")){let n=document.createElement("div");n.id="dbgtcredit",n.textContent=`Forme e altezze degli edifici${A.meta.height.step<20?" e altimetria di dettaglio":""}: DBGT \u2013 Database Geo-Topografico di Regione Lombardia (${A.meta.dbgt.join(", ")}).`,document.querySelector("#menu .credits").appendChild(n)}let t=bt("cars");t.innerHTML="",Ns.forEach((n,i)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(i===A.carIdx?" sel":"");let o=n.kind==="plane"?`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>apertura ${n.W} m</span><span>decollo ~${Math.round(n.vRot*3.6)} km/h</span>`:`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span>`;r.innerHTML=`<div class="sw" style="background:${n.kind==="plane"?n.stripe:n.color}"></div><b>${n.kind==="plane"?"\u2708 ":""}${n.name}</b><small>${n.desc}</small>
      <div class="spec">${o}</div>`,r.onclick=()=>{A.carIdx=i,[...t.children].forEach(a=>a.classList.toggle("sel",a===r))},t.appendChild(r)});let e=bt("start");e.innerHTML="";for(let n of Vv()){let i=document.createElement("option");i.value=n.id,i.textContent=n.label,e.appendChild(i)}if(A.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}bt("go").onclick=()=>$v(),bt("pickstart").onclick=()=>{rp(),lp("start")}}function rp(){if(A.renderer)return;let s=bt("game"),t=Bn[bt("quality").value]||Bn.mid;A.settings={...t};let e=new ko({canvas:s,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=t.softShadows?uh:la,e.toneMapping=Er,e.toneMappingExposure=1.2,A.renderer=e;let n=new Go;A.scene=n,A.camera=new ke(62,innerWidth/innerHeight,.5,5e3),A.sky=new Ra(n,A.meta.proj.lat0),A.world=new Aa(n,A.meta,A.terrain,A.roads,A.settings),A.traffic=new Ua(A.world),A.world.traffic=A.traffic,n.add(A.traffic.group),A.peds=new Wa(A.world),A.peds.setTarget(t.peds),A.peds.onHit=(r,o,a)=>{a.player&&Kh("ped",o)},n.add(A.peds.group),t.bloom&&(A.composer=new Za(e),A.composer.addPass(new $a(n,A.camera)),A.bloom=new ks(new Mt(innerWidth,innerHeight),0,.4,.82),A.composer.addPass(A.bloom),A.composer.addPass(new Ka));let i=null;s.addEventListener("mousedown",r=>{i=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{i=null}),addEventListener("mousemove",r=>{!i||A.mapOpen||A.paused||!A.started||(A.orbit.yaw-=(r.clientX-i[0])*.006,A.orbit.pitch=Math.max(-.25,Math.min(1.1,A.orbit.pitch+(r.clientY-i[1])*.004)),A.orbit.idle=0,i=[r.clientX,r.clientY])}),A.maps=new za(A.world,A.meta),A.input=new Da,A.audio=new Fa,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),A.composer&&A.composer.setSize(innerWidth,innerHeight),A.camera.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.mapOpen&&(A.maps.resizeBig(),A.mapDirty=!0)}),tM(),eM(),requestAnimationFrame(hp)}function tl(s){let t=A.roads,e=A.world,n=(i,r,o=!1)=>{let a=t.ways[i],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let m=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,g=t.laneCenter(a,m?1:-1);return{x:l-Math.cos(d)*g,z:c+Math.sin(d)*g,h:d}};if(s==="picked"&&A.pickedStart){let i=t.nearest(A.pickedStart[0],A.pickedStart[1],300,r=>r.drivable&&r.cls<=Vt.SERVICE);if(i)return n(i.wi,(t.ways[i.wi].cum[i.k]+(t.ways[i.wi].cum[i.k+1]-t.ways[i.wi].cum[i.k])*i.t)/t.ways[i.wi].len)}if(s==="casa"){if(Gv()==="picked")return tl("picked");let i=-1;if(t.ways.forEach((r,o)=>{if(r.name!==ja.street||!r.drivable||r.cls>Vt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===ja.comune&&(i<0||r.len>t.ways[i].len)&&(i=o)}),i>=0)return n(i,ja.frac);s="comune:Giussano"}if(s==="viamilano"){let i=Hv("Via Milano","Giussano");if(i)return n(i.wi,.35,!0);s="comune:Giussano"}if(s.startsWith("comune:")){let i=s.slice(7),r=A.meta.places.find(c=>c.n===i&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=A.maps.comuni.find(u=>u.n===i);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=Vt.RESIDENTIAL&&c.cls>=Vt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function op(s=Ns[A.carIdx],t=null){A.carModel&&A.scene.remove(A.carModel.root),s.kind==="plane"?(A.vehicle=new Pa(s,A.world),A.carModel=zd(s,{color:t})):(A.vehicle=new La(s,A.world),A.carModel=Od(s,{interior:!0,color:t})),A.scene.add(A.carModel.root),A.lightsOn=!1,bt("helpbar").textContent=s.kind==="plane"?"W/S manetta \xB7 \u2191/\u2193 cabra/picchia \xB7 A/D vira \xB7 Spazio freni a terra \xB7 R riparti in volo \xB7 C visuale \xB7 F scendi (a terra)":"F scendi/sali \xB7 E clacson \xB7 M mappa \xB7 C visuale \xB7 mouse: telecamera \xB7 Esc pausa"}function Wv(s){let t=A.input.keys;return{throttle:Math.max(t.has("KeyW")?1:0,s.padThr||0),brake:Math.max(t.has("KeyS")?1:0,s.padBrk||0),pitch:Math.max(-1,Math.min(1,(t.has("ArrowUp")?1:0)-(t.has("ArrowDown")?1:0)-(s.stickY||0))),steer:s.steer,handbrake:s.handbrake}}var On=()=>!A.foot.on&&A.vehicle&&A.vehicle.isPlane&&!A.vehicle.onGround,Qd={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},ap=()=>({halfL:A.vehicle.spec.L/2,halfW:A.vehicle.spec.W/2});function Xv(){let s=A.vehicle,t=A.foot;if(s.isPlane&&!s.onGround){Te("Atterra prima di scendere",1200);return}if(Math.abs(s.u)>2.5){Te("Fermati prima di scendere",1200);return}let e=Math.cos(s.h),n=-Math.sin(s.h);t.x=s.x+e*(s.spec.W/2+.75),t.z=s.z+n*(s.spec.W/2+.75),t.h=s.h,t.u=0,t.y=s.y,t.on=!0,(A.camMode===1||A.camMode===2)&&(A.camMode=0),A.orbit.yaw=0,A.camInit=!0,Te("A piedi \u2014 F per salire su un veicolo",1800)}function qv(){let s=A.foot,t=A.vehicle,e=A.traffic,n=Math.hypot(t.x-s.x,t.z-s.z)-t.spec.W/2,i=e.nearestCar(s.x,s.z,2.6),r=e.nearestParked(s.x,s.z,2.6),o=i?Math.hypot(i.x-s.x,i.z-s.z)-i.box.halfW:1e9,a=r?Math.hypot(r.x-s.x,r.z-s.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){Te("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=A.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:ap(),model:c}),A.carModel=null,e.statics.length>6){let d=e.statics.shift();A.scene.remove(d.model.root)}let u=l===o?e.take(i):e.takeParked(r),h=Qd[u.type]||Qd.car,f=Ns.find(d=>d.id===h[u.colour%h.length]);op(f,"#"+Nh[u.colour%Nh.length].toString(16).padStart(6,"0")),A.vehicle.place(u.x,u.z,u.h),Te(f.name,1500)}s.on=!1,A.orbit.yaw=0,A.camInit=!0}function Yv(s,t){let e=A.foot,n=A.input.keys,i=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*s;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(i?6.2:2.3);e.u+=(o-e.u)*Math.min(1,s*8),e.x+=Math.sin(e.h)*e.u*s,e.z+=Math.cos(e.h)*e.u*s;let a={x:A.vehicle.x,z:A.vehicle.z,h:A.vehicle.h,box:ap()};for(let l=0;l<2;l++){let c=A.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),A.traffic.statics.push(a);let u=A.traffic.resolveCircle(e.x,e.z,.32);A.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=A.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function Kh(s,t,e=s){let n=performance.now();if(A.cool[e]&&n-A.cool[e]<(s==="camera"?2e4:5e3))return;A.cool[e]=n;let i=0,r=0,o="";if(s==="ped")i=870,r=8,o="Hai urtato un pedone!";else if(s==="red")i=167,r=6,o="Passaggio con il rosso";else if(s==="camera"){let a=t;a<=10?(i=42,r=0):a<=40?(i=173,r=3):a<=60?(i=543,r=6):(i=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=bt("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}A.fines+=i,A.licence-=r,Te(`\u{1F6A8} ${o} \u2014 multa \u20AC ${i}${r?`, \u2212${r} punti`:""}`,3200),A.licence<=0&&(A.licence=20,setTimeout(()=>Te("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),bt("licence").textContent=`\u{1FAAA} ${A.licence} punti \xB7 multe \u20AC ${A.fines.toLocaleString("it")}`}function Zv(s,t,e){if(A.foot.on||s.isPlane||!s.surface||!s.surface.road)return;let n=A.roads,i=s.surface.road,r=n.ways[i.wi];if(s.u>3)for(let o of[r.nodes[i.k],r.nodes[i.k+1]]){if(n.ntag[o]!==Jt.SIGNALS||Math.hypot(n.nx[o]-s.x,n.nz[o]-s.z)>4.5)continue;let a=Math.sin(s.h),l=Math.cos(s.h);Pr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&Kh("red",0,"red"+o)}if(t>r.limit+5)for(let o of A.world.cameras)Math.hypot(o.x-s.x,o.z-s.z)<16&&Kh("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function $v(){A.audio&&A.audio.start(),rp(),A.settings.viewTiles=(Bn[bt("quality").value]||Bn.mid).viewTiles,A.settings.farKm=(Bn[bt("quality").value]||Bn.mid).farKm,A.settings.detailKm=(Bn[bt("quality").value]||Bn.mid).detailKm,A.settings.farKm>0&&!A.world.farIdx&&!A.farLoading&&(A.farLoading=!0,Sr("far","data/far.js").then(t=>A.world.initFar(t)).catch(()=>{})),A.traffic.target=+bt("traffic").value,bt("ptraffic").value=bt("traffic").value,A.sky.hours=+bt("tod").value,op();let s=tl(bt("start").value);A.vehicle.place(s.x,s.z,s.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.traffic.clear();for(let t of A.traffic.statics)A.scene.remove(t.model.root);A.traffic.statics=[],A.foot.on=!1,A.orbit.yaw=0,A.orbit.pitch=0,A.peds.setTarget((Bn[bt("quality").value]||Bn.mid).peds),A.camInit=!0,bt("menu").classList.add("hidden"),bt("hud").classList.remove("hidden"),A.started=!0,A.paused=!1,A.loadingWorld=!0,Te("Caricamento della zona\u2026",1500),A.audio.start()}function Kv(){let s=A.vehicle,t=A.roads;if(s.isPlane){s.launch(250,45),A.camInit=!0,Te("Di nuovo in volo a 250 m",1200);return}let e=t.nearest(s.x,s.z,300,a=>a.drivable&&a.cls<=Vt.SERVICE);if(!e)return;let n=t.ways[e.wi],i=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[i],t.nz[r]-t.nz[i]);!n.oneway&&Math.cos(o-s.h)<0&&(o+=Math.PI),s.place(e.px,e.pz,o),Te("Rimesso in strada",1200)}var Qa=0;function Te(s,t=2500){let e=bt("toast");e.textContent=s,e.classList.add("show"),Qa=performance.now()+t}function Hr(s){if(!(!A.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(s);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var Jv={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function Hs(s){return s>=1e3?(s/1e3).toFixed(s>=1e4?0:1).replace(".",",")+" km":Math.round(s/10)*10+" m"}function jv(s){let t=Gr();if(On()&&A.dest){let l=A.dest[0]-t.x,c=A.dest[1]-t.z,u=Math.hypot(l,c),h=Math.atan2(l,c)-t.h;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;bt("nav").classList.remove("hidden"),bt("navarrow").textContent=Math.abs(h)<.3?"\u2B06":Math.abs(h)>2.6?"\u2B07":h>0?h>1.2?"\u2B05":"\u2196":h<-1.2?"\u27A1":"\u2197",bt("navarrow").style.fontSize="44px",bt("navd").textContent=Hs(u),bt("navt").textContent="Destinazione in linea d'aria",bt("naveta").textContent=`circa ${Math.max(1,Math.round(u/Math.max(20,t.u)/60))} min alla velocit\xE0 attuale`;return}if(!A.route){bt("nav").classList.add("hidden");return}let e=A.route,n=Gd(e,t.x,t.z);if(n.off>40){if(A.offT=(A.offT||0)+s,A.offT>2.5){A.offT=0,Qh(!0);return}}else A.offT=0;let i=e.length-n.s;if(i<25){Te("\u{1F3C1} Sei arrivato a destinazione!",4e3),Hr("Sei arrivato a destinazione"),A.route=null,A.dest=null,bt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);bt("nav").classList.remove("hidden"),bt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":Jv[r.type]||"\u2B06",bt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",bt("navd").textContent=Hs(o),bt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));bt("naveta").textContent=`Destinazione: ${Hs(i)} \xB7 circa ${Math.max(1,Math.round(i/a/60))} min`,A.lastStep!==r&&(A.lastStep=r,A.announced=0),A.announced===0&&o<400&&o>120&&(A.announced=1,Hr(`Tra ${Hs(o).replace(","," virgola ")}, ${r.text}`)),A.announced<=1&&o<70&&(A.announced=2,Hr(r.text))}function Qh(s){if(!A.dest)return;if(On()){A.route=null,s||Te(`Destinazione impostata: ${Hs(Math.hypot(A.dest[0]-A.vehicle.x,A.dest[1]-A.vehicle.z))} in linea d'aria`);return}let t=Gr(),e=A.router.route(t.x,t.z,t.h,A.dest[0],A.dest[1]);if(A.route=e,!e){Te("Nessun percorso trovato verso la destinazione");return}A.lastStep=null,s?Hr("Ricalcolo del percorso"):(Te(`Percorso calcolato: ${Hs(e.length)}`),Hr("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var qh=0,Yh=0,Zh=performance.now();function Qv(s){let t=Gr(),e=A.roads,n=A.vehicle;qh+=s,Yh++;let i=performance.now();if(i-Zh>1e3&&(bt("fps").textContent=Math.round(Yh*1e3/(i-Zh))+" fps",Yh=0,Zh=i),Qa&&performance.now()>Qa&&(bt("toast").classList.remove("show"),Qa=0),qh<.1)return;qh=0;let r=Math.abs(t.u*3.6);bt("spd").textContent=Math.round(r),!A.foot.on&&n.isPlane?(bt("gear").textContent=n.crashed>0?"INCIDENTE":n.onGround?"A TERRA":n.stall?"STALLO":"IN VOLO",bt("gear").style.fontSize="14px",bt("gear").style.color=n.stall&&!n.onGround?"var(--bad)":"",bt("rpmbar").style.width=Math.round(n.lever*100)+"%"):(bt("gear").textContent=A.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,bt("gear").style.fontSize=A.foot.on?"14px":"",bt("gear").style.color="",bt("rpmbar").style.width=(A.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%");let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let g=e.nearest(t.x,t.z,25,p=>p.drivable);g&&(a=g.wi)}let l=A.world.comuneAt(t.x,t.z);if(On())bt("roadname").textContent=n.crashed>0?"\u{1F4A5} Incidente \u2014 si riparte in volo":`In volo \xB7 ${Math.round(Math.max(0,n.agl))} m dal suolo`,bt("limit").classList.add("hidden"),A.curLimit=0;else if(a>=0){let g=e.ways[a];bt("roadname").textContent=e.displayName(g),bt("limitv").textContent=g.limit,bt("limit").classList.toggle("hidden",A.foot.on),bt("limitest").textContent=g.limitMapped?"":"indicativo",bt("limit").classList.toggle("over",r>g.limit*1.1+3),A.curLimit=g.limit}else bt("roadname").textContent="Fuori strada",bt("limit").classList.add("hidden"),A.curLimit=0;let c="",u=1e9;for(let g of A.meta.places){if(g.t==="town"||g.t==="city"||g.t==="locality")continue;let p=Math.hypot(g.x-t.x,g.z-t.z);p<u&&p<700&&(u=p,c=g.n)}bt("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=A.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,m=["N","NE","E","SE","S","SO","O","NO"];bt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${m[Math.round(d/45)%8]}`,bt("alt").textContent=!A.foot.on&&n.isPlane?`manetta ${Math.round(n.lever*100)}% \xB7 ${n.vy>=0?"\u2191":"\u2193"} ${Math.abs(n.vy).toFixed(1)} m/s`:"",bt("clock").textContent="\u{1F552} "+A.sky.clock(),bt("tspeed").textContent=A.sky.speed===0?"\u23F8":A.sky.speed===1?"1\xD7":A.sky.speed+"\xD7",!A.foot.on&&n.isPlane&&A.camMode===1?Fd(A.carModel.dashCanvas,A.carModel.dashTex,r,n.agl,n.vy,n.lever,n.stall&&!n.onGround):!A.foot.on&&A.carModel.dashCanvas&&A.camMode===1&&kd(A.carModel.dashCanvas,A.carModel.dashTex,r,n.rpm,n.spec.rpmMax,bt("gear").textContent,A.curLimit)}function lp(s){A.mapOpen=!0,A.mapMode=s||"dest",bt("mapview").classList.remove("hidden"),A.maps.resizeBig();let t=A.vehicle;if(A.started&&t)A.maps.cx=t.x,A.maps.cz=t.z,A.maps.zoom=.35;else{let e=tl("casa");A.maps.cx=e.x,A.maps.cz=e.z,A.maps.zoom=.12}bt("setdest").classList.toggle("hidden",!A.started),bt("teleport").textContent=A.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",bt("mapinfo").textContent=A.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",A.mapDirty=!0,bt("search").value="",bt("results").innerHTML=""}function kr(){A.mapOpen=!1,bt("mapview").classList.add("hidden"),A.started||jh()}function tp(s,t,e){A.mapSel=[s,t];let n=A.world.comuneAt(s,t),i=A.roads.nearest(s,t,150,o=>o.drivable),r=e||(i?A.roads.displayName(A.roads.ways[i.wi]):"Punto selezionato");A.mapSelLabel=r+(n?", "+n:""),bt("mapinfo").innerHTML=`<b>${A.mapSelLabel}</b><br>${A.proj.toLatLon(s,t).map(o=>o.toFixed(5)).join(", ")}`,A.mapDirty=!0,A.started&&A.mapMode==="dest"&&cp()}function cp(){A.mapSel&&(A.dest=A.mapSel.slice(),Qh(!1),A.mapDirty=!0)}function tM(){let s=bt("bigmap"),t=null,e=!1;s.addEventListener("mousedown",i=>{t=[i.clientX,i.clientY,A.maps.cx,A.maps.cz],e=!1}),addEventListener("mousemove",i=>{if(!t||!A.mapOpen)return;let r=i.clientX-t[0],o=i.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),A.maps.cx=t[2]-r/A.maps.zoom,A.maps.cz=t[3]-o/A.maps.zoom,A.mapDirty=!0}),addEventListener("mouseup",i=>{if(t&&!e&&A.mapOpen&&i.target===s){let[r,o]=A.maps.toWorld(i.clientX,i.clientY);tp(r,o)}t=null}),s.addEventListener("wheel",i=>{i.preventDefault();let[r,o]=A.maps.toWorld(i.clientX,i.clientY),a=Math.exp(-i.deltaY*.0015);A.maps.zoom=Math.max(.03,Math.min(6,A.maps.zoom*a));let[l,c]=A.maps.toWorld(i.clientX,i.clientY);A.maps.cx+=r-l,A.maps.cz+=o-c,A.mapDirty=!0},{passive:!1}),bt("closemap").onclick=kr,bt("setdest").onclick=()=>{cp(),kr()},bt("cleardest").onclick=()=>{A.route=null,A.dest=null,A.mapDirty=!0},bt("teleport").onclick=()=>{if(!A.mapSel)return;if(!A.started){A.pickedStart=A.mapSel.slice(),kr(),bt("pickinfo").textContent="Partenza: "+A.mapSelLabel;return}A.pickedStart=A.mapSel.slice();let i=tl("picked");A.vehicle.place(i.x,i.z,i.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.foot.on=!1,A.traffic.clear(),A.camInit=!0,A.loadingWorld=!0,kr(),A.dest&&Qh(!0)};let n=bt("search");n.addEventListener("input",()=>{let i=n.value.trim().toLowerCase(),r=[];if(i.length>=2){for(let a of A.maps.comuni)a.n.toLowerCase().includes(i)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of A.meta.places)a.n.toLowerCase().includes(i)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of A.meta.landmarks)a[3].toLowerCase().includes(i)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(A.world.comuneAt(a[1],a[2])?" \xB7 "+A.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of A.roads.streets){if(!a.toLowerCase().includes(i))continue;let c=new Map;for(let u of l){let h=A.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}bt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{A.maps.cx=o.x,A.maps.cz=o.z,A.maps.zoom=Math.max(A.maps.zoom,.8),tp(o.x,o.z,o.n)},bt("results").appendChild(a)}})}function eM(){bt("resume").onclick=()=>Jh(!1),bt("tomenu").onclick=()=>{Jh(!1),A.started=!1,bt("hud").classList.add("hidden"),jh()},bt("ptraffic").onchange=n=>{A.traffic.target=+n.target.value,A.traffic.target||A.traffic.clear()},bt("ptime").onchange=n=>{A.sky.speed=+n.target.value},bt("pvoice").onchange=n=>{A.voice=n.target.value==="1"},bt("paudio").onchange=n=>{A.audio.muted=n.target.value==="0"};let s=A.input.wheelCfg,t=(n,i)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=i};t(bt("axsteer"),s.steerAxis),t(bt("axthr"),s.throttleAxis),t(bt("axbrk"),s.brakeAxis),bt("wheelon").checked=s.enabled,bt("axinv").checked=s.invertPedals;let e=()=>{s.enabled=bt("wheelon").checked,s.steerAxis=+bt("axsteer").value,s.throttleAxis=+bt("axthr").value,s.brakeAxis=+bt("axbrk").value,s.invertPedals=bt("axinv").checked,A.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])bt(n).onchange=e}function Jh(s){A.paused=s,bt("pause").classList.toggle("hidden",!s),s&&(bt("ptime").value=String(A.sky.speed))}var Ja=new H,ep=new H,nM=new H,iM=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function sM(s,t){let e=A.vehicle,n=A.camera,i=A.carModel,r=A.foot,o=A.orbit,a=r.on?0:A.camMode;if(A.debugCam){n.position.set(...A.debugCam.pos),n.lookAt(...A.debugCam.look),n.near=1,n.updateProjectionMatrix(),i.interior.visible=!1;for(let l of i.exterior)l.visible=!0;return}i.interior.visible=a===1;for(let l of i.exterior)l.visible=a!==1;if(document.body.classList.toggle("cockpit",a===1),o.idle+=s,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-s*2.5),o.pitch*=Math.exp(-s*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*(e.isPlane?1.1:.75),u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),m=Math.sin(o.pitch),g=nM.set(l.x-Math.sin(f)*c*d,l.y+u+c*m,l.z-Math.cos(f)*c*d),p=A.roads.surfaceAt(g.x,g.z,l.y+3).h;g.y=Math.max(g.y,p+.8),A.camInit&&(Ja.copy(g),A.camInit=!1),Ja.lerp(g,1-Math.exp(-s*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(Ja);let y=r.on?.5:4;ep.set(l.x+Math.sin(f)*y,l.y+h,l.z+Math.cos(f)*y),n.lookAt(ep),n.near=.5}else{let l=a===1?i.root.userData.eye.clone():new H(0,e.spec.H*.82+.05,e.spec.L*.18);i.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(i.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new H(Math.sin(c)*u,(a===1?e.isPlane?-3.5:-3.2:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?i.root.userData.eye:new H(0,e.spec.H*.82,0)).applyMatrix4(i.root.matrixWorld);n.lookAt(h),n.near=.08,Ja.copy(n.position)}n.updateProjectionMatrix()}var we={t:0,n:0,scale:1,good:0,shadowsOff:!1};function rM(s){if(A.autoOff||A.loadingWorld||s>.5||(we.t+=s,we.n++,we.t<1.5))return;let t=we.t/we.n;we.t=0,we.n=0;let e=Math.min(devicePixelRatio,A.settings.pixelRatio),n=()=>{let i=Math.max(.5,e*we.scale);A.renderer.setPixelRatio(i),A.composer&&A.composer.setPixelRatio(i)};t>.042?(we.good=0,we.scale>.61?(we.scale=Math.max(.6,we.scale-.14),n()):!we.shadowsOff&&A.settings.shadows&&(we.shadowsOff=!0,A.sky.sun.castShadow=!1)):t<.02?++we.good>=3&&(we.good=0,we.shadowsOff?(we.shadowsOff=!1,A.sky.sun.castShadow=!0):we.scale<1&&(we.scale=Math.min(1,we.scale+.1),n())):we.good=0,bt("fps").title=`risoluzione ${Math.round(we.scale*100)}%${we.shadowsOff?", ombre spente":""}`}var np=performance.now(),$h=0;function hp(s){requestAnimationFrame(hp);let t=(s-np)/1e3,e=Math.min(.05,t);if(np=s,!A.renderer)return;if(A.mapOpen){A.input.read(e),(A.input.consume("KeyM")||A.input.consume("Escape"))&&kr(),A.mapDirty&&(A.maps.drawBig(A.started?Gr():null,A.route,A.dest||(A.mapMode==="start"?null:A.mapSel)),A.mapDirty=!1),A.mapSel&&A.mapMode==="start"&&A.started;return}if(!A.started)return;let n=A.input;if(n.consume("Escape")&&Jh(!A.paused),A.paused){let x=n.axesSnapshot();bt("axes").textContent=x?`${x.id}: `+x.axes.map((v,b)=>`${b}:${v.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let i=n.read(e);if((n.consume("KeyC")||i.buttons.has(3))&&(A.camMode=(A.camMode+1)%4,Te(iM[A.camMode],1e3)),n.consume("KeyM")||i.buttons.has(8)){lp("dest");return}if(n.consume("KeyN")&&bt("mini-wrap").classList.toggle("hidden"),(n.consume("KeyH")||i.buttons.has(2))&&(A.lightsOn=!A.lightsOn,Te(A.lightsOn?"Fari accesi":"Fari spenti",900)),n.consume("KeyR")&&!A.foot.on&&Kv(),n.consume("KeyK")&&(A.world.labelsOn=!A.world.labelsOn,Te(A.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),n.consume("KeyT")){let x=[30,300,0,1];A.sky.speed=x[(x.indexOf(A.sky.speed)+1)%x.length],Te("Velocit\xE0 del tempo: "+(A.sky.speed?A.sky.speed+"\xD7":"ferma"),1e3)}(n.consume("Equal")||n.consume("NumpadAdd"))&&(A.sky.hours=(A.sky.hours+1)%24),(n.consume("Minus")||n.consume("NumpadSubtract"))&&(A.sky.hours=(A.sky.hours+23)%24),(n.consume("KeyF")||n.consume("Enter")||i.buttons.has(1))&&(A.foot.on?qv():Xv());let r=!A.foot.on&&(n.keys.has("KeyE")||!!i.hornPad);A.audio.horn(r);let o=A.vehicle,a=A.foot,l=Gr();if(A.world.update(l.x,l.z),A.world.pump(A.loadingWorld?40:On()?12:7),A.settings.farKm>0&&(A.world.updateFar(l.x,l.z,On()?A.settings.farKm*1e3:Math.min(A.settings.farKm*1e3,3200)),A.world.pumpFar(A.loadingWorld?12:3)),A.loadingWorld)if(A.world.ready(o.x,o.z)){if(A.loadingWorld=!1,o.pendingLaunch)o.pendingLaunch=!1,o.launch(250,45),A.camInit=!0,Te("\u2708 In volo sopra la Brianza \u2014 W/S manetta, \u2191/\u2193 cabra/picchia, A/D vira",4500);else if(!o.isPlane||o.onGround){let x=A.roads.surfaceAt(o.x,o.z,1e9);o.y=x.h}}else i.throttle=0,i.brake=1;A.loadingWorld||(a.on?(o.update(e,{throttle:0,brake:1,steer:0,handbrake:1,pitch:0}),Yv(e,i)):o.update(e,o.isPlane?Wv(i):i)),o.isPlane&&(o.crashed>0&&!o.crashShown&&(o.crashShown=!0,Te("\u{1F4A5} "+o.crashMsg+" Si riparte in volo\u2026",2200)),o.relaunched&&(o.relaunched=!1,o.crashShown=!1,A.camInit=!0),o.touchdown&&(o.touchdown=!1,Te(o.impact>.4?"Atterraggio un po' brusco":"\u{1F6EC} Atterraggio riuscito",1800),o.impact=0),o.outside&&(o.outside=0,Te("Fine della zona: si torna indietro",1500)));let c=Math.sin(o.h),u=Math.cos(o.h),h=Math.cos(o.h),f=-Math.sin(o.h),d=On()?[]:[{x:o.x,z:o.z,h:o.h,vx:c*o.u+h*o.v,vz:u*o.u+f*o.v,halfL:o.spec.L/2,halfW:o.spec.W/2,player:!0}];for(let x of A.traffic.cars)Math.abs(x.x-l.x)<90&&Math.abs(x.z-l.z)<90&&d.push({x:x.x,z:x.z,h:x.h,vx:Math.sin(x.h)*x.speed,vz:Math.cos(x.h)*x.speed,halfL:x.box.halfL,halfW:x.box.halfW});let m=A.loadingWorld?[]:A.peds.update(e,l.x,l.z,d,r);a.on&&m.push([a.x,a.z]),A.traffic.obstacles=m,A.traffic.update(e,{x:o.x,z:o.z,h:o.h,u:o.u,wi:o.surface&&o.surface.road?o.surface.road.wi:-1,active:!On()},s/1e3);let g=On()?[]:[{x:o.x,z:o.z}];for(let x of A.traffic.cars)Math.abs(x.x-l.x)<300&&Math.abs(x.z-l.z)<300&&g.push(x);A.world.gates.update(e,g),A.peds.drawPlayer(a.on,a.x,a.y,a.z,a.h,a.gait,a.u,e);let p=A.carModel;p.root.position.set(o.x,o.y,o.z),p.root.rotation.set(-(o.pitch+o.dynPitch),o.h,o.roll+o.dynRoll,"YXZ");for(let x of p.wheels)x.pivot.rotation.x=o.wheelSpinAngle||0,x.front&&(x.pivot.rotation.y=o.steer);p.prop&&(p.prop.rotation.z=o.propAngle||0),p.steeringWheel&&(p.steeringWheel.rotation.z=-o.steer*7);let y=!a.on&&(A.lightsOn||A.sky.night>.55);p.headlight&&(p.headlight.intensity=y?70:0),p.tailGlow&&(p.tailGlow.intensity=o.brake>.05&&!a.on?2.2:y?.6:0),ip.set(l.x,On()?o.y-o.agl:l.y,l.z),A.sky.update(e,ip),A.world.updateWater(s/1e3,A.scene.fog.color),rM(t);let M=On()?1+Math.min(1.9,o.agl/130):1;A.scene.fog.near*=M,A.scene.fog.far*=M,A.camera.far=Math.max(1700,A.scene.fog.far*1.06),A.world.buildings.setNight(A.sky.night),A.world.signage.update(s/1e3,A.sky.night),A.traffic.setNight(A.sky.night),sM(e,n.keys.has("KeyV")),A.world.updateLabels(A.camera),Qv(e),jv(e),Zv(o,Math.abs(o.u)*3.6,s),$h+=e,$h>.05&&!bt("mini-wrap").classList.contains("hidden")&&($h=0,A.maps.drawMini(l,A.route,A.sky.night>.5)),a.on?A.audio.update(800,0,0,0):A.audio.update(o.rpm,o.throttle,Math.abs(o.u)*3.6,o.slip),o.impact>.25&&!a.on&&!o.isPlane&&Te("\u{1F4A5} Urto!",700),o.impact=0,A.composer&&A.sky.night>.2?(A.bloom.strength=A.sky.night*.55,A.composer.render()):A.renderer.render(A.scene,A.camera)}var ip=new H;kv().catch(sp);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
