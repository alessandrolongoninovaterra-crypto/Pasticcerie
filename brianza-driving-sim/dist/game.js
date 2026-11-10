(()=>{var Rc="170";var Md=0,Sh=1,bd=2;var ku=1,Cc=2,On=3,si=0,Ge=1,ce=2,Rn=0,is=1,ri=2,Eh=3,Th=4,wd=5,bi=100,Sd=101,Ed=102,Td=103,Ad=104,Rd=200,Cd=201,Id=202,Pd=203,al=204,ll=205,Ld=206,Dd=207,Ud=208,Nd=209,zd=210,Fd=211,Od=212,Bd=213,kd=214,cl=0,hl=1,ul=2,as=3,fl=4,dl=5,pl=6,ml=7,Bo=0,Hd=1,Gd=2,ii=0,Ic=1,Pc=2,Lc=3,lr=4,Vd=5,Dc=6,Uc=7;var Hu=300,ls=301,cs=302,gl=303,xl=304,ko=306,oi=1e3,kn=1001,yl=1002,rn=1003,Wd=1004;var Tr=1005;var Tn=1006,Ca=1007;var Si=1008;var Wn=1009,Gu=1010,Vu=1011,Zs=1012,Nc=1013,Ei=1014,An=1015,_n=1016,zc=1017,Fc=1018,hs=1020,Wu=35902,Xu=1021,qu=1022,yn=1023,Yu=1024,Zu=1025,ss=1026,us=1027,Oc=1028,Bc=1029,$u=1030,kc=1031;var Hc=1033,so=33776,ro=33777,oo=33778,ao=33779,vl=35840,_l=35841,Ml=35842,bl=35843,wl=36196,Sl=37492,El=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Il=37812,Pl=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,zl=37818,Fl=37819,Ol=37820,Bl=37821,lo=36492,kl=36494,Hl=36495,Ju=36283,Gl=36284,Vl=36285,Wl=36286;var co=2300,Xl=2301,Ia=2302,Ah=2400,Rh=2401,Ch=2402;var Xd=3200,qd=3201;var Ho=0,Yd=1,ei="",Me="srgb",vs="srgb-linear",Go="linear",fe="srgb";var zi=7680;var Ih=519,Zd=512,$d=513,Jd=514,Ku=515,Kd=516,jd=517,Qd=518,tp=519,ql=35044,ju=35048;var Ph="300 es",Hn=2e3,ho=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Xs=Math.PI/180,fs=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Gc(i,t){return(i%t+t)%t}function ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function np(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function ip(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function sp(i,t=1){return t-Math.abs(Gc(i,t*2)-t)}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ap(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lp(i,t){return i+Math.random()*(t-i)}function cp(i){return i*(.5-Math.random())}function hp(i){i!==void 0&&(Lh=i);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function up(i){return i*Xs}function fp(i){return i*fs}function dp(i){return(i&i-1)===0&&i!==0}function pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qu={DEG2RAD:Xs,RAD2DEG:fs,generateUUID:Gn,clamp:ze,euclideanModulo:Gc,mapLinear:ep,inverseLerp:np,lerp:qs,damp:ip,pingpong:sp,smoothstep:rp,smootherstep:op,randInt:ap,randFloat:lp,randFloatSpread:cp,seededRandom:hp,degToRad:up,radToDeg:fp,isPowerOfTwo:dp,ceilPowerOfTwo:pp,floorPowerOfTwo:mp,setQuaternionFromProperEuler:gp,normalize:pe,denormalize:xn},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],y=s[0],p=s[3],g=s[6],_=s[1],x=s[4],v=s[7],S=s[2],w=s[5],E=s[8];return r[0]=o*y+a*_+l*S,r[3]=o*p+a*x+l*w,r[6]=o*g+a*v+l*E,r[1]=c*y+u*_+h*S,r[4]=c*p+u*x+h*w,r[7]=c*g+u*v+h*E,r[2]=f*y+d*_+m*S,r[5]=f*p+d*x+m*w,r[8]=f*g+d*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=h*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new te;function tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=uo("canvas");return i.style.display="block",i}var Dh={};function Vs(i){i in Dh||(Dh[i]=!0,console.warn(i))}function yp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _p(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Go:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],zh=[.3127,.329],Fh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[vs]:{primaries:Uh,whitePoint:zh,transfer:Go,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Uh,whitePoint:zh,transfer:fe,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var Fi,Yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=uo("canvas")),Fi.width=t.width,Fi.height=t.height;let n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bp=0,je=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=Tn,o=Si,a=yn,l=Wn,c=i.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Gn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Hu;je.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,S=(g+1)/2,w=(u+f)/4,E=(h+y)/4,T=(m+p)/4;return x>v&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=E/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=T/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(h-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Te=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=y;return}if(h!==y||l!==f||c!==d||u!==m){let p=1-a,g=l*f+c*d+u*m+h*y,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let S=Math.sqrt(x),w=Math.atan2(S,g*_);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S}let v=a*_;if(l=l*p+f*v,c=c*p+d*v,u=u*p+m*v,h=h*p+y*v,p===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new B,Bh=new Te,Xn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Rr.subVectors(this.max,Ls),Oi.subVectors(t.a,Ls),Bi.subVectors(t.b,Ls),ki.subVectors(t.c,Ls),$n.subVectors(Bi,Oi),Jn.subVectors(ki,Bi),mi.subVectors(Oi,ki);let e=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-mi.y,mi.x,0];return!Ua(e,Oi,Bi,ki,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Oi,Bi,ki,Rr))?!1:(Cr.crossVectors($n,Jn),e=[Cr.x,Cr.y,Cr.z],Ua(e,Oi,Bi,ki,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,Ar=new Xn,Oi=new B,Bi=new B,ki=new B,$n=new B,Jn=new B,mi=new B,Ls=new B,Rr=new B,Cr=new B,gi=new B;function Ua(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var wp=new Xn,Ds=new B,Na=new B,qn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Na)),this.expandByPoint(Ds.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new B,za=new B,Ir=new B,Kn=new B,Fa=new B,Pr=new B,Oa=new B,$s=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){za.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(za);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=Kn.dot(this.direction),l=-Kn.dot(Ir),c=Kn.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(za).addScaledVector(Ir,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Fa.subVectors(e,t),Pr.subVectors(n,t),Oa.crossVectors(Fa,Pr);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let l=a*this.direction.dot(Pr.crossVectors(Kn,Pr));if(l<0)return null;let c=a*this.direction.dot(Fa.cross(Kn));if(c<0||l+c>o)return null;let u=-a*Kn.dot(Oa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,m,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,m,y,p)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,y=c*h;e[0]=f+y*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,Ep)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),jn.crossVectors(n,nn),jn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),jn.crossVectors(n,nn)),jn.normalize(),Lr.crossVectors(nn,jn),s[0]=jn.x,s[4]=Lr.x,s[8]=nn.x,s[1]=jn.y,s[5]=Lr.y,s[9]=nn.y,s[2]=jn.z,s[6]=Lr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],y=n[6],p=n[10],g=n[14],_=n[3],x=n[7],v=n[11],S=n[15],w=s[0],E=s[4],T=s[8],M=s[12],b=s[1],C=s[5],U=s[9],z=s[13],D=s[2],k=s[6],L=s[10],H=s[14],O=s[3],q=s[7],K=s[11],V=s[15];return r[0]=o*w+a*b+l*D+c*O,r[4]=o*E+a*C+l*k+c*q,r[8]=o*T+a*U+l*L+c*K,r[12]=o*M+a*z+l*H+c*V,r[1]=u*w+h*b+f*D+d*O,r[5]=u*E+h*C+f*k+d*q,r[9]=u*T+h*U+f*L+d*K,r[13]=u*M+h*z+f*H+d*V,r[2]=m*w+y*b+p*D+g*O,r[6]=m*E+y*C+p*k+g*q,r[10]=m*T+y*U+p*L+g*K,r[14]=m*M+y*z+p*H+g*V,r[3]=_*w+x*b+v*D+S*O,r[7]=_*E+x*C+v*k+S*q,r[11]=_*T+x*U+v*L+S*K,r[15]=_*M+x*z+v*H+S*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15];return m*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+y*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+g*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],_=h*p*c-y*f*c+y*l*d-a*p*d-h*l*g+a*f*g,x=m*f*c-u*p*c-m*l*d+o*p*d+u*l*g-o*f*g,v=u*y*c-m*h*c+m*a*d-o*y*d-u*a*g+o*h*g,S=m*h*l-u*y*l-m*a*f+o*y*f+u*a*p-o*h*p,w=e*_+n*x+s*v+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=_*E,t[1]=(y*f*r-h*p*r-y*s*d+n*p*d+h*s*g-n*f*g)*E,t[2]=(a*p*r-y*l*r+y*s*c-n*p*c-a*s*g+n*l*g)*E,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*r-m*f*r+m*s*d-e*p*d-u*s*g+e*f*g)*E,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*E,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=v*E,t[9]=(m*h*r-u*y*r-m*n*d+e*y*d+u*n*g-e*h*g)*E,t[10]=(o*y*r-m*a*r+m*n*c-e*y*c-o*n*g+e*a*g)*E,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=S*E,t[13]=(u*y*s-m*h*s+m*n*f-e*y*f-u*n*p+e*h*p)*E,t[14]=(m*a*s-o*y*s-m*n*l+e*y*l+o*n*p-e*a*p)*E,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,y=o*u,p=o*h,g=a*h,_=l*c,x=l*u,v=l*h,S=n.x,w=n.y,E=n.z;return s[0]=(1-(y+g))*S,s[1]=(d+v)*S,s[2]=(m-x)*S,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+g))*w,s[6]=(p+_)*w,s[7]=0,s[8]=(m+x)*E,s[9]=(p-_)*E,s[10]=(1-(f+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Hi.set(s[0],s[1],s[2]).length(),o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let c=1/r,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===Hn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ho)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*c,d=(n+s)*u,m,y;if(a===Hn)m=(o+r)*h,y=-2*h;else if(a===ho)m=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new B,mn=new Zt,Sp=new B(0,0,0),Ep=new B(1,1,1),jn=new B,Lr=new B,nn=new B,kh=new Zt,Hh=new Te,Ze=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,Gh=new B,Gi=new Te,Nn=new Zt,Dr=new B,Us=new B,Ap=new B,Rp=new Te,Vh=new B(1,0,0),Wh=new B(0,1,0),Xh=new B(0,0,1),qh={type:"added"},Cp={type:"removed"},Vi={type:"childadded",child:null},Ba={type:"childremoved",child:null},Ce=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Ze,n=new Te,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new te}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Us,Dr,this.up):Nn.lookAt(Dr,Us,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new B(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new B,zn=new B,ka=new B,Fn=new B,Wi=new B,Xi=new B,Yh=new B,Ha=new B,Ga=new B,Va=new B,Wa=new xe,Xa=new xe,qa=new xe,ni=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),zn.subVectors(n,e),ka.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(zn),l=gn.dot(ka),c=zn.dot(zn),u=zn.dot(ka),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),zn.subVectors(t,e),gn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),Ha.subVectors(t,n);let l=Wi.dot(Ha),c=Xi.dot(Ha);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,s);let u=Wi.dot(Ga),h=Xi.dot(Ga);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Wi,o);Va.subVectors(t,r);let d=Wi.dot(Va),m=Xi.dot(Va);if(m>=0&&d<=m)return e.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Xi,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Yh.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(Yh,a);let g=1/(p+y+f);return o=y*g,a=f*g,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Gc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return oe.fromWorkingColorSpace(He.copy(this),t),Math.round(ze(He.r*255,0,255))*65536+Math.round(ze(He.g*255,0,255))*256+Math.round(ze(He.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Me){oe.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Ur);let n=qs(Qn.h,Ur.h,e),s=qs(Qn.s,Ur.s,e),r=qs(Qn.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new At;At.NAMES=ef;var Ip=0,cn=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Gn(),this.name="",this.blending=is,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Oe=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new B,Nr=new It,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var ds=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ps=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pp=0,ln=new Zt,Za=new Ce,qi=new B,sn=new Xn,Ns=new Xn,De=new B,se=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?ps:ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,Ns.min),sn.expandByPoint(De),De.addVectors(sn.max,Ns.max),sn.expandByPoint(De)):(sn.expandByPoint(Ns.min),sn.expandByPoint(Ns.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),De.add(qi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new B,l[T]=new B;let c=new B,u=new B,h=new B,f=new It,d=new It,m=new It,y=new B,p=new B;function g(T,M,b){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(C),a[T].add(y),a[M].add(y),a[b].add(y),l[T].add(p),l[M].add(p),l[b].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,M=_.length;T<M;++T){let b=_[T],C=b.start,U=b.count;for(let z=C,D=C+U;z<D;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let x=new B,v=new B,S=new B,w=new B;function E(T){S.fromBufferAttribute(s,T),w.copy(S);let M=a[T];x.copy(M),x.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(w,M);let C=v.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,C)}for(let T=0,M=_.length;T<M;++T){let b=_[T],C=b.start,U=b.count;for(let z=C,D=C+U;z<D;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new me(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zh=new Zt,xi=new $s,zr=new qn,$h=new B,Fr=new B,Or=new B,Br=new B,$a=new B,kr=new B,Jh=new B,Hr=new B,Rt=class extends Ce{constructor(t=new se,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&($a.fromBufferAttribute(h,t),o?kr.addScaledVector($a,u):kr.addScaledVector($a.sub(e),u))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(zr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(zr,$h)===null||xi.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=x;v<S;v+=3){let w=a.getX(v),E=a.getX(v+1),T=a.getX(v+2);s=Gr(this,g,t,n,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let _=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);s=Gr(this,o,t,n,c,u,h,_,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=x;v<S;v+=3){let w=v,E=v+1,T=v+2;s=Gr(this,g,t,n,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let _=p,x=p+1,v=p+2;s=Gr(this,o,t,n,c,u,h,_,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Lp(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:i}}function Gr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Fr),i.getVertexPosition(l,Or),i.getVertexPosition(c,Br);let u=Lp(i,t,e,n,Fr,Or,Br,Jh);if(u){let h=new B;ni.getBarycoord(Jh,Fr,Or,Br,h),s&&(u.uv=ni.getInterpolatedAttribute(s,a,l,c,h,new It)),r&&(u.uv1=ni.getInterpolatedAttribute(r,a,l,c,h,new It)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};ni.getNormal(Fr,Or,Br,f.normal),u.face=f,u.barycoord=h}return u}var Ht=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function m(y,p,g,_,x,v,S,w,E,T,M){let b=v/E,C=S/T,U=v/2,z=S/2,D=w/2,k=E+1,L=T+1,H=0,O=0,q=new B;for(let K=0;K<L;K++){let V=K*C-z;for(let et=0;et<k;et++){let Z=et*b-U;q[y]=Z*_,q[p]=V*x,q[g]=D,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(et/E),h.push(1-K/T),H+=1}}for(let K=0;K<T;K++)for(let V=0;V<E;V++){let et=f+V+k*K,Z=f+V+k*(K+1),N=f+(V+1)+k*(K+1),W=f+(V+1)+k*K;l.push(et,Z,W),l.push(Z,N,W),O+=6}a.addGroup(d,O,M),d+=O,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var ci={clone:ms,merge:qe},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new B,Kh=new It,jh=new It,Fe=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,Jl=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Fe(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let l=new Fe(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xo=class extends je{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Rn});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Tn),new Jl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ja=new B,zp=new B,Fp=new te,Bn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ja.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new qn,Vr=new B,Js=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],m=s[9],y=s[10],p=s[11],g=s[12],_=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,p-d,v-g).normalize(),n[1].setComponents(l+r,f+c,p+d,v+g).normalize(),n[2].setComponents(l+o,f+u,p+m,v+_).normalize(),n[3].setComponents(l-o,f-u,p-m,v-_).normalize(),n[4].setComponents(l-a,f-h,p-y,v-x).normalize(),e===Hn)n[5].setComponents(l+a,f+h,p+y,v+x).normalize();else if(e===ho)n[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],y=h[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hn=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let _=g*f-o;for(let x=0;x<c;x++){let v=x*h-r;m.push(v,-_,0),y.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let x=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),w=_+1+c*g;d.push(x,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Bp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:Zp,begin_vertex:$p,beginnormal_vertex:Jp,bsdfs:Kp,iridescence_fragment:jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:fm,emissivemap_fragment:dm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Pm,envmap_vertex:Mm,fog_vertex:bm,fog_pars_vertex:wm,fog_fragment:Sm,fog_pars_fragment:Em,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Im,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:zm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:km,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Zm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Km,morphcolor_vertex:jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:x0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:M0,shadowmap_vertex:b0,shadowmask_pars_fragment:w0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:I0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:z0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:k0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:Z0,equirect_frag:$0,linedashed_vert:J0,linedashed_frag:K0,meshbasic_vert:j0,meshbasic_frag:Q0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:xg},Ct={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},En={basic:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new At(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:qe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:qe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new At(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:qe([Ct.points,Ct.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:qe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:qe([Ct.common,Ct.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:qe([Ct.sprite,Ct.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:qe([Ct.common,Ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:qe([Ct.lights,Ct.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};En.physical={uniforms:qe([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Wr={r:0,b:0,g:0},vi=new Ze,yg=new Zt;function vg(i,t,e,n,s,r,o){let a=new At(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function y(_){let x=!1,v=m(_);v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,x){let v=m(x);v&&(v.isCubeTexture||v.mapping===ko)?(u===void 0&&(u=new Rt(new Ht(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:ms(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(x.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(vi)),u.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Rt(new hn(2,2),new Ae({name:"BackgroundMaterial",uniforms:ms(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,x){_.getRGB(Wr,nf(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:y,addToRenderList:p}}function _g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,C,U,z,D){let k=!1,L=h(z,U,C);r!==L&&(r=L,c(r.object)),k=d(b,z,U,D),k&&m(b,z,U,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(b,C,U,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,C,U){let z=U.wireframe===!0,D=n[b.id];D===void 0&&(D={},n[b.id]=D);let k=D[C.id];k===void 0&&(k={},D[C.id]=k);let L=k[z];return L===void 0&&(L=f(l()),k[z]=L),L}function f(b){let C=[],U=[],z=[];for(let D=0;D<e;D++)C[D]=0,U[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,C,U,z){let D=r.attributes,k=C.attributes,L=0,H=U.getAttributes();for(let O in H)if(H[O].location>=0){let K=D[O],V=k[O];if(V===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),K===void 0||K.attribute!==V||V&&K.data!==V.data)return!0;L++}return r.attributesNum!==L||r.index!==z}function m(b,C,U,z){let D={},k=C.attributes,L=0,H=U.getAttributes();for(let O in H)if(H[O].location>=0){let K=k[O];K===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));let V={};V.attribute=K,K&&K.data&&(V.data=K.data),D[O]=V,L++}r.attributes=D,r.attributesNum=L,r.index=z}function y(){let b=r.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function p(b){g(b,0)}function g(b,C){let U=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;U[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),D[b]!==C&&(i.vertexAttribDivisor(b,C),D[b]=C)}function _(){let b=r.newAttributes,C=r.enabledAttributes;for(let U=0,z=C.length;U<z;U++)C[U]!==b[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function x(b,C,U,z,D,k,L){L===!0?i.vertexAttribIPointer(b,C,U,D,k):i.vertexAttribPointer(b,C,U,z,D,k)}function v(b,C,U,z){y();let D=z.attributes,k=U.getAttributes(),L=C.defaultAttributeValues;for(let H in k){let O=k[H];if(O.location>=0){let q=D[H];if(q===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){let K=q.normalized,V=q.itemSize,et=t.get(q);if(et===void 0)continue;let Z=et.buffer,N=et.type,W=et.bytesPerElement,j=N===i.INT||N===i.UNSIGNED_INT||q.gpuType===Nc;if(q.isInterleavedBufferAttribute){let Q=q.data,X=Q.stride,st=q.offset;if(Q.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)g(O.location+ut,Q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ut=0;ut<O.locationSize;ut++)x(O.location+ut,V/O.locationSize,N,K,X*W,(st+V/O.locationSize*ut)*W,j)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<O.locationSize;Q++)g(O.location+Q,q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<O.locationSize;Q++)p(O.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Q=0;Q<O.locationSize;Q++)x(O.location+Q,V/O.locationSize,N,K,V*W,V/O.locationSize*Q*W,j)}}else if(L!==void 0){let K=L[H];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}_()}function S(){T();for(let b in n){let C=n[b];for(let U in C){let z=C[U];for(let D in z)u(z[D].object),delete z[D];delete C[U]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let U in C){let z=C[U];for(let D in z)u(z[D].object),delete z[D];delete C[U]}delete n[b.id]}function E(b){for(let C in n){let U=n[C];if(U[b.id]===void 0)continue;let z=U[b.id];for(let D in z)u(z[D].object),delete z[D];delete U[b.id]}}function T(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function Mg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let y=0;y<h;y++)m+=u[y]*f[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==An&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:w}}function wg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let _=r?0:n,x=_*4,v=g.clippingState||null;l.value=v,v=u(m,f,x,d);for(let S=0;S!==x;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=d+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Sg(i){let t=new WeakMap;function e(o,a){return a===gl?o.mapping=ls:a===xl&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gl||a===xl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var gs=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,Qh=[.125,.215,.35,.446,.526,.582],wi=20,Ka=new gs,tu=new At,ja=null,Qa=0,tl=0,el=!1,Mi=(1+Math.sqrt(5))/2,$i=1/Mi,eu=[new B(-Mi,$i,0),new B(Mi,$i,0),new B(-$i,0,Mi),new B($i,0,Mi),new B(0,Mi,-$i),new B(0,Mi,$i),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Qa,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:_n,format:yn,colorSpace:vs,depthBuffer:!1},s=nu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Tg(r,t,e)}return s}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,s){let a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tu),u.toneMapping=ii,u.autoClear=!1;let d=new Oe({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Rt(new Ht,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(tu),y=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let x=this._cubeSize;Xr(s,_*x,g>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Rt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),y=r/m,p=isFinite(r)?1+Math.floor(u*y):wi;p>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);let g=[],_=0;for(let E=0;E<wi;++E){let T=E/y,M=Math.exp(-T*T/2);g.push(M),E===0?_+=M:E<p&&(_+=2*M)}for(let E=0;E<g.length;E++)g[E]=g[E]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let v=this._sizeLods[s],S=3*v*(s>x-es?s-x+es:0),w=4*(this._cubeSize-v);Xr(e,S,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Ka)}};function Eg(i){let t=[],e=[],n=[],s=i,r=i-es+1+Qh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-es?l=Qh[o-i+es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,y=3,p=2,g=1,_=new Float32Array(y*m*d),x=new Float32Array(p*m*d),v=new Float32Array(g*m*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,T=w>2?0:-1,M=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(M,y*m*w),x.set(f,p*m*w);let b=[w,w,w,w,w,w];v.set(b,g*m*w)}let S=new se;S.setAttribute("position",new me(_,y)),S.setAttribute("uv",new me(x,p)),S.setAttribute("faceIndex",new me(v,g)),t.push(S),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){let n=new Float32Array(wi),s=new B(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function iu(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function su(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Ag(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===gl||l===xl,u=l===ls||l===cs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yo(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new yo(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let y=f.morphAttributes[m];for(let p=0,g=y.length;p<g;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let y=d[m];for(let p=0,g=y.length;p<g;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,m=h.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let x=0,v=_.length;x<v;x+=3){let S=_[x+0],w=_[x+1],E=_[x+2];f.push(S,w,w,E,E,S)}}else if(m!==void 0){let _=m.array;y=m.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let S=x+0,w=x+1,E=x+2;f.push(S,w,w,E,E,S)}}else return;let p=new(tf(f)?ps:ds)(f,1);p.version=y;let g=r.get(h);g&&t.remove(g),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ig(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function h(f,d,m,y){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_]*y[_];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),y===!0&&(x=3);let v=a.attributes.position.count*x,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*h),E=new po(w,v,S,h);E.type=An,E.needsUpdate=!0;let T=x*4;for(let b=0;b<h;b++){let C=p[b],U=g[b],z=_[b],D=v*S*4*b;for(let k=0;k<C.count;k++){let L=k*T;d===!0&&(s.fromBufferAttribute(C,k),w[D+L+0]=s.x,w[D+L+1]=s.y,w[D+L+2]=s.z,w[D+L+3]=0),m===!0&&(s.fromBufferAttribute(U,k),w[D+L+4]=s.x,w[D+L+5]=s.y,w[D+L+6]=s.z,w[D+L+7]=0),y===!0&&(s.fromBufferAttribute(z,k),w[D+L+8]=s.x,w[D+L+9]=s.y,w[D+L+10]=s.z,w[D+L+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new It(v,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Dg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vo=class extends je{constructor(t,e,n,s,r,o,a,l,c,u=ss){if(u!==ss&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ss&&(n=Ei),n===void 0&&u===us&&(n=hs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rf=new je,ru=new vo(1,1),of=new po,af=new $l,lf=new xo,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Pe(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),Pe(e,n)}}function kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),Pe(e,n)}}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=Ku,r=ru):r=rf,e.setTexture2D(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||af,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lf,s)}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||of,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return zg;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return kg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}function tx(i,t){i.uniform1fv(this.addr,t)}function ex(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function nx(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function ix(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function sx(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rx(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ox(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ax(i,t){i.uniform1iv(this.addr,t)}function lx(i,t){i.uniform2iv(this.addr,t)}function cx(i,t){i.uniform3iv(this.addr,t)}function hx(i,t){i.uniform4iv(this.addr,t)}function ux(i,t){i.uniform1uiv(this.addr,t)}function fx(i,t){i.uniform2uiv(this.addr,t)}function dx(i,t){i.uniform3uiv(this.addr,t)}function px(i,t){i.uniform4uiv(this.addr,t)}function mx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rf,r[o])}function gx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||af,r[o])}function xx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lf,r[o])}function yx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||of,r[o])}function vx(i){switch(i){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function _x(i,t,e){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uu(e,c===void 0?new jl(a,i,t):new Ql(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new tc(a),uu(e,h)),e=h}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_x(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mx=37297,bx=0;function wx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var du=new te;function Sx(i){oe._getMatrix(du,oe.workingColorSpace,i);let t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wx(i.getShaderSource(t),o)}else return s}function Ex(i,t){let e=Sx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tx(i,t){let e;switch(t){case Ic:e="Linear";break;case Pc:e="Reinhard";break;case Lc:e="Cineon";break;case lr:e="ACESFilmic";break;case Dc:e="AgX";break;case Uc:e="Neutral";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qr=new B;function Ax(){oe.getLuminanceCoefficients(qr);let i=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Cx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ix(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Px,Dx)}var Lx=new Map;function Dx(i,t){let e=ee[t];if(e===void 0){let n=Lx.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(i){return i.replace(Ux,Nx)}function Nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Fx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ox(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bo:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function kx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zx(e),c=Fx(e),u=Ox(e),h=Bx(e),f=kx(e),d=Rx(e),m=Cx(r),y=s.createProgram(),p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ws).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ws).join(`
`),g.length>0&&(g+=`
`)):(p=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),g=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ee.tonemapping_pars_fragment:"",e.toneMapping!==ii?Tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=ec(o),o=mu(o,e),o=gu(o,e),a=ec(a),a=mu(a,e),a=gu(a,e),o=xu(o),a=xu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=_+p+o,v=_+g+a,S=fu(s,s.VERTEX_SHADER,x),w=fu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(S).trim(),D=s.getShaderInfoLog(w).trim(),k=!0,L=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,w);else{let H=pu(s,S,"vertex"),O=pu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+H+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||D==="")&&(L=!1);L&&(C.diagnostics={runnable:k,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:D,prefix:g}})}s.deleteShader(S),s.deleteShader(w),T=new os(s,y),M=Ix(s,y)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Mx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=w,this}var Gx=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=Gx++,this.code=t,this.usedTimes=0}};function Vx(i,t,e,n,s,r,o){let a=new mo,l=new nc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,b,C,U,z){let D=U.fog,k=z.geometry,L=M.isMeshStandardMaterial?U.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||L),O=H&&H.mapping===ko?H.image.height:null,q=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,V=K!==void 0?K.length:0,et=0;k.morphAttributes.position!==void 0&&(et=1),k.morphAttributes.normal!==void 0&&(et=2),k.morphAttributes.color!==void 0&&(et=3);let Z,N,W,j;if(q){let de=En[q];Z=de.vertexShader,N=de.fragmentShader}else Z=M.vertexShader,N=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let Q=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),st=z.isInstancedMesh===!0,ut=z.isBatchedMesh===!0,ot=!!M.map,nt=!!M.matcap,xt=!!H,F=!!M.aoMap,vt=!!M.lightMap,yt=!!M.bumpMap,bt=!!M.normalMap,ht=!!M.displacementMap,Nt=!!M.emissiveMap,lt=!!M.metalnessMap,I=!!M.roughnessMap,A=M.anisotropy>0,G=M.clearcoat>0,rt=M.dispersion>0,it=M.iridescence>0,tt=M.sheen>0,ft=M.transmission>0,pt=A&&!!M.anisotropyMap,_t=G&&!!M.clearcoatMap,Wt=G&&!!M.clearcoatNormalMap,mt=G&&!!M.clearcoatRoughnessMap,Tt=it&&!!M.iridescenceMap,zt=it&&!!M.iridescenceThicknessMap,Vt=tt&&!!M.sheenColorMap,St=tt&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Yt=!!M.specularColorMap,re=!!M.specularIntensityMap,Y=ft&&!!M.transmissionMap,Et=ft&&!!M.thicknessMap,dt=!!M.gradientMap,gt=!!M.alphaMap,Dt=M.alphaTest>0,Pt=!!M.alphaHash,jt=!!M.extensions,Ee=ii;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let Be={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:N,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ut,batchingColor:ut&&z._colorsTexture!==null,instancing:st,instancingColor:st&&z.instanceColor!==null,instancingMorph:st&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vs,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:nt,envMap:xt,envMapMode:xt&&H.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:vt,bumpMap:yt,normalMap:bt,displacementMap:f&&ht,emissiveMap:Nt,normalMapObjectSpace:bt&&M.normalMapType===Yd,normalMapTangentSpace:bt&&M.normalMapType===Ho,metalnessMap:lt,roughnessMap:I,anisotropy:A,anisotropyMap:pt,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:Wt,clearcoatRoughnessMap:mt,dispersion:rt,iridescence:it,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:St,specularMap:qt,specularColorMap:Yt,specularIntensityMap:re,transmission:ft,transmissionMap:Y,thicknessMap:Et,gradientMap:dt,opaque:M.transparent===!1&&M.blending===is&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:Dt,alphaHash:Pt,combine:M.combine,mapUv:ot&&y(M.map.channel),aoMapUv:F&&y(M.aoMap.channel),lightMapUv:vt&&y(M.lightMap.channel),bumpMapUv:yt&&y(M.bumpMap.channel),normalMapUv:bt&&y(M.normalMap.channel),displacementMapUv:ht&&y(M.displacementMap.channel),emissiveMapUv:Nt&&y(M.emissiveMap.channel),metalnessMapUv:lt&&y(M.metalnessMap.channel),roughnessMapUv:I&&y(M.roughnessMap.channel),anisotropyMapUv:pt&&y(M.anisotropyMap.channel),clearcoatMapUv:_t&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&y(M.sheenRoughnessMap.channel),specularMapUv:qt&&y(M.specularMap.channel),specularColorMapUv:Yt&&y(M.specularColorMap.channel),specularIntensityMapUv:re&&y(M.specularIntensityMap.channel),transmissionMapUv:Y&&y(M.transmissionMap.channel),thicknessMapUv:Et&&y(M.thicknessMap.channel),alphaMapUv:gt&&y(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(bt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(ot||gt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:Nt&&M.emissiveMap.isVideoTexture===!0&&oe.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ce,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:jt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&M.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function g(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function _(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let b=m[M.type],C;if(b){let U=En[b];C=ci.clone(U.uniforms)}else C=M.uniforms;return C}function S(M,b){let C;for(let U=0,z=u.length;U<z;U++){let D=u[U];if(D.cacheKey===b){C=D,++C.usedTimes;break}}return C===void 0&&(C=new Hx(i,b,M,r),u.push(C)),C}function w(M){if(--M.usedTimes===0){let b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:T}}function Wx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _u(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,m,y,p){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:y,group:p},i[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=y,g.group=p),t++,g}function a(h,f,d,m,y,p){let g=o(h,f,d,m,y,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(h,f,d,m,y,p){let g=o(h,f,d,m,y,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||Xx),n.length>1&&n.sort(f||vu),s.length>1&&s.sort(f||vu)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function qx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _u,i.set(n,[o])):s>=r.length?(o=new _u,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new At};break;case"SpotLight":e={position:new B,direction:new B,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $x=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kx(i){let t=new Yx,e=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Zt,o=new Zt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,_=0,x=0,v=0,S=0,w=0,E=0;c.sort(Jx);for(let M=0,b=c.length;M<b;M++){let C=c[M],U=C.color,z=C.intensity,D=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*z,h+=U.g*z,f+=U.b*z;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],z);E++}else if(C.isDirectionalLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,O=e.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=L,d++}else if(C.isSpotLight){let L=t.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(U).multiplyScalar(z),L.distance=D,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[y]=L;let H=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,H.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=H.matrix,C.castShadow){let O=e.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=k,v++}y++}else if(C.isRectAreaLight){let L=t.get(C);L.color.copy(U).multiplyScalar(z),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=L,p++}else if(C.isPointLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){let H=C.shadow,O=e.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=C.shadow.matrix,x++}n.point[m]=L,m++}else if(C.isHemisphereLight){let L=t.get(C);L.skyColor.copy(C.color).multiplyScalar(z),L.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[g]=L,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==p||T.hemiLength!==g||T.numDirectionalShadows!==_||T.numPointShadows!==x||T.numSpotShadows!==v||T.numSpotMaps!==S||T.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,T.directionalLength=d,T.pointLength=m,T.spotLength=y,T.rectAreaLength=p,T.hemiLength=g,T.numDirectionalShadows=_,T.numPointShadows=x,T.numSpotShadows=v,T.numSpotMaps=S,T.numLightProbes=E,n.version=$x++)}function l(c,u){let h=0,f=0,d=0,m=0,y=0,p=u.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){let x=c[g];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function Mu(i){let t=new Kx(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mu(i),t.set(s,[a])):r>=o.length?(a=new Mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sc=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
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
}`;function ey(i,t,e){let n=new Js,s=new It,r=new It,o=new xe,a=new sc({depthPacking:qd}),l=new rc,c={},u=e.maxTextureSize,h={[si]:Ge,[Ge]:si,[ce]:ce},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Qx,fragmentShader:ty}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new se;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Rt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let g=this.type;this.render=function(w,E,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Rn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=g!==On&&this.type===On,D=g===On&&this.type!==On;for(let k=0,L=w.length;k<L;k++){let H=w[k],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let q=O.getFrameExtents();if(s.multiply(q),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,O.mapSize.y=r.y)),O.map===null||z===!0||D===!0){let V=this.type!==On?{minFilter:rn,magFilter:rn}:{};O.map!==null&&O.map.dispose(),O.map=new Ye(s.x,s.y,V),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let K=O.getViewportCount();for(let V=0;V<K;V++){let et=O.getViewport(V);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),U.viewport(o),O.updateMatrices(H,V),n=O.getFrustum(),v(E,T,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===On&&_(O,T),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(M,b,C)};function _(w,E){let T=t.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ye(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,T,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,T,d,y,null)}function x(w,E,T,M){let b=null,C=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=T.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let U=b.uuid,z=E.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let k=D[z];k===void 0&&(k=b.clone(),D[z]=k,E.addEventListener("dispose",S)),b=k}if(b.visible=E.visible,b.wireframe=E.wireframe,M===On?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=T}return b}function v(w,E,T,M,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===On)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let z=t.update(w),D=w.material;if(Array.isArray(D)){let k=z.groups;for(let L=0,H=k.length;L<H;L++){let O=k[L],q=D[O.materialIndex];if(q&&q.visible){let K=x(w,q,M,b);w.onBeforeShadow(i,w,E,T,z,K,O),i.renderBufferDirect(T,null,z,K,w,O),w.onAfterShadow(i,w,E,T,z,K,O)}}}else if(D.visible){let k=x(w,D,M,b);w.onBeforeShadow(i,w,E,T,z,k,null),i.renderBufferDirect(T,null,z,k,w,null),w.onAfterShadow(i,w,E,T,z,k,null)}}let U=w.children;for(let z=0,D=U.length;z<D;z++)v(U[z],E,T,M,b)}function S(w){w.target.removeEventListener("dispose",S);for(let T in c){let M=c[T],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var ny={[cl]:hl,[ul]:pl,[fl]:ml,[as]:dl,[hl]:cl,[pl]:ul,[ml]:fl,[dl]:as};function iy(i,t){function e(){let Y=!1,Et=new xe,dt=null,gt=new xe(0,0,0,0);return{setMask:function(Dt){dt!==Dt&&!Y&&(i.colorMask(Dt,Dt,Dt,Dt),dt=Dt)},setLocked:function(Dt){Y=Dt},setClear:function(Dt,Pt,jt,Ee,Be){Be===!0&&(Dt*=Ee,Pt*=Ee,jt*=Ee),Et.set(Dt,Pt,jt,Ee),gt.equals(Et)===!1&&(i.clearColor(Dt,Pt,jt,Ee),gt.copy(Et))},reset:function(){Y=!1,dt=null,gt.set(-1,0,0,0)}}}function n(){let Y=!1,Et=!1,dt=null,gt=null,Dt=null;return{setReversed:function(Pt){if(Et!==Pt){let jt=t.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=Dt;Dt=null,this.setClear(Ee)}Et=Pt},getReversed:function(){return Et},setTest:function(Pt){Pt?Q(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Pt){dt!==Pt&&!Y&&(i.depthMask(Pt),dt=Pt)},setFunc:function(Pt){if(Et&&(Pt=ny[Pt]),gt!==Pt){switch(Pt){case cl:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Pt}},setLocked:function(Pt){Y=Pt},setClear:function(Pt){Dt!==Pt&&(Et&&(Pt=1-Pt),i.clearDepth(Pt),Dt=Pt)},reset:function(){Y=!1,dt=null,gt=null,Dt=null,Et=!1}}}function s(){let Y=!1,Et=null,dt=null,gt=null,Dt=null,Pt=null,jt=null,Ee=null,Be=null;return{setTest:function(de){Y||(de?Q(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(de){Et!==de&&!Y&&(i.stencilMask(de),Et=de)},setFunc:function(de,fn,Pn){(dt!==de||gt!==fn||Dt!==Pn)&&(i.stencilFunc(de,fn,Pn),dt=de,gt=fn,Dt=Pn)},setOp:function(de,fn,Pn){(Pt!==de||jt!==fn||Ee!==Pn)&&(i.stencilOp(de,fn,Pn),Pt=de,jt=fn,Ee=Pn)},setLocked:function(de){Y=de},setClear:function(de){Be!==de&&(i.clearStencil(de),Be=de)},reset:function(){Y=!1,Et=null,dt=null,gt=null,Dt=null,Pt=null,jt=null,Ee=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,y=!1,p=null,g=null,_=null,x=null,v=null,S=null,w=null,E=new At(0,0,0),T=0,M=!1,b=null,C=null,U=null,z=null,D=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,H=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=H>=2);let q=null,K={},V=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),Z=new xe().fromArray(V),N=new xe().fromArray(et);function W(Y,Et,dt,gt){let Dt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(Y,Pt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<dt;jt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Et+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Pt}let j={};j[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(as),yt(!1),bt(Sh),Q(i.CULL_FACE),F(Rn);function Q(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function X(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function st(Y,Et){return h[Y]!==Et?(i.bindFramebuffer(Y,Et),h[Y]=Et,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ut(Y,Et){let dt=d,gt=!1;if(Y){dt=f.get(Et),dt===void 0&&(dt=[],f.set(Et,dt));let Dt=Y.textures;if(dt.length!==Dt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,jt=Dt.length;Pt<jt;Pt++)dt[Pt]=i.COLOR_ATTACHMENT0+Pt;dt.length=Dt.length,gt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(dt)}function ot(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}let nt={[bi]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};nt[Td]=i.MIN,nt[Ad]=i.MAX;let xt={[Rd]:i.ZERO,[Cd]:i.ONE,[Id]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(Y,Et,dt,gt,Dt,Pt,jt,Ee,Be,de){if(Y===Rn){y===!0&&(X(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),Y!==wd){if(Y!==p||de!==M){if((g!==bi||v!==bi)&&(i.blendEquation(i.FUNC_ADD),g=bi,v=bi),de)switch(Y){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}_=null,x=null,S=null,w=null,E.set(0,0,0),T=0,p=Y,M=de}return}Dt=Dt||Et,Pt=Pt||dt,jt=jt||gt,(Et!==g||Dt!==v)&&(i.blendEquationSeparate(nt[Et],nt[Dt]),g=Et,v=Dt),(dt!==_||gt!==x||Pt!==S||jt!==w)&&(i.blendFuncSeparate(xt[dt],xt[gt],xt[Pt],xt[jt]),_=dt,x=gt,S=Pt,w=jt),(Ee.equals(E)===!1||Be!==T)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Be),E.copy(Ee),T=Be),p=Y,M=!1}function vt(Y,Et){Y.side===ce?X(i.CULL_FACE):Q(i.CULL_FACE);let dt=Y.side===Ge;Et&&(dt=!dt),yt(dt),Y.blending===is&&Y.transparent===!1?F(Rn):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let gt=Y.stencilWrite;a.setTest(gt),gt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Nt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(Y){b!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),b=Y)}function bt(Y){Y!==Md?(Q(i.CULL_FACE),Y!==C&&(Y===Sh?i.cullFace(i.BACK):Y===bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),C=Y}function ht(Y){Y!==U&&(L&&i.lineWidth(Y),U=Y)}function Nt(Y,Et,dt){Y?(Q(i.POLYGON_OFFSET_FILL),(z!==Et||D!==dt)&&(i.polygonOffset(Et,dt),z=Et,D=dt)):X(i.POLYGON_OFFSET_FILL)}function lt(Y){Y?Q(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function I(Y){Y===void 0&&(Y=i.TEXTURE0+k-1),q!==Y&&(i.activeTexture(Y),q=Y)}function A(Y,Et,dt){dt===void 0&&(q===null?dt=i.TEXTURE0+k-1:dt=q);let gt=K[dt];gt===void 0&&(gt={type:void 0,texture:void 0},K[dt]=gt),(gt.type!==Y||gt.texture!==Et)&&(q!==dt&&(i.activeTexture(dt),q=dt),i.bindTexture(Y,Et||j[Y]),gt.type=Y,gt.texture=Et)}function G(){let Y=K[q];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(Y){Z.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Z.copy(Y))}function St(Y){N.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),N.copy(Y))}function qt(Y,Et){let dt=c.get(Et);dt===void 0&&(dt=new WeakMap,c.set(Et,dt));let gt=dt.get(Y);gt===void 0&&(gt=i.getUniformBlockIndex(Et,Y.name),dt.set(Y,gt))}function Yt(Y,Et){let gt=c.get(Et).get(Y);l.get(Et)!==gt&&(i.uniformBlockBinding(Et,gt,Y.__bindingPointIndex),l.set(Et,gt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,K={},h={},f=new WeakMap,d=[],m=null,y=!1,p=null,g=null,_=null,x=null,v=null,S=null,w=null,E=new At(0,0,0),T=0,M=!1,b=null,C=null,U=null,z=null,D=null,Z.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:X,bindFramebuffer:st,drawBuffers:ut,useProgram:ot,setBlending:F,setMaterial:vt,setFlipSided:yt,setCullFace:bt,setLineWidth:ht,setPolygonOffset:Nt,setScissorTest:lt,activeTexture:I,bindTexture:A,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:it,texImage2D:Tt,texImage3D:zt,updateUBOMapping:qt,uniformBlockBinding:Yt,texStorage2D:Wt,texStorage3D:mt,texSubImage2D:tt,texSubImage3D:ft,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Vt,viewport:St,reset:re}}function bu(i,t,e,n){let s=sy(n);switch(e){case Xu:return i*t;case Yu:return i*t;case Zu:return i*t*2;case Oc:return i*t/s.components*s.byteLength;case Bc:return i*t/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case bl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case kl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ju:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sy(i){switch(i){case Wn:case Gu:return{byteLength:1,components:1};case Zs:case Vu:case _n:return{byteLength:2,components:1};case zc:case Fc:return{byteLength:2,components:4};case Ei:case Nc:case An:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ry(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return d?new OffscreenCanvas(I,A):uo("canvas")}function y(I,A,G){let rt=1,it=lt(I);if((it.width>G||it.height>G)&&(rt=G/Math.max(it.width,it.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let tt=Math.floor(rt*it.width),ft=Math.floor(rt*it.height);h===void 0&&(h=m(tt,ft));let pt=A?m(tt,ft):h;return pt.width=tt,pt.height=ft,pt.getContext("2d").drawImage(I,0,0,tt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+ft+")."),pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function p(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,A,G,rt,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let tt=A;if(A===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),A===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8)),A===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),A===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),A===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),A===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),A===i.RGBA){let ft=it?Go:oe.getTransfer(rt);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=ft===fe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(I,A){let G;return I?A===null||A===Ei||A===hs?G=i.DEPTH24_STENCIL8:A===An?G=i.DEPTH32F_STENCIL8:A===Zs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ei||A===hs?G=i.DEPTH_COMPONENT24:A===An?G=i.DEPTH_COMPONENT32F:A===Zs&&(G=i.DEPTH_COMPONENT16),G}function S(I,A){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==Tn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){let A=I.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&u.delete(A)}function E(I){let A=I.target;A.removeEventListener("dispose",E),b(A)}function T(I){let A=n.get(I);if(A.__webglInit===void 0)return;let G=I.source,rt=f.get(G);if(rt){let it=rt[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&M(I),Object.keys(rt).length===0&&f.delete(G)}n.remove(I)}function M(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let G=I.source,rt=f.get(G);delete rt[A.__cacheKey],o.memory.textures--}function b(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let it=0;it<A.__webglFramebuffer[rt].length;it++)i.deleteFramebuffer(A.__webglFramebuffer[rt][it]);else i.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)i.deleteFramebuffer(A.__webglFramebuffer[rt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let G=I.textures;for(let rt=0,it=G.length;rt<it;rt++){let tt=n.get(G[rt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(G[rt])}n.remove(I)}let C=0;function U(){C=0}function z(){let I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function D(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function k(I,A){let G=n.get(I);if(I.isVideoTexture&&ht(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let rt=I.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(G,I,A);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function L(I,A){let G=n.get(I);if(I.version>0&&G.__version!==I.version){N(G,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function H(I,A){let G=n.get(I);if(I.version>0&&G.__version!==I.version){N(G,I,A);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function O(I,A){let G=n.get(I);if(I.version>0&&G.__version!==I.version){W(G,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}let q={[oi]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},K={[rn]:i.NEAREST,[Wd]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},V={[Zd]:i.NEVER,[tp]:i.ALWAYS,[$d]:i.LESS,[Ku]:i.LEQUAL,[Jd]:i.EQUAL,[Qd]:i.GEQUAL,[Kd]:i.GREATER,[jd]:i.NOTEQUAL};function et(I,A){if(A.type===An&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Tn||A.magFilter===Ca||A.magFilter===Tr||A.magFilter===Si||A.minFilter===Tn||A.minFilter===Ca||A.minFilter===Tr||A.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,q[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,K[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==Tr&&A.minFilter!==Si||A.type===An&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Z(I,A){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",w));let rt=A.source,it=f.get(rt);it===void 0&&(it={},f.set(rt,it));let tt=D(A);if(tt!==I.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[tt].usedTimes++;let ft=it[I.__cacheKey];ft!==void 0&&(it[I.__cacheKey].usedTimes--,ft.usedTimes===0&&M(A)),I.__cacheKey=tt,I.__webglTexture=it[tt].texture}return G}function N(I,A,G){let rt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=i.TEXTURE_3D);let it=Z(I,A),tt=A.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+G);let ft=n.get(tt);if(tt.version!==ft.__version||it===!0){e.activeTexture(i.TEXTURE0+G);let pt=oe.getPrimaries(oe.workingColorSpace),_t=A.colorSpace===ei?null:oe.getPrimaries(A.colorSpace),Wt=A.colorSpace===ei||pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let mt=y(A.image,!1,s.maxTextureSize);mt=Nt(A,mt);let Tt=r.convert(A.format,A.colorSpace),zt=r.convert(A.type),Vt=x(A.internalFormat,Tt,zt,A.colorSpace,A.isVideoTexture);et(rt,A);let St,qt=A.mipmaps,Yt=A.isVideoTexture!==!0,re=ft.__version===void 0||it===!0,Y=tt.dataReady,Et=S(A,mt);if(A.isDepthTexture)Vt=v(A.format===us,A.type),re&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Vt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Tt,zt,null));else if(A.isDataTexture)if(qt.length>0){Yt&&re&&e.texStorage2D(i.TEXTURE_2D,Et,Vt,qt[0].width,qt[0].height);for(let dt=0,gt=qt.length;dt<gt;dt++)St=qt[dt],Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Tt,zt,St.data):e.texImage2D(i.TEXTURE_2D,dt,Vt,St.width,St.height,0,Tt,zt,St.data);A.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(i.TEXTURE_2D,Et,Vt,mt.width,mt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Tt,zt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Tt,zt,mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Yt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Vt,qt[0].width,qt[0].height,mt.depth);for(let dt=0,gt=qt.length;dt<gt;dt++)if(St=qt[dt],A.format!==yn)if(Tt!==null)if(Yt){if(Y)if(A.layerUpdates.size>0){let Dt=bu(St.width,St.height,A.format,A.type);for(let Pt of A.layerUpdates){let jt=St.data.subarray(Pt*Dt/St.data.BYTES_PER_ELEMENT,(Pt+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Pt,St.width,St.height,1,Tt,jt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,mt.depth,Tt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Vt,St.width,St.height,mt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,mt.depth,Tt,zt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Vt,St.width,St.height,mt.depth,0,Tt,zt,St.data)}else{Yt&&re&&e.texStorage2D(i.TEXTURE_2D,Et,Vt,qt[0].width,qt[0].height);for(let dt=0,gt=qt.length;dt<gt;dt++)St=qt[dt],A.format!==yn?Tt!==null?Yt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Tt,zt,St.data):e.texImage2D(i.TEXTURE_2D,dt,Vt,St.width,St.height,0,Tt,zt,St.data)}else if(A.isDataArrayTexture)if(Yt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Vt,mt.width,mt.height,mt.depth),Y)if(A.layerUpdates.size>0){let dt=bu(mt.width,mt.height,A.format,A.type);for(let gt of A.layerUpdates){let Dt=mt.data.subarray(gt*dt/mt.data.BYTES_PER_ELEMENT,(gt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,mt.width,mt.height,1,Tt,zt,Dt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Tt,zt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,mt.width,mt.height,mt.depth,0,Tt,zt,mt.data);else if(A.isData3DTexture)Yt?(re&&e.texStorage3D(i.TEXTURE_3D,Et,Vt,mt.width,mt.height,mt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Tt,zt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,mt.width,mt.height,mt.depth,0,Tt,zt,mt.data);else if(A.isFramebufferTexture){if(re)if(Yt)e.texStorage2D(i.TEXTURE_2D,Et,Vt,mt.width,mt.height);else{let dt=mt.width,gt=mt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Vt,dt,gt,0,Tt,zt,null),dt>>=1,gt>>=1}}else if(qt.length>0){if(Yt&&re){let dt=lt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Vt,dt.width,dt.height)}for(let dt=0,gt=qt.length;dt<gt;dt++)St=qt[dt],Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,zt,St):e.texImage2D(i.TEXTURE_2D,dt,Vt,Tt,zt,St);A.generateMipmaps=!1}else if(Yt){if(re){let dt=lt(mt);e.texStorage2D(i.TEXTURE_2D,Et,Vt,dt.width,dt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Tt,zt,mt);p(A)&&g(rt),ft.__version=tt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function W(I,A,G){if(A.image.length!==6)return;let rt=Z(I,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let tt=n.get(it);if(it.version!==tt.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);let ft=oe.getPrimaries(oe.workingColorSpace),pt=A.colorSpace===ei?null:oe.getPrimaries(A.colorSpace),_t=A.colorSpace===ei||ft===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Wt=A.isCompressedTexture||A.image[0].isCompressedTexture,mt=A.image[0]&&A.image[0].isDataTexture,Tt=[];for(let gt=0;gt<6;gt++)!Wt&&!mt?Tt[gt]=y(A.image[gt],!0,s.maxCubemapSize):Tt[gt]=mt?A.image[gt].image:A.image[gt],Tt[gt]=Nt(A,Tt[gt]);let zt=Tt[0],Vt=r.convert(A.format,A.colorSpace),St=r.convert(A.type),qt=x(A.internalFormat,Vt,St,A.colorSpace),Yt=A.isVideoTexture!==!0,re=tt.__version===void 0||rt===!0,Y=it.dataReady,Et=S(A,zt);et(i.TEXTURE_CUBE_MAP,A);let dt;if(Wt){Yt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,qt,zt.width,zt.height);for(let gt=0;gt<6;gt++){dt=Tt[gt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){let Pt=dt[Dt];A.format!==yn?Vt!==null?Yt?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Pt.width,Pt.height,Vt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Pt.width,Pt.height,Vt,St,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,qt,Pt.width,Pt.height,0,Vt,St,Pt.data)}}}else{if(dt=A.mipmaps,Yt&&re){dt.length>0&&Et++;let gt=lt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(mt){Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Tt[gt].width,Tt[gt].height,Vt,St,Tt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Tt[gt].width,Tt[gt].height,0,Vt,St,Tt[gt].data);for(let Dt=0;Dt<dt.length;Dt++){let jt=dt[Dt].image[gt].image;Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,jt.width,jt.height,Vt,St,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,qt,jt.width,jt.height,0,Vt,St,jt.data)}}else{Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,St,Tt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Vt,St,Tt[gt]);for(let Dt=0;Dt<dt.length;Dt++){let Pt=dt[Dt];Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,Vt,St,Pt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,qt,Vt,St,Pt.image[gt])}}}p(A)&&g(i.TEXTURE_CUBE_MAP),tt.__version=it.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function j(I,A,G,rt,it,tt){let ft=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),_t=x(G.internalFormat,ft,pt,G.colorSpace),Wt=n.get(A),mt=n.get(G);if(mt.__renderTarget=A,!Wt.__hasExternalTextures){let Tt=Math.max(1,A.width>>tt),zt=Math.max(1,A.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,_t,Tt,zt,A.depth,0,ft,pt,null):e.texImage2D(it,tt,_t,Tt,zt,0,ft,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,mt.__webglTexture,0,yt(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,mt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(I,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let rt=A.depthTexture,it=rt&&rt.isDepthTexture?rt.type:null,tt=v(A.stencilBuffer,it),ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=yt(A);bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,tt,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,tt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,I)}else{let rt=A.textures;for(let it=0;it<rt.length;it++){let tt=rt[it],ft=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),_t=x(tt.internalFormat,ft,pt,tt.colorSpace),Wt=yt(A);G&&bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,_t,A.width,A.height):bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,_t,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_t,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(A.depthTexture);rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let it=rt.__webglTexture,tt=yt(A);if(A.depthTexture.format===ss)bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(A.depthTexture.format===us)bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function st(I){let A=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let rt=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){let it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",it)};rt.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=rt}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");X(A.__webglFramebuffer,I)}else if(G){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=i.createRenderbuffer(),Q(A.__webglDepthbuffer[rt],I,!1);else{let it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=A.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Q(A.__webglDepthbuffer,I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,A,G){let rt=n.get(I);A!==void 0&&j(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&st(I)}function ot(I){let A=I.texture,G=n.get(I),rt=n.get(A);I.addEventListener("dispose",E);let it=I.textures,tt=I.isWebGLCubeRenderTarget===!0,ft=it.length>1;if(ft||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=A.version,o.memory.textures++),tt){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let _t=0;_t<A.mipmaps.length;_t++)G.__webglFramebuffer[pt][_t]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<A.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ft)for(let pt=0,_t=it.length;pt<_t;pt++){let Wt=n.get(it[pt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&bt(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){let _t=it[pt];G.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);let Wt=r.convert(_t.format,_t.colorSpace),mt=r.convert(_t.type),Tt=x(_t.internalFormat,Wt,mt,_t.colorSpace,I.isXRRenderTarget===!0),zt=yt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),et(i.TEXTURE_CUBE_MAP,A);for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)j(G.__webglFramebuffer[pt][_t],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else j(G.__webglFramebuffer[pt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(A)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let pt=0,_t=it.length;pt<_t;pt++){let Wt=it[pt],mt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),et(i.TEXTURE_2D,Wt),j(G.__webglFramebuffer,I,Wt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(Wt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,rt.__webglTexture),et(pt,A),A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)j(G.__webglFramebuffer[_t],I,A,i.COLOR_ATTACHMENT0,pt,_t);else j(G.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,pt,0);p(A)&&g(pt),e.unbindTexture()}I.depthBuffer&&st(I)}function nt(I){let A=I.textures;for(let G=0,rt=A.length;G<rt;G++){let it=A[G];if(p(it)){let tt=_(I),ft=n.get(it).__webglTexture;e.bindTexture(tt,ft),g(tt),e.unbindTexture()}}}let xt=[],F=[];function vt(I){if(I.samples>0){if(bt(I)===!1){let A=I.textures,G=I.width,rt=I.height,it=i.COLOR_BUFFER_BIT,tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(I),pt=A.length>1;if(pt)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Wt=n.get(A[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,it,i.NEAREST),l===!0&&(xt.length=0,F.length=0,xt.push(i.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(tt),F.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Wt=n.get(A[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function yt(I){return Math.min(s.maxSamples,I.samples)}function bt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(I){let A=o.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Nt(I,A){let G=I.colorSpace,rt=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==vs&&G!==ei&&(oe.getTransfer(G)===fe?(rt!==yn||it!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=j,this.useMultisampledRTT=bt}function oy(i,t){function e(n,s=ei){let r,o=oe.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.BYTE;if(n===Vu)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Nc)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===yn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===Zu)return i.LUMINANCE_ALPHA;if(n===ss)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===$u)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===_l||n===Ml||n===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Sl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===kl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ju||n===Gl||n===Vl||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var oc=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},ay={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,y=new ac,p=e.getContextAttributes(),g=null,_=null,x=[],v=[],S=new It,w=null,E=new Fe;E.viewport=new xe;let T=new Fe;T.viewport=new xe;let M=[E,T],b=new oc,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let W=x[N];return W===void 0&&(W=new Ys,x[N]=W),W.getTargetRaySpace()},this.getControllerGrip=function(N){let W=x[N];return W===void 0&&(W=new Ys,x[N]=W),W.getGripSpace()},this.getHand=function(N){let W=x[N];return W===void 0&&(W=new Ys,x[N]=W),W.getHandSpace()};function z(N){let W=v.indexOf(N.inputSource);if(W===-1)return;let j=x[W];j!==void 0&&(j.update(N.inputSource,N.frame,c||o),j.dispatchEvent({type:N.type,data:N.inputSource}))}function D(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",k);for(let N=0;N<x.length;N++){let W=v[N];W!==null&&(v[N]=null,x[N].disconnect(W))}C=null,U=null,y.reset(),t.setRenderTarget(g),d=null,f=null,h=null,s=null,_=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",D),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){let W={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ye(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let W=null,j=null,Q=null;p.depth&&(Q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=p.stencil?us:ss,j=p.stencil?hs:Ei);let X={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ye(f.textureWidth,f.textureHeight,{format:yn,type:Wn,depthTexture:new vo(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(N){for(let W=0;W<N.removed.length;W++){let j=N.removed[W],Q=v.indexOf(j);Q>=0&&(v[Q]=null,x[Q].disconnect(j))}for(let W=0;W<N.added.length;W++){let j=N.added[W],Q=v.indexOf(j);if(Q===-1){for(let st=0;st<x.length;st++)if(st>=v.length){v.push(j),Q=st;break}else if(v[st]===null){v[st]=j,Q=st;break}if(Q===-1)break}let X=x[Q];X&&X.connect(j)}}let L=new B,H=new B;function O(N,W,j){L.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(j.matrixWorld);let Q=L.distanceTo(H),X=W.projectionMatrix.elements,st=j.projectionMatrix.elements,ut=X[14]/(X[10]-1),ot=X[14]/(X[10]+1),nt=(X[9]+1)/X[5],xt=(X[9]-1)/X[5],F=(X[8]-1)/X[0],vt=(st[8]+1)/st[0],yt=ut*F,bt=ut*vt,ht=Q/(-F+vt),Nt=ht*-F;if(W.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Nt),N.translateZ(ht),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),X[10]===-1)N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let lt=ut+ht,I=ot+ht,A=yt-Nt,G=bt+(Q-Nt),rt=nt*ot/I*lt,it=xt*ot/I*lt;N.projectionMatrix.makePerspective(A,G,rt,it,lt,I),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function q(N,W){W===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(W.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let W=N.near,j=N.far;y.texture!==null&&(y.depthNear>0&&(W=y.depthNear),y.depthFar>0&&(j=y.depthFar)),b.near=T.near=E.near=W,b.far=T.far=E.far=j,(C!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,U=b.far),E.layers.mask=N.layers.mask|2,T.layers.mask=N.layers.mask|4,b.layers.mask=E.layers.mask|T.layers.mask;let Q=N.parent,X=b.cameras;q(b,Q);for(let st=0;st<X.length;st++)q(X[st],Q);X.length===2?O(b,E,T):b.projectionMatrix.copy(E.projectionMatrix),K(N,b,Q)};function K(N,W,j){j===null?N.matrix.copy(W.matrixWorld):(N.matrix.copy(j.matrixWorld),N.matrix.invert(),N.matrix.multiply(W.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=fs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let V=null;function et(N,W){if(u=W.getViewerPose(c||o),m=W,u!==null){let j=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Q=!1;j.length!==b.cameras.length&&(b.cameras.length=0,Q=!0);for(let st=0;st<j.length;st++){let ut=j[st],ot=null;if(d!==null)ot=d.getViewport(ut);else{let xt=h.getViewSubImage(f,ut);ot=xt.viewport,st===0&&(t.setRenderTargetTextures(_,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(_))}let nt=M[st];nt===void 0&&(nt=new Fe,nt.layers.enable(st),nt.viewport=new xe,M[st]=nt),nt.matrix.fromArray(ut.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ut.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ot.x,ot.y,ot.width,ot.height),st===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Q===!0&&b.cameras.push(nt)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let st=h.getDepthInformation(j[0]);st&&st.isValid&&st.texture&&y.init(t,st,s.renderState)}}for(let j=0;j<x.length;j++){let Q=v[j],X=x[j];Q!==null&&X!==void 0&&X.update(Q,W,c||o)}V&&V(N,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let Z=new sf;Z.setAnimationLoop(et),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}},_i=new Ze,hy=new Zt;function uy(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nf(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ge&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ge&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=t.get(g),x=_.envMap,v=_.envMapRotation;x&&(p.envMap.value=x,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(_i)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function c(_,x){let v=s[_.id];v===void 0&&(m(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",p));let S=x.program;n.updateUBOMapping(_,S);let w=t.render.frame;r[_.id]!==w&&(f(_),r[_.id]=w)}function u(_){let x=h();_.__bindingPointIndex=x;let v=i.createBuffer(),S=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],v=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,E=v.length;w<E;w++){let T=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,b=T.length;M<b;M++){let C=T[M];if(d(C,w,M,S)===!0){let U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],D=0;for(let k=0;k<z.length;k++){let L=z[k],H=y(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,U+D,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,x,v,S){let w=_.value,E=x+"_"+v;if(S[E]===void 0)return typeof w=="number"||typeof w=="boolean"?S[E]=w:S[E]=w.clone(),!0;{let T=S[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return S[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function m(_){let x=_.uniforms,v=0,S=16;for(let E=0,T=x.length;E<T;E++){let M=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,C=M.length;b<C;b++){let U=M[b],z=Array.isArray(U.value)?U.value:[U.value];for(let D=0,k=z.length;D<k;D++){let L=z[D],H=y(L),O=v%S,q=O%H.boundary,K=O+q;v+=q,K!==0&&S-K<H.storage&&(v+=S-K),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=H.storage}}}let w=v%S;return w>0&&(v+=S-w),_.__size=v,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){let x=_.target;x.removeEventListener("dispose",p);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var _o=class{constructor(t={}){let{canvas:e=xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),y=new Int32Array(4),p=null,g=null,_=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=ii,this.toneMappingExposure=1;let v=this,S=!1,w=0,E=0,T=null,M=-1,b=null,C=new xe,U=new xe,z=null,D=new At(0),k=0,L=e.width,H=e.height,O=1,q=null,K=null,V=new xe(0,0,L,H),et=new xe(0,0,L,H),Z=!1,N=new Js,W=!1,j=!1,Q=new Zt,X=new Zt,st=new B,ut=new xe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function xt(){return T===null?O:1}let F=n;function vt(P,$){return e.getContext(P,$)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),F===null){let $="webgl2";if(F=vt($,P),F===null)throw vt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let yt,bt,ht,Nt,lt,I,A,G,rt,it,tt,ft,pt,_t,Wt,mt,Tt,zt,Vt,St,qt,Yt,re,Y;function Et(){yt=new Rg(F),yt.init(),Yt=new oy(F,yt),bt=new bg(F,yt,t,Yt),ht=new iy(F,yt),bt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Nt=new Pg(F),lt=new Wx,I=new ry(F,yt,ht,lt,bt,Yt,Nt),A=new Sg(v),G=new Ag(v),rt=new Op(F),re=new _g(F,rt),it=new Cg(F,rt,Nt,re),tt=new Dg(F,it,rt,Nt),Vt=new Lg(F,bt,I),mt=new wg(lt),ft=new Vx(v,A,G,yt,bt,re,mt),pt=new uy(v,lt),_t=new qx,Wt=new jx(yt),zt=new vg(v,A,G,ht,tt,d,l),Tt=new ey(v,tt,bt),Y=new fy(F,Nt,bt,ht),St=new Mg(F,yt,Nt),qt=new Ig(F,yt,Nt),Nt.programs=ft.programs,v.capabilities=bt,v.extensions=yt,v.properties=lt,v.renderLists=_t,v.shadowMap=Tt,v.state=ht,v.info=Nt}Et();let dt=new lc(v,F);this.xr=dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let P=yt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=yt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(P){P!==void 0&&(O=P,this.setSize(L,H,!1))},this.getSize=function(P){return P.set(L,H)},this.setSize=function(P,$,at=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=P,H=$,e.width=Math.floor(P*O),e.height=Math.floor($*O),at===!0&&(e.style.width=P+"px",e.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(L*O,H*O).floor()},this.setDrawingBufferSize=function(P,$,at){L=P,H=$,O=at,e.width=Math.floor(P*at),e.height=Math.floor($*at),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(V)},this.setViewport=function(P,$,at,ct){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,$,at,ct),ht.viewport(C.copy(V).multiplyScalar(O).round())},this.getScissor=function(P){return P.copy(et)},this.setScissor=function(P,$,at,ct){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,$,at,ct),ht.scissor(U.copy(et).multiplyScalar(O).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(P){ht.setScissorTest(Z=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(P=!0,$=!0,at=!0){let ct=0;if(P){let J=!1;if(T!==null){let wt=T.texture.format;J=wt===Hc||wt===kc||wt===Bc}if(J){let wt=T.texture.type,Lt=wt===Wn||wt===Ei||wt===Zs||wt===hs||wt===zc||wt===Fc,Ft=zt.getClearColor(),Ot=zt.getClearAlpha(),Jt=Ft.r,Qt=Ft.g,Bt=Ft.b;Lt?(m[0]=Jt,m[1]=Qt,m[2]=Bt,m[3]=Ot,F.clearBufferuiv(F.COLOR,0,m)):(y[0]=Jt,y[1]=Qt,y[2]=Bt,y[3]=Ot,F.clearBufferiv(F.COLOR,0,y))}else ct|=F.COLOR_BUFFER_BIT}$&&(ct|=F.DEPTH_BUFFER_BIT),at&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),_t.dispose(),Wt.dispose(),lt.dispose(),A.dispose(),G.dispose(),tt.dispose(),re.dispose(),Y.dispose(),ft.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",gh),dt.removeEventListener("sessionend",xh),pi.stop()};function gt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let P=Nt.autoReset,$=Tt.enabled,at=Tt.autoUpdate,ct=Tt.needsUpdate,J=Tt.type;Et(),Nt.autoReset=P,Tt.enabled=$,Tt.autoUpdate=at,Tt.needsUpdate=ct,Tt.type=J}function Pt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function jt(P){let $=P.target;$.removeEventListener("dispose",jt),Ee($)}function Ee(P){Be(P),lt.remove(P)}function Be(P){let $=lt.get(P).programs;$!==void 0&&($.forEach(function(at){ft.releaseProgram(at)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,at,ct,J,wt){$===null&&($=ot);let Lt=J.isMesh&&J.matrixWorld.determinant()<0,Ft=yd(P,$,at,ct,J);ht.setMaterial(ct,Lt);let Ot=at.index,Jt=1;if(ct.wireframe===!0){if(Ot=it.getWireframeAttribute(at),Ot===void 0)return;Jt=2}let Qt=at.drawRange,Bt=at.attributes.position,le=Qt.start*Jt,ye=(Qt.start+Qt.count)*Jt;wt!==null&&(le=Math.max(le,wt.start*Jt),ye=Math.min(ye,(wt.start+wt.count)*Jt)),Ot!==null?(le=Math.max(le,0),ye=Math.min(ye,Ot.count)):Bt!=null&&(le=Math.max(le,0),ye=Math.min(ye,Bt.count));let ve=ye-le;if(ve<0||ve===1/0)return;re.setup(J,ct,Ft,at,Ot);let Ke,he=St;if(Ot!==null&&(Ke=rt.get(Ot),he=qt,he.setIndex(Ke)),J.isMesh)ct.wireframe===!0?(ht.setLineWidth(ct.wireframeLinewidth*xt()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(J.isLine){let Gt=ct.linewidth;Gt===void 0&&(Gt=1),ht.setLineWidth(Gt*xt()),J.isLineSegments?he.setMode(F.LINES):J.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else J.isPoints?he.setMode(F.POINTS):J.isSprite&&he.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)he.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))he.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Gt=J._multiDrawStarts,Ln=J._multiDrawCounts,ue=J._multiDrawCount,dn=Ot?rt.get(Ot).bytesPerElement:1,Ni=lt.get(ct).currentProgram.getUniforms();for(let en=0;en<ue;en++)Ni.setValue(F,"_gl_DrawID",en),he.render(Gt[en]/dn,Ln[en])}else if(J.isInstancedMesh)he.renderInstances(le,ve,J.count);else if(at.isInstancedBufferGeometry){let Gt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ln=Math.min(at.instanceCount,Gt);he.renderInstances(le,ve,Ln)}else he.render(le,ve)};function de(P,$,at){P.transparent===!0&&P.side===ce&&P.forceSinglePass===!1?(P.side=Ge,P.needsUpdate=!0,Er(P,$,at),P.side=si,P.needsUpdate=!0,Er(P,$,at),P.side=ce):Er(P,$,at)}this.compile=function(P,$,at=null){at===null&&(at=P),g=Wt.get(at),g.init($),x.push(g),at.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),P!==at&&P.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights();let ct=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let wt=J.material;if(wt)if(Array.isArray(wt))for(let Lt=0;Lt<wt.length;Lt++){let Ft=wt[Lt];de(Ft,at,J),ct.add(Ft)}else de(wt,at,J),ct.add(wt)}),x.pop(),g=null,ct},this.compileAsync=function(P,$,at=null){let ct=this.compile(P,$,at);return new Promise(J=>{function wt(){if(ct.forEach(function(Lt){lt.get(Lt).currentProgram.isReady()&&ct.delete(Lt)}),ct.size===0){J(P);return}setTimeout(wt,10)}yt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let fn=null;function Pn(P){fn&&fn(P)}function gh(){pi.stop()}function xh(){pi.start()}let pi=new sf;pi.setAnimationLoop(Pn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(P){fn=P,dt.setAnimationLoop(P),P===null?pi.stop():pi.start()},dt.addEventListener("sessionstart",gh),dt.addEventListener("sessionend",xh),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera($),$=dt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,$,T),g=Wt.get(P,x.length),g.init($),x.push(g),X.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N.setFromProjectionMatrix(X),j=this.localClippingEnabled,W=mt.init(this.clippingPlanes,j),p=_t.get(P,_.length),p.init(),_.push(p),dt.enabled===!0&&dt.isPresenting===!0){let wt=v.xr.getDepthSensingMesh();wt!==null&&Ra(wt,$,-1/0,v.sortObjects)}Ra(P,$,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(q,K),nt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,nt&&zt.addToRenderList(p,P),this.info.render.frame++,W===!0&&mt.beginShadows();let at=g.state.shadowsArray;Tt.render(at,P,$),W===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=p.opaque,J=p.transmissive;if(g.setupLights(),$.isArrayCamera){let wt=$.cameras;if(J.length>0)for(let Lt=0,Ft=wt.length;Lt<Ft;Lt++){let Ot=wt[Lt];vh(ct,J,P,Ot)}nt&&zt.render(P);for(let Lt=0,Ft=wt.length;Lt<Ft;Lt++){let Ot=wt[Lt];yh(p,P,Ot,Ot.viewport)}}else J.length>0&&vh(ct,J,P,$),nt&&zt.render(P),yh(p,P,$);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,$),re.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(g=x[x.length-1],W===!0&&mt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Ra(P,$,at,ct){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)at=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||N.intersectsSprite(P)){ct&&ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);let Lt=tt.update(P),Ft=P.material;Ft.visible&&p.push(P,Lt,Ft,at,ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||N.intersectsObject(P))){let Lt=tt.update(P),Ft=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ut.copy(P.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ut.copy(Lt.boundingSphere.center)),ut.applyMatrix4(P.matrixWorld).applyMatrix4(X)),Array.isArray(Ft)){let Ot=Lt.groups;for(let Jt=0,Qt=Ot.length;Jt<Qt;Jt++){let Bt=Ot[Jt],le=Ft[Bt.materialIndex];le&&le.visible&&p.push(P,Lt,le,at,ut.z,Bt)}}else Ft.visible&&p.push(P,Lt,Ft,at,ut.z,null)}}let wt=P.children;for(let Lt=0,Ft=wt.length;Lt<Ft;Lt++)Ra(wt[Lt],$,at,ct)}function yh(P,$,at,ct){let J=P.opaque,wt=P.transmissive,Lt=P.transparent;g.setupLightsView(at),W===!0&&mt.setGlobalState(v.clippingPlanes,at),ct&&ht.viewport(C.copy(ct)),J.length>0&&Sr(J,$,at),wt.length>0&&Sr(wt,$,at),Lt.length>0&&Sr(Lt,$,at),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function vh(P,$,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ct.id]===void 0&&(g.state.transmissionRenderTarget[ct.id]=new Ye(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?_n:Wn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let wt=g.state.transmissionRenderTarget[ct.id],Lt=ct.viewport||C;wt.setSize(Lt.z,Lt.w);let Ft=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(D),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),nt&&zt.render(at);let Ot=v.toneMapping;v.toneMapping=ii;let Jt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),g.setupLightsView(ct),W===!0&&mt.setGlobalState(v.clippingPlanes,ct),Sr(P,at,ct),I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Bt=0,le=$.length;Bt<le;Bt++){let ye=$[Bt],ve=ye.object,Ke=ye.geometry,he=ye.material,Gt=ye.group;if(he.side===ce&&ve.layers.test(ct.layers)){let Ln=he.side;he.side=Ge,he.needsUpdate=!0,_h(ve,at,ct,Ke,he,Gt),he.side=Ln,he.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt))}v.setRenderTarget(Ft),v.setClearColor(D,k),Jt!==void 0&&(ct.viewport=Jt),v.toneMapping=Ot}function Sr(P,$,at){let ct=$.isScene===!0?$.overrideMaterial:null;for(let J=0,wt=P.length;J<wt;J++){let Lt=P[J],Ft=Lt.object,Ot=Lt.geometry,Jt=ct===null?Lt.material:ct,Qt=Lt.group;Ft.layers.test(at.layers)&&_h(Ft,$,at,Ot,Jt,Qt)}}function _h(P,$,at,ct,J,wt){P.onBeforeRender(v,$,at,ct,J,wt),P.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(v,$,at,ct,P,wt),J.transparent===!0&&J.side===ce&&J.forceSinglePass===!1?(J.side=Ge,J.needsUpdate=!0,v.renderBufferDirect(at,$,ct,J,P,wt),J.side=si,J.needsUpdate=!0,v.renderBufferDirect(at,$,ct,J,P,wt),J.side=ce):v.renderBufferDirect(at,$,ct,J,P,wt),P.onAfterRender(v,$,at,ct,J,wt)}function Er(P,$,at){$.isScene!==!0&&($=ot);let ct=lt.get(P),J=g.state.lights,wt=g.state.shadowsArray,Lt=J.state.version,Ft=ft.getParameters(P,J.state,wt,$,at),Ot=ft.getProgramCacheKey(Ft),Jt=ct.programs;ct.environment=P.isMeshStandardMaterial?$.environment:null,ct.fog=$.fog,ct.envMap=(P.isMeshStandardMaterial?G:A).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Jt===void 0&&(P.addEventListener("dispose",jt),Jt=new Map,ct.programs=Jt);let Qt=Jt.get(Ot);if(Qt!==void 0){if(ct.currentProgram===Qt&&ct.lightsStateVersion===Lt)return bh(P,Ft),Qt}else Ft.uniforms=ft.getUniforms(P),P.onBeforeCompile(Ft,v),Qt=ft.acquireProgram(Ft,Ot),Jt.set(Ot,Qt),ct.uniforms=Ft.uniforms;let Bt=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),bh(P,Ft),ct.needsLights=_d(P),ct.lightsStateVersion=Lt,ct.needsLights&&(Bt.ambientLightColor.value=J.state.ambient,Bt.lightProbe.value=J.state.probe,Bt.directionalLights.value=J.state.directional,Bt.directionalLightShadows.value=J.state.directionalShadow,Bt.spotLights.value=J.state.spot,Bt.spotLightShadows.value=J.state.spotShadow,Bt.rectAreaLights.value=J.state.rectArea,Bt.ltc_1.value=J.state.rectAreaLTC1,Bt.ltc_2.value=J.state.rectAreaLTC2,Bt.pointLights.value=J.state.point,Bt.pointLightShadows.value=J.state.pointShadow,Bt.hemisphereLights.value=J.state.hemi,Bt.directionalShadowMap.value=J.state.directionalShadowMap,Bt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Bt.spotShadowMap.value=J.state.spotShadowMap,Bt.spotLightMatrix.value=J.state.spotLightMatrix,Bt.spotLightMap.value=J.state.spotLightMap,Bt.pointShadowMap.value=J.state.pointShadowMap,Bt.pointShadowMatrix.value=J.state.pointShadowMatrix),ct.currentProgram=Qt,ct.uniformsList=null,Qt}function Mh(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=os.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function bh(P,$){let at=lt.get(P);at.outputColorSpace=$.outputColorSpace,at.batching=$.batching,at.batchingColor=$.batchingColor,at.instancing=$.instancing,at.instancingColor=$.instancingColor,at.instancingMorph=$.instancingMorph,at.skinning=$.skinning,at.morphTargets=$.morphTargets,at.morphNormals=$.morphNormals,at.morphColors=$.morphColors,at.morphTargetsCount=$.morphTargetsCount,at.numClippingPlanes=$.numClippingPlanes,at.numIntersection=$.numClipIntersection,at.vertexAlphas=$.vertexAlphas,at.vertexTangents=$.vertexTangents,at.toneMapping=$.toneMapping}function yd(P,$,at,ct,J){$.isScene!==!0&&($=ot),I.resetTextureUnits();let wt=$.fog,Lt=ct.isMeshStandardMaterial?$.environment:null,Ft=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:vs,Ot=(ct.isMeshStandardMaterial?G:A).get(ct.envMap||Lt),Jt=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Bt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color,ve=ii;ct.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=v.toneMapping);let Ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,he=Ke!==void 0?Ke.length:0,Gt=lt.get(ct),Ln=g.state.lights;if(W===!0&&(j===!0||P!==b)){let an=P===b&&ct.id===M;mt.setState(ct,P,an)}let ue=!1;ct.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ln.state.version||Gt.outputColorSpace!==Ft||J.isBatchedMesh&&Gt.batching===!1||!J.isBatchedMesh&&Gt.batching===!0||J.isBatchedMesh&&Gt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Gt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Gt.instancing===!1||!J.isInstancedMesh&&Gt.instancing===!0||J.isSkinnedMesh&&Gt.skinning===!1||!J.isSkinnedMesh&&Gt.skinning===!0||J.isInstancedMesh&&Gt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Gt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Gt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Gt.instancingMorph===!1&&J.morphTexture!==null||Gt.envMap!==Ot||ct.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==mt.numPlanes||Gt.numIntersection!==mt.numIntersection)||Gt.vertexAlphas!==Jt||Gt.vertexTangents!==Qt||Gt.morphTargets!==Bt||Gt.morphNormals!==le||Gt.morphColors!==ye||Gt.toneMapping!==ve||Gt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Gt.__version=ct.version);let dn=Gt.currentProgram;ue===!0&&(dn=Er(ct,$,J));let Ni=!1,en=!1,Is=!1,_e=dn.getUniforms(),Sn=Gt.uniforms;if(ht.useProgram(dn.program)&&(Ni=!0,en=!0,Is=!0),ct.id!==M&&(M=ct.id,en=!0),Ni||b!==P){ht.buffers.depth.getReversed()?(Q.copy(P.projectionMatrix),vp(Q),_p(Q),_e.setValue(F,"projectionMatrix",Q)):_e.setValue(F,"projectionMatrix",P.projectionMatrix),_e.setValue(F,"viewMatrix",P.matrixWorldInverse);let Yn=_e.map.cameraPosition;Yn!==void 0&&Yn.setValue(F,st.setFromMatrixPosition(P.matrixWorld)),bt.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&_e.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,en=!0,Is=!0)}if(J.isSkinnedMesh){_e.setOptional(F,J,"bindMatrix"),_e.setOptional(F,J,"bindMatrixInverse");let an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_e.setValue(F,"boneTexture",an.boneTexture,I))}J.isBatchedMesh&&(_e.setOptional(F,J,"batchingTexture"),_e.setValue(F,"batchingTexture",J._matricesTexture,I),_e.setOptional(F,J,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",J._indirectTexture,I),_e.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",J._colorsTexture,I));let Ps=at.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Vt.update(J,at,dn),(en||Gt.receiveShadow!==J.receiveShadow)&&(Gt.receiveShadow=J.receiveShadow,_e.setValue(F,"receiveShadow",J.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Sn.envMap.value=Ot,Sn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&$.environment!==null&&(Sn.envMapIntensity.value=$.environmentIntensity),en&&(_e.setValue(F,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&vd(Sn,Is),wt&&ct.fog===!0&&pt.refreshFogUniforms(Sn,wt),pt.refreshMaterialUniforms(Sn,ct,O,H,g.state.transmissionRenderTarget[P.id]),os.upload(F,Mh(Gt),Sn,I)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(os.upload(F,Mh(Gt),Sn,I),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&_e.setValue(F,"center",J.center),_e.setValue(F,"modelViewMatrix",J.modelViewMatrix),_e.setValue(F,"normalMatrix",J.normalMatrix),_e.setValue(F,"modelMatrix",J.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let an=ct.uniformsGroups;for(let Yn=0,Zn=an.length;Yn<Zn;Yn++){let wh=an[Yn];Y.update(wh,dn),Y.bind(wh,dn)}}return dn}function vd(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function _d(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,$,at){lt.get(P.texture).__webglTexture=$,lt.get(P.depthTexture).__webglTexture=at;let ct=lt.get(P);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=at===void 0,ct.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){let at=lt.get(P);at.__webglFramebuffer=$,at.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,at=0){T=P,w=$,E=at;let ct=!0,J=null,wt=!1,Lt=!1;if(P){let Ot=lt.get(P);if(Ot.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(Ot.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ot.__hasExternalTextures)I.rebindTextures(P,lt.get(P.texture).__webglTexture,lt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Bt=P.depthTexture;if(Ot.__boundDepthTexture!==Bt){if(Bt!==null&&lt.has(Bt)&&(P.width!==Bt.image.width||P.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}let Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);let Qt=lt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qt[$])?J=Qt[$][at]:J=Qt[$],wt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?J=lt.get(P).__webglMultisampledFramebuffer:Array.isArray(Qt)?J=Qt[at]:J=Qt,C.copy(P.viewport),U.copy(P.scissor),z=P.scissorTest}else C.copy(V).multiplyScalar(O).floor(),U.copy(et).multiplyScalar(O).floor(),z=Z;if(ht.bindFramebuffer(F.FRAMEBUFFER,J)&&ct&&ht.drawBuffers(P,J),ht.viewport(C),ht.scissor(U),ht.setScissorTest(z),wt){let Ot=lt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot.__webglTexture,at)}else if(Lt){let Ot=lt.get(P.texture),Jt=$||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,at||0,Jt)}M=-1},this.readRenderTargetPixels=function(P,$,at,ct,J,wt,Lt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){ht.bindFramebuffer(F.FRAMEBUFFER,Ft);try{let Ot=P.texture,Jt=Ot.format,Qt=Ot.type;if(!bt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ct&&at>=0&&at<=P.height-J&&F.readPixels($,at,ct,J,Yt.convert(Jt),Yt.convert(Qt),wt)}finally{let Ot=T!==null?lt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(P,$,at,ct,J,wt,Lt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){let Ot=P.texture,Jt=Ot.format,Qt=Ot.type;if(!bt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ct&&at>=0&&at<=P.height-J){ht.bindFramebuffer(F.FRAMEBUFFER,Ft);let Bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Bt),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels($,at,ct,J,Yt.convert(Jt),Yt.convert(Qt),0);let le=T!==null?lt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(F.FRAMEBUFFER,le);let ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yp(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.deleteBuffer(Bt),F.deleteSync(ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,at=0){P.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);let ct=Math.pow(2,-at),J=Math.floor(P.image.width*ct),wt=Math.floor(P.image.height*ct),Lt=$!==null?$.x:0,Ft=$!==null?$.y:0;I.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Lt,Ft,J,wt),ht.unbindTexture()},this.copyTextureToTexture=function(P,$,at=null,ct=null,J=0){P.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,P=arguments[1],$=arguments[2],J=arguments[3]||0,at=null);let wt,Lt,Ft,Ot,Jt,Qt,Bt,le,ye,ve=P.isCompressedTexture?P.mipmaps[J]:P.image;at!==null?(wt=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Ft=at.isBox3?at.max.z-at.min.z:1,Ot=at.min.x,Jt=at.min.y,Qt=at.isBox3?at.min.z:0):(wt=ve.width,Lt=ve.height,Ft=ve.depth||1,Ot=0,Jt=0,Qt=0),ct!==null?(Bt=ct.x,le=ct.y,ye=ct.z):(Bt=0,le=0,ye=0);let Ke=Yt.convert($.format),he=Yt.convert($.type),Gt;$.isData3DTexture?(I.setTexture3D($,0),Gt=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(I.setTexture2DArray($,0),Gt=F.TEXTURE_2D_ARRAY):(I.setTexture2D($,0),Gt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let Ln=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ni=F.getParameter(F.UNPACK_SKIP_ROWS),en=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);let Is=P.isDataArrayTexture||P.isData3DTexture,_e=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Sn=lt.get(P),Ps=lt.get($),an=lt.get(Sn.__renderTarget),Yn=lt.get(Ps.__renderTarget);ht.bindFramebuffer(F.READ_FRAMEBUFFER,an.__webglFramebuffer),ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<Ft;Zn++)Is&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(P).__webglTexture,J,Qt+Zn),P.isDepthTexture?(_e&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get($).__webglTexture,J,ye+Zn),F.blitFramebuffer(Ot,Jt,wt,Lt,Bt,le,wt,Lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):_e?F.copyTexSubImage3D(Gt,J,Bt,le,ye+Zn,Ot,Jt,wt,Lt):F.copyTexSubImage2D(Gt,J,Bt,le,ye+Zn,Ot,Jt,wt,Lt);ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Gt,J,Bt,le,ye,wt,Lt,Ft,Ke,he,ve.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Gt,J,Bt,le,ye,wt,Lt,Ft,Ke,ve.data):F.texSubImage3D(Gt,J,Bt,le,ye,wt,Lt,Ft,Ke,he,ve):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,J,Bt,le,wt,Lt,Ke,he,ve.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,J,Bt,le,ve.width,ve.height,Ke,ve.data):F.texSubImage2D(F.TEXTURE_2D,J,Bt,le,wt,Lt,Ke,he,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ln),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ni),F.pixelStorei(F.UNPACK_SKIP_IMAGES,en),J===0&&$.generateMipmaps&&F.generateMipmap(Gt),ht.unbindTexture()},this.copyTextureToTexture3D=function(P,$,at=null,ct=null,J=0){return P.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ct=arguments[1]||null,P=arguments[2],$=arguments[3],J=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,at,ct,J)},this.initRenderTarget=function(P){lt.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),ht.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,ht.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Mo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bo=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new B,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},js=class extends cn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,zs=new B,Ki=new B,ji=new B,Qi=new It,Fs=new It,cf=new Zt,Yr=new B,Os=new B,Zr=new B,wu=new It,il=new It,Su=new It,So=class extends Ce{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wo(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Ks(n,3,0,!1)),Ji.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;$r(Yr.set(-.5,-.5,0),ji,o,Ki,s,r),$r(Os.set(.5,-.5,0),ji,o,Ki,s,r),$r(Zr.set(.5,.5,0),ji,o,Ki,s,r),wu.set(0,0),il.set(1,0),Su.set(1,1);let a=t.ray.intersectTriangle(Yr,Os,Zr,!1,zs);if(a===null&&($r(Os.set(-.5,.5,0),ji,o,Ki,s,r),il.set(0,1),a=t.ray.intersectTriangle(Yr,Zr,Os,!1,zs),a===null))return;let l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:ni.getInterpolation(zs,Yr,Os,Zr,wu,il,Su,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*Qi.x-s*Qi.y,Fs.y=s*Qi.x+r*Qi.y):Fs.copy(Qi),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(cf)}var cc=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,u=rn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new Zt,Eu=new Zt,Jr=[],Tu=new Xn,dy=new Zt,Bs=new Rt,ks=new qn,Se=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Tu.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),ks.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Eu.multiplyMatrices(n,ts),Bs.matrixWorld=Eu,Bs.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){let l=Jr[o];l.instanceId=r,l.object=this,e.push(l)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cc(new Float32Array(s*this.count),s,this.count,Oc,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var tr=class extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eo=new B,To=new B,Au=new Zt,Hs=new $s,Kr=new qn,sl=new B,Ru=new B,hc=class extends Ce{constructor(t=new se,e=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),To.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(To);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Au.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=c){let g=u.getX(y),_=u.getX(y+1),x=jr(this,t,Hs,l,g,_);x&&e.push(x)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(d),g=jr(this,t,Hs,l,y,p);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=c){let g=jr(this,t,Hs,l,y,y+1);g&&e.push(g)}if(this.isLineLoop){let y=jr(this,t,Hs,l,m-1,d);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),e.distanceSqToSegment(Eo,To,sl,Ru)>n)return;sl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sl);if(!(l<t.near||l>t.far))return{distance:l,point:Ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Cu=new B,Iu=new B,Ao=class extends hc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Cu.fromBufferAttribute(e,s),Iu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cu.distanceTo(Iu);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pu=new Zt,uc=new $s,Qr=new qn,to=new B,Ro=class extends Ce{constructor(t=new se,e=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;Pu.copy(s).invert(),uc.copy(t.ray).applyMatrix4(Pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,y=d;m<y;m++){let p=c.getX(m);to.fromBufferAttribute(h,p),Lu(to,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,y=d;m<y;m++)to.fromBufferAttribute(h,m),Lu(to,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lu(i,t,e,n,s,r,o){let a=uc.distanceSqToPoint(i);if(a<e){let l=new B;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Le=class extends je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Co=class i extends se{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new B,f=new It,d=new B,m=new B,y=new B,p=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let _=0;_<=e;_++){let x=n+_*u*s,v=Math.sin(x),S=Math.cos(x);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*v,h.y=t[w].y,h.z=t[w].x*S,o.push(h.x,h.y,h.z),f.x=_/e,f.y=w/(t.length-1),a.push(f.x,f.y);let E=l[3*w+0]*v,T=l[3*w+1],M=l[3*w+0]*S;c.push(E,T,M)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let v=x+_*t.length,S=v,w=v+t.length,E=v+t.length+1,T=v+1;r.push(S,w,T),r.push(E,T,w)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var nr=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new B,u=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,y=[],p=n/2,g=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function _(){let v=new B,S=new B,w=0,E=(e-t)/n;for(let T=0;T<=r;T++){let M=[],b=T/r,C=b*(e-t)+t;for(let U=0;U<=s;U++){let z=U/s,D=z*l+a,k=Math.sin(D),L=Math.cos(D);S.x=C*k,S.y=-b*n+p,S.z=C*L,h.push(S.x,S.y,S.z),v.set(k,E,L).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-b),M.push(m++)}y.push(M)}for(let T=0;T<s;T++)for(let M=0;M<r;M++){let b=y[M][T],C=y[M+1][T],U=y[M+1][T+1],z=y[M][T+1];(t>0||M!==0)&&(u.push(b,C,z),w+=3),(e>0||M!==r-1)&&(u.push(C,U,z),w+=3)}c.addGroup(g,w,0),g+=w}function x(v){let S=m,w=new It,E=new B,T=0,M=v===!0?t:e,b=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,p*b,0),f.push(0,b,0),d.push(.5,.5),m++;let C=m;for(let U=0;U<=s;U++){let D=U/s*l+a,k=Math.cos(D),L=Math.sin(D);E.x=M*L,E.y=p*b,E.z=M*k,h.push(E.x,E.y,E.z),f.push(0,b,0),w.x=k*.5+.5,w.y=L*.5*b+.5,d.push(w.x,w.y),m++}for(let U=0;U<s;U++){let z=S+U,D=C+U;v===!0?u.push(D,D+1,z):u.push(D+1,D,z),T+=3}c.addGroup(g,T,v===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Io=class i extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fc=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new B,v=new B,S=new B;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],v),d(e[w+2],S),l(x,v,S,_)}function l(_,x,v,S){let w=S+1,E=[];for(let T=0;T<=w;T++){E[T]=[];let M=_.clone().lerp(v,T/w),b=x.clone().lerp(v,T/w),C=w-T;for(let U=0;U<=C;U++)U===0&&T===w?E[T][U]=M:E[T][U]=M.clone().lerp(b,U/C)}for(let T=0;T<w;T++)for(let M=0;M<2*(w-T)-1;M++){let b=Math.floor(M/2);M%2===0?(f(E[T][b+1]),f(E[T+1][b]),f(E[T][b])):(f(E[T][b+1]),f(E[T+1][b+1]),f(E[T+1][b]))}}function c(_){let x=new B;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){let _=new B;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=p(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(v,1-S)}m(),h()}function h(){for(let _=0;_<o.length;_+=6){let x=o[_+0],v=o[_+2],S=o[_+4],w=Math.max(x,v,S),E=Math.min(x,v,S);w>.9&&E<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function m(){let _=new B,x=new B,v=new B,S=new B,w=new It,E=new It,T=new It;for(let M=0,b=0;M<r.length;M+=9,b+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),T.set(o[b+4],o[b+5]),S.copy(_).add(x).add(v).divideScalar(3);let C=p(S);y(w,b+0,_,C),y(E,b+2,x,C),y(T,b+4,v,C)}}function y(_,x,v,S){S<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=S/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var py={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=vy(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ir(r,o,e,a,l,d,0),o}};function hf(i,t,e,n,s){let r,o;if(s===Iy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Du(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Du(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(rr(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wo(e,e.next)||we(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Sy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?gy(i,n,s,r):my(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),rr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xy(Ti(i),t,e),ir(i,t,e,n,s,r,2)):o===2&&yy(i,t,e,n,s,r):ir(Ti(i),t,e,n,s,r,1);break}}}function my(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&ns(s,a,r,l,o,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,y=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,g=dc(d,m,t,e,n),_=dc(y,p,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=g&&v&&v.z<=_;){if(x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&ns(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&ns(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&ns(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&ns(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Wo(s,r)&&uf(s,n,n.next,r)&&sr(s,r)&&sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),rr(n),rr(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function yy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ay(o,a)){let l=ff(o,a);o=Ti(o,o.next),l=Ti(l,l.next),ir(o,t,e,n,s,r,0),ir(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vy(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=hf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ty(c));for(s.sort(_y),r=0;r<s.length;r++)e=My(s[r],e);return e}function _y(i,t){return i.x-t.x}function My(i,t){let e=by(i,t);if(!e)return t;let n=ff(e,i);return Ti(n,n.next),Ti(e,e.next)}function by(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ns(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),sr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&wy(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function wy(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Sy(i,t,e,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ey(s)}function Ey(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function dc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ty(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ns(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ay(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ry(i,t)&&(sr(i,t)&&sr(t,i)&&Cy(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Wo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wo(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){let s=no(we(i,t,e)),r=no(we(i,t,n)),o=no(we(e,n,i)),a=no(we(e,n,t));return!!(s!==r&&o!==a||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||o===0&&eo(e,i,n)||a===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function Ry(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Cy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ff(i,t){let e=new pc(i.i,i.x,i.y),n=new pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Du(i,t,e,n){let s=new pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Iy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uu(t),Nu(n,t);let o=t.length;e.forEach(Uu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Nu(n,e[l]);let a=py.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var or=class i extends fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var un=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new B,f=new B,d=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let _=[],x=g/n,v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let w=S/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(w+v,1-x),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let x=u[g][_+1],v=u[g][_],S=u[g+1][_],w=u[g+1][_+1];(g!==0||o>0)&&d.push(x,v,w),(g!==n-1||l<Math.PI)&&d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cn=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new B,h=new B,f=new B;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let y=m/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(y),h.y=(t+e*Math.cos(p))*Math.sin(y),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let y=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,_=(s+1)*d+m;o.push(y,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Po=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ae=class extends cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},li=class extends ae{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Lo=class extends cn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xt=class extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Py(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,a=2*e-n;break;case Ch:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:o=t,l=2*n-e;break;case Ch:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),y=m*m,p=y*m,g=-f*p+2*f*y-f*m,_=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*m+1,x=(-1-d)*p+(1.5+d)*y+.5*m,v=d*p-d*y;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+_*o[c+S]+x*o[l+S]+v*o[h+S];return r}},gc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},xc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Py(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let y=e[h+m];if(y!==e[f+m]||y!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Xl;var Ri=class extends vn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=co;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends vn{};yc.prototype.ValueTypeName="color";var vc=class extends vn{};vc.prototype.ValueTypeName="number";var _c=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Te.slerpFlat(r,0,o,c-a,o,c,l);return r}},Do=class extends vn{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends vn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=co;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends vn{};Mc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Ly=new bc,wc=class{constructor(t){this.manager=t!==void 0?t:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new Zt,zu=new B,Fu=new B,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sc=class extends ar{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},No=class extends ys{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ou=new Zt,Gs=new B,ol=new B,Ec=class extends ar{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),ol.copy(n.position),ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ol),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},zo=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Tc=class extends ar{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Oo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bu(){return performance.now()}var Wc="\\[\\]\\.:\\/",Dy=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Uy="[^"+Wc.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Xc),zy=/(WCOD+)?/.source.replace("WCOD",Uy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),By=new RegExp("^"+Ny+zy+Fy+Oy+"$"),ky=["material","materials","bones","map"],Ac=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(t){let e=By.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Ac;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);var Ms=new Map;window.BDS_DATA=(i,t,e)=>{let n=Ms.get(i);n&&(Ms.delete(i),n.resolve({fmt:t,b64:e}))};function Hy(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Gy(i){let t=new DecompressionStream("gzip"),e=new Blob([i]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function Vy(i,t){return new Promise((e,n)=>{Ms.set(i,{resolve:e});let s=document.createElement("script");s.src=t,s.async=!0,s.onerror=()=>{Ms.delete(i),n(new Error("Impossibile caricare "+t))},s.onload=()=>{s.remove(),setTimeout(()=>{Ms.has(i)&&(Ms.delete(i),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(s)})}async function Ii(i,t){let{fmt:e,b64:n}=await Vy(i,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let s=await Gy(Hy(n));return e==="bin"?s:JSON.parse(new TextDecoder().decode(s))}var Xo=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var qo=class{constructor(t,e,n){let s=t.height;this.nx=s.nx,this.nz=s.nz,this.step=s.step,this.x0=s.x0,this.z0=s.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*s.scale;this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0),this.lcPixels=l.getImageData(0,0,o.w,o.h).data,this.lcCanvas=a,this.texture=new Le(a),this.texture.colorSpace=Me,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=kn,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,u])=>({k:c,c:u})),this.palette.push({k:"default",c:o.default})}height(t,e){let n=(t-this.x0)/this.step,s=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(s);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=s-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h;if(a+l<=1)return u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l;let h=u[c+this.nx+1];return h+(u[c+this.nx]-h)*(1-a)+(u[c+1]-h)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),s=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||s<0||n>=this.lcW||s>=this.lcH)return"default";let r=(s*this.lcW+n)*4,o=this.lcPixels,a=o[r]<<16|o[r+1]<<8|o[r+2],l=this.classCache.get(a);if(l===void 0){let c=1e9;for(let u of this.palette){let h=(u.c[0]-o[r])**2+(u.c[1]-o[r+1])**2+(u.c[2]-o[r+2])**2;h<c&&(c=h,l=u.k)}this.classCache.set(a,l)}return l}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Xt({map:this.texture}),n=this.proj;return e.onBeforeCompile=s=>{s.uniforms.detailMap={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);`)},e}buildChunk(t,e,n,s,r,o=0){let a=Math.round(n/s)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),u=this.proj.xmax-this.proj.xmin,h=this.proj.zmax-this.proj.zmin;for(let p=0;p<a;p++)for(let g=0;g<a;g++){let _=t+g*s,x=e+p*s,v=p*a+g;l[v*3]=_,l[v*3+1]=this.height(_,x)-o,l[v*3+2]=x,c[v*2]=(_-this.proj.xmin)/u,c[v*2+1]=1-(x-this.proj.zmin)/h}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let g=0;g<a-1;g++){let _=p*a+g,x=_+1,v=_+a,S=v+1;f[d++]=_,f[d++]=v,f[d++]=x,f[d++]=x,f[d++]=v,f[d++]=S}let m=new se;m.setAttribute("position",new me(l,3)),m.setAttribute("uv",new me(c,2)),m.setIndex(new me(f,1)),m.computeVertexNormals();let y=new Rt(m,r);return y.receiveShadow=!0,y}};var ge=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,s=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(s,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,s){this.i.push(t,e,n,t,n,s)}get empty(){return this.i.length===0}build(){let t=new se;return t.setAttribute("position",new $t(this.p,3)),this.c&&t.setAttribute("color",new $t(this.c,3)),this.u&&t.setAttribute("uv",new $t(this.u,2)),t.setIndex(this.n>65535?new ps(this.i,1):new ds(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new Rt(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Ue(i){return i=i^61^i>>>16,i=i+(i<<3)|0,i^=i>>>4,i=Math.imul(i,668265261),i^=i>>>15,(i>>>0)/4294967296}function df(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function cr(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Le(s);return r.colorSpace=Me,n&&(r.wrapS=r.wrapT=oi),r.anisotropy=8,r}function pf(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=16,r=new Float32Array(s*s);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/i*s,h=c/i*s,f=Math.floor(u),d=Math.floor(h),m=u-f,y=h-d,p=(x,v)=>r[(v+s)%s*s+(x+s)%s],g=m*m*(3-2*m),_=y*y*(3-2*y);return(p(f,d)*(1-g)+p(f+1,d)*g)*(1-_)+(p(f,d+1)*(1-g)+p(f+1,d+1)*g)*_};for(let l=0;l<i;l++)for(let c=0;c<i;c++){let u=(l*i+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new Le(t);return a.wrapS=a.wrapT=oi,a.anisotropy=8,a}var kt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},Ut={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},Kt={SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},Wy=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],Yo=.18,hi=32,Xy=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],qy=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],mf=1.6,Yy=.13,gf={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function Zy(i){let t=gf[i];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var Zo=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let s=n.proj;this.xmin=s.xmin,this.zmin=s.zmin,this.xmax=s.xmax,this.zmax=s.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),u=0,h=0;for(let p=0;p<o;p++)u+=t.nodes[p*2],h+=t.nodes[p*2+1],a[p]=u/10,l[p]=h/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;this.ways=t.ways.map(p=>{let g=r>8,_={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:g?p[8]:0,sw:g?p[9]:0,lit:g?p[10]:0,lf:g?p[11]:0,lb:g?p[12]:0,turnF:g?this.names[p[13]]:"",turnB:g?this.names[p[14]]:"",dest:g?this.names[p[15]]:"",nodes:p.slice(r)};return _.oneway=!!(_.flags&Ut.ONEWAY),_.drivable=!(_.flags&Ut.NOCAR),this.layout(_),_}),this.smooth(a,l,c),this.fixRoundabouts(a,l);let f=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=f,this.ntag=new Uint8Array(f),this.ndir=new Uint8Array(f);let d=r>8?3:2;for(let p=0;p<t.ntags.length;p+=d)this.ntag[t.ntags[p]]=t.ntags[p+1],d===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let g=p.nodes.length;p.cum=new Float32Array(g);for(let _=1;_<g;_++){let x=p.nodes[_-1],v=p.nodes[_];p.cum[_]=p.cum[_-1]+Math.hypot(this.nx[v]-this.nx[x],this.nz[v]-this.nz[x])}if(p.len=p.cum[g-1],p.abs=!!(p.flags&(Ut.BRIDGE|Ut.TUNNEL)),p.abs){let _=p.nodes[0],x=p.nodes[g-1];p.h0=e.height(this.nx[_],this.nz[_])+this.dh[_],p.h1=e.height(this.nx[x],this.nz[x])+this.dh[x]}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let g=this.pointAt(p,p.len/2),_=e.isUrban(g[0],g[1]),x=p.cls,v;x===0?v=p.flags&Ut.LINK?80:130:x===1?v=p.flags&Ut.LINK?60:_?70:110:x<=4?v=p.flags&Ut.LINK||_?50:90:x===5?v=_?50:70:x===6?v=50:v=30,p.flags&Ut.ROUNDABOUT&&(v=Math.min(v,50)),p.limit=v,p.limitMapped=!1}let m=new Int32Array(f+1);this.ways.forEach(p=>{for(let g of p.nodes)m[g+1]++});for(let p=0;p<f;p++)m[p+1]+=m[p];this.adjStart=m,this.adjWay=new Int32Array(m[f]),this.adjPos=new Int32Array(m[f]);let y=m.slice(0,f);this.ways.forEach((p,g)=>{for(let _=0;_<p.nodes.length;_++){let x=p.nodes[_],v=y[x]++;this.adjWay[v]=g,this.adjPos[v]=_}}),this.degree=new Uint8Array(f),this.degMain=new Uint8Array(f),this.w1=new Float32Array(f),this.w2=new Float32Array(f),this.m1=new Float32Array(f),this.m2=new Float32Array(f),this.onRb=new Uint8Array(f),this.ways.forEach(p=>{let g=p.cls<=kt.LIVING&&p.drivable;for(let _=0;_<p.nodes.length;_++){let x=p.nodes[_],v=(_>0?1:0)+(_<p.nodes.length-1?1:0);this.degree[x]+=v,g&&(this.degMain[x]+=v),p.width>this.w1[x]?(this.w2[x]=this.w1[x],this.w1[x]=p.width):p.width>this.w2[x]&&(this.w2[x]=p.width),g&&(p.width>this.m1[x]?(this.m2[x]=this.m1[x],this.m1[x]=p.width):p.width>this.m2[x]&&(this.m2[x]=p.width)),p.flags&Ut.ROUNDABOUT&&(this.onRb[x]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,g)=>{let _=p.width/2+1;for(let x=0;x<p.nodes.length-1;x++){let v=p.nodes[x],S=p.nodes[x+1],w=this.nx[v],E=this.nz[v],T=this.nx[S],M=this.nz[S],b=g*16384+x,C=Math.floor((Math.min(w,T)-_-this.xmin)/hi),U=Math.floor((Math.max(w,T)+_-this.xmin)/hi),z=Math.floor((Math.min(E,M)-_-this.zmin)/hi),D=Math.floor((Math.max(E,M)+_-this.zmin)/hi);for(let H=z;H<=D;H++)for(let O=C;O<=U;O++){let q=H*4096+O,K=this.grid.get(q);K||this.grid.set(q,K=[]),K.push(b)}let k=this.tileKey((w+T)/2,(E+M)/2),L=this.tileSegs.get(k);L||this.tileSegs.set(k,L=[]),L.push(b)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,g)=>{for(let _=0;_<p.p.length-1;_++){let x=this.tileKey((p.p[_][0]+p.p[_+1][0])/2,(p.p[_][1]+p.p[_+1][1])/2),v=this.tileRails.get(x);v||this.tileRails.set(x,v=[]),v.push(g*16384+_)}if(p.bridge){let _=p.p[0],x=p.p[p.p.length-1];p.h0=e.height(_[0],_[1]),p.h1=e.height(x[0],x[1]),p.cum=[0];for(let v=1;v<p.p.length;v++)p.cum.push(p.cum[v-1]+Math.hypot(p.p[v][0]-p.p[v-1][0],p.p[v][1]-p.p[v-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=Xy[e],s,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&Ut.LINK)?2:1:2);t.oneway?(s=o,r=0):t.lf||t.lb?(s=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-s)):o<=1?(s=.5,r=.5):(s=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(s+r))):e===kt.TRACK?a=3.2:e===kt.SERVICE?a=t.flags&Ut.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===kt.PEDESTRIAN?a=6:(t.flags&Ut.ROUNDABOUT&&!t.lanes&&(s=e<=3?1.6:1.4),a=(s+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&s===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(s+r)*n>a&&(n=a/(s+r)),t.width=a,t.lw=n,t.nF=s,t.nB=r,t.sh=(a-(s+r)*n)/2,t.cOff=-a/2+t.sh+r*n}fixRoundabouts(t,e){let n=new Map,s=l=>{for(;n.get(l)!==l;)n.set(l,n.get(n.get(l))),l=n.get(l);return l},r=this.ways.filter(l=>l.flags&Ut.ROUNDABOUT);for(let l of r){for(let c of l.nodes)n.has(c)||n.set(c,c);for(let c=1;c<l.nodes.length;c++){let u=s(l.nodes[c-1]),h=s(l.nodes[c]);u!==h&&n.set(u,h)}}let o=new Map;for(let l of n.keys()){let c=s(l);o.has(c)||o.set(c,[]),o.get(c).push(l)}let a=new Map;for(let[l,c]of o){let u=0,h=0;for(let d of c)u+=t[d],h+=e[d];u/=c.length,h/=c.length;let f=0;for(let d of c)f+=Math.hypot(t[d]-u,e[d]-h);f/=c.length,a.set(l,Math.max(4.5,Math.min(9,f*.5,2*(f-2))))}for(let l of r){if(l.widthTag>2)continue;let c=a.get(s(l.nodes[0]));if(!c)continue;let u=l.lanes>=2&&c>=7.5?2:1;l.width=c,l.nF=u,l.nB=0,l.sh=.4,l.lw=(c-.8)/u,l.cOff=-c/2+l.sh}}coveredBy(t,e,n,s=0,r=!0){let o=this.ways[t],a=u=>u.flags&Ut.ROUNDABOUT?-1:u.cls*2+(u.flags&Ut.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],m=f.nodes[h+1],y=this.nx[d],p=this.nz[d],g=this.nx[m]-y,_=this.nz[m]-p,x=g*g+_*_;if(x<1e-6)return;let v=((e-y)*g+(n-p)*_)/x;if(v<0||v>1)return;let S=Math.sqrt(x);h===0&&v*S<.3||h===f.nodes.length-2&&(1-v)*S<.3||Math.abs((e-y)*_-(n-p)*g)/S>f.width/2+s||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let s=t.length,r=new Uint8Array(s),o=new Map;this.ways.forEach((c,u)=>{let h=c.nodes;for(let f=0;f<h.length;f++)r[h[f]]+=(f>0?1:0)+(f<h.length-1?1:0);for(let f of[0,h.length-1]){let d=o.get(h[f]);d||o.set(h[f],d=[]),d.push([u,f])}});let a=(c,u)=>{let h=this.ways[c],f=h.nodes,d=f[u];if(f[0]===f[f.length-1]&&f.length>3)return u===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[m,y]of o.get(d)||[]){if(m===c)continue;let p=this.ways[m].nodes;return y===0?p[1]:p[p.length-2]}return-1},l=(c,u)=>{let h=this.ways[c].nodes,f=h[u],d=u>0?h[u-1]:a(c,u),m=u<h.length-1?h[u+1]:a(c,u),y=0,p=0,g=0,_=0,x=0;if(d>=0){let E=Math.hypot(t[f]-t[d],e[f]-e[d])||1;y=(t[f]-t[d])/E,p=(e[f]-e[d])/E}if(m>=0){let E=Math.hypot(t[m]-t[f],e[m]-e[f])||1;g=(t[m]-t[f])/E,_=(e[m]-e[f])/E}d>=0&&m>=0&&(x=Math.acos(Math.max(-1,Math.min(1,y*g+p*_))));let v=y+g,S=p+_,w=Math.hypot(v,S);return w<1e-6?null:[v/w,S/w,x]};this.ways.forEach((c,u)=>{let h=c.nodes;if(h.length<2)return;let f=[h[0]],d=l(u,0);for(let m=0;m<h.length-1;m++){let y=h[m],p=h[m+1],g=l(u,m+1),_=t[p]-t[y],x=e[p]-e[y],v=Math.hypot(_,x);if(v>3&&d&&g){let S=_/v,w=x/v,E=Math.acos(Math.max(-1,Math.min(1,d[0]*S+d[1]*w))),T=Math.acos(Math.max(-1,Math.min(1,g[0]*S+g[1]*w))),M=Math.max(E,T);if(M>.03&&M<1.1){let b=v*M/4,C=Math.min(10,Math.ceil(Math.sqrt(b/.04)));if(C>=2){let U=d[2]>.6?Math.min(v,7):v,z=g[2]>.6?Math.min(v,7):v;for(let D=1;D<C;D++){let k=D/C,L=k*k,H=L*k,O=2*H-3*L+1,q=H-2*L+k,K=-2*H+3*L,V=H-L;t.push(O*t[y]+q*U*d[0]+K*t[p]+V*z*g[0]),e.push(O*e[y]+q*U*d[1]+K*e[p]+V*z*g[1]),n.push(n[y]+(n[p]-n[y])*k),f.push(t.length-1)}}}}f.push(p),d=g}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let s=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[s]+(this.nx[r]-this.nx[s])*a,this.nz[s]+(this.nz[r]-this.nz[s])*a,n,a]}heightOn(t,e,n,s,r){let o=this.ways[t];if(o.abs){let c=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?c/o.len:0)+Yo}let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(s,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+Yo}segmentsNear(t,e,n,s){let r=Math.floor((t-n-this.xmin)/hi),o=Math.floor((t+n-this.xmin)/hi),a=Math.floor((e-n-this.zmin)/hi),l=Math.floor((e+n-this.zmin)/hi),c=this._seen||(this._seen=new Set);c.clear();for(let u=a;u<=l;u++)for(let h=r;h<=o;h++){let f=this.grid.get(u*4096+h);if(f)for(let d of f)c.has(d)||(c.add(d),s(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,s){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(s-c)*h)/f;d=d<0?0:d>1?1:d;let m=l+u*d,y=c+h*d;return{t:d,px:m,pz:y,d:Math.hypot(n-m,s-y),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let s=null,r=-1e9;this.segmentsNear(t,e,8,(a,l)=>{let c=this.ways[a],u=this.projectOnSeg(a,l,t,e);if(u.d>c.width/2+.35)return;let h=this.heightOn(a,l,u.t,t,e);h<=n+1.3&&(h>r+.01||Math.abs(h-r)<=.01&&s&&u.d<s.d)&&(r=h,s={wi:a,k:l,t:u.t,d:u.d})});let o=this.terrain.height(t,e);return s&&r>=o-.6?{h:r,road:s}:s&&o>n+1.3?{h:r,road:s}:{h:o,road:null}}nearest(t,e,n=40,s=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(s&&!s(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:Wy[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&Ut.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let s=new Map;for(let o of t.keys()){let a=e(o);s.has(a)||s.set(a,[]),s.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&Ut.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of s.values()){if(o.length<4)continue;let a=0,l=0;for(let y of o)a+=this.nx[y],l+=this.nz[y];a/=o.length,l/=o.length;let c=1e9,u=0,h=0,f=0;for(let y of o){let p=Math.hypot(this.nx[y]-a,this.nz[y]-l);c=Math.min(c,p),u=Math.max(u,p),h=Math.max(h,r.get(y)),f+=this.dh[y]}if(u>c*1.8||u>120)continue;let d=c-h/2-.3;if(d<1.2)continue;let m=o.map(y=>{let p=Math.hypot(this.nx[y]-a,this.nz[y]-l),g=Math.max(.1,(p-r.get(y)/2-.1)/p);return[Math.atan2(this.nz[y]-l,this.nx[y]-a),a+(this.nx[y]-a)*g,l+(this.nz[y]-l)*g]}).sort((y,p)=>y[0]-p[0]).map(y=>[y[1],y[2]]);this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length,poly:m})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,s]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:s,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(s,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=y=>{let p=t.width>=s[y]-.01?r[y]:s[y];return p>0?p/2+a:0},d=-1e9,m=0;for(let y=0;y<e;y++){let p=t.nodes[y];if(o[p]>=3){let g=f(p);g>0&&(d=t.cum[y],m=g)}l[y]=d,c[y]=m}d=1e9,m=0;for(let y=e-1;y>=0;y--){let p=t.nodes[y];if(o[p]>=3){let g=f(p);g>0&&(d=t.cum[y],m=g)}u[y]=d,h[y]=m}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let s of this.tileSegs.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.ways[r];if(a.flags&Ut.ROUNDABOUT||!a.drivable||a.cls>=kt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=cr(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=cr(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),m=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,m+2,c-4,c-4,5),o.fill()}}),n=cr(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),s=cr(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=gf[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Xt({map:t,vertexColors:!0}),-2,-4),stone:r(new Xt({map:e,vertexColors:!0}),-2,-4),path:r(new Xt({map:t,vertexColors:!0}),-1,-2),walk:new Xt({map:n,vertexColors:!0,side:ce}),mark:r(new Xt({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Xt({map:s,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Xt({color:11052186,side:ce}),barrier:new Xt({vertexColors:!0,side:ce}),guard:new Xt({color:13159632,side:ce}),island:new Xt({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,s=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;s+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;s+=u/f,r+=h/f}let o=Math.hypot(s,r)||1;s/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+s*(u/f);a=1/Math.max(.5,d)}return[-r*a,s*a]}wayColor(t){return t.flags&Ut.NOCAR||t.surf===1?[1,1,1]:t.flags&Ut.UNPAVED?[.95,.82,.62]:qy[t.cls]}edgeH(t,e,n,s,r){let o=this.ways[t];if(o.abs)return this.heightOn(t,e,n,s,r);let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(s,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+Yo}addDecal(t,e,n,s,r,o,a,l,c,u,h){let f=Zy(h);if(!f)return;let d=-l,m=a,y=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([p,g,_,x])=>{let v=r+d*p+a*g,S=o+m*p+l*g;return t.v(v,this.edgeH(e,n,s,v,S)+.035,S,1,1,1,_,x)});t.quad(y[0],y[1],y[2],y[3])}buildTile(t){let e=new ie,n=this.tileSegs.get(t)||[],s=this.materials(),r=new ge(!0,!0),o=new ge(!0,!0),a=new ge(!0,!1),l=new ge(!1,!1),c=new ge(!1,!1),u=new ge(!0,!0),h=new ge(!0,!0),f=this.terrain,d=5,m=new Set;for(let p of n){let g=Math.floor(p/16384),_=p%16384,x=this.ways[g],v=x.nodes[_],S=x.nodes[_+1],w=this.nx[v],E=this.nz[v],T=this.nx[S],M=this.nz[S],b=Math.hypot(T-w,M-E);if(b<.05)continue;let C=(T-w)/b,U=(M-E)/b,z=-U,D=C,k=this.miter(x,_),L=this.miter(x,_+1),H=x.width/2,O=Math.max(1,Math.ceil(b/d)),q=this.wayColor(x),K=x.surf===1||!!(x.flags&Ut.NOCAR),V=K?o:r,et=K?.6:.2,Z=x.abs||this.dh[v]>.3||this.dh[S]>.3,N=-1,W=-1,j=[];for(let Q=0;Q<=O;Q++){let X=Q/O,st=w+(T-w)*X,ut=E+(M-E)*X,ot=k[0]+(L[0]-k[0])*X,nt=k[1]+(L[1]-k[1])*X,xt=st-ot*H,F=ut-nt*H,vt=st+ot*H,yt=ut+nt*H,bt=this.edgeH(g,_,X,xt,F),ht=this.edgeH(g,_,X,vt,yt),Nt=V.v(xt,bt,F,q[0],q[1],q[2],xt*et,F*et),lt=V.v(vt,ht,yt,q[0],q[1],q[2],vt*et,yt*et);N>=0&&V.quad(N,W,lt,Nt),N=Nt,W=lt,j.push([xt,bt,F,vt,ht,yt,ot,nt])}for(let[Q,X]of[[0,v],[x.nodes.length-1,S]]){if(Q===0?_!==0:_!==x.nodes.length-2)continue;let st=X*2+(K?1:0);if(m.has(st)||x.flags&Ut.ROUNDABOUT)continue;m.add(st);let ut=this.nx[X],ot=this.nz[X],nt=Q===0?0:1,xt=V.v(ut,this.edgeH(g,_,nt,ut,ot),ot,q[0],q[1],q[2],ut*et,ot*et),F=[];for(let vt=0;vt<14;vt++){let yt=vt/14*Math.PI*2,bt=ut+Math.cos(yt)*H,ht=ot+Math.sin(yt)*H;F.push(V.v(bt,this.edgeH(g,_,nt,bt,ht),ht,q[0],q[1],q[2],bt*et,ht*et))}for(let vt=0;vt<14;vt++)V.tri(xt,F[(vt+1)%14],F[vt])}if(Z){for(let Q=0;Q<2;Q++)for(let X=0;X<j.length-1;X++){let st=j[X],ut=j[X+1],ot=st[Q*3],nt=st[Q*3+1],xt=st[Q*3+2],F=ut[Q*3],vt=ut[Q*3+1],yt=ut[Q*3+2],bt=f.height(ot,xt),ht=f.height(F,yt);if(nt-bt<.35&&vt-ht<.35||this.coveredBy(g,(ot+F)/2,(xt+yt)/2,.3))continue;let Nt=x.abs?Math.max(bt-1,nt-1.4):bt-.5,lt=x.abs?Math.max(ht-1,vt-1.4):ht-.5,I=l.v(ot,nt,xt),A=l.v(F,vt,yt),G=l.v(F,lt,yt),rt=l.v(ot,Nt,xt);l.quad(I,A,G,rt);let it=l.v(ot,nt+1,xt),tt=l.v(F,vt+1,yt),ft=l.v(F,vt,yt),pt=l.v(ot,nt,xt);l.quad(it,tt,ft,pt)}if(x.abs&&x.flags&Ut.BRIDGE)for(let Q=1;Q<j.length-1;Q+=4){let X=j[Q],st=(X[0]+X[3])/2,ut=(X[2]+X[5])/2,ot=(X[1]+X[4])/2,nt=f.height(st,ut);if(ot-nt<3)continue;let xt=.6,F=[[-xt,-xt],[xt,-xt],[xt,xt],[-xt,xt]];for(let vt=0;vt<4;vt++){let[yt,bt]=F[vt],[ht,Nt]=F[(vt+1)%4],lt=l.v(st+yt,ot-.5,ut+bt),I=l.v(st+ht,ot-.5,ut+Nt),A=l.v(st+ht,nt-1,ut+Nt),G=l.v(st+yt,nt-1,ut+bt);l.quad(lt,I,A,G)}}}if(x.cls<=kt.TRUNK&&!(x.flags&Ut.LINK)&&!Z){let Q=this.zones(x).mark;for(let X=0;X<2;X++)for(let st=0;st<j.length-1;st++){let ut=x.cum[_]+st/O*b,ot=x.cum[_]+(st+1)/O*b;if(ut-Q.pc[_]<8||Q.nc[_+1]-ot<8)continue;let nt=j[st],xt=j[st+1],F=X?1:-1,vt=.4*F;if(this.coveredBy(g,(nt[X*3]+xt[X*3])/2+z*vt,(nt[X*3+2]+xt[X*3+2])/2+D*vt,.8))continue;let yt=nt[X*3]+z*vt,bt=nt[X*3+2]+D*vt,ht=nt[X*3+1],Nt=xt[X*3]+z*vt,lt=xt[X*3+2]+D*vt,I=xt[X*3+1],A=c.v(yt,ht+.85,bt),G=c.v(Nt,I+.85,lt),rt=c.v(Nt,I+.5,lt),it=c.v(yt,ht+.5,bt);if(c.quad(A,G,rt,it),st%2===0){let tt=c.v(yt,ht+.85,bt),ft=c.v(yt+C*.12,ht+.85,bt+U*.12),pt=c.v(yt+C*.12,ht-.2,bt+U*.12),_t=c.v(yt,ht-.2,bt);c.quad(tt,ft,pt,_t)}}}this.buildSidewalk(u,g,_,j,O,b),this.buildMarkings(a,g,_)}let y=new ge(!0,!1);for(let p of this.roundabouts){if(this.tileKey(p.x,p.z)!==t)continue;let g=f.height(p.x,p.z)+p.dh+Yo+.22,_=p.poly,x=_.length,v=Math.min(1.6,p.r*.3),S=y.v(p.x,g+.25+Math.min(1.2,p.r*.06),p.z,.3,.52,.2),E=[[0,g-.6,.86,.86,.83],[0,g,.86,.86,.83],[.25,g,.62,.55,.5],[v,g+.06,.62,.55,.5],[v,g+.25,.8,.8,.78],[v+.25,g+.25,.33,.56,.22]].map(([M,b,C,U,z])=>_.map(([D,k])=>{let L=Math.hypot(D-p.x,k-p.z)||1,H=Math.max(.05,(L-M)/L);return y.v(p.x+(D-p.x)*H,b,p.z+(k-p.z)*H,C,U,z)}));for(let M=0;M<E.length-1;M++)for(let b=0;b<x;b++){let C=(b+1)%x;y.quad(E[M][b],E[M+1][b],E[M+1][C],E[M][C])}let T=E[E.length-1];for(let M=0;M<x;M++)y.tri(S,T[(M+1)%x],T[M])}return this.buildNodeMarks(t,a,r),this.buildLaneArrows(t,h),this.buildRoundaboutEntries(t,a),this.buildRails(t,r,l),r.empty||e.add(r.mesh(s.road)),o.empty||e.add(o.mesh(s.stone)),u.empty||e.add(u.mesh(s.walk)),a.empty||e.add(a.mesh(s.mark)),h.empty||e.add(h.mesh(s.decal)),l.empty||e.add(l.mesh(s.wall,!0)),c.empty||e.add(c.mesh(s.guard)),y.empty||e.add(y.mesh(s.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&Ut.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<kt.PRIMARY||t.cls>kt.RESIDENTIAL||t.flags&(Ut.LINK|Ut.ROUNDABOUT|Ut.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,s,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let m=0;m<2;m++){if(!(u&(m?2:1)))continue;let y=m?1:-1,p=null;for(let g=0;g<=r;g++){let _=a.cum[n]+g/r*o,x=s[g],v=g/r,S=x[m*3],w=x[m*3+1],E=x[m*3+2],T=S+x[6]*y*mf,M=E+x[7]*y*mf;if((_-h.pc[n]<40||h.nc[n+1]-_<40)&&this.coveredBy(e,(S+T)/2,(E+M)/2,1)){p=null;continue}let C=this.edgeH(e,n,v,T,M),U=Math.max(w,C)+Yy,z=[t.v(S,w-.05,E,d[0],d[1],d[2],0,_*.5),t.v(S,U,E,d[0],d[1],d[2],.1,_*.5),t.v(S,U,E,f[0],f[1],f[2],0,_*.6),t.v(T,U,M,f[0],f[1],f[2],1,_*.6),t.v(T,U,M,d[0],d[1],d[2],0,_*.5),t.v(T,Math.min(C,this.terrain.height(T,M))-.4,M,d[0],d[1],d[2],.1,_*.5)];if(p)for(let D=0;D<6;D+=2)y>0?t.quad(p[D],p[D+1],z[D+1],z[D]):t.quad(p[D],z[D],z[D+1],p[D+1]);p=z}}}buildMarkings(t,e,n){let s=this.ways[e];if(s.cls>=kt.SERVICE||!s.drivable||s.flags&Ut.UNPAVED||s.surf===1)return;let r=s.nodes[n],o=s.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,m=this.miter(s,n),y=this.miter(s,n+1),p=s.width/2,g=this.zones(s).mark,_=this.zones(s).walk,x=s.cum[n],v=[],S=s.limit<=50,w=s.flags&Ut.ROUNDABOUT;if(s.cls<=kt.TERTIARY||w||s.width>=7){let C=Math.max(.3,s.sh*.85);v.push({off:-p+C,wdt:.15,dash:0,edge:!0},{off:p-C,wdt:.15,dash:0,edge:!0})}let E=S?[3,4.5]:[4.5,7.5];if(w)s.nF>=2&&v.push({off:-p+s.sh+s.lw,wdt:.12,dash:[3,4.5]});else if(!s.oneway&&s.nF>=1&&s.nB>=1&&s.width>=5.4){let C=(g.nc[n+1]-(x+h)<22||x-g.pc[n]<22)&&s.cls<=kt.TERTIARY;s.nF+s.nB>=4?v.push({off:s.cOff-.14,wdt:.12,dash:0},{off:s.cOff+.14,wdt:.12,dash:0}):v.push({off:s.cOff,wdt:.15,dash:C?0:E});for(let U=1;U<s.nF;U++)v.push({off:s.cOff+s.lw*U,wdt:.12,dash:E});for(let U=1;U<s.nB;U++)v.push({off:s.cOff-s.lw*U,wdt:.12,dash:E})}else if(s.oneway&&s.nF>=2)for(let C=1;C<s.nF;C++)v.push({off:-p+s.sh+s.lw*C,wdt:.15,dash:[4.5,7.5]});let T=s.cls<=kt.TRUNK||s.flags&Ut.LINK?220:35,M=x-_.pc[n]<T||_.nc[n+1]-(x+h)<T,b=M?1.25:5;for(let C of v){let U=[];for(let L=0;L<h;L+=b)U.push(L);if(C.dash){let L=C.dash[0]+C.dash[1];for(let H=Math.floor(x/L)*L;H<x+h;H+=L)H>x&&U.push(H-x),H+C.dash[0]>x&&H+C.dash[0]<x+h&&U.push(H+C.dash[0]-x)}U.push(h),U.sort((L,H)=>L-H);let z=-1,D=-1,k=-1;for(let L=0;L<U.length-1;L++){let H=U[L],O=U[L+1];if(O-H<.02)continue;let q=(H+O)/2,K=q/h,V=!C.dash||(x+q)%(C.dash[0]+C.dash[1])<C.dash[0];if(V&&M){let et=m[0]+(y[0]-m[0])*K,Z=m[1]+(y[1]-m[1])*K;this.coveredBy(e,a+f*q+et*C.off,l+d*q+Z*C.off,C.edge?.1:0,!!C.edge)&&(V=!1)}if(!V){z=-1;continue}for(let et of z>=0&&k===H?[O]:[H,O]){let Z=et/h,N=m[0]+(y[0]-m[0])*Z,W=m[1]+(y[1]-m[1])*Z,j=a+f*et+N*C.off,Q=l+d*et+W*C.off,X=j-N*C.wdt/2,st=Q-W*C.wdt/2,ut=j+N*C.wdt/2,ot=Q+W*C.wdt/2,nt=t.v(X,this.edgeH(e,n,Z,X,st)+.02,st,1,1,1),xt=t.v(ut,this.edgeH(e,n,Z,ut,ot)+.02,ot,1,1,1);z>=0&&t.quad(z,D,xt,nt),z=nt,D=xt}k=O}}}buildNodeMarks(t,e,n){let s=new Set,r=[Kt.CROSSING,Kt.CROSSING_SIGNALS,Kt.BUMP,Kt.TABLE,Kt.MINI_RB,Kt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||s.has(h)||!r.includes(f)||c.cls>=kt.SERVICE&&f!==Kt.TURNING)continue;s.add(h);let d=Math.min(u,c.nodes.length-2),m=c.nodes[d],y=c.nodes[d+1],p=this.nx[y]-this.nx[m],g=this.nz[y]-this.nz[m],_=Math.hypot(p,g)||1,x=p/_,v=g/_,S=-v,w=x,E=this.nx[h],T=this.nz[h],M=c.width/2,b=u===d?0:1,C=(U,z,D,k,L,H=.025)=>{let O=[[U,D],[z,D],[z,k],[U,k]].map(([q,K])=>{let V=E+S*q+x*K,et=T+w*q+v*K;return e.v(V,this.edgeH(a,d,b,V,et)+H,et,L[0],L[1],L[2])});e.quad(O[0],O[1],O[2],O[3])};if(f===Kt.CROSSING||f===Kt.CROSSING_SIGNALS)for(let U=-M+.55;U<=M-.55;U+=1)C(U-.25,U+.25,-1.5,1.5,[1,1,1]);else if(f===Kt.BUMP){let U=0;for(let z=-M+.2;z<M-.2;z+=.5,U++)C(z,Math.min(M-.2,z+.5),-.45,.45,U%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===Kt.TABLE){C(-M+.1,M-.1,-2.6,2.6,[.72,.36,.3],.05);for(let U=-M+.6;U<=M-.6;U+=1)C(U-.25,U+.25,-1.5,1.5,[1,1,1],.07)}else if(f===Kt.MINI_RB){let U=this.edgeH(a,d,b,E,T)+.03,z=e.v(E,U+.08,T,1,1,1),D=[];for(let k=0;k<16;k++){let L=k/16*6.2832;D.push(e.v(E+Math.cos(L)*1.5,U,T+Math.sin(L)*1.5,1,1,1))}for(let k=0;k<16;k++)e.tri(z,D[(k+1)%16],D[k])}else if(f===Kt.TURNING){let U=this.wayColor(c),z=Math.max(7,M+3),D=n.v(E,this.edgeH(a,d,b,E,T),T,U[0],U[1],U[2],E*.2,T*.2),k=[];for(let L=0;L<20;L++){let H=L/20*6.2832,O=E+Math.cos(H)*z,q=T+Math.sin(H)*z;k.push(n.v(O,this.edgeH(a,d,b,O,q),q,U[0],U[1],U[2],O*.2,q*.2))}for(let L=0;L<20;L++)n.tri(D,k[(L+1)%20],k[L])}}}}buildLaneArrows(t,e){let n=new Set;for(let s of this.tileSegs.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let m of a.len>70?[9,32]:[9]){if(m>a.len-4)continue;let[y,p,g,_]=this.pointAt(a,l>0?a.len-m:m),x=a.nodes[g],v=a.nodes[g+1],S=this.nx[v]-this.nx[x],w=this.nz[v]-this.nz[x],E=Math.hypot(S,w)||1;S=S/E*l,w=w/E*l;let T=-w,M=S,b=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((C,U)=>{let z=new Set(C.split(";").map(k=>k.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(k=>k==="left"||k==="right"||k==="through"));if(!z.size)return;let D=b+d*(U+.5);this.addDecal(e,r,g,_,y+T*D,p+M*D,S,w,Math.min(1.5,d*.5),4.2,[...z].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let s=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=s.oneway?-s.width/2+.3:(n.dir>0?s.cOff:-s.cOff)+.15,m=s.width/2-.3;for(let y=d;y+.5<=m;y+=.75){let p=[[y,-.3],[y+.5,-.3],[y+.25,.35]].map(([g,_])=>{let x=h+l*g-r*_,v=f+c*g-o*_;return e.v(x,this.edgeH(n.wi,n.k,n.t,x,v)+.03,v,1,1,1)});e.tri(p[0],p[1],p[2]),e.tri(p[0],p[2],p[1])}}}buildRails(t,e){let n=this.terrain;for(let s of this.tileRails.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,m=(h-c)/f,y=-m,p=d,g=Math.max(1,Math.ceil(f/6)),_=(x,v,S)=>{if(a.bridge&&a.cum){let w=a.cum[o]+S*f;return a.h0+(a.h1-a.h0)*w/(a.cum[a.cum.length-1]||1)+.25}return n.height(x,v)+.25};for(let[x,v,S]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let w=-1,E=-1;for(let T=0;T<=g;T++){let M=T/g,b=l+(u-l)*M+y*x,C=c+(h-c)*M+p*x,U=_(b,C,M)+(S?.16:0),z=b-y*v/2,D=C-p*v/2,k=b+y*v/2,L=C+p*v/2,H=S?[.35,.33,.32]:[.75,.68,.58],O=e.v(z,U,D,...H,z*.3,D*.3),q=e.v(k,U,L,...H,k*.3,L*.3);w>=0&&e.quad(w,E,q,O),w=O,E=q}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new ge(!0,!0),s=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let x=3;x<r.length;x+=2)u+=r[x],h+=r[x+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let x=0;x<c.length-1;x++){let v=Math.hypot(c[x+1][0]-c[x][0],c[x+1][1]-c[x][1]),S=Math.max(1,Math.ceil(v/6));for(let w=0;w<S;w++)f.push([c[x][0]+(c[x+1][0]-c[x][0])*w/S,c[x][1]+(c[x+1][1]-c[x][1])*w/S,d+v*w/S]);d+=v}f.push([c[c.length-1][0],c[c.length-1][1],d]);let m=s[o],y=e.height(f[0][0],f[0][1]),p=e.height(f[f.length-1][0],f[f.length-1][1]),g=-1,_=-1;for(let x=0;x<f.length;x++){let v=f[Math.min(f.length-1,x+1)],S=f[Math.max(0,x-1)],w=v[0]-S[0],E=v[1]-S[1],T=Math.hypot(w,E)||1;w/=T,E/=T;let M=-E,b=w,C=f[x][0],U=f[x][1],z=d>0?f[x][2]/d:0,D=C-M*a/2,k=U-b*a/2,L=C+M*a/2,H=U+b*a/2,O=l?y+(p-y)*z+Math.sin(Math.PI*z)*Math.min(5.5,d*.12)+.1:0,q=n.v(D,l?O:e.height(D,k)+.1,k,m[0],m[1],m[2],D*.3,k*.3),K=n.v(L,l?O:e.height(L,H)+.1,H,m[0],m[1],m[2],L*.3,H*.3);g>=0&&n.quad(g,_,K,q),g=q,_=K}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new ge(!0,!1),s=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,m=-f/d*u/2,y=h/d*u/2,p=[[o-m,a-y],[o+m,a+y],[l+m,c+y],[l-m,c-y]].map(([g,_])=>n.v(g,e.height(g,_)+.1,_,1,1,1));n.quad(p[0],p[1],p[2],p[3])};for(let o=0;o<s.length;o+=5){let a=s[o]/10,l=s[o+1]/10,c=s[o+2]/10*Math.PI/180,u=s[o+3]/10,h=(s[o+4]>>1)/10,f=s[o+4]&1,d=Math.sin(c),m=Math.cos(c),y=-m,p=d;if(f===0)for(let g of[1,-1])r(a+y*g*u/2-d*h/2,l+p*g*u/2-m*h/2,a+y*g*u/2+d*h/2,l+p*g*u/2+m*h/2,.1);else for(let g of[1,-1])r(a+d*g*h/2-y*u/2,l+m*g*h/2-p*u/2,a+d*g*h/2+y*u/2,l+m*g*h/2+p*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let s=this.terrain,r=new ge(!0,!1),o=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let a of t.ba){let l=o[a[0]],c=a[1]/10,u=[],h=0,f=0;for(let d=2;d<a.length;d+=2)h+=a[d],f+=a[d+1],u.push([h/10,f/10]);for(let d=0;d<u.length-1;d++){let[m,y]=u[d],[p,g]=u[d+1],_=Math.hypot(p-m,g-y);if(_<.2)continue;let x=-(g-y)/_*l.th/2,v=(p-m)/_*l.th/2,S=Math.max(1,Math.ceil(_/8));for(let w=0;w<S;w++){let E=w/S,T=(w+1)/S,M=m+(p-m)*E,b=y+(g-y)*E,C=m+(p-m)*T,U=y+(g-y)*T,z=s.height(M,b),D=s.height(C,U),k=a[0]===3?.45:-.3,L=l.c,H=[L[0]*.8,L[1]*.8,L[2]*.8],O=[[M-x,b-v,z],[C-x,U-v,D],[C+x,U+v,D],[M+x,b+v,z]],q=O.map(([K,V,et])=>r.v(K,et+c,V,L[0],L[1],L[2]));r.quad(q[0],q[1],q[2],q[3]);for(let[K,V]of[[0,1],[2,3]]){let et=O[K],Z=O[V],N=r.v(et[0],et[2]+c,et[1],H[0],H[1],H[2]),W=r.v(Z[0],Z[2]+c,Z[1],H[0],H[1],H[2]),j=r.v(Z[0],Z[2]+k,Z[1],H[0],H[1],H[2]),Q=r.v(et[0],et[2]+k,et[1],H[0],H[1],H[2]);r.quad(N,W,j,Q)}}if(e&&a[0]!==3&&_>1.5){let w=Math.max(.4,l.th/2),E=-(g-y)/_*w,T=(p-m)/_*w;e.addPolygon(n,Float32Array.from([m-E,y-T,p-E,g-T,p+E,g+T,m+E,y+T]))}}}return r.empty?null:r.mesh(this.materials().barrier,!0)}};var xf=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],yf=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],vf=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],_f=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],Mf=new At;function $y(){let e=()=>{let y=document.createElement("canvas");return y.width=y.height=512,y},n=e(),s=e(),r=e(),o=e(),a=e(),l=n.getContext("2d"),c=r.getContext("2d"),u=s.getContext("2d"),h=o.getContext("2d"),f=a.getContext("2d");for(let y of[l,u,f])y.fillStyle="#ffffff",y.fillRect(0,0,512,512);for(let y of[c,h])y.fillStyle="#000",y.fillRect(0,0,512,512);for(let y of[l,u,f])for(let p=0;p<2500;p++)y.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,y.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8);let d=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"];for(let y=0;y<8;y++)for(let p=0;p<8;p++){let g=p*64,_=y*64,x=64*.34,v=64*.52,S=g+(64-x)/2,w=_+64*.22;l.fillStyle="#d8d2c4",l.fillRect(S-3,w-3,x+6,v+7),l.fillStyle="#2f3438",l.fillRect(S,w,x,v),l.fillStyle="#5c6a72",l.fillRect(S+2,w+2,x/2-3,v-4),l.fillRect(S+x/2+1,w+2,x/2-3,v-4);let E=Math.random(),T=d[(p*7+y*3)%d.length];l.fillStyle=T,E<.6?(l.fillRect(S-x/2-2,w,x/2,v),l.fillRect(S+x+2,w,x/2,v)):E<.85&&l.fillRect(S,w,x,v),l.fillStyle="rgba(0,0,0,0.25)";for(let M=0;M<6;M++)l.fillRect(S-x/2-2,w+M*v/6,x*2+4,1);if(E<.85||Math.random()<.3){let M=Math.random()<.35;c.fillStyle=M?Math.random()<.5?"#ffd890":"#fff0c0":"#000",E>=.6&&E<.85&&(c.fillStyle="#000"),c.fillRect(S,w,x,v)}u.fillStyle="rgba(0,0,0,0.08)",u.fillRect(g,_,2,64),y%2===0&&(u.fillStyle="#4b5a63",u.fillRect(g+3,_+64*.3,58,64*.3),h.fillStyle=Math.random()<.25?"#e8f0ff":"#000",h.fillRect(g+3,_+64*.3,58,64*.3))}let m=(y,p=!0)=>{let g=new Le(y);return g.wrapS=g.wrapT=oi,g.anisotropy=8,p&&(g.colorSpace=Me),g};return{res:m(n),ind:m(s),plain:m(a),emiR:m(r),emiI:m(o)}}var $o=class{constructor(t){this.terrain=t;let e=$y();this.mats={res:new Xt({map:e.res,vertexColors:!0,emissiveMap:e.emiR,emissive:16777215,emissiveIntensity:0}),ind:new Xt({map:e.ind,vertexColors:!0,emissiveMap:e.emiI,emissive:16777215,emissiveIntensity:0}),plain:new Xt({map:e.plain,vertexColors:!0}),roof:new Xt({vertexColors:!0,side:ce})}}setNight(t){this.mats.res.emissiveIntensity=t*.55,this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let s=this.terrain,r={res:new ge,ind:new ge,plain:new ge},o=new ge(!0,!1),a=t.s,l=[];for(let u of t.b){let h=u[0],f=u[1]/10,d=u[2]/10,m=u[3],y=u[4],p=a[u[5]],g=a[u[6]],_=a[u[7]],x=[],v=0,S=0;for(let Z=8;Z<u.length;Z+=2)v+=u[Z],S+=u[Z+1],x.push(v/10,S/10);let w=x.length/2;if(w<3)continue;let E=0,T=0,M=0,b=1e9,C=-1e9;for(let Z=0;Z<w;Z++){let N=(Z+1)%w;E+=x[Z*2]*x[N*2+1]-x[N*2]*x[Z*2+1],T+=x[Z*2],M+=x[Z*2+1];let W=s.height(x[Z*2],x[Z*2+1]);b=Math.min(b,W),C=Math.max(C,W)}E=Math.abs(E/2),T/=w,M/=w;let U=Ue(Math.floor(x[0]*10)*7919+Math.floor(x[1]*10)),z=Ue(Math.floor(x[1]*10)*104729+17),D=h;if(D===0&&(D=E<45?6:E>1800?3:2),!(f>0))if(m>0)f=m*3.1+.6;else switch(D){case 1:f=6.2+U*2.5;break;case 2:f=E>500?11+U*7:7+U*4;break;case 3:f=7.5+U*4;break;case 4:f=7+U*5;break;case 5:f=13+Math.min(10,E/80);break;case 6:f=2.8+U*.8;break;case 7:f=10+U*4;break;case 8:f=28+U*12;break;case 9:f=6+U*2;break;default:f=4+U*3}let k=b-.6+d,L=(b+C)/2+f,H=D===3||D===4?"ind":D===5||D===6||D===8||D===9||D===10?"plain":"res",O;if(g&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(g))try{Mf.set(g),O=Mf.clone()}catch{O=null}O||(O=new At(H==="ind"?yf[Math.floor(z*yf.length)]:D===8||D===5?z<.5?"#d8c9a8":"#c9a77f":xf[Math.floor(z*xf.length)])),O.convertSRGBToLinear();let q=r[H],K=0;for(let Z=0;Z<w;Z++){let N=(Z+1)%w,W=x[Z*2],j=x[Z*2+1],Q=x[N*2],X=x[N*2+1],st=Math.hypot(Q-W,X-j),ut=K/24,ot=(K+st)/24,nt=Math.max(1,Math.round(st/3)),xt=ut+nt/8,F=0,vt=(L-k)/24,yt=q.v(W,k,j,O.r,O.g,O.b,ut,vt),bt=q.v(W,L,j,O.r,O.g,O.b,ut,F),ht=q.v(Q,L,X,O.r,O.g,O.b,xt,F),Nt=q.v(Q,k,X,O.r,O.g,O.b,xt,vt);q.quad(yt,bt,ht,Nt),K+=st}let V,et=(D===1||D===2&&(E<1400||m<=4)||D===5||D===9||D===7&&E<900||D===6&&E>18)&&y!==1;if(_&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(_))try{V=new At(_)}catch{V=null}V||(V=new At(et?vf[Math.floor(U*vf.length)]:_f[Math.floor(U*_f.length)])),V.convertSRGBToLinear(),this.roof(o,x,w,L,et,V,E,D,O,z),e&&e.addPolygon(n,Float32Array.from(x)),p&&(D===5||D===8||h===7)&&l.push({name:p,x:T,z:M,y:L+4})}let c=new ie;for(let u of["res","ind","plain"])r[u].empty||c.add(r[u].mesh(this.mats[u],!0));return o.empty||c.add(o.mesh(this.mats.roof,!0)),{group:c,labels:l}}offsetRing(t,e,n){let s=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let m=-c,y=l,p=-h,g=u,_=Math.max(.35,1+m*p+y*g);s[r*2]=t[r*2]+n*(m+p)/_,s[r*2+1]=t[r*2+1]+n*(y+g)/_}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=s[o*2]*s[a*2+1]-s[a*2]*s[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=s[a*2]-s[o*2],h=s[a*2+1]-s[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return s}roof(t,e,n,s,r,o,a,l,c,u){let h=(x,v,S,w=o)=>{let E=v[0]-x[0],T=v[2]-x[2],M=S[0]-x[0],b=S[2]-x[2],C=T*M-E*b,U=t.v(x[0],x[1],x[2],w.r,w.g,w.b),z=t.v(v[0],v[1],v[2],w.r,w.g,w.b),D=t.v(S[0],S[1],S[2],w.r,w.g,w.b);C>=0?t.tri(U,z,D):t.tri(U,D,z)},f=(x,v,S,w,E)=>{h(x,v,S,E),h(x,S,w,E)},d=o.clone().multiplyScalar(.84),m=o.clone().multiplyScalar(1.06),y=.45,p=(x,v,S)=>{if(u>.55)return;let w=.3,E=1.1,T=c.clone().multiplyScalar(.9),M=[[x-w,v-w],[x+w,v-w],[x+w,v+w],[x-w,v+w]];for(let b=0;b<4;b++){let[C,U]=M[b],[z,D]=M[(b+1)%4];f([C,S-.6,U],[z,S-.6,D],[z,S+E,D],[C,S+E,U],T)}f([M[0][0],S+E,M[0][1]],[M[1][0],S+E,M[1][1]],[M[2][0],S+E,M[2][1]],[M[3][0],S+E,M[3][1]],d)};if(r&&n===4&&a<2500){let x=[0,1,2,3].map(K=>[e[K*2],e[K*2+1]]),v=Math.hypot(x[1][0]-x[0][0],x[1][1]-x[0][1]),S=Math.hypot(x[2][0]-x[1][0],x[2][1]-x[1][1]),w=S>v?[x[1],x[2],x[3],x[0]]:x,E=Math.max(v,S),T=Math.min(v,S),M=(w[0][0]+w[1][0]+w[2][0]+w[3][0])/4,b=(w[0][1]+w[1][1]+w[2][1]+w[3][1])/4,C=(w[1][0]-w[0][0]+(w[2][0]-w[3][0]))/2/E,U=(w[1][1]-w[0][1]+(w[2][1]-w[3][1]))/2/E,z=Math.min(T*.27,5),D=this.offsetRing(w.flat(),4,-y),k=[0,1,2,3].map(K=>[D[K*2],s-y*.5,D[K*2+1]]),L=u>.4,H=L?E/2+y:Math.max(0,E/2-T/2),O=[M-C*H,s+z,b-U*H],q=[M+C*H,s+z,b+U*H];if(f(k[0],k[1],q,O,m),f(k[2],k[3],O,q,o),L){let K=[0,1,2,3].map(V=>[w[V][0],s,w[V][1]]);h(K[1],K[2],[M+C*E/2,s+z,b+U*E/2],c),h(K[3],K[0],[M-C*E/2,s+z,b-U*E/2],c)}else h(k[1],k[2],q,d),h(k[3],k[0],O,d);p(M+C*E*.2,b+U*E*.2,s+z);return}if(r&&a<6e3&&n<=60){let x=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),v=this.offsetRing(e,n,x);if(v||(x*=.5,v=this.offsetRing(e,n,x)),v){let S=this.offsetRing(e,n,-y),w=s+x*.5;for(let M=0;M<n;M++){let b=(M+1)%n;f([S[M*2],s-y*.4,S[M*2+1]],[S[b*2],s-y*.4,S[b*2+1]],[v[b*2],w,v[b*2+1]],[v[M*2],w,v[M*2+1]],M%2?o:d)}let E=[];for(let M=0;M<n;M++)E.push(new It(v[M*2],v[M*2+1]));let T=[];try{T=Ai.triangulateShape(E,[])}catch{T=[]}for(let[M,b,C]of T)h([E[M].x,w,E[M].y],[E[b].x,w,E[b].y],[E[C].x,w,E[C].y],m);(l===1||l===2)&&p(v[0]*.5+v[2]*.5,v[1]*.5+v[3]*.5,w);return}}let g=[];for(let x=0;x<n;x++)g.push(new It(e[x*2],e[x*2+1]));let _;try{_=Ai.triangulateShape(g,[])}catch{return}for(let[x,v,S]of _)h([g[x].x,s-.25,g[x].y],[g[v].x,s-.25,g[v].y],[g[S].x,s-.25,g[S].y])}};var Jy={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},Jo=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new or(1,1),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r),a=s.getY(r),l=s.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));s.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new Io(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new ne(.12,.18,1,5),this.crownMat=new Xt({color:16777215}),this.trunkMat=new Xt({color:5981746})}build(t,e,n,s,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(L,H,O,q=!1,K=!1)=>f.push([L,H,O,q,K]);if(t){for(let L=0;L<t.tr.length;L+=2)d(t.tr[L]/10,t.tr[L+1]/10,.9+Ue(L)*.5);for(let L of t.rows){let H=0,O=0,q=[];for(let K=0;K<L.length;K+=2)H+=L[K],O+=L[K+1],q.push([H/10,O/10]);for(let K=0;K<q.length-1;K++){let V=Math.hypot(q[K+1][0]-q[K][0],q[K+1][1]-q[K][1]);for(let et=0;et<V;et+=7)d(q[K][0]+(q[K+1][0]-q[K][0])*et/V,q[K][1]+(q[K+1][1]-q[K][1])*et/V,.8+Ue(K*31+et)*.4,!1,Ue(L.length*7+L[0])<.45)}}}let m=11,y=e*7919+n*104729|0;for(let L=h+m/2;L<h+c;L+=m)for(let H=u+m/2;H<u+c;H+=m){y++;let O=H+(Ue(y)-.5)*m,q=L+(Ue(y*3+1)-.5)*m,K=a.landClass(O,q),V=(Jy[K]||0)*o;Ue(y*7+5)>V||d(O,q,.75+Ue(y*11)*.6,(K==="forest"||K==="wood")&&Ue(y*13)<.12)}let p=f.filter(([L,H])=>{let O=l.nearest(L,H,9);return!O||O.d>l.ways[O.wi].width/2+1.5});if(!p.length)return null;let g=p.length,_=p.filter(L=>L[3]).length,x=new Se(this.crownGeo,this.crownMat,g-_),v=_?new Se(this.coneGeo,this.crownMat,_):null,S=new Se(this.trunkGeo,this.trunkMat,g),w=new Zt,E=new Te,T=new B,M=new B,b=new At,C=new B(0,1,0),U=0,z=0,D=0;for(let[L,H,O,q,K]of p){let V=a.height(L,H),et=(q?10:K?13:6.5)*O*(.8+Ue(U*5+1)*.5),Z=(q?2.1:K?1.5:2.6+Ue(U*9)*1.4)*O;E.setFromAxisAngle(C,Ue(U*17)*6.28),M.set(L,V+et*.3,H),T.set(1,et*.6,1),w.compose(M,E,T),S.setMatrixAt(U,w);let N=.75+Ue(U*23)*.4;if(q)M.set(L,V+et*.55,H),T.set(Z,et*.85,Z),w.compose(M,E,T),v.setMatrixAt(D,w),b.setRGB(.1*N,.26*N,.12*N),v.setColorAt(D++,b);else{M.set(L,V+et*.62,H),T.set(Z,K?et*.42:Z*1.05,Z),w.compose(M,E,T),x.setMatrixAt(z,w);let W=Ue(U*41)<.06;b.setRGB(W?.42*N:.17*N,W?.3*N:(.29+Ue(U*31)*.07)*N,.09*N),x.setColorAt(z++,b)}s&&s.addCircle(r,L,H,.35*O),U++}x.castShadow=!0,S.castShadow=!1,x.computeBoundingSphere(),S.computeBoundingSphere();let k=new ie;return k.add(x,S),v&&(v.castShadow=!0,v.computeBoundingSphere(),k.add(v)),k}};var hr=44;function fr(i,t){let e=(t%hr+hr)%hr,n=i===0?e:(e+hr/2)%hr;return n<17?"G":n<20.5?"Y":"R"}function Ne(i,t,e,n,s,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,m]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let y=f*s/2,p=m*o/2;h.push([t+y*c+p*u,e+d*r/2,n-y*u+p*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(m=>i.v(h[m][0],h[m][1],h[m][2],l[0],l[1],l[2],0,0));i.quad(d[0],d[1],d[2],d[3])}}function In(i,t,e,n,s,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=i.v(t-u*s/2,e-r/2,n-h*s/2,1,1,1,a[0],a[1]),d=i.v(t+u*s/2,e-r/2,n+h*s/2,1,1,1,a[2],a[1]),m=i.v(t+u*s/2,e+r/2,n+h*s/2,1,1,1,a[2],a[3]),y=i.v(t-u*s/2,e+r/2,n-h*s/2,1,1,1,a[0],a[3]);i.quad(f,d,m,y)}var Yc=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back"];function ur(i,t=!1){let e=Yc.indexOf(i),n=e%8,s=Math.floor(e/8)+(t?4:0);return[n/8,1-(s+1)/8,(n+1)/8,1-s/8]}function Ky(i,t){let s=(h,f)=>{i.beginPath(),i.arc(64,64,h,0,7),i.fillStyle=f,i.fill()},r=(h,f)=>{i.beginPath(),h.forEach(([d,m],y)=>y?i.lineTo(d,m):i.moveTo(d,m)),i.closePath(),i.fillStyle=f,i.fill()},o=(h,f,d,m,y,p)=>{i.beginPath(),i.roundRect(h,f,d,m,y),i.fillStyle=p,i.fill()},a=(h,f,d,m=67)=>{i.fillStyle=d,i.font=`bold ${f}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText(h,64,m)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(t.startsWith("s")){s(62,l),s(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,m)=>{let y=(m+.5)/8*Math.PI*2;return[64+Math.cos(y)*f,64+Math.sin(y)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{s(62,"#fff"),s(58,c),i.strokeStyle="#fff",i.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;i.beginPath(),i.arc(64,64,30,f,d,!1),i.stroke();let m=64+Math.cos(f)*30,y=64+Math.sin(f)*30;i.save(),i.translate(m,y),i.rotate(f-Math.PI/2),i.beginPath(),i.moveTo(0,-17),i.lineTo(13,6),i.lineTo(-13,6),i.closePath(),i.fillStyle="#fff",i.fill(),i.restore()}break}case"noentry":s(62,"#fff"),s(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),i.fillStyle="#111",i.beginPath(),i.arc(66,52,7,0,7),i.fill(),i.strokeStyle="#111",i.lineWidth=6,i.lineCap="round",i.beginPath(),i.moveTo(64,62),i.lineTo(62,82),i.lineTo(50,100),i.moveTo(62,82),i.lineTo(76,100),i.moveTo(52,74),i.lineTo(64,66),i.lineTo(78,76),i.stroke(),i.lineCap="butt";break}case"bump":u(),i.fillStyle="#111",i.beginPath(),i.moveTo(36,96),i.quadraticCurveTo(64,56,92,96),i.closePath(),i.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"level":{i.lineCap="butt";for(let h of[1,-1])i.save(),i.translate(64,64),i.rotate(h*.55),i.fillStyle=l,i.fillRect(-62,-13,124,26),i.fillStyle="#fff",i.fillRect(-56,-8,112,16),i.fillStyle=l,i.fillRect(-62,-13,16,26),i.fillRect(46,-13,16,26),i.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),i.strokeStyle="#111",i.lineWidth=5,i.beginPath(),i.moveTo(74,60),i.lineTo(86,60),i.lineTo(86,86),i.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":i.fillStyle="#7d8185",i.fillRect(0,0,128,128);break;default:break}}function jy(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");Yc.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",Ky(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let s=new Le(i);return s.colorSpace=Me,s.anisotropy=8,s}var qc=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,s){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),s(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Le(this.cv);return t.colorSpace=Me,t.anisotropy=8,new Xt({map:t,vertexColors:!0})}};function Pi(i,t,e,n,s="bold"){for(i.font=`${s} ${n}px Arial`;i.measureText(t).width>e&&n>9;)n-=1,i.font=`${s} ${n}px Arial`;return n}var Ko=class{constructor(t,e,n,s){this.roads=t,this.terrain=e,this.comuneAt=n;let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Xt({map:jy(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Xt({vertexColors:!0,side:ce}),this.lights=[0,1].map(()=>({R:new Oe({color:3342336}),Y:new Oe({color:3351040}),G:new Oe({color:8704})})),this.greenMat=new Oe({color:2162528}),this.lampMat=new Oe({color:5592400}),this.lampPoleMat=new Xt({color:5593178}),this.lampPoleGeo=new ne(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new Ht(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Oe({map:new Le(o),transparent:!0,blending:ri,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new hn(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of s?s.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let s=fr(n,t),r=this.lights[n];r.R.color.setHex(s==="R"?16722458:2754566),r.Y.color.setHex(s==="Y"?16756736:2760196),r.G.color.setHex(s==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let s=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,s=u.n)}return s}approaches(t){let e=this.roads,n=[];for(let s=e.adjStart[t];s<e.adjStart[t+1];s++){let r=e.ways[e.adjWay[s]],o=e.adjPos[s];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[s],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[s],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,s=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==s&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),s=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,s=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;s=n.ways[o].limit}}return s}traceDestination(t,e,n,s){let r=this.roads,o=this.comuneOfNode(s),a=this.placeNear(r.nx[s],r.nz[s],600),l=0,c=s;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let y=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),p=null,g=1.15,_=(S,w,E,T)=>{let M=r.ways[S],b=M.nodes[w+E];if(b===void 0)return;let C=Math.atan2(r.nx[b]-r.nx[T],r.nz[b]-r.nz[T])-y;for(;C>Math.PI;)C-=2*Math.PI;for(;C<-Math.PI;)C+=2*Math.PI;Math.abs(C)<g&&(g=Math.abs(C),p=[S,w,E])},x=(S,w)=>{for(let E=r.adjStart[S];E<r.adjStart[S+1];E++){let T=r.adjWay[E],M=r.ways[T],b=r.adjPos[E];if(!(!M.drivable||M.cls>kt.UNCLASSIFIED)&&!(T===t&&b===e)){if(M.flags&Ut.ROUNDABOUT){w||v(T,b);continue}b<M.nodes.length-1&&_(T,b,1,w?d:S),b>0&&!M.oneway&&_(T,b,-1,w?d:S)}}},v=(S,w)=>{let E=S,T=w;for(let M=0;M<120;M++){let b=r.ways[E];if(T>=b.nodes.length-1){let U=b.nodes[b.nodes.length-1],z=!1;if(b.nodes[0]===U&&b.nodes.length>2)T=0,z=!0;else for(let D=r.adjStart[U];D<r.adjStart[U+1];D++){let k=r.adjWay[D];if(k!==E&&r.ways[k].flags&Ut.ROUNDABOUT&&r.adjPos[D]===0){E=k,T=0,z=!0;break}}if(!z)return}T++;let C=(b===r.ways[E],r.ways[E].nodes[T]);if(C===d)return;r.degree[C]>=3&&x(C,!0)}};if(x(d,!1),!p)return null;c=d,[t,e,n]=p;continue}let m=h.nodes[f];if(l+=Math.hypot(r.nx[m]-r.nx[d],r.nz[m]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let y=this.comuneOfNode(m);if(y&&o&&y!==o)return{name:y,dist:l};let p=this.placeNear(r.nx[m],r.nz[m]);if(p&&p!==a&&p!==o&&l>500)return{name:p,dist:l}}}return null}build(t,e){let n=this.roads,s=this.terrain,r=n.tileSegs.get(t)||[],o=new ge(!0,!1),a=new ge(!0,!0),l=new ge(!0,!0),c=new ge(!0,!1),u=new ge(!0,!0),h=[0,1].map(()=>({R:new ge(!1,!1),Y:new ge(!1,!1),G:new ge(!1,!1)})),f=new ge(!1,!1),d=new qc,m=[],y=[],p=[],g=[.42,.43,.44],_=(V,et=.7)=>({uv:ur(V),back:ur(V,!0),w:et,h:et}),x=(V,et,Z,N,W,j=2)=>{if(W=W.filter(ot=>ot&&ot.uv),!W.length)return;let Q=Math.atan2(-Z,-N),X=s.height(V,et),st=W.reduce((ot,nt)=>ot+nt.h+.06,0);Ne(o,V,X+(j+st)/2,et,.07,j+st,.07,Q,g);let ut=X+j+st;for(let ot of W)ut-=ot.h/2+.03,In(ot.text?l:a,V-Z*.05,ut,et-N*.05,ot.w,ot.h,Q,ot.uv),ot.text&&ot.double?In(l,V+Z*.05,ut,et+N*.05,ot.w,ot.h,Q+Math.PI,ot.uv):In(a,V+Z*.05,ut,et+N*.05,ot.w,ot.h,Q+Math.PI,ot.back||ur("back")),ut-=ot.h/2+.03},v=V=>{let et=d.add("st"+V,190,42,(Z,N,W)=>{Z.fillStyle="#f7f7f2",Z.fillRect(0,0,N,W),Z.strokeStyle="#1b2f6b",Z.lineWidth=3,Z.strokeRect(2.5,2.5,N-5,W-5),Z.fillStyle="#16255a",Z.textAlign="center",Z.textBaseline="middle",Pi(Z,V,N-16,22),Z.fillText(V,N/2,W/2+1)});return et&&{uv:et,w:1.25,h:.28,text:!0,double:!0}},S=(V,et)=>{let Z=d.add("tw"+(et?"E":"S")+V,300,116,(N,W,j)=>{N.fillStyle="#fff",N.fillRect(0,0,W,j),N.strokeStyle="#111",N.lineWidth=6,N.strokeRect(7,7,W-14,j-14),N.fillStyle="#111",N.textAlign="center",N.textBaseline="middle",Pi(N,V,W-44,50),N.fillText(V,W/2,j/2+2),et&&(N.strokeStyle="#c8101a",N.lineWidth=12,N.beginPath(),N.moveTo(16,j-16),N.lineTo(W-16,16),N.stroke())});return Z&&{uv:Z,w:2.1,h:.82,text:!0}},w=(V,et,Z)=>{let N=et?`${V}  ${et}`:V,W=d.add("dr"+(Z?"B":"W")+N,300,64,(j,Q,X)=>{j.fillStyle=Z?"#0a4fa6":"#fff",j.fillRect(0,0,Q,X),j.strokeStyle=Z?"#fff":"#111",j.lineWidth=3,j.strokeRect(3.5,3.5,Q-7,X-7),j.fillStyle=Z?"#fff":"#111",j.beginPath(),j.moveTo(34,12),j.lineTo(54,34),j.lineTo(41,34),j.lineTo(41,54),j.lineTo(27,54),j.lineTo(27,34),j.lineTo(14,34),j.closePath(),j.fill(),j.textAlign="left",j.textBaseline="middle",Pi(j,N,Q-76,30),j.fillText(N,66,X/2+2)});return W&&{uv:W,w:1.9,h:.42,text:!0}},E=(V,et)=>{let Z=26+V.length*46,N=d.add("bd"+et+V.join("|"),400,Z,(W,j,Q)=>{let X={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[et],st=et==="white"?"#111":"#fff";W.fillStyle=X,W.fillRect(0,0,j,Q),W.strokeStyle=st,W.lineWidth=4,W.strokeRect(5,5,j-10,Q-10),W.fillStyle=st,W.textBaseline="middle",V.forEach((ut,ot)=>{let nt=36+ot*46;W.textAlign="left",Pi(W,ut,j-90,34),W.fillText(ut,22,nt)}),W.beginPath(),W.moveTo(j-28,18),W.lineTo(j-28,46),W.lineTo(j-56,18),W.closePath(),W.fill(),W.lineWidth=8,W.strokeStyle=st,W.beginPath(),W.moveTo(j-62,52),W.lineTo(j-36,26),W.stroke()});return N&&{uv:N,w:3.2,h:3.2*Z/400,text:!0}},T=V=>{let et=d.add("rf"+V,130,56,(Z,N,W)=>{let j=/^A\d/.test(V);Z.fillStyle="#fff",Z.fillRect(0,0,N,W),Z.fillStyle=j?"#0b7a3b":"#0a4fa6",Z.fillRect(4,4,N-8,W-8),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Pi(Z,V,N-18,30),Z.fillText(V,N/2,W/2+2)});return et&&{uv:et,w:.8,h:.34,text:!0}},M=V=>{let et=d.add("bs"+V,190,36,(Z,N,W)=>{Z.fillStyle="#f2c417",Z.fillRect(0,0,N,W),Z.fillStyle="#111",Z.textAlign="center",Z.textBaseline="middle",Pi(Z,V,N-12,20),Z.fillText(V,N/2,W/2+1)});return et&&{uv:et,w:1,h:.2,text:!0,double:!0}},b=V=>{let et=d.add("ft"+V,150,150,(Z,N,W)=>{Z.fillStyle="#f4f4f4",Z.fillRect(0,0,N,W),Z.fillStyle="#d6202a",Z.fillRect(0,0,N,52),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Pi(Z,V||"CARBURANTI",N-14,26),Z.fillText(V||"CARBURANTI",N/2,27),Z.fillStyle="#111",Z.font="bold 20px Arial",Z.textAlign="left",Z.fillText("Benzina",10,80),Z.fillText("Gasolio",10,108),Z.fillText("GPL",10,134),Z.fillStyle="#0b7a3b",Z.textAlign="right",Z.fillText("1.7"+V.length%9,N-10,80),Z.fillText("1.6"+V.length*3%9,N-10,108),Z.fillText("0.7"+V.length*7%9,N-10,134)});return et&&{uv:et,w:1.5,h:1.5,text:!0,double:!0}},C=V=>Yc.includes("s"+V)?_("s"+V,.66):null,U=(V,et,Z,N,W)=>n.heightOn(V,et,Z,N,W),z=(V,et,Z,N,W,j)=>{let Q=-N,X=Z,st=V.w.width/2,ut=n.nx[et]-Z*(W+.8),ot=n.nz[et]-N*(W+.8),nt=V.w.oneway?-st+.3:(V.fwd?V.w.cOff:-V.w.cOff)+.1,xt=st-.3,F=U(V.wi,V.seg,V.t,ut,ot)+.03;if(j)for(let vt=nt;vt+.5<=xt;vt+=.75){let yt=[[vt,-.3],[vt+.5,-.3],[vt+.25,.35]].map(([bt,ht])=>c.v(ut+Q*bt-Z*ht,F,ot+X*bt-N*ht));c.tri(yt[0],yt[1],yt[2]),c.tri(yt[0],yt[2],yt[1])}else{let vt=c.v(ut+Q*nt-Z*.25,F,ot+X*nt-N*.25),yt=c.v(ut+Q*xt-Z*.25,F,ot+X*xt-N*.25),bt=c.v(ut+Q*xt+Z*.25,F,ot+X*xt+N*.25),ht=c.v(ut+Q*nt+Z*.25,F,ot+X*nt+N*.25);c.quad(vt,yt,bt,ht)}return[ut+Q*(nt+xt)/2,ot+X*(nt+xt)/2,xt-nt]},D=new Set,k=new Set,L=new Set,H=0;for(let V of r){let et=Math.floor(V/16384),Z=V%16384,N=n.ways[et];if(!N.drivable)continue;let W=N.nodes[Z],j=N.nodes[Z+1],Q=n.nx[W],X=n.nz[W],st=n.nx[j],ut=n.nz[j],ot=Math.hypot(st-Q,ut-X);if(ot<.3)continue;let nt=(st-Q)/ot,xt=(ut-X)/ot,F=-xt,vt=nt,yt=N.width/2,bt=N.nodes.length-2,ht=yt+.9;for(let lt of[W,j]){if(D.has(lt))continue;D.add(lt);let I=n.ntag[lt];if(n.degMain[lt]>=3&&H<240){let it=new Set;for(let tt=n.adjStart[lt];tt<n.adjStart[lt+1];tt++){let ft=n.ways[n.adjWay[tt]],pt=n.adjPos[tt];if(!ft.name||!ft.drivable||ft.cls>kt.LIVING||it.has(ft.name)||k.has(ft.name+"@"+lt))continue;it.add(ft.name),k.add(ft.name+"@"+lt);let _t=pt<ft.nodes.length-1?ft.nodes[pt+1]:ft.nodes[pt-1],Wt=n.nx[_t]-n.nx[lt],mt=n.nz[_t]-n.nz[lt],Tt=Math.hypot(Wt,mt)||1;Wt/=Tt,mt/=Tt;let zt=n.w1[lt]/2+2.4,Vt=ft.width/2+.9,St=n.nx[lt]+Wt*zt-mt*Vt,qt=n.nz[lt]+mt*zt+Wt*Vt,Yt=v(ft.name);Yt&&(x(St,qt,-mt,Wt,[Yt],2.45),H++)}}if(!I)continue;let A=this.approaches(lt).filter(it=>it.w.cls<=kt.SERVICE);if(!A.length)continue;let G=n.degMain[lt]>=3,rt=it=>{let tt=n.nx[lt]-n.nx[it.from],ft=n.nz[lt]-n.nz[it.from],pt=Math.hypot(tt,ft)||1;return[tt/pt,ft/pt,pt]};if(I===Kt.SIGNALS||I===Kt.STOP||I===Kt.GIVE_WAY||I===Kt.CROSSING_SIGNALS){let it=A,tt=n.ndir[lt];if(tt&&!G){let ft=A.filter(pt=>pt.fwd===(tt===1));ft.length&&(it=ft)}else if(I!==Kt.SIGNALS&&I!==Kt.CROSSING_SIGNALS&&G){let ft=Math.min(...A.map(pt=>pt.w.cls));it=A.filter(pt=>pt.w.cls>ft),it.length||(it=A.slice(0,1))}else if(!G&&I!==Kt.CROSSING_SIGNALS){let ft=A.filter(pt=>this.leadsToJunction(lt,pt.from));ft.length&&(it=ft)}for(let ft of it){let[pt,_t,Wt]=rt(ft),mt=-_t,Tt=pt,zt=ft.w.width/2,Vt=G?Math.min(Wt*.6+2,n.w1[lt]/2+1.5):I===Kt.CROSSING_SIGNALS?2.5:0,St=n.nx[lt]-pt*Vt+mt*(zt+.9),qt=n.nz[lt]-_t*Vt+Tt*(zt+.9),Yt=Math.atan2(-pt,-_t);if(I===Kt.SIGNALS||I===Kt.CROSSING_SIGNALS){let re=s.height(St,qt);Ne(o,St,re+1.55,qt,.09,3.1,.09,Yt,g),Ne(o,St,re+3,qt,.38,1.05,.3,Yt,[.1,.1,.1]);let Y=-pt*.16,Et=-_t*.16;if(I===Kt.SIGNALS){let dt=Math.abs(pt)>Math.abs(_t)?1:0,gt=h[dt];Ne(gt.R,St+Y,re+3.33,qt+Et,.22,.22,.04,Yt,[1,1,1]),Ne(gt.Y,St+Y,re+3,qt+Et,.22,.22,.04,Yt,[1,1,1]),Ne(gt.G,St+Y,re+2.67,qt+Et,.22,.22,.04,Yt,[1,1,1]),y.push({node:lt,group:dt})}else Ne(f,St+Y,re+2.67,qt+Et,.22,.22,.04,Yt,[1,1,1]);z(ft,lt,pt,_t,Vt+(I===Kt.CROSSING_SIGNALS?.5:0),!1)}else if(I===Kt.STOP){x(St,qt,pt,_t,[_("stop",.75)]);let[re,Y,Et]=z(ft,lt,pt,_t,Vt,!1);ft.w.cls<=kt.RESIDENTIAL&&Et>2&&n.addDecal(u,ft.wi,ft.seg,ft.t,re-pt*2.6,Y-_t*2.6,pt,_t,Math.min(2.4,Et-.4),3,"stop")}else x(St,qt,pt,_t,[_("giveway",.8)]),z(ft,lt,pt,_t,Vt,!0)}}else if(I===Kt.CROSSING&&!G&&N.cls<=kt.UNCLASSIFIED)for(let it of A){let[tt,ft]=rt(it);x(n.nx[lt]-tt*2.6-ft*(it.w.width/2+.9),n.nz[lt]-ft*2.6+tt*(it.w.width/2+.9),tt,ft,[_("ped",.6)])}else if(I===Kt.BUMP||I===Kt.TABLE)for(let it of A){let[tt,ft]=rt(it);x(n.nx[lt]-tt*7-ft*(it.w.width/2+.9),n.nz[lt]-ft*7+tt*(it.w.width/2+.9),tt,ft,[_("bump",.8),I===Kt.TABLE?null:C(30)])}else if(I===Kt.LEVEL_CROSSING)for(let it of A){let[tt,ft]=rt(it),pt=n.nx[lt]-tt*5-ft*(it.w.width/2+.9),_t=n.nz[lt]-ft*5+tt*(it.w.width/2+.9);x(pt,_t,tt,ft,[_("level",.95)],1.7);let Wt=s.height(pt,_t),mt=Math.atan2(-tt,-ft);Ne(o,pt-tt*.8,Wt+.55,_t-ft*.8,.3,1.1,.3,mt,[.75,.75,.75]);for(let Tt=0;Tt<6;Tt++)Ne(o,pt-tt*.8+ft*.25,Wt+1.4+Tt*.7,_t-ft*.8-tt*.25,.1,.7,.1,mt,Tt%2?[.85,.1,.1]:[.95,.95,.95])}}let Nt=N.limitMapped&&N.cls<=kt.RESIDENTIAL&&N.len>80&&!(N.flags&Ut.ROUNDABOUT);if(Z===0&&Nt&&this.neighbourLimit(W,et)!==N.limit){let lt=Math.min(14,N.len*.3),[I,A]=n.pointAt(N,lt);x(I+F*ht,A+vt*ht,nt,xt,[C(N.limit)],2.1)}if(Z===bt&&!N.oneway&&Nt&&this.neighbourLimit(j,et)!==N.limit){let lt=Math.min(14,N.len*.3),[I,A]=n.pointAt(N,N.len-lt);x(I-F*ht,A-vt*ht,-nt,-xt,[C(N.limit)],2.1)}if(N.oneway&&!(N.flags&(Ut.ROUNDABOUT|Ut.LINK))&&N.cls>=kt.TERTIARY&&N.cls<=kt.LIVING&&N.len>25){let lt=(I,A)=>{for(let G=n.adjStart[I];G<n.adjStart[I+1];G++){let rt=n.adjWay[G],it=n.ways[rt];if(rt!==et&&it.oneway&&(it.name===N.name||n.degMain[I]<3)&&n.adjPos[G]===(A?it.nodes.length-1:0))return!0}return!1};if(Z===0&&n.degMain[W]>=3&&!n.onRb[W]&&!lt(W,!0)){let[I,A]=n.pointAt(N,Math.min(6,N.len*.3));x(I+F*ht,A+vt*ht,nt,xt,[_("oneway",.6)])}if(Z===bt&&n.degMain[j]>=3&&!n.onRb[j]&&!lt(j,!1)){let I=Math.min(N.len*.3,n.w1[j]/2+1.5);for(let A of[1,-1])x(st-nt*I+F*ht*A,ut-xt*I+vt*ht*A,-nt,-xt,[_("noentry",.6)])}}if(Z===0&&N.dest&&N.len>30){let lt=N.dest.split("|"),I=lt[lt.length-1].split(";").map(rt=>rt.trim()).filter(Boolean).slice(0,4);lt.length>1&&(I[0]=lt[0].split(";")[0]+"  "+I[0]);let A=N.cls===0?"green":N.cls<=3||N.limit>50?"blue":"white",G=E(I,A);if(G){let[rt,it]=n.pointAt(N,Math.min(18,N.len*.4)),tt=rt+F*(ht+1.8),ft=it+vt*(ht+1.8),pt=s.height(tt,ft),_t=Math.atan2(-nt,-xt);for(let Wt of[1,-1])Ne(o,tt+F*1.3*Wt,pt+1.6+G.h/2,ft+vt*1.3*Wt,.1,3.2+G.h,.1,_t,g);In(l,tt-nt*.08,pt+3.2+G.h/2,ft-xt*.08,G.w,G.h,_t,G.uv),In(a,tt+nt*.08,pt+3.2+G.h/2,ft+xt*.08,G.w,G.h,_t+Math.PI,ur("back"))}}if(N.ref&&N.cls<=kt.TERTIARY&&!(N.flags&(Ut.LINK|Ut.ROUNDABOUT))&&N.len>160){let lt=N.ref.split(";")[0].trim();if(Z===0&&n.degMain[W]>=3&&!L.has(lt+W)){L.add(lt+W);let[I,A]=n.pointAt(N,38);x(I+F*ht,A+vt*ht,nt,xt,[T(lt)],1.9)}if(Z===bt&&!N.oneway&&n.degMain[j]>=3&&!L.has(lt+j)){L.add(lt+j);let[I,A]=n.pointAt(N,N.len-38);x(I-F*ht,A-vt*ht,-nt,-xt,[T(lt)],1.9)}}if(N.cls<=kt.RESIDENTIAL&&N.cls>=kt.TRUNK&&!(N.flags&(Ut.LINK|Ut.BRIDGE|Ut.TUNNEL|Ut.ROUNDABOUT))){let lt=this.comuneOfNode(W),I=this.comuneOfNode(j);if(lt&&I&&lt!==I){let A=0,G=1;for(let tt=0;tt<10;tt++){let ft=(A+G)/2;this.comuneAt(Q+(st-Q)*ft,X+(ut-X)*ft)===lt?A=ft:G=ft}let rt=Q+(st-Q)*A,it=X+(ut-X)*A;this.townSign(o,l,a,rt+F*(ht+.4),it+vt*(ht+.4),nt,xt,S(I,!1),S(I,!0)),N.oneway||this.townSign(o,l,a,rt-F*(ht+.4),it-vt*(ht+.4),-nt,-xt,S(lt,!1),S(lt,!0))}}if(N.cls>=kt.PRIMARY&&N.cls<=kt.LIVING&&!N.abs&&!(N.flags&Ut.ROUNDABOUT)&&N.lit!==2){let lt=N.cum[Z];for(let I=Math.ceil(lt/30)*30-lt;I<ot;I+=30){let A=Q+nt*I,G=X+xt*I;if(N.lit!==1&&!s.isUrban(A,G))continue;let rt=Math.floor((lt+I)/30+.5)%2===0||N.oneway?1:-1,it=A+F*rt*(yt+1.1),tt=G+vt*rt*(yt+1.1),ft=n.nearest(it,tt,6);ft&&ft.d<n.ways[ft.wi].width/2+.4||m.push([it,s.height(it,tt),tt,Math.atan2(vt*rt,-F*rt)])}}}for(let V of n.roundaboutEntries(t)){let et=n.ways[V.wi],Z=n.nx[V.nd]-n.nx[V.from],N=n.nz[V.nd]-n.nz[V.from],W=Math.hypot(Z,N)||1;Z/=W,N/=W;let j=n.w1[V.nd]/2+2.5,Q=!1,X=0,st=V.dir>0?et.nodes.length-1:0;for(;X<30&&st-V.dir>=0&&st-V.dir<et.nodes.length;){let nt=et.nodes[st],xt=et.nodes[st-V.dir];if(X+=Math.hypot(n.nx[xt]-n.nx[nt],n.nz[xt]-n.nz[nt]),st-=V.dir,n.ntag[xt]===Kt.GIVE_WAY||n.ntag[xt]===Kt.STOP){Q=!0;break}}let ut=n.nx[V.nd]-Z*j-N*(et.width/2+.9),ot=n.nz[V.nd]-N*j+Z*(et.width/2+.9);x(ut,ot,Z,N,[Q?null:_("giveway",.8),_("roundabout",.62)])}let O=new Set;for(let V of r){let et=Math.floor(V/16384),Z=V%16384,N=n.ways[et];if(N.flags&Ut.ROUNDABOUT||!N.drivable||N.cls>kt.TERTIARY)continue;let W=N.nodes.length-2;for(let[j,Q]of[[0,1],[N.nodes.length-1,-1]]){if((Q>0?Z!==0:Z!==W)||Q<0&&N.oneway)continue;let X=N.nodes[j];if(!n.onRb[X]||O.has(et*2+(Q>0?0:1)))continue;O.add(et*2+(Q>0?0:1));let st=this.traceDestination(et,j,Q,X);if(!st)continue;let ut=N.nodes[j+Q],ot=n.nx[ut]-n.nx[X],nt=n.nz[ut]-n.nz[X],xt=Math.hypot(ot,nt)||1;ot/=xt,nt/=xt;let F=N.limit>50||N.cls<=kt.SECONDARY,vt=w(st.name,F?Math.max(1,Math.round(st.dist/1e3)):0,F),yt=n.w1[X]/2+3.5;x(n.nx[X]+ot*yt-nt*(N.width/2+1.2),n.nz[X]+nt*yt+ot*(N.width/2+1.2),ot,nt,[vt],2.3)}}for(let[V,et,Z,N]of e&&e.pt||[]){let W=et/10,j=Z/10,Q=e.s[N]||"",X=n.nearest(W,j,30,ht=>ht.drivable&&ht.cls<=kt.SERVICE),st=0,ut=1;if(X){let ht=Math.hypot(X.dx,X.dz)||1;st=X.dx/ht,ut=X.dz/ht}let ot=X&&Math.sign((W-X.px)*-ut+(j-X.pz)*st)||1,nt=X?n.ways[X.wi].width/2:0,xt=X?Math.max(X.d,nt+1):0,F=X?X.px-ut*ot*xt:W,vt=X?X.pz+st*ot*xt:j,yt=st*ot,bt=ut*ot;if(V===1){x(F,vt,yt,bt,[_("bus",.5),Q?M(Q):null],2);let ht=s.height(F,vt),Nt=Math.atan2(-yt,-bt),lt=-ut*ot,I=st*ot,A=F+yt*2.2+lt*.9,G=vt+bt*2.2+I*.9;Ne(o,A,ht+2.45,G,1.5,.08,3,Nt,[.25,.3,.34]),Ne(o,A+lt*.7,ht+1.25,G+I*.7,.05,2.4,3,Nt,[.55,.68,.74]);for(let rt of[-1.45,1.45])Ne(o,A+yt*rt-lt*.6,ht+1.2,G+bt*rt-I*.6,.07,2.4,.07,Nt,g)}else if(V===2){let ht=X?Math.atan2(st*ot,ut*ot):0;m.push([W,s.height(W,j),j,ht,1])}else if(V===3&&X){let ht=[...this.places.values()].flat().find(G=>G.n===Q),Nt=yt,lt=bt;if(ht){let G=Math.sign((ht.x-F)*st+(ht.z-vt)*ut)||1;Nt=st*G,lt=ut*G}let I=X.px-lt*(nt+1.3),A=X.pz+Nt*(nt+1.3);this.townSign(o,l,a,I,A,Nt,lt,S(Q,!1),S(Q,!0))}else if(V===4&&X){x(F,vt,yt,bt,[_("camera",.9)],2),p.push([X.px+st*ot*14,X.pz+ut*ot*14]);let ht=s.height(F,vt),Nt=Math.atan2(-yt,-bt);Ne(o,F+yt*14,ht+1.4,vt+bt*14,.5,2.8,.5,Nt,[.95,.5,.1]),Ne(o,F+yt*14-yt*.26,ht+2.3,vt+bt*14-bt*.26,.3,.3,.04,Nt,[.05,.05,.05])}else if(V===5){let ht=b(Q);if(ht){let Nt=s.height(F,vt),lt=Math.atan2(-yt,-bt);Ne(o,F,Nt+2.6,vt,1.6,5.2,.3,lt,[.9,.9,.9]),In(l,F-yt*.16,Nt+4.3,vt-bt*.16,ht.w,ht.h,lt,ht.uv),In(l,F+yt*.16,Nt+4.3,vt+bt*.16,ht.w,ht.h,lt+Math.PI,ht.uv)}}}let q=new ie,K=[];if(o.empty||q.add(o.mesh(this.poleMat,!0)),a.empty||q.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let V=d.material();K.push(V),q.add(l.mesh(V))}c.empty||q.add(c.mesh(this.markMat)),u.empty||q.add(u.mesh(this.decalMat));for(let V=0;V<2;V++)for(let et of["R","Y","G"])h[V][et].empty||q.add(h[V][et].mesh(this.lights[V][et]));if(f.empty||q.add(f.mesh(this.greenMat)),m.length){let V=m.filter(ot=>ot[4]),et=m.filter(ot=>ot[4]||!V.some(nt=>Math.hypot(nt[0]-ot[0],nt[2]-ot[2])<22)),Z=new Se(this.lampPoleGeo,this.lampPoleMat,et.length),N=new Se(this.lampHeadGeo,this.lampMat,et.length),W=new Se(this.poolGeo,this.poolMat,et.length),j=new Zt,Q=new Te,X=new B(0,1,0),st=new B(1,1,1),ut=new B;et.forEach(([ot,nt,xt,F],vt)=>{Q.setFromAxisAngle(X,F),ut.set(ot,nt,xt),j.compose(ut,Q,st),Z.setMatrixAt(vt,j),N.setMatrixAt(vt,j),W.setMatrixAt(vt,j)}),Z.computeBoundingSphere(),N.computeBoundingSphere(),W.computeBoundingSphere(),W.renderOrder=2,q.add(Z,N,W)}return q.userData.dispose=()=>{for(let V of K)V.map.dispose(),V.dispose()},{group:q,signals:y,lamps:m,cameras:p}}townSign(t,e,n,s,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(s,r),f=Math.atan2(-o,-a),d=-a,m=o,y=[.42,.43,.44];Ne(t,s-d*.75,h+1.35,r-m*.75,.08,2.7,.08,f,y),Ne(t,s+d*.75,h+1.35,r+m*.75,.08,2.7,.08,f,y),In(e,s-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?In(e,s+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):In(n,s+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,ur("back"))}};var jo=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,s,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(s/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,s=>{let r=this.grid.get(s);r||this.grid.set(s,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e){let n=1e9,s=1e9,r=-1e9,o=-1e9;for(let a=0;a<e.length;a+=2)n=Math.min(n,e[a]),r=Math.max(r,e[a]),s=Math.min(s,e[a+1]),o=Math.max(o,e[a+1]);r-n<1.5&&o-s<1.5||this._add(t,{ring:e,minx:n,minz:s,maxx:r,maxz:o})}addCircle(t,e,n,s){let r={x:e,z:n,r:s,tile:t,minx:e-s,minz:n-s,maxx:e+s,maxz:n+s};return this._add(t,r),r}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let s=this.grid.get(n);if(!s)return;let r=s.indexOf(t);r>=0&&s.splice(r,1),s.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let s of e)this._cells(s.minx,s.minz,s.maxx,s.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}resolveCircle(t,e,n){let s=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=Qy(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!s||c.depth>s.depth)&&(s=c)}}),s}};function Qy(i,t,e,n){let s=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=s-1;f<s;d=f++){let m=n[f*2],y=n[f*2+1],p=n[d*2],g=n[d*2+1];y>t!=g>t&&i<(p-m)*(t-y)/(g-y)+m&&(r=!r);let _=m-p,x=y-g,v=_*_+x*x||1e-9,S=((i-p)*_+(t-g)*x)/v;S=S<0?0:S>1?1:S;let w=p+_*S,E=g+x*S,T=Math.hypot(i-w,t-E);T<o&&(o=T,a=w,l=E)}if(!r&&o>=e)return null;let c=i-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var Mn={darkMetal:new Xt({color:3620675}),greyMetal:new Xt({color:4344399}),midMetal:new Xt({color:5002330}),wood:new Xt({color:8016432}),woodDark:new Xt({color:6044964}),stone:new Xt({color:9407104}),soil:new Xt({color:4142122}),hedge:new Xt({color:4025145}),binBody:new Xt({color:3951169}),binLid:new Xt({color:3227449}),red:new Xt({color:11545120}),white:new Xt({color:15790318}),signBlue:new Xt({color:2183567}),roof:new Xt({color:3159099}),glass:new ae({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:ce,depthWrite:!1})};function bn(i){let t=i.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new se;return o.setAttribute("position",new me(n,3)),o.setAttribute("normal",new me(s,3)),o.computeVertexNormals(),o}function bf(i,t,e,{shadow:n=!0}={}){let s=new Se(i,t,e);s.castShadow=n,s.count=e;let r=new Zt,o=new Te,a=new Ze,l=new B,c=new B(1,1,1);return{mesh:s,setAt:(h,f,d,m=0,y=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c),s.setMatrixAt(h,r),s.instanceMatrix.needsUpdate=!0},count:e}}function Qo(i,t,{shadow:e=!0}={}){let n=new ie,s=i.map(({geom:h,material:f})=>{let d=new Se(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new Zt,o=new Te,a=new Ze,l=new B,c=new B(1,1,1);return{mesh:n,setAt:(h,f,d,m=0,y=0)=>{a.set(0,m,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c);for(let p of s)p.setMatrixAt(h,r),p.instanceMatrix.needsUpdate=!0},count:t}}function wf(i){let t=new ne(.075,.1,.82,8);t.translate(0,.41,0);let e=new un(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new ne(.11,.11,.06,8);n.translate(0,.1,0);let s=bn([t,e,n]);return bf(s,Mn.darkMetal,i)}function Sf(i){let t=new ne(.05,.05,.55,6);t.translate(0,.28,0);let e=new ne(.11,.14,.08,8);e.translate(0,.04,0);let n=new ne(.19,.17,.5,9);n.translate(0,.82,0);let s=new Cn(.19,.02,5,9).rotateX(Math.PI/2);s.translate(0,1.07,0);let r=bn([t,e,n,s]),o=new ne(.215,.2,.06,9);o.translate(0,1.12,0);let a=new un(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=bn([o,a]);return Qo([{geom:r,material:Mn.binBody},{geom:l,material:Mn.binLid}],i)}function Ef(i){let s=[];for(let c=0;c<3;c++){let u=new Ht(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),s.push(u)}for(let c=0;c<3;c++){let u=new Ht(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),s.push(u)}let r=bn(s),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new Ht(.05,.45,.05);h.translate(u,.45/2,.12);let f=new Ht(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new Ht(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new Ht(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=bn(o);return Qo([{geom:r,material:Mn.wood},{geom:l,material:Mn.darkMetal}],i)}function Tf(i){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new Ht(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new Ht(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new Ht(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return bf(bn(t),Mn.darkMetal,i)}function Af(i){let t=new ne(.09,.13,.95,8);t.translate(0,.475,0);let e=new ne(.16,.2,.08,8);e.translate(0,.04,0);let n=new ne(.17,.13,.1,10);n.translate(0,.9,0);let s=new ne(.13,.11,.07,10);s.translate(0,.94,0);let r=bn([t,e,n]),o=new ne(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new un(.03,6,5);return a.translate(0,1.02,-.09),Qo([{geom:r,material:Mn.greyMetal},{geom:bn([s]),material:Mn.midMetal},{geom:bn([o,a]),material:Mn.darkMetal}],i)}function Rf(i){let t=new ne(.23,.25,.07,6);t.translate(0,.035,0);let e=new ne(.135,.165,.6,9);e.translate(0,.37,0);let n=new ne(.115,.175,.1,9);n.translate(0,.72,0);let s=new un(.125,9,5,0,Math.PI*2,0,Math.PI/2);s.translate(0,.77,0);let r=new ne(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=bn([t,e,n,s,r]),a=[];for(let u of[-1,1]){let h=new ne(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new ne(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new ne(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),Qo([{geom:o,material:Mn.red},{geom:bn(a),material:Mn.darkMetal}],i)}function If(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new se,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Cf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let m=Cf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Cf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new me(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let y=u.getComponent(f,m);a.setComponent(f+h,m,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var t1={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},ta=class{constructor(t,e,n,s,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=s,this.settings=r,this.collision=new jo,this.tiles=new Map,this.queue=[],this.detail=pf(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new $o(n),this.vegetation=new Jo(n,s),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new Ko(s,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new ie,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let s=!1;for(let r of n.rings)df(t,e,r)&&(s=!s);if(s)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new ie;for(let s=t.zmin;s<t.zmax;s+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,s,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new Lo({color:4157327,specular:10070715,shininess:80,transparent:!0,opacity:.92,side:ce});this.waterMat=t;let e=new ie;for(let n of this.meta.waters)for(let s of n.o){if(s.length<4)continue;let r=s.map(m=>new It(m[0],m[1])),o=(n.i||[]).filter(m=>m.length>=4).map(m=>m.map(y=>new It(y[0],y[1]))),a;try{a=Ai.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(m=>this.terrain.height(m.x,m.y)).sort((m,y)=>m-y),u=c[Math.floor(c.length*.3)]+.35,h=new Float32Array(l.length*3);l.forEach((m,y)=>{h[y*3]=m.x,h[y*3+1]=u,h[y*3+2]=m.y});let f=[];for(let[m,y,p]of a)f.push(m,p,y);let d=new se;d.setAttribute("position",new me(h,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((m,y)=>f[y-y%3+[0,2,1][y%3]])),d.computeVertexNormals()),e.add(new Rt(d,t))}this.root.add(e)}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,s=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=s-o;c<=s+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let u=n.xmin+(c+.5)*1e3,h=n.zmin+(l+.5)*1e3,f=Math.hypot(u-t,h-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let m={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(m.key,m)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(s=>{s.geometry&&s.geometry.dispose(),s.isSprite&&s.material.map&&(s.material.map.dispose(),s.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((s,r)=>s.d-r.d);for(let s of n){if(performance.now()-e>t)return!1;if(s.state==="new"){s.state="loading",this.tileSet.has(s.key)?Ii("t_"+s.i+"_"+s.j,`data/tiles/t_${s.i}_${s.j}.js`).then(c=>{s.data=c,s.state="ready"}).catch(()=>{s.data=null,s.state="ready"}):(s.data=null,s.state="ready");continue}if(s.state!=="ready"||s.dead)continue;let r=this.meta.proj,o=r.xmin+s.i*1e3,a=r.zmin+s.j*1e3,l=(c,u)=>{s.parts[c]=u,u&&this.root.add(u)};if(!("terrain"in s.parts)){l("terrain",this.terrain.buildChunk(o,a,1e3,20,this.terrainMat));continue}if(!("roads"in s.parts)){l("roads",this.roads.buildTile(s.key));continue}if(!("signs"in s.parts)){let c=this.signage.build(s.key,s.data);for(let u of c.signals)this.signals.push({...u,tile:s.key});for(let u of c.cameras||[])this.cameras.push({x:u[0],z:u[1],tile:s.key});l("signs",c.group);continue}if(!("buildings"in s.parts)){if(s.data){let c=this.buildings.build(s.data,this.collision,s.key);l("buildings",c.group)}else l("buildings",null);for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===s.key&&this.collision.addCircle(s.key,c.x,c.z,c.r);continue}if(!("paths"in s.parts)){let c=new ie,u=this.roads.buildPaths(s.data),h=this.roads.buildBarriers(s.data,this.collision,s.key),f=this.buildPower(s),d=this.roads.buildStalls(s.data);for(let m of[u,h,f,d])m&&c.add(m);l("paths",c.children.length?c:null);continue}if(!("props"in s.parts)){l("props",this.buildProps(s)),this.traffic&&this.traffic.computeParkSpots(s.key,s.data);continue}if(!("labels"in s.parts)){l("labels",this.buildLabels(s));continue}if(s.vegWanted&&!("veg"in s.parts)){l("veg",this.vegetation.build(s.data,s.i,s.j,this.collision,s.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=8,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,s=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=_=>_[0]>=s&&_[0]<s+1e3&&_[1]>=r&&_[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let _ of e)for(let x=0;x<_.length;x++){if(!o(_[x]))continue;let v=_[x],S=_[x-1]||_[x+1],w=_[x+1]||_[x-1],E=w[0]-S[0],T=w[1]-S[1],M=Math.hypot(E,T)||1;if(E/=M,T/=M,c.push([v[0],u.height(v[0],v[1]),v[1],Math.atan2(E,T)]),x<_.length-1){let b=_[x+1],C=u.height(v[0],v[1])+a,U=u.height(b[0],b[1])+a,z=Math.hypot(b[0]-v[0],b[1]-v[1]),D=-(b[1]-v[1])/(z||1),k=(b[0]-v[0])/(z||1);for(let[L,H]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let O=0;O<8;O++)for(let q of[O/8,(O+1)/8]){let K=Math.min(9,z*.03)*4*q*(1-q);l.push(v[0]+(b[0]-v[0])*q+D*L,C+(U-C)*q+H-K,v[1]+(b[1]-v[1])*q+k*L)}}}if(!c.length)return null;let h=new ie;if(l.length){let _=new se;_.setAttribute("position",new $t(l,3)),this.wireMat=this.wireMat||new tr({color:2763822}),h.add(new Ao(_,this.wireMat))}if(!this.towerGeo){let _=[],x=new ne(.12,.2,a,4);for(let[v,S]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let w=x.clone();w.rotateZ(-v*.08),w.rotateX(S*.08),w.translate(v*1.6,a/2,S*1.6),_.push(w)}for(let[v,S]of[[a-4,11],[a,8]]){let w=new Ht(S,.25,.25);w.translate(0,v,0),_.push(w)}for(let v=5;v<a;v+=6){let S=new Ht(3.4-v*.06,.12,3.4-v*.06);S.translate(0,v,0),_.push(S)}this.towerGeo=If(_.map(v=>v.toNonIndexed())),this.towerMat=new Xt({color:9080982})}let f=new Se(this.towerGeo,this.towerMat,c.length),d=new Zt,m=new Te,y=new B(0,1,0),p=new B(1,1,1),g=new B;return c.forEach(([_,x,v,S],w)=>{m.setFromAxisAngle(y,S),g.set(_,x-.5,v),d.compose(g,m,p),f.setMatrixAt(w,d),this.collision.addCircle(t.key,_,v,2.2)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:Ef,11:Sf,12:wf,13:Rf,14:Tf,15:Af},s={};for(let o of e)n[o[0]]&&(s[o[0]]=s[o[0]]||[]).push(o);let r=new ie;for(let o of Object.keys(s)){let a=s[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,m=this.roads.nearest(h,f,25,g=>g.drivable);m&&(+o==10||+o==14)&&(d=Math.atan2(m.px-h,m.pz-f));let y=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(y)||(d=Math.PI-y*Math.PI/180);let p=m&&m.d<this.roads.ways[m.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[m.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(p?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,s=e.zmin+t.j*1e3,r=new ie;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<s||c>=s+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=t1[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let m=new Le(h);m.colorSpace=Me;let y=new So(new js({map:m,depthTest:!0,fog:!1,transparent:!0})),p=this.terrain.height(l,c)+(a===1?32:a===12?6:18);y.position.set(l,p,c),y.scale.set(d/48*3.2,3.2,1),y.userData.lm=!0,r.add(y)}return r}updateLabels(t){for(let e of this.tiles.values()){let n=e.parts.labels;if(n)for(let s of n.children){let r=s.position.distanceTo(t.position);if(s.visible=this.labelsOn&&r<650&&r>15,s.visible){let o=Math.max(1,r/120);s.scale.set(s.scale.x/s.scale.y*3.2*o,3.2*o,1)}}}}};var ea=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new un(4500,32,16);this.uniforms={top:{value:new At},horizon:{value:new At},sunDir:{value:new B},sunCol:{value:new At},cloudCol:{value:new At},time:{value:0},cover:{value:.5}};let s=new Ae({uniforms:this.uniforms,side:Ge,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
        }`});this.dome=new Rt(n,s),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new se;o.setAttribute("position",new $t(r,3)),this.starMat=new er({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Ro(o,this.starMat),this.stars.frustumCulled=!1,t.add(this.stars),this.sun=new Fo(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new Uo(12375295,5922880,.9),t.add(this.hemi),t.fog=new Mo(13622246,400,2600),this.sunDir=new B,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),s=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(s),o=Math.asin(r),a=Math.atan2(Math.sin(s),Math.cos(s)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=Qu.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new At(659490).lerp(new At(4030417),l),h=new At(1317418).lerp(new At(13229034),l).lerp(new At(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.25+.85*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.25*l+.05,.27*l+.05,.2*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new B(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var ui={x:0,y:1,z:0},e1=()=>0;function Pf(i,t){return e1(i,t)}function Lf(){return ui}var Zc={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},Df=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function Li(i){return Df[i%Df.length]}function Uf(i,t,e){let n=i.length,s=[],r=[];for(let l=0;l<n;l++){let[c,u]=i[l],h=t[l],f=e[l];s.push(-h,u,c,h,u,c),s.push(-h,u,c,-h,f,c),s.push(h,u,c,h,f,c),s.push(-h,f,c,h,f,c),s.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:s,idx:r}}function pr({pos:i,idx:t}){let e=new se;return e.setAttribute("position",new $t(i,3)),e.setIndex(t),e.computeVertexNormals(),e}var Nf=1.12,mr=i=>i.wheelR*2+.02,dr=.34;function n1(i){return i>=1?0:i<=dr?1:.5*(1+Math.cos(Math.PI*(i-dr)/(1-dr)))}function zf(i,t){let e=mr(i),n=i.wheelR*Nf;return t.map(([s])=>{let r=0;for(let o of i.wheelZ)r=Math.max(r,n1(Math.abs(s-o)/n));return i.sill+(e-i.sill)*r})}function Ff(i){let t=i.profile.map(r=>[r[0],r[1]]),e=i.widths.slice(),n=i.wheelR*Nf,s=[];for(let r of i.wheelZ)for(let o of[-1,-dr,dr,1])s.push(r+o*n);s.sort((r,o)=>o-r);for(let r of s){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function Of(i){let t=gr(i),e=i.tumble||0,n=[];for(let s of i.pillars||[]){let[r,o]=i.cab[s],a=i.cabw[s],l=o-t[s]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(tn(.04,l,i.bus?.16:.09,(a+e*.5+.004)*c,t[s]+l/2,r))}return n}function Bf(i){let t=$c(i),e=gr(i),n=[],s=e[0]+(i.bus?.22:.02),r=i.cab[0][0]-(i.bus?.3:.22);for(let o of[1,-1])n.push(tn(.16,.12,.07,(t.halfW+.08)*o,s,r));return n}function i1(i){let{profile:t,widths:e}=Ff(i);return pr(Uf(t,e,zf(i,t)))}var gr=i=>i.cabBase||i.cab.map(()=>i.beltY);function kf(i,t=!1){let e=i.cab,n=i.cabw,s=gr(i),r=i.tumble||0,[o,a]=i.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let m=0;m<e.length;m++){let[y,p]=e[m],g=n[m],_=g+r,x=s[m];u.push(-g,p,y,g,p,y),u.push(-_,x,y,-g,p,y),u.push(_,x,y,g,p,y),u.push(-_,x,y,_,x,y,-g,p,y,g,p,y)}let f=(m,y)=>m*10+y;for(let m=0;m<e.length-1;m++)t&&l&&m>=o&&m<c-1||h.push(f(m,0),f(m,1),f(m+1,0),f(m,1),f(m+1,1),f(m+1,0)),h.push(f(m,3),f(m+1,3),f(m,2),f(m+1,3),f(m+1,2),f(m,2)),h.push(f(m,5),f(m,4),f(m+1,5),f(m+1,5),f(m,4),f(m+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),pr({pos:u,idx:h})}function Hf(i){let[t,e]=i.roofSlice;if(t===0&&e===0)return null;let n=i.cab.slice(t,i.cab.length+e),s=i.cabw.slice(t,i.cabw.length+e);if(n.length<2)return null;let r=i.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=s[c]*(1-.04*f)+.03,m=h+.006;o.push(-d,m,u,0,m+r,u,d,m,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var na=new At;function Gf(){return{pos:[],idx:[],col:[]}}function $e(i,t,e){let n=t.attributes.position,s=i.pos.length/3;na.set(e);for(let o=0;o<n.count;o++)i.pos.push(n.getX(o),n.getY(o),n.getZ(o)),i.col.push(na.r,na.g,na.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)i.idx.push(s+r.getX(o));else for(let o=0;o<n.count;o++)i.idx.push(s+o);t.dispose()}function Vf(i){let t=new se;return t.setAttribute("position",new $t(i.pos,3)),t.setAttribute("color",new $t(i.col,3)),t.setIndex(i.idx),t.computeVertexNormals(),t}var tn=(i,t,e,n,s,r)=>new Ht(i,t,e).translate(n,s,r),Je={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},Di={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function $c(i){let t=i.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),s=Math.max(...i.widths),r=i.widths[0],o=i.widths[i.widths.length-1],a=i.profile[0][1],l=i.profile[i.profile.length-1][1],c=a-i.sill,u=l-i.sill;return{noseZ:e,tailZ:n,halfW:s,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:i.sill+c*(i.bus?.42:.74),headH:c*.26,grilleY:i.sill+c*(i.bus?.14:.44),grilleH:c*.24,lampY:i.sill+u*(i.bus?.36:.66),lampH:u*.3,bumperY:i.sill+c*.12,bumperH:c*.3}}function s1(i){let{profile:t,widths:e}=Ff(i),n=Uf(t,e,zf(i,t)),s=Hf(i);if(s){let r=n.pos.length/3;n.pos.push(...s.pos);for(let o of s.idx)n.idx.push(r+o)}for(let r of[...Of(i),...Bf(i)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return pr(n)}function r1(i){let t=Gf(),e=$c(i),n=kf(i,!0);$e(t,n,Je.glass);let s=i.wheelX-i.wheelW/2-.02,r=i.sill*.7;if($e(t,tn(s*2,mr(i)-r,(e.noseZ-e.tailZ)*.84,0,(mr(i)+r)/2,(e.noseZ+e.tailZ)/2),Je.under),$e(t,tn(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),Je.bumper),$e(t,tn(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),Je.bumper),i.bus){for(let o of[4.3,.6,-1.4])$e(t,tn(.04,1.14,1.05,-(e.halfW+.005),i.sill+.6,o),Je.black);$e(t,tn(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),Je.black);for(let o of[1,-1])$e(t,tn(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),Je.lamp),$e(t,tn(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),Je.tail)}else{$e(t,tn(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),Je.black);let o=e.noseW*.56;for(let a of[1,-1])$e(t,tn(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),Je.lamp),$e(t,tn(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),Je.amber),$e(t,tn(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),Je.tail);$e(t,tn(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),Je.black)}return Vf(t)}function o1(i){let t=Gf(),e=i.wheelR,n=i.wheelW;$e(t,new ne(e,e,n,14).rotateZ(Math.PI/2),Je.tyre);for(let s of[1,-1])$e(t,new nr(e*.6,12).rotateY(s*Math.PI/2).translate(s*(n/2+.004),0,0),Je.rim);return Vf(t)}var ia=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function Jc(i){let t=new li({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:ce}),e=new ae({vertexColors:!0,roughness:.35,metalness:.2,side:ce}),n=new ae({vertexColors:!0,roughness:.75,metalness:.15}),s=new ie,r=Object.keys(Di),o={};for(let T of r)o[T]=[];for(let T=0;T<i;T++)o[Li(T)].push(T);let a={},l=new Array(i);for(let T of r){let M=o[T].length;if(M===0)continue;let b=Di[T],C=new Se(s1(b),t,M),U=new Se(r1(b),e,M),z=new Se(o1(b),n,M*4);C.castShadow=!0,C.frustumCulled=!1,U.frustumCulled=!1,z.frustumCulled=!1,s.add(C,U,z),a[T]={body:C,trim:U,wheels:z,spec:b},o[T].forEach((D,k)=>{l[D]={type:T,local:k}})}let c=new Float32Array(i).fill(NaN),u=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),d=new Float32Array(i),m=new Zt,y=new Zt,p=new Zt,g=new Zt,_=new At,x=new B(0,1,0),v=new B,S=new Te,w=new Zt;return{group:s,setAt:(T,M,b,C,U=0,z=Pf(M,b))=>{let D=l[T];if(!D)return;let{body:k,trim:L,wheels:H,spec:O}=a[D.type],q=Lf(M,b,z);v.set(q.x,q.y,q.z),S.setFromUnitVectors(x,v),w.makeRotationFromQuaternion(S),m.makeRotationY(C).premultiply(w).setPosition(M,z,b),k.setMatrixAt(D.local,m),L.setMatrixAt(D.local,m),_.set(ia[U%ia.length]),k.setColorAt(D.local,_);let K=Math.sin(C),V=Math.cos(C),et=0;if(c[T]===c[T]){let Q=M-c[T],X=b-u[T];Q*Q+X*X<36&&(et=Q*K+X*V);let st=C-h[T];for(;st>Math.PI;)st-=Math.PI*2;for(;st<-Math.PI;)st+=Math.PI*2;let ut=O.wheelZ[0]-O.wheelZ[1],ot=Math.abs(et)>.004?Math.max(-.6,Math.min(.6,st*ut/et)):0;d[T]+=(ot-d[T])*.3}c[T]=M,u[T]=b,h[T]=C,f[T]=(f[T]+et/O.wheelR)%(Math.PI*2);let[Z,N]=O.wheelZ,W=O.wheelX,j=O.wheelR;for(let Q=0;Q<4;Q++){let X=Q<2,st=Q%2?-W:W;y.makeRotationX(f[T]),X&&d[T]&&(p.makeRotationY(d[T]),y.premultiply(p)),y.setPosition(st,j,X?Z:N),g.multiplyMatrices(m,y),H.setMatrixAt(D.local*4+Q,g)}k.instanceMatrix.needsUpdate=!0,L.instanceMatrix.needsUpdate=!0,H.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0)},count:i,palette:ia.length}}var bs={tireGeo:new Cn(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new ne(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new Cn(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new ne(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new Ht(.05,.17,.045),brakeGeo:new ne(.15,.15,.03,20).rotateZ(Math.PI/2)},ws={tire:new ae({color:1316121,roughness:.85,metalness:.1}),rim:new ae({color:14672874,metalness:.5,roughness:.34}),lip:new ae({color:16054010,metalness:.6,roughness:.22}),hub:new ae({color:3816772,metalness:.45,roughness:.4}),brake:new ae({color:5527647,metalness:.3,roughness:.6})};function a1(){let i=new ie,t=new Rt(bs.tireGeo,ws.tire),e=new Rt(bs.brakeGeo,ws.brake);e.position.x=.04;let n=new Rt(bs.rimLipGeo,ws.lip);n.position.x=.095;let s=new Rt(bs.rimBarrelGeo,ws.rim),r=new Rt(bs.hubGeo,ws.hub);r.position.x=.085,i.add(t,e,s,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new Rt(bs.spokeGeo,ws.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),i.add(c)}return i}function Wf(i=12726047,{police:t=!1,body:e="car"}={}){let n=Di[e]||Di.car,s=new ie,r=t?15922423:i,o=$c(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,m]=n.wheelZ,y=n.wheelX,p=n.wheelR,g=gr(n),_=n.tumble||0,x=new li({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:ce}),v=new ae({color:1118742,roughness:.6,metalness:.3}),S=new ae({color:15396338,metalness:.55,roughness:.22});s.add(new Rt(i1(n),x));let w=new ae({color:723982,roughness:1}),E=y-n.wheelW/2-.02;s.add(new Rt(new Ht(E*2,mr(n)-.1,(a-l)*.8).translate(0,(mr(n)+.1)/2,(a+l)/2),w));let T=new ae({color:1710879,roughness:.65,metalness:.2}),M=Math.abs(d-m)-n.wheelR*2.2;if(M>.3)for(let X of[1,-1]){let st=new Rt(new Ht(.06,.13,M),T);st.position.set((c-.05)*X,n.sill+.04,(d+m)/2),s.add(st)}let b=new Cn(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[X,st]of[[y,d],[-y,d],[y,m],[-y,m]]){let ut=new Rt(b,x);ut.position.set(X+.02*Math.sign(X),p,st),s.add(ut)}let C=new ae({color:3948616,roughness:.85,metalness:.05});{let X=n.cab,st=n.cabw,ut=[],ot=[];for(let F=0;F<X.length;F++){let[vt,yt]=X[F],bt=st[F]*.9,ht=(st[F]+_)*.9;ut.push(-ht,g[F]-.02,vt,ht,g[F]-.02,vt,-bt,yt-.06,vt,bt,yt-.06,vt)}let nt=(F,vt)=>F*4+vt;for(let F=0;F<X.length-1;F++)ot.push(nt(F,2),nt(F+1,2),nt(F,3),nt(F,3),nt(F+1,2),nt(F+1,3)),ot.push(nt(F,0),nt(F,2),nt(F+1,0),nt(F+1,0),nt(F,2),nt(F+1,2)),ot.push(nt(F,1),nt(F+1,1),nt(F,3),nt(F+1,1),nt(F+1,3),nt(F,3));ot.push(nt(0,0),nt(0,1),nt(0,2),nt(0,1),nt(0,3),nt(0,2));let xt=X.length-1;ot.push(nt(xt,0),nt(xt,2),nt(xt,1),nt(xt,1),nt(xt,2),nt(xt,3)),s.add(new Rt(pr({pos:ut,idx:ot}),C))}let U=new li({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:ce});s.add(new Rt(kf(n,!0),U));let z=new li({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:ce}),D=Hf(n);if(D){s.add(new Rt(pr(D),z));let[X]=n.roofSlice,[st,ut]=n.cab[X],ot=n.cabw[X],nt=new Rt(new Ht(ot*2,.03,.06),z);nt.position.set(0,ut-.005,st+.02),s.add(nt)}let k=new ae({color:13225430,metalness:.7,roughness:.28}),L=n.cab[0][0],H=n.cab[n.cab.length-1][0],O=Math.max(...n.cabw)+_;for(let X of[1,-1]){let st=new Rt(new Ht(.025,.03,Math.abs(L-H)-.08),k);st.position.set((O+.01)*X,f+.02,(L+H)/2),s.add(st)}let q=new ae({color:r,metalness:.35,roughness:.42});for(let X of Of(n))s.add(new Rt(X,q));let K=new ae({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),V=new ae({color:1513500,roughness:.55,metalness:.25});if(n.bus){let X=new Rt(new Ht(u*1.3,.26,.05),new ae({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));X.position.set(0,2.54,a-.01),s.add(X);for(let ot of[1,-1]){let nt=new Rt(new Ht(.36,.22,.06),new ae({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));nt.position.set(.74*ot,o.headY,a-.02),s.add(nt);let xt=new Rt(new Ht(.4,.26,.02),S);xt.position.set(.74*ot,o.headY,a-.05),s.add(xt);let F=new Rt(new Ht(.32,.34,.06),K);F.position.set(.86*ot,o.lampY,l+.03),s.add(F)}let st=new Rt(new Ht(u*1.92,o.bumperH,.12),V);st.position.set(0,o.bumperY,a-.05);let ut=new Rt(new Ht(h*1.92,o.bumperH,.12),V);ut.position.set(0,o.bumperY,l+.05),s.add(st,ut);for(let ot of[4.3,.6,-1.4]){let nt=new Rt(new Ht(.04,1.14,1.05),v);nt.position.set(-(c+.005),n.sill+.6,ot),s.add(nt)}}else{let X=u*1.1,st=new Rt(new Ht(X,o.grilleH,.07),v);st.position.set(0,o.grilleY,a-.04),s.add(st);let ut=new ae({color:2829876,metalness:.6,roughness:.4});for(let G=0;G<3;G++){let rt=new Rt(new Ht(X-.03,.02,.02),ut);rt.position.set(0,o.grilleY-.05+G*.05,a-.015),s.add(rt)}let ot=new Rt(new Ht(u*1.4,.09,.05),v);ot.position.set(0,n.sill+.05,a-.05),s.add(ot);let nt=new ae({color:658189,roughness:.5,metalness:.2}),xt=new ae({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),F=new li({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),vt=new ae({color:13796895,roughness:.35,metalness:.1}),yt=u*.56;for(let G of[1,-1]){let rt=new Rt(new Ht(.34,o.headH,.1),nt);rt.position.set(yt*G,o.headY,a-.09),s.add(rt);let it=new Rt(new Ht(.28,.12,.02),xt);it.position.set(yt*G,o.headY,a-.045),s.add(it);let tt=new Rt(new Ht(.35,.16,.02),S);tt.position.set(yt*G,o.headY,a-.03),s.add(tt);let ft=new Rt(new Ht(.3,.13,.015),F);ft.position.set(yt*G,o.headY,a-.018),s.add(ft);let pt=new Rt(new Ht(.12,.11,.06),vt);pt.position.set((yt+.24)*G,o.headY,a-.05),s.add(pt)}let bt=new Rt(new nr(.05,16),S);bt.position.set(0,o.grilleY,a-.003),s.add(bt);let ht=o.lampY,Nt=l+.035;for(let G of[1,-1]){let rt=new Rt(new Ht(h*.68,.2,.04),new ae({color:1180422,roughness:.5,metalness:.2}));rt.position.set(h*.58*G,ht,Nt+.03),s.add(rt);let it=new Rt(new Ht(h*.6,.17,.07),K);it.position.set(h*.58*G,ht,Nt),s.add(it)}let lt=new Rt(new Ht(h*.56,.14,.04),new ae({color:1118742,roughness:.6,metalness:.3}));lt.position.set(0,ht-.03,Nt+.03),s.add(lt);let I=new Rt(new Ht(h*.44,.07,.02),S);I.position.set(0,ht-.03,Nt+.005),s.add(I);let A=(G,rt,it)=>{let tt=new Rt(new Ht(G,o.bumperH,.09),V);return tt.position.set(0,o.bumperY,rt+it*.04),tt};s.add(A(u*1.92,a,-1),A(h*1.92,l,1));for(let G of[1,-1]){let rt=new Rt(new ne(.045,.045,.06,12).rotateX(Math.PI/2),S);rt.position.set(c*.42*G,n.sill-.02,l+.05),s.add(rt)}}let et=new ae({color:r,metalness:.5,roughness:.35}),Z=new ae({color:547,metalness:.9,roughness:.1});for(let X of Bf(n))s.add(new Rt(X,et));{let X=gr(n)[0]+(n.bus?.22:.02),st=n.cab[0][0]-(n.bus?.3:.22);for(let ut of[1,-1]){let ot=new Rt(new Ht(.02,.09,.05),Z);ot.position.set((c+.16)*ut,X,st),s.add(ot)}}let N=[["wheelFL",y,d],["wheelFR",-y,d],["wheelRL",y,m],["wheelRR",-y,m]],W=p/.3;for(let[X,st,ut]of N){let ot=new ie;ot.name=X,ot.position.set(st,p,ut);let nt=a1();nt.scale.setScalar(W),ot.add(nt),s.add(ot)}if(t){let X=Math.max(...n.cab.map(nt=>nt[1])),st=new Rt(new Ht(.66,.05,.3),v);st.position.set(0,X+.05,.05),s.add(st);let ut=new Rt(new Ht(.3,.1,.3),new ae({color:2245836,emissive:2250239,emissiveIntensity:1.6}));ut.position.set(-.17,X+.11,.05);let ot=new Rt(new Ht(.3,.1,.3),new ae({color:13378082,emissive:16720418,emissiveIntensity:1.6}));ot.position.set(.17,X+.11,.05),s.add(ut,ot),s.userData.lightbar={blue:ut.material,red:ot.material}}let j=new No(16773583,0,80,.62,.5,1.2);j.position.set(0,o.headY+.2,a-.05),j.target.position.set(0,.2,a+10),s.add(j,j.target),s.userData.headlight=j;let Q=new zo(16722450,0,1.4,3.4);return Q.position.set(0,o.lampY,l+.05),s.add(Q),s.userData.tailGlow=Q,s.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),s}function Xf(i,t,{sz:e=1,sy:n=1,sx:s=1,wheelR:r}={}){let o=Di[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*s),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*s),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*s,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),Di[i]=a,a}function qf(i){return Di[i]}var Kc=ia;var xr=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];for(let i of xr)i.base!=="bus"&&Xf("bds-"+i.id,i.base,{sz:i.sz,sy:i.sy,sx:i.sx,wheelR:i.wheelR});var l1=i=>i.base==="bus"?"bus":"bds-"+i.id,Yf=new Xt({color:2237478});function Zf(i,t={}){let e=new ie,n=l1(i),s=qf(n),r=Wf(new At(t.color||i.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((m,y)=>{let p=r.getObjectByName(m);return p&&(p.rotation.order="YXZ"),{pivot:p,front:y<2}}).filter(m=>m.pivot),l=s.beltY,c=Math.max(...s.cab.map(m=>m[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new ie;let m=s.widths.reduce((b,C)=>Math.max(b,C),0)*2,y=m*.22,p=s.cab[0][0]-.28,g=new Rt(new Ht(m-.12,.28,.5),new Xt({color:2829616}));g.position.set(0,l-.06,p+.3),u.add(g),f=document.createElement("canvas"),f.width=256,f.height=96,d=new Le(f),d.colorSpace=Me;let _=new Rt(new hn(.42,.16),new Oe({map:d,toneMapped:!1}));_.position.set(y,l+.06,p+.1),_.rotation.set(-.35,Math.PI,0),u.add(_),h=new ie,h.add(new Rt(new Cn(.18,.018,8,28),new Xt({color:1381653})));for(let b of[0,2.1,4.2]){let C=new Rt(new Ht(.17,.025,.02),Yf);C.position.set(Math.cos(b+Math.PI/2)*.085,Math.sin(b+Math.PI/2)*.085,0),C.rotation.z=b+Math.PI/2,h.add(C)}let x=new Rt(new ne(.05,.05,.05,12),Yf);x.rotation.x=Math.PI/2,h.add(x);let v=new ie;v.position.set(y,l-.08,p-.12),v.rotation.x=-.45,v.add(h),u.add(v);let S=new Xt({color:3816511,side:ce}),w=s.cab[1]?s.cab[1][0]:p-.5,E=s.cab[s.cab.length-2][0];for(let b of[1,-1]){let C=new B(b*(m/2-.1),l,s.cab[0][0]-.05),U=new B(b*(m/2-.16),c-.03,w),z=new Rt(new Ht(.07,C.distanceTo(U),.09),S);z.position.copy(C).add(U).multiplyScalar(.5),z.lookAt(U),z.rotateX(Math.PI/2),u.add(z)}let T=new Rt(new hn(m-.1,Math.max(.5,w-E)),new Xt({color:10131086,side:ce}));T.rotation.x=Math.PI/2,T.position.set(0,c-.05,(w+E)/2),u.add(T);let M=new Rt(new hn(m-.2,1.2),new Xt({color:t.color||i.color}));M.rotation.x=-Math.PI/2+.08,M.position.set(0,l-.12,p+1.1),u.add(M),u.visible=!1,e.add(u),e.userData.eye=new B(y,l+.34,p-.75)}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function $f(i,t,e,n,s,r,o){let a=i.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/s);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var sa=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let s=this.world.roads.surfaceAt(t,e,1e9);this.y=s.h,this.surface=s}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),s=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return s=Math.min(s,e.kw*1e3/Math.max(r,1)),s}update(t,e){let s=t/4;for(let r=0;r<4;r++)this.step(s,e)}step(t,e){let n=this.spec,s=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let mt=r;r=o,o=mt}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),m=Math.cos(this.h),y=-Math.sin(this.h),p=s.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let g=!!p.road,_=g?s.roads.ways[p.road.wi]:null,x=!1;if(!g){let mt=s.terrain.landClass(this.x,this.z);x=mt==="parking"||mt==="parking_space"||mt==="pedestrian"}let v=n.grip*(g?_.flags&64?.78:1:x?.95:.68),S=g?_.flags&64?.03:.013:x?.016:.06;n.drive==="A"&&!g&&(v*=1.12,S*=.7),this.mu=v;let w=s.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,E=s.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,T=Math.atan2(w-E,this.L),M=n.W*.8,b=s.roads.surfaceAt(this.x+m*M/2,this.z+y*M/2,this.y+.5).h,C=s.roads.surfaceAt(this.x-m*M/2,this.z-y*M/2,this.y+.5).h,U=Math.atan2(b-C,M),z=this.m*9.81*Math.cos(T),D=z*this.b/this.L-this.m*this.ax*this.hcg/this.L,k=z*this.a/this.L+this.m*this.ax*this.hcg/this.L;D=Math.max(D,z*.15),k=Math.max(k,z*.15),this.airborne&&(D=k=0);let L=this.gear>0?n.gears[this.gear-1]:3.6,H=Math.abs(this.u)/n.wheelR*30/Math.PI,O=H*L*n.final,q=900+r*2600;if((this.gear===1||this.gear===-1)&&O<q&&(O=O*.4+q*.6),O=Math.max(800,O),this.rpm+=(O-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let mt=n.rpmMax*(.55+.37*r);if(this.rpm>mt&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let Tt=H*n.gears[this.gear-2]*n.final,zt=n.rpmMax*(.28+.3*r);this.rpm<zt&&Tt<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let K=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(K=this.torque(this.rpm)*L*n.final*.88/n.wheelR*r),this.gear<0&&(K=this.u<-7?0:-K*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(K-=Math.sign(this.u)*this.torque(this.rpm)*.12*L*n.final/n.wheelR*(this.rpm/n.rpmMax));let V=n.drive==="F"?D:n.drive==="R"?k:D+k,et=v*V;this.wheelSpin=Math.abs(K)>et?Math.min(1,(Math.abs(K)-et)/et):0,K=Math.max(-et,Math.min(et,K));let Z=0,N=n.brake*o;Math.abs(this.u)>.05&&(Z=-Math.sign(this.u)*Math.min(N,v*(D+k)));let W=0;this.handbrake>0&&Math.abs(this.u)>.05&&(W=-Math.sign(this.u)*v*k*.8*this.handbrake);let j=Math.max(Math.abs(this.u),.5),Q=this.u>=0?1:-1,X=Math.atan2(this.v+this.a*this.w,j)-this.steer*Q,st=Math.atan2(this.v-this.b*this.w,j),ut=(mt,Tt,zt)=>{let St=-(12*Tt)*mt,qt=zt*Tt;return Math.abs(St)>qt&&(St=Math.sign(St)*qt*Math.max(.75,1-.25*(Math.abs(St)/qt-1))),St},ot=v*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(ot*=1-.35*this.wheelSpin);let nt=ut(X,D,v),xt=ut(st,k,ot);this.slip=Math.max(Math.abs(st),Math.abs(X)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let F=-.5*1.2*n.cda*this.u*Math.abs(this.u),vt=Math.abs(this.u)>.05?-Math.sign(this.u)*S*(D+k):0,yt=-this.m*9.81*Math.sin(T),bt=this.m*9.81*Math.sin(U)*.5,ht=Math.cos(this.steer),Nt=Math.sin(this.steer),lt=K+Z+W+F+vt+yt-nt*Nt,I=xt+nt*ht+bt;this.airborne&&(lt=F+yt*0,I=0);let A=lt/this.m+this.v*this.w,G=I/this.m-this.u*this.w,rt=this.airborne?0:(this.a*nt*ht-this.b*xt)/this.I,it=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let mt=1.1*v*9.81/Math.abs(this.u);Math.abs(this.w)>mt&&(this.w+=(Math.sign(this.w)*mt-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=A*t,this.v+=G*t,this.w+=rt*t,Math.sign(it)!==Math.sign(this.u)&&Math.abs(K)<1&&it!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(yt)<N+S*z+1500&&(this.u=0);let tt=Math.min(1,Math.abs(this.u)/4),ft=this.u*Math.tan(this.steer)/this.L;this.w=this.w*tt+ft*(1-tt),this.v*=1-(1-tt)*Math.min(1,t*8),this.ax=this.ax+(lt/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(I/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let pt=f*this.u+m*this.v,_t=d*this.u+y*this.v;this.x+=pt*t,this.z+=_t*t,this.collide();let Wt=s.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=Wt&&(this.y=Wt,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-Wt>.35&&this.y-Wt<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(Wt-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=Wt),this.pitch+=(T-this.pitch)*Math.min(1,t*10),this.roll+=(U-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),s=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+s*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),m=n*this.u+f*this.v,y=s*this.u+d*this.v,p=m*u.nx+y*u.nz;p<0&&(m-=1.25*p*u.nx,y-=1.25*p*u.nz,m*=.8,y*=.8,this.impact=Math.max(this.impact,Math.min(1,-p/12)),this.u=m*n+y*s,this.v=m*f+y*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var ra=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),s=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(s?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let u=c.axes,h=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,m=p=>{if(p===void 0)return 0;let g=d.invertPedals?(1-p)/2:(p+1)/2;return g<.03?0:Math.min(1,g)},y=u[d.steerAxis]||0;(Math.abs(y)>.005||m(u[d.throttleAxis])>0||m(u[d.brakeAxis])>0)&&(a.steer=-y,a.analogWheel=!0,a.throttle=Math.max(a.throttle,m(u[d.throttleAxis])),a.brake=Math.max(a.brake,m(u[d.brakeAxis])))}else if(c.mapping==="standard"){let d=u[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,h(7)),a.brake=Math.max(a.brake,h(6)),(h(0)>.5||h(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,m)=>{d.pressed&&!f[m]&&a.buttons.add(m)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var jc=72,fi=1e6,Jf=14,oa=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new ie,this.fleet=Jc(jc);let e=t.settings&&t.settings.parked||288;this.parkFleet=Jc(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=jc-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,fi,fi,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,fi,fi,0,0,-100);let l=Li(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),s.fillStyle=r,s.fillRect(0,0,32,64),this.beamMat=new Oe({map:new Le(n),transparent:!0,blending:ri,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new hn(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Se(o,this.beamMat,jc),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new Zt,this._q=new Te,this._up=new B(0,1,0),this._p=new B,this._s=new B(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,fi,fi,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let s=0;s<6;s++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,_=>_.drivable&&_.cls<=kt.LIVING&&!(_.flags&Ut.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(Li(this.free[h])==="bus"&&u.cls>kt.TERTIARY&&(h=this.free.findIndex(_=>Li(_)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],m=(f>0?c.t:1-c.t)*d;if(this.cars.some(_=>Math.hypot(_.x-c.px,_.z-c.pz)<25))continue;let y=this.free.splice(h,1)[0],p=Li(y),g={slot:y,type:p,box:Zc[p],colour:Math.floor(Math.random()*Jf),wi:c.wi,k:c.k,dir:f,s:m,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(p==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(g),this.cars.push(g),this.place(g,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[s,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[s],e.nz[r]-e.nz[s]);for(let f=e.adjStart[r];f<e.adjStart[r+1];f++){let d=e.adjWay[f],m=e.adjPos[f],y=e.ways[d];if(!y.drivable||y.cls>kt.LIVING||y.flags&Ut.PRIVATE||t.type==="bus"&&y.cls>kt.UNCLASSIFIED)continue;let p=[];m<y.nodes.length-1&&p.push({wi:d,k:m,dir:1,to:y.nodes[m+1]}),m>0&&!y.oneway&&p.push({wi:d,k:m-1,dir:-1,to:y.nodes[m-1]});for(let g of p){if(g.wi===t.wi&&g.k===t.k&&g.dir===-t.dir)continue;let x=Math.atan2(e.nx[g.to]-e.nx[r],e.nz[g.to]-e.nz[r])-c;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;let v=1+Math.max(0,6-y.cls)*.5;Math.abs(x)<.4&&(v*=2.5),Math.abs(x)>2.6&&(v*=.05),l.push({...g,turn:x,wgt:v})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&Ut.ROUNDABOUT&&!(n.flags&Ut.ROUNDABOUT)||n.flags&Ut.LINK&&!(h.flags&Ut.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,s=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,m=(u-l)/h,y=n.laneCenter(s,t.dir),p=a+d*t.s-m*y,g=l+m*t.s+d*y,_=t.dir>0?f:1-f,x=n.heightOn(t.wi,t.k,_,p,g),v=Math.min(1,(t.s+2)/h),S=t.dir>0?v:1-v,w=n.heightOn(t.wi,t.k,S,p+d*(v-f)*h,g+m*(v-f)*h),E=v>f?(w-x)/((v-f)*h):t.slope;t.slope+=(E-t.slope)*Math.min(1,(e||1)*5),t.x=p,t.z=g,t.y=x;let T=Math.atan2(d,m);e===0&&(t.h=T);let M=T-t.h;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;t.h+=M*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),s=Math.hypot(t.slope,1);ui.x=-e*t.slope/s,ui.y=1/s,ui.z=-n*t.slope/s,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let s=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=s.ways[u.wi],[f,d]=this.segEnds(u),y=Math.hypot(s.nx[d]-s.nx[f],s.nz[d]-s.nz[f])-u.s,p=Math.sin(u.h),g=Math.cos(u.h),_=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let D=Math.abs(u.next.turn)>1?5.5:9;_=Math.min(_,Math.sqrt(D*D+2*2.2*Math.max(0,y-3)))}let x=1e9,v=0,S=(D,k,L,H,O,q)=>{let K=D-u.x,V=k-u.z,et=K*p+V*g;if(et<=0||et>60)return;let Z=Math.abs(K*g-V*p),N=H*p+O*g;if(Z>(N>.3?2:1.4))return;let W=et-u.box.halfL-q-.4;W<x&&(x=W,v=L*Math.max(0,N))};for(let D of this.cars)D!==u&&S(D.x,D.z,D.speed,Math.sin(D.h),Math.cos(D.h),D.box.halfL);e.active!==!1&&S(r,o,c,a,l,2.2);for(let D of this.statics)S(D.x,D.z,0,Math.sin(D.h),Math.cos(D.h),D.box.halfL);for(let D of this.obstacles)S(D[0],D[1],0,0,0,.6);let w=s.ntag[d]===Kt.SIGNALS?d:u.next&&s.ntag[this.nodeAfter(u)]===Kt.SIGNALS&&y<35?-2:-1;if(w!==-1){let D=w===d?y:y+20,k=Math.abs(p)>Math.abs(g)?1:0,L=fr(k,n);if((L==="R"||L==="Y"&&D>14)&&D>1.5){let H=D-3.5-u.box.halfL+2.2;H<x&&(x=Math.max(.1,H),v=0)}}if(u.yield&&y<18&&y>.3){let D=s.nx[d],k=s.nz[d],L=!1,H=(O,q,K,V,et,Z)=>{if(L||K<1.5||Z===u.wi)return;let N=D-O,W=k-q,j=Math.hypot(N,W);j>10+K*3.2||j<.5||(N*V+W*et)/j<.6||(L=!0)};for(let O of this.cars)O!==u&&H(O.x,O.z,O.speed,Math.sin(O.h),Math.cos(O.h),O.wi);if(e.active!==!1&&H(r,o,c,a,l,e.wi),L){let O=y-2.2-u.box.halfL+2.2;O<x&&(x=Math.max(.1,O),v=0)}}u.bumped>0&&(u.bumped-=t,_=0);let E=u.type==="bus"?1.1:1.6,T=2.4,M=2.2,b=1.25,C=u.speed,U=E*(1-Math.pow(Math.max(0,C)/Math.max(.1,_),4));if(x<1e8){let D=M+C*b+C*(C-v)/(2*Math.sqrt(E*T));U-=E*Math.pow(Math.max(0,D)/Math.max(.3,x),2)}U=Math.max(-9,U),u.speed=Math.max(0,C+U*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let z=0;for(;z++<8;){let[D,k]=this.segEnds(u),L=Math.hypot(s.nx[k]-s.nx[D],s.nz[k]-s.nz[D]);if(u.s<L)break;u.s-=L;let H=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=H.wi,u.k=H.k,u.dir=H.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,s=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=s&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,s=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,m=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>m)continue;let y=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(y+=Math.PI);let p=a(r[l]+7,r[l+1]+13),g=p<.7||h<2.35?"car":p<.9?"wagon":f>=5?"van":"wagon",_=Zc[g],x=Math.sin(y),v=Math.cos(y),S=[s.addCircle(t,c+x*1.1,u+v*1.1,_.halfW-.08),s.addCircle(t,c-x*1.1,u-v*1.1,_.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:y,type:g,box:_,colour:Math.floor(a(r[l]+3,r[l+1]+5)*Jf),taken:!1,objs:S})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let s of this.parkSpots.values())for(let r of s){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}ui.x=0,ui.y=1,ui.z=0;for(let s of Object.keys(n)){let r=n[s].sort((a,l)=>a._d-l._d),o=this.parkPools[s];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],fi,fi,0,0,-100)}}}nearestParked(t,e,n){let s=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,s=a)}return s}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,s=null){let r=null,o=(a,l)=>{if(a===s)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let m=-d;m<=d;m++){let y=f*m/d,p=a.x+c*y,g=a.z+u*y,_=t-p,x=e-g,v=Math.hypot(_,x);v<n+h&&(!r||n+h-v>r.depth)&&(r={nx:v>1e-6?_/v:1,nz:v>1e-6?x/v:0,depth:n+h-v,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var Qc=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,s=this.v,r=n.length;for(n.push(t),s.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[s[o],s[r]]=[s[r],s[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],s=t.pop(),r=e.pop();if(t.length){t[0]=s,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},aa=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,s=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===kt.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&Ut.PRIVATE&&(h=6),l.cls===kt.SERVICE&&(h=l.flags&Ut.AISLE?5:1.8),l.cls===kt.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],m=l.nodes[f+1],p=(l.cum[f+1]-l.cum[f])/u*h;s.push(d,m,p,c,f),l.oneway||s.push(m,d,p,c,f)}});let r=s.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[s[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[s[l*5]]++;this.eTo[c]=s[l*5+1],this.eCost[c]=s[l*5+2],this.eWay[c]=s[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,s,r){let o=this.R,a=L=>L.drivable&&L.cls!==kt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(s,r,400,a);if(!l||!c)return null;let u=++this.run,h=new Qc,f=Math.sin(n),d=Math.cos(n),m=o.ways[l.wi],y=m.nodes[l.k],p=m.nodes[l.k+1],g=m.cum[l.k+1]-m.cum[l.k],_=Math.max(10,m.limit)/3.6,x=l.dx*f+l.dz*d,v=(L,H)=>{this.stamp[L]!==u&&(this.stamp[L]=u,this.dist[L]=1e18,this.closed[L]=0),H<this.dist[L]&&(this.dist[L]=H,this.prev[L]=-1,this.prevWay[L]=l.wi,h.push(H+this.h(L,s,r),L))},S=25;v(p,(1-l.t)*g/_+(x<0?S:0)),m.oneway||v(y,l.t*g/_+(x>0?S:0));let w=o.ways[c.wi],E=w.nodes[c.k],T=w.nodes[c.k+1],M=new Set([E,T]),b=-1,C=0;for(;h.size;){let L=h.pop();if(this.closed[L])continue;if(this.closed[L]=1,M.has(L)){b=L;break}if(++C>4e5)break;let H=this.dist[L];for(let O=this.eStart[L];O<this.eStart[L+1];O++){let q=this.eTo[O];this.stamp[q]!==u&&(this.stamp[q]=u,this.dist[q]=1e18,this.closed[q]=0);let K=H+this.eCost[O];K<this.dist[q]&&(this.dist[q]=K,this.prev[q]=L,this.prevWay[q]=this.eWay[O],h.push(K+this.h(q,s,r),q))}}if(b<0)return null;let U=[],z=[];for(let L=b;L>=0;L=this.prev[L])U.push(L),z.push(this.prevWay[L]);U.reverse(),z.reverse();let D=[[l.px,l.pz]];for(let L of U)D.push([o.nx[L],o.nz[L]]);D.push([c.px,c.pz]);let k={pts:D,nodes:U,ways:z,dest:[c.px,c.pz],destRaw:[s,r],time:this.dist[b]};k.cum=[0];for(let L=1;L<D.length;L++)k.cum.push(k.cum[L-1]+Math.hypot(D[L][0]-D[L-1][0],D[L][1]-D[L-1][1]));return k.length=k.cum[k.cum.length-1],k.steps=this.instructions(k),k}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:s,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<s.length-1;){let u=s[c],h=r[c],f=r[c+1],d=e.ways[h].flags&Ut.ROUNDABOUT,m=e.ways[f].flags&Ut.ROUNDABOUT,y=o[c],p=o[c+1],g=o[c+2];if(!d&&m){let C=0,U=c+1;for(;U<s.length-1&&e.ways[r[U+1]].flags&Ut.ROUNDABOUT;)this.hasExit(s[U],r[U])&&C++,U++;C++;let z=U+1<r.length?l(r[U+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:C,name:z,text:`Alla rotatoria prendi la ${C}\xAA uscita`+(z?` verso ${z}`:"")}),c=U+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let _=Math.atan2(p[0]-y[0],p[1]-y[1]),v=Math.atan2(g[0]-p[0],g[1]-p[1])-_;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let S=v*180/Math.PI,w=l(h),E=l(f),T=E!==w;if(Math.abs(S)<25&&!T){c++;continue}if(Math.abs(S)<25&&T&&!this.realChoice(u,h)){c++;continue}let M,b;Math.abs(S)<25?(M="straight",b="Prosegui dritto"):S>=25&&S<55?(M="slight-left",b="Tieni la sinistra"):S>=55&&S<150?(M="left",b="Svolta a sinistra"):S<=-25&&S>-55?(M="slight-right",b="Tieni la destra"):S<=-55&&S>-150?(M="right",b="Svolta a destra"):(M="uturn",b="Fai inversione a U"),E&&(b+=(M==="straight"?" su ":" in ")+E),n.push({i:c,d:a[c+1],type:M,name:E,text:b}),c++}return n.push({i:s.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let s=n.adjStart[t];s<n.adjStart[t+1];s++){let r=n.ways[n.adjWay[s]];if(!(r.flags&Ut.ROUNDABOUT)&&r.drivable&&r.cls<kt.SERVICE+1){let o=n.adjPos[s];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,s=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=kt.LIVING&&s++;return s>=2}};function Kf(i,t,e){let{pts:n,cum:s}=i,r=1e9,o=0,a=0,l=Math.max(0,(i._lastI||0)-30),c=Math.min(n.length-1,(i._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,m=n[u+1][1]-f,y=d*d+m*m||1e-9,p=((t-h)*d+(e-f)*m)/y;p=Math.max(0,Math.min(1,p));let g=Math.hypot(t-h-d*p,e-f-m*p);g<r&&(r=g,o=s[u]+Math.sqrt(y)*p,a=u)}return i._lastI=a,{off:r,s:o,i:a}}var c1=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],h1=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],u1={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},la=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,s)=>{n.cls<=kt.TERTIARY&&n.drivable&&this.major.push(s)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let s=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let u=0;u<o.length;u++){let h=(u+1)%o.length,f=o[u][0]*o[h][1]-o[h][0]*o[u][1];a+=f,l+=(o[u][0]+o[h][0])*f,c+=(o[u][1]+o[h][1])*f}Math.abs(a)>r&&(r=Math.abs(a),s=[l/(3*a),c/(3*a)])}return{...n,label:s}}),this.night=!1}drawMini(t,e,n){let s=this.mini,r=this.miniCtx,o=s.width,a=s.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,s,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>s+3e3||Math.abs(a[0][1]-n)>s+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,s,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,s,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=kt.SERVICE||c[d.cls].push(h*16384+f)});let u=o?h1:c1;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let m=[12,11,9,8,7,6,6,5,4,3,5][f],y=Math.max(a?1:1.6,m*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(y+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=y/r),!(h===0&&f>=kt.SERVICE)){t.beginPath();for(let p of d){let g=Math.floor((p+1)/16384),_=p-g*16384,x=l.ways[g];if(_<0)for(let v=0;v<x.nodes.length;v++){let S=x.nodes[v];v?t.lineTo(l.nx[S],l.nz[S]):t.moveTo(l.nx[S],l.nz[S])}else{let v=x.nodes[_],S=x.nodes[_+1];t.moveTo(l.nx[v],l.nz[v]),t.lineTo(l.nx[S],l.nz[S])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,s){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);s?t.moveTo(s.x,s.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let s=this.big,r=this.bigCtx,o=s.width,a=s.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((m,y)=>y?r.lineTo(m[0],m[1]):r.moveTo(m[0],m[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.R.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(u1[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,m]=this.toScreen(h.label[0],h.label[1]);d<-100||m<-50||d>o+100||m>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,m),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,m))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var ca=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let s=t.sampleRate*2,r=t.createBuffer(1,s,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<s;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(s=>{let r=e.createOscillator();return r.type="square",r.frequency.value=s,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+s*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+s*1500,r,.1)}};function ua(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var yr=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],ha=(i,t,e)=>i<t?t:i>e?e:i;function eh({facing:i,scale:t,x:e,z:n,travelX:s,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=ha((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),m=1.1+4.9*h,y=(.6+1.6*h)*(.4+u()*.6),p=2.2+5*h,g=-r,_=s,x={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:s*d+o*y,vz:r*d+a*y,vy:m,qx:0,qy:Math.sin(i/2),qz:0,qw:Math.cos(i/2),wx:g*p,wy:(u()-.5)*(1.5+5*h),wz:_*p,col:new Float64Array(9),pose:c?{...c}:ua(),vel:ua(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:i,lieSign:u()<.5?1:-1,done:!1,rand:u};fa(x);let v=5+13*h;for(let[S]of yr)x.vel[S]=(u()-.5)*v;return x}function fa(i){let{qx:t,qy:e,qz:n,qw:s}=i,r=i.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*s),r[2]=2*(t*n-e*s),r[3]=2*(t*e-n*s),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*s),r[6]=2*(t*n+e*s),r[7]=2*(e*n-t*s),r[8]=1-2*(t*t+e*e)}var th=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function nh(i,t){if(i.t+=t,i.phase==="rise"){p1(i,t);return}i.vy-=11.5*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;let{wx:e,wy:n,wz:s,qx:r,qy:o,qz:a,qw:l}=i,c=t*.5,u=r+c*(e*l+n*a-s*o),h=o+c*(n*l+s*r-e*a),f=a+c*(s*l+e*o-n*r),d=l-c*(e*r+n*o+s*a),m=1/(Math.hypot(u,h,f,d)||1);i.qx=u*m,i.qy=h*m,i.qz=f*m,i.qw=d*m,fa(i);let y=i.col,p=!1;for(let x=0;x<th.length;x++){let v=th[x][0]*i.scale,S=y[3]*v,w=y[4]*v,E=y[5]*v,T=th[x][1]*i.scale-(i.y+w);if(T<=0)continue;p=!0,i.y+=T*.55;let M=i.vx+(i.wy*E-i.wz*w),b=i.vy+(i.wz*S-i.wx*E),C=i.vz+(i.wx*w-i.wy*S);if(b>=0)continue;let U=(S*S+E*E)/.16,z=-(1+.17)*b/(1+U);i.vy+=z,i.wx+=-E*z/.16,i.wz+=S*z/.16;let D=Math.hypot(M,C);if(D>1e-4){let k=Math.min(.55*z,D),L=-M/D*k,H=-C/D*k;i.vx+=L,i.vz+=H,i.wy+=(E*L-S*H)/.16*.5}if(z>.9&&i.bumps++,z>.6){let k=Math.min(9,z*2.4);for(let[L]of yr)i.vel[L]+=(i.rand()-.5)*k}}if(p){i.grounded+=t;let x=Math.exp(-3.2*t);i.wx*=x,i.wy*=x,i.wz*=x,i.vx*=Math.exp(-1.9*t),i.vz*=Math.exp(-1.9*t)}else i.airborne+=t,i.grounded=0;d1(i,t);let g=Math.hypot(i.wx,i.wy,i.wz),_=Math.hypot(i.vx,i.vy,i.vz);if(i.phase==="air"&&p&&i.grounded>.12&&g<1.1&&_<.7){i.phase="down",i.settleFor=0;let x=y[6],v=y[8];x*x+v*v<.04&&(x=y[3],v=y[5]),i.yawOut=Math.atan2(x,v)}if(i.phase==="down"){if(i.settleFor+=t,i.settleFor<.45){let x=Math.min(1,t*7);f1(i,x),fa(i)}i.vx*=Math.exp(-5*t),i.vz*=Math.exp(-5*t),i.wx*=Math.exp(-6*t),i.wy*=Math.exp(-6*t),i.wz*=Math.exp(-6*t),i.settleFor>i.restFor+.45&&(i.phase="rise",i.riseT=0,i.riseFrom={qx:i.qx,qy:i.qy,qz:i.qz,qw:i.qw,y:i.y,pose:{...i.pose}})}}function f1(i,t){let e=i.yawOut/2,n=Math.sin(e),s=Math.cos(e),r=i.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=s*r,l=n*o,c=-n*r,u=s*o,h=i.qx*a+i.qy*l+i.qz*c+i.qw*u,f=a,d=l,m=c,y=u;h<0&&(f=-f,d=-d,m=-m,y=-y),i.qx+=(f-i.qx)*t,i.qy+=(d-i.qy)*t,i.qz+=(m-i.qz)*t,i.qw+=(y-i.qw)*t;let p=1/(Math.hypot(i.qx,i.qy,i.qz,i.qw)||1);i.qx*=p,i.qy*=p,i.qz*=p,i.qw*=p}function d1(i,t){let e=i.col,n=-e[1],s=-e[4],r=-e[7],o=Math.asin(ha(n,-1,1)),a=Math.atan2(-r,-s),l=i.pose,c=i.vel,u=i.phase==="down"?1:0;for(let h=0;h<yr.length;h++){let f=yr[h],d=f[0],m=f[1],y=f[2],p=f[6],g=f[3]*(1+u*.6),_=f[4]*(1+u*1.4),x=f[5],v=x==="swing"?ha(a+p,m,y):x==="lean"?ha(o+p,m,y):x==="slack"?p:0,S=c[d]+(g*(v-l[d])-_*c[d])*t,w=l[d]+S*t;w<m?(w=m,S*=-.18):w>y&&(w=y,S*=-.18),c[d]=S,l[d]=w}}function p1(i,t){i.riseT+=t;let e=Math.min(1,i.riseT/i.riseFor),n=i.riseFrom,s=e*e*(3-2*e),r=i.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;i.qx=n.qx+(h*o-n.qx)*s,i.qy=n.qy+(h*a-n.qy)*s,i.qz=n.qz+(h*l-n.qz)*s,i.qw=n.qw+(h*c-n.qw)*s;let f=1/(Math.hypot(i.qx,i.qy,i.qz,i.qw)||1);i.qx*=f,i.qy*=f,i.qz*=f,i.qw*=f,fa(i);let d=.46*i.hipRest;i.y=e<.5?n.y+(d-n.y)*jf(e/.5):d+(i.hipRest-d)*jf((e-.5)/.5);let m=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[y]of yr){let p=n.pose[y],g=0;y==="kneeL"||y==="kneeR"?g=m:y==="hipLs"||y==="hipRs"?g=-m*.75:y==="spine"?g=-.35*(1-s):y==="shLz"?g=.18:y==="shRz"&&(g=-.18),i.pose[y]=p+(g-p)*s,i.vel[y]=0}e>=1&&(i.done=!0)}var jf=i=>i*i*(3-2*i);var m1=[12999502,5144518,5873770,13018190,9068230,5155270],g1=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],x1=.34,Qf=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function td(i){return(.2126*(i>>16&255)+.7152*(i>>8&255)+.0722*(i&255))/255}var y1=.15,v1=[15782580,15254430,14132856,12091218,9263675,6307884],_1=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],M1=[9187114,2903932,1907999,4156229,11576460,7166860],ed=[1710620,2565160,3813160,4539722],b1=[3881528,5916214,3095882,7037527,8011578],w1=.34,S1=1.75;var Es=.43,Ts=.42,ih=.058,E1=.085,T1=.092,nd=.372,A1=.44,R1=.196,sh=.3,rh=.265,n_=Es+Ts+ih;function C1(i){let t=i()<.5,e=t?1.58+i()*.16:1.7+i()*.18;return{female:t,scale:e/S1,shoulder:t?.88+i()*.07:1+i()*.11,depth:.92+i()*.26,hipW:t?1.04+i()*.1:.94+i()*.08,limb:(t?.9:1)+i()*.14}}function I1(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wn(i){let t=0,e=0;for(let c of i)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of i){n.set(c.attributes.position.array,o*3),s.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new se;return l.setAttribute("position",new me(n,3)),l.setAttribute("normal",new me(s,3)),l.setIndex(new me(r,1)),l.computeVertexNormals(),l}function da(i,t,e,n=6){let s=new ne(i,t,e,n,1,!1);return s.translate(0,-e/2,0),s}function pa(i,t=6,e=4){return new un(i,t,e)}function vr(i,t,e){return new Ht(i,t,e)}function P1(){let i=pa(.1,9,6);i.scale(.84,1.13,1.16),i.translate(0,.176,.008);let t=vr(.102,.072,.112);t.translate(0,.12,.04);let e=new ne(.05,.058,.09,6);e.translate(0,.045,-.008);let n=vr(.024,.028,.034);n.translate(0,.158,.122);let s=wn([e,t,i,n]),r=new un(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=wn([r]),a=vr(.175,.22,.062);a.translate(0,.005,-.062);let l=wn([a]),c=T=>{let M=new Co(T.map(([b,C])=>new It(b,C)),8);return M.scale(1,1,.66),M},u=wn([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=wn([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=wn([pa(.049),da(.047,.04,sh)]),m=da(.037,.031,rh+f);m.translate(0,f,0);let y=pa(.044,5,4);y.scale(.85,1.25,.62),y.translate(0,-rh-.035,0);let p=wn([m,y]),g=wn([pa(.086),da(.082,.06,Es)]),_=da(.057,.043,Ts+.06);_.translate(0,.06,0);let x=wn([_]),v=vr(.088,.055,.235);v.translate(0,-.03,.052);let S=wn([v]),w=vr(.24,.28,.13);w.translate(0,-.15,0);let E=wn([w]);return{head:s,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:p,thigh:g,shin:x,foot:S,bag:E}}function L1(i,t,e,n,s,r,o){let a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,m=0,y=-l,p=l*u,g=c,_=a*u,x=l*c,v=-u,S=a*c;i[0]=d*h+p*f,i[1]=m*h+g*f,i[2]=y*h+_*f,i[3]=-d*f+p*h,i[4]=-m*f+g*h,i[5]=-y*f+_*h,i[6]=x,i[7]=v,i[8]=S,i[9]=t,i[10]=e,i[11]=n}function D1(i,t,e,n,s){i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=e,i[10]=n,i[11]=s}function Ss(i,t,e,n,s,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],m=t[6],y=t[7],p=t[8];i[9]=t[9]+l*e+h*n+m*s,i[10]=t[10]+c*e+f*n+y*s,i[11]=t[11]+u*e+d*n+p*s;let g=Math.cos(a),_=Math.sin(a),x=Math.cos(r),v=Math.sin(r),S=Math.cos(o),w=Math.sin(o),E=g,T=-_,M=_*v,b=x,C=g*v,U=E*S+M*w,z=b*w,D=T*S+C*w,k=-E*w+M*S,L=b*S,H=-T*w+C*S,O=_*x,q=-v,K=g*x;i[0]=l*U+h*z+m*D,i[1]=c*U+f*z+y*D,i[2]=u*U+d*z+p*D,i[3]=l*k+h*L+m*H,i[4]=c*k+f*L+y*H,i[5]=u*k+d*L+p*H,i[6]=l*O+h*q+m*K,i[7]=c*O+f*q+y*K,i[8]=u*O+d*q+p*K}function Ui(i,t,e,n){let s=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];i[9]=t[9]+a*e,i[10]=t[10]+l*e,i[11]=t[11]+c*e;let d=Math.cos(n),m=Math.sin(n);i[0]=s,i[1]=r,i[2]=o,i[3]=a*d+u*m,i[4]=l*d+h*m,i[5]=c*d+f*m,i[6]=-a*m+u*d,i[7]=-l*m+h*d,i[8]=-c*m+f*d}function Ve(i,t,e,n,s,r){let o=i.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*s,o[a+5]=e[4]*s,o[a+6]=e[5]*s,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function ma(i,t){let e=i.instanceMatrix.array,n=t*16;for(let s=0;s<16;s++)e[n+s]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var id=(i,t,e)=>i<t?t:i>e?e:i;function sd(i,t=20260919){let e=I1(t),n=P1(),s=new Xt,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let x of o)r[x]=new Se(n[a[x]],s,i);let l=o.map(x=>r[x]),c=new ie;for(let x of l)x.instanceMatrix.setUsage(ju),x.frustumCulled=!1,c.add(x);for(let x of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])x.castShadow=!0;let u=new At,h=x=>x[e()*x.length|0],f=[];for(let x=0;x<i;x++){let v=C1(e),S={phase:e()*Math.PI*2,build:v,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<w1,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:ua(),rag:null};f.push(S);let w=e()<x1,E=h(w?m1:g1),T=h(Qf);for(let D=0;D<10&&Math.abs(td(T)-td(E))<y1;D++)T=h(Qf);let M=h(v1),b=e()<.1,C=e()<.14;S.longHair=!b&&!C&&e()<.34,S.bald=b,S.hatted=C;let U=e()<.45?E:M;r.chest.setColorAt(x,u.setHex(E)),r.armL.setColorAt(x,u.setHex(E)),r.armR.setColorAt(x,u.setHex(E)),r.foreL.setColorAt(x,u.setHex(U)),r.foreR.setColorAt(x,u.setHex(U)),r.head.setColorAt(x,u.setHex(M)),r.pelvis.setColorAt(x,u.setHex(T)),r.thighL.setColorAt(x,u.setHex(T)),r.thighR.setColorAt(x,u.setHex(T)),r.shinL.setColorAt(x,u.setHex(T)),r.shinR.setColorAt(x,u.setHex(T)),r.footL.setColorAt(x,u.setHex(h(ed))),r.footR.setColorAt(x,u.setHex(h(ed)));let z=h(C?M1:_1);r.hair.setColorAt(x,u.setHex(z)),r.hairLong.setColorAt(x,u.setHex(z)),r.bag.setColorAt(x,u.setHex(h(b1)))}for(let x of l)x.instanceColor&&(x.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function m(x){return .2+.26*Math.min(1.7,x.gait)}function y(x,v,S){let w=x.phase,E=Math.sin(w),T=Math.cos(w),M=m(x)*(x.idle>0?0:1),b=Math.max(0,x.gait-1),C=M*E,U=-M*E;v.hipLs=C,v.hipRs=U,v.kneeL=p(w,M,b),v.kneeR=p(w+Math.PI,M,b);let z=.62,D=.38,k=-(C+v.kneeL),L=-(U+v.kneeR);v.ankL=id(k+z*Math.max(0,E)**1.4-D*Math.max(0,-E)**1.6,-1.05,.4),v.ankR=id(L+z*Math.max(0,-E)**1.4-D*Math.max(0,E)**1.6,-1.05,.4),v.hipLz=.02,v.hipRz=-.02;let H=-C*.62*x.swagger*(1+b*.5);v.shLs=H,v.shRs=-H;let O=.11+(x.build.shoulder-.95)*.35+b*.06;v.shLz=O,v.shRz=-O,v.elbL=.34+2.05*Math.max(0,-H)-.18*Math.max(0,H)+b*.55,v.elbR=.34+2.05*Math.max(0,H)-.18*Math.max(0,-H)+b*.55,x.bag&&(x.bagSide>0?(v.shLs*=.25,v.elbL=.32,v.shLz=O*1.5):(v.shRs*=.25,v.elbR=.32,v.shRz=-O*1.5)),v.twist=-.26*E*(1+b*.4),v.spine=-.02+.03*Math.abs(T)+Math.sin(S*1.6+x.phase*.1)*.012,v.spineZ=.035*T,v.headZ=-v.spineZ*.8,v.neck=.13-v.spine*.5}function p(x,v,S){let w=Math.max(0,-Math.cos(x)),E=Math.max(0,Math.sin(x));return .08+(2.1+S*1.4)*v*w**1.15+(.75+S)*v*E**2}function g(x,v){let S=.062*Math.max(0,-x.ankL),w=.062*Math.max(0,-x.ankR),E=Es*Math.cos(x.hipLs)+Ts*Math.cos(x.hipLs+x.kneeL)+ih+S,T=Es*Math.cos(x.hipRs)+Ts*Math.cos(x.hipRs+x.kneeR)+ih+w;return Math.max(E,T)*v}function _(x,v,S){let w=v.build,E=w.scale,T=w.limb*E,M=d.root;Ss(d.chest,M,0,T1*E,0,S.spine,S.spineZ,S.twist),Ss(d.head,d.chest,0,A1*E,0,S.neck,S.headZ,S.headYaw);let b=R1*w.shoulder*E;Ss(d.armL,d.chest,b,nd*E,0,S.shLs,S.shLz,0),Ss(d.armR,d.chest,-b,nd*E,0,S.shRs,S.shRz,0),Ui(d.foreL,d.armL,-sh*E,-S.elbL),Ui(d.foreR,d.armR,-sh*E,-S.elbR);let C=E1*w.hipW*E;if(Ss(d.thighL,M,C,0,0,S.hipLs,S.hipLz,0),Ss(d.thighR,M,-C,0,0,S.hipRs,S.hipRz,0),Ui(d.shinL,d.thighL,-Es*E,S.kneeL),Ui(d.shinR,d.thighR,-Es*E,S.kneeR),Ui(d.footL,d.shinL,-Ts*E,S.ankL),Ui(d.footR,d.shinR,-Ts*E,S.ankR),Ve(r.pelvis,x,M,E*w.hipW,E,E*w.depth),Ve(r.chest,x,d.chest,E*w.shoulder,E,E*w.depth),Ve(r.head,x,d.head,E,E,E),v.bald?ma(r.hair,x):Ve(r.hair,x,d.head,E*(v.hatted?1.1:1),E*(v.hatted?1.12:1),E*(v.hatted?1.1:1)),v.longHair?Ve(r.hairLong,x,d.head,E,E,E):ma(r.hairLong,x),Ve(r.armL,x,d.armL,T,E,T),Ve(r.armR,x,d.armR,T,E,T),Ve(r.foreL,x,d.foreL,T,E,T),Ve(r.foreR,x,d.foreR,T,E,T),Ve(r.thighL,x,d.thighL,T,E,T),Ve(r.thighR,x,d.thighR,T,E,T),Ve(r.shinL,x,d.shinL,T,E,T),Ve(r.shinR,x,d.shinR,T,E,T),Ve(r.footL,x,d.footL,T,E,T),Ve(r.footR,x,d.footR,T,E,T),v.bag){let U=v.bagSide>0?d.foreL:d.foreR,z=v.bagSide>0?S.elbL:S.elbR;Ui(d.bag,U,-(rh+.05)*E,z*.5),Ve(r.bag,x,d.bag,E,E,E)}else ma(r.bag,x)}return{group:c,people:f,rand:e,count:i,drawWalking(x,v,S,w,E,T){let M=f[x],b=M.build.scale;y(M,M.pose,T),L1(d.root,v,S+g(M.pose,b),w,E+.12*Math.sin(M.phase)*(M.idle>0?0:1),M.lean+.12*Math.max(0,M.gait-1),.022*Math.cos(M.phase)),_(x,M,M.pose)},drawRagdoll(x,v,S){D1(d.root,v.col,v.x,S+v.y,v.z),_(x,f[x],v.pose)},hideAt(x){for(let v of l)ma(v,x)},commit(){for(let x of l)x.instanceMatrix.needsUpdate=!0}}}var As=90,oh=i=>i.cls>=kt.PRIMARY&&!(i.flags&(Ut.LINK|Ut.TUNNEL|Ut.PRIVATE))&&i.cls!==kt.TRACK,ga=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=sd(As),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<As;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=As-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(As,t)}latTarget(t,e){return t.flags&Ut.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let s=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=s.nearest(c,u,45,oh);if(!h)continue;let f=s.ways[h.wi];if(f.cls<=kt.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let s=this.R,r=s.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=s.nx[o],c=s.nz[o],u=s.nx[a],h=s.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,m=(h-c)/f,y=t.dir>0?t.s:f-t.s,p=l+d*y-m*t.lat,g=c+m*y+d*t.lat,_=n?1:Math.min(1,e*5),x=t.x,v=t.z;t.x+=(p-t.x)*_,t.z+=(g-t.z)*_;let S=t.x-x,w=t.z-v;if(n)t.h=Math.atan2(d*t.dir,m*t.dir);else if(S*S+w*w>1e-7){let M=Math.atan2(S,w)-t.h;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;t.h+=M*Math.min(1,e*8)}let E=Math.abs(t.lat)<r.width/2+.2;t.onRoad=E&&!(r.flags&Ut.NOCAR);let T=Math.min(1,Math.max(0,y/f));t.y=E?s.heightOn(t.wi,t.k,T,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[s,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===Kt.CROSSING||e.ntag[r]===Kt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&Ut.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[s],e.nz[r]-e.nz[s]),l=[];for(let _=e.adjStart[r];_<e.adjStart[r+1];_++){let x=e.adjWay[_],v=e.adjPos[_],S=e.ways[x];if(!(!oh(S)||S.cls<=kt.SECONDARY&&S.limit>50))for(let[w,E,T]of[[v,1,S.nodes[v+1]],[v-1,-1,S.nodes[v-1]]]){if(T===void 0||x===t.wi&&w===t.k)continue;let M=Math.atan2(e.nx[T]-e.nx[r],e.nz[T]-e.nz[r])-a;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;l.push({wi:x,k:w,dir:E,wgt:(Math.abs(M)<.5?3:Math.abs(M)>2.6?.1:1)*(S.flags&Ut.NOCAR?2.5:1)*(S.cls>=kt.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((_,x)=>_+x.wgt,0),u=l[l.length-1];for(let _ of l)if(c-=_.wgt,c<=0){u=_;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],m=e.nx[d]-e.nx[f],y=e.nz[d]-e.nz[f],p=Math.hypot(m,y)||1,g=((t.x-e.nx[f])*-y+(t.z-e.nz[f])*m)/p;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=g>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,g))}update(t,e,n,s,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<As;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<As;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){nh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let S=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,S),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,m=null;for(let S of s){let w=h.x-S.x,E=h.z-S.z,T=w*w+E*E;if(T>900)continue;let M=Math.hypot(S.vx,S.vz),b=Math.sin(S.h),C=Math.cos(S.h),U=w*b+E*C,z=w*C-E*b;if(Math.abs(U)<S.halfL+.25&&Math.abs(z)<S.halfW+.25)M>1.6?m=S:(h.x+=(z>=0?C:-C)*.05,h.z+=(z>=0?-b:b)*.05);else if(M>2.5){let D=S.vx/M,k=S.vz/M,L=w*D+E*k,H=Math.abs(w*k-E*D);L>0&&L<4+M*1.4&&H<S.halfW+1.3&&(d=!0,h.fleeSide=w*k-E*D>=0?1:-1,h.fdx=k*h.fleeSide,h.fdz=-D*h.fleeSide)}if(r&&S.player&&T<400){let D=Math.max(M,1);(w*(S.vx||b)+E*(S.vz||C))/D>-2&&(d=!0,h.fdx=z>=0?C:-C,h.fdz=z>=0?-b:b)}}if(m){let S=Math.hypot(m.vx,m.vz),w=m.vx/S,E=m.vz/S,T=h.x-m.x,M=h.z-m.z,b=Math.hypot(T,M)||1;h.rag=eh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:w,travelZ:E,awayX:T/b,awayZ:M/b,speed:S,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,S,m),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let y=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let S=this.world.collision.resolveCircle(h.x,h.z,.3);S&&(h.x+=S.nx*S.depth,h.z+=S.nz*S.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let p=this.latTarget(f,h.side);if(h.wait>0){let S=!1;for(let w of s){let E=Math.hypot(w.vx,w.vz);if(E<1.5)continue;let T=h.x-w.x,M=h.z-w.z,b=Math.hypot(T,M);b<12+E*3&&(T*w.vx+M*w.vz)/(b*E)>.5&&(S=!0)}h.wait+=t,!S||h.wait>9?h.wait=0:y=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,p-h.lat)));let g=Math.abs(p-h.lat)>.3,_=g?y*.25:y;h.gait+=((y>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=_*t;let x=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(_,g&&y>0?1.2:0)/Math.max(.25,x);let v=0;for(;v++<6;){let[S,w]=this.ends(h),E=Math.hypot(o.nx[w]-o.nx[S],o.nz[w]-o.nz[S]);if(h.s<E)break;h.s-=E,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,s,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,s,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,oh);if(!n){t.alive=!1;return}let s=e.ways[n.wi],r=s.cum[n.k+1]-s.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(s=>s.alive&&!s.rag&&Math.hypot(s.x-t,s.z-e)<n)}};var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var on=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U1=new gs(-1,1,1,-1,0,1),ah=class extends se{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},N1=new ah,di=class{constructor(t){this._mesh=new Rt(N1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,U1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ya=class extends on{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ci.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _r=class extends on{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},va=class extends on{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _a=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ya(xa),this.copyPass.material.blending=Rn,this.clock=new Oo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_r!==void 0&&(o instanceof _r?n=!0:o instanceof va&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ma=class extends on{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var rd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Rs=class i extends on{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,o,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ye(r,o,{type:_n});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ye(r,o,{type:_n});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=rd;this.highPassUniforms=ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=xa;this.copyUniforms=ci.clone(u.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new Oe,this.fsQuad=new di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Rs.BlurDirectionX=new It(1,0);Rs.BlurDirectionY=new It(0,1);var od={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ba=class extends on{constructor(){super();let t=od;this.uniforms=ci.clone(t.uniforms),this.material=new Po({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ic?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mt=i=>document.getElementById(i),Cs={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132},mid:{viewTiles:2,shadows:!0,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288},high:{viewTiles:3,shadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432}},R={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},wr=()=>R.foot.on?R.foot:R.vehicle;window.BDS=R;async function z1(){let i=(a,l)=>{Mt("loadbar").style.width=(a*100).toFixed(0)+"%",l&&(Mt("loadmsg").textContent=l)};i(.05,"Caricamento della cartografia reale\u2026");let t=0,e=a=>a.then(l=>(t++,i(.05+t/4*.6),l)),[n,s,r,o]=await Promise.all([e(Ii("meta","data/meta.js")),e(Ii("roads","data/roads.js")),e(Ii("height","data/height.js")),e(Ii("landcover","data/landcover.js"))]);i(.7,"Costruzione della rete stradale ("+s.ways.length.toLocaleString("it")+" vie OSM)\u2026"),await new Promise(a=>setTimeout(a,20)),R.meta=n,R.proj=new Xo(n.proj),R.terrain=new qo(n,r,o),R.roads=new Zo(s,R.terrain,n),i(.9,"Preparazione del navigatore\u2026"),await new Promise(a=>setTimeout(a,20)),R.router=new aa(R.roads),i(1,"Pronto"),Mt("loading").classList.add("hidden"),ph()}function F1(i,t){let e=R.roads,n=e.streets.get(i)||[],s=null;for(let r of n){let o=R.world.comuneAt(r.x,r.z);t&&o!==t||(!s||r.len>s.len)&&(s=r)}return s}var Sa={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function O1(){let i=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(i.get("lat")||t.lat||0),n=+(i.get("lon")||t.lon||0);return e&&n?(R.pickedStart=R.proj.fromLatLon(e,n),"picked"):null}function B1(){let i=R.meta,t=[];t.push({id:"casa",label:Sa.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of i.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=i.comuni.map(n=>n.n).filter(n=>!i.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function ph(){Mt("menu").classList.remove("hidden");let t=Mt("cars");t.innerHTML="",xr.forEach((n,s)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(s===R.carIdx?" sel":""),r.innerHTML=`<div class="sw" style="background:${n.color}"></div><b>${n.name}</b><small>${n.desc}</small>
      <div class="spec"><span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span></div>`,r.onclick=()=>{R.carIdx=s,[...t.children].forEach(o=>o.classList.toggle("sel",o===r))},t.appendChild(r)});let e=Mt("start");e.innerHTML="";for(let n of B1()){let s=document.createElement("option");s.value=n.id,s.textContent=n.label,e.appendChild(s)}if(R.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}Mt("go").onclick=()=>W1(),Mt("pickstart").onclick=()=>{fd(),md("start")}}function fd(){if(R.renderer)return;let i=Mt("game"),t=Cs[Mt("quality").value]||Cs.mid;R.settings={...t};let e=new _o({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=Cc,e.toneMapping=lr,e.toneMappingExposure=1.2,R.renderer=e;let n=new bo;R.scene=n,R.camera=new Fe(62,innerWidth/innerHeight,.5,5e3),R.sky=new ea(n,R.meta.proj.lat0),R.world=new ta(n,R.meta,R.terrain,R.roads,R.settings),R.traffic=new oa(R.world),R.world.traffic=R.traffic,n.add(R.traffic.group),R.peds=new ga(R.world),R.peds.setTarget(t.peds),R.peds.onHit=(r,o,a)=>{a.player&&fh("ped",o)},n.add(R.peds.group),t.bloom&&(R.composer=new _a(e),R.composer.addPass(new Ma(n,R.camera)),R.bloom=new Rs(new It(innerWidth,innerHeight),0,.4,.82),R.composer.addPass(R.bloom),R.composer.addPass(new ba));let s=null;i.addEventListener("mousedown",r=>{s=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{s=null}),addEventListener("mousemove",r=>{!s||R.mapOpen||R.paused||!R.started||(R.orbit.yaw-=(r.clientX-s[0])*.006,R.orbit.pitch=Math.max(-.25,Math.min(1.1,R.orbit.pitch+(r.clientY-s[1])*.004)),R.orbit.idle=0,s=[r.clientX,r.clientY])}),R.maps=new la(R.world,R.meta),R.input=new ra,R.audio=new ca,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),R.composer&&R.composer.setSize(innerWidth,innerHeight),R.camera.aspect=innerWidth/innerHeight,R.camera.updateProjectionMatrix(),R.mapOpen&&(R.maps.resizeBig(),R.mapDirty=!0)}),$1(),J1(),requestAnimationFrame(xd)}function Aa(i){let t=R.roads,e=R.world,n=(s,r,o=!1)=>{let a=t.ways[s],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let m=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,y=t.laneCenter(a,m?1:-1);return{x:l-Math.cos(d)*y,z:c+Math.sin(d)*y,h:d}};if(i==="picked"&&R.pickedStart){let s=t.nearest(R.pickedStart[0],R.pickedStart[1],300,r=>r.drivable&&r.cls<=kt.SERVICE);if(s)return n(s.wi,(t.ways[s.wi].cum[s.k]+(t.ways[s.wi].cum[s.k+1]-t.ways[s.wi].cum[s.k])*s.t)/t.ways[s.wi].len)}if(i==="casa"){if(O1()==="picked")return Aa("picked");let s=-1;if(t.ways.forEach((r,o)=>{if(r.name!==Sa.street||!r.drivable||r.cls>kt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===Sa.comune&&(s<0||r.len>t.ways[s].len)&&(s=o)}),s>=0)return n(s,Sa.frac);i="comune:Giussano"}if(i==="viamilano"){let s=F1("Via Milano","Giussano");if(s)return n(s.wi,.35,!0);i="comune:Giussano"}if(i.startsWith("comune:")){let s=i.slice(7),r=R.meta.places.find(c=>c.n===s&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=R.maps.comuni.find(u=>u.n===s);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=kt.RESIDENTIAL&&c.cls>=kt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function dd(i=xr[R.carIdx],t=null){R.carModel&&R.scene.remove(R.carModel.root),R.vehicle=new sa(i,R.world),R.carModel=Zf(i,{interior:!0,color:t}),R.scene.add(R.carModel.root),R.lightsOn=!1}var ad={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},pd=()=>({halfL:R.vehicle.spec.L/2,halfW:R.vehicle.spec.W/2});function k1(){let i=R.vehicle,t=R.foot;if(Math.abs(i.u)>2.5){We("Fermati prima di scendere",1200);return}let e=Math.cos(i.h),n=-Math.sin(i.h);t.x=i.x+e*(i.spec.W/2+.75),t.z=i.z+n*(i.spec.W/2+.75),t.h=i.h,t.u=0,t.y=i.y,t.on=!0,(R.camMode===1||R.camMode===2)&&(R.camMode=0),R.orbit.yaw=0,R.camInit=!0,We("A piedi \u2014 F per salire su un veicolo",1800)}function H1(){let i=R.foot,t=R.vehicle,e=R.traffic,n=Math.hypot(t.x-i.x,t.z-i.z)-t.spec.W/2,s=e.nearestCar(i.x,i.z,2.6),r=e.nearestParked(i.x,i.z,2.6),o=s?Math.hypot(s.x-i.x,s.z-i.z)-s.box.halfW:1e9,a=r?Math.hypot(r.x-i.x,r.z-i.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){We("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=R.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:pd(),model:c}),R.carModel=null,e.statics.length>6){let d=e.statics.shift();R.scene.remove(d.model.root)}let u=l===o?e.take(s):e.takeParked(r),h=ad[u.type]||ad.car,f=xr.find(d=>d.id===h[u.colour%h.length]);dd(f,"#"+Kc[u.colour%Kc.length].toString(16).padStart(6,"0")),R.vehicle.place(u.x,u.z,u.h),We(f.name,1500)}i.on=!1,R.orbit.yaw=0,R.camInit=!0}function G1(i,t){let e=R.foot,n=R.input.keys,s=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*i;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(s?6.2:2.3);e.u+=(o-e.u)*Math.min(1,i*8),e.x+=Math.sin(e.h)*e.u*i,e.z+=Math.cos(e.h)*e.u*i;let a={x:R.vehicle.x,z:R.vehicle.z,h:R.vehicle.h,box:pd()};for(let l=0;l<2;l++){let c=R.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),R.traffic.statics.push(a);let u=R.traffic.resolveCircle(e.x,e.z,.32);R.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=R.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function fh(i,t,e=i){let n=performance.now();if(R.cool[e]&&n-R.cool[e]<(i==="camera"?2e4:5e3))return;R.cool[e]=n;let s=0,r=0,o="";if(i==="ped")s=870,r=8,o="Hai urtato un pedone!";else if(i==="red")s=167,r=6,o="Passaggio con il rosso";else if(i==="camera"){let a=t;a<=10?(s=42,r=0):a<=40?(s=173,r=3):a<=60?(s=543,r=6):(s=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=Mt("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}R.fines+=s,R.licence-=r,We(`\u{1F6A8} ${o} \u2014 multa \u20AC ${s}${r?`, \u2212${r} punti`:""}`,3200),R.licence<=0&&(R.licence=20,setTimeout(()=>We("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),Mt("licence").textContent=`\u{1FAAA} ${R.licence} punti \xB7 multe \u20AC ${R.fines.toLocaleString("it")}`}function V1(i,t,e){if(R.foot.on||!i.surface||!i.surface.road)return;let n=R.roads,s=i.surface.road,r=n.ways[s.wi];if(i.u>3)for(let o of[r.nodes[s.k],r.nodes[s.k+1]]){if(n.ntag[o]!==Kt.SIGNALS||Math.hypot(n.nx[o]-i.x,n.nz[o]-i.z)>4.5)continue;let a=Math.sin(i.h),l=Math.cos(i.h);fr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&fh("red",0,"red"+o)}if(t>r.limit+5)for(let o of R.world.cameras)Math.hypot(o.x-i.x,o.z-i.z)<16&&fh("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function W1(){R.audio&&R.audio.start(),fd(),R.settings.viewTiles=(Cs[Mt("quality").value]||Cs.mid).viewTiles,R.traffic.target=+Mt("traffic").value,Mt("ptraffic").value=Mt("traffic").value,R.sky.hours=+Mt("tod").value,dd();let i=Aa(Mt("start").value);R.vehicle.place(i.x,i.z,i.h),R.traffic.clear();for(let t of R.traffic.statics)R.scene.remove(t.model.root);R.traffic.statics=[],R.foot.on=!1,R.orbit.yaw=0,R.orbit.pitch=0,R.peds.setTarget((Cs[Mt("quality").value]||Cs.mid).peds),R.camInit=!0,Mt("menu").classList.add("hidden"),Mt("hud").classList.remove("hidden"),R.started=!0,R.paused=!1,R.loadingWorld=!0,We("Caricamento della zona\u2026",1500),R.audio.start()}function X1(){let i=R.vehicle,t=R.roads,e=t.nearest(i.x,i.z,300,a=>a.drivable&&a.cls<=kt.SERVICE);if(!e)return;let n=t.ways[e.wi],s=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[s],t.nz[r]-t.nz[s]);!n.oneway&&Math.cos(o-i.h)<0&&(o+=Math.PI),i.place(e.px,e.pz,o),We("Rimesso in strada",1200)}var Ea=0;function We(i,t=2500){let e=Mt("toast");e.textContent=i,e.classList.add("show"),Ea=performance.now()+t}function br(i){if(!(!R.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(i);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var q1={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function Ta(i){return i>=1e3?(i/1e3).toFixed(i>=1e4?0:1).replace(".",",")+" km":Math.round(i/10)*10+" m"}function Y1(i){let t=wr();if(!R.route){Mt("nav").classList.add("hidden");return}let e=R.route,n=Kf(e,t.x,t.z);if(n.off>40){if(R.offT=(R.offT||0)+i,R.offT>2.5){R.offT=0,mh(!0);return}}else R.offT=0;let s=e.length-n.s;if(s<25){We("\u{1F3C1} Sei arrivato a destinazione!",4e3),br("Sei arrivato a destinazione"),R.route=null,R.dest=null,Mt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);Mt("nav").classList.remove("hidden"),Mt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":q1[r.type]||"\u2B06",Mt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",Mt("navd").textContent=Ta(o),Mt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));Mt("naveta").textContent=`Destinazione: ${Ta(s)} \xB7 circa ${Math.max(1,Math.round(s/a/60))} min`,R.lastStep!==r&&(R.lastStep=r,R.announced=0),R.announced===0&&o<400&&o>120&&(R.announced=1,br(`Tra ${Ta(o).replace(","," virgola ")}, ${r.text}`)),R.announced<=1&&o<70&&(R.announced=2,br(r.text))}function mh(i){if(!R.dest)return;let t=wr(),e=R.router.route(t.x,t.z,t.h,R.dest[0],R.dest[1]);if(R.route=e,!e){We("Nessun percorso trovato verso la destinazione");return}R.lastStep=null,i?br("Ricalcolo del percorso"):(We(`Percorso calcolato: ${Ta(e.length)}`),br("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var lh=0,ch=0,hh=performance.now();function Z1(i){let t=wr(),e=R.roads,n=R.vehicle;lh+=i,ch++;let s=performance.now();if(s-hh>1e3&&(Mt("fps").textContent=Math.round(ch*1e3/(s-hh))+" fps",ch=0,hh=s),Ea&&performance.now()>Ea&&(Mt("toast").classList.remove("show"),Ea=0),lh<.1)return;lh=0;let r=Math.abs(t.u*3.6);Mt("spd").textContent=Math.round(r),Mt("gear").textContent=R.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,Mt("gear").style.fontSize=R.foot.on?"14px":"",Mt("rpmbar").style.width=(R.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%";let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let y=e.nearest(t.x,t.z,25,p=>p.drivable);y&&(a=y.wi)}let l=R.world.comuneAt(t.x,t.z);if(a>=0){let y=e.ways[a];Mt("roadname").textContent=e.displayName(y),Mt("limitv").textContent=y.limit,Mt("limit").classList.toggle("hidden",R.foot.on),Mt("limitest").textContent=y.limitMapped?"":"indicativo",Mt("limit").classList.toggle("over",r>y.limit*1.1+3),R.curLimit=y.limit}else Mt("roadname").textContent="Fuori strada",Mt("limit").classList.add("hidden"),R.curLimit=0;let c="",u=1e9;for(let y of R.meta.places){if(y.t==="town"||y.t==="city"||y.t==="locality")continue;let p=Math.hypot(y.x-t.x,y.z-t.z);p<u&&p<700&&(u=p,c=y.n)}Mt("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=R.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,m=["N","NE","E","SE","S","SO","O","NO"];Mt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${m[Math.round(d/45)%8]}`,Mt("alt").textContent="",Mt("clock").textContent="\u{1F552} "+R.sky.clock(),Mt("tspeed").textContent=R.sky.speed===0?"\u23F8":R.sky.speed===1?"1\xD7":R.sky.speed+"\xD7",!R.foot.on&&R.carModel.dashCanvas&&R.camMode===1&&$f(R.carModel.dashCanvas,R.carModel.dashTex,r,n.rpm,n.spec.rpmMax,Mt("gear").textContent,R.curLimit)}function md(i){R.mapOpen=!0,R.mapMode=i||"dest",Mt("mapview").classList.remove("hidden"),R.maps.resizeBig();let t=R.vehicle;if(R.started&&t)R.maps.cx=t.x,R.maps.cz=t.z,R.maps.zoom=.35;else{let e=Aa("casa");R.maps.cx=e.x,R.maps.cz=e.z,R.maps.zoom=.12}Mt("setdest").classList.toggle("hidden",!R.started),Mt("teleport").textContent=R.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",Mt("mapinfo").textContent=R.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",R.mapDirty=!0,Mt("search").value="",Mt("results").innerHTML=""}function Mr(){R.mapOpen=!1,Mt("mapview").classList.add("hidden"),R.started||ph()}function ld(i,t,e){R.mapSel=[i,t];let n=R.world.comuneAt(i,t),s=R.roads.nearest(i,t,150,o=>o.drivable),r=e||(s?R.roads.displayName(R.roads.ways[s.wi]):"Punto selezionato");R.mapSelLabel=r+(n?", "+n:""),Mt("mapinfo").innerHTML=`<b>${R.mapSelLabel}</b><br>${R.proj.toLatLon(i,t).map(o=>o.toFixed(5)).join(", ")}`,R.mapDirty=!0,R.started&&R.mapMode==="dest"&&gd()}function gd(){R.mapSel&&(R.dest=R.mapSel.slice(),mh(!1),R.mapDirty=!0)}function $1(){let i=Mt("bigmap"),t=null,e=!1;i.addEventListener("mousedown",s=>{t=[s.clientX,s.clientY,R.maps.cx,R.maps.cz],e=!1}),addEventListener("mousemove",s=>{if(!t||!R.mapOpen)return;let r=s.clientX-t[0],o=s.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),R.maps.cx=t[2]-r/R.maps.zoom,R.maps.cz=t[3]-o/R.maps.zoom,R.mapDirty=!0}),addEventListener("mouseup",s=>{if(t&&!e&&R.mapOpen&&s.target===i){let[r,o]=R.maps.toWorld(s.clientX,s.clientY);ld(r,o)}t=null}),i.addEventListener("wheel",s=>{s.preventDefault();let[r,o]=R.maps.toWorld(s.clientX,s.clientY),a=Math.exp(-s.deltaY*.0015);R.maps.zoom=Math.max(.03,Math.min(6,R.maps.zoom*a));let[l,c]=R.maps.toWorld(s.clientX,s.clientY);R.maps.cx+=r-l,R.maps.cz+=o-c,R.mapDirty=!0},{passive:!1}),Mt("closemap").onclick=Mr,Mt("setdest").onclick=()=>{gd(),Mr()},Mt("cleardest").onclick=()=>{R.route=null,R.dest=null,R.mapDirty=!0},Mt("teleport").onclick=()=>{if(!R.mapSel)return;if(!R.started){R.pickedStart=R.mapSel.slice(),Mr(),Mt("pickinfo").textContent="Partenza: "+R.mapSelLabel;return}R.pickedStart=R.mapSel.slice();let s=Aa("picked");R.vehicle.place(s.x,s.z,s.h),R.foot.on=!1,R.traffic.clear(),R.camInit=!0,R.loadingWorld=!0,Mr(),R.dest&&mh(!0)};let n=Mt("search");n.addEventListener("input",()=>{let s=n.value.trim().toLowerCase(),r=[];if(s.length>=2){for(let a of R.maps.comuni)a.n.toLowerCase().includes(s)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of R.meta.places)a.n.toLowerCase().includes(s)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of R.meta.landmarks)a[3].toLowerCase().includes(s)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(R.world.comuneAt(a[1],a[2])?" \xB7 "+R.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of R.roads.streets){if(!a.toLowerCase().includes(s))continue;let c=new Map;for(let u of l){let h=R.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}Mt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{R.maps.cx=o.x,R.maps.cz=o.z,R.maps.zoom=Math.max(R.maps.zoom,.8),ld(o.x,o.z,o.n)},Mt("results").appendChild(a)}})}function J1(){Mt("resume").onclick=()=>dh(!1),Mt("tomenu").onclick=()=>{dh(!1),R.started=!1,Mt("hud").classList.add("hidden"),ph()},Mt("ptraffic").onchange=n=>{R.traffic.target=+n.target.value,R.traffic.target||R.traffic.clear()},Mt("ptime").onchange=n=>{R.sky.speed=+n.target.value},Mt("pvoice").onchange=n=>{R.voice=n.target.value==="1"},Mt("paudio").onchange=n=>{R.audio.muted=n.target.value==="0"};let i=R.input.wheelCfg,t=(n,s)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=s};t(Mt("axsteer"),i.steerAxis),t(Mt("axthr"),i.throttleAxis),t(Mt("axbrk"),i.brakeAxis),Mt("wheelon").checked=i.enabled,Mt("axinv").checked=i.invertPedals;let e=()=>{i.enabled=Mt("wheelon").checked,i.steerAxis=+Mt("axsteer").value,i.throttleAxis=+Mt("axthr").value,i.brakeAxis=+Mt("axbrk").value,i.invertPedals=Mt("axinv").checked,R.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])Mt(n).onchange=e}function dh(i){R.paused=i,Mt("pause").classList.toggle("hidden",!i),i&&(Mt("ptime").value=String(R.sky.speed))}var wa=new B,cd=new B,K1=new B,j1=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function Q1(i,t){let e=R.vehicle,n=R.camera,s=R.carModel,r=R.foot,o=R.orbit,a=r.on?0:R.camMode;if(R.debugCam){n.position.set(...R.debugCam.pos),n.lookAt(...R.debugCam.look),n.near=1,n.updateProjectionMatrix(),s.interior.visible=!1;for(let l of s.exterior)l.visible=!0;return}s.interior.visible=a===1;for(let l of s.exterior)l.visible=a!==1;if(o.idle+=i,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-i*2.5),o.pitch*=Math.exp(-i*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*.75,u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),m=Math.sin(o.pitch),y=K1.set(l.x-Math.sin(f)*c*d,l.y+u+c*m,l.z-Math.cos(f)*c*d),p=R.roads.surfaceAt(y.x,y.z,l.y+3).h;y.y=Math.max(y.y,p+.8),R.camInit&&(wa.copy(y),R.camInit=!1),wa.lerp(y,1-Math.exp(-i*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(wa);let g=r.on?.5:4;cd.set(l.x+Math.sin(f)*g,l.y+h,l.z+Math.cos(f)*g),n.lookAt(cd),n.near=.5}else{let l=a===1?s.root.userData.eye.clone():new B(0,e.spec.H*.82+.05,e.spec.L*.18);s.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(s.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new B(Math.sin(c)*u,(a===1?-.6:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?s.root.userData.eye:new B(0,e.spec.H*.82,0)).applyMatrix4(s.root.matrixWorld);n.lookAt(h),n.near=.08,wa.copy(n.position)}n.updateProjectionMatrix()}var hd=performance.now(),uh=0;function xd(i){requestAnimationFrame(xd);let t=Math.min(.05,(i-hd)/1e3);if(hd=i,!R.renderer)return;if(R.mapOpen){R.input.read(t),(R.input.consume("KeyM")||R.input.consume("Escape"))&&Mr(),R.mapDirty&&(R.maps.drawBig(R.started?wr():null,R.route,R.dest||(R.mapMode==="start"?null:R.mapSel)),R.mapDirty=!1),R.mapSel&&R.mapMode==="start"&&R.started;return}if(!R.started)return;let e=R.input;if(e.consume("Escape")&&dh(!R.paused),R.paused){let p=e.axesSnapshot();Mt("axes").textContent=p?`${p.id}: `+p.axes.map((g,_)=>`${_}:${g.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let n=e.read(t);if((e.consume("KeyC")||n.buttons.has(3))&&(R.camMode=(R.camMode+1)%4,We(j1[R.camMode],1e3)),e.consume("KeyM")||n.buttons.has(8)){md("dest");return}if(e.consume("KeyN")&&Mt("mini-wrap").classList.toggle("hidden"),(e.consume("KeyH")||n.buttons.has(2))&&(R.lightsOn=!R.lightsOn,We(R.lightsOn?"Fari accesi":"Fari spenti",900)),e.consume("KeyR")&&!R.foot.on&&X1(),e.consume("KeyK")&&(R.world.labelsOn=!R.world.labelsOn,We(R.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),e.consume("KeyT")){let p=[30,300,0,1];R.sky.speed=p[(p.indexOf(R.sky.speed)+1)%p.length],We("Velocit\xE0 del tempo: "+(R.sky.speed?R.sky.speed+"\xD7":"ferma"),1e3)}(e.consume("Equal")||e.consume("NumpadAdd"))&&(R.sky.hours=(R.sky.hours+1)%24),(e.consume("Minus")||e.consume("NumpadSubtract"))&&(R.sky.hours=(R.sky.hours+23)%24),(e.consume("KeyF")||e.consume("Enter")||n.buttons.has(1))&&(R.foot.on?H1():k1());let s=!R.foot.on&&(e.keys.has("KeyE")||!!n.hornPad);R.audio.horn(s);let r=R.vehicle,o=R.foot,a=wr();if(R.world.update(a.x,a.z),R.world.pump(R.loadingWorld?40:7),R.loadingWorld)if(R.world.ready(r.x,r.z)){R.loadingWorld=!1;let p=R.roads.surfaceAt(r.x,r.z,1e9);r.y=p.h}else n.throttle=0,n.brake=1;R.loadingWorld||(o.on?(r.update(t,{throttle:0,brake:1,steer:0,handbrake:1}),G1(t,n)):r.update(t,n));let l=Math.sin(r.h),c=Math.cos(r.h),u=Math.cos(r.h),h=-Math.sin(r.h),f=[{x:r.x,z:r.z,h:r.h,vx:l*r.u+u*r.v,vz:c*r.u+h*r.v,halfL:r.spec.L/2,halfW:r.spec.W/2,player:!0}];for(let p of R.traffic.cars)Math.abs(p.x-a.x)<90&&Math.abs(p.z-a.z)<90&&f.push({x:p.x,z:p.z,h:p.h,vx:Math.sin(p.h)*p.speed,vz:Math.cos(p.h)*p.speed,halfL:p.box.halfL,halfW:p.box.halfW});let d=R.loadingWorld?[]:R.peds.update(t,a.x,a.z,f,s);o.on&&d.push([o.x,o.z]),R.traffic.obstacles=d,R.traffic.update(t,{x:r.x,z:r.z,h:r.h,u:r.u,wi:r.surface&&r.surface.road?r.surface.road.wi:-1},i/1e3),R.peds.drawPlayer(o.on,o.x,o.y,o.z,o.h,o.gait,o.u,t);let m=R.carModel;m.root.position.set(r.x,r.y,r.z),m.root.rotation.set(-(r.pitch+r.dynPitch),r.h,r.roll+r.dynRoll,"YXZ");for(let p of m.wheels)p.pivot.rotation.x=r.wheelSpinAngle||0,p.front&&(p.pivot.rotation.y=r.steer);m.steeringWheel&&(m.steeringWheel.rotation.z=-r.steer*7);let y=!o.on&&(R.lightsOn||R.sky.night>.55);m.headlight&&(m.headlight.intensity=y?70:0),m.tailGlow&&(m.tailGlow.intensity=r.brake>.05&&!o.on?2.2:y?.6:0),ud.set(a.x,a.y,a.z),R.sky.update(t,ud),R.world.buildings.setNight(R.sky.night),R.world.signage.update(i/1e3,R.sky.night),R.traffic.setNight(R.sky.night),Q1(t,e.keys.has("KeyV")),R.world.updateLabels(R.camera),Z1(t),Y1(t),V1(r,Math.abs(r.u)*3.6,i),uh+=t,uh>.05&&!Mt("mini-wrap").classList.contains("hidden")&&(uh=0,R.maps.drawMini(a,R.route,R.sky.night>.5)),o.on?R.audio.update(800,0,0,0):R.audio.update(r.rpm,r.throttle,Math.abs(r.u)*3.6,r.slip),r.impact>.25&&!o.on&&We("\u{1F4A5} Urto!",700),r.impact=0,R.composer&&R.sky.night>.2?(R.bloom.strength=R.sky.night*.55,R.composer.render()):R.renderer.render(R.scene,R.camera)}var ud=new B;z1().catch(i=>{console.error(i),Mt("loadmsg").textContent="Errore: "+i.message+" \u2014 apri il gioco con un browser recente (Chrome, Edge, Firefox)."});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
