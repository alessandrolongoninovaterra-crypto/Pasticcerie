(()=>{var ah="170";var hp=0,ru=1,up=2;var wf=1,lh=2,Xn=3,ci=0,Ve=1,re=2,Ln=0,us=1,hi=2,ou=3,au=4,fp=5,Ci=100,dp=101,pp=102,mp=103,gp=104,xp=200,yp=201,vp=202,Mp=203,Nl=204,Ul=205,_p=206,bp=207,wp=208,Ep=209,Sp=210,Tp=211,Ap=212,Rp=213,Cp=214,zl=0,Fl=1,Bl=2,ms=3,Ol=4,kl=5,Hl=6,Gl=7,oa=0,Ip=1,Pp=2,li=0,ch=1,hh=2,uh=3,wr=4,Lp=5,fh=6,dh=7;var Ef=300,gs=301,xs=302,Vl=303,Wl=304,aa=306,ui=1e3,Mn=1001,Xl=1002,on=1003,Dp=1004;var Vr=1005;var In=1006,Qa=1007;var Pi=1008;var $n=1009,Sf=1010,Tf=1011,ar=1012,ph=1013,Li=1014,Pn=1015,En=1016,mh=1017,gh=1018,ys=1020,Af=35902,Rf=1021,Cf=1022,_n=1023,If=1024,Pf=1025,fs=1026,vs=1027,xh=1028,yh=1029,Lf=1030,vh=1031;var Mh=1033,wo=33776,Eo=33777,So=33778,To=33779,ql=35840,Yl=35841,Zl=35842,$l=35843,Jl=36196,Kl=37492,jl=37496,Ql=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,fc=37821,Ao=36492,dc=36494,pc=36495,Df=36283,mc=36284,gc=36285,xc=36286;var Ro=2300,yc=2301,tl=2302,lu=2400,cu=2401,hu=2402;var Np=3200,_h=3201;var la=0,Up=1,oi="",ye="srgb",Cs="srgb-linear",ca="linear",pe="srgb";var Wi=7680;var uu=519,zp=512,Fp=513,Bp=514,Nf=515,Op=516,kp=517,Hp=518,Gp=519,vc=35044,Uf=35048;var fu="300 es",Yn=2e3,Co=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,nr=Math.PI/180,Ms=180/Math.PI;function Dn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ne(s,t,e){return Math.max(t,Math.min(e,s))}function bh(s,t){return(s%t+t)%t}function Vp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wp(s,t,e){return s!==t?(e-s)/(t-s):0}function ir(s,t,e){return(1-e)*s+e*t}function Xp(s,t,e,n){return ir(s,t,1-Math.exp(-e*n))}function qp(s,t=1){return t-Math.abs(bh(s,t*2)-t)}function Yp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function $p(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Jp(s,t){return s+Math.random()*(t-s)}function Kp(s){return s*(.5-Math.random())}function jp(s){s!==void 0&&(du=s);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qp(s){return s*nr}function t0(s){return s*Ms}function e0(s){return(s&s-1)===0&&s!==0}function n0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function i0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function s0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var zf={DEG2RAD:nr,RAD2DEG:Ms,generateUUID:Dn,clamp:Ne,euclideanModulo:bh,mapLinear:Vp,inverseLerp:Wp,lerp:ir,damp:Xp,pingpong:qp,smoothstep:Yp,smootherstep:Zp,randInt:$p,randFloat:Jp,randFloatSpread:Kp,seededRandom:jp,degToRad:Qp,radToDeg:t0,isPowerOfTwo:e0,ceilPowerOfTwo:n0,floorPowerOfTwo:i0,setQuaternionFromProperEuler:s0,normalize:ge,denormalize:vn},Mt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],y=i[0],p=i[3],g=i[6],M=i[1],x=i[4],v=i[7],b=i[2],E=i[5],S=i[8];return r[0]=o*y+a*M+l*b,r[3]=o*p+a*x+l*E,r[6]=o*g+a*v+l*S,r[1]=c*y+u*M+h*b,r[4]=c*p+u*x+h*E,r[7]=c*g+u*v+h*S,r[2]=f*y+d*M+m*b,r[5]=f*p+d*x+m*E,r[8]=f*g+d*v+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=h*y,t[1]=(i*c-u*n)*y,t[2]=(a*n-i*o)*y,t[3]=f*y,t[4]=(u*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},el=new ie;function Ff(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function r0(){let s=Io("canvas");return s.style.display="block",s}var pu={};function tr(s){s in pu||(pu[s]=!0,console.warn(s))}function o0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function a0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function l0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?ca:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],xu=[.3127,.329],yu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Cs]:{primaries:mu,whitePoint:xu,transfer:ca,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:mu,whitePoint:xu,transfer:pe,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var Xi,Mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Io("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Io("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c0=0,Po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nl(i[o].image)):r.push(nl(i[o]))}else r=nl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h0=0,Qe=class s extends fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mn,i=Mn,r=In,o=Pi,a=_n,l=$n,c=s.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Dn(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ef;Qe.DEFAULT_ANISOTROPY=1;var xe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,b=(g+1)/2,E=(u+f)/4,S=(h+y)/4,T=(m+p)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=S/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=T/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(h-y)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lo=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=y;return}if(h!==y||l!==f||c!==d||u!==m){let p=1-a,g=l*f+c*d+u*m+h*y,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let b=Math.sqrt(x),E=Math.atan2(b,g*M);p=Math.sin(p*E)/b,a=Math.sin(a*E)/b}let v=a*M;if(l=l*p+f*v,c=c*p+d*v,u=u*p+m*v,h=h*p+y*v,p===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new H,Mu=new Re,Jn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Xr.subVectors(this.max,Vs),qi.subVectors(t.a,Vs),Yi.subVectors(t.b,Vs),Zi.subVectors(t.c,Vs),ti.subVectors(Yi,qi),ei.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-bi.z,bi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!sl(e,qi,Yi,Zi,Xr)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,qi,Yi,Zi,Xr))?!1:(qr.crossVectors(ti,ei),e=[qr.x,qr.y,qr.z],sl(e,qi,Yi,Zi,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new H,new H,new H,new H,new H,new H,new H,new H],gn=new H,Wr=new Jn,qi=new H,Yi=new H,Zi=new H,ti=new H,ei=new H,bi=new H,Vs=new H,Xr=new H,qr=new H,wi=new H;function sl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var u0=new Jn,Ws=new H,rl=new H,Kn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):u0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(rl)),this.expandByPoint(Ws.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new H,ol=new H,Yr=new H,ni=new H,al=new H,Zr=new H,ll=new H,lr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ol.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yr),a=ni.dot(this.direction),l=-ni.dot(Yr),c=ni.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ol).addScaledVector(Yr,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,r){al.subVectors(e,t),Zr.subVectors(n,t),ll.crossVectors(al,Zr);let o=this.direction.dot(ll),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);let l=a*this.direction.dot(Zr.crossVectors(ni,Zr));if(l<0)return null;let c=a*this.direction.dot(al.cross(ni));if(c<0||l+c>o)return null;let u=-a*ni.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class s{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,m,y,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,y,p)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,y=c*h;e[0]=f+y*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,d0)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ii.crossVectors(n,sn),ii.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ii.crossVectors(n,sn)),ii.normalize(),$r.crossVectors(sn,ii),i[0]=ii.x,i[4]=$r.x,i[8]=sn.x,i[1]=ii.y,i[5]=$r.y,i[9]=sn.y,i[2]=ii.z,i[6]=$r.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],y=n[6],p=n[10],g=n[14],M=n[3],x=n[7],v=n[11],b=n[15],E=i[0],S=i[4],T=i[8],_=i[12],w=i[1],R=i[5],D=i[9],z=i[13],P=i[2],k=i[6],N=i[10],W=i[14],B=i[3],Y=i[7],K=i[11],V=i[15];return r[0]=o*E+a*w+l*P+c*B,r[4]=o*S+a*R+l*k+c*Y,r[8]=o*T+a*D+l*N+c*K,r[12]=o*_+a*z+l*W+c*V,r[1]=u*E+h*w+f*P+d*B,r[5]=u*S+h*R+f*k+d*Y,r[9]=u*T+h*D+f*N+d*K,r[13]=u*_+h*z+f*W+d*V,r[2]=m*E+y*w+p*P+g*B,r[6]=m*S+y*R+p*k+g*Y,r[10]=m*T+y*D+p*N+g*K,r[14]=m*_+y*z+p*W+g*V,r[3]=M*E+x*w+v*P+b*B,r[7]=M*S+x*R+v*k+b*Y,r[11]=M*T+x*D+v*N+b*K,r[15]=M*_+x*z+v*W+b*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15];return m*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+y*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+g*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],M=h*p*c-y*f*c+y*l*d-a*p*d-h*l*g+a*f*g,x=m*f*c-u*p*c-m*l*d+o*p*d+u*l*g-o*f*g,v=u*y*c-m*h*c+m*a*d-o*y*d-u*a*g+o*h*g,b=m*h*l-u*y*l-m*a*f+o*y*f+u*a*p-o*h*p,E=e*M+n*x+i*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=M*S,t[1]=(y*f*r-h*p*r-y*i*d+n*p*d+h*i*g-n*f*g)*S,t[2]=(a*p*r-y*l*r+y*i*c-n*p*c-a*i*g+n*l*g)*S,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=x*S,t[5]=(u*p*r-m*f*r+m*i*d-e*p*d-u*i*g+e*f*g)*S,t[6]=(m*l*r-o*p*r-m*i*c+e*p*c+o*i*g-e*l*g)*S,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=v*S,t[9]=(m*h*r-u*y*r-m*n*d+e*y*d+u*n*g-e*h*g)*S,t[10]=(o*y*r-m*a*r+m*n*c-e*y*c-o*n*g+e*a*g)*S,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*S,t[12]=b*S,t[13]=(u*y*i-m*h*i+m*n*f-e*y*f-u*n*p+e*h*p)*S,t[14]=(m*a*i-o*y*i-m*n*l+e*y*l+o*n*p-e*a*p)*S,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,y=o*u,p=o*h,g=a*h,M=l*c,x=l*u,v=l*h,b=n.x,E=n.y,S=n.z;return i[0]=(1-(y+g))*b,i[1]=(d+v)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+g))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+x)*S,i[9]=(p-M)*S,i[10]=(1-(f+y))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=$i.set(i[0],i[1],i[2]).length(),o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);let c=1/r,u=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Yn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===Yn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Co)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Yn){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u,m,y;if(a===Yn)m=(o+r)*h,y=-2*h;else if(a===Co)m=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new H,xn=new Jt,f0=new H(0,0,0),d0=new H(1,1,1),ii=new H,$r=new H,sn=new H,_u=new Jt,bu=new Re,$e=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p0=0,wu=new H,Ji=new Re,Gn=new Jt,Jr=new H,Xs=new H,m0=new H,g0=new Re,Eu=new H(1,0,0),Su=new H(0,1,0),Tu=new H(0,0,1),Au={type:"added"},x0={type:"removed"},Ki={type:"childadded",child:null},cl={type:"childremoved",child:null},Le=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new $e,n=new Re,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ie}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Xs,Jr,this.up):Gn.lookAt(Jr,Xs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,m0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,g0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new H(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new H,Vn=new H,hl=new H,Wn=new H,ji=new H,Qi=new H,Ru=new H,ul=new H,fl=new H,dl=new H,pl=new xe,ml=new xe,gl=new xe,ai=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Vn.subVectors(n,e),hl.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Vn),l=yn.dot(hl),c=Vn.dot(Vn),u=Vn.dot(hl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ji.subVectors(i,n),Qi.subVectors(r,n),ul.subVectors(t,n);let l=ji.dot(ul),c=Qi.dot(ul);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,i);let u=ji.dot(fl),h=Qi.dot(fl);if(u>=0&&h<=u)return e.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);dl.subVectors(t,r);let d=ji.dot(dl),m=Qi.dot(dl);if(m>=0&&d<=m)return e.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Qi,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Ru.subVectors(r,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(Ru,a);let g=1/(p+y+f);return o=y*g,a=f*g,e.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function xl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=bh(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xl(o,r,t+1/3),this.g=xl(o,r,t),this.b=xl(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return le.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ne(Ge.r*255,0,255))*65536+Math.round(Ne(Ge.g*255,0,255))*256+Math.round(Ne(Ge.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,i=Ge.g,r=Ge.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ye){le.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,i=Ge.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Kr);let n=ir(si.h,Kr.h,e),i=ir(si.s,Kr.s,e),r=ir(si.l,Kr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Ct;Ct.NAMES=Bf;var y0=0,un=class extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Dn(),this.name="",this.blending=us,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},De=class extends un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new H,jr=new Mt,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}};var _s=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}},v0=0,hn=new Jt,yl=new Le,ts=new H,rn=new Jn,qs=new Jn,Fe=new H,te=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?bs:_s)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(rn.min,qs.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,qs.max),rn.expandByPoint(Fe)):(rn.expandByPoint(qs.min),rn.expandByPoint(qs.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Fe.add(ts)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new H,l[T]=new H;let c=new H,u=new H,h=new H,f=new Mt,d=new Mt,m=new Mt,y=new H,p=new H;function g(T,_,w){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,w),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[T].add(y),a[_].add(y),a[w].add(y),l[T].add(p),l[_].add(p),l[w].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,_=M.length;T<_;++T){let w=M[T],R=w.start,D=w.count;for(let z=R,P=R+D;z<P;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let x=new H,v=new H,b=new H,E=new H;function S(T){b.fromBufferAttribute(i,T),E.copy(b);let _=a[T];x.copy(_),x.sub(b.multiplyScalar(b.dot(_))).normalize(),v.crossVectors(E,_);let R=v.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,R)}for(let T=0,_=M.length;T<_;++T){let w=M[T],R=w.start,D=w.count;for(let z=R,P=R+D;z<P;z+=3)S(t.getX(z+0)),S(t.getX(z+1)),S(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new he(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new Jt,Ei=new lr,Qr=new Kn,Iu=new H,to=new H,eo=new H,no=new H,vl=new H,io=new H,Pu=new H,so=new H,Et=class extends Le{constructor(t=new te,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(vl.fromBufferAttribute(h,t),o?io.addScaledVector(vl,u):io.addScaledVector(vl.sub(e),u))}e.add(io)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Qr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Qr,Iu)===null||Ei.origin.distanceToSquared(Iu)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){let E=a.getX(v),S=a.getX(v+1),T=a.getX(v+2);i=ro(this,g,t,n,c,u,h,E,S,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let M=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);i=ro(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){let E=v,S=v+1,T=v+2;i=ro(this,g,t,n,c,u,h,E,S,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let M=p,x=p+1,v=p+2;i=ro(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function M0(s,t,e,n,i,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ci,a),l===null)return null;so.copy(a),so.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:s}}function ro(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,to),s.getVertexPosition(l,eo),s.getVertexPosition(c,no);let u=M0(s,t,e,n,to,eo,no,Pu);if(u){let h=new H;ai.getBarycoord(Pu,to,eo,no,h),i&&(u.uv=ai.getInterpolatedAttribute(i,a,l,c,h,new Mt)),r&&(u.uv1=ai.getInterpolatedAttribute(r,a,l,c,h,new Mt)),o&&(u.normal=ai.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ai.getNormal(to,eo,no,f.normal),u.face=f,u.barycoord=h}return u}var Nt=class s extends te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(y,p,g,M,x,v,b,E,S,T,_){let w=v/S,R=b/T,D=v/2,z=b/2,P=E/2,k=S+1,N=T+1,W=0,B=0,Y=new H;for(let K=0;K<N;K++){let V=K*R-z;for(let tt=0;tt<k;tt++){let Z=tt*w-D;Y[y]=Z*M,Y[p]=V*x,Y[g]=P,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[p]=0,Y[g]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(tt/S),h.push(1-K/T),W+=1}}for(let K=0;K<T;K++)for(let V=0;V<S;V++){let tt=f+V+k*K,Z=f+V+k*(K+1),F=f+(V+1)+k*(K+1),O=f+(V+1)+k*K;l.push(tt,Z,O),l.push(Z,F,O),B+=6}a.addGroup(d,B,_),d+=B,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function _0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Of(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var pi={clone:ws,merge:Ye},b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=_0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},No=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new H,Lu=new Mt,Du=new Mt,Oe=class extends No{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,wc=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Oe(es,ns,t,e);i.layers=this.layers,this.add(i);let r=new Oe(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new Oe(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new Oe(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new Oe(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Oe(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Uo=class extends Qe{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ec=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nt(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Ln});r.uniforms.tEquirect.value=e;let o=new Et(i,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=In),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ml=new H,E0=new H,S0=new ie,qn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ml.subVectors(n,e).cross(E0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||S0.getNormalMatrix(t),i=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new Kn,oo=new H,cr=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],y=i[10],p=i[11],g=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-g).normalize(),n[1].setComponents(l+r,f+c,p+d,v+g).normalize(),n[2].setComponents(l+o,f+u,p+m,v+M).normalize(),n[3].setComponents(l-o,f-u,p-m,v-M).normalize(),n[4].setComponents(l-a,f-h,p-y,v-x).normalize(),e===Yn)n[5].setComponents(l+a,f+h,p+y,v+x).normalize();else if(e===Co)n[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(oo.x=i.normal.x>0?t.max.x:t.min.x,oo.y=i.normal.y>0?t.max.y:t.min.y,oo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function T0(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],y=h[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let y=h[d];s.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var tn=class s extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let M=g*f-o;for(let x=0;x<c;x++){let v=x*h-r;m.push(v,-M,0),y.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let x=M+c*g,v=M+c*(g+1),b=M+1+c*(g+1),E=M+1+c*g;d.push(x,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,tx=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:I0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:N0,batching_pars_vertex:U0,batching_vertex:z0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:O0,iridescence_fragment:k0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:Z0,color_vertex:$0,common:J0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:vm,envmap_vertex:cm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:fm,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:_m,lights_phong_fragment:bm,lights_phong_pars_fragment:wm,lights_physical_fragment:Em,lights_physical_pars_fragment:Sm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:zm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Om,morphcolor_vertex:km,morphnormal_vertex:Hm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:dg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:_g,uv_pars_fragment:bg,uv_pars_vertex:wg,uv_vertex:Eg,worldpos_vertex:Sg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Ig,cube_frag:Pg,depth_vert:Lg,depth_frag:Dg,distanceRGBA_vert:Ng,distanceRGBA_frag:Ug,equirect_vert:zg,equirect_frag:Fg,linedashed_vert:Bg,linedashed_frag:Og,meshbasic_vert:kg,meshbasic_frag:Hg,meshlambert_vert:Gg,meshlambert_frag:Vg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:Zg,meshphong_frag:$g,meshphysical_vert:Jg,meshphysical_frag:Kg,meshtoon_vert:jg,meshtoon_frag:Qg,points_vert:tx,points_frag:ex,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},Pt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Cn={basic:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ye([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ye([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ye([Pt.points,Pt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ye([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ye([Pt.common,Pt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ye([Pt.sprite,Pt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ye([Pt.common,Pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ye([Pt.lights,Pt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Cn.physical={uniforms:Ye([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var ao={r:0,b:0,g:0},Ti=new $e,ox=new Jt;function ax(s,t,e,n,i,r,o){let a=new Ct(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function y(M){let x=!1,v=m(M);v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,x){let v=m(x);v&&(v.isCubeTexture||v.mapping===aa)?(u===void 0&&(u=new Et(new Nt(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:ws(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Ti)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==pe,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Et(new tn(2,2),new Ce({name:"BackgroundMaterial",uniforms:ws(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(ao,Of(s)),n.buffers.color.setClear(ao.r,ao.g,ao.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:y,addToRenderList:p}}function lx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(w,R,D,z,P){let k=!1,N=h(z,D,R);r!==N&&(r=N,c(r.object)),k=d(w,z,D,P),k&&m(w,z,D,P),P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(w,R,D,z),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,R,D){let z=D.wireframe===!0,P=n[w.id];P===void 0&&(P={},n[w.id]=P);let k=P[R.id];k===void 0&&(k={},P[R.id]=k);let N=k[z];return N===void 0&&(N=f(l()),k[z]=N),N}function f(w){let R=[],D=[],z=[];for(let P=0;P<e;P++)R[P]=0,D[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:z,object:w,attributes:{},index:null}}function d(w,R,D,z){let P=r.attributes,k=R.attributes,N=0,W=D.getAttributes();for(let B in W)if(W[B].location>=0){let K=P[B],V=k[B];if(V===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),K===void 0||K.attribute!==V||V&&K.data!==V.data)return!0;N++}return r.attributesNum!==N||r.index!==z}function m(w,R,D,z){let P={},k=R.attributes,N=0,W=D.getAttributes();for(let B in W)if(W[B].location>=0){let K=k[B];K===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));let V={};V.attribute=K,K&&K.data&&(V.data=K.data),P[B]=V,N++}r.attributes=P,r.attributesNum=N,r.index=z}function y(){let w=r.newAttributes;for(let R=0,D=w.length;R<D;R++)w[R]=0}function p(w){g(w,0)}function g(w,R){let D=r.newAttributes,z=r.enabledAttributes,P=r.attributeDivisors;D[w]=1,z[w]===0&&(s.enableVertexAttribArray(w),z[w]=1),P[w]!==R&&(s.vertexAttribDivisor(w,R),P[w]=R)}function M(){let w=r.newAttributes,R=r.enabledAttributes;for(let D=0,z=R.length;D<z;D++)R[D]!==w[D]&&(s.disableVertexAttribArray(D),R[D]=0)}function x(w,R,D,z,P,k,N){N===!0?s.vertexAttribIPointer(w,R,D,P,k):s.vertexAttribPointer(w,R,D,z,P,k)}function v(w,R,D,z){y();let P=z.attributes,k=D.getAttributes(),N=R.defaultAttributeValues;for(let W in k){let B=k[W];if(B.location>=0){let Y=P[W];if(Y===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){let K=Y.normalized,V=Y.itemSize,tt=t.get(Y);if(tt===void 0)continue;let Z=tt.buffer,F=tt.type,O=tt.bytesPerElement,$=F===s.INT||F===s.UNSIGNED_INT||Y.gpuType===ph;if(Y.isInterleavedBufferAttribute){let J=Y.data,X=J.stride,rt=Y.offset;if(J.isInstancedInterleavedBuffer){for(let ut=0;ut<B.locationSize;ut++)g(B.location+ut,J.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ut=0;ut<B.locationSize;ut++)p(B.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let ut=0;ut<B.locationSize;ut++)x(B.location+ut,V/B.locationSize,F,K,X*O,(rt+V/B.locationSize*ut)*O,$)}else{if(Y.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)g(B.location+J,Y.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<B.locationSize;J++)p(B.location+J);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let J=0;J<B.locationSize;J++)x(B.location+J,V/B.locationSize,F,K,V*O,V/B.locationSize*J*O,$)}}else if(N!==void 0){let K=N[W];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(B.location,K);break;case 3:s.vertexAttrib3fv(B.location,K);break;case 4:s.vertexAttrib4fv(B.location,K);break;default:s.vertexAttrib1fv(B.location,K)}}}}M()}function b(){T();for(let w in n){let R=n[w];for(let D in R){let z=R[D];for(let P in z)u(z[P].object),delete z[P];delete R[D]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let D in R){let z=R[D];for(let P in z)u(z[P].object),delete z[P];delete R[D]}delete n[w.id]}function S(w){for(let R in n){let D=n[R];if(D[w.id]===void 0)continue;let z=D[w.id];for(let P in z)u(z[P].object),delete z[P];delete D[w.id]}}function T(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:_,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function cx(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let y=0;y<h;y++)m+=u[y]*f[y];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==_n&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let T=S===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==$n&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Pn&&!T)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function ux(s){let t=this,e=null,n=0,i=!1,r=!1,o=new qn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,x=M*4,v=g.clippingState||null;l.value=v,v=u(m,f,x,d);for(let b=0;b!==x;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=d+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function fx(s){let t=new WeakMap;function e(o,a){return a===Vl?o.mapping=gs:a===Wl&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vl||a===Wl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ec(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Es=class extends No{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Nu=[.125,.215,.35,.446,.526,.582],Ii=20,_l=new Es,Uu=new Ct,bl=null,wl=0,El=0,Sl=!1,Ri=(1+Math.sqrt(5))/2,is=1/Ri,zu=[new H(-Ri,is,0),new H(Ri,is,0),new H(-is,0,Ri),new H(is,0,Ri),new H(0,Ri,-is),new H(0,Ri,is),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],zo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,wl,El),this._renderer.xr.enabled=Sl,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:En,format:_n,colorSpace:Cs,depthBuffer:!1},i=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=px(r,t,e)}return i}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,n,i){let a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uu),u.toneMapping=li,u.autoClear=!1;let d=new De({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Et(new Nt,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(Uu),y=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let x=this._cubeSize;lo(i,M*x,g>2?x:0,x,x),u.setRenderTarget(i),y&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gs||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_l)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(i-r-1)%zu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Et(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),y=r/m,p=isFinite(r)?1+Math.floor(u*y):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let g=[],M=0;for(let S=0;S<Ii;++S){let T=S/y,_=Math.exp(-T*T/2);g.push(_),S===0?M+=_:S<p&&(M+=2*_)}for(let S=0;S<g.length;S++)g[S]=g[S]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let v=this._sizeLods[i],b=3*v*(i>x-cs?i-x+cs:0),E=4*(this._cubeSize-v);lo(e,b,E,3*v,2*v),l.setRenderTarget(e),l.render(h,_l)}};function dx(s){let t=[],e=[],n=[],i=s,r=s-cs+1+Nu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-cs?l=Nu[o-s+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,y=3,p=2,g=1,M=new Float32Array(y*m*d),x=new Float32Array(p*m*d),v=new Float32Array(g*m*d);for(let E=0;E<d;E++){let S=E%3*2/3-1,T=E>2?0:-1,_=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];M.set(_,y*m*E),x.set(f,p*m*E);let w=[E,E,E,E,E,E];v.set(w,g*m*E)}let b=new te;b.setAttribute("position",new he(M,y)),b.setAttribute("uv",new he(x,p)),b.setAttribute("faceIndex",new he(v,g)),t.push(b),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(s,t,e){let n=new Ze(s,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function px(s,t,e){let n=new Float32Array(Ii),i=new H(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bu(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ou(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function mx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vl||l===Wl,u=l===gs||l===xs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zo(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new zo(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xx(s,t,e,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let y=f.morphAttributes[m];for(let p=0,g=y.length;p<g;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let y=d[m];for(let p=0,g=y.length;p<g;p++)t.update(y[p],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,m=h.attributes.position,y=0;if(d!==null){let M=d.array;y=d.version;for(let x=0,v=M.length;x<v;x+=3){let b=M[x+0],E=M[x+1],S=M[x+2];f.push(b,E,E,S,S,b)}}else if(m!==void 0){let M=m.array;y=m.version;for(let x=0,v=M.length/3-1;x<v;x+=3){let b=x+0,E=x+1,S=x+2;f.push(b,E,E,S,S,b)}}else return;let p=new(Ff(f)?bs:_s)(f,1);p.version=y;let g=r.get(h);g&&t.remove(g),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function yx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function h(f,d,m,y){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M]*y[M];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mx(s,t,e){let n=new WeakMap,i=new xe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),y===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*h),S=new Lo(E,v,b,h);S.type=Pn,S.needsUpdate=!0;let T=x*4;for(let w=0;w<h;w++){let R=p[w],D=g[w],z=M[w],P=v*b*4*w;for(let k=0;k<R.count;k++){let N=k*T;d===!0&&(i.fromBufferAttribute(R,k),E[P+N+0]=i.x,E[P+N+1]=i.y,E[P+N+2]=i.z,E[P+N+3]=0),m===!0&&(i.fromBufferAttribute(D,k),E[P+N+4]=i.x,E[P+N+5]=i.y,E[P+N+6]=i.z,E[P+N+7]=0),y===!0&&(i.fromBufferAttribute(z,k),E[P+N+8]=i.x,E[P+N+9]=i.y,E[P+N+10]=i.z,E[P+N+11]=z.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new Mt(v,b)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function _x(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Fo=class extends Qe{constructor(t,e,n,i,r,o,a,l,c,u=fs){if(u!==fs&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fs&&(n=Li),n===void 0&&u===vs&&(n=ys),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hf=new Qe,ku=new Fo(1,1),Gf=new Lo,Vf=new bc,Wf=new Uo,Hu=[],Gu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Hu[i];if(r===void 0&&(r=new Float32Array(i),Hu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ha(s,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function Tx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Xu.set(n),s.uniformMatrix2fv(this.addr,!1,Xu),ze(e,n)}}function Ax(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Wu.set(n),s.uniformMatrix3fv(this.addr,!1,Wu),ze(e,n)}}function Rx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Vu.set(n),s.uniformMatrix4fv(this.addr,!1,Vu),ze(e,n)}}function Cx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function Lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function Dx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function Fx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ku.compareFunction=Nf,r=ku):r=Hf,e.setTexture2D(t||r,i)}function Bx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vf,i)}function Ox(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wf,i)}function kx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gf,i)}function Hx(s){switch(s){case 5126:return bx;case 35664:return wx;case 35665:return Ex;case 35666:return Sx;case 35674:return Tx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Ix;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Nx;case 36295:return Ux;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return kx}}function Gx(s,t){s.uniform1fv(this.addr,t)}function Vx(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function Wx(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function Xx(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function qx(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yx(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zx(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $x(s,t){s.uniform1iv(this.addr,t)}function Jx(s,t){s.uniform2iv(this.addr,t)}function Kx(s,t){s.uniform3iv(this.addr,t)}function jx(s,t){s.uniform4iv(this.addr,t)}function Qx(s,t){s.uniform1uiv(this.addr,t)}function t1(s,t){s.uniform2uiv(this.addr,t)}function e1(s,t){s.uniform3uiv(this.addr,t)}function n1(s,t){s.uniform4uiv(this.addr,t)}function i1(s,t,e){let n=this.cache,i=t.length,r=ha(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Hf,r[o])}function s1(s,t,e){let n=this.cache,i=t.length,r=ha(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vf,r[o])}function r1(s,t,e){let n=this.cache,i=t.length,r=ha(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wf,r[o])}function o1(s,t,e){let n=this.cache,i=t.length,r=ha(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Gf,r[o])}function a1(s){switch(s){case 5126:return Gx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return Zx;case 5124:case 35670:return $x;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}var Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a1(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function qu(s,t){s.seq.push(t),s.map[t.id]=t}function l1(s,t,e){let n=s.name,i=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qu(e,c===void 0?new Sc(a,s,t):new Tc(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Ac(a),qu(e,h)),e=h}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);l1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Yu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var c1=37297,h1=0;function u1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zu=new ie;function f1(s){le._getMatrix(Zu,le.workingColorSpace,s);let t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case ca:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $u(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+u1(s.getShaderSource(t),o)}else return i}function d1(s,t){let e=f1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p1(s,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case wr:e="ACESFilmic";break;case fh:e="AgX";break;case dh:e="Neutral";break;case Lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var co=new H;function m1(){le.getLuminanceCoefficients(co);let s=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function x1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function er(s){return s!==""}function Ju(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(s){return s.replace(v1,_1)}var M1=new Map;function _1(s,t){let e=se[t];if(e===void 0){let n=M1.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(s){return s.replace(b1,w1)}function w1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function E1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function S1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function A1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case oa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ip:t="ENVMAP_BLENDING_MIX";break;case Pp:t="ENVMAP_BLENDING_ADD";break}return t}function R1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function C1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=E1(e),c=S1(e),u=T1(e),h=A1(e),f=R1(e),d=g1(e),m=x1(r),y=i.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(er).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(er).join(`
`),g.length>0&&(g+=`
`)):(p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),g=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?se.tonemapping_pars_fragment:"",e.toneMapping!==li?p1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,d1("linearToOutputTexel",e.outputColorSpace),m1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Rc(o),o=Ju(o,e),o=Ku(o,e),a=Rc(a),a=Ju(a,e),a=Ku(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=M+p+o,v=M+g+a,b=Yu(i,i.VERTEX_SHADER,x),E=Yu(i,i.FRAGMENT_SHADER,v);i.attachShader(y,b),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function S(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(y).trim(),z=i.getShaderInfoLog(b).trim(),P=i.getShaderInfoLog(E).trim(),k=!0,N=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,b,E);else{let W=$u(i,b,"vertex"),B=$u(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+W+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||P==="")&&(N=!1);N&&(R.diagnostics={runnable:k,programLog:D,vertexShader:{log:z,prefix:p},fragmentShader:{log:P,prefix:g}})}i.deleteShader(b),i.deleteShader(E),T=new ps(i,y),_=y1(i,y)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(y,c1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}var I1=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ic(t),e.set(t,n)),n}},Ic=class{constructor(t){this.id=I1++,this.code=t,this.usedTimes=0}};function P1(s,t,e,n,i,r,o){let a=new Do,l=new Cc,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,R,D,z){let P=D.fog,k=z.geometry,N=_.isMeshStandardMaterial?D.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||N),B=W&&W.mapping===aa?W.image.height:null,Y=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,V=K!==void 0?K.length:0,tt=0;k.morphAttributes.position!==void 0&&(tt=1),k.morphAttributes.normal!==void 0&&(tt=2),k.morphAttributes.color!==void 0&&(tt=3);let Z,F,O,$;if(Y){let me=Cn[Y];Z=me.vertexShader,F=me.fragmentShader}else Z=_.vertexShader,F=_.fragmentShader,l.update(_),O=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);let J=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),rt=z.isInstancedMesh===!0,ut=z.isBatchedMesh===!0,ot=!!_.map,G=!!_.matcap,Q=!!W,L=!!_.aoMap,ft=!!_.lightMap,at=!!_.bumpMap,xt=!!_.normalMap,st=!!_.displacementMap,St=!!_.emissiveMap,ct=!!_.metalnessMap,I=!!_.roughnessMap,C=_.anisotropy>0,q=_.clearcoat>0,lt=_.dispersion>0,ht=_.iridescence>0,it=_.sheen>0,mt=_.transmission>0,yt=C&&!!_.anisotropyMap,wt=q&&!!_.clearcoatMap,Vt=q&&!!_.clearcoatNormalMap,vt=q&&!!_.clearcoatRoughnessMap,It=ht&&!!_.iridescenceMap,Bt=ht&&!!_.iridescenceThicknessMap,Xt=it&&!!_.sheenColorMap,At=it&&!!_.sheenRoughnessMap,Yt=!!_.specularMap,Zt=!!_.specularColorMap,ae=!!_.specularIntensityMap,j=mt&&!!_.transmissionMap,Rt=mt&&!!_.thicknessMap,gt=!!_.gradientMap,_t=!!_.alphaMap,Ut=_.alphaTest>0,Lt=!!_.alphaHash,ee=!!_.extensions,Te=li;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Te=s.toneMapping);let ke={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:F,defines:_.defines,customVertexShaderID:O,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ut,batchingColor:ut&&z._colorsTexture!==null,instancing:rt,instancingColor:rt&&z.instanceColor!==null,instancingMorph:rt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Cs,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:G,envMap:Q,envMapMode:Q&&W.mapping,envMapCubeUVHeight:B,aoMap:L,lightMap:ft,bumpMap:at,normalMap:xt,displacementMap:f&&st,emissiveMap:St,normalMapObjectSpace:xt&&_.normalMapType===Up,normalMapTangentSpace:xt&&_.normalMapType===la,metalnessMap:ct,roughnessMap:I,anisotropy:C,anisotropyMap:yt,clearcoat:q,clearcoatMap:wt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:vt,dispersion:lt,iridescence:ht,iridescenceMap:It,iridescenceThicknessMap:Bt,sheen:it,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:Yt,specularColorMap:Zt,specularIntensityMap:ae,transmission:mt,transmissionMap:j,thicknessMap:Rt,gradientMap:gt,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ut,alphaHash:Lt,combine:_.combine,mapUv:ot&&y(_.map.channel),aoMapUv:L&&y(_.aoMap.channel),lightMapUv:ft&&y(_.lightMap.channel),bumpMapUv:at&&y(_.bumpMap.channel),normalMapUv:xt&&y(_.normalMap.channel),displacementMapUv:st&&y(_.displacementMap.channel),emissiveMapUv:St&&y(_.emissiveMap.channel),metalnessMapUv:ct&&y(_.metalnessMap.channel),roughnessMapUv:I&&y(_.roughnessMap.channel),anisotropyMapUv:yt&&y(_.anisotropyMap.channel),clearcoatMapUv:wt&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&y(_.sheenRoughnessMap.channel),specularMapUv:Yt&&y(_.specularMap.channel),specularColorMapUv:Zt&&y(_.specularColorMap.channel),specularIntensityMapUv:ae&&y(_.specularIntensityMap.channel),transmissionMapUv:j&&y(_.transmissionMap.channel),thicknessMapUv:Rt&&y(_.thicknessMap.channel),alphaMapUv:_t&&y(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xt||C),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(ot||_t),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:St&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===re,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(M(w,_),x(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function M(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let w=m[_.type],R;if(w){let D=Cn[w];R=pi.clone(D.uniforms)}else R=_.uniforms;return R}function b(_,w){let R;for(let D=0,z=u.length;D<z;D++){let P=u[D];if(P.cacheKey===w){R=P,++R.usedTimes;break}}return R===void 0&&(R=new C1(s,w,_,r),u.push(R)),R}function E(_){if(--_.usedTimes===0){let w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function S(_){l.remove(_)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:u,dispose:T}}function L1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function D1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function tf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ef(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,y,p){let g=s[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:y,group:p},s[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=y,g.group=p),t++,g}function a(h,f,d,m,y,p){let g=o(h,f,d,m,y,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(h,f,d,m,y,p){let g=o(h,f,d,m,y,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||D1),n.length>1&&n.sort(f||tf),i.length>1&&i.sort(f||tf)}function u(){for(let h=t,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function N1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ef,s.set(n,[o])):i>=r.length?(o=new ef,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function U1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ct};break;case"SpotLight":e={position:new H,direction:new H,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function z1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var F1=0;function B1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function O1(s){let t=new U1,e=z1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Jt,o=new Jt;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,M=0,x=0,v=0,b=0,E=0,S=0;c.sort(B1);for(let _=0,w=c.length;_<w;_++){let R=c[_],D=R.color,z=R.intensity,P=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*z,h+=D.g*z,f+=D.b*z;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],z);S++}else if(R.isDirectionalLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=N,d++}else if(R.isSpotLight){let N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(D).multiplyScalar(z),N.distance=P,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[y]=N;let W=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,W.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[y]=W.matrix,R.castShadow){let B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[y]=B,n.spotShadowMap[y]=k,v++}y++}else if(R.isRectAreaLight){let N=t.get(R);N.color.copy(D).multiplyScalar(z),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=N,p++}else if(R.isPointLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let W=R.shadow,B=e.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=R.shadow.matrix,x++}n.point[m]=N,m++}else if(R.isHemisphereLight){let N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(z),N.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[g]=N,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==p||T.hemiLength!==g||T.numDirectionalShadows!==M||T.numPointShadows!==x||T.numSpotShadows!==v||T.numSpotMaps!==b||T.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,T.directionalLength=d,T.pointLength=m,T.spotLength=y,T.rectAreaLength=p,T.hemiLength=g,T.numDirectionalShadows=M,T.numPointShadows=x,T.numSpotShadows=v,T.numSpotMaps=b,T.numLightProbes=S,n.version=F1++)}function l(c,u){let h=0,f=0,d=0,m=0,y=0,p=u.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let x=c[g];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function nf(s){let t=new O1(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function k1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new nf(s),t.set(i,[a])):r>=o.length?(a=new nf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hr=class extends un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pc=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`;function V1(s,t,e){let n=new cr,i=new Mt,r=new Mt,o=new xe,a=new hr({depthPacking:_h}),l=new Pc,c={},u=e.maxTextureSize,h={[ci]:Ve,[Ve]:ci,[re]:re},f=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new te;m.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let g=this.type;this.render=function(E,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let _=s.getRenderTarget(),w=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ln),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==Xn&&this.type===Xn,P=g===Xn&&this.type!==Xn;for(let k=0,N=E.length;k<N;k++){let W=E[k],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Y=B.getFrameExtents();if(i.multiply(Y),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,B.mapSize.y=r.y)),B.map===null||z===!0||P===!0){let V=this.type!==Xn?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new Ze(i.x,i.y,V),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let K=B.getViewportCount();for(let V=0;V<K;V++){let tt=B.getViewport(V);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),D.viewport(o),B.updateMatrices(W,V),n=B.getFrustum(),v(S,T,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Xn&&M(B,T),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(_,w,R)};function M(E,S){let T=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ze(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,T,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,T,d,y,null)}function x(E,S,T,_){let w=null,R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)w=R;else if(w=T.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let D=w.uuid,z=S.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let k=P[z];k===void 0&&(k=w.clone(),P[z]=k,S.addEventListener("dispose",b)),w=k}if(w.visible=S.visible,w.wireframe=S.wireframe,_===Xn?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:h[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let D=s.properties.get(w);D.light=T}return w}function v(E,S,T,_,w){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let z=t.update(E),P=E.material;if(Array.isArray(P)){let k=z.groups;for(let N=0,W=k.length;N<W;N++){let B=k[N],Y=P[B.materialIndex];if(Y&&Y.visible){let K=x(E,Y,_,w);E.onBeforeShadow(s,E,S,T,z,K,B),s.renderBufferDirect(T,null,z,K,E,B),E.onAfterShadow(s,E,S,T,z,K,B)}}}else if(P.visible){let k=x(E,P,_,w);E.onBeforeShadow(s,E,S,T,z,k,null),s.renderBufferDirect(T,null,z,k,E,null),E.onAfterShadow(s,E,S,T,z,k,null)}}let D=E.children;for(let z=0,P=D.length;z<P;z++)v(D[z],S,T,_,w)}function b(E){E.target.removeEventListener("dispose",b);for(let T in c){let _=c[T],w=E.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var W1={[zl]:Fl,[Bl]:Hl,[Ol]:Gl,[ms]:kl,[Fl]:zl,[Hl]:Bl,[Gl]:Ol,[kl]:ms};function X1(s,t){function e(){let j=!1,Rt=new xe,gt=null,_t=new xe(0,0,0,0);return{setMask:function(Ut){gt!==Ut&&!j&&(s.colorMask(Ut,Ut,Ut,Ut),gt=Ut)},setLocked:function(Ut){j=Ut},setClear:function(Ut,Lt,ee,Te,ke){ke===!0&&(Ut*=Te,Lt*=Te,ee*=Te),Rt.set(Ut,Lt,ee,Te),_t.equals(Rt)===!1&&(s.clearColor(Ut,Lt,ee,Te),_t.copy(Rt))},reset:function(){j=!1,gt=null,_t.set(-1,0,0,0)}}}function n(){let j=!1,Rt=!1,gt=null,_t=null,Ut=null;return{setReversed:function(Lt){if(Rt!==Lt){let ee=t.get("EXT_clip_control");Rt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Te=Ut;Ut=null,this.setClear(Te)}Rt=Lt},getReversed:function(){return Rt},setTest:function(Lt){Lt?J(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(Lt){gt!==Lt&&!j&&(s.depthMask(Lt),gt=Lt)},setFunc:function(Lt){if(Rt&&(Lt=W1[Lt]),_t!==Lt){switch(Lt){case zl:s.depthFunc(s.NEVER);break;case Fl:s.depthFunc(s.ALWAYS);break;case Bl:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Ol:s.depthFunc(s.EQUAL);break;case kl:s.depthFunc(s.GEQUAL);break;case Hl:s.depthFunc(s.GREATER);break;case Gl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Lt}},setLocked:function(Lt){j=Lt},setClear:function(Lt){Ut!==Lt&&(Rt&&(Lt=1-Lt),s.clearDepth(Lt),Ut=Lt)},reset:function(){j=!1,gt=null,_t=null,Ut=null,Rt=!1}}}function i(){let j=!1,Rt=null,gt=null,_t=null,Ut=null,Lt=null,ee=null,Te=null,ke=null;return{setTest:function(me){j||(me?J(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(me){Rt!==me&&!j&&(s.stencilMask(me),Rt=me)},setFunc:function(me,pn,Bn){(gt!==me||_t!==pn||Ut!==Bn)&&(s.stencilFunc(me,pn,Bn),gt=me,_t=pn,Ut=Bn)},setOp:function(me,pn,Bn){(Lt!==me||ee!==pn||Te!==Bn)&&(s.stencilOp(me,pn,Bn),Lt=me,ee=pn,Te=Bn)},setLocked:function(me){j=me},setClear:function(me){ke!==me&&(s.clearStencil(me),ke=me)},reset:function(){j=!1,Rt=null,gt=null,_t=null,Ut=null,Lt=null,ee=null,Te=null,ke=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,y=!1,p=null,g=null,M=null,x=null,v=null,b=null,E=null,S=new Ct(0,0,0),T=0,_=!1,w=null,R=null,D=null,z=null,P=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,W=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=W>=2);let Y=null,K={},V=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),Z=new xe().fromArray(V),F=new xe().fromArray(tt);function O(j,Rt,gt,_t){let Ut=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(j,Lt),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<gt;ee++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(Rt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return Lt}let $={};$[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(ms),at(!1),xt(ru),J(s.CULL_FACE),L(Ln);function J(j){u[j]!==!0&&(s.enable(j),u[j]=!0)}function X(j){u[j]!==!1&&(s.disable(j),u[j]=!1)}function rt(j,Rt){return h[j]!==Rt?(s.bindFramebuffer(j,Rt),h[j]=Rt,j===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Rt),j===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ut(j,Rt){let gt=d,_t=!1;if(j){gt=f.get(Rt),gt===void 0&&(gt=[],f.set(Rt,gt));let Ut=j.textures;if(gt.length!==Ut.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,ee=Ut.length;Lt<ee;Lt++)gt[Lt]=s.COLOR_ATTACHMENT0+Lt;gt.length=Ut.length,_t=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(gt)}function ot(j){return m!==j?(s.useProgram(j),m=j,!0):!1}let G={[Ci]:s.FUNC_ADD,[dp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};G[mp]=s.MIN,G[gp]=s.MAX;let Q={[xp]:s.ZERO,[yp]:s.ONE,[vp]:s.SRC_COLOR,[Nl]:s.SRC_ALPHA,[Sp]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[_p]:s.DST_ALPHA,[Mp]:s.ONE_MINUS_SRC_COLOR,[Ul]:s.ONE_MINUS_SRC_ALPHA,[Ep]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function L(j,Rt,gt,_t,Ut,Lt,ee,Te,ke,me){if(j===Ln){y===!0&&(X(s.BLEND),y=!1);return}if(y===!1&&(J(s.BLEND),y=!0),j!==fp){if(j!==p||me!==_){if((g!==Ci||v!==Ci)&&(s.blendEquation(s.FUNC_ADD),g=Ci,v=Ci),me)switch(j){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hi:s.blendFunc(s.ONE,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}M=null,x=null,b=null,E=null,S.set(0,0,0),T=0,p=j,_=me}return}Ut=Ut||Rt,Lt=Lt||gt,ee=ee||_t,(Rt!==g||Ut!==v)&&(s.blendEquationSeparate(G[Rt],G[Ut]),g=Rt,v=Ut),(gt!==M||_t!==x||Lt!==b||ee!==E)&&(s.blendFuncSeparate(Q[gt],Q[_t],Q[Lt],Q[ee]),M=gt,x=_t,b=Lt,E=ee),(Te.equals(S)===!1||ke!==T)&&(s.blendColor(Te.r,Te.g,Te.b,ke),S.copy(Te),T=ke),p=j,_=!1}function ft(j,Rt){j.side===re?X(s.CULL_FACE):J(s.CULL_FACE);let gt=j.side===Ve;Rt&&(gt=!gt),at(gt),j.blending===us&&j.transparent===!1?L(Ln):L(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);let _t=j.stencilWrite;a.setTest(_t),_t&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),St(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(j){w!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),w=j)}function xt(j){j!==hp?(J(s.CULL_FACE),j!==R&&(j===ru?s.cullFace(s.BACK):j===up?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),R=j}function st(j){j!==D&&(N&&s.lineWidth(j),D=j)}function St(j,Rt,gt){j?(J(s.POLYGON_OFFSET_FILL),(z!==Rt||P!==gt)&&(s.polygonOffset(Rt,gt),z=Rt,P=gt)):X(s.POLYGON_OFFSET_FILL)}function ct(j){j?J(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function I(j){j===void 0&&(j=s.TEXTURE0+k-1),Y!==j&&(s.activeTexture(j),Y=j)}function C(j,Rt,gt){gt===void 0&&(Y===null?gt=s.TEXTURE0+k-1:gt=Y);let _t=K[gt];_t===void 0&&(_t={type:void 0,texture:void 0},K[gt]=_t),(_t.type!==j||_t.texture!==Rt)&&(Y!==gt&&(s.activeTexture(gt),Y=gt),s.bindTexture(j,Rt||$[j]),_t.type=j,_t.texture=Rt)}function q(){let j=K[Y];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function mt(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vt(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xt(j){Z.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Z.copy(j))}function At(j){F.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),F.copy(j))}function Yt(j,Rt){let gt=c.get(Rt);gt===void 0&&(gt=new WeakMap,c.set(Rt,gt));let _t=gt.get(j);_t===void 0&&(_t=s.getUniformBlockIndex(Rt,j.name),gt.set(j,_t))}function Zt(j,Rt){let _t=c.get(Rt).get(j);l.get(Rt)!==_t&&(s.uniformBlockBinding(Rt,_t,j.__bindingPointIndex),l.set(Rt,_t))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Y=null,K={},h={},f=new WeakMap,d=[],m=null,y=!1,p=null,g=null,M=null,x=null,v=null,b=null,E=null,S=new Ct(0,0,0),T=0,_=!1,w=null,R=null,D=null,z=null,P=null,Z.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:X,bindFramebuffer:rt,drawBuffers:ut,useProgram:ot,setBlending:L,setMaterial:ft,setFlipSided:at,setCullFace:xt,setLineWidth:st,setPolygonOffset:St,setScissorTest:ct,activeTexture:I,bindTexture:C,unbindTexture:q,compressedTexImage2D:lt,compressedTexImage3D:ht,texImage2D:It,texImage3D:Bt,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:Vt,texStorage3D:vt,texSubImage2D:it,texSubImage3D:mt,compressedTexSubImage2D:yt,compressedTexSubImage3D:wt,scissor:Xt,viewport:At,reset:ae}}function sf(s,t,e,n){let i=q1(n);switch(e){case Rf:return s*t;case If:return s*t;case Pf:return s*t*2;case xh:return s*t/i.components*i.byteLength;case yh:return s*t/i.components*i.byteLength;case Lf:return s*t*2/i.components*i.byteLength;case vh:return s*t*2/i.components*i.byteLength;case Cf:return s*t*3/i.components*i.byteLength;case _n:return s*t*4/i.components*i.byteLength;case Mh:return s*t*4/i.components*i.byteLength;case wo:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case So:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yl:case $l:return Math.max(s,16)*Math.max(t,8)/4;case ql:case Zl:return Math.max(s,8)*Math.max(t,8)/2;case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ao:case dc:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Df:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q1(s){switch(s){case $n:case Sf:return{byteLength:1,components:1};case ar:case Tf:case En:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Li:case ph:case Pn:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Y1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,C){return d?new OffscreenCanvas(I,C):Io("canvas")}function y(I,C,q){let lt=1,ht=ct(I);if((ht.width>q||ht.height>q)&&(lt=q/Math.max(ht.width,ht.height)),lt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let it=Math.floor(lt*ht.width),mt=Math.floor(lt*ht.height);h===void 0&&(h=m(it,mt));let yt=C?m(it,mt):h;return yt.width=it,yt.height=mt,yt.getContext("2d").drawImage(I,0,0,it,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+it+"x"+mt+")."),yt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function p(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,C,q,lt,ht=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=C;if(C===s.RED&&(q===s.FLOAT&&(it=s.R32F),q===s.HALF_FLOAT&&(it=s.R16F),q===s.UNSIGNED_BYTE&&(it=s.R8)),C===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.R8UI),q===s.UNSIGNED_SHORT&&(it=s.R16UI),q===s.UNSIGNED_INT&&(it=s.R32UI),q===s.BYTE&&(it=s.R8I),q===s.SHORT&&(it=s.R16I),q===s.INT&&(it=s.R32I)),C===s.RG&&(q===s.FLOAT&&(it=s.RG32F),q===s.HALF_FLOAT&&(it=s.RG16F),q===s.UNSIGNED_BYTE&&(it=s.RG8)),C===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RG8UI),q===s.UNSIGNED_SHORT&&(it=s.RG16UI),q===s.UNSIGNED_INT&&(it=s.RG32UI),q===s.BYTE&&(it=s.RG8I),q===s.SHORT&&(it=s.RG16I),q===s.INT&&(it=s.RG32I)),C===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGB8UI),q===s.UNSIGNED_SHORT&&(it=s.RGB16UI),q===s.UNSIGNED_INT&&(it=s.RGB32UI),q===s.BYTE&&(it=s.RGB8I),q===s.SHORT&&(it=s.RGB16I),q===s.INT&&(it=s.RGB32I)),C===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),q===s.UNSIGNED_INT&&(it=s.RGBA32UI),q===s.BYTE&&(it=s.RGBA8I),q===s.SHORT&&(it=s.RGBA16I),q===s.INT&&(it=s.RGBA32I)),C===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),C===s.RGBA){let mt=ht?ca:le.getTransfer(lt);q===s.FLOAT&&(it=s.RGBA32F),q===s.HALF_FLOAT&&(it=s.RGBA16F),q===s.UNSIGNED_BYTE&&(it=mt===pe?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(I,C){let q;return I?C===null||C===Li||C===ys?q=s.DEPTH24_STENCIL8:C===Pn?q=s.DEPTH32F_STENCIL8:C===ar&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Li||C===ys?q=s.DEPTH_COMPONENT24:C===Pn?q=s.DEPTH_COMPONENT32F:C===ar&&(q=s.DEPTH_COMPONENT16),q}function b(I,C){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==In?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function E(I){let C=I.target;C.removeEventListener("dispose",E),T(C),C.isVideoTexture&&u.delete(C)}function S(I){let C=I.target;C.removeEventListener("dispose",S),w(C)}function T(I){let C=n.get(I);if(C.__webglInit===void 0)return;let q=I.source,lt=f.get(q);if(lt){let ht=lt[C.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&_(I),Object.keys(lt).length===0&&f.delete(q)}n.remove(I)}function _(I){let C=n.get(I);s.deleteTexture(C.__webglTexture);let q=I.source,lt=f.get(q);delete lt[C.__cacheKey],o.memory.textures--}function w(I){let C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(C.__webglFramebuffer[lt]))for(let ht=0;ht<C.__webglFramebuffer[lt].length;ht++)s.deleteFramebuffer(C.__webglFramebuffer[lt][ht]);else s.deleteFramebuffer(C.__webglFramebuffer[lt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[lt])}else{if(Array.isArray(C.__webglFramebuffer))for(let lt=0;lt<C.__webglFramebuffer.length;lt++)s.deleteFramebuffer(C.__webglFramebuffer[lt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let lt=0;lt<C.__webglColorRenderbuffer.length;lt++)C.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[lt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let q=I.textures;for(let lt=0,ht=q.length;lt<ht;lt++){let it=n.get(q[lt]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(q[lt])}n.remove(I)}let R=0;function D(){R=0}function z(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function P(I){let C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function k(I,C){let q=n.get(I);if(I.isVideoTexture&&st(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let lt=I.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(q,I,C);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+C)}function N(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){F(q,I,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+C)}function W(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){F(q,I,C);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+C)}function B(I,C){let q=n.get(I);if(I.version>0&&q.__version!==I.version){O(q,I,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+C)}let Y={[ui]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[Xl]:s.MIRRORED_REPEAT},K={[on]:s.NEAREST,[Dp]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Qa]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},V={[zp]:s.NEVER,[Gp]:s.ALWAYS,[Fp]:s.LESS,[Nf]:s.LEQUAL,[Bp]:s.EQUAL,[Hp]:s.GEQUAL,[Op]:s.GREATER,[kp]:s.NOTEQUAL};function tt(I,C){if(C.type===Pn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===In||C.magFilter===Qa||C.magFilter===Vr||C.magFilter===Pi||C.minFilter===In||C.minFilter===Qa||C.minFilter===Vr||C.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Y[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Y[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Y[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,K[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,K[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,V[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===on||C.minFilter!==Vr&&C.minFilter!==Pi||C.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Z(I,C){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",E));let lt=C.source,ht=f.get(lt);ht===void 0&&(ht={},f.set(lt,ht));let it=P(C);if(it!==I.__cacheKey){ht[it]===void 0&&(ht[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[it].usedTimes++;let mt=ht[I.__cacheKey];mt!==void 0&&(ht[I.__cacheKey].usedTimes--,mt.usedTimes===0&&_(C)),I.__cacheKey=it,I.__webglTexture=ht[it].texture}return q}function F(I,C,q){let lt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(lt=s.TEXTURE_3D);let ht=Z(I,C),it=C.source;e.bindTexture(lt,I.__webglTexture,s.TEXTURE0+q);let mt=n.get(it);if(it.version!==mt.__version||ht===!0){e.activeTexture(s.TEXTURE0+q);let yt=le.getPrimaries(le.workingColorSpace),wt=C.colorSpace===oi?null:le.getPrimaries(C.colorSpace),Vt=C.colorSpace===oi||yt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let vt=y(C.image,!1,i.maxTextureSize);vt=St(C,vt);let It=r.convert(C.format,C.colorSpace),Bt=r.convert(C.type),Xt=x(C.internalFormat,It,Bt,C.colorSpace,C.isVideoTexture);tt(lt,C);let At,Yt=C.mipmaps,Zt=C.isVideoTexture!==!0,ae=mt.__version===void 0||ht===!0,j=it.dataReady,Rt=b(C,vt);if(C.isDepthTexture)Xt=v(C.format===vs,C.type),ae&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Xt,vt.width,vt.height):e.texImage2D(s.TEXTURE_2D,0,Xt,vt.width,vt.height,0,It,Bt,null));else if(C.isDataTexture)if(Yt.length>0){Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,Yt[0].width,Yt[0].height);for(let gt=0,_t=Yt.length;gt<_t;gt++)At=Yt[gt],Zt?j&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,At.width,At.height,It,Bt,At.data):e.texImage2D(s.TEXTURE_2D,gt,Xt,At.width,At.height,0,It,Bt,At.data);C.generateMipmaps=!1}else Zt?(ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,vt.width,vt.height),j&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt.width,vt.height,It,Bt,vt.data)):e.texImage2D(s.TEXTURE_2D,0,Xt,vt.width,vt.height,0,It,Bt,vt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,Yt[0].width,Yt[0].height,vt.depth);for(let gt=0,_t=Yt.length;gt<_t;gt++)if(At=Yt[gt],C.format!==_n)if(It!==null)if(Zt){if(j)if(C.layerUpdates.size>0){let Ut=sf(At.width,At.height,C.format,C.type);for(let Lt of C.layerUpdates){let ee=At.data.subarray(Lt*Ut/At.data.BYTES_PER_ELEMENT,(Lt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,Lt,At.width,At.height,1,It,ee)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,At.width,At.height,vt.depth,It,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Xt,At.width,At.height,vt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?j&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,At.width,At.height,vt.depth,It,Bt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,Xt,At.width,At.height,vt.depth,0,It,Bt,At.data)}else{Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Rt,Xt,Yt[0].width,Yt[0].height);for(let gt=0,_t=Yt.length;gt<_t;gt++)At=Yt[gt],C.format!==_n?It!==null?Zt?j&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,At.width,At.height,It,At.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,Xt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?j&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,At.width,At.height,It,Bt,At.data):e.texImage2D(s.TEXTURE_2D,gt,Xt,At.width,At.height,0,It,Bt,At.data)}else if(C.isDataArrayTexture)if(Zt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,vt.width,vt.height,vt.depth),j)if(C.layerUpdates.size>0){let gt=sf(vt.width,vt.height,C.format,C.type);for(let _t of C.layerUpdates){let Ut=vt.data.subarray(_t*gt/vt.data.BYTES_PER_ELEMENT,(_t+1)*gt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,It,Bt,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,It,Bt,vt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,vt.width,vt.height,vt.depth,0,It,Bt,vt.data);else if(C.isData3DTexture)Zt?(ae&&e.texStorage3D(s.TEXTURE_3D,Rt,Xt,vt.width,vt.height,vt.depth),j&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,It,Bt,vt.data)):e.texImage3D(s.TEXTURE_3D,0,Xt,vt.width,vt.height,vt.depth,0,It,Bt,vt.data);else if(C.isFramebufferTexture){if(ae)if(Zt)e.texStorage2D(s.TEXTURE_2D,Rt,Xt,vt.width,vt.height);else{let gt=vt.width,_t=vt.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,Xt,gt,_t,0,It,Bt,null),gt>>=1,_t>>=1}}else if(Yt.length>0){if(Zt&&ae){let gt=ct(Yt[0]);e.texStorage2D(s.TEXTURE_2D,Rt,Xt,gt.width,gt.height)}for(let gt=0,_t=Yt.length;gt<_t;gt++)At=Yt[gt],Zt?j&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,It,Bt,At):e.texImage2D(s.TEXTURE_2D,gt,Xt,It,Bt,At);C.generateMipmaps=!1}else if(Zt){if(ae){let gt=ct(vt);e.texStorage2D(s.TEXTURE_2D,Rt,Xt,gt.width,gt.height)}j&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Bt,vt)}else e.texImage2D(s.TEXTURE_2D,0,Xt,It,Bt,vt);p(C)&&g(lt),mt.__version=it.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function O(I,C,q){if(C.image.length!==6)return;let lt=Z(I,C),ht=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);let it=n.get(ht);if(ht.version!==it.__version||lt===!0){e.activeTexture(s.TEXTURE0+q);let mt=le.getPrimaries(le.workingColorSpace),yt=C.colorSpace===oi?null:le.getPrimaries(C.colorSpace),wt=C.colorSpace===oi||mt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Vt=C.isCompressedTexture||C.image[0].isCompressedTexture,vt=C.image[0]&&C.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!Vt&&!vt?It[_t]=y(C.image[_t],!0,i.maxCubemapSize):It[_t]=vt?C.image[_t].image:C.image[_t],It[_t]=St(C,It[_t]);let Bt=It[0],Xt=r.convert(C.format,C.colorSpace),At=r.convert(C.type),Yt=x(C.internalFormat,Xt,At,C.colorSpace),Zt=C.isVideoTexture!==!0,ae=it.__version===void 0||lt===!0,j=ht.dataReady,Rt=b(C,Bt);tt(s.TEXTURE_CUBE_MAP,C);let gt;if(Vt){Zt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Yt,Bt.width,Bt.height);for(let _t=0;_t<6;_t++){gt=It[_t].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){let Lt=gt[Ut];C.format!==_n?Xt!==null?Zt?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Lt.width,Lt.height,Xt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Lt.width,Lt.height,Xt,At,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,Yt,Lt.width,Lt.height,0,Xt,At,Lt.data)}}}else{if(gt=C.mipmaps,Zt&&ae){gt.length>0&&Rt++;let _t=ct(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Yt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){Zt?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Xt,At,It[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,It[_t].width,It[_t].height,0,Xt,At,It[_t].data);for(let Ut=0;Ut<gt.length;Ut++){let ee=gt[Ut].image[_t].image;Zt?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,ee.width,ee.height,Xt,At,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,Yt,ee.width,ee.height,0,Xt,At,ee.data)}}else{Zt?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,At,It[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,Xt,At,It[_t]);for(let Ut=0;Ut<gt.length;Ut++){let Lt=gt[Ut];Zt?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Xt,At,Lt.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,Yt,Xt,At,Lt.image[_t])}}}p(C)&&g(s.TEXTURE_CUBE_MAP),it.__version=ht.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function $(I,C,q,lt,ht,it){let mt=r.convert(q.format,q.colorSpace),yt=r.convert(q.type),wt=x(q.internalFormat,mt,yt,q.colorSpace),Vt=n.get(C),vt=n.get(q);if(vt.__renderTarget=C,!Vt.__hasExternalTextures){let It=Math.max(1,C.width>>it),Bt=Math.max(1,C.height>>it);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,it,wt,It,Bt,C.depth,0,mt,yt,null):e.texImage2D(ht,it,wt,It,Bt,0,mt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),xt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,ht,vt.__webglTexture,0,at(C)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,ht,vt.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function J(I,C,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){let lt=C.depthTexture,ht=lt&&lt.isDepthTexture?lt.type:null,it=v(C.stencilBuffer,ht),mt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=at(C);xt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,it,C.width,C.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,it,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,it,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,I)}else{let lt=C.textures;for(let ht=0;ht<lt.length;ht++){let it=lt[ht],mt=r.convert(it.format,it.colorSpace),yt=r.convert(it.type),wt=x(it.internalFormat,mt,yt,it.colorSpace),Vt=at(C);q&&xt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,wt,C.width,C.height):xt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,wt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,wt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function X(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=n.get(C.depthTexture);lt.__renderTarget=C,(!lt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);let ht=lt.__webglTexture,it=at(C);if(C.depthTexture.format===fs)xt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(C.depthTexture.format===vs)xt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function rt(I){let C=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){let lt=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),lt){let ht=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,lt.removeEventListener("dispose",ht)};lt.addEventListener("dispose",ht),C.__depthDisposeCallback=ht}C.__boundDepthTexture=lt}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");X(C.__webglFramebuffer,I)}else if(q){C.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[lt]),C.__webglDepthbuffer[lt]===void 0)C.__webglDepthbuffer[lt]=s.createRenderbuffer(),J(C.__webglDepthbuffer[lt],I,!1);else{let ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=C.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,it)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),J(C.__webglDepthbuffer,I,!1);else{let lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(I,C,q){let lt=n.get(I);C!==void 0&&$(lt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&rt(I)}function ot(I){let C=I.texture,q=n.get(I),lt=n.get(C);I.addEventListener("dispose",S);let ht=I.textures,it=I.isWebGLCubeRenderTarget===!0,mt=ht.length>1;if(mt||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=C.version,o.memory.textures++),it){q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[yt]=[];for(let wt=0;wt<C.mipmaps.length;wt++)q.__webglFramebuffer[yt][wt]=s.createFramebuffer()}else q.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let yt=0;yt<C.mipmaps.length;yt++)q.__webglFramebuffer[yt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(mt)for(let yt=0,wt=ht.length;yt<wt;yt++){let Vt=n.get(ht[yt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&xt(I)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let yt=0;yt<ht.length;yt++){let wt=ht[yt];q.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[yt]);let Vt=r.convert(wt.format,wt.colorSpace),vt=r.convert(wt.type),It=x(wt.internalFormat,Vt,vt,wt.colorSpace,I.isXRRenderTarget===!0),Bt=at(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,It,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,q.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),J(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),tt(s.TEXTURE_CUBE_MAP,C);for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0)for(let wt=0;wt<C.mipmaps.length;wt++)$(q.__webglFramebuffer[yt][wt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt);else $(q.__webglFramebuffer[yt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(C)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let yt=0,wt=ht.length;yt<wt;yt++){let Vt=ht[yt],vt=n.get(Vt);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),tt(s.TEXTURE_2D,Vt),$(q.__webglFramebuffer,I,Vt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),p(Vt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,lt.__webglTexture),tt(yt,C),C.mipmaps&&C.mipmaps.length>0)for(let wt=0;wt<C.mipmaps.length;wt++)$(q.__webglFramebuffer[wt],I,C,s.COLOR_ATTACHMENT0,yt,wt);else $(q.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,yt,0);p(C)&&g(yt),e.unbindTexture()}I.depthBuffer&&rt(I)}function G(I){let C=I.textures;for(let q=0,lt=C.length;q<lt;q++){let ht=C[q];if(p(ht)){let it=M(I),mt=n.get(ht).__webglTexture;e.bindTexture(it,mt),g(it),e.unbindTexture()}}}let Q=[],L=[];function ft(I){if(I.samples>0){if(xt(I)===!1){let C=I.textures,q=I.width,lt=I.height,ht=s.COLOR_BUFFER_BIT,it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(I),yt=C.length>1;if(yt)for(let wt=0;wt<C.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let wt=0;wt<C.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);let Vt=n.get(C[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,q,lt,0,0,q,lt,ht,s.NEAREST),l===!0&&(Q.length=0,L.length=0,Q.push(s.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Q.push(it),L.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let wt=0;wt<C.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);let Vt=n.get(C[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function at(I){return Math.min(i.maxSamples,I.samples)}function xt(I){let C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function st(I){let C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function St(I,C){let q=I.colorSpace,lt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Cs&&q!==oi&&(le.getTransfer(q)===pe?(lt!==_n||ht!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=ut,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=xt}function Z1(s,t){function e(n,i=oi){let r,o=le.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===mh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return s.BYTE;if(n===Tf)return s.SHORT;if(n===ar)return s.UNSIGNED_SHORT;if(n===ph)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===En)return s.HALF_FLOAT;if(n===Rf)return s.ALPHA;if(n===Cf)return s.RGB;if(n===_n)return s.RGBA;if(n===If)return s.LUMINANCE;if(n===Pf)return s.LUMINANCE_ALPHA;if(n===fs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===xh)return s.RED;if(n===yh)return s.RED_INTEGER;if(n===Lf)return s.RG;if(n===vh)return s.RG_INTEGER;if(n===Mh)return s.RGBA_INTEGER;if(n===wo||n===Eo||n===So||n===To)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Kl||n===jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===Kl)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===dc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Df||n===mc||n===gc||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Lc=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},$1={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Qe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:J1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends fi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,y=new Dc,p=e.getContextAttributes(),g=null,M=null,x=[],v=[],b=new Mt,E=null,S=new Oe;S.viewport=new xe;let T=new Oe;T.viewport=new xe;let _=[S,T],w=new Lc,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=x[F];return O===void 0&&(O=new sr,x[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=x[F];return O===void 0&&(O=new sr,x[F]=O),O.getGripSpace()},this.getHand=function(F){let O=x[F];return O===void 0&&(O=new sr,x[F]=O),O.getHandSpace()};function z(F){let O=v.indexOf(F.inputSource);if(O===-1)return;let $=x[O];$!==void 0&&($.update(F.inputSource,F.frame,c||o),$.dispatchEvent({type:F.type,data:F.inputSource}))}function P(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",k);for(let F=0;F<x.length;F++){let O=v[F];O!==null&&(v[F]=null,x[F].disconnect(O))}R=null,D=null,y.reset(),t.setRenderTarget(g),d=null,f=null,h=null,i=null,M=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",P),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0){let O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ze(d.framebufferWidth,d.framebufferHeight,{format:_n,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,$=null,J=null;p.depth&&(J=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=p.stencil?vs:fs,$=p.stencil?ys:Li);let X={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(X),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ze(f.textureWidth,f.textureHeight,{format:_n,type:$n,depthTexture:new Fo(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(F){for(let O=0;O<F.removed.length;O++){let $=F.removed[O],J=v.indexOf($);J>=0&&(v[J]=null,x[J].disconnect($))}for(let O=0;O<F.added.length;O++){let $=F.added[O],J=v.indexOf($);if(J===-1){for(let rt=0;rt<x.length;rt++)if(rt>=v.length){v.push($),J=rt;break}else if(v[rt]===null){v[rt]=$,J=rt;break}if(J===-1)break}let X=x[J];X&&X.connect($)}}let N=new H,W=new H;function B(F,O,$){N.setFromMatrixPosition(O.matrixWorld),W.setFromMatrixPosition($.matrixWorld);let J=N.distanceTo(W),X=O.projectionMatrix.elements,rt=$.projectionMatrix.elements,ut=X[14]/(X[10]-1),ot=X[14]/(X[10]+1),G=(X[9]+1)/X[5],Q=(X[9]-1)/X[5],L=(X[8]-1)/X[0],ft=(rt[8]+1)/rt[0],at=ut*L,xt=ut*ft,st=J/(-L+ft),St=st*-L;if(O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(St),F.translateZ(st),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),X[10]===-1)F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let ct=ut+st,I=ot+st,C=at-St,q=xt+(J-St),lt=G*ot/I*ct,ht=Q*ot/I*ct;F.projectionMatrix.makePerspective(C,q,lt,ht,ct,I),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Y(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let O=F.near,$=F.far;y.texture!==null&&(y.depthNear>0&&(O=y.depthNear),y.depthFar>0&&($=y.depthFar)),w.near=T.near=S.near=O,w.far=T.far=S.far=$,(R!==w.near||D!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,D=w.far),S.layers.mask=F.layers.mask|2,T.layers.mask=F.layers.mask|4,w.layers.mask=S.layers.mask|T.layers.mask;let J=F.parent,X=w.cameras;Y(w,J);for(let rt=0;rt<X.length;rt++)Y(X[rt],J);X.length===2?B(w,S,T):w.projectionMatrix.copy(S.projectionMatrix),K(F,w,J)};function K(F,O,$){$===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ms*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let V=null;function tt(F,O){if(u=O.getViewerPose(c||o),m=O,u!==null){let $=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let J=!1;$.length!==w.cameras.length&&(w.cameras.length=0,J=!0);for(let rt=0;rt<$.length;rt++){let ut=$[rt],ot=null;if(d!==null)ot=d.getViewport(ut);else{let Q=h.getViewSubImage(f,ut);ot=Q.viewport,rt===0&&(t.setRenderTargetTextures(M,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(M))}let G=_[rt];G===void 0&&(G=new Oe,G.layers.enable(rt),G.viewport=new xe,_[rt]=G),G.matrix.fromArray(ut.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ut.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(ot.x,ot.y,ot.width,ot.height),rt===0&&(w.matrix.copy(G.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),J===!0&&w.cameras.push(G)}let X=i.enabledFeatures;if(X&&X.includes("depth-sensing")){let rt=h.getDepthInformation($[0]);rt&&rt.isValid&&rt.texture&&y.init(t,rt,i.renderState)}}for(let $=0;$<x.length;$++){let J=v[$],X=x[$];J!==null&&X!==void 0&&X.update(J,O,c||o)}V&&V(F,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}let Z=new kf;Z.setAnimationLoop(tt),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}},Ai=new $e,j1=new Jt;function Q1(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Of(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ve&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ve&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Ai)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ve&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ty(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(m(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));let b=x.program;n.updateUBOMapping(M,b);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){let x=h();M.__bindingPointIndex=x;let v=s.createBuffer(),b=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=i[M.id],v=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,S=v.length;E<S;E++){let T=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,w=T.length;_<w;_++){let R=T[_];if(d(R,E,_,b)===!0){let D=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],P=0;for(let k=0;k<z.length;k++){let N=z[k],W=y(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,D+P,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,v,b){let E=M.value,S=x+"_"+v;if(b[S]===void 0)return typeof E=="number"||typeof E=="boolean"?b[S]=E:b[S]=E.clone(),!0;{let T=b[S];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return b[S]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function m(M){let x=M.uniforms,v=0,b=16;for(let S=0,T=x.length;S<T;S++){let _=Array.isArray(x[S])?x[S]:[x[S]];for(let w=0,R=_.length;w<R;w++){let D=_[w],z=Array.isArray(D.value)?D.value:[D.value];for(let P=0,k=z.length;P<k;P++){let N=z[P],W=y(N),B=v%b,Y=B%W.boundary,K=B+Y;v+=Y,K!==0&&b-K<W.storage&&(v+=b-K),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=W.storage}}}let E=v%b;return E>0&&(v+=b-E),M.__size=v,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}var Bo=class{constructor(t={}){let{canvas:e=r0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),y=new Int32Array(4),p=null,g=null,M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=li,this.toneMappingExposure=1;let v=this,b=!1,E=0,S=0,T=null,_=-1,w=null,R=new xe,D=new xe,z=null,P=new Ct(0),k=0,N=e.width,W=e.height,B=1,Y=null,K=null,V=new xe(0,0,N,W),tt=new xe(0,0,N,W),Z=!1,F=new cr,O=!1,$=!1,J=new Jt,X=new Jt,rt=new H,ut=new xe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G=!1;function Q(){return T===null?B:1}let L=n;function ft(U,et){return e.getContext(U,et)}try{let U={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),L===null){let et="webgl2";if(L=ft(et,U),L===null)throw ft(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let at,xt,st,St,ct,I,C,q,lt,ht,it,mt,yt,wt,Vt,vt,It,Bt,Xt,At,Yt,Zt,ae,j;function Rt(){at=new gx(L),at.init(),Zt=new Z1(L,at),xt=new hx(L,at,t,Zt),st=new X1(L,at),xt.reverseDepthBuffer&&f&&st.buffers.depth.setReversed(!0),St=new vx(L),ct=new L1,I=new Y1(L,at,st,ct,xt,Zt,St),C=new fx(v),q=new mx(v),lt=new T0(L),ae=new lx(L,lt),ht=new xx(L,lt,St,ae),it=new _x(L,ht,lt,St),Xt=new Mx(L,xt,I),vt=new ux(ct),mt=new P1(v,C,q,at,xt,ae,vt),yt=new Q1(v,ct),wt=new N1,Vt=new k1(at),Bt=new ax(v,C,q,st,it,d,l),It=new V1(v,it,xt),j=new ty(L,St,xt,st),At=new cx(L,at,St),Yt=new yx(L,at,St),St.programs=mt.programs,v.capabilities=xt,v.extensions=at,v.properties=ct,v.renderLists=wt,v.shadowMap=It,v.state=st,v.info=St}Rt();let gt=new Nc(v,L);this.xr=gt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let U=at.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=at.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(U){U!==void 0&&(B=U,this.setSize(N,W,!1))},this.getSize=function(U){return U.set(N,W)},this.setSize=function(U,et,dt=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=U,W=et,e.width=Math.floor(U*B),e.height=Math.floor(et*B),dt===!0&&(e.style.width=U+"px",e.style.height=et+"px"),this.setViewport(0,0,U,et)},this.getDrawingBufferSize=function(U){return U.set(N*B,W*B).floor()},this.setDrawingBufferSize=function(U,et,dt){N=U,W=et,B=dt,e.width=Math.floor(U*dt),e.height=Math.floor(et*dt),this.setViewport(0,0,U,et)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(V)},this.setViewport=function(U,et,dt,pt){U.isVector4?V.set(U.x,U.y,U.z,U.w):V.set(U,et,dt,pt),st.viewport(R.copy(V).multiplyScalar(B).round())},this.getScissor=function(U){return U.copy(tt)},this.setScissor=function(U,et,dt,pt){U.isVector4?tt.set(U.x,U.y,U.z,U.w):tt.set(U,et,dt,pt),st.scissor(D.copy(tt).multiplyScalar(B).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(U){st.setScissorTest(Z=U)},this.setOpaqueSort=function(U){Y=U},this.setTransparentSort=function(U){K=U},this.getClearColor=function(U){return U.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(U=!0,et=!0,dt=!0){let pt=0;if(U){let nt=!1;if(T!==null){let Tt=T.texture.format;nt=Tt===Mh||Tt===vh||Tt===yh}if(nt){let Tt=T.texture.type,Dt=Tt===$n||Tt===Li||Tt===ar||Tt===ys||Tt===mh||Tt===gh,Ot=Bt.getClearColor(),kt=Bt.getClearAlpha(),jt=Ot.r,ne=Ot.g,Ht=Ot.b;Dt?(m[0]=jt,m[1]=ne,m[2]=Ht,m[3]=kt,L.clearBufferuiv(L.COLOR,0,m)):(y[0]=jt,y[1]=ne,y[2]=Ht,y[3]=kt,L.clearBufferiv(L.COLOR,0,y))}else pt|=L.COLOR_BUFFER_BIT}et&&(pt|=L.DEPTH_BUFFER_BIT),dt&&(pt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),wt.dispose(),Vt.dispose(),ct.dispose(),C.dispose(),q.dispose(),it.dispose(),ae.dispose(),j.dispose(),mt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Kh),gt.removeEventListener("sessionend",jh),_i.stop()};function _t(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let U=St.autoReset,et=It.enabled,dt=It.autoUpdate,pt=It.needsUpdate,nt=It.type;Rt(),St.autoReset=U,It.enabled=et,It.autoUpdate=dt,It.needsUpdate=pt,It.type=nt}function Lt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ee(U){let et=U.target;et.removeEventListener("dispose",ee),Te(et)}function Te(U){ke(U),ct.remove(U)}function ke(U){let et=ct.get(U).programs;et!==void 0&&(et.forEach(function(dt){mt.releaseProgram(dt)}),U.isShaderMaterial&&mt.releaseShaderCache(U))}this.renderBufferDirect=function(U,et,dt,pt,nt,Tt){et===null&&(et=ot);let Dt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ot=ap(U,et,dt,pt,nt);st.setMaterial(pt,Dt);let kt=dt.index,jt=1;if(pt.wireframe===!0){if(kt=ht.getWireframeAttribute(dt),kt===void 0)return;jt=2}let ne=dt.drawRange,Ht=dt.attributes.position,ue=ne.start*jt,ve=(ne.start+ne.count)*jt;Tt!==null&&(ue=Math.max(ue,Tt.start*jt),ve=Math.min(ve,(Tt.start+Tt.count)*jt)),kt!==null?(ue=Math.max(ue,0),ve=Math.min(ve,kt.count)):Ht!=null&&(ue=Math.max(ue,0),ve=Math.min(ve,Ht.count));let Me=ve-ue;if(Me<0||Me===1/0)return;ae.setup(nt,pt,Ot,dt,kt);let je,fe=At;if(kt!==null&&(je=lt.get(kt),fe=Yt,fe.setIndex(je)),nt.isMesh)pt.wireframe===!0?(st.setLineWidth(pt.wireframeLinewidth*Q()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(nt.isLine){let Wt=pt.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*Q()),nt.isLineSegments?fe.setMode(L.LINES):nt.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else nt.isPoints?fe.setMode(L.POINTS):nt.isSprite&&fe.setMode(L.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)fe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))fe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Wt=nt._multiDrawStarts,On=nt._multiDrawCounts,de=nt._multiDrawCount,mn=kt?lt.get(kt).bytesPerElement:1,Vi=ct.get(pt).currentProgram.getUniforms();for(let nn=0;nn<de;nn++)Vi.setValue(L,"_gl_DrawID",nn),fe.render(Wt[nn]/mn,On[nn])}else if(nt.isInstancedMesh)fe.renderInstances(ue,Me,nt.count);else if(dt.isInstancedBufferGeometry){let Wt=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,On=Math.min(dt.instanceCount,Wt);fe.renderInstances(ue,Me,On)}else fe.render(ue,Me)};function me(U,et,dt){U.transparent===!0&&U.side===re&&U.forceSinglePass===!1?(U.side=Ve,U.needsUpdate=!0,Gr(U,et,dt),U.side=ci,U.needsUpdate=!0,Gr(U,et,dt),U.side=re):Gr(U,et,dt)}this.compile=function(U,et,dt=null){dt===null&&(dt=U),g=Vt.get(dt),g.init(et),x.push(g),dt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),U!==dt&&U.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),g.setupLights();let pt=new Set;return U.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Tt=nt.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){let Ot=Tt[Dt];me(Ot,dt,nt),pt.add(Ot)}else me(Tt,dt,nt),pt.add(Tt)}),x.pop(),g=null,pt},this.compileAsync=function(U,et,dt=null){let pt=this.compile(U,et,dt);return new Promise(nt=>{function Tt(){if(pt.forEach(function(Dt){ct.get(Dt).currentProgram.isReady()&&pt.delete(Dt)}),pt.size===0){nt(U);return}setTimeout(Tt,10)}at.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let pn=null;function Bn(U){pn&&pn(U)}function Kh(){_i.stop()}function jh(){_i.start()}let _i=new kf;_i.setAnimationLoop(Bn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(U){pn=U,gt.setAnimationLoop(U),U===null?_i.stop():_i.start()},gt.addEventListener("sessionstart",Kh),gt.addEventListener("sessionend",jh),this.render=function(U,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(et),et=gt.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,et,T),g=Vt.get(U,x.length),g.init(et),x.push(g),X.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F.setFromProjectionMatrix(X),$=this.localClippingEnabled,O=vt.init(this.clippingPlanes,$),p=wt.get(U,M.length),p.init(),M.push(p),gt.enabled===!0&&gt.isPresenting===!0){let Tt=v.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,et,-1/0,v.sortObjects)}ja(U,et,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Y,K),G=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,G&&Bt.addToRenderList(p,U),this.info.render.frame++,O===!0&&vt.beginShadows();let dt=g.state.shadowsArray;It.render(dt,U,et),O===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let pt=p.opaque,nt=p.transmissive;if(g.setupLights(),et.isArrayCamera){let Tt=et.cameras;if(nt.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){let kt=Tt[Dt];tu(pt,nt,U,kt)}G&&Bt.render(U);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){let kt=Tt[Dt];Qh(p,U,kt,kt.viewport)}}else nt.length>0&&tu(pt,nt,U,et),G&&Bt.render(U),Qh(p,U,et);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(v,U,et),ae.resetDefaultState(),_=-1,w=null,x.pop(),x.length>0?(g=x[x.length-1],O===!0&&vt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ja(U,et,dt,pt){if(U.visible===!1)return;if(U.layers.test(et.layers)){if(U.isGroup)dt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(et);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||F.intersectsSprite(U)){pt&&ut.setFromMatrixPosition(U.matrixWorld).applyMatrix4(X);let Dt=it.update(U),Ot=U.material;Ot.visible&&p.push(U,Dt,Ot,dt,ut.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||F.intersectsObject(U))){let Dt=it.update(U),Ot=U.material;if(pt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ut.copy(U.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ut.copy(Dt.boundingSphere.center)),ut.applyMatrix4(U.matrixWorld).applyMatrix4(X)),Array.isArray(Ot)){let kt=Dt.groups;for(let jt=0,ne=kt.length;jt<ne;jt++){let Ht=kt[jt],ue=Ot[Ht.materialIndex];ue&&ue.visible&&p.push(U,Dt,ue,dt,ut.z,Ht)}}else Ot.visible&&p.push(U,Dt,Ot,dt,ut.z,null)}}let Tt=U.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)ja(Tt[Dt],et,dt,pt)}function Qh(U,et,dt,pt){let nt=U.opaque,Tt=U.transmissive,Dt=U.transparent;g.setupLightsView(dt),O===!0&&vt.setGlobalState(v.clippingPlanes,dt),pt&&st.viewport(R.copy(pt)),nt.length>0&&Hr(nt,et,dt),Tt.length>0&&Hr(Tt,et,dt),Dt.length>0&&Hr(Dt,et,dt),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function tu(U,et,dt,pt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[pt.id]===void 0&&(g.state.transmissionRenderTarget[pt.id]=new Ze(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?En:$n,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let Tt=g.state.transmissionRenderTarget[pt.id],Dt=pt.viewport||R;Tt.setSize(Dt.z,Dt.w);let Ot=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(P),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),G&&Bt.render(dt);let kt=v.toneMapping;v.toneMapping=li;let jt=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),g.setupLightsView(pt),O===!0&&vt.setGlobalState(v.clippingPlanes,pt),Hr(U,dt,pt),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),at.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ht=0,ue=et.length;Ht<ue;Ht++){let ve=et[Ht],Me=ve.object,je=ve.geometry,fe=ve.material,Wt=ve.group;if(fe.side===re&&Me.layers.test(pt.layers)){let On=fe.side;fe.side=Ve,fe.needsUpdate=!0,eu(Me,dt,pt,je,fe,Wt),fe.side=On,fe.needsUpdate=!0,ne=!0}}ne===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}v.setRenderTarget(Ot),v.setClearColor(P,k),jt!==void 0&&(pt.viewport=jt),v.toneMapping=kt}function Hr(U,et,dt){let pt=et.isScene===!0?et.overrideMaterial:null;for(let nt=0,Tt=U.length;nt<Tt;nt++){let Dt=U[nt],Ot=Dt.object,kt=Dt.geometry,jt=pt===null?Dt.material:pt,ne=Dt.group;Ot.layers.test(dt.layers)&&eu(Ot,et,dt,kt,jt,ne)}}function eu(U,et,dt,pt,nt,Tt){U.onBeforeRender(v,et,dt,pt,nt,Tt),U.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),nt.onBeforeRender(v,et,dt,pt,U,Tt),nt.transparent===!0&&nt.side===re&&nt.forceSinglePass===!1?(nt.side=Ve,nt.needsUpdate=!0,v.renderBufferDirect(dt,et,pt,nt,U,Tt),nt.side=ci,nt.needsUpdate=!0,v.renderBufferDirect(dt,et,pt,nt,U,Tt),nt.side=re):v.renderBufferDirect(dt,et,pt,nt,U,Tt),U.onAfterRender(v,et,dt,pt,nt,Tt)}function Gr(U,et,dt){et.isScene!==!0&&(et=ot);let pt=ct.get(U),nt=g.state.lights,Tt=g.state.shadowsArray,Dt=nt.state.version,Ot=mt.getParameters(U,nt.state,Tt,et,dt),kt=mt.getProgramCacheKey(Ot),jt=pt.programs;pt.environment=U.isMeshStandardMaterial?et.environment:null,pt.fog=et.fog,pt.envMap=(U.isMeshStandardMaterial?q:C).get(U.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&U.envMap===null?et.environmentRotation:U.envMapRotation,jt===void 0&&(U.addEventListener("dispose",ee),jt=new Map,pt.programs=jt);let ne=jt.get(kt);if(ne!==void 0){if(pt.currentProgram===ne&&pt.lightsStateVersion===Dt)return iu(U,Ot),ne}else Ot.uniforms=mt.getUniforms(U),U.onBeforeCompile(Ot,v),ne=mt.acquireProgram(Ot,kt),jt.set(kt,ne),pt.uniforms=Ot.uniforms;let Ht=pt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ht.clippingPlanes=vt.uniform),iu(U,Ot),pt.needsLights=cp(U),pt.lightsStateVersion=Dt,pt.needsLights&&(Ht.ambientLightColor.value=nt.state.ambient,Ht.lightProbe.value=nt.state.probe,Ht.directionalLights.value=nt.state.directional,Ht.directionalLightShadows.value=nt.state.directionalShadow,Ht.spotLights.value=nt.state.spot,Ht.spotLightShadows.value=nt.state.spotShadow,Ht.rectAreaLights.value=nt.state.rectArea,Ht.ltc_1.value=nt.state.rectAreaLTC1,Ht.ltc_2.value=nt.state.rectAreaLTC2,Ht.pointLights.value=nt.state.point,Ht.pointLightShadows.value=nt.state.pointShadow,Ht.hemisphereLights.value=nt.state.hemi,Ht.directionalShadowMap.value=nt.state.directionalShadowMap,Ht.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ht.spotShadowMap.value=nt.state.spotShadowMap,Ht.spotLightMatrix.value=nt.state.spotLightMatrix,Ht.spotLightMap.value=nt.state.spotLightMap,Ht.pointShadowMap.value=nt.state.pointShadowMap,Ht.pointShadowMatrix.value=nt.state.pointShadowMatrix),pt.currentProgram=ne,pt.uniformsList=null,ne}function nu(U){if(U.uniformsList===null){let et=U.currentProgram.getUniforms();U.uniformsList=ps.seqWithValue(et.seq,U.uniforms)}return U.uniformsList}function iu(U,et){let dt=ct.get(U);dt.outputColorSpace=et.outputColorSpace,dt.batching=et.batching,dt.batchingColor=et.batchingColor,dt.instancing=et.instancing,dt.instancingColor=et.instancingColor,dt.instancingMorph=et.instancingMorph,dt.skinning=et.skinning,dt.morphTargets=et.morphTargets,dt.morphNormals=et.morphNormals,dt.morphColors=et.morphColors,dt.morphTargetsCount=et.morphTargetsCount,dt.numClippingPlanes=et.numClippingPlanes,dt.numIntersection=et.numClipIntersection,dt.vertexAlphas=et.vertexAlphas,dt.vertexTangents=et.vertexTangents,dt.toneMapping=et.toneMapping}function ap(U,et,dt,pt,nt){et.isScene!==!0&&(et=ot),I.resetTextureUnits();let Tt=et.fog,Dt=pt.isMeshStandardMaterial?et.environment:null,Ot=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cs,kt=(pt.isMeshStandardMaterial?q:C).get(pt.envMap||Dt),jt=pt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ne=!!dt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Ht=!!dt.morphAttributes.position,ue=!!dt.morphAttributes.normal,ve=!!dt.morphAttributes.color,Me=li;pt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Me=v.toneMapping);let je=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,fe=je!==void 0?je.length:0,Wt=ct.get(pt),On=g.state.lights;if(O===!0&&($===!0||U!==w)){let cn=U===w&&pt.id===_;vt.setState(pt,U,cn)}let de=!1;pt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==On.state.version||Wt.outputColorSpace!==Ot||nt.isBatchedMesh&&Wt.batching===!1||!nt.isBatchedMesh&&Wt.batching===!0||nt.isBatchedMesh&&Wt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Wt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Wt.instancing===!1||!nt.isInstancedMesh&&Wt.instancing===!0||nt.isSkinnedMesh&&Wt.skinning===!1||!nt.isSkinnedMesh&&Wt.skinning===!0||nt.isInstancedMesh&&Wt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Wt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Wt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Wt.instancingMorph===!1&&nt.morphTexture!==null||Wt.envMap!==kt||pt.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==vt.numPlanes||Wt.numIntersection!==vt.numIntersection)||Wt.vertexAlphas!==jt||Wt.vertexTangents!==ne||Wt.morphTargets!==Ht||Wt.morphNormals!==ue||Wt.morphColors!==ve||Wt.toneMapping!==Me||Wt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Wt.__version=pt.version);let mn=Wt.currentProgram;de===!0&&(mn=Gr(pt,et,nt));let Vi=!1,nn=!1,Hs=!1,_e=mn.getUniforms(),Rn=Wt.uniforms;if(st.useProgram(mn.program)&&(Vi=!0,nn=!0,Hs=!0),pt.id!==_&&(_=pt.id,nn=!0),Vi||w!==U){st.buffers.depth.getReversed()?(J.copy(U.projectionMatrix),a0(J),l0(J),_e.setValue(L,"projectionMatrix",J)):_e.setValue(L,"projectionMatrix",U.projectionMatrix),_e.setValue(L,"viewMatrix",U.matrixWorldInverse);let jn=_e.map.cameraPosition;jn!==void 0&&jn.setValue(L,rt.setFromMatrixPosition(U.matrixWorld)),xt.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&_e.setValue(L,"isOrthographic",U.isOrthographicCamera===!0),w!==U&&(w=U,nn=!0,Hs=!0)}if(nt.isSkinnedMesh){_e.setOptional(L,nt,"bindMatrix"),_e.setOptional(L,nt,"bindMatrixInverse");let cn=nt.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),_e.setValue(L,"boneTexture",cn.boneTexture,I))}nt.isBatchedMesh&&(_e.setOptional(L,nt,"batchingTexture"),_e.setValue(L,"batchingTexture",nt._matricesTexture,I),_e.setOptional(L,nt,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",nt._indirectTexture,I),_e.setOptional(L,nt,"batchingColorTexture"),nt._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",nt._colorsTexture,I));let Gs=dt.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Xt.update(nt,dt,mn),(nn||Wt.receiveShadow!==nt.receiveShadow)&&(Wt.receiveShadow=nt.receiveShadow,_e.setValue(L,"receiveShadow",nt.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Rn.envMap.value=kt,Rn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&et.environment!==null&&(Rn.envMapIntensity.value=et.environmentIntensity),nn&&(_e.setValue(L,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&lp(Rn,Hs),Tt&&pt.fog===!0&&yt.refreshFogUniforms(Rn,Tt),yt.refreshMaterialUniforms(Rn,pt,B,W,g.state.transmissionRenderTarget[U.id]),ps.upload(L,nu(Wt),Rn,I)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ps.upload(L,nu(Wt),Rn,I),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&_e.setValue(L,"center",nt.center),_e.setValue(L,"modelViewMatrix",nt.modelViewMatrix),_e.setValue(L,"normalMatrix",nt.normalMatrix),_e.setValue(L,"modelMatrix",nt.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){let cn=pt.uniformsGroups;for(let jn=0,Qn=cn.length;jn<Qn;jn++){let su=cn[jn];j.update(su,mn),j.bind(su,mn)}}return mn}function lp(U,et){U.ambientLightColor.needsUpdate=et,U.lightProbe.needsUpdate=et,U.directionalLights.needsUpdate=et,U.directionalLightShadows.needsUpdate=et,U.pointLights.needsUpdate=et,U.pointLightShadows.needsUpdate=et,U.spotLights.needsUpdate=et,U.spotLightShadows.needsUpdate=et,U.rectAreaLights.needsUpdate=et,U.hemisphereLights.needsUpdate=et}function cp(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,et,dt){ct.get(U.texture).__webglTexture=et,ct.get(U.depthTexture).__webglTexture=dt;let pt=ct.get(U);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=dt===void 0,pt.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,et){let dt=ct.get(U);dt.__webglFramebuffer=et,dt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(U,et=0,dt=0){T=U,E=et,S=dt;let pt=!0,nt=null,Tt=!1,Dt=!1;if(U){let kt=ct.get(U);if(kt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(L.FRAMEBUFFER,null),pt=!1;else if(kt.__webglFramebuffer===void 0)I.setupRenderTarget(U);else if(kt.__hasExternalTextures)I.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Ht=U.depthTexture;if(kt.__boundDepthTexture!==Ht){if(Ht!==null&&ct.has(Ht)&&(U.width!==Ht.image.width||U.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(U)}}let jt=U.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Dt=!0);let ne=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ne[et])?nt=ne[et][dt]:nt=ne[et],Tt=!0):U.samples>0&&I.useMultisampledRTT(U)===!1?nt=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(ne)?nt=ne[dt]:nt=ne,R.copy(U.viewport),D.copy(U.scissor),z=U.scissorTest}else R.copy(V).multiplyScalar(B).floor(),D.copy(tt).multiplyScalar(B).floor(),z=Z;if(st.bindFramebuffer(L.FRAMEBUFFER,nt)&&pt&&st.drawBuffers(U,nt),st.viewport(R),st.scissor(D),st.setScissorTest(z),Tt){let kt=ct.get(U.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+et,kt.__webglTexture,dt)}else if(Dt){let kt=ct.get(U.texture),jt=et||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,dt||0,jt)}_=-1},this.readRenderTargetPixels=function(U,et,dt,pt,nt,Tt,Dt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){st.bindFramebuffer(L.FRAMEBUFFER,Ot);try{let kt=U.texture,jt=kt.format,ne=kt.type;if(!xt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=U.width-pt&&dt>=0&&dt<=U.height-nt&&L.readPixels(et,dt,pt,nt,Zt.convert(jt),Zt.convert(ne),Tt)}finally{let kt=T!==null?ct.get(T).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(U,et,dt,pt,nt,Tt,Dt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){let kt=U.texture,jt=kt.format,ne=kt.type;if(!xt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(et>=0&&et<=U.width-pt&&dt>=0&&dt<=U.height-nt){st.bindFramebuffer(L.FRAMEBUFFER,Ot);let Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,Tt.byteLength,L.STREAM_READ),L.readPixels(et,dt,pt,nt,Zt.convert(jt),Zt.convert(ne),0);let ue=T!==null?ct.get(T).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,ue);let ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await o0(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Tt),L.deleteBuffer(Ht),L.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,et=null,dt=0){U.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),et=arguments[0]||null,U=arguments[1]);let pt=Math.pow(2,-dt),nt=Math.floor(U.image.width*pt),Tt=Math.floor(U.image.height*pt),Dt=et!==null?et.x:0,Ot=et!==null?et.y:0;I.setTexture2D(U,0),L.copyTexSubImage2D(L.TEXTURE_2D,dt,0,0,Dt,Ot,nt,Tt),st.unbindTexture()},this.copyTextureToTexture=function(U,et,dt=null,pt=null,nt=0){U.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,U=arguments[1],et=arguments[2],nt=arguments[3]||0,dt=null);let Tt,Dt,Ot,kt,jt,ne,Ht,ue,ve,Me=U.isCompressedTexture?U.mipmaps[nt]:U.image;dt!==null?(Tt=dt.max.x-dt.min.x,Dt=dt.max.y-dt.min.y,Ot=dt.isBox3?dt.max.z-dt.min.z:1,kt=dt.min.x,jt=dt.min.y,ne=dt.isBox3?dt.min.z:0):(Tt=Me.width,Dt=Me.height,Ot=Me.depth||1,kt=0,jt=0,ne=0),pt!==null?(Ht=pt.x,ue=pt.y,ve=pt.z):(Ht=0,ue=0,ve=0);let je=Zt.convert(et.format),fe=Zt.convert(et.type),Wt;et.isData3DTexture?(I.setTexture3D(et,0),Wt=L.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(I.setTexture2DArray(et,0),Wt=L.TEXTURE_2D_ARRAY):(I.setTexture2D(et,0),Wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,et.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,et.unpackAlignment);let On=L.getParameter(L.UNPACK_ROW_LENGTH),de=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Vi=L.getParameter(L.UNPACK_SKIP_ROWS),nn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ne);let Hs=U.isDataArrayTexture||U.isData3DTexture,_e=et.isDataArrayTexture||et.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let Rn=ct.get(U),Gs=ct.get(et),cn=ct.get(Rn.__renderTarget),jn=ct.get(Gs.__renderTarget);st.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<Ot;Qn++)Hs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.get(U).__webglTexture,nt,ne+Qn),U.isDepthTexture?(_e&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.get(et).__webglTexture,nt,ve+Qn),L.blitFramebuffer(kt,jt,Tt,Dt,Ht,ue,Tt,Dt,L.DEPTH_BUFFER_BIT,L.NEAREST)):_e?L.copyTexSubImage3D(Wt,nt,Ht,ue,ve+Qn,kt,jt,Tt,Dt):L.copyTexSubImage2D(Wt,nt,Ht,ue,ve+Qn,kt,jt,Tt,Dt);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?U.isDataTexture||U.isData3DTexture?L.texSubImage3D(Wt,nt,Ht,ue,ve,Tt,Dt,Ot,je,fe,Me.data):et.isCompressedArrayTexture?L.compressedTexSubImage3D(Wt,nt,Ht,ue,ve,Tt,Dt,Ot,je,Me.data):L.texSubImage3D(Wt,nt,Ht,ue,ve,Tt,Dt,Ot,je,fe,Me):U.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,nt,Ht,ue,Tt,Dt,je,fe,Me.data):U.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,nt,Ht,ue,Me.width,Me.height,je,Me.data):L.texSubImage2D(L.TEXTURE_2D,nt,Ht,ue,Tt,Dt,je,fe,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,On),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nn),nt===0&&et.generateMipmaps&&L.generateMipmap(Wt),st.unbindTexture()},this.copyTextureToTexture3D=function(U,et,dt=null,pt=null,nt=0){return U.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),dt=arguments[0]||null,pt=arguments[1]||null,U=arguments[2],et=arguments[3],nt=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,et,dt,pt,nt)},this.initRenderTarget=function(U){ct.get(U).__webglFramebuffer===void 0&&I.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?I.setTextureCube(U,0):U.isData3DTexture?I.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?I.setTexture2DArray(U,0):I.setTexture2D(U,0),st.unbindTexture()},this.resetState=function(){E=0,S=0,T=null,st.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Oo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ko=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new H,ur=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Ys=new H,rs=new H,os=new H,as=new Mt,Zs=new Mt,Xf=new Jt,ho=new H,$s=new H,uo=new H,rf=new Mt,Al=new Mt,of=new Mt,Go=class extends Le{constructor(t=new fr){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ho(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new ur(n,3,0,!1)),ss.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;fo(ho.set(-.5,-.5,0),os,o,rs,i,r),fo($s.set(.5,-.5,0),os,o,rs,i,r),fo(uo.set(.5,.5,0),os,o,rs,i,r),rf.set(0,0),Al.set(1,0),of.set(1,1);let a=t.ray.intersectTriangle(ho,$s,uo,!1,Ys);if(a===null&&(fo($s.set(-.5,.5,0),os,o,rs,i,r),Al.set(0,1),a=t.ray.intersectTriangle(ho,uo,$s,!1,Ys),a===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:ai.getInterpolation(Ys,ho,$s,uo,rf,Al,of,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fo(s,t,e,n,i,r){as.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Zs.x=r*as.x-i*as.y,Zs.y=i*as.x+r*as.y):Zs.copy(as),s.copy(t),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(Xf)}var Uc=class extends Qe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends he{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new Jt,af=new Jt,po=[],lf=new Jn,ey=new Jt,Js=new Et,Ks=new Kn,Ee=class extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ey)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),lf.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(lf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Ks.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),af.multiplyMatrices(n,ls),Js.matrixWorld=af,Js.raycast(t,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=r,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(i*this.count),i,this.count,xh,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var pr=class extends un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new H,Wo=new H,cf=new Jt,js=new lr,mo=new Kn,Rl=new H,hf=new H,zc=class extends Le{constructor(t=new te,e=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vo.fromBufferAttribute(e,i-1),Wo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(Wo);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;cf.copy(i).invert(),js.copy(t.ray).applyMatrix4(cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=c){let g=u.getX(y),M=u.getX(y+1),x=go(this,t,js,l,g,M);x&&e.push(x)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(d),g=go(this,t,js,l,y,p);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=c){let g=go(this,t,js,l,y,y+1);g&&e.push(g)}if(this.isLineLoop){let y=go(this,t,js,l,m-1,d);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function go(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Vo.fromBufferAttribute(o,i),Wo.fromBufferAttribute(o,r),e.distanceSqToSegment(Vo,Wo,Rl,hf)>n)return;Rl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Rl);if(!(l<t.near||l>t.far))return{distance:l,point:hf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var uf=new H,ff=new H,Xo=class extends zc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)uf.fromBufferAttribute(e,i),ff.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uf.distanceTo(ff);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mr=class extends un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},df=new Jt,Fc=new lr,xo=new Kn,yo=new H,qo=class extends Le{constructor(t=new te,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;df.copy(i).invert(),Fc.copy(t.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,y=d;m<y;m++){let p=c.getX(m);yo.fromBufferAttribute(h,p),pf(yo,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,y=d;m<y;m++)yo.fromBufferAttribute(h,m),pf(yo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pf(s,t,e,n,i,r,o){let a=Fc.distanceSqToPoint(s);if(a<e){let l=new H;Fc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ie=class extends Qe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,i=[],r=[],o=[],a=new H,l=new Jt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ne(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ne(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends fn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends gr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var vo=new H,Cl=new Eh,Il=new Eh,Pl=new Eh,Oc=class extends fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(vo.subVectors(i[0],i[1]).add(i[0]),c=vo);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(vo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Cl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,y,p),Il.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,y,p),Pl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Il.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Pl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Cl.calc(l),Il.calc(l),Pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function ny(s,t){let e=1-s;return e*e*t}function iy(s,t){return 2*(1-s)*s*t}function sy(s,t){return s*s*t}function rr(s,t,e,n){return ny(s,t)+iy(s,e)+sy(s,n)}function ry(s,t){let e=1-s;return e*e*e*t}function oy(s,t){let e=1-s;return 3*e*e*s*t}function ay(s,t){return 3*(1-s)*s*s*t}function ly(s,t){return s*s*s*t}function or(s,t,e,n,i){return ry(s,t)+oy(s,e)+ay(s,n)+ly(s,i)}var Yo=class extends fn{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,r.x,o.x,a.x),or(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kc=class extends fn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,r.x,o.x,a.x),or(t,i.y,r.y,o.y,a.y),or(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends fn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends fn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends fn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,i.x,r.x,o.x),rr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends fn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,i.x,r.x,o.x),rr(t,i.y,r.y,o.y),rr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(mf(a,l.x,c.x,u.x,h.x),mf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}},Vc=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:Oc,CubicBezierCurve:Yo,CubicBezierCurve3:kc,EllipseCurve:gr,LineCurve:Zo,LineCurve3:Hc,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Gc,SplineCurve:Jo}),Wc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}},Ko=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new $o(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Yo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new gr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jo=class s extends te{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ne(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new H,f=new Mt,d=new H,m=new H,y=new H,p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let M=0;M<=e;M++){let x=n+M*u*i,v=Math.sin(x),b=Math.cos(x);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*v,h.y=t[E].y,h.z=t[E].x*b,o.push(h.x,h.y,h.z),f.x=M/e,f.y=E/(t.length-1),a.push(f.x,f.y);let S=l[3*E+0]*v,T=l[3*E+1],_=l[3*E+0]*b;c.push(S,T,_)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let v=x+M*t.length,b=v,E=v+t.length,S=v+t.length+1,T=v+1;r.push(b,E,T),r.push(S,T,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Di=class s extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qt=class s extends te{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,y=[],p=n/2,g=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function M(){let v=new H,b=new H,E=0,S=(e-t)/n;for(let T=0;T<=r;T++){let _=[],w=T/r,R=w*(e-t)+t;for(let D=0;D<=i;D++){let z=D/i,P=z*l+a,k=Math.sin(P),N=Math.cos(P);b.x=R*k,b.y=-w*n+p,b.z=R*N,h.push(b.x,b.y,b.z),v.set(k,S,N).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-w),_.push(m++)}y.push(_)}for(let T=0;T<i;T++)for(let _=0;_<r;_++){let w=y[_][T],R=y[_+1][T],D=y[_+1][T+1],z=y[_][T+1];(t>0||_!==0)&&(u.push(w,R,z),E+=3),(e>0||_!==r-1)&&(u.push(R,D,z),E+=3)}c.addGroup(g,E,0),g+=E}function x(v){let b=m,E=new Mt,S=new H,T=0,_=v===!0?t:e,w=v===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,p*w,0),f.push(0,w,0),d.push(.5,.5),m++;let R=m;for(let D=0;D<=i;D++){let P=D/i*l+a,k=Math.cos(P),N=Math.sin(P);S.x=_*N,S.y=p*w,S.z=_*k,h.push(S.x,S.y,S.z),f.push(0,w,0),E.x=k*.5+.5,E.y=N*.5*w+.5,d.push(E.x,E.y),m++}for(let D=0;D<i;D++){let z=b+D,P=R+D;v===!0?u.push(P,P+1,z):u.push(P+1,P,z),T+=3}c.addGroup(g,T,v===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ss=class s extends Qt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xc=class s extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new H,v=new H,b=new H;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],b),l(x,v,b,M)}function l(M,x,v,b){let E=b+1,S=[];for(let T=0;T<=E;T++){S[T]=[];let _=M.clone().lerp(v,T/E),w=x.clone().lerp(v,T/E),R=E-T;for(let D=0;D<=R;D++)D===0&&T===E?S[T][D]=_:S[T][D]=_.clone().lerp(w,D/R)}for(let T=0;T<E;T++)for(let _=0;_<2*(E-T)-1;_++){let w=Math.floor(_/2);_%2===0?(f(S[T][w+1]),f(S[T+1][w]),f(S[T][w])):(f(S[T][w+1]),f(S[T+1][w+1]),f(S[T+1][w]))}}function c(M){let x=new H;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){let M=new H;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let v=p(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;o.push(v,1-b)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let x=o[M+0],v=o[M+2],b=o[M+4],E=Math.max(x,v,b),S=Math.min(x,v,b);E>.9&&S<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){let v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function m(){let M=new H,x=new H,v=new H,b=new H,E=new Mt,S=new Mt,T=new Mt;for(let _=0,w=0;_<r.length;_+=9,w+=6){M.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),E.set(o[w+0],o[w+1]),S.set(o[w+2],o[w+3]),T.set(o[w+4],o[w+5]),b.copy(M).add(x).add(v).divideScalar(3);let R=p(b);y(E,w+0,M,R),y(S,w+2,x,R),y(T,w+4,v,R)}}function y(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ts=class extends Ko{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ko().fromJSON(i))}return this}},cy={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=qf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=py(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],f=s[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return xr(r,o,e,a,l,d,0),o}};function qf(s,t,e,n,i){let r,o;if(i===Sy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=gf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=gf(r,s[r],s[r+1],o);return o&&ua(o,o.next)&&(vr(o),o=o.next),o}function Ni(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ua(e,e.next)||we(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&vy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?uy(s,n,i,r):hy(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),vr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=fy(Ni(s),t,e),xr(s,t,e,n,i,r,2)):o===2&&dy(s,t,e,n,i,r):xr(Ni(s),t,e,n,i,r,1);break}}}function hy(s){let t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&hs(i,a,r,l,o,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function uy(s,t,e,n){let i=s.prev,r=s,o=s.next;if(we(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,y=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,g=qc(d,m,t,e,n),M=qc(y,p,t,e,n),x=s.prevZ,v=s.nextZ;for(;x&&x.z>=g&&v&&v.z<=M;){if(x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&hs(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&hs(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&hs(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ua(i,r)&&Yf(i,n,n.next,r)&&yr(i,r)&&yr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=s=r),n=n.next}while(n!==s);return Ni(n)}function dy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&by(o,a)){let l=Zf(o,a);o=Ni(o,o.next),l=Ni(l,l.next),xr(o,t,e,n,i,r,0),xr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function py(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=qf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(_y(c));for(i.sort(my),r=0;r<i.length;r++)e=gy(i[r],e);return e}function my(s,t){return s.x-t.x}function gy(s,t){let e=xy(s,t);if(!e)return t;let n=Zf(e,s);return Ni(n,n.next),Ni(e,e.next)}function xy(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),yr(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&yy(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function yy(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function vy(s,t,e,n){let i=s;do i.z===0&&(i.z=qc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,My(i)}function My(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function qc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function _y(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function by(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!wy(s,t)&&(yr(s,t)&&yr(t,s)&&Ey(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||ua(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ua(s,t){return s.x===t.x&&s.y===t.y}function Yf(s,t,e,n){let i=_o(we(s,t,e)),r=_o(we(s,t,n)),o=_o(we(e,n,s)),a=_o(we(e,n,t));return!!(i!==r&&o!==a||i===0&&Mo(s,e,t)||r===0&&Mo(s,n,t)||o===0&&Mo(e,s,n)||a===0&&Mo(e,t,n))}function Mo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function _o(s){return s>0?1:s<0?-1:0}function wy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function yr(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function Ey(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Zf(s,t){let e=new Yc(s.i,s.x,s.y),n=new Yc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gf(s,t,e,n){let i=new Yc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Nn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];xf(t),yf(n,t);let o=t.length;e.forEach(xf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,yf(n,e[l]);let a=cy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function yf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Mr=class s extends te{constructor(t=new Ts([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ty,x,v=!1,b,E,S,T;g&&(x=g.getSpacedPoints(u),v=!0,f=!1,b=g.computeFrenetFrames(u,!1),E=new H,S=new H,T=new H),f||(p=0,d=0,m=0,y=0);let _=a.extractPoints(c),w=_.shape,R=_.holes;if(!Nn.isClockWise(w)){w=w.reverse();for(let G=0,Q=R.length;G<Q;G++){let L=R[G];Nn.isClockWise(L)&&(R[G]=L.reverse())}}let z=Nn.triangulateShape(w,R),P=w;for(let G=0,Q=R.length;G<Q;G++){let L=R[G];w=w.concat(L)}function k(G,Q,L){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(Q,L)}let N=w.length,W=z.length;function B(G,Q,L){let ft,at,xt,st=G.x-Q.x,St=G.y-Q.y,ct=L.x-G.x,I=L.y-G.y,C=st*st+St*St,q=st*I-St*ct;if(Math.abs(q)>Number.EPSILON){let lt=Math.sqrt(C),ht=Math.sqrt(ct*ct+I*I),it=Q.x-St/lt,mt=Q.y+st/lt,yt=L.x-I/ht,wt=L.y+ct/ht,Vt=((yt-it)*I-(wt-mt)*ct)/(st*I-St*ct);ft=it+st*Vt-G.x,at=mt+St*Vt-G.y;let vt=ft*ft+at*at;if(vt<=2)return new Mt(ft,at);xt=Math.sqrt(vt/2)}else{let lt=!1;st>Number.EPSILON?ct>Number.EPSILON&&(lt=!0):st<-Number.EPSILON?ct<-Number.EPSILON&&(lt=!0):Math.sign(St)===Math.sign(I)&&(lt=!0),lt?(ft=-St,at=st,xt=Math.sqrt(C)):(ft=st,at=St,xt=Math.sqrt(C/2))}return new Mt(ft/xt,at/xt)}let Y=[];for(let G=0,Q=P.length,L=Q-1,ft=G+1;G<Q;G++,L++,ft++)L===Q&&(L=0),ft===Q&&(ft=0),Y[G]=B(P[G],P[L],P[ft]);let K=[],V,tt=Y.concat();for(let G=0,Q=R.length;G<Q;G++){let L=R[G];V=[];for(let ft=0,at=L.length,xt=at-1,st=ft+1;ft<at;ft++,xt++,st++)xt===at&&(xt=0),st===at&&(st=0),V[ft]=B(L[ft],L[xt],L[st]);K.push(V),tt=tt.concat(V)}for(let G=0;G<p;G++){let Q=G/p,L=d*Math.cos(Q*Math.PI/2),ft=m*Math.sin(Q*Math.PI/2)+y;for(let at=0,xt=P.length;at<xt;at++){let st=k(P[at],Y[at],ft);J(st.x,st.y,-L)}for(let at=0,xt=R.length;at<xt;at++){let st=R[at];V=K[at];for(let St=0,ct=st.length;St<ct;St++){let I=k(st[St],V[St],ft);J(I.x,I.y,-L)}}}let Z=m+y;for(let G=0;G<N;G++){let Q=f?k(w[G],tt[G],Z):w[G];v?(S.copy(b.normals[0]).multiplyScalar(Q.x),E.copy(b.binormals[0]).multiplyScalar(Q.y),T.copy(x[0]).add(S).add(E),J(T.x,T.y,T.z)):J(Q.x,Q.y,0)}for(let G=1;G<=u;G++)for(let Q=0;Q<N;Q++){let L=f?k(w[Q],tt[Q],Z):w[Q];v?(S.copy(b.normals[G]).multiplyScalar(L.x),E.copy(b.binormals[G]).multiplyScalar(L.y),T.copy(x[G]).add(S).add(E),J(T.x,T.y,T.z)):J(L.x,L.y,h/u*G)}for(let G=p-1;G>=0;G--){let Q=G/p,L=d*Math.cos(Q*Math.PI/2),ft=m*Math.sin(Q*Math.PI/2)+y;for(let at=0,xt=P.length;at<xt;at++){let st=k(P[at],Y[at],ft);J(st.x,st.y,h+L)}for(let at=0,xt=R.length;at<xt;at++){let st=R[at];V=K[at];for(let St=0,ct=st.length;St<ct;St++){let I=k(st[St],V[St],ft);v?J(I.x,I.y+x[u-1].y,x[u-1].x+L):J(I.x,I.y,h+L)}}}F(),O();function F(){let G=i.length/3;if(f){let Q=0,L=N*Q;for(let ft=0;ft<W;ft++){let at=z[ft];X(at[2]+L,at[1]+L,at[0]+L)}Q=u+p*2,L=N*Q;for(let ft=0;ft<W;ft++){let at=z[ft];X(at[0]+L,at[1]+L,at[2]+L)}}else{for(let Q=0;Q<W;Q++){let L=z[Q];X(L[2],L[1],L[0])}for(let Q=0;Q<W;Q++){let L=z[Q];X(L[0]+N*u,L[1]+N*u,L[2]+N*u)}}n.addGroup(G,i.length/3-G,0)}function O(){let G=i.length/3,Q=0;$(P,Q),Q+=P.length;for(let L=0,ft=R.length;L<ft;L++){let at=R[L];$(at,Q),Q+=at.length}n.addGroup(G,i.length/3-G,1)}function $(G,Q){let L=G.length;for(;--L>=0;){let ft=L,at=L-1;at<0&&(at=G.length-1);for(let xt=0,st=u+p*2;xt<st;xt++){let St=N*xt,ct=N*(xt+1),I=Q+ft+St,C=Q+at+St,q=Q+at+ct,lt=Q+ft+ct;rt(I,C,q,lt)}}}function J(G,Q,L){l.push(G),l.push(Q),l.push(L)}function X(G,Q,L){ut(G),ut(Q),ut(L);let ft=i.length/3,at=M.generateTopUV(n,i,ft-3,ft-2,ft-1);ot(at[0]),ot(at[1]),ot(at[2])}function rt(G,Q,L,ft){ut(G),ut(Q),ut(ft),ut(Q),ut(L),ut(ft);let at=i.length/3,xt=M.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);ot(xt[0]),ot(xt[1]),ot(xt[3]),ot(xt[1]),ot(xt[2]),ot(xt[3])}function ut(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function ot(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ay(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Vc[i.type]().fromJSON(i)),new s(n,t.options)}},Ty={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],y=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-h),new Mt(f,1-m),new Mt(y,1-g)]:[new Mt(a,1-l),new Mt(u,1-h),new Mt(d,1-m),new Mt(p,1-g)]}};function Ay(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _r=class s extends Xc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var dn=class s extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let M=[],x=g/n,v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let E=b/e;h.x=-t*Math.cos(i+E*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+E*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(E+v,1-x),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let x=u[g][M+1],v=u[g][M],b=u[g+1][M],E=u[g+1][M+1];(g!==0||o>0)&&d.push(x,v,E),(g!==n-1||l<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Un=class s extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let y=m/i*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(y),h.y=(t+e*Math.cos(p))*Math.sin(y),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let y=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,M=(i+1)*d+m;o.push(y,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qo=class extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},di=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},bn=class extends un{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ft=class extends un{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function bo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ry(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var As=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zc=class extends As{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cu:r=t,a=2*e-n;break;case hu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:o=t,l=2*n-e;break;case hu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),y=m*m,p=y*m,g=-f*p+2*f*y-f*m,M=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*m+1,x=(-1-d)*p+(1.5+d)*y+.5*m,v=d*p-d*y;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+M*o[c+b]+x*o[l+b]+v*o[h+b];return r}},$c=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Jc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bo(e,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bo(t.times,Array),values:bo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ro:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ry(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let y=e[h+m];if(y!==e[f+m]||y!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=yc;var Ui=class extends wn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Ro;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends wn{};Kc.prototype.ValueTypeName="color";var jc=class extends wn{};jc.prototype.ValueTypeName="number";var Qc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Re.slerpFlat(r,0,o,c-a,o,c,l);return r}},ta=class extends wn{InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends wn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Ro;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends wn{};th.prototype.ValueTypeName="vector";var eh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Cy=new eh,nh=class{constructor(t){this.manager=t!==void 0?t:Cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ea=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ll=new Jt,vf=new H,Mf=new H,br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(vf),Mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mf),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ih=class extends br{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ms*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},na=class extends Rs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},_f=new Jt,Qs=new H,Dl=new H,sh=class extends br{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),Dl.copy(n.position),Dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dl),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f)}},ia=class extends Rs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rh=class extends br{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ra=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bf(){return performance.now()}var Sh="\\[\\]\\.:\\/",Iy=new RegExp("["+Sh+"]","g"),Th="[^"+Sh+"]",Py="[^"+Sh.replace("\\.","")+"]",Ly=/((?:WC+[\/:])*)/.source.replace("WC",Th),Dy=/(WCOD+)?/.source.replace("WCOD",Py),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),zy=new RegExp("^"+Ly+Dy+Ny+Uy+"$"),Fy=["material","materials","bones","map"],oh=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(t){let e=zy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=oh;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);var Ps=new Map;window.BDS_DATA=(s,t,e)=>{let n=Ps.get(s);n&&(Ps.delete(s),n.resolve({fmt:t,b64:e}))};function By(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Oy(s){let t=new DecompressionStream("gzip"),e=new Blob([s]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function ky(s,t){return new Promise((e,n)=>{Ps.set(s,{resolve:e});let i=document.createElement("script");i.src=t,i.async=!0,i.onerror=()=>{Ps.delete(s),n(new Error("Impossibile caricare "+t))},i.onload=()=>{i.remove(),setTimeout(()=>{Ps.has(s)&&(Ps.delete(s),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(i)})}async function mi(s,t){let{fmt:e,b64:n}=await ky(s,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let i=await Oy(By(n));return e==="bin"?i:JSON.parse(new TextDecoder().decode(i))}var fa=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var da=class{constructor(t,e,n){let i=t.height;this.nx=i.nx,this.nz=i.nz,this.step=i.step,this.x0=i.x0,this.z0=i.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*i.scale;this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0),this.lcPixels=l.getImageData(0,0,o.w,o.h).data,this.lcCanvas=a,this.texture=new Ie(a),this.texture.colorSpace=ye,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=Mn,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,u])=>({k:c,c:u})),this.palette.push({k:"default",c:o.default})}height(t,e){let n=(t-this.x0)/this.step,i=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(i);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=i-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h;if(a+l<=1)return u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l;let h=u[c+this.nx+1];return h+(u[c+this.nx]-h)*(1-a)+(u[c+1]-h)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),i=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||i<0||n>=this.lcW||i>=this.lcH)return"default";let r=(i*this.lcW+n)*4,o=this.lcPixels,a=o[r]<<16|o[r+1]<<8|o[r+2],l=this.classCache.get(a);if(l===void 0){let c=1e9;for(let u of this.palette){let h=(u.c[0]-o[r])**2+(u.c[1]-o[r+1])**2+(u.c[2]-o[r+2])**2;h<c&&(c=h,l=u.k)}this.classCache.set(a,l)}return l}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Ft({map:this.texture}),n=this.proj;return e.onBeforeCompile=i=>{i.uniforms.detailMap={value:t},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);`)},e}buildChunk(t,e,n,i,r,o=0){let a=Math.round(n/i)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),u=this.proj.xmax-this.proj.xmin,h=this.proj.zmax-this.proj.zmin;for(let p=0;p<a;p++)for(let g=0;g<a;g++){let M=t+g*i,x=e+p*i,v=p*a+g,b=this.height(M,x);if(o>0)for(let E=-2;E<=2;E++)for(let S=-2;S<=2;S++)b=Math.min(b,this.height(M+E*i/2,x+S*i/2));l[v*3]=M,l[v*3+1]=b-o,l[v*3+2]=x,c[v*2]=(M-this.proj.xmin)/u,c[v*2+1]=1-(x-this.proj.zmin)/h}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let g=0;g<a-1;g++){let M=p*a+g,x=M+1,v=M+a,b=v+1;f[d++]=M,f[d++]=v,f[d++]=x,f[d++]=x,f[d++]=v,f[d++]=b}let m=new te;m.setAttribute("position",new he(l,3)),m.setAttribute("uv",new he(c,2)),m.setIndex(new he(f,1)),m.computeVertexNormals();let y=new Et(m,r);return y.receiveShadow=!0,y}};var oe=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,i=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(i,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.i.length===0}build(){let t=new te;return t.setAttribute("position",new qt(this.p,3)),this.c&&t.setAttribute("color",new qt(this.c,3)),this.u&&t.setAttribute("uv",new qt(this.u,2)),t.setIndex(this.n>65535?new bs(this.i,1):new _s(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new Et(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Ae(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s^=s>>>4,s=Math.imul(s,668265261),s^=s>>>15,(s>>>0)/4294967296}function $f(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],l=e[r][0],c=e[r][1];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Fi(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Ie(i);return r.colorSpace=ye,n&&(r.wrapS=r.wrapT=ui),r.anisotropy=8,r}function Jf(s=256){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s),i=16,r=new Float32Array(i*i);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/s*i,h=c/s*i,f=Math.floor(u),d=Math.floor(h),m=u-f,y=h-d,p=(x,v)=>r[(v+i)%i*i+(x+i)%i],g=m*m*(3-2*m),M=y*y*(3-2*y);return(p(f,d)*(1-g)+p(f+1,d)*g)*(1-M)+(p(f,d+1)*(1-g)+p(f+1,d+1)*g)*M};for(let l=0;l<s;l++)for(let c=0;c<s;c++){let u=(l*s+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new Ie(t);return a.wrapS=a.wrapT=ui,a.anisotropy=8,a}var Kf=4,Er=null;function Bi(){if(Er)return Er;let s=Fi(256,256,t=>{t.clearRect(0,0,256,256);let e="#ffffff";t.fillStyle=e,t.fillRect(0,6,256,4),t.fillRect(0,54,256,4);for(let n=0;n<10;n++){let i=n*25.6+11;t.fillRect(i,2,3.5,60),t.beginPath(),t.moveTo(i-2,4),t.lineTo(i+1.75,0),t.lineTo(i+5.5,4),t.fill()}t.strokeStyle=e,t.lineWidth=1.6;for(let n=-8;n<24;n++)t.beginPath(),t.moveTo(n*16,64),t.lineTo(n*16+64,128),t.stroke(),t.beginPath(),t.moveTo(n*16+64,64),t.lineTo(n*16,128),t.stroke();t.fillRect(0,65,256,3),t.fillRect(0,124,256,3),t.fillStyle="#ffffff",t.fillRect(0,140,256,12),t.fillRect(0,166,256,12);for(let n of[6,134])t.fillRect(n,130,14,62);t.fillRect(0,194,256,5),t.fillRect(0,250,256,6),t.fillRect(0,214,256,3);for(let n=0;n<16;n++)t.fillRect(n*16+6,194,3,62);t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.arc(n*32+16,214,9,Math.PI,0),t.stroke();t.fillRect(0,192,4,64),t.fillRect(252,192,4,64)});return s.wrapT=Mn,s.anisotropy=4,Er={grille:new Ft({map:s,vertexColors:!0,alphaTest:.45,side:re,transparent:!1}),solid:new Ft({vertexColors:!0})},Er.depth=new hr({depthPacking:_h,map:s,alphaTest:.45,side:re}),Er}var Hy=s=>[1-(s+1)/Kf+.004,1-s/Kf-.004];function Sr(s,t,e,n,i,r,o,a,l,c,u,h,f=0){let d=Math.hypot(i-t,r-e),[m,y]=Hy(c),p=f+d/u,g=s.v(t,n+a,e,h[0],h[1],h[2],f,m),M=s.v(i,o+a,r,h[0],h[1],h[2],p,m),x=s.v(i,o+l,r,h[0],h[1],h[2],p,y),v=s.v(t,n+l,e,h[0],h[1],h[2],f,y);return s.quad(g,M,x,v),p}function an(s,t,e,n,i,r,o,a,l,c){let u=i/2,h=o/2,f=[a*u,l*u],d=[-l*h,a*h],m=(g,M,x)=>[t+f[0]*g+d[0]*x,e+M*r,n+f[1]*g+d[1]*x],y=[1,.62,.8,.8,.72,.72];[[m(-1,1,-1),m(-1,1,1),m(1,1,1),m(1,1,-1)],[m(-1,0,-1),m(1,0,-1),m(1,0,1),m(-1,0,1)],[m(-1,0,1),m(1,0,1),m(1,1,1),m(-1,1,1)],[m(1,0,-1),m(-1,0,-1),m(-1,1,-1),m(1,1,-1)],[m(1,0,1),m(1,0,-1),m(1,1,-1),m(1,1,1)],[m(-1,0,-1),m(-1,0,1),m(-1,1,1),m(-1,1,-1)]].forEach((g,M)=>{let x=y[M],v=g.map(b=>s.v(b[0],b[1],b[2],c[0]*x,c[1]*x,c[2]*x));s.quad(v[0],v[1],v[2],v[3])})}var Tr=[.17,.19,.18],Gy=[.13,.22,.16],Vy=[.45,.32,.2],Wy=[.62,.64,.62],ma=[[.86,.8,.66],[.78,.7,.55],[.72,.72,.7],[.82,.62,.48],[.62,.36,.28]];function jf(s,t,e,n,i,r,o){let a=Ae(o)<.6?Tr:Gy,l=ma[Math.floor(Ae(o+7)*ma.length)],c=n===4?Math.min(.6,i*.35):0,u=0;for(let h=0;h<e.length-1;h++){let[f,d]=e[h],[m,y]=e[h+1],p=Math.hypot(m-f,y-d);if(p<.2)continue;let g=(m-f)/p,M=(y-d)/p,x=Math.max(1,Math.ceil(p/6));for(let v=0;v<x;v++){let b=f+(m-f)*v/x,E=d+(y-d)*v/x,S=f+(m-f)*(v+1)/x,T=d+(y-d)*(v+1)/x,_=r.height(b,E),w=r.height(S,T);if(n===4){let z=p/x,P=Math.min(_,w);an(s,(b+S)/2,P-.3,(E+T)/2,z+.02,c+.3+Math.abs(w-_)*.5,.28,g,M,l),an(s,(b+S)/2,Math.max(_,w)+c-.02,(E+T)/2,z+.04,.06,.34,g,M,[.74,.73,.7])}u=Sr(t,b,E,_,S,T,w,c,i,n===5?1:n===6?2:0,n===6?5:1.2,n===6?Vy:n===5?Wy:a,u)}if(n===5||n===7){let v=Math.max(1,Math.round(p/2.5));for(let b=0;b<=v;b++){let E=f+(m-f)*b/v,S=d+(y-d)*b/v;an(s,E,r.height(E,S)-.2,S,.06,i+.25,.06,g,M,n===5?[.36,.4,.36]:a)}}}}var pa=(s,t)=>Math.atan2(-t,s),ga=class{constructor(t,e,n){this.R=t,this.T=e,this.col=n,this.dyn=[]}baseY(t,e){let n=this.R.surfaceAt(t,e,1e9);return n&&n.road?n.h:this.T.height(t,e)+.02}leafGeo(t,e,n){let i=new oe(!0,!0);return Sr(i,0,0,0,t,0,0,.08,e,n===4?1:3,n===3?1.1:1.6,Tr),i.build()}build(t,e){let n=e&&e.gt;if(!n||!n.length)return null;let i=Bi(),r=new oe(!0,!1),o=new oe(!0,!0),a=new $t;for(let l=0;l<n.length;l+=6){let c=n[l],u=n[l+1]/10,h=n[l+2]/10,f=n[l+3]/1800*Math.PI,d=n[l+4]/10,m=n[l+5],y=Math.sin(f),p=Math.cos(f),g=p,M=-y,x=this.baseY(u,h),v=Math.round(u*7+h*13),b=u-y*d/2,E=h-p*d/2,S=u+y*d/2,T=h+p*d/2,_=c===3?1.25:1.8,w=ma[Math.floor(Ae(v)*ma.length)];if(c<=1||c===3){let D=c===3?.3:.42;for(let z of[-1,1]){let P=u+y*(d/2+D/2)*z,k=h+p*(d/2+D/2)*z;an(r,P,x-.3,k,D,_+.6,D,y,p,w),an(r,P,x+_+.3,k,D+.08,.08,D+.08,y,p,[.7,.69,.66])}}else if(c===2)an(r,b-y*.25,x,E-p*.25,.38,1.05,.38,y,p,[.92,.92,.9]),an(r,b-y*.25,x+.75,E-p*.25,.4,.12,.4,y,p,[.8,.1,.08]),an(r,S,x,T,.1,.85,.1,y,p,[.85,.85,.85]);else for(let[D,z]of[[b,E],[S,T]])an(r,D,x,z,.12,.9,.12,y,p,[.85,.2,.15]);if(m===2){this.addDynamic(a,t,c,u,x,h,y,p,d,_);continue}let R=m===1;if(R&&this.col.addPolygon(t,Float32Array.from([b-g*.2,E-M*.2,S-g*.2,T-M*.2,S+g*.2,T+M*.2,b+g*.2,E+M*.2]),void 0,!0),c===0){let D=d>2.6,z=D?d/2:d,P=D?[[b,E,y,p],[S,T,-y,-p]]:[[b,E,y,p]];for(let[k,N,W,B]of P){let Y=R?W:g,K=R?B:M;Sr(o,k,N,x,k+Y*z,N+K*z,x,.08,_,3,1.6,Tr)}}else if(c===1){let D=R?0:d;Sr(o,b+y*D+g*.18,E+p*D+M*.18,x,S+y*D+g*.18,T+p*D+M*.18,x,.08,_,3,1.6,Tr)}else if(c===3){let D=R?0:1.2,z=y*Math.cos(D)+g*Math.sin(D),P=p*Math.cos(D)+M*Math.sin(D);Sr(o,b,E,x,b+z*d,E+P*d,x,.06,_,3,1.1,Tr)}else if(c===2)this.boom(r,b,E,x,y,p,d,R?0:1.45);else if(c===4&&R)for(let z=0;z<8;z++){let P=z/8,k=(z+1)/8,N=Y=>.3*4*Y*(1-Y),W=b+(S-b)*(P+k)/2,B=E+(T-E)*(P+k)/2;an(r,W,x+.8-N((P+k)/2),B,d/8,.04,.04,y,p,z%2?[.85,.15,.1]:[.95,.95,.95])}}if(r.empty||a.add(r.mesh(i.solid,!0)),!o.empty){let l=o.mesh(i.grille,!0);l.customDepthMaterial=this.depthMat(),a.add(l)}return a.userData.dispose=()=>{this.dyn=this.dyn.filter(l=>l.tile!==t?!0:(l.colObj&&this.col.remove(l.colObj),!1))},a}depthMat(){return Bi().depth}boom(t,e,n,i,r,o,a,l){let c=Math.max(2,Math.round(a/.5));for(let u=0;u<c;u++){let h=u%2?[.8,.08,.06]:[.95,.95,.95],f=(u+.5)/c*a;l>.7?an(t,e,i+.95+u/c*a,n,.09,a/c+.005,.06,r,o,h):an(t,e+r*f,i+.905,n+o*f,a/c+.005,.09,.06,r,o,h)}}addDynamic(t,e,n,i,r,o,a,l,c,u){let h=l,f=-a,d=i-a*c/2,m=o-l*c/2,y=i+a*c/2,p=o+l*c/2,g={tile:e,kind:n,x:i,z:o,w:c,open:0,target:0,hold:0,parts:[],colObj:null,ring:Float32Array.from([d-h*.2,m-f*.2,y-h*.2,p-f*.2,y+h*.2,p+f*.2,d+h*.2,m+f*.2])},M=Bi();if(n===2||n===4){let x=new oe(!0,!1),v=Math.max(2,Math.round(c/.5));for(let S=0;S<v;S++)an(x,(S+.5)/v*c,-.045,0,c/v+.005,.09,.06,1,0,S%2?[.8,.08,.06]:[.95,.95,.95]);let b=new $t,E=x.mesh(M.solid,!0);b.position.set(d,r+.95,m),b.rotation.y=pa(a,l),b.add(E),t.add(b),g.parts.push({obj:E,apply:S=>{E.rotation.z=S*1.45}})}else if(n===1){let x=new Et(this.leafGeo(c,u,n),M.grille);x.castShadow=!0,x.customDepthMaterial=this.depthMat(),x.rotation.y=pa(a,l),t.add(x),g.parts.push({obj:x,apply:v=>{x.position.set(d+a*c*v+h*.18,r,m+l*c*v+f*.18)}})}else{let x=c>2.6,v=x?c/2:c,b=this.leafGeo(v,u,n),E=x?[[d,m,a,l],[y,p,-a,-l]]:[[d,m,a,l]];for(let[S,T,_,w]of E){let R=new Et(b,M.grille);R.castShadow=!0,R.customDepthMaterial=this.depthMat(),R.position.set(S,r,T),t.add(R);let D=pa(_,w),z=pa(h,f);for(;z-D>Math.PI;)z-=2*Math.PI;for(;z-D<-Math.PI;)z+=2*Math.PI;g.parts.push({obj:R,apply:P=>{R.rotation.y=D+(z-D)*P}})}}for(let x of g.parts)x.apply(0);g.colObj=this.col.addPolygon(e,g.ring,void 0,!0),this.dyn.push(g)}update(t,e){for(let n of this.dyn){let i=!1;for(let a of e)if(Math.abs(a.x-n.x)<14&&Math.abs(a.z-n.z)<14&&Math.hypot(a.x-n.x,a.z-n.z)<11+n.w/2){i=!0;break}if(i?n.hold=3:n.hold-=t,n.target=n.hold>0?1:0,n.open===n.target)continue;let r=n.kind===2||n.kind===4?.9:.45;n.open=n.target>n.open?Math.min(1,n.open+t*r):Math.max(0,n.open-t*r);for(let a of n.parts)a.apply(n.open);let o=n.open<.8;o&&!n.colObj?n.colObj=this.col.addPolygon(n.tile,n.ring,void 0,!0):!o&&n.colObj&&(this.col.remove(n.colObj),n.colObj=null)}}};var Gt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},zt={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},Kt={GATE:14,SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},Xy=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],xa=.18,gi=32,qy=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],Yy=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],Qf=1.6,Zy=.13,td={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function $y(s){let t=td[s];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var ya=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let i=n.proj;this.xmin=i.xmin,this.zmin=i.zmin,this.xmax=i.xmax,this.zmax=i.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),u=0,h=0;for(let p=0;p<o;p++)u+=t.nodes[p*2],h+=t.nodes[p*2+1],a[p]=u/10,l[p]=h/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;this.ways=t.ways.map(p=>{let g=r>8,M={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:g?p[8]:0,sw:g?p[9]:0,lit:g?p[10]:0,lf:g?p[11]:0,lb:g?p[12]:0,turnF:g?this.names[p[13]]:"",turnB:g?this.names[p[14]]:"",dest:g?this.names[p[15]]:"",nodes:p.slice(r)};return M.oneway=!!(M.flags&zt.ONEWAY),M.drivable=!(M.flags&zt.NOCAR),this.layout(M),M}),this.smooth(a,l,c),this.fixRoundabouts(a,l);let f=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=f,this.ntag=new Uint8Array(f),this.ndir=new Uint8Array(f);let d=r>8?3:2;for(let p=0;p<t.ntags.length;p+=d)this.ntag[t.ntags[p]]=t.ntags[p+1],d===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let g=p.nodes.length;p.cum=new Float32Array(g);for(let M=1;M<g;M++){let x=p.nodes[M-1],v=p.nodes[M];p.cum[M]=p.cum[M-1]+Math.hypot(this.nx[v]-this.nx[x],this.nz[v]-this.nz[x])}if(p.len=p.cum[g-1],p.abs=!!(p.flags&(zt.BRIDGE|zt.TUNNEL)),p.abs){let M=p.nodes[0],x=p.nodes[g-1];p.h0=e.height(this.nx[M],this.nz[M])+this.dh[M],p.h1=e.height(this.nx[x],this.nz[x])+this.dh[x]}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let g=this.pointAt(p,p.len/2),M=e.isUrban(g[0],g[1]),x=p.cls,v;x===0?v=p.flags&zt.LINK?80:130:x===1?v=p.flags&zt.LINK?60:M?70:110:x<=4?v=p.flags&zt.LINK||M?50:90:x===5?v=M?50:70:x===6?v=50:v=30,p.flags&zt.ROUNDABOUT&&(v=Math.min(v,50)),p.limit=v,p.limitMapped=!1}let m=new Int32Array(f+1);this.ways.forEach(p=>{for(let g of p.nodes)m[g+1]++});for(let p=0;p<f;p++)m[p+1]+=m[p];this.adjStart=m,this.adjWay=new Int32Array(m[f]),this.adjPos=new Int32Array(m[f]);let y=m.slice(0,f);this.ways.forEach((p,g)=>{for(let M=0;M<p.nodes.length;M++){let x=p.nodes[M],v=y[x]++;this.adjWay[v]=g,this.adjPos[v]=M}}),this.degree=new Uint8Array(f),this.degMain=new Uint8Array(f),this.w1=new Float32Array(f),this.w2=new Float32Array(f),this.m1=new Float32Array(f),this.m2=new Float32Array(f),this.onRb=new Uint8Array(f),this.ways.forEach(p=>{let g=p.cls<=Gt.LIVING&&p.drivable;for(let M=0;M<p.nodes.length;M++){let x=p.nodes[M],v=(M>0?1:0)+(M<p.nodes.length-1?1:0);this.degree[x]+=v,g&&(this.degMain[x]+=v),p.width>this.w1[x]?(this.w2[x]=this.w1[x],this.w1[x]=p.width):p.width>this.w2[x]&&(this.w2[x]=p.width),g&&(p.width>this.m1[x]?(this.m2[x]=this.m1[x],this.m1[x]=p.width):p.width>this.m2[x]&&(this.m2[x]=p.width)),p.flags&zt.ROUNDABOUT&&(this.onRb[x]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,g)=>{let M=p.width/2+1;for(let x=0;x<p.nodes.length-1;x++){let v=p.nodes[x],b=p.nodes[x+1],E=this.nx[v],S=this.nz[v],T=this.nx[b],_=this.nz[b],w=g*16384+x,R=Math.floor((Math.min(E,T)-M-this.xmin)/gi),D=Math.floor((Math.max(E,T)+M-this.xmin)/gi),z=Math.floor((Math.min(S,_)-M-this.zmin)/gi),P=Math.floor((Math.max(S,_)+M-this.zmin)/gi);for(let W=z;W<=P;W++)for(let B=R;B<=D;B++){let Y=W*4096+B,K=this.grid.get(Y);K||this.grid.set(Y,K=[]),K.push(w)}let k=this.tileKey((E+T)/2,(S+_)/2),N=this.tileSegs.get(k);N||this.tileSegs.set(k,N=[]),N.push(w)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,g)=>{for(let M=0;M<p.p.length-1;M++){let x=this.tileKey((p.p[M][0]+p.p[M+1][0])/2,(p.p[M][1]+p.p[M+1][1])/2),v=this.tileRails.get(x);v||this.tileRails.set(x,v=[]),v.push(g*16384+M)}if(p.bridge){let M=p.p[0],x=p.p[p.p.length-1];p.h0=e.height(M[0],M[1]),p.h1=e.height(x[0],x[1]),p.cum=[0];for(let v=1;v<p.p.length;v++)p.cum.push(p.cum[v-1]+Math.hypot(p.p[v][0]-p.p[v-1][0],p.p[v][1]-p.p[v-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=qy[e],i,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&zt.LINK)?2:1:2);t.oneway?(i=o,r=0):t.lf||t.lb?(i=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-i)):o<=1?(i=.5,r=.5):(i=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(i+r))):e===Gt.TRACK?a=3.2:e===Gt.SERVICE?a=t.flags&zt.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===Gt.PEDESTRIAN?a=6:(t.flags&zt.ROUNDABOUT&&!t.lanes&&(i=e<=3?1.6:1.4),a=(i+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&i===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(i+r)*n>a&&(n=a/(i+r)),t.width=a,t.lw=n,t.nF=i,t.nB=r,t.sh=(a-(i+r)*n)/2,t.cOff=-a/2+t.sh+r*n}fixRoundabouts(t,e){let n=new Map,i=l=>{for(;n.get(l)!==l;)n.set(l,n.get(n.get(l))),l=n.get(l);return l},r=this.ways.filter(l=>l.flags&zt.ROUNDABOUT);for(let l of r){for(let c of l.nodes)n.has(c)||n.set(c,c);for(let c=1;c<l.nodes.length;c++){let u=i(l.nodes[c-1]),h=i(l.nodes[c]);u!==h&&n.set(u,h)}}let o=new Map;for(let l of n.keys()){let c=i(l);o.has(c)||o.set(c,[]),o.get(c).push(l)}let a=new Map;for(let[l,c]of o){let u=0,h=0;for(let d of c)u+=t[d],h+=e[d];u/=c.length,h/=c.length;let f=0;for(let d of c)f+=Math.hypot(t[d]-u,e[d]-h);f/=c.length,a.set(l,Math.max(4.5,Math.min(9,f*.5,2*(f-2))))}for(let l of r){if(l.widthTag>2)continue;let c=a.get(i(l.nodes[0]));if(!c)continue;let u=l.lanes>=2&&c>=7.5?2:1;l.width=c,l.nF=u,l.nB=0,l.sh=.4,l.lw=(c-.8)/u,l.cOff=-c/2+l.sh}}coveredBy(t,e,n,i=0,r=!0){let o=this.ways[t],a=u=>u.flags&zt.ROUNDABOUT?-1:u.cls*2+(u.flags&zt.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],m=f.nodes[h+1],y=this.nx[d],p=this.nz[d],g=this.nx[m]-y,M=this.nz[m]-p,x=g*g+M*M;if(x<1e-6)return;let v=((e-y)*g+(n-p)*M)/x;if(v<0||v>1)return;let b=Math.sqrt(x);h===0&&v*b<.3||h===f.nodes.length-2&&(1-v)*b<.3||Math.abs((e-y)*M-(n-p)*g)/b>f.width/2+i||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let i=t.length,r=new Uint8Array(i),o=new Map;this.ways.forEach((c,u)=>{let h=c.nodes;for(let f=0;f<h.length;f++)r[h[f]]+=(f>0?1:0)+(f<h.length-1?1:0);for(let f of[0,h.length-1]){let d=o.get(h[f]);d||o.set(h[f],d=[]),d.push([u,f])}});let a=(c,u)=>{let h=this.ways[c],f=h.nodes,d=f[u];if(f[0]===f[f.length-1]&&f.length>3)return u===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[m,y]of o.get(d)||[]){if(m===c)continue;let p=this.ways[m].nodes;return y===0?p[1]:p[p.length-2]}return-1},l=(c,u)=>{let h=this.ways[c].nodes,f=h[u],d=u>0?h[u-1]:a(c,u),m=u<h.length-1?h[u+1]:a(c,u),y=0,p=0,g=0,M=0,x=0;if(d>=0){let S=Math.hypot(t[f]-t[d],e[f]-e[d])||1;y=(t[f]-t[d])/S,p=(e[f]-e[d])/S}if(m>=0){let S=Math.hypot(t[m]-t[f],e[m]-e[f])||1;g=(t[m]-t[f])/S,M=(e[m]-e[f])/S}d>=0&&m>=0&&(x=Math.acos(Math.max(-1,Math.min(1,y*g+p*M))));let v=y+g,b=p+M,E=Math.hypot(v,b);return E<1e-6?null:[v/E,b/E,x]};this.ways.forEach((c,u)=>{let h=c.nodes;if(h.length<2)return;let f=[h[0]],d=l(u,0);for(let m=0;m<h.length-1;m++){let y=h[m],p=h[m+1],g=l(u,m+1),M=t[p]-t[y],x=e[p]-e[y],v=Math.hypot(M,x);if(v>3&&d&&g){let b=M/v,E=x/v,S=Math.acos(Math.max(-1,Math.min(1,d[0]*b+d[1]*E))),T=Math.acos(Math.max(-1,Math.min(1,g[0]*b+g[1]*E))),_=Math.max(S,T);if(_>.03&&_<1.1){let w=v*_/4,R=Math.min(10,Math.ceil(Math.sqrt(w/.04)));if(R>=2){let D=d[2]>.6?Math.min(v,7):v,z=g[2]>.6?Math.min(v,7):v;for(let P=1;P<R;P++){let k=P/R,N=k*k,W=N*k,B=2*W-3*N+1,Y=W-2*N+k,K=-2*W+3*N,V=W-N;t.push(B*t[y]+Y*D*d[0]+K*t[p]+V*z*g[0]),e.push(B*e[y]+Y*D*d[1]+K*e[p]+V*z*g[1]),n.push(n[y]+(n[p]-n[y])*k),f.push(t.length-1)}}}}f.push(p),d=g}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let i=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[i]+(this.nx[r]-this.nx[i])*a,this.nz[i]+(this.nz[r]-this.nz[i])*a,n,a]}heightOn(t,e,n,i,r){let o=this.ways[t];if(o.abs){let c=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?c/o.len:0)+xa}let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+xa}segmentsNear(t,e,n,i){let r=Math.floor((t-n-this.xmin)/gi),o=Math.floor((t+n-this.xmin)/gi),a=Math.floor((e-n-this.zmin)/gi),l=Math.floor((e+n-this.zmin)/gi),c=this._seen||(this._seen=new Set);c.clear();for(let u=a;u<=l;u++)for(let h=r;h<=o;h++){let f=this.grid.get(u*4096+h);if(f)for(let d of f)c.has(d)||(c.add(d),i(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,i){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(i-c)*h)/f;d=d<0?0:d>1?1:d;let m=l+u*d,y=c+h*d;return{t:d,px:m,pz:y,d:Math.hypot(n-m,i-y),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let i=null,r=-1e9;this.segmentsNear(t,e,8,(a,l)=>{let c=this.ways[a],u=this.projectOnSeg(a,l,t,e);if(u.d>c.width/2+.35)return;let h=this.heightOn(a,l,u.t,t,e);h<=n+1.3&&(h>r+.01||Math.abs(h-r)<=.01&&i&&u.d<i.d)&&(r=h,i={wi:a,k:l,t:u.t,d:u.d})});let o=this.terrain.height(t,e);return i&&r>=o-.6?{h:r,road:i}:i&&o>n+1.3?{h:r,road:i}:{h:o,road:null}}nearest(t,e,n=40,i=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(i&&!i(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:Xy[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&zt.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let i=new Map;for(let o of t.keys()){let a=e(o);i.has(a)||i.set(a,[]),i.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&zt.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of i.values()){if(o.length<4)continue;let a=0,l=0;for(let y of o)a+=this.nx[y],l+=this.nz[y];a/=o.length,l/=o.length;let c=1e9,u=0,h=0,f=0;for(let y of o){let p=Math.hypot(this.nx[y]-a,this.nz[y]-l);c=Math.min(c,p),u=Math.max(u,p),h=Math.max(h,r.get(y)),f+=this.dh[y]}if(u>c*1.8||u>120)continue;let d=c-h/2-.3;if(d<1.2)continue;let m=o.map(y=>{let p=Math.hypot(this.nx[y]-a,this.nz[y]-l),g=Math.max(.1,(p-r.get(y)/2-.1)/p);return[Math.atan2(this.nz[y]-l,this.nx[y]-a),a+(this.nx[y]-a)*g,l+(this.nz[y]-l)*g]}).sort((y,p)=>y[0]-p[0]).map(y=>[y[1],y[2]]);this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length,poly:m})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,i]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:i,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(i,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=y=>{let p=t.width>=i[y]-.01?r[y]:i[y];return p>0?p/2+a:0},d=-1e9,m=0;for(let y=0;y<e;y++){let p=t.nodes[y];if(o[p]>=3){let g=f(p);g>0&&(d=t.cum[y],m=g)}l[y]=d,c[y]=m}d=1e9,m=0;for(let y=e-1;y>=0;y--){let p=t.nodes[y];if(o[p]>=3){let g=f(p);g>0&&(d=t.cum[y],m=g)}u[y]=d,h[y]=m}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(a.flags&zt.ROUNDABOUT||!a.drivable||a.cls>=Gt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Fi(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Fi(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),m=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,m+2,c-4,c-4,5),o.fill()}}),n=Fi(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),i=Fi(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=td[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Ft({map:t,vertexColors:!0}),-2,-4),stone:r(new Ft({map:e,vertexColors:!0}),-2,-4),path:r(new Ft({map:t,vertexColors:!0}),-1,-2),walk:new Ft({map:n,vertexColors:!0,side:re}),mark:r(new Ft({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Ft({map:i,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Ft({color:11052186,side:re}),barrier:new Ft({vertexColors:!0,side:re}),guard:new Ft({color:13159632,side:re}),island:new Ft({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,i=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}let o=Math.hypot(i,r)||1;i/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+i*(u/f);a=1/Math.max(.5,d)}return[-r*a,i*a]}wayColor(t){return t.flags&zt.NOCAR||t.surf===1?[1,1,1]:t.flags&zt.UNPAVED?[.95,.82,.62]:Yy[t.cls]}edgeH(t,e,n,i,r){let o=this.ways[t];if(o.abs)return this.heightOn(t,e,n,i,r);let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+xa}addDecal(t,e,n,i,r,o,a,l,c,u,h){let f=$y(h);if(!f)return;let d=-l,m=a,y=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([p,g,M,x])=>{let v=r+d*p+a*g,b=o+m*p+l*g;return t.v(v,this.edgeH(e,n,i,v,b)+.035,b,1,1,1,M,x)});t.quad(y[0],y[1],y[2],y[3])}buildTile(t){let e=new $t,n=this.tileSegs.get(t)||[],i=this.materials(),r=new oe(!0,!0),o=new oe(!0,!0),a=new oe(!0,!1),l=new oe(!1,!1),c=new oe(!1,!1),u=new oe(!0,!0),h=new oe(!0,!0),f=this.terrain,d=5,m=new Set;for(let p of n){let g=Math.floor(p/16384),M=p%16384,x=this.ways[g],v=x.nodes[M],b=x.nodes[M+1],E=this.nx[v],S=this.nz[v],T=this.nx[b],_=this.nz[b],w=Math.hypot(T-E,_-S);if(w<.05)continue;let R=(T-E)/w,D=(_-S)/w,z=-D,P=R,k=this.miter(x,M),N=this.miter(x,M+1),W=x.width/2,B=Math.max(1,Math.ceil(w/d)),Y=this.wayColor(x),K=x.surf===1||!!(x.flags&zt.NOCAR),V=K?o:r,tt=K?.6:.2,Z=x.abs||this.dh[v]>.3||this.dh[b]>.3,F=-1,O=-1,$=[];for(let J=0;J<=B;J++){let X=J/B,rt=E+(T-E)*X,ut=S+(_-S)*X,ot=k[0]+(N[0]-k[0])*X,G=k[1]+(N[1]-k[1])*X,Q=rt-ot*W,L=ut-G*W,ft=rt+ot*W,at=ut+G*W,xt=this.edgeH(g,M,X,Q,L),st=this.edgeH(g,M,X,ft,at),St=V.v(Q,xt,L,Y[0],Y[1],Y[2],Q*tt,L*tt),ct=V.v(ft,st,at,Y[0],Y[1],Y[2],ft*tt,at*tt);F>=0&&V.quad(F,O,ct,St),F=St,O=ct,$.push([Q,xt,L,ft,st,at,ot,G])}for(let[J,X]of[[0,v],[x.nodes.length-1,b]]){if(J===0?M!==0:M!==x.nodes.length-2)continue;let rt=X*2+(K?1:0);if(m.has(rt)||x.flags&zt.ROUNDABOUT)continue;m.add(rt);let ut=this.nx[X],ot=this.nz[X],G=J===0?0:1,Q=V.v(ut,this.edgeH(g,M,G,ut,ot),ot,Y[0],Y[1],Y[2],ut*tt,ot*tt),L=[];for(let ft=0;ft<14;ft++){let at=ft/14*Math.PI*2,xt=ut+Math.cos(at)*W,st=ot+Math.sin(at)*W;L.push(V.v(xt,this.edgeH(g,M,G,xt,st),st,Y[0],Y[1],Y[2],xt*tt,st*tt))}for(let ft=0;ft<14;ft++)V.tri(Q,L[(ft+1)%14],L[ft])}if(Z){for(let J=0;J<2;J++)for(let X=0;X<$.length-1;X++){let rt=$[X],ut=$[X+1],ot=rt[J*3],G=rt[J*3+1],Q=rt[J*3+2],L=ut[J*3],ft=ut[J*3+1],at=ut[J*3+2],xt=f.height(ot,Q),st=f.height(L,at);if(G-xt<.35&&ft-st<.35||this.coveredBy(g,(ot+L)/2,(Q+at)/2,.3))continue;let St=x.abs?Math.max(xt-1,G-1.4):xt-.5,ct=x.abs?Math.max(st-1,ft-1.4):st-.5,I=l.v(ot,G,Q),C=l.v(L,ft,at),q=l.v(L,ct,at),lt=l.v(ot,St,Q);l.quad(I,C,q,lt);let ht=l.v(ot,G+1,Q),it=l.v(L,ft+1,at),mt=l.v(L,ft,at),yt=l.v(ot,G,Q);l.quad(ht,it,mt,yt)}if(x.abs&&x.flags&zt.BRIDGE)for(let J=1;J<$.length-1;J+=4){let X=$[J],rt=(X[0]+X[3])/2,ut=(X[2]+X[5])/2,ot=(X[1]+X[4])/2,G=f.height(rt,ut);if(ot-G<3)continue;let Q=.6,L=[[-Q,-Q],[Q,-Q],[Q,Q],[-Q,Q]];for(let ft=0;ft<4;ft++){let[at,xt]=L[ft],[st,St]=L[(ft+1)%4],ct=l.v(rt+at,ot-.5,ut+xt),I=l.v(rt+st,ot-.5,ut+St),C=l.v(rt+st,G-1,ut+St),q=l.v(rt+at,G-1,ut+xt);l.quad(ct,I,C,q)}}}if(x.cls<=Gt.TRUNK&&!(x.flags&zt.LINK)&&!Z){let J=this.zones(x).mark;for(let X=0;X<2;X++)for(let rt=0;rt<$.length-1;rt++){let ut=x.cum[M]+rt/B*w,ot=x.cum[M]+(rt+1)/B*w;if(ut-J.pc[M]<8||J.nc[M+1]-ot<8)continue;let G=$[rt],Q=$[rt+1],L=X?1:-1,ft=.4*L;if(this.coveredBy(g,(G[X*3]+Q[X*3])/2+z*ft,(G[X*3+2]+Q[X*3+2])/2+P*ft,.8))continue;let at=G[X*3]+z*ft,xt=G[X*3+2]+P*ft,st=G[X*3+1],St=Q[X*3]+z*ft,ct=Q[X*3+2]+P*ft,I=Q[X*3+1],C=c.v(at,st+.85,xt),q=c.v(St,I+.85,ct),lt=c.v(St,I+.5,ct),ht=c.v(at,st+.5,xt);if(c.quad(C,q,lt,ht),rt%2===0){let it=c.v(at,st+.85,xt),mt=c.v(at+R*.12,st+.85,xt+D*.12),yt=c.v(at+R*.12,st-.2,xt+D*.12),wt=c.v(at,st-.2,xt);c.quad(it,mt,yt,wt)}}}this.buildSidewalk(u,g,M,$,B,w),this.buildMarkings(a,g,M)}let y=new oe(!0,!1);for(let p of this.roundabouts){if(this.tileKey(p.x,p.z)!==t)continue;let g=f.height(p.x,p.z)+p.dh+xa+.22,M=p.poly,x=M.length,v=Math.min(1.6,p.r*.3),b=y.v(p.x,g+.25+Math.min(1.2,p.r*.06),p.z,.3,.52,.2),S=[[0,g-.6,.86,.86,.83],[0,g,.86,.86,.83],[.25,g,.62,.55,.5],[v,g+.06,.62,.55,.5],[v,g+.25,.8,.8,.78],[v+.25,g+.25,.33,.56,.22]].map(([_,w,R,D,z])=>M.map(([P,k])=>{let N=Math.hypot(P-p.x,k-p.z)||1,W=Math.max(.05,(N-_)/N);return y.v(p.x+(P-p.x)*W,w,p.z+(k-p.z)*W,R,D,z)}));for(let _=0;_<S.length-1;_++)for(let w=0;w<x;w++){let R=(w+1)%x;y.quad(S[_][w],S[_+1][w],S[_+1][R],S[_][R])}let T=S[S.length-1];for(let _=0;_<x;_++)y.tri(b,T[(_+1)%x],T[_])}return this.buildNodeMarks(t,a,r),this.buildLaneArrows(t,h),this.buildRoundaboutEntries(t,a),this.buildRails(t,r,l),r.empty||e.add(r.mesh(i.road)),o.empty||e.add(o.mesh(i.stone)),u.empty||e.add(u.mesh(i.walk)),a.empty||e.add(a.mesh(i.mark)),h.empty||e.add(h.mesh(i.decal)),l.empty||e.add(l.mesh(i.wall,!0)),c.empty||e.add(c.mesh(i.guard)),y.empty||e.add(y.mesh(i.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&zt.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<Gt.PRIMARY||t.cls>Gt.RESIDENTIAL||t.flags&(zt.LINK|zt.ROUNDABOUT|zt.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,i,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let m=0;m<2;m++){if(!(u&(m?2:1)))continue;let y=m?1:-1,p=null;for(let g=0;g<=r;g++){let M=a.cum[n]+g/r*o,x=i[g],v=g/r,b=x[m*3],E=x[m*3+1],S=x[m*3+2],T=b+x[6]*y*Qf,_=S+x[7]*y*Qf;if((M-h.pc[n]<40||h.nc[n+1]-M<40)&&this.coveredBy(e,(b+T)/2,(S+_)/2,1)){p=null;continue}let R=this.edgeH(e,n,v,T,_),D=Math.max(E,R)+Zy,z=[t.v(b,E-.05,S,d[0],d[1],d[2],0,M*.5),t.v(b,D,S,d[0],d[1],d[2],.1,M*.5),t.v(b,D,S,f[0],f[1],f[2],0,M*.6),t.v(T,D,_,f[0],f[1],f[2],1,M*.6),t.v(T,D,_,d[0],d[1],d[2],0,M*.5),t.v(T,Math.min(R,this.terrain.height(T,_))-.4,_,d[0],d[1],d[2],.1,M*.5)];if(p)for(let P=0;P<6;P+=2)y>0?t.quad(p[P],p[P+1],z[P+1],z[P]):t.quad(p[P],z[P],z[P+1],p[P+1]);p=z}}}buildMarkings(t,e,n){let i=this.ways[e];if(i.cls>=Gt.SERVICE||!i.drivable||i.flags&zt.UNPAVED||i.surf===1)return;let r=i.nodes[n],o=i.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,m=this.miter(i,n),y=this.miter(i,n+1),p=i.width/2,g=this.zones(i).mark,M=this.zones(i).walk,x=i.cum[n],v=[],b=i.limit<=50,E=i.flags&zt.ROUNDABOUT;if(i.cls<=Gt.TERTIARY||E||i.width>=7){let R=Math.max(.3,i.sh*.85);v.push({off:-p+R,wdt:.15,dash:0,edge:!0},{off:p-R,wdt:.15,dash:0,edge:!0})}let S=b?[3,4.5]:[4.5,7.5];if(E)i.nF>=2&&v.push({off:-p+i.sh+i.lw,wdt:.12,dash:[3,4.5]});else if(!i.oneway&&i.nF>=1&&i.nB>=1&&i.width>=5.4){let R=(g.nc[n+1]-(x+h)<22||x-g.pc[n]<22)&&i.cls<=Gt.TERTIARY;i.nF+i.nB>=4?v.push({off:i.cOff-.14,wdt:.12,dash:0},{off:i.cOff+.14,wdt:.12,dash:0}):v.push({off:i.cOff,wdt:.15,dash:R?0:S});for(let D=1;D<i.nF;D++)v.push({off:i.cOff+i.lw*D,wdt:.12,dash:S});for(let D=1;D<i.nB;D++)v.push({off:i.cOff-i.lw*D,wdt:.12,dash:S})}else if(i.oneway&&i.nF>=2)for(let R=1;R<i.nF;R++)v.push({off:-p+i.sh+i.lw*R,wdt:.15,dash:[4.5,7.5]});let T=i.cls<=Gt.TRUNK||i.flags&zt.LINK?220:35,_=x-M.pc[n]<T||M.nc[n+1]-(x+h)<T,w=_?1.25:5;for(let R of v){let D=[];for(let N=0;N<h;N+=w)D.push(N);if(R.dash){let N=R.dash[0]+R.dash[1];for(let W=Math.floor(x/N)*N;W<x+h;W+=N)W>x&&D.push(W-x),W+R.dash[0]>x&&W+R.dash[0]<x+h&&D.push(W+R.dash[0]-x)}D.push(h),D.sort((N,W)=>N-W);let z=-1,P=-1,k=-1;for(let N=0;N<D.length-1;N++){let W=D[N],B=D[N+1];if(B-W<.02)continue;let Y=(W+B)/2,K=Y/h,V=!R.dash||(x+Y)%(R.dash[0]+R.dash[1])<R.dash[0];if(V&&_){let tt=m[0]+(y[0]-m[0])*K,Z=m[1]+(y[1]-m[1])*K;this.coveredBy(e,a+f*Y+tt*R.off,l+d*Y+Z*R.off,R.edge?.1:0,!!R.edge)&&(V=!1)}if(!V){z=-1;continue}for(let tt of z>=0&&k===W?[B]:[W,B]){let Z=tt/h,F=m[0]+(y[0]-m[0])*Z,O=m[1]+(y[1]-m[1])*Z,$=a+f*tt+F*R.off,J=l+d*tt+O*R.off,X=$-F*R.wdt/2,rt=J-O*R.wdt/2,ut=$+F*R.wdt/2,ot=J+O*R.wdt/2,G=t.v(X,this.edgeH(e,n,Z,X,rt)+.02,rt,1,1,1),Q=t.v(ut,this.edgeH(e,n,Z,ut,ot)+.02,ot,1,1,1);z>=0&&t.quad(z,P,Q,G),z=G,P=Q}k=B}}}buildNodeMarks(t,e,n){let i=new Set,r=[Kt.CROSSING,Kt.CROSSING_SIGNALS,Kt.BUMP,Kt.TABLE,Kt.MINI_RB,Kt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||i.has(h)||!r.includes(f)||c.cls>=Gt.SERVICE&&f!==Kt.TURNING)continue;i.add(h);let d=Math.min(u,c.nodes.length-2),m=c.nodes[d],y=c.nodes[d+1],p=this.nx[y]-this.nx[m],g=this.nz[y]-this.nz[m],M=Math.hypot(p,g)||1,x=p/M,v=g/M,b=-v,E=x,S=this.nx[h],T=this.nz[h],_=c.width/2,w=u===d?0:1,R=(D,z,P,k,N,W=.025)=>{let B=[[D,P],[z,P],[z,k],[D,k]].map(([Y,K])=>{let V=S+b*Y+x*K,tt=T+E*Y+v*K;return e.v(V,this.edgeH(a,d,w,V,tt)+W,tt,N[0],N[1],N[2])});e.quad(B[0],B[1],B[2],B[3])};if(f===Kt.CROSSING||f===Kt.CROSSING_SIGNALS)for(let D=-_+.55;D<=_-.55;D+=1)R(D-.25,D+.25,-1.5,1.5,[1,1,1]);else if(f===Kt.BUMP){let D=0;for(let z=-_+.2;z<_-.2;z+=.5,D++)R(z,Math.min(_-.2,z+.5),-.45,.45,D%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===Kt.TABLE){R(-_+.1,_-.1,-2.6,2.6,[.72,.36,.3],.05);for(let D=-_+.6;D<=_-.6;D+=1)R(D-.25,D+.25,-1.5,1.5,[1,1,1],.07)}else if(f===Kt.MINI_RB){let D=this.edgeH(a,d,w,S,T)+.03,z=e.v(S,D+.08,T,1,1,1),P=[];for(let k=0;k<16;k++){let N=k/16*6.2832;P.push(e.v(S+Math.cos(N)*1.5,D,T+Math.sin(N)*1.5,1,1,1))}for(let k=0;k<16;k++)e.tri(z,P[(k+1)%16],P[k])}else if(f===Kt.TURNING){let D=this.wayColor(c),z=Math.max(7,_+3),P=n.v(S,this.edgeH(a,d,w,S,T),T,D[0],D[1],D[2],S*.2,T*.2),k=[];for(let N=0;N<20;N++){let W=N/20*6.2832,B=S+Math.cos(W)*z,Y=T+Math.sin(W)*z;k.push(n.v(B,this.edgeH(a,d,w,B,Y),Y,D[0],D[1],D[2],B*.2,Y*.2))}for(let N=0;N<20;N++)n.tri(P,k[(N+1)%20],k[N])}}}}buildLaneArrows(t,e){let n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let m of a.len>70?[9,32]:[9]){if(m>a.len-4)continue;let[y,p,g,M]=this.pointAt(a,l>0?a.len-m:m),x=a.nodes[g],v=a.nodes[g+1],b=this.nx[v]-this.nx[x],E=this.nz[v]-this.nz[x],S=Math.hypot(b,E)||1;b=b/S*l,E=E/S*l;let T=-E,_=b,w=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((R,D)=>{let z=new Set(R.split(";").map(k=>k.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(k=>k==="left"||k==="right"||k==="through"));if(!z.size)return;let P=w+d*(D+.5);this.addDecal(e,r,g,M,y+T*P,p+_*P,b,E,Math.min(1.5,d*.5),4.2,[...z].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let i=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=i.oneway?-i.width/2+.3:(n.dir>0?i.cOff:-i.cOff)+.15,m=i.width/2-.3;for(let y=d;y+.5<=m;y+=.75){let p=[[y,-.3],[y+.5,-.3],[y+.25,.35]].map(([g,M])=>{let x=h+l*g-r*M,v=f+c*g-o*M;return e.v(x,this.edgeH(n.wi,n.k,n.t,x,v)+.03,v,1,1,1)});e.tri(p[0],p[1],p[2]),e.tri(p[0],p[2],p[1])}}}buildRails(t,e){let n=this.terrain;for(let i of this.tileRails.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,m=(h-c)/f,y=-m,p=d,g=Math.max(1,Math.ceil(f/6)),M=(x,v,b)=>{if(a.bridge&&a.cum){let E=a.cum[o]+b*f;return a.h0+(a.h1-a.h0)*E/(a.cum[a.cum.length-1]||1)+.25}return n.height(x,v)+.25};for(let[x,v,b]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let E=-1,S=-1;for(let T=0;T<=g;T++){let _=T/g,w=l+(u-l)*_+y*x,R=c+(h-c)*_+p*x,D=M(w,R,_)+(b?.16:0),z=w-y*v/2,P=R-p*v/2,k=w+y*v/2,N=R+p*v/2,W=b?[.35,.33,.32]:[.75,.68,.58],B=e.v(z,D,P,...W,z*.3,P*.3),Y=e.v(k,D,N,...W,k*.3,N*.3);E>=0&&e.quad(E,S,Y,B),E=B,S=Y}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new oe(!0,!0),i=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let x=3;x<r.length;x+=2)u+=r[x],h+=r[x+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let x=0;x<c.length-1;x++){let v=Math.hypot(c[x+1][0]-c[x][0],c[x+1][1]-c[x][1]),b=Math.max(1,Math.ceil(v/6));for(let E=0;E<b;E++)f.push([c[x][0]+(c[x+1][0]-c[x][0])*E/b,c[x][1]+(c[x+1][1]-c[x][1])*E/b,d+v*E/b]);d+=v}f.push([c[c.length-1][0],c[c.length-1][1],d]);let m=i[o],y=e.height(f[0][0],f[0][1]),p=e.height(f[f.length-1][0],f[f.length-1][1]),g=-1,M=-1;for(let x=0;x<f.length;x++){let v=f[Math.min(f.length-1,x+1)],b=f[Math.max(0,x-1)],E=v[0]-b[0],S=v[1]-b[1],T=Math.hypot(E,S)||1;E/=T,S/=T;let _=-S,w=E,R=f[x][0],D=f[x][1],z=d>0?f[x][2]/d:0,P=R-_*a/2,k=D-w*a/2,N=R+_*a/2,W=D+w*a/2,B=l?y+(p-y)*z+Math.sin(Math.PI*z)*Math.min(5.5,d*.12)+.1:0,Y=n.v(P,l?B:e.height(P,k)+.1,k,m[0],m[1],m[2],P*.3,k*.3),K=n.v(N,l?B:e.height(N,W)+.1,W,m[0],m[1],m[2],N*.3,W*.3);g>=0&&n.quad(g,M,K,Y),g=Y,M=K}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new oe(!0,!1),i=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,m=-f/d*u/2,y=h/d*u/2,p=[[o-m,a-y],[o+m,a+y],[l+m,c+y],[l-m,c-y]].map(([g,M])=>n.v(g,e.height(g,M)+.1,M,1,1,1));n.quad(p[0],p[1],p[2],p[3])};for(let o=0;o<i.length;o+=5){let a=i[o]/10,l=i[o+1]/10,c=i[o+2]/10*Math.PI/180,u=i[o+3]/10,h=(i[o+4]>>1)/10,f=i[o+4]&1,d=Math.sin(c),m=Math.cos(c),y=-m,p=d;if(f===0)for(let g of[1,-1])r(a+y*g*u/2-d*h/2,l+p*g*u/2-m*h/2,a+y*g*u/2+d*h/2,l+p*g*u/2+m*h/2,.1);else for(let g of[1,-1])r(a+d*g*h/2-y*u/2,l+m*g*h/2-p*u/2,a+d*g*h/2+y*u/2,l+m*g*h/2+p*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let i=this.terrain,r=new oe(!0,!1),o=new oe(!0,!1),a=new oe(!0,!0),l=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let u of t.ba){let h=l[u[0]],f=u[1]/10,d=[],m=0,y=0;for(let p=2;p<u.length;p+=2)m+=u[p],y+=u[p+1],d.push([m/10,y/10]);if(u[0]>=4){if(jf(o,a,d,u[0],f,i,u[2]+u[3]*31),e&&u[0]!==7)for(let p=0;p<d.length-1;p++){let[g,M]=d[p],[x,v]=d[p+1],b=Math.hypot(x-g,v-M);if(b<1.5)continue;let E=-(v-M)/b*.3,S=(x-g)/b*.3;e.addPolygon(n,Float32Array.from([g-E,M-S,x-E,v-S,x+E,v+S,g+E,M+S]))}continue}for(let p=0;p<d.length-1;p++){let[g,M]=d[p],[x,v]=d[p+1],b=Math.hypot(x-g,v-M);if(b<.2)continue;let E=-(v-M)/b*h.th/2,S=(x-g)/b*h.th/2,T=Math.max(1,Math.ceil(b/8));for(let _=0;_<T;_++){let w=_/T,R=(_+1)/T,D=g+(x-g)*w,z=M+(v-M)*w,P=g+(x-g)*R,k=M+(v-M)*R,N=i.height(D,z),W=i.height(P,k),B=u[0]===3?.45:-.3,Y=h.c,K=[Y[0]*.8,Y[1]*.8,Y[2]*.8],V=[[D-E,z-S,N],[P-E,k-S,W],[P+E,k+S,W],[D+E,z+S,N]],tt=V.map(([Z,F,O])=>r.v(Z,O+f,F,Y[0],Y[1],Y[2]));r.quad(tt[0],tt[1],tt[2],tt[3]);for(let[Z,F]of[[0,1],[2,3]]){let O=V[Z],$=V[F],J=r.v(O[0],O[2]+f,O[1],K[0],K[1],K[2]),X=r.v($[0],$[2]+f,$[1],K[0],K[1],K[2]),rt=r.v($[0],$[2]+B,$[1],K[0],K[1],K[2]),ut=r.v(O[0],O[2]+B,O[1],K[0],K[1],K[2]);r.quad(J,X,rt,ut)}}if(e&&u[0]!==3&&b>1.5){let _=Math.max(.4,h.th/2),w=-(v-M)/b*_,R=(x-g)/b*_;e.addPolygon(n,Float32Array.from([g-w,M-R,x-w,v-R,x+w,v+R,g+w,M+R]))}}}let c=new $t;if(r.empty||c.add(r.mesh(this.materials().barrier,!0)),o.empty||c.add(o.mesh(Bi().solid,!0)),!a.empty){let u=a.mesh(Bi().grille,!0);u.customDepthMaterial=Bi().depth,c.add(u)}return c.children.length?c:null}};var ed=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],nd=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],id=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],sd=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],rd=new Ct;function Jy(){let e=()=>{let y=document.createElement("canvas");return y.width=y.height=512,y},n=e(),i=e(),r=e(),o=e(),a=e(),l=n.getContext("2d"),c=r.getContext("2d"),u=i.getContext("2d"),h=o.getContext("2d"),f=a.getContext("2d");for(let y of[l,u,f])y.fillStyle="#ffffff",y.fillRect(0,0,512,512);for(let y of[c,h])y.fillStyle="#000",y.fillRect(0,0,512,512);for(let y of[l,u,f])for(let p=0;p<2500;p++)y.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,y.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8);let d=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"];for(let y=0;y<8;y++)for(let p=0;p<8;p++){let g=p*64,M=y*64,x=64*.34,v=64*.52,b=g+(64-x)/2,E=M+64*.22;l.fillStyle="#d8d2c4",l.fillRect(b-3,E-3,x+6,v+7),l.fillStyle="#2f3438",l.fillRect(b,E,x,v),l.fillStyle="#5c6a72",l.fillRect(b+2,E+2,x/2-3,v-4),l.fillRect(b+x/2+1,E+2,x/2-3,v-4);let S=Math.random(),T=d[(p*7+y*3)%d.length];l.fillStyle=T,S<.6?(l.fillRect(b-x/2-2,E,x/2,v),l.fillRect(b+x+2,E,x/2,v)):S<.85&&l.fillRect(b,E,x,v),l.fillStyle="rgba(0,0,0,0.25)";for(let _=0;_<6;_++)l.fillRect(b-x/2-2,E+_*v/6,x*2+4,1);if(S<.85||Math.random()<.3){let _=Math.random()<.35;c.fillStyle=_?Math.random()<.5?"#ffd890":"#fff0c0":"#000",S>=.6&&S<.85&&(c.fillStyle="#000"),c.fillRect(b,E,x,v)}u.fillStyle="rgba(0,0,0,0.08)",u.fillRect(g,M,2,64),y%2===0&&(u.fillStyle="#4b5a63",u.fillRect(g+3,M+64*.3,58,64*.3),h.fillStyle=Math.random()<.25?"#e8f0ff":"#000",h.fillRect(g+3,M+64*.3,58,64*.3))}let m=(y,p=!0)=>{let g=new Ie(y);return g.wrapS=g.wrapT=ui,g.anisotropy=8,p&&(g.colorSpace=ye),g};return{res:m(n),ind:m(i),plain:m(a),emiR:m(r),emiI:m(o)}}var va=class{constructor(t){this.terrain=t;let e=Jy();this.mats={res:new Ft({map:e.res,vertexColors:!0,emissiveMap:e.emiR,emissive:16777215,emissiveIntensity:0}),ind:new Ft({map:e.ind,vertexColors:!0,emissiveMap:e.emiI,emissive:16777215,emissiveIntensity:0}),plain:new Ft({map:e.plain,vertexColors:!0}),roof:new Ft({vertexColors:!0,side:re})}}setNight(t){this.mats.res.emissiveIntensity=t*.55,this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let i=this.terrain,r={res:new oe,ind:new oe,plain:new oe},o=new oe(!0,!1),a=t.s,l=[];for(let u of t.b){let h=u[0],f=u[1]/10,d=u[2]/10,m=u[3],y=u[4],p=a[u[5]],g=a[u[6]],M=a[u[7]],x=[],v=0,b=0;for(let Z=8;Z<u.length;Z+=2)v+=u[Z],b+=u[Z+1],x.push(v/10,b/10);let E=x.length/2;if(E<3)continue;let S=0,T=0,_=0,w=1e9,R=-1e9;for(let Z=0;Z<E;Z++){let F=(Z+1)%E;S+=x[Z*2]*x[F*2+1]-x[F*2]*x[Z*2+1],T+=x[Z*2],_+=x[Z*2+1];let O=i.height(x[Z*2],x[Z*2+1]);w=Math.min(w,O),R=Math.max(R,O)}S=Math.abs(S/2),T/=E,_/=E;let D=Ae(Math.floor(x[0]*10)*7919+Math.floor(x[1]*10)),z=Ae(Math.floor(x[1]*10)*104729+17),P=h;if(P===0&&(P=S<45?6:S>1800?3:2),!(f>0))if(m>0)f=m*3.1+.6;else switch(P){case 1:f=6.2+D*2.5;break;case 2:f=S>500?11+D*7:7+D*4;break;case 3:f=7.5+D*4;break;case 4:f=7+D*5;break;case 5:f=13+Math.min(10,S/80);break;case 6:f=2.8+D*.8;break;case 7:f=10+D*4;break;case 8:f=28+D*12;break;case 9:f=6+D*2;break;default:f=4+D*3}let k=w-.6+d,N=(w+R)/2+f,W=P===3||P===4?"ind":P===5||P===6||P===8||P===9||P===10?"plain":"res",B;if(g&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(g))try{rd.set(g),B=rd.clone()}catch{B=null}B||(B=new Ct(W==="ind"?nd[Math.floor(z*nd.length)]:P===8||P===5?z<.5?"#d8c9a8":"#c9a77f":ed[Math.floor(z*ed.length)])),B.convertSRGBToLinear();let Y=r[W],K=0;for(let Z=0;Z<E;Z++){let F=(Z+1)%E,O=x[Z*2],$=x[Z*2+1],J=x[F*2],X=x[F*2+1],rt=Math.hypot(J-O,X-$),ut=K/24,ot=(K+rt)/24,G=Math.max(1,Math.round(rt/3)),Q=ut+G/8,L=0,ft=(N-k)/24,at=Y.v(O,k,$,B.r,B.g,B.b,ut,ft),xt=Y.v(O,N,$,B.r,B.g,B.b,ut,L),st=Y.v(J,N,X,B.r,B.g,B.b,Q,L),St=Y.v(J,k,X,B.r,B.g,B.b,Q,ft);Y.quad(at,xt,st,St),K+=rt}let V,tt=(P===1||P===2&&(S<1400||m<=4)||P===5||P===9||P===7&&S<900||P===6&&S>18)&&y!==1;if(M&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(M))try{V=new Ct(M)}catch{V=null}V||(V=new Ct(tt?id[Math.floor(D*id.length)]:sd[Math.floor(D*sd.length)])),V.convertSRGBToLinear(),this.roof(o,x,E,N,tt,V,S,P,B,z),e&&e.addPolygon(n,Float32Array.from(x),N+(tt?3:1)),p&&(P===5||P===8||h===7)&&l.push({name:p,x:T,z:_,y:N+4})}let c=new $t;for(let u of["res","ind","plain"])r[u].empty||c.add(r[u].mesh(this.mats[u],!0));return o.empty||c.add(o.mesh(this.mats.roof,!0)),{group:c,labels:l}}offsetRing(t,e,n){let i=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let m=-c,y=l,p=-h,g=u,M=Math.max(.35,1+m*p+y*g);i[r*2]=t[r*2]+n*(m+p)/M,i[r*2+1]=t[r*2+1]+n*(y+g)/M}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return i}roof(t,e,n,i,r,o,a,l,c,u){let h=(x,v,b,E=o)=>{let S=v[0]-x[0],T=v[2]-x[2],_=b[0]-x[0],w=b[2]-x[2],R=T*_-S*w,D=t.v(x[0],x[1],x[2],E.r,E.g,E.b),z=t.v(v[0],v[1],v[2],E.r,E.g,E.b),P=t.v(b[0],b[1],b[2],E.r,E.g,E.b);R>=0?t.tri(D,z,P):t.tri(D,P,z)},f=(x,v,b,E,S)=>{h(x,v,b,S),h(x,b,E,S)},d=o.clone().multiplyScalar(.84),m=o.clone().multiplyScalar(1.06),y=.45,p=(x,v,b)=>{if(u>.55)return;let E=.3,S=1.1,T=c.clone().multiplyScalar(.9),_=[[x-E,v-E],[x+E,v-E],[x+E,v+E],[x-E,v+E]];for(let w=0;w<4;w++){let[R,D]=_[w],[z,P]=_[(w+1)%4];f([R,b-.6,D],[z,b-.6,P],[z,b+S,P],[R,b+S,D],T)}f([_[0][0],b+S,_[0][1]],[_[1][0],b+S,_[1][1]],[_[2][0],b+S,_[2][1]],[_[3][0],b+S,_[3][1]],d)};if(r&&n===4&&a<2500){let x=[0,1,2,3].map(K=>[e[K*2],e[K*2+1]]),v=Math.hypot(x[1][0]-x[0][0],x[1][1]-x[0][1]),b=Math.hypot(x[2][0]-x[1][0],x[2][1]-x[1][1]),E=b>v?[x[1],x[2],x[3],x[0]]:x,S=Math.max(v,b),T=Math.min(v,b),_=(E[0][0]+E[1][0]+E[2][0]+E[3][0])/4,w=(E[0][1]+E[1][1]+E[2][1]+E[3][1])/4,R=(E[1][0]-E[0][0]+(E[2][0]-E[3][0]))/2/S,D=(E[1][1]-E[0][1]+(E[2][1]-E[3][1]))/2/S,z=Math.min(T*.27,5),P=this.offsetRing(E.flat(),4,-y),k=[0,1,2,3].map(K=>[P[K*2],i-y*.5,P[K*2+1]]),N=u>.4,W=N?S/2+y:Math.max(0,S/2-T/2),B=[_-R*W,i+z,w-D*W],Y=[_+R*W,i+z,w+D*W];if(f(k[0],k[1],Y,B,m),f(k[2],k[3],B,Y,o),N){let K=[0,1,2,3].map(V=>[E[V][0],i,E[V][1]]);h(K[1],K[2],[_+R*S/2,i+z,w+D*S/2],c),h(K[3],K[0],[_-R*S/2,i+z,w-D*S/2],c)}else h(k[1],k[2],Y,d),h(k[3],k[0],B,d);p(_+R*S*.2,w+D*S*.2,i+z);return}if(r&&a<6e3&&n<=60){let x=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),v=this.offsetRing(e,n,x);if(v||(x*=.5,v=this.offsetRing(e,n,x)),v){let b=this.offsetRing(e,n,-y),E=i+x*.5;for(let _=0;_<n;_++){let w=(_+1)%n;f([b[_*2],i-y*.4,b[_*2+1]],[b[w*2],i-y*.4,b[w*2+1]],[v[w*2],E,v[w*2+1]],[v[_*2],E,v[_*2+1]],_%2?o:d)}let S=[];for(let _=0;_<n;_++)S.push(new Mt(v[_*2],v[_*2+1]));let T=[];try{T=Nn.triangulateShape(S,[])}catch{T=[]}for(let[_,w,R]of T)h([S[_].x,E,S[_].y],[S[w].x,E,S[w].y],[S[R].x,E,S[R].y],m);(l===1||l===2)&&p(v[0]*.5+v[2]*.5,v[1]*.5+v[3]*.5,E);return}}let g=[];for(let x=0;x<n;x++)g.push(new Mt(e[x*2],e[x*2+1]));let M;try{M=Nn.triangulateShape(g,[])}catch{return}for(let[x,v,b]of M)h([g[x].x,i-.25,g[x].y],[g[v].x,i-.25,g[v].y],[g[b].x,i-.25,g[b].y])}};var Ky={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},Ma=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new _r(1,1),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r),l=i.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));i.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new Ss(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new Qt(.12,.18,1,5),this.crownMat=new Ft({color:16777215}),this.trunkMat=new Ft({color:5981746})}build(t,e,n,i,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(N,W,B,Y=!1,K=!1)=>f.push([N,W,B,Y,K]);if(t){for(let N=0;N<t.tr.length;N+=2)d(t.tr[N]/10,t.tr[N+1]/10,.9+Ae(N)*.5);for(let N of t.rows){let W=0,B=0,Y=[];for(let K=0;K<N.length;K+=2)W+=N[K],B+=N[K+1],Y.push([W/10,B/10]);for(let K=0;K<Y.length-1;K++){let V=Math.hypot(Y[K+1][0]-Y[K][0],Y[K+1][1]-Y[K][1]);for(let tt=0;tt<V;tt+=7)d(Y[K][0]+(Y[K+1][0]-Y[K][0])*tt/V,Y[K][1]+(Y[K+1][1]-Y[K][1])*tt/V,.8+Ae(K*31+tt)*.4,!1,Ae(N.length*7+N[0])<.45)}}}let m=11,y=e*7919+n*104729|0;for(let N=h+m/2;N<h+c;N+=m)for(let W=u+m/2;W<u+c;W+=m){y++;let B=W+(Ae(y)-.5)*m,Y=N+(Ae(y*3+1)-.5)*m,K=a.landClass(B,Y),V=(Ky[K]||0)*o;Ae(y*7+5)>V||d(B,Y,.75+Ae(y*11)*.6,(K==="forest"||K==="wood")&&Ae(y*13)<.12)}let p=f.filter(([N,W])=>{let B=l.nearest(N,W,9);return!B||B.d>l.ways[B.wi].width/2+1.5});if(!p.length)return null;let g=p.length,M=p.filter(N=>N[3]).length,x=new Ee(this.crownGeo,this.crownMat,g-M),v=M?new Ee(this.coneGeo,this.crownMat,M):null,b=new Ee(this.trunkGeo,this.trunkMat,g),E=new Jt,S=new Re,T=new H,_=new H,w=new Ct,R=new H(0,1,0),D=0,z=0,P=0;for(let[N,W,B,Y,K]of p){let V=a.height(N,W),tt=(Y?10:K?13:6.5)*B*(.8+Ae(D*5+1)*.5),Z=(Y?2.1:K?1.5:2.6+Ae(D*9)*1.4)*B;S.setFromAxisAngle(R,Ae(D*17)*6.28),_.set(N,V+tt*.3,W),T.set(1,tt*.6,1),E.compose(_,S,T),b.setMatrixAt(D,E);let F=.75+Ae(D*23)*.4;if(Y)_.set(N,V+tt*.55,W),T.set(Z,tt*.85,Z),E.compose(_,S,T),v.setMatrixAt(P,E),w.setRGB(.1*F,.26*F,.12*F),v.setColorAt(P++,w);else{_.set(N,V+tt*.62,W),T.set(Z,K?tt*.42:Z*1.05,Z),E.compose(_,S,T),x.setMatrixAt(z,E);let O=Ae(D*41)<.06;w.setRGB(O?.42*F:.17*F,O?.3*F:(.29+Ae(D*31)*.07)*F,.09*F),x.setColorAt(z++,w)}i&&i.addCircle(r,N,W,.35*B,V+tt),D++}x.castShadow=!0,b.castShadow=!1,x.computeBoundingSphere(),b.computeBoundingSphere();let k=new $t;return k.add(x,b),v&&(v.castShadow=!0,v.computeBoundingSphere(),k.add(v)),k}};var Ar=44;function Cr(s,t){let e=(t%Ar+Ar)%Ar,n=s===0?e:(e+Ar/2)%Ar;return n<17?"G":n<20.5?"Y":"R"}function Be(s,t,e,n,i,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,m]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let y=f*i/2,p=m*o/2;h.push([t+y*c+p*u,e+d*r/2,n-y*u+p*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(m=>s.v(h[m][0],h[m][1],h[m][2],l[0],l[1],l[2],0,0));s.quad(d[0],d[1],d[2],d[3])}}function zn(s,t,e,n,i,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=s.v(t-u*i/2,e-r/2,n-h*i/2,1,1,1,a[0],a[1]),d=s.v(t+u*i/2,e-r/2,n+h*i/2,1,1,1,a[2],a[1]),m=s.v(t+u*i/2,e+r/2,n+h*i/2,1,1,1,a[2],a[3]),y=s.v(t-u*i/2,e+r/2,n-h*i/2,1,1,1,a[0],a[3]);s.quad(f,d,m,y)}var Rh=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back"];function Rr(s,t=!1){let e=Rh.indexOf(s),n=e%8,i=Math.floor(e/8)+(t?4:0);return[n/8,1-(i+1)/8,(n+1)/8,1-i/8]}function jy(s,t){let i=(h,f)=>{s.beginPath(),s.arc(64,64,h,0,7),s.fillStyle=f,s.fill()},r=(h,f)=>{s.beginPath(),h.forEach(([d,m],y)=>y?s.lineTo(d,m):s.moveTo(d,m)),s.closePath(),s.fillStyle=f,s.fill()},o=(h,f,d,m,y,p)=>{s.beginPath(),s.roundRect(h,f,d,m,y),s.fillStyle=p,s.fill()},a=(h,f,d,m=67)=>{s.fillStyle=d,s.font=`bold ${f}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(h,64,m)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(t.startsWith("s")){i(62,l),i(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,m)=>{let y=(m+.5)/8*Math.PI*2;return[64+Math.cos(y)*f,64+Math.sin(y)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{i(62,"#fff"),i(58,c),s.strokeStyle="#fff",s.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;s.beginPath(),s.arc(64,64,30,f,d,!1),s.stroke();let m=64+Math.cos(f)*30,y=64+Math.sin(f)*30;s.save(),s.translate(m,y),s.rotate(f-Math.PI/2),s.beginPath(),s.moveTo(0,-17),s.lineTo(13,6),s.lineTo(-13,6),s.closePath(),s.fillStyle="#fff",s.fill(),s.restore()}break}case"noentry":i(62,"#fff"),i(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),s.fillStyle="#111",s.beginPath(),s.arc(66,52,7,0,7),s.fill(),s.strokeStyle="#111",s.lineWidth=6,s.lineCap="round",s.beginPath(),s.moveTo(64,62),s.lineTo(62,82),s.lineTo(50,100),s.moveTo(62,82),s.lineTo(76,100),s.moveTo(52,74),s.lineTo(64,66),s.lineTo(78,76),s.stroke(),s.lineCap="butt";break}case"bump":u(),s.fillStyle="#111",s.beginPath(),s.moveTo(36,96),s.quadraticCurveTo(64,56,92,96),s.closePath(),s.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"level":{s.lineCap="butt";for(let h of[1,-1])s.save(),s.translate(64,64),s.rotate(h*.55),s.fillStyle=l,s.fillRect(-62,-13,124,26),s.fillStyle="#fff",s.fillRect(-56,-8,112,16),s.fillStyle=l,s.fillRect(-62,-13,16,26),s.fillRect(46,-13,16,26),s.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),s.strokeStyle="#111",s.lineWidth=5,s.beginPath(),s.moveTo(74,60),s.lineTo(86,60),s.lineTo(86,86),s.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":s.fillStyle="#7d8185",s.fillRect(0,0,128,128);break;default:break}}function Qy(){let s=document.createElement("canvas");s.width=s.height=1024;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");Rh.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",jy(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let i=new Ie(s);return i.colorSpace=ye,i.anisotropy=8,i}var Ah=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,i){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),i(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Ie(this.cv);return t.colorSpace=ye,t.anisotropy=8,new Ft({map:t,vertexColors:!0})}};function Oi(s,t,e,n,i="bold"){for(s.font=`${i} ${n}px Arial`;s.measureText(t).width>e&&n>9;)n-=1,s.font=`${i} ${n}px Arial`;return n}var _a=class{constructor(t,e,n,i){this.roads=t,this.terrain=e,this.comuneAt=n;let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Ft({map:Qy(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Ft({vertexColors:!0,side:re}),this.lights=[0,1].map(()=>({R:new De({color:3342336}),Y:new De({color:3351040}),G:new De({color:8704})})),this.greenMat=new De({color:2162528}),this.lampMat=new De({color:5592400}),this.lampPoleMat=new Ft({color:5593178}),this.lampPoleGeo=new Qt(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new Nt(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new De({map:new Ie(o),transparent:!0,blending:hi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new tn(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of i?i.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let i=Cr(n,t),r=this.lights[n];r.R.color.setHex(i==="R"?16722458:2754566),r.Y.color.setHex(i==="Y"?16756736:2760196),r.G.color.setHex(i==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let i=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,i=u.n)}return i}approaches(t){let e=this.roads,n=[];for(let i=e.adjStart[t];i<e.adjStart[t+1];i++){let r=e.ways[e.adjWay[i]],o=e.adjPos[i];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[i],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[i],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,i=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==i&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),i=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,i=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;i=n.ways[o].limit}}return i}traceDestination(t,e,n,i){let r=this.roads,o=this.comuneOfNode(i),a=this.placeNear(r.nx[i],r.nz[i],600),l=0,c=i;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let y=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),p=null,g=1.15,M=(b,E,S,T)=>{let _=r.ways[b],w=_.nodes[E+S];if(w===void 0)return;let R=Math.atan2(r.nx[w]-r.nx[T],r.nz[w]-r.nz[T])-y;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<g&&(g=Math.abs(R),p=[b,E,S])},x=(b,E)=>{for(let S=r.adjStart[b];S<r.adjStart[b+1];S++){let T=r.adjWay[S],_=r.ways[T],w=r.adjPos[S];if(!(!_.drivable||_.cls>Gt.UNCLASSIFIED)&&!(T===t&&w===e)){if(_.flags&zt.ROUNDABOUT){E||v(T,w);continue}w<_.nodes.length-1&&M(T,w,1,E?d:b),w>0&&!_.oneway&&M(T,w,-1,E?d:b)}}},v=(b,E)=>{let S=b,T=E;for(let _=0;_<120;_++){let w=r.ways[S];if(T>=w.nodes.length-1){let D=w.nodes[w.nodes.length-1],z=!1;if(w.nodes[0]===D&&w.nodes.length>2)T=0,z=!0;else for(let P=r.adjStart[D];P<r.adjStart[D+1];P++){let k=r.adjWay[P];if(k!==S&&r.ways[k].flags&zt.ROUNDABOUT&&r.adjPos[P]===0){S=k,T=0,z=!0;break}}if(!z)return}T++;let R=(w===r.ways[S],r.ways[S].nodes[T]);if(R===d)return;r.degree[R]>=3&&x(R,!0)}};if(x(d,!1),!p)return null;c=d,[t,e,n]=p;continue}let m=h.nodes[f];if(l+=Math.hypot(r.nx[m]-r.nx[d],r.nz[m]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let y=this.comuneOfNode(m);if(y&&o&&y!==o)return{name:y,dist:l};let p=this.placeNear(r.nx[m],r.nz[m]);if(p&&p!==a&&p!==o&&l>500)return{name:p,dist:l}}}return null}build(t,e){let n=this.roads,i=this.terrain,r=n.tileSegs.get(t)||[],o=new oe(!0,!1),a=new oe(!0,!0),l=new oe(!0,!0),c=new oe(!0,!1),u=new oe(!0,!0),h=[0,1].map(()=>({R:new oe(!1,!1),Y:new oe(!1,!1),G:new oe(!1,!1)})),f=new oe(!1,!1),d=new Ah,m=[],y=[],p=[],g=[.42,.43,.44],M=(V,tt=.7)=>({uv:Rr(V),back:Rr(V,!0),w:tt,h:tt}),x=(V,tt,Z,F,O,$=2)=>{if(O=O.filter(ot=>ot&&ot.uv),!O.length)return;let J=Math.atan2(-Z,-F),X=i.height(V,tt),rt=O.reduce((ot,G)=>ot+G.h+.06,0);Be(o,V,X+($+rt)/2,tt,.07,$+rt,.07,J,g);let ut=X+$+rt;for(let ot of O)ut-=ot.h/2+.03,zn(ot.text?l:a,V-Z*.05,ut,tt-F*.05,ot.w,ot.h,J,ot.uv),ot.text&&ot.double?zn(l,V+Z*.05,ut,tt+F*.05,ot.w,ot.h,J+Math.PI,ot.uv):zn(a,V+Z*.05,ut,tt+F*.05,ot.w,ot.h,J+Math.PI,ot.back||Rr("back")),ut-=ot.h/2+.03},v=V=>{let tt=d.add("st"+V,190,42,(Z,F,O)=>{Z.fillStyle="#f7f7f2",Z.fillRect(0,0,F,O),Z.strokeStyle="#1b2f6b",Z.lineWidth=3,Z.strokeRect(2.5,2.5,F-5,O-5),Z.fillStyle="#16255a",Z.textAlign="center",Z.textBaseline="middle",Oi(Z,V,F-16,22),Z.fillText(V,F/2,O/2+1)});return tt&&{uv:tt,w:1.25,h:.28,text:!0,double:!0}},b=(V,tt)=>{let Z=d.add("tw"+(tt?"E":"S")+V,300,116,(F,O,$)=>{F.fillStyle="#fff",F.fillRect(0,0,O,$),F.strokeStyle="#111",F.lineWidth=6,F.strokeRect(7,7,O-14,$-14),F.fillStyle="#111",F.textAlign="center",F.textBaseline="middle",Oi(F,V,O-44,50),F.fillText(V,O/2,$/2+2),tt&&(F.strokeStyle="#c8101a",F.lineWidth=12,F.beginPath(),F.moveTo(16,$-16),F.lineTo(O-16,16),F.stroke())});return Z&&{uv:Z,w:2.1,h:.82,text:!0}},E=(V,tt,Z)=>{let F=tt?`${V}  ${tt}`:V,O=d.add("dr"+(Z?"B":"W")+F,300,64,($,J,X)=>{$.fillStyle=Z?"#0a4fa6":"#fff",$.fillRect(0,0,J,X),$.strokeStyle=Z?"#fff":"#111",$.lineWidth=3,$.strokeRect(3.5,3.5,J-7,X-7),$.fillStyle=Z?"#fff":"#111",$.beginPath(),$.moveTo(34,12),$.lineTo(54,34),$.lineTo(41,34),$.lineTo(41,54),$.lineTo(27,54),$.lineTo(27,34),$.lineTo(14,34),$.closePath(),$.fill(),$.textAlign="left",$.textBaseline="middle",Oi($,F,J-76,30),$.fillText(F,66,X/2+2)});return O&&{uv:O,w:1.9,h:.42,text:!0}},S=(V,tt)=>{let Z=26+V.length*46,F=d.add("bd"+tt+V.join("|"),400,Z,(O,$,J)=>{let X={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[tt],rt=tt==="white"?"#111":"#fff";O.fillStyle=X,O.fillRect(0,0,$,J),O.strokeStyle=rt,O.lineWidth=4,O.strokeRect(5,5,$-10,J-10),O.fillStyle=rt,O.textBaseline="middle",V.forEach((ut,ot)=>{let G=36+ot*46;O.textAlign="left",Oi(O,ut,$-90,34),O.fillText(ut,22,G)}),O.beginPath(),O.moveTo($-28,18),O.lineTo($-28,46),O.lineTo($-56,18),O.closePath(),O.fill(),O.lineWidth=8,O.strokeStyle=rt,O.beginPath(),O.moveTo($-62,52),O.lineTo($-36,26),O.stroke()});return F&&{uv:F,w:3.2,h:3.2*Z/400,text:!0}},T=V=>{let tt=d.add("rf"+V,130,56,(Z,F,O)=>{let $=/^A\d/.test(V);Z.fillStyle="#fff",Z.fillRect(0,0,F,O),Z.fillStyle=$?"#0b7a3b":"#0a4fa6",Z.fillRect(4,4,F-8,O-8),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Oi(Z,V,F-18,30),Z.fillText(V,F/2,O/2+2)});return tt&&{uv:tt,w:.8,h:.34,text:!0}},_=V=>{let tt=d.add("bs"+V,190,36,(Z,F,O)=>{Z.fillStyle="#f2c417",Z.fillRect(0,0,F,O),Z.fillStyle="#111",Z.textAlign="center",Z.textBaseline="middle",Oi(Z,V,F-12,20),Z.fillText(V,F/2,O/2+1)});return tt&&{uv:tt,w:1,h:.2,text:!0,double:!0}},w=V=>{let tt=d.add("ft"+V,150,150,(Z,F,O)=>{Z.fillStyle="#f4f4f4",Z.fillRect(0,0,F,O),Z.fillStyle="#d6202a",Z.fillRect(0,0,F,52),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Oi(Z,V||"CARBURANTI",F-14,26),Z.fillText(V||"CARBURANTI",F/2,27),Z.fillStyle="#111",Z.font="bold 20px Arial",Z.textAlign="left",Z.fillText("Benzina",10,80),Z.fillText("Gasolio",10,108),Z.fillText("GPL",10,134),Z.fillStyle="#0b7a3b",Z.textAlign="right",Z.fillText("1.7"+V.length%9,F-10,80),Z.fillText("1.6"+V.length*3%9,F-10,108),Z.fillText("0.7"+V.length*7%9,F-10,134)});return tt&&{uv:tt,w:1.5,h:1.5,text:!0,double:!0}},R=V=>Rh.includes("s"+V)?M("s"+V,.66):null,D=(V,tt,Z,F,O)=>n.heightOn(V,tt,Z,F,O),z=(V,tt,Z,F,O,$)=>{let J=-F,X=Z,rt=V.w.width/2,ut=n.nx[tt]-Z*(O+.8),ot=n.nz[tt]-F*(O+.8),G=V.w.oneway?-rt+.3:(V.fwd?V.w.cOff:-V.w.cOff)+.1,Q=rt-.3,L=D(V.wi,V.seg,V.t,ut,ot)+.03;if($)for(let ft=G;ft+.5<=Q;ft+=.75){let at=[[ft,-.3],[ft+.5,-.3],[ft+.25,.35]].map(([xt,st])=>c.v(ut+J*xt-Z*st,L,ot+X*xt-F*st));c.tri(at[0],at[1],at[2]),c.tri(at[0],at[2],at[1])}else{let ft=c.v(ut+J*G-Z*.25,L,ot+X*G-F*.25),at=c.v(ut+J*Q-Z*.25,L,ot+X*Q-F*.25),xt=c.v(ut+J*Q+Z*.25,L,ot+X*Q+F*.25),st=c.v(ut+J*G+Z*.25,L,ot+X*G+F*.25);c.quad(ft,at,xt,st)}return[ut+J*(G+Q)/2,ot+X*(G+Q)/2,Q-G]},P=new Set,k=new Set,N=new Set,W=0;for(let V of r){let tt=Math.floor(V/16384),Z=V%16384,F=n.ways[tt];if(!F.drivable)continue;let O=F.nodes[Z],$=F.nodes[Z+1],J=n.nx[O],X=n.nz[O],rt=n.nx[$],ut=n.nz[$],ot=Math.hypot(rt-J,ut-X);if(ot<.3)continue;let G=(rt-J)/ot,Q=(ut-X)/ot,L=-Q,ft=G,at=F.width/2,xt=F.nodes.length-2,st=at+.9;for(let ct of[O,$]){if(P.has(ct))continue;P.add(ct);let I=n.ntag[ct];if(n.degMain[ct]>=3&&W<240){let ht=new Set;for(let it=n.adjStart[ct];it<n.adjStart[ct+1];it++){let mt=n.ways[n.adjWay[it]],yt=n.adjPos[it];if(!mt.name||!mt.drivable||mt.cls>Gt.LIVING||ht.has(mt.name)||k.has(mt.name+"@"+ct))continue;ht.add(mt.name),k.add(mt.name+"@"+ct);let wt=yt<mt.nodes.length-1?mt.nodes[yt+1]:mt.nodes[yt-1],Vt=n.nx[wt]-n.nx[ct],vt=n.nz[wt]-n.nz[ct],It=Math.hypot(Vt,vt)||1;Vt/=It,vt/=It;let Bt=n.w1[ct]/2+2.4,Xt=mt.width/2+.9,At=n.nx[ct]+Vt*Bt-vt*Xt,Yt=n.nz[ct]+vt*Bt+Vt*Xt,Zt=v(mt.name);Zt&&(x(At,Yt,-vt,Vt,[Zt],2.45),W++)}}if(!I)continue;let C=this.approaches(ct).filter(ht=>ht.w.cls<=Gt.SERVICE);if(!C.length)continue;let q=n.degMain[ct]>=3,lt=ht=>{let it=n.nx[ct]-n.nx[ht.from],mt=n.nz[ct]-n.nz[ht.from],yt=Math.hypot(it,mt)||1;return[it/yt,mt/yt,yt]};if(I===Kt.SIGNALS||I===Kt.STOP||I===Kt.GIVE_WAY||I===Kt.CROSSING_SIGNALS){let ht=C,it=n.ndir[ct];if(it&&!q){let mt=C.filter(yt=>yt.fwd===(it===1));mt.length&&(ht=mt)}else if(I!==Kt.SIGNALS&&I!==Kt.CROSSING_SIGNALS&&q){let mt=Math.min(...C.map(yt=>yt.w.cls));ht=C.filter(yt=>yt.w.cls>mt),ht.length||(ht=C.slice(0,1))}else if(!q&&I!==Kt.CROSSING_SIGNALS){let mt=C.filter(yt=>this.leadsToJunction(ct,yt.from));mt.length&&(ht=mt)}for(let mt of ht){let[yt,wt,Vt]=lt(mt),vt=-wt,It=yt,Bt=mt.w.width/2,Xt=q?Math.min(Vt*.6+2,n.w1[ct]/2+1.5):I===Kt.CROSSING_SIGNALS?2.5:0,At=n.nx[ct]-yt*Xt+vt*(Bt+.9),Yt=n.nz[ct]-wt*Xt+It*(Bt+.9),Zt=Math.atan2(-yt,-wt);if(I===Kt.SIGNALS||I===Kt.CROSSING_SIGNALS){let ae=i.height(At,Yt);Be(o,At,ae+1.55,Yt,.09,3.1,.09,Zt,g),Be(o,At,ae+3,Yt,.38,1.05,.3,Zt,[.1,.1,.1]);let j=-yt*.16,Rt=-wt*.16;if(I===Kt.SIGNALS){let gt=Math.abs(yt)>Math.abs(wt)?1:0,_t=h[gt];Be(_t.R,At+j,ae+3.33,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),Be(_t.Y,At+j,ae+3,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),Be(_t.G,At+j,ae+2.67,Yt+Rt,.22,.22,.04,Zt,[1,1,1]),y.push({node:ct,group:gt})}else Be(f,At+j,ae+2.67,Yt+Rt,.22,.22,.04,Zt,[1,1,1]);z(mt,ct,yt,wt,Xt+(I===Kt.CROSSING_SIGNALS?.5:0),!1)}else if(I===Kt.STOP){x(At,Yt,yt,wt,[M("stop",.75)]);let[ae,j,Rt]=z(mt,ct,yt,wt,Xt,!1);mt.w.cls<=Gt.RESIDENTIAL&&Rt>2&&n.addDecal(u,mt.wi,mt.seg,mt.t,ae-yt*2.6,j-wt*2.6,yt,wt,Math.min(2.4,Rt-.4),3,"stop")}else x(At,Yt,yt,wt,[M("giveway",.8)]),z(mt,ct,yt,wt,Xt,!0)}}else if(I===Kt.CROSSING&&!q&&F.cls<=Gt.UNCLASSIFIED)for(let ht of C){let[it,mt]=lt(ht);x(n.nx[ct]-it*2.6-mt*(ht.w.width/2+.9),n.nz[ct]-mt*2.6+it*(ht.w.width/2+.9),it,mt,[M("ped",.6)])}else if(I===Kt.BUMP||I===Kt.TABLE)for(let ht of C){let[it,mt]=lt(ht);x(n.nx[ct]-it*7-mt*(ht.w.width/2+.9),n.nz[ct]-mt*7+it*(ht.w.width/2+.9),it,mt,[M("bump",.8),I===Kt.TABLE?null:R(30)])}else if(I===Kt.LEVEL_CROSSING)for(let ht of C){let[it,mt]=lt(ht),yt=n.nx[ct]-it*5-mt*(ht.w.width/2+.9),wt=n.nz[ct]-mt*5+it*(ht.w.width/2+.9);x(yt,wt,it,mt,[M("level",.95)],1.7);let Vt=i.height(yt,wt),vt=Math.atan2(-it,-mt);Be(o,yt-it*.8,Vt+.55,wt-mt*.8,.3,1.1,.3,vt,[.75,.75,.75]);for(let It=0;It<6;It++)Be(o,yt-it*.8+mt*.25,Vt+1.4+It*.7,wt-mt*.8-it*.25,.1,.7,.1,vt,It%2?[.85,.1,.1]:[.95,.95,.95])}}let St=F.limitMapped&&F.cls<=Gt.RESIDENTIAL&&F.len>80&&!(F.flags&zt.ROUNDABOUT);if(Z===0&&St&&this.neighbourLimit(O,tt)!==F.limit){let ct=Math.min(14,F.len*.3),[I,C]=n.pointAt(F,ct);x(I+L*st,C+ft*st,G,Q,[R(F.limit)],2.1)}if(Z===xt&&!F.oneway&&St&&this.neighbourLimit($,tt)!==F.limit){let ct=Math.min(14,F.len*.3),[I,C]=n.pointAt(F,F.len-ct);x(I-L*st,C-ft*st,-G,-Q,[R(F.limit)],2.1)}if(F.oneway&&!(F.flags&(zt.ROUNDABOUT|zt.LINK))&&F.cls>=Gt.TERTIARY&&F.cls<=Gt.LIVING&&F.len>25){let ct=(I,C)=>{for(let q=n.adjStart[I];q<n.adjStart[I+1];q++){let lt=n.adjWay[q],ht=n.ways[lt];if(lt!==tt&&ht.oneway&&(ht.name===F.name||n.degMain[I]<3)&&n.adjPos[q]===(C?ht.nodes.length-1:0))return!0}return!1};if(Z===0&&n.degMain[O]>=3&&!n.onRb[O]&&!ct(O,!0)){let[I,C]=n.pointAt(F,Math.min(6,F.len*.3));x(I+L*st,C+ft*st,G,Q,[M("oneway",.6)])}if(Z===xt&&n.degMain[$]>=3&&!n.onRb[$]&&!ct($,!1)){let I=Math.min(F.len*.3,n.w1[$]/2+1.5);for(let C of[1,-1])x(rt-G*I+L*st*C,ut-Q*I+ft*st*C,-G,-Q,[M("noentry",.6)])}}if(Z===0&&F.dest&&F.len>30){let ct=F.dest.split("|"),I=ct[ct.length-1].split(";").map(lt=>lt.trim()).filter(Boolean).slice(0,4);ct.length>1&&(I[0]=ct[0].split(";")[0]+"  "+I[0]);let C=F.cls===0?"green":F.cls<=3||F.limit>50?"blue":"white",q=S(I,C);if(q){let[lt,ht]=n.pointAt(F,Math.min(18,F.len*.4)),it=lt+L*(st+1.8),mt=ht+ft*(st+1.8),yt=i.height(it,mt),wt=Math.atan2(-G,-Q);for(let Vt of[1,-1])Be(o,it+L*1.3*Vt,yt+1.6+q.h/2,mt+ft*1.3*Vt,.1,3.2+q.h,.1,wt,g);zn(l,it-G*.08,yt+3.2+q.h/2,mt-Q*.08,q.w,q.h,wt,q.uv),zn(a,it+G*.08,yt+3.2+q.h/2,mt+Q*.08,q.w,q.h,wt+Math.PI,Rr("back"))}}if(F.ref&&F.cls<=Gt.TERTIARY&&!(F.flags&(zt.LINK|zt.ROUNDABOUT))&&F.len>160){let ct=F.ref.split(";")[0].trim();if(Z===0&&n.degMain[O]>=3&&!N.has(ct+O)){N.add(ct+O);let[I,C]=n.pointAt(F,38);x(I+L*st,C+ft*st,G,Q,[T(ct)],1.9)}if(Z===xt&&!F.oneway&&n.degMain[$]>=3&&!N.has(ct+$)){N.add(ct+$);let[I,C]=n.pointAt(F,F.len-38);x(I-L*st,C-ft*st,-G,-Q,[T(ct)],1.9)}}if(F.cls<=Gt.RESIDENTIAL&&F.cls>=Gt.TRUNK&&!(F.flags&(zt.LINK|zt.BRIDGE|zt.TUNNEL|zt.ROUNDABOUT))){let ct=this.comuneOfNode(O),I=this.comuneOfNode($);if(ct&&I&&ct!==I){let C=0,q=1;for(let it=0;it<10;it++){let mt=(C+q)/2;this.comuneAt(J+(rt-J)*mt,X+(ut-X)*mt)===ct?C=mt:q=mt}let lt=J+(rt-J)*C,ht=X+(ut-X)*C;this.townSign(o,l,a,lt+L*(st+.4),ht+ft*(st+.4),G,Q,b(I,!1),b(I,!0)),F.oneway||this.townSign(o,l,a,lt-L*(st+.4),ht-ft*(st+.4),-G,-Q,b(ct,!1),b(ct,!0))}}if(F.cls>=Gt.PRIMARY&&F.cls<=Gt.LIVING&&!F.abs&&!(F.flags&zt.ROUNDABOUT)&&F.lit!==2){let ct=F.cum[Z];for(let I=Math.ceil(ct/30)*30-ct;I<ot;I+=30){let C=J+G*I,q=X+Q*I;if(F.lit!==1&&!i.isUrban(C,q))continue;let lt=Math.floor((ct+I)/30+.5)%2===0||F.oneway?1:-1,ht=C+L*lt*(at+1.1),it=q+ft*lt*(at+1.1),mt=n.nearest(ht,it,6);mt&&mt.d<n.ways[mt.wi].width/2+.4||m.push([ht,i.height(ht,it),it,Math.atan2(ft*lt,-L*lt)])}}}for(let V of n.roundaboutEntries(t)){let tt=n.ways[V.wi],Z=n.nx[V.nd]-n.nx[V.from],F=n.nz[V.nd]-n.nz[V.from],O=Math.hypot(Z,F)||1;Z/=O,F/=O;let $=n.w1[V.nd]/2+2.5,J=!1,X=0,rt=V.dir>0?tt.nodes.length-1:0;for(;X<30&&rt-V.dir>=0&&rt-V.dir<tt.nodes.length;){let G=tt.nodes[rt],Q=tt.nodes[rt-V.dir];if(X+=Math.hypot(n.nx[Q]-n.nx[G],n.nz[Q]-n.nz[G]),rt-=V.dir,n.ntag[Q]===Kt.GIVE_WAY||n.ntag[Q]===Kt.STOP){J=!0;break}}let ut=n.nx[V.nd]-Z*$-F*(tt.width/2+.9),ot=n.nz[V.nd]-F*$+Z*(tt.width/2+.9);x(ut,ot,Z,F,[J?null:M("giveway",.8),M("roundabout",.62)])}let B=new Set;for(let V of r){let tt=Math.floor(V/16384),Z=V%16384,F=n.ways[tt];if(F.flags&zt.ROUNDABOUT||!F.drivable||F.cls>Gt.TERTIARY)continue;let O=F.nodes.length-2;for(let[$,J]of[[0,1],[F.nodes.length-1,-1]]){if((J>0?Z!==0:Z!==O)||J<0&&F.oneway)continue;let X=F.nodes[$];if(!n.onRb[X]||B.has(tt*2+(J>0?0:1)))continue;B.add(tt*2+(J>0?0:1));let rt=this.traceDestination(tt,$,J,X);if(!rt)continue;let ut=F.nodes[$+J],ot=n.nx[ut]-n.nx[X],G=n.nz[ut]-n.nz[X],Q=Math.hypot(ot,G)||1;ot/=Q,G/=Q;let L=F.limit>50||F.cls<=Gt.SECONDARY,ft=E(rt.name,L?Math.max(1,Math.round(rt.dist/1e3)):0,L),at=n.w1[X]/2+3.5;x(n.nx[X]+ot*at-G*(F.width/2+1.2),n.nz[X]+G*at+ot*(F.width/2+1.2),ot,G,[ft],2.3)}}for(let[V,tt,Z,F]of e&&e.pt||[]){let O=tt/10,$=Z/10,J=e.s[F]||"",X=n.nearest(O,$,30,st=>st.drivable&&st.cls<=Gt.SERVICE),rt=0,ut=1;if(X){let st=Math.hypot(X.dx,X.dz)||1;rt=X.dx/st,ut=X.dz/st}let ot=X&&Math.sign((O-X.px)*-ut+($-X.pz)*rt)||1,G=X?n.ways[X.wi].width/2:0,Q=X?Math.max(X.d,G+1):0,L=X?X.px-ut*ot*Q:O,ft=X?X.pz+rt*ot*Q:$,at=rt*ot,xt=ut*ot;if(V===1){x(L,ft,at,xt,[M("bus",.5),J?_(J):null],2);let st=i.height(L,ft),St=Math.atan2(-at,-xt),ct=-ut*ot,I=rt*ot,C=L+at*2.2+ct*.9,q=ft+xt*2.2+I*.9;Be(o,C,st+2.45,q,1.5,.08,3,St,[.25,.3,.34]),Be(o,C+ct*.7,st+1.25,q+I*.7,.05,2.4,3,St,[.55,.68,.74]);for(let lt of[-1.45,1.45])Be(o,C+at*lt-ct*.6,st+1.2,q+xt*lt-I*.6,.07,2.4,.07,St,g)}else if(V===2){let st=X?Math.atan2(rt*ot,ut*ot):0;m.push([O,i.height(O,$),$,st,1])}else if(V===3&&X){let st=[...this.places.values()].flat().find(q=>q.n===J),St=at,ct=xt;if(st){let q=Math.sign((st.x-L)*rt+(st.z-ft)*ut)||1;St=rt*q,ct=ut*q}let I=X.px-ct*(G+1.3),C=X.pz+St*(G+1.3);this.townSign(o,l,a,I,C,St,ct,b(J,!1),b(J,!0))}else if(V===4&&X){x(L,ft,at,xt,[M("camera",.9)],2),p.push([X.px+rt*ot*14,X.pz+ut*ot*14]);let st=i.height(L,ft),St=Math.atan2(-at,-xt);Be(o,L+at*14,st+1.4,ft+xt*14,.5,2.8,.5,St,[.95,.5,.1]),Be(o,L+at*14-at*.26,st+2.3,ft+xt*14-xt*.26,.3,.3,.04,St,[.05,.05,.05])}else if(V===5){let st=w(J);if(st){let St=i.height(L,ft),ct=Math.atan2(-at,-xt);Be(o,L,St+2.6,ft,1.6,5.2,.3,ct,[.9,.9,.9]),zn(l,L-at*.16,St+4.3,ft-xt*.16,st.w,st.h,ct,st.uv),zn(l,L+at*.16,St+4.3,ft+xt*.16,st.w,st.h,ct+Math.PI,st.uv)}}}let Y=new $t,K=[];if(o.empty||Y.add(o.mesh(this.poleMat,!0)),a.empty||Y.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let V=d.material();K.push(V),Y.add(l.mesh(V))}c.empty||Y.add(c.mesh(this.markMat)),u.empty||Y.add(u.mesh(this.decalMat));for(let V=0;V<2;V++)for(let tt of["R","Y","G"])h[V][tt].empty||Y.add(h[V][tt].mesh(this.lights[V][tt]));if(f.empty||Y.add(f.mesh(this.greenMat)),m.length){let V=m.filter(ot=>ot[4]),tt=m.filter(ot=>ot[4]||!V.some(G=>Math.hypot(G[0]-ot[0],G[2]-ot[2])<22)),Z=new Ee(this.lampPoleGeo,this.lampPoleMat,tt.length),F=new Ee(this.lampHeadGeo,this.lampMat,tt.length),O=new Ee(this.poolGeo,this.poolMat,tt.length),$=new Jt,J=new Re,X=new H(0,1,0),rt=new H(1,1,1),ut=new H;tt.forEach(([ot,G,Q,L],ft)=>{J.setFromAxisAngle(X,L),ut.set(ot,G,Q),$.compose(ut,J,rt),Z.setMatrixAt(ft,$),F.setMatrixAt(ft,$),O.setMatrixAt(ft,$)}),Z.computeBoundingSphere(),F.computeBoundingSphere(),O.computeBoundingSphere(),O.renderOrder=2,Y.add(Z,F,O)}return Y.userData.dispose=()=>{for(let V of K)V.map.dispose(),V.dispose()},{group:Y,signals:y,lamps:m,cameras:p}}townSign(t,e,n,i,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(i,r),f=Math.atan2(-o,-a),d=-a,m=o,y=[.42,.43,.44];Be(t,i-d*.75,h+1.35,r-m*.75,.08,2.7,.08,f,y),Be(t,i+d*.75,h+1.35,r+m*.75,.08,2.7,.08,f,y),zn(e,i-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?zn(e,i+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):zn(n,i+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,Rr("back"))}};var ba=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,i,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(i/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,i=>{let r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e,n,i=!1){let r=1e9,o=1e9,a=-1e9,l=-1e9;for(let u=0;u<e.length;u+=2)r=Math.min(r,e[u]),a=Math.max(a,e[u]),o=Math.min(o,e[u+1]),l=Math.max(l,e[u+1]);if(!i&&a-r<1.5&&l-o<1.5)return null;let c={ring:e,tile:t,minx:r,minz:o,maxx:a,maxz:l,top:n};return this._add(t,c),c}addCircle(t,e,n,i,r){let o={x:e,z:n,r:i,tile:t,top:r,minx:e-i,minz:n-i,maxx:e+i,maxz:n+i};return this._add(t,o),o}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let i=this.grid.get(n);if(!i)return;let r=i.indexOf(t);r>=0&&i.splice(r,1),i.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let i of e)this._cells(i.minx,i.minz,i.maxx,i.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}topAt(t,e,n){let i=-1/0;return this._cells(t-n,e-n,t+n,e+n,r=>{let o=this.grid.get(r);if(o)for(let a of o){if(a.top===void 0||a.top<=i||t+n<a.minx||t-n>a.maxx||e+n<a.minz||e-n>a.maxz)continue;(a.ring?od(t,e,n,a.ring):Math.hypot(t-a.x,e-a.z)<n+a.r)&&(i=a.top)}}),i}resolveCircle(t,e,n){let i=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=od(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!i||c.depth>i.depth)&&(i=c)}}),i}};function od(s,t,e,n){let i=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=i-1;f<i;d=f++){let m=n[f*2],y=n[f*2+1],p=n[d*2],g=n[d*2+1];y>t!=g>t&&s<(p-m)*(t-y)/(g-y)+m&&(r=!r);let M=m-p,x=y-g,v=M*M+x*x||1e-9,b=((s-p)*M+(t-g)*x)/v;b=b<0?0:b>1?1:b;let E=p+M*b,S=g+x*b,T=Math.hypot(s-E,t-S);T<o&&(o=T,a=E,l=S)}if(!r&&o>=e)return null;let c=s-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var Sn={darkMetal:new Ft({color:3620675}),greyMetal:new Ft({color:4344399}),midMetal:new Ft({color:5002330}),wood:new Ft({color:8016432}),woodDark:new Ft({color:6044964}),stone:new Ft({color:9407104}),soil:new Ft({color:4142122}),hedge:new Ft({color:4025145}),binBody:new Ft({color:3951169}),binLid:new Ft({color:3227449}),red:new Ft({color:11545120}),white:new Ft({color:15790318}),signBlue:new Ft({color:2183567}),roof:new Ft({color:3159099}),glass:new ce({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:re,depthWrite:!1})};function Tn(s){let t=s.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),i=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&i.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new te;return o.setAttribute("position",new he(n,3)),o.setAttribute("normal",new he(i,3)),o.computeVertexNormals(),o}function ad(s,t,e,{shadow:n=!0}={}){let i=new Ee(s,t,e);i.castShadow=n,i.count=e;let r=new Jt,o=new Re,a=new $e,l=new H,c=new H(1,1,1);return{mesh:i,setAt:(h,f,d,m=0,y=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c),i.setMatrixAt(h,r),i.instanceMatrix.needsUpdate=!0},count:e}}function wa(s,t,{shadow:e=!0}={}){let n=new $t,i=s.map(({geom:h,material:f})=>{let d=new Ee(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new Jt,o=new Re,a=new $e,l=new H,c=new H(1,1,1);return{mesh:n,setAt:(h,f,d,m=0,y=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c);for(let p of i)p.setMatrixAt(h,r),p.instanceMatrix.needsUpdate=!0},count:t}}function ld(s){let t=new Qt(.075,.1,.82,8);t.translate(0,.41,0);let e=new dn(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new Qt(.11,.11,.06,8);n.translate(0,.1,0);let i=Tn([t,e,n]);return ad(i,Sn.darkMetal,s)}function cd(s){let t=new Qt(.05,.05,.55,6);t.translate(0,.28,0);let e=new Qt(.11,.14,.08,8);e.translate(0,.04,0);let n=new Qt(.19,.17,.5,9);n.translate(0,.82,0);let i=new Un(.19,.02,5,9).rotateX(Math.PI/2);i.translate(0,1.07,0);let r=Tn([t,e,n,i]),o=new Qt(.215,.2,.06,9);o.translate(0,1.12,0);let a=new dn(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=Tn([o,a]);return wa([{geom:r,material:Sn.binBody},{geom:l,material:Sn.binLid}],s)}function hd(s){let i=[];for(let c=0;c<3;c++){let u=new Nt(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),i.push(u)}for(let c=0;c<3;c++){let u=new Nt(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),i.push(u)}let r=Tn(i),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new Nt(.05,.45,.05);h.translate(u,.45/2,.12);let f=new Nt(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new Nt(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new Nt(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=Tn(o);return wa([{geom:r,material:Sn.wood},{geom:l,material:Sn.darkMetal}],s)}function ud(s){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new Nt(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new Nt(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new Nt(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return ad(Tn(t),Sn.darkMetal,s)}function fd(s){let t=new Qt(.09,.13,.95,8);t.translate(0,.475,0);let e=new Qt(.16,.2,.08,8);e.translate(0,.04,0);let n=new Qt(.17,.13,.1,10);n.translate(0,.9,0);let i=new Qt(.13,.11,.07,10);i.translate(0,.94,0);let r=Tn([t,e,n]),o=new Qt(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new dn(.03,6,5);return a.translate(0,1.02,-.09),wa([{geom:r,material:Sn.greyMetal},{geom:Tn([i]),material:Sn.midMetal},{geom:Tn([o,a]),material:Sn.darkMetal}],s)}function dd(s){let t=new Qt(.23,.25,.07,6);t.translate(0,.035,0);let e=new Qt(.135,.165,.6,9);e.translate(0,.37,0);let n=new Qt(.115,.175,.1,9);n.translate(0,.72,0);let i=new dn(.125,9,5,0,Math.PI*2,0,Math.PI/2);i.translate(0,.77,0);let r=new Qt(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=Tn([t,e,n,i,r]),a=[];for(let u of[-1,1]){let h=new Qt(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new Qt(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new Qt(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),wa([{geom:o,material:Sn.red},{geom:Tn(a),material:Sn.darkMetal}],s)}function md(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new te,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=pd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let m=pd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function pd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new he(o,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let y=u.getComponent(f,m);a.setComponent(f+h,m,y)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var tv={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},Ea=class{constructor(t,e,n,i,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=i,this.settings=r,this.collision=new ba,this.gates=new ga(i,n,this.collision),this.tiles=new Map,this.queue=[],this.detail=Jf(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new va(n),this.vegetation=new Ma(n,i),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new _a(i,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new $t,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let i=!1;for(let r of n.rings)$f(t,e,r)&&(i=!i);if(i)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new $t;for(let i=t.zmin;i<t.zmax;i+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,i,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new bn({color:4157327,specular:10070715,shininess:80,transparent:!0,opacity:.92,side:re});this.waterMat=t;let e=new $t;for(let n of this.meta.waters)for(let i of n.o){if(i.length<4)continue;let r=i.map(m=>new Mt(m[0],m[1])),o=(n.i||[]).filter(m=>m.length>=4).map(m=>m.map(y=>new Mt(y[0],y[1]))),a;try{a=Nn.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(m=>this.terrain.height(m.x,m.y)).sort((m,y)=>m-y),u=c[Math.floor(c.length*.3)]+.35,h=new Float32Array(l.length*3);l.forEach((m,y)=>{h[y*3]=m.x,h[y*3+1]=u,h[y*3+2]=m.y});let f=[];for(let[m,y,p]of a)f.push(m,p,y);let d=new te;d.setAttribute("position",new he(h,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((m,y)=>f[y-y%3+[0,2,1][y%3]])),d.computeVertexNormals()),e.add(new Et(d,t))}this.root.add(e)}initFar(t){this.farIdx=new Map;let e=0;for(let[i,r,o]of t.t)this.farIdx.set(r*1e3+i,[e,o]),e+=o*7;this.farData=t.d,this.farMeshes=new Map,this.farQueue=[],this.farGroup=new $t,this.root.add(this.farGroup),this.farBMat=new Ft({vertexColors:!0});let n=(i,r=1)=>i.map(o=>new Ct(o).convertSRGBToLinear().multiplyScalar(r));this.farPal={wall:n(["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#e3c08e","#d9c7a6"]),ind:n(["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6"]),tile:n(["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52"],1.2),flat:n(["#8d8a84","#7d7b77","#9a968e","#6f6e6a"])}}updateFar(t,e,n){if(!this.farIdx||(this.farTick=(this.farTick||0)+1,this.farTick%20!==1&&n===this.farR))return;this.farR=n;let i=this.meta.proj,r=Math.floor((t-i.xmin)/1e3),o=Math.floor((e-i.zmin)/1e3),a=Math.ceil(n/1e3),l=[];for(let c=o-a;c<=o+a;c++)for(let u=r-a;u<=r+a;u++){let h=c*1e3+u;if(u<0||c<0||!this.farIdx.has(h)||this.farMeshes.has(h))continue;let f=Math.hypot(i.xmin+(u+.5)*1e3-t,i.zmin+(c+.5)*1e3-e);f<=n&&l.push([f,h])}l.sort((c,u)=>c[0]-u[0]),this.farQueue=l.map(c=>c[1]);for(let[c,u]of this.farMeshes){let h=c%1e3,f=Math.floor(c/1e3);Math.hypot(i.xmin+(h+.5)*1e3-t,i.zmin+(f+.5)*1e3-e)>n+1500&&(this.farGroup.remove(u),u.geometry.dispose(),this.farMeshes.delete(c))}}pumpFar(t=3){if(!this.farIdx)return;let e=performance.now();for(;this.farQueue.length&&performance.now()-e<t;){let n=this.farQueue.shift();if(this.farMeshes.has(n))continue;let i=this.buildFarTile(n);this.farMeshes.set(n,i),this.farGroup.add(i)}for(let[n,i]of this.farMeshes){let r=this.tiles.get(n);i.visible=!(r&&"buildings"in r.parts)}}buildFarTile(t){let[e,n]=this.farIdx.get(t),i=this.farData,r=this.terrain,o=this.meta.proj,a=this.farPal,l=o.xmin+t%1e3*1e3,c=o.zmin+Math.floor(t/1e3)*1e3,u=new Float32Array(n*60),h=new Float32Array(n*60),f=new Float32Array(n*60),d=new Uint32Array(n*30),m=0,y=0,p=(x,v,b,E,S,T,_,w)=>(u[m*3]=x,u[m*3+1]=v,u[m*3+2]=b,h[m*3]=E.r*S,h[m*3+1]=E.g*S,h[m*3+2]=E.b*S,f[m*3]=T,f[m*3+1]=_,f[m*3+2]=w,m++);for(let x=0;x<n;x++){let v=e+x*7,b=l+i[v]/10,E=c+i[v+1]/10,S=i[v+2]/10,T=i[v+3]/10,_=i[v+4]*Math.PI/180,w=i[v+5]/10,R=i[v+6],D=Math.sin(_),z=Math.cos(_),P=-z,k=D,N=r.height(b,E),W=N-2.5,B=N+w+(R&1?1:.2),Y=(i[v]*73+i[v+1]*151+x*7)%97/97,K=(i[v]*31+i[v+1]*17+x*13)%89/89,V=R&2?a.ind[Math.floor(Y*a.ind.length)]:a.wall[Math.floor(Y*a.wall.length)],tt=R&1?a.tile[Math.floor(K*a.tile.length)]:a.flat[Math.floor(K*a.flat.length)],Z=[[b+D*S+P*T,E+z*S+k*T],[b-D*S+P*T,E-z*S+k*T],[b-D*S-P*T,E-z*S-k*T],[b+D*S-P*T,E+z*S-k*T]],F=[[P,k],[-D,-z],[-P,-k],[D,z]];for(let ut=0;ut<4;ut++){let ot=Z[ut],G=Z[(ut+1)%4],[Q,L]=F[ut],ft=p(ot[0],W,ot[1],V,1,Q,0,L),at=p(G[0],W,G[1],V,1,Q,0,L),xt=p(G[0],B,G[1],V,1,Q,0,L),st=p(ot[0],B,ot[1],V,1,Q,0,L);-(G[1]-ot[1])*Q+(G[0]-ot[0])*L>0?(d[y++]=ft,d[y++]=at,d[y++]=xt,d[y++]=ft,d[y++]=xt,d[y++]=st):(d[y++]=ft,d[y++]=xt,d[y++]=at,d[y++]=ft,d[y++]=st,d[y++]=xt)}let O=p(Z[0][0],B,Z[0][1],tt,1,0,1,0),$=p(Z[1][0],B,Z[1][1],tt,1,0,1,0),J=p(Z[2][0],B,Z[2][1],tt,1,0,1,0),X=p(Z[3][0],B,Z[3][1],tt,1,0,1,0);(Z[1][1]-Z[0][1])*(Z[2][0]-Z[0][0])-(Z[1][0]-Z[0][0])*(Z[2][1]-Z[0][1])>0?(d[y++]=O,d[y++]=$,d[y++]=J,d[y++]=O,d[y++]=J,d[y++]=X):(d[y++]=O,d[y++]=J,d[y++]=$,d[y++]=O,d[y++]=X,d[y++]=J)}let g=new te;g.setAttribute("position",new he(u,3)),g.setAttribute("color",new he(h,3)),g.setAttribute("normal",new he(f,3)),g.setIndex(new he(d,1)),g.computeBoundingSphere();let M=new Et(g,this.farBMat);return M.matrixAutoUpdate=!1,M}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,i=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=i-o;c<=i+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let u=n.xmin+(c+.5)*1e3,h=n.zmin+(l+.5)*1e3,f=Math.hypot(u-t,h-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let m={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(m.key,m)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isSprite&&i.material.map&&(i.material.map.dispose(),i.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((i,r)=>i.d-r.d);for(let i of n){if(performance.now()-e>t)return!1;if(i.state==="new"){i.state="loading",this.tileSet.has(i.key)?mi("t_"+i.i+"_"+i.j,`data/tiles/t_${i.i}_${i.j}.js`).then(c=>{i.data=c,i.state="ready"}).catch(()=>{i.data=null,i.state="ready"}):(i.data=null,i.state="ready");continue}if(i.state!=="ready"||i.dead)continue;let r=this.meta.proj,o=r.xmin+i.i*1e3,a=r.zmin+i.j*1e3,l=(c,u)=>{i.parts[c]=u,u&&this.root.add(u)};if(!("terrain"in i.parts)){l("terrain",this.terrain.buildChunk(o,a,1e3,Math.max(5,this.terrain.step),this.terrainMat));continue}if(!("roads"in i.parts)){l("roads",this.roads.buildTile(i.key));continue}if(!("signs"in i.parts)){let c=this.signage.build(i.key,i.data);for(let u of c.signals)this.signals.push({...u,tile:i.key});for(let u of c.cameras||[])this.cameras.push({x:u[0],z:u[1],tile:i.key});l("signs",c.group);continue}if(!("buildings"in i.parts)){if(i.data){let c=this.buildings.build(i.data,this.collision,i.key);l("buildings",c.group)}else l("buildings",null);for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===i.key&&this.collision.addCircle(i.key,c.x,c.z,c.r);continue}if(!("paths"in i.parts)){let c=new $t,u=this.roads.buildPaths(i.data),h=this.roads.buildBarriers(i.data,this.collision,i.key),f=this.buildPower(i),d=this.roads.buildStalls(i.data);for(let m of[u,h,f,d])m&&c.add(m);l("paths",c.children.length?c:null);continue}if(!("gates"in i.parts)){l("gates",this.gates.build(i.key,i.data));continue}if(!("props"in i.parts)){l("props",this.buildProps(i)),this.traffic&&this.traffic.computeParkSpots(i.key,i.data);continue}if(!("labels"in i.parts)){l("labels",this.buildLabels(i));continue}if(i.vegWanted&&!("veg"in i.parts)){l("veg",this.vegetation.build(i.data,i.i,i.j,this.collision,i.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=9,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,i=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=M=>M[0]>=i&&M[0]<i+1e3&&M[1]>=r&&M[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let M of e)for(let x=0;x<M.length;x++){if(!o(M[x]))continue;let v=M[x],b=M[x-1]||M[x+1],E=M[x+1]||M[x-1],S=E[0]-b[0],T=E[1]-b[1],_=Math.hypot(S,T)||1;if(S/=_,T/=_,c.push([v[0],u.height(v[0],v[1]),v[1],Math.atan2(S,T)]),x<M.length-1){let w=M[x+1],R=u.height(v[0],v[1])+a,D=u.height(w[0],w[1])+a,z=Math.hypot(w[0]-v[0],w[1]-v[1]),P=-(w[1]-v[1])/(z||1),k=(w[0]-v[0])/(z||1);for(let[N,W]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let B=0;B<8;B++)for(let Y of[B/8,(B+1)/8]){let K=Math.min(9,z*.03)*4*Y*(1-Y);l.push(v[0]+(w[0]-v[0])*Y+P*N,R+(D-R)*Y+W-K,v[1]+(w[1]-v[1])*Y+k*N)}}}if(!c.length)return null;let h=new $t;if(l.length){let M=new te;M.setAttribute("position",new qt(l,3)),this.wireMat=this.wireMat||new pr({color:2763822}),h.add(new Xo(M,this.wireMat))}if(!this.towerGeo){let M=[],x=new Qt(.12,.2,a,4);for(let[v,b]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let E=x.clone();E.rotateZ(-v*.08),E.rotateX(b*.08),E.translate(v*1.6,a/2,b*1.6),M.push(E)}for(let[v,b]of[[a-4,11],[a,8]]){let E=new Nt(b,.25,.25);E.translate(0,v,0),M.push(E)}for(let v=5;v<a;v+=6){let b=new Nt(3.4-v*.06,.12,3.4-v*.06);b.translate(0,v,0),M.push(b)}this.towerGeo=md(M.map(v=>v.toNonIndexed())),this.towerMat=new Ft({color:9080982})}let f=new Ee(this.towerGeo,this.towerMat,c.length),d=new Jt,m=new Re,y=new H(0,1,0),p=new H(1,1,1),g=new H;return c.forEach(([M,x,v,b],E)=>{m.setFromAxisAngle(y,b),g.set(M,x-.5,v),d.compose(g,m,p),f.setMatrixAt(E,d),this.collision.addCircle(t.key,M,v,2.2,x+29)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:hd,11:cd,12:ld,13:dd,14:ud,15:fd},i={};for(let o of e)n[o[0]]&&(i[o[0]]=i[o[0]]||[]).push(o);let r=new $t;for(let o of Object.keys(i)){let a=i[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,m=this.roads.nearest(h,f,25,g=>g.drivable);m&&(+o==10||+o==14)&&(d=Math.atan2(m.px-h,m.pz-f));let y=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(y)||(d=Math.PI-y*Math.PI/180);let p=m&&m.d<this.roads.ways[m.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[m.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(p?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,i=e.zmin+t.j*1e3,r=new $t;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<i||c>=i+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=tv[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let m=new Ie(h);m.colorSpace=ye;let y=new Go(new fr({map:m,depthTest:!0,fog:!1,transparent:!0})),p=this.terrain.height(l,c)+(a===1?32:a===12?6:18);y.position.set(l,p,c),y.scale.set(d/48*3.2,3.2,1),y.userData.lm=!0,r.add(y)}return r}updateLabels(t){for(let e of this.tiles.values()){let n=e.parts.labels;if(n)for(let i of n.children){let r=i.position.distanceTo(t.position);if(i.visible=this.labelsOn&&r<650&&r>15,i.visible){let o=Math.max(1,r/120);i.scale.set(i.scale.x/i.scale.y*3.2*o,3.2*o,1)}}}}};var Sa=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new dn(4500,32,16);this.uniforms={top:{value:new Ct},horizon:{value:new Ct},sunDir:{value:new H},sunCol:{value:new Ct},cloudCol:{value:new Ct},time:{value:0},cover:{value:.5}};let i=new Ce({uniforms:this.uniforms,side:Ve,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
        }`});this.dome=new Et(n,i),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new te;o.setAttribute("position",new qt(r,3)),this.starMat=new mr({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new qo(o,this.starMat),this.stars.frustumCulled=!1,t.add(this.stars),this.sun=new sa(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new ea(12375295,5922880,.9),t.add(this.hemi),t.fog=new Oo(13622246,400,2600),this.sunDir=new H,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),i=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(i),o=Math.asin(r),a=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=zf.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new Ct(659490).lerp(new Ct(4030417),l),h=new Ct(1317418).lerp(new Ct(13229034),l).lerp(new Ct(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.25+.85*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.25*l+.05,.27*l+.05,.2*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new H(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var xi={x:0,y:1,z:0},ev=()=>0;function gd(s,t){return ev(s,t)}function xd(){return xi}var Ch={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},yd=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function ki(s){return yd[s%yd.length]}function vd(s,t,e){let n=s.length,i=[],r=[];for(let l=0;l<n;l++){let[c,u]=s[l],h=t[l],f=e[l];i.push(-h,u,c,h,u,c),i.push(-h,u,c,-h,f,c),i.push(h,u,c,h,f,c),i.push(-h,f,c,h,f,c),i.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:i,idx:r}}function Pr({pos:s,idx:t}){let e=new te;return e.setAttribute("position",new qt(s,3)),e.setIndex(t),e.computeVertexNormals(),e}var Md=1.12,Lr=s=>s.wheelR*2+.02,Ir=.34;function nv(s){return s>=1?0:s<=Ir?1:.5*(1+Math.cos(Math.PI*(s-Ir)/(1-Ir)))}function _d(s,t){let e=Lr(s),n=s.wheelR*Md;return t.map(([i])=>{let r=0;for(let o of s.wheelZ)r=Math.max(r,nv(Math.abs(i-o)/n));return s.sill+(e-s.sill)*r})}function bd(s){let t=s.profile.map(r=>[r[0],r[1]]),e=s.widths.slice(),n=s.wheelR*Md,i=[];for(let r of s.wheelZ)for(let o of[-1,-Ir,Ir,1])i.push(r+o*n);i.sort((r,o)=>o-r);for(let r of i){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function wd(s){let t=Dr(s),e=s.tumble||0,n=[];for(let i of s.pillars||[]){let[r,o]=s.cab[i],a=s.cabw[i],l=o-t[i]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(en(.04,l,s.bus?.16:.09,(a+e*.5+.004)*c,t[i]+l/2,r))}return n}function Ed(s){let t=Ih(s),e=Dr(s),n=[],i=e[0]+(s.bus?.22:.02),r=s.cab[0][0]-(s.bus?.3:.22);for(let o of[1,-1])n.push(en(.16,.12,.07,(t.halfW+.08)*o,i,r));return n}function iv(s){let{profile:t,widths:e}=bd(s);return Pr(vd(t,e,_d(s,t)))}var Dr=s=>s.cabBase||s.cab.map(()=>s.beltY);function Sd(s,t=!1){let e=s.cab,n=s.cabw,i=Dr(s),r=s.tumble||0,[o,a]=s.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let m=0;m<e.length;m++){let[y,p]=e[m],g=n[m],M=g+r,x=i[m];u.push(-g,p,y,g,p,y),u.push(-M,x,y,-g,p,y),u.push(M,x,y,g,p,y),u.push(-M,x,y,M,x,y,-g,p,y,g,p,y)}let f=(m,y)=>m*10+y;for(let m=0;m<e.length-1;m++)t&&l&&m>=o&&m<c-1||h.push(f(m,0),f(m,1),f(m+1,0),f(m,1),f(m+1,1),f(m+1,0)),h.push(f(m,3),f(m+1,3),f(m,2),f(m+1,3),f(m+1,2),f(m,2)),h.push(f(m,5),f(m,4),f(m+1,5),f(m+1,5),f(m,4),f(m+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),Pr({pos:u,idx:h})}function Td(s){let[t,e]=s.roofSlice;if(t===0&&e===0)return null;let n=s.cab.slice(t,s.cab.length+e),i=s.cabw.slice(t,s.cabw.length+e);if(n.length<2)return null;let r=s.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=i[c]*(1-.04*f)+.03,m=h+.006;o.push(-d,m,u,0,m+r,u,d,m,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var Ta=new Ct;function Ad(){return{pos:[],idx:[],col:[]}}function Je(s,t,e){let n=t.attributes.position,i=s.pos.length/3;Ta.set(e);for(let o=0;o<n.count;o++)s.pos.push(n.getX(o),n.getY(o),n.getZ(o)),s.col.push(Ta.r,Ta.g,Ta.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)s.idx.push(i+r.getX(o));else for(let o=0;o<n.count;o++)s.idx.push(i+o);t.dispose()}function Rd(s){let t=new te;return t.setAttribute("position",new qt(s.pos,3)),t.setAttribute("color",new qt(s.col,3)),t.setIndex(s.idx),t.computeVertexNormals(),t}var en=(s,t,e,n,i,r)=>new Nt(s,t,e).translate(n,i,r),Ke={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},Hi={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function Ih(s){let t=s.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),i=Math.max(...s.widths),r=s.widths[0],o=s.widths[s.widths.length-1],a=s.profile[0][1],l=s.profile[s.profile.length-1][1],c=a-s.sill,u=l-s.sill;return{noseZ:e,tailZ:n,halfW:i,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:s.sill+c*(s.bus?.42:.74),headH:c*.26,grilleY:s.sill+c*(s.bus?.14:.44),grilleH:c*.24,lampY:s.sill+u*(s.bus?.36:.66),lampH:u*.3,bumperY:s.sill+c*.12,bumperH:c*.3}}function sv(s){let{profile:t,widths:e}=bd(s),n=vd(t,e,_d(s,t)),i=Td(s);if(i){let r=n.pos.length/3;n.pos.push(...i.pos);for(let o of i.idx)n.idx.push(r+o)}for(let r of[...wd(s),...Ed(s)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return Pr(n)}function rv(s){let t=Ad(),e=Ih(s),n=Sd(s,!0);Je(t,n,Ke.glass);let i=s.wheelX-s.wheelW/2-.02,r=s.sill*.7;if(Je(t,en(i*2,Lr(s)-r,(e.noseZ-e.tailZ)*.84,0,(Lr(s)+r)/2,(e.noseZ+e.tailZ)/2),Ke.under),Je(t,en(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),Ke.bumper),Je(t,en(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),Ke.bumper),s.bus){for(let o of[4.3,.6,-1.4])Je(t,en(.04,1.14,1.05,-(e.halfW+.005),s.sill+.6,o),Ke.black);Je(t,en(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),Ke.black);for(let o of[1,-1])Je(t,en(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),Ke.lamp),Je(t,en(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),Ke.tail)}else{Je(t,en(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),Ke.black);let o=e.noseW*.56;for(let a of[1,-1])Je(t,en(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),Ke.lamp),Je(t,en(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),Ke.amber),Je(t,en(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),Ke.tail);Je(t,en(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),Ke.black)}return Rd(t)}function ov(s){let t=Ad(),e=s.wheelR,n=s.wheelW;Je(t,new Qt(e,e,n,14).rotateZ(Math.PI/2),Ke.tyre);for(let i of[1,-1])Je(t,new Di(e*.6,12).rotateY(i*Math.PI/2).translate(i*(n/2+.004),0,0),Ke.rim);return Rd(t)}var Aa=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function Ph(s){let t=new di({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:re}),e=new ce({vertexColors:!0,roughness:.35,metalness:.2,side:re}),n=new ce({vertexColors:!0,roughness:.75,metalness:.15}),i=new $t,r=Object.keys(Hi),o={};for(let T of r)o[T]=[];for(let T=0;T<s;T++)o[ki(T)].push(T);let a={},l=new Array(s);for(let T of r){let _=o[T].length;if(_===0)continue;let w=Hi[T],R=new Ee(sv(w),t,_),D=new Ee(rv(w),e,_),z=new Ee(ov(w),n,_*4);R.castShadow=!0,R.frustumCulled=!1,D.frustumCulled=!1,z.frustumCulled=!1,i.add(R,D,z),a[T]={body:R,trim:D,wheels:z,spec:w},o[T].forEach((P,k)=>{l[P]={type:T,local:k}})}let c=new Float32Array(s).fill(NaN),u=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),d=new Float32Array(s),m=new Jt,y=new Jt,p=new Jt,g=new Jt,M=new Ct,x=new H(0,1,0),v=new H,b=new Re,E=new Jt;return{group:i,setAt:(T,_,w,R,D=0,z=gd(_,w))=>{let P=l[T];if(!P)return;let{body:k,trim:N,wheels:W,spec:B}=a[P.type],Y=xd(_,w,z);v.set(Y.x,Y.y,Y.z),b.setFromUnitVectors(x,v),E.makeRotationFromQuaternion(b),m.makeRotationY(R).premultiply(E).setPosition(_,z,w),k.setMatrixAt(P.local,m),N.setMatrixAt(P.local,m),M.set(Aa[D%Aa.length]),k.setColorAt(P.local,M);let K=Math.sin(R),V=Math.cos(R),tt=0;if(c[T]===c[T]){let J=_-c[T],X=w-u[T];J*J+X*X<36&&(tt=J*K+X*V);let rt=R-h[T];for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;let ut=B.wheelZ[0]-B.wheelZ[1],ot=Math.abs(tt)>.004?Math.max(-.6,Math.min(.6,rt*ut/tt)):0;d[T]+=(ot-d[T])*.3}c[T]=_,u[T]=w,h[T]=R,f[T]=(f[T]+tt/B.wheelR)%(Math.PI*2);let[Z,F]=B.wheelZ,O=B.wheelX,$=B.wheelR;for(let J=0;J<4;J++){let X=J<2,rt=J%2?-O:O;y.makeRotationX(f[T]),X&&d[T]&&(p.makeRotationY(d[T]),y.premultiply(p)),y.setPosition(rt,$,X?Z:F),g.multiplyMatrices(m,y),W.setMatrixAt(P.local*4+J,g)}k.instanceMatrix.needsUpdate=!0,N.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0)},count:s,palette:Aa.length}}var Ls={tireGeo:new Un(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new Qt(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new Un(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new Qt(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new Nt(.05,.17,.045),brakeGeo:new Qt(.15,.15,.03,20).rotateZ(Math.PI/2)},Ds={tire:new ce({color:1316121,roughness:.85,metalness:.1}),rim:new ce({color:14672874,metalness:.5,roughness:.34}),lip:new ce({color:16054010,metalness:.6,roughness:.22}),hub:new ce({color:3816772,metalness:.45,roughness:.4}),brake:new ce({color:5527647,metalness:.3,roughness:.6})};function av(){let s=new $t,t=new Et(Ls.tireGeo,Ds.tire),e=new Et(Ls.brakeGeo,Ds.brake);e.position.x=.04;let n=new Et(Ls.rimLipGeo,Ds.lip);n.position.x=.095;let i=new Et(Ls.rimBarrelGeo,Ds.rim),r=new Et(Ls.hubGeo,Ds.hub);r.position.x=.085,s.add(t,e,i,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new Et(Ls.spokeGeo,Ds.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),s.add(c)}return s}function Cd(s=12726047,{police:t=!1,body:e="car"}={}){let n=Hi[e]||Hi.car,i=new $t,r=t?15922423:s,o=Ih(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,m]=n.wheelZ,y=n.wheelX,p=n.wheelR,g=Dr(n),M=n.tumble||0,x=new di({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),v=new ce({color:1118742,roughness:.6,metalness:.3}),b=new ce({color:15396338,metalness:.55,roughness:.22});i.add(new Et(iv(n),x));let E=new ce({color:723982,roughness:1}),S=y-n.wheelW/2-.02;i.add(new Et(new Nt(S*2,Lr(n)-.1,(a-l)*.8).translate(0,(Lr(n)+.1)/2,(a+l)/2),E));let T=new ce({color:1710879,roughness:.65,metalness:.2}),_=Math.abs(d-m)-n.wheelR*2.2;if(_>.3)for(let X of[1,-1]){let rt=new Et(new Nt(.06,.13,_),T);rt.position.set((c-.05)*X,n.sill+.04,(d+m)/2),i.add(rt)}let w=new Un(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[X,rt]of[[y,d],[-y,d],[y,m],[-y,m]]){let ut=new Et(w,x);ut.position.set(X+.02*Math.sign(X),p,rt),i.add(ut)}let R=new ce({color:3948616,roughness:.85,metalness:.05});{let X=n.cab,rt=n.cabw,ut=[],ot=[];for(let L=0;L<X.length;L++){let[ft,at]=X[L],xt=rt[L]*.9,st=(rt[L]+M)*.9;ut.push(-st,g[L]-.02,ft,st,g[L]-.02,ft,-xt,at-.06,ft,xt,at-.06,ft)}let G=(L,ft)=>L*4+ft;for(let L=0;L<X.length-1;L++)ot.push(G(L,2),G(L+1,2),G(L,3),G(L,3),G(L+1,2),G(L+1,3)),ot.push(G(L,0),G(L,2),G(L+1,0),G(L+1,0),G(L,2),G(L+1,2)),ot.push(G(L,1),G(L+1,1),G(L,3),G(L+1,1),G(L+1,3),G(L,3));ot.push(G(0,0),G(0,1),G(0,2),G(0,1),G(0,3),G(0,2));let Q=X.length-1;ot.push(G(Q,0),G(Q,2),G(Q,1),G(Q,1),G(Q,2),G(Q,3)),i.add(new Et(Pr({pos:ut,idx:ot}),R))}let D=new di({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:re});i.add(new Et(Sd(n,!0),D));let z=new di({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),P=Td(n);if(P){i.add(new Et(Pr(P),z));let[X]=n.roofSlice,[rt,ut]=n.cab[X],ot=n.cabw[X],G=new Et(new Nt(ot*2,.03,.06),z);G.position.set(0,ut-.005,rt+.02),i.add(G)}let k=new ce({color:13225430,metalness:.7,roughness:.28}),N=n.cab[0][0],W=n.cab[n.cab.length-1][0],B=Math.max(...n.cabw)+M;for(let X of[1,-1]){let rt=new Et(new Nt(.025,.03,Math.abs(N-W)-.08),k);rt.position.set((B+.01)*X,f+.02,(N+W)/2),i.add(rt)}let Y=new ce({color:r,metalness:.35,roughness:.42});for(let X of wd(n))i.add(new Et(X,Y));let K=new ce({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),V=new ce({color:1513500,roughness:.55,metalness:.25});if(n.bus){let X=new Et(new Nt(u*1.3,.26,.05),new ce({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));X.position.set(0,2.54,a-.01),i.add(X);for(let ot of[1,-1]){let G=new Et(new Nt(.36,.22,.06),new ce({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));G.position.set(.74*ot,o.headY,a-.02),i.add(G);let Q=new Et(new Nt(.4,.26,.02),b);Q.position.set(.74*ot,o.headY,a-.05),i.add(Q);let L=new Et(new Nt(.32,.34,.06),K);L.position.set(.86*ot,o.lampY,l+.03),i.add(L)}let rt=new Et(new Nt(u*1.92,o.bumperH,.12),V);rt.position.set(0,o.bumperY,a-.05);let ut=new Et(new Nt(h*1.92,o.bumperH,.12),V);ut.position.set(0,o.bumperY,l+.05),i.add(rt,ut);for(let ot of[4.3,.6,-1.4]){let G=new Et(new Nt(.04,1.14,1.05),v);G.position.set(-(c+.005),n.sill+.6,ot),i.add(G)}}else{let X=u*1.1,rt=new Et(new Nt(X,o.grilleH,.07),v);rt.position.set(0,o.grilleY,a-.04),i.add(rt);let ut=new ce({color:2829876,metalness:.6,roughness:.4});for(let q=0;q<3;q++){let lt=new Et(new Nt(X-.03,.02,.02),ut);lt.position.set(0,o.grilleY-.05+q*.05,a-.015),i.add(lt)}let ot=new Et(new Nt(u*1.4,.09,.05),v);ot.position.set(0,n.sill+.05,a-.05),i.add(ot);let G=new ce({color:658189,roughness:.5,metalness:.2}),Q=new ce({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),L=new di({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),ft=new ce({color:13796895,roughness:.35,metalness:.1}),at=u*.56;for(let q of[1,-1]){let lt=new Et(new Nt(.34,o.headH,.1),G);lt.position.set(at*q,o.headY,a-.09),i.add(lt);let ht=new Et(new Nt(.28,.12,.02),Q);ht.position.set(at*q,o.headY,a-.045),i.add(ht);let it=new Et(new Nt(.35,.16,.02),b);it.position.set(at*q,o.headY,a-.03),i.add(it);let mt=new Et(new Nt(.3,.13,.015),L);mt.position.set(at*q,o.headY,a-.018),i.add(mt);let yt=new Et(new Nt(.12,.11,.06),ft);yt.position.set((at+.24)*q,o.headY,a-.05),i.add(yt)}let xt=new Et(new Di(.05,16),b);xt.position.set(0,o.grilleY,a-.003),i.add(xt);let st=o.lampY,St=l+.035;for(let q of[1,-1]){let lt=new Et(new Nt(h*.68,.2,.04),new ce({color:1180422,roughness:.5,metalness:.2}));lt.position.set(h*.58*q,st,St+.03),i.add(lt);let ht=new Et(new Nt(h*.6,.17,.07),K);ht.position.set(h*.58*q,st,St),i.add(ht)}let ct=new Et(new Nt(h*.56,.14,.04),new ce({color:1118742,roughness:.6,metalness:.3}));ct.position.set(0,st-.03,St+.03),i.add(ct);let I=new Et(new Nt(h*.44,.07,.02),b);I.position.set(0,st-.03,St+.005),i.add(I);let C=(q,lt,ht)=>{let it=new Et(new Nt(q,o.bumperH,.09),V);return it.position.set(0,o.bumperY,lt+ht*.04),it};i.add(C(u*1.92,a,-1),C(h*1.92,l,1));for(let q of[1,-1]){let lt=new Et(new Qt(.045,.045,.06,12).rotateX(Math.PI/2),b);lt.position.set(c*.42*q,n.sill-.02,l+.05),i.add(lt)}}let tt=new ce({color:r,metalness:.5,roughness:.35}),Z=new ce({color:547,metalness:.9,roughness:.1});for(let X of Ed(n))i.add(new Et(X,tt));{let X=Dr(n)[0]+(n.bus?.22:.02),rt=n.cab[0][0]-(n.bus?.3:.22);for(let ut of[1,-1]){let ot=new Et(new Nt(.02,.09,.05),Z);ot.position.set((c+.16)*ut,X,rt),i.add(ot)}}let F=[["wheelFL",y,d],["wheelFR",-y,d],["wheelRL",y,m],["wheelRR",-y,m]],O=p/.3;for(let[X,rt,ut]of F){let ot=new $t;ot.name=X,ot.position.set(rt,p,ut);let G=av();G.scale.setScalar(O),ot.add(G),i.add(ot)}if(t){let X=Math.max(...n.cab.map(G=>G[1])),rt=new Et(new Nt(.66,.05,.3),v);rt.position.set(0,X+.05,.05),i.add(rt);let ut=new Et(new Nt(.3,.1,.3),new ce({color:2245836,emissive:2250239,emissiveIntensity:1.6}));ut.position.set(-.17,X+.11,.05);let ot=new Et(new Nt(.3,.1,.3),new ce({color:13378082,emissive:16720418,emissiveIntensity:1.6}));ot.position.set(.17,X+.11,.05),i.add(ut,ot),i.userData.lightbar={blue:ut.material,red:ot.material}}let $=new na(16773583,0,80,.62,.5,1.2);$.position.set(0,o.headY+.2,a-.05),$.target.position.set(0,.2,a+10),i.add($,$.target),i.userData.headlight=$;let J=new ia(16722450,0,1.4,3.4);return J.position.set(0,o.lampY,l+.05),i.add(J),i.userData.tailGlow=J,i.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),i}function Id(s,t,{sz:e=1,sy:n=1,sx:i=1,wheelR:r}={}){let o=Hi[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*i),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*i),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*i,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),Hi[s]=a,a}function Pd(s){return Hi[s]}var Lh=Aa;var Nr=9.81,Ld=1.2,Dd={id:"plane",kind:"plane",name:"Aereo da turismo",desc:"Monomotore biposto ad ala alta: decolla, sorvola la Brianza e atterra su un prato o una strada dritta.",color:"#f4f4f0",stripe:"#c0392b",L:7.3,W:10.2,H:2.6,wb:1.6,mass:760,kw:85,rpmMax:2700,thrust:3600,cdS:.9,kInd:31e4,wingS:15,vStall:20,vRot:24,vNe:75},Ra=class{constructor(t,e){this.spec=t,this.world=e,this.isPlane=!0,this.x=0,this.y=0,this.z=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.bank=0,this.lever=0,this.throttle=0,this.brake=0,this.steer=0,this.gear=1,this.rpm=0,this.slip=0,this.impact=0,this.wheelSpinAngle=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.agl=0,this.surface=null,this.stall=!1}ground(t,e,n=1e9){return this.world.roads.surfaceAt(t,e,n).h}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=this.vy=0,this.bank=0,this.pitch=0,this.roll=0,this.lever=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.surface=this.world.roads.surfaceAt(t,e,1e9),this.y=this.surface.h}launch(t=250,e=48){this.y=this.ground(this.x,this.z)+t,this.u=e,this.vy=0,this.pitch=.03,this.bank=0,this.lever=.65,this.onGround=!1,this.airborne=!0,this.crashed=0,this.surface=null}update(t,e){for(let i=0;i<3;i++)this.step(t/3,e);this.roll=-this.bank,this.rpm=700+this.lever*2e3+Math.min(300,this.u*4),this.throttle=this.lever,this.wheelSpinAngle+=(this.onGround?this.u/.3:0)*t,this.propAngle=(this.propAngle||0)+this.rpm/60*Math.PI*2*t}step(t,e){let n=this.spec,i=this.world;if(this.crashed>0){this.crashed-=t,this.u=0,this.crashed<=0&&(this.launch(),this.relaunched=!0);return}this.lever=Math.max(0,Math.min(1,this.lever+(e.throttle-e.brake)*t*.6));let r=n.thrust*this.lever*Math.max(0,1-this.u/(n.vNe*1.05)),o=.5*Ld*n.cdS*this.u*this.u+(this.onGround?0:n.kInd/Math.max(100,this.u*this.u)),a=Math.sin(this.h),l=Math.cos(this.h),c=this.ground(this.x,this.z,this.y+2);if(this.agl=this.y-c,this.onGround){this.brake=e.handbrake?1:0;let M=.03*n.mass*Nr*Math.sign(this.u),x=(e.handbrake?.55:0)*n.mass*Nr*Math.sign(this.u);this.u+=(r-o-M-x)/n.mass*t,Math.abs(this.u)<.08&&this.lever<.05&&(this.u=0),this.u<0&&(this.u=0),this.steer+=(e.steer*.5*Math.min(1,12/Math.max(1,this.u))-this.steer)*Math.min(1,t*6),this.h+=this.u*Math.tan(this.steer)/n.wb*t*Math.max(.15,1-this.u/n.vRot);let v=this.u>n.vRot*.85?Math.max(0,e.pitch)*.2:0;this.pitch+=(v-this.pitch)*Math.min(1,t*2),this.bank*=Math.exp(-t*8),this.x+=a*this.u*t,this.z+=l*this.u*t,this.collideGround(),this.surface=i.roads.surfaceAt(this.x,this.z,this.y+1),this.y=this.surface.h,this.vy=0;let b=Math.atan2(this.ground(this.x+a*2,this.z+l*2,this.y+3)-this.ground(this.x-a*2,this.z-l*2,this.y+3),4);this.dynPitch+=(b-this.dynPitch)*Math.min(1,t*8);let E=.5*Ld*n.wingS*this.u*this.u*(.35+this.pitch*5)/(n.mass*Nr);this.pitch>.08&&E>1&&(this.onGround=!1,this.airborne=!0,this.surface=null,this.vy=1);return}this.dynPitch*=Math.exp(-t*3);let u=Math.min(1,(this.u/n.vStall)**2);this.stall=u<.98;let h=1.3*Math.min(1,this.u/25);Math.abs(e.steer)>.05?this.bank+=e.steer*h*t:this.bank*=Math.exp(-t*.9),this.bank=Math.max(-1.05,Math.min(1.05,this.bank));let f=.65*Math.min(1,this.u/30);if(this.pitch+=e.pitch*f*t,Math.abs(e.pitch)<.05){let M=Math.max(-.16,Math.min(.04,.02+.5*(this.u-1.35*n.vStall)/n.vStall));this.pitch+=(M-this.pitch)*Math.min(1,t*.5)}this.stall&&(this.pitch-=(1-u)*.9*t),this.pitch=Math.max(-.75,Math.min(.55,this.pitch)),this.w=Nr*Math.tan(this.bank)/Math.max(15,this.u)*u,this.h+=this.w*t;let d=Math.atan2(this.vy,Math.max(1,this.u));this.u+=((r-o)/n.mass-Nr*Math.sin(d))*t,this.u=Math.max(5,this.u);let m=this.u*Math.sin(this.pitch)*u*Math.cos(this.bank)-(1-u)*9-(1-Math.cos(this.bank))*3.5;this.vy+=(m-this.vy)*Math.min(1,t*1.6),this.x+=a*this.u*t,this.z+=l*this.u*t,this.y+=this.vy*t;let y=c+1800;this.y>y&&(this.y=y,this.vy=Math.min(0,this.vy));let p=i.terrain;if(p.inside(this.x,this.z)||(this.x=Math.max(p.x0+50,Math.min(p.x0+(p.nx-1)*p.step-50,this.x)),this.z=Math.max(p.z0+50,Math.min(p.z0+(p.nz-1)*p.step-50,this.z)),this.h+=Math.PI*.75*t*4,this.outside=1),this.agl<60&&i.collision.topAt(this.x,this.z,1.5)>this.y+.3){this.crash("Schianto contro un ostacolo!");return}let g=this.ground(this.x,this.z,this.y+1);if(this.y<=g){let M=(this.ground(this.x+a*3,this.z+l*3,this.y+4)-g)/3,x=this.vy-M*this.u,v=x<-4.2||Math.abs(this.bank)>.35||this.pitch<-.18||this.u>40;if(this.y=g,v){this.crash(x<-4.2&&M>.12?"Schianto contro il pendio!":this.u>40?"Atterraggio troppo veloce!":"Atterraggio troppo duro!");return}this.onGround=!0,this.airborne=!1,this.impact=Math.min(1,-this.vy/6),this.vy=0,this.bank=0,this.touchdown=!0}}collideGround(){let t=this.world,e=1.6,n=t.collision.resolveCircle(this.x,this.z,e),i=t.traffic?t.traffic.resolveCircle(this.x,this.z,e):null;i&&(!n||i.depth>n.depth)&&(n=i),n&&(this.x+=n.nx*n.depth,this.z+=n.nz*n.depth,this.u>1&&(this.impact=Math.max(this.impact,Math.min(1,this.u/10))),this.u*=.3)}crash(t){this.crashed=2.2,this.crashMsg=t,this.impact=1,this.vy=0,this.lever=0,this.u=0,this.y=this.ground(this.x,this.z,this.y+1)}};function Nd(s,t={}){let e=new $t,n=new $t,i=new bn({color:t.color||s.color,shininess:70,specular:5592405}),r=new bn({color:s.stripe,shininess:50}),o=new Ft({color:1908772}),a=new bn({color:2240576,shininess:120,specular:10070715,transparent:!0,opacity:.75}),l=.95,c=(O,$,J,X,rt,ut=0,ot=0,G=0)=>{let Q=new Et(O,$);return Q.position.set(J,X,rt),Q.rotation.set(ut,ot,G),Q.castShadow=!0,Q.receiveShadow=!0,n.add(Q),Q},u=[[2.35,.55,.6],[1.6,1.05,1.15],[.2,1.1,1.25],[-1.2,.95,1],[-3,.45,.55],[-4.6,.22,.38]],h=[];for(let[O,$,J]of u)h.push({z:O,hw:$,hh:J});let f=[],d=[],m=O=>[[O.hw,-O.hh*.45],[O.hw*.92,O.hh*.55],[-O.hw*.92,O.hh*.55],[-O.hw,-O.hh*.45],[-O.hw*.6,-O.hh*.55],[O.hw*.6,-O.hh*.55]];h.forEach(O=>{for(let[$,J]of m(O))f.push($*.5,l+.55+J*.5+(O.z<-1?(-1-O.z)*.12:0),O.z)});let y=6;for(let O=0;O<h.length-1;O++)for(let $=0;$<y;$++){let J=O*y+$,X=O*y+($+1)%y,rt=J+y,ut=X+y;d.push(J,rt,X,X,rt,ut)}for(let O=1;O<y-1;O++){d.push(0,O,O+1);let $=(h.length-1)*y;d.push($,$+O+1,$+O)}let p=new te;p.setAttribute("position",new qt(f,3)),p.setIndex(d),p.computeVertexNormals();let g=new Et(p,i);g.castShadow=!0,n.add(g);let M=[g];for(let O of[1,-1])M.push(c(new Nt(.02,.16,5.6),r,O*.53,l+.45,-.9,0,O*.055,0));M.push(c(new Qt(.2,.3,.35,12),i,0,l+.52,2.5,Math.PI/2)),M.push(c(new Ss(.11,.22,10),o,0,l+.52,2.78,Math.PI/2));let x=new $t;x.position.set(0,l+.52,2.72),n.add(x);let v=new Et(new Nt(1.85,.14,.04),o);v.castShadow=!0,x.add(v),M.push(v);let b=new Et(new Di(.93,24),new De({color:2236962,transparent:!0,opacity:.12,side:re}));x.add(b),M.push(c(new Nt(1.02,.42,.04),a,0,l+1,1.5,-.55));for(let O of[1,-1])M.push(c(new Nt(.03,.38,1.3),a,O*.535,l+.88,.55));c(new Nt(s.W,.13,1.45),i,0,l+1.18,.45);for(let O of[1,-1]){c(new Nt(.5,.14,1.46),r,O*(s.W/2-.25),l+1.18,.45);let $=c(new Qt(.035,.035,2.25,6),o,O*1.35,l+.7,.55,0,0,O*1.02);$.castShadow=!0}c(new Nt(3.4,.08,.85),i,0,l+.8,-4.25);let E=new Ts;E.moveTo(0,0),E.lineTo(-1.1,0),E.lineTo(-1.25,1.35),E.lineTo(-.55,1.35),E.lineTo(0,0);let S=new Mr(E,{depth:.07,bevelEnabled:!1}),T=c(S,r,.035,l+.82,-3.55,0,-Math.PI/2,0);T.castShadow=!0;let _=new Qt(.21,.21,.14,14);_.rotateZ(Math.PI/2);let w=[];for(let[O,$,J]of[[0,1.95,!0],[1,-.1,!1],[-1,-.1,!1]]){let X=new $t;X.position.set(O,.21,$),X.rotation.order="YXZ",n.add(X);let rt=new Et(_,o);rt.castShadow=!0,X.add(rt),c(new Nt(.05,l+.3,.06),o,O*.75,l*.5+.1,$,0,0,-O*.35),w.push({pivot:X,front:J})}e.add(n);let R=new $t,D=new H(.24,l+.9,1),z=new Et(new Nt(1,.26,.12),new Ft({color:2829616}));z.position.set(0,l+.52,1.72),R.add(z);let P=.5,k=.26,N=l+.66,W=l+.76,B=1.78,Y=2.62,K=new te;K.setAttribute("position",new qt([-P,N,B,P,N,B,k,W,Y,-P,N,B,k,W,Y,-k,W,Y],3)),K.computeVertexNormals(),R.add(new Et(K,new bn({color:t.color||s.color,shininess:60,side:re})));let V=document.createElement("canvas");V.width=256,V.height=96;let tt=new Ie(V);tt.colorSpace=ye;let Z=new Et(new tn(.36,.135),new De({map:tt,toneMapped:!1}));Z.position.set(.2,l+.58,1.655),R.add(Z),Z.lookAt(D);let F=new Et(new Nt(.3,.045,.04),new Ft({color:1381653}));return F.position.set(.24,l+.4,1.4),R.add(F),R.visible=!1,e.add(R),e.userData.eye=D.clone(),{root:e,ext:n,wheels:w,prop:x,headlight:null,tailGlow:null,interior:R,steeringWheel:F,dashCanvas:V,dashTex:tt,exterior:M,isPlane:!0}}function Ud(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.textAlign="center",a.fillStyle=o?"#ff5a4a":"#9fe3ff",a.font="bold 34px Arial",a.fillText(String(Math.round(e)),52,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",52,70),a.fillStyle="#ffd36b",a.font="bold 30px Arial",a.fillText(String(Math.round(n)),140,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m dal suolo",140,70),a.fillStyle=i>=0?"#7dff9a":"#ffb36b",a.font="bold 20px Arial",a.fillText((i>=0?"+":"")+i.toFixed(1),214,46),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m/s",214,64),a.fillStyle="#1e2a30",a.fillRect(176,76,70,8),a.fillStyle="#59c9ff",a.fillRect(176,76,70*r,8),o&&(a.fillStyle="#ff5a4a",a.font="bold 13px Arial",a.fillText("STALLO",52,88)),t.needsUpdate=!0}var Ns=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];Ns.push(Dd);for(let s of Ns)s.base!=="bus"&&s.kind!=="plane"&&Id("bds-"+s.id,s.base,{sz:s.sz,sy:s.sy,sx:s.sx,wheelR:s.wheelR});var lv=s=>s.base==="bus"?"bus":"bds-"+s.id,zd=new Ft({color:2237478});function Fd(s,t={}){let e=new $t,n=lv(s),i=Pd(n),r=Cd(new Ct(t.color||s.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((m,y)=>{let p=r.getObjectByName(m);return p&&(p.rotation.order="YXZ"),{pivot:p,front:y<2}}).filter(m=>m.pivot),l=i.beltY,c=Math.max(...i.cab.map(m=>m[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new $t;let m=i.widths.reduce((O,$)=>Math.max(O,$),0)*2,y=m*.22,[p,g]=i.cab[0],M=Math.min(c-.17,Math.max(l+.2,l+.55*(c-l))),x=p-.95,v=new H(y,M,x),b=new Ft({color:2829616}),E=new Ft({color:3816512,side:re}),S=x+.6,T=Math.min(M-.2,g+.04),_=Math.max(.4,p-S),w=new Et(new Nt(m-.1,.42,_),b);w.position.set(0,T-.21,S+_/2),u.add(w);let R=M-.18-T;if(R>.04){let O=new Et(new Nt(.56,R+.05,.3),b);O.position.set(y,T+R/2-.02,S+.15),u.add(O)}f=document.createElement("canvas"),f.width=256,f.height=96,d=new Ie(f),d.colorSpace=ye;let D=new Et(new tn(.4,.15),new De({map:d,toneMapped:!1}));D.position.set(y,M-.28,S-.005),D.lookAt(v),u.add(D),h=new $t,h.add(new Et(new Un(.185,.02,8,32),new Ft({color:1381653})));for(let O of[0,2.1,4.2]){let $=new Et(new Nt(.17,.028,.02),zd);$.position.set(Math.cos(O-Math.PI/2)*.085,Math.sin(O-Math.PI/2)*.085,0),$.rotation.z=O-Math.PI/2,h.add($)}let z=new Et(new Qt(.055,.055,.06,12),zd);z.rotation.x=Math.PI/2,h.add(z);let P=new $t;P.position.set(y,M-.34,x+.47),P.rotation.x=-.42,P.add(h);let k=new Et(new Qt(.035,.045,.3,8),b);k.rotation.x=Math.PI/2-.42,k.position.set(0,-.06,.16),P.add(k),u.add(P);let N=i.cab[1]?i.cab[1][0]:p-.5,W=i.cab[1]?i.cab[1][1]:c,B=i.cab[i.cab.length-2][0];for(let O of[1,-1]){let $=new H(O*(m/2-.1),g,p-.05),J=new H(O*(m/2-.16),W-.03,N),X=new Et(new Nt(.08,$.distanceTo(J),.1),E);X.position.copy($).add(J).multiplyScalar(.5),X.lookAt(J),X.rotateX(Math.PI/2),u.add(X);let rt=new Et(new tn(Math.max(.6,p-x+.6),l-.3),E);rt.rotation.y=Math.PI/2,rt.position.set(O*(m/2-.06),(l+.3)/2,(p+x-.6)/2),u.add(rt)}let Y=new Et(new tn(m-.1,Math.max(.5,N-.12-B)),new Ft({color:11841445,emissive:3157546,side:re}));Y.rotation.x=Math.PI/2,Y.position.set(0,Math.min(c,W+.02)-.04,(N-.12+B)/2),u.add(Y);let K=new Et(new Nt(.15,.045,.02),new Ft({color:5593180}));K.position.set(0,W-.075,N-.02),u.add(K);let V=i.profile[1]||i.profile[0],tt=m/2-.18,Z=new te;Z.setAttribute("position",new qt([-tt,g-.02,p,tt,g-.02,p,tt,V[1],V[0],-tt,g-.02,p,tt,V[1],V[0],-tt,V[1],V[0]],3)),Z.computeVertexNormals();let F=new Et(Z,new bn({color:t.color||s.color,shininess:60,specular:4473924,side:re}));u.add(F),u.visible=!1,e.add(u),e.userData.eye=v.clone()}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function Bd(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/i);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var Ca=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let vt=r;r=o,o=vt}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),m=Math.cos(this.h),y=-Math.sin(this.h),p=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let g=!!p.road,M=g?i.roads.ways[p.road.wi]:null,x=!1;if(!g){let vt=i.terrain.landClass(this.x,this.z);x=vt==="parking"||vt==="parking_space"||vt==="pedestrian"}let v=n.grip*(g?M.flags&64?.78:1:x?.95:.68),b=g?M.flags&64?.03:.013:x?.016:.06;n.drive==="A"&&!g&&(v*=1.12,b*=.7),this.mu=v;let E=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,T=Math.atan2(E-S,this.L),_=n.W*.8,w=i.roads.surfaceAt(this.x+m*_/2,this.z+y*_/2,this.y+.5).h,R=i.roads.surfaceAt(this.x-m*_/2,this.z-y*_/2,this.y+.5).h,D=Math.atan2(w-R,_),z=this.m*9.81*Math.cos(T),P=z*this.b/this.L-this.m*this.ax*this.hcg/this.L,k=z*this.a/this.L+this.m*this.ax*this.hcg/this.L;P=Math.max(P,z*.15),k=Math.max(k,z*.15),this.airborne&&(P=k=0);let N=this.gear>0?n.gears[this.gear-1]:3.6,W=Math.abs(this.u)/n.wheelR*30/Math.PI,B=W*N*n.final,Y=900+r*2600;if((this.gear===1||this.gear===-1)&&B<Y&&(B=B*.4+Y*.6),B=Math.max(800,B),this.rpm+=(B-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let vt=n.rpmMax*(.55+.37*r);if(this.rpm>vt&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let It=W*n.gears[this.gear-2]*n.final,Bt=n.rpmMax*(.28+.3*r);this.rpm<Bt&&It<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let K=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(K=this.torque(this.rpm)*N*n.final*.88/n.wheelR*r),this.gear<0&&(K=this.u<-7?0:-K*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(K-=Math.sign(this.u)*this.torque(this.rpm)*.12*N*n.final/n.wheelR*(this.rpm/n.rpmMax));let V=n.drive==="F"?P:n.drive==="R"?k:P+k,tt=v*V;this.wheelSpin=Math.abs(K)>tt?Math.min(1,(Math.abs(K)-tt)/tt):0,K=Math.max(-tt,Math.min(tt,K));let Z=0,F=n.brake*o;Math.abs(this.u)>.05&&(Z=-Math.sign(this.u)*Math.min(F,v*(P+k)));let O=0;this.handbrake>0&&Math.abs(this.u)>.05&&(O=-Math.sign(this.u)*v*k*.8*this.handbrake);let $=Math.max(Math.abs(this.u),.5),J=this.u>=0?1:-1,X=Math.atan2(this.v+this.a*this.w,$)-this.steer*J,rt=Math.atan2(this.v-this.b*this.w,$),ut=(vt,It,Bt)=>{let At=-(12*It)*vt,Yt=Bt*It;return Math.abs(At)>Yt&&(At=Math.sign(At)*Yt*Math.max(.75,1-.25*(Math.abs(At)/Yt-1))),At},ot=v*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(ot*=1-.35*this.wheelSpin);let G=ut(X,P,v),Q=ut(rt,k,ot);this.slip=Math.max(Math.abs(rt),Math.abs(X)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let L=-.5*1.2*n.cda*this.u*Math.abs(this.u),ft=Math.abs(this.u)>.05?-Math.sign(this.u)*b*(P+k):0,at=-this.m*9.81*Math.sin(T),xt=this.m*9.81*Math.sin(D)*.5,st=Math.cos(this.steer),St=Math.sin(this.steer),ct=K+Z+O+L+ft+at-G*St,I=Q+G*st+xt;this.airborne&&(ct=L+at*0,I=0);let C=ct/this.m+this.v*this.w,q=I/this.m-this.u*this.w,lt=this.airborne?0:(this.a*G*st-this.b*Q)/this.I,ht=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let vt=1.1*v*9.81/Math.abs(this.u);Math.abs(this.w)>vt&&(this.w+=(Math.sign(this.w)*vt-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=C*t,this.v+=q*t,this.w+=lt*t,Math.sign(ht)!==Math.sign(this.u)&&Math.abs(K)<1&&ht!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(at)<F+b*z+1500&&(this.u=0);let it=Math.min(1,Math.abs(this.u)/4),mt=this.u*Math.tan(this.steer)/this.L;this.w=this.w*it+mt*(1-it),this.v*=1-(1-it)*Math.min(1,t*8),this.ax=this.ax+(ct/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(I/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let yt=f*this.u+m*this.v,wt=d*this.u+y*this.v;this.x+=yt*t,this.z+=wt*t,this.collide();let Vt=i.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=Vt&&(this.y=Vt,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-Vt>.35&&this.y-Vt<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(Vt-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=Vt),this.pitch+=(T-this.pitch)*Math.min(1,t*10),this.roll+=(D-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),i=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+i*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),m=n*this.u+f*this.v,y=i*this.u+d*this.v,p=m*u.nx+y*u.nz;p<0&&(m-=1.25*p*u.nx,y-=1.25*p*u.nz,m*=.8,y*=.8,this.impact=Math.max(this.impact,Math.min(1,-p/12)),this.u=m*n+y*i,this.v=m*f+y*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var Ia=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),i=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(i?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set,padThr:0,padBrk:0,stickY:0};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let u=c.axes,h=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,m=p=>{if(p===void 0)return 0;let g=d.invertPedals?(1-p)/2:(p+1)/2;return g<.03?0:Math.min(1,g)},y=u[d.steerAxis]||0;(Math.abs(y)>.005||m(u[d.throttleAxis])>0||m(u[d.brakeAxis])>0)&&(a.steer=-y,a.analogWheel=!0,a.throttle=Math.max(a.throttle,m(u[d.throttleAxis])),a.brake=Math.max(a.brake,m(u[d.brakeAxis])))}else if(c.mapping==="standard"){let d=u[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,h(7)),a.brake=Math.max(a.brake,h(6)),a.padThr=h(7),a.padBrk=h(6),Math.abs(u[1]||0)>.1&&(a.stickY=u[1]),(h(0)>.5||h(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,m)=>{d.pressed&&!f[m]&&a.buttons.add(m)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var Dh=72,yi=1e6,Od=14,Pa=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new $t,this.fleet=Ph(Dh);let e=t.settings&&t.settings.parked||288;this.parkFleet=Ph(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=Dh-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,yi,yi,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,yi,yi,0,0,-100);let l=ki(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),i.fillStyle=r,i.fillRect(0,0,32,64),this.beamMat=new De({map:new Ie(n),transparent:!0,blending:hi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new tn(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Ee(o,this.beamMat,Dh),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new Jt,this._q=new Re,this._up=new H(0,1,0),this._p=new H,this._s=new H(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,yi,yi,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let i=0;i<6;i++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,M=>M.drivable&&M.cls<=Gt.LIVING&&!(M.flags&zt.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(ki(this.free[h])==="bus"&&u.cls>Gt.TERTIARY&&(h=this.free.findIndex(M=>ki(M)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],m=(f>0?c.t:1-c.t)*d;if(this.cars.some(M=>Math.hypot(M.x-c.px,M.z-c.pz)<25))continue;let y=this.free.splice(h,1)[0],p=ki(y),g={slot:y,type:p,box:Ch[p],colour:Math.floor(Math.random()*Od),wi:c.wi,k:c.k,dir:f,s:m,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(p==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(g),this.cars.push(g),this.place(g,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]);for(let f=e.adjStart[r];f<e.adjStart[r+1];f++){let d=e.adjWay[f],m=e.adjPos[f],y=e.ways[d];if(!y.drivable||y.cls>Gt.LIVING||y.flags&zt.PRIVATE||t.type==="bus"&&y.cls>Gt.UNCLASSIFIED)continue;let p=[];m<y.nodes.length-1&&p.push({wi:d,k:m,dir:1,to:y.nodes[m+1]}),m>0&&!y.oneway&&p.push({wi:d,k:m-1,dir:-1,to:y.nodes[m-1]});for(let g of p){if(g.wi===t.wi&&g.k===t.k&&g.dir===-t.dir)continue;let x=Math.atan2(e.nx[g.to]-e.nx[r],e.nz[g.to]-e.nz[r])-c;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;let v=1+Math.max(0,6-y.cls)*.5;Math.abs(x)<.4&&(v*=2.5),Math.abs(x)>2.6&&(v*=.05),l.push({...g,turn:x,wgt:v})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&zt.ROUNDABOUT&&!(n.flags&zt.ROUNDABOUT)||n.flags&zt.LINK&&!(h.flags&zt.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,i=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,m=(u-l)/h,y=n.laneCenter(i,t.dir),p=a+d*t.s-m*y,g=l+m*t.s+d*y,M=t.dir>0?f:1-f,x=n.heightOn(t.wi,t.k,M,p,g),v=Math.min(1,(t.s+2)/h),b=t.dir>0?v:1-v,E=n.heightOn(t.wi,t.k,b,p+d*(v-f)*h,g+m*(v-f)*h),S=v>f?(E-x)/((v-f)*h):t.slope;t.slope+=(S-t.slope)*Math.min(1,(e||1)*5),t.x=p,t.z=g,t.y=x;let T=Math.atan2(d,m);e===0&&(t.h=T);let _=T-t.h;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;t.h+=_*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),i=Math.hypot(t.slope,1);xi.x=-e*t.slope/i,xi.y=1/i,xi.z=-n*t.slope/i,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let i=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=i.ways[u.wi],[f,d]=this.segEnds(u),y=Math.hypot(i.nx[d]-i.nx[f],i.nz[d]-i.nz[f])-u.s,p=Math.sin(u.h),g=Math.cos(u.h),M=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let P=Math.abs(u.next.turn)>1?5.5:9;M=Math.min(M,Math.sqrt(P*P+2*2.2*Math.max(0,y-3)))}let x=1e9,v=0,b=(P,k,N,W,B,Y)=>{let K=P-u.x,V=k-u.z,tt=K*p+V*g;if(tt<=0||tt>60)return;let Z=Math.abs(K*g-V*p),F=W*p+B*g;if(Z>(F>.3?2:1.4))return;let O=tt-u.box.halfL-Y-.4;O<x&&(x=O,v=N*Math.max(0,F))};for(let P of this.cars)P!==u&&b(P.x,P.z,P.speed,Math.sin(P.h),Math.cos(P.h),P.box.halfL);e.active!==!1&&b(r,o,c,a,l,2.2);for(let P of this.statics)b(P.x,P.z,0,Math.sin(P.h),Math.cos(P.h),P.box.halfL);for(let P of this.obstacles)b(P[0],P[1],0,0,0,.6);let E=i.ntag[d]===Kt.SIGNALS?d:u.next&&i.ntag[this.nodeAfter(u)]===Kt.SIGNALS&&y<35?-2:-1;if(E!==-1){let P=E===d?y:y+20,k=Math.abs(p)>Math.abs(g)?1:0,N=Cr(k,n);if((N==="R"||N==="Y"&&P>14)&&P>1.5){let W=P-3.5-u.box.halfL+2.2;W<x&&(x=Math.max(.1,W),v=0)}}if(u.yield&&y<18&&y>.3){let P=i.nx[d],k=i.nz[d],N=!1,W=(B,Y,K,V,tt,Z)=>{if(N||K<1.5||Z===u.wi)return;let F=P-B,O=k-Y,$=Math.hypot(F,O);$>10+K*3.2||$<.5||(F*V+O*tt)/$<.6||(N=!0)};for(let B of this.cars)B!==u&&W(B.x,B.z,B.speed,Math.sin(B.h),Math.cos(B.h),B.wi);if(e.active!==!1&&W(r,o,c,a,l,e.wi),N){let B=y-2.2-u.box.halfL+2.2;B<x&&(x=Math.max(.1,B),v=0)}}u.bumped>0&&(u.bumped-=t,M=0);let S=u.type==="bus"?1.1:1.6,T=2.4,_=2.2,w=1.25,R=u.speed,D=S*(1-Math.pow(Math.max(0,R)/Math.max(.1,M),4));if(x<1e8){let P=_+R*w+R*(R-v)/(2*Math.sqrt(S*T));D-=S*Math.pow(Math.max(0,P)/Math.max(.3,x),2)}D=Math.max(-9,D),u.speed=Math.max(0,R+D*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let z=0;for(;z++<8;){let[P,k]=this.segEnds(u),N=Math.hypot(i.nx[k]-i.nx[P],i.nz[k]-i.nz[P]);if(u.s<N)break;u.s-=N;let W=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=W.wi,u.k=W.k,u.dir=W.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,i=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=i&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,i=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,m=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>m)continue;let y=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(y+=Math.PI);let p=a(r[l]+7,r[l+1]+13),g=p<.7||h<2.35?"car":p<.9?"wagon":f>=5?"van":"wagon",M=Ch[g],x=Math.sin(y),v=Math.cos(y),b=[i.addCircle(t,c+x*1.1,u+v*1.1,M.halfW-.08),i.addCircle(t,c-x*1.1,u-v*1.1,M.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:y,type:g,box:M,colour:Math.floor(a(r[l]+3,r[l+1]+5)*Od),taken:!1,objs:b})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let i of this.parkSpots.values())for(let r of i){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}xi.x=0,xi.y=1,xi.z=0;for(let i of Object.keys(n)){let r=n[i].sort((a,l)=>a._d-l._d),o=this.parkPools[i];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],yi,yi,0,0,-100)}}}nearestParked(t,e,n){let i=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,i=a)}return i}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,i=null){let r=null,o=(a,l)=>{if(a===i)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let m=-d;m<=d;m++){let y=f*m/d,p=a.x+c*y,g=a.z+u*y,M=t-p,x=e-g,v=Math.hypot(M,x);v<n+h&&(!r||n+h-v>r.depth)&&(r={nx:v>1e-6?M/v:1,nz:v>1e-6?x/v:0,depth:n+h-v,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var Nh=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,i=this.v,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},La=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,i=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===Gt.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&zt.PRIVATE&&(h=6),l.cls===Gt.SERVICE&&(h=l.flags&zt.AISLE?5:1.8),l.cls===Gt.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],m=l.nodes[f+1];if(e.ntag[d]===Kt.GATE||e.ntag[m]===Kt.GATE)continue;let p=(l.cum[f+1]-l.cum[f])/u*h;i.push(d,m,p,c,f),l.oneway||i.push(m,d,p,c,f)}});let r=i.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[i[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[i[l*5]]++;this.eTo[c]=i[l*5+1],this.eCost[c]=i[l*5+2],this.eWay[c]=i[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,i,r){let o=this.R,a=N=>N.drivable&&N.cls!==Gt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(i,r,400,a);if(!l||!c)return null;let u=++this.run,h=new Nh,f=Math.sin(n),d=Math.cos(n),m=o.ways[l.wi],y=m.nodes[l.k],p=m.nodes[l.k+1],g=m.cum[l.k+1]-m.cum[l.k],M=Math.max(10,m.limit)/3.6,x=l.dx*f+l.dz*d,v=(N,W)=>{this.stamp[N]!==u&&(this.stamp[N]=u,this.dist[N]=1e18,this.closed[N]=0),W<this.dist[N]&&(this.dist[N]=W,this.prev[N]=-1,this.prevWay[N]=l.wi,h.push(W+this.h(N,i,r),N))},b=25;v(p,(1-l.t)*g/M+(x<0?b:0)),m.oneway||v(y,l.t*g/M+(x>0?b:0));let E=o.ways[c.wi],S=E.nodes[c.k],T=E.nodes[c.k+1],_=new Set([S,T]),w=-1,R=0;for(;h.size;){let N=h.pop();if(this.closed[N])continue;if(this.closed[N]=1,_.has(N)){w=N;break}if(++R>4e5)break;let W=this.dist[N];for(let B=this.eStart[N];B<this.eStart[N+1];B++){let Y=this.eTo[B];this.stamp[Y]!==u&&(this.stamp[Y]=u,this.dist[Y]=1e18,this.closed[Y]=0);let K=W+this.eCost[B];K<this.dist[Y]&&(this.dist[Y]=K,this.prev[Y]=N,this.prevWay[Y]=this.eWay[B],h.push(K+this.h(Y,i,r),Y))}}if(w<0)return null;let D=[],z=[];for(let N=w;N>=0;N=this.prev[N])D.push(N),z.push(this.prevWay[N]);D.reverse(),z.reverse();let P=[[l.px,l.pz]];for(let N of D)P.push([o.nx[N],o.nz[N]]);P.push([c.px,c.pz]);let k={pts:P,nodes:D,ways:z,dest:[c.px,c.pz],destRaw:[i,r],time:this.dist[w]};k.cum=[0];for(let N=1;N<P.length;N++)k.cum.push(k.cum[N-1]+Math.hypot(P[N][0]-P[N-1][0],P[N][1]-P[N-1][1]));return k.length=k.cum[k.cum.length-1],k.steps=this.instructions(k),k}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:i,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<i.length-1;){let u=i[c],h=r[c],f=r[c+1],d=e.ways[h].flags&zt.ROUNDABOUT,m=e.ways[f].flags&zt.ROUNDABOUT,y=o[c],p=o[c+1],g=o[c+2];if(!d&&m){let R=0,D=c+1;for(;D<i.length-1&&e.ways[r[D+1]].flags&zt.ROUNDABOUT;)this.hasExit(i[D],r[D])&&R++,D++;R++;let z=D+1<r.length?l(r[D+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:R,name:z,text:`Alla rotatoria prendi la ${R}\xAA uscita`+(z?` verso ${z}`:"")}),c=D+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let M=Math.atan2(p[0]-y[0],p[1]-y[1]),v=Math.atan2(g[0]-p[0],g[1]-p[1])-M;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let b=v*180/Math.PI,E=l(h),S=l(f),T=S!==E;if(Math.abs(b)<25&&!T){c++;continue}if(Math.abs(b)<25&&T&&!this.realChoice(u,h)){c++;continue}let _,w;Math.abs(b)<25?(_="straight",w="Prosegui dritto"):b>=25&&b<55?(_="slight-left",w="Tieni la sinistra"):b>=55&&b<150?(_="left",w="Svolta a sinistra"):b<=-25&&b>-55?(_="slight-right",w="Tieni la destra"):b<=-55&&b>-150?(_="right",w="Svolta a destra"):(_="uturn",w="Fai inversione a U"),S&&(w+=(_==="straight"?" su ":" in ")+S),n.push({i:c,d:a[c+1],type:_,name:S,text:w}),c++}return n.push({i:i.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let i=n.adjStart[t];i<n.adjStart[t+1];i++){let r=n.ways[n.adjWay[i]];if(!(r.flags&zt.ROUNDABOUT)&&r.drivable&&r.cls<Gt.SERVICE+1){let o=n.adjPos[i];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,i=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=Gt.LIVING&&i++;return i>=2}};function kd(s,t,e){let{pts:n,cum:i}=s,r=1e9,o=0,a=0,l=Math.max(0,(s._lastI||0)-30),c=Math.min(n.length-1,(s._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,m=n[u+1][1]-f,y=d*d+m*m||1e-9,p=((t-h)*d+(e-f)*m)/y;p=Math.max(0,Math.min(1,p));let g=Math.hypot(t-h-d*p,e-f-m*p);g<r&&(r=g,o=i[u]+Math.sqrt(y)*p,a=u)}return s._lastI=a,{off:r,s:o,i:a}}var cv=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],hv=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],uv={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},Da=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,i)=>{n.cls<=Gt.TERTIARY&&n.drivable&&this.major.push(i)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let i=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let u=0;u<o.length;u++){let h=(u+1)%o.length,f=o[u][0]*o[h][1]-o[h][0]*o[u][1];a+=f,l+=(o[u][0]+o[h][0])*f,c+=(o[u][1]+o[h][1])*f}Math.abs(a)>r&&(r=Math.abs(a),i=[l/(3*a),c/(3*a)])}return{...n,label:i}}),this.night=!1}drawMini(t,e,n){let i=this.mini,r=this.miniCtx,o=i.width,a=i.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,i,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>i+3e3||Math.abs(a[0][1]-n)>i+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,i,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,i,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=Gt.SERVICE||c[d.cls].push(h*16384+f)});let u=o?hv:cv;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let m=[12,11,9,8,7,6,6,5,4,3,5][f],y=Math.max(a?1:1.6,m*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(y+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=y/r),!(h===0&&f>=Gt.SERVICE)){t.beginPath();for(let p of d){let g=Math.floor((p+1)/16384),M=p-g*16384,x=l.ways[g];if(M<0)for(let v=0;v<x.nodes.length;v++){let b=x.nodes[v];v?t.lineTo(l.nx[b],l.nz[b]):t.moveTo(l.nx[b],l.nz[b])}else{let v=x.nodes[M],b=x.nodes[M+1];t.moveTo(l.nx[v],l.nz[v]),t.lineTo(l.nx[b],l.nz[b])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,i){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);i?t.moveTo(i.x,i.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let i=this.big,r=this.bigCtx,o=i.width,a=i.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((m,y)=>y?r.lineTo(m[0],m[1]):r.moveTo(m[0],m[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.R.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(uv[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,m]=this.toScreen(h.label[0],h.label[1]);d<-100||m<-50||d>o+100||m>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,m),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,m))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var Na=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(i=>{let r=e.createOscillator();return r.type="square",r.frequency.value=i,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,i){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+i*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+i*1500,r,.1)}};function za(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var Ur=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],Ua=(s,t,e)=>s<t?t:s>e?e:s;function zh({facing:s,scale:t,x:e,z:n,travelX:i,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=Ua((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),m=1.1+4.9*h,y=(.6+1.6*h)*(.4+u()*.6),p=2.2+5*h,g=-r,M=i,x={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:i*d+o*y,vz:r*d+a*y,vy:m,qx:0,qy:Math.sin(s/2),qz:0,qw:Math.cos(s/2),wx:g*p,wy:(u()-.5)*(1.5+5*h),wz:M*p,col:new Float64Array(9),pose:c?{...c}:za(),vel:za(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:s,lieSign:u()<.5?1:-1,done:!1,rand:u};Fa(x);let v=5+13*h;for(let[b]of Ur)x.vel[b]=(u()-.5)*v;return x}function Fa(s){let{qx:t,qy:e,qz:n,qw:i}=s,r=s.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}var Uh=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function Fh(s,t){if(s.t+=t,s.phase==="rise"){pv(s,t);return}s.vy-=11.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t;let{wx:e,wy:n,wz:i,qx:r,qy:o,qz:a,qw:l}=s,c=t*.5,u=r+c*(e*l+n*a-i*o),h=o+c*(n*l+i*r-e*a),f=a+c*(i*l+e*o-n*r),d=l-c*(e*r+n*o+i*a),m=1/(Math.hypot(u,h,f,d)||1);s.qx=u*m,s.qy=h*m,s.qz=f*m,s.qw=d*m,Fa(s);let y=s.col,p=!1;for(let x=0;x<Uh.length;x++){let v=Uh[x][0]*s.scale,b=y[3]*v,E=y[4]*v,S=y[5]*v,T=Uh[x][1]*s.scale-(s.y+E);if(T<=0)continue;p=!0,s.y+=T*.55;let _=s.vx+(s.wy*S-s.wz*E),w=s.vy+(s.wz*b-s.wx*S),R=s.vz+(s.wx*E-s.wy*b);if(w>=0)continue;let D=(b*b+S*S)/.16,z=-(1+.17)*w/(1+D);s.vy+=z,s.wx+=-S*z/.16,s.wz+=b*z/.16;let P=Math.hypot(_,R);if(P>1e-4){let k=Math.min(.55*z,P),N=-_/P*k,W=-R/P*k;s.vx+=N,s.vz+=W,s.wy+=(S*N-b*W)/.16*.5}if(z>.9&&s.bumps++,z>.6){let k=Math.min(9,z*2.4);for(let[N]of Ur)s.vel[N]+=(s.rand()-.5)*k}}if(p){s.grounded+=t;let x=Math.exp(-3.2*t);s.wx*=x,s.wy*=x,s.wz*=x,s.vx*=Math.exp(-1.9*t),s.vz*=Math.exp(-1.9*t)}else s.airborne+=t,s.grounded=0;dv(s,t);let g=Math.hypot(s.wx,s.wy,s.wz),M=Math.hypot(s.vx,s.vy,s.vz);if(s.phase==="air"&&p&&s.grounded>.12&&g<1.1&&M<.7){s.phase="down",s.settleFor=0;let x=y[6],v=y[8];x*x+v*v<.04&&(x=y[3],v=y[5]),s.yawOut=Math.atan2(x,v)}if(s.phase==="down"){if(s.settleFor+=t,s.settleFor<.45){let x=Math.min(1,t*7);fv(s,x),Fa(s)}s.vx*=Math.exp(-5*t),s.vz*=Math.exp(-5*t),s.wx*=Math.exp(-6*t),s.wy*=Math.exp(-6*t),s.wz*=Math.exp(-6*t),s.settleFor>s.restFor+.45&&(s.phase="rise",s.riseT=0,s.riseFrom={qx:s.qx,qy:s.qy,qz:s.qz,qw:s.qw,y:s.y,pose:{...s.pose}})}}function fv(s,t){let e=s.yawOut/2,n=Math.sin(e),i=Math.cos(e),r=s.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=i*r,l=n*o,c=-n*r,u=i*o,h=s.qx*a+s.qy*l+s.qz*c+s.qw*u,f=a,d=l,m=c,y=u;h<0&&(f=-f,d=-d,m=-m,y=-y),s.qx+=(f-s.qx)*t,s.qy+=(d-s.qy)*t,s.qz+=(m-s.qz)*t,s.qw+=(y-s.qw)*t;let p=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=p,s.qy*=p,s.qz*=p,s.qw*=p}function dv(s,t){let e=s.col,n=-e[1],i=-e[4],r=-e[7],o=Math.asin(Ua(n,-1,1)),a=Math.atan2(-r,-i),l=s.pose,c=s.vel,u=s.phase==="down"?1:0;for(let h=0;h<Ur.length;h++){let f=Ur[h],d=f[0],m=f[1],y=f[2],p=f[6],g=f[3]*(1+u*.6),M=f[4]*(1+u*1.4),x=f[5],v=x==="swing"?Ua(a+p,m,y):x==="lean"?Ua(o+p,m,y):x==="slack"?p:0,b=c[d]+(g*(v-l[d])-M*c[d])*t,E=l[d]+b*t;E<m?(E=m,b*=-.18):E>y&&(E=y,b*=-.18),c[d]=b,l[d]=E}}function pv(s,t){s.riseT+=t;let e=Math.min(1,s.riseT/s.riseFor),n=s.riseFrom,i=e*e*(3-2*e),r=s.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;s.qx=n.qx+(h*o-n.qx)*i,s.qy=n.qy+(h*a-n.qy)*i,s.qz=n.qz+(h*l-n.qz)*i,s.qw=n.qw+(h*c-n.qw)*i;let f=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=f,s.qy*=f,s.qz*=f,s.qw*=f,Fa(s);let d=.46*s.hipRest;s.y=e<.5?n.y+(d-n.y)*Hd(e/.5):d+(s.hipRest-d)*Hd((e-.5)/.5);let m=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[y]of Ur){let p=n.pose[y],g=0;y==="kneeL"||y==="kneeR"?g=m:y==="hipLs"||y==="hipRs"?g=-m*.75:y==="spine"?g=-.35*(1-i):y==="shLz"?g=.18:y==="shRz"&&(g=-.18),s.pose[y]=p+(g-p)*i,s.vel[y]=0}e>=1&&(s.done=!0)}var Hd=s=>s*s*(3-2*s);var mv=[12999502,5144518,5873770,13018190,9068230,5155270],gv=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],xv=.34,Gd=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function Vd(s){return(.2126*(s>>16&255)+.7152*(s>>8&255)+.0722*(s&255))/255}var yv=.15,vv=[15782580,15254430,14132856,12091218,9263675,6307884],Mv=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],_v=[9187114,2903932,1907999,4156229,11576460,7166860],Wd=[1710620,2565160,3813160,4539722],bv=[3881528,5916214,3095882,7037527,8011578],wv=.34,Ev=1.75;var zs=.43,Fs=.42,Bh=.058,Sv=.085,Tv=.092,Xd=.372,Av=.44,Rv=.196,Oh=.3,kh=.265,o_=zs+Fs+Bh;function Cv(s){let t=s()<.5,e=t?1.58+s()*.16:1.7+s()*.18;return{female:t,scale:e/Ev,shoulder:t?.88+s()*.07:1+s()*.11,depth:.92+s()*.26,hipW:t?1.04+s()*.1:.94+s()*.08,limb:(t?.9:1)+s()*.14}}function Iv(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function An(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of s){n.set(c.attributes.position.array,o*3),i.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new te;return l.setAttribute("position",new he(n,3)),l.setAttribute("normal",new he(i,3)),l.setIndex(new he(r,1)),l.computeVertexNormals(),l}function Ba(s,t,e,n=6){let i=new Qt(s,t,e,n,1,!1);return i.translate(0,-e/2,0),i}function Oa(s,t=6,e=4){return new dn(s,t,e)}function zr(s,t,e){return new Nt(s,t,e)}function Pv(){let s=Oa(.1,9,6);s.scale(.84,1.13,1.16),s.translate(0,.176,.008);let t=zr(.102,.072,.112);t.translate(0,.12,.04);let e=new Qt(.05,.058,.09,6);e.translate(0,.045,-.008);let n=zr(.024,.028,.034);n.translate(0,.158,.122);let i=An([e,t,s,n]),r=new dn(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=An([r]),a=zr(.175,.22,.062);a.translate(0,.005,-.062);let l=An([a]),c=T=>{let _=new jo(T.map(([w,R])=>new Mt(w,R)),8);return _.scale(1,1,.66),_},u=An([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=An([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=An([Oa(.049),Ba(.047,.04,Oh)]),m=Ba(.037,.031,kh+f);m.translate(0,f,0);let y=Oa(.044,5,4);y.scale(.85,1.25,.62),y.translate(0,-kh-.035,0);let p=An([m,y]),g=An([Oa(.086),Ba(.082,.06,zs)]),M=Ba(.057,.043,Fs+.06);M.translate(0,.06,0);let x=An([M]),v=zr(.088,.055,.235);v.translate(0,-.03,.052);let b=An([v]),E=zr(.24,.28,.13);E.translate(0,-.15,0);let S=An([E]);return{head:i,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:p,thigh:g,shin:x,foot:b,bag:S}}function Lv(s,t,e,n,i,r,o){let a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,m=0,y=-l,p=l*u,g=c,M=a*u,x=l*c,v=-u,b=a*c;s[0]=d*h+p*f,s[1]=m*h+g*f,s[2]=y*h+M*f,s[3]=-d*f+p*h,s[4]=-m*f+g*h,s[5]=-y*f+M*h,s[6]=x,s[7]=v,s[8]=b,s[9]=t,s[10]=e,s[11]=n}function Dv(s,t,e,n,i){s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=e,s[10]=n,s[11]=i}function Us(s,t,e,n,i,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],m=t[6],y=t[7],p=t[8];s[9]=t[9]+l*e+h*n+m*i,s[10]=t[10]+c*e+f*n+y*i,s[11]=t[11]+u*e+d*n+p*i;let g=Math.cos(a),M=Math.sin(a),x=Math.cos(r),v=Math.sin(r),b=Math.cos(o),E=Math.sin(o),S=g,T=-M,_=M*v,w=x,R=g*v,D=S*b+_*E,z=w*E,P=T*b+R*E,k=-S*E+_*b,N=w*b,W=-T*E+R*b,B=M*x,Y=-v,K=g*x;s[0]=l*D+h*z+m*P,s[1]=c*D+f*z+y*P,s[2]=u*D+d*z+p*P,s[3]=l*k+h*N+m*W,s[4]=c*k+f*N+y*W,s[5]=u*k+d*N+p*W,s[6]=l*B+h*Y+m*K,s[7]=c*B+f*Y+y*K,s[8]=u*B+d*Y+p*K}function Gi(s,t,e,n){let i=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];s[9]=t[9]+a*e,s[10]=t[10]+l*e,s[11]=t[11]+c*e;let d=Math.cos(n),m=Math.sin(n);s[0]=i,s[1]=r,s[2]=o,s[3]=a*d+u*m,s[4]=l*d+h*m,s[5]=c*d+f*m,s[6]=-a*m+u*d,s[7]=-l*m+h*d,s[8]=-c*m+f*d}function Xe(s,t,e,n,i,r){let o=s.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*i,o[a+5]=e[4]*i,o[a+6]=e[5]*i,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function ka(s,t){let e=s.instanceMatrix.array,n=t*16;for(let i=0;i<16;i++)e[n+i]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var qd=(s,t,e)=>s<t?t:s>e?e:s;function Yd(s,t=20260919){let e=Iv(t),n=Pv(),i=new Ft,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let x of o)r[x]=new Ee(n[a[x]],i,s);let l=o.map(x=>r[x]),c=new $t;for(let x of l)x.instanceMatrix.setUsage(Uf),x.frustumCulled=!1,c.add(x);for(let x of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])x.castShadow=!0;let u=new Ct,h=x=>x[e()*x.length|0],f=[];for(let x=0;x<s;x++){let v=Cv(e),b={phase:e()*Math.PI*2,build:v,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<wv,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:za(),rag:null};f.push(b);let E=e()<xv,S=h(E?mv:gv),T=h(Gd);for(let P=0;P<10&&Math.abs(Vd(T)-Vd(S))<yv;P++)T=h(Gd);let _=h(vv),w=e()<.1,R=e()<.14;b.longHair=!w&&!R&&e()<.34,b.bald=w,b.hatted=R;let D=e()<.45?S:_;r.chest.setColorAt(x,u.setHex(S)),r.armL.setColorAt(x,u.setHex(S)),r.armR.setColorAt(x,u.setHex(S)),r.foreL.setColorAt(x,u.setHex(D)),r.foreR.setColorAt(x,u.setHex(D)),r.head.setColorAt(x,u.setHex(_)),r.pelvis.setColorAt(x,u.setHex(T)),r.thighL.setColorAt(x,u.setHex(T)),r.thighR.setColorAt(x,u.setHex(T)),r.shinL.setColorAt(x,u.setHex(T)),r.shinR.setColorAt(x,u.setHex(T)),r.footL.setColorAt(x,u.setHex(h(Wd))),r.footR.setColorAt(x,u.setHex(h(Wd)));let z=h(R?_v:Mv);r.hair.setColorAt(x,u.setHex(z)),r.hairLong.setColorAt(x,u.setHex(z)),r.bag.setColorAt(x,u.setHex(h(bv)))}for(let x of l)x.instanceColor&&(x.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function m(x){return .2+.26*Math.min(1.7,x.gait)}function y(x,v,b){let E=x.phase,S=Math.sin(E),T=Math.cos(E),_=m(x)*(x.idle>0?0:1),w=Math.max(0,x.gait-1),R=_*S,D=-_*S;v.hipLs=R,v.hipRs=D,v.kneeL=p(E,_,w),v.kneeR=p(E+Math.PI,_,w);let z=.62,P=.38,k=-(R+v.kneeL),N=-(D+v.kneeR);v.ankL=qd(k+z*Math.max(0,S)**1.4-P*Math.max(0,-S)**1.6,-1.05,.4),v.ankR=qd(N+z*Math.max(0,-S)**1.4-P*Math.max(0,S)**1.6,-1.05,.4),v.hipLz=.02,v.hipRz=-.02;let W=-R*.62*x.swagger*(1+w*.5);v.shLs=W,v.shRs=-W;let B=.11+(x.build.shoulder-.95)*.35+w*.06;v.shLz=B,v.shRz=-B,v.elbL=.34+2.05*Math.max(0,-W)-.18*Math.max(0,W)+w*.55,v.elbR=.34+2.05*Math.max(0,W)-.18*Math.max(0,-W)+w*.55,x.bag&&(x.bagSide>0?(v.shLs*=.25,v.elbL=.32,v.shLz=B*1.5):(v.shRs*=.25,v.elbR=.32,v.shRz=-B*1.5)),v.twist=-.26*S*(1+w*.4),v.spine=-.02+.03*Math.abs(T)+Math.sin(b*1.6+x.phase*.1)*.012,v.spineZ=.035*T,v.headZ=-v.spineZ*.8,v.neck=.13-v.spine*.5}function p(x,v,b){let E=Math.max(0,-Math.cos(x)),S=Math.max(0,Math.sin(x));return .08+(2.1+b*1.4)*v*E**1.15+(.75+b)*v*S**2}function g(x,v){let b=.062*Math.max(0,-x.ankL),E=.062*Math.max(0,-x.ankR),S=zs*Math.cos(x.hipLs)+Fs*Math.cos(x.hipLs+x.kneeL)+Bh+b,T=zs*Math.cos(x.hipRs)+Fs*Math.cos(x.hipRs+x.kneeR)+Bh+E;return Math.max(S,T)*v}function M(x,v,b){let E=v.build,S=E.scale,T=E.limb*S,_=d.root;Us(d.chest,_,0,Tv*S,0,b.spine,b.spineZ,b.twist),Us(d.head,d.chest,0,Av*S,0,b.neck,b.headZ,b.headYaw);let w=Rv*E.shoulder*S;Us(d.armL,d.chest,w,Xd*S,0,b.shLs,b.shLz,0),Us(d.armR,d.chest,-w,Xd*S,0,b.shRs,b.shRz,0),Gi(d.foreL,d.armL,-Oh*S,-b.elbL),Gi(d.foreR,d.armR,-Oh*S,-b.elbR);let R=Sv*E.hipW*S;if(Us(d.thighL,_,R,0,0,b.hipLs,b.hipLz,0),Us(d.thighR,_,-R,0,0,b.hipRs,b.hipRz,0),Gi(d.shinL,d.thighL,-zs*S,b.kneeL),Gi(d.shinR,d.thighR,-zs*S,b.kneeR),Gi(d.footL,d.shinL,-Fs*S,b.ankL),Gi(d.footR,d.shinR,-Fs*S,b.ankR),Xe(r.pelvis,x,_,S*E.hipW,S,S*E.depth),Xe(r.chest,x,d.chest,S*E.shoulder,S,S*E.depth),Xe(r.head,x,d.head,S,S,S),v.bald?ka(r.hair,x):Xe(r.hair,x,d.head,S*(v.hatted?1.1:1),S*(v.hatted?1.12:1),S*(v.hatted?1.1:1)),v.longHair?Xe(r.hairLong,x,d.head,S,S,S):ka(r.hairLong,x),Xe(r.armL,x,d.armL,T,S,T),Xe(r.armR,x,d.armR,T,S,T),Xe(r.foreL,x,d.foreL,T,S,T),Xe(r.foreR,x,d.foreR,T,S,T),Xe(r.thighL,x,d.thighL,T,S,T),Xe(r.thighR,x,d.thighR,T,S,T),Xe(r.shinL,x,d.shinL,T,S,T),Xe(r.shinR,x,d.shinR,T,S,T),Xe(r.footL,x,d.footL,T,S,T),Xe(r.footR,x,d.footR,T,S,T),v.bag){let D=v.bagSide>0?d.foreL:d.foreR,z=v.bagSide>0?b.elbL:b.elbR;Gi(d.bag,D,-(kh+.05)*S,z*.5),Xe(r.bag,x,d.bag,S,S,S)}else ka(r.bag,x)}return{group:c,people:f,rand:e,count:s,drawWalking(x,v,b,E,S,T){let _=f[x],w=_.build.scale;y(_,_.pose,T),Lv(d.root,v,b+g(_.pose,w),E,S+.12*Math.sin(_.phase)*(_.idle>0?0:1),_.lean+.12*Math.max(0,_.gait-1),.022*Math.cos(_.phase)),M(x,_,_.pose)},drawRagdoll(x,v,b){Dv(d.root,v.col,v.x,b+v.y,v.z),M(x,f[x],v.pose)},hideAt(x){for(let v of l)ka(v,x)},commit(){for(let x of l)x.instanceMatrix.needsUpdate=!0}}}var Bs=90,Hh=s=>s.cls>=Gt.PRIMARY&&!(s.flags&(zt.LINK|zt.TUNNEL|zt.PRIVATE))&&s.cls!==Gt.TRACK,Ha=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=Yd(Bs),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<Bs;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=Bs-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(Bs,t)}latTarget(t,e){return t.flags&zt.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let i=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=i.nearest(c,u,45,Hh);if(!h)continue;let f=i.ways[h.wi];if(f.cls<=Gt.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let i=this.R,r=i.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=i.nx[o],c=i.nz[o],u=i.nx[a],h=i.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,m=(h-c)/f,y=t.dir>0?t.s:f-t.s,p=l+d*y-m*t.lat,g=c+m*y+d*t.lat,M=n?1:Math.min(1,e*5),x=t.x,v=t.z;t.x+=(p-t.x)*M,t.z+=(g-t.z)*M;let b=t.x-x,E=t.z-v;if(n)t.h=Math.atan2(d*t.dir,m*t.dir);else if(b*b+E*E>1e-7){let _=Math.atan2(b,E)-t.h;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;t.h+=_*Math.min(1,e*8)}let S=Math.abs(t.lat)<r.width/2+.2;t.onRoad=S&&!(r.flags&zt.NOCAR);let T=Math.min(1,Math.max(0,y/f));t.y=S?i.heightOn(t.wi,t.k,T,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===Kt.CROSSING||e.ntag[r]===Kt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&zt.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]),l=[];for(let M=e.adjStart[r];M<e.adjStart[r+1];M++){let x=e.adjWay[M],v=e.adjPos[M],b=e.ways[x];if(!(!Hh(b)||b.cls<=Gt.SECONDARY&&b.limit>50))for(let[E,S,T]of[[v,1,b.nodes[v+1]],[v-1,-1,b.nodes[v-1]]]){if(T===void 0||x===t.wi&&E===t.k)continue;let _=Math.atan2(e.nx[T]-e.nx[r],e.nz[T]-e.nz[r])-a;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;l.push({wi:x,k:E,dir:S,wgt:(Math.abs(_)<.5?3:Math.abs(_)>2.6?.1:1)*(b.flags&zt.NOCAR?2.5:1)*(b.cls>=Gt.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((M,x)=>M+x.wgt,0),u=l[l.length-1];for(let M of l)if(c-=M.wgt,c<=0){u=M;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],m=e.nx[d]-e.nx[f],y=e.nz[d]-e.nz[f],p=Math.hypot(m,y)||1,g=((t.x-e.nx[f])*-y+(t.z-e.nz[f])*m)/p;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=g>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,g))}update(t,e,n,i,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<Bs;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<Bs;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){Fh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let b=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,b),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,m=null;for(let b of i){let E=h.x-b.x,S=h.z-b.z,T=E*E+S*S;if(T>900)continue;let _=Math.hypot(b.vx,b.vz),w=Math.sin(b.h),R=Math.cos(b.h),D=E*w+S*R,z=E*R-S*w;if(Math.abs(D)<b.halfL+.25&&Math.abs(z)<b.halfW+.25)_>1.6?m=b:(h.x+=(z>=0?R:-R)*.05,h.z+=(z>=0?-w:w)*.05);else if(_>2.5){let P=b.vx/_,k=b.vz/_,N=E*P+S*k,W=Math.abs(E*k-S*P);N>0&&N<4+_*1.4&&W<b.halfW+1.3&&(d=!0,h.fleeSide=E*k-S*P>=0?1:-1,h.fdx=k*h.fleeSide,h.fdz=-P*h.fleeSide)}if(r&&b.player&&T<400){let P=Math.max(_,1);(E*(b.vx||w)+S*(b.vz||R))/P>-2&&(d=!0,h.fdx=z>=0?R:-R,h.fdz=z>=0?-w:w)}}if(m){let b=Math.hypot(m.vx,m.vz),E=m.vx/b,S=m.vz/b,T=h.x-m.x,_=h.z-m.z,w=Math.hypot(T,_)||1;h.rag=zh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:E,travelZ:S,awayX:T/w,awayZ:_/w,speed:b,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,b,m),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let y=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let b=this.world.collision.resolveCircle(h.x,h.z,.3);b&&(h.x+=b.nx*b.depth,h.z+=b.nz*b.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let p=this.latTarget(f,h.side);if(h.wait>0){let b=!1;for(let E of i){let S=Math.hypot(E.vx,E.vz);if(S<1.5)continue;let T=h.x-E.x,_=h.z-E.z,w=Math.hypot(T,_);w<12+S*3&&(T*E.vx+_*E.vz)/(w*S)>.5&&(b=!0)}h.wait+=t,!b||h.wait>9?h.wait=0:y=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,p-h.lat)));let g=Math.abs(p-h.lat)>.3,M=g?y*.25:y;h.gait+=((y>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=M*t;let x=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(M,g&&y>0?1.2:0)/Math.max(.25,x);let v=0;for(;v++<6;){let[b,E]=this.ends(h),S=Math.hypot(o.nx[E]-o.nx[b],o.nz[E]-o.nz[b]);if(h.s<S)break;h.s-=S,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,i,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,i,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,Hh);if(!n){t.alive=!1;return}let i=e.ways[n.wi],r=i.cum[n.k+1]-i.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(i=>i.alive&&!i.rag&&Math.hypot(i.x-t,i.z-e)<n)}};var Ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Nv=new Es(-1,1,1,-1,0,1),Gh=class extends te{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},Uv=new Gh,vi=class{constructor(t){this._mesh=new Et(Uv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Nv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Va=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pi.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fr=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Wa=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Xa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Va(Ga),this.copyPass.material.blending=Ln,this.clock=new ra}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fr!==void 0&&(o instanceof Fr?n=!0:o instanceof Wa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qa=class extends ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Zd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Os=class s extends ln{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ze(r,o,{type:En});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ze(r,o,{type:En});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Zd;this.highPassUniforms=pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ga;this.copyUniforms=pi.clone(u.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Os.BlurDirectionX=new Mt(1,0);Os.BlurDirectionY=new Mt(0,1);var $d={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ya=class extends ln{constructor(){super();let t=$d;this.uniforms=pi.clone(t.uniforms),this.material=new Qo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bt=s=>document.getElementById(s),Mi={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132,farKm:0},mid:{viewTiles:2,shadows:!0,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288,farKm:5},high:{viewTiles:3,shadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432,farKm:7}},A={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},kr=()=>A.foot.on?A.foot:A.vehicle;window.BDS=A;async function zv(){let s=(a,l)=>{bt("loadbar").style.width=(a*100).toFixed(0)+"%",l&&(bt("loadmsg").textContent=l)};s(.05,"Caricamento della cartografia reale\u2026");let t=0,e=a=>a.then(l=>(t++,s(.05+t/4*.6),l)),[n,i,r,o]=await Promise.all([e(mi("meta","data/meta.js")),e(mi("roads","data/roads.js")),e(mi("height","data/height.js")),e(mi("landcover","data/landcover.js"))]);s(.7,"Costruzione della rete stradale ("+i.ways.length.toLocaleString("it")+" vie OSM)\u2026"),await new Promise(a=>setTimeout(a,20)),A.meta=n,A.proj=new fa(n.proj),A.terrain=new da(n,r,o),A.roads=new ya(i,A.terrain,n),s(.9,"Preparazione del navigatore\u2026"),await new Promise(a=>setTimeout(a,20)),A.router=new La(A.roads),s(1,"Pronto"),bt("loading").classList.add("hidden"),$h()}function Fv(s,t){let e=A.roads,n=e.streets.get(s)||[],i=null;for(let r of n){let o=A.world.comuneAt(r.x,r.z);t&&o!==t||(!i||r.len>i.len)&&(i=r)}return i}var $a={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function Bv(){let s=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(s.get("lat")||t.lat||0),n=+(s.get("lon")||t.lon||0);return e&&n?(A.pickedStart=A.proj.fromLatLon(e,n),"picked"):null}function Ov(){let s=A.meta,t=[];t.push({id:"casa",label:$a.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of s.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=s.comuni.map(n=>n.n).filter(n=>!s.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function $h(){if(bt("menu").classList.remove("hidden"),A.meta.dbgt&&A.meta.dbgt.length&&!bt("dbgtcredit")){let n=document.createElement("div");n.id="dbgtcredit",n.textContent=`Forme e altezze degli edifici${A.meta.height.step<20?" e altimetria di dettaglio":""}: DBGT \u2013 Database Geo-Topografico di Regione Lombardia (${A.meta.dbgt.join(", ")}).`,document.querySelector("#menu .credits").appendChild(n)}let t=bt("cars");t.innerHTML="",Ns.forEach((n,i)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(i===A.carIdx?" sel":"");let o=n.kind==="plane"?`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>apertura ${n.W} m</span><span>decollo ~${Math.round(n.vRot*3.6)} km/h</span>`:`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span>`;r.innerHTML=`<div class="sw" style="background:${n.kind==="plane"?n.stripe:n.color}"></div><b>${n.kind==="plane"?"\u2708 ":""}${n.name}</b><small>${n.desc}</small>
      <div class="spec">${o}</div>`,r.onclick=()=>{A.carIdx=i,[...t.children].forEach(a=>a.classList.toggle("sel",a===r))},t.appendChild(r)});let e=bt("start");e.innerHTML="";for(let n of Ov()){let i=document.createElement("option");i.value=n.id,i.textContent=n.label,e.appendChild(i)}if(A.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}bt("go").onclick=()=>Xv(),bt("pickstart").onclick=()=>{ep(),sp("start")}}function ep(){if(A.renderer)return;let s=bt("game"),t=Mi[bt("quality").value]||Mi.mid;A.settings={...t};let e=new Bo({canvas:s,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=lh,e.toneMapping=wr,e.toneMappingExposure=1.2,A.renderer=e;let n=new ko;A.scene=n,A.camera=new Oe(62,innerWidth/innerHeight,.5,5e3),A.sky=new Sa(n,A.meta.proj.lat0),A.world=new Ea(n,A.meta,A.terrain,A.roads,A.settings),A.traffic=new Pa(A.world),A.world.traffic=A.traffic,n.add(A.traffic.group),A.peds=new Ha(A.world),A.peds.setTarget(t.peds),A.peds.onHit=(r,o,a)=>{a.player&&Yh("ped",o)},n.add(A.peds.group),t.bloom&&(A.composer=new Xa(e),A.composer.addPass(new qa(n,A.camera)),A.bloom=new Os(new Mt(innerWidth,innerHeight),0,.4,.82),A.composer.addPass(A.bloom),A.composer.addPass(new Ya));let i=null;s.addEventListener("mousedown",r=>{i=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{i=null}),addEventListener("mousemove",r=>{!i||A.mapOpen||A.paused||!A.started||(A.orbit.yaw-=(r.clientX-i[0])*.006,A.orbit.pitch=Math.max(-.25,Math.min(1.1,A.orbit.pitch+(r.clientY-i[1])*.004)),A.orbit.idle=0,i=[r.clientX,r.clientY])}),A.maps=new Da(A.world,A.meta),A.input=new Ia,A.audio=new Na,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),A.composer&&A.composer.setSize(innerWidth,innerHeight),A.camera.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.mapOpen&&(A.maps.resizeBig(),A.mapDirty=!0)}),Jv(),Kv(),requestAnimationFrame(op)}function Ka(s){let t=A.roads,e=A.world,n=(i,r,o=!1)=>{let a=t.ways[i],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let m=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,y=t.laneCenter(a,m?1:-1);return{x:l-Math.cos(d)*y,z:c+Math.sin(d)*y,h:d}};if(s==="picked"&&A.pickedStart){let i=t.nearest(A.pickedStart[0],A.pickedStart[1],300,r=>r.drivable&&r.cls<=Gt.SERVICE);if(i)return n(i.wi,(t.ways[i.wi].cum[i.k]+(t.ways[i.wi].cum[i.k+1]-t.ways[i.wi].cum[i.k])*i.t)/t.ways[i.wi].len)}if(s==="casa"){if(Bv()==="picked")return Ka("picked");let i=-1;if(t.ways.forEach((r,o)=>{if(r.name!==$a.street||!r.drivable||r.cls>Gt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===$a.comune&&(i<0||r.len>t.ways[i].len)&&(i=o)}),i>=0)return n(i,$a.frac);s="comune:Giussano"}if(s==="viamilano"){let i=Fv("Via Milano","Giussano");if(i)return n(i.wi,.35,!0);s="comune:Giussano"}if(s.startsWith("comune:")){let i=s.slice(7),r=A.meta.places.find(c=>c.n===i&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=A.maps.comuni.find(u=>u.n===i);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=Gt.RESIDENTIAL&&c.cls>=Gt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function np(s=Ns[A.carIdx],t=null){A.carModel&&A.scene.remove(A.carModel.root),s.kind==="plane"?(A.vehicle=new Ra(s,A.world),A.carModel=Nd(s,{color:t})):(A.vehicle=new Ca(s,A.world),A.carModel=Fd(s,{interior:!0,color:t})),A.scene.add(A.carModel.root),A.lightsOn=!1,bt("helpbar").textContent=s.kind==="plane"?"W/S manetta \xB7 \u2191/\u2193 cabra/picchia \xB7 A/D vira \xB7 Spazio freni a terra \xB7 R riparti in volo \xB7 C visuale \xB7 F scendi (a terra)":"F scendi/sali \xB7 E clacson \xB7 M mappa \xB7 C visuale \xB7 mouse: telecamera \xB7 Esc pausa"}function kv(s){let t=A.input.keys;return{throttle:Math.max(t.has("KeyW")?1:0,s.padThr||0),brake:Math.max(t.has("KeyS")?1:0,s.padBrk||0),pitch:Math.max(-1,Math.min(1,(t.has("ArrowUp")?1:0)-(t.has("ArrowDown")?1:0)-(s.stickY||0))),steer:s.steer,handbrake:s.handbrake}}var Fn=()=>!A.foot.on&&A.vehicle&&A.vehicle.isPlane&&!A.vehicle.onGround,Jd={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},ip=()=>({halfL:A.vehicle.spec.L/2,halfW:A.vehicle.spec.W/2});function Hv(){let s=A.vehicle,t=A.foot;if(s.isPlane&&!s.onGround){Se("Atterra prima di scendere",1200);return}if(Math.abs(s.u)>2.5){Se("Fermati prima di scendere",1200);return}let e=Math.cos(s.h),n=-Math.sin(s.h);t.x=s.x+e*(s.spec.W/2+.75),t.z=s.z+n*(s.spec.W/2+.75),t.h=s.h,t.u=0,t.y=s.y,t.on=!0,(A.camMode===1||A.camMode===2)&&(A.camMode=0),A.orbit.yaw=0,A.camInit=!0,Se("A piedi \u2014 F per salire su un veicolo",1800)}function Gv(){let s=A.foot,t=A.vehicle,e=A.traffic,n=Math.hypot(t.x-s.x,t.z-s.z)-t.spec.W/2,i=e.nearestCar(s.x,s.z,2.6),r=e.nearestParked(s.x,s.z,2.6),o=i?Math.hypot(i.x-s.x,i.z-s.z)-i.box.halfW:1e9,a=r?Math.hypot(r.x-s.x,r.z-s.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){Se("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=A.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:ip(),model:c}),A.carModel=null,e.statics.length>6){let d=e.statics.shift();A.scene.remove(d.model.root)}let u=l===o?e.take(i):e.takeParked(r),h=Jd[u.type]||Jd.car,f=Ns.find(d=>d.id===h[u.colour%h.length]);np(f,"#"+Lh[u.colour%Lh.length].toString(16).padStart(6,"0")),A.vehicle.place(u.x,u.z,u.h),Se(f.name,1500)}s.on=!1,A.orbit.yaw=0,A.camInit=!0}function Vv(s,t){let e=A.foot,n=A.input.keys,i=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*s;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(i?6.2:2.3);e.u+=(o-e.u)*Math.min(1,s*8),e.x+=Math.sin(e.h)*e.u*s,e.z+=Math.cos(e.h)*e.u*s;let a={x:A.vehicle.x,z:A.vehicle.z,h:A.vehicle.h,box:ip()};for(let l=0;l<2;l++){let c=A.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),A.traffic.statics.push(a);let u=A.traffic.resolveCircle(e.x,e.z,.32);A.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=A.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function Yh(s,t,e=s){let n=performance.now();if(A.cool[e]&&n-A.cool[e]<(s==="camera"?2e4:5e3))return;A.cool[e]=n;let i=0,r=0,o="";if(s==="ped")i=870,r=8,o="Hai urtato un pedone!";else if(s==="red")i=167,r=6,o="Passaggio con il rosso";else if(s==="camera"){let a=t;a<=10?(i=42,r=0):a<=40?(i=173,r=3):a<=60?(i=543,r=6):(i=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=bt("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}A.fines+=i,A.licence-=r,Se(`\u{1F6A8} ${o} \u2014 multa \u20AC ${i}${r?`, \u2212${r} punti`:""}`,3200),A.licence<=0&&(A.licence=20,setTimeout(()=>Se("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),bt("licence").textContent=`\u{1FAAA} ${A.licence} punti \xB7 multe \u20AC ${A.fines.toLocaleString("it")}`}function Wv(s,t,e){if(A.foot.on||s.isPlane||!s.surface||!s.surface.road)return;let n=A.roads,i=s.surface.road,r=n.ways[i.wi];if(s.u>3)for(let o of[r.nodes[i.k],r.nodes[i.k+1]]){if(n.ntag[o]!==Kt.SIGNALS||Math.hypot(n.nx[o]-s.x,n.nz[o]-s.z)>4.5)continue;let a=Math.sin(s.h),l=Math.cos(s.h);Cr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&Yh("red",0,"red"+o)}if(t>r.limit+5)for(let o of A.world.cameras)Math.hypot(o.x-s.x,o.z-s.z)<16&&Yh("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function Xv(){A.audio&&A.audio.start(),ep(),A.settings.viewTiles=(Mi[bt("quality").value]||Mi.mid).viewTiles,A.settings.farKm=(Mi[bt("quality").value]||Mi.mid).farKm,A.settings.farKm>0&&!A.world.farIdx&&!A.farLoading&&(A.farLoading=!0,mi("far","data/far.js").then(t=>A.world.initFar(t)).catch(()=>{})),A.traffic.target=+bt("traffic").value,bt("ptraffic").value=bt("traffic").value,A.sky.hours=+bt("tod").value,np();let s=Ka(bt("start").value);A.vehicle.place(s.x,s.z,s.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.traffic.clear();for(let t of A.traffic.statics)A.scene.remove(t.model.root);A.traffic.statics=[],A.foot.on=!1,A.orbit.yaw=0,A.orbit.pitch=0,A.peds.setTarget((Mi[bt("quality").value]||Mi.mid).peds),A.camInit=!0,bt("menu").classList.add("hidden"),bt("hud").classList.remove("hidden"),A.started=!0,A.paused=!1,A.loadingWorld=!0,Se("Caricamento della zona\u2026",1500),A.audio.start()}function qv(){let s=A.vehicle,t=A.roads;if(s.isPlane){s.launch(250,45),A.camInit=!0,Se("Di nuovo in volo a 250 m",1200);return}let e=t.nearest(s.x,s.z,300,a=>a.drivable&&a.cls<=Gt.SERVICE);if(!e)return;let n=t.ways[e.wi],i=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[i],t.nz[r]-t.nz[i]);!n.oneway&&Math.cos(o-s.h)<0&&(o+=Math.PI),s.place(e.px,e.pz,o),Se("Rimesso in strada",1200)}var Ja=0;function Se(s,t=2500){let e=bt("toast");e.textContent=s,e.classList.add("show"),Ja=performance.now()+t}function Or(s){if(!(!A.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(s);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var Yv={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function ks(s){return s>=1e3?(s/1e3).toFixed(s>=1e4?0:1).replace(".",",")+" km":Math.round(s/10)*10+" m"}function Zv(s){let t=kr();if(Fn()&&A.dest){let l=A.dest[0]-t.x,c=A.dest[1]-t.z,u=Math.hypot(l,c),h=Math.atan2(l,c)-t.h;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;bt("nav").classList.remove("hidden"),bt("navarrow").textContent=Math.abs(h)<.3?"\u2B06":Math.abs(h)>2.6?"\u2B07":h>0?h>1.2?"\u2B05":"\u2196":h<-1.2?"\u27A1":"\u2197",bt("navarrow").style.fontSize="44px",bt("navd").textContent=ks(u),bt("navt").textContent="Destinazione in linea d'aria",bt("naveta").textContent=`circa ${Math.max(1,Math.round(u/Math.max(20,t.u)/60))} min alla velocit\xE0 attuale`;return}if(!A.route){bt("nav").classList.add("hidden");return}let e=A.route,n=kd(e,t.x,t.z);if(n.off>40){if(A.offT=(A.offT||0)+s,A.offT>2.5){A.offT=0,Jh(!0);return}}else A.offT=0;let i=e.length-n.s;if(i<25){Se("\u{1F3C1} Sei arrivato a destinazione!",4e3),Or("Sei arrivato a destinazione"),A.route=null,A.dest=null,bt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);bt("nav").classList.remove("hidden"),bt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":Yv[r.type]||"\u2B06",bt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",bt("navd").textContent=ks(o),bt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));bt("naveta").textContent=`Destinazione: ${ks(i)} \xB7 circa ${Math.max(1,Math.round(i/a/60))} min`,A.lastStep!==r&&(A.lastStep=r,A.announced=0),A.announced===0&&o<400&&o>120&&(A.announced=1,Or(`Tra ${ks(o).replace(","," virgola ")}, ${r.text}`)),A.announced<=1&&o<70&&(A.announced=2,Or(r.text))}function Jh(s){if(!A.dest)return;if(Fn()){A.route=null,s||Se(`Destinazione impostata: ${ks(Math.hypot(A.dest[0]-A.vehicle.x,A.dest[1]-A.vehicle.z))} in linea d'aria`);return}let t=kr(),e=A.router.route(t.x,t.z,t.h,A.dest[0],A.dest[1]);if(A.route=e,!e){Se("Nessun percorso trovato verso la destinazione");return}A.lastStep=null,s?Or("Ricalcolo del percorso"):(Se(`Percorso calcolato: ${ks(e.length)}`),Or("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var Vh=0,Wh=0,Xh=performance.now();function $v(s){let t=kr(),e=A.roads,n=A.vehicle;Vh+=s,Wh++;let i=performance.now();if(i-Xh>1e3&&(bt("fps").textContent=Math.round(Wh*1e3/(i-Xh))+" fps",Wh=0,Xh=i),Ja&&performance.now()>Ja&&(bt("toast").classList.remove("show"),Ja=0),Vh<.1)return;Vh=0;let r=Math.abs(t.u*3.6);bt("spd").textContent=Math.round(r),!A.foot.on&&n.isPlane?(bt("gear").textContent=n.crashed>0?"INCIDENTE":n.onGround?"A TERRA":n.stall?"STALLO":"IN VOLO",bt("gear").style.fontSize="14px",bt("gear").style.color=n.stall&&!n.onGround?"var(--bad)":"",bt("rpmbar").style.width=Math.round(n.lever*100)+"%"):(bt("gear").textContent=A.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,bt("gear").style.fontSize=A.foot.on?"14px":"",bt("gear").style.color="",bt("rpmbar").style.width=(A.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%");let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let y=e.nearest(t.x,t.z,25,p=>p.drivable);y&&(a=y.wi)}let l=A.world.comuneAt(t.x,t.z);if(Fn())bt("roadname").textContent=`In volo \xB7 ${Math.round(n.agl)} m dal suolo`,bt("limit").classList.add("hidden"),A.curLimit=0;else if(a>=0){let y=e.ways[a];bt("roadname").textContent=e.displayName(y),bt("limitv").textContent=y.limit,bt("limit").classList.toggle("hidden",A.foot.on),bt("limitest").textContent=y.limitMapped?"":"indicativo",bt("limit").classList.toggle("over",r>y.limit*1.1+3),A.curLimit=y.limit}else bt("roadname").textContent="Fuori strada",bt("limit").classList.add("hidden"),A.curLimit=0;let c="",u=1e9;for(let y of A.meta.places){if(y.t==="town"||y.t==="city"||y.t==="locality")continue;let p=Math.hypot(y.x-t.x,y.z-t.z);p<u&&p<700&&(u=p,c=y.n)}bt("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=A.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,m=["N","NE","E","SE","S","SO","O","NO"];bt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${m[Math.round(d/45)%8]}`,bt("alt").textContent=!A.foot.on&&n.isPlane?`manetta ${Math.round(n.lever*100)}% \xB7 ${n.vy>=0?"\u2191":"\u2193"} ${Math.abs(n.vy).toFixed(1)} m/s`:"",bt("clock").textContent="\u{1F552} "+A.sky.clock(),bt("tspeed").textContent=A.sky.speed===0?"\u23F8":A.sky.speed===1?"1\xD7":A.sky.speed+"\xD7",!A.foot.on&&n.isPlane&&A.camMode===1?Ud(A.carModel.dashCanvas,A.carModel.dashTex,r,n.agl,n.vy,n.lever,n.stall&&!n.onGround):!A.foot.on&&A.carModel.dashCanvas&&A.camMode===1&&Bd(A.carModel.dashCanvas,A.carModel.dashTex,r,n.rpm,n.spec.rpmMax,bt("gear").textContent,A.curLimit)}function sp(s){A.mapOpen=!0,A.mapMode=s||"dest",bt("mapview").classList.remove("hidden"),A.maps.resizeBig();let t=A.vehicle;if(A.started&&t)A.maps.cx=t.x,A.maps.cz=t.z,A.maps.zoom=.35;else{let e=Ka("casa");A.maps.cx=e.x,A.maps.cz=e.z,A.maps.zoom=.12}bt("setdest").classList.toggle("hidden",!A.started),bt("teleport").textContent=A.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",bt("mapinfo").textContent=A.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",A.mapDirty=!0,bt("search").value="",bt("results").innerHTML=""}function Br(){A.mapOpen=!1,bt("mapview").classList.add("hidden"),A.started||$h()}function Kd(s,t,e){A.mapSel=[s,t];let n=A.world.comuneAt(s,t),i=A.roads.nearest(s,t,150,o=>o.drivable),r=e||(i?A.roads.displayName(A.roads.ways[i.wi]):"Punto selezionato");A.mapSelLabel=r+(n?", "+n:""),bt("mapinfo").innerHTML=`<b>${A.mapSelLabel}</b><br>${A.proj.toLatLon(s,t).map(o=>o.toFixed(5)).join(", ")}`,A.mapDirty=!0,A.started&&A.mapMode==="dest"&&rp()}function rp(){A.mapSel&&(A.dest=A.mapSel.slice(),Jh(!1),A.mapDirty=!0)}function Jv(){let s=bt("bigmap"),t=null,e=!1;s.addEventListener("mousedown",i=>{t=[i.clientX,i.clientY,A.maps.cx,A.maps.cz],e=!1}),addEventListener("mousemove",i=>{if(!t||!A.mapOpen)return;let r=i.clientX-t[0],o=i.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),A.maps.cx=t[2]-r/A.maps.zoom,A.maps.cz=t[3]-o/A.maps.zoom,A.mapDirty=!0}),addEventListener("mouseup",i=>{if(t&&!e&&A.mapOpen&&i.target===s){let[r,o]=A.maps.toWorld(i.clientX,i.clientY);Kd(r,o)}t=null}),s.addEventListener("wheel",i=>{i.preventDefault();let[r,o]=A.maps.toWorld(i.clientX,i.clientY),a=Math.exp(-i.deltaY*.0015);A.maps.zoom=Math.max(.03,Math.min(6,A.maps.zoom*a));let[l,c]=A.maps.toWorld(i.clientX,i.clientY);A.maps.cx+=r-l,A.maps.cz+=o-c,A.mapDirty=!0},{passive:!1}),bt("closemap").onclick=Br,bt("setdest").onclick=()=>{rp(),Br()},bt("cleardest").onclick=()=>{A.route=null,A.dest=null,A.mapDirty=!0},bt("teleport").onclick=()=>{if(!A.mapSel)return;if(!A.started){A.pickedStart=A.mapSel.slice(),Br(),bt("pickinfo").textContent="Partenza: "+A.mapSelLabel;return}A.pickedStart=A.mapSel.slice();let i=Ka("picked");A.vehicle.place(i.x,i.z,i.h),A.vehicle.isPlane&&(A.vehicle.pendingLaunch=!0),A.foot.on=!1,A.traffic.clear(),A.camInit=!0,A.loadingWorld=!0,Br(),A.dest&&Jh(!0)};let n=bt("search");n.addEventListener("input",()=>{let i=n.value.trim().toLowerCase(),r=[];if(i.length>=2){for(let a of A.maps.comuni)a.n.toLowerCase().includes(i)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of A.meta.places)a.n.toLowerCase().includes(i)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of A.meta.landmarks)a[3].toLowerCase().includes(i)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(A.world.comuneAt(a[1],a[2])?" \xB7 "+A.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of A.roads.streets){if(!a.toLowerCase().includes(i))continue;let c=new Map;for(let u of l){let h=A.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}bt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{A.maps.cx=o.x,A.maps.cz=o.z,A.maps.zoom=Math.max(A.maps.zoom,.8),Kd(o.x,o.z,o.n)},bt("results").appendChild(a)}})}function Kv(){bt("resume").onclick=()=>Zh(!1),bt("tomenu").onclick=()=>{Zh(!1),A.started=!1,bt("hud").classList.add("hidden"),$h()},bt("ptraffic").onchange=n=>{A.traffic.target=+n.target.value,A.traffic.target||A.traffic.clear()},bt("ptime").onchange=n=>{A.sky.speed=+n.target.value},bt("pvoice").onchange=n=>{A.voice=n.target.value==="1"},bt("paudio").onchange=n=>{A.audio.muted=n.target.value==="0"};let s=A.input.wheelCfg,t=(n,i)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=i};t(bt("axsteer"),s.steerAxis),t(bt("axthr"),s.throttleAxis),t(bt("axbrk"),s.brakeAxis),bt("wheelon").checked=s.enabled,bt("axinv").checked=s.invertPedals;let e=()=>{s.enabled=bt("wheelon").checked,s.steerAxis=+bt("axsteer").value,s.throttleAxis=+bt("axthr").value,s.brakeAxis=+bt("axbrk").value,s.invertPedals=bt("axinv").checked,A.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])bt(n).onchange=e}function Zh(s){A.paused=s,bt("pause").classList.toggle("hidden",!s),s&&(bt("ptime").value=String(A.sky.speed))}var Za=new H,jd=new H,jv=new H,Qv=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function tM(s,t){let e=A.vehicle,n=A.camera,i=A.carModel,r=A.foot,o=A.orbit,a=r.on?0:A.camMode;if(A.debugCam){n.position.set(...A.debugCam.pos),n.lookAt(...A.debugCam.look),n.near=1,n.updateProjectionMatrix(),i.interior.visible=!1;for(let l of i.exterior)l.visible=!0;return}i.interior.visible=a===1;for(let l of i.exterior)l.visible=a!==1;if(document.body.classList.toggle("cockpit",a===1),o.idle+=s,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-s*2.5),o.pitch*=Math.exp(-s*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*(e.isPlane?1.1:.75),u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),m=Math.sin(o.pitch),y=jv.set(l.x-Math.sin(f)*c*d,l.y+u+c*m,l.z-Math.cos(f)*c*d),p=A.roads.surfaceAt(y.x,y.z,l.y+3).h;y.y=Math.max(y.y,p+.8),A.camInit&&(Za.copy(y),A.camInit=!1),Za.lerp(y,1-Math.exp(-s*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(Za);let g=r.on?.5:4;jd.set(l.x+Math.sin(f)*g,l.y+h,l.z+Math.cos(f)*g),n.lookAt(jd),n.near=.5}else{let l=a===1?i.root.userData.eye.clone():new H(0,e.spec.H*.82+.05,e.spec.L*.18);i.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(i.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new H(Math.sin(c)*u,(a===1?e.isPlane?-3.5:-3.2:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?i.root.userData.eye:new H(0,e.spec.H*.82,0)).applyMatrix4(i.root.matrixWorld);n.lookAt(h),n.near=.08,Za.copy(n.position)}n.updateProjectionMatrix()}var Qd=performance.now(),qh=0;function op(s){requestAnimationFrame(op);let t=Math.min(.05,(s-Qd)/1e3);if(Qd=s,!A.renderer)return;if(A.mapOpen){A.input.read(t),(A.input.consume("KeyM")||A.input.consume("Escape"))&&Br(),A.mapDirty&&(A.maps.drawBig(A.started?kr():null,A.route,A.dest||(A.mapMode==="start"?null:A.mapSel)),A.mapDirty=!1),A.mapSel&&A.mapMode==="start"&&A.started;return}if(!A.started)return;let e=A.input;if(e.consume("Escape")&&Zh(!A.paused),A.paused){let M=e.axesSnapshot();bt("axes").textContent=M?`${M.id}: `+M.axes.map((x,v)=>`${v}:${x.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let n=e.read(t);if((e.consume("KeyC")||n.buttons.has(3))&&(A.camMode=(A.camMode+1)%4,Se(Qv[A.camMode],1e3)),e.consume("KeyM")||n.buttons.has(8)){sp("dest");return}if(e.consume("KeyN")&&bt("mini-wrap").classList.toggle("hidden"),(e.consume("KeyH")||n.buttons.has(2))&&(A.lightsOn=!A.lightsOn,Se(A.lightsOn?"Fari accesi":"Fari spenti",900)),e.consume("KeyR")&&!A.foot.on&&qv(),e.consume("KeyK")&&(A.world.labelsOn=!A.world.labelsOn,Se(A.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),e.consume("KeyT")){let M=[30,300,0,1];A.sky.speed=M[(M.indexOf(A.sky.speed)+1)%M.length],Se("Velocit\xE0 del tempo: "+(A.sky.speed?A.sky.speed+"\xD7":"ferma"),1e3)}(e.consume("Equal")||e.consume("NumpadAdd"))&&(A.sky.hours=(A.sky.hours+1)%24),(e.consume("Minus")||e.consume("NumpadSubtract"))&&(A.sky.hours=(A.sky.hours+23)%24),(e.consume("KeyF")||e.consume("Enter")||n.buttons.has(1))&&(A.foot.on?Gv():Hv());let i=!A.foot.on&&(e.keys.has("KeyE")||!!n.hornPad);A.audio.horn(i);let r=A.vehicle,o=A.foot,a=kr();if(A.world.update(a.x,a.z),A.world.pump(A.loadingWorld?40:Fn()?12:7),A.settings.farKm>0&&(A.world.updateFar(a.x,a.z,Fn()?A.settings.farKm*1e3:Math.min(A.settings.farKm*1e3,3200)),A.world.pumpFar(A.loadingWorld?12:3)),A.loadingWorld)if(A.world.ready(r.x,r.z)){if(A.loadingWorld=!1,r.pendingLaunch)r.pendingLaunch=!1,r.launch(250,45),A.camInit=!0,Se("\u2708 In volo sopra la Brianza \u2014 W/S manetta, \u2191/\u2193 cabra/picchia, A/D vira",4500);else if(!r.isPlane||r.onGround){let M=A.roads.surfaceAt(r.x,r.z,1e9);r.y=M.h}}else n.throttle=0,n.brake=1;A.loadingWorld||(o.on?(r.update(t,{throttle:0,brake:1,steer:0,handbrake:1,pitch:0}),Vv(t,n)):r.update(t,r.isPlane?kv(n):n)),r.isPlane&&(r.crashed>0&&!r.crashShown&&(r.crashShown=!0,Se("\u{1F4A5} "+r.crashMsg+" Si riparte in volo\u2026",2200)),r.relaunched&&(r.relaunched=!1,r.crashShown=!1,A.camInit=!0),r.touchdown&&(r.touchdown=!1,Se(r.impact>.4?"Atterraggio un po' brusco":"\u{1F6EC} Atterraggio riuscito",1800),r.impact=0),r.outside&&(r.outside=0,Se("Fine della zona: si torna indietro",1500)));let l=Math.sin(r.h),c=Math.cos(r.h),u=Math.cos(r.h),h=-Math.sin(r.h),f=Fn()?[]:[{x:r.x,z:r.z,h:r.h,vx:l*r.u+u*r.v,vz:c*r.u+h*r.v,halfL:r.spec.L/2,halfW:r.spec.W/2,player:!0}];for(let M of A.traffic.cars)Math.abs(M.x-a.x)<90&&Math.abs(M.z-a.z)<90&&f.push({x:M.x,z:M.z,h:M.h,vx:Math.sin(M.h)*M.speed,vz:Math.cos(M.h)*M.speed,halfL:M.box.halfL,halfW:M.box.halfW});let d=A.loadingWorld?[]:A.peds.update(t,a.x,a.z,f,i);o.on&&d.push([o.x,o.z]),A.traffic.obstacles=d,A.traffic.update(t,{x:r.x,z:r.z,h:r.h,u:r.u,wi:r.surface&&r.surface.road?r.surface.road.wi:-1,active:!Fn()},s/1e3);let m=Fn()?[]:[{x:r.x,z:r.z}];for(let M of A.traffic.cars)Math.abs(M.x-a.x)<300&&Math.abs(M.z-a.z)<300&&m.push(M);A.world.gates.update(t,m),A.peds.drawPlayer(o.on,o.x,o.y,o.z,o.h,o.gait,o.u,t);let y=A.carModel;y.root.position.set(r.x,r.y,r.z),y.root.rotation.set(-(r.pitch+r.dynPitch),r.h,r.roll+r.dynRoll,"YXZ");for(let M of y.wheels)M.pivot.rotation.x=r.wheelSpinAngle||0,M.front&&(M.pivot.rotation.y=r.steer);y.prop&&(y.prop.rotation.z=r.propAngle||0),y.steeringWheel&&(y.steeringWheel.rotation.z=-r.steer*7);let p=!o.on&&(A.lightsOn||A.sky.night>.55);y.headlight&&(y.headlight.intensity=p?70:0),y.tailGlow&&(y.tailGlow.intensity=r.brake>.05&&!o.on?2.2:p?.6:0),tp.set(a.x,Fn()?r.y-r.agl:a.y,a.z),A.sky.update(t,tp);let g=Fn()?1+Math.min(1.9,r.agl/130):1;A.scene.fog.near*=g,A.scene.fog.far*=g,A.camera.far=Math.max(5e3,A.scene.fog.far*1.1),A.world.buildings.setNight(A.sky.night),A.world.signage.update(s/1e3,A.sky.night),A.traffic.setNight(A.sky.night),tM(t,e.keys.has("KeyV")),A.world.updateLabels(A.camera),$v(t),Zv(t),Wv(r,Math.abs(r.u)*3.6,s),qh+=t,qh>.05&&!bt("mini-wrap").classList.contains("hidden")&&(qh=0,A.maps.drawMini(a,A.route,A.sky.night>.5)),o.on?A.audio.update(800,0,0,0):A.audio.update(r.rpm,r.throttle,Math.abs(r.u)*3.6,r.slip),r.impact>.25&&!o.on&&!r.isPlane&&Se("\u{1F4A5} Urto!",700),r.impact=0,A.composer&&A.sky.night>.2?(A.bloom.strength=A.sky.night*.55,A.composer.render()):A.renderer.render(A.scene,A.camera)}var tp=new H;zv().catch(s=>{console.error(s),bt("loadmsg").textContent="Errore: "+s.message+" \u2014 apri il gioco con un browser recente (Chrome, Edge, Firefox)."});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
