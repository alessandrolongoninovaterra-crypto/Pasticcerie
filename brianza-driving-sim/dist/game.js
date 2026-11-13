(()=>{var mh="170";var Ap=0,xu=1,Rp=2;var ga=1,gh=2,$n=3,di=0,We=1,re=2,Un=0,ds=1,pi=2,yu=3,vu=4,Cp=5,Ii=100,Ip=101,Pp=102,Lp=103,Dp=104,Np=200,Up=201,zp=202,Fp=203,Gl=204,Vl=205,Bp=206,Op=207,kp=208,Hp=209,Gp=210,Vp=211,Wp=212,Xp=213,qp=214,Wl=0,Xl=1,ql=2,xs=3,Yl=4,Zl=5,$l=6,jl=7,xa=0,Yp=1,Zp=2,fi=0,xh=1,yh=2,vh=3,Cr=4,$p=5,Mh=6,_h=7;var Uf=300,ys=301,vs=302,Kl=303,Jl=304,ya=306,mi=1e3,bn=1001,Ql=1002,an=1003,jp=1004;var Qr=1005;var Dn=1006,al=1007;var Li=1008;var Qn=1009,zf=1010,Ff=1011,dr=1012,bh=1013,Di=1014,Nn=1015,Tn=1016,wh=1017,Eh=1018,Ms=1020,Bf=35902,Of=1021,kf=1022,wn=1023,Hf=1024,Gf=1025,ps=1026,_s=1027,Sh=1028,Th=1029,Vf=1030,Ah=1031;var Rh=1033,Do=33776,No=33777,Uo=33778,zo=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,xc=37818,yc=37819,vc=37820,Mc=37821,Fo=36492,_c=36494,bc=36495,Wf=36283,wc=36284,Ec=36285,Sc=36286;var Bo=2300,Tc=2301,ll=2302,Mu=2400,_u=2401,bu=2402;var Kp=3200,Ch=3201;var va=0,Jp=1,hi="",ve="srgb",Ps="srgb-linear",Ma="linear",ge="srgb";var qi=7680;var wu=519,Qp=512,t0=513,e0=514,Xf=515,n0=516,i0=517,s0=518,r0=519,Ac=35044,qf=35048;var Eu="300 es",Kn=2e3,Oo=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,lr=Math.PI/180,bs=180/Math.PI;function zn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Ih(s,t){return(s%t+t)%t}function o0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function a0(s,t,e){return s!==t?(e-s)/(t-s):0}function cr(s,t,e){return(1-e)*s+e*t}function l0(s,t,e,n){return cr(s,t,1-Math.exp(-e*n))}function c0(s,t=1){return t-Math.abs(Ih(s,t*2)-t)}function h0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function u0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function f0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function d0(s,t){return s+Math.random()*(t-s)}function p0(s){return s*(.5-Math.random())}function m0(s){s!==void 0&&(Su=s);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g0(s){return s*lr}function x0(s){return s*bs}function y0(s){return(s&s-1)===0&&s!==0}function v0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function M0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Yf={DEG2RAD:lr,RAD2DEG:bs,generateUUID:zn,clamp:ze,euclideanModulo:Ih,mapLinear:o0,inverseLerp:a0,lerp:cr,damp:l0,pingpong:c0,smoothstep:h0,smootherstep:u0,randInt:f0,randFloat:d0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:x0,isPowerOfTwo:y0,ceilPowerOfTwo:v0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:_0,normalize:xe,denormalize:_n},St=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],m=i[0],g=i[3],x=i[6],M=i[1],v=i[4],y=i[7],_=i[2],w=i[5],S=i[8];return r[0]=o*m+a*M+l*_,r[3]=o*g+a*v+l*w,r[6]=o*x+a*y+l*S,r[1]=c*m+u*M+h*_,r[4]=c*g+u*v+h*w,r[7]=c*x+u*y+h*S,r[2]=f*m+d*M+p*_,r[5]=f*g+d*v+p*w,r[8]=f*x+d*y+p*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=e*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return t[0]=h*m,t[1]=(i*c-u*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(u*e-i*l)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new ie;function Zf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function b0(){let s=ko("canvas");return s.style.display="block",s}var Tu={};function or(s){s in Tu||(Tu[s]=!0,console.warn(s))}function w0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function E0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function S0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Au=[.64,.33,.3,.6,.15,.06],Ru=[.2126,.7152,.0722],Cu=[.3127,.329],Iu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ps]:{primaries:Au,whitePoint:Cu,transfer:Ma,toXYZ:Iu,fromXYZ:Pu,luminanceCoefficients:Ru,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:Au,whitePoint:Cu,transfer:ge,toXYZ:Iu,fromXYZ:Pu,luminanceCoefficients:Ru,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var Yi,Rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=ko("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ko("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},T0=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hl(i[o].image)):r.push(hl(i[o]))}else r=hl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function hl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A0=0,tn=class s extends gi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=bn,i=bn,r=Dn,o=Li,a=wn,l=Qn,c=s.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=zn(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mi:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mi:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Uf;tn.DEFAULT_ANISOTROPY=1;var ye=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],m=l[2],g=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,_=(x+1)/2,w=(u+f)/4,S=(h+m)/4,A=(p+g)/4;return v>y&&v>_?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=S/n):y>_?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=A/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=S/r,i=A/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-m)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Go=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(h!==m||l!==f||c!==d||u!==p){let g=1-a,x=l*f+c*d+u*p+h*m,M=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let _=Math.sqrt(v),w=Math.atan2(_,x*M);g=Math.sin(g*w)/_,a=Math.sin(a*w)/_}let y=a*M;if(l=l*g+f*y,c=c*g+d*y,u=u*g+p*y,h=h*g+m*y,g===1-a){let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new H,Lu=new Ie,ti=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),eo.subVectors(this.max,$s),Zi.subVectors(t.a,$s),$i.subVectors(t.b,$s),ji.subVectors(t.c,$s),si.subVectors($i,Zi),ri.subVectors(ji,$i),wi.subVectors(Zi,ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-wi.z,wi.y,si.z,0,-si.x,ri.z,0,-ri.x,wi.z,0,-wi.x,-si.y,si.x,0,-ri.y,ri.x,0,-wi.y,wi.x,0];return!fl(e,Zi,$i,ji,eo)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Zi,$i,ji,eo))?!1:(no.crossVectors(si,ri),e=[no.x,no.y,no.z],fl(e,Zi,$i,ji,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,to=new ti,Zi=new H,$i=new H,ji=new H,si=new H,ri=new H,wi=new H,$s=new H,eo=new H,no=new H,Ei=new H;function fl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);let a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var R0=new ti,js=new H,dl=new H,ei=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):R0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(dl)),this.expandByPoint(js.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new H,pl=new H,io=new H,oi=new H,ml=new H,so=new H,gl=new H,pr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=oi.dot(this.direction),l=-oi.dot(io),c=oi.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pl).addScaledVector(io,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){ml.subVectors(e,t),so.subVectors(n,t),gl.crossVectors(ml,so);let o=this.direction.dot(gl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let l=a*this.direction.dot(so.crossVectors(oi,so));if(l<0)return null;let c=a*this.direction.dot(ml.cross(oi));if(c<0||l+c>o)return null;let u=-a*oi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,p,m,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,p,m,g)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,p,m,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=p,x[11]=m,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,m=c*h;e[0]=f+m*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,m=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-m*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(C0,t,I0)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ai.crossVectors(n,rn),ai.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ai.crossVectors(n,rn)),ai.normalize(),ro.crossVectors(rn,ai),i[0]=ai.x,i[4]=ro.x,i[8]=rn.x,i[1]=ai.y,i[5]=ro.y,i[9]=rn.y,i[2]=ai.z,i[6]=ro.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],m=n[6],g=n[10],x=n[14],M=n[3],v=n[7],y=n[11],_=n[15],w=i[0],S=i[4],A=i[8],b=i[12],E=i[1],R=i[5],L=i[9],N=i[13],D=i[2],O=i[6],z=i[10],q=i[14],k=i[3],Q=i[7],$=i[11],yt=i[15];return r[0]=o*w+a*E+l*D+c*k,r[4]=o*S+a*R+l*O+c*Q,r[8]=o*A+a*L+l*z+c*$,r[12]=o*b+a*N+l*q+c*yt,r[1]=u*w+h*E+f*D+d*k,r[5]=u*S+h*R+f*O+d*Q,r[9]=u*A+h*L+f*z+d*$,r[13]=u*b+h*N+f*q+d*yt,r[2]=p*w+m*E+g*D+x*k,r[6]=p*S+m*R+g*O+x*Q,r[10]=p*A+m*L+g*z+x*$,r[14]=p*b+m*N+g*q+x*yt,r[3]=M*w+v*E+y*D+_*k,r[7]=M*S+v*R+y*O+_*Q,r[11]=M*A+v*L+y*z+_*$,r[15]=M*b+v*N+y*q+_*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],m=t[7],g=t[11],x=t[15];return p*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+m*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+g*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+x*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],x=t[15],M=h*g*c-m*f*c+m*l*d-a*g*d-h*l*x+a*f*x,v=p*f*c-u*g*c-p*l*d+o*g*d+u*l*x-o*f*x,y=u*m*c-p*h*c+p*a*d-o*m*d-u*a*x+o*h*x,_=p*h*l-u*m*l-p*a*f+o*m*f+u*a*g-o*h*g,w=e*M+n*v+i*y+r*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return t[0]=M*S,t[1]=(m*f*r-h*g*r-m*i*d+n*g*d+h*i*x-n*f*x)*S,t[2]=(a*g*r-m*l*r+m*i*c-n*g*c-a*i*x+n*l*x)*S,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=v*S,t[5]=(u*g*r-p*f*r+p*i*d-e*g*d-u*i*x+e*f*x)*S,t[6]=(p*l*r-o*g*r-p*i*c+e*g*c+o*i*x-e*l*x)*S,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=y*S,t[9]=(p*h*r-u*m*r-p*n*d+e*m*d+u*n*x-e*h*x)*S,t[10]=(o*m*r-p*a*r+p*n*c-e*m*c-o*n*x+e*a*x)*S,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*S,t[12]=_*S,t[13]=(u*m*i-p*h*i+p*n*f-e*m*f-u*n*g+e*h*g)*S,t[14]=(p*a*i-o*m*i-p*n*l+e*m*l+o*n*g-e*a*g)*S,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,m=o*u,g=o*h,x=a*h,M=l*c,v=l*u,y=l*h,_=n.x,w=n.y,S=n.z;return i[0]=(1-(m+x))*_,i[1]=(d+y)*_,i[2]=(p-v)*_,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+x))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(p+v)*S,i[9]=(g-M)*S,i[10]=(1-(f+m))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ki.set(i[0],i[1],i[2]).length(),o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);let c=1/r,u=1/o,h=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===Kn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Oo)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Kn){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u,p,m;if(a===Kn)p=(o+r)*h,m=-2*h;else if(a===Oo)p=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new H,vn=new Kt,C0=new H(0,0,0),I0=new H(1,1,1),ai=new H,ro=new H,rn=new H,Du=new Kt,Nu=new Ie,je=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};je.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},P0=0,Uu=new H,Ji=new Ie,qn=new Kt,oo=new H,Ks=new H,L0=new H,D0=new Ie,zu=new H(1,0,0),Fu=new H(0,1,0),Bu=new H(0,0,1),Ou={type:"added"},N0={type:"removed"},Qi={type:"childadded",child:null},xl={type:"childremoved",child:null},Ne=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new je,n=new Ie,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ie}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ks,oo,this.up):qn.lookAt(oo,Ks,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(qn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ne.DEFAULT_UP=new H(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new H,Yn=new H,yl=new H,Zn=new H,ts=new H,es=new H,ku=new H,vl=new H,Ml=new H,_l=new H,bl=new ye,wl=new ye,El=new ye,ui=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),Yn.subVectors(n,e),yl.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Yn),l=Mn.dot(yl),c=Yn.dot(Yn),u=Yn.dot(yl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return bl.setScalar(0),wl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(wl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Yn.subVectors(t,e),Mn.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Mn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ts.subVectors(i,n),es.subVectors(r,n),vl.subVectors(t,n);let l=ts.dot(vl),c=es.dot(vl);if(l<=0&&c<=0)return e.copy(n);Ml.subVectors(t,i);let u=ts.dot(Ml),h=es.dot(Ml);if(u>=0&&h<=u)return e.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ts,o);_l.subVectors(t,r);let d=ts.dot(_l),p=es.dot(_l);if(p>=0&&d<=p)return e.copy(r);let m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(es,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return ku.subVectors(r,i),a=(h-u)/(h-u+(d-p)),e.copy(i).addScaledVector(ku,a);let x=1/(g+m+f);return o=m*x,a=f*x,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Sl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Ih(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=$f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ze(Ve.r*255,0,255))*65536+Math.round(ze(Ve.g*255,0,255))*256+Math.round(ze(Ve.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ve){le.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(ao);let n=cr(li.h,ao.h,e),i=cr(li.s,ao.s,e),r=cr(li.l,ao.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Lt;Lt.NAMES=$f;var U0=0,fn=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=zn(),this.name="",this.blending=ds,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new H,lo=new St,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}};var ws=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Es=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},z0=0,un=new Kt,Tl=new Ne,ns=new H,on=new ti,Js=new ti,Oe=new H,ee=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?Es:ws)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(on.min,Js.min),on.expandByPoint(Oe),Oe.addVectors(on.max,Js.max),on.expandByPoint(Oe)):(on.expandByPoint(Js.min),on.expandByPoint(Js.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),Oe.add(ns)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new H,l[A]=new H;let c=new H,u=new H,h=new H,f=new St,d=new St,p=new St,m=new H,g=new H;function x(A,b,E){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),a[A].add(m),a[b].add(m),a[E].add(m),l[A].add(g),l[b].add(g),l[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,b=M.length;A<b;++A){let E=M[A],R=E.start,L=E.count;for(let N=R,D=R+L;N<D;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new H,y=new H,_=new H,w=new H;function S(A){_.fromBufferAttribute(i,A),w.copy(_);let b=a[A];v.copy(b),v.sub(_.multiplyScalar(_.dot(b))).normalize(),y.crossVectors(w,b);let R=y.dot(l[A])<0?-1:1;o.setXYZW(A,v.x,v.y,v.z,R)}for(let A=0,b=M.length;A<b;++A){let E=M[A],R=E.start,L=E.count;for(let N=R,D=R+L;N<D;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),m=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let x=0;x<u;x++)f[p++]=c[d++]}return new ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hu=new Kt,Si=new pr,co=new ei,Gu=new H,ho=new H,uo=new H,fo=new H,Al=new H,po=new H,Vu=new H,mo=new H,Rt=class extends Ne{constructor(t=new ee,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Al.fromBufferAttribute(h,t),o?po.addScaledVector(Al,u):po.addScaledVector(Al.sub(e),u))}e.add(po)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(co.containsPoint(Si.origin)===!1&&(Si.intersectSphere(co,Gu)===null||Si.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let g=f[p],x=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,_=v;y<_;y+=3){let w=a.getX(y),S=a.getX(y+1),A=a.getX(y+2);i=go(this,x,t,n,c,u,h,w,S,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=p,x=m;g<x;g+=3){let M=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=go(this,o,t,n,c,u,h,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let g=f[p],x=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,_=v;y<_;y+=3){let w=y,S=y+1,A=y+2;i=go(this,x,t,n,c,u,h,w,S,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=p,x=m;g<x;g+=3){let M=g,v=g+1,y=g+2;i=go(this,o,t,n,c,u,h,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function F0(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===di,a),l===null)return null;mo.copy(a),mo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:s}}function go(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ho),s.getVertexPosition(l,uo),s.getVertexPosition(c,fo);let u=F0(s,t,e,n,ho,uo,fo,Vu);if(u){let h=new H;ui.getBarycoord(Vu,ho,uo,fo,h),i&&(u.uv=ui.getInterpolatedAttribute(i,a,l,c,h,new St)),r&&(u.uv1=ui.getInterpolatedAttribute(r,a,l,c,h,new St)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ui.getNormal(ho,uo,fo,f.normal),u.face=f,u.barycoord=h}return u}var Ot=class s extends ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function p(m,g,x,M,v,y,_,w,S,A,b){let E=y/S,R=_/A,L=y/2,N=_/2,D=w/2,O=S+1,z=A+1,q=0,k=0,Q=new H;for(let $=0;$<z;$++){let yt=$*R-N;for(let _t=0;_t<O;_t++){let Dt=_t*E-L;Q[m]=Dt*M,Q[g]=yt*v,Q[x]=D,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[x]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(_t/S),h.push(1-$/A),q+=1}}for(let $=0;$<A;$++)for(let yt=0;yt<S;yt++){let _t=f+yt+O*$,Dt=f+yt+O*($+1),it=f+(yt+1)+O*($+1),j=f+(yt+1)+O*$;l.push(_t,Dt,j),l.push(Dt,it,j),k+=6}a.addGroup(d,k,b),d+=k,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let n=Ss(s[e]);for(let i in n)t[i]=n[i]}return t}function B0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var yi={clone:Ss,merge:Ze},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=B0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wo=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new H,Wu=new St,Xu=new St,He=class extends Wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,Pc=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(is,ss,t,e);i.layers=this.layers,this.add(i);let r=new He(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new He(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new He(is,ss,t,e);a.layers=this.layers,this.add(a);let l=new He(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new He(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lc=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ot(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Un});r.uniforms.tEquirect.value=e;let o=new Rt(i,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Dn),new Pc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Rl=new H,H0=new H,G0=new ie,jn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Rl.subVectors(n,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||G0.getNormalMatrix(t),i=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new ei,xo=new H,mr=class{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,o=new jn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],m=i[10],g=i[11],x=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,g-d,y-x).normalize(),n[1].setComponents(l+r,f+c,g+d,y+x).normalize(),n[2].setComponents(l+o,f+u,g+p,y+M).normalize(),n[3].setComponents(l-o,f-u,g-p,y-M).normalize(),n[4].setComponents(l-a,f-h,g-m,y-v).normalize(),e===Kn)n[5].setComponents(l+a,f+h,g+m,y+v).normalize();else if(e===Oo)n[5].setComponents(a,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xo.x=i.normal.x>0?t.max.x:t.min.x,xo.y=i.normal.y>0?t.max.y:t.min.y,xo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function V0(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],m=h[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,h[f]=m)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let m=h[d];s.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var en=class s extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],m=[],g=[];for(let x=0;x<u;x++){let M=x*f-o;for(let v=0;v<c;v++){let y=v*h-r;p.push(y,-M,0),m.push(0,0,1),g.push(v/a),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let v=M+c*x,y=M+c*(x+1),_=M+1+c*(x+1),w=M+1+c*x;d.push(v,y,w),d.push(y,_,w)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(m,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
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
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,_x=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:Z0,alphatest_pars_fragment:$0,aomap_fragment:j0,aomap_pars_fragment:K0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:fm,common:dm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:Mm,colorspace_pars_fragment:_m,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Em,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:zm,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Im,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:Om,lights_phong_pars_fragment:km,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:yg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:_g,dithering_pars_fragment:bg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Ig,skinning_vertex:Pg,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:zg,transmission_fragment:Fg,transmission_pars_fragment:Bg,uv_pars_fragment:Og,uv_pars_vertex:kg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:$g,depth_frag:jg,distanceRGBA_vert:Kg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:tx,linedashed_vert:ex,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:yx,shadow_vert:vx,shadow_frag:Mx,sprite_vert:_x,sprite_frag:bx},zt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ln={basic:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ze([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ze([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ze([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ze([zt.points,zt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ze([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ze([zt.common,zt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ze([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ze([zt.sprite,zt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ze([zt.common,zt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ze([zt.lights,zt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Ln.physical={uniforms:Ze([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var yo={r:0,b:0,g:0},Ai=new je,wx=new Kt;function Ex(s,t,e,n,i,r,o){let a=new Lt(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function m(M){let v=!1,y=p(M);y===null?x(a,l):y&&y.isColor&&(x(y,1),v=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,v){let y=p(v);y&&(y.isCubeTexture||y.mapping===ya)?(u===void 0&&(u=new Rt(new Ot(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Ss(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Ai)),u.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new en(2,2),new Pe({name:"BackgroundMaterial",uniforms:Ss(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function x(M,v){M.getRGB(yo,jf(s)),n.buffers.color.setClear(yo.r,yo.g,yo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,x(a,l)},render:m,addToRenderList:g}}function Sx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(E,R,L,N,D){let O=!1,z=h(N,L,R);r!==z&&(r=z,c(r.object)),O=d(E,N,L,D),O&&p(E,N,L,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(E,R,L,N),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,R,L){let N=L.wireframe===!0,D=n[E.id];D===void 0&&(D={},n[E.id]=D);let O=D[R.id];O===void 0&&(O={},D[R.id]=O);let z=O[N];return z===void 0&&(z=f(l()),O[N]=z),z}function f(E){let R=[],L=[],N=[];for(let D=0;D<e;D++)R[D]=0,L[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:N,object:E,attributes:{},index:null}}function d(E,R,L,N){let D=r.attributes,O=R.attributes,z=0,q=L.getAttributes();for(let k in q)if(q[k].location>=0){let $=D[k],yt=O[k];if(yt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),$===void 0||$.attribute!==yt||yt&&$.data!==yt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(E,R,L,N){let D={},O=R.attributes,z=0,q=L.getAttributes();for(let k in q)if(q[k].location>=0){let $=O[k];$===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&($=E.instanceColor));let yt={};yt.attribute=$,$&&$.data&&(yt.data=$.data),D[k]=yt,z++}r.attributes=D,r.attributesNum=z,r.index=N}function m(){let E=r.newAttributes;for(let R=0,L=E.length;R<L;R++)E[R]=0}function g(E){x(E,0)}function x(E,R){let L=r.newAttributes,N=r.enabledAttributes,D=r.attributeDivisors;L[E]=1,N[E]===0&&(s.enableVertexAttribArray(E),N[E]=1),D[E]!==R&&(s.vertexAttribDivisor(E,R),D[E]=R)}function M(){let E=r.newAttributes,R=r.enabledAttributes;for(let L=0,N=R.length;L<N;L++)R[L]!==E[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function v(E,R,L,N,D,O,z){z===!0?s.vertexAttribIPointer(E,R,L,D,O):s.vertexAttribPointer(E,R,L,N,D,O)}function y(E,R,L,N){m();let D=N.attributes,O=L.getAttributes(),z=R.defaultAttributeValues;for(let q in O){let k=O[q];if(k.location>=0){let Q=D[q];if(Q===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),Q!==void 0){let $=Q.normalized,yt=Q.itemSize,_t=t.get(Q);if(_t===void 0)continue;let Dt=_t.buffer,it=_t.type,j=_t.bytesPerElement,Mt=it===s.INT||it===s.UNSIGNED_INT||Q.gpuType===bh;if(Q.isInterleavedBufferAttribute){let V=Q.data,J=V.stride,W=Q.offset;if(V.isInstancedInterleavedBuffer){for(let B=0;B<k.locationSize;B++)x(k.location+B,V.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let B=0;B<k.locationSize;B++)g(k.location+B);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let B=0;B<k.locationSize;B++)v(k.location+B,yt/k.locationSize,it,$,J*j,(W+yt/k.locationSize*B)*j,Mt)}else{if(Q.isInstancedBufferAttribute){for(let V=0;V<k.locationSize;V++)x(k.location+V,Q.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let V=0;V<k.locationSize;V++)g(k.location+V);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let V=0;V<k.locationSize;V++)v(k.location+V,yt/k.locationSize,it,$,yt*j,yt/k.locationSize*V*j,Mt)}}else if(z!==void 0){let $=z[q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(k.location,$);break;case 3:s.vertexAttrib3fv(k.location,$);break;case 4:s.vertexAttrib4fv(k.location,$);break;default:s.vertexAttrib1fv(k.location,$)}}}}M()}function _(){A();for(let E in n){let R=n[E];for(let L in R){let N=R[L];for(let D in N)u(N[D].object),delete N[D];delete R[L]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let R=n[E.id];for(let L in R){let N=R[L];for(let D in N)u(N[D].object),delete N[D];delete R[L]}delete n[E.id]}function S(E){for(let R in n){let L=n[R];if(L[E.id]===void 0)continue;let N=L[E.id];for(let D in N)u(N[D].object),delete N[D];delete L[E.id]}}function A(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:m,enableAttribute:g,disableUnusedAttributes:M}}function Tx(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m]*f[m];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ax(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==wn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let A=S===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Qn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Nn&&!A)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:_,maxSamples:w}}function Rx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new jn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,x=s.get(h);if(!i||p===null||p.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,v=M*4,y=x.clippingState||null;l.value=y,y=u(p,f,v,d);for(let _=0;_!==v;++_)y[_]=e[_];x.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let m=h!==null?h.length:0,g=null;if(m!==0){if(g=l.value,p!==!0||g===null){let x=d+m*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<x)&&(g=new Float32Array(x));for(let v=0,y=d;v!==m;++v,y+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function Cx(s){let t=new WeakMap;function e(o,a){return a===Kl?o.mapping=ys:a===Jl&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kl||a===Jl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lc(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ts=class extends Wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,qu=[.125,.215,.35,.446,.526,.582],Pi=20,Cl=new Ts,Yu=new Lt,Il=null,Pl=0,Ll=0,Dl=!1,Ci=(1+Math.sqrt(5))/2,rs=1/Ci,Zu=[new H(-Ci,rs,0),new H(Ci,rs,0),new H(-rs,0,Ci),new H(rs,0,Ci),new H(0,Ci,-rs),new H(0,Ci,rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Tn,format:wn,colorSpace:Ps,depthBuffer:!1},i=$u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Px(r,t,e)}return i}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,i){let a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yu),u.toneMapping=fi,u.autoClear=!1;let d=new Re({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new Rt(new Ot,d),m=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,m=!0):(d.color.copy(Yu),m=!0);for(let x=0;x<6;x++){let M=x%3;M===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):M===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));let v=this._cubeSize;vo(i,M*v,x>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ys||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(i-r-1)%Zu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Rt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),m=r/p,g=isFinite(r)?1+Math.floor(u*m):Pi;g>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);let x=[],M=0;for(let S=0;S<Pi;++S){let A=S/m,b=Math.exp(-A*A/2);x.push(b),S===0?M+=b:S<g&&(M+=2*b)}for(let S=0;S<x.length;S++)x[S]=x[S]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let y=this._sizeLods[i],_=3*y*(i>v-us?i-v+us:0),w=4*(this._cubeSize-y);vo(e,_,w,3*y,2*y),l.setRenderTarget(e),l.render(h,Cl)}};function Ix(s){let t=[],e=[],n=[],i=s,r=s-us+1+qu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-us?l=qu[o-s+us-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,m=3,g=2,x=1,M=new Float32Array(m*p*d),v=new Float32Array(g*p*d),y=new Float32Array(x*p*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,A=w>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(b,m*p*w),v.set(f,g*p*w);let E=[w,w,w,w,w,w];y.set(E,x*p*w)}let _=new ee;_.setAttribute("position",new ue(M,m)),_.setAttribute("uv",new ue(v,g)),_.setAttribute("faceIndex",new ue(y,x)),t.push(_),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $u(s,t,e){let n=new $e(s,t,e);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Px(s,t,e){let n=new Float32Array(Pi),i=new H(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ju(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ku(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function Lx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kl||l===Jl,u=l===ys||l===vs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qo(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new qo(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nx(s,t,e,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let m=f.morphAttributes[p];for(let g=0,x=m.length;g<x;g++)t.remove(m[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let p in d){let m=d[p];for(let g=0,x=m.length;g<x;g++)t.update(m[g],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,p=h.attributes.position,m=0;if(d!==null){let M=d.array;m=d.version;for(let v=0,y=M.length;v<y;v+=3){let _=M[v+0],w=M[v+1],S=M[v+2];f.push(_,w,w,S,S,_)}}else if(p!==void 0){let M=p.array;m=p.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let _=v+0,w=v+1,S=v+2;f.push(_,w,w,S,S,_)}}else return;let g=new(Zf(f)?Es:ws)(f,1);g.version=m;let x=r.get(h);x&&t.remove(x),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ux(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];e.update(g,n,1)}function h(f,d,p,m){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<f.length;x++)c(f[x]/o,d[x],m[x]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=d[M]*m[M];e.update(x,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fx(s,t,e){let n=new WeakMap,i=new ye;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,_=1;y>t.maxTextureSize&&(_=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*_*4*h),S=new Go(w,y,_,h);S.type=Nn,S.needsUpdate=!0;let A=v*4;for(let E=0;E<h;E++){let R=g[E],L=x[E],N=M[E],D=y*_*4*E;for(let O=0;O<R.count;O++){let z=O*A;d===!0&&(i.fromBufferAttribute(R,O),w[D+z+0]=i.x,w[D+z+1]=i.y,w[D+z+2]=i.z,w[D+z+3]=0),p===!0&&(i.fromBufferAttribute(L,O),w[D+z+4]=i.x,w[D+z+5]=i.y,w[D+z+6]=i.z,w[D+z+7]=0),m===!0&&(i.fromBufferAttribute(N,O),w[D+z+8]=i.x,w[D+z+9]=i.y,w[D+z+10]=i.z,w[D+z+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new St(y,_)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Bx(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Yo=class extends tn{constructor(t,e,n,i,r,o,a,l,c,u=ps){if(u!==ps&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ps&&(n=Di),n===void 0&&u===_s&&(n=Ms),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jf=new tn,Ju=new Yo(1,1),Qf=new Go,td=new Ic,ed=new Xo,Qu=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Ls(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Qu[i];if(r===void 0&&(r=new Float32Array(i),Qu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _a(s,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ox(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function Gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function Vx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;sf.set(n),s.uniformMatrix2fv(this.addr,!1,sf),Be(e,n)}}function Wx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;nf.set(n),s.uniformMatrix3fv(this.addr,!1,nf),Be(e,n)}}function Xx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;ef.set(n),s.uniformMatrix4fv(this.addr,!1,ef),Be(e,n)}}function qx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function Zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function $x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function jx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function Jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function Qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function t1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ju.compareFunction=Xf,r=Ju):r=Jf,e.setTexture2D(t||r,i)}function e1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||td,i)}function n1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ed,i)}function i1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qf,i)}function s1(s){switch(s){case 5126:return Ox;case 35664:return kx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return jx;case 36294:return Kx;case 36295:return Jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function r1(s,t){s.uniform1fv(this.addr,t)}function o1(s,t){let e=Ls(t,this.size,2);s.uniform2fv(this.addr,e)}function a1(s,t){let e=Ls(t,this.size,3);s.uniform3fv(this.addr,e)}function l1(s,t){let e=Ls(t,this.size,4);s.uniform4fv(this.addr,e)}function c1(s,t){let e=Ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function h1(s,t){let e=Ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function u1(s,t){let e=Ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function f1(s,t){s.uniform1iv(this.addr,t)}function d1(s,t){s.uniform2iv(this.addr,t)}function p1(s,t){s.uniform3iv(this.addr,t)}function m1(s,t){s.uniform4iv(this.addr,t)}function g1(s,t){s.uniform1uiv(this.addr,t)}function x1(s,t){s.uniform2uiv(this.addr,t)}function y1(s,t){s.uniform3uiv(this.addr,t)}function v1(s,t){s.uniform4uiv(this.addr,t)}function M1(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Jf,r[o])}function _1(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||td,r[o])}function b1(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ed,r[o])}function w1(s,t,e){let n=this.cache,i=t.length,r=_a(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Qf,r[o])}function E1(s){switch(s){case 5126:return r1;case 35664:return o1;case 35665:return a1;case 35666:return l1;case 35674:return c1;case 35675:return h1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return y1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return w1}}var Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s1(e.type)}},Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E1(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function rf(s,t){s.seq.push(t),s.map[t.id]=t}function S1(s,t,e){let n=s.name,i=n.length;for(Nl.lastIndex=0;;){let r=Nl.exec(n),o=Nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rf(e,c===void 0?new Dc(a,s,t):new Nc(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Uc(a),rf(e,h)),e=h}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);S1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function of(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var T1=37297,A1=0;function R1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var af=new ie;function C1(s){le._getMatrix(af,le.workingColorSpace,s);let t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Ma:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function lf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+R1(s.getShaderSource(t),o)}else return i}function I1(s,t){let e=C1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P1(s,t){let e;switch(t){case xh:e="Linear";break;case yh:e="Reinhard";break;case vh:e="Cineon";break;case Cr:e="ACESFilmic";break;case Mh:e="AgX";break;case _h:e="Neutral";break;case $p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mo=new H;function L1(){le.getLuminanceCoefficients(Mo);let s=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function N1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ar(s){return s!==""}function cf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(s){return s.replace(z1,B1)}var F1=new Map;function B1(s,t){let e=se[t];if(e===void 0){let n=F1.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}var O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(s){return s.replace(O1,k1)}function k1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ff(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function H1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ga?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function G1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case vs:t="ENVMAP_TYPE_CUBE";break;case ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function W1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case Yp:t="ENVMAP_BLENDING_MIX";break;case Zp:t="ENVMAP_BLENDING_ADD";break}return t}function X1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=H1(e),c=G1(e),u=V1(e),h=W1(e),f=X1(e),d=D1(e),p=N1(r),m=i.createProgram(),g,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),x.length>0&&(x+=`
`)):(g=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),x=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?se.tonemapping_pars_fragment:"",e.toneMapping!==fi?P1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,I1("linearToOutputTexel",e.outputColorSpace),L1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=zc(o),o=cf(o,e),o=hf(o,e),a=zc(a),a=cf(a,e),a=hf(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=M+g+o,y=M+x+a,_=of(i,i.VERTEX_SHADER,v),w=of(i,i.FRAGMENT_SHADER,y);i.attachShader(m,_),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function S(R){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(_).trim(),D=i.getShaderInfoLog(w).trim(),O=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,_,w);else{let q=lf(i,_,"vertex"),k=lf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+q+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||D==="")&&(z=!1);z&&(R.diagnostics={runnable:O,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:D,prefix:x}})}i.deleteShader(_),i.deleteShader(w),A=new gs(i,m),b=U1(i,m)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,T1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=w,this}var Y1=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=Y1++,this.code=t,this.usedTimes=0}};function Z1(s,t,e,n,i,r,o){let a=new Vo,l=new Fc,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,E,R,L,N){let D=L.fog,O=N.geometry,z=b.isMeshStandardMaterial?L.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),k=q&&q.mapping===ya?q.image.height:null,Q=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,yt=$!==void 0?$.length:0,_t=0;O.morphAttributes.position!==void 0&&(_t=1),O.morphAttributes.normal!==void 0&&(_t=2),O.morphAttributes.color!==void 0&&(_t=3);let Dt,it,j,Mt;if(Q){let he=Ln[Q];Dt=he.vertexShader,it=he.fragmentShader}else Dt=b.vertexShader,it=b.fragmentShader,l.update(b),j=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);let V=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),W=N.isInstancedMesh===!0,B=N.isBatchedMesh===!0,et=!!b.map,F=!!b.matcap,Y=!!q,I=!!b.aoMap,ht=!!b.lightMap,tt=!!b.bumpMap,rt=!!b.normalMap,Z=!!b.displacementMap,wt=!!b.emissiveMap,ct=!!b.metalnessMap,P=!!b.roughnessMap,C=b.anisotropy>0,X=b.clearcoat>0,K=b.dispersion>0,ft=b.iridescence>0,G=b.sheen>0,lt=b.transmission>0,dt=C&&!!b.anisotropyMap,bt=X&&!!b.clearcoatMap,Ct=X&&!!b.clearcoatNormalMap,at=X&&!!b.clearcoatRoughnessMap,ut=ft&&!!b.iridescenceMap,pt=ft&&!!b.iridescenceThicknessMap,At=G&&!!b.sheenColorMap,Tt=G&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,Zt=!!b.specularColorMap,ae=!!b.specularIntensityMap,nt=lt&&!!b.transmissionMap,Pt=lt&&!!b.thicknessMap,vt=!!b.gradientMap,Et=!!b.alphaMap,Nt=b.alphaTest>0,Ut=!!b.alphaHash,jt=!!b.extensions,de=fi;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(de=s.toneMapping);let Ue={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:it,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:B,batchingColor:B&&N._colorsTexture!==null,instancing:W,instancingColor:W&&N.instanceColor!==null,instancingMorph:W&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ps,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:F,envMap:Y,envMapMode:Y&&q.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:ht,bumpMap:tt,normalMap:rt,displacementMap:f&&Z,emissiveMap:wt,normalMapObjectSpace:rt&&b.normalMapType===Jp,normalMapTangentSpace:rt&&b.normalMapType===va,metalnessMap:ct,roughnessMap:P,anisotropy:C,anisotropyMap:dt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:at,dispersion:K,iridescence:ft,iridescenceMap:ut,iridescenceThicknessMap:pt,sheen:G,sheenColorMap:At,sheenRoughnessMap:Tt,specularMap:Gt,specularColorMap:Zt,specularIntensityMap:ae,transmission:lt,transmissionMap:nt,thicknessMap:Pt,gradientMap:vt,opaque:b.transparent===!1&&b.blending===ds&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:Nt,alphaHash:Ut,combine:b.combine,mapUv:et&&m(b.map.channel),aoMapUv:I&&m(b.aoMap.channel),lightMapUv:ht&&m(b.lightMap.channel),bumpMapUv:tt&&m(b.bumpMap.channel),normalMapUv:rt&&m(b.normalMap.channel),displacementMapUv:Z&&m(b.displacementMap.channel),emissiveMapUv:wt&&m(b.emissiveMap.channel),metalnessMapUv:ct&&m(b.metalnessMap.channel),roughnessMapUv:P&&m(b.roughnessMap.channel),anisotropyMapUv:dt&&m(b.anisotropyMap.channel),clearcoatMapUv:bt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&m(b.sheenRoughnessMap.channel),specularMapUv:Gt&&m(b.specularMap.channel),specularColorMapUv:Zt&&m(b.specularColorMap.channel),specularIntensityMapUv:ae&&m(b.specularIntensityMap.channel),transmissionMapUv:nt&&m(b.transmissionMap.channel),thicknessMapUv:Pt&&m(b.thicknessMap.channel),alphaMapUv:Et&&m(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(rt||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(et||Et),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:J,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:_t,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===ge,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===re,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:jt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&b.extensions.multiDraw===!0||B)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function x(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)E.push(R),E.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(E,b),v(E,b),E.push(s.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let E=p[b.type],R;if(E){let L=Ln[E];R=yi.clone(L.uniforms)}else R=b.uniforms;return R}function _(b,E){let R;for(let L=0,N=u.length;L<N;L++){let D=u[L];if(D.cacheKey===E){R=D,++R.usedTimes;break}}return R===void 0&&(R=new q1(s,E,b,r),u.push(R)),R}function w(b){if(--b.usedTimes===0){let E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function S(b){l.remove(b)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:A}}function $1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function j1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function df(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,p,m,g){let x=s[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:m,group:g},s[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=d,x.groupOrder=p,x.renderOrder=h.renderOrder,x.z=m,x.group=g),t++,x}function a(h,f,d,p,m,g){let x=o(h,f,d,p,m,g);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):e.push(x)}function l(h,f,d,p,m,g){let x=o(h,f,d,p,m,g);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):e.unshift(x)}function c(h,f){e.length>1&&e.sort(h||j1),n.length>1&&n.sort(f||df),i.length>1&&i.sort(f||df)}function u(){for(let h=t,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function K1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new pf,s.set(n,[o])):i>=r.length?(o=new pf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function J1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Lt};break;case"SpotLight":e={position:new H,direction:new H,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Q1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ty=0;function ey(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ny(s){let t=new J1,e=Q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Kt,o=new Kt;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,m=0,g=0,x=0,M=0,v=0,y=0,_=0,w=0,S=0;c.sort(ey);for(let b=0,E=c.length;b<E;b++){let R=c[b],L=R.color,N=R.intensity,D=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],N);S++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,k=e.get(R);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=z,d++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=D,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[m]=z;let q=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,q.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[m]=q.matrix,R.castShadow){let k=e.get(R);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=O,y++}m++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=z,g++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let q=R.shadow,k=e.get(R);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=R.shadow.matrix,v++}n.point[p]=z,p++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[x]=z,x++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==g||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==v||A.numSpotShadows!==y||A.numSpotMaps!==_||A.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,A.directionalLength=d,A.pointLength=p,A.spotLength=m,A.rectAreaLength=g,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=v,A.numSpotShadows=y,A.numSpotMaps=_,A.numLightProbes=S,n.version=ty++)}function l(c,u){let h=0,f=0,d=0,p=0,m=0,g=u.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let v=c[x];if(v.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function mf(s){let t=new ny(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function iy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new mf(s),t.set(i,[a])):r>=o.length?(a=new mf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var gr=class extends fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oc=class extends fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(s,t,e){let n=new mr,i=new St,r=new St,o=new ye,a=new gr({depthPacking:Ch}),l=new Oc,c={},u=e.maxTextureSize,h={[di]:We,[We]:di,[re]:re},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ee;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Rt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let x=this.type;this.render=function(w,S,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Un),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=x!==$n&&this.type===$n,D=x===$n&&this.type!==$n;for(let O=0,z=w.length;O<z;O++){let q=w[O],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Q=k.getFrameExtents();if(i.multiply(Q),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||N===!0||D===!0){let yt=this.type!==$n?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new $e(i.x,i.y,yt),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let $=k.getViewportCount();for(let yt=0;yt<$;yt++){let _t=k.getViewport(yt);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),L.viewport(o),k.updateMatrices(q,yt),n=k.getFrustum(),y(S,A,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&M(k,A),k.needsUpdate=!1}x=this.type,g.needsUpdate=!1,s.setRenderTarget(b,E,R)};function M(w,S){let A=t.update(m);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $e(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(S,null,A,f,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(S,null,A,d,m,null)}function v(w,S,A,b){let E=null,R=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=A.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=E.uuid,N=S.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let O=D[N];O===void 0&&(O=E.clone(),D[N]=O,S.addEventListener("dispose",_)),E=O}if(E.visible=S.visible,E.wireframe=S.wireframe,b===$n?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:h[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=A}return E}function y(w,S,A,b,E){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===$n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let N=t.update(w),D=w.material;if(Array.isArray(D)){let O=N.groups;for(let z=0,q=O.length;z<q;z++){let k=O[z],Q=D[k.materialIndex];if(Q&&Q.visible){let $=v(w,Q,b,E);w.onBeforeShadow(s,w,S,A,N,$,k),s.renderBufferDirect(A,null,N,$,w,k),w.onAfterShadow(s,w,S,A,N,$,k)}}}else if(D.visible){let O=v(w,D,b,E);w.onBeforeShadow(s,w,S,A,N,O,null),s.renderBufferDirect(A,null,N,O,w,null),w.onAfterShadow(s,w,S,A,N,O,null)}}let L=w.children;for(let N=0,D=L.length;N<D;N++)y(L[N],S,A,b,E)}function _(w){w.target.removeEventListener("dispose",_);for(let A in c){let b=c[A],E=w.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var ay={[Wl]:Xl,[ql]:$l,[Yl]:jl,[xs]:Zl,[Xl]:Wl,[$l]:ql,[jl]:Yl,[Zl]:xs};function ly(s,t){function e(){let nt=!1,Pt=new ye,vt=null,Et=new ye(0,0,0,0);return{setMask:function(Nt){vt!==Nt&&!nt&&(s.colorMask(Nt,Nt,Nt,Nt),vt=Nt)},setLocked:function(Nt){nt=Nt},setClear:function(Nt,Ut,jt,de,Ue){Ue===!0&&(Nt*=de,Ut*=de,jt*=de),Pt.set(Nt,Ut,jt,de),Et.equals(Pt)===!1&&(s.clearColor(Nt,Ut,jt,de),Et.copy(Pt))},reset:function(){nt=!1,vt=null,Et.set(-1,0,0,0)}}}function n(){let nt=!1,Pt=!1,vt=null,Et=null,Nt=null;return{setReversed:function(Ut){if(Pt!==Ut){let jt=t.get("EXT_clip_control");Pt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);let de=Nt;Nt=null,this.setClear(de)}Pt=Ut},getReversed:function(){return Pt},setTest:function(Ut){Ut?V(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(Ut){vt!==Ut&&!nt&&(s.depthMask(Ut),vt=Ut)},setFunc:function(Ut){if(Pt&&(Ut=ay[Ut]),Et!==Ut){switch(Ut){case Wl:s.depthFunc(s.NEVER);break;case Xl:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case Yl:s.depthFunc(s.EQUAL);break;case Zl:s.depthFunc(s.GEQUAL);break;case $l:s.depthFunc(s.GREATER);break;case jl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Et=Ut}},setLocked:function(Ut){nt=Ut},setClear:function(Ut){Nt!==Ut&&(Pt&&(Ut=1-Ut),s.clearDepth(Ut),Nt=Ut)},reset:function(){nt=!1,vt=null,Et=null,Nt=null,Pt=!1}}}function i(){let nt=!1,Pt=null,vt=null,Et=null,Nt=null,Ut=null,jt=null,de=null,Ue=null;return{setTest:function(he){nt||(he?V(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(he){Pt!==he&&!nt&&(s.stencilMask(he),Pt=he)},setFunc:function(he,gn,Gn){(vt!==he||Et!==gn||Nt!==Gn)&&(s.stencilFunc(he,gn,Gn),vt=he,Et=gn,Nt=Gn)},setOp:function(he,gn,Gn){(Ut!==he||jt!==gn||de!==Gn)&&(s.stencilOp(he,gn,Gn),Ut=he,jt=gn,de=Gn)},setLocked:function(he){nt=he},setClear:function(he){Ue!==he&&(s.clearStencil(he),Ue=he)},reset:function(){nt=!1,Pt=null,vt=null,Et=null,Nt=null,Ut=null,jt=null,de=null,Ue=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,x=null,M=null,v=null,y=null,_=null,w=null,S=new Lt(0,0,0),A=0,b=!1,E=null,R=null,L=null,N=null,D=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=q>=2);let Q=null,$={},yt=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Dt=new ye().fromArray(yt),it=new ye().fromArray(_t);function j(nt,Pt,vt,Et){let Nt=new Uint8Array(4),Ut=s.createTexture();s.bindTexture(nt,Ut),s.texParameteri(nt,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(nt,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<vt;jt++)nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(Pt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return Ut}let Mt={};Mt[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(s.DEPTH_TEST),o.setFunc(xs),tt(!1),rt(xu),V(s.CULL_FACE),I(Un);function V(nt){u[nt]!==!0&&(s.enable(nt),u[nt]=!0)}function J(nt){u[nt]!==!1&&(s.disable(nt),u[nt]=!1)}function W(nt,Pt){return h[nt]!==Pt?(s.bindFramebuffer(nt,Pt),h[nt]=Pt,nt===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Pt),nt===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function B(nt,Pt){let vt=d,Et=!1;if(nt){vt=f.get(Pt),vt===void 0&&(vt=[],f.set(Pt,vt));let Nt=nt.textures;if(vt.length!==Nt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let Ut=0,jt=Nt.length;Ut<jt;Ut++)vt[Ut]=s.COLOR_ATTACHMENT0+Ut;vt.length=Nt.length,Et=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,Et=!0);Et&&s.drawBuffers(vt)}function et(nt){return p!==nt?(s.useProgram(nt),p=nt,!0):!1}let F={[Ii]:s.FUNC_ADD,[Ip]:s.FUNC_SUBTRACT,[Pp]:s.FUNC_REVERSE_SUBTRACT};F[Lp]=s.MIN,F[Dp]=s.MAX;let Y={[Np]:s.ZERO,[Up]:s.ONE,[zp]:s.SRC_COLOR,[Gl]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[kp]:s.DST_COLOR,[Bp]:s.DST_ALPHA,[Fp]:s.ONE_MINUS_SRC_COLOR,[Vl]:s.ONE_MINUS_SRC_ALPHA,[Hp]:s.ONE_MINUS_DST_COLOR,[Op]:s.ONE_MINUS_DST_ALPHA,[Vp]:s.CONSTANT_COLOR,[Wp]:s.ONE_MINUS_CONSTANT_COLOR,[Xp]:s.CONSTANT_ALPHA,[qp]:s.ONE_MINUS_CONSTANT_ALPHA};function I(nt,Pt,vt,Et,Nt,Ut,jt,de,Ue,he){if(nt===Un){m===!0&&(J(s.BLEND),m=!1);return}if(m===!1&&(V(s.BLEND),m=!0),nt!==Cp){if(nt!==g||he!==b){if((x!==Ii||y!==Ii)&&(s.blendEquation(s.FUNC_ADD),x=Ii,y=Ii),he)switch(nt){case ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFunc(s.ONE,s.ONE);break;case yu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}else switch(nt){case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}M=null,v=null,_=null,w=null,S.set(0,0,0),A=0,g=nt,b=he}return}Nt=Nt||Pt,Ut=Ut||vt,jt=jt||Et,(Pt!==x||Nt!==y)&&(s.blendEquationSeparate(F[Pt],F[Nt]),x=Pt,y=Nt),(vt!==M||Et!==v||Ut!==_||jt!==w)&&(s.blendFuncSeparate(Y[vt],Y[Et],Y[Ut],Y[jt]),M=vt,v=Et,_=Ut,w=jt),(de.equals(S)===!1||Ue!==A)&&(s.blendColor(de.r,de.g,de.b,Ue),S.copy(de),A=Ue),g=nt,b=!1}function ht(nt,Pt){nt.side===re?J(s.CULL_FACE):V(s.CULL_FACE);let vt=nt.side===We;Pt&&(vt=!vt),tt(vt),nt.blending===ds&&nt.transparent===!1?I(Un):I(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),o.setFunc(nt.depthFunc),o.setTest(nt.depthTest),o.setMask(nt.depthWrite),r.setMask(nt.colorWrite);let Et=nt.stencilWrite;a.setTest(Et),Et&&(a.setMask(nt.stencilWriteMask),a.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),a.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),wt(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?V(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(nt){E!==nt&&(nt?s.frontFace(s.CW):s.frontFace(s.CCW),E=nt)}function rt(nt){nt!==Ap?(V(s.CULL_FACE),nt!==R&&(nt===xu?s.cullFace(s.BACK):nt===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),R=nt}function Z(nt){nt!==L&&(z&&s.lineWidth(nt),L=nt)}function wt(nt,Pt,vt){nt?(V(s.POLYGON_OFFSET_FILL),(N!==Pt||D!==vt)&&(s.polygonOffset(Pt,vt),N=Pt,D=vt)):J(s.POLYGON_OFFSET_FILL)}function ct(nt){nt?V(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function P(nt){nt===void 0&&(nt=s.TEXTURE0+O-1),Q!==nt&&(s.activeTexture(nt),Q=nt)}function C(nt,Pt,vt){vt===void 0&&(Q===null?vt=s.TEXTURE0+O-1:vt=Q);let Et=$[vt];Et===void 0&&(Et={type:void 0,texture:void 0},$[vt]=Et),(Et.type!==nt||Et.texture!==Pt)&&(Q!==vt&&(s.activeTexture(vt),Q=vt),s.bindTexture(nt,Pt||Mt[nt]),Et.type=nt,Et.texture=Pt)}function X(){let nt=$[Q];nt!==void 0&&nt.type!==void 0&&(s.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function G(){try{s.texSubImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Ct(){try{s.texStorage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function At(nt){Dt.equals(nt)===!1&&(s.scissor(nt.x,nt.y,nt.z,nt.w),Dt.copy(nt))}function Tt(nt){it.equals(nt)===!1&&(s.viewport(nt.x,nt.y,nt.z,nt.w),it.copy(nt))}function Gt(nt,Pt){let vt=c.get(Pt);vt===void 0&&(vt=new WeakMap,c.set(Pt,vt));let Et=vt.get(nt);Et===void 0&&(Et=s.getUniformBlockIndex(Pt,nt.name),vt.set(nt,Et))}function Zt(nt,Pt){let Et=c.get(Pt).get(nt);l.get(Pt)!==Et&&(s.uniformBlockBinding(Pt,Et,nt.__bindingPointIndex),l.set(Pt,Et))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,$={},h={},f=new WeakMap,d=[],p=null,m=!1,g=null,x=null,M=null,v=null,y=null,_=null,w=null,S=new Lt(0,0,0),A=0,b=!1,E=null,R=null,L=null,N=null,D=null,Dt.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:J,bindFramebuffer:W,drawBuffers:B,useProgram:et,setBlending:I,setMaterial:ht,setFlipSided:tt,setCullFace:rt,setLineWidth:Z,setPolygonOffset:wt,setScissorTest:ct,activeTexture:P,bindTexture:C,unbindTexture:X,compressedTexImage2D:K,compressedTexImage3D:ft,texImage2D:ut,texImage3D:pt,updateUBOMapping:Gt,uniformBlockBinding:Zt,texStorage2D:Ct,texStorage3D:at,texSubImage2D:G,texSubImage3D:lt,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:At,viewport:Tt,reset:ae}}function gf(s,t,e,n){let i=cy(n);switch(e){case Of:return s*t;case Hf:return s*t;case Gf:return s*t*2;case Sh:return s*t/i.components*i.byteLength;case Th:return s*t/i.components*i.byteLength;case Vf:return s*t*2/i.components*i.byteLength;case Ah:return s*t*2/i.components*i.byteLength;case kf:return s*t*3/i.components*i.byteLength;case wn:return s*t*4/i.components*i.byteLength;case Rh:return s*t*4/i.components*i.byteLength;case Do:case No:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uo:case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(s,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(s,8)*Math.max(t,8)/2;case sc:case rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fo:case _c:case bc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wf:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ec:case Sc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cy(s){switch(s){case Qn:case zf:return{byteLength:1,components:1};case dr:case Ff:case Tn:return{byteLength:2,components:1};case wh:case Eh:return{byteLength:2,components:4};case Di:case bh:case Nn:return{byteLength:4,components:1};case Bf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function hy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,C){return d?new OffscreenCanvas(P,C):ko("canvas")}function m(P,C,X){let K=1,ft=ct(P);if((ft.width>X||ft.height>X)&&(K=X/Math.max(ft.width,ft.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let G=Math.floor(K*ft.width),lt=Math.floor(K*ft.height);h===void 0&&(h=p(G,lt));let dt=C?p(G,lt):h;return dt.width=G,dt.height=lt,dt.getContext("2d").drawImage(P,0,0,G,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+G+"x"+lt+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),P;return P}function g(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,C,X,K,ft=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let G=C;if(C===s.RED&&(X===s.FLOAT&&(G=s.R32F),X===s.HALF_FLOAT&&(G=s.R16F),X===s.UNSIGNED_BYTE&&(G=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.R8UI),X===s.UNSIGNED_SHORT&&(G=s.R16UI),X===s.UNSIGNED_INT&&(G=s.R32UI),X===s.BYTE&&(G=s.R8I),X===s.SHORT&&(G=s.R16I),X===s.INT&&(G=s.R32I)),C===s.RG&&(X===s.FLOAT&&(G=s.RG32F),X===s.HALF_FLOAT&&(G=s.RG16F),X===s.UNSIGNED_BYTE&&(G=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RG8UI),X===s.UNSIGNED_SHORT&&(G=s.RG16UI),X===s.UNSIGNED_INT&&(G=s.RG32UI),X===s.BYTE&&(G=s.RG8I),X===s.SHORT&&(G=s.RG16I),X===s.INT&&(G=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGB8UI),X===s.UNSIGNED_SHORT&&(G=s.RGB16UI),X===s.UNSIGNED_INT&&(G=s.RGB32UI),X===s.BYTE&&(G=s.RGB8I),X===s.SHORT&&(G=s.RGB16I),X===s.INT&&(G=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),X===s.UNSIGNED_INT&&(G=s.RGBA32UI),X===s.BYTE&&(G=s.RGBA8I),X===s.SHORT&&(G=s.RGBA16I),X===s.INT&&(G=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),C===s.RGBA){let lt=ft?Ma:le.getTransfer(K);X===s.FLOAT&&(G=s.RGBA32F),X===s.HALF_FLOAT&&(G=s.RGBA16F),X===s.UNSIGNED_BYTE&&(G=lt===ge?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(P,C){let X;return P?C===null||C===Di||C===Ms?X=s.DEPTH24_STENCIL8:C===Nn?X=s.DEPTH32F_STENCIL8:C===dr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Di||C===Ms?X=s.DEPTH_COMPONENT24:C===Nn?X=s.DEPTH_COMPONENT32F:C===dr&&(X=s.DEPTH_COMPONENT16),X}function _(P,C){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==Dn?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function w(P){let C=P.target;C.removeEventListener("dispose",w),A(C),C.isVideoTexture&&u.delete(C)}function S(P){let C=P.target;C.removeEventListener("dispose",S),E(C)}function A(P){let C=n.get(P);if(C.__webglInit===void 0)return;let X=P.source,K=f.get(X);if(K){let ft=K[C.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&b(P),Object.keys(K).length===0&&f.delete(X)}n.remove(P)}function b(P){let C=n.get(P);s.deleteTexture(C.__webglTexture);let X=P.source,K=f.get(X);delete K[C.__cacheKey],o.memory.textures--}function E(P){let C=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(C.__webglFramebuffer[K]))for(let ft=0;ft<C.__webglFramebuffer[K].length;ft++)s.deleteFramebuffer(C.__webglFramebuffer[K][ft]);else s.deleteFramebuffer(C.__webglFramebuffer[K]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[K])}else{if(Array.isArray(C.__webglFramebuffer))for(let K=0;K<C.__webglFramebuffer.length;K++)s.deleteFramebuffer(C.__webglFramebuffer[K]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let K=0;K<C.__webglColorRenderbuffer.length;K++)C.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[K]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let X=P.textures;for(let K=0,ft=X.length;K<ft;K++){let G=n.get(X[K]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(P)}let R=0;function L(){R=0}function N(){let P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function D(P){let C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function O(P,C){let X=n.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,P,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function z(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){it(X,P,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function q(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){it(X,P,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function k(P,C){let X=n.get(P);if(P.version>0&&X.__version!==P.version){j(X,P,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}let Q={[mi]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Ql]:s.MIRRORED_REPEAT},$={[an]:s.NEAREST,[jp]:s.NEAREST_MIPMAP_NEAREST,[Qr]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[al]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},yt={[Qp]:s.NEVER,[r0]:s.ALWAYS,[t0]:s.LESS,[Xf]:s.LEQUAL,[e0]:s.EQUAL,[s0]:s.GEQUAL,[n0]:s.GREATER,[i0]:s.NOTEQUAL};function _t(P,C){if(C.type===Nn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Dn||C.magFilter===al||C.magFilter===Qr||C.magFilter===Li||C.minFilter===Dn||C.minFilter===al||C.minFilter===Qr||C.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Q[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,$[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,yt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===an||C.minFilter!==Qr&&C.minFilter!==Li||C.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Dt(P,C){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",w));let K=C.source,ft=f.get(K);ft===void 0&&(ft={},f.set(K,ft));let G=D(C);if(G!==P.__cacheKey){ft[G]===void 0&&(ft[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ft[G].usedTimes++;let lt=ft[P.__cacheKey];lt!==void 0&&(ft[P.__cacheKey].usedTimes--,lt.usedTimes===0&&b(C)),P.__cacheKey=G,P.__webglTexture=ft[G].texture}return X}function it(P,C,X){let K=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(K=s.TEXTURE_3D);let ft=Dt(P,C),G=C.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+X);let lt=n.get(G);if(G.version!==lt.__version||ft===!0){e.activeTexture(s.TEXTURE0+X);let dt=le.getPrimaries(le.workingColorSpace),bt=C.colorSpace===hi?null:le.getPrimaries(C.colorSpace),Ct=C.colorSpace===hi||dt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let at=m(C.image,!1,i.maxTextureSize);at=wt(C,at);let ut=r.convert(C.format,C.colorSpace),pt=r.convert(C.type),At=v(C.internalFormat,ut,pt,C.colorSpace,C.isVideoTexture);_t(K,C);let Tt,Gt=C.mipmaps,Zt=C.isVideoTexture!==!0,ae=lt.__version===void 0||ft===!0,nt=G.dataReady,Pt=_(C,at);if(C.isDepthTexture)At=y(C.format===_s,C.type),ae&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,At,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,At,at.width,at.height,0,ut,pt,null));else if(C.isDataTexture)if(Gt.length>0){Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Pt,At,Gt[0].width,Gt[0].height);for(let vt=0,Et=Gt.length;vt<Et;vt++)Tt=Gt[vt],Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,ut,pt,Tt.data):e.texImage2D(s.TEXTURE_2D,vt,At,Tt.width,Tt.height,0,ut,pt,Tt.data);C.generateMipmaps=!1}else Zt?(ae&&e.texStorage2D(s.TEXTURE_2D,Pt,At,at.width,at.height),nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,ut,pt,at.data)):e.texImage2D(s.TEXTURE_2D,0,At,at.width,at.height,0,ut,pt,at.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,At,Gt[0].width,Gt[0].height,at.depth);for(let vt=0,Et=Gt.length;vt<Et;vt++)if(Tt=Gt[vt],C.format!==wn)if(ut!==null)if(Zt){if(nt)if(C.layerUpdates.size>0){let Nt=gf(Tt.width,Tt.height,C.format,C.type);for(let Ut of C.layerUpdates){let jt=Tt.data.subarray(Ut*Nt/Tt.data.BYTES_PER_ELEMENT,(Ut+1)*Nt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,Ut,Tt.width,Tt.height,1,ut,jt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,at.depth,ut,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,At,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,at.depth,ut,pt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,vt,At,Tt.width,Tt.height,at.depth,0,ut,pt,Tt.data)}else{Zt&&ae&&e.texStorage2D(s.TEXTURE_2D,Pt,At,Gt[0].width,Gt[0].height);for(let vt=0,Et=Gt.length;vt<Et;vt++)Tt=Gt[vt],C.format!==wn?ut!==null?Zt?nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,ut,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,vt,At,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,ut,pt,Tt.data):e.texImage2D(s.TEXTURE_2D,vt,At,Tt.width,Tt.height,0,ut,pt,Tt.data)}else if(C.isDataArrayTexture)if(Zt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,At,at.width,at.height,at.depth),nt)if(C.layerUpdates.size>0){let vt=gf(at.width,at.height,C.format,C.type);for(let Et of C.layerUpdates){let Nt=at.data.subarray(Et*vt/at.data.BYTES_PER_ELEMENT,(Et+1)*vt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,ut,pt,Nt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ut,pt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,at.width,at.height,at.depth,0,ut,pt,at.data);else if(C.isData3DTexture)Zt?(ae&&e.texStorage3D(s.TEXTURE_3D,Pt,At,at.width,at.height,at.depth),nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ut,pt,at.data)):e.texImage3D(s.TEXTURE_3D,0,At,at.width,at.height,at.depth,0,ut,pt,at.data);else if(C.isFramebufferTexture){if(ae)if(Zt)e.texStorage2D(s.TEXTURE_2D,Pt,At,at.width,at.height);else{let vt=at.width,Et=at.height;for(let Nt=0;Nt<Pt;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,At,vt,Et,0,ut,pt,null),vt>>=1,Et>>=1}}else if(Gt.length>0){if(Zt&&ae){let vt=ct(Gt[0]);e.texStorage2D(s.TEXTURE_2D,Pt,At,vt.width,vt.height)}for(let vt=0,Et=Gt.length;vt<Et;vt++)Tt=Gt[vt],Zt?nt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,ut,pt,Tt):e.texImage2D(s.TEXTURE_2D,vt,At,ut,pt,Tt);C.generateMipmaps=!1}else if(Zt){if(ae){let vt=ct(at);e.texStorage2D(s.TEXTURE_2D,Pt,At,vt.width,vt.height)}nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,pt,at)}else e.texImage2D(s.TEXTURE_2D,0,At,ut,pt,at);g(C)&&x(K),lt.__version=G.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function j(P,C,X){if(C.image.length!==6)return;let K=Dt(P,C),ft=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let G=n.get(ft);if(ft.version!==G.__version||K===!0){e.activeTexture(s.TEXTURE0+X);let lt=le.getPrimaries(le.workingColorSpace),dt=C.colorSpace===hi?null:le.getPrimaries(C.colorSpace),bt=C.colorSpace===hi||lt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ct=C.isCompressedTexture||C.image[0].isCompressedTexture,at=C.image[0]&&C.image[0].isDataTexture,ut=[];for(let Et=0;Et<6;Et++)!Ct&&!at?ut[Et]=m(C.image[Et],!0,i.maxCubemapSize):ut[Et]=at?C.image[Et].image:C.image[Et],ut[Et]=wt(C,ut[Et]);let pt=ut[0],At=r.convert(C.format,C.colorSpace),Tt=r.convert(C.type),Gt=v(C.internalFormat,At,Tt,C.colorSpace),Zt=C.isVideoTexture!==!0,ae=G.__version===void 0||K===!0,nt=ft.dataReady,Pt=_(C,pt);_t(s.TEXTURE_CUBE_MAP,C);let vt;if(Ct){Zt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Gt,pt.width,pt.height);for(let Et=0;Et<6;Et++){vt=ut[Et].mipmaps;for(let Nt=0;Nt<vt.length;Nt++){let Ut=vt[Nt];C.format!==wn?At!==null?Zt?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt,0,0,Ut.width,Ut.height,At,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt,Gt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt,0,0,Ut.width,Ut.height,At,Tt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt,Gt,Ut.width,Ut.height,0,At,Tt,Ut.data)}}}else{if(vt=C.mipmaps,Zt&&ae){vt.length>0&&Pt++;let Et=ct(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Gt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(at){Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ut[Et].width,ut[Et].height,At,Tt,ut[Et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Gt,ut[Et].width,ut[Et].height,0,At,Tt,ut[Et].data);for(let Nt=0;Nt<vt.length;Nt++){let jt=vt[Nt].image[Et].image;Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt+1,0,0,jt.width,jt.height,At,Tt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt+1,Gt,jt.width,jt.height,0,At,Tt,jt.data)}}else{Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,At,Tt,ut[Et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Gt,At,Tt,ut[Et]);for(let Nt=0;Nt<vt.length;Nt++){let Ut=vt[Nt];Zt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt+1,0,0,At,Tt,Ut.image[Et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt+1,Gt,At,Tt,Ut.image[Et])}}}g(C)&&x(s.TEXTURE_CUBE_MAP),G.__version=ft.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function Mt(P,C,X,K,ft,G){let lt=r.convert(X.format,X.colorSpace),dt=r.convert(X.type),bt=v(X.internalFormat,lt,dt,X.colorSpace),Ct=n.get(C),at=n.get(X);if(at.__renderTarget=C,!Ct.__hasExternalTextures){let ut=Math.max(1,C.width>>G),pt=Math.max(1,C.height>>G);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?e.texImage3D(ft,G,bt,ut,pt,C.depth,0,lt,dt,null):e.texImage2D(ft,G,bt,ut,pt,0,lt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),rt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ft,at.__webglTexture,0,tt(C)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ft,at.__webglTexture,G),e.bindFramebuffer(s.FRAMEBUFFER,null)}function V(P,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer){let K=C.depthTexture,ft=K&&K.isDepthTexture?K.type:null,G=y(C.stencilBuffer,ft),lt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=tt(C);rt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,G,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,G,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,G,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,P)}else{let K=C.textures;for(let ft=0;ft<K.length;ft++){let G=K[ft],lt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),bt=v(G.internalFormat,lt,dt,G.colorSpace),Ct=tt(C);X&&rt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,bt,C.width,C.height):rt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,bt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,bt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function J(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(C.depthTexture);K.__renderTarget=C,(!K.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let ft=K.__webglTexture,G=tt(C);if(C.depthTexture.format===ps)rt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(C.depthTexture.format===_s)rt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function W(P){let C=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),K){let ft=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,K.removeEventListener("dispose",ft)};K.addEventListener("dispose",ft),C.__depthDisposeCallback=ft}C.__boundDepthTexture=K}if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");J(C.__webglFramebuffer,P)}else if(X){C.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[K]),C.__webglDepthbuffer[K]===void 0)C.__webglDepthbuffer[K]=s.createRenderbuffer(),V(C.__webglDepthbuffer[K],P,!1);else{let ft=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=C.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,G)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),V(C.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function B(P,C,X){let K=n.get(P);C!==void 0&&Mt(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&W(P)}function et(P){let C=P.texture,X=n.get(P),K=n.get(C);P.addEventListener("dispose",S);let ft=P.textures,G=P.isWebGLCubeRenderTarget===!0,lt=ft.length>1;if(lt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=C.version,o.memory.textures++),G){X.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[dt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)X.__webglFramebuffer[dt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let dt=0;dt<C.mipmaps.length;dt++)X.__webglFramebuffer[dt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(lt)for(let dt=0,bt=ft.length;dt<bt;dt++){let Ct=n.get(ft[dt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&rt(P)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let dt=0;dt<ft.length;dt++){let bt=ft[dt];X.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[dt]);let Ct=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),ut=v(bt.internalFormat,Ct,at,bt.colorSpace,P.isXRRenderTarget===!0),pt=tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,X.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),V(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),_t(s.TEXTURE_CUBE_MAP,C);for(let dt=0;dt<6;dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)Mt(X.__webglFramebuffer[dt][bt],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else Mt(X.__webglFramebuffer[dt],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(C)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let dt=0,bt=ft.length;dt<bt;dt++){let Ct=ft[dt],at=n.get(Ct);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),_t(s.TEXTURE_2D,Ct),Mt(X.__webglFramebuffer,P,Ct,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Ct)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),_t(dt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)Mt(X.__webglFramebuffer[bt],P,C,s.COLOR_ATTACHMENT0,dt,bt);else Mt(X.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,dt,0);g(C)&&x(dt),e.unbindTexture()}P.depthBuffer&&W(P)}function F(P){let C=P.textures;for(let X=0,K=C.length;X<K;X++){let ft=C[X];if(g(ft)){let G=M(P),lt=n.get(ft).__webglTexture;e.bindTexture(G,lt),x(G),e.unbindTexture()}}}let Y=[],I=[];function ht(P){if(P.samples>0){if(rt(P)===!1){let C=P.textures,X=P.width,K=P.height,ft=s.COLOR_BUFFER_BIT,G=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(P),dt=C.length>1;if(dt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[bt]);let Ct=n.get(C[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ct,0)}s.blitFramebuffer(0,0,X,K,0,0,X,K,ft,s.NEAREST),l===!0&&(Y.length=0,I.length=0,Y.push(s.COLOR_ATTACHMENT0+bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Y.push(G),I.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Y))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[bt]);let Ct=n.get(C[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let C=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function tt(P){return Math.min(i.maxSamples,P.samples)}function rt(P){let C=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Z(P){let C=o.render.frame;u.get(P)!==C&&(u.set(P,C),P.update())}function wt(P,C){let X=P.colorSpace,K=P.format,ft=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Ps&&X!==hi&&(le.getTransfer(X)===ge?(K!==wn||ft!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=B,this.setupRenderTarget=et,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=rt}function uy(s,t){function e(n,i=hi){let r,o=le.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===wh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return s.BYTE;if(n===Ff)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===bh)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Tn)return s.HALF_FLOAT;if(n===Of)return s.ALPHA;if(n===kf)return s.RGB;if(n===wn)return s.RGBA;if(n===Hf)return s.LUMINANCE;if(n===Gf)return s.LUMINANCE_ALPHA;if(n===ps)return s.DEPTH_COMPONENT;if(n===_s)return s.DEPTH_STENCIL;if(n===Sh)return s.RED;if(n===Th)return s.RED_INTEGER;if(n===Vf)return s.RG;if(n===Ah)return s.RG_INTEGER;if(n===Rh)return s.RGBA_INTEGER;if(n===Do||n===No||n===Uo||n===zo)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===yc||n===vc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===_c||n===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wf||n===wc||n===Ec||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var kc=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let g=e.getJointPose(m,n),x=this._getHandJoint(c,m);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:dy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends gi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,m=new Hc,g=e.getContextAttributes(),x=null,M=null,v=[],y=[],_=new St,w=null,S=new He;S.viewport=new ye;let A=new He;A.viewport=new ye;let b=[S,A],E=new kc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let j=v[it];return j===void 0&&(j=new hr,v[it]=j),j.getTargetRaySpace()},this.getControllerGrip=function(it){let j=v[it];return j===void 0&&(j=new hr,v[it]=j),j.getGripSpace()},this.getHand=function(it){let j=v[it];return j===void 0&&(j=new hr,v[it]=j),j.getHandSpace()};function N(it){let j=y.indexOf(it.inputSource);if(j===-1)return;let Mt=v[j];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,c||o),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function D(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let it=0;it<v.length;it++){let j=y[it];j!==null&&(y[it]=null,v[it].disconnect(j))}R=null,L=null,m.reset(),t.setRenderTarget(x),d=null,f=null,h=null,i=null,M=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(it){if(i=it,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),i.renderState.layers===void 0){let j={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new $e(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,Mt=null,V=null;g.depth&&(V=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?_s:ps,Mt=g.stencil?Ms:Di);let J={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(J),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new $e(f.textureWidth,f.textureHeight,{format:wn,type:Qn,depthTexture:new Yo(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(it){for(let j=0;j<it.removed.length;j++){let Mt=it.removed[j],V=y.indexOf(Mt);V>=0&&(y[V]=null,v[V].disconnect(Mt))}for(let j=0;j<it.added.length;j++){let Mt=it.added[j],V=y.indexOf(Mt);if(V===-1){for(let W=0;W<v.length;W++)if(W>=y.length){y.push(Mt),V=W;break}else if(y[W]===null){y[W]=Mt,V=W;break}if(V===-1)break}let J=v[V];J&&J.connect(Mt)}}let z=new H,q=new H;function k(it,j,Mt){z.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);let V=z.distanceTo(q),J=j.projectionMatrix.elements,W=Mt.projectionMatrix.elements,B=J[14]/(J[10]-1),et=J[14]/(J[10]+1),F=(J[9]+1)/J[5],Y=(J[9]-1)/J[5],I=(J[8]-1)/J[0],ht=(W[8]+1)/W[0],tt=B*I,rt=B*ht,Z=V/(-I+ht),wt=Z*-I;if(j.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(wt),it.translateZ(Z),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),J[10]===-1)it.projectionMatrix.copy(j.projectionMatrix),it.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let ct=B+Z,P=et+Z,C=tt-wt,X=rt+(V-wt),K=F*et/P*ct,ft=Y*et/P*ct;it.projectionMatrix.makePerspective(C,X,K,ft,ct,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Q(it,j){j===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(j.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(i===null)return;let j=it.near,Mt=it.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),E.near=A.near=S.near=j,E.far=A.far=S.far=Mt,(R!==E.near||L!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,L=E.far),S.layers.mask=it.layers.mask|2,A.layers.mask=it.layers.mask|4,E.layers.mask=S.layers.mask|A.layers.mask;let V=it.parent,J=E.cameras;Q(E,V);for(let W=0;W<J.length;W++)Q(J[W],V);J.length===2?k(E,S,A):E.projectionMatrix.copy(S.projectionMatrix),$(it,E,V)};function $(it,j,Mt){Mt===null?it.matrix.copy(j.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(j.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(j.projectionMatrix),it.projectionMatrixInverse.copy(j.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=bs*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)};let yt=null;function _t(it,j){if(u=j.getViewerPose(c||o),p=j,u!==null){let Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let V=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,V=!0);for(let W=0;W<Mt.length;W++){let B=Mt[W],et=null;if(d!==null)et=d.getViewport(B);else{let Y=h.getViewSubImage(f,B);et=Y.viewport,W===0&&(t.setRenderTargetTextures(M,Y.colorTexture,f.ignoreDepthValues?void 0:Y.depthStencilTexture),t.setRenderTarget(M))}let F=b[W];F===void 0&&(F=new He,F.layers.enable(W),F.viewport=new ye,b[W]=F),F.matrix.fromArray(B.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(B.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(et.x,et.y,et.width,et.height),W===0&&(E.matrix.copy(F.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),V===!0&&E.cameras.push(F)}let J=i.enabledFeatures;if(J&&J.includes("depth-sensing")){let W=h.getDepthInformation(Mt[0]);W&&W.isValid&&W.texture&&m.init(t,W,i.renderState)}}for(let Mt=0;Mt<v.length;Mt++){let V=y[Mt],J=v[Mt];V!==null&&J!==void 0&&J.update(V,j,c||o)}yt&&yt(it,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let Dt=new Kf;Dt.setAnimationLoop(_t),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}},Ri=new je,my=new Kt;function gy(s,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,jf(s)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function i(g,x,M,v,y){x.isMeshBasicMaterial||x.isMeshLambertMaterial?r(g,x):x.isMeshToonMaterial?(r(g,x),h(g,x)):x.isMeshPhongMaterial?(r(g,x),u(g,x)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&d(g,x,y)):x.isMeshMatcapMaterial?(r(g,x),p(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),m(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?l(g,x,M,v):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===We&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===We&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let M=t.get(x),v=M.envMap,y=M.envMapRotation;v&&(g.envMap.value=v,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(Ri)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,M,v){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*M,g.scale.value=v*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function u(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function h(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function d(g,x,M){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===We&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,x){x.matcap&&(g.matcap.value=x.matcap)}function m(g,x){let M=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(p(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",g));let _=v.program;n.updateUBOMapping(M,_);let w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){let v=h();M.__bindingPointIndex=v;let y=s.createBuffer(),_=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=i[M.id],y=M.uniforms,_=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,S=y.length;w<S;w++){let A=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,E=A.length;b<E;b++){let R=A[b];if(d(R,w,b,_)===!0){let L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],D=0;for(let O=0;O<N.length;O++){let z=N[O],q=m(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+D,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,v,y,_){let w=M.value,S=v+"_"+y;if(_[S]===void 0)return typeof w=="number"||typeof w=="boolean"?_[S]=w:_[S]=w.clone(),!0;{let A=_[S];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return _[S]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function p(M){let v=M.uniforms,y=0,_=16;for(let S=0,A=v.length;S<A;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,R=b.length;E<R;E++){let L=b[E],N=Array.isArray(L.value)?L.value:[L.value];for(let D=0,O=N.length;D<O;D++){let z=N[D],q=m(z),k=y%_,Q=k%q.boundary,$=k+Q;y+=Q,$!==0&&_-$<q.storage&&(y+=_-$),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=q.storage}}}let w=y%_;return w>0&&(y+=_-w),M.__size=y,M.__cache={},this}function m(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function x(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:x}}var Zo=class{constructor(t={}){let{canvas:e=b0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),m=new Int32Array(4),g=null,x=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=fi,this.toneMappingExposure=1;let y=this,_=!1,w=0,S=0,A=null,b=-1,E=null,R=new ye,L=new ye,N=null,D=new Lt(0),O=0,z=e.width,q=e.height,k=1,Q=null,$=null,yt=new ye(0,0,z,q),_t=new ye(0,0,z,q),Dt=!1,it=new mr,j=!1,Mt=!1,V=new Kt,J=new Kt,W=new H,B=new ye,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function Y(){return A===null?k:1}let I=n;function ht(U,st){return e.getContext(U,st)}try{let U={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mh}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),I===null){let st="webgl2";if(I=ht(st,U),I===null)throw ht(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let tt,rt,Z,wt,ct,P,C,X,K,ft,G,lt,dt,bt,Ct,at,ut,pt,At,Tt,Gt,Zt,ae,nt;function Pt(){tt=new Dx(I),tt.init(),Zt=new uy(I,tt),rt=new Ax(I,tt,t,Zt),Z=new ly(I,tt),rt.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),wt=new zx(I),ct=new $1,P=new hy(I,tt,Z,ct,rt,Zt,wt),C=new Cx(y),X=new Lx(y),K=new V0(I),ae=new Sx(I,K),ft=new Nx(I,K,wt,ae),G=new Bx(I,ft,K,wt),At=new Fx(I,rt,P),at=new Rx(ct),lt=new Z1(y,C,X,tt,rt,ae,at),dt=new gy(y,ct),bt=new K1,Ct=new iy(tt),pt=new Ex(y,C,X,Z,G,d,l),ut=new oy(y,G,rt),nt=new xy(I,wt,rt,Z),Tt=new Tx(I,tt,wt),Gt=new Ux(I,tt,wt),wt.programs=lt.programs,y.capabilities=rt,y.extensions=tt,y.properties=ct,y.renderLists=bt,y.shadowMap=ut,y.state=Z,y.info=wt}Pt();let vt=new Gc(y,I);this.xr=vt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let U=tt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=tt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(U){U!==void 0&&(k=U,this.setSize(z,q,!1))},this.getSize=function(U){return U.set(z,q)},this.setSize=function(U,st,mt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,q=st,e.width=Math.floor(U*k),e.height=Math.floor(st*k),mt===!0&&(e.style.width=U+"px",e.style.height=st+"px"),this.setViewport(0,0,U,st)},this.getDrawingBufferSize=function(U){return U.set(z*k,q*k).floor()},this.setDrawingBufferSize=function(U,st,mt){z=U,q=st,k=mt,e.width=Math.floor(U*mt),e.height=Math.floor(st*mt),this.setViewport(0,0,U,st)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(yt)},this.setViewport=function(U,st,mt,gt){U.isVector4?yt.set(U.x,U.y,U.z,U.w):yt.set(U,st,mt,gt),Z.viewport(R.copy(yt).multiplyScalar(k).round())},this.getScissor=function(U){return U.copy(_t)},this.setScissor=function(U,st,mt,gt){U.isVector4?_t.set(U.x,U.y,U.z,U.w):_t.set(U,st,mt,gt),Z.scissor(L.copy(_t).multiplyScalar(k).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(U){Z.setScissorTest(Dt=U)},this.setOpaqueSort=function(U){Q=U},this.setTransparentSort=function(U){$=U},this.getClearColor=function(U){return U.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(U=!0,st=!0,mt=!0){let gt=0;if(U){let ot=!1;if(A!==null){let It=A.texture.format;ot=It===Rh||It===Ah||It===Th}if(ot){let It=A.texture.type,Bt=It===Qn||It===Di||It===dr||It===Ms||It===wh||It===Eh,Vt=pt.getClearColor(),Wt=pt.getClearAlpha(),Qt=Vt.r,ne=Vt.g,Xt=Vt.b;Bt?(p[0]=Qt,p[1]=ne,p[2]=Xt,p[3]=Wt,I.clearBufferuiv(I.COLOR,0,p)):(m[0]=Qt,m[1]=ne,m[2]=Xt,m[3]=Wt,I.clearBufferiv(I.COLOR,0,m))}else gt|=I.COLOR_BUFFER_BIT}st&&(gt|=I.DEPTH_BUFFER_BIT),mt&&(gt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),bt.dispose(),Ct.dispose(),ct.dispose(),C.dispose(),X.dispose(),G.dispose(),ae.dispose(),nt.dispose(),lt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",cu),vt.removeEventListener("sessionend",hu),bi.stop()};function Et(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let U=wt.autoReset,st=ut.enabled,mt=ut.autoUpdate,gt=ut.needsUpdate,ot=ut.type;Pt(),wt.autoReset=U,ut.enabled=st,ut.autoUpdate=mt,ut.needsUpdate=gt,ut.type=ot}function Ut(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function jt(U){let st=U.target;st.removeEventListener("dispose",jt),de(st)}function de(U){Ue(U),ct.remove(U)}function Ue(U){let st=ct.get(U).programs;st!==void 0&&(st.forEach(function(mt){lt.releaseProgram(mt)}),U.isShaderMaterial&&lt.releaseShaderCache(U))}this.renderBufferDirect=function(U,st,mt,gt,ot,It){st===null&&(st=et);let Bt=ot.isMesh&&ot.matrixWorld.determinant()<0,Vt=Ep(U,st,mt,gt,ot);Z.setMaterial(gt,Bt);let Wt=mt.index,Qt=1;if(gt.wireframe===!0){if(Wt=ft.getWireframeAttribute(mt),Wt===void 0)return;Qt=2}let ne=mt.drawRange,Xt=mt.attributes.position,fe=ne.start*Qt,Me=(ne.start+ne.count)*Qt;It!==null&&(fe=Math.max(fe,It.start*Qt),Me=Math.min(Me,(It.start+It.count)*Qt)),Wt!==null?(fe=Math.max(fe,0),Me=Math.min(Me,Wt.count)):Xt!=null&&(fe=Math.max(fe,0),Me=Math.min(Me,Xt.count));let _e=Me-fe;if(_e<0||_e===1/0)return;ae.setup(ot,gt,Vt,mt,Wt);let Qe,pe=Tt;if(Wt!==null&&(Qe=K.get(Wt),pe=Gt,pe.setIndex(Qe)),ot.isMesh)gt.wireframe===!0?(Z.setLineWidth(gt.wireframeLinewidth*Y()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(ot.isLine){let qt=gt.linewidth;qt===void 0&&(qt=1),Z.setLineWidth(qt*Y()),ot.isLineSegments?pe.setMode(I.LINES):ot.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else ot.isPoints?pe.setMode(I.POINTS):ot.isSprite&&pe.setMode(I.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)pe.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))pe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let qt=ot._multiDrawStarts,Vn=ot._multiDrawCounts,me=ot._multiDrawCount,xn=Wt?K.get(Wt).bytesPerElement:1,Xi=ct.get(gt).currentProgram.getUniforms();for(let sn=0;sn<me;sn++)Xi.setValue(I,"_gl_DrawID",sn),pe.render(qt[sn]/xn,Vn[sn])}else if(ot.isInstancedMesh)pe.renderInstances(fe,_e,ot.count);else if(mt.isInstancedBufferGeometry){let qt=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Vn=Math.min(mt.instanceCount,qt);pe.renderInstances(fe,_e,Vn)}else pe.render(fe,_e)};function he(U,st,mt){U.transparent===!0&&U.side===re&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,Jr(U,st,mt),U.side=di,U.needsUpdate=!0,Jr(U,st,mt),U.side=re):Jr(U,st,mt)}this.compile=function(U,st,mt=null){mt===null&&(mt=U),x=Ct.get(mt),x.init(st),v.push(x),mt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(st.layers)&&(x.pushLight(ot),ot.castShadow&&x.pushShadow(ot))}),U!==mt&&U.traverseVisible(function(ot){ot.isLight&&ot.layers.test(st.layers)&&(x.pushLight(ot),ot.castShadow&&x.pushShadow(ot))}),x.setupLights();let gt=new Set;return U.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let It=ot.material;if(It)if(Array.isArray(It))for(let Bt=0;Bt<It.length;Bt++){let Vt=It[Bt];he(Vt,mt,ot),gt.add(Vt)}else he(It,mt,ot),gt.add(It)}),v.pop(),x=null,gt},this.compileAsync=function(U,st,mt=null){let gt=this.compile(U,st,mt);return new Promise(ot=>{function It(){if(gt.forEach(function(Bt){ct.get(Bt).currentProgram.isReady()&&gt.delete(Bt)}),gt.size===0){ot(U);return}setTimeout(It,10)}tt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let gn=null;function Gn(U){gn&&gn(U)}function cu(){bi.stop()}function hu(){bi.start()}let bi=new Kf;bi.setAnimationLoop(Gn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(U){gn=U,vt.setAnimationLoop(U),U===null?bi.stop():bi.start()},vt.addEventListener("sessionstart",cu),vt.addEventListener("sessionend",hu),this.render=function(U,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(st),st=vt.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,st,A),x=Ct.get(U,v.length),x.init(st),v.push(x),J.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),it.setFromProjectionMatrix(J),Mt=this.localClippingEnabled,j=at.init(this.clippingPlanes,Mt),g=bt.get(U,M.length),g.init(),M.push(g),vt.enabled===!0&&vt.isPresenting===!0){let It=y.xr.getDepthSensingMesh();It!==null&&ol(It,st,-1/0,y.sortObjects)}ol(U,st,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Q,$),F=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,F&&pt.addToRenderList(g,U),this.info.render.frame++,j===!0&&at.beginShadows();let mt=x.state.shadowsArray;ut.render(mt,U,st),j===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let gt=g.opaque,ot=g.transmissive;if(x.setupLights(),st.isArrayCamera){let It=st.cameras;if(ot.length>0)for(let Bt=0,Vt=It.length;Bt<Vt;Bt++){let Wt=It[Bt];fu(gt,ot,U,Wt)}F&&pt.render(U);for(let Bt=0,Vt=It.length;Bt<Vt;Bt++){let Wt=It[Bt];uu(g,U,Wt,Wt.viewport)}}else ot.length>0&&fu(gt,ot,U,st),F&&pt.render(U),uu(g,U,st);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(y,U,st),ae.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?(x=v[v.length-1],j===!0&&at.setGlobalState(y.clippingPlanes,x.state.camera)):x=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ol(U,st,mt,gt){if(U.visible===!1)return;if(U.layers.test(st.layers)){if(U.isGroup)mt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(st);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||it.intersectsSprite(U)){gt&&B.setFromMatrixPosition(U.matrixWorld).applyMatrix4(J);let Bt=G.update(U),Vt=U.material;Vt.visible&&g.push(U,Bt,Vt,mt,B.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||it.intersectsObject(U))){let Bt=G.update(U),Vt=U.material;if(gt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),B.copy(U.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),B.copy(Bt.boundingSphere.center)),B.applyMatrix4(U.matrixWorld).applyMatrix4(J)),Array.isArray(Vt)){let Wt=Bt.groups;for(let Qt=0,ne=Wt.length;Qt<ne;Qt++){let Xt=Wt[Qt],fe=Vt[Xt.materialIndex];fe&&fe.visible&&g.push(U,Bt,fe,mt,B.z,Xt)}}else Vt.visible&&g.push(U,Bt,Vt,mt,B.z,null)}}let It=U.children;for(let Bt=0,Vt=It.length;Bt<Vt;Bt++)ol(It[Bt],st,mt,gt)}function uu(U,st,mt,gt){let ot=U.opaque,It=U.transmissive,Bt=U.transparent;x.setupLightsView(mt),j===!0&&at.setGlobalState(y.clippingPlanes,mt),gt&&Z.viewport(R.copy(gt)),ot.length>0&&Kr(ot,st,mt),It.length>0&&Kr(It,st,mt),Bt.length>0&&Kr(Bt,st,mt),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fu(U,st,mt,gt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[gt.id]===void 0&&(x.state.transmissionRenderTarget[gt.id]=new $e(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Tn:Qn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let It=x.state.transmissionRenderTarget[gt.id],Bt=gt.viewport||R;It.setSize(Bt.z,Bt.w);let Vt=y.getRenderTarget();y.setRenderTarget(It),y.getClearColor(D),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),F&&pt.render(mt);let Wt=y.toneMapping;y.toneMapping=fi;let Qt=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),x.setupLightsView(gt),j===!0&&at.setGlobalState(y.clippingPlanes,gt),Kr(U,mt,gt),P.updateMultisampleRenderTarget(It),P.updateRenderTargetMipmap(It),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Xt=0,fe=st.length;Xt<fe;Xt++){let Me=st[Xt],_e=Me.object,Qe=Me.geometry,pe=Me.material,qt=Me.group;if(pe.side===re&&_e.layers.test(gt.layers)){let Vn=pe.side;pe.side=We,pe.needsUpdate=!0,du(_e,mt,gt,Qe,pe,qt),pe.side=Vn,pe.needsUpdate=!0,ne=!0}}ne===!0&&(P.updateMultisampleRenderTarget(It),P.updateRenderTargetMipmap(It))}y.setRenderTarget(Vt),y.setClearColor(D,O),Qt!==void 0&&(gt.viewport=Qt),y.toneMapping=Wt}function Kr(U,st,mt){let gt=st.isScene===!0?st.overrideMaterial:null;for(let ot=0,It=U.length;ot<It;ot++){let Bt=U[ot],Vt=Bt.object,Wt=Bt.geometry,Qt=gt===null?Bt.material:gt,ne=Bt.group;Vt.layers.test(mt.layers)&&du(Vt,st,mt,Wt,Qt,ne)}}function du(U,st,mt,gt,ot,It){U.onBeforeRender(y,st,mt,gt,ot,It),U.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ot.onBeforeRender(y,st,mt,gt,U,It),ot.transparent===!0&&ot.side===re&&ot.forceSinglePass===!1?(ot.side=We,ot.needsUpdate=!0,y.renderBufferDirect(mt,st,gt,ot,U,It),ot.side=di,ot.needsUpdate=!0,y.renderBufferDirect(mt,st,gt,ot,U,It),ot.side=re):y.renderBufferDirect(mt,st,gt,ot,U,It),U.onAfterRender(y,st,mt,gt,ot,It)}function Jr(U,st,mt){st.isScene!==!0&&(st=et);let gt=ct.get(U),ot=x.state.lights,It=x.state.shadowsArray,Bt=ot.state.version,Vt=lt.getParameters(U,ot.state,It,st,mt),Wt=lt.getProgramCacheKey(Vt),Qt=gt.programs;gt.environment=U.isMeshStandardMaterial?st.environment:null,gt.fog=st.fog,gt.envMap=(U.isMeshStandardMaterial?X:C).get(U.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&U.envMap===null?st.environmentRotation:U.envMapRotation,Qt===void 0&&(U.addEventListener("dispose",jt),Qt=new Map,gt.programs=Qt);let ne=Qt.get(Wt);if(ne!==void 0){if(gt.currentProgram===ne&&gt.lightsStateVersion===Bt)return mu(U,Vt),ne}else Vt.uniforms=lt.getUniforms(U),U.onBeforeCompile(Vt,y),ne=lt.acquireProgram(Vt,Wt),Qt.set(Wt,ne),gt.uniforms=Vt.uniforms;let Xt=gt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Xt.clippingPlanes=at.uniform),mu(U,Vt),gt.needsLights=Tp(U),gt.lightsStateVersion=Bt,gt.needsLights&&(Xt.ambientLightColor.value=ot.state.ambient,Xt.lightProbe.value=ot.state.probe,Xt.directionalLights.value=ot.state.directional,Xt.directionalLightShadows.value=ot.state.directionalShadow,Xt.spotLights.value=ot.state.spot,Xt.spotLightShadows.value=ot.state.spotShadow,Xt.rectAreaLights.value=ot.state.rectArea,Xt.ltc_1.value=ot.state.rectAreaLTC1,Xt.ltc_2.value=ot.state.rectAreaLTC2,Xt.pointLights.value=ot.state.point,Xt.pointLightShadows.value=ot.state.pointShadow,Xt.hemisphereLights.value=ot.state.hemi,Xt.directionalShadowMap.value=ot.state.directionalShadowMap,Xt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Xt.spotShadowMap.value=ot.state.spotShadowMap,Xt.spotLightMatrix.value=ot.state.spotLightMatrix,Xt.spotLightMap.value=ot.state.spotLightMap,Xt.pointShadowMap.value=ot.state.pointShadowMap,Xt.pointShadowMatrix.value=ot.state.pointShadowMatrix),gt.currentProgram=ne,gt.uniformsList=null,ne}function pu(U){if(U.uniformsList===null){let st=U.currentProgram.getUniforms();U.uniformsList=gs.seqWithValue(st.seq,U.uniforms)}return U.uniformsList}function mu(U,st){let mt=ct.get(U);mt.outputColorSpace=st.outputColorSpace,mt.batching=st.batching,mt.batchingColor=st.batchingColor,mt.instancing=st.instancing,mt.instancingColor=st.instancingColor,mt.instancingMorph=st.instancingMorph,mt.skinning=st.skinning,mt.morphTargets=st.morphTargets,mt.morphNormals=st.morphNormals,mt.morphColors=st.morphColors,mt.morphTargetsCount=st.morphTargetsCount,mt.numClippingPlanes=st.numClippingPlanes,mt.numIntersection=st.numClipIntersection,mt.vertexAlphas=st.vertexAlphas,mt.vertexTangents=st.vertexTangents,mt.toneMapping=st.toneMapping}function Ep(U,st,mt,gt,ot){st.isScene!==!0&&(st=et),P.resetTextureUnits();let It=st.fog,Bt=gt.isMeshStandardMaterial?st.environment:null,Vt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ps,Wt=(gt.isMeshStandardMaterial?X:C).get(gt.envMap||Bt),Qt=gt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ne=!!mt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Xt=!!mt.morphAttributes.position,fe=!!mt.morphAttributes.normal,Me=!!mt.morphAttributes.color,_e=fi;gt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=y.toneMapping);let Qe=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,pe=Qe!==void 0?Qe.length:0,qt=ct.get(gt),Vn=x.state.lights;if(j===!0&&(Mt===!0||U!==E)){let hn=U===E&&gt.id===b;at.setState(gt,U,hn)}let me=!1;gt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Vn.state.version||qt.outputColorSpace!==Vt||ot.isBatchedMesh&&qt.batching===!1||!ot.isBatchedMesh&&qt.batching===!0||ot.isBatchedMesh&&qt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&qt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&qt.instancing===!1||!ot.isInstancedMesh&&qt.instancing===!0||ot.isSkinnedMesh&&qt.skinning===!1||!ot.isSkinnedMesh&&qt.skinning===!0||ot.isInstancedMesh&&qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&qt.instancingMorph===!1&&ot.morphTexture!==null||qt.envMap!==Wt||gt.fog===!0&&qt.fog!==It||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==at.numPlanes||qt.numIntersection!==at.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==ne||qt.morphTargets!==Xt||qt.morphNormals!==fe||qt.morphColors!==Me||qt.toneMapping!==_e||qt.morphTargetsCount!==pe)&&(me=!0):(me=!0,qt.__version=gt.version);let xn=qt.currentProgram;me===!0&&(xn=Jr(gt,st,ot));let Xi=!1,sn=!1,Ys=!1,be=xn.getUniforms(),Pn=qt.uniforms;if(Z.useProgram(xn.program)&&(Xi=!0,sn=!0,Ys=!0),gt.id!==b&&(b=gt.id,sn=!0),Xi||E!==U){Z.buffers.depth.getReversed()?(V.copy(U.projectionMatrix),E0(V),S0(V),be.setValue(I,"projectionMatrix",V)):be.setValue(I,"projectionMatrix",U.projectionMatrix),be.setValue(I,"viewMatrix",U.matrixWorldInverse);let ni=be.map.cameraPosition;ni!==void 0&&ni.setValue(I,W.setFromMatrixPosition(U.matrixWorld)),rt.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&be.setValue(I,"isOrthographic",U.isOrthographicCamera===!0),E!==U&&(E=U,sn=!0,Ys=!0)}if(ot.isSkinnedMesh){be.setOptional(I,ot,"bindMatrix"),be.setOptional(I,ot,"bindMatrixInverse");let hn=ot.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),be.setValue(I,"boneTexture",hn.boneTexture,P))}ot.isBatchedMesh&&(be.setOptional(I,ot,"batchingTexture"),be.setValue(I,"batchingTexture",ot._matricesTexture,P),be.setOptional(I,ot,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",ot._indirectTexture,P),be.setOptional(I,ot,"batchingColorTexture"),ot._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",ot._colorsTexture,P));let Zs=mt.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&At.update(ot,mt,xn),(sn||qt.receiveShadow!==ot.receiveShadow)&&(qt.receiveShadow=ot.receiveShadow,be.setValue(I,"receiveShadow",ot.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Pn.envMap.value=Wt,Pn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&st.environment!==null&&(Pn.envMapIntensity.value=st.environmentIntensity),sn&&(be.setValue(I,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&Sp(Pn,Ys),It&&gt.fog===!0&&dt.refreshFogUniforms(Pn,It),dt.refreshMaterialUniforms(Pn,gt,k,q,x.state.transmissionRenderTarget[U.id]),gs.upload(I,pu(qt),Pn,P)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(gs.upload(I,pu(qt),Pn,P),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&be.setValue(I,"center",ot.center),be.setValue(I,"modelViewMatrix",ot.modelViewMatrix),be.setValue(I,"normalMatrix",ot.normalMatrix),be.setValue(I,"modelMatrix",ot.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){let hn=gt.uniformsGroups;for(let ni=0,ii=hn.length;ni<ii;ni++){let gu=hn[ni];nt.update(gu,xn),nt.bind(gu,xn)}}return xn}function Sp(U,st){U.ambientLightColor.needsUpdate=st,U.lightProbe.needsUpdate=st,U.directionalLights.needsUpdate=st,U.directionalLightShadows.needsUpdate=st,U.pointLights.needsUpdate=st,U.pointLightShadows.needsUpdate=st,U.spotLights.needsUpdate=st,U.spotLightShadows.needsUpdate=st,U.rectAreaLights.needsUpdate=st,U.hemisphereLights.needsUpdate=st}function Tp(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,st,mt){ct.get(U.texture).__webglTexture=st,ct.get(U.depthTexture).__webglTexture=mt;let gt=ct.get(U);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=mt===void 0,gt.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,st){let mt=ct.get(U);mt.__webglFramebuffer=st,mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(U,st=0,mt=0){A=U,w=st,S=mt;let gt=!0,ot=null,It=!1,Bt=!1;if(U){let Wt=ct.get(U);if(Wt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),gt=!1;else if(Wt.__webglFramebuffer===void 0)P.setupRenderTarget(U);else if(Wt.__hasExternalTextures)P.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Xt=U.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&ct.has(Xt)&&(U.width!==Xt.image.width||U.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(U)}}let Qt=U.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Bt=!0);let ne=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ne[st])?ot=ne[st][mt]:ot=ne[st],It=!0):U.samples>0&&P.useMultisampledRTT(U)===!1?ot=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(ne)?ot=ne[mt]:ot=ne,R.copy(U.viewport),L.copy(U.scissor),N=U.scissorTest}else R.copy(yt).multiplyScalar(k).floor(),L.copy(_t).multiplyScalar(k).floor(),N=Dt;if(Z.bindFramebuffer(I.FRAMEBUFFER,ot)&&gt&&Z.drawBuffers(U,ot),Z.viewport(R),Z.scissor(L),Z.setScissorTest(N),It){let Wt=ct.get(U.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+st,Wt.__webglTexture,mt)}else if(Bt){let Wt=ct.get(U.texture),Qt=st||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,mt||0,Qt)}b=-1},this.readRenderTargetPixels=function(U,st,mt,gt,ot,It,Bt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){Z.bindFramebuffer(I.FRAMEBUFFER,Vt);try{let Wt=U.texture,Qt=Wt.format,ne=Wt.type;if(!rt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=U.width-gt&&mt>=0&&mt<=U.height-ot&&I.readPixels(st,mt,gt,ot,Zt.convert(Qt),Zt.convert(ne),It)}finally{let Wt=A!==null?ct.get(A).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(U,st,mt,gt,ot,It,Bt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){let Wt=U.texture,Qt=Wt.format,ne=Wt.type;if(!rt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(st>=0&&st<=U.width-gt&&mt>=0&&mt<=U.height-ot){Z.bindFramebuffer(I.FRAMEBUFFER,Vt);let Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,It.byteLength,I.STREAM_READ),I.readPixels(st,mt,gt,ot,Zt.convert(Qt),Zt.convert(ne),0);let fe=A!==null?ct.get(A).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,fe);let Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await w0(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,It),I.deleteBuffer(Xt),I.deleteSync(Me),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,st=null,mt=0){U.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),st=arguments[0]||null,U=arguments[1]);let gt=Math.pow(2,-mt),ot=Math.floor(U.image.width*gt),It=Math.floor(U.image.height*gt),Bt=st!==null?st.x:0,Vt=st!==null?st.y:0;P.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,mt,0,0,Bt,Vt,ot,It),Z.unbindTexture()},this.copyTextureToTexture=function(U,st,mt=null,gt=null,ot=0){U.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,U=arguments[1],st=arguments[2],ot=arguments[3]||0,mt=null);let It,Bt,Vt,Wt,Qt,ne,Xt,fe,Me,_e=U.isCompressedTexture?U.mipmaps[ot]:U.image;mt!==null?(It=mt.max.x-mt.min.x,Bt=mt.max.y-mt.min.y,Vt=mt.isBox3?mt.max.z-mt.min.z:1,Wt=mt.min.x,Qt=mt.min.y,ne=mt.isBox3?mt.min.z:0):(It=_e.width,Bt=_e.height,Vt=_e.depth||1,Wt=0,Qt=0,ne=0),gt!==null?(Xt=gt.x,fe=gt.y,Me=gt.z):(Xt=0,fe=0,Me=0);let Qe=Zt.convert(st.format),pe=Zt.convert(st.type),qt;st.isData3DTexture?(P.setTexture3D(st,0),qt=I.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(P.setTexture2DArray(st,0),qt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(st,0),qt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,st.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,st.unpackAlignment);let Vn=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xn=I.getParameter(I.UNPACK_SKIP_PIXELS),Xi=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ne);let Ys=U.isDataArrayTexture||U.isData3DTexture,be=st.isDataArrayTexture||st.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let Pn=ct.get(U),Zs=ct.get(st),hn=ct.get(Pn.__renderTarget),ni=ct.get(Zs.__renderTarget);Z.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Vt;ii++)Ys&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ct.get(U).__webglTexture,ot,ne+ii),U.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ct.get(st).__webglTexture,ot,Me+ii),I.blitFramebuffer(Wt,Qt,It,Bt,Xt,fe,It,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(qt,ot,Xt,fe,Me+ii,Wt,Qt,It,Bt):I.copyTexSubImage2D(qt,ot,Xt,fe,Me+ii,Wt,Qt,It,Bt);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?U.isDataTexture||U.isData3DTexture?I.texSubImage3D(qt,ot,Xt,fe,Me,It,Bt,Vt,Qe,pe,_e.data):st.isCompressedArrayTexture?I.compressedTexSubImage3D(qt,ot,Xt,fe,Me,It,Bt,Vt,Qe,_e.data):I.texSubImage3D(qt,ot,Xt,fe,Me,It,Bt,Vt,Qe,pe,_e):U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ot,Xt,fe,It,Bt,Qe,pe,_e.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ot,Xt,fe,_e.width,_e.height,Qe,_e.data):I.texSubImage2D(I.TEXTURE_2D,ot,Xt,fe,It,Bt,Qe,pe,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,Vn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),ot===0&&st.generateMipmaps&&I.generateMipmap(qt),Z.unbindTexture()},this.copyTextureToTexture3D=function(U,st,mt=null,gt=null,ot=0){return U.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,gt=arguments[1]||null,U=arguments[2],st=arguments[3],ot=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,st,mt,gt,ot)},this.initRenderTarget=function(U){ct.get(U).__webglFramebuffer===void 0&&P.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?P.setTextureCube(U,0):U.isData3DTexture?P.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?P.setTexture2DArray(U,0):P.setTexture2D(U,0),Z.unbindTexture()},this.resetState=function(){w=0,S=0,A=null,Z.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var $o=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jo=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new H,xr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yr=class extends fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Qs=new H,as=new H,ls=new H,cs=new St,tr=new St,nd=new Kt,_o=new H,er=new H,bo=new H,xf=new St,Ul=new St,yf=new St,Jo=class extends Ne{constructor(t=new yr){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ko(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new xr(n,3,0,!1)),os.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;wo(_o.set(-.5,-.5,0),ls,o,as,i,r),wo(er.set(.5,-.5,0),ls,o,as,i,r),wo(bo.set(.5,.5,0),ls,o,as,i,r),xf.set(0,0),Ul.set(1,0),yf.set(1,1);let a=t.ray.intersectTriangle(_o,er,bo,!1,Qs);if(a===null&&(wo(er.set(-.5,.5,0),ls,o,as,i,r),Ul.set(0,1),a=t.ray.intersectTriangle(_o,bo,er,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:ui.getInterpolation(Qs,_o,er,bo,xf,Ul,yf,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wo(s,t,e,n,i,r){cs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(tr.x=r*cs.x-i*cs.y,tr.y=i*cs.x+r*cs.y):tr.copy(cs),s.copy(t),s.x+=tr.x,s.y+=tr.y,s.applyMatrix4(nd)}var Vc=class extends tn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new Kt,vf=new Kt,Eo=[],Mf=new ti,yy=new Kt,nr=new Rt,ir=new ei,Ce=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Mf.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Mf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),ir.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),vf.multiplyMatrices(n,hs),nr.matrixWorld=vf,nr.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){let l=Eo[o];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vc(new Float32Array(i*this.count),i,this.count,Sh,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mr=class extends fn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qo=new H,ta=new H,_f=new Kt,sr=new pr,So=new ei,zl=new H,bf=new H,Wc=class extends Ne{constructor(t=new ee,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Qo.fromBufferAttribute(e,i-1),ta.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Qo.distanceTo(ta);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;_f.copy(i).invert(),sr.copy(t.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=c){let x=u.getX(m),M=u.getX(m+1),v=To(this,t,sr,l,x,M);v&&e.push(v)}if(this.isLineLoop){let m=u.getX(p-1),g=u.getX(d),x=To(this,t,sr,l,m,g);x&&e.push(x)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=c){let x=To(this,t,sr,l,m,m+1);x&&e.push(x)}if(this.isLineLoop){let m=To(this,t,sr,l,p-1,d);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function To(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Qo.fromBufferAttribute(o,i),ta.fromBufferAttribute(o,r),e.distanceSqToSegment(Qo,ta,zl,bf)>n)return;zl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(zl);if(!(l<t.near||l>t.far))return{distance:l,point:bf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var wf=new H,Ef=new H,ea=class extends Wc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wf.fromBufferAttribute(e,i),Ef.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wf.distanceTo(Ef);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _r=class extends fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sf=new Kt,Xc=new pr,Ao=new ei,Ro=new H,na=class extends Ne{constructor(t=new ee,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Sf.copy(i).invert(),Xc.copy(t.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,m=d;p<m;p++){let g=c.getX(p);Ro.fromBufferAttribute(h,g),Tf(Ro,g,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,m=d;p<m;p++)Ro.fromBufferAttribute(h,p),Tf(Ro,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tf(s,t,e,n,i,r,o){let a=Xc.distanceSqToPoint(s);if(a<e){let l=new H;Xc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Le=class extends tn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new St:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,i=[],r=[],o=[],a=new H,l=new Kt;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ze(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qc=class extends br{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Co=new H,Fl=new Lh,Bl=new Lh,Ol=new Lh,Yc=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Co.subVectors(i[0],i[1]).add(i[0]),c=Co);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Co.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),Fl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,m,g),Bl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,m,g),Ol.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,m,g)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Bl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ol.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Fl.calc(l),Bl.calc(l),Ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Af(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function vy(s,t){let e=1-s;return e*e*t}function My(s,t){return 2*(1-s)*s*t}function _y(s,t){return s*s*t}function ur(s,t,e,n){return vy(s,t)+My(s,e)+_y(s,n)}function by(s,t){let e=1-s;return e*e*e*t}function wy(s,t){let e=1-s;return 3*e*e*s*t}function Ey(s,t){return 3*(1-s)*s*s*t}function Sy(s,t){return s*s*s*t}function fr(s,t,e,n,i){return by(s,t)+wy(s,e)+Ey(s,n)+Sy(s,i)}var ia=class extends dn{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends dn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y),fr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends dn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends dn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends dn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,i.x,r.x,o.x),ur(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends dn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,i.x,r.x,o.x),ur(t,i.y,r.y,o.y),ur(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Af(a,l.x,c.x,u.x,h.x),Af(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new St().fromArray(i))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:Yc,CubicBezierCurve:ia,CubicBezierCurve3:Zc,EllipseCurve:br,LineCurve:sa,LineCurve3:$c,QuadraticBezierCurve:ra,QuadraticBezierCurve3:jc,SplineCurve:oa}),Jc=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Kc[i.type]().fromJSON(i))}return this}},aa=class extends Jc{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new sa(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ra(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new ia(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new br(t,e,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},la=class s extends ee{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ze(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new H,f=new St,d=new H,p=new H,m=new H,g=0,x=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,d.x=x*1,d.y=-g,d.z=x*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:g=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,d.x=x*1,d.y=-g,d.z=x*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let M=0;M<=e;M++){let v=n+M*u*i,y=Math.sin(v),_=Math.cos(v);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*y,h.y=t[w].y,h.z=t[w].x*_,o.push(h.x,h.y,h.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);let S=l[3*w+0]*y,A=l[3*w+1],b=l[3*w+0]*_;c.push(S,A,b)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,_=y,w=y+t.length,S=y+t.length+1,A=y+1;r.push(_,w,A),r.push(S,A,w)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ni=class s extends ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new St;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},te=class s extends ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,m=[],g=n/2,x=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function M(){let y=new H,_=new H,w=0,S=(e-t)/n;for(let A=0;A<=r;A++){let b=[],E=A/r,R=E*(e-t)+t;for(let L=0;L<=i;L++){let N=L/i,D=N*l+a,O=Math.sin(D),z=Math.cos(D);_.x=R*O,_.y=-E*n+g,_.z=R*z,h.push(_.x,_.y,_.z),y.set(O,S,z).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-E),b.push(p++)}m.push(b)}for(let A=0;A<i;A++)for(let b=0;b<r;b++){let E=m[b][A],R=m[b+1][A],L=m[b+1][A+1],N=m[b][A+1];(t>0||b!==0)&&(u.push(E,R,N),w+=3),(e>0||b!==r-1)&&(u.push(R,L,N),w+=3)}c.addGroup(x,w,0),x+=w}function v(y){let _=p,w=new St,S=new H,A=0,b=y===!0?t:e,E=y===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),p++;let R=p;for(let L=0;L<=i;L++){let D=L/i*l+a,O=Math.cos(D),z=Math.sin(D);S.x=b*z,S.y=g*E,S.z=b*O,h.push(S.x,S.y,S.z),f.push(0,E,0),w.x=O*.5+.5,w.y=z*.5*E+.5,d.push(w.x,w.y),p++}for(let L=0;L<i;L++){let N=_+L,D=R+L;y===!0?u.push(D,D+1,N):u.push(D+1,D,N),A+=3}c.addGroup(x,A,y===!0?1:2),x+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class s extends te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qc=class s extends ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new H,y=new H,_=new H;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],y),d(e[w+2],_),l(v,y,_,M)}function l(M,v,y,_){let w=_+1,S=[];for(let A=0;A<=w;A++){S[A]=[];let b=M.clone().lerp(y,A/w),E=v.clone().lerp(y,A/w),R=w-A;for(let L=0;L<=R;L++)L===0&&A===w?S[A][L]=b:S[A][L]=b.clone().lerp(E,L/R)}for(let A=0;A<w;A++)for(let b=0;b<2*(w-A)-1;b++){let E=Math.floor(b/2);b%2===0?(f(S[A][E+1]),f(S[A+1][E]),f(S[A][E])):(f(S[A][E+1]),f(S[A+1][E+1]),f(S[A+1][E]))}}function c(M){let v=new H;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){let M=new H;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=g(M)/2/Math.PI+.5,_=x(M)/Math.PI+.5;o.push(y,1-_)}p(),h()}function h(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],_=o[M+4],w=Math.max(v,y,_),S=Math.min(v,y,_);w>.9&&S<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),_<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){let M=new H,v=new H,y=new H,_=new H,w=new St,S=new St,A=new St;for(let b=0,E=0;b<r.length;b+=9,E+=6){M.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),w.set(o[E+0],o[E+1]),S.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),_.copy(M).add(v).add(y).divideScalar(3);let R=g(_);m(w,E+0,M,R),m(S,E+2,v,R),m(A,E+4,y,R)}}function m(M,v,y,_){_<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=_/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function x(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Rs=class extends aa{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new aa().fromJSON(i))}return this}},Ty={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=id(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=Py(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let p=e;p<i;p+=e)h=s[p],f=s[p+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return wr(r,o,e,a,l,d,0),o}};function id(s,t,e,n,i){let r,o;if(i===Gy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Rf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rf(r,s[r],s[r+1],o);return o&&ba(o,o.next)&&(Sr(o),o=o.next),o}function Ui(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ba(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&zy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ry(s,n,i,r):Ay(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Sr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Cy(Ui(s),t,e),wr(s,t,e,n,i,r,2)):o===2&&Iy(s,t,e,n,i,r):wr(Ui(s),t,e,n,i,r,1);break}}}function Ay(s){let t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&fs(i,a,r,l,o,c,p.x,p.y)&&Ae(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ry(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,x=th(d,p,t,e,n),M=th(m,g,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=x&&y&&y.z<=M;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&fs(a,u,l,h,c,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=m&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&fs(a,u,l,h,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=x;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&fs(a,u,l,h,c,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=m&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&fs(a,u,l,h,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ba(i,r)&&sd(i,n,n.next,r)&&Er(i,r)&&Er(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Sr(n),Sr(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function Iy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Oy(o,a)){let l=rd(o,a);o=Ui(o,o.next),l=Ui(l,l.next),wr(o,t,e,n,i,r,0),wr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Py(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=id(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(By(c));for(i.sort(Ly),r=0;r<i.length;r++)e=Dy(i[r],e);return e}function Ly(s,t){return s.x-t.x}function Dy(s,t){let e=Ny(s,t);if(!e)return t;let n=rd(e,s);return Ui(n,n.next),Ui(e,e.next)}function Ny(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&fs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Er(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Uy(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Uy(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function zy(s,t,e,n){let i=s;do i.z===0&&(i.z=th(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Fy(i)}function Fy(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function th(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function By(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function fs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Oy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ky(s,t)&&(Er(s,t)&&Er(t,s)&&Hy(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||ba(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ba(s,t){return s.x===t.x&&s.y===t.y}function sd(s,t,e,n){let i=Po(Ae(s,t,e)),r=Po(Ae(s,t,n)),o=Po(Ae(e,n,s)),a=Po(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&Io(s,e,t)||r===0&&Io(s,n,t)||o===0&&Io(e,s,n)||a===0&&Io(e,t,n))}function Io(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Po(s){return s>0?1:s<0?-1:0}function ky(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&sd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Er(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function Hy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function rd(s,t){let e=new eh(s.i,s.x,s.y),n=new eh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rf(s,t,e,n){let i=new eh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function eh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Fn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Cf(t),If(n,t);let o=t.length;e.forEach(Cf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,If(n,e[l]);let a=Ty.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function If(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Tr=class s extends ee{constructor(t=new Rs([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Vy,v,y=!1,_,w,S,A;x&&(v=x.getSpacedPoints(u),y=!0,f=!1,_=x.computeFrenetFrames(u,!1),w=new H,S=new H,A=new H),f||(g=0,d=0,p=0,m=0);let b=a.extractPoints(c),E=b.shape,R=b.holes;if(!Fn.isClockWise(E)){E=E.reverse();for(let F=0,Y=R.length;F<Y;F++){let I=R[F];Fn.isClockWise(I)&&(R[F]=I.reverse())}}let N=Fn.triangulateShape(E,R),D=E;for(let F=0,Y=R.length;F<Y;F++){let I=R[F];E=E.concat(I)}function O(F,Y,I){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(Y,I)}let z=E.length,q=N.length;function k(F,Y,I){let ht,tt,rt,Z=F.x-Y.x,wt=F.y-Y.y,ct=I.x-F.x,P=I.y-F.y,C=Z*Z+wt*wt,X=Z*P-wt*ct;if(Math.abs(X)>Number.EPSILON){let K=Math.sqrt(C),ft=Math.sqrt(ct*ct+P*P),G=Y.x-wt/K,lt=Y.y+Z/K,dt=I.x-P/ft,bt=I.y+ct/ft,Ct=((dt-G)*P-(bt-lt)*ct)/(Z*P-wt*ct);ht=G+Z*Ct-F.x,tt=lt+wt*Ct-F.y;let at=ht*ht+tt*tt;if(at<=2)return new St(ht,tt);rt=Math.sqrt(at/2)}else{let K=!1;Z>Number.EPSILON?ct>Number.EPSILON&&(K=!0):Z<-Number.EPSILON?ct<-Number.EPSILON&&(K=!0):Math.sign(wt)===Math.sign(P)&&(K=!0),K?(ht=-wt,tt=Z,rt=Math.sqrt(C)):(ht=Z,tt=wt,rt=Math.sqrt(C/2))}return new St(ht/rt,tt/rt)}let Q=[];for(let F=0,Y=D.length,I=Y-1,ht=F+1;F<Y;F++,I++,ht++)I===Y&&(I=0),ht===Y&&(ht=0),Q[F]=k(D[F],D[I],D[ht]);let $=[],yt,_t=Q.concat();for(let F=0,Y=R.length;F<Y;F++){let I=R[F];yt=[];for(let ht=0,tt=I.length,rt=tt-1,Z=ht+1;ht<tt;ht++,rt++,Z++)rt===tt&&(rt=0),Z===tt&&(Z=0),yt[ht]=k(I[ht],I[rt],I[Z]);$.push(yt),_t=_t.concat(yt)}for(let F=0;F<g;F++){let Y=F/g,I=d*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+m;for(let tt=0,rt=D.length;tt<rt;tt++){let Z=O(D[tt],Q[tt],ht);V(Z.x,Z.y,-I)}for(let tt=0,rt=R.length;tt<rt;tt++){let Z=R[tt];yt=$[tt];for(let wt=0,ct=Z.length;wt<ct;wt++){let P=O(Z[wt],yt[wt],ht);V(P.x,P.y,-I)}}}let Dt=p+m;for(let F=0;F<z;F++){let Y=f?O(E[F],_t[F],Dt):E[F];y?(S.copy(_.normals[0]).multiplyScalar(Y.x),w.copy(_.binormals[0]).multiplyScalar(Y.y),A.copy(v[0]).add(S).add(w),V(A.x,A.y,A.z)):V(Y.x,Y.y,0)}for(let F=1;F<=u;F++)for(let Y=0;Y<z;Y++){let I=f?O(E[Y],_t[Y],Dt):E[Y];y?(S.copy(_.normals[F]).multiplyScalar(I.x),w.copy(_.binormals[F]).multiplyScalar(I.y),A.copy(v[F]).add(S).add(w),V(A.x,A.y,A.z)):V(I.x,I.y,h/u*F)}for(let F=g-1;F>=0;F--){let Y=F/g,I=d*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+m;for(let tt=0,rt=D.length;tt<rt;tt++){let Z=O(D[tt],Q[tt],ht);V(Z.x,Z.y,h+I)}for(let tt=0,rt=R.length;tt<rt;tt++){let Z=R[tt];yt=$[tt];for(let wt=0,ct=Z.length;wt<ct;wt++){let P=O(Z[wt],yt[wt],ht);y?V(P.x,P.y+v[u-1].y,v[u-1].x+I):V(P.x,P.y,h+I)}}}it(),j();function it(){let F=i.length/3;if(f){let Y=0,I=z*Y;for(let ht=0;ht<q;ht++){let tt=N[ht];J(tt[2]+I,tt[1]+I,tt[0]+I)}Y=u+g*2,I=z*Y;for(let ht=0;ht<q;ht++){let tt=N[ht];J(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let Y=0;Y<q;Y++){let I=N[Y];J(I[2],I[1],I[0])}for(let Y=0;Y<q;Y++){let I=N[Y];J(I[0]+z*u,I[1]+z*u,I[2]+z*u)}}n.addGroup(F,i.length/3-F,0)}function j(){let F=i.length/3,Y=0;Mt(D,Y),Y+=D.length;for(let I=0,ht=R.length;I<ht;I++){let tt=R[I];Mt(tt,Y),Y+=tt.length}n.addGroup(F,i.length/3-F,1)}function Mt(F,Y){let I=F.length;for(;--I>=0;){let ht=I,tt=I-1;tt<0&&(tt=F.length-1);for(let rt=0,Z=u+g*2;rt<Z;rt++){let wt=z*rt,ct=z*(rt+1),P=Y+ht+wt,C=Y+tt+wt,X=Y+tt+ct,K=Y+ht+ct;W(P,C,X,K)}}}function V(F,Y,I){l.push(F),l.push(Y),l.push(I)}function J(F,Y,I){B(F),B(Y),B(I);let ht=i.length/3,tt=M.generateTopUV(n,i,ht-3,ht-2,ht-1);et(tt[0]),et(tt[1]),et(tt[2])}function W(F,Y,I,ht){B(F),B(Y),B(ht),B(Y),B(I),B(ht);let tt=i.length/3,rt=M.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);et(rt[0]),et(rt[1]),et(rt[3]),et(rt[1]),et(rt[2]),et(rt[3])}function B(F){i.push(l[F*3+0]),i.push(l[F*3+1]),i.push(l[F*3+2])}function et(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Kc[i.type]().fromJSON(i)),new s(n,t.options)}},Vy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new St(r,o),new St(a,l),new St(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[r*3],g=t[r*3+1],x=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-h),new St(f,1-p),new St(m,1-x)]:[new St(a,1-l),new St(u,1-h),new St(d,1-p),new St(g,1-x)]}};function Wy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ar=class s extends Qc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var pn=class s extends ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],p=[],m=[],g=[];for(let x=0;x<=n;x++){let M=[],v=x/n,y=0;x===0&&o===0?y=.5/e:x===n&&l===Math.PI&&(y=-.5/e);for(let _=0;_<=e;_++){let w=_/e;h.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),g.push(w+y,1-v),M.push(c++)}u.push(M)}for(let x=0;x<n;x++)for(let M=0;M<e;M++){let v=u[x][M+1],y=u[x][M],_=u[x+1][M],w=u[x+1][M+1];(x!==0||o>0)&&d.push(v,y,w),(x!==n-1||l<Math.PI)&&d.push(y,_,w)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(m,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bn=class s extends ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let m=p/i*r,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(m),h.y=(t+e*Math.cos(g))*Math.sin(m),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let m=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,x=(i+1)*(d-1)+p,M=(i+1)*d+p;o.push(m,g,M),o.push(g,x,M)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ca=class extends Pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xi=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},En=class extends fn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ht=class extends fn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Lo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Cs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nh=class extends Cs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=t,a=2*e-n;break;case bu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=t,l=2*n-e;break;case bu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,g=m*p,x=-f*g+2*f*m-f*p,M=(1+f)*g+(-1.5-2*f)*m+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*m+.5*p,y=d*g-d*m;for(let _=0;_!==a;++_)r[_]=x*o[u+_]+M*o[c+_]+v*o[l+_]+y*o[h+_];return r}},ih=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},sh=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Tc:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Xy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ll,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let m=e[h+p];if(m!==e[f+p]||m!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Tc;var zi=class extends Sn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Bo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var rh=class extends Sn{};rh.prototype.ValueTypeName="color";var oh=class extends Sn{};oh.prototype.ValueTypeName="number";var ah=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},ha=class extends Sn{InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Bo;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends Sn{};lh.prototype.ValueTypeName="vector";var ch=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}},qy=new ch,hh=class{constructor(t){this.manager=t!==void 0?t:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ua=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kl=new Kt,Pf=new H,Lf=new H,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lf),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uh=class extends Rr{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=bs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},fa=class extends Is{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Df=new Kt,rr=new H,Hl=new H,fh=class extends Rr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),Hl.copy(n.position),Hl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hl),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}},da=class extends Is{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},dh=class extends Rr{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pa=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ma=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nf(){return performance.now()}var Dh="\\[\\]\\.:\\/",Yy=new RegExp("["+Dh+"]","g"),Nh="[^"+Dh+"]",Zy="[^"+Dh.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Nh),jy=/(WCOD+)?/.source.replace("WCOD",Zy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Qy=new RegExp("^"+$y+jy+Ky+Jy+"$"),tv=["material","materials","bones","map"],ph=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(t){let e=Qy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=ph;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);var Ds=new Map;window.BDS_DATA=(s,t,e)=>{let n=Ds.get(s);n&&(Ds.delete(s),n.resolve({fmt:t,b64:e}))};function ev(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function nv(s){let t=new DecompressionStream("gzip"),e=new Blob([s]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function iv(s,t){return new Promise((e,n)=>{Ds.set(s,{resolve:e});let i=document.createElement("script");i.src=t,i.async=!0,i.onerror=()=>{Ds.delete(s),n(new Error("Impossibile caricare "+t))},i.onload=()=>{i.remove(),setTimeout(()=>{Ds.has(s)&&(Ds.delete(s),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(i)})}async function Bi(s,t){let{fmt:e,b64:n}=await iv(s,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let i=await nv(ev(n));if(e==="bin")return i;if(e==="multi"){let r=new DataView(i),o=[];for(let a=0;a<i.byteLength;){let l=r.getUint32(a,!0);o.push(i.slice(a+4,a+4+l)),a+=4+l}return o[0]=JSON.parse(new TextDecoder().decode(o[0])),o}return JSON.parse(new TextDecoder().decode(i))}var wa=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var Ea=class s{constructor(t,e){let n=t.height;this.step=n.step,this.proj=t.proj,this.xmin=t.proj.xmin,this.zmin=t.proj.zmin,this.tileSize=t.tile,this.tilesX=t.tilesX,this.tilesZ=t.tilesZ,this.tiles=new Map,this._ck=-1,this._ct=null;let[i,r,o]=e;this.ov=i,this.oh=new Float32Array(new Uint16Array(r).length);{let l=new Uint16Array(r);for(let c=0;c<l.length;c++)this.oh[c]=l[c]*i.hscale}let a=t.landcover;this.mpp=a.mpp,this.palette=Object.entries(a.palette).map(([l,c])=>({k:l,c})),this.palette.push({k:"default",c:a.default}),this.keyIdx=new Map,this.lcKeys=[],this.classOf=[],this.ovPng=o}async init(){let{img:t,idx:e}=await this.decodePNG(this.ovPng);this.ovLc=e,this.ovTex=this.makeTexture(t),this.ovPng=null}async decodePNG(t){let e=URL.createObjectURL(new Blob([t],{type:"image/png"})),n=new Image;n.src=e;try{await n.decode()}finally{URL.revokeObjectURL(e)}let i=document.createElement("canvas");i.width=n.width,i.height=n.height;let r=i.getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let o=new Uint32Array(r.getImageData(0,0,i.width,i.height).data.buffer),a=new Uint8Array(o.length),l=-1,c=0;for(let u=0;u<o.length;u++){let h=o[u];h!==l&&(l=h,c=this.colorIndex(h)),a[u]=c}return{img:i,idx:a}}colorIndex(t){let e=this.keyIdx.get(t);if(e!==void 0)return e;e=this.lcKeys.length,this.keyIdx.set(t,e),this.lcKeys.push(t);let n=t&255,i=t>>>8&255,r=t>>>16&255,o=1e9,a="default";for(let l of this.palette){let c=(l.c[0]-n)**2+(l.c[1]-i)**2+(l.c[2]-r)**2;c<o&&(o=c,a=l.k)}return this.classOf.push(a),e}makeTexture(t){let e=new Le(t);return e.colorSpace=ve,e.anisotropy=8,e.wrapS=e.wrapT=bn,e}async addTile(t,e){let[n,i,r]=e,o=n.hn,a=new Uint16Array(i),l=new Float32Array(o*o);for(let p=0;p<l.length;p++)l[p]=(n.hb+a[p]*n.hs)/100;let{img:c,idx:u}=await this.decodePNG(r),h=t%1e3,f=Math.floor(t/1e3),d={h:l,n:o,cell:this.tileSize/(o-1),x0:this.xmin+h*this.tileSize,z0:this.zmin+f*this.tileSize,lc:u,lw:n.lw,img:c,tex:null,mat:null};return this.tiles.set(t,d),this._ck=-1,d}dropTile(t){let e=this.tiles.get(t);e&&(e.tex&&e.tex.dispose(),e.mat&&e.mat.dispose(),this.tiles.delete(t),this._ck=-1)}hasTile(t){return this.tiles.has(t)}tileAt(t,e){let n=Math.floor((t-this.xmin)/this.tileSize),i=Math.floor((e-this.zmin)/this.tileSize),r=i*1e3+n;if(r===this._ck&&n>=0)return this._ct;let o=n>=0&&i>=0&&this.tiles.get(r)||null;return this._ck=n>=0?r:-1,this._ct=o,o}static tri(t,e,n,i,r){let o=Math.floor(i),a=Math.floor(r);o<0?o=0:o>e-2&&(o=e-2),a<0?a=0:a>n-2&&(a=n-2);let l=i-o,c=r-a;l=l<0?0:l>1?1:l,c=c<0?0:c>1?1:c;let u=a*e+o;if(l+c<=1)return t[u]+(t[u+1]-t[u])*l+(t[u+e]-t[u])*c;let h=t[u+e+1];return h+(t[u+e]-h)*(1-l)+(t[u+1]-h)*(1-c)}height(t,e){let n=this.tileAt(t,e);return n?s.tri(n.h,n.n,n.n,(t-n.x0)/n.cell,(e-n.z0)/n.cell):this.heightCoarse(t,e)}heightCoarse(t,e){let n=this.ov;return s.tri(this.oh,n.hnx,n.hnz,(t-n.hx0)/n.hstep,(e-n.hz0)/n.hstep)}inside(t,e){let n=this.proj;return t>=n.xmin&&e>=n.zmin&&t<=n.xmax&&e<=n.zmax}landClass(t,e){let n=this.tileAt(t,e);if(n){let a=Math.floor((t-n.x0)/this.mpp)+1,l=Math.floor((e-n.z0)/this.mpp)+1;return this.classOf[n.lc[Math.min(n.lw-1,l)*n.lw+Math.min(n.lw-1,a)]]}let i=this.ov,r=Math.floor((t-this.xmin)/i.lmpp),o=Math.floor((e-this.zmin)/i.lmpp);return r<0||o<0||r>=i.lw||o>=i.lh?"default":this.classOf[this.ovLc[o*i.lw+r]]}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t,e){let n=new Ht({map:e});return n.onBeforeCompile=i=>{i.uniforms.detailMap={value:t},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUp = normalize(mat3(modelMatrix) * objectNormal).y;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(diffuseColor.rgb, rock, steep * 0.85);`)},n.customProgramCacheKey=()=>"bds-terrain",n}tileMaterial(t,e){let n=this.tiles.get(t);return n.mat||(n.tex=this.makeTexture(n.img),n.img=null,n.mat=this.makeMaterial(e,n.tex)),n.mat}overviewMaterial(t){return this.makeMaterial(t,this.ovTex)}buildTile(t,e,n){let i=this.tiles.get(t),r=i.lw,o=this.mpp;return this.buildChunk(i.x0,i.z0,this.tileSize,e,n,0,(a,l)=>[(1+(a-i.x0)/o)/r,1-(1+(l-i.z0)/o)/r],(a,l)=>s.tri(i.h,i.n,i.n,(a-i.x0)/i.cell,(l-i.z0)/i.cell))}buildFarChunk(t,e,n,i,r,o){let a=this.ov,l=a.lw*a.lmpp,c=a.lh*a.lmpp;return this.buildChunk(t,e,n,i,r,o,(u,h)=>[(u-this.xmin)/l,1-(h-this.zmin)/c],(u,h)=>this.heightCoarse(u,h))}buildChunk(t,e,n,i,r,o,a,l){let c=Math.round(n/i)+1,u=new Float32Array(c*c*3),h=new Float32Array(c*c*2);for(let g=0;g<c;g++)for(let x=0;x<c;x++){let M=t+x*i,v=e+g*i,y=g*c+x,_=l(M,v);if(o>0)for(let A=-2;A<=2;A++)for(let b=-2;b<=2;b++)_=Math.min(_,l(M+A*i/2,v+b*i/2));u[y*3]=M,u[y*3+1]=_-o,u[y*3+2]=v;let[w,S]=a(M,v);h[y*2]=w,h[y*2+1]=S}let f=new Uint32Array((c-1)*(c-1)*6),d=0;for(let g=0;g<c-1;g++)for(let x=0;x<c-1;x++){let M=g*c+x,v=M+1,y=M+c,_=y+1;f[d++]=M,f[d++]=y,f[d++]=v,f[d++]=v,f[d++]=y,f[d++]=_}let p=new ee;p.setAttribute("position",new ue(u,3)),p.setAttribute("uv",new ue(h,2)),p.setIndex(new ue(f,1)),p.computeVertexNormals();let m=new Rt(p,r);return m.receiveShadow=!0,m}};var oe=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,i=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(i,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.i.length===0}build(){let t=new ee;return t.setAttribute("position",new Yt(this.p,3)),this.c&&t.setAttribute("color",new Yt(this.c,3)),this.u&&t.setAttribute("uv",new Yt(this.u,2)),t.setIndex(this.n>65535?new Es(this.i,1):new ws(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new Rt(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Ee(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s^=s>>>4,s=Math.imul(s,668265261),s^=s>>>15,(s>>>0)/4294967296}function od(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],l=e[r][0],c=e[r][1];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Oi(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Le(i);return r.colorSpace=ve,n&&(r.wrapS=r.wrapT=mi),r.anisotropy=8,r}function ad(s=256){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s),i=16,r=new Float32Array(i*i);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/s*i,h=c/s*i,f=Math.floor(u),d=Math.floor(h),p=u-f,m=h-d,g=(v,y)=>r[(y+i)%i*i+(v+i)%i],x=p*p*(3-2*p),M=m*m*(3-2*m);return(g(f,d)*(1-x)+g(f+1,d)*x)*(1-M)+(g(f,d+1)*(1-x)+g(f+1,d+1)*x)*M};for(let l=0;l<s;l++)for(let c=0;c<s;c++){let u=(l*s+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new Le(t);return a.wrapS=a.wrapT=mi,a.anisotropy=8,a}var ld=4,Ir=null;function Ns(){if(Ir)return Ir;let s=Oi(256,256,t=>{t.clearRect(0,0,256,256);let e="#ffffff";t.fillStyle=e,t.fillRect(0,6,256,4),t.fillRect(0,54,256,4);for(let n=0;n<10;n++){let i=n*25.6+11;t.fillRect(i,2,3.5,60),t.beginPath(),t.moveTo(i-2,4),t.lineTo(i+1.75,0),t.lineTo(i+5.5,4),t.fill()}t.strokeStyle=e,t.lineWidth=1.6;for(let n=-8;n<24;n++)t.beginPath(),t.moveTo(n*16,64),t.lineTo(n*16+64,128),t.stroke(),t.beginPath(),t.moveTo(n*16+64,64),t.lineTo(n*16,128),t.stroke();t.fillRect(0,65,256,3),t.fillRect(0,124,256,3),t.fillStyle="#ffffff",t.fillRect(0,140,256,12),t.fillRect(0,166,256,12);for(let n of[6,134])t.fillRect(n,130,14,62);t.fillRect(0,194,256,5),t.fillRect(0,250,256,6),t.fillRect(0,214,256,3);for(let n=0;n<16;n++)t.fillRect(n*16+6,194,3,62);t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.arc(n*32+16,214,9,Math.PI,0),t.stroke();t.fillRect(0,192,4,64),t.fillRect(252,192,4,64)});return s.wrapT=bn,s.anisotropy=4,Ir={grille:new Ht({map:s,vertexColors:!0,alphaTest:.45,side:re,transparent:!1}),solid:new Ht({vertexColors:!0})},Ir.depth=new gr({depthPacking:Ch,map:s,alphaTest:.45,side:re}),Ir}var sv=s=>[1-(s+1)/ld+.004,1-s/ld-.004];function Pr(s,t,e,n,i,r,o,a,l,c,u,h,f=0){let d=Math.hypot(i-t,r-e),[p,m]=sv(c),g=f+d/u,x=s.v(t,n+a,e,h[0],h[1],h[2],f,p),M=s.v(i,o+a,r,h[0],h[1],h[2],g,p),v=s.v(i,o+l,r,h[0],h[1],h[2],g,m),y=s.v(t,n+l,e,h[0],h[1],h[2],f,m);return s.quad(x,M,v,y),g}function mn(s,t,e,n,i,r,o,a,l,c,u=null){let h=i/2,f=o/2,d=[a*h,l*h],p=[-l*f,a*f],m=(M,v,y)=>[t+d[0]*M+p[0]*y,e+v*r,n+d[1]*M+p[1]*y],g=[1,.62,.8,.8,.72,.72];[[m(-1,1,-1),m(-1,1,1),m(1,1,1),m(1,1,-1)],[m(-1,0,-1),m(1,0,-1),m(1,0,1),m(-1,0,1)],[m(-1,0,1),m(1,0,1),m(1,1,1),m(-1,1,1)],[m(1,0,-1),m(-1,0,-1),m(-1,1,-1),m(1,1,-1)],[m(1,0,1),m(1,0,-1),m(1,1,-1),m(1,1,1)],[m(-1,0,-1),m(-1,0,1),m(-1,1,1),m(-1,1,-1)]].forEach((M,v)=>{if(v===1)return;let y=v===0&&u?u:c,_=v===0&&u?1:g[v],w=M.map(S=>s.v(S[0],S[1],S[2],y[0]*_,y[1]*_,y[2]*_));s.quad(w[0],w[1],w[2],w[3])})}var Lr=[.17,.19,.18],rv=[.13,.22,.16],ov=[.45,.32,.2],av=[.62,.64,.62],Ta=[[.86,.8,.66],[.78,.7,.55],[.72,.72,.7],[.82,.62,.48],[.62,.36,.28]];function cd(s,t,e,n,i,r,o){let a=Ee(o)<.6?Lr:rv,l=Ta[Math.floor(Ee(o+7)*Ta.length)],c=n===4?Math.min(.6,i*.35):0,u=0;for(let h=0;h<e.length-1;h++){let[f,d]=e[h],[p,m]=e[h+1],g=Math.hypot(p-f,m-d);if(g<.2)continue;let x=(p-f)/g,M=(m-d)/g,v=Math.max(1,Math.ceil(g/6));for(let y=0;y<v;y++){let _=f+(p-f)*y/v,w=d+(m-d)*y/v,S=f+(p-f)*(y+1)/v,A=d+(m-d)*(y+1)/v,b=r.height(_,w),E=r.height(S,A);if(n===4){let N=g/v,D=Math.min(b,E);mn(s,(_+S)/2,D-.3,(w+A)/2,N+.02,c+.3+Math.abs(E-b)*.5,.3,x,M,l,[.74,.73,.7])}u=Pr(t,_,w,b,S,A,E,c,i,n===5?1:n===6?2:0,n===6?5:1.2,n===6?ov:n===5?av:a,u)}if(n===5||n===7){let y=Math.max(1,Math.round(g/3));for(let _=0;_<=y;_++){let w=f+(p-f)*_/y,S=d+(m-d)*_/y;mn(s,w,r.height(w,S)-.2,S,.06,i+.25,.06,x,M,n===5?[.36,.4,.36]:a)}}}}var Sa=(s,t)=>Math.atan2(-t,s),Aa=class{constructor(t,e,n){this.R=t,this.T=e,this.col=n,this.dyn=[]}baseY(t,e){let n=this.R.surfaceAt(t,e,1e9);return n&&n.road?n.h:this.T.height(t,e)+.02}leafGeo(t,e,n){let i=new oe(!0,!0);return Pr(i,0,0,0,t,0,0,.08,e,n===4?1:3,n===3?1.1:1.6,Lr),i.build()}build(t,e){let n=e&&e.gt;if(!n||!n.length)return null;let i=Ns(),r=new oe(!0,!1),o=new oe(!0,!0),a=new $t;for(let l=0;l<n.length;l+=6){let c=n[l],u=n[l+1]/10,h=n[l+2]/10,f=n[l+3]/1800*Math.PI,d=n[l+4]/10,p=n[l+5],m=Math.sin(f),g=Math.cos(f),x=g,M=-m,v=this.baseY(u,h),y=Math.round(u*7+h*13),_=u-m*d/2,w=h-g*d/2,S=u+m*d/2,A=h+g*d/2,b=c===3?1.25:1.8,E=Ta[Math.floor(Ee(y)*Ta.length)];if(c<=1||c===3){let L=c===3?.3:.42;for(let N of[-1,1]){let D=u+m*(d/2+L/2)*N,O=h+g*(d/2+L/2)*N;mn(r,D,v-.3,O,L,b+.6,L,m,g,E),mn(r,D,v+b+.3,O,L+.08,.08,L+.08,m,g,[.7,.69,.66])}}else if(c===2)mn(r,_-m*.25,v,w-g*.25,.38,1.05,.38,m,g,[.92,.92,.9]),mn(r,_-m*.25,v+.75,w-g*.25,.4,.12,.4,m,g,[.8,.1,.08]),mn(r,S,v,A,.1,.85,.1,m,g,[.85,.85,.85]);else for(let[L,N]of[[_,w],[S,A]])mn(r,L,v,N,.12,.9,.12,m,g,[.85,.2,.15]);if(p===2){this.addDynamic(a,t,c,u,v,h,m,g,d,b);continue}let R=p===1;if(R&&this.col.addPolygon(t,Float32Array.from([_-x*.2,w-M*.2,S-x*.2,A-M*.2,S+x*.2,A+M*.2,_+x*.2,w+M*.2]),void 0,!0),c===0){let L=d>2.6,N=L?d/2:d,D=L?[[_,w,m,g],[S,A,-m,-g]]:[[_,w,m,g]];for(let[O,z,q,k]of D){let Q=R?q:x,$=R?k:M;Pr(o,O,z,v,O+Q*N,z+$*N,v,.08,b,3,1.6,Lr)}}else if(c===1){let L=R?0:d;Pr(o,_+m*L+x*.18,w+g*L+M*.18,v,S+m*L+x*.18,A+g*L+M*.18,v,.08,b,3,1.6,Lr)}else if(c===3){let L=R?0:1.2,N=m*Math.cos(L)+x*Math.sin(L),D=g*Math.cos(L)+M*Math.sin(L);Pr(o,_,w,v,_+N*d,w+D*d,v,.06,b,3,1.1,Lr)}else if(c===2)this.boom(r,_,w,v,m,g,d,R?0:1.45);else if(c===4&&R)for(let N=0;N<8;N++){let D=N/8,O=(N+1)/8,z=Q=>.3*4*Q*(1-Q),q=_+(S-_)*(D+O)/2,k=w+(A-w)*(D+O)/2;mn(r,q,v+.8-z((D+O)/2),k,d/8,.04,.04,m,g,N%2?[.85,.15,.1]:[.95,.95,.95])}}if(r.empty||a.add(r.mesh(i.solid,!0)),!o.empty){let l=o.mesh(i.grille,!0);l.customDepthMaterial=this.depthMat(),a.add(l)}return a.userData.dispose=()=>{this.dyn=this.dyn.filter(l=>l.tile!==t?!0:(l.colObj&&this.col.remove(l.colObj),!1))},a}depthMat(){return Ns().depth}boom(t,e,n,i,r,o,a,l){let c=Math.max(2,Math.round(a/.5));for(let u=0;u<c;u++){let h=u%2?[.8,.08,.06]:[.95,.95,.95],f=(u+.5)/c*a;l>.7?mn(t,e,i+.95+u/c*a,n,.09,a/c+.005,.06,r,o,h):mn(t,e+r*f,i+.905,n+o*f,a/c+.005,.09,.06,r,o,h)}}addDynamic(t,e,n,i,r,o,a,l,c,u){let h=l,f=-a,d=i-a*c/2,p=o-l*c/2,m=i+a*c/2,g=o+l*c/2,x={tile:e,kind:n,x:i,z:o,w:c,open:0,target:0,hold:0,parts:[],colObj:null,ring:Float32Array.from([d-h*.2,p-f*.2,m-h*.2,g-f*.2,m+h*.2,g+f*.2,d+h*.2,p+f*.2])},M=Ns();if(n===2||n===4){let v=new oe(!0,!1),y=Math.max(2,Math.round(c/.5));for(let S=0;S<y;S++)mn(v,(S+.5)/y*c,-.045,0,c/y+.005,.09,.06,1,0,S%2?[.8,.08,.06]:[.95,.95,.95]);let _=new $t,w=v.mesh(M.solid,!0);_.position.set(d,r+.95,p),_.rotation.y=Sa(a,l),_.add(w),t.add(_),x.parts.push({obj:w,apply:S=>{w.rotation.z=S*1.45}})}else if(n===1){let v=new Rt(this.leafGeo(c,u,n),M.grille);v.castShadow=!0,v.customDepthMaterial=this.depthMat(),v.rotation.y=Sa(a,l),t.add(v),x.parts.push({obj:v,apply:y=>{v.position.set(d+a*c*y+h*.18,r,p+l*c*y+f*.18)}})}else{let v=c>2.6,y=v?c/2:c,_=this.leafGeo(y,u,n),w=v?[[d,p,a,l],[m,g,-a,-l]]:[[d,p,a,l]];for(let[S,A,b,E]of w){let R=new Rt(_,M.grille);R.castShadow=!0,R.customDepthMaterial=this.depthMat(),R.position.set(S,r,A),t.add(R);let L=Sa(b,E),N=Sa(h,f);for(;N-L>Math.PI;)N-=2*Math.PI;for(;N-L<-Math.PI;)N+=2*Math.PI;x.parts.push({obj:R,apply:D=>{R.rotation.y=L+(N-L)*D}})}}for(let v of x.parts)v.apply(0);x.colObj=this.col.addPolygon(e,x.ring,void 0,!0),this.dyn.push(x)}update(t,e){for(let n of this.dyn){let i=!1;for(let a of e)if(Math.abs(a.x-n.x)<14&&Math.abs(a.z-n.z)<14&&Math.hypot(a.x-n.x,a.z-n.z)<11+n.w/2){i=!0;break}if(i?n.hold=3:n.hold-=t,n.target=n.hold>0?1:0,n.open===n.target)continue;let r=n.kind===2||n.kind===4?.9:.45;n.open=n.target>n.open?Math.min(1,n.open+t*r):Math.max(0,n.open-t*r);for(let a of n.parts)a.apply(n.open);let o=n.open<.8;o&&!n.colObj?n.colObj=this.col.addPolygon(n.tile,n.ring,void 0,!0):!o&&n.colObj&&(this.col.remove(n.colObj),n.colObj=null)}}};var kt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},Ft={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},Jt={GATE:14,SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},lv=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],Uh=.18,cv=32,hv=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],uv=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],hd=1.6,fv=.13,ud={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function dv(s){let t=ud[s];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var Dr=class{constructor(t,e,n=cv){this.terrain=e;let i=t.proj;this.xmin=i.xmin,this.zmin=i.zmin,this.xmax=i.xmax,this.zmax=i.zmax,this.tileSize=t.tile,this.cell=n,this.ways=[],this.wayId=new Map,this.nodeId=new Map,this.nodeCount=0,this.cap=0,this.adjN=0,this.adjCap=0,this.junctionNames=new Map,this.grid=new Map,this.tileSegs=new Map,this.rails=[],this.railId=new Map,this.tileRails=new Map,this.roundabouts=[],this.tilesIn=new Set,this.growNodes(4096),this.growAdj(8192)}growNodes(t){let e=Math.max(this.cap*2,t);for(let n of["nx","nz","dh","w1","w2","m1","m2"]){let i=new Float32Array(e);this[n]&&i.set(this[n]),this[n]=i}for(let n of["ntag","ndir","degree","degMain","onRb"]){let i=new Uint8Array(e);this[n]&&i.set(this[n]),this[n]=i}for(let n of["adjHead","adjTail"]){let i=new Int32Array(e).fill(-1);this[n]&&i.set(this[n]),this[n]=i}this.cap=e}growAdj(t){let e=Math.max(this.adjCap*2,t);for(let n of["adjNext","adjWay","adjPos"]){let i=new Int32Array(e);this[n]&&i.set(this[n]),this[n]=i}this.adjCap=e}node(t,e,n){let i=this.nodeId.get(t);return i!==void 0||(this.nodeCount>=this.cap&&this.growNodes(this.nodeCount+1),i=this.nodeCount++,this.nodeId.set(t,i),this.nx[i]=e,this.nz[i]=n),i}linkWay(t){let e=this.ways[t],n=e.nodes.length,i=e.nodes;e.cum=new Float32Array(n);for(let l=1;l<n;l++)e.cum[l]=e.cum[l-1]+Math.hypot(this.nx[i[l]]-this.nx[i[l-1]],this.nz[i[l]]-this.nz[i[l-1]]);e.len=e.cum[n-1],e.oneway=!!(e.flags&Ft.ONEWAY),e.drivable=!(e.flags&Ft.NOCAR),e.abs=!!(e.flags&(Ft.BRIDGE|Ft.TUNNEL));let r=e.cls<=kt.LIVING&&e.drivable;for(let l=0;l<n;l++){let c=i[l];for(let f=this.adjHead[c];f>=0;f=this.adjNext[f])this.ways[this.adjWay[f]].zn=null;this.adjN>=this.adjCap&&this.growAdj(this.adjN+1);let u=this.adjN++;this.adjWay[u]=t,this.adjPos[u]=l,this.adjNext[u]=-1,this.adjTail[c]>=0?this.adjNext[this.adjTail[c]]=u:this.adjHead[c]=u,this.adjTail[c]=u;let h=(l>0?1:0)+(l<n-1?1:0);this.degree[c]+=h,r&&(this.degMain[c]+=h),e.width>this.w1[c]?(this.w2[c]=this.w1[c],this.w1[c]=e.width):e.width>this.w2[c]&&(this.w2[c]=e.width),r&&(e.width>this.m1[c]?(this.m2[c]=this.m1[c],this.m1[c]=e.width):e.width>this.m2[c]&&(this.m2[c]=e.width)),e.flags&Ft.ROUNDABOUT&&(this.onRb[c]=1)}let o=e.width/2+1,a=this.cell;for(let l=0;l<n-1;l++){let c=i[l],u=i[l+1],h=this.nx[c],f=this.nz[c],d=this.nx[u],p=this.nz[u],m=t*16384+l,g=Math.floor((Math.min(h,d)-o-this.xmin)/a),x=Math.floor((Math.max(h,d)+o-this.xmin)/a),M=Math.floor((Math.min(f,p)-o-this.zmin)/a),v=Math.floor((Math.max(f,p)+o-this.zmin)/a);for(let w=M;w<=v;w++)for(let S=g;S<=x;S++){let A=w*65536+S,b=this.grid.get(A);b||this.grid.set(A,b=[]),b.push(m)}let y=this.tileKey((h+d)/2,(f+p)/2),_=this.tileSegs.get(y);_||this.tileSegs.set(y,_=[]),_.push(m)}}addTile(t,e){if(this.tilesIn.has(t)||(this.tilesIn.add(t),!e))return;let n=e.s,i=this.xmin+t%1e3*this.tileSize,r=this.zmin+Math.floor(t/1e3)*this.tileSize,o=new Int32Array(e.ni.length);for(let h=0,f=0,d=0,p=0;h<e.ni.length;h++)f+=e.ni[h],d+=e.nx[h],p+=e.nz[h],o[h]=this.node(f,i+d/100,r+p/100);for(let h=0;h<e.dh.length;h+=2)this.dh[o[e.dh[h]]]=e.dh[h+1]/100;for(let h=0;h<e.nt.length;h+=3)this.ntag[o[e.nt[h]]]=e.nt[h+1],this.ndir[o[e.nt[h]]]=e.nt[h+2];for(let h=0;h<e.mj.length;h+=3)this.junctionNames.set(o[e.mj[h]],{name:n[e.mj[h+1]],ref:n[e.mj[h+2]]});let a=e.wh,l=e.w,c=0,u=0;for(let h=0;h<l.length;h+=a){let f=l[h+27],d=l[h+28];if(!this.wayId.has(l[h])){let p={name:n[l[h+1]],ref:n[l[h+2]],cls:l[h+3],flags:l[h+4],lanes:l[h+5],speed:l[h+6],layer:l[h+7],widthTag:l[h+8]/10,surf:l[h+9],sw:l[h+10],lit:l[h+11],lf:l[h+12],lb:l[h+13],turnF:n[l[h+14]],turnB:n[l[h+15]],dest:n[l[h+16]],limit:l[h+17],limitMapped:!!l[h+18],width:l[h+19]/100,lw:l[h+20]/100,nF:l[h+21]/100,nB:l[h+22]/100,sh:l[h+23]/100,cOff:l[h+24]/100,nodes:new Int32Array(f)};for(let g=0,x=0;g<f;g++)x+=e.wn[c+g],p.nodes[g]=o[x];let m=this.ways.length;if(this.ways.push(p),this.wayId.set(l[h],m),this.linkWay(m),p.abs)p.h0=l[h+25]/100,p.h1=l[h+26]/100;else{let g=new Float32Array(Math.max(1,d));for(let x=0,M=0;x<d;x++)M+=e.wp[u+x],g[x]=M/100;p.prof=g,p.pstep=d>1&&p.len/(d-1)||1}}c+=f,u+=d}for(let h of e.rl){if(this.railId.has(h.id))continue;let f=this.rails.length,d=[];for(let m=0;m<h.p.length;m+=2)d.push([i+h.p[m]/100,r+h.p[m+1]/100]);let p={p:d,bridge:h.b,tunnel:h.t,name:n[h.n],h0:h.h0/100,h1:h.h1/100};if(p.bridge){p.cum=[0];for(let m=1;m<d.length;m++)p.cum.push(p.cum[m-1]+Math.hypot(d[m][0]-d[m-1][0],d[m][1]-d[m-1][1]))}this.rails.push(p),this.railId.set(h.id,f);for(let m=0;m<d.length-1;m++){let g=this.tileKey((d[m][0]+d[m+1][0])/2,(d[m][1]+d[m+1][1])/2),x=this.tileRails.get(g);x||this.tileRails.set(g,x=[]),x.push(f*16384+m)}}for(let h of e.rb){let f=[];for(let d=4;d<h.length;d+=2)f.push([i+h[d]/100,r+h[d+1]/100]);this.roundabouts.push({x:i+h[0]/100,z:r+h[1]/100,r:h[2]/100,dh:h[3]/100,poly:f})}}addNav(t){let e=t.s,n=[];for(let r=0,o=0,a=0;r<t.n.length;r+=2)o+=t.n[r],a+=t.n[r+1],n.push(this.node(r/2,o/10,a/10));for(let r of t.gate)this.ntag[n[r]]=Jt.GATE;let i=0;for(let r=0;r<t.w.length;r+=12){let o=t.w,a=o[r+11],l={name:e[o[r]],ref:e[o[r+1]],cls:o[r+2],flags:o[r+3],limit:o[r+4],width:o[r+5]/100,lw:o[r+6]/100,nF:o[r+7]/100,nB:o[r+8]/100,sh:o[r+9]/100,cOff:o[r+10]/100,nodes:new Int32Array(a)};for(let u=0;u<a;u++)l.nodes[u]=n[t.wn[i+u]];i+=a;let c=this.ways.length;this.ways.push(l),this.linkWay(c)}this.rails=t.rl.map(r=>{let o=[];for(let a=0,l=0,c=0;a<r.length;a+=2)l+=r[a],c+=r[a+1],o.push([l/10,c/10]);return{p:o}}),this.buildStreetIndex()}ensureRegion(){return!0}profAt(t,e){let n=t.prof;if(n.length<2)return n[0];let i=Math.min(n.length-1,Math.max(0,e/t.pstep)),r=Math.min(n.length-2,Math.floor(i));return n[r]+(n[r+1]-n[r])*(i-r)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=hv[e],i,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&Ft.LINK)?2:1:2);t.oneway?(i=o,r=0):t.lf||t.lb?(i=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-i)):o<=1?(i=.5,r=.5):(i=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(i+r))):e===kt.TRACK?a=3.2:e===kt.SERVICE?a=t.flags&Ft.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===kt.PEDESTRIAN?a=6:(t.flags&Ft.ROUNDABOUT&&!t.lanes&&(i=e<=3?1.6:1.4),a=(i+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&i===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(i+r)*n>a&&(n=a/(i+r)),t.width=a,t.lw=n,t.nF=i,t.nB=r,t.sh=(a-(i+r)*n)/2,t.cOff=-a/2+t.sh+r*n}coveredBy(t,e,n,i=0,r=!0){let o=this.ways[t],a=u=>u.flags&Ft.ROUNDABOUT?-1:u.cls*2+(u.flags&Ft.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],p=f.nodes[h+1],m=this.nx[d],g=this.nz[d],x=this.nx[p]-m,M=this.nz[p]-g,v=x*x+M*M;if(v<1e-6)return;let y=((e-m)*x+(n-g)*M)/v;if(y<0||y>1)return;let _=Math.sqrt(v);h===0&&y*_<.3||h===f.nodes.length-2&&(1-y)*_<.3||Math.abs((e-m)*M-(n-g)*x)/_>f.width/2+i||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let i=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[i]+(this.nx[r]-this.nx[i])*a,this.nz[i]+(this.nz[r]-this.nz[i])*a,n,a]}heightOn(t,e,n,i,r){let o=this.ways[t];if(o.abs){let a=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?a/o.len:0)+Uh}return this.profAt(o,o.cum[e]+n*(o.cum[e+1]-o.cum[e]))+Uh}segmentsNear(t,e,n,i){let r=this.cell,o=Math.floor((t-n-this.xmin)/r),a=Math.floor((t+n-this.xmin)/r),l=Math.floor((e-n-this.zmin)/r),c=Math.floor((e+n-this.zmin)/r),u=this._seen||(this._seen=new Set);u.clear();for(let h=l;h<=c;h++)for(let f=o;f<=a;f++){let d=this.grid.get(h*65536+f);if(d)for(let p of d)u.has(p)||(u.add(p),i(Math.floor(p/16384),p%16384))}}projectOnSeg(t,e,n,i){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(i-c)*h)/f;d=d<0?0:d>1?1:d;let p=l+u*d,m=c+h*d;return{t:d,px:p,pz:m,d:Math.hypot(n-p,i-m),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let i=null,r=-1e9,o=this._cand||(this._cand=[]);if(o.length=0,this.segmentsNear(t,e,8,(l,c)=>{let u=this.ways[l],h=this.projectOnSeg(l,c,t,e),f=u.width/2+.35;if(h.d>f)return;let d=this.heightOn(l,c,h.t,t,e);d>n+1.3||(o.push(d,Math.max(.03,1-h.d/f)),(d>r+.01||Math.abs(d-r)<=.01&&i&&h.d<i.d)&&(r=d,i={wi:l,k:c,t:h.t,d:h.d}))}),o.length>2){let l=0,c=0;for(let u=0;u<o.length;u+=2)r-o[u]<.8&&(c+=o[u]*o[u+1],l+=o[u+1]);l>0&&(r=c/l)}let a=this.terrain.height(t,e);return i&&r>=a-.6?{h:r,road:i}:i&&this.ways[i.wi].flags&Ft.TUNNEL&&n<r+3?{h:r,road:i}:i&&a>n+1.3?{h:r,road:i}:{h:a,road:null}}nearest(t,e,n=40,i=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(i&&!i(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:lv[t.cls]}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,i]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:i,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(i,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=m=>{let g=t.width>=i[m]-.01?r[m]:i[m];return g>0?g/2+a:0},d=-1e9,p=0;for(let m=0;m<e;m++){let g=t.nodes[m];if(o[g]>=3){let x=f(g);x>0&&(d=t.cum[m],p=x)}l[m]=d,c[m]=p}d=1e9,p=0;for(let m=e-1;m>=0;m--){let g=t.nodes[m];if(o[g]>=3){let x=f(g);x>0&&(d=t.cum[m],p=x)}u[m]=d,h[m]=p}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(a.flags&Ft.ROUNDABOUT||!a.drivable||a.cls>=kt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Oi(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Oi(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),p=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,p+2,c-4,c-4,5),o.fill()}}),n=Oi(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),i=Oi(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=ud[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Ht({map:t,vertexColors:!0}),-2,-4),stone:r(new Ht({map:e,vertexColors:!0}),-2,-4),path:r(new Ht({map:t,vertexColors:!0}),-1,-2),walk:new Ht({map:n,vertexColors:!0,side:re}),mark:r(new Ht({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Ht({map:i,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Ht({color:11052186,side:re}),tube:new Re({vertexColors:!0,side:re}),tlamp:new Re({color:16771504,side:re}),barrier:new Ht({vertexColors:!0,side:re}),guard:new Ht({color:13159632,side:re}),island:new Ht({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,i=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;i+=u/f,r+=h/f}let o=Math.hypot(i,r)||1;i/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+i*(u/f);a=1/Math.max(.5,d)}return[-r*a,i*a]}wayColor(t){if(t.flags&Ft.NOCAR||t.surf===1)return[1,1,1];if(t.flags&Ft.UNPAVED)return[.95,.82,.62];t.tint===void 0&&(t.tint=.92+.16*Ee(t.nodes[0]*31+t.nodes.length));let e=uv[t.cls];return[e[0]*t.tint,e[1]*t.tint,e[2]*t.tint]}edgeH(t,e,n,i,r){let o=this.ways[t];return this.heightOn(t,e,n,i,r)}addDecal(t,e,n,i,r,o,a,l,c,u,h){let f=dv(h);if(!f)return;let d=-l,p=a,m=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([g,x,M,v])=>{let y=r+d*g+a*x,_=o+p*g+l*x;return t.v(y,this.edgeH(e,n,i,y,_)+.035,_,1,1,1,M,v)});t.quad(m[0],m[1],m[2],m[3])}buildTile(t){let e=this.buildTileGen(t),n;for(;!(n=e.next()).done;);return n.value}*buildTileGen(t){let e=new $t,n=this.tileSegs.get(t)||[],i=this.materials(),r=new oe(!0,!0),o=new oe(!0,!0),a=new oe(!0,!1),l=new oe(!1,!1),c=new oe(!1,!1),u=new oe(!0,!1),h=new oe(!1,!1),f=new oe(!0,!0),d=new oe(!0,!0),p=this.terrain,m=5,g=new Set,x=0;for(let v of n){++x%20===0&&(yield);let y=Math.floor(v/16384),_=v%16384,w=this.ways[y],S=w.nodes[_],A=w.nodes[_+1],b=this.nx[S],E=this.nz[S],R=this.nx[A],L=this.nz[A],N=Math.hypot(R-b,L-E);if(N<.05)continue;let D=(R-b)/N,O=(L-E)/N,z=-O,q=D,k=this.miter(w,_),Q=this.miter(w,_+1),$=w.width/2,yt=Math.max(1,Math.ceil(N/m)),_t=Math.max(1,Math.ceil(N/10));if(_t<yt){let F=!0;for(let Y=0;Y<_t&&F;Y++)for(let I of[-1,1]){let ht=[];for(let tt of[Y/_t,(Y+.5)/_t,(Y+1)/_t]){let rt=k[0]+(Q[0]-k[0])*tt,Z=k[1]+(Q[1]-k[1])*tt,wt=b+(R-b)*tt+rt*$*I,ct=E+(L-E)*tt+Z*$*I;ht.push(this.edgeH(y,_,tt,wt,ct))}if(Math.abs(ht[1]-(ht[0]+ht[2])/2)>.02){F=!1;break}}F&&(yt=_t)}let Dt=!!(w.flags&Ft.TUNNEL),it=Dt?this.wayColor(w).map(F=>F*.5):this.wayColor(w),j=w.surf===1||!!(w.flags&Ft.NOCAR),Mt=j?o:r,V=j?.6:.2,J=w.abs||this.dh[S]>.3||this.dh[A]>.3,W=-1,B=-1,et=[];for(let F=0;F<=yt;F++){let Y=F/yt,I=b+(R-b)*Y,ht=E+(L-E)*Y,tt=k[0]+(Q[0]-k[0])*Y,rt=k[1]+(Q[1]-k[1])*Y,Z=I-tt*$,wt=ht-rt*$,ct=I+tt*$,P=ht+rt*$,C=this.edgeH(y,_,Y,Z,wt),X=this.edgeH(y,_,Y,ct,P),K=Mt.v(Z,C,wt,it[0],it[1],it[2],Z*V,wt*V),ft=Mt.v(ct,X,P,it[0],it[1],it[2],ct*V,P*V);W>=0&&Mt.quad(W,B,ft,K),W=K,B=ft,et.push([Z,C,wt,ct,X,P,tt,rt])}if(Dt){let F=$+.7,Y=[[-F,0,.3],[-F,1.2,.3],[-F,3.4,.17],[-F*.5,5.2,.13],[0,5.8,.12],[F*.5,5.2,.13],[F,3.4,.17],[F,1.2,.3],[F,0,.3]],I=(Z,wt=0)=>{let ct=(Z[0]+Z[3])/2,P=(Z[1]+Z[4])/2,C=(Z[2]+Z[5])/2;return Y.map(([X,K])=>[ct+Z[6]*(X+Math.sign(X)*wt),P+K+(K>0?wt:0)-.05,C+Z[7]*(X+Math.sign(X)*wt)])},ht=null,tt=null,rt=99;et.forEach((Z,wt)=>{let ct=I(Z),P=ct.map((G,lt)=>u.v(G[0],G[1],G[2],Y[lt][2],Y[lt][2],Y[lt][2]*1.05));if(ht)for(let G=0;G<P.length-1;G++)u.quad(ht[G],ht[G+1],P[G+1],P[G]);ht=P;let C=(Z[0]+Z[3])/2,X=(Z[2]+Z[5])/2,K=p.height(C,X)-(Z[1]+Z[4])/2,ft=K<8.5||rt<8.5?I(Z,.3):null;if(ft){let G=(Z[1]+Z[4])/2-.6;if(ft.unshift([C-Z[6]*(F+6.5),G+2.2,X-Z[7]*(F+6.5)]),ft.push([C+Z[6]*(F+6.5),G+2.2,X+Z[7]*(F+6.5)]),tt)for(let lt=0;lt<ft.length-1;lt++){let dt=l.v(...tt[lt]),bt=l.v(...tt[lt+1]),Ct=l.v(...ft[lt+1]),at=l.v(...ft[lt]);l.quad(dt,bt,Ct,at)}}if(tt=ft,rt=K,wt>0&&(wt+_)%2===0){let G=ct[4],lt=wt%4===0?.3:-.3,dt=G[0]+Z[6]*$*lt,bt=G[2]+Z[7]*$*lt,Ct=G[1]-.75,at=h.v(dt-D*.7-Z[6]*.16,Ct,bt-O*.7-Z[7]*.16),ut=h.v(dt+D*.7-Z[6]*.16,Ct,bt+O*.7-Z[7]*.16),pt=h.v(dt+D*.7+Z[6]*.16,Ct,bt+O*.7+Z[7]*.16),At=h.v(dt-D*.7+Z[6]*.16,Ct,bt-O*.7+Z[7]*.16);h.quad(at,ut,pt,At)}});for(let[Z,wt,ct]of[[w.nodes[0],_===0,et[0]],[w.nodes[w.nodes.length-1],_===w.nodes.length-2,et[et.length-1]]]){if(!wt)continue;let P=!1;for(let ut=this.adjHead[Z];ut>=0;ut=this.adjNext[ut])this.adjWay[ut]!==y&&this.ways[this.adjWay[ut]].flags&Ft.TUNNEL&&(P=!0);if(P)continue;let C=I(ct,.02),X=(ct[0]+ct[3])/2,K=(ct[1]+ct[4])/2,ft=(ct[2]+ct[5])/2,G=(ut,pt)=>l.v(X+ct[6]*ut,K+pt,ft+ct[7]*ut),lt=C.map(ut=>l.v(ut[0],ut[1],ut[2])),dt=G(-F-4.5,-.6),bt=G(-F-4.5,7.6),Ct=G(F+4.5,7.6),at=G(F+4.5,-.6);for(let ut of[[dt,lt[0],lt[2]],[dt,lt[2],bt],[bt,lt[2],lt[3]],[bt,lt[3],lt[4]],[bt,lt[4],Ct],[Ct,lt[4],lt[5]],[Ct,lt[5],lt[6]],[Ct,lt[6],at],[at,lt[6],lt[8]]])l.tri(ut[0],ut[1],ut[2])}}for(let[F,Y]of[[0,S],[w.nodes.length-1,A]]){if(F===0?_!==0:_!==w.nodes.length-2)continue;let I=Y*2+(j?1:0);if(g.has(I)||w.flags&Ft.ROUNDABOUT)continue;g.add(I);let ht=this.nx[Y],tt=this.nz[Y],rt=F===0?0:1,Z=Mt.v(ht,this.edgeH(y,_,rt,ht,tt),tt,it[0],it[1],it[2],ht*V,tt*V),wt=[];for(let ct=0;ct<14;ct++){let P=ct/14*Math.PI*2,C=ht+Math.cos(P)*$,X=tt+Math.sin(P)*$;wt.push(Mt.v(C,this.edgeH(y,_,rt,C,X),X,it[0],it[1],it[2],C*V,X*V))}for(let ct=0;ct<14;ct++)Mt.tri(Z,wt[(ct+1)%14],wt[ct])}if(J){for(let F=0;F<2;F++)for(let Y=0;Y<et.length-1;Y++){let I=et[Y],ht=et[Y+1],tt=I[F*3],rt=I[F*3+1],Z=I[F*3+2],wt=ht[F*3],ct=ht[F*3+1],P=ht[F*3+2],C=p.height(tt,Z),X=p.height(wt,P);if(rt-C<.35&&ct-X<.35||this.coveredBy(y,(tt+wt)/2,(Z+P)/2,.3))continue;let K=w.abs?Math.max(C-1,rt-1.4):C-.5,ft=w.abs?Math.max(X-1,ct-1.4):X-.5,G=l.v(tt,rt,Z),lt=l.v(wt,ct,P),dt=l.v(wt,ft,P),bt=l.v(tt,K,Z);l.quad(G,lt,dt,bt);let Ct=l.v(tt,rt+1,Z),at=l.v(wt,ct+1,P),ut=l.v(wt,ct,P),pt=l.v(tt,rt,Z);l.quad(Ct,at,ut,pt)}if(w.abs&&w.flags&Ft.BRIDGE)for(let F=1;F<et.length-1;F+=4){let Y=et[F],I=(Y[0]+Y[3])/2,ht=(Y[2]+Y[5])/2,tt=(Y[1]+Y[4])/2,rt=p.height(I,ht);if(tt-rt<3)continue;let Z=.6,wt=[[-Z,-Z],[Z,-Z],[Z,Z],[-Z,Z]];for(let ct=0;ct<4;ct++){let[P,C]=wt[ct],[X,K]=wt[(ct+1)%4],ft=l.v(I+P,tt-.5,ht+C),G=l.v(I+X,tt-.5,ht+K),lt=l.v(I+X,rt-1,ht+K),dt=l.v(I+P,rt-1,ht+C);l.quad(ft,G,lt,dt)}}}if(w.cls<=kt.TRUNK&&!(w.flags&Ft.LINK)&&!J){let F=this.zones(w).mark;for(let Y=0;Y<2;Y++)for(let I=0;I<et.length-1;I++){let ht=w.cum[_]+I/yt*N,tt=w.cum[_]+(I+1)/yt*N;if(ht-F.pc[_]<8||F.nc[_+1]-tt<8)continue;let rt=et[I],Z=et[I+1],wt=Y?1:-1,ct=.4*wt;if(this.coveredBy(y,(rt[Y*3]+Z[Y*3])/2+z*ct,(rt[Y*3+2]+Z[Y*3+2])/2+q*ct,.8))continue;let P=rt[Y*3]+z*ct,C=rt[Y*3+2]+q*ct,X=rt[Y*3+1],K=Z[Y*3]+z*ct,ft=Z[Y*3+2]+q*ct,G=Z[Y*3+1],lt=c.v(P,X+.85,C),dt=c.v(K,G+.85,ft),bt=c.v(K,G+.5,ft),Ct=c.v(P,X+.5,C);if(c.quad(lt,dt,bt,Ct),I%2===0){let at=c.v(P,X+.85,C),ut=c.v(P+D*.12,X+.85,C+O*.12),pt=c.v(P+D*.12,X-.2,C+O*.12),At=c.v(P,X-.2,C);c.quad(at,ut,pt,At)}}}this.buildSidewalk(f,y,_,et,yt,N),this.buildVerge(r,y,_,et,yt,N),this.buildMarkings(a,y,_)}let M=new oe(!0,!1);for(let v of this.roundabouts){if(this.tileKey(v.x,v.z)!==t)continue;let y=p.height(v.x,v.z)+v.dh+Uh+.22,_=v.poly,w=_.length,S=Math.min(1.6,v.r*.3),A=M.v(v.x,y+.25+Math.min(1.2,v.r*.06),v.z,.3,.52,.2),E=[[0,y-.6,.86,.86,.83],[0,y,.86,.86,.83],[.25,y,.62,.55,.5],[S,y+.06,.62,.55,.5],[S,y+.25,.8,.8,.78],[S+.25,y+.25,.33,.56,.22]].map(([L,N,D,O,z])=>_.map(([q,k])=>{let Q=Math.hypot(q-v.x,k-v.z)||1,$=Math.max(.05,(Q-L)/Q);return M.v(v.x+(q-v.x)*$,N,v.z+(k-v.z)*$,D,O,z)}));for(let L=0;L<E.length-1;L++)for(let N=0;N<w;N++){let D=(N+1)%w;M.quad(E[L][N],E[L+1][N],E[L+1][D],E[L][D])}let R=E[E.length-1];for(let L=0;L<w;L++)M.tri(A,R[(L+1)%w],R[L])}return yield,this.buildNodeMarks(t,a,r),yield,this.buildLaneArrows(t,d),this.buildRoundaboutEntries(t,a),yield,this.buildRails(t,r,l),yield,r.empty||e.add(r.mesh(i.road)),yield,o.empty||e.add(o.mesh(i.stone)),f.empty||e.add(f.mesh(i.walk)),yield,a.empty||e.add(a.mesh(i.mark)),d.empty||e.add(d.mesh(i.decal)),l.empty||e.add(l.mesh(i.wall,!0)),u.empty||e.add(u.mesh(i.tube)),h.empty||e.add(h.mesh(i.tlamp)),c.empty||e.add(c.mesh(i.guard)),M.empty||e.add(M.mesh(i.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&Ft.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<kt.PRIMARY||t.cls>kt.RESIDENTIAL||t.flags&(Ft.LINK|Ft.ROUNDABOUT|Ft.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,i,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let p=0;p<2;p++){if(!(u&(p?2:1)))continue;let m=p?1:-1,g=null;for(let x=0;x<=r;x++){let M=a.cum[n]+x/r*o,v=i[x],y=x/r,_=v[p*3],w=v[p*3+1],S=v[p*3+2],A=_+v[6]*m*hd,b=S+v[7]*m*hd;if((M-h.pc[n]<40||h.nc[n+1]-M<40)&&this.coveredBy(e,(_+A)/2,(S+b)/2,1)){g=null;continue}let R=this.edgeH(e,n,y,A,b),L=Math.max(w,R)+fv,N=[t.v(_,w-.05,S,d[0],d[1],d[2],0,M*.5),t.v(_,L,S,d[0],d[1],d[2],.1,M*.5),t.v(_,L,S,f[0],f[1],f[2],0,M*.6),t.v(A,L,b,f[0],f[1],f[2],1,M*.6),t.v(A,L,b,d[0],d[1],d[2],0,M*.5),t.v(A,Math.min(R,this.terrain.height(A,b))-.4,b,d[0],d[1],d[2],.1,M*.5)];if(g)for(let D=0;D<6;D+=2)m>0?t.quad(g[D],g[D+1],N[D+1],N[D]):t.quad(g[D],N[D],N[D+1],g[D+1]);g=N}}}buildVerge(t,e,n,i,r,o){let a=this.ways[e];if(a.cls>kt.UNCLASSIFIED||a.cls<kt.TRUNK||a.abs||!a.drivable||a.flags&(Ft.ROUNDABOUT|Ft.UNPAVED|Ft.NOCAR)||a.surf===1)return;let l=a.nodes[n],c=a.nodes[n+1];if(this.dh[l]>.3||this.dh[c]>.3||this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2))return;let u=this.zones(a).walk,h=this.terrain,f=.9,d=[.8,.76,.68],p=[.5,.56,.38];for(let m=0;m<2;m++){let g=m?1:-1,x=null;for(let M=0;M<=r;M++){let v=a.cum[n]+M/r*o,y=i[M],_=y[m*3],w=y[m*3+1],S=y[m*3+2],A=_+y[6]*g*f,b=S+y[7]*g*f;if((v-u.pc[n]<40||u.nc[n+1]-v<40)&&this.coveredBy(e,(_+A)/2,(S+b)/2,.6)){x=null;continue}let R=[t.v(_,w-.02,S,d[0],d[1],d[2],_*.9,S*.9),t.v(A,h.height(A,b)+.04,b,p[0],p[1],p[2],A*.9,b*.9)];x&&(g>0?t.quad(x[0],x[1],R[1],R[0]):t.quad(x[0],R[0],R[1],x[1])),x=R}}}buildMarkings(t,e,n){let i=this.ways[e];if(i.cls>=kt.SERVICE||!i.drivable||i.flags&Ft.UNPAVED||i.surf===1)return;let r=i.nodes[n],o=i.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,p=this.miter(i,n),m=this.miter(i,n+1),g=i.width/2,x=this.zones(i).mark,M=this.zones(i).walk,v=i.cum[n],y=[],_=i.limit<=50,w=i.flags&Ft.ROUNDABOUT;if(i.cls<=kt.TERTIARY||w||i.width>=7){let R=Math.max(.3,i.sh*.85);y.push({off:-g+R,wdt:.15,dash:0,edge:!0},{off:g-R,wdt:.15,dash:0,edge:!0})}let S=_?[3,4.5]:[4.5,7.5];if(w)i.nF>=2&&y.push({off:-g+i.sh+i.lw,wdt:.12,dash:[3,4.5]});else if(!i.oneway&&i.nF>=1&&i.nB>=1&&i.width>=5.4){let R=(x.nc[n+1]-(v+h)<22||v-x.pc[n]<22)&&i.cls<=kt.TERTIARY;i.nF+i.nB>=4?y.push({off:i.cOff-.14,wdt:.12,dash:0},{off:i.cOff+.14,wdt:.12,dash:0}):y.push({off:i.cOff,wdt:.15,dash:R?0:S});for(let L=1;L<i.nF;L++)y.push({off:i.cOff+i.lw*L,wdt:.12,dash:S});for(let L=1;L<i.nB;L++)y.push({off:i.cOff-i.lw*L,wdt:.12,dash:S})}else if(i.oneway&&i.nF>=2)for(let R=1;R<i.nF;R++)y.push({off:-g+i.sh+i.lw*R,wdt:.15,dash:[4.5,7.5]});let A=i.cls<=kt.TRUNK||i.flags&Ft.LINK?220:35,b=v-M.pc[n]<A||M.nc[n+1]-(v+h)<A,E=b?1.25:5;for(let R of y){let L=[];for(let q=0;q<h;q+=E)L.push(q);if(R.dash){let q=R.dash[0]+R.dash[1];for(let k=Math.floor(v/q)*q;k<v+h;k+=q)k>v&&L.push(k-v),k+R.dash[0]>v&&k+R.dash[0]<v+h&&L.push(k+R.dash[0]-v)}L.push(h),L.sort((q,k)=>q-k);let N=[];for(let q=0;q<L.length-1;q++){let k=L[q],Q=L[q+1];if(Q-k<.02)continue;let $=(k+Q)/2,yt=$/h,_t=!R.dash||(v+$)%(R.dash[0]+R.dash[1])<R.dash[0];if(_t&&b){let Dt=p[0]+(m[0]-p[0])*yt,it=p[1]+(m[1]-p[1])*yt;this.coveredBy(e,a+f*$+Dt*R.off,l+d*$+it*R.off,R.edge?.1:0,!!R.edge)&&(_t=!1)}N.push([k,Q,_t])}let D=-1,O=-1,z=-1;for(let q=0;q<N.length;q++){let[k,Q,$]=N[q];if(!$){D=-1;continue}let yt=N[q+1],_t=yt&&yt[2]&&yt[0]===Q&&Math.abs(Q/5-Math.round(Q/5))>1e-6,Dt=D>=0&&z===k;if(_t&&Dt){z=Q;continue}for(let it of Dt?[Q]:_t?[k]:[k,Q]){let j=it/h,Mt=p[0]+(m[0]-p[0])*j,V=p[1]+(m[1]-p[1])*j,J=a+f*it+Mt*R.off,W=l+d*it+V*R.off,B=J-Mt*R.wdt/2,et=W-V*R.wdt/2,F=J+Mt*R.wdt/2,Y=W+V*R.wdt/2,I=t.v(B,this.edgeH(e,n,j,B,et)+.02,et,1,1,1),ht=t.v(F,this.edgeH(e,n,j,F,Y)+.02,Y,1,1,1);D>=0&&t.quad(D,O,ht,I),D=I,O=ht}z=Q}}}buildNodeMarks(t,e,n){let i=new Set,r=[Jt.CROSSING,Jt.CROSSING_SIGNALS,Jt.BUMP,Jt.TABLE,Jt.MINI_RB,Jt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||i.has(h)||!r.includes(f)||c.cls>=kt.SERVICE&&f!==Jt.TURNING)continue;i.add(h);let d=Math.min(u,c.nodes.length-2),p=c.nodes[d],m=c.nodes[d+1],g=this.nx[m]-this.nx[p],x=this.nz[m]-this.nz[p],M=Math.hypot(g,x)||1,v=g/M,y=x/M,_=-y,w=v,S=this.nx[h],A=this.nz[h],b=c.width/2,E=u===d?0:1,R=(L,N,D,O,z,q=.025)=>{let k=[[L,D],[N,D],[N,O],[L,O]].map(([Q,$])=>{let yt=S+_*Q+v*$,_t=A+w*Q+y*$;return e.v(yt,this.edgeH(a,d,E,yt,_t)+q,_t,z[0],z[1],z[2])});e.quad(k[0],k[1],k[2],k[3])};if(f===Jt.CROSSING||f===Jt.CROSSING_SIGNALS)for(let L=-b+.55;L<=b-.55;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1]);else if(f===Jt.BUMP){let L=0;for(let N=-b+.2;N<b-.2;N+=.5,L++)R(N,Math.min(b-.2,N+.5),-.45,.45,L%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===Jt.TABLE){R(-b+.1,b-.1,-2.6,2.6,[.72,.36,.3],.05);for(let L=-b+.6;L<=b-.6;L+=1)R(L-.25,L+.25,-1.5,1.5,[1,1,1],.07)}else if(f===Jt.MINI_RB){let L=this.edgeH(a,d,E,S,A)+.03,N=e.v(S,L+.08,A,1,1,1),D=[];for(let O=0;O<16;O++){let z=O/16*6.2832;D.push(e.v(S+Math.cos(z)*1.5,L,A+Math.sin(z)*1.5,1,1,1))}for(let O=0;O<16;O++)e.tri(N,D[(O+1)%16],D[O])}else if(f===Jt.TURNING){let L=this.wayColor(c),N=Math.max(7,b+3),D=n.v(S,this.edgeH(a,d,E,S,A),A,L[0],L[1],L[2],S*.2,A*.2),O=[];for(let z=0;z<20;z++){let q=z/20*6.2832,k=S+Math.cos(q)*N,Q=A+Math.sin(q)*N;O.push(n.v(k,this.edgeH(a,d,E,k,Q),Q,L[0],L[1],L[2],k*.2,Q*.2))}for(let z=0;z<20;z++)n.tri(D,O[(z+1)%20],O[z])}}}}buildLaneArrows(t,e){let n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let p of a.len>70?[9,32]:[9]){if(p>a.len-4)continue;let[m,g,x,M]=this.pointAt(a,l>0?a.len-p:p),v=a.nodes[x],y=a.nodes[x+1],_=this.nx[y]-this.nx[v],w=this.nz[y]-this.nz[v],S=Math.hypot(_,w)||1;_=_/S*l,w=w/S*l;let A=-w,b=_,E=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((R,L)=>{let N=new Set(R.split(";").map(O=>O.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(O=>O==="left"||O==="right"||O==="through"));if(!N.size)return;let D=E+d*(L+.5);this.addDecal(e,r,x,M,m+A*D,g+b*D,_,w,Math.min(1.5,d*.5),4.2,[...N].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let i=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=i.oneway?-i.width/2+.3:(n.dir>0?i.cOff:-i.cOff)+.15,p=i.width/2-.3;for(let m=d;m+.5<=p;m+=.75){let g=[[m,-.3],[m+.5,-.3],[m+.25,.35]].map(([x,M])=>{let v=h+l*x-r*M,y=f+c*x-o*M;return e.v(v,this.edgeH(n.wi,n.k,n.t,v,y)+.03,y,1,1,1)});e.tri(g[0],g[1],g[2]),e.tri(g[0],g[2],g[1])}}}buildRails(t,e){let n=this.terrain;for(let i of this.tileRails.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,p=(h-c)/f,m=-p,g=d,x=Math.max(1,Math.ceil(f/6)),M=(v,y,_)=>{if(a.bridge&&a.cum){let w=a.cum[o]+_*f;return a.h0+(a.h1-a.h0)*w/(a.cum[a.cum.length-1]||1)+.25}return n.height(v,y)+.25};for(let[v,y,_]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let w=-1,S=-1;for(let A=0;A<=x;A++){let b=A/x,E=l+(u-l)*b+m*v,R=c+(h-c)*b+g*v,L=M(E,R,b)+(_?.16:0),N=E-m*y/2,D=R-g*y/2,O=E+m*y/2,z=R+g*y/2,q=_?[.35,.33,.32]:[.75,.68,.58],k=e.v(N,L,D,...q,N*.3,D*.3),Q=e.v(O,L,z,...q,O*.3,z*.3);w>=0&&e.quad(w,S,Q,k),w=k,S=Q}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new oe(!0,!0),i=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let v=3;v<r.length;v+=2)u+=r[v],h+=r[v+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let v=0;v<c.length-1;v++){let y=Math.hypot(c[v+1][0]-c[v][0],c[v+1][1]-c[v][1]),_=Math.max(1,Math.ceil(y/6));for(let w=0;w<_;w++)f.push([c[v][0]+(c[v+1][0]-c[v][0])*w/_,c[v][1]+(c[v+1][1]-c[v][1])*w/_,d+y*w/_]);d+=y}f.push([c[c.length-1][0],c[c.length-1][1],d]);let p=i[o],m=e.height(f[0][0],f[0][1]),g=e.height(f[f.length-1][0],f[f.length-1][1]),x=-1,M=-1;for(let v=0;v<f.length;v++){let y=f[Math.min(f.length-1,v+1)],_=f[Math.max(0,v-1)],w=y[0]-_[0],S=y[1]-_[1],A=Math.hypot(w,S)||1;w/=A,S/=A;let b=-S,E=w,R=f[v][0],L=f[v][1],N=d>0?f[v][2]/d:0,D=R-b*a/2,O=L-E*a/2,z=R+b*a/2,q=L+E*a/2,k=l?m+(g-m)*N+Math.sin(Math.PI*N)*Math.min(5.5,d*.12)+.1:0,Q=n.v(D,l?k:e.height(D,O)+.1,O,p[0],p[1],p[2],D*.3,O*.3),$=n.v(z,l?k:e.height(z,q)+.1,q,p[0],p[1],p[2],z*.3,q*.3);x>=0&&n.quad(x,M,$,Q),x=Q,M=$}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new oe(!0,!1),i=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,p=-f/d*u/2,m=h/d*u/2,g=[[o-p,a-m],[o+p,a+m],[l+p,c+m],[l-p,c-m]].map(([x,M])=>n.v(x,e.height(x,M)+.1,M,1,1,1));n.quad(g[0],g[1],g[2],g[3])};for(let o=0;o<i.length;o+=5){let a=i[o]/10,l=i[o+1]/10,c=i[o+2]/10*Math.PI/180,u=i[o+3]/10,h=(i[o+4]>>1)/10,f=i[o+4]&1,d=Math.sin(c),p=Math.cos(c),m=-p,g=d;if(f===0)for(let x of[1,-1])r(a+m*x*u/2-d*h/2,l+g*x*u/2-p*h/2,a+m*x*u/2+d*h/2,l+g*x*u/2+p*h/2,.1);else for(let x of[1,-1])r(a+d*x*h/2-m*u/2,l+p*x*h/2-g*u/2,a+d*x*h/2+m*u/2,l+p*x*h/2+g*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let i=this.terrain,r=new oe(!0,!1),o=new oe(!0,!1),a=new oe(!0,!0),l=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let u of t.ba){let h=l[u[0]],f=u[1]/10,d=[],p=0,m=0;for(let g=2;g<u.length;g+=2)p+=u[g],m+=u[g+1],d.push([p/10,m/10]);if(u[0]>=4){if(cd(o,a,d,u[0],f,i,u[2]+u[3]*31),e&&u[0]!==7)for(let g=0;g<d.length-1;g++){let[x,M]=d[g],[v,y]=d[g+1],_=Math.hypot(v-x,y-M);if(_<1.5)continue;let w=-(y-M)/_*.3,S=(v-x)/_*.3;e.addPolygon(n,Float32Array.from([x-w,M-S,v-w,y-S,v+w,y+S,x+w,M+S]))}continue}for(let g=0;g<d.length-1;g++){let[x,M]=d[g],[v,y]=d[g+1],_=Math.hypot(v-x,y-M);if(_<.2)continue;let w=-(y-M)/_*h.th/2,S=(v-x)/_*h.th/2,A=Math.max(1,Math.ceil(_/8));for(let b=0;b<A;b++){let E=b/A,R=(b+1)/A,L=x+(v-x)*E,N=M+(y-M)*E,D=x+(v-x)*R,O=M+(y-M)*R,z=i.height(L,N),q=i.height(D,O),k=u[0]===3?.45:-.3,Q=h.c,$=[Q[0]*.8,Q[1]*.8,Q[2]*.8],yt=[[L-w,N-S,z],[D-w,O-S,q],[D+w,O+S,q],[L+w,N+S,z]],_t=yt.map(([Dt,it,j])=>r.v(Dt,j+f,it,Q[0],Q[1],Q[2]));r.quad(_t[0],_t[1],_t[2],_t[3]);for(let[Dt,it]of[[0,1],[2,3]]){let j=yt[Dt],Mt=yt[it],V=r.v(j[0],j[2]+f,j[1],$[0],$[1],$[2]),J=r.v(Mt[0],Mt[2]+f,Mt[1],$[0],$[1],$[2]),W=r.v(Mt[0],Mt[2]+k,Mt[1],$[0],$[1],$[2]),B=r.v(j[0],j[2]+k,j[1],$[0],$[1],$[2]);r.quad(V,J,W,B)}}if(e&&u[0]!==3&&_>1.5){let b=Math.max(.4,h.th/2),E=-(y-M)/_*b,R=(v-x)/_*b;e.addPolygon(n,Float32Array.from([x-E,M-R,v-E,y-R,v+E,y+R,x+E,M+R]))}}}let c=new $t;if(r.empty||c.add(r.mesh(this.materials().barrier,!0)),o.empty||c.add(o.mesh(Ns().solid,!1)),!a.empty){let u=a.mesh(Ns().grille,!1);c.add(u)}return c.children.length?c:null}};var fd=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],dd=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],pd=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],md=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],gd=new Lt;function pv(){let e=()=>{let c=document.createElement("canvas");return c.width=c.height=512,c},n={res:e(),condo:e(),modern:e(),ind:e(),plain:e(),emiR:e(),emiC:e(),emiM:e(),emiI:e()},i=Object.fromEntries(Object.entries(n).map(([c,u])=>[c,u.getContext("2d")]));for(let c of["res","condo","modern","ind","plain"]){let u=i[c];u.fillStyle="#ffffff",u.fillRect(0,0,512,512);for(let h=0;h<2500;h++)u.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,u.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8)}for(let c of["emiR","emiC","emiM","emiI"])i[c].fillStyle="#000",i[c].fillRect(0,0,512,512);let r=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"],o=(c,u,h,f,d,p=.35)=>{c.fillStyle=Math.random()<p?Math.random()<.5?"#ffd890":"#fff0c0":"#000",c.fillRect(u,h,f,d)},a=(c,u,h,f,d)=>{c.fillStyle="#2f3438",c.fillRect(u,h,f,d),c.fillStyle="#5c6a72",c.fillRect(u+2,h+2,f/2-3,d-4),c.fillRect(u+f/2+1,h+2,f/2-3,d-4)};for(let c=0;c<8;c++)for(let u=0;u<8;u++){let h=u*64,f=c*64,d=c===7,{res:p,condo:m,modern:g,ind:x}=i;for(let S of[p,m])S.fillStyle="rgba(0,0,0,0.07)",S.fillRect(h,f,64,2);if(d){if(p.fillStyle="rgba(60,50,40,0.28)",p.fillRect(h,f+64*.8,64,64*.2),u%4===1)p.fillStyle="#d8d2c4",p.fillRect(h+64*.26,f+64*.2,64*.48,64*.8),p.fillStyle=r[(u+2)%r.length],p.beginPath(),p.roundRect(h+64*.3,f+64*.24,64*.4,64*.76,[64*.2,64*.2,0,0]),p.fill(),p.fillStyle="rgba(0,0,0,0.3)",p.fillRect(h+64*.495,f+64*.3,1.5,64*.7);else{let b=h+22.4,E=f+64*.26;p.fillStyle="#d8d2c4",p.fillRect(b-3,E-3,19.2+6,25.6+7),a(p,b,E,19.2,25.6),p.strokeStyle="rgba(20,20,20,0.7)",p.lineWidth=1;for(let R=1;R<5;R++)p.beginPath(),p.moveTo(b+19.2*R/5,E),p.lineTo(b+19.2*R/5,E+25.6),p.stroke();o(i.emiR,b,E,19.2,25.6,.25)}if(m.fillStyle="rgba(70,70,70,0.3)",m.fillRect(h,f,64,64),u%4===2)m.fillStyle="#39424a",m.fillRect(h+64*.2,f+64*.22,64*.6,64*.78),m.fillStyle="#7d8f9c",m.fillRect(h+64*.24,f+64*.26,64*.24,64*.74),m.fillRect(h+64*.52,f+64*.26,64*.24,64*.74),o(i.emiC,h+64*.24,f+64*.26,64*.52,64*.7,.8);else{m.fillStyle="#b9bcbd",m.fillRect(h+64*.12,f+64*.3,64*.76,64*.7),m.fillStyle="rgba(0,0,0,0.18)";for(let S=0;S<9;S++)m.fillRect(h+64*.12,f+64*(.33+S*.075),64*.76,1.5)}if(g.fillStyle="#3d4850",g.fillRect(h+3,f+64*.18,58,64*.82),g.fillStyle="#8fa3b0",g.fillRect(h+6,f+64*.22,52,64*.74),o(i.emiM,h+6,f+64*.22,52,64*.74,.5),x.fillStyle="rgba(0,0,0,0.12)",x.fillRect(h,f+64*.75,64,64*.25),u%4===0){x.fillStyle="#6d7479",x.fillRect(h+64*.08,f+64*.08,64*.84,64*.92),x.fillStyle="rgba(0,0,0,0.2)";for(let S=0;S<8;S++)x.fillRect(h+64*.08,f+64*(.12+S*.11),64*.84,1.5)}continue}let M=64*.34,v=64*.52,y=h+(64-M)/2,_=f+64*.22;p.fillStyle="#d8d2c4",p.fillRect(y-3,_-3,M+6,v+7),a(p,y,_,M,v);let w=Math.random();p.fillStyle=r[(u*7+c*3)%r.length],w<.6?(p.fillRect(y-M/2-2,_,M/2,v),p.fillRect(y+M+2,_,M/2,v)):w<.85&&p.fillRect(y,_,M,v),p.fillStyle="rgba(0,0,0,0.25)";for(let S=0;S<6;S++)p.fillRect(y-M/2-2,_+S*v/6,M*2+4,1);if((w<.6||w>=.85)&&o(i.emiR,y,_,M,v),(u+c)%3!==0){let b=h+19.2,E=f+64*.2;m.fillStyle="#e4e0d6",m.fillRect(b-3,E-3,25.6+6,42.24+3),a(m,b,E,25.6,42.24),o(i.emiC,b,E,25.6,42.24),m.fillStyle="rgba(0,0,0,0.3)",m.fillRect(h+3,f+64*.88,58,4),m.fillStyle="#c9c6bd",m.fillRect(h+2,f+64*.84,60,4),m.fillStyle="rgba(40,44,48,0.75)",m.fillRect(h+2,f+64*.56,60,2.5);for(let R=0;R<=10;R++)m.fillRect(h+2+58*R/10,f+64*.56,1.5,64*.28)}else{let b=h+21.119999999999997,E=f+64*.26;m.fillStyle="#e4e0d6",m.fillRect(b-3,E-3,21.76+6,28.16+7),a(m,b,E,21.76,28.16),o(i.emiC,b,E,21.76,28.16),m.fillStyle="#8f9499",m.fillRect(b,E,21.76,28.16*(Math.random()<.5?.35:.1))}g.fillStyle="#3d4850",g.fillRect(h+64*.1,f+64*.24,64*.8,64*.5),g.fillStyle="#7f95a3",g.fillRect(h+64*.13,f+64*.27,64*.35,64*.44),g.fillRect(h+64*.52,f+64*.27,64*.35,64*.44),g.fillStyle="rgba(0,0,0,0.1)",g.fillRect(h,f+64*.82,64,2),o(i.emiM,h+64*.13,f+64*.27,64*.74,64*.44,.4),x.fillStyle="rgba(0,0,0,0.08)",x.fillRect(h,f,2,64),c%2===0&&(x.fillStyle="#4b5a63",x.fillRect(h+3,f+64*.3,58,64*.3),i.emiI.fillStyle=Math.random()<.25?"#e8f0ff":"#000",i.emiI.fillRect(h+3,f+64*.3,58,64*.3))}let l=c=>{let u=new Le(c);return u.wrapS=u.wrapT=mi,u.anisotropy=8,u.colorSpace=ve,u};return Object.fromEntries(Object.entries(n).map(([c,u])=>[c,l(u)]))}var Ra=class{constructor(t){this.terrain=t;let e=pv(),n=(i,r)=>new Ht({map:i,vertexColors:!0,emissiveMap:r,emissive:16777215,emissiveIntensity:0});this.mats={res:n(e.res,e.emiR),condo:n(e.condo,e.emiC),modern:n(e.modern,e.emiM),ind:n(e.ind,e.emiI),plain:new Ht({map:e.plain,vertexColors:!0}),roof:new Ht({vertexColors:!0,side:re})},this.mats.roof.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
varying float vRUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vRUp = abs(normalize(mat3(modelMatrix) * objectNormal).y);`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
varying float vRUp;`).replace("#include <color_fragment>",`#include <color_fragment>
          float pitch = smoothstep(0.995, 0.96, vRUp) * clamp(1.0 - distance(cameraPosition, vRW) / 260.0, 0.0, 1.0);
          float rowsT = 0.84 + 0.16 * smoothstep(0.0, 0.35, fract(vRW.y * 2.6));
          float colsT = 0.94 + 0.06 * step(0.5, fract((vRW.x + vRW.z) * 2.4));
          diffuseColor.rgb *= mix(1.0, rowsT * colsT, pitch);`)}}setNight(t){for(let e of["res","condo","modern"])this.mats[e].emissiveIntensity=t*.55;this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let i=this.buildGen(t,e,n),r;for(;!(r=i.next()).done;);return r.value}*buildGen(t,e,n){let i=this.terrain,r={res:new oe,condo:new oe,modern:new oe,ind:new oe,plain:new oe},o=new oe(!0,!1),a=t.s,l=[],c=0;for(let h of t.b){++c%12===0&&(yield);let f=h[0],d=h[1]/10,p=h[2]/10,m=h[3],g=h[4],x=a[h[5]],M=a[h[6]],v=a[h[7]],y=[],_=0,w=0;for(let j=8;j<h.length;j+=2)_+=h[j],w+=h[j+1],y.push(_/10,w/10);let S=y.length/2;if(S<3)continue;let A=0,b=0,E=0,R=1e9,L=-1e9;for(let j=0;j<S;j++){let Mt=(j+1)%S;A+=y[j*2]*y[Mt*2+1]-y[Mt*2]*y[j*2+1],b+=y[j*2],E+=y[j*2+1];let V=i.height(y[j*2],y[j*2+1]);R=Math.min(R,V),L=Math.max(L,V)}A=Math.abs(A/2),b/=S,E/=S;let N=Ee(Math.floor(y[0]*10)*7919+Math.floor(y[1]*10)),D=Ee(Math.floor(y[1]*10)*104729+17),O=f;if(O===0&&(O=A<45?6:A>1800?3:2),!(d>0))if(m>0)d=m*3.1+.6;else switch(O){case 1:d=6.2+N*2.5;break;case 2:d=A>500?11+N*7:7+N*4;break;case 3:d=7.5+N*4;break;case 4:d=7+N*5;break;case 5:d=13+Math.min(10,A/80);break;case 6:d=2.8+N*.8;break;case 7:d=10+N*4;break;case 8:d=28+N*12;break;case 9:d=6+N*2;break;default:d=4+N*3}let z=R-.6+p,q=(R+L)/2+d,k=Math.max(1,Math.round(d/3.05)),Q=O===3||O===4?"ind":O===5||O===6||O===8||O===9||O===10?"plain":"res";Q==="res"&&(k>=4&&A>160?Q=D<.75?"condo":"modern":k>=2&&A>110&&N<.16?Q="modern":k===3&&A>220&&D<.45&&(Q="condo"));let $;if(M&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(M))try{gd.set(M),$=gd.clone()}catch{$=null}$||($=new Lt(Q==="ind"?dd[Math.floor(D*dd.length)]:O===8||O===5?D<.5?"#d8c9a8":"#c9a77f":fd[Math.floor(D*fd.length)])),$.convertSRGBToLinear();let yt=r[Q],_t=0;for(let j=0;j<S;j++){let Mt=(j+1)%S,V=y[j*2],J=y[j*2+1],W=y[Mt*2],B=y[Mt*2+1],et=Math.hypot(W-V,B-J),F=_t/24,Y=Math.max(1,Math.round(et/3)),I=F+Y/8,ht=k/8,tt=ht*(z-(q-d))/d,rt=yt.v(V,z,J,$.r*.78,$.g*.78,$.b*.78,F,tt),Z=yt.v(V,q,J,$.r,$.g,$.b,F,ht),wt=yt.v(W,q,B,$.r,$.g,$.b,I,ht),ct=yt.v(W,z,B,$.r*.78,$.g*.78,$.b*.78,I,tt);yt.quad(rt,Z,wt,ct),_t+=et}let Dt,it=(O===1||O===2&&(A<1400||m<=4)||O===5||O===9||O===7&&A<900||O===6&&A>18)&&g!==1;if(v&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(v))try{Dt=new Lt(v)}catch{Dt=null}Dt||(Dt=new Lt(it?pd[Math.floor(N*pd.length)]:md[Math.floor(N*md.length)])),Dt.convertSRGBToLinear(),this.roof(o,y,S,q,it,Dt,A,O,$,D),e&&e.addPolygon(n,Float32Array.from(y),q+(it?3:1)),x&&(O===5||O===8||f===7)&&l.push({name:x,x:b,z:E,y:q+4})}let u=new $t;for(let h of["res","condo","modern","ind","plain"])r[h].empty||(yield,u.add(r[h].mesh(this.mats[h],!0)));return yield,o.empty||u.add(o.mesh(this.mats.roof,!0)),{group:u,labels:l}}offsetRing(t,e,n){let i=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let p=-c,m=l,g=-h,x=u,M=Math.max(.35,1+p*g+m*x);i[r*2]=t[r*2]+n*(p+g)/M,i[r*2+1]=t[r*2+1]+n*(m+x)/M}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return i}roof(t,e,n,i,r,o,a,l,c,u){let h=(v,y,_,w=o)=>{let S=y[0]-v[0],A=y[2]-v[2],b=_[0]-v[0],E=_[2]-v[2],R=A*b-S*E,L=t.v(v[0],v[1],v[2],w.r,w.g,w.b),N=t.v(y[0],y[1],y[2],w.r,w.g,w.b),D=t.v(_[0],_[1],_[2],w.r,w.g,w.b);R>=0?t.tri(L,N,D):t.tri(L,D,N)},f=(v,y,_,w,S)=>{h(v,y,_,S),h(v,_,w,S)},d=o.clone().multiplyScalar(.84),p=o.clone().multiplyScalar(1.06),m=.45,g=(v,y,_)=>{if(u>.55)return;let w=.3,S=1.1,A=c.clone().multiplyScalar(.9),b=[[v-w,y-w],[v+w,y-w],[v+w,y+w],[v-w,y+w]];for(let E=0;E<4;E++){let[R,L]=b[E],[N,D]=b[(E+1)%4];f([R,_-.6,L],[N,_-.6,D],[N,_+S,D],[R,_+S,L],A)}f([b[0][0],_+S,b[0][1]],[b[1][0],_+S,b[1][1]],[b[2][0],_+S,b[2][1]],[b[3][0],_+S,b[3][1]],d)};if(r&&n===4&&a<2500){let v=[0,1,2,3].map($=>[e[$*2],e[$*2+1]]),y=Math.hypot(v[1][0]-v[0][0],v[1][1]-v[0][1]),_=Math.hypot(v[2][0]-v[1][0],v[2][1]-v[1][1]),w=_>y?[v[1],v[2],v[3],v[0]]:v,S=Math.max(y,_),A=Math.min(y,_),b=(w[0][0]+w[1][0]+w[2][0]+w[3][0])/4,E=(w[0][1]+w[1][1]+w[2][1]+w[3][1])/4,R=(w[1][0]-w[0][0]+(w[2][0]-w[3][0]))/2/S,L=(w[1][1]-w[0][1]+(w[2][1]-w[3][1]))/2/S,N=Math.min(A*.27,5),D=this.offsetRing(w.flat(),4,-m),O=[0,1,2,3].map($=>[D[$*2],i-m*.5,D[$*2+1]]),z=u>.4,q=z?S/2+m:Math.max(0,S/2-A/2),k=[b-R*q,i+N,E-L*q],Q=[b+R*q,i+N,E+L*q];if(f(O[0],O[1],Q,k,p),f(O[2],O[3],k,Q,o),z){let $=[0,1,2,3].map(yt=>[w[yt][0],i,w[yt][1]]);h($[1],$[2],[b+R*S/2,i+N,E+L*S/2],c),h($[3],$[0],[b-R*S/2,i+N,E-L*S/2],c)}else h(O[1],O[2],Q,d),h(O[3],O[0],k,d);g(b+R*S*.2,E+L*S*.2,i+N);return}if(r&&a<6e3&&n<=60){let v=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),y=this.offsetRing(e,n,v);if(y||(v*=.5,y=this.offsetRing(e,n,v)),y){let _=this.offsetRing(e,n,-m),w=i+v*.5;for(let b=0;b<n;b++){let E=(b+1)%n;f([_[b*2],i-m*.4,_[b*2+1]],[_[E*2],i-m*.4,_[E*2+1]],[y[E*2],w,y[E*2+1]],[y[b*2],w,y[b*2+1]],b%2?o:d)}let S=[];for(let b=0;b<n;b++)S.push(new St(y[b*2],y[b*2+1]));let A=[];try{A=Fn.triangulateShape(S,[])}catch{A=[]}for(let[b,E,R]of A)h([S[b].x,w,S[b].y],[S[E].x,w,S[E].y],[S[R].x,w,S[R].y],p);(l===1||l===2)&&g(y[0]*.5+y[2]*.5,y[1]*.5+y[3]*.5,w);return}}let x=[];for(let v=0;v<n;v++)x.push(new St(e[v*2],e[v*2+1]));let M;try{M=Fn.triangulateShape(x,[])}catch{return}for(let[v,y,_]of M)h([x[v].x,i-.25,x[v].y],[x[y].x,i-.25,x[y].y],[x[_].x,i-.25,x[_].y])}};var mv={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},Ca=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new Ar(1,1),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r),l=i.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));i.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new As(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new te(.12,.18,1,5),this.crownMat=new Ht({color:16777215}),this.trunkMat=new Ht({color:5981746})}build(t,e,n,i,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(z,q,k,Q=!1,$=!1)=>f.push([z,q,k,Q,$]);if(t){for(let z=0;z<t.tr.length;z+=2)d(t.tr[z]/10,t.tr[z+1]/10,.9+Ee(z)*.5);for(let z of t.rows){let q=0,k=0,Q=[];for(let $=0;$<z.length;$+=2)q+=z[$],k+=z[$+1],Q.push([q/10,k/10]);for(let $=0;$<Q.length-1;$++){let yt=Math.hypot(Q[$+1][0]-Q[$][0],Q[$+1][1]-Q[$][1]);for(let _t=0;_t<yt;_t+=7)d(Q[$][0]+(Q[$+1][0]-Q[$][0])*_t/yt,Q[$][1]+(Q[$+1][1]-Q[$][1])*_t/yt,.8+Ee($*31+_t)*.4,!1,Ee(z.length*7+z[0])<.45)}}}let p=11,m=e*7919+n*104729|0;for(let z=h+p/2;z<h+c;z+=p)for(let q=u+p/2;q<u+c;q+=p){m++;let k=q+(Ee(m)-.5)*p,Q=z+(Ee(m*3+1)-.5)*p,$=a.landClass(k,Q),yt=(mv[$]||0)*o;Ee(m*7+5)>yt||d(k,Q,.75+Ee(m*11)*.6,($==="forest"||$==="wood")&&Ee(m*13)<.12)}let g=f.filter(([z,q])=>{let k=l.nearest(z,q,9);return!k||k.d>l.ways[k.wi].width/2+1.5});if(!g.length)return null;let x=g.length,M=g.filter(z=>z[3]).length,v=new Ce(this.crownGeo,this.crownMat,x-M),y=M?new Ce(this.coneGeo,this.crownMat,M):null,_=new Ce(this.trunkGeo,this.trunkMat,x),w=new Kt,S=new Ie,A=new H,b=new H,E=new Lt,R=new H(0,1,0),L=0,N=0,D=0;for(let[z,q,k,Q,$]of g){let yt=a.height(z,q),_t=(Q?10:$?13:6.5)*k*(.8+Ee(L*5+1)*.5),Dt=(Q?2.1:$?1.5:2.6+Ee(L*9)*1.4)*k;S.setFromAxisAngle(R,Ee(L*17)*6.28),b.set(z,yt+_t*.3,q),A.set(1,_t*.6,1),w.compose(b,S,A),_.setMatrixAt(L,w);let it=.75+Ee(L*23)*.4;if(Q)b.set(z,yt+_t*.55,q),A.set(Dt,_t*.85,Dt),w.compose(b,S,A),y.setMatrixAt(D,w),E.setRGB(.1*it,.26*it,.12*it),y.setColorAt(D++,E);else{b.set(z,yt+_t*.62,q),A.set(Dt,$?_t*.42:Dt*1.05,Dt),w.compose(b,S,A),v.setMatrixAt(N,w);let j=Ee(L*41)<.06;E.setRGB(j?.42*it:.17*it,j?.3*it:(.29+Ee(L*31)*.07)*it,.09*it),v.setColorAt(N++,E)}i&&i.addCircle(r,z,q,.35*k,yt+_t),L++}v.castShadow=!0,_.castShadow=!1,v.computeBoundingSphere(),_.computeBoundingSphere();let O=new $t;return O.add(v,_),y&&(y.castShadow=!0,y.computeBoundingSphere(),O.add(y)),O}};var Nr=44;function zr(s,t){let e=(t%Nr+Nr)%Nr,n=s===0?e:(e+Nr/2)%Nr;return n<17?"G":n<20.5?"Y":"R"}function ke(s,t,e,n,i,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,p]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let m=f*i/2,g=p*o/2;h.push([t+m*c+g*u,e+d*r/2,n-m*u+g*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(p=>s.v(h[p][0],h[p][1],h[p][2],l[0],l[1],l[2],0,0));s.quad(d[0],d[1],d[2],d[3])}}function On(s,t,e,n,i,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=s.v(t-u*i/2,e-r/2,n-h*i/2,1,1,1,a[0],a[1]),d=s.v(t+u*i/2,e-r/2,n+h*i/2,1,1,1,a[2],a[1]),p=s.v(t+u*i/2,e+r/2,n+h*i/2,1,1,1,a[2],a[3]),m=s.v(t-u*i/2,e+r/2,n-h*i/2,1,1,1,a[0],a[3]);s.quad(f,d,p,m)}var Fh=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back","curveR","curveL","steep","children"];function Ur(s,t=!1){let e=Fh.indexOf(s),n=e%8,i=Math.floor(e/8)+(t?4:0);return[n/8,1-(i+1)/8,(n+1)/8,1-i/8]}function gv(s,t){let i=(h,f)=>{s.beginPath(),s.arc(64,64,h,0,7),s.fillStyle=f,s.fill()},r=(h,f)=>{s.beginPath(),h.forEach(([d,p],m)=>m?s.lineTo(d,p):s.moveTo(d,p)),s.closePath(),s.fillStyle=f,s.fill()},o=(h,f,d,p,m,g)=>{s.beginPath(),s.roundRect(h,f,d,p,m),s.fillStyle=g,s.fill()},a=(h,f,d,p=67)=>{s.fillStyle=d,s.font=`bold ${f}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(h,64,p)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(/^s\d+$/.test(t)){i(62,l),i(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,p)=>{let m=(p+.5)/8*Math.PI*2;return[64+Math.cos(m)*f,64+Math.sin(m)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{i(62,"#fff"),i(58,c),s.strokeStyle="#fff",s.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;s.beginPath(),s.arc(64,64,30,f,d,!1),s.stroke();let p=64+Math.cos(f)*30,m=64+Math.sin(f)*30;s.save(),s.translate(p,m),s.rotate(f-Math.PI/2),s.beginPath(),s.moveTo(0,-17),s.lineTo(13,6),s.lineTo(-13,6),s.closePath(),s.fillStyle="#fff",s.fill(),s.restore()}break}case"noentry":i(62,"#fff"),i(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),s.fillStyle="#111",s.beginPath(),s.arc(66,52,7,0,7),s.fill(),s.strokeStyle="#111",s.lineWidth=6,s.lineCap="round",s.beginPath(),s.moveTo(64,62),s.lineTo(62,82),s.lineTo(50,100),s.moveTo(62,82),s.lineTo(76,100),s.moveTo(52,74),s.lineTo(64,66),s.lineTo(78,76),s.stroke(),s.lineCap="butt";break}case"bump":u(),s.fillStyle="#111",s.beginPath(),s.moveTo(36,96),s.quadraticCurveTo(64,56,92,96),s.closePath(),s.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"curveR":case"curveL":{u(),s.save(),t==="curveL"&&(s.translate(128,0),s.scale(-1,1)),s.strokeStyle="#111",s.lineWidth=9,s.lineCap="butt",s.beginPath(),s.moveTo(52,102),s.lineTo(52,84),s.quadraticCurveTo(52,62,78,58),s.stroke(),r([[92,56],[74,44],[74,70]],"#111"),s.restore();break}case"steep":{u(),r([[34,100],[96,100],[34,66]],"#111"),s.fillStyle="#111",s.font="bold 20px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("10%",72,74);break}case"children":{u(),s.fillStyle="#111",s.strokeStyle="#111",s.lineWidth=5,s.lineCap="round";for(let[h,f]of[[52,1],[78,.82]])s.beginPath(),s.arc(h,62+(1-f)*14,6*f,0,7),s.fill(),s.beginPath(),s.moveTo(h,70),s.lineTo(h,86),s.lineTo(h-8*f,102),s.moveTo(h,86),s.lineTo(h+8*f,102),s.moveTo(h-9*f,78),s.lineTo(h+9*f,76),s.stroke();s.lineCap="butt";break}case"level":{s.lineCap="butt";for(let h of[1,-1])s.save(),s.translate(64,64),s.rotate(h*.55),s.fillStyle=l,s.fillRect(-62,-13,124,26),s.fillStyle="#fff",s.fillRect(-56,-8,112,16),s.fillStyle=l,s.fillRect(-62,-13,16,26),s.fillRect(46,-13,16,26),s.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),s.strokeStyle="#111",s.lineWidth=5,s.beginPath(),s.moveTo(74,60),s.lineTo(86,60),s.lineTo(86,86),s.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":s.fillStyle="#7d8185",s.fillRect(0,0,128,128);break;default:break}}function xv(){let s=document.createElement("canvas");s.width=s.height=1024;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");Fh.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",gv(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let i=new Le(s);return i.colorSpace=ve,i.anisotropy=8,i}var zh=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,i){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),i(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Le(this.cv);return t.colorSpace=ve,t.anisotropy=8,new Ht({map:t,vertexColors:!0})}};function ki(s,t,e,n,i="bold"){for(s.font=`${i} ${n}px Arial`;s.measureText(t).width>e&&n>9;)n-=1,s.font=`${i} ${n}px Arial`;return n}var Ia=class{constructor(t,e,n,i){this.roads=t,this.terrain=e,this.comuneAt=n,this.meta=i,this.inferred={};let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Ht({map:xv(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Ht({vertexColors:!0,side:re}),this.lights=[0,1].map(()=>({R:new Re({color:3342336}),Y:new Re({color:3351040}),G:new Re({color:8704})})),this.greenMat=new Re({color:2162528}),this.lampMat=new Re({color:5592400}),this.lampPoleMat=new Ht({color:5593178}),this.lampPoleGeo=new te(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new Ot(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Re({map:new Le(o),transparent:!0,blending:pi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new en(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of i?i.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let i=zr(n,t),r=this.lights[n];r.R.color.setHex(i==="R"?16722458:2754566),r.Y.color.setHex(i==="Y"?16756736:2760196),r.G.color.setHex(i==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let i=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,i=u.n)}return i}approaches(t){let e=this.roads,n=[];for(let i=e.adjHead[t];i>=0;i=e.adjNext[i]){let r=e.ways[e.adjWay[i]],o=e.adjPos[i];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[i],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[i],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,i=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjHead[r];c>=0;c=n.adjNext[c]){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==i&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),i=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,i=-1;for(let r=n.adjHead[t];r>=0;r=n.adjNext[r]){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;i=n.ways[o].limit}}return i}traceDestination(t,e,n,i){let r=this.roads,o=this.comuneOfNode(i),a=this.placeNear(r.nx[i],r.nz[i],600),l=0,c=i;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let m=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),g=null,x=1.15,M=(_,w,S,A)=>{let b=r.ways[_],E=b.nodes[w+S];if(E===void 0)return;let R=Math.atan2(r.nx[E]-r.nx[A],r.nz[E]-r.nz[A])-m;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<x&&(x=Math.abs(R),g=[_,w,S])},v=(_,w)=>{for(let S=r.adjHead[_];S>=0;S=r.adjNext[S]){let A=r.adjWay[S],b=r.ways[A],E=r.adjPos[S];if(!(!b.drivable||b.cls>kt.UNCLASSIFIED)&&!(A===t&&E===e)){if(b.flags&Ft.ROUNDABOUT){w||y(A,E);continue}E<b.nodes.length-1&&M(A,E,1,w?d:_),E>0&&!b.oneway&&M(A,E,-1,w?d:_)}}},y=(_,w)=>{let S=_,A=w;for(let b=0;b<120;b++){let E=r.ways[S];if(A>=E.nodes.length-1){let L=E.nodes[E.nodes.length-1],N=!1;if(E.nodes[0]===L&&E.nodes.length>2)A=0,N=!0;else for(let D=r.adjHead[L];D>=0;D=r.adjNext[D]){let O=r.adjWay[D];if(O!==S&&r.ways[O].flags&Ft.ROUNDABOUT&&r.adjPos[D]===0){S=O,A=0,N=!0;break}}if(!N)return}A++;let R=(E===r.ways[S],r.ways[S].nodes[A]);if(R===d)return;r.degree[R]>=3&&v(R,!0)}};if(v(d,!1),!g)return null;c=d,[t,e,n]=g;continue}let p=h.nodes[f];if(l+=Math.hypot(r.nx[p]-r.nx[d],r.nz[p]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let m=this.comuneOfNode(p);if(m&&o&&m!==o)return{name:m,dist:l};let g=this.placeNear(r.nx[p],r.nz[p]);if(g&&g!==a&&g!==o&&l>500)return{name:g,dist:l}}}return null}build(t,e){let n=this.roads,i=this.terrain,r=n.tileSegs.get(t)||[],o=new oe(!0,!1),a=new oe(!0,!0),l=new oe(!0,!0),c=new oe(!0,!1),u=new oe(!0,!0),h=[0,1].map(()=>({R:new oe(!1,!1),Y:new oe(!1,!1),G:new oe(!1,!1)})),f=new oe(!1,!1),d=new zh,p=[],m=[],g=[],x=[.42,.43,.44],M=(V,J=.7)=>({uv:Ur(V),back:Ur(V,!0),w:J,h:J,name:V}),v=new Set(["deadend","parking","curveR","curveL","steep","children"]),y=(V,J,W,B,et,F=2)=>{if(et=et.filter(rt=>rt&&rt.uv),!et.length)return;for(let rt of et)if(v.has(rt.name)){let Z=this.inferred[rt.name]||(this.inferred[rt.name]={n:0});Z.n++,Z.x=V,Z.z=J,Z.dx=W,Z.dz=B}let Y=Math.atan2(-W,-B),I=i.height(V,J),ht=et.reduce((rt,Z)=>rt+Z.h+.06,0);ke(o,V,I+(F+ht)/2,J,.07,F+ht,.07,Y,x);let tt=I+F+ht;for(let rt of et)tt-=rt.h/2+.03,On(rt.text?l:a,V-W*.05,tt,J-B*.05,rt.w,rt.h,Y,rt.uv),rt.text&&rt.double?On(l,V+W*.05,tt,J+B*.05,rt.w,rt.h,Y+Math.PI,rt.uv):On(a,V+W*.05,tt,J+B*.05,rt.w,rt.h,Y+Math.PI,rt.back||Ur("back")),tt-=rt.h/2+.03},_=V=>{let J=d.add("st"+V,190,42,(W,B,et)=>{W.fillStyle="#f7f7f2",W.fillRect(0,0,B,et),W.strokeStyle="#1b2f6b",W.lineWidth=3,W.strokeRect(2.5,2.5,B-5,et-5),W.fillStyle="#16255a",W.textAlign="center",W.textBaseline="middle",ki(W,V,B-16,22),W.fillText(V,B/2,et/2+1)});return J&&{uv:J,w:1.25,h:.28,text:!0,double:!0}},w=(V,J)=>{let W=d.add("tw"+(J?"E":"S")+V,300,116,(B,et,F)=>{B.fillStyle="#fff",B.fillRect(0,0,et,F),B.strokeStyle="#111",B.lineWidth=6,B.strokeRect(7,7,et-14,F-14),B.fillStyle="#111",B.textAlign="center",B.textBaseline="middle",ki(B,V,et-44,50),B.fillText(V,et/2,F/2+2),J&&(B.strokeStyle="#c8101a",B.lineWidth=12,B.beginPath(),B.moveTo(16,F-16),B.lineTo(et-16,16),B.stroke())});return W&&{uv:W,w:2.1,h:.82,text:!0}},S=(V,J,W)=>{let B=J?`${V}  ${J}`:V,et=d.add("dr"+(W?"B":"W")+B,300,64,(F,Y,I)=>{F.fillStyle=W?"#0a4fa6":"#fff",F.fillRect(0,0,Y,I),F.strokeStyle=W?"#fff":"#111",F.lineWidth=3,F.strokeRect(3.5,3.5,Y-7,I-7),F.fillStyle=W?"#fff":"#111",F.beginPath(),F.moveTo(34,12),F.lineTo(54,34),F.lineTo(41,34),F.lineTo(41,54),F.lineTo(27,54),F.lineTo(27,34),F.lineTo(14,34),F.closePath(),F.fill(),F.textAlign="left",F.textBaseline="middle",ki(F,B,Y-76,30),F.fillText(B,66,I/2+2)});return et&&{uv:et,w:1.9,h:.42,text:!0}},A=(V,J)=>{let W=26+V.length*46,B=d.add("bd"+J+V.join("|"),400,W,(et,F,Y)=>{let I={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[J],ht=J==="white"?"#111":"#fff";et.fillStyle=I,et.fillRect(0,0,F,Y),et.strokeStyle=ht,et.lineWidth=4,et.strokeRect(5,5,F-10,Y-10),et.fillStyle=ht,et.textBaseline="middle",V.forEach((tt,rt)=>{let Z=36+rt*46;et.textAlign="left",ki(et,tt,F-90,34),et.fillText(tt,22,Z)}),et.beginPath(),et.moveTo(F-28,18),et.lineTo(F-28,46),et.lineTo(F-56,18),et.closePath(),et.fill(),et.lineWidth=8,et.strokeStyle=ht,et.beginPath(),et.moveTo(F-62,52),et.lineTo(F-36,26),et.stroke()});return B&&{uv:B,w:3.2,h:3.2*W/400,text:!0}},b=V=>{let J=d.add("rf"+V,130,56,(W,B,et)=>{let F=/^A\d/.test(V);W.fillStyle="#fff",W.fillRect(0,0,B,et),W.fillStyle=F?"#0b7a3b":"#0a4fa6",W.fillRect(4,4,B-8,et-8),W.fillStyle="#fff",W.textAlign="center",W.textBaseline="middle",ki(W,V,B-18,30),W.fillText(V,B/2,et/2+2)});return J&&{uv:J,w:.8,h:.34,text:!0}},E=V=>{let J=d.add("bs"+V,190,36,(W,B,et)=>{W.fillStyle="#f2c417",W.fillRect(0,0,B,et),W.fillStyle="#111",W.textAlign="center",W.textBaseline="middle",ki(W,V,B-12,20),W.fillText(V,B/2,et/2+1)});return J&&{uv:J,w:1,h:.2,text:!0,double:!0}},R=V=>{let J=d.add("ft"+V,150,150,(W,B,et)=>{W.fillStyle="#f4f4f4",W.fillRect(0,0,B,et),W.fillStyle="#d6202a",W.fillRect(0,0,B,52),W.fillStyle="#fff",W.textAlign="center",W.textBaseline="middle",ki(W,V||"CARBURANTI",B-14,26),W.fillText(V||"CARBURANTI",B/2,27),W.fillStyle="#111",W.font="bold 20px Arial",W.textAlign="left",W.fillText("Benzina",10,80),W.fillText("Gasolio",10,108),W.fillText("GPL",10,134),W.fillStyle="#0b7a3b",W.textAlign="right",W.fillText("1.7"+V.length%9,B-10,80),W.fillText("1.6"+V.length*3%9,B-10,108),W.fillText("0.7"+V.length*7%9,B-10,134)});return J&&{uv:J,w:1.5,h:1.5,text:!0,double:!0}},L=V=>Fh.includes("s"+V)?M("s"+V,.66):null,N=(V,J,W,B,et)=>n.heightOn(V,J,W,B,et),D=(V,J,W,B,et,F)=>{let Y=-B,I=W,ht=V.w.width/2,tt=n.nx[J]-W*(et+.8),rt=n.nz[J]-B*(et+.8),Z=V.w.oneway?-ht+.3:(V.fwd?V.w.cOff:-V.w.cOff)+.1,wt=ht-.3,ct=N(V.wi,V.seg,V.t,tt,rt)+.03;if(F)for(let P=Z;P+.5<=wt;P+=.75){let C=[[P,-.3],[P+.5,-.3],[P+.25,.35]].map(([X,K])=>c.v(tt+Y*X-W*K,ct,rt+I*X-B*K));c.tri(C[0],C[1],C[2]),c.tri(C[0],C[2],C[1])}else{let P=c.v(tt+Y*Z-W*.25,ct,rt+I*Z-B*.25),C=c.v(tt+Y*wt-W*.25,ct,rt+I*wt-B*.25),X=c.v(tt+Y*wt+W*.25,ct,rt+I*wt+B*.25),K=c.v(tt+Y*Z+W*.25,ct,rt+I*Z+B*.25);c.quad(P,C,X,K)}return[tt+Y*(Z+wt)/2,rt+I*(Z+wt)/2,wt-Z]},O=new Set,z=new Set,q=new Set,k=new Set,Q=new Map,$=new Map,yt=0;for(let V of r){let J=Math.floor(V/16384),W=V%16384,B=n.ways[J];if(!B.drivable)continue;let et=B.nodes[W],F=B.nodes[W+1],Y=n.nx[et],I=n.nz[et],ht=n.nx[F],tt=n.nz[F],rt=Math.hypot(ht-Y,tt-I);if(rt<.3)continue;let Z=(ht-Y)/rt,wt=(tt-I)/rt,ct=-wt,P=Z,C=B.width/2,X=B.nodes.length-2,K=C+.9;for(let G of[et,F]){if(O.has(G))continue;O.add(G);let lt=n.ntag[G];if(n.degMain[G]>=3&&yt<240){let at=new Set;for(let ut=n.adjHead[G];ut>=0;ut=n.adjNext[ut]){let pt=n.ways[n.adjWay[ut]],At=n.adjPos[ut];if(!pt.name||!pt.drivable||pt.cls>kt.LIVING||at.has(pt.name)||z.has(pt.name+"@"+G))continue;at.add(pt.name),z.add(pt.name+"@"+G);let Tt=At<pt.nodes.length-1?pt.nodes[At+1]:pt.nodes[At-1],Gt=n.nx[Tt]-n.nx[G],Zt=n.nz[Tt]-n.nz[G],ae=Math.hypot(Gt,Zt)||1;Gt/=ae,Zt/=ae;let nt=n.w1[G]/2+2.4,Pt=pt.width/2+.9,vt=n.nx[G]+Gt*nt-Zt*Pt,Et=n.nz[G]+Zt*nt+Gt*Pt,Nt=_(pt.name);Nt&&(y(vt,Et,-Zt,Gt,[Nt],2.45),yt++)}}if(!lt)continue;let dt=this.approaches(G).filter(at=>at.w.cls<=kt.SERVICE);if(!dt.length)continue;let bt=n.degMain[G]>=3,Ct=at=>{let ut=n.nx[G]-n.nx[at.from],pt=n.nz[G]-n.nz[at.from],At=Math.hypot(ut,pt)||1;return[ut/At,pt/At,At]};if(lt===Jt.SIGNALS||lt===Jt.STOP||lt===Jt.GIVE_WAY||lt===Jt.CROSSING_SIGNALS){let at=dt,ut=n.ndir[G];if(ut&&!bt){let pt=dt.filter(At=>At.fwd===(ut===1));pt.length&&(at=pt)}else if(lt!==Jt.SIGNALS&&lt!==Jt.CROSSING_SIGNALS&&bt){let pt=Math.min(...dt.map(At=>At.w.cls));at=dt.filter(At=>At.w.cls>pt),at.length||(at=dt.slice(0,1))}else if(!bt&&lt!==Jt.CROSSING_SIGNALS){let pt=dt.filter(At=>this.leadsToJunction(G,At.from));pt.length&&(at=pt)}for(let pt of at){let[At,Tt,Gt]=Ct(pt),Zt=-Tt,ae=At,nt=pt.w.width/2,Pt=bt?Math.min(Gt*.6+2,n.w1[G]/2+1.5):lt===Jt.CROSSING_SIGNALS?2.5:0,vt=n.nx[G]-At*Pt+Zt*(nt+.9),Et=n.nz[G]-Tt*Pt+ae*(nt+.9),Nt=Math.atan2(-At,-Tt);if(lt===Jt.SIGNALS||lt===Jt.CROSSING_SIGNALS){let Ut=i.height(vt,Et);ke(o,vt,Ut+1.55,Et,.09,3.1,.09,Nt,x),ke(o,vt,Ut+3,Et,.38,1.05,.3,Nt,[.1,.1,.1]);let jt=-At*.16,de=-Tt*.16;if(lt===Jt.SIGNALS){let Ue=Math.abs(At)>Math.abs(Tt)?1:0,he=h[Ue];ke(he.R,vt+jt,Ut+3.33,Et+de,.22,.22,.04,Nt,[1,1,1]),ke(he.Y,vt+jt,Ut+3,Et+de,.22,.22,.04,Nt,[1,1,1]),ke(he.G,vt+jt,Ut+2.67,Et+de,.22,.22,.04,Nt,[1,1,1]),m.push({node:G,group:Ue})}else ke(f,vt+jt,Ut+2.67,Et+de,.22,.22,.04,Nt,[1,1,1]);D(pt,G,At,Tt,Pt+(lt===Jt.CROSSING_SIGNALS?.5:0),!1)}else if(lt===Jt.STOP){y(vt,Et,At,Tt,[M("stop",.75)]);let[Ut,jt,de]=D(pt,G,At,Tt,Pt,!1);pt.w.cls<=kt.RESIDENTIAL&&de>2&&n.addDecal(u,pt.wi,pt.seg,pt.t,Ut-At*2.6,jt-Tt*2.6,At,Tt,Math.min(2.4,de-.4),3,"stop")}else y(vt,Et,At,Tt,[M("giveway",.8)]),D(pt,G,At,Tt,Pt,!0)}}else if(lt===Jt.CROSSING&&!bt&&B.cls<=kt.UNCLASSIFIED)for(let at of dt){let[ut,pt]=Ct(at);y(n.nx[G]-ut*2.6-pt*(at.w.width/2+.9),n.nz[G]-pt*2.6+ut*(at.w.width/2+.9),ut,pt,[M("ped",.6)])}else if(lt===Jt.BUMP||lt===Jt.TABLE)for(let at of dt){let[ut,pt]=Ct(at);y(n.nx[G]-ut*7-pt*(at.w.width/2+.9),n.nz[G]-pt*7+ut*(at.w.width/2+.9),ut,pt,[M("bump",.8),lt===Jt.TABLE?null:L(30)])}else if(lt===Jt.LEVEL_CROSSING)for(let at of dt){let[ut,pt]=Ct(at),At=n.nx[G]-ut*5-pt*(at.w.width/2+.9),Tt=n.nz[G]-pt*5+ut*(at.w.width/2+.9);y(At,Tt,ut,pt,[M("level",.95)],1.7);let Gt=i.height(At,Tt),Zt=Math.atan2(-ut,-pt);ke(o,At-ut*.8,Gt+.55,Tt-pt*.8,.3,1.1,.3,Zt,[.75,.75,.75]);for(let ae=0;ae<6;ae++)ke(o,At-ut*.8+pt*.25,Gt+1.4+ae*.7,Tt-pt*.8-ut*.25,.1,.7,.1,Zt,ae%2?[.85,.1,.1]:[.95,.95,.95])}}let ft=B.limitMapped&&B.cls<=kt.RESIDENTIAL&&B.len>80&&!(B.flags&Ft.ROUNDABOUT);if(W===0&&ft&&this.neighbourLimit(et,J)!==B.limit){let G=Math.min(14,B.len*.3),[lt,dt]=n.pointAt(B,G);y(lt+ct*K,dt+P*K,Z,wt,[L(B.limit)],2.1)}if(W===X&&!B.oneway&&ft&&this.neighbourLimit(F,J)!==B.limit){let G=Math.min(14,B.len*.3),[lt,dt]=n.pointAt(B,B.len-G);y(lt-ct*K,dt-P*K,-Z,-wt,[L(B.limit)],2.1)}if(B.oneway&&!(B.flags&(Ft.ROUNDABOUT|Ft.LINK))&&B.cls>=kt.TERTIARY&&B.cls<=kt.LIVING&&B.len>25){let G=(lt,dt)=>{for(let bt=n.adjHead[lt];bt>=0;bt=n.adjNext[bt]){let Ct=n.adjWay[bt],at=n.ways[Ct];if(Ct!==J&&at.oneway&&(at.name===B.name||n.degMain[lt]<3)&&n.adjPos[bt]===(dt?at.nodes.length-1:0))return!0}return!1};if(W===0&&n.degMain[et]>=3&&!n.onRb[et]&&!G(et,!0)){let[lt,dt]=n.pointAt(B,Math.min(6,B.len*.3));y(lt+ct*K,dt+P*K,Z,wt,[M("oneway",.6)])}if(W===X&&n.degMain[F]>=3&&!n.onRb[F]&&!G(F,!1)){let lt=Math.min(B.len*.3,n.w1[F]/2+1.5);for(let dt of[1,-1])y(ht-Z*lt+ct*K*dt,tt-wt*lt+P*K*dt,-Z,-wt,[M("noentry",.6)])}}if(!B.oneway&&B.cls>=kt.UNCLASSIFIED&&B.cls<=kt.LIVING&&B.len>50&&!(B.flags&(Ft.PRIVATE|Ft.ROUNDABOUT))){let G=B.nodes[0],lt=B.nodes[B.nodes.length-1];if(W===0&&n.degMain[G]>=3&&n.degree[lt]===1){let[dt,bt]=n.pointAt(B,Math.min(9,B.len*.2));y(dt+ct*K,bt+P*K,Z,wt,[M("deadend",.6)])}if(W===X&&n.degMain[lt]>=3&&n.degree[G]===1){let[dt,bt]=n.pointAt(B,B.len-Math.min(9,B.len*.2));y(dt-ct*K,bt-P*K,-Z,-wt,[M("deadend",.6)])}}if(B.flags&Ft.AISLE)for(let[G,lt,dt,bt]of[[B.nodes[0],W===0,Z,wt],[B.nodes[B.nodes.length-1],W===X,-Z,-wt]]){if(!lt)continue;let Ct=!1;for(let ut=n.adjHead[G];ut>=0;ut=n.adjNext[ut]){let pt=n.ways[n.adjWay[ut]];pt!==B&&pt.drivable&&!(pt.flags&Ft.AISLE)&&pt.cls<=kt.SERVICE&&(Ct=!0)}let at=Math.round(n.nx[G]/70)+"_"+Math.round(n.nz[G]/70);!Ct||k.has(at)||(k.add(at),y(n.nx[G]+dt*3-bt*(C+.8),n.nz[G]+bt*3+dt*(C+.8),dt,bt,[M("parking",.6)]))}if(B.cls<=kt.UNCLASSIFIED&&B.limit>=50&&!(B.flags&(Ft.ROUNDABOUT|Ft.LINK|Ft.TUNNEL))&&B.len>160){let G=B.cum[W],lt=at=>{let ut=n.pointAt(B,at-12),pt=n.pointAt(B,at+12),At=Math.hypot(pt[0]-ut[0],pt[1]-ut[1])||1;return[(pt[0]-ut[0])/At,(pt[1]-ut[1])/At]},dt=at=>{if(at<40||at>B.len-40)return 0;let ut=lt(at-22),pt=lt(at+22);return Math.atan2(ut[0]*pt[1]-ut[1]*pt[0],ut[0]*pt[0]+ut[1]*pt[1])},bt=Q.get(J);if(G>75&&G<B.len-75&&n.degMain[et]<3&&(bt===void 0||Math.abs(G-bt)>150)&&!i.isUrban(Y,I)){let at=dt(G);if(Math.abs(at)>.56&&Math.abs(at)>=Math.abs(dt(G-12))&&Math.abs(at)>=Math.abs(dt(G+12))){Q.set(J,G);let ut=n.pointAt(B,G-65),pt=lt(G-65);if(y(ut[0]-pt[1]*K,ut[1]+pt[0]*K,pt[0],pt[1],[M(at>0?"curveR":"curveL",.8)]),!B.oneway){let At=n.pointAt(B,G+65),Tt=lt(G+65);y(At[0]+Tt[1]*K,At[1]-Tt[0]*K,-Tt[0],-Tt[1],[M(at>0?"curveL":"curveR",.8)])}}}let Ct=$.get(J);if(!B.abs&&G>30&&G<B.len-130&&(Ct===void 0||Math.abs(G-Ct)>450)){let at=Tt=>{let Gt=n.pointAt(B,Tt);return i.height(Gt[0],Gt[1])},ut=at(G),pt=ut-at(G+110),At=at(Math.max(0,G-90))-ut;if(Math.abs(pt)>10&&Math.abs(At)<4.5){if($.set(J,G),pt>0)y(Y+ct*K,I+P*K,Z,wt,[M("steep",.8)]);else if(!B.oneway){let Tt=n.pointAt(B,G+110),Gt=lt(Math.min(B.len-15,G+110));y(Tt[0]+Gt[1]*K,Tt[1]-Gt[0]*K,-Gt[0],-Gt[1],[M("steep",.8)])}}}}if(W===0&&B.dest&&B.len>30){let G=B.dest.split("|"),lt=G[G.length-1].split(";").map(Ct=>Ct.trim()).filter(Boolean).slice(0,4);G.length>1&&(lt[0]=G[0].split(";")[0]+"  "+lt[0]);let dt=B.cls===0?"green":B.cls<=3||B.limit>50?"blue":"white",bt=A(lt,dt);if(bt){let[Ct,at]=n.pointAt(B,Math.min(18,B.len*.4)),ut=Ct+ct*(K+1.8),pt=at+P*(K+1.8),At=i.height(ut,pt),Tt=Math.atan2(-Z,-wt);for(let Gt of[1,-1])ke(o,ut+ct*1.3*Gt,At+1.6+bt.h/2,pt+P*1.3*Gt,.1,3.2+bt.h,.1,Tt,x);On(l,ut-Z*.08,At+3.2+bt.h/2,pt-wt*.08,bt.w,bt.h,Tt,bt.uv),On(a,ut+Z*.08,At+3.2+bt.h/2,pt+wt*.08,bt.w,bt.h,Tt+Math.PI,Ur("back"))}}if(B.ref&&B.cls<=kt.TERTIARY&&!(B.flags&(Ft.LINK|Ft.ROUNDABOUT))&&B.len>160){let G=B.ref.split(";")[0].trim();if(W===0&&n.degMain[et]>=3&&!q.has(G+et)){q.add(G+et);let[lt,dt]=n.pointAt(B,38);y(lt+ct*K,dt+P*K,Z,wt,[b(G)],1.9)}if(W===X&&!B.oneway&&n.degMain[F]>=3&&!q.has(G+F)){q.add(G+F);let[lt,dt]=n.pointAt(B,B.len-38);y(lt-ct*K,dt-P*K,-Z,-wt,[b(G)],1.9)}}if(B.cls<=kt.RESIDENTIAL&&B.cls>=kt.TRUNK&&!(B.flags&(Ft.LINK|Ft.BRIDGE|Ft.TUNNEL|Ft.ROUNDABOUT))){let G=this.comuneOfNode(et),lt=this.comuneOfNode(F);if(G&&lt&&G!==lt){let dt=0,bt=1;for(let ut=0;ut<10;ut++){let pt=(dt+bt)/2;this.comuneAt(Y+(ht-Y)*pt,I+(tt-I)*pt)===G?dt=pt:bt=pt}let Ct=Y+(ht-Y)*dt,at=I+(tt-I)*dt;this.townSign(o,l,a,Ct+ct*(K+.4),at+P*(K+.4),Z,wt,w(lt,!1),w(lt,!0)),B.oneway||this.townSign(o,l,a,Ct-ct*(K+.4),at-P*(K+.4),-Z,-wt,w(G,!1),w(G,!0))}}if(B.cls>=kt.PRIMARY&&B.cls<=kt.LIVING&&!B.abs&&!(B.flags&Ft.ROUNDABOUT)&&B.lit!==2){let G=B.cum[W];for(let lt=Math.ceil(G/30)*30-G;lt<rt;lt+=30){let dt=Y+Z*lt,bt=I+wt*lt;if(B.lit!==1&&!i.isUrban(dt,bt))continue;let Ct=Math.floor((G+lt)/30+.5)%2===0||B.oneway?1:-1,at=dt+ct*Ct*(C+1.1),ut=bt+P*Ct*(C+1.1),pt=n.nearest(at,ut,6);pt&&pt.d<n.ways[pt.wi].width/2+.4||p.push([at,i.height(at,ut),ut,Math.atan2(P*Ct,-ct*Ct)])}}}let _t=this.meta.proj.xmin+t%1e3*1e3,Dt=this.meta.proj.zmin+Math.floor(t/1e3)*1e3;for(let V of this.meta.landmarks){if(V[0]!==11||V[1]<_t||V[1]>=_t+1e3||V[2]<Dt||V[2]>=Dt+1e3)continue;let J=n.nearest(V[1],V[2],90,F=>F.drivable&&F.cls>=kt.TERTIARY&&F.cls<=kt.LIVING&&!(F.flags&Ft.PRIVATE));if(!J)continue;let W=n.ways[J.wi],B=W.cum[J.k]+(W.cum[J.k+1]-W.cum[J.k])*J.t,et=W.width/2+.9;for(let[F,Y]of[[B-45,1],[B+45,-1]]){if(F<5||F>W.len-5||Y<0&&W.oneway)continue;let I=n.pointAt(W,F),ht=n.pointAt(W,F+Y*4),tt=Math.hypot(ht[0]-I[0],ht[1]-I[1])||1,rt=(ht[0]-I[0])/tt,Z=(ht[1]-I[1])/tt;y(I[0]-Z*et,I[1]+rt*et,rt,Z,[M("children",.75)])}}for(let V of n.roundaboutEntries(t)){let J=n.ways[V.wi],W=n.nx[V.nd]-n.nx[V.from],B=n.nz[V.nd]-n.nz[V.from],et=Math.hypot(W,B)||1;W/=et,B/=et;let F=n.w1[V.nd]/2+2.5,Y=!1,I=0,ht=V.dir>0?J.nodes.length-1:0;for(;I<30&&ht-V.dir>=0&&ht-V.dir<J.nodes.length;){let Z=J.nodes[ht],wt=J.nodes[ht-V.dir];if(I+=Math.hypot(n.nx[wt]-n.nx[Z],n.nz[wt]-n.nz[Z]),ht-=V.dir,n.ntag[wt]===Jt.GIVE_WAY||n.ntag[wt]===Jt.STOP){Y=!0;break}}let tt=n.nx[V.nd]-W*F-B*(J.width/2+.9),rt=n.nz[V.nd]-B*F+W*(J.width/2+.9);y(tt,rt,W,B,[Y?null:M("giveway",.8),M("roundabout",.62)])}let it=new Set;for(let V of r){let J=Math.floor(V/16384),W=V%16384,B=n.ways[J];if(B.flags&Ft.ROUNDABOUT||!B.drivable||B.cls>kt.TERTIARY)continue;let et=B.nodes.length-2;for(let[F,Y]of[[0,1],[B.nodes.length-1,-1]]){if((Y>0?W!==0:W!==et)||Y<0&&B.oneway)continue;let I=B.nodes[F];if(!n.onRb[I]||it.has(J*2+(Y>0?0:1)))continue;it.add(J*2+(Y>0?0:1));let ht=this.traceDestination(J,F,Y,I);if(!ht)continue;let tt=B.nodes[F+Y],rt=n.nx[tt]-n.nx[I],Z=n.nz[tt]-n.nz[I],wt=Math.hypot(rt,Z)||1;rt/=wt,Z/=wt;let ct=B.limit>50||B.cls<=kt.SECONDARY,P=S(ht.name,ct?Math.max(1,Math.round(ht.dist/1e3)):0,ct),C=n.w1[I]/2+3.5;y(n.nx[I]+rt*C-Z*(B.width/2+1.2),n.nz[I]+Z*C+rt*(B.width/2+1.2),rt,Z,[P],2.3)}}for(let[V,J,W,B]of e&&e.pt||[]){let et=J/10,F=W/10,Y=e.s[B]||"",I=n.nearest(et,F,30,K=>K.drivable&&K.cls<=kt.SERVICE),ht=0,tt=1;if(I){let K=Math.hypot(I.dx,I.dz)||1;ht=I.dx/K,tt=I.dz/K}let rt=I&&Math.sign((et-I.px)*-tt+(F-I.pz)*ht)||1,Z=I?n.ways[I.wi].width/2:0,wt=I?Math.max(I.d,Z+1):0,ct=I?I.px-tt*rt*wt:et,P=I?I.pz+ht*rt*wt:F,C=ht*rt,X=tt*rt;if(V===1){y(ct,P,C,X,[M("bus",.5),Y?E(Y):null],2);let K=i.height(ct,P),ft=Math.atan2(-C,-X),G=-tt*rt,lt=ht*rt,dt=ct+C*2.2+G*.9,bt=P+X*2.2+lt*.9;ke(o,dt,K+2.45,bt,1.5,.08,3,ft,[.25,.3,.34]),ke(o,dt+G*.7,K+1.25,bt+lt*.7,.05,2.4,3,ft,[.55,.68,.74]);for(let Ct of[-1.45,1.45])ke(o,dt+C*Ct-G*.6,K+1.2,bt+X*Ct-lt*.6,.07,2.4,.07,ft,x)}else if(V===2){let K=I?Math.atan2(ht*rt,tt*rt):0;p.push([et,i.height(et,F),F,K,1])}else if(V===3&&I){let K=[...this.places.values()].flat().find(bt=>bt.n===Y),ft=C,G=X;if(K){let bt=Math.sign((K.x-ct)*ht+(K.z-P)*tt)||1;ft=ht*bt,G=tt*bt}let lt=I.px-G*(Z+1.3),dt=I.pz+ft*(Z+1.3);this.townSign(o,l,a,lt,dt,ft,G,w(Y,!1),w(Y,!0))}else if(V===4&&I){y(ct,P,C,X,[M("camera",.9)],2),g.push([I.px+ht*rt*14,I.pz+tt*rt*14]);let K=i.height(ct,P),ft=Math.atan2(-C,-X);ke(o,ct+C*14,K+1.4,P+X*14,.5,2.8,.5,ft,[.95,.5,.1]),ke(o,ct+C*14-C*.26,K+2.3,P+X*14-X*.26,.3,.3,.04,ft,[.05,.05,.05])}else if(V===5){let K=R(Y);if(K){let ft=i.height(ct,P),G=Math.atan2(-C,-X);ke(o,ct,ft+2.6,P,1.6,5.2,.3,G,[.9,.9,.9]),On(l,ct-C*.16,ft+4.3,P-X*.16,K.w,K.h,G,K.uv),On(l,ct+C*.16,ft+4.3,P+X*.16,K.w,K.h,G+Math.PI,K.uv)}}}let j=new $t,Mt=[];if(o.empty||j.add(o.mesh(this.poleMat,!0)),a.empty||j.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let V=d.material();Mt.push(V),j.add(l.mesh(V))}c.empty||j.add(c.mesh(this.markMat)),u.empty||j.add(u.mesh(this.decalMat));for(let V=0;V<2;V++)for(let J of["R","Y","G"])h[V][J].empty||j.add(h[V][J].mesh(this.lights[V][J]));if(f.empty||j.add(f.mesh(this.greenMat)),p.length){let V=p.filter(rt=>rt[4]),J=p.filter(rt=>rt[4]||!V.some(Z=>Math.hypot(Z[0]-rt[0],Z[2]-rt[2])<22)),W=new Ce(this.lampPoleGeo,this.lampPoleMat,J.length),B=new Ce(this.lampHeadGeo,this.lampMat,J.length),et=new Ce(this.poolGeo,this.poolMat,J.length),F=new Kt,Y=new Ie,I=new H(0,1,0),ht=new H(1,1,1),tt=new H;J.forEach(([rt,Z,wt,ct],P)=>{Y.setFromAxisAngle(I,ct),tt.set(rt,Z,wt),F.compose(tt,Y,ht),W.setMatrixAt(P,F),B.setMatrixAt(P,F),et.setMatrixAt(P,F)}),W.computeBoundingSphere(),B.computeBoundingSphere(),et.computeBoundingSphere(),et.renderOrder=2,j.add(W,B,et)}return j.userData.dispose=()=>{for(let V of Mt)V.map.dispose(),V.dispose()},{group:j,signals:m,lamps:p,cameras:g}}townSign(t,e,n,i,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(i,r),f=Math.atan2(-o,-a),d=-a,p=o,m=[.42,.43,.44];ke(t,i-d*.75,h+1.35,r-p*.75,.08,2.7,.08,f,m),ke(t,i+d*.75,h+1.35,r+p*.75,.08,2.7,.08,f,m),On(e,i-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?On(e,i+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):On(n,i+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,Ur("back"))}};var Pa=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,i,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(i/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,i=>{let r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e,n,i=!1){let r=1e9,o=1e9,a=-1e9,l=-1e9;for(let u=0;u<e.length;u+=2)r=Math.min(r,e[u]),a=Math.max(a,e[u]),o=Math.min(o,e[u+1]),l=Math.max(l,e[u+1]);if(!i&&a-r<1.5&&l-o<1.5)return null;let c={ring:e,tile:t,minx:r,minz:o,maxx:a,maxz:l,top:n};return this._add(t,c),c}addCircle(t,e,n,i,r){let o={x:e,z:n,r:i,tile:t,top:r,minx:e-i,minz:n-i,maxx:e+i,maxz:n+i};return this._add(t,o),o}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let i=this.grid.get(n);if(!i)return;let r=i.indexOf(t);r>=0&&i.splice(r,1),i.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let i of e)this._cells(i.minx,i.minz,i.maxx,i.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}topAt(t,e,n){let i=-1/0;return this._cells(t-n,e-n,t+n,e+n,r=>{let o=this.grid.get(r);if(o)for(let a of o){if(a.top===void 0||a.top<=i||t+n<a.minx||t-n>a.maxx||e+n<a.minz||e-n>a.maxz)continue;(a.ring?xd(t,e,n,a.ring):Math.hypot(t-a.x,e-a.z)<n+a.r)&&(i=a.top)}}),i}resolveCircle(t,e,n){let i=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=xd(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!i||c.depth>i.depth)&&(i=c)}}),i}};function xd(s,t,e,n){let i=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=i-1;f<i;d=f++){let p=n[f*2],m=n[f*2+1],g=n[d*2],x=n[d*2+1];m>t!=x>t&&s<(g-p)*(t-m)/(x-m)+p&&(r=!r);let M=p-g,v=m-x,y=M*M+v*v||1e-9,_=((s-g)*M+(t-x)*v)/y;_=_<0?0:_>1?1:_;let w=g+M*_,S=x+v*_,A=Math.hypot(s-w,t-S);A<o&&(o=A,a=w,l=S)}if(!r&&o>=e)return null;let c=s-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var An={darkMetal:new Ht({color:3620675}),greyMetal:new Ht({color:4344399}),midMetal:new Ht({color:5002330}),wood:new Ht({color:8016432}),woodDark:new Ht({color:6044964}),stone:new Ht({color:9407104}),soil:new Ht({color:4142122}),hedge:new Ht({color:4025145}),binBody:new Ht({color:3951169}),binLid:new Ht({color:3227449}),red:new Ht({color:11545120}),white:new Ht({color:15790318}),signBlue:new Ht({color:2183567}),roof:new Ht({color:3159099}),glass:new ce({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:re,depthWrite:!1})};function Rn(s){let t=s.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),i=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&i.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new ee;return o.setAttribute("position",new ue(n,3)),o.setAttribute("normal",new ue(i,3)),o.computeVertexNormals(),o}function yd(s,t,e,{shadow:n=!0}={}){let i=new Ce(s,t,e);i.castShadow=n,i.count=e;let r=new Kt,o=new Ie,a=new je,l=new H,c=new H(1,1,1);return{mesh:i,setAt:(h,f,d,p=0,m=0)=>{a.set(0,p,0),o.setFromEuler(a),l.set(f,m,d),r.compose(l,o,c),i.setMatrixAt(h,r),i.instanceMatrix.needsUpdate=!0},count:e}}function La(s,t,{shadow:e=!0}={}){let n=new $t,i=s.map(({geom:h,material:f})=>{let d=new Ce(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new Kt,o=new Ie,a=new je,l=new H,c=new H(1,1,1);return{mesh:n,setAt:(h,f,d,p=0,m=0)=>{a.set(0,p,0),o.setFromEuler(a),l.set(f,m,d),r.compose(l,o,c);for(let g of i)g.setMatrixAt(h,r),g.instanceMatrix.needsUpdate=!0},count:t}}function vd(s){let t=new te(.075,.1,.82,8);t.translate(0,.41,0);let e=new pn(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new te(.11,.11,.06,8);n.translate(0,.1,0);let i=Rn([t,e,n]);return yd(i,An.darkMetal,s)}function Md(s){let t=new te(.05,.05,.55,6);t.translate(0,.28,0);let e=new te(.11,.14,.08,8);e.translate(0,.04,0);let n=new te(.19,.17,.5,9);n.translate(0,.82,0);let i=new Bn(.19,.02,5,9).rotateX(Math.PI/2);i.translate(0,1.07,0);let r=Rn([t,e,n,i]),o=new te(.215,.2,.06,9);o.translate(0,1.12,0);let a=new pn(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=Rn([o,a]);return La([{geom:r,material:An.binBody},{geom:l,material:An.binLid}],s)}function _d(s){let i=[];for(let c=0;c<3;c++){let u=new Ot(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),i.push(u)}for(let c=0;c<3;c++){let u=new Ot(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),i.push(u)}let r=Rn(i),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new Ot(.05,.45,.05);h.translate(u,.45/2,.12);let f=new Ot(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new Ot(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new Ot(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=Rn(o);return La([{geom:r,material:An.wood},{geom:l,material:An.darkMetal}],s)}function bd(s){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new Ot(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new Ot(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new Ot(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return yd(Rn(t),An.darkMetal,s)}function wd(s){let t=new te(.09,.13,.95,8);t.translate(0,.475,0);let e=new te(.16,.2,.08,8);e.translate(0,.04,0);let n=new te(.17,.13,.1,10);n.translate(0,.9,0);let i=new te(.13,.11,.07,10);i.translate(0,.94,0);let r=Rn([t,e,n]),o=new te(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new pn(.03,6,5);return a.translate(0,1.02,-.09),La([{geom:r,material:An.greyMetal},{geom:Rn([i]),material:An.midMetal},{geom:Rn([o,a]),material:An.darkMetal}],s)}function Ed(s){let t=new te(.23,.25,.07,6);t.translate(0,.035,0);let e=new te(.135,.165,.6,9);e.translate(0,.37,0);let n=new te(.115,.175,.1,9);n.translate(0,.72,0);let i=new pn(.125,9,5,0,Math.PI*2,0,Math.PI/2);i.translate(0,.77,0);let r=new te(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=Rn([t,e,n,i,r]),a=[];for(let u of[-1,1]){let h=new te(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new te(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new te(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),La([{geom:o,material:An.red},{geom:Rn(a),material:An.darkMetal}],s)}function Td(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ee,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Sd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let m=0;m<o[u].length;++m)d.push(o[u][m][f]);let p=Sd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Sd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new ue(o,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){let m=u.getComponent(f,p);a.setComponent(f+h,p,m)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var yv={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},Da=class{constructor(t,e,n,i,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=i,this.settings=r,this.collision=new Pa,this.gates=new Aa(i,n,this.collision),this.tiles=new Map,this.queue=[],this.detail=ad(256),this.farMat=n.overviewMaterial(this.detail),this.ground=new Map,this.groundWant=[],this.groundBusy=0,this.buildings=new Ra(n),this.vegetation=new Ca(n,i),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new Ia(i,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new $t,t.add(this.root),this.far=new $t,this.farChunks=new Map,this.root.add(this.far),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let i=!1;for(let r of n.rings)od(t,e,r)&&(i=!i);if(i)return n.n}return null}updateFarTerrain(t,e,n=2){let i=this.meta.proj,r=2e3,o=80,a=11e3,l=Math.floor((t-i.xmin)/r),c=Math.floor((e-i.zmin)/r),u=Math.ceil(a/r),h=Math.ceil((i.xmax-i.xmin)/r),f=Math.ceil((i.zmax-i.zmin)/r),d=[];for(let p=Math.max(0,c-u);p<=Math.min(f-1,c+u);p++)for(let m=Math.max(0,l-u);m<=Math.min(h-1,l+u);m++){let g=Math.hypot(i.xmin+(m+.5)*r-t,i.zmin+(p+.5)*r-e);g<a&&!this.farChunks.has(p*1e3+m)&&d.push([g,m,p])}d.sort((p,m)=>p[0]-m[0]);for(let[,p,m]of d.slice(0,n)){let g=this.terrain.buildFarChunk(i.xmin+p*r,i.zmin+m*r,r,o,this.farMat,1.5);g.receiveShadow=!1,this.far.add(g),this.farChunks.set(m*1e3+p,g)}for(let[p,m]of this.farChunks){let g=p%1e3,x=Math.floor(p/1e3);Math.hypot(i.xmin+(g+.5)*r-t,i.zmin+(x+.5)*r-e)>a+3e3&&(this.far.remove(m),m.geometry.dispose(),this.farChunks.delete(p))}}buildWaters(){let t=new En({color:3106440,specular:11189196,shininess:110,transparent:!0,opacity:.94,side:re});this.waterU={uTime:{value:0},uSky:{value:new Lt(.75,.84,.92)}},t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.waterU),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.a = mix(0.9, 1.0, fres);`)},this.waterMat=t;let e=new $t;for(let n of this.meta.waters)for(let i of n.o){if(i.length<4)continue;let r=i.map(d=>new St(d[0],d[1])),o=(n.i||[]).filter(d=>d.length>=4).map(d=>d.map(p=>new St(p[0],p[1]))),a;try{a=Fn.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=n.lv[n.o.indexOf(i)];if(c==null)continue;let u=new Float32Array(l.length*3);l.forEach((d,p)=>{u[p*3]=d.x,u[p*3+1]=c,u[p*3+2]=d.y});let h=[];for(let[d,p,m]of a)h.push(d,m,p);let f=new ee;f.setAttribute("position",new ue(u,3)),f.setIndex(h),f.computeVertexNormals(),f.attributes.normal.getY(0)<0&&(f.setIndex(h.map((d,p)=>h[p-p%3+[0,2,1][p%3]])),f.computeVertexNormals()),e.add(new Rt(f,t))}this.root.add(e)}initFar(){if(this.farIdx)return;let t=this.meta.stream;this.farFB=t.farBlock,this.farBlocks=new Map(t.far.map(([n,i])=>[i*1e3+n,null])),this.farIdx=new Map,this.farMeshes=new Map,this.farQueue=[],this.farGroup=new $t,this.root.add(this.farGroup),this.farBMat=new Ht({vertexColors:!0});let e=(n,i=1)=>n.map(r=>new Lt(r).convertSRGBToLinear().multiplyScalar(i));this.farPal={wall:e(["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#e3c08e","#d9c7a6"]),ind:e(["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6"]),tile:e(["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52"],1.2),flat:e(["#8d8a84","#7d7b77","#9a968e","#6f6e6a"])}}farBlocksNear(t,e,n){let i=this.meta.proj,r=this.farFB*1e3;for(let[o,a]of this.farBlocks){let l=o%1e3,c=Math.floor(o/1e3),u=Math.hypot(Math.max(0,Math.abs(i.xmin+(l+.5)*r-t)-r/2),Math.max(0,Math.abs(i.zmin+(c+.5)*r-e)-r/2));if(u<=n&&a===null)this.farBlocks.set(o,"loading"),Bi(`f_${l}_${c}`,`data/far/f_${l}_${c}.js`).then(h=>{if(this.farBlocks.get(o)!=="loading")return;let f=0;for(let[d,p,m]of h.t)this.farIdx.set(p*1e3+d,[h.d,f,m]),f+=m*8;this.farBlocks.set(o,h),this.farR=-1}).catch(()=>this.farBlocks.set(o,"none"));else if(u>n+6e3&&a&&a!=="loading"&&a!=="none"){for(let[h,f]of a.t)this.farIdx.delete(f*1e3+h);this.farBlocks.set(o,null)}}}updateFar(t,e,n){if(!this.farIdx||(this.farTick=(this.farTick||0)+1,this.farTick%20!==1&&n===this.farR))return;this.farR=n,this.farBlocksNear(t,e,n);let i=this.meta.proj,r=Math.floor((t-i.xmin)/1e3),o=Math.floor((e-i.zmin)/1e3),a=Math.ceil(n/1e3),l=[];for(let c=o-a;c<=o+a;c++)for(let u=r-a;u<=r+a;u++){let h=c*1e3+u;if(u<0||c<0||!this.farIdx.has(h)||this.farMeshes.has(h))continue;let f=Math.hypot(i.xmin+(u+.5)*1e3-t,i.zmin+(c+.5)*1e3-e);f<=n&&l.push([f,h])}l.sort((c,u)=>c[0]-u[0]),this.farQueue=l.map(c=>c[1]);for(let[c,u]of this.farMeshes){let h=c%1e3,f=Math.floor(c/1e3);Math.hypot(i.xmin+(h+.5)*1e3-t,i.zmin+(f+.5)*1e3-e)>n+1500&&(this.farGroup.remove(u),u.geometry.dispose(),this.farMeshes.delete(c))}}pumpFar(t=3){if(!this.farIdx)return;let e=performance.now();for(;this.farQueue.length&&performance.now()-e<t;){let n=this.farQueue.shift();if(this.farMeshes.has(n))continue;let i=this.buildFarTile(n);this.farMeshes.set(n,i),this.farGroup.add(i)}for(let[n,i]of this.farMeshes){let r=this.tiles.get(n);i.visible=!(r&&r.parts.buildings)}}buildFarTile(t){let[e,n,i]=this.farIdx.get(t),r=this.meta.proj,o=this.farPal,a=r.xmin+t%1e3*1e3,l=r.zmin+Math.floor(t/1e3)*1e3,c=new Float32Array(i*60),u=new Float32Array(i*60),h=new Float32Array(i*60),f=new Uint32Array(i*30),d=0,p=0,m=(M,v,y,_,w,S,A,b)=>(c[d*3]=M,c[d*3+1]=v,c[d*3+2]=y,u[d*3]=_.r*w,u[d*3+1]=_.g*w,u[d*3+2]=_.b*w,h[d*3]=S,h[d*3+1]=A,h[d*3+2]=b,d++);for(let M=0;M<i;M++){let v=n+M*8,y=a+e[v]/10,_=l+e[v+1]/10,w=e[v+2]/10,S=e[v+3]/10,A=e[v+4]*Math.PI/180,b=e[v+5]/10,E=e[v+6],R=Math.sin(A),L=Math.cos(A),N=-L,D=R,O=e[v+7]/10,z=O-2.5,q=O+b+(E&1?1:.2),k=(e[v]*73+e[v+1]*151+M*7)%97/97,Q=(e[v]*31+e[v+1]*17+M*13)%89/89,$=E&2?o.ind[Math.floor(k*o.ind.length)]:o.wall[Math.floor(k*o.wall.length)],yt=E&1?o.tile[Math.floor(Q*o.tile.length)]:o.flat[Math.floor(Q*o.flat.length)],_t=[[y+R*w+N*S,_+L*w+D*S],[y-R*w+N*S,_-L*w+D*S],[y-R*w-N*S,_-L*w-D*S],[y+R*w-N*S,_+L*w-D*S]],Dt=[[N,D],[-R,-L],[-N,-D],[R,L]];for(let W=0;W<4;W++){let B=_t[W],et=_t[(W+1)%4],[F,Y]=Dt[W],I=m(B[0],z,B[1],$,1,F,0,Y),ht=m(et[0],z,et[1],$,1,F,0,Y),tt=m(et[0],q,et[1],$,1,F,0,Y),rt=m(B[0],q,B[1],$,1,F,0,Y);-(et[1]-B[1])*F+(et[0]-B[0])*Y>0?(f[p++]=I,f[p++]=ht,f[p++]=tt,f[p++]=I,f[p++]=tt,f[p++]=rt):(f[p++]=I,f[p++]=tt,f[p++]=ht,f[p++]=I,f[p++]=rt,f[p++]=tt)}let it=m(_t[0][0],q,_t[0][1],yt,1,0,1,0),j=m(_t[1][0],q,_t[1][1],yt,1,0,1,0),Mt=m(_t[2][0],q,_t[2][1],yt,1,0,1,0),V=m(_t[3][0],q,_t[3][1],yt,1,0,1,0);(_t[1][1]-_t[0][1])*(_t[2][0]-_t[0][0])-(_t[1][0]-_t[0][0])*(_t[2][1]-_t[0][1])>0?(f[p++]=it,f[p++]=j,f[p++]=Mt,f[p++]=it,f[p++]=Mt,f[p++]=V):(f[p++]=it,f[p++]=Mt,f[p++]=j,f[p++]=it,f[p++]=V,f[p++]=Mt)}let g=new ee;g.setAttribute("position",new ue(c,3)),g.setAttribute("color",new ue(u,3)),g.setAttribute("normal",new ue(h,3)),g.setIndex(new ue(f,1)),g.computeBoundingSphere();let x=new Rt(g,this.farBMat);return x.matrixAutoUpdate=!1,x}updateWater(t,e){this.waterU&&(this.waterU.uTime.value=t%1e4,this.waterU.uSky.value.copy(e))}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,i=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let u=r-o;u<=r+o;u++)for(let h=i-o;h<=i+o;h++){if(h<0||u<0||h>=this.meta.tilesX||u>=this.meta.tilesZ)continue;let f=n.xmin+(h+.5)*1e3,d=n.zmin+(u+.5)*1e3,p=Math.hypot(f-t,d-e);if(p>(o+.3)*1e3)continue;if(a.add(u*1e3+h),!this.tiles.has(u*1e3+h)){let x={i:h,j:u,key:u*1e3+h,parts:{},state:"new",d:p};this.tiles.set(x.key,x)}let m=this.tiles.get(u*1e3+h);m.d=p,m.vegWanted=p<1700;let g=this.farIdx?(this.settings.detailKm||1.5)*1e3:1e9;if(p<g)m.bldPending&&(m.bldPending=!1,delete m.parts.buildings);else if(p>g+400&&m.parts.buildings&&!m.gen){let x=m.parts.buildings;this.root.remove(x),x.traverse(M=>{M.geometry&&M.geometry.dispose()}),m.parts.buildings=null,m.bldPending=!0}m.bldFar=p>=g}for(let[u,h]of this.tiles)!a.has(u)&&h.d>(o+.9)*1e3?this.unload(h):a.has(u)||(h.d=Math.hypot(n.xmin+(h.i+.5)*1e3-t,n.zmin+(h.j+.5)*1e3-e));let l=[],c=o+1;for(let u=r-c;u<=r+c;u++)for(let h=i-c;h<=i+c;h++){if(h<0||u<0||h>=this.meta.tilesX||u>=this.meta.tilesZ)continue;let f=u*1e3+h;if(this.ground.has(f))continue;let d=Math.hypot(n.xmin+(h+.5)*1e3-t,n.zmin+(u+.5)*1e3-e);d<=(c+.8)*1e3&&l.push([d,f])}l.sort((u,h)=>u[0]-h[0]),this.groundWant=l.map(u=>u[1]);for(let[u,h]of this.ground){if(h!=="ready"||this.tiles.has(u))continue;let f=u%1e3,d=Math.floor(u/1e3);Math.hypot(n.xmin+(f+.5)*1e3-t,n.zmin+(d+.5)*1e3-e)>(c+1.8)*1e3&&(this.terrain.dropTile(u),this.ground.delete(u))}this.loadGround(),this.updateFarTerrain(t,e)}loadGround(){for(;this.groundBusy<6&&this.groundWant.length;){let t=this.groundWant.shift();if(this.ground.has(t))continue;let e=t%1e3,n=Math.floor(t/1e3);this.ground.set(t,"loading"),this.groundBusy++,Bi(`g_${e}_${n}`,`data/ground/g_${e}_${n}.js`).then(async i=>{this.roads.addTile(t,i[0].r),await this.terrain.addTile(t,i),this.ground.get(t)==="loading"?this.ground.set(t,"ready"):this.terrain.dropTile(t)}).catch(i=>{console.warn("tessera di terreno",e,n,i),this.ground.set(t,"none")}).finally(()=>{this.groundBusy--,this.loadGround()})}}groundReady(t){for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let i=t.i+n,r=t.j+e;if(i<0||r<0||i>=this.meta.tilesX||r>=this.meta.tilesZ)continue;let o=this.ground.get(r*1e3+i);if(o!=="ready"&&o!=="none")return!1}return!0}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isSprite&&i.material.map&&(i.material.map.dispose(),i.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((i,r)=>i.d-r.d);for(let i of n){if(performance.now()-e>t)return!1;if(i.state==="new"){i.state="loading",this.tileSet.has(i.key)?Bi("t_"+i.i+"_"+i.j,`data/tiles/t_${i.i}_${i.j}.js`).then(o=>{i.data=o,i.state="ready"}).catch(()=>{i.data=null,i.state="ready"}):(i.data=null,i.state="ready");continue}if(i.state!=="ready"||i.dead)continue;let r=(o,a)=>{i.parts[o]=a,a&&this.root.add(a)};if(!("terrain"in i.parts)){if(!this.groundReady(i))continue;r("terrain",this.terrain.hasTile(i.key)?this.terrain.buildTile(i.key,Math.max(5,this.terrain.step),this.terrain.tileMaterial(i.key,this.detail)):null);continue}if(!("roads"in i.parts)){i.gen||(i.gen=this.roads.buildTileGen(i.key));let o;do o=i.gen.next();while(!o.done&&performance.now()-e<t);if(!o.done)return!1;i.gen=null,r("roads",o.value);continue}if(!("signs"in i.parts)){let o=this.signage.build(i.key,i.data);for(let a of o.signals)this.signals.push({...a,tile:i.key});for(let a of o.cameras||[])this.cameras.push({x:a[0],z:a[1],tile:i.key});r("signs",o.group);continue}if(!("buildings"in i.parts)){if(i.data&&i.bldFar&&this.farIdx&&this.farIdx.has(i.key)){i.parts.buildings=null,i.bldPending=!0;continue}if(i.data){i.gen||(i.gen=this.buildings.buildGen(i.data,i.bldCol?null:this.collision,i.key),i.bldCol=!0);let o;do o=i.gen.next();while(!o.done&&performance.now()-e<t);if(!o.done)return!1;i.gen=null,r("buildings",o.value.group)}else r("buildings",null);if(!i.rbDone){i.rbDone=!0;for(let o of this.roads.roundabouts)this.roads.tileKey(o.x,o.z)===i.key&&this.collision.addCircle(i.key,o.x,o.z,o.r)}continue}if(!("paths"in i.parts)){let o=new $t,a=this.roads.buildPaths(i.data),l=this.roads.buildBarriers(i.data,this.collision,i.key),c=this.buildPower(i),u=this.roads.buildStalls(i.data);for(let h of[a,l,c,u])h&&o.add(h);r("paths",o.children.length?o:null);continue}if(!("gates"in i.parts)){r("gates",this.gates.build(i.key,i.data));continue}if(!("props"in i.parts)){r("props",this.buildProps(i)),this.traffic&&this.traffic.computeParkSpots(i.key,i.data);continue}if(!("labels"in i.parts)){r("labels",this.buildLabels(i));continue}if(i.vegWanted&&!("veg"in i.parts)){r("veg",this.vegetation.build(i.data,i.i,i.j,this.collision,i.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=9,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,i=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=M=>M[0]>=i&&M[0]<i+1e3&&M[1]>=r&&M[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let M of e)for(let v=0;v<M.length;v++){if(!o(M[v]))continue;let y=M[v],_=M[v-1]||M[v+1],w=M[v+1]||M[v-1],S=w[0]-_[0],A=w[1]-_[1],b=Math.hypot(S,A)||1;if(S/=b,A/=b,c.push([y[0],u.height(y[0],y[1]),y[1],Math.atan2(S,A)]),v<M.length-1){let E=M[v+1],R=u.height(y[0],y[1])+a,L=u.height(E[0],E[1])+a,N=Math.hypot(E[0]-y[0],E[1]-y[1]),D=-(E[1]-y[1])/(N||1),O=(E[0]-y[0])/(N||1);for(let[z,q]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let k=0;k<8;k++)for(let Q of[k/8,(k+1)/8]){let $=Math.min(9,N*.03)*4*Q*(1-Q);l.push(y[0]+(E[0]-y[0])*Q+D*z,R+(L-R)*Q+q-$,y[1]+(E[1]-y[1])*Q+O*z)}}}if(!c.length)return null;let h=new $t;if(l.length){let M=new ee;M.setAttribute("position",new Yt(l,3)),this.wireMat=this.wireMat||new Mr({color:2763822}),h.add(new ea(M,this.wireMat))}if(!this.towerGeo){let M=[],v=new te(.12,.2,a,4);for(let[y,_]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let w=v.clone();w.rotateZ(-y*.08),w.rotateX(_*.08),w.translate(y*1.6,a/2,_*1.6),M.push(w)}for(let[y,_]of[[a-4,11],[a,8]]){let w=new Ot(_,.25,.25);w.translate(0,y,0),M.push(w)}for(let y=5;y<a;y+=6){let _=new Ot(3.4-y*.06,.12,3.4-y*.06);_.translate(0,y,0),M.push(_)}this.towerGeo=Td(M.map(y=>y.toNonIndexed())),this.towerMat=new Ht({color:9080982})}let f=new Ce(this.towerGeo,this.towerMat,c.length),d=new Kt,p=new Ie,m=new H(0,1,0),g=new H(1,1,1),x=new H;return c.forEach(([M,v,y,_],w)=>{p.setFromAxisAngle(m,_),x.set(M,v-.5,y),d.compose(x,p,g),f.setMatrixAt(w,d),this.collision.addCircle(t.key,M,y,2.2,v+29)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:_d,11:Md,12:vd,13:Ed,14:bd,15:wd},i={};for(let o of e)n[o[0]]&&(i[o[0]]=i[o[0]]||[]).push(o);let r=new $t;for(let o of Object.keys(i)){let a=i[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,p=this.roads.nearest(h,f,25,x=>x.drivable);p&&(+o==10||+o==14)&&(d=Math.atan2(p.px-h,p.pz-f));let m=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(m)||(d=Math.PI-m*Math.PI/180);let g=p&&p.d<this.roads.ways[p.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[p.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(g?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,i=e.zmin+t.j*1e3,r=new $t;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<i||c>=i+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=yv[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let p=new Le(h);p.colorSpace=ve;let m=new Jo(new yr({map:p,depthTest:!0,fog:!1,transparent:!0})),g=this.terrain.height(l,c)+(a===1?32:a===12?6:18);m.position.set(l,g,c),m.scale.set(d/48*3.2,3.2,1),m.userData.lm=!0,r.add(m)}return r}updateLabels(t,e=!1){let n=[],i=e?1100:520;for(let a of this.tiles.values()){let l=a.parts.labels;if(l)for(let c of l.children){if(c.visible=!1,!this.labelsOn)continue;let u=c.position.distanceTo(t.position);u<i&&u>15&&n.push([u,c])}}n.sort((a,l)=>a[0]-l[0]);let r=[],o=this._lv||(this._lv=new H);for(let[a,l]of n){if(r.length>=7)break;if(o.copy(l.position).project(t),o.z>1||Math.abs(o.x)>1.05||Math.abs(o.y)>1.05)continue;let c=Math.max(1,a/120),u=l.userData.asp||(l.userData.asp=l.scale.x/l.scale.y),h=3.2*c/a*1.9,f=h*u*.56;r.some(d=>Math.abs(d[0]-o.x)<d[2]+f&&Math.abs(d[1]-o.y)<d[3]+h)||(r.push([o.x,o.y,f,h]),l.visible=!0,l.scale.set(u*3.2*c,3.2*c,1))}}};var Na=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new pn(4500,32,16);this.uniforms={top:{value:new Lt},horizon:{value:new Lt},sunDir:{value:new H},sunCol:{value:new Lt},cloudCol:{value:new Lt},time:{value:0},cover:{value:.5}};let i=new Pe({uniforms:this.uniforms,side:We,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
        }`});this.dome=new Rt(n,i),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new ee;o.setAttribute("position",new Yt(r,3)),this.starMat=new _r({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new na(o,this.starMat),this.stars.frustumCulled=!1,this.stars.scale.setScalar(.3),t.add(this.stars),this.sun=new pa(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new ua(12375295,5922880,.9),t.add(this.hemi),t.fog=new $o(13622246,400,2600),this.sunDir=new H,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),i=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(i),o=Math.asin(r),a=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=Yf.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new Lt(659490).lerp(new Lt(4030417),l),h=new Lt(1317418).lerp(new Lt(13229034),l).lerp(new Lt(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.28+.98*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.34*l+.05,.33*l+.05,.27*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new H(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var vi={x:0,y:1,z:0},vv=()=>0;function Ad(s,t){return vv(s,t)}function Rd(){return vi}var Bh={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},Cd=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function Hi(s){return Cd[s%Cd.length]}function Id(s,t,e){let n=s.length,i=[],r=[];for(let l=0;l<n;l++){let[c,u]=s[l],h=t[l],f=e[l];i.push(-h,u,c,h,u,c),i.push(-h,u,c,-h,f,c),i.push(h,u,c,h,f,c),i.push(-h,f,c,h,f,c),i.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:i,idx:r}}function Br({pos:s,idx:t}){let e=new ee;return e.setAttribute("position",new Yt(s,3)),e.setIndex(t),e.computeVertexNormals(),e}var Pd=1.12,Or=s=>s.wheelR*2+.02,Fr=.34;function Mv(s){return s>=1?0:s<=Fr?1:.5*(1+Math.cos(Math.PI*(s-Fr)/(1-Fr)))}function Ld(s,t){let e=Or(s),n=s.wheelR*Pd;return t.map(([i])=>{let r=0;for(let o of s.wheelZ)r=Math.max(r,Mv(Math.abs(i-o)/n));return s.sill+(e-s.sill)*r})}function Dd(s){let t=s.profile.map(r=>[r[0],r[1]]),e=s.widths.slice(),n=s.wheelR*Pd,i=[];for(let r of s.wheelZ)for(let o of[-1,-Fr,Fr,1])i.push(r+o*n);i.sort((r,o)=>o-r);for(let r of i){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function Nd(s){let t=kr(s),e=s.tumble||0,n=[];for(let i of s.pillars||[]){let[r,o]=s.cab[i],a=s.cabw[i],l=o-t[i]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(nn(.04,l,s.bus?.16:.09,(a+e*.5+.004)*c,t[i]+l/2,r))}return n}function Ud(s){let t=Oh(s),e=kr(s),n=[],i=e[0]+(s.bus?.22:.02),r=s.cab[0][0]-(s.bus?.3:.22);for(let o of[1,-1])n.push(nn(.16,.12,.07,(t.halfW+.08)*o,i,r));return n}function _v(s){let{profile:t,widths:e}=Dd(s);return Br(Id(t,e,Ld(s,t)))}var kr=s=>s.cabBase||s.cab.map(()=>s.beltY);function zd(s,t=!1){let e=s.cab,n=s.cabw,i=kr(s),r=s.tumble||0,[o,a]=s.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let p=0;p<e.length;p++){let[m,g]=e[p],x=n[p],M=x+r,v=i[p];u.push(-x,g,m,x,g,m),u.push(-M,v,m,-x,g,m),u.push(M,v,m,x,g,m),u.push(-M,v,m,M,v,m,-x,g,m,x,g,m)}let f=(p,m)=>p*10+m;for(let p=0;p<e.length-1;p++)t&&l&&p>=o&&p<c-1||h.push(f(p,0),f(p,1),f(p+1,0),f(p,1),f(p+1,1),f(p+1,0)),h.push(f(p,3),f(p+1,3),f(p,2),f(p+1,3),f(p+1,2),f(p,2)),h.push(f(p,5),f(p,4),f(p+1,5),f(p+1,5),f(p,4),f(p+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),Br({pos:u,idx:h})}function Fd(s){let[t,e]=s.roofSlice;if(t===0&&e===0)return null;let n=s.cab.slice(t,s.cab.length+e),i=s.cabw.slice(t,s.cabw.length+e);if(n.length<2)return null;let r=s.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=i[c]*(1-.04*f)+.03,p=h+.006;o.push(-d,p,u,0,p+r,u,d,p,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var Ua=new Lt;function Bd(){return{pos:[],idx:[],col:[]}}function Ke(s,t,e){let n=t.attributes.position,i=s.pos.length/3;Ua.set(e);for(let o=0;o<n.count;o++)s.pos.push(n.getX(o),n.getY(o),n.getZ(o)),s.col.push(Ua.r,Ua.g,Ua.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)s.idx.push(i+r.getX(o));else for(let o=0;o<n.count;o++)s.idx.push(i+o);t.dispose()}function Od(s){let t=new ee;return t.setAttribute("position",new Yt(s.pos,3)),t.setAttribute("color",new Yt(s.col,3)),t.setIndex(s.idx),t.computeVertexNormals(),t}var nn=(s,t,e,n,i,r)=>new Ot(s,t,e).translate(n,i,r),Je={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},Gi={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function Oh(s){let t=s.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),i=Math.max(...s.widths),r=s.widths[0],o=s.widths[s.widths.length-1],a=s.profile[0][1],l=s.profile[s.profile.length-1][1],c=a-s.sill,u=l-s.sill;return{noseZ:e,tailZ:n,halfW:i,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:s.sill+c*(s.bus?.42:.74),headH:c*.26,grilleY:s.sill+c*(s.bus?.14:.44),grilleH:c*.24,lampY:s.sill+u*(s.bus?.36:.66),lampH:u*.3,bumperY:s.sill+c*.12,bumperH:c*.3}}function bv(s){let{profile:t,widths:e}=Dd(s),n=Id(t,e,Ld(s,t)),i=Fd(s);if(i){let r=n.pos.length/3;n.pos.push(...i.pos);for(let o of i.idx)n.idx.push(r+o)}for(let r of[...Nd(s),...Ud(s)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return Br(n)}function wv(s){let t=Bd(),e=Oh(s),n=zd(s,!0);Ke(t,n,Je.glass);let i=s.wheelX-s.wheelW/2-.02,r=s.sill*.7;if(Ke(t,nn(i*2,Or(s)-r,(e.noseZ-e.tailZ)*.84,0,(Or(s)+r)/2,(e.noseZ+e.tailZ)/2),Je.under),Ke(t,nn(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),Je.bumper),Ke(t,nn(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),Je.bumper),s.bus){for(let o of[4.3,.6,-1.4])Ke(t,nn(.04,1.14,1.05,-(e.halfW+.005),s.sill+.6,o),Je.black);Ke(t,nn(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),Je.black);for(let o of[1,-1])Ke(t,nn(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),Je.lamp),Ke(t,nn(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),Je.tail)}else{Ke(t,nn(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),Je.black);let o=e.noseW*.56;for(let a of[1,-1])Ke(t,nn(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),Je.lamp),Ke(t,nn(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),Je.amber),Ke(t,nn(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),Je.tail);Ke(t,nn(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),Je.black)}return Od(t)}function Ev(s){let t=Bd(),e=s.wheelR,n=s.wheelW;Ke(t,new te(e,e,n,14).rotateZ(Math.PI/2),Je.tyre);for(let i of[1,-1])Ke(t,new Ni(e*.6,12).rotateY(i*Math.PI/2).translate(i*(n/2+.004),0,0),Je.rim);return Od(t)}var za=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function kh(s){let t=new xi({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:re}),e=new ce({vertexColors:!0,roughness:.35,metalness:.2,side:re}),n=new ce({vertexColors:!0,roughness:.75,metalness:.15}),i=new $t,r=Object.keys(Gi),o={};for(let A of r)o[A]=[];for(let A=0;A<s;A++)o[Hi(A)].push(A);let a={},l=new Array(s);for(let A of r){let b=o[A].length;if(b===0)continue;let E=Gi[A],R=new Ce(bv(E),t,b),L=new Ce(wv(E),e,b),N=new Ce(Ev(E),n,b*4);R.castShadow=!0,R.frustumCulled=!1,L.frustumCulled=!1,N.frustumCulled=!1,i.add(R,L,N),a[A]={body:R,trim:L,wheels:N,spec:E},o[A].forEach((D,O)=>{l[D]={type:A,local:O}})}let c=new Float32Array(s).fill(NaN),u=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),d=new Float32Array(s),p=new Kt,m=new Kt,g=new Kt,x=new Kt,M=new Lt,v=new H(0,1,0),y=new H,_=new Ie,w=new Kt;return{group:i,setAt:(A,b,E,R,L=0,N=Ad(b,E))=>{let D=l[A];if(!D)return;let{body:O,trim:z,wheels:q,spec:k}=a[D.type],Q=Rd(b,E,N);y.set(Q.x,Q.y,Q.z),_.setFromUnitVectors(v,y),w.makeRotationFromQuaternion(_),p.makeRotationY(R).premultiply(w).setPosition(b,N,E),O.setMatrixAt(D.local,p),z.setMatrixAt(D.local,p),M.set(za[L%za.length]),O.setColorAt(D.local,M);let $=Math.sin(R),yt=Math.cos(R),_t=0;if(c[A]===c[A]){let V=b-c[A],J=E-u[A];V*V+J*J<36&&(_t=V*$+J*yt);let W=R-h[A];for(;W>Math.PI;)W-=Math.PI*2;for(;W<-Math.PI;)W+=Math.PI*2;let B=k.wheelZ[0]-k.wheelZ[1],et=Math.abs(_t)>.004?Math.max(-.6,Math.min(.6,W*B/_t)):0;d[A]+=(et-d[A])*.3}c[A]=b,u[A]=E,h[A]=R,f[A]=(f[A]+_t/k.wheelR)%(Math.PI*2);let[Dt,it]=k.wheelZ,j=k.wheelX,Mt=k.wheelR;for(let V=0;V<4;V++){let J=V<2,W=V%2?-j:j;m.makeRotationX(f[A]),J&&d[A]&&(g.makeRotationY(d[A]),m.premultiply(g)),m.setPosition(W,Mt,J?Dt:it),x.multiplyMatrices(p,m),q.setMatrixAt(D.local*4+V,x)}O.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0,q.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0)},count:s,palette:za.length}}var Us={tireGeo:new Bn(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new te(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new Bn(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new te(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new Ot(.05,.17,.045),brakeGeo:new te(.15,.15,.03,20).rotateZ(Math.PI/2)},zs={tire:new ce({color:1316121,roughness:.85,metalness:.1}),rim:new ce({color:14672874,metalness:.5,roughness:.34}),lip:new ce({color:16054010,metalness:.6,roughness:.22}),hub:new ce({color:3816772,metalness:.45,roughness:.4}),brake:new ce({color:5527647,metalness:.3,roughness:.6})};function Sv(){let s=new $t,t=new Rt(Us.tireGeo,zs.tire),e=new Rt(Us.brakeGeo,zs.brake);e.position.x=.04;let n=new Rt(Us.rimLipGeo,zs.lip);n.position.x=.095;let i=new Rt(Us.rimBarrelGeo,zs.rim),r=new Rt(Us.hubGeo,zs.hub);r.position.x=.085,s.add(t,e,i,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new Rt(Us.spokeGeo,zs.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),s.add(c)}return s}function kd(s=12726047,{police:t=!1,body:e="car"}={}){let n=Gi[e]||Gi.car,i=new $t,r=t?15922423:s,o=Oh(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,p]=n.wheelZ,m=n.wheelX,g=n.wheelR,x=kr(n),M=n.tumble||0,v=new xi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),y=new ce({color:1118742,roughness:.6,metalness:.3}),_=new ce({color:15396338,metalness:.55,roughness:.22});i.add(new Rt(_v(n),v));let w=new ce({color:723982,roughness:1}),S=m-n.wheelW/2-.02;i.add(new Rt(new Ot(S*2,Or(n)-.1,(a-l)*.8).translate(0,(Or(n)+.1)/2,(a+l)/2),w));let A=new ce({color:1710879,roughness:.65,metalness:.2}),b=Math.abs(d-p)-n.wheelR*2.2;if(b>.3)for(let J of[1,-1]){let W=new Rt(new Ot(.06,.13,b),A);W.position.set((c-.05)*J,n.sill+.04,(d+p)/2),i.add(W)}let E=new Bn(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[J,W]of[[m,d],[-m,d],[m,p],[-m,p]]){let B=new Rt(E,v);B.position.set(J+.02*Math.sign(J),g,W),i.add(B)}let R=new ce({color:3948616,roughness:.85,metalness:.05});{let J=n.cab,W=n.cabw,B=[],et=[];for(let I=0;I<J.length;I++){let[ht,tt]=J[I],rt=W[I]*.9,Z=(W[I]+M)*.9;B.push(-Z,x[I]-.02,ht,Z,x[I]-.02,ht,-rt,tt-.06,ht,rt,tt-.06,ht)}let F=(I,ht)=>I*4+ht;for(let I=0;I<J.length-1;I++)et.push(F(I,2),F(I+1,2),F(I,3),F(I,3),F(I+1,2),F(I+1,3)),et.push(F(I,0),F(I,2),F(I+1,0),F(I+1,0),F(I,2),F(I+1,2)),et.push(F(I,1),F(I+1,1),F(I,3),F(I+1,1),F(I+1,3),F(I,3));et.push(F(0,0),F(0,1),F(0,2),F(0,1),F(0,3),F(0,2));let Y=J.length-1;et.push(F(Y,0),F(Y,2),F(Y,1),F(Y,1),F(Y,2),F(Y,3)),i.add(new Rt(Br({pos:B,idx:et}),R))}let L=new xi({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:re});i.add(new Rt(zd(n,!0),L));let N=new xi({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),D=Fd(n);if(D){i.add(new Rt(Br(D),N));let[J]=n.roofSlice,[W,B]=n.cab[J],et=n.cabw[J],F=new Rt(new Ot(et*2,.03,.06),N);F.position.set(0,B-.005,W+.02),i.add(F)}let O=new ce({color:13225430,metalness:.7,roughness:.28}),z=n.cab[0][0],q=n.cab[n.cab.length-1][0],k=Math.max(...n.cabw)+M;for(let J of[1,-1]){let W=new Rt(new Ot(.025,.03,Math.abs(z-q)-.08),O);W.position.set((k+.01)*J,f+.02,(z+q)/2),i.add(W)}let Q=new ce({color:r,metalness:.35,roughness:.42});for(let J of Nd(n))i.add(new Rt(J,Q));let $=new ce({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),yt=new ce({color:1513500,roughness:.55,metalness:.25});if(n.bus){let J=new Rt(new Ot(u*1.3,.26,.05),new ce({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));J.position.set(0,2.54,a-.01),i.add(J);for(let et of[1,-1]){let F=new Rt(new Ot(.36,.22,.06),new ce({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));F.position.set(.74*et,o.headY,a-.02),i.add(F);let Y=new Rt(new Ot(.4,.26,.02),_);Y.position.set(.74*et,o.headY,a-.05),i.add(Y);let I=new Rt(new Ot(.32,.34,.06),$);I.position.set(.86*et,o.lampY,l+.03),i.add(I)}let W=new Rt(new Ot(u*1.92,o.bumperH,.12),yt);W.position.set(0,o.bumperY,a-.05);let B=new Rt(new Ot(h*1.92,o.bumperH,.12),yt);B.position.set(0,o.bumperY,l+.05),i.add(W,B);for(let et of[4.3,.6,-1.4]){let F=new Rt(new Ot(.04,1.14,1.05),y);F.position.set(-(c+.005),n.sill+.6,et),i.add(F)}}else{let J=u*1.1,W=new Rt(new Ot(J,o.grilleH,.07),y);W.position.set(0,o.grilleY,a-.04),i.add(W);let B=new ce({color:2829876,metalness:.6,roughness:.4});for(let X=0;X<3;X++){let K=new Rt(new Ot(J-.03,.02,.02),B);K.position.set(0,o.grilleY-.05+X*.05,a-.015),i.add(K)}let et=new Rt(new Ot(u*1.4,.09,.05),y);et.position.set(0,n.sill+.05,a-.05),i.add(et);let F=new ce({color:658189,roughness:.5,metalness:.2}),Y=new ce({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),I=new xi({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),ht=new ce({color:13796895,roughness:.35,metalness:.1}),tt=u*.56;for(let X of[1,-1]){let K=new Rt(new Ot(.34,o.headH,.1),F);K.position.set(tt*X,o.headY,a-.09),i.add(K);let ft=new Rt(new Ot(.28,.12,.02),Y);ft.position.set(tt*X,o.headY,a-.045),i.add(ft);let G=new Rt(new Ot(.35,.16,.02),_);G.position.set(tt*X,o.headY,a-.03),i.add(G);let lt=new Rt(new Ot(.3,.13,.015),I);lt.position.set(tt*X,o.headY,a-.018),i.add(lt);let dt=new Rt(new Ot(.12,.11,.06),ht);dt.position.set((tt+.24)*X,o.headY,a-.05),i.add(dt)}let rt=new Rt(new Ni(.05,16),_);rt.position.set(0,o.grilleY,a-.003),i.add(rt);let Z=o.lampY,wt=l+.035;for(let X of[1,-1]){let K=new Rt(new Ot(h*.68,.2,.04),new ce({color:1180422,roughness:.5,metalness:.2}));K.position.set(h*.58*X,Z,wt+.03),i.add(K);let ft=new Rt(new Ot(h*.6,.17,.07),$);ft.position.set(h*.58*X,Z,wt),i.add(ft)}let ct=new Rt(new Ot(h*.56,.14,.04),new ce({color:1118742,roughness:.6,metalness:.3}));ct.position.set(0,Z-.03,wt+.03),i.add(ct);let P=new Rt(new Ot(h*.44,.07,.02),_);P.position.set(0,Z-.03,wt+.005),i.add(P);let C=(X,K,ft)=>{let G=new Rt(new Ot(X,o.bumperH,.09),yt);return G.position.set(0,o.bumperY,K+ft*.04),G};i.add(C(u*1.92,a,-1),C(h*1.92,l,1));for(let X of[1,-1]){let K=new Rt(new te(.045,.045,.06,12).rotateX(Math.PI/2),_);K.position.set(c*.42*X,n.sill-.02,l+.05),i.add(K)}}let _t=new ce({color:r,metalness:.5,roughness:.35}),Dt=new ce({color:547,metalness:.9,roughness:.1});for(let J of Ud(n))i.add(new Rt(J,_t));{let J=kr(n)[0]+(n.bus?.22:.02),W=n.cab[0][0]-(n.bus?.3:.22);for(let B of[1,-1]){let et=new Rt(new Ot(.02,.09,.05),Dt);et.position.set((c+.16)*B,J,W),i.add(et)}}let it=[["wheelFL",m,d],["wheelFR",-m,d],["wheelRL",m,p],["wheelRR",-m,p]],j=g/.3;for(let[J,W,B]of it){let et=new $t;et.name=J,et.position.set(W,g,B);let F=Sv();F.scale.setScalar(j),et.add(F),i.add(et)}if(t){let J=Math.max(...n.cab.map(F=>F[1])),W=new Rt(new Ot(.66,.05,.3),y);W.position.set(0,J+.05,.05),i.add(W);let B=new Rt(new Ot(.3,.1,.3),new ce({color:2245836,emissive:2250239,emissiveIntensity:1.6}));B.position.set(-.17,J+.11,.05);let et=new Rt(new Ot(.3,.1,.3),new ce({color:13378082,emissive:16720418,emissiveIntensity:1.6}));et.position.set(.17,J+.11,.05),i.add(B,et),i.userData.lightbar={blue:B.material,red:et.material}}let Mt=new fa(16773583,0,80,.62,.5,1.2);Mt.position.set(0,o.headY+.2,a-.05),Mt.target.position.set(0,.2,a+10),i.add(Mt,Mt.target),i.userData.headlight=Mt;let V=new da(16722450,0,1.4,3.4);return V.position.set(0,o.lampY,l+.05),i.add(V),i.userData.tailGlow=V,i.traverse(J=>{J.isMesh&&(J.castShadow=!0)}),i}function Hd(s,t,{sz:e=1,sy:n=1,sx:i=1,wheelR:r}={}){let o=Gi[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*i),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*i),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*i,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),Gi[s]=a,a}function Gd(s){return Gi[s]}var Hh=za;var Hr=9.81,Vd=1.2,Wd={id:"plane",kind:"plane",name:"Aereo da turismo",desc:"Monomotore biposto ad ala alta: decolla, sorvola la Brianza e atterra su un prato o una strada dritta.",color:"#f4f4f0",stripe:"#c0392b",L:7.3,W:10.2,H:2.6,wb:1.6,mass:760,kw:85,rpmMax:2700,thrust:3600,cdS:.9,kInd:31e4,wingS:15,vStall:20,vRot:24,vNe:75},Fa=class{constructor(t,e){this.spec=t,this.world=e,this.isPlane=!0,this.x=0,this.y=0,this.z=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.bank=0,this.lever=0,this.throttle=0,this.brake=0,this.steer=0,this.gear=1,this.rpm=0,this.slip=0,this.impact=0,this.wheelSpinAngle=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.agl=0,this.surface=null,this.stall=!1}ground(t,e,n=1e9){return this.world.roads.surfaceAt(t,e,n).h}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=this.vy=0,this.bank=0,this.pitch=0,this.roll=0,this.lever=0,this.onGround=!0,this.airborne=!1,this.crashed=0,this.surface=this.world.roads.surfaceAt(t,e,1e9),this.y=this.surface.h}launch(t=250,e=48){this.y=this.ground(this.x,this.z)+t,this.u=e,this.vy=0,this.pitch=.03,this.bank=0,this.lever=.65,this.onGround=!1,this.airborne=!0,this.crashed=0,this.surface=null}update(t,e){for(let i=0;i<3;i++)this.step(t/3,e);this.roll=-this.bank,this.rpm=700+this.lever*2e3+Math.min(300,this.u*4),this.throttle=this.lever,this.wheelSpinAngle+=(this.onGround?this.u/.3:0)*t,this.propAngle=(this.propAngle||0)+this.rpm/60*Math.PI*2*t}step(t,e){let n=this.spec,i=this.world;if(this.crashed>0){this.crashed-=t,this.u=0,this.crashed<=0&&(this.launch(),this.relaunched=!0);return}this.lever=Math.max(0,Math.min(1,this.lever+(e.throttle-e.brake)*t*.6));let r=n.thrust*this.lever*Math.max(0,1-this.u/(n.vNe*1.05)),o=.5*Vd*n.cdS*this.u*this.u+(this.onGround?0:n.kInd/Math.max(100,this.u*this.u)),a=Math.sin(this.h),l=Math.cos(this.h),c=this.ground(this.x,this.z,this.y+2);if(this.agl=this.y-c,this.onGround){this.brake=e.handbrake?1:0;let M=.03*n.mass*Hr*Math.sign(this.u),v=(e.handbrake?.55:0)*n.mass*Hr*Math.sign(this.u);this.u+=(r-o-M-v)/n.mass*t,Math.abs(this.u)<.08&&this.lever<.05&&(this.u=0),this.u<0&&(this.u=0),this.steer+=(e.steer*.5*Math.min(1,12/Math.max(1,this.u))-this.steer)*Math.min(1,t*6),this.h+=this.u*Math.tan(this.steer)/n.wb*t*Math.max(.15,1-this.u/n.vRot);let y=this.u>n.vRot*.85?Math.max(0,e.pitch)*.2:0;this.pitch+=(y-this.pitch)*Math.min(1,t*2),this.bank*=Math.exp(-t*8),this.x+=a*this.u*t,this.z+=l*this.u*t,this.collideGround(),this.surface=i.roads.surfaceAt(this.x,this.z,this.y+1),this.y=this.surface.h,this.vy=0;let _=Math.atan2(this.ground(this.x+a*2,this.z+l*2,this.y+3)-this.ground(this.x-a*2,this.z-l*2,this.y+3),4);this.dynPitch+=(_-this.dynPitch)*Math.min(1,t*8);let w=.5*Vd*n.wingS*this.u*this.u*(.35+this.pitch*5)/(n.mass*Hr);this.pitch>.08&&w>1&&(this.onGround=!1,this.airborne=!0,this.surface=null,this.vy=1);return}this.dynPitch*=Math.exp(-t*3);let u=Math.min(1,(this.u/n.vStall)**2);this.stall=u<.98;let h=1.3*Math.min(1,this.u/25);Math.abs(e.steer)>.05?this.bank+=e.steer*h*t:this.bank*=Math.exp(-t*.9),this.bank=Math.max(-1.05,Math.min(1.05,this.bank));let f=.65*Math.min(1,this.u/30);if(this.pitch+=e.pitch*f*t,Math.abs(e.pitch)<.05){let M=Math.max(-.16,Math.min(.04,.02+.5*(this.u-1.35*n.vStall)/n.vStall));this.pitch+=(M-this.pitch)*Math.min(1,t*.5)}this.stall&&(this.pitch-=(1-u)*.9*t),this.pitch=Math.max(-.75,Math.min(.55,this.pitch)),this.w=Hr*Math.tan(this.bank)/Math.max(15,this.u)*u,this.h+=this.w*t;let d=Math.atan2(this.vy,Math.max(1,this.u));this.u+=((r-o)/n.mass-Hr*Math.sin(d))*t,this.u=Math.max(5,this.u);let p=this.u*Math.sin(this.pitch)*u*Math.cos(this.bank)-(1-u)*9-(1-Math.cos(this.bank))*3.5;this.vy+=(p-this.vy)*Math.min(1,t*1.6),this.x+=a*this.u*t,this.z+=l*this.u*t,this.y+=this.vy*t;let m=c+1800;this.y>m&&(this.y=m,this.vy=Math.min(0,this.vy));let g=i.terrain;if(g.inside(this.x,this.z)||(this.x=Math.max(g.x0+50,Math.min(g.x0+(g.nx-1)*g.step-50,this.x)),this.z=Math.max(g.z0+50,Math.min(g.z0+(g.nz-1)*g.step-50,this.z)),this.h+=Math.PI*.75*t*4,this.outside=1),this.agl<60&&i.collision.topAt(this.x,this.z,1.5)>this.y+.3){this.crash("Schianto contro un ostacolo!");return}let x=this.ground(this.x,this.z,this.y+1);if(this.y<=x){let M=(this.ground(this.x+a*3,this.z+l*3,this.y+4)-x)/3,v=this.vy-M*this.u,y=v<-4.2||Math.abs(this.bank)>.35||this.pitch<-.18||this.u>40;if(this.y=x,y){this.crash(v<-4.2&&M>.12?"Schianto contro il pendio!":this.u>40?"Atterraggio troppo veloce!":"Atterraggio troppo duro!");return}this.onGround=!0,this.airborne=!1,this.impact=Math.min(1,-this.vy/6),this.vy=0,this.bank=0,this.touchdown=!0}}collideGround(){let t=this.world,e=1.6,n=t.collision.resolveCircle(this.x,this.z,e),i=t.traffic?t.traffic.resolveCircle(this.x,this.z,e):null;i&&(!n||i.depth>n.depth)&&(n=i),n&&(this.x+=n.nx*n.depth,this.z+=n.nz*n.depth,this.u>1&&(this.impact=Math.max(this.impact,Math.min(1,this.u/10))),this.u*=.3)}crash(t){this.crashed=2.2,this.crashMsg=t,this.impact=1,this.vy=0,this.lever=0,this.u=0,this.y=this.ground(this.x,this.z,this.y+1)}};function Xd(s,t={}){let e=new $t,n=new $t,i=new En({color:t.color||s.color,shininess:70,specular:5592405}),r=new En({color:s.stripe,shininess:50}),o=new Ht({color:1908772}),a=new En({color:2240576,shininess:120,specular:10070715,transparent:!0,opacity:.75}),l=.95,c=(j,Mt,V,J,W,B=0,et=0,F=0)=>{let Y=new Rt(j,Mt);return Y.position.set(V,J,W),Y.rotation.set(B,et,F),Y.castShadow=!0,Y.receiveShadow=!0,n.add(Y),Y},u=[[2.35,.55,.6],[1.6,1.05,1.15],[.2,1.1,1.25],[-1.2,.95,1],[-3,.45,.55],[-4.6,.22,.38]],h=[];for(let[j,Mt,V]of u)h.push({z:j,hw:Mt,hh:V});let f=[],d=[],p=j=>[[j.hw,-j.hh*.45],[j.hw*.92,j.hh*.55],[-j.hw*.92,j.hh*.55],[-j.hw,-j.hh*.45],[-j.hw*.6,-j.hh*.55],[j.hw*.6,-j.hh*.55]];h.forEach(j=>{for(let[Mt,V]of p(j))f.push(Mt*.5,l+.55+V*.5+(j.z<-1?(-1-j.z)*.12:0),j.z)});let m=6;for(let j=0;j<h.length-1;j++)for(let Mt=0;Mt<m;Mt++){let V=j*m+Mt,J=j*m+(Mt+1)%m,W=V+m,B=J+m;d.push(V,W,J,J,W,B)}for(let j=1;j<m-1;j++){d.push(0,j,j+1);let Mt=(h.length-1)*m;d.push(Mt,Mt+j+1,Mt+j)}let g=new ee;g.setAttribute("position",new Yt(f,3)),g.setIndex(d),g.computeVertexNormals();let x=new Rt(g,i);x.castShadow=!0,n.add(x);let M=[x];for(let j of[1,-1])M.push(c(new Ot(.02,.16,5.6),r,j*.53,l+.45,-.9,0,j*.055,0));M.push(c(new te(.2,.3,.35,12),i,0,l+.52,2.5,Math.PI/2)),M.push(c(new As(.11,.22,10),o,0,l+.52,2.78,Math.PI/2));let v=new $t;v.position.set(0,l+.52,2.72),n.add(v);let y=new Rt(new Ot(1.85,.14,.04),o);y.castShadow=!0,v.add(y),M.push(y);let _=new Rt(new Ni(.93,24),new Re({color:2236962,transparent:!0,opacity:.12,side:re}));v.add(_),M.push(c(new Ot(1.02,.42,.04),a,0,l+1,1.5,-.55));for(let j of[1,-1])M.push(c(new Ot(.03,.38,1.3),a,j*.535,l+.88,.55));c(new Ot(s.W,.13,1.45),i,0,l+1.18,.45);for(let j of[1,-1]){c(new Ot(.5,.14,1.46),r,j*(s.W/2-.25),l+1.18,.45);let Mt=c(new te(.035,.035,2.25,6),o,j*1.35,l+.7,.55,0,0,j*1.02);Mt.castShadow=!0}c(new Ot(3.4,.08,.85),i,0,l+.8,-4.25);let w=new Rs;w.moveTo(0,0),w.lineTo(-1.1,0),w.lineTo(-1.25,1.35),w.lineTo(-.55,1.35),w.lineTo(0,0);let S=new Tr(w,{depth:.07,bevelEnabled:!1}),A=c(S,r,.035,l+.82,-3.55,0,-Math.PI/2,0);A.castShadow=!0;let b=new te(.21,.21,.14,14);b.rotateZ(Math.PI/2);let E=[];for(let[j,Mt,V]of[[0,1.95,!0],[1,-.1,!1],[-1,-.1,!1]]){let J=new $t;J.position.set(j,.21,Mt),J.rotation.order="YXZ",n.add(J);let W=new Rt(b,o);W.castShadow=!0,J.add(W),c(new Ot(.05,l+.3,.06),o,j*.75,l*.5+.1,Mt,0,0,-j*.35),E.push({pivot:J,front:V})}e.add(n);let R=new $t,L=new H(.24,l+.9,1),N=new Rt(new Ot(1,.26,.12),new Ht({color:2829616}));N.position.set(0,l+.52,1.72),R.add(N);let D=.5,O=.26,z=l+.66,q=l+.76,k=1.78,Q=2.62,$=new ee;$.setAttribute("position",new Yt([-D,z,k,D,z,k,O,q,Q,-D,z,k,O,q,Q,-O,q,Q],3)),$.computeVertexNormals(),R.add(new Rt($,new En({color:t.color||s.color,shininess:60,side:re})));let yt=document.createElement("canvas");yt.width=256,yt.height=96;let _t=new Le(yt);_t.colorSpace=ve;let Dt=new Rt(new en(.36,.135),new Re({map:_t,toneMapped:!1}));Dt.position.set(.2,l+.58,1.655),R.add(Dt),Dt.lookAt(L);let it=new Rt(new Ot(.3,.045,.04),new Ht({color:1381653}));return it.position.set(.24,l+.4,1.4),R.add(it),R.visible=!1,e.add(R),e.userData.eye=L.clone(),{root:e,ext:n,wheels:E,prop:v,headlight:null,tailGlow:null,interior:R,steeringWheel:it,dashCanvas:yt,dashTex:_t,exterior:M,isPlane:!0}}function qd(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.textAlign="center",a.fillStyle=o?"#ff5a4a":"#9fe3ff",a.font="bold 34px Arial",a.fillText(String(Math.round(e)),52,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",52,70),a.fillStyle="#ffd36b",a.font="bold 30px Arial",a.fillText(String(Math.round(n)),140,50),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m dal suolo",140,70),a.fillStyle=i>=0?"#7dff9a":"#ffb36b",a.font="bold 20px Arial",a.fillText((i>=0?"+":"")+i.toFixed(1),214,46),a.font="12px Arial",a.fillStyle="#6fa7c0",a.fillText("m/s",214,64),a.fillStyle="#1e2a30",a.fillRect(176,76,70,8),a.fillStyle="#59c9ff",a.fillRect(176,76,70*r,8),o&&(a.fillStyle="#ff5a4a",a.font="bold 13px Arial",a.fillText("STALLO",52,88)),t.needsUpdate=!0}var Fs=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];Fs.push(Wd);for(let s of Fs)s.base!=="bus"&&s.kind!=="plane"&&Hd("bds-"+s.id,s.base,{sz:s.sz,sy:s.sy,sx:s.sx,wheelR:s.wheelR});var Tv=s=>s.base==="bus"?"bus":"bds-"+s.id,Yd=new Ht({color:2237478});function Zd(s,t={}){let e=new $t,n=Tv(s),i=Gd(n),r=kd(new Lt(t.color||s.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((p,m)=>{let g=r.getObjectByName(p);return g&&(g.rotation.order="YXZ"),{pivot:g,front:m<2}}).filter(p=>p.pivot),l=i.beltY,c=Math.max(...i.cab.map(p=>p[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new $t;let p=i.widths.reduce((j,Mt)=>Math.max(j,Mt),0)*2,m=p*.22,[g,x]=i.cab[0],M=Math.min(c-.17,Math.max(l+.2,l+.55*(c-l))),v=g-.95,y=new H(m,M,v),_=new Ht({color:2829616}),w=new Ht({color:3816512,side:re}),S=v+.6,A=Math.min(M-.2,x+.04),b=Math.max(.4,g-S),E=new Rt(new Ot(p-.1,.42,b),_);E.position.set(0,A-.21,S+b/2),u.add(E);let R=M-.18-A;if(R>.04){let j=new Rt(new Ot(.56,R+.05,.3),_);j.position.set(m,A+R/2-.02,S+.15),u.add(j)}f=document.createElement("canvas"),f.width=256,f.height=96,d=new Le(f),d.colorSpace=ve;let L=new Rt(new en(.4,.15),new Re({map:d,toneMapped:!1}));L.position.set(m,M-.28,S-.005),L.lookAt(y),u.add(L),h=new $t,h.add(new Rt(new Bn(.185,.02,8,32),new Ht({color:1381653})));for(let j of[0,2.1,4.2]){let Mt=new Rt(new Ot(.17,.028,.02),Yd);Mt.position.set(Math.cos(j-Math.PI/2)*.085,Math.sin(j-Math.PI/2)*.085,0),Mt.rotation.z=j-Math.PI/2,h.add(Mt)}let N=new Rt(new te(.055,.055,.06,12),Yd);N.rotation.x=Math.PI/2,h.add(N);let D=new $t;D.position.set(m,M-.34,v+.47),D.rotation.x=-.42,D.add(h);let O=new Rt(new te(.035,.045,.3,8),_);O.rotation.x=Math.PI/2-.42,O.position.set(0,-.06,.16),D.add(O),u.add(D);let z=i.cab[1]?i.cab[1][0]:g-.5,q=i.cab[1]?i.cab[1][1]:c,k=i.cab[i.cab.length-2][0];for(let j of[1,-1]){let Mt=new H(j*(p/2-.1),x,g-.05),V=new H(j*(p/2-.16),q-.03,z),J=new Rt(new Ot(.08,Mt.distanceTo(V),.1),w);J.position.copy(Mt).add(V).multiplyScalar(.5),J.lookAt(V),J.rotateX(Math.PI/2),u.add(J);let W=new Rt(new en(Math.max(.6,g-v+.6),l-.3),w);W.rotation.y=Math.PI/2,W.position.set(j*(p/2-.06),(l+.3)/2,(g+v-.6)/2),u.add(W)}let Q=new Rt(new en(p-.1,Math.max(.5,z-.12-k)),new Ht({color:11841445,emissive:3157546,side:re}));Q.rotation.x=Math.PI/2,Q.position.set(0,Math.min(c,q+.02)-.04,(z-.12+k)/2),u.add(Q);let $=new Rt(new Ot(.15,.045,.02),new Ht({color:5593180}));$.position.set(0,q-.075,z-.02),u.add($);let yt=i.profile[1]||i.profile[0],_t=p/2-.18,Dt=new ee;Dt.setAttribute("position",new Yt([-_t,x-.02,g,_t,x-.02,g,_t,yt[1],yt[0],-_t,x-.02,g,_t,yt[1],yt[0],-_t,yt[1],yt[0]],3)),Dt.computeVertexNormals();let it=new Rt(Dt,new En({color:t.color||s.color,shininess:60,specular:4473924,side:re}));u.add(it),u.visible=!1,e.add(u),e.userData.eye=y.clone()}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function $d(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/i);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var Ba=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let at=r;r=o,o=at}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),p=Math.cos(this.h),m=-Math.sin(this.h),g=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=g;let x=!!g.road,M=x?i.roads.ways[g.road.wi]:null,v=!1;if(!x){let at=i.terrain.landClass(this.x,this.z);v=at==="parking"||at==="parking_space"||at==="pedestrian"}let y=n.grip*(x?M.flags&64?.78:1:v?.95:.68),_=x?M.flags&64?.03:.013:v?.016:.06;n.drive==="A"&&!x&&(y*=1.12,_*=.7),this.mu=y;let w=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,A=Math.atan2(w-S,this.L),b=n.W*.8,E=i.roads.surfaceAt(this.x+p*b/2,this.z+m*b/2,this.y+.5).h,R=i.roads.surfaceAt(this.x-p*b/2,this.z-m*b/2,this.y+.5).h,L=Math.atan2(E-R,b),N=this.m*9.81*Math.cos(A),D=N*this.b/this.L-this.m*this.ax*this.hcg/this.L,O=N*this.a/this.L+this.m*this.ax*this.hcg/this.L;D=Math.max(D,N*.15),O=Math.max(O,N*.15),this.airborne&&(D=O=0);let z=this.gear>0?n.gears[this.gear-1]:3.6,q=Math.abs(this.u)/n.wheelR*30/Math.PI,k=q*z*n.final,Q=900+r*2600;if((this.gear===1||this.gear===-1)&&k<Q&&(k=k*.4+Q*.6),k=Math.max(800,k),this.rpm+=(k-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let at=n.rpmMax*(.55+.37*r);if(this.rpm>at&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let ut=q*n.gears[this.gear-2]*n.final,pt=n.rpmMax*(.28+.3*r);this.rpm<pt&&ut<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let $=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&($=this.torque(this.rpm)*z*n.final*.88/n.wheelR*r),this.gear<0&&($=this.u<-7?0:-$*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&($-=Math.sign(this.u)*this.torque(this.rpm)*.12*z*n.final/n.wheelR*(this.rpm/n.rpmMax));let yt=n.drive==="F"?D:n.drive==="R"?O:D+O,_t=y*yt;this.wheelSpin=Math.abs($)>_t?Math.min(1,(Math.abs($)-_t)/_t):0,$=Math.max(-_t,Math.min(_t,$));let Dt=0,it=n.brake*o;Math.abs(this.u)>.05&&(Dt=-Math.sign(this.u)*Math.min(it,y*(D+O)));let j=0;this.handbrake>0&&Math.abs(this.u)>.05&&(j=-Math.sign(this.u)*y*O*.8*this.handbrake);let Mt=Math.max(Math.abs(this.u),.5),V=this.u>=0?1:-1,J=Math.atan2(this.v+this.a*this.w,Mt)-this.steer*V,W=Math.atan2(this.v-this.b*this.w,Mt),B=(at,ut,pt)=>{let Tt=-(12*ut)*at,Gt=pt*ut;return Math.abs(Tt)>Gt&&(Tt=Math.sign(Tt)*Gt*Math.max(.75,1-.25*(Math.abs(Tt)/Gt-1))),Tt},et=y*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(et*=1-.35*this.wheelSpin);let F=B(J,D,y),Y=B(W,O,et);this.slip=Math.max(Math.abs(W),Math.abs(J)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let I=-.5*1.2*n.cda*this.u*Math.abs(this.u),ht=Math.abs(this.u)>.05?-Math.sign(this.u)*_*(D+O):0,tt=-this.m*9.81*Math.sin(A),rt=this.m*9.81*Math.sin(L)*.5,Z=Math.cos(this.steer),wt=Math.sin(this.steer),ct=$+Dt+j+I+ht+tt-F*wt,P=Y+F*Z+rt;this.airborne&&(ct=I+tt*0,P=0);let C=ct/this.m+this.v*this.w,X=P/this.m-this.u*this.w,K=this.airborne?0:(this.a*F*Z-this.b*Y)/this.I,ft=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let at=1.1*y*9.81/Math.abs(this.u);Math.abs(this.w)>at&&(this.w+=(Math.sign(this.w)*at-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=C*t,this.v+=X*t,this.w+=K*t,Math.sign(ft)!==Math.sign(this.u)&&Math.abs($)<1&&ft!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(tt)<it+_*N+1500&&(this.u=0);let G=Math.min(1,Math.abs(this.u)/4),lt=this.u*Math.tan(this.steer)/this.L;this.w=this.w*G+lt*(1-G),this.v*=1-(1-G)*Math.min(1,t*8),this.ax=this.ax+(ct/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(P/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let dt=f*this.u+p*this.v,bt=d*this.u+m*this.v;this.x+=dt*t,this.z+=bt*t,this.collide();let Ct=i.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=Ct&&(this.y=Ct,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-Ct>.35&&this.y-Ct<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(Ct-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=Ct),this.pitch+=(A-this.pitch)*Math.min(1,t*10),this.roll+=(L-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),i=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+i*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),p=n*this.u+f*this.v,m=i*this.u+d*this.v,g=p*u.nx+m*u.nz;g<0&&(p-=1.25*g*u.nx,m-=1.25*g*u.nz,p*=.8,m*=.8,this.impact=Math.max(this.impact,Math.min(1,-g/12)),this.u=p*n+m*i,this.v=p*f+m*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var Bs=[["steer","Sterzo / alettoni: muovi lo stick (o il volante) verso SINISTRA","axis"],["throttle","Acceleratore / manetta su: premi il grilletto o il tasto","analog"],["brake","Freno e retromarcia / manetta gi\xF9","analog"],["pitch","Aereo, cabrare (muso su): muovi lo stick verso di te (in BASSO)","axis"],["handbrake","Freno a mano / freni dell'aereo a terra","button"],["camera","Cambia visuale","button"],["exit","Scendi / sali sul veicolo","button"],["map","Mappa","button"],["horn","Clacson","button"],["lights","Fari","button"],["reset","Rimetti in strada / riparti in volo","button"],["pause","Pausa","button"]],Gr=(s,t=1,e=0)=>({t:"a",i:s,dir:t,rest:e}),kn=s=>({t:"b",i:s}),Kd={steer:Gr(0,-1),throttle:kn(7),brake:kn(6),pitch:Gr(1,1),handbrake:kn(0),camera:kn(3),exit:kn(1),map:kn(8),horn:kn(10),lights:kn(2),reset:kn(4),pause:kn(9)},jd={...Kd},Gh=.12,Os=class s{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}this.padMaps={};try{this.padMaps=JSON.parse(localStorage.getItem("bds-pad")||"{}")}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev={},this.onPadConnect=null,addEventListener("gamepadconnected",t=>{this.onPadConnect&&this.onPadConnect(t.gamepad,this.mapFor(t.gamepad))})}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}savePads(){try{localStorage.setItem("bds-pad",JSON.stringify(this.padMaps))}catch{}}mapFor(t){if(this.padMaps[t.id])return{map:this.padMaps[t.id],kind:"personalizzata"};if(t.mapping==="standard")return{map:Kd,kind:"standard"};if(this.genericFor||(this.genericFor={}),!this.genericFor[t.id]){let e=t.axes.length>=6&&t.axes[2]<-.9&&t.axes[5]<-.9;this.genericFor[t.id]=e?{...jd,throttle:Gr(5,1,-1),brake:Gr(2,1,-1),pitch:Gr(1,1)}:jd}return{map:this.genericFor[t.id],kind:"di base (gamepad non standard: conviene configurarlo)"}}setPadMap(t,e){e?this.padMaps[t]=e:delete this.padMaps[t],this.savePads()}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}static value(t,e,n){if(!e)return 0;if(e.t==="b"){let a=t.buttons[e.i];return a?typeof a=="object"?Math.max(a.value,a.pressed?1:0):a:0}let i=t.axes[e.i];if(i===void 0)return 0;if(n==="axis"){let a=(i-(e.rest||0))*e.dir;return Math.abs(a)<Gh?0:Math.max(-1,Math.min(1,(a-Math.sign(a)*Gh)/(1-Gh)))}let r=Math.abs(e.rest||0)>.5?2:1,o=(i-(e.rest||0))*e.dir/r;return o<.06?0:Math.min(1,o)}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),i=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(i?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,actions:new Set,horn:!1,padThr:0,padBrk:0,padPitch:0,pad:null};if((e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45),this.paused)return a;let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c||!c.connected)continue;let u=c.axes;if(this.wheelCfg.enabled){let p=this.wheelCfg,m=x=>{if(x===void 0)return 0;let M=p.invertPedals?(1-x)/2:(x+1)/2;return M<.03?0:Math.min(1,M)},g=u[p.steerAxis]||0;(Math.abs(g)>.005||m(u[p.throttleAxis])>0||m(u[p.brakeAxis])>0)&&(a.steer=-g,a.analogWheel=!0,a.throttle=Math.max(a.throttle,m(u[p.throttleAxis])),a.brake=Math.max(a.brake,m(u[p.brakeAxis])))}let{map:h}=this.mapFor(c);if(a.pad=c.id,!this.wheelCfg.enabled){let p=s.value(c,h.steer,"axis");Math.abs(p)>0&&(a.steer=Math.sign(p)*Math.pow(Math.abs(p),1.6));let m=s.value(c,h.throttle,"analog"),g=s.value(c,h.brake,"analog");a.throttle=Math.max(a.throttle,m),a.brake=Math.max(a.brake,g),a.padThr=m,a.padBrk=g,a.padPitch=s.value(c,h.pitch,"axis")}s.value(c,h.handbrake,"analog")>.5&&(a.handbrake=1),a.horn=a.horn||s.value(c,h.horn,"analog")>.5;let f=this.padPrev[c.index]||{},d={};for(let[p,,m]of Bs)m!=="button"||p==="handbrake"||p==="horn"||(d[p]=s.value(c,h[p],"analog")>.5,d[p]&&!f[p]&&a.actions.add(p));this.padPrev[c.index]=d}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}},Vr=class{constructor(t,e){this.input=t,this.ui=e,this.timer=0}current(){return(navigator.getGamepads?[...navigator.getGamepads()].filter(e=>e&&e.connected):[])[0]||null}start(){let t=this.current();return t?(this.id=t.id,this.map={},this.step=0,this.input.paused=!0,this.next(),clearInterval(this.timer),this.timer=setInterval(()=>this.poll(),30),!0):(this.ui.status("Nessun gamepad rilevato: collegalo e premi un tasto qualsiasi, poi riprova."),!1)}snap(t){return{axes:[...t.axes],buttons:t.buttons.map(e=>typeof e=="object"?e.value:e)}}next(){if(this.step>=Bs.length){this.finish();return}let[,t]=Bs[this.step];this.ui.prompt(t,this.step+1,Bs.length),this.base=null,this.wait=!0}skip(){this.step++,this.next()}poll(){let t=[...navigator.getGamepads()].find(o=>o&&o.connected&&o.id===this.id);if(!t)return;let e=this.snap(t);if(this.wait){e.buttons.every(o=>o<.3)&&(this.base=e,this.wait=!1,this.restT=performance.now());return}if(performance.now()-this.restT<250){this.base=e;return}let[n,,i]=Bs[this.step],r=null;if(e.buttons.forEach((o,a)=>{!r&&o>.6&&this.base.buttons[a]<.3&&(r={t:"b",i:a})}),!r){let o=.5;e.axes.forEach((a,l)=>{let c=a-this.base.axes[l];Math.abs(c)>o&&(o=Math.abs(c),r={t:"a",i:l,dir:Math.sign(c),rest:Math.round(this.base.axes[l]*100)/100})})}r&&(i==="axis"&&r.t==="b"||(i==="axis"&&(r.rest=0),this.map[n]=r,this.step++,this.next()))}finish(){clearInterval(this.timer),this.input.paused=!1,this.input.setPadMap(this.id,this.map),this.ui.done(this.map)}cancel(){clearInterval(this.timer),this.input.paused=!1}static describe(t){let e=n=>n?n.t==="b"?`tasto ${n.i}`:`asse ${n.i}${n.dir>0?"+":"\u2212"}${Math.abs(n.rest)>.5?" (grilletto)":""}`:"\u2014";return Bs.map(([n,i])=>`${i.split(":")[0]}: ${e(t[n])}`)}};var Vh=72,Mi=1e6,Jd=14,Oa=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new $t,this.fleet=kh(Vh);let e=t.settings&&t.settings.parked||288;this.parkFleet=kh(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=Vh-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,Mi,Mi,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,Mi,Mi,0,0,-100);let l=Hi(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),i.fillStyle=r,i.fillRect(0,0,32,64),this.beamMat=new Re({map:new Le(n),transparent:!0,blending:pi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new en(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Ce(o,this.beamMat,Vh),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new Kt,this._q=new Ie,this._up=new H(0,1,0),this._p=new H,this._s=new H(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,Mi,Mi,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let i=0;i<6;i++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,M=>M.drivable&&M.cls<=kt.LIVING&&!(M.flags&Ft.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(Hi(this.free[h])==="bus"&&u.cls>kt.TERTIARY&&(h=this.free.findIndex(M=>Hi(M)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],p=(f>0?c.t:1-c.t)*d;if(this.cars.some(M=>Math.hypot(M.x-c.px,M.z-c.pz)<25))continue;let m=this.free.splice(h,1)[0],g=Hi(m),x={slot:m,type:g,box:Bh[g],colour:Math.floor(Math.random()*Jd),wi:c.wi,k:c.k,dir:f,s:p,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(g==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(x),this.cars.push(x),this.place(x,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]);for(let f=e.adjHead[r];f>=0;f=e.adjNext[f]){let d=e.adjWay[f],p=e.adjPos[f],m=e.ways[d];if(!m.drivable||m.cls>kt.LIVING||m.flags&Ft.PRIVATE||t.type==="bus"&&m.cls>kt.UNCLASSIFIED)continue;let g=[];p<m.nodes.length-1&&g.push({wi:d,k:p,dir:1,to:m.nodes[p+1]}),p>0&&!m.oneway&&g.push({wi:d,k:p-1,dir:-1,to:m.nodes[p-1]});for(let x of g){if(x.wi===t.wi&&x.k===t.k&&x.dir===-t.dir)continue;let v=Math.atan2(e.nx[x.to]-e.nx[r],e.nz[x.to]-e.nz[r])-c;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let y=1+Math.max(0,6-m.cls)*.5;Math.abs(v)<.4&&(y*=2.5),Math.abs(v)>2.6&&(y*=.05),l.push({...x,turn:v,wgt:y})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&Ft.ROUNDABOUT&&!(n.flags&Ft.ROUNDABOUT)||n.flags&Ft.LINK&&!(h.flags&Ft.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,i=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,p=(u-l)/h,m=n.laneCenter(i,t.dir),g=a+d*t.s-p*m,x=l+p*t.s+d*m,M=t.dir>0?f:1-f,v=n.heightOn(t.wi,t.k,M,g,x),y=Math.min(1,(t.s+2)/h),_=t.dir>0?y:1-y,w=n.heightOn(t.wi,t.k,_,g+d*(y-f)*h,x+p*(y-f)*h),S=y>f?(w-v)/((y-f)*h):t.slope;t.slope+=(S-t.slope)*Math.min(1,(e||1)*5),t.x=g,t.z=x,t.y=v;let A=Math.atan2(d,p);e===0&&(t.h=A);let b=A-t.h;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;t.h+=b*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),i=Math.hypot(t.slope,1);vi.x=-e*t.slope/i,vi.y=1/i,vi.z=-n*t.slope/i,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let i=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=i.ways[u.wi],[f,d]=this.segEnds(u),m=Math.hypot(i.nx[d]-i.nx[f],i.nz[d]-i.nz[f])-u.s,g=Math.sin(u.h),x=Math.cos(u.h),M=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let D=Math.abs(u.next.turn)>1?5.5:9;M=Math.min(M,Math.sqrt(D*D+2*2.2*Math.max(0,m-3)))}let v=1e9,y=0,_=(D,O,z,q,k,Q)=>{let $=D-u.x,yt=O-u.z,_t=$*g+yt*x;if(_t<=0||_t>60)return;let Dt=Math.abs($*x-yt*g),it=q*g+k*x;if(Dt>(it>.3?2:1.4))return;let j=_t-u.box.halfL-Q-.4;j<v&&(v=j,y=z*Math.max(0,it))};for(let D of this.cars)D!==u&&_(D.x,D.z,D.speed,Math.sin(D.h),Math.cos(D.h),D.box.halfL);e.active!==!1&&_(r,o,c,a,l,2.2);for(let D of this.statics)_(D.x,D.z,0,Math.sin(D.h),Math.cos(D.h),D.box.halfL);for(let D of this.obstacles)_(D[0],D[1],0,0,0,.6);let w=i.ntag[d]===Jt.SIGNALS?d:u.next&&i.ntag[this.nodeAfter(u)]===Jt.SIGNALS&&m<35?-2:-1;if(w!==-1){let D=w===d?m:m+20,O=Math.abs(g)>Math.abs(x)?1:0,z=zr(O,n);if((z==="R"||z==="Y"&&D>14)&&D>1.5){let q=D-3.5-u.box.halfL+2.2;q<v&&(v=Math.max(.1,q),y=0)}}if(u.yield&&m<18&&m>.3){let D=i.nx[d],O=i.nz[d],z=!1,q=(k,Q,$,yt,_t,Dt)=>{if(z||$<1.5||Dt===u.wi)return;let it=D-k,j=O-Q,Mt=Math.hypot(it,j);Mt>10+$*3.2||Mt<.5||(it*yt+j*_t)/Mt<.6||(z=!0)};for(let k of this.cars)k!==u&&q(k.x,k.z,k.speed,Math.sin(k.h),Math.cos(k.h),k.wi);if(e.active!==!1&&q(r,o,c,a,l,e.wi),z){let k=m-2.2-u.box.halfL+2.2;k<v&&(v=Math.max(.1,k),y=0)}}u.bumped>0&&(u.bumped-=t,M=0);let S=u.type==="bus"?1.1:1.6,A=2.4,b=2.2,E=1.25,R=u.speed,L=S*(1-Math.pow(Math.max(0,R)/Math.max(.1,M),4));if(v<1e8){let D=b+R*E+R*(R-y)/(2*Math.sqrt(S*A));L-=S*Math.pow(Math.max(0,D)/Math.max(.3,v),2)}L=Math.max(-9,L),u.speed=Math.max(0,R+L*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let N=0;for(;N++<8;){let[D,O]=this.segEnds(u),z=Math.hypot(i.nx[O]-i.nx[D],i.nz[O]-i.nz[D]);if(u.s<z)break;u.s-=z;let q=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=q.wi,u.k=q.k,u.dir=q.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,i=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=i&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,i=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,p=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>p)continue;let m=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(m+=Math.PI);let g=a(r[l]+7,r[l+1]+13),x=g<.7||h<2.35?"car":g<.9?"wagon":f>=5?"van":"wagon",M=Bh[x],v=Math.sin(m),y=Math.cos(m),_=[i.addCircle(t,c+v*1.1,u+y*1.1,M.halfW-.08),i.addCircle(t,c-v*1.1,u-y*1.1,M.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:m,type:x,box:M,colour:Math.floor(a(r[l]+3,r[l+1]+5)*Jd),taken:!1,objs:_})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let i of this.parkSpots.values())for(let r of i){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}vi.x=0,vi.y=1,vi.z=0;for(let i of Object.keys(n)){let r=n[i].sort((a,l)=>a._d-l._d),o=this.parkPools[i];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],Mi,Mi,0,0,-100)}}}nearestParked(t,e,n){let i=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,i=a)}return i}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,i=null){let r=null,o=(a,l)=>{if(a===i)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let p=-d;p<=d;p++){let m=f*p/d,g=a.x+c*m,x=a.z+u*m,M=t-g,v=e-x,y=Math.hypot(M,v);y<n+h&&(!r||n+h-y>r.depth)&&(r={nx:y>1e-6?M/y:1,nz:y>1e-6?v/y:0,depth:n+h-y,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var Wh=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,i=this.v,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},ka=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,i=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===kt.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&Ft.PRIVATE&&(h=6),l.cls===kt.SERVICE&&(h=l.flags&Ft.AISLE?5:1.8),l.cls===kt.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],p=l.nodes[f+1];if(e.ntag[d]===Jt.GATE||e.ntag[p]===Jt.GATE)continue;let g=(l.cum[f+1]-l.cum[f])/u*h;i.push(d,p,g,c,f),l.oneway||i.push(p,d,g,c,f)}});let r=i.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[i[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[i[l*5]]++;this.eTo[c]=i[l*5+1],this.eCost[c]=i[l*5+2],this.eWay[c]=i[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,i,r){let o=this.R,a=z=>z.drivable&&z.cls!==kt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(i,r,400,a);if(!l||!c)return null;let u=++this.run,h=new Wh,f=Math.sin(n),d=Math.cos(n),p=o.ways[l.wi],m=p.nodes[l.k],g=p.nodes[l.k+1],x=p.cum[l.k+1]-p.cum[l.k],M=Math.max(10,p.limit)/3.6,v=l.dx*f+l.dz*d,y=(z,q)=>{this.stamp[z]!==u&&(this.stamp[z]=u,this.dist[z]=1e18,this.closed[z]=0),q<this.dist[z]&&(this.dist[z]=q,this.prev[z]=-1,this.prevWay[z]=l.wi,h.push(q+this.h(z,i,r),z))},_=25;y(g,(1-l.t)*x/M+(v<0?_:0)),p.oneway||y(m,l.t*x/M+(v>0?_:0));let w=o.ways[c.wi],S=w.nodes[c.k],A=w.nodes[c.k+1],b=new Set([S,A]),E=-1,R=0;for(;h.size;){let z=h.pop();if(this.closed[z])continue;if(this.closed[z]=1,b.has(z)){E=z;break}if(++R>4e5)break;let q=this.dist[z];for(let k=this.eStart[z];k<this.eStart[z+1];k++){let Q=this.eTo[k];this.stamp[Q]!==u&&(this.stamp[Q]=u,this.dist[Q]=1e18,this.closed[Q]=0);let $=q+this.eCost[k];$<this.dist[Q]&&(this.dist[Q]=$,this.prev[Q]=z,this.prevWay[Q]=this.eWay[k],h.push($+this.h(Q,i,r),Q))}}if(E<0)return null;let L=[],N=[];for(let z=E;z>=0;z=this.prev[z])L.push(z),N.push(this.prevWay[z]);L.reverse(),N.reverse();let D=[[l.px,l.pz]];for(let z of L)D.push([o.nx[z],o.nz[z]]);D.push([c.px,c.pz]);let O={pts:D,nodes:L,ways:N,dest:[c.px,c.pz],destRaw:[i,r],time:this.dist[E]};O.cum=[0];for(let z=1;z<D.length;z++)O.cum.push(O.cum[z-1]+Math.hypot(D[z][0]-D[z-1][0],D[z][1]-D[z-1][1]));return O.length=O.cum[O.cum.length-1],O.steps=this.instructions(O),O}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:i,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<i.length-1;){let u=i[c],h=r[c],f=r[c+1],d=e.ways[h].flags&Ft.ROUNDABOUT,p=e.ways[f].flags&Ft.ROUNDABOUT,m=o[c],g=o[c+1],x=o[c+2];if(!d&&p){let R=0,L=c+1;for(;L<i.length-1&&e.ways[r[L+1]].flags&Ft.ROUNDABOUT;)this.hasExit(i[L],r[L])&&R++,L++;R++;let N=L+1<r.length?l(r[L+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:R,name:N,text:`Alla rotatoria prendi la ${R}\xAA uscita`+(N?` verso ${N}`:"")}),c=L+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let M=Math.atan2(g[0]-m[0],g[1]-m[1]),y=Math.atan2(x[0]-g[0],x[1]-g[1])-M;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;let _=y*180/Math.PI,w=l(h),S=l(f),A=S!==w;if(Math.abs(_)<25&&!A){c++;continue}if(Math.abs(_)<25&&A&&!this.realChoice(u,h)){c++;continue}let b,E;Math.abs(_)<25?(b="straight",E="Prosegui dritto"):_>=25&&_<55?(b="slight-left",E="Tieni la sinistra"):_>=55&&_<150?(b="left",E="Svolta a sinistra"):_<=-25&&_>-55?(b="slight-right",E="Tieni la destra"):_<=-55&&_>-150?(b="right",E="Svolta a destra"):(b="uturn",E="Fai inversione a U"),S&&(E+=(b==="straight"?" su ":" in ")+S),n.push({i:c,d:a[c+1],type:b,name:S,text:E}),c++}return n.push({i:i.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let i=n.adjHead[t];i>=0;i=n.adjNext[i]){let r=n.ways[n.adjWay[i]];if(!(r.flags&Ft.ROUNDABOUT)&&r.drivable&&r.cls<kt.SERVICE+1){let o=n.adjPos[i];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,i=0;for(let r=n.adjHead[t];r>=0;r=n.adjNext[r])n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=kt.LIVING&&i++;return i>=2}};function Qd(s,t,e){let{pts:n,cum:i}=s,r=1e9,o=0,a=0,l=Math.max(0,(s._lastI||0)-30),c=Math.min(n.length-1,(s._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,p=n[u+1][1]-f,m=d*d+p*p||1e-9,g=((t-h)*d+(e-f)*p)/m;g=Math.max(0,Math.min(1,g));let x=Math.hypot(t-h-d*g,e-f-p*g);x<r&&(r=x,o=i[u]+Math.sqrt(m)*g,a=u)}return s._lastI=a,{off:r,s:o,i:a}}var Av=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],Rv=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],Cv={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},Ha=class{constructor(t,e,n){this.world=t,this.R=t.roads,this.N=n,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.N.ways.forEach((i,r)=>{i.cls<=kt.TERTIARY&&i.drivable&&this.major.push(r)}),this.waters=e.waters,this.comuni=e.comuni.map(i=>{let r=null,o=0;for(let a of i.rings){let l=0,c=0,u=0;for(let h=0;h<a.length;h++){let f=(h+1)%a.length,d=a[h][0]*a[f][1]-a[f][0]*a[h][1];l+=d,c+=(a[h][0]+a[f][0])*d,u+=(a[h][1]+a[f][1])*d}Math.abs(l)>o&&(o=Math.abs(l),r=[c/(3*l),u/(3*l)])}return{...i,label:r}}),this.night=!1}drawMini(t,e,n){let i=this.mini,r=this.miniCtx,o=i.width,a=i.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,i,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>i+3e3||Math.abs(a[0][1]-n)>i+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,i,r,o,a){let l=a?this.N:this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,i,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=kt.SERVICE||c[d.cls].push(h*16384+f)});let u=o?Rv:Av;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let p=[12,11,9,8,7,6,6,5,4,3,5][f],m=Math.max(a?1:1.6,p*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(m+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=m/r),!(h===0&&f>=kt.SERVICE)){t.beginPath();for(let g of d){let x=Math.floor((g+1)/16384),M=g-x*16384,v=l.ways[x];if(M<0)for(let y=0;y<v.nodes.length;y++){let _=v.nodes[y];y?t.lineTo(l.nx[_],l.nz[_]):t.moveTo(l.nx[_],l.nz[_])}else{let y=v.nodes[M],_=v.nodes[M+1];t.moveTo(l.nx[y],l.nz[y]),t.lineTo(l.nx[_],l.nz[_])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,i){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);i?t.moveTo(i.x,i.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let i=this.big,r=this.bigCtx,o=i.width,a=i.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((p,m)=>m?r.lineTo(p[0],p[1]):r.moveTo(p[0],p[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.N.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(Cv[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,p]=this.toScreen(h.label[0],h.label[1]);d<-100||p<-50||d>o+100||p>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,p),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,p))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var Ga=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(i=>{let r=e.createOscillator();return r.type="square",r.frequency.value=i,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,i){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+i*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+i*1500,r,.1)}};function Wa(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var Wr=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],Va=(s,t,e)=>s<t?t:s>e?e:s;function qh({facing:s,scale:t,x:e,z:n,travelX:i,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=Va((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),p=1.1+4.9*h,m=(.6+1.6*h)*(.4+u()*.6),g=2.2+5*h,x=-r,M=i,v={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:i*d+o*m,vz:r*d+a*m,vy:p,qx:0,qy:Math.sin(s/2),qz:0,qw:Math.cos(s/2),wx:x*g,wy:(u()-.5)*(1.5+5*h),wz:M*g,col:new Float64Array(9),pose:c?{...c}:Wa(),vel:Wa(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:s,lieSign:u()<.5?1:-1,done:!1,rand:u};Xa(v);let y=5+13*h;for(let[_]of Wr)v.vel[_]=(u()-.5)*y;return v}function Xa(s){let{qx:t,qy:e,qz:n,qw:i}=s,r=s.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}var Xh=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function Yh(s,t){if(s.t+=t,s.phase==="rise"){Lv(s,t);return}s.vy-=11.5*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t;let{wx:e,wy:n,wz:i,qx:r,qy:o,qz:a,qw:l}=s,c=t*.5,u=r+c*(e*l+n*a-i*o),h=o+c*(n*l+i*r-e*a),f=a+c*(i*l+e*o-n*r),d=l-c*(e*r+n*o+i*a),p=1/(Math.hypot(u,h,f,d)||1);s.qx=u*p,s.qy=h*p,s.qz=f*p,s.qw=d*p,Xa(s);let m=s.col,g=!1;for(let v=0;v<Xh.length;v++){let y=Xh[v][0]*s.scale,_=m[3]*y,w=m[4]*y,S=m[5]*y,A=Xh[v][1]*s.scale-(s.y+w);if(A<=0)continue;g=!0,s.y+=A*.55;let b=s.vx+(s.wy*S-s.wz*w),E=s.vy+(s.wz*_-s.wx*S),R=s.vz+(s.wx*w-s.wy*_);if(E>=0)continue;let L=(_*_+S*S)/.16,N=-(1+.17)*E/(1+L);s.vy+=N,s.wx+=-S*N/.16,s.wz+=_*N/.16;let D=Math.hypot(b,R);if(D>1e-4){let O=Math.min(.55*N,D),z=-b/D*O,q=-R/D*O;s.vx+=z,s.vz+=q,s.wy+=(S*z-_*q)/.16*.5}if(N>.9&&s.bumps++,N>.6){let O=Math.min(9,N*2.4);for(let[z]of Wr)s.vel[z]+=(s.rand()-.5)*O}}if(g){s.grounded+=t;let v=Math.exp(-3.2*t);s.wx*=v,s.wy*=v,s.wz*=v,s.vx*=Math.exp(-1.9*t),s.vz*=Math.exp(-1.9*t)}else s.airborne+=t,s.grounded=0;Pv(s,t);let x=Math.hypot(s.wx,s.wy,s.wz),M=Math.hypot(s.vx,s.vy,s.vz);if(s.phase==="air"&&g&&s.grounded>.12&&x<1.1&&M<.7){s.phase="down",s.settleFor=0;let v=m[6],y=m[8];v*v+y*y<.04&&(v=m[3],y=m[5]),s.yawOut=Math.atan2(v,y)}if(s.phase==="down"){if(s.settleFor+=t,s.settleFor<.45){let v=Math.min(1,t*7);Iv(s,v),Xa(s)}s.vx*=Math.exp(-5*t),s.vz*=Math.exp(-5*t),s.wx*=Math.exp(-6*t),s.wy*=Math.exp(-6*t),s.wz*=Math.exp(-6*t),s.settleFor>s.restFor+.45&&(s.phase="rise",s.riseT=0,s.riseFrom={qx:s.qx,qy:s.qy,qz:s.qz,qw:s.qw,y:s.y,pose:{...s.pose}})}}function Iv(s,t){let e=s.yawOut/2,n=Math.sin(e),i=Math.cos(e),r=s.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=i*r,l=n*o,c=-n*r,u=i*o,h=s.qx*a+s.qy*l+s.qz*c+s.qw*u,f=a,d=l,p=c,m=u;h<0&&(f=-f,d=-d,p=-p,m=-m),s.qx+=(f-s.qx)*t,s.qy+=(d-s.qy)*t,s.qz+=(p-s.qz)*t,s.qw+=(m-s.qw)*t;let g=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=g,s.qy*=g,s.qz*=g,s.qw*=g}function Pv(s,t){let e=s.col,n=-e[1],i=-e[4],r=-e[7],o=Math.asin(Va(n,-1,1)),a=Math.atan2(-r,-i),l=s.pose,c=s.vel,u=s.phase==="down"?1:0;for(let h=0;h<Wr.length;h++){let f=Wr[h],d=f[0],p=f[1],m=f[2],g=f[6],x=f[3]*(1+u*.6),M=f[4]*(1+u*1.4),v=f[5],y=v==="swing"?Va(a+g,p,m):v==="lean"?Va(o+g,p,m):v==="slack"?g:0,_=c[d]+(x*(y-l[d])-M*c[d])*t,w=l[d]+_*t;w<p?(w=p,_*=-.18):w>m&&(w=m,_*=-.18),c[d]=_,l[d]=w}}function Lv(s,t){s.riseT+=t;let e=Math.min(1,s.riseT/s.riseFor),n=s.riseFrom,i=e*e*(3-2*e),r=s.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;s.qx=n.qx+(h*o-n.qx)*i,s.qy=n.qy+(h*a-n.qy)*i,s.qz=n.qz+(h*l-n.qz)*i,s.qw=n.qw+(h*c-n.qw)*i;let f=1/(Math.hypot(s.qx,s.qy,s.qz,s.qw)||1);s.qx*=f,s.qy*=f,s.qz*=f,s.qw*=f,Xa(s);let d=.46*s.hipRest;s.y=e<.5?n.y+(d-n.y)*tp(e/.5):d+(s.hipRest-d)*tp((e-.5)/.5);let p=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[m]of Wr){let g=n.pose[m],x=0;m==="kneeL"||m==="kneeR"?x=p:m==="hipLs"||m==="hipRs"?x=-p*.75:m==="spine"?x=-.35*(1-i):m==="shLz"?x=.18:m==="shRz"&&(x=-.18),s.pose[m]=g+(x-g)*i,s.vel[m]=0}e>=1&&(s.done=!0)}var tp=s=>s*s*(3-2*s);var Dv=[12999502,5144518,5873770,13018190,9068230,5155270],Nv=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],Uv=.34,ep=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function np(s){return(.2126*(s>>16&255)+.7152*(s>>8&255)+.0722*(s&255))/255}var zv=.15,Fv=[15782580,15254430,14132856,12091218,9263675,6307884],Bv=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],Ov=[9187114,2903932,1907999,4156229,11576460,7166860],ip=[1710620,2565160,3813160,4539722],kv=[3881528,5916214,3095882,7037527,8011578],Hv=.34,Gv=1.75;var Hs=.43,Gs=.42,Zh=.058,Vv=.085,Wv=.092,sp=.372,Xv=.44,qv=.196,$h=.3,jh=.265,R_=Hs+Gs+Zh;function Yv(s){let t=s()<.5,e=t?1.58+s()*.16:1.7+s()*.18;return{female:t,scale:e/Gv,shoulder:t?.88+s()*.07:1+s()*.11,depth:.92+s()*.26,hipW:t?1.04+s()*.1:.94+s()*.08,limb:(t?.9:1)+s()*.14}}function Zv(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Cn(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of s){n.set(c.attributes.position.array,o*3),i.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new ee;return l.setAttribute("position",new ue(n,3)),l.setAttribute("normal",new ue(i,3)),l.setIndex(new ue(r,1)),l.computeVertexNormals(),l}function qa(s,t,e,n=6){let i=new te(s,t,e,n,1,!1);return i.translate(0,-e/2,0),i}function Ya(s,t=6,e=4){return new pn(s,t,e)}function Xr(s,t,e){return new Ot(s,t,e)}function $v(){let s=Ya(.1,9,6);s.scale(.84,1.13,1.16),s.translate(0,.176,.008);let t=Xr(.102,.072,.112);t.translate(0,.12,.04);let e=new te(.05,.058,.09,6);e.translate(0,.045,-.008);let n=Xr(.024,.028,.034);n.translate(0,.158,.122);let i=Cn([e,t,s,n]),r=new pn(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=Cn([r]),a=Xr(.175,.22,.062);a.translate(0,.005,-.062);let l=Cn([a]),c=A=>{let b=new la(A.map(([E,R])=>new St(E,R)),8);return b.scale(1,1,.66),b},u=Cn([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=Cn([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=Cn([Ya(.049),qa(.047,.04,$h)]),p=qa(.037,.031,jh+f);p.translate(0,f,0);let m=Ya(.044,5,4);m.scale(.85,1.25,.62),m.translate(0,-jh-.035,0);let g=Cn([p,m]),x=Cn([Ya(.086),qa(.082,.06,Hs)]),M=qa(.057,.043,Gs+.06);M.translate(0,.06,0);let v=Cn([M]),y=Xr(.088,.055,.235);y.translate(0,-.03,.052);let _=Cn([y]),w=Xr(.24,.28,.13);w.translate(0,-.15,0);let S=Cn([w]);return{head:i,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:g,thigh:x,shin:v,foot:_,bag:S}}function jv(s,t,e,n,i,r,o){let a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,p=0,m=-l,g=l*u,x=c,M=a*u,v=l*c,y=-u,_=a*c;s[0]=d*h+g*f,s[1]=p*h+x*f,s[2]=m*h+M*f,s[3]=-d*f+g*h,s[4]=-p*f+x*h,s[5]=-m*f+M*h,s[6]=v,s[7]=y,s[8]=_,s[9]=t,s[10]=e,s[11]=n}function Kv(s,t,e,n,i){s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=e,s[10]=n,s[11]=i}function ks(s,t,e,n,i,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];s[9]=t[9]+l*e+h*n+p*i,s[10]=t[10]+c*e+f*n+m*i,s[11]=t[11]+u*e+d*n+g*i;let x=Math.cos(a),M=Math.sin(a),v=Math.cos(r),y=Math.sin(r),_=Math.cos(o),w=Math.sin(o),S=x,A=-M,b=M*y,E=v,R=x*y,L=S*_+b*w,N=E*w,D=A*_+R*w,O=-S*w+b*_,z=E*_,q=-A*w+R*_,k=M*v,Q=-y,$=x*v;s[0]=l*L+h*N+p*D,s[1]=c*L+f*N+m*D,s[2]=u*L+d*N+g*D,s[3]=l*O+h*z+p*q,s[4]=c*O+f*z+m*q,s[5]=u*O+d*z+g*q,s[6]=l*k+h*Q+p*$,s[7]=c*k+f*Q+m*$,s[8]=u*k+d*Q+g*$}function Vi(s,t,e,n){let i=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];s[9]=t[9]+a*e,s[10]=t[10]+l*e,s[11]=t[11]+c*e;let d=Math.cos(n),p=Math.sin(n);s[0]=i,s[1]=r,s[2]=o,s[3]=a*d+u*p,s[4]=l*d+h*p,s[5]=c*d+f*p,s[6]=-a*p+u*d,s[7]=-l*p+h*d,s[8]=-c*p+f*d}function qe(s,t,e,n,i,r){let o=s.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*i,o[a+5]=e[4]*i,o[a+6]=e[5]*i,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function Za(s,t){let e=s.instanceMatrix.array,n=t*16;for(let i=0;i<16;i++)e[n+i]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var rp=(s,t,e)=>s<t?t:s>e?e:s;function op(s,t=20260919){let e=Zv(t),n=$v(),i=new Ht,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let v of o)r[v]=new Ce(n[a[v]],i,s);let l=o.map(v=>r[v]),c=new $t;for(let v of l)v.instanceMatrix.setUsage(qf),v.frustumCulled=!1,c.add(v);for(let v of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])v.castShadow=!0;let u=new Lt,h=v=>v[e()*v.length|0],f=[];for(let v=0;v<s;v++){let y=Yv(e),_={phase:e()*Math.PI*2,build:y,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<Hv,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:Wa(),rag:null};f.push(_);let w=e()<Uv,S=h(w?Dv:Nv),A=h(ep);for(let D=0;D<10&&Math.abs(np(A)-np(S))<zv;D++)A=h(ep);let b=h(Fv),E=e()<.1,R=e()<.14;_.longHair=!E&&!R&&e()<.34,_.bald=E,_.hatted=R;let L=e()<.45?S:b;r.chest.setColorAt(v,u.setHex(S)),r.armL.setColorAt(v,u.setHex(S)),r.armR.setColorAt(v,u.setHex(S)),r.foreL.setColorAt(v,u.setHex(L)),r.foreR.setColorAt(v,u.setHex(L)),r.head.setColorAt(v,u.setHex(b)),r.pelvis.setColorAt(v,u.setHex(A)),r.thighL.setColorAt(v,u.setHex(A)),r.thighR.setColorAt(v,u.setHex(A)),r.shinL.setColorAt(v,u.setHex(A)),r.shinR.setColorAt(v,u.setHex(A)),r.footL.setColorAt(v,u.setHex(h(ip))),r.footR.setColorAt(v,u.setHex(h(ip)));let N=h(R?Ov:Bv);r.hair.setColorAt(v,u.setHex(N)),r.hairLong.setColorAt(v,u.setHex(N)),r.bag.setColorAt(v,u.setHex(h(kv)))}for(let v of l)v.instanceColor&&(v.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function p(v){return .2+.26*Math.min(1.7,v.gait)}function m(v,y,_){let w=v.phase,S=Math.sin(w),A=Math.cos(w),b=p(v)*(v.idle>0?0:1),E=Math.max(0,v.gait-1),R=b*S,L=-b*S;y.hipLs=R,y.hipRs=L,y.kneeL=g(w,b,E),y.kneeR=g(w+Math.PI,b,E);let N=.62,D=.38,O=-(R+y.kneeL),z=-(L+y.kneeR);y.ankL=rp(O+N*Math.max(0,S)**1.4-D*Math.max(0,-S)**1.6,-1.05,.4),y.ankR=rp(z+N*Math.max(0,-S)**1.4-D*Math.max(0,S)**1.6,-1.05,.4),y.hipLz=.02,y.hipRz=-.02;let q=-R*.62*v.swagger*(1+E*.5);y.shLs=q,y.shRs=-q;let k=.11+(v.build.shoulder-.95)*.35+E*.06;y.shLz=k,y.shRz=-k,y.elbL=.34+2.05*Math.max(0,-q)-.18*Math.max(0,q)+E*.55,y.elbR=.34+2.05*Math.max(0,q)-.18*Math.max(0,-q)+E*.55,v.bag&&(v.bagSide>0?(y.shLs*=.25,y.elbL=.32,y.shLz=k*1.5):(y.shRs*=.25,y.elbR=.32,y.shRz=-k*1.5)),y.twist=-.26*S*(1+E*.4),y.spine=-.02+.03*Math.abs(A)+Math.sin(_*1.6+v.phase*.1)*.012,y.spineZ=.035*A,y.headZ=-y.spineZ*.8,y.neck=.13-y.spine*.5}function g(v,y,_){let w=Math.max(0,-Math.cos(v)),S=Math.max(0,Math.sin(v));return .08+(2.1+_*1.4)*y*w**1.15+(.75+_)*y*S**2}function x(v,y){let _=.062*Math.max(0,-v.ankL),w=.062*Math.max(0,-v.ankR),S=Hs*Math.cos(v.hipLs)+Gs*Math.cos(v.hipLs+v.kneeL)+Zh+_,A=Hs*Math.cos(v.hipRs)+Gs*Math.cos(v.hipRs+v.kneeR)+Zh+w;return Math.max(S,A)*y}function M(v,y,_){let w=y.build,S=w.scale,A=w.limb*S,b=d.root;ks(d.chest,b,0,Wv*S,0,_.spine,_.spineZ,_.twist),ks(d.head,d.chest,0,Xv*S,0,_.neck,_.headZ,_.headYaw);let E=qv*w.shoulder*S;ks(d.armL,d.chest,E,sp*S,0,_.shLs,_.shLz,0),ks(d.armR,d.chest,-E,sp*S,0,_.shRs,_.shRz,0),Vi(d.foreL,d.armL,-$h*S,-_.elbL),Vi(d.foreR,d.armR,-$h*S,-_.elbR);let R=Vv*w.hipW*S;if(ks(d.thighL,b,R,0,0,_.hipLs,_.hipLz,0),ks(d.thighR,b,-R,0,0,_.hipRs,_.hipRz,0),Vi(d.shinL,d.thighL,-Hs*S,_.kneeL),Vi(d.shinR,d.thighR,-Hs*S,_.kneeR),Vi(d.footL,d.shinL,-Gs*S,_.ankL),Vi(d.footR,d.shinR,-Gs*S,_.ankR),qe(r.pelvis,v,b,S*w.hipW,S,S*w.depth),qe(r.chest,v,d.chest,S*w.shoulder,S,S*w.depth),qe(r.head,v,d.head,S,S,S),y.bald?Za(r.hair,v):qe(r.hair,v,d.head,S*(y.hatted?1.1:1),S*(y.hatted?1.12:1),S*(y.hatted?1.1:1)),y.longHair?qe(r.hairLong,v,d.head,S,S,S):Za(r.hairLong,v),qe(r.armL,v,d.armL,A,S,A),qe(r.armR,v,d.armR,A,S,A),qe(r.foreL,v,d.foreL,A,S,A),qe(r.foreR,v,d.foreR,A,S,A),qe(r.thighL,v,d.thighL,A,S,A),qe(r.thighR,v,d.thighR,A,S,A),qe(r.shinL,v,d.shinL,A,S,A),qe(r.shinR,v,d.shinR,A,S,A),qe(r.footL,v,d.footL,A,S,A),qe(r.footR,v,d.footR,A,S,A),y.bag){let L=y.bagSide>0?d.foreL:d.foreR,N=y.bagSide>0?_.elbL:_.elbR;Vi(d.bag,L,-(jh+.05)*S,N*.5),qe(r.bag,v,d.bag,S,S,S)}else Za(r.bag,v)}return{group:c,people:f,rand:e,count:s,drawWalking(v,y,_,w,S,A){let b=f[v],E=b.build.scale;m(b,b.pose,A),jv(d.root,y,_+x(b.pose,E),w,S+.12*Math.sin(b.phase)*(b.idle>0?0:1),b.lean+.12*Math.max(0,b.gait-1),.022*Math.cos(b.phase)),M(v,b,b.pose)},drawRagdoll(v,y,_){Kv(d.root,y.col,y.x,_+y.y,y.z),M(v,f[v],y.pose)},hideAt(v){for(let y of l)Za(y,v)},commit(){for(let v of l)v.instanceMatrix.needsUpdate=!0}}}var Vs=90,Kh=s=>s.cls>=kt.PRIMARY&&!(s.flags&(Ft.LINK|Ft.TUNNEL|Ft.PRIVATE))&&s.cls!==kt.TRACK,$a=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=op(Vs),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<Vs;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=Vs-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(Vs,t)}latTarget(t,e){return t.flags&Ft.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let i=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=i.nearest(c,u,45,Kh);if(!h)continue;let f=i.ways[h.wi];if(f.cls<=kt.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let i=this.R,r=i.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=i.nx[o],c=i.nz[o],u=i.nx[a],h=i.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,p=(h-c)/f,m=t.dir>0?t.s:f-t.s,g=l+d*m-p*t.lat,x=c+p*m+d*t.lat,M=n?1:Math.min(1,e*5),v=t.x,y=t.z;t.x+=(g-t.x)*M,t.z+=(x-t.z)*M;let _=t.x-v,w=t.z-y;if(n)t.h=Math.atan2(d*t.dir,p*t.dir);else if(_*_+w*w>1e-7){let b=Math.atan2(_,w)-t.h;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;t.h+=b*Math.min(1,e*8)}let S=Math.abs(t.lat)<r.width/2+.2;t.onRoad=S&&!(r.flags&Ft.NOCAR);let A=Math.min(1,Math.max(0,m/f));t.y=S?i.heightOn(t.wi,t.k,A,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[i,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===Jt.CROSSING||e.ntag[r]===Jt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&Ft.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[i],e.nz[r]-e.nz[i]),l=[];for(let M=e.adjHead[r];M>=0;M=e.adjNext[M]){let v=e.adjWay[M],y=e.adjPos[M],_=e.ways[v];if(!(!Kh(_)||_.cls<=kt.SECONDARY&&_.limit>50))for(let[w,S,A]of[[y,1,_.nodes[y+1]],[y-1,-1,_.nodes[y-1]]]){if(A===void 0||v===t.wi&&w===t.k)continue;let b=Math.atan2(e.nx[A]-e.nx[r],e.nz[A]-e.nz[r])-a;for(;b>Math.PI;)b-=2*Math.PI;for(;b<-Math.PI;)b+=2*Math.PI;l.push({wi:v,k:w,dir:S,wgt:(Math.abs(b)<.5?3:Math.abs(b)>2.6?.1:1)*(_.flags&Ft.NOCAR?2.5:1)*(_.cls>=kt.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((M,v)=>M+v.wgt,0),u=l[l.length-1];for(let M of l)if(c-=M.wgt,c<=0){u=M;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],p=e.nx[d]-e.nx[f],m=e.nz[d]-e.nz[f],g=Math.hypot(p,m)||1,x=((t.x-e.nx[f])*-m+(t.z-e.nz[f])*p)/g;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=x>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,x))}update(t,e,n,i,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<Vs;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<Vs;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){Yh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let _=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,_),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,p=null;for(let _ of i){let w=h.x-_.x,S=h.z-_.z,A=w*w+S*S;if(A>900)continue;let b=Math.hypot(_.vx,_.vz),E=Math.sin(_.h),R=Math.cos(_.h),L=w*E+S*R,N=w*R-S*E;if(Math.abs(L)<_.halfL+.25&&Math.abs(N)<_.halfW+.25)b>1.6?p=_:(h.x+=(N>=0?R:-R)*.05,h.z+=(N>=0?-E:E)*.05);else if(b>2.5){let D=_.vx/b,O=_.vz/b,z=w*D+S*O,q=Math.abs(w*O-S*D);z>0&&z<4+b*1.4&&q<_.halfW+1.3&&(d=!0,h.fleeSide=w*O-S*D>=0?1:-1,h.fdx=O*h.fleeSide,h.fdz=-D*h.fleeSide)}if(r&&_.player&&A<400){let D=Math.max(b,1);(w*(_.vx||E)+S*(_.vz||R))/D>-2&&(d=!0,h.fdx=N>=0?R:-R,h.fdz=N>=0?-E:E)}}if(p){let _=Math.hypot(p.vx,p.vz),w=p.vx/_,S=p.vz/_,A=h.x-p.x,b=h.z-p.z,E=Math.hypot(A,b)||1;h.rag=qh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:w,travelZ:S,awayX:A/E,awayZ:b/E,speed:_,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,_,p),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let m=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let _=this.world.collision.resolveCircle(h.x,h.z,.3);_&&(h.x+=_.nx*_.depth,h.z+=_.nz*_.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let g=this.latTarget(f,h.side);if(h.wait>0){let _=!1;for(let w of i){let S=Math.hypot(w.vx,w.vz);if(S<1.5)continue;let A=h.x-w.x,b=h.z-w.z,E=Math.hypot(A,b);E<12+S*3&&(A*w.vx+b*w.vz)/(E*S)>.5&&(_=!0)}h.wait+=t,!_||h.wait>9?h.wait=0:m=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,g-h.lat)));let x=Math.abs(g-h.lat)>.3,M=x?m*.25:m;h.gait+=((m>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=M*t;let v=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(M,x&&m>0?1.2:0)/Math.max(.25,v);let y=0;for(;y++<6;){let[_,w]=this.ends(h),S=Math.hypot(o.nx[w]-o.nx[_],o.nz[w]-o.nz[_]);if(h.s<S)break;h.s-=S,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,i,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,i,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,Kh);if(!n){t.alive=!1;return}let i=e.ways[n.wi],r=i.cum[n.k+1]-i.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(i=>i.alive&&!i.rag&&Math.hypot(i.x-t,i.z-e)<n)}};var ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jv=new Ts(-1,1,1,-1,0,1),Jh=class extends ee{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},Qv=new Jh,_i=class{constructor(t){this._mesh=new Rt(Qv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ka=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yi.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _i(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qr=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ja=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Qa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ka(ja),this.copyPass.material.blending=Un,this.clock=new ma}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?n=!0:o instanceof Ja&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tl=class extends ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var ap={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ws=class s extends ln{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new $e(r,o,{type:Tn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new $e(r,o,{type:Tn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ap;this.highPassUniforms=yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new St(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ja;this.copyUniforms=yi.clone(u.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:pi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new Re,this.fsQuad=new _i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ws.BlurDirectionX=new St(1,0);Ws.BlurDirectionY=new St(0,1);var lp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var el=class extends ln{constructor(){super();let t=lp;this.uniforms=yi.clone(t.uniforms),this.material=new ca({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_h&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xt=s=>document.getElementById(s),Hn={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132,farKm:0},mid:{viewTiles:2,shadows:!0,softShadows:!1,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288,farKm:5,detailKm:1.5},high:{viewTiles:3,shadows:!0,softShadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432,farKm:7,detailKm:2.2}},T={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},jr=()=>T.foot.on?T.foot:T.vehicle;window.BDS=T;window.BDS_LOAD=Bi;new URLSearchParams(location.search).get("auto")==="0"&&(T.autoOff=!0);var Wi={stage:"",t0:performance.now(),timer:0};function cp(){let s=Math.round((performance.now()-Wi.t0)/1e3),t="";s>=25&&(t=" \u2014 sui computer meno potenti pu\xF2 servire fino a un minuto; chiudi le altre schede del browser"),xt("loadmsg").textContent=Wi.stage+(s>=3?` (${s} s)`:"")+t}function xp(s){clearInterval(Wi.timer),console.error(s);let t=navigator.userAgent.match(/(Edg|Chrome|Firefox|Safari)\/[\d.]+/);xt("loadmsg").textContent=`Errore durante "${Wi.stage}": ${s&&s.message?s.message:s} \u2014 browser: ${t?t[0]:navigator.userAgent}. Usa Chrome, Edge o Firefox aggiornati su computer.`,xt("loadmsg").style.color="#ff8a7a"}addEventListener("error",s=>{(!T.meta||!T.router)&&xp(s.error||s.message)});async function tM(){let s=()=>new Promise(l=>setTimeout(l,30)),t=(l,c)=>{xt("loadbar").style.width=(l*100).toFixed(0)+"%",c&&(Wi.stage=c,cp())};Wi.timer=setInterval(cp,1e3),t(.03,"Caricamento della cartografia reale");let e=0,n=[["meta","data/meta.js"],["overview","data/overview.js"],["net","data/net.js"]],i=await Promise.all(n.map(([l,c])=>Bi(l,c).then(u=>(e++,t(.03+e/3*.5,`Caricamento della cartografia reale: ${e} di 3 file`),u)))),[r,o,a]=i;if(!r.stream)throw new Error("dati nel vecchio formato: rigenerali con tools/run_pipeline.sh");T.meta=r,T.proj=new wa(r.proj),t(.6,"Panoramica del terreno"),await s(),T.terrain=new Ea(r,o),await T.terrain.init(),T.roads=new Dr(r,T.terrain),t(.75,`Rete del navigatore (${(a.w.length/12).toLocaleString("it")} strade)`),await s(),T.net=new Dr(r,null,128),T.net.addNav(a),t(.9,"Preparazione del navigatore"),await s(),T.router=new ka(T.net),t(1,"Pronto"),clearInterval(Wi.timer),xt("loading").classList.add("hidden"),ru()}function eM(s,t){let e=T.net,n=e.streets.get(s)||[],i=null;for(let r of n){let o=T.world.comuneAt(r.x,r.z);t&&o!==t||(!i||r.len>i.len)&&(i=r)}return i}var il={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function nM(){let s=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(s.get("lat")||t.lat||0),n=+(s.get("lon")||t.lon||0);return e&&n?(T.pickedStart=T.proj.fromLatLon(e,n),"picked"):null}function iM(){let s=T.meta,t=[];t.push({id:"casa",label:il.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of s.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=s.comuni.map(n=>n.n).filter(n=>!s.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function ru(){let s=xt("menu");if(T.padUI||(T.padUI=!0,xM()),s.classList.remove("hidden"),T.meta.dbgt&&T.meta.dbgt.length&&!xt("dbgtcredit")){let n=document.createElement("div");n.id="dbgtcredit",n.textContent=`Forme e altezze degli edifici${T.meta.height.step<20?" e altimetria di dettaglio":""}: DBGT \u2013 Database Geo-Topografico di Regione Lombardia (${T.meta.dbgt.join(", ")}).`,document.querySelector("#menu .credits").appendChild(n)}let t=xt("cars");t.innerHTML="",Fs.forEach((n,i)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(i===T.carIdx?" sel":"");let o=n.kind==="plane"?`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>apertura ${n.W} m</span><span>decollo ~${Math.round(n.vRot*3.6)} km/h</span>`:`<span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span>`;r.innerHTML=`<div class="sw" style="background:${n.kind==="plane"?n.stripe:n.color}"></div><b>${n.kind==="plane"?"\u2708 ":""}${n.name}</b><small>${n.desc}</small>
      <div class="spec">${o}</div>`,r.onclick=()=>{T.carIdx=i,[...t.children].forEach(a=>a.classList.toggle("sel",a===r))},t.appendChild(r)});let e=xt("start");e.innerHTML="";for(let n of iM()){let i=document.createElement("option");i.value=n.id,i.textContent=n.label,e.appendChild(i)}if(T.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}xt("go").onclick=()=>cM(),xt("pickstart").onclick=()=>{yp(),_p("start")}}function yp(){if(T.renderer)return;let s=xt("game"),t=Hn[xt("quality").value]||Hn.mid;T.settings={...t};let e=new Zo({canvas:s,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=t.softShadows?gh:ga,e.toneMapping=Cr,e.toneMappingExposure=1.2,T.renderer=e;let n=new jo;T.scene=n,T.camera=new He(62,innerWidth/innerHeight,.5,5e3),T.sky=new Na(n,T.meta.proj.lat0),T.world=new Da(n,T.meta,T.terrain,T.roads,T.settings),T.traffic=new Oa(T.world),T.world.traffic=T.traffic,n.add(T.traffic.group),T.peds=new $a(T.world),T.peds.setTarget(t.peds),T.peds.onHit=(r,o,a)=>{a.player&&iu("ped",o)},n.add(T.peds.group),t.bloom&&(T.composer=new Qa(e),T.composer.addPass(new tl(n,T.camera)),T.bloom=new Ws(new St(innerWidth,innerHeight),0,.4,.82),T.composer.addPass(T.bloom),T.composer.addPass(new el));let i=null;s.addEventListener("mousedown",r=>{i=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{i=null}),addEventListener("mousemove",r=>{!i||T.mapOpen||T.paused||!T.started||(T.orbit.yaw-=(r.clientX-i[0])*.006,T.orbit.pitch=Math.max(-.25,Math.min(1.1,T.orbit.pitch+(r.clientY-i[1])*.004)),T.orbit.idle=0,i=[r.clientX,r.clientY])}),T.maps=new Ha(T.world,T.meta,T.net),T.input=T.input||new Os,T.audio=new Ga,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),T.composer&&T.composer.setSize(innerWidth,innerHeight),T.camera.aspect=innerWidth/innerHeight,T.camera.updateProjectionMatrix(),T.mapOpen&&(T.maps.resizeBig(),T.mapDirty=!0)}),mM(),yM(),requestAnimationFrame(wp)}function rl(s){let t=T.net,e=T.world,n=(i,r,o=!1)=>{let a=t.ways[i],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let p=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,m=t.laneCenter(a,p?1:-1);return{x:l-Math.cos(d)*m,z:c+Math.sin(d)*m,h:d}};if(s==="picked"&&T.pickedStart){let i=t.nearest(T.pickedStart[0],T.pickedStart[1],300,r=>r.drivable&&r.cls<=kt.SERVICE);if(i)return n(i.wi,(t.ways[i.wi].cum[i.k]+(t.ways[i.wi].cum[i.k+1]-t.ways[i.wi].cum[i.k])*i.t)/t.ways[i.wi].len)}if(s==="casa"){if(nM()==="picked")return rl("picked");let i=-1;if(t.ways.forEach((r,o)=>{if(r.name!==il.street||!r.drivable||r.cls>kt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===il.comune&&(i<0||r.len>t.ways[i].len)&&(i=o)}),i>=0)return n(i,il.frac);s="comune:Giussano"}if(s==="viamilano"){let i=eM("Via Milano","Giussano");if(i)return n(i.wi,.35,!0);s="comune:Giussano"}if(s.startsWith("comune:")){let i=s.slice(7),r=T.meta.places.find(c=>c.n===i&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=T.maps.comuni.find(u=>u.n===i);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=kt.RESIDENTIAL&&c.cls>=kt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function vp(s=Fs[T.carIdx],t=null){T.carModel&&T.scene.remove(T.carModel.root),s.kind==="plane"?(T.vehicle=new Fa(s,T.world),T.carModel=Xd(s,{color:t})):(T.vehicle=new Ba(s,T.world),T.carModel=Zd(s,{interior:!0,color:t})),T.scene.add(T.carModel.root),T.lightsOn=!1,xt("helpbar").textContent=s.kind==="plane"?"W/S manetta \xB7 \u2191/\u2193 cabra/picchia \xB7 A/D vira \xB7 Spazio freni a terra \xB7 R riparti in volo \xB7 C visuale \xB7 F scendi (a terra)":"F scendi/sali \xB7 E clacson \xB7 M mappa \xB7 C visuale \xB7 mouse: telecamera \xB7 Esc pausa",ou(s.kind==="plane"?2e4:12e3)}var hp=0;function ou(s=8e3){let t=xt("helpbar");t.style.transition="opacity .6s",t.style.opacity="0.85",clearTimeout(hp),hp=setTimeout(()=>{t.style.opacity="0"},s)}function sM(s){let t=T.input.keys;return{throttle:Math.max(t.has("KeyW")?1:0,s.padThr||0),brake:Math.max(t.has("KeyS")?1:0,s.padBrk||0),pitch:Math.max(-1,Math.min(1,(t.has("ArrowUp")?1:0)-(t.has("ArrowDown")?1:0)+(s.padPitch||0))),steer:s.steer,handbrake:s.handbrake}}var In=()=>!T.foot.on&&T.vehicle&&T.vehicle.isPlane&&!T.vehicle.onGround,up={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},Mp=()=>({halfL:T.vehicle.spec.L/2,halfW:T.vehicle.spec.W/2});function rM(){let s=T.vehicle,t=T.foot;if(s.isPlane&&!s.onGround){Te("Atterra prima di scendere",1200);return}if(Math.abs(s.u)>2.5){Te("Fermati prima di scendere",1200);return}let e=Math.cos(s.h),n=-Math.sin(s.h);t.x=s.x+e*(s.spec.W/2+.75),t.z=s.z+n*(s.spec.W/2+.75),t.h=s.h,t.u=0,t.y=s.y,t.on=!0,(T.camMode===1||T.camMode===2)&&(T.camMode=0),T.orbit.yaw=0,T.camInit=!0,Te("A piedi \u2014 F per salire su un veicolo",1800),ou(6e3)}function oM(){let s=T.foot,t=T.vehicle,e=T.traffic,n=Math.hypot(t.x-s.x,t.z-s.z)-t.spec.W/2,i=e.nearestCar(s.x,s.z,2.6),r=e.nearestParked(s.x,s.z,2.6),o=i?Math.hypot(i.x-s.x,i.z-s.z)-i.box.halfW:1e9,a=r?Math.hypot(r.x-s.x,r.z-s.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){Te("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=T.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:Mp(),model:c}),T.carModel=null,e.statics.length>6){let d=e.statics.shift();T.scene.remove(d.model.root)}let u=l===o?e.take(i):e.takeParked(r),h=up[u.type]||up.car,f=Fs.find(d=>d.id===h[u.colour%h.length]);vp(f,"#"+Hh[u.colour%Hh.length].toString(16).padStart(6,"0")),T.vehicle.place(u.x,u.z,u.h),Te(f.name,1500)}s.on=!1,T.orbit.yaw=0,T.camInit=!0}function aM(s,t){let e=T.foot,n=T.input.keys,i=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*s;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(i?6.2:2.3);e.u+=(o-e.u)*Math.min(1,s*8),e.x+=Math.sin(e.h)*e.u*s,e.z+=Math.cos(e.h)*e.u*s;let a={x:T.vehicle.x,z:T.vehicle.z,h:T.vehicle.h,box:Mp()};for(let l=0;l<2;l++){let c=T.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),T.traffic.statics.push(a);let u=T.traffic.resolveCircle(e.x,e.z,.32);T.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=T.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function iu(s,t,e=s){let n=performance.now();if(T.cool[e]&&n-T.cool[e]<(s==="camera"?2e4:5e3))return;T.cool[e]=n;let i=0,r=0,o="";if(s==="ped")i=870,r=8,o="Hai urtato un pedone!";else if(s==="red")i=167,r=6,o="Passaggio con il rosso";else if(s==="camera"){let a=t;a<=10?(i=42,r=0):a<=40?(i=173,r=3):a<=60?(i=543,r=6):(i=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=xt("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}T.fines+=i,T.licence-=r,Te(`\u{1F6A8} ${o} \u2014 multa \u20AC ${i}${r?`, \u2212${r} punti`:""}`,3200),T.licence<=0&&(T.licence=20,setTimeout(()=>Te("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),xt("licence").textContent=`\u{1FAAA} ${T.licence} punti \xB7 multe \u20AC ${T.fines.toLocaleString("it")}`}function lM(s,t,e){if(T.foot.on||s.isPlane||!s.surface||!s.surface.road)return;let n=T.roads,i=s.surface.road,r=n.ways[i.wi];if(s.u>3)for(let o of[r.nodes[i.k],r.nodes[i.k+1]]){if(n.ntag[o]!==Jt.SIGNALS||Math.hypot(n.nx[o]-s.x,n.nz[o]-s.z)>4.5)continue;let a=Math.sin(s.h),l=Math.cos(s.h);zr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&iu("red",0,"red"+o)}if(t>r.limit+5)for(let o of T.world.cameras)Math.hypot(o.x-s.x,o.z-s.z)<16&&iu("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function cM(){T.audio&&T.audio.start(),yp(),T.settings.viewTiles=(Hn[xt("quality").value]||Hn.mid).viewTiles,T.settings.farKm=(Hn[xt("quality").value]||Hn.mid).farKm,T.settings.detailKm=(Hn[xt("quality").value]||Hn.mid).detailKm,T.settings.farKm>0&&T.world.initFar(),T.traffic.target=+xt("traffic").value,xt("ptraffic").value=xt("traffic").value,T.sky.hours=+xt("tod").value,vp();let s=rl(xt("start").value);T.vehicle.place(s.x,s.z,s.h),T.vehicle.isPlane&&(T.vehicle.pendingLaunch=!0),T.traffic.clear();for(let t of T.traffic.statics)T.scene.remove(t.model.root);T.traffic.statics=[],T.foot.on=!1,T.orbit.yaw=0,T.orbit.pitch=0,T.peds.setTarget((Hn[xt("quality").value]||Hn.mid).peds),T.camInit=!0,xt("menu").classList.add("hidden"),xt("hud").classList.remove("hidden"),T.started=!0,T.paused=!1,T.loadingWorld=!0,Te("Caricamento della zona\u2026",1500),T.audio.start()}function hM(s){let t=T.roads,e=Math.sin(s.h),n=Math.cos(s.h),i=null,r=1e9;if(t.segmentsNear(s.x,s.z,8,(h,f)=>{if(!t.ways[h].drivable)return;let p=t.projectOnSeg(h,f,s.x,s.z),m=Math.hypot(p.dx,p.dz)||1,g=Math.abs(p.dx*e+p.dz*n)/m,x=p.d+(1-g)*20;x<r&&(r=x,i={wi:h,pr:p})}),!i)return;let o=t.ways[i.wi],a=i.pr,l=o.oneway||a.dx*e+a.dz*n>=0?1:-1,c=Math.atan2(a.dx*l,a.dz*l),u=t.laneCenter(o,l);s.place(a.px-Math.cos(c)*u,a.pz+Math.sin(c)*u,c)}function uM(){let s=T.vehicle,t=T.roads;if(s.isPlane){s.launch(250,45),T.camInit=!0,Te("Di nuovo in volo a 250 m",1200);return}let e=t.nearest(s.x,s.z,300,a=>a.drivable&&a.cls<=kt.SERVICE);if(!e)return;let n=t.ways[e.wi],i=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[i],t.nz[r]-t.nz[i]);!n.oneway&&Math.cos(o-s.h)<0&&(o+=Math.PI),s.place(e.px,e.pz,o),Te("Rimesso in strada",1200)}var sl=0;function Te(s,t=2500){let e=xt("toast");e.textContent=s,e.classList.add("show"),sl=performance.now()+t}function Zr(s){if(!(!T.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(s);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var fM={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function Xs(s){return s>=1e3?(s/1e3).toFixed(s>=1e4?0:1).replace(".",",")+" km":Math.round(s/10)*10+" m"}function dM(s){let t=jr();if(In()&&T.dest){let l=T.dest[0]-t.x,c=T.dest[1]-t.z,u=Math.hypot(l,c),h=Math.atan2(l,c)-t.h;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;xt("nav").classList.remove("hidden"),xt("navarrow").textContent=Math.abs(h)<.3?"\u2B06":Math.abs(h)>2.6?"\u2B07":h>0?h>1.2?"\u2B05":"\u2196":h<-1.2?"\u27A1":"\u2197",xt("navarrow").style.fontSize="44px",xt("navd").textContent=Xs(u),xt("navt").textContent="Destinazione in linea d'aria",xt("naveta").textContent=`circa ${Math.max(1,Math.round(u/Math.max(20,t.u)/60))} min alla velocit\xE0 attuale`;return}if(!T.route){xt("nav").classList.add("hidden");return}let e=T.route,n=Qd(e,t.x,t.z);if(n.off>40){if(T.offT=(T.offT||0)+s,T.offT>2.5){T.offT=0,au(!0);return}}else T.offT=0;let i=e.length-n.s;if(i<25){Te("\u{1F3C1} Sei arrivato a destinazione!",4e3),Zr("Sei arrivato a destinazione"),T.route=null,T.dest=null,xt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);xt("nav").classList.remove("hidden"),xt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":fM[r.type]||"\u2B06",xt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",xt("navd").textContent=Xs(o),xt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));xt("naveta").textContent=`Destinazione: ${Xs(i)} \xB7 circa ${Math.max(1,Math.round(i/a/60))} min`,T.lastStep!==r&&(T.lastStep=r,T.announced=0),T.announced===0&&o<400&&o>120&&(T.announced=1,Zr(`Tra ${Xs(o).replace(","," virgola ")}, ${r.text}`)),T.announced<=1&&o<70&&(T.announced=2,Zr(r.text))}function au(s){if(!T.dest)return;if(In()){T.route=null,s||Te(`Destinazione impostata: ${Xs(Math.hypot(T.dest[0]-T.vehicle.x,T.dest[1]-T.vehicle.z))} in linea d'aria`);return}let t=jr(),e=T.router.route(t.x,t.z,t.h,T.dest[0],T.dest[1]);if(T.route=e,!e){Te("Nessun percorso trovato verso la destinazione");return}T.lastStep=null,s?Zr("Ricalcolo del percorso"):(Te(`Percorso calcolato: ${Xs(e.length)}`),Zr("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var Qh=0,tu=0,eu=performance.now();function pM(s){let t=jr(),e=T.roads,n=T.vehicle;Qh+=s,tu++;let i=performance.now();if(i-eu>1e3&&(xt("fps").textContent=Math.round(tu*1e3/(i-eu))+" fps",tu=0,eu=i),sl&&performance.now()>sl&&(xt("toast").classList.remove("show"),sl=0),Qh<.1)return;Qh=0;let r=Math.abs(t.u*3.6);xt("spd").textContent=Math.round(r),!T.foot.on&&n.isPlane?(xt("gear").textContent=n.crashed>0?"INCIDENTE":n.onGround?"A TERRA":n.stall?"STALLO":"IN VOLO",xt("gear").style.fontSize="14px",xt("gear").style.color=n.stall&&!n.onGround?"var(--bad)":"",xt("rpmbar").style.width=Math.round(n.lever*100)+"%"):(xt("gear").textContent=T.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,xt("gear").style.fontSize=T.foot.on?"14px":"",xt("gear").style.color="",xt("rpmbar").style.width=(T.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%");let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let m=e.nearest(t.x,t.z,25,g=>g.drivable);m&&(a=m.wi)}let l=T.world.comuneAt(t.x,t.z);if(In())xt("roadname").textContent=n.crashed>0?"\u{1F4A5} Incidente \u2014 si riparte in volo":`In volo \xB7 ${Math.round(Math.max(0,n.agl))} m dal suolo`,xt("limit").classList.add("hidden"),T.curLimit=0;else if(a>=0){let m=e.ways[a];xt("roadname").textContent=e.displayName(m),xt("limitv").textContent=m.limit,xt("limit").classList.toggle("hidden",T.foot.on),xt("limitest").textContent=m.limitMapped?"":"indicativo",xt("limit").classList.toggle("over",r>m.limit*1.1+3),T.curLimit=m.limit}else xt("roadname").textContent="Fuori strada",xt("limit").classList.add("hidden"),T.curLimit=0;let c="",u=1e9;for(let m of T.meta.places){if(m.t==="town"||m.t==="city"||m.t==="locality")continue;let g=Math.hypot(m.x-t.x,m.z-t.z);g<u&&g<700&&(u=g,c=m.n)}xt("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=T.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,p=["N","NE","E","SE","S","SO","O","NO"];xt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${p[Math.round(d/45)%8]}`,xt("alt").textContent=!T.foot.on&&n.isPlane?`manetta ${Math.round(n.lever*100)}% \xB7 ${n.vy>=0?"\u2191":"\u2193"} ${Math.abs(n.vy).toFixed(1)} m/s`:"",xt("clock").textContent="\u{1F552} "+T.sky.clock(),xt("tspeed").textContent=T.sky.speed===0?"\u23F8":T.sky.speed===1?"1\xD7":T.sky.speed+"\xD7",!T.foot.on&&n.isPlane&&T.camMode===1?qd(T.carModel.dashCanvas,T.carModel.dashTex,r,n.agl,n.vy,n.lever,n.stall&&!n.onGround):!T.foot.on&&T.carModel.dashCanvas&&T.camMode===1&&$d(T.carModel.dashCanvas,T.carModel.dashTex,r,n.rpm,n.spec.rpmMax,xt("gear").textContent,T.curLimit)}function _p(s){T.mapOpen=!0,T.mapMode=s||"dest",xt("mapview").classList.remove("hidden"),T.maps.resizeBig();let t=T.vehicle;if(T.started&&t)T.maps.cx=t.x,T.maps.cz=t.z,T.maps.zoom=.35;else{let e=rl("casa");T.maps.cx=e.x,T.maps.cz=e.z,T.maps.zoom=.12}xt("setdest").classList.toggle("hidden",!T.started),xt("teleport").textContent=T.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",xt("mapinfo").textContent=T.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",T.mapDirty=!0,xt("search").value="",xt("results").innerHTML=""}function Yr(){T.mapOpen=!1,xt("mapview").classList.add("hidden"),T.started||ru()}function fp(s,t,e){T.mapSel=[s,t];let n=T.world.comuneAt(s,t),i=T.net.nearest(s,t,150,o=>o.drivable),r=e||(i?T.net.displayName(T.net.ways[i.wi]):"Punto selezionato");T.mapSelLabel=r+(n?", "+n:""),xt("mapinfo").innerHTML=`<b>${T.mapSelLabel}</b><br>${T.proj.toLatLon(s,t).map(o=>o.toFixed(5)).join(", ")}`,T.mapDirty=!0,T.started&&T.mapMode==="dest"&&bp()}function bp(){T.mapSel&&(T.dest=T.mapSel.slice(),au(!1),T.mapDirty=!0)}function mM(){let s=xt("bigmap"),t=null,e=!1;s.addEventListener("mousedown",i=>{t=[i.clientX,i.clientY,T.maps.cx,T.maps.cz],e=!1}),addEventListener("mousemove",i=>{if(!t||!T.mapOpen)return;let r=i.clientX-t[0],o=i.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),T.maps.cx=t[2]-r/T.maps.zoom,T.maps.cz=t[3]-o/T.maps.zoom,T.mapDirty=!0}),addEventListener("mouseup",i=>{if(t&&!e&&T.mapOpen&&i.target===s){let[r,o]=T.maps.toWorld(i.clientX,i.clientY);fp(r,o)}t=null}),s.addEventListener("wheel",i=>{i.preventDefault();let[r,o]=T.maps.toWorld(i.clientX,i.clientY),a=Math.exp(-i.deltaY*.0015);T.maps.zoom=Math.max(.03,Math.min(6,T.maps.zoom*a));let[l,c]=T.maps.toWorld(i.clientX,i.clientY);T.maps.cx+=r-l,T.maps.cz+=o-c,T.mapDirty=!0},{passive:!1}),xt("closemap").onclick=Yr,xt("setdest").onclick=()=>{bp(),Yr()},xt("cleardest").onclick=()=>{T.route=null,T.dest=null,T.mapDirty=!0},xt("teleport").onclick=()=>{if(!T.mapSel)return;if(!T.started){T.pickedStart=T.mapSel.slice(),Yr(),xt("pickinfo").textContent="Partenza: "+T.mapSelLabel;return}T.pickedStart=T.mapSel.slice();let i=rl("picked");T.vehicle.place(i.x,i.z,i.h),T.vehicle.isPlane&&(T.vehicle.pendingLaunch=!0),T.foot.on=!1,T.traffic.clear(),T.camInit=!0,T.loadingWorld=!0,Yr(),T.dest&&au(!0)};let n=xt("search");n.addEventListener("input",()=>{let i=n.value.trim().toLowerCase(),r=[];if(i.length>=2){for(let a of T.maps.comuni)a.n.toLowerCase().includes(i)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of T.meta.places)a.n.toLowerCase().includes(i)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of T.meta.landmarks)a[3].toLowerCase().includes(i)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(T.world.comuneAt(a[1],a[2])?" \xB7 "+T.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of T.net.streets){if(!a.toLowerCase().includes(i))continue;let c=new Map;for(let u of l){let h=T.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}xt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{T.maps.cx=o.x,T.maps.cz=o.z,T.maps.zoom=Math.max(T.maps.zoom,.8),fp(o.x,o.z,o.n)},xt("results").appendChild(a)}})}function lu(){return navigator.getGamepads?[...navigator.getGamepads()].filter(s=>s&&s.connected):[]}var su=0,cn=null;function qs(){let s=T.input,t=lu();if(!t.length){xt("padstatus").textContent="Nessun gamepad rilevato. Collegalo e premi un tasto qualsiasi: il browser lo rende visibile solo dopo la prima pressione.",xt("padmap").innerHTML="";return}let e=t[0],{map:n,kind:i}=s.mapFor(e);xt("padstatus").textContent=`Collegato: ${e.id} \u2014 mappatura ${i}.`+(t.length>1?` (${t.length} gamepad: si configura il primo)`:""),xt("padmap").innerHTML=Vr.describe(n).map(r=>`<div>${r}</div>`).join("")}function dp(){T.input=T.input||new Os,xt("padcfg").classList.remove("hidden"),xt("padwiz").classList.add("hidden"),xt("padbtns").classList.remove("hidden"),qs(),clearInterval(su),su=setInterval(()=>{let s=lu()[0];if(!s){xt("padlive").textContent="",qs();return}let t=s.buttons.map((e,n)=>(typeof e=="object"?e.value:e)>.5?n:-1).filter(e=>e>=0);xt("padlive").textContent="assi: "+s.axes.map((e,n)=>`${n}:${e.toFixed(2)}`).join(" ")+(t.length?"  tasti premuti: "+t.join(","):""),!cn&&!xt("padstatus").textContent.startsWith("Collegato")&&qs()},120)}function gM(){cn&&(cn.cancel(),cn=null),clearInterval(su),xt("padcfg").classList.add("hidden")}function xM(){T.input=T.input||new Os,xt("padbtn").onclick=dp,xt("padbtn2").onclick=dp,xt("padclose").onclick=gM,xt("padreset").onclick=()=>{let s=lu()[0];s&&(T.input.setPadMap(s.id,null),qs())},xt("padstart").onclick=()=>{cn=new Vr(T.input,{prompt:(s,t,e)=>{xt("padstep").textContent=`Comando ${t} di ${e}`,xt("padprompt").textContent=s},done:()=>{cn=null,xt("padwiz").classList.add("hidden"),xt("padbtns").classList.remove("hidden"),qs(),xt("padstatus").textContent+=" Configurazione salvata."},status:s=>{xt("padstatus").textContent=s}}),cn.start()?(xt("padwiz").classList.remove("hidden"),xt("padbtns").classList.add("hidden")):cn=null},xt("padskip").onclick=()=>cn&&cn.skip(),xt("padcancel").onclick=()=>{cn&&(cn.cancel(),cn=null),xt("padwiz").classList.add("hidden"),xt("padbtns").classList.remove("hidden"),qs()},T.input.onPadConnect=(s,t)=>{T.started&&Te(`\u{1F3AE} ${s.id.split("(")[0].trim()} collegato \u2014 mappatura ${t.kind.split(" (")[0]}`+(t.kind.startsWith("di base")?": configuralo con Esc \u2192 \u{1F3AE} Gamepad":""),4e3)}}function yM(){xt("resume").onclick=()=>$r(!1),xt("tomenu").onclick=()=>{$r(!1),T.started=!1,xt("hud").classList.add("hidden"),ru()},xt("ptraffic").onchange=n=>{T.traffic.target=+n.target.value,T.traffic.target||T.traffic.clear()},xt("ptime").onchange=n=>{T.sky.speed=+n.target.value},xt("pvoice").onchange=n=>{T.voice=n.target.value==="1"},xt("paudio").onchange=n=>{T.audio.muted=n.target.value==="0"};let s=T.input.wheelCfg,t=(n,i)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=i};t(xt("axsteer"),s.steerAxis),t(xt("axthr"),s.throttleAxis),t(xt("axbrk"),s.brakeAxis),xt("wheelon").checked=s.enabled,xt("axinv").checked=s.invertPedals;let e=()=>{s.enabled=xt("wheelon").checked,s.steerAxis=+xt("axsteer").value,s.throttleAxis=+xt("axthr").value,s.brakeAxis=+xt("axbrk").value,s.invertPedals=xt("axinv").checked,T.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])xt(n).onchange=e}function $r(s){T.paused=s,xt("pause").classList.toggle("hidden",!s),!s&&T.started&&ou(6e3),s&&(xt("ptime").value=String(T.sky.speed))}var nl=new H,pp=new H,vM=new H,MM=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function _M(s,t){let e=T.vehicle,n=T.camera,i=T.carModel,r=T.foot,o=T.orbit,a=r.on?0:T.camMode;if(T.debugCam){n.position.set(...T.debugCam.pos),n.lookAt(...T.debugCam.look),n.near=1,n.updateProjectionMatrix(),i.interior.visible=!1;for(let l of i.exterior)l.visible=!0;return}i.interior.visible=a===1;for(let l of i.exterior)l.visible=a!==1;if(document.body.classList.toggle("cockpit",a===1),o.idle+=s,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-s*2.5),o.pitch*=Math.exp(-s*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*(e.isPlane?1.1:.75),u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),p=Math.sin(o.pitch),m=vM.set(l.x-Math.sin(f)*c*d,l.y+u+c*p,l.z-Math.cos(f)*c*d),g=T.roads.surfaceAt(m.x,m.z,l.y+3).h;m.y=Math.max(m.y,g+.8),T.camInit&&(nl.copy(m),T.camInit=!1),nl.lerp(m,1-Math.exp(-s*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(nl);let x=r.on?.5:4;pp.set(l.x+Math.sin(f)*x,l.y+h,l.z+Math.cos(f)*x),n.lookAt(pp),n.near=.5}else{let l=a===1?i.root.userData.eye.clone():new H(0,e.spec.H*.82+.05,e.spec.L*.18);i.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(i.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new H(Math.sin(c)*u,(a===1?e.isPlane?-3.5:-3.2:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?i.root.userData.eye:new H(0,e.spec.H*.82,0)).applyMatrix4(i.root.matrixWorld);n.lookAt(h),n.near=.08,nl.copy(n.position)}n.updateProjectionMatrix()}var Se={t:0,n:0,scale:1,good:0,shadowsOff:!1};function bM(s){if(T.autoOff||T.loadingWorld||s>.5||(Se.t+=s,Se.n++,Se.t<1.5))return;let t=Se.t/Se.n;Se.t=0,Se.n=0;let e=Math.min(devicePixelRatio,T.settings.pixelRatio),n=()=>{let i=Math.max(.5,e*Se.scale);T.renderer.setPixelRatio(i),T.composer&&T.composer.setPixelRatio(i)};t>.042?(Se.good=0,Se.scale>.61?(Se.scale=Math.max(.6,Se.scale-.14),n()):!Se.shadowsOff&&T.settings.shadows&&(Se.shadowsOff=!0,T.sky.sun.castShadow=!1)):t<.02?++Se.good>=3&&(Se.good=0,Se.shadowsOff?(Se.shadowsOff=!1,T.sky.sun.castShadow=!0):Se.scale<1&&(Se.scale=Math.min(1,Se.scale+.1),n())):Se.good=0,xt("fps").title=`risoluzione ${Math.round(Se.scale*100)}%${Se.shadowsOff?", ombre spente":""}`}var mp=performance.now(),nu=0;function wp(s){requestAnimationFrame(wp);let t=(s-mp)/1e3,e=Math.min(.05,t);if(mp=s,!T.renderer)return;if(T.mapOpen){let _=T.input.read(e);(T.input.consume("KeyM")||T.input.consume("Escape")||_.actions.has("map")||_.actions.has("pause"))&&Yr(),T.mapDirty&&(T.maps.drawBig(T.started?jr():null,T.route,T.dest||(T.mapMode==="start"?null:T.mapSel)),T.mapDirty=!1),T.mapSel&&T.mapMode==="start"&&T.started;return}if(!T.started)return;let n=T.input;if(n.consume("Escape")&&$r(!T.paused),T.paused){n.read(e).actions.has("pause")&&xt("padcfg").classList.contains("hidden")&&$r(!1);let _=n.axesSnapshot();xt("axes").textContent=_?`${_.id}: `+_.axes.map((w,S)=>`${S}:${w.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let i=n.read(e);if(i.actions.has("pause")){$r(!0);return}if((n.consume("KeyC")||i.actions.has("camera"))&&(T.camMode=(T.camMode+1)%4,Te(MM[T.camMode],1e3)),n.consume("KeyM")||i.actions.has("map")){_p("dest");return}if(n.consume("KeyN")&&xt("mini-wrap").classList.toggle("hidden"),(n.consume("KeyH")||i.actions.has("lights"))&&(T.lightsOn=!T.lightsOn,Te(T.lightsOn?"Fari accesi":"Fari spenti",900)),(n.consume("KeyR")||i.actions.has("reset"))&&!T.foot.on&&uM(),n.consume("KeyK")&&(T.world.labelsOn=!T.world.labelsOn,Te(T.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),n.consume("KeyT")){let _=[30,300,0,1];T.sky.speed=_[(_.indexOf(T.sky.speed)+1)%_.length],Te("Velocit\xE0 del tempo: "+(T.sky.speed?T.sky.speed+"\xD7":"ferma"),1e3)}(n.consume("Equal")||n.consume("NumpadAdd"))&&(T.sky.hours=(T.sky.hours+1)%24),(n.consume("Minus")||n.consume("NumpadSubtract"))&&(T.sky.hours=(T.sky.hours+23)%24),(n.consume("KeyF")||n.consume("Enter")||i.actions.has("exit"))&&(T.foot.on?oM():rM());let r=!T.foot.on&&(n.keys.has("KeyE")||i.horn);T.audio.horn(r);let o=T.vehicle,a=T.foot,l=jr();if(T.world.update(l.x,l.z),T.world.pump(T.loadingWorld?40:In()?12:7),T.settings.farKm>0&&(T.world.updateFar(l.x,l.z,In()?T.settings.farKm*1e3:Math.min(T.settings.farKm*1e3,3200)),T.world.pumpFar(T.loadingWorld?12:3)),T.loadingWorld)if(T.world.ready(o.x,o.z)){if(T.loadingWorld=!1,o.pendingLaunch)o.pendingLaunch=!1,o.launch(250,45),T.camInit=!0,Te("\u2708 In volo sopra la Brianza \u2014 W/S manetta, \u2191/\u2193 cabra/picchia, A/D vira",4500);else if(!o.isPlane||o.onGround){hM(o);let _=T.roads.surfaceAt(o.x,o.z,1e9);o.y=_.h}}else i.throttle=0,i.brake=1;T.loadingWorld||(a.on?(o.update(e,{throttle:0,brake:1,steer:0,handbrake:1,pitch:0}),aM(e,i)):o.update(e,o.isPlane?sM(i):i)),o.isPlane&&(o.crashed>0&&!o.crashShown&&(o.crashShown=!0,Te("\u{1F4A5} "+o.crashMsg+" Si riparte in volo\u2026",2200)),o.relaunched&&(o.relaunched=!1,o.crashShown=!1,T.camInit=!0),o.touchdown&&(o.touchdown=!1,Te(o.impact>.4?"Atterraggio un po' brusco":"\u{1F6EC} Atterraggio riuscito",1800),o.impact=0),o.outside&&(o.outside=0,Te("Fine della zona: si torna indietro",1500)));let c=Math.sin(o.h),u=Math.cos(o.h),h=Math.cos(o.h),f=-Math.sin(o.h),d=In()?[]:[{x:o.x,z:o.z,h:o.h,vx:c*o.u+h*o.v,vz:u*o.u+f*o.v,halfL:o.spec.L/2,halfW:o.spec.W/2,player:!0}];for(let _ of T.traffic.cars)Math.abs(_.x-l.x)<90&&Math.abs(_.z-l.z)<90&&d.push({x:_.x,z:_.z,h:_.h,vx:Math.sin(_.h)*_.speed,vz:Math.cos(_.h)*_.speed,halfL:_.box.halfL,halfW:_.box.halfW});let p=T.loadingWorld?[]:T.peds.update(e,l.x,l.z,d,r);a.on&&p.push([a.x,a.z]),T.traffic.obstacles=p,T.traffic.update(e,{x:o.x,z:o.z,h:o.h,u:o.u,wi:o.surface&&o.surface.road?o.surface.road.wi:-1,active:!In()},s/1e3);let m=In()?[]:[{x:o.x,z:o.z}];for(let _ of T.traffic.cars)Math.abs(_.x-l.x)<300&&Math.abs(_.z-l.z)<300&&m.push(_);T.world.gates.update(e,m),T.peds.drawPlayer(a.on,a.x,a.y,a.z,a.h,a.gait,a.u,e);let g=T.carModel;g.root.position.set(o.x,o.y,o.z),g.root.rotation.set(-(o.pitch+o.dynPitch),o.h,o.roll+o.dynRoll,"YXZ");for(let _ of g.wheels)_.pivot.rotation.x=o.wheelSpinAngle||0,_.front&&(_.pivot.rotation.y=o.steer);g.prop&&(g.prop.rotation.z=o.propAngle||0),g.steeringWheel&&(g.steeringWheel.rotation.z=-o.steer*7);let x=!a.on&&(T.lightsOn||T.sky.night>.55||(T.tunnelK||0)>.5);g.headlight&&(g.headlight.intensity=x?70:0),g.tailGlow&&(g.tailGlow.intensity=o.brake>.05&&!a.on?2.2:x?.6:0),gp.set(l.x,In()?o.y-o.agl:l.y,l.z),T.sky.update(e,gp);let M=!a.on&&o.surface&&o.surface.road?T.roads.ways[o.surface.road.wi]:null,v=M&&M.flags&8&&T.terrain.height(o.x,o.z)-o.y>4?1:0;T.tunnelK=(T.tunnelK||0)+(v-(T.tunnelK||0))*Math.min(1,e*2.5),T.tunnelK>.01&&(T.sky.sun.intensity*=1-.92*T.tunnelK,T.sky.hemi.intensity*=1-.6*T.tunnelK,T.scene.fog.color.multiplyScalar(1-.88*T.tunnelK)),T.world.updateWater(s/1e3,T.scene.fog.color),bM(t);let y=In()?1+Math.min(1.9,o.agl/130):1;T.scene.fog.near*=y,T.scene.fog.far*=y,T.camera.far=Math.max(1700,T.scene.fog.far*1.06),T.world.buildings.setNight(T.sky.night),T.world.signage.update(s/1e3,T.sky.night),T.traffic.setNight(T.sky.night),_M(e,n.keys.has("KeyV")),T.world.updateLabels(T.camera,In()),pM(e),dM(e),lM(o,Math.abs(o.u)*3.6,s),nu+=e,nu>.05&&!xt("mini-wrap").classList.contains("hidden")&&(nu=0,T.maps.drawMini(l,T.route,T.sky.night>.5)),a.on?T.audio.update(800,0,0,0):T.audio.update(o.rpm,o.throttle,Math.abs(o.u)*3.6,o.slip),o.impact>.25&&!a.on&&!o.isPlane&&Te("\u{1F4A5} Urto!",700),o.impact=0,T.composer&&T.sky.night>.2?(T.bloom.strength=T.sky.night*.55,T.composer.render()):T.renderer.render(T.scene,T.camera)}var gp=new H;tM().catch(xp);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
